import Link from 'next/link';
import { ResponsiveImage } from '@/components/common/ResponsiveImage';
import { Section } from '@/components/common/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { CtaLink } from '@/components/ui/CTA';

const KITCHEN_IMAGES = {
  problem: '/kitchenremodeling/ariel-domenden-k1fe40cx2EU-unsplash.jpg',
  explanation: '/kitchenremodeling/lotus-design-n-print--Vfa35ueUCo-unsplash.jpg',
  layoutWork: '/kitchenremodeling/prydumano-design-KyWwFZkcaUU-unsplash.jpg',
  renovationWork: '/kitchenremodeling/franco-debartolo-JxBwFjX-8hU-unsplash.jpg',
  counterInstall: '/kitchenremodeling/lotus-design-n-print-RwXneIyqxAw-unsplash.jpg',
  counterDetail: '/kitchenremodeling/lisa-anna-cnU1eDXGKL4-unsplash.jpg',
  hardware: '/kitchenremodeling/prydumano-design-KyWwFZkcaUU-unsplash.jpg',
  galleryOne: '/kitchenremodeling/ariel-domenden-k1fe40cx2EU-unsplash.jpg',
  galleryTwo: '/kitchenremodeling/blake-wisz-2ocL2PmZ-vA-unsplash.jpg',
  galleryThree: '/kitchenremodeling/lotus-design-n-print-RwXneIyqxAw-unsplash.jpg',
  galleryFour: '/kitchenremodeling/franco-debartolo-JxBwFjX-8hU-unsplash.jpg',
  galleryFive: '/kitchenremodeling/lisa-anna-cnU1eDXGKL4-unsplash.jpg',
};

function Visual({
  src,
  alt,
  className = '',
  sizes,
}: {
  src: string;
  alt: string;
  className?: string;
  sizes: string;
}) {
  return (
    <figure className={`kitchen-page__visual ${className}`}>
      <ResponsiveImage src={src} alt={alt} sizes={sizes} className="kitchen-page__img" />
    </figure>
  );
}

export function KitchenRemodelingExperience() {
  return (
    <>
      {/* ── Problem ─────────────────────────────────────────────────── */}
      <Section id="kitchen-problems" className="kitchen-page kitchen-page--problem">
        <div className="kitchen-page__split">
          <div className="kitchen-page__copy">
            <Eyebrow>Kitchen frustrations</Eyebrow>
            <h2>Most Houston kitchen remodeling problems start with layout, not finishes.</h2>
            <p>
              Houston homeowners often live with these frictions for years — convinced it is just the
              house. It usually is not.
            </p>
            <ul className="kitchen-page__checks">
              <li>Island sized for the showroom, not for the way the family cooks</li>
              <li>Pantry storage that is never in reach when it matters</li>
              <li>Flat lighting that makes prep feel like work</li>
              <li>Cabinet layout that makes every morning feel crowded</li>
              <li>A kitchen that closes off the home instead of connecting it</li>
            </ul>
          </div>
          <Visual
            src={KITCHEN_IMAGES.problem}
            alt="Houston kitchen remodel with large island, warm wood cabinetry, stone counters, and natural light for family gathering."
            sizes="(max-width: 1100px) 100vw, 48vw"
          />
        </div>
      </Section>

      {/* ── Service scope ────────────────────────────────────────────── */}
      <Section id="kitchen-remodeling-services" className="kitchen-page kitchen-page--explain section--alt">
        <div className="kitchen-page__split kitchen-page__split--reverse">
          <Visual
            src={KITCHEN_IMAGES.explanation}
            alt="Full kitchen remodel with floor-to-ceiling cabinetry, built-in appliances, stone countertops, and organized storage."
            sizes="(max-width: 1100px) 100vw, 48vw"
          />
          <div className="kitchen-page__copy">
            <Eyebrow>What the service includes</Eyebrow>
            <h2>Kitchen remodeling planned from drawings to final walkthrough.</h2>
            <p>
              Materials, trades, and selections are planned before construction starts — not decided
              in the field.
            </p>
            <ul className="kitchen-page__checks">
              <li>Layout redesign and island planning</li>
              <li>Custom cabinetry drawn from field measurements</li>
              <li>Countertops: quartz, natural stone, or solid surface</li>
              <li>Tile backsplash design and installation</li>
              <li>Task, ambient, and accent lighting layers</li>
              <li>Flooring transitions and threshold coordination</li>
              <li>Open-concept and structural coordination where needed</li>
              <li>Finish carpentry and final punch walkthrough</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* ── Process ─────────────────────────────────────────────────── */}
      <Section id="kitchen-remodeling-process" className="kitchen-page kitchen-page--process">
        <div className="kitchen-page__head">
          <Eyebrow>Construction process</Eyebrow>
          <h2>A clear kitchen remodeling sequence keeps the work from feeling improvised.</h2>
          <p>
            Most remodeling sites show only finished rooms. We think the in-progress work — how things
            are sequenced and verified — tells a more honest story about long-term quality.
          </p>
        </div>
        <div className="kitchen-page__process-grid">
          {[
            {
              title: '01 — Document before demolition',
              body: 'Existing conditions are recorded first. Nothing is opened that the scope does not require.',
              src: KITCHEN_IMAGES.layoutWork,
              alt: 'Kitchen renovation in progress showing layout documentation and rough work before finish installation.',
            },
            {
              title: '02 — Set cabinetry to field conditions',
              body: 'Cabinet lines, appliance clearances, fillers, and crown are verified on site before counters are templated.',
              src: KITCHEN_IMAGES.renovationWork,
              alt: 'Kitchen remodeling crew installing cabinets on site during a Houston kitchen renovation project.',
            },
            {
              title: '03 — Close out every touch point',
              body: 'Counters, backsplash, lighting, hardware, paint, and transitions are finished together — one review, not separate punch lists.',
              src: KITCHEN_IMAGES.counterInstall,
              alt: 'Finished Houston kitchen showing stone countertop, undermount sink, and fixture installation detail.',
            },
          ].map((item) => (
            <article className="kitchen-page__process-card" key={item.title}>
              <Visual src={item.src} alt={item.alt} sizes="(max-width: 768px) 100vw, 33vw" />
              <div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* ── Materials ───────────────────────────────────────────────── */}
      <Section id="kitchen-material-details" className="kitchen-page kitchen-page--details section--alt">
        <div className="kitchen-page__detail-grid">
          <div className="kitchen-page__copy">
            <Eyebrow>Materials and finishes</Eyebrow>
            <h2>Kitchen materials and finish details are decided before the work begins.</h2>
            <p>
              Counter edges, drawer pull heights, tile terminations, cabinet reveals, and light
              temperature shape how the room feels every morning. We plan each one before the work
              begins.
            </p>
            <ul className="kitchen-page__checks">
              <li>Quartz and natural stone countertops</li>
              <li>Painted, stained, or slab-front cabinetry</li>
              <li>Unlacquered brass, matte black, or brushed nickel hardware</li>
              <li>Large-format and mosaic tile backsplash</li>
              <li>Hardwood and engineered wood flooring</li>
              <li>Under-cabinet and pendant lighting</li>
            </ul>
          </div>
          <Visual
            src={KITCHEN_IMAGES.counterDetail}
            alt="Houston kitchen remodel detail with marble countertop, undermount sink, faucet, and warm wood cabinetry."
            sizes="(max-width: 768px) 100vw, 28vw"
            className="kitchen-page__visual--portrait"
          />
          <Visual
            src={KITCHEN_IMAGES.hardware}
            alt="Close-up of cabinet hardware on custom kitchen cabinetry from a Houston kitchen remodeling project."
            sizes="(max-width: 768px) 100vw, 28vw"
            className="kitchen-page__visual--portrait"
          />
        </div>
      </Section>

      {/* ── Gallery ─────────────────────────────────────────────────── */}
      <Section id="kitchen-gallery" className="kitchen-page kitchen-page--gallery">
        <div className="kitchen-page__head">
          <Eyebrow>Finished kitchens</Eyebrow>
          <h2>A Houston kitchen remodel should work long after the photos are taken.</h2>
          <p>
            The goal is a room that works better every morning — storage where hands reach, finishes
            that hold, light that makes the space feel calm.
          </p>
        </div>
        <div className="kitchen-page__gallery-grid">
          {[
            [KITCHEN_IMAGES.galleryOne, 'Houston kitchen remodel with granite island, pendant lighting, natural light, warm wood cabinetry, and stainless appliances.'],
            [KITCHEN_IMAGES.galleryTwo, 'Bright kitchen remodel with warm wood cabinetry, white countertops, tile backsplash, and windows bringing in natural light.'],
            [KITCHEN_IMAGES.galleryThree, 'Finished Houston kitchen with white shaker cabinets, stainless appliances, open shelving, and hardwood flooring.'],
            [KITCHEN_IMAGES.galleryFour, 'Modern kitchen remodel with gray cabinetry, tile backsplash, under-cabinet lighting, and clean integrated storage.'],
            [KITCHEN_IMAGES.galleryFive, 'Contemporary kitchen remodel featuring dark wood cabinetry, marble countertops, and a clean high-contrast finish palette.'],
          ].map(([src, alt], index) => (
            <Visual
              key={alt}
              src={src}
              alt={alt}
              sizes="(max-width: 768px) 100vw, 25vw"
              className={index === 0 ? 'kitchen-page__gallery-lead' : ''}
            />
          ))}
        </div>
        <div className="kitchen-page__cta">
          <div>
            <span>Kitchen remodeling in Houston</span>
            <h2>Talk with us about your Houston kitchen remodel.</h2>
          </div>
          <div>
            <p>
              We start with the layout, the frustrations, and the daily rhythms — not a cabinet
              package. No drawings are produced until the room is understood.
            </p>
            <CtaLink href="#contact">Start a kitchen project</CtaLink>
          </div>
        </div>
        <nav className="kitchen-page__links" aria-label="Related kitchen remodeling services">
          <Link href="/services/cabinet-installation">Cabinet installation</Link>
          <Link href="/services/tile-installation">Tile installation</Link>
          <Link href="/services/flooring">Flooring installation</Link>
        </nav>
      </Section>
    </>
  );
}
