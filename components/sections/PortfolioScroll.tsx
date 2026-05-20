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
    src: 'https://images.pexels.com/photos/36777538/pexels-photo-36777538.jpeg?auto=compress&cs=tinysrgb&w=1400&h=1000&fit=crop',
    alt: 'Warm kitchen remodel with wood cabinets, large island, pendant lights, and stone countertops.',
    caption: 'Kitchen — No. 074',
    detail: 'River Oaks · 2023',
    span: 'a',
  },
  {
    src: 'https://images.pexels.com/photos/36511373/pexels-photo-36511373.jpeg?auto=compress&cs=tinysrgb&w=900&h=1100&fit=crop',
    alt: 'Kitchen sink, faucet, and stone countertop detail after a remodel.',
    caption: 'Stone & plaster — M.03',
    detail: 'Material detail',
    span: 'b',
  },
  {
    src: 'https://images.pexels.com/photos/31238728/pexels-photo-31238728.jpeg?auto=compress&cs=tinysrgb&w=900&h=1100&fit=crop',
    alt: 'Primary bathroom remodel with walk-in shower, warm vanity, and neutral tile.',
    caption: 'Primary bath — No. 053',
    detail: 'The Woodlands · 2020',
    span: 'c',
  },
  {
    src: 'https://images.pexels.com/photos/10827358/pexels-photo-10827358.jpeg?auto=compress&cs=tinysrgb&w=1400&h=1000&fit=crop',
    alt: 'Open-plan kitchen and living remodel with warm lighting and natural finishes.',
    caption: 'Whole-home — No. 071',
    detail: 'Tanglewood · 2022',
    span: 'd',
  },
  {
    src: 'https://images.pexels.com/photos/8356432/pexels-photo-8356432.jpeg?auto=compress&cs=tinysrgb&w=700&h=900&fit=crop',
    alt: 'Close-up of cabinet handle detail on white kitchen cabinetry.',
    caption: 'Hardware — M.04',
    detail: 'Material detail',
    span: 'b',
  },
  {
    src: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1200&h=900&fit=crop',
    alt: 'Suburban home exterior after outdoor remodeling and curb appeal improvements.',
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
