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
import { BeforeAfter } from '@/components/sections/BeforeAfter';
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
  'https://images.pexels.com/photos/36777538/pexels-photo-36777538.jpeg?auto=compress&cs=tinysrgb&w=2400&h=1600&fit=crop';

export const metadata: Metadata = createMetadata({
  title: 'Houston Home Remodeling Company | Kitchen, Bath, Painting & Flooring',
  description:
    'Nova Home Remodeling & Design is a Houston home remodeling company for kitchen remodeling, bathroom remodeling, interior and exterior painting, drywall repair, flooring, and whole-home renovations.',
  path: '/',
  image: HOME_IMAGE,
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
    url: HOME_IMAGE,
    caption: 'Luxury Houston kitchen remodel with wood cabinetry, large island, and stone countertops.',
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
        {/* 06 — Social proof + visual transformation */}
        <Testimonials />
        <BeforeAfter />
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
