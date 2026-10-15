import assert from 'node:assert/strict';
import { randomUUID } from 'node:crypto';
import { test, type TestContext } from 'node:test';
import { POST } from '@/app/api/contact/route';
import { SITE } from '@/data/site';
import { confirmationEmail, inquiryEmail } from '@/lib/contact-emails';
import { validateContactForm } from '@/lib/contact-form';
import { contactRetryAfter } from '@/lib/contact-rate-limit';

let sequence = 0;
function form(overrides: Record<string, unknown> = {}) {
  return {
    name: 'Taylor Homeowner', email: `homeowner-${++sequence}@example.com`, phone: '281-555-0100',
    location: 'Houston, TX', timeline: 'Within three months', scope: ['Bath'], budget: 'Not sure yet',
    message: 'We would like to expand our bathroom and install a shower.',
    website: '', submissionId: randomUUID(), ...overrides,
  };
}
function request(data: unknown, headers: Record<string, string> = {}) {
  return new Request(`${SITE.url}/api/contact`, {
    method: 'POST', headers: { 'Content-Type': 'application/json', origin: SITE.url, 'x-forwarded-for': `192.0.2.${++sequence}`, ...headers },
    body: JSON.stringify(data),
  });
}
function configure(t: TestContext) {
  const previous = process.env.RESEND_API_KEY;
  process.env.RESEND_API_KEY = 're_test_placeholder';
  t.after(() => { if (previous === undefined) delete process.env.RESEND_API_KEY; else process.env.RESEND_API_KEY = previous; });
  t.mock.method(console, 'error', () => {});
}
type SentEmail = { to: string; from: string; reply_to: string; subject: string; html: string; text: string };
function emails(t: TestContext, statuses: number[] = []) {
  const calls: { email: SentEmail; key: string | null }[] = [];
  t.mock.method(globalThis, 'fetch', async (url: string, options: RequestInit) => {
    assert.equal(url, 'https://api.resend.com/emails');
    const email = JSON.parse(options.body as string) as SentEmail;
    calls.push({ email, key: new Headers(options.headers).get('idempotency-key') });
    const status = statuses.shift() ?? 200;
    return status === 200 ? Response.json({ id: `email-${calls.length}` })
      : Response.json({ name: status === 429 ? 'rate_limit_exceeded' : 'validation_error', statusCode: status, message: 'Test provider failure' }, { status });
  });
  return calls;
}

test('sends the full inquiry to Nova before sending the branded customer confirmation', async (t) => {
  configure(t);
  const calls = emails(t);
  const input = form();
  const response = await POST(request(input));
  const result = await response.json();
  assert.equal(response.status, 200);
  assert.equal(result.confirmationSent, true);
  assert.equal(result.reference, input.submissionId.slice(0, 8).toUpperCase());
  assert.equal(calls.length, 2);
  assert.equal(calls[0].email.to, SITE.email);
  assert.equal(calls[0].email.reply_to, input.email);
  assert.ok(calls[0].email.text.includes(input.message));
  assert.equal(calls[1].email.to, input.email);
  assert.equal(calls[1].email.reply_to, SITE.email);
  assert.equal(calls[1].email.from, 'Nova Home Remodeling & Design <website@novahomeremodeling.com>');
  assert.ok(calls[1].email.text.includes('We have received your project inquiry.'));
  assert.ok(!calls[1].email.text.includes(input.message));
  assert.notEqual(calls[0].key, calls[1].key);
});

test('invalid fields, unknown project choices, header injection, and honeypots send no emails', async (t) => {
  configure(t); const calls = emails(t);
  for (const input of [form({ email: 'bad address' }), form({ name: 'Test\r\nBcc: someone@example.com' }), form({ scope: ['Unknown project'] }), form({ budget: 'untrusted' }), form({ message: 'short' }), form({ website: 'bot.example' }), form({ submissionId: 'bad-id' })]) {
    assert.equal((await POST(request(input))).status, 400);
  }
  assert.equal(calls.length, 0);
});

test('rejects off-site, malformed, and oversized requests before sending email', async (t) => {
  configure(t); const calls = emails(t);
  assert.equal((await POST(request(form(), { origin: 'https://other.example' }))).status, 403);
  assert.equal((await POST(request(form(), { 'Content-Type': 'text/plain' }))).status, 415);
  assert.equal((await POST(new Request(`${SITE.url}/api/contact`, { method: 'POST', headers: { origin: SITE.url, 'Content-Type': 'application/json' }, body: '{' }))).status, 400);
  assert.equal((await POST(request(form({ message: 'x'.repeat(33000) })))).status, 413);
  assert.equal(calls.length, 0);
});

test('a missing API key returns an actionable error without claiming success', async (t) => {
  configure(t); delete process.env.RESEND_API_KEY;
  const calls = emails(t);
  const response = await POST(request(form()));
  assert.equal(response.status, 503);
  assert.equal((await response.json()).success, undefined);
  assert.equal(calls.length, 0);
});

test('does not acknowledge a customer when the business notification fails', async (t) => {
  configure(t); const calls = emails(t, [403]);
  const response = await POST(request(form()));
  assert.equal(response.status, 502);
  assert.equal((await response.json()).success, undefined);
  assert.equal(calls.length, 1);
  assert.equal(calls[0].email.to, SITE.email);
});

test('an acknowledgment failure preserves the successful inquiry and reports it accurately', async (t) => {
  configure(t); const calls = emails(t, [200, 403]);
  const response = await POST(request(form()));
  assert.equal(response.status, 200);
  const result = await response.json();
  assert.equal(result.success, true);
  assert.equal(result.confirmationSent, false);
  assert.equal(calls.length, 2);
});

test('retries a transient provider error with the same idempotency key', async (t) => {
  configure(t); const calls = emails(t, [429, 200, 200]);
  const response = await POST(request(form()));
  assert.equal(response.status, 200);
  assert.equal(calls.length, 3);
  assert.equal(calls[0].key, calls[1].key);
  assert.notEqual(calls[1].key, calls[2].key);
});

test('repeating a submission reuses provider keys while edits use different keys', async (t) => {
  configure(t); const calls = emails(t); const input = form();
  await POST(request(input)); await POST(request(input));
  assert.equal(calls[0].key, calls[2].key);
  assert.equal(calls[1].key, calls[3].key);
  await POST(request({ ...input, message: 'Updated project details for the bathroom expansion.' }));
  assert.notEqual(calls[0].key, calls[4].key);
});

test('rate limits new inquiries, permits identical retries, and expires the window', () => {
  const now = Date.now(); const email = 'limit-test@example.com'; const ip = '198.51.100.24';
  for (let i = 0; i < 3; i++) assert.equal(contactRetryAfter(ip, email, `id-${i}`, now), 0);
  assert.equal(contactRetryAfter(ip, email, 'id-0', now), 0);
  assert.ok(contactRetryAfter(ip, email, 'id-3', now) > 0);
  assert.equal(contactRetryAfter(ip, email, 'id-3', now + 600001), 0);
});

test('returns a retry-after response for repeated inquiries to one address', async (t) => {
  configure(t); const calls = emails(t); const email = 'limited-route@example.com';
  for (let i = 0; i < 3; i++) assert.equal((await POST(request(form({ email })))).status, 200);
  const response = await POST(request(form({ email })));
  assert.equal(response.status, 429);
  assert.ok(Number(response.headers.get('retry-after')) > 0);
  assert.equal(calls.length, 6);
});

test('escapes visitor content in HTML and keeps project text out of acknowledgments', () => {
  const malicious = form({ name: 'Taylor <img src=x onerror=alert(1)>', message: 'Please see <script>alert(1)</script> & the attached plan.' });
  const { data } = validateContactForm(malicious);
  const owner = inquiryEmail(data, 'TEST1234'); const customer = confirmationEmail(data, 'TEST1234');
  assert.ok(!owner.html.includes('<script>')); assert.ok(!owner.html.includes('<img src=x'));
  assert.ok(owner.html.includes('&lt;script&gt;')); assert.ok(customer.html.includes('Nova Home Remodeling &amp; Design'));
  assert.ok(!customer.text.includes('attached plan'));
});
