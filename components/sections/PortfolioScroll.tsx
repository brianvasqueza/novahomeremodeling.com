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
    src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400&q=85&auto=format&fit=crop',
    alt: 'Bright kitchen with white oak cabinetry, limestone counters, and warm natural light.',
    caption: 'Kitchen — No. 074',
    detail: 'River Oaks · 2023',
    span: 'a',
  },
  {
    src: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=900&q=85&auto=format&fit=crop',
    alt: 'Honed stone surface and plaster finish in a primary bathroom.',
    caption: 'Stone & plaster — M.03',
    detail: 'Material detail',
    span: 'b',
  },
  {
    src: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=900&q=85&auto=format&fit=crop',
    alt: 'Primary bathroom with stone tile, heated floor, and frameless glass.',
    caption: 'Primary bath — No. 053',
    detail: 'The Woodlands · 2020',
    span: 'c',
  },
  {
    src: 'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=1400&q=85&auto=format&fit=crop',
    alt: 'Open-plan living room with warm plaster walls and exposed white oak.',
    caption: 'Whole-home — No. 071',
    detail: 'Tanglewood · 2022',
    span: 'd',
  },
  {
    src: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=700&q=85&auto=format&fit=crop',
    alt: 'Unlacquered brass cabinet hardware developing a natural patina.',
    caption: 'Hardware — M.04',
    detail: 'Material detail',
    span: 'b',
  },
  {
    src: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=1200&q=85&auto=format&fit=crop',
    alt: 'Covered outdoor living space with stone paving and custom millwork.',
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
