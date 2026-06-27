import type { Metadata } from 'next';
import Link from 'next/link';
import { SiteShell } from '@/components/layout/SiteShell';
import { PageHero } from '@/components/sections/PageHero';
import { CTASection } from '@/components/sections/CTASection';
import { Contact } from '@/components/sections/Contact';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { JsonLd } from '@/components/seo/JsonLd';
import { ResponsiveImage } from '@/components/common/ResponsiveImage';
import { breadcrumbJsonLd } from '@/lib/seo/json-ld';
import { createMetadata } from '@/lib/seo/metadata';
import { absoluteUrl } from '@/lib/seo/urls';
import { SITE } from '@/data/site';

const PATH = '/drywall-repair-houston';
const HERO_IMAGE = '/drywall/charlesdeluvio-DH-FZZ7kM5c-unsplash.jpg';
const HERO_ALT = 'Drywall patches taped over wall damage, ready for compound and texture.';
const DESCRIPTION =
  'Drywall repair in Houston for small holes, ceiling cracks, texture matching, water-damaged drywall, patching, priming, and repaint-ready wall repairs.';

export const metadata: Metadata = createMetadata({
  title: 'Drywall Repair in Houston, TX',
  description: DESCRIPTION,
  path: PATH,
  image: HERO_IMAGE,
  imageAlt: HERO_ALT,
});

const breadcrumbs = [
  { name: 'Home', href: '/' },
  { name: 'Drywall Repair Houston', href: PATH },
];

const repairTypes = [
  'Small holes from hardware, anchors, furniture, and doorknobs',
  'Medium patches where damaged drywall should be cut back and replaced',
  'Ceiling cracks, tape failure, and corner repairs',
  'Texture matching for orange peel, knockdown, skip-trowel, and smooth walls',
  'Primer-ready repairs before touch-up paint or full-wall repainting',
  'Water-damaged drywall assessment after the moisture source is resolved',
];

const faqs = [
  {
    question: 'Can a drywall patch be invisible?',
    answer:
      'A careful patch can usually disappear from normal viewing distance, but texture, paint age, sheen, and lighting all affect the final result. High-visibility walls may need a larger repaint area.',
  },
  {
    question: 'Should water-damaged drywall be patched or replaced?',
    answer:
      'If the drywall is soft, crumbling, mold-contaminated, or still damp, it should not simply be patched. The moisture source needs to be resolved before damaged material is repaired or replaced.',
  },
  {
    question: 'Do drywall repairs include painting?',
    answer:
      'Drywall repair can be finished primer-ready. Paint touch-ups or full-wall repainting can be discussed as part of the scope, especially when color or sheen matching may be visible.',
  },
];

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': absoluteUrl(`${PATH}#service`),
  name: 'Drywall Repair in Houston',
  description: DESCRIPTION,
  url: absoluteUrl(PATH),
  image: absoluteUrl(HERO_IMAGE),
  provider: { '@id': absoluteUrl('/#business') },
  mainEntityOfPage: absoluteUrl(PATH),
  areaServed: {
    '@type': 'City',
    name: 'Houston',
    containedInPlace: {
      '@type': 'State',
      name: 'Texas',
    },
  },
  audience: {
    '@type': 'Audience',
    audienceType: 'Houston-area homeowners',
  },
  serviceType: 'Drywall repair',
  category: 'Residential home repair',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Drywall repair services',
    itemListElement: repairTypes.map((name) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name,
        areaServed: SITE.serviceAreaDisplay,
      },
    })),
  },
};

const webPageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': absoluteUrl(`${PATH}#webpage`),
  name: 'Drywall Repair in Houston',
  headline: 'Drywall Repair in Houston',
  description: DESCRIPTION,
  url: absoluteUrl(PATH),
  isPartOf: { '@id': absoluteUrl('/#website') },
  about: { '@id': absoluteUrl(`${PATH}#service`) },
  primaryImageOfPage: {
    '@type': 'ImageObject',
    url: absoluteUrl(HERO_IMAGE),
    caption: HERO_ALT,
  },
  inLanguage: 'en-US',
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': absoluteUrl(`${PATH}#faq`),
  mainEntity: faqs.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};

export default function DrywallRepairHoustonPage() {
  return (
    <SiteShell navLight>
      <JsonLd data={[serviceJsonLd, webPageJsonLd, faqJsonLd, breadcrumbJsonLd(breadcrumbs)]} />
      <main>
        <PageHero
          eyebrow="Houston drywall repair"
          title="Drywall Repair in Houston"
          description="Drywall patches, ceiling cracks, texture matching, primer-ready repairs, and repaint planning for Houston-area homes."
          image={HERO_IMAGE}
          imageAlt={HERO_ALT}
          ctaLabel="Request a Drywall Estimate"
          ctaHref="/contact"
        />
        <Breadcrumbs items={breadcrumbs} />
        <article className="section article-shell">
          <div className="container article-layout">
            <aside className="article-aside" aria-label="Service details">
              <div className="article-aside__block">
                <span>Focus</span>
                <strong>Drywall repair</strong>
              </div>
              <div className="article-aside__block">
                <span>Finish</span>
                <strong>Primer-ready</strong>
              </div>
              <div className="article-aside__block">
                <span>Area</span>
                <strong>Houston, TX</strong>
              </div>
            </aside>
            <div className="article-content">
              <section className="article-section">
                <h2>Drywall repair that starts with the cause</h2>
                <p>
                  Drywall damage can come from a simple impact, failed tape, a door that has hit the
                  same spot for years, or a water issue that needs more care. The right repair
                  depends on the size of the damage, the condition of the material, and what needs
                  to happen after the wall is patched.
                </p>
                <p>
                  Nova handles drywall repair as part of a practical home repair scope: assess the
                  damage, repair the surface, match the surrounding finish as closely as possible,
                  and plan for primer and paint so the repair does not stand out.
                </p>
              </section>

              <section className="article-section">
                <h2>Drywall repair services</h2>
                <ul>
                  {repairTypes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <figure className="article-figure">
                  <ResponsiveImage
                    src="/painting/pexels-kseniachernaya-5691596.jpg"
                    alt="Drywall joint compound applied to a wall corner during a repair."
                    sizes="(max-width: 768px) 100vw, (max-width: 1100px) 80vw, 860px"
                  />
                </figure>
              </section>

              <section className="article-section">
                <h2>Patch, replace, or repaint?</h2>
                <p>
                  Small dents and holes can often be patched. Larger openings usually need a new
                  drywall piece fastened to solid backing. Staining, softness, or repeated cracking
                  calls for a closer look before anyone covers the surface.
                </p>
                <p>
                  For the full decision guide, read{' '}
                  <Link href="/drywall-repair-patch-replace-repaint">
                    Drywall Repair: When to Patch, Replace, or Repaint
                  </Link>
                  .
                </p>
              </section>

              <section className="article-section">
                <h2>Small wall repairs and handyman work</h2>
                <p>
                  Many drywall repairs are part of a larger punch list: a sticky door, loose trim,
                  failed caulk, or paint touch-up in the same room. If your wall repair is one item
                  on a longer list, start with{' '}
                  <Link href="/handyman-services-houston">Houston handyman and home repair services</Link>{' '}
                  or the guide to{' '}
                  <Link href="/small-home-repairs-one-visit">
                    small home repairs that can be done in one visit
                  </Link>
                  .
                </p>
              </section>

              <section className="article-section article-faq">
                <h2>Drywall Repair Questions</h2>
                {faqs.map((item) => (
                  <div className="article-faq__item" key={item.question}>
                    <h3>{item.question}</h3>
                    <p>{item.answer}</p>
                  </div>
                ))}
              </section>

              <section className="article-links" aria-labelledby="drywall-service-links-title">
                <h2 id="drywall-service-links-title">Related Drywall And Home Repair Resources</h2>
                <div className="article-links__grid">
                  <Link href="/handyman-services-houston">Handyman services in Houston</Link>
                  <Link href="/drywall-repair-patch-replace-repaint">Patch, replace, or repaint drywall</Link>
                  <Link href="/small-home-repairs-one-visit">Small repairs done in one visit</Link>
                  <Link href="/contact">Request a drywall estimate</Link>
                </div>
              </section>
            </div>
          </div>
        </article>
        <CTASection />
        <Contact />
      </main>
    </SiteShell>
  );
}
