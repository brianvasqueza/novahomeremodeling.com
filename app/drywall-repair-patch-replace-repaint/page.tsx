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

const PATH = '/drywall-repair-patch-replace-repaint';
const HERO_IMAGE = '/drywall/h-co-3coKbdfnAFg-unsplash.jpg';
const HERO_ALT = 'Ceiling drywall repair in progress with a ladder and work light.';
const TITLE = 'Drywall Repair: When to Patch, Replace, or Repaint';
const SEO_TITLE = 'Drywall Repair: Patch, Replace, or Repaint?';
const DESCRIPTION =
  'Not all drywall damage needs the same fix. Learn when to patch, when to replace drywall, and when repainting is enough after wall damage.';
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
    question: 'When is a drywall patch enough?',
    answer:
      'A patch is usually enough for small holes, dents, screw pops, or isolated damage where the surrounding drywall is dry, solid, and not repeatedly cracking.',
  },
  {
    question: 'When should drywall be replaced?',
    answer:
      'Replacement is usually better when drywall is soft, crumbling, mold-contaminated, badly water damaged, or damaged across a larger section.',
  },
  {
    question: 'When does the whole wall need repainting?',
    answer:
      'Full-wall repainting often gives a cleaner result when the patch is in a prominent location, the paint is older, or the sheen does not blend with a spot touch-up.',
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
    'drywall repair',
    'drywall patch',
    'replace drywall',
    'repaint walls',
    'water-damaged drywall',
    'Houston drywall repair',
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

export default function DrywallPatchReplaceRepaintPage() {
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
          ctaLabel="Request a Drywall Estimate"
          ctaHref="/contact"
        />
        <Breadcrumbs items={breadcrumbs} />
        <article className="section article-shell">
          <div className="container article-layout">
            <aside className="article-aside" aria-label="Article details">
              <div className="article-aside__block">
                <span>Topic</span>
                <strong>Drywall repair</strong>
              </div>
              <div className="article-aside__block">
                <span>Published</span>
                <strong>{DATE}</strong>
              </div>
              <div className="article-aside__block">
                <span>Related service</span>
                <strong>Wall repair</strong>
              </div>
            </aside>
            <div className="article-content">
              <div className="article-intro">
                <p>
                  Drywall damage happens in every home. A doorknob hits a wall, furniture scrapes a
                  corner, a ceiling crack opens, or a water stain appears after a leak. The right fix
                  depends on what happened and whether the drywall is still sound.
                </p>
                <p>
                  If you already need help, start with{' '}
                  <Link href="/drywall-repair-houston">Drywall Repair in Houston</Link>. If the
                  damage is one item on a larger list, Nova also handles{' '}
                  <Link href="/handyman-services-houston">handyman and home repair services</Link>.
                </p>
              </div>

              <section className="article-section">
                <h2>When to patch drywall</h2>
                <p>
                  Patching makes sense for small holes, dents, screw pops, nail holes, and isolated
                  impact damage. The key is that the surrounding drywall should be solid, dry, and
                  stable. Texture and paint matching usually determine how visible the repair will be
                  after the wall is finished.
                </p>
                <figure className="article-figure">
                  <ResponsiveImage
                    src="/painting/pexels-40037226-7667624.jpg"
                    alt="Ladder and tool bucket staged for a repair near a window opening."
                    sizes="(max-width: 768px) 100vw, (max-width: 1100px) 80vw, 860px"
                  />
                </figure>
              </section>

              <section className="article-section">
                <h2>When to replace drywall</h2>
                <p>
                  Replacement is usually the better choice when drywall is soft, crumbling, saturated,
                  mold-contaminated, or damaged across a large section. A larger opening may also
                  need new drywall fastened to studs or backing instead of trying to bridge the gap
                  with compound.
                </p>
                <p>
                  Water damage deserves extra care. The moisture source should be resolved and the
                  area should be dry before the wall is closed or refinished.
                </p>
              </section>

              <section className="article-section">
                <h2>When repainting is enough</h2>
                <p>
                  Sometimes the drywall itself is fine and the problem is cosmetic: scuffs, small
                  surface marks, or staining that can be sealed with the right primer before paint.
                  Other times, repainting is the final step after a patch has been completed and
                  primed.
                </p>
                <p>
                  For high-visibility walls, repainting from corner to corner often blends better
                  than a small spot touch-up in the middle of an aged wall.
                </p>
                <figure className="article-figure">
                  <ResponsiveImage
                    src="/painting/pexels-blue-bird-7217985.jpg"
                    alt="Paint can and brush prepared for a wall repaint."
                    sizes="(max-width: 768px) 100vw, (max-width: 1100px) 80vw, 860px"
                  />
                </figure>
              </section>

              <section className="article-section">
                <h2>How homeowners can help the estimate</h2>
                <p>
                  Send a close-up of the damage, a wider photo showing the full wall or ceiling, and
                  any information you know about what caused it. If the damage came from water, note
                  whether the source has been repaired. For smaller punch-list items, the guide to{' '}
                  <Link href="/small-home-repairs-one-visit">
                    small home repairs that can be done in one visit
                  </Link>{' '}
                  can help set expectations.
                </p>
                <div className="article-inline-cta">
                  <p className="article-inline-cta__body">
                    Send a few photos of the damaged area and Nova can help identify the likely
                    repair path.
                  </p>
                  <Link className="btn btn--tertiary" href="/contact">
                    Contact Nova
                  </Link>
                </div>
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

              <section className="article-links" aria-labelledby="drywall-guide-links-title">
                <h2 id="drywall-guide-links-title">Related Drywall And Home Repair Resources</h2>
                <div className="article-links__grid">
                  <Link href="/drywall-repair-houston">Drywall repair in Houston</Link>
                  <Link href="/handyman-services-houston">Handyman services in Houston</Link>
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
