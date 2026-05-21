import Image from 'next/image';

interface StripImage {
  src: string;
  alt: string;
  aspect: 'wide' | 'portrait' | 'square';
}

const STRIP_IMAGES: StripImage[] = [
  {
    src: '/kitchenremodeling/ariel-domenden-k1fe40cx2EU-unsplash.jpg',
    alt: 'Luxury kitchen and dining remodel with coffered ceiling, large island, and tall glass doors.',
    aspect: 'wide',
  },
  {
    src: '/bathroom%20remodeling/bailey-alexander-antlPQPVcjo-unsplash.jpg',
    alt: 'Luxury bathroom with freestanding tub, marble-look floor, crystal chandelier, and soft drapery.',
    aspect: 'portrait',
  },
  {
    src: '/kitchenremodeling/lisa-anna-cnU1eDXGKL4-unsplash.jpg',
    alt: 'White kitchen cabinetry with brass pulls, tile backsplash, and styled counter detail.',
    aspect: 'square',
  },
  {
    src: '/bathroom%20remodeling/patrick-bohn-PoXaUHUa-Tg-unsplash.jpg',
    alt: 'Luxury primary bathroom with marble-look tile, brass fixtures, glass shower, and freestanding tub.',
    aspect: 'wide',
  },
  {
    src: '/kitchenremodeling/franco-debartolo-JxBwFjX-8hU-unsplash.jpg',
    alt: 'Warm wood kitchen cabinetry with marble counters and professional appliances.',
    aspect: 'portrait',
  },
  {
    src: '/homepage/herobackground.jpg',
    alt: 'Luxury modern home exterior with pool terrace, stone, glass, and wood cladding.',
    aspect: 'wide',
  },
  {
    src: '/bathroom%20remodeling/patrick-bohn-ZZT1NLPKjZE-unsplash.jpg',
    alt: 'Green vanity, brass hardware, and marble shower detail in a luxury bathroom remodel.',
    aspect: 'square',
  },
  {
    src: '/kitchenremodeling/prydumano-design-KyWwFZkcaUU-unsplash.jpg',
    alt: 'Soft neutral kitchen cabinetry and countertop detail with under-cabinet lighting.',
    aspect: 'portrait',
  },
  {
    src: '/homepage/michael-brown-0xp3aw009eo-unsplash.jpg',
    alt: 'Luxury open living room with fireplace, piano, built-in shelving, and glass rail.',
    aspect: 'wide',
  },
  {
    src: '/bathroom%20remodeling/franco-debartolo-Ns3T2jCfQFk-unsplash.jpg',
    alt: 'Freestanding tub with polished marble floor, chandelier, and soft drapery.',
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
