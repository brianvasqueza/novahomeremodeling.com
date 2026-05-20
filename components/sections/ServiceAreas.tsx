import Link from 'next/link';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { CtaLink } from '@/components/ui/CTA';
import { CITY_PAGE_DATA } from '@/data/cities';

export function ServiceAreas() {
  return (
    <section className="section" id="areas">
      <div className="container areas__grid">
        <div className="areas__l">
          <Eyebrow>09 — Where we work</Eyebrow>
          <h2 className="areas__h">
            Remodeling across
            <br />
            Greater <em>Houston.</em>
          </h2>
          <p className="approach__body areas__lede">
            Based in Houston and serving surrounding areas including Katy, Sugar Land, Cypress,
            Pearland, The Woodlands, Pasadena, Spring, Tomball, and Richmond. We know these
            neighborhoods — the homes, the soil, the climate. Out-of-area projects are taken on a
            case-by-case basis, with a project lead on site.
          </p>
        </div>
        <div className="areas__r">
          <ul className="areas__list">
            {CITY_PAGE_DATA.map((city) => (
              <li key={city.slug}>
                <Link href={`/cities/${city.slug}`}>
                  <span>{city.name}</span>
                  <span className="areas__dist">{city.distance}</span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="areas__cta">
            <p className="areas__cta-note">
              Ready to start a project in your neighborhood?
            </p>
            <CtaLink href="#contact" variant="tertiary">
              Start a project
            </CtaLink>
          </div>
        </div>
      </div>
    </section>
  );
}
