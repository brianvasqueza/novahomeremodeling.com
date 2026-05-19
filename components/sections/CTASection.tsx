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
          <a className="link link--gold cta__phone" href={`tel:${SITE.phone}`}>
            (713) 555 0142
          </a>
          <span className="cta__sub-divider">·</span>
          <a className="link link--gold" href={`mailto:${SITE.email}`}>
            {SITE.email}
          </a>
        </div>
        <div className="cta__trust">
          Licensed &amp; Bonded · TDLR‑RM42839 &nbsp;·&nbsp; 16 years in Houston
        </div>
      </div>
    </section>
  );
}
