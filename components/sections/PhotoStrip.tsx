import Image from 'next/image';

interface StripImage {
  src: string;
  alt: string;
  aspect: 'wide' | 'portrait' | 'square';
}

const STRIP_IMAGES: StripImage[] = [
  {
    src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=560&q=85&auto=format&fit=crop',
    alt: 'Bright renovated kitchen with white oak cabinetry and limestone countertops.',
    aspect: 'wide',
  },
  {
    src: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=420&h=560&q=85&auto=format&fit=crop',
    alt: 'Honed stone tile and plaster finish detail in a primary bathroom.',
    aspect: 'portrait',
  },
  {
    src: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=560&h=560&q=85&auto=format&fit=crop',
    alt: 'Unlacquered brass cabinet hardware, allowed to patinate over time.',
    aspect: 'square',
  },
  {
    src: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&h=560&q=85&auto=format&fit=crop',
    alt: 'Primary bathroom with heated limestone floor and frameless glass enclosure.',
    aspect: 'wide',
  },
  {
    src: 'https://images.unsplash.com/photo-1503387837-b154d5074bd2?w=420&h=560&q=85&auto=format&fit=crop',
    alt: 'Hand-cut joinery and millwork fabrication in progress on site.',
    aspect: 'portrait',
  },
  {
    src: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=800&h=560&q=85&auto=format&fit=crop',
    alt: 'Covered outdoor living addition with stone flooring and custom millwork.',
    aspect: 'wide',
  },
  {
    src: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=560&h=560&q=85&auto=format&fit=crop',
    alt: 'Custom kitchen island with stone countertop and integrated storage.',
    aspect: 'square',
  },
  {
    src: 'https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?w=420&h=560&q=85&auto=format&fit=crop',
    alt: 'Warm living room interior with rift-sawn shelving and curated objects.',
    aspect: 'portrait',
  },
  {
    src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=560&q=85&auto=format&fit=crop',
    alt: 'Exterior view of Craftsman home after heritage restoration in Houston.',
    aspect: 'wide',
  },
  {
    src: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=420&h=560&q=85&auto=format&fit=crop',
    alt: 'Neutral tile and natural stone in a fully rebuilt primary suite bathroom.',
    aspect: 'portrait',
  },
];

export function PhotoStrip() {
  const doubled = [...STRIP_IMAGES, ...STRIP_IMAGES];

  return (
    <div className="photo-strip" aria-hidden="true">
      <div className="photo-strip__track">
        {doubled.map((img, i) => (
          <div
            key={i}
            className={`photo-strip__cell photo-strip__cell--${img.aspect}`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={img.aspect === 'wide' ? 800 : img.aspect === 'portrait' ? 420 : 560}
              height={560}
              className="photo-strip__img"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
