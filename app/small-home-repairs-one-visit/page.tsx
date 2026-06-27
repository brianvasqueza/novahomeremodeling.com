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

const PATH = '/small-home-repairs-one-visit';
const HERO_IMAGE = '/drywall/charlesdeluvio-DH-FZZ7kM5c-unsplash.jpg';
const HERO_ALT = 'Drywall patches taped over wall damage during a small repair visit.';
const TITLE = 'Small Home Repairs You Can Get Done in One Visit';
const SEO_TITLE = 'Small Home Repairs Done in One Visit';
const DESCRIPTION =
  'From drywall patches to sticky doors and paint touch-ups, see which small home repairs can often be handled in one visit and how to get a faster estimate.';
const DATE = '2026-06-27';

export const metadata: Metadata = createMetadata({
  title: SEO_TITLE,
  description: DESCRIPTION,
  path: PATH,
  image: HERO_IMAGE,
  imageAlt: HERO_ALT,
  type: 'article',
  publishedTime: DATE,
  modifiedTime: DATE,
});

const breadcrumbs = [
  { name: 'Home', href: '/' },
  { name: TITLE, href: PATH },
];

const faqs = [
  {
    question: 'How many small repairs can be handled in one visit?',
    answer:
      'A realistic one-visit scope might cover several small repairs if they use common materials and do not require long drying times, specialty parts, or hidden-wall investigation.',
  },
  {
    question: 'What photos help with a faster estimate?',
    answer:
      'Send a close-up of the damage, a wider photo for context, and a short note about what caused it. For doors or trim, include the full opening or full wall when possible.',
  },
  {
    question: 'Can drywall repairs and paint touch-ups happen together?',
    answer:
      'Often, yes. The match depends on texture, paint age, paint sheen, and whether leftover paint is available.',
  },
];

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': ['Article', 'BlogPosting'],
  '@id': absoluteUrl(`${PATH}#article`),
  headline: TITLE,
  name: SEO_TITLE,
  description: DESCRIPTION,
  url: absoluteUrl(PATH),
  image: {
    '@type': 'ImageObject',
    url: absoluteUrl(HERO_IMAGE),
    caption: HERO_ALT,
  },
  datePublished: DATE,
  dateModified: DATE,
  author: {
    '@type': 'Organization',
    name: 'Nova Home Remodeling & Design',
  },
  publisher: { '@id': absoluteUrl('/#business') },
  mainEntityOfPage: absoluteUrl(PATH),
  isPartOf: { '@id': absoluteUrl('/#website') },
  articleSection: 'Maintenance',
  keywords: [
    'small home repairs',
    'handyman services',
    'drywall repair',
    'door repair',
    'paint touch-ups',
    'Houston home repair',
  ],
  inLanguage: 'en-US',
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': absoluteUrl(`${PATH}#faq`),
  url: absoluteUrl(PATH),
  mainEntity: faqs.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};

export default function SmallHomeRepairsOneVisitPage() {
  return (
    <SiteShell navLight>
      <JsonLd data={[articleJsonLd, faqJsonLd, breadcrumbJsonLd(breadcrumbs)]} />
      <main>
        <PageHero
          eyebrow={`Maintenance · ${DATE}`}
          title={TITLE}
          description={DESCRIPTION}
          image={HERO_IMAGE}
          imageAlt={HERO_ALT}
          ctaLabel="Request a Repair Estimate"
          ctaHref="/contact"
        />
        <Breadcrumbs items={breadcrumbs} />
        <article className="section article-shell">
          <div className="container article-layout">
            <aside className="article-aside" aria-label="Article details">
              <div className="article-aside__block">
                <span>Topic</span>
                <strong>Maintenance</strong>
              </div>
              <div className="article-aside__block">
                <span>Published</span>
                <strong>{DATE}</strong>
              </div>
              <div className="article-aside__block">
                <span>Related service</span>
                <strong>Home repair</strong>
              </div>
            </aside>
            <div className="article-content">
              <div className="article-intro">
                <p>
                  Most home repairs do not need a full remodel. They just need someone to show up
                  prepared, look at the actual condition, and work through the list carefully.
                </p>
                <p>
                  If you have a hole in the wall, a door that scrapes, failed caulk, loose trim, or
                  paint touch-ups after a repair, there is a good chance several items can be handled
                  in one visit through{' '}
                  <Link href="/handyman-services-houston">Houston handyman and home repair services</Link>.
                </p>
              </div>

              <section className="article-section">
                <h2>What counts as a small home repair?</h2>
                <p>
                  A small home repair is usually visible, limited in scope, and not dependent on a
                  permit, special-order material, or major demolition. These are the items that stay
                  on a homeowner punch list because they are not emergencies, but they still make the
                  home feel unfinished.
                </p>
                <ul>
                  <li>Drywall patches, nail holes, screw pops, and doorknob damage</li>
                  <li>Doors that stick, scrape the floor, or do not latch cleanly</li>
                  <li>Loose trim, baseboards, casing, and small caulking gaps</li>
                  <li>Paint touch-ups after repairs are complete</li>
                  <li>Fence boards, gate hinges, and small exterior repair items</li>
                </ul>
              </section>

              <section className="article-section">
                <h2>Drywall patches and wall damage</h2>
                <p>
                  Small holes and wall damage are among the most common one-visit repairs. The size
                  of the hole, the wall texture, and the paint match determine whether the repair can
                  be fully finished in one appointment.
                </p>
                <p>
                  For dedicated drywall help, visit{' '}
                  <Link href="/drywall-repair-houston">Drywall Repair in Houston</Link>. For a
                  deeper decision guide, read{' '}
                  <Link href="/drywall-repair-patch-replace-repaint">
                    Drywall Repair: When to Patch, Replace, or Repaint
                  </Link>
                  .
                </p>
              </section>

              <section className="article-section">
                <h2>Doors, trim, caulking, and paint touch-ups</h2>
                <p>
                  Door issues are often caused by loose hinges, seasonal movement, strike plate
                  misalignment, or a door edge that needs adjustment. Trim and caulking issues are
                  usually slower-moving: a baseboard pulls away, a casing joint opens, or tub caulk
                  fails and needs to be removed cleanly before a new bead is applied.
                </p>
                <p>
                  Paint touch-ups are often part of the same repair visit. The best result comes
                  when leftover paint is available and the repaired area can be primed before color
                  is applied.
                </p>
                <figure className="article-figure">
                  <ResponsiveImage
                    src="/painting/karl-solano-eQ-8iUrb07g-unsplash.jpg"
                    alt="Paint tray and roller staged near a window during touch-up work."
                    sizes="(max-width: 768px) 100vw, (max-width: 1100px) 80vw, 860px"
                  />
                </figure>
              </section>

              <section className="article-section">
                <h2>When one visit may not be enough</h2>
                <p>
                  Some repairs need a second trip because joint compound needs to dry, a specific
                  trim profile has to be found, or the visible damage reveals a larger issue. Water
                  staining, soft drywall, rotted wood, or repeated cracking are signs to slow down
                  and figure out the cause before covering anything up.
                </p>
              </section>

              <section className="article-section">
                <h2>How to get a faster estimate</h2>
                <p>
                  Photos make small repair estimates much easier. Send a close-up of the problem, a
                  wider photo that shows context, and a short note about what happened. That helps
                  Nova understand whether the work is a one-visit repair or a larger scope before
                  anyone arrives.
                </p>
                <div className="article-inline-cta">
                  <p className="article-inline-cta__body">
                    Ready to clear the punch list? Send a few photos and a short description.
                  </p>
                  <Link className="btn btn--tertiary" href="/contact">
                    Contact Nova
                  </Link>
                </div>
              </section>

              <section className="article-section article-faq">
                <h2>Small Home Repair Questions</h2>
                {faqs.map((item) => (
                  <div className="article-faq__item" key={item.question}>
                    <h3>{item.question}</h3>
                    <p>{item.answer}</p>
                  </div>
                ))}
              </section>

              <section className="article-links" aria-labelledby="small-repair-links-title">
                <h2 id="small-repair-links-title">Related Home Repair Resources</h2>
                <div className="article-links__grid">
                  <Link href="/handyman-services-houston">Handyman services in Houston</Link>
                  <Link href="/drywall-repair-houston">Drywall repair in Houston</Link>
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
