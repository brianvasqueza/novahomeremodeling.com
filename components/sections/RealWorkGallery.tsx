'use client';

import { useCallback, useEffect, useMemo, useState, type CSSProperties } from 'react';
import { ResponsiveImage } from '@/components/common/ResponsiveImage';
import { CtaLink } from '@/components/ui/CTA';
import type { WorkGroup, WorkImage, WorkVideo } from '@/data/work-gallery';

type RealWorkGalleryProps = {
  groups: WorkGroup[];
};

type LightboxItem = {
  src: string;
  alt: string;
  caption: string;
  status: WorkImage['status'];
  rotateLeft?: boolean;
};

function imageStyle(image: WorkImage): CSSProperties {
  return {
    '--work-object-position': image.objectPosition ?? 'center',
  } as CSSProperties;
}

function WorkPhoto({
  image,
  sizes,
  className = '',
  statusLabel,
  onOpen,
}: {
  image: WorkImage;
  sizes: string;
  className?: string;
  statusLabel?: string;
  onOpen: () => void;
}) {
  const picture = (
    <ResponsiveImage src={image.src} alt={image.alt} sizes={sizes} className="real-work-photo__img" />
  );

  return (
    <figure
      className={[
        'real-work-photo media-reveal',
        image.aspect === 'wide' && 'real-work-photo--wide',
        className,
      ].filter(Boolean).join(' ')}
      style={imageStyle(image)}
    >
      <div className="real-work-photo__media">
        <button
          type="button"
          className={`real-work-photo__trigger${image.rotateLeft ? ' real-work-photo__trigger--rotate-left' : ''}`}
          onClick={onOpen}
          aria-label={`Zoom in on: ${image.caption} (${image.status})`}
        >
          {image.rotateLeft ? <span className="real-work-photo__rotated-media">{picture}</span> : picture}
        </button>
        <span className="ba__label real-work-photo__badge">{statusLabel ?? image.status}</span>
      </div>
      <figcaption className="port-img__cap real-work-photo__caption">
        <span className="port-img__cap-title">{image.caption}</span>
      </figcaption>
    </figure>
  );
}

function WorkVideoTile({ video }: { video: WorkVideo }) {
  return (
    <figure className="real-work-photo real-work-photo--video media-reveal">
      <video
        className="real-work-photo__img real-work-photo__video"
        src={video.src}
        poster={video.poster}
        controls
        preload="none"
        playsInline
        aria-label={video.alt}
      />
      <span className="ba__label real-work-photo__badge">{video.status}</span>
      <figcaption className="port-img__cap real-work-photo__caption">
        <span className="port-img__cap-title">{video.caption}</span>
      </figcaption>
    </figure>
  );
}

function RealWorkSection({
  group,
  onOpenPhoto,
}: {
  group: WorkGroup;
  onOpenPhoto: (src: string) => void;
}) {
  const photos = [group.cover, ...group.images];
  const before = photos.find((image) => image.src === group.comparison?.beforeSrc);
  const after = photos.find((image) => image.src === group.comparison?.afterSrc);
  const hasComparison = Boolean(before && after);
  const supportingPhotos = hasComparison
    ? photos.filter((image) => image.src !== before?.src && image.src !== after?.src)
    : group.images;

  return (
    <article className="real-work__item reveal" id={group.id}>
      <div className={`real-work__feature${hasComparison ? ' real-work__feature--comparison' : ''}`}>
        {before && after ? (
          <div className="real-work__comparison" role="group" aria-label={`${group.comparison?.title}: ${before.status} and after`}>
            <p className="real-work__comparison-title">{group.comparison?.title}</p>
            <div className="real-work__comparison-photos">
              <WorkPhoto
                image={before}
                sizes="(max-width: 1100px) calc((100vw - 64px) / 2), (max-width: 1600px) 30vw, 440px"
                onOpen={() => onOpenPhoto(before.src)}
              />
              <WorkPhoto
                image={after}
                statusLabel="After"
                sizes="(max-width: 1100px) calc((100vw - 64px) / 2), (max-width: 1600px) 30vw, 440px"
                onOpen={() => onOpenPhoto(after.src)}
              />
            </div>
          </div>
        ) : (
          <WorkPhoto
            image={group.cover}
            sizes="(max-width: 1100px) calc(100vw - 48px), (max-width: 1600px) 46vw, 650px"
            className="real-work__cover"
            onOpen={() => onOpenPhoto(group.cover.src)}
          />
        )}
        <div className="real-work__copy">
          <span className="real-work__category">{group.category}</span>
          <h2 className="real-work__title">{group.title}</h2>
          <p className="real-work__body">{group.body}</p>
          <CtaLink href={group.ctaHref} variant="tertiary">
            {group.ctaLabel}
          </CtaLink>
        </div>
      </div>
      {(supportingPhotos.length > 0 || group.video) && (
        <div className="real-work__support" aria-label={`${group.title} supporting photos`}>
          {supportingPhotos.map((image) => (
            <WorkPhoto
              key={image.src}
              image={image}
              sizes="(max-width: 768px) 90vw, (max-width: 1100px) 45vw, 340px"
              onOpen={() => onOpenPhoto(image.src)}
            />
          ))}
          {group.video && <WorkVideoTile video={group.video} />}
        </div>
      )}
    </article>
  );
}

export function RealWorkGallery({ groups }: RealWorkGalleryProps) {
  const items = useMemo<LightboxItem[]>(() => {
    const flat: LightboxItem[] = [];
    for (const group of groups) {
      const photos = [group.cover, ...group.images];
      const before = photos.find((image) => image.src === group.comparison?.beforeSrc);
      const after = photos.find((image) => image.src === group.comparison?.afterSrc);
      const orderedPhotos = before && after
        ? [before, after, ...photos.filter((image) => image.src !== before.src && image.src !== after.src)]
        : photos;
      for (const image of orderedPhotos) {
        flat.push({ src: image.src, alt: image.alt, caption: image.caption, status: image.status, rotateLeft: image.rotateLeft });
      }
    }
    return flat;
  }, [groups]);

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const openPhoto = useCallback(
    (src: string) => {
      const index = items.findIndex((item) => item.src === src);
      if (index !== -1) setOpenIndex(index);
    },
    [items],
  );

  const close = useCallback(() => setOpenIndex(null), []);
  const showPrev = useCallback(() => {
    setOpenIndex((current) => (current === null ? null : (current - 1 + items.length) % items.length));
  }, [items.length]);
  const showNext = useCallback(() => {
    setOpenIndex((current) => (current === null ? null : (current + 1) % items.length));
  }, [items.length]);

  useEffect(() => {
    if (openIndex === null) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close();
      if (event.key === 'ArrowLeft') showPrev();
      if (event.key === 'ArrowRight') showNext();
    };
    document.addEventListener('keydown', onKeyDown);
    const { overflow } = document.body.style;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = overflow;
    };
  }, [openIndex, close, showPrev, showNext]);

  const activeItem = openIndex === null ? null : items[openIndex];
  const lightboxImage = activeItem ? (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={activeItem.src}
      alt={activeItem.alt}
      className="real-work-lightbox__img"
      onClick={(event) => event.stopPropagation()}
    />
  ) : null;

  return (
    <section className="real-work section" aria-label="Real Nova work photo sections">
      <div className="container">
        {groups.map((group) => (
          <RealWorkSection key={group.id} group={group} onOpenPhoto={openPhoto} />
        ))}
      </div>
      {activeItem && (
        <div
          className="real-work-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={activeItem.caption}
          onClick={close}
        >
          <button
            type="button"
            className="real-work-lightbox__close"
            onClick={close}
            aria-label="Close zoomed photo"
          >
            &times;
          </button>
          <button
            type="button"
            className="real-work-lightbox__nav real-work-lightbox__nav--prev"
            onClick={(event) => {
              event.stopPropagation();
              showPrev();
            }}
            aria-label="Previous photo"
          >
            &#8249;
          </button>
          {activeItem.rotateLeft ? (
            <div className="real-work-lightbox__media--rotate-left">{lightboxImage}</div>
          ) : lightboxImage}
          <button
            type="button"
            className="real-work-lightbox__nav real-work-lightbox__nav--next"
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
            aria-label="Next photo"
          >
            &#8250;
          </button>
          <p className="real-work-lightbox__caption">
            {activeItem.caption}
            <span className="real-work-lightbox__counter">
              {openIndex !== null ? openIndex + 1 : 0} / {items.length}
            </span>
          </p>
        </div>
      )}
    </section>
  );
}
