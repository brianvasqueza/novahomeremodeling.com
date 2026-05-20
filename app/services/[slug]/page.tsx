import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { SiteShell } from '@/components/layout/SiteShell';
import { PageHero } from '@/components/sections/PageHero';
import { ServiceDetail } from '@/components/sections/ServiceDetail';
import {
  ServiceConsultation,
  ServiceCraft,
  ServiceIncludes,
  ServiceLocalAuthority,
  ServiceProblem,
  ServiceTransformation,
} from '@/components/sections/ServiceLandingSections';
import { ServiceFeatures } from '@/components/sections/ServiceFeatures';
import {
  ServiceMicroGallery,
  ServiceProcessVisual,
  ServiceStoryVisual,
  ServiceVisualBreak,
} from '@/components/sections/ServiceVisualStory';
import { KitchenRemodelingExperience } from '@/components/sections/KitchenRemodelingExperience';
import { Process } from '@/components/sections/Process';
import { ServiceFAQ } from '@/components/sections/ServiceFAQ';
import { RelatedServices } from '@/components/sections/RelatedServices';
import { InternalLinkGrid } from '@/components/sections/InternalLinkGrid';
import { Contact } from '@/components/sections/Contact';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { JsonLd } from '@/components/seo/JsonLd';
import { SERVICE_PAGE_DATA, findServicePage } from '@/data/service-pages';
import { findServiceVisualStory } from '@/data/service-visuals';
import { getServiceLandingContent } from '@/data/service-landing';
import { getServiceAreaLinks } from '@/data/internal-links';
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd, serviceWebPageJsonLd } from '@/lib/seo/json-ld';
import { createMetadata } from '@/lib/seo/metadata';

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return SERVICE_PAGE_DATA.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = findServicePage(slug);
  if (!service) return createMetadata({ title: 'Service not found', noIndex: true });
  const landingContent = getServiceLandingContent(service);

  return createMetadata({
    title: landingContent.seoTitle,
    description: landingContent.seoDescription,
    path: `/services/${service.slug}`,
    image: service.heroImage,
  });
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = findServicePage(slug);
  if (!service) notFound();
  const landingContent = getServiceLandingContent(service);
  const visualStory = findServiceVisualStory(service.slug);
  const areaLinks = getServiceAreaLinks(service);
  const isKitchenRemodeling = service.slug === 'kitchen-remodeling';
  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: service.title, href: `/services/${service.slug}` },
  ];

  return (
    <SiteShell navLight>
      <JsonLd
        data={[
          serviceJsonLd(service, landingContent),
          serviceWebPageJsonLd(service, landingContent),
          faqJsonLd(service),
          breadcrumbJsonLd(breadcrumbs),
        ]}
      />
      <main>
        <PageHero
          eyebrow={service.eyebrow}
          title={landingContent.heroTitle}
          description={landingContent.heroDescription}
          image={service.heroImage}
          imageAlt={landingContent.imageAlt}
          ctaLabel={isKitchenRemodeling ? 'Start a kitchen project' : undefined}
          ctaHref={isKitchenRemodeling ? '#contact' : undefined}
        />
        <Breadcrumbs items={breadcrumbs} />
        {isKitchenRemodeling ? (
          <KitchenRemodelingExperience />
        ) : (
          <>
            <ServiceDetail service={service} />
            {visualStory && <ServiceStoryVisual visualStory={visualStory} />}
            <ServiceProblem content={landingContent} />
            <ServiceTransformation content={landingContent} />
            <ServiceIncludes content={landingContent} />
            <ServiceFeatures service={service} />
            {visualStory && <ServiceProcessVisual visualStory={visualStory} />}
            <ServiceCraft content={landingContent} />
            <Process />
            {visualStory && <ServiceMicroGallery visualStory={visualStory} />}
          </>
        )}
        {visualStory ? (
          <ServiceVisualBreak visualStory={visualStory} content={landingContent} areaLinks={areaLinks} />
        ) : (
          <ServiceLocalAuthority content={landingContent} areaLinks={areaLinks} />
        )}
        <ServiceFAQ service={service} />
        <RelatedServices slugs={service.related} currentServiceTitle={service.title} />
        <InternalLinkGrid
          eyebrow="Houston area"
          title={`Where we handle ${service.title.toLowerCase()}`}
          links={areaLinks}
        />
        <ServiceConsultation content={landingContent} />
        <Contact />
      </main>
    </SiteShell>
  );
}
