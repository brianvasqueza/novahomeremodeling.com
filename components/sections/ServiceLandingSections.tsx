import Link from 'next/link';
import { Section } from '@/components/common/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { CtaLink } from '@/components/ui/CTA';
import type { ServiceLandingContent } from '@/data/service-landing';
import type { ServicePageData } from '@/data/service-pages';
import type { InternalLink } from '@/data/internal-links';

type LandingProps = {
  content: ServiceLandingContent;
};

export function ServiceProblem({ content }: LandingProps) {
  const { problem } = content;

  return (
    <Section id="homeowner-concerns" className="svc-problem section--alt">
      <div className="svc-problem__grid">
        <div className="svc-problem__main">
          <Eyebrow>{problem.eyebrow}</Eyebrow>
          <h2 className="svc-landing__h">{problem.title}</h2>
          <div className="svc-landing__copy">
            {problem.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
        <aside className="svc-problem__aside" aria-label="Project reassurance">
          <p>{problem.reassurance}</p>
          <dl className="svc-proof">
            {problem.proofPoints.map((point) => (
              <div className="svc-proof__item" key={point.label}>
                <dt>{point.label}</dt>
                <dd>{point.value}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>
    </Section>
  );
}

export function ServiceTransformation({ content }: LandingProps) {
  const { transformation } = content;

  return (
    <Section id="transformation" className="svc-transform">
      <div className="svc-transform__head">
        <Eyebrow>{transformation.eyebrow}</Eyebrow>
        <h2 className="svc-landing__h">{transformation.title}</h2>
      </div>
      <div className="svc-transform__grid">
        <article className="svc-transform__panel">
          <span className="svc-transform__label">Before</span>
          <p>{transformation.before}</p>
        </article>
        <article className="svc-transform__panel svc-transform__panel--after">
          <span className="svc-transform__label">After</span>
          <p>{transformation.after}</p>
        </article>
        <ul className="svc-transform__outcomes" aria-label="Remodeling outcomes">
          {transformation.outcomes.map((outcome) => (
            <li key={outcome}>{outcome}</li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

export function ServiceCraft({ content }: LandingProps) {
  const { craft } = content;

  return (
    <Section id="materials-craftsmanship" className="svc-craft">
      <div className="svc-craft__head">
        <Eyebrow>{craft.eyebrow}</Eyebrow>
        <h2 className="svc-landing__h">{craft.title}</h2>
        <p>{craft.intro}</p>
      </div>
      <div className="svc-craft__grid">
        {craft.items.map((item, index) => (
          <article className="svc-craft__item" key={item.title}>
            <span className="svc-craft__n">{String(index + 1).padStart(2, '0')}</span>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

type ServiceLocalAuthorityProps = LandingProps & {
  areaLinks: InternalLink[];
};

export function ServiceLocalAuthority({ content, areaLinks }: ServiceLocalAuthorityProps) {
  const { local } = content;
  const visibleAreaLinks = areaLinks.slice(0, 4);

  return (
    <Section id="houston-context" className="svc-local section--alt">
      <div className="svc-local__grid">
        <div className="svc-local__main">
          <Eyebrow>{local.eyebrow}</Eyebrow>
          <h2 className="svc-landing__h">{local.title}</h2>
          <p>{local.body}</p>
          <ul className="svc-local__neighborhoods" aria-label="Houston-area remodeling context">
            {local.neighborhoods.map((name) => (
              <li key={name}>{name}</li>
            ))}
          </ul>
          <p className="svc-local__note">{local.note}</p>
        </div>
        {visibleAreaLinks.length > 0 && (
          <nav className="svc-local__links" aria-label="Related service areas">
            <span className="svc-local__links-title">Related service areas</span>
            {visibleAreaLinks.map((link) => (
              <Link href={link.href} key={link.href}>
                <span>{link.label}</span>
                <small>{link.description}</small>
              </Link>
            ))}
          </nav>
        )}
      </div>
    </Section>
  );
}

type ServiceConsultationProps = LandingProps & {
  service: ServicePageData;
};

export function ServiceConsultation({ content, service }: ServiceConsultationProps) {
  const { consultation, authorityLinks } = content;

  return (
    <Section id="consultation" className="svc-consult">
      <div className="svc-consult__grid">
        <div className="svc-consult__main">
          <Eyebrow>{consultation.eyebrow}</Eyebrow>
          <h2 className="svc-landing__h">{consultation.title}</h2>
          <p>{consultation.body}</p>
          <ol className="svc-consult__steps">
            {consultation.steps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
          <CtaLink href="#contact">Plan {service.title.toLowerCase()}</CtaLink>
        </div>
        <nav className="svc-consult__links" aria-label="Helpful project links">
          {authorityLinks.map((link) => (
            <Link href={link.href} key={link.href}>
              <span>{link.label}</span>
              <small>{link.body}</small>
            </Link>
          ))}
        </nav>
      </div>
    </Section>
  );
}
