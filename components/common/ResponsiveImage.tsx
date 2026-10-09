import Image from 'next/image';

type ResponsiveImageProps = {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  className?: string;
  quality?: number;
  objectPosition?: string;
};

export function ResponsiveImage({
  src,
  alt,
  sizes,
  priority = false,
  className,
  quality = 82,
  objectPosition,
}: ResponsiveImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      loading={priority ? 'eager' : 'lazy'}
      quality={quality}
      className={className}
      style={objectPosition ? { objectPosition } : undefined}
    />
  );
}
