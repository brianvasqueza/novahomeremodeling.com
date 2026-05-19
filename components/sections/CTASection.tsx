import { CtaLink } from '@/components/ui/CTA';
import { SITE } from '@/data/site';

export function CTASection() {
  return (
    <section className="cta section" id="cta">
      <div className="container">
        <div className="cta__index">10 — Begin</div>
        <h2 className="cta__h">
          It starts with a long
          <br />
          conversation. <em>In your home.</em>
        </h2>
        <CtaLink href="#contact">
          Start a project
        </CtaLink>
        <div className="cta__sub">
          <a className="link link--gold cta__phone" href={SITE.phoneHref}>
            {SITE.phoneDisplay}
          </a>
          <span className="cta__sub-divider">·</span>
          <a className="link link--gold" href={SITE.emailHref}>
            {SITE.email}
          </a>
        </div>
        <div className="cta__trust">
          Houston, Texas &nbsp;·&nbsp; Monday–Saturday, 7:00 AM–7:00 PM
        </div>
      </div>
    </section>
  );
}
