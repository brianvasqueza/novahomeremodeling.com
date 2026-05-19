import { Section } from '@/components/common/Section';
import { SectionHeading } from '@/components/common/SectionHeading';
import { ServiceCard } from '@/components/cards/ServiceCard';
import { SERVICES_BENTO } from '@/data/services';

export function Services() {
  return (
    <Section id="services">
      <SectionHeading
        eyebrow="03 — Services"
        title={
          <>
              Eight services,
            <br />
            one <em>standard.</em>
          </>
        }
        body="We do not estimate every project. We work on six to eight homes a year, in depth, and refuse the rest. Each project begins with a fixed‑fee feasibility study."
        classNames={{
          grid: 'services__head',
          left: 'services__head-l',
          right: 'services__head-r',
          title: 'services__h',
          body: 'services__lede',
        }}
      />
        <div className="services__bento">
          {SERVICES_BENTO.map((s) => (
            <ServiceCard key={s.num} service={s} href={`/services/${s.slug}`} />
          ))}
        </div>
    </Section>
  );
}
