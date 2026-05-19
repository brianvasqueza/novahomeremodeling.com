import Link from 'next/link';
import { Section } from '@/components/common/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { SERVICE_PAGE_DATA } from '@/data/service-pages';

type RelatedServicesProps = {
  slugs: string[];
};

export function RelatedServices({ slugs }: RelatedServicesProps) {
  const services = slugs
    .map((slug) => SERVICE_PAGE_DATA.find((s) => s.slug === slug))
    .filter(Boolean);

  if (services.length === 0) return null;

  return (
    <Section id="related" className="related-svcs">
      <Eyebrow>Continue exploring</Eyebrow>
      <h2 className="related-svcs__h">
        Related <em>services.</em>
      </h2>
      <div className="related-svcs__grid">
        {services.map((s, i) => (
          <Link
            key={s!.slug}
            href={`/services/${s!.slug}`}
            className="related-svc-card reveal"
          >
            <div className="related-svc-card__n">0{i + 1}</div>
            <div className="related-svc-card__title">{s!.title}</div>
            <p className="related-svc-card__desc">{s!.tagline}</p>
            <div className="related-svc-card__arrow">View service →</div>
          </Link>
        ))}
      </div>
    </Section>
  );
}
