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

const PATH = '/handyman-services-houston';
const HERO_IMAGE = '/drywall/h-co-3coKbdfnAFg-unsplash.jpg';
const HERO_ALT = 'Worker on a ladder making an overhead repair with a drill and work light.';
const DESCRIPTION =
  'Small home repairs in Houston, including drywall patches, door adjustments, trim repair, caulking, paint touch-ups, fence fixes, and punch-list work.';

export const metadata: Metadata = createMetadata({
  title: 'Handyman Services in Houston, TX',
  description: DESCRIPTION,
  path: PATH,
  image: HERO_IMAGE,
  imageAlt: HERO_ALT,
});

const breadcrumbs = [
  { name: 'Home', href: '/' },
  { name: 'Handyman Services Houston', href: PATH },
];

const includedRepairs = [
  'Drywall patches, nail pops, doorknob holes, and minor wall damage',
  'Sticky doors, latch adjustments, hinge fixes, and scrape points',
  'Loose trim, baseboard touch-ups, small casing repairs, and caulking',
  'Paint touch-ups after repairs when matching paint is available',
  'Fence pickets, gate hardware, and small exterior repair items',
  'Punch-list repairs before guests, listing photos, move-in, or final walkthroughs',
];

const faqs = [
  {
    question: 'What kinds of handyman repairs can usually be done in one visit?',
    answer:
      'Drywall patches, sticky door adjustments, loose trim, caulking, paint touch-ups, gate hardware, and small punch-list items can often be handled in one visit when the materials are straightforward.',
  },
  {
    question: 'Can Nova handle drywall and paint together?',
    answer:
      'Yes, small drywall repairs can be patched, primed, and prepared for paint. Paint matching depends on the age, sheen, and availability of the existing paint.',
  },
  {
    question: 'Do small repairs ever turn into larger scopes?',
    answer:
      'Sometimes. Water damage, repeated cracking, rotted trim, or a shifted door frame can reveal a larger issue. In those cases, Nova explains the scope before moving beyond the original repair.',
  },
];

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': absoluteUrl(`${PATH}#service`),
  name: 'Houston Handyman & Home Repair Services',
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
  serviceType: 'Handyman and home repair services',
  category: 'Residential home repair',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Small home repair services',
    itemListElement: includedRepairs.map((name) => ({
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
  name: 'Houston Handyman & Home Repair Services',
  headline: 'Houston Handyman & Home Repair Services',
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

export default function HandymanServicesHoustonPage() {
  return (
    <SiteShell navLight>
      <JsonLd data={[serviceJsonLd, webPageJsonLd, faqJsonLd, breadcrumbJsonLd(breadcrumbs)]} />
      <main>
        <PageHero
          eyebrow="Houston home repair"
          title="Houston Handyman & Home Repair Services"
          description="Drywall patches, sticky doors, trim repair, caulking, paint touch-ups, and small punch-list fixes for Houston-area homeowners."
          image={HERO_IMAGE}
          imageAlt={HERO_ALT}
          ctaLabel="Request a Repair Estimate"
          ctaHref="/contact"
        />
        <Breadcrumbs items={breadcrumbs} />
        <article className="section article-shell">
          <div className="container article-layout">
            <aside className="article-aside" aria-label="Service details">
              <div className="article-aside__block">
                <span>Focus</span>
                <strong>Small home repairs</strong>
              </div>
              <div className="article-aside__block">
                <span>Area</span>
                <strong>Houston, TX</strong>
              </div>
              <div className="article-aside__block">
                <span>Best for</span>
                <strong>Punch-list repairs</strong>
              </div>
            </aside>
            <div className="article-content">
              <section className="article-section">
                <h2>Home repairs that do not need a full remodel</h2>
                <p>
                  Not every repair needs a large renovation crew or weeks of planning. Many Houston
                  homes simply need a careful repair visit: a wall patched, a door adjusted, old
                  caulk removed, trim tightened up, or a short list of small issues cleared before
                  they keep getting pushed to next month.
                </p>
                <p>
                  Nova treats handyman-style repair work the same way it treats bigger remodels:
                  walk the job first, explain the scope in plain terms, and give a straight answer
                  about what a repair can and can&apos;t fix.
                </p>
                <div className="article-inline-cta">
                  <p className="article-inline-cta__body">
                    Have wall damage on the list? Start with our dedicated drywall service page.
                  </p>
                  <Link className="btn btn--tertiary" href="/drywall-repair-houston">
                    Drywall Repair in Houston
                  </Link>
                </div>
              </section>

              <section className="article-section">
                <h2>Small repair services Nova can help with</h2>
                <ul>
                  {includedRepairs.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <figure className="article-figure">
                  <ResponsiveImage
                    src="/painting/pexels-kseniachernaya-5691707.jpg"
                    alt="Paint roller and brush resting in a paint tray after a touch-up repair."
                    sizes="(max-width: 768px) 100vw, (max-width: 1100px) 80vw, 860px"
                  />
                </figure>
              </section>

              <section className="article-section">
                <h2>When a one-visit repair makes sense</h2>
                <p>
                  One-visit repairs work best when the damage is visible, the materials are common,
                  and the fix does not require permits, hidden-wall investigation, or specialty
                  trade work. A small drywall patch, a sticking door, or failed caulk around trim is
                  usually a repair conversation rather than a remodel conversation.
                </p>
                <p>
                  For a deeper walkthrough of one-visit items, read{' '}
                  <Link href="/small-home-repairs-one-visit">
                    Small Home Repairs You Can Get Done in One Visit
                  </Link>
                  .
                </p>
              </section>

              <section className="article-section">
                <h2>When the scope may need more than a quick fix</h2>
                <p>
                  Water stains, soft drywall, repeated cracking, rotted exterior trim, and doors
                  that no longer fit squarely can point to a larger cause. Nova can still assess the
                  visible repair, but the right answer may be replacing damaged material or solving
                  the source before patching the surface.
                </p>
                <p>
                  If drywall is involved, the guide{' '}
                  <Link href="/drywall-repair-patch-replace-repaint">
                    Drywall Repair: When to Patch, Replace, or Repaint
                  </Link>{' '}
                  explains the decision points.
                </p>
              </section>

              <section className="article-section article-faq">
                <h2>Handyman Service Questions</h2>
                {faqs.map((item) => (
                  <div className="article-faq__item" key={item.question}>
                    <h3>{item.question}</h3>
                    <p>{item.answer}</p>
                  </div>
                ))}
              </section>

              <section className="article-links" aria-labelledby="handyman-links-title">
                <h2 id="handyman-links-title">Related Home Repair Resources</h2>
                <div className="article-links__grid">
                  <Link href="/drywall-repair-houston">Drywall repair in Houston</Link>
                  <Link href="/small-home-repairs-one-visit">Small repairs done in one visit</Link>
                  <Link href="/drywall-repair-patch-replace-repaint">Patch, replace, or repaint drywall</Link>
                  <Link href="/contact">Request a repair estimate</Link>
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
