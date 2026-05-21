'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { CtaLink } from '@/components/ui/CTA';

interface GalleryItem {
  src: string;
  alt: string;
  caption: string;
  detail: string;
  span: 'a' | 'b' | 'c' | 'd';
}

const GALLERY: GalleryItem[] = [
  {
    src: '/kitchenremodeling/ariel-domenden-k1fe40cx2EU-unsplash.jpg',
    alt: 'Luxury kitchen and dining remodel with coffered ceiling, large island, and tall glass doors.',
    caption: 'Kitchen — No. 074',
    detail: 'River Oaks · 2023',
    span: 'a',
  },
  {
    src: '/kitchenremodeling/franco-debartolo-JxBwFjX-8hU-unsplash.jpg',
    alt: 'Warm wood kitchen cabinetry, marble counters, professional range, and stone tile floor.',
    caption: 'Stone & plaster — M.03',
    detail: 'Material detail',
    span: 'b',
  },
  {
    src: '/bathroom%20remodeling/patrick-bohn-ZZT1NLPKjZE-unsplash.jpg',
    alt: 'Primary bathroom remodel with green vanity, marble shower, brass fixtures, and twin mirrors.',
    caption: 'Primary bath — No. 053',
    detail: 'The Woodlands · 2020',
    span: 'c',
  },
  {
    src: '/homepage/michael-brown-0xp3aw009eo-unsplash.jpg',
    alt: 'Open-plan luxury living remodel with fireplace, piano, custom built-ins, and glass rail.',
    caption: 'Whole-home — No. 071',
    detail: 'Tanglewood · 2022',
    span: 'd',
  },
  {
    src: '/kitchenremodeling/lisa-anna-cnU1eDXGKL4-unsplash.jpg',
    alt: 'White kitchen cabinetry with brass pulls, white tile backsplash, and styled countertop detail.',
    caption: 'Hardware — M.04',
    detail: 'Material detail',
    span: 'b',
  },
  {
    src: '/homepage/herobackground.jpg',
    alt: 'Luxury modern home exterior with pool terrace, stone, glass, and wood cladding.',
    caption: 'Outdoor — No. 058',
    detail: 'Cypress · 2021',
    span: 'a',
  },
];

export function PortfolioScroll() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  return (
    <section className="port-scroll section" id="gallery">
      <div className="container">
        <div className="port-scroll__head">
          <Eyebrow>Portfolio — Selected images</Eyebrow>
          <CtaLink variant="tertiary" href="#work" arrow={false}>
            View all work
          </CtaLink>
        </div>
      </div>

      <div className="port-scroll__canvas" ref={trackRef}>
        <div className="port-scroll__grid">
          {GALLERY.map((item, i) => (
            <figure
              key={i}
              className={`port-img port-img--${item.span} media-reveal`}
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
              data-dimmed={hoveredIdx !== null && hoveredIdx !== i ? 'true' : undefined}
            >
              <div className="port-img__media">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 900px"
                  className="port-img__picture"
                />
              </div>
              <figcaption className="port-img__cap">
                <span className="port-img__cap-title">{item.caption}</span>
                <span className="port-img__cap-detail">{item.detail}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
