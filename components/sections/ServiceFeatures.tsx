import { Section } from '@/components/common/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import type { ServicePageData } from '@/data/service-pages';

type ServiceFeaturesProps = {
  service: ServicePageData;
};

export function ServiceFeatures({ service }: ServiceFeaturesProps) {
  return (
    <Section id="features" className="svc-features section--dark">
      <div className="svc-features__head">
        <div>
          <Eyebrow dark>How we approach it</Eyebrow>
          <h2
            className="svc-features__h"
            dangerouslySetInnerHTML={{ __html: `Three things that <em>set this work apart.</em>` }}
          />
        </div>
        <p className="svc-features__lede">
          Not every remodeler thinks this way. These are the commitments that separate a careful project from a forgettable one.
        </p>
      </div>

      <ul className="svc-features__list">
        {service.features.map((f) => (
          <li key={f.n} className="svc-features__item reveal">
            <div className="svc-features__n">{f.n}</div>
            <h3
              className="svc-features__title"
              dangerouslySetInnerHTML={{ __html: f.titleHtml }}
            />
            <p className="svc-features__body">{f.body}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
