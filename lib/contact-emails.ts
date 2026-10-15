import { SITE } from '@/data/site';
import type { ContactFormData } from '@/lib/contact-form';

export const CONTACT_SENDER = 'Nova Home Remodeling & Design <website@novahomeremodeling.com>';

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character]!);
}

function layout(title: string, content: string, reference: string) {
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${escapeHtml(title)}</title></head>
<body style="margin:0;background:#F6F4EF;color:#0E0E0C;font-family:Arial,Helvetica,sans-serif;line-height:1.65">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr><td align="center" style="padding:32px 16px">
<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:100%;max-width:600px;background:#FFFFFF;border:1px solid #E6E1D6">
<tr><td style="padding:32px 28px;border-top:4px solid #9C7A2E"><p style="margin:0 0 6px;font-size:22px;letter-spacing:5px">NOVA</p><p style="margin:0;font-size:12px;color:#57544E">Home Remodeling &amp; Design</p></td></tr>
<tr><td style="padding:0 28px 28px"><h1 style="font-size:25px;line-height:1.3;font-weight:400;margin:0 0 24px">${escapeHtml(title)}</h1>${content}</td></tr>
<tr><td style="padding:24px 28px;background:#EFEBE3;font-size:13px;color:#3D3B36"><strong>Nova Home Remodeling &amp; Design</strong><br>Houston, TX and surrounding areas<br><a href="${SITE.phoneHref}" style="color:#3D3B36">${SITE.phoneDisplay}</a> · <a href="${SITE.url}" style="color:#3D3B36">${SITE.displayWebsite}</a><br><span style="font-size:11px">Inquiry reference: ${escapeHtml(reference)}</span></td></tr>
</table></td></tr></table></body></html>`;
}

export function inquiryEmail(data: ContactFormData, reference: string) {
  const details = [
    ['Name', data.name], ['Email', data.email], ['Phone', data.phone || 'Not provided'],
    ['Project location', data.location || 'Not provided'], ['Project type', data.scope.join(', ')],
    ['Investment range', data.budget], ['Timeline', data.timeline || 'Not selected'],
  ];
  const htmlDetails = details.map(([label, value]) => `<tr><th scope="row" style="text-align:left;vertical-align:top;padding:8px 12px 8px 0;font-size:13px;color:#57544E">${escapeHtml(label)}</th><td style="padding:8px 0;overflow-wrap:anywhere">${escapeHtml(value)}</td></tr>`).join('');
  return {
    subject: `New project inquiry — ${data.name}`,
    text: [`New inquiry for Nova Home Remodeling & Design`, `Reference: ${reference}`, '', ...details.map(([label, value]) => `${label}: ${value}`), '', 'Project details:', data.message, '', 'Reply to this email to contact the customer.'].join('\n'),
    html: layout('New project inquiry', `<p>A visitor submitted the remodeling estimate form. Reply to this email to contact them directly.</p><table cellpadding="0" cellspacing="0" style="width:100%">${htmlDetails}</table><h2 style="font-size:18px;font-weight:400;margin:28px 0 12px">Project details</h2><p style="white-space:pre-wrap;overflow-wrap:anywhere">${escapeHtml(data.message)}</p>`, reference),
  };
}

export function confirmationEmail(data: ContactFormData, reference: string) {
  const firstName = data.name.split(/\s+/)[0];
  // Keep the acknowledgment free of visitor-supplied project text or links.
  const greeting = `Hi ${firstName},`;
  const paragraphs = [
    'Thank you for contacting Nova Home Remodeling & Design. We have received your project inquiry.',
    'Our team will review your details and get back to you to discuss your project and next steps.',
    'To add information or photos, simply reply to this email. Your reply will go directly to our team.',
    `You can also reach us at ${SITE.phoneDisplay}. Our hours are ${SITE.hoursDisplay}.`,
  ];
  return {
    subject: 'We received your inquiry | Nova Home Remodeling & Design',
    text: [greeting, '', ...paragraphs.flatMap((paragraph) => [paragraph, '']), 'Nova Home Remodeling & Design', SITE.url, `Inquiry reference: ${reference}`].join('\n'),
    html: layout('We received your project inquiry', `<p>${escapeHtml(greeting)}</p>${paragraphs.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join('')}<p style="margin-top:28px">Thank you,<br><strong>Nova Home Remodeling &amp; Design</strong></p>`, reference),
  };
}
