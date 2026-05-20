import Link from 'next/link';
import { ResponsiveImage } from '@/components/common/ResponsiveImage';
import { Section } from '@/components/common/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { CtaLink } from '@/components/ui/CTA';

const KITCHEN_IMAGES = {
  problem: 'https://images.pexels.com/photos/17158648/pexels-photo-17158648.jpeg?auto=compress&cs=tinysrgb&w=1800&h=1200&fit=crop',
  explanation: 'https://images.pexels.com/photos/8082222/pexels-photo-8082222.jpeg?auto=compress&cs=tinysrgb&w=1800&h=1200&fit=crop',
  layoutWork: 'https://images.pexels.com/photos/30924413/pexels-photo-30924413.jpeg?auto=compress&cs=tinysrgb&w=1200&h=900&fit=crop',
  renovationWork: 'https://images.pexels.com/photos/15124970/pexels-photo-15124970.jpeg?auto=compress&cs=tinysrgb&w=1200&h=900&fit=crop',
  counterInstall: 'https://images.pexels.com/photos/36511373/pexels-photo-36511373.jpeg?auto=compress&cs=tinysrgb&w=1200&h=900&fit=crop',
  counterDetail: 'https://images.pexels.com/photos/15409430/pexels-photo-15409430.jpeg?auto=compress&cs=tinysrgb&w=900&h=1100&fit=crop',
  hardware: 'https://images.pexels.com/photos/8356432/pexels-photo-8356432.jpeg?auto=compress&cs=tinysrgb&w=900&h=1100&fit=crop',
  galleryOne: 'https://images.pexels.com/photos/10827358/pexels-photo-10827358.jpeg?auto=compress&cs=tinysrgb&w=1200&h=900&fit=crop',
  galleryTwo: 'https://images.pexels.com/photos/100575/pexels-photo-100575.jpeg?auto=compress&cs=tinysrgb&w=1200&h=900&fit=crop',
  galleryThree: 'https://images.pexels.com/photos/7027760/pexels-photo-7027760.jpeg?auto=compress&cs=tinysrgb&w=1200&h=900&fit=crop',
  galleryFour: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1200&h=900&fit=crop',
  galleryFive: 'https://images.pexels.com/photos/6315799/pexels-photo-6315799.jpeg?auto=compress&cs=tinysrgb&w=1200&h=900&fit=crop',
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
            <h2>Most kitchen problems are layout problems, not finish problems.</h2>
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
            <h2>One coordinated scope — drawings to final walkthrough.</h2>
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
          <h2>The sequence is what keeps a remodel from feeling improvised.</h2>
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
            <h2>The kitchen feels right because the details were decided, not assumed.</h2>
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
          <h2>A kitchen remodel should last longer than the photos.</h2>
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
            [KITCHEN_IMAGES.galleryFive, 'Contemporary kitchen remodel featuring dark wood cabinetry, marble countertops, and a high-contrast premium finish palette.'],
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
            <h2>Talk with us about your kitchen.</h2>
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
