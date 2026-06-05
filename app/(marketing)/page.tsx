import type { Metadata } from 'next';
import { SiteShell } from '@/components/layout/SiteShell';
import { JsonLd } from '@/components/seo/JsonLd';
import { Hero } from '@/components/sections/Hero';
import { Marquee } from '@/components/sections/Marquee';
import { Approach } from '@/components/sections/Approach';
import { Stats } from '@/components/sections/Stats';
import { Services } from '@/components/sections/Services';
import { ProjectGrid } from '@/components/sections/ProjectGrid';
import { PhotoStrip } from '@/components/sections/PhotoStrip';
import { FeaturedProject } from '@/components/sections/FeaturedProject';
import { Testimonials } from '@/components/sections/Testimonials';
// DISABLED — BeforeAfter section hidden until Nova has original before/after photography.
// Re-enable by uncommenting this import and the <BeforeAfter /> usage below.
// import { BeforeAfter } from '@/components/sections/BeforeAfter';
import { Process } from '@/components/sections/Process';
import { ParallaxSection } from '@/components/sections/ParallaxSection';
import { Craft } from '@/components/sections/Craft';
import { PortfolioScroll } from '@/components/sections/PortfolioScroll';
import { Philosophy } from '@/components/sections/Philosophy';
import { ServiceAreas } from '@/components/sections/ServiceAreas';
import { CTASection } from '@/components/sections/CTASection';
import { Contact } from '@/components/sections/Contact';
import { createMetadata } from '@/lib/seo/metadata';
import { absoluteUrl } from '@/lib/seo/urls';

const HOME_IMAGE =
  '/homepage/herobackground.jpg';

export const metadata: Metadata = createMetadata({
  title: 'Houston Home Remodeling Company',
  description:
    'Houston home remodeling for kitchens, bathrooms, painting, drywall repair, flooring, and whole-home renovations by Nova Home Remodeling & Design.',
  path: '/',
  image: HOME_IMAGE,
  imageAlt: 'Luxury modern Houston home exterior with stone, glass, wood cladding, and pool terrace.',
});

const homePageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': absoluteUrl('/#webpage'),
  name: 'Houston Home Remodeling Company',
  headline: 'Houston home remodeling by Nova Home Remodeling & Design',
  description:
    'Residential remodeling company in Houston, Texas specializing in kitchens, bathrooms, painting, drywall repair, flooring, and whole-home renovations.',
  url: absoluteUrl('/'),
  isPartOf: { '@id': absoluteUrl('/#website') },
  about: { '@id': absoluteUrl('/#business') },
  primaryImageOfPage: {
    '@type': 'ImageObject',
    url: absoluteUrl(HOME_IMAGE),
    caption: 'Luxury modern Houston home exterior with stone, glass, wood cladding, and pool terrace.',
  },
  mainEntity: {
    '@type': 'ItemList',
    name: 'Houston remodeling services',
    itemListElement: [
      ['Kitchen remodeling', '/services/kitchen-remodeling'],
      ['Bathroom remodeling', '/services/bathroom-remodeling'],
      ['Interior painting', '/services/interior-painting'],
      ['Exterior painting', '/services/exterior-painting'],
      ['Drywall repair', '/services/drywall-repair'],
      ['Flooring', '/services/flooring'],
    ].map(([name, href], index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name,
      url: absoluteUrl(href),
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

export default function Home() {
  return (
    <SiteShell navLight>
      <JsonLd data={homePageJsonLd} />
      <main>
        {/* 01 — First impression + conversion entry */}
        <Hero image="kitchen" />
        <Marquee />
        {/* 02 — Studio identity + credentials */}
        <Approach />
        <Stats />
        {/* 03 — Philosophy before services: establish WHY before WHAT */}
        <Philosophy />
        {/* 04 — Services + work: the offering, then proof */}
        <Services />
        <ProjectGrid />
        {/* 04b — Visual image reel: cinematic pacing break */}
        <PhotoStrip />
        {/* 05 — Featured project: single editorial spotlight */}
        <FeaturedProject />
        {/* 06 — Nova Standard principles */}
        <Testimonials />
        {/*
          BEFORE/AFTER — intentionally disabled.

          This section is hidden until Nova has a sufficient library of documented
          before-and-after photography from completed projects. Displaying stock or
          unattributed transformations would be misleading to prospective clients.

          TO RE-ENABLE:
            1. Uncomment the BeforeAfter import at the top of this file.
            2. Uncomment <BeforeAfter /> below.
            3. Update BA_DATA in data/content.ts with real Nova project photography.

          FUTURE SECTION DIRECTION (when real photography is available):
            Title:       "Remodeling Possibilities"
            Headline:    "Imagine what's possible."
            Description: "Representative examples showing the types of improvements
                          homeowners often make when updating kitchens, bathrooms,
                          and living spaces."
            Categories:  Kitchens · Bathrooms · Living Spaces
            Note:        Frame as inspirational/educational, not as documented Nova
                         project case studies, unless the photography is verified
                         original Nova work.
        */}
        {/* <BeforeAfter /> */}
        {/* 07 — Process: explain how it works */}
        <Process />
        {/* 08 — Material standards: deep qualifier for serious prospects */}
        <Craft />
        {/* 08b — Editorial gallery: portfolio depth */}
        <PortfolioScroll />
        {/* 09 — Cinematic break + mid-page CTA */}
        <ParallaxSection />
        {/* 10 — Local credibility + final conversion */}
        <ServiceAreas />
        <CTASection />
        <Contact />
      </main>
    </SiteShell>
  );
}
