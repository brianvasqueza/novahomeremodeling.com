import { createHash } from 'node:crypto';
import { Resend } from 'resend';
import { SITE } from '@/data/site';
import { validateContactForm } from '@/lib/contact-form';
import { CONTACT_SENDER, confirmationEmail, inquiryEmail } from '@/lib/contact-emails';
import { contactRetryAfter } from '@/lib/contact-rate-limit';

export const runtime = 'nodejs';
export const maxDuration = 30;

const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
const SEND_ERROR = 'Your request could not be sent. Please try again, or contact Nova directly.';

export async function POST(request: Request) {
  const origin = request.headers.get('origin');
  const allowedOrigins = [new URL(request.url).origin, SITE.url, `https://www.${new URL(SITE.url).hostname}`];
  if (!origin || !allowedOrigins.includes(origin)) return Response.json({ error: 'Please submit the form from the Nova website.' }, { status: 403 });
  if (!request.headers.get('content-type')?.startsWith('application/json')) return Response.json({ error: 'Please submit the website form.' }, { status: 415 });

  let input: Record<string, unknown>;
  try {
    if (Number(request.headers.get('content-length')) > 32768) return Response.json({ error: 'Please shorten your message.' }, { status: 413 });
    const raw = await request.text();
    if (Buffer.byteLength(raw) > 32768) return Response.json({ error: 'Please shorten your message.' }, { status: 413 });
    input = JSON.parse(raw);
    if (!input || typeof input !== 'object' || Array.isArray(input)) throw new Error('Invalid form');
  } catch {
    return Response.json({ error: 'Please check your form and try again.' }, { status: 400 });
  }

  if (input.website || typeof input.submissionId !== 'string' || !UUID.test(input.submissionId)) return Response.json({ error: 'Please refresh the page and try again.' }, { status: 400 });
  const { data, errors } = validateContactForm(input);
  if (Object.keys(errors).length) return Response.json({ error: 'Please check the highlighted fields.', errors }, { status: 400 });

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('Contact form: RESEND_API_KEY is not configured.');
    return Response.json({ error: 'Online inquiries are temporarily unavailable. Please email or call Nova directly.' }, { status: 503 });
  }
  const ip = request.headers.get('x-vercel-forwarded-for')?.split(',')[0].trim()
    || request.headers.get('x-forwarded-for')?.split(',')[0].trim() || 'unknown';
  const fingerprint = createHash('sha256').update(JSON.stringify(data)).digest('hex');
  const retryAfter = contactRetryAfter(ip, data.email, `${input.submissionId}/${fingerprint}`);
  if (retryAfter) return Response.json({ error: 'Please wait a few minutes before sending another request.' }, { status: 429, headers: { 'Retry-After': String(retryAfter) } });

  const resend = new Resend(apiKey);
  const reference = input.submissionId.slice(0, 8).toUpperCase();
  const key = `nova-contact/${input.submissionId}/${fingerprint}`;

  const send = async (email: Parameters<typeof resend.emails.send>[0], kind: 'inquiry' | 'confirmation') => {
    for (let attempt = 0; attempt < 2; attempt++) {
      try {
        const result = await resend.emails.send(email, { idempotencyKey: `${key}/${kind}` });
        if (result.data?.id && !result.error) return true;
        if (attempt === 0 && (result.error?.statusCode === null || result.error?.statusCode === 429 || (result.error?.statusCode ?? 0) >= 500)) {
          await new Promise((resolve) => setTimeout(resolve, 1000));
          continue;
        }
        console.error(`Contact ${kind} failed`, { reference, error: result.error?.name });
        return false;
      } catch {
        if (attempt === 0) continue;
        console.error(`Contact ${kind} request failed`, { reference });
      }
    }
    return false;
  };

  const inquirySent = await send({ from: CONTACT_SENDER, to: SITE.email, replyTo: data.email, ...inquiryEmail(data, reference) }, 'inquiry');
  if (!inquirySent) return Response.json({ error: SEND_ERROR }, { status: 502 });

  // Never acknowledge a request that failed to reach the business's sending service.
  const confirmationSent = await send({ from: CONTACT_SENDER, to: data.email, replyTo: SITE.email, ...confirmationEmail(data, reference) }, 'confirmation');
  return Response.json({ success: true, confirmationSent, reference });
}
