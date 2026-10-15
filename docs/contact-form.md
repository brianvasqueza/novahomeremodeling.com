# Contact form delivery

All pages use `components/sections/Contact.tsx` and submit to `POST /api/contact`.
The existing form layout is preserved. A green success panel replaces the form only
after Resend accepts the notification addressed to Nova.

## Production configuration

- Set `RESEND_API_KEY` in the Nova project's Vercel Production environment.
- The key needs sending access to the verified `novahomeremodeling.com` domain.
- Sender: `Nova Home Remodeling & Design <website@novahomeremodeling.com>`.
- Business recipient: `SITE.email`, currently `brivaqz@gmail.com`.
- Deploy after saving the environment variable. Keep the key out of source control.
- For local delivery testing, use a private `.env.local` with `RESEND_API_KEY`.

## Email behavior

1. Validate and normalize the inquiry on the server.
2. Send Nova an HTML and plain-text email containing all project fields. Its
   Reply-To is the visitor's address.
3. Only after that notification is accepted, send the visitor a branded
   acknowledgment. Its Reply-To is Nova's Gmail address. The acknowledgment does
   not repeat arbitrary visitor-supplied messages or links.
4. Return success and a reference number. If only the acknowledgment fails, the
   website confirms the inquiry was submitted and explains that the confirmation
   email could not be sent; it does not encourage a duplicate submission.

Acceptance by Resend does not guarantee inbox delivery. Check Resend's email logs
for delivered/bounced status when troubleshooting. This implementation sends email;
it does not maintain a separate database of inquiries.

## Validation and retry protection

Server-side length limits, fixed project/budget choices, an origin check, a hidden
honeypot, and a request size limit apply. Basic rate limiting is per server instance
(5 new inquiries per IP and 3 per email in 10 minutes), not a distributed firewall.
Identical retries use Resend idempotency keys for both emails to avoid duplicate
notifications. Changed form data receives different keys and counts as a new request.
The browser disables the form while sending and preserves entries after errors.

## Verification

Run `npm test`, `npm run lint`, and `npm run build`.
Automated API tests mock Resend's HTTP requests; they never send real email.
After deployment, submit a clearly labeled test inquiry using an inbox you control,
check the green confirmation, and confirm both messages and Reply-To addresses.
