import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { SiteShell } from '@/components/layout/SiteShell';
import { PageHero } from '@/components/sections/PageHero';
import { CityIntro } from '@/components/sections/CityIntro';
import { Services } from '@/components/sections/Services';
import { Process } from '@/components/sections/Process';
import { CityServiceLinks } from '@/components/sections/CityServiceLinks';
import { InternalLinkGrid } from '@/components/sections/InternalLinkGrid';
import { ServiceAreas } from '@/components/sections/ServiceAreas';
import { CTASection } from '@/components/sections/CTASection';
import { Contact } from '@/components/sections/Contact';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { JsonLd } from '@/components/seo/JsonLd';
import { CITY_PAGE_DATA, findCityPage } from '@/data/cities';
import { getNearbyCityLinks } from '@/data/internal-links';
import { breadcrumbJsonLd, cityPageJsonLd } from '@/lib/seo/json-ld';
import { createMetadata } from '@/lib/seo/metadata';

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return CITY_PAGE_DATA.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const city = findCityPage(slug);
  if (!city) return createMetadata({ title: 'City not found', noIndex: true });

  return createMetadata({
    title: `Home Remodeling in ${city.name}, TX`,
    description: city.description,
    path: `/cities/${city.slug}`,
    image: city.heroImage,
    imageAlt: `Residential remodeling project detail for Nova service area work in ${city.name}, Texas.`,
  });
}

export default async function CityPage({ params }: PageProps) {
  const { slug } = await params;
  const city = findCityPage(slug);
  if (!city) notFound();
  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Service Areas', href: '/cities' },
    { name: city.name, href: `/cities/${city.slug}` },
  ];

  return (
    <SiteShell navLight>
      <JsonLd data={[cityPageJsonLd(city), breadcrumbJsonLd(breadcrumbs)]} />
      <main>
        <PageHero
          eyebrow={city.distance === 'Home base' ? 'Home base' : `Service area — ${city.distance}`}
          title={city.name}
          description={city.description}
          image={city.heroImage}
          imageAlt={`Residential remodeling project detail for Nova service area work in ${city.name}, Texas.`}
        />
        <Breadcrumbs items={breadcrumbs} />
        <CityIntro city={city} />
        <Services />
        <Process />
        <CityServiceLinks city={city} />
        <InternalLinkGrid
          eyebrow="Nearby service areas"
          title="More Greater Houston coverage"
          links={getNearbyCityLinks(city.slug)}
        />
        <ServiceAreas />
        <CTASection />
        <Contact />
      </main>
    </SiteShell>
  );
}
