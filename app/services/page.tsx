import type { Metadata } from 'next';
import Link from 'next/link';
import { SiteShell } from '@/components/layout/SiteShell';
import { PageHero } from '@/components/sections/PageHero';
import { CTASection } from '@/components/sections/CTASection';
import { Contact } from '@/components/sections/Contact';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { JsonLd } from '@/components/seo/JsonLd';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { CtaLink } from '@/components/ui/CTA';
import { ResponsiveImage } from '@/components/common/ResponsiveImage';
import { breadcrumbJsonLd, collectionPageJsonLd } from '@/lib/seo/json-ld';
import { createMetadata } from '@/lib/seo/metadata';
import { serviceUrl } from '@/lib/seo/urls';

export const metadata: Metadata = createMetadata({
  title: 'Remodeling Services in Houston, TX',
  description:
    'Kitchen remodeling, bathroom renovation, painting, drywall, flooring, carpentry, outdoor improvements, and whole-home renovations across Greater Houston by Nova Home Remodeling & Design.',
  path: '/services',
  image: '/homepage/michael-brown-0xp3aw009eo-unsplash.jpg',
  imageAlt: 'Luxury open-plan interior renovation representing Nova remodeling services in Houston.',
});

const breadcrumbs = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
];

interface ServiceCard {
  slug: string;
  eyebrow: string;
  title: string;
  titleHtml: string;
  description: string;
  includes: string[];
  benefit: string;
  img: string;
  imgAlt: string;
}

const FEATURED_SERVICES: ServiceCard[] = [
  {
    slug: 'kitchen-remodeling',
    eyebrow: 'Interior',
    title: 'Kitchen Remodeling',
    titleHtml: 'Kitchen <em>Remodeling</em>',
    description:
      'Full-scope kitchen renovations — custom cabinetry, stone countertops, tile, plumbing, and lighting. Every element is measured and planned before demolition begins.',
    includes: [
      'Custom cabinetry measured and built on site',
      'Stone, quartz, or marble countertops',
      'Tile backsplash and new plumbing fixtures',
      'Flooring, lighting, and finish hardware',
    ],
    benefit:
      'Nothing is ordered or demoed until the full scope is confirmed — no mid-project surprises.',
    img: '/kitchenremodeling/ariel-domenden-k1fe40cx2EU-unsplash.jpg',
    imgAlt: 'Warm custom kitchen remodel with wood cabinetry, stone counters, and professional appliances.',
  },
  {
    slug: 'bathroom-remodeling',
    eyebrow: 'Interior',
    title: 'Bathroom Remodeling',
    titleHtml: 'Bathroom <em>Remodeling</em>',
    description:
      'Primary suites to powder rooms. Plumbing is relocated before tile is discussed — three-step waterproofing, heated stone floors, and frameless glass finished by our in-house crew.',
    includes: [
      'Plumbing relocation and rough-in',
      'Three-step waterproofing system',
      'Custom tile layout and installation',
      'Frameless glass and fixture coordination',
    ],
    benefit:
      'We move plumbing before tile is mentioned and verify every structural detail before a single material is ordered.',
    img: '/bathroom%20remodeling/patrick-bohn-PoXaUHUa-Tg-unsplash.jpg',
    imgAlt: 'Luxury primary bathroom remodel with marble-look tile, brass fixtures, and frameless glass shower.',
  },
  {
    slug: 'interior-painting',
    eyebrow: 'Interior',
    title: 'Interior Painting',
    titleHtml: 'Interior <em>Painting</em>',
    description:
      'Wall preparation, skim coating, priming, and high-quality finish coats. The prep is the work — we approach interior walls the way a finish carpenter approaches trim.',
    includes: [
      'Skim coat and Level 5 surface preparation',
      'Two full-coverage primer coats',
      'Mineral, limewash, or standard latex finishes',
      'Trim and millwork painted separately before installation',
    ],
    benefit:
      'Walls are prepared to Level 5 as a standard — so the finish looks right under morning light, not just a straight-on walkthrough at noon.',
    img: '/painting/karl-solano-eQ-8iUrb07g-unsplash.jpg',
    imgAlt: 'Clean modern interior with freshly painted walls and refined finish work.',
  },
  {
    slug: 'exterior-painting',
    eyebrow: 'Exterior',
    title: 'Exterior Painting',
    titleHtml: 'Exterior <em>Painting</em>',
    description:
      'Full exterior preparation, oil primer on bare wood, elastomeric caulk at every seam, and UV-stable topcoats built for Houston\'s heat and humidity.',
    includes: [
      'Pressure-washing and full surface preparation',
      'Oil-based primer on all bare wood',
      'Elastomeric caulk at all windows, doors, and trim transitions',
      'Two-coat UV-stable topcoat, climate-rated',
    ],
    benefit:
      'The primer and prep system is what determines whether a paint job lasts four years or fourteen in Houston\'s climate.',
    img: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=1200&q=82&auto=format&fit=crop',
    imgAlt: 'Freshly painted home exterior with clean trim, siding, and detail work.',
  },
  {
    slug: 'drywall-repair',
    eyebrow: 'Interior',
    title: 'Drywall Repair',
    titleHtml: 'Drywall <em>Repair</em>',
    description:
      'Patch repairs, texture matching, water damage remediation, and skim coating — finished to Level 5 and inspected under raking light before primer is applied.',
    includes: [
      'Patch and compound repairs for any damage size',
      'Texture matching by hand, sampled before commitment',
      'Moisture testing on all water-damaged sections',
      'Level 5 finish, primer-ready handoff to your painter',
    ],
    benefit:
      'Every repair is checked under raking light — the angle that reveals every imperfection a straight-on noon walkthrough misses.',
    img: '/drywall/h-co-3coKbdfnAFg-unsplash.jpg',
    imgAlt: 'Smooth, freshly finished interior wall ready for primer and paint.',
  },
  {
    slug: 'beam-installation',
    eyebrow: 'Structural',
    title: 'Beam Installation',
    titleHtml: 'Beam <em>Installation</em>',
    description:
      'Structural beam installation for open-plan conversions and wall removals. A structural engineer\'s report is required before any load-bearing wall is opened — no exceptions.',
    includes: [
      'Structural engineer\'s assessment required before work begins',
      'Load-bearing wall removal and header framing',
      'Engineered beam sizing and installation',
      'Permits pulled and all inspections scheduled',
    ],
    benefit:
      'We require engineering documentation before any structural wall is opened — no rules of thumb on work that carries your home.',
    img: '/kitchenremodeling/lotus-design-n-print--Vfa35ueUCo-unsplash.jpg',
    imgAlt: 'Bright open-plan kitchen and living space achieved through a structural wall removal and beam installation.',
  },
  {
    slug: 'flooring',
    eyebrow: 'Interior',
    title: 'Flooring',
    titleHtml: '<em>Flooring</em>',
    description:
      'Hardwood, engineered oak, and stone flooring — acclimated on site, laid out before the first board drops, and installed over a properly prepared and moisture-tested subfloor.',
    includes: [
      'Minimum 14-day on-site acclimation for all hardwood',
      'Subfloor moisture testing and leveling',
      'Layout planned before installation begins',
      'Refinishing available for existing hardwood floors',
    ],
    benefit:
      'Wood flooring fails when it goes in too soon. On-site acclimation in your actual space is standard — not a schedule variable.',
    img: '/homepage/michael-brown-bZZ-YKRvRF0-unsplash.jpg',
    imgAlt: 'Bright open living room with warm hardwood floors and clean finish work.',
  },
  {
    slug: 'custom-carpentry',
    eyebrow: 'Interior',
    title: 'Carpentry & Millwork',
    titleHtml: 'Carpentry & <em>Millwork</em>',
    description:
      'Custom built-ins, cabinetry, trim, and finish carpentry — measured on site, built in our shop, and installed to fit the actual room rather than adjusted from a catalog module.',
    includes: [
      'Built-ins designed to actual room dimensions',
      'Shop-built with furniture-grade joinery',
      'Interior trim coped at all inside corners',
      'Finish applied in shop before installation',
    ],
    benefit:
      'Every piece is built specifically for the room it goes into — not sized down from a standard unit.',
    img: '/kitchenremodeling/franco-debartolo-JxBwFjX-8hU-unsplash.jpg',
    imgAlt: 'Warm wood kitchen cabinetry with stone counters — custom millwork built and installed by Nova.',
  },
  {
    slug: 'outdoor-remodeling',
    eyebrow: 'Exterior',
    title: 'Outdoor Improvements',
    titleHtml: 'Outdoor <em>Improvements</em>',
    description:
      'Full outdoor space renovations for Houston homes — grading, drainage, hardscape, covered patios, and outdoor kitchens designed for year-round use in the Houston climate.',
    includes: [
      'Drainage grading before any hardscape is set',
      'Covered patio and pergola structures',
      'Outdoor kitchen and utility rough-in',
      'Pavers, concrete, and natural stone surfaces',
    ],
    benefit:
      'Outdoor spaces in Houston fail from poor drainage and western sun exposure. We plan around both before a paver is placed.',
    img: '/Outside%20Remodeling/troy-allen-yqIfkXal-rk-unsplash.jpg',
    imgAlt: 'Premium outdoor living space with hardscape, shade structure, and Houston-climate design.',
  },
  {
    slug: 'home-renovations',
    eyebrow: 'Whole-Home',
    title: 'Whole-Home Renovation',
    titleHtml: 'Whole-Home <em>Renovation</em>',
    description:
      'Full-scope interior renovations coordinated across kitchens, bathrooms, living spaces, and structural changes — managed by a single team with one point of contact throughout.',
    includes: [
      'Comprehensive scope walkthrough and planning',
      'Kitchen, bathroom, and living space renovation',
      'Flooring, painting, and all finish work',
      'Structural changes and framing as needed',
    ],
    benefit:
      'One crew, one schedule, one contact from the first walkthrough to the final punch list — no handoffs between strangers mid-project.',
    img: '/homepage/michael-brown-0xp3aw009eo-unsplash.jpg',
    imgAlt: 'Luxury open-plan living renovation showing kitchen, living area, and premium finish work.',
  },
];

export default function ServicesIndexPage() {
  return (
    <SiteShell navLight>
      <JsonLd
        data={[
          breadcrumbJsonLd(breadcrumbs),
          collectionPageJsonLd({
            name: 'Remodeling Services in Houston, TX',
            description:
              'Kitchen remodeling, bathroom renovation, painting, drywall, flooring, carpentry, outdoor improvements, and whole-home renovations across Greater Houston by Nova Home Remodeling & Design.',
            path: '/services',
            items: FEATURED_SERVICES.map((s) => ({
              name: s.title,
              href: serviceUrl(s.slug),
            })),
          }),
        ]}
      />
      <main>
        <PageHero
          eyebrow="Services"
          title="Houston Remodeling Services"
          description="From a single kitchen remodel to a full home renovation — Nova handles kitchens, bathrooms, painting, drywall, flooring, carpentry, outdoor work, and whole-home projects across Greater Houston."
          image="/homepage/michael-brown-0xp3aw009eo-unsplash.jpg"
          imageAlt="Luxury open-plan interior renovation by Nova Home Remodeling & Design in Houston, TX."
          ctaLabel="Request an estimate"
          ctaHref="#contact"
        />
        <Breadcrumbs items={breadcrumbs} />

        <section className="section" id="services-list">
          <div className="container">
            <div className="svc-index__head">
              <Eyebrow>What we do</Eyebrow>
              <h2 className="svc-index__h">
                Services built for <em>Houston homeowners.</em>
              </h2>
              <p className="svc-index__lede">
                Each service is handled by the same in-house crew — no subcontractors for finish work, no
                project handoffs, no strangers mid-remodel. Below is an overview of the work we take on
                and what to expect from each service.
              </p>
            </div>

            <div className="svc-index__grid">
              {FEATURED_SERVICES.map((svc) => (
                <article key={svc.slug} className="svc-index-card">
                  <Link href={serviceUrl(svc.slug)} className="svc-index-card__media" tabIndex={-1} aria-hidden>
                    <ResponsiveImage
                      src={svc.img}
                      alt={svc.imgAlt}
                      sizes="(max-width: 768px) 100vw, (max-width: 1100px) 100vw, 45vw"
                    />
                  </Link>

                  <div className="svc-index-card__cat">{svc.eyebrow}</div>

                  <h3 className="svc-index-card__title">
                    <Link
                      href={serviceUrl(svc.slug)}
                      dangerouslySetInnerHTML={{ __html: svc.titleHtml }}
                    />
                  </h3>

                  <p className="svc-index-card__desc">{svc.description}</p>

                  <ul className="svc-index-card__includes">
                    {svc.includes.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>

                  <p className="svc-index-card__benefit">{svc.benefit}</p>

                  <div className="svc-index-card__cta">
                    <CtaLink href="#contact" variant="tertiary">
                      Request an estimate
                    </CtaLink>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
        <Contact />
      </main>
    </SiteShell>
  );
}
