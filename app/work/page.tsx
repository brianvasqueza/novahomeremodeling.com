import type { Metadata } from 'next';
import Link from 'next/link';
import { SiteShell } from '@/components/layout/SiteShell';
import { PageHero } from '@/components/sections/PageHero';
import { RealWorkGallery } from '@/components/sections/RealWorkGallery';
import { ServiceVisualBreak } from '@/components/sections/ServiceVisualStory';
import { CTASection } from '@/components/sections/CTASection';
import { Contact } from '@/components/sections/Contact';
import { Section } from '@/components/common/Section';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { JsonLd } from '@/components/seo/JsonLd';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { SITE } from '@/data/site';
import {
  WORK_CRAFTSMANSHIP,
  WORK_GROUPS,
  WORK_HERO,
  WORK_PAGE_DESCRIPTION,
  WORK_PAGE_TITLE,
} from '@/data/work-gallery';
import { breadcrumbJsonLd } from '@/lib/seo/json-ld';
import { createMetadata } from '@/lib/seo/metadata';
import { absoluteUrl } from '@/lib/seo/urls';
import type { ServiceVisualStory } from '@/data/service-visuals';

const WORK_HERO_IMAGE_WIDTH = 4080;
const WORK_HERO_IMAGE_HEIGHT = 1884;

export const metadata: Metadata = createMetadata({
  title: WORK_PAGE_TITLE,
  description: WORK_PAGE_DESCRIPTION,
  path: '/work',
  image: WORK_HERO.image,
  imageWidth: WORK_HERO_IMAGE_WIDTH,
  imageHeight: WORK_HERO_IMAGE_HEIGHT,
  imageAlt: WORK_HERO.imageAlt,
});

const breadcrumbs = [
  { name: 'Home', href: '/' },
  { name: 'Work', href: '/work' },
];

const workCollectionJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  '@id': absoluteUrl('/work#webpage'),
  name: WORK_PAGE_TITLE,
  headline: WORK_PAGE_TITLE,
  description: WORK_PAGE_DESCRIPTION,
  url: absoluteUrl('/work'),
  isPartOf: { '@id': absoluteUrl('/#website') },
  about: { '@id': absoluteUrl('/#business') },
  primaryImageOfPage: {
    '@type': 'ImageObject',
    url: absoluteUrl(WORK_HERO.image),
    width: WORK_HERO_IMAGE_WIDTH,
    height: WORK_HERO_IMAGE_HEIGHT,
    caption: WORK_HERO.imageAlt,
  },
  mainEntity: {
    '@type': 'ItemList',
    itemListElement: WORK_GROUPS.map((group, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: group.title,
      url: absoluteUrl(`/work#${group.id}`),
    })),
  },
  spatialCoverage: {
    '@type': 'City',
    name: 'Houston',
    containedInPlace: {
      '@type': 'State',
      name: 'Texas',
    },
  },
  inLanguage: 'en-US',
};

const craftsmanshipVisualStory: ServiceVisualStory = {
  slug: 'real-work-craftsmanship',
  story: {
    eyebrow: 'Behind the Finish',
    title: 'The best work happens before the finish work.',
    body: WORK_CRAFTSMANSHIP.body,
    image: WORK_CRAFTSMANSHIP.image,
    notes: {
      placement: 'Work page craftsmanship moment',
      emotionalImpact: 'Shows the hidden construction behind finished work.',
      conversionValue: 'Builds trust with QR and mobile visitors.',
      authenticity: 'Real Nova construction photography.',
    },
  },
  comparison: {
    eyebrow: 'Behind the Finish',
    title: 'Real construction progress',
    before: WORK_CRAFTSMANSHIP.image,
    after: WORK_CRAFTSMANSHIP.image,
    caption: 'Interior stair framing before finish materials are installed.',
  },
  process: {
    eyebrow: 'Behind the Finish',
    title: 'The framing behind finished work.',
    items: [],
  },
  materials: {
    eyebrow: 'Behind the Finish',
    title: 'Construction details',
    images: [WORK_CRAFTSMANSHIP.image],
  },
  gallery: {
    eyebrow: 'Behind the Finish',
    title: 'Construction details',
    images: [WORK_CRAFTSMANSHIP.image],
  },
  visualBreak: {
    image: WORK_CRAFTSMANSHIP.image,
    kicker: WORK_CRAFTSMANSHIP.kicker,
    title: 'The best work happens before the finish work.',
    body: WORK_CRAFTSMANSHIP.body,
  },
};

export default function WorkPage() {
  return (
    <SiteShell navLight>
      <JsonLd
        data={[
          breadcrumbJsonLd(breadcrumbs),
          workCollectionJsonLd,
        ]}
      />
      <main>
        <PageHero
          eyebrow="Real Nova Projects"
          title="Real Work. Real Homes."
          description="Completed and in-progress photos from real Nova Home Remodeling projects - window and siding repair, bathroom updates, kitchen cabinets, decks, walkways, and the carpentry behind them, around Houston."
          image={WORK_HERO.image}
          imageAlt={WORK_HERO.imageAlt}
          ctaLabel="Request an Estimate"
          ctaHref="/contact"
          secondaryLabel={`Call ${SITE.phoneDisplay}`}
          secondaryHref={SITE.phoneHref}
        />
        <Breadcrumbs items={breadcrumbs} />

        <Section id="about-this-work" className="work-intro">
          <div className="work-intro__grid">
            <div className="work-intro__heading">
              <Eyebrow>Completed &amp; In Progress</Eyebrow>
              <h2 className="work-intro__h reveal-blur">
                Good construction shows before it&apos;s <em>finished.</em>
              </h2>
            </div>
            <p className="work-intro__lede reveal-blur">
              This page includes both completed projects and work still underway. Framing, siding repair, and cabinet installs look different mid-project than they do once painted and trimmed out - we think that&apos;s worth showing, not just the polished result. For smaller repair lists, see our{' '}
              <Link className="link link--gold" href="/handyman-services-houston">
                handyman and home repair services
              </Link>
              .
            </p>
          </div>
        </Section>

        <RealWorkGallery groups={WORK_GROUPS} />

        <ServiceVisualBreak
          id="craftsmanship"
          visualStory={craftsmanshipVisualStory}
          title={<>The best work happens before the <em>finish work.</em></>}
          body={WORK_CRAFTSMANSHIP.body}
        />

        <CTASection
          index="Get Started"
          heading={<>See something your home <em>needs?</em></>}
          body="From smaller repairs and installations to larger remodeling projects - tell us what you need done."
          ctaLabel="Request a Free Estimate"
          ctaHref="#contact"
          showEmail={false}
        />
        <Contact />
      </main>
    </SiteShell>
  );
}
