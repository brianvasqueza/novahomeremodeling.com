import { Eyebrow } from '@/components/ui/Eyebrow';
import { CtaLink } from '@/components/ui/CTA';
import { ResponsiveImage } from '@/components/common/ResponsiveImage';

const SERVICE = {
  category: 'Interior Renovation',
  titleHtml: 'Open-plan interiors <em>built for the way Houston families live.</em>',
  body: [
    'Nova handles interior renovations of all scales — from a single kitchen remodel to a full floor plan reconfiguration. We plan before any work begins, communicate throughout, and send one dedicated crew from start to finish.',
    'Our focus is on spaces that hold up. Durable materials, clean transitions, careful finish work, and a punch list we do not close until everything is right.',
  ],
  img: '/homepage/michael-brown-0xp3aw009eo-unsplash.jpg',
  imgAlt: 'Luxury open-plan living renovation with fireplace, custom built-ins, glass rail, and warm natural light.',
  attributes: [
    { label: 'Service',      value: 'Interior Renovation' },
    { label: 'Scope',        value: 'Kitchens, baths, living spaces' },
    { label: 'Crew model',   value: 'One crew, start to finish' },
    { label: 'Service area', value: 'Greater Houston, TX' },
  ],
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
          <Eyebrow dark gold>04 — Featured service</Eyebrow>
        </div>

        <div className="feat-project__grid">

          {/* Main image */}
          <div className="feat-project__main media-reveal">
            <ResponsiveImage
              src={SERVICE.img}
              alt={SERVICE.imgAlt}
              sizes="(max-width: 1100px) 100vw, 58vw"
              priority={false}
            />
            <span className="feat-project__cat">{SERVICE.category}</span>
          </div>

          {/* Aside */}
          <aside className="feat-project__aside">
            <div className="feat-project__meta">
              {SERVICE.attributes.map((a) => (
                <div key={a.label} className="feat-project__meta-item">
                  <span>{a.label}</span>
                  <span>{a.value}</span>
                </div>
              ))}
            </div>

            <h2
              className="feat-project__h"
              dangerouslySetInnerHTML={{ __html: SERVICE.titleHtml }}
            />

            <div className="feat-project__body">
              {SERVICE.body.map((p, i) => <p key={i}>{p}</p>)}
            </div>

            <CtaLink variant="tertiary" href="#contact" className="on-dark">
              Plan your remodel
            </CtaLink>
          </aside>

        </div>

        {/* Material / finish detail strip */}
        <div className="feat-project__details">
          {SERVICE.details.map((d) => (
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
