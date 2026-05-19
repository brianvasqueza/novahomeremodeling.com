import type { Metadata } from 'next';
import { SiteShell } from '@/components/layout/SiteShell';
import { PageHero } from '@/components/sections/PageHero';
import { CTASection } from '@/components/sections/CTASection';
import { Contact } from '@/components/sections/Contact';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { JsonLd } from '@/components/seo/JsonLd';
import { SERVICE_PAGE_DATA } from '@/data/service-pages';
import { breadcrumbJsonLd, collectionPageJsonLd } from '@/lib/seo/json-ld';
import { createMetadata } from '@/lib/seo/metadata';
import { serviceUrl } from '@/lib/seo/urls';

export const metadata: Metadata = createMetadata({
  title: 'Remodeling Services in Houston, TX',
  description:
    'A structured overview of Nova remodeling services in Houston, including kitchens, bathrooms, whole-home renovations, carpentry, flooring, painting, and outdoor work.',
  path: '/services',
});

const breadcrumbs = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
];

export default function ServicesIndexPage() {
  const collectionDescription =
    'A structured overview of Nova remodeling services in Houston, including kitchens, bathrooms, whole-home renovations, carpentry, flooring, painting, and outdoor work.';

  return (
    <SiteShell navLight>
      <JsonLd
        data={[
          breadcrumbJsonLd(breadcrumbs),
          collectionPageJsonLd({
            name: 'Remodeling Services in Houston, TX',
            description: collectionDescription,
            path: '/services',
            items: SERVICE_PAGE_DATA.map((service) => ({
              name: service.title,
              href: serviceUrl(service.slug),
            })),
          }),
        ]}
      />
      <main>
        <PageHero
          eyebrow="Services"
          title="Remodeling services"
          description="A practical index of the remodeling work Nova takes on across Houston and the surrounding area."
          image="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=2400&q=85&auto=format&fit=crop"
          imageAlt="Finished interior remodel detail representing Nova remodeling services in Houston."
        />
        <Breadcrumbs items={breadcrumbs} />
        <section className="section">
          <div className="container route-list">
            {SERVICE_PAGE_DATA.map((service) => (
              <article className="route-card" key={service.slug}>
                <a href={serviceUrl(service.slug)}>
                  <div className="route-card__meta">{service.eyebrow}</div>
                  <h2>{service.title}</h2>
                  <p>{service.description}</p>
                </a>
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
