import Image from 'next/image';

interface StripImage {
  src: string;
  alt: string;
  aspect: 'wide' | 'portrait' | 'square';
}

const STRIP_IMAGES: StripImage[] = [
  {
    src: 'https://images.pexels.com/photos/36777538/pexels-photo-36777538.jpeg?auto=compress&cs=tinysrgb&w=800&h=560&fit=crop',
    alt: 'Warm kitchen remodel with wood cabinets, pendant lighting, and a large island.',
    aspect: 'wide',
  },
  {
    src: 'https://images.pexels.com/photos/31238728/pexels-photo-31238728.jpeg?auto=compress&cs=tinysrgb&w=420&h=560&fit=crop',
    alt: 'Modern bathroom remodel with walk-in shower, wood vanity, and warm neutral tile.',
    aspect: 'portrait',
  },
  {
    src: 'https://images.pexels.com/photos/8356432/pexels-photo-8356432.jpeg?auto=compress&cs=tinysrgb&w=560&h=560&fit=crop',
    alt: 'Close-up of cabinet hardware on white kitchen cabinetry.',
    aspect: 'square',
  },
  {
    src: 'https://images.pexels.com/photos/19227244/pexels-photo-19227244.jpeg?auto=compress&cs=tinysrgb&w=800&h=560&fit=crop',
    alt: 'Elegant primary bathroom remodel with vanity, glass shower, and warm lighting.',
    aspect: 'wide',
  },
  {
    src: 'https://images.pexels.com/photos/15124970/pexels-photo-15124970.jpeg?auto=compress&cs=tinysrgb&w=420&h=560&fit=crop',
    alt: 'Cabinet installation in progress during a kitchen remodeling project.',
    aspect: 'portrait',
  },
  {
    src: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800&h=560&fit=crop',
    alt: 'Believable Houston-area home exterior after outdoor remodeling and curb appeal updates.',
    aspect: 'wide',
  },
  {
    src: 'https://images.pexels.com/photos/36511373/pexels-photo-36511373.jpeg?auto=compress&cs=tinysrgb&w=560&h=560&fit=crop',
    alt: 'Finished kitchen remodel detail with stone countertop, sink, and wood cabinetry.',
    aspect: 'square',
  },
  {
    src: 'https://images.pexels.com/photos/30924413/pexels-photo-30924413.jpeg?auto=compress&cs=tinysrgb&w=420&h=560&fit=crop',
    alt: 'Kitchen remodeling planning and layout work before finish installation.',
    aspect: 'portrait',
  },
  {
    src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=560&q=85&auto=format&fit=crop',
    alt: 'Exterior view of Craftsman home after heritage restoration in Houston.',
    aspect: 'wide',
  },
  {
    src: 'https://images.pexels.com/photos/6585598/pexels-photo-6585598.jpeg?auto=compress&cs=tinysrgb&w=420&h=560&fit=crop',
    alt: 'Finished bathroom remodel with clean tile, modern fixtures, and warm natural light.',
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
