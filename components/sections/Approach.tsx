import { Eyebrow } from '@/components/ui/Eyebrow';
import { CtaLink } from '@/components/ui/CTA';
import { Section } from '@/components/common/Section';

export function Approach() {
  return (
    <Section id="approach" containerClassName="approach__grid">
        <div className="approach__left">
          <Eyebrow>01 — The company</Eyebrow>
          <h2 className="approach__h">
            A Houston remodeling crew.
            <br />
            We draw before we build.
            <br />
            We finish <em>in‑house.</em>
          </h2>
        </div>
        <div className="approach__right">
          <div className="approach__body">
            <p>
              Nova is a residential remodeling company in Houston, serving the
              neighborhoods our clients have lived in for years. We take on kitchens, bathrooms,
              drywall repair, flooring, interior painting, exterior painting, additions, and
              whole‑home renovations — one dedicated crew per project, from the first drawing to
              the day we hand you the keys.
            </p>
            <p>
              We do not subcontract finish carpentry. Every cabinet is measured on site before
              anything is ordered. Each project is planned for real daily use: durable materials,
              clean transitions, careful punch work, and a job site that stays understandable from
              first visit to final walkthrough.
            </p>
          </div>
          <div className="approach__cta">
            <CtaLink variant="tertiary" href="#philosophy" arrow={false}>
              Our five commitments
            </CtaLink>
          </div>
        </div>
    </Section>
  );
}
