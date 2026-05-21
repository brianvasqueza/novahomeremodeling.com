import { Eyebrow } from '@/components/ui/Eyebrow';
import { CtaLink } from '@/components/ui/CTA';
import { ResponsiveImage } from '@/components/common/ResponsiveImage';

const FEATURED = {
  project:  'No. 081',
  category: 'Whole-home',
  location: 'River Oaks · Houston, TX',
  year:     '2024',
  sqft:     '3,400',
  duration: '14 months on site',
  title:    'A 1958 River Oaks colonial, rebuilt in white oak.',
  titleHtml: 'A 1958 River Oaks colonial, <em>rebuilt in white oak.</em>',
  body: [
    'Fourteen months on a 1958 colonial in River Oaks. A structural wall came out to open the kitchen into the living room — new LVL beam, white oak cabinetry throughout, honed limestone in both baths. The same crew framed it, tiled it, and finished it.',
    'The owners had lived here for eleven years. They asked for a home that felt like it had always looked this way. We drew every detail twice. The pantry joinery took three shop drawings to get right. On the last day, we signed the inside of a drawer face and left the number.',
  ],
  img: '/homepage/michael-brown-0xp3aw009eo-unsplash.jpg',
  imgAlt: 'Luxury open living remodel with fireplace, piano, glass rail, custom built-ins, and warm natural light.',
  details: [
    {
      img: '/kitchenremodeling/franco-debartolo-JxBwFjX-8hU-unsplash.jpg',
      alt: 'Warm wood kitchen cabinetry with marble counters, professional range, and stone tile floor.',
      caption: 'Material — Stone & plaster',
    },
    {
      img: '/bathroom%20remodeling/patrick-bohn-PoXaUHUa-Tg-unsplash.jpg',
      alt: 'Luxury primary bathroom with marble-look tile, brass hardware, glass shower, and freestanding tub.',
      caption: 'Millwork — Hand-cut joinery',
    },
    {
      img: '/kitchenremodeling/lisa-anna-cnU1eDXGKL4-unsplash.jpg',
      alt: 'White kitchen cabinetry with brass pulls, white tile backsplash, and styled countertop detail.',
      caption: 'Hardware — Unlacquered brass',
    },
  ],
};

export function FeaturedProject() {
  return (
    <section className="feat-project section--dark" id="featured">
      <div className="container">

        <div className="feat-project__pre">
          <Eyebrow dark gold>04 — Featured project</Eyebrow>
          <span className="feat-project__index">{FEATURED.project} — {FEATURED.year}</span>
        </div>

        <div className="feat-project__grid">

          {/* Main image */}
          <div className="feat-project__main media-reveal">
            <ResponsiveImage
              src={FEATURED.img}
              alt={FEATURED.imgAlt}
              sizes="(max-width: 1100px) 100vw, 58vw"
              priority={false}
            />
            <span className="feat-project__cat">{FEATURED.category}</span>
          </div>

          {/* Aside */}
          <aside className="feat-project__aside">
            <div className="feat-project__meta">
              <div className="feat-project__meta-item">
                <span>Location</span>
                <span>{FEATURED.location}</span>
              </div>
              <div className="feat-project__meta-item">
                <span>Size</span>
                <span>{FEATURED.sqft} sqft</span>
              </div>
              <div className="feat-project__meta-item">
                <span>Duration</span>
                <span>{FEATURED.duration}</span>
              </div>
              <div className="feat-project__meta-item">
                <span>Year</span>
                <span>{FEATURED.year}</span>
              </div>
            </div>

            <h2
              className="feat-project__h"
              dangerouslySetInnerHTML={{ __html: FEATURED.titleHtml }}
            />

            <div className="feat-project__body">
              {FEATURED.body.map((p, i) => <p key={i}>{p}</p>)}
            </div>

            <CtaLink variant="tertiary" href="#contact" className="on-dark">
              Start a similar project
            </CtaLink>
          </aside>

        </div>

        {/* Detail strip */}
        <div className="feat-project__details">
          {FEATURED.details.map((d) => (
            <div key={d.caption} className="feat-project__detail media-reveal">
              <ResponsiveImage
                src={d.img}
                alt={d.alt}
                sizes="(max-width: 768px) 100vw, 30vw"
              />
              <div className="feat-project__detail-cap">{d.caption}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
