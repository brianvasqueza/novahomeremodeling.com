import { SiteShell } from '@/components/layout/SiteShell';
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

export default function Home() {
  return (
    <SiteShell navLight>
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
