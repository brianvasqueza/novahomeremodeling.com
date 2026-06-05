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
            We plan before we build.
            <br />
            We finish <em>in‑house.</em>
          </h2>
        </div>
        <div className="approach__right">
          <div className="approach__body">
            <p>
              Nova is a Houston remodeling company focused on kitchens, bathrooms, interior
              renovations, drywall, flooring, painting, and custom home improvements. We keep
              projects organized, communicate clearly, and build spaces made for everyday living
              — not just photos.
            </p>
            <p>
              Quality comes from planning, craftsmanship, and accountability. That&apos;s why
              we stay involved from the first walkthrough to the final punch list, keeping the
              process clear and the finished work clean, durable, and carefully done.
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
