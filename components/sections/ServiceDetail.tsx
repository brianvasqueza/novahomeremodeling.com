import { Eyebrow } from '@/components/ui/Eyebrow';
import type { ServicePageData } from '@/data/service-pages';

type ServiceDetailProps = {
  service: ServicePageData;
};

export function ServiceDetail({ service }: ServiceDetailProps) {
  return (
    <section className="section" id="detail">
      <div className="container svc-detail__grid">
        <div className="svc-detail__left">
          <Eyebrow>{service.eyebrow}</Eyebrow>
          <p
            className="svc-detail__tagline"
            dangerouslySetInnerHTML={{ __html: service.tagline }}
          />
          <div className="svc-detail__body reveal">
            {service.body.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>

        <aside className="svc-detail__aside reveal">
          <div className="svc-detail__aside-title">At a glance</div>
          <dl className="svc-detail__facts">
            {service.asideFacts.map(({ label, value }) => (
              <div key={label} className="svc-detail__fact">
                <dt className="svc-detail__fact-label">{label}</dt>
                <dd className="svc-detail__fact-value">{value}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>
    </section>
  );
}
