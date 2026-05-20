import type { Metadata } from 'next';
import Link from 'next/link';
import { SiteShell } from '@/components/layout/SiteShell';
import { PageHero } from '@/components/sections/PageHero';
import { CTASection } from '@/components/sections/CTASection';
import { Contact } from '@/components/sections/Contact';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { JsonLd } from '@/components/seo/JsonLd';
import { CITY_PAGE_DATA } from '@/data/cities';
import { breadcrumbJsonLd, collectionPageJsonLd } from '@/lib/seo/json-ld';
import { createMetadata } from '@/lib/seo/metadata';
import { cityUrl } from '@/lib/seo/urls';

export const metadata: Metadata = createMetadata({
  title: 'Houston Remodeling Service Areas',
  description:
    'Houston remodeling service areas for Nova Home Remodeling & Design, including Katy, Sugar Land, Cypress, Pearland, The Woodlands, Pasadena, Spring, Tomball, and Richmond.',
  path: '/cities',
  image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=2000&q=82&auto=format&fit=crop',
  imageAlt: 'Houston area home exterior representing Nova service areas across Greater Houston.',
});

const breadcrumbs = [
  { name: 'Home', href: '/' },
  { name: 'Service Areas', href: '/cities' },
];

export default function CitiesIndexPage() {
  const collectionDescription =
    'Houston and surrounding communities served by Nova Home Remodeling & Design, including Katy, Sugar Land, Cypress, Pearland, The Woodlands, Pasadena, Spring, Tomball, and Richmond.';

  return (
    <SiteShell navLight>
      <JsonLd
        data={[
          breadcrumbJsonLd(breadcrumbs),
          collectionPageJsonLd({
            name: 'Houston Service Areas',
            description: collectionDescription,
            path: '/cities',
            items: CITY_PAGE_DATA.map((city) => ({
              name: city.name,
              href: cityUrl(city.slug),
            })),
          }),
        ]}
      />
      <main>
        <PageHero
          eyebrow="Service areas"
          title="Houston Remodeling Service Areas"
          description="Local remodeling service area pages for Houston and nearby communities, with coverage for kitchens, bathrooms, painting, drywall, flooring, and whole-home projects."
          image="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=2000&q=82&auto=format&fit=crop"
          imageAlt="Houston area home exterior representing Nova service areas across Greater Houston."
        />
        <Breadcrumbs items={breadcrumbs} />
        <section className="section">
          <div className="container route-list">
            {CITY_PAGE_DATA.map((city) => (
              <article className="route-card" key={city.slug}>
                <Link href={cityUrl(city.slug)}>
                  <div className="route-card__meta">{city.distance}</div>
                  <h2>{city.name}</h2>
                  <p>{city.description}</p>
                </Link>
              </article>
            ))}
          </div>
        </section>
        <CTASection />
        <Contact />
      </main>
    </SiteShell>
  );
}
