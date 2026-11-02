import type { Metadata } from 'next';
import { SiteShell } from '@/components/layout/SiteShell';
import { Section } from '@/components/common/Section';
import { SITE } from '@/data/site';
import { createMetadata } from '@/lib/seo/metadata';

export const metadata: Metadata = createMetadata({
  title: 'Privacy Policy',
  description:
    'How Nova Home Remodeling & Design collects, uses, and handles information from website inquiries, Facebook and Instagram lead forms, and project communications.',
  path: '/privacy-policy',
});

// Planned publication: November 2, 2026. Update the date if publication moves.
// Policy copy is maintained in docs/nova-privacy-policy.md; handoff notes are excluded.
export default function PrivacyPolicyPage() {
  return (
    <SiteShell showStickyMobileCTA={false}>
      <main className="privacy-page">
        <Section as="article" className="article-shell privacy-policy">
          <div className="article-content privacy-policy__content">
            <header className="privacy-policy__header">
              <h1 className="privacy-policy__title">Privacy <em>Policy</em></h1>
              <p className="privacy-policy__date">
                Effective date: <time dateTime="2026-11-02">November 2, 2026</time>
              </p>
            </header>
            <p>
              Nova Home Remodeling &amp; Design (&quot;Nova,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respects your privacy. This policy explains how we collect, use, and handle personal information when you visit novahomeremodeling.com, submit a Facebook or Instagram lead form, request an estimate, or communicate with us about a remodeling or home repair project.
            </p>

            <section className="article-section" aria-labelledby="privacy-section-1">
              <h2 id="privacy-section-1">1. Information <em>we collect</em></h2>
              <p>
                When you submit a Facebook or Instagram lead form, we collect the information you choose to provide, including your:
              </p>
              <ul>
                <li>Name</li>
                <li>Phone number</li>
                <li>Email address</li>
                <li>ZIP code</li>
              </ul>
              <p>
                When you contact us through our website, email, phone, text, or social media, you may also provide your project address or location, the type of work you need, budget, preferred timeline, project description, photographs, and other information relevant to your request. We also keep communications and records related to estimates and services you request.
              </p>
              <p>
                Please do not include Social Security numbers, payment card information, passwords, or other sensitive information in lead forms or ordinary project messages.
              </p>
              <p>
                Our website hosting and security providers may process technical information such as your IP address, browser and device details, pages requested, and request times to deliver the website, diagnose problems, and protect it against misuse.
              </p>
              <p>
                To help prevent repeated or abusive form submissions, our website temporarily processes hashed values derived from IP addresses and email addresses, along with submission identifiers.
              </p>
            </section>

            <section className="article-section" aria-labelledby="privacy-section-2">
              <h2 id="privacy-section-2">2. How we use <em>your information</em></h2>
              <p>
                We use your information to:
              </p>
              <ul>
                <li>Respond to your inquiry and discuss your requested project.</li>
                <li>Determine whether your location and requested work are within our service area and services.</li>
                <li>Prepare estimates, arrange site visits, and follow up on an estimate you requested.</li>
                <li>Schedule, provide, and communicate about services you choose to receive.</li>
                <li>Maintain project and business records, protect our website and business, and meet applicable legal obligations.</li>
              </ul>
              <p>
                We contact leads about their requested project. Submitting an inquiry does not subscribe you to newsletters or unrelated promotional campaigns.
              </p>
            </section>

            <section className="article-section" aria-labelledby="privacy-section-3">
              <h2 id="privacy-section-3">3. Calls, texts, and emails <em>about your project</em></h2>
              <p>
                We may respond using the phone number or email address you provide, including by call, text message, or email, to discuss your inquiry, estimate, appointment, or project.
              </p>
              <p>
                You can ask us to stop follow-up communications or use a different contact method at any time. For texts, reply STOP or tell us directly that you no longer want text messages. You can also contact <a href={SITE.emailHref}>brivaqz@gmail.com</a> or call <a href={SITE.phoneHref}>(281) 690-3431</a>. Message and data rates may apply depending on your mobile plan.
              </p>
              <p>
                If you ask us to stop contacting you, we may retain a limited record of that request so we can respect your preference. If you have an active project, please arrange an appropriate way for us to communicate about ongoing work.
              </p>
            </section>

            <section className="article-section" aria-labelledby="privacy-section-4">
              <h2 id="privacy-section-4">4. How we <em>share information</em></h2>
              <p>
                Access to your information is limited to people who need it for the purposes described in this policy. This may include Nova team members and service providers that help us host the website, deliver email, store business records, or handle inquiries and scheduling.
              </p>
              <p>
                We use Resend to send website inquiries to our business email inbox, which uses Gmail, and to send an acknowledgment to the email address you provide.
              </p>
              <p>
                If fulfilling your requested project requires coordination with a contractor or another project participant, we may share the information needed for that work. We may also disclose information when required by law or reasonably necessary to protect legal rights, safety, or the security of our business.
              </p>
              <p>
                We do not sell your lead contact information or provide it to other businesses for their own independent marketing.
              </p>
            </section>

            <section className="article-section" aria-labelledby="privacy-section-5">
              <h2 id="privacy-section-5">5. Facebook, Instagram, and other <em>third-party services</em></h2>
              <p>
                When you submit information through a Facebook or Instagram lead form, Meta processes information under its own privacy policy and makes your submitted lead information available to us. This policy describes how Nova handles the information we receive.
              </p>
              <p>
                Your use of Facebook, Instagram, and other third-party websites or services is also subject to their own privacy policies. You can review Meta&#x27;s policy at <a href="https://www.facebook.com/privacy/policy/">https://www.facebook.com/privacy/policy/</a>.
              </p>
            </section>

            <section className="article-section" aria-labelledby="privacy-section-6">
              <h2 id="privacy-section-6">6. How long we <em>keep information</em></h2>
              <p>
                We retain information for as long as reasonably needed to respond to your inquiry, follow up on your requested estimate, provide services, maintain appropriate business records, and meet legal, tax, warranty, or dispute-related obligations.
              </p>
              <p>
                Retention depends on the type of record and whether you become a customer. When information is no longer needed for those purposes, we delete it or remove identifying details. Limited information may remain in backups until those backups are replaced through their normal cycle.
              </p>
            </section>

            <section className="article-section" aria-labelledby="privacy-section-7">
              <h2 id="privacy-section-7">7. Protecting <em>your information</em></h2>
              <p>
                We use reasonable administrative and technical safeguards appropriate to the information we handle and limit access to people who need it for their work. No internet transmission or storage system can be guaranteed completely secure.
              </p>
            </section>

            <section className="article-section" aria-labelledby="privacy-section-8">
              <h2 id="privacy-section-8">8. Your choices and <em>privacy requests</em></h2>
              <p>
                You can contact us to ask about the personal information we hold about you, request a correction or deletion, or ask us to stop project follow-up communications.
              </p>
              <p>
                Send requests to <a href={SITE.emailHref}>brivaqz@gmail.com</a> with the subject &quot;Privacy Request,&quot; or call <a href={SITE.phoneHref}>(281) 690-3431</a>. Include enough information for us to locate your inquiry; do not send sensitive identification documents unless we specifically explain a secure and necessary verification process.
              </p>
              <p>
                We may need to verify your identity before disclosing or changing personal information. We will address requests in accordance with applicable law. Some records may need to be retained for legal, tax, contractual, warranty, or dispute-related reasons.
              </p>
            </section>

            <section className="article-section" aria-labelledby="privacy-section-9">
              <h2 id="privacy-section-9">9. <em>Children&#x27;s privacy</em></h2>
              <p>
                Our services and lead forms are intended for adults and are not directed to children under 13. We do not knowingly collect personal information from children under 13. If you believe a child has provided personal information to us, please contact us so we can review and delete it as appropriate.
              </p>
            </section>

            <section className="article-section" aria-labelledby="privacy-section-10">
              <h2 id="privacy-section-10">10. Changes to <em>this policy</em></h2>
              <p>
                We may update this policy to reflect changes in our practices or applicable requirements. The effective date above identifies the current version. If a change requires additional notice or permission, we will provide that notice or obtain that permission as required.
              </p>
            </section>

            <section className="article-section" aria-labelledby="privacy-section-11">
              <h2 id="privacy-section-11">11. Contact <em>us</em></h2>
              <p>
                For questions about this policy or how we handle your information, contact:
              </p>
              <p>
                <strong>Nova Home Remodeling &amp; Design</strong> <br />
                Houston, Texas — serving Houston and surrounding areas <br />
                <strong>Email:</strong> <a href={SITE.emailHref}>brivaqz@gmail.com</a> <br />
                <strong>Phone:</strong> <a href={SITE.phoneHref}>(281) 690-3431</a> <br />
                <strong>Website:</strong> <a href={SITE.url}>https://novahomeremodeling.com</a>
              </p>
            </section>
          </div>
        </Section>
      </main>
    </SiteShell>
  );
}
