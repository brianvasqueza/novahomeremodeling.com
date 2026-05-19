import Link from 'next/link';
import { Section } from '@/components/common/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { getCityServiceLinks } from '@/data/internal-links';
import type { CityPageData } from '@/data/cities';

type CityServiceLinksProps = {
  city: CityPageData;
};

export function CityServiceLinks({ city }: CityServiceLinksProps) {
  const links = getCityServiceLinks(city.slug);

  return (
    <Section id="services-index" className="city-svcs">
      <div className="city-svcs__head">
        <div>
          <Eyebrow>Full scope</Eyebrow>
          <h2 className="city-svcs__h">
            Services available <em>in {city.name}.</em>
          </h2>
        </div>
        <p className="city-svcs__lede">
          We bring the same crew and the same standard to every project in this area. Browse the full service list or start a conversation.
        </p>
      </div>

      <div className="city-svcs__grid">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="city-svc-link"
          >
            <span className="city-svc-link__name">{link.label}</span>
            <span className="city-svc-link__arrow">→</span>
          </Link>
        ))}
      </div>
    </Section>
  );
}
