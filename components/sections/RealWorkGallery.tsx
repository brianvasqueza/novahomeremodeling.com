'use client';

import { useCallback, useEffect, useMemo, useRef, useState, type CSSProperties } from 'react';
import { ResponsiveImage } from '@/components/common/ResponsiveImage';
import { CtaLink } from '@/components/ui/CTA';
import type { WorkGroup, WorkImage, WorkVideo } from '@/data/work-gallery';

type RealWorkGalleryProps = {
  groups: WorkGroup[];
};

const COMPARISON_IMAGE_SIZES = '(max-width: 1100px) calc((100vw - 64px) / 2), (max-width: 1600px) 30vw, 440px';
const WIDE_COMPARISON_IMAGE_SIZES = '(max-width: 1100px) calc(100vw - 48px), (max-width: 1600px) 60vw, 880px';

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
    '--work-aspect-ratio': image.aspectRatio ?? '9 / 16',
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
        image.aspect === 'portrait' && 'real-work-photo--portrait',
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
  const playerRef = useRef<HTMLVideoElement>(null);
  const [showPlay, setShowPlay] = useState(true);
  const [playError, setPlayError] = useState(false);

  const playVideo = () => {
    setPlayError(false);
    playerRef.current?.play().catch(() => setPlayError(true));
  };

  return (
    <figure className="real-work-video">
      <figcaption className="real-work-video__copy">
        <span className="real-work-video__eyebrow">Video walkthrough</span>
        <h3 className="real-work-video__title">{video.caption}</h3>
        {video.description && <p className="real-work-video__description">{video.description}</p>}
        {playError && (
          <p className="real-work-video__description" role="status">
            Playback couldn&apos;t start. <a className="link" href={video.src}>Open the walkthrough</a>.
          </p>
        )}
      </figcaption>
      <div className="real-work-video__player">
        <video
          ref={playerRef}
          className="real-work-video__media"
          src={video.src}
          poster={video.poster}
          controls
          preload="none"
          playsInline
          aria-label={video.alt}
          onPlay={() => {
            setShowPlay(false);
            setPlayError(false);
          }}
          onEnded={() => setShowPlay(true)}
          onError={() => setPlayError(true)}
        />
        {showPlay && (
          <button
            type="button"
            className="real-work-video__play"
            onClick={playVideo}
            aria-label={`Play video: ${video.caption}`}
          >
            <span className="real-work-video__play-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
            </span>
            <span className="real-work-video__play-label">Play video</span>
          </button>
        )}
      </div>
    </figure>
  );
}

function comparisonPhotos(group: WorkGroup) {
  const photos = [group.cover, ...group.images];
  const before = photos.find((image) => image.src === group.comparison?.beforeSrc);
  const afterSources = group.comparison
    ? [group.comparison.afterSrc, ...(group.comparison.additionalAfterSrcs ?? [])]
    : [];
  const afters = afterSources.flatMap((src) => {
    const image = photos.find((photo) => photo.src === src);
    return image ? [image] : [];
  });
  return { before, afters };
}

function RealWorkSection({
  group,
  onOpenPhoto,
}: {
  group: WorkGroup;
  onOpenPhoto: (src: string) => void;
}) {
  const photos = [group.cover, ...group.images];
  const { before, afters } = comparisonPhotos(group);
  const hasComparison = Boolean(before && afters.length > 0);
  const portraitPair = !hasComparison && group.photoLayout === 'portrait-pair';
  const beforeAbove = group.comparison?.layout === 'before-above';
  const supportingPhotos = portraitPair ? [] : hasComparison
    ? photos.filter((image) => image.src !== before?.src && !afters.some((after) => after.src === image.src))
    : group.images;

  return (
    <article className="real-work__item reveal" id={group.id}>
      <div className={`real-work__feature${hasComparison || portraitPair ? ' real-work__feature--comparison' : ''}`}>
        {before && afters.length > 0 ? (
          <div className="real-work__comparison" role="group" aria-label={`${group.comparison?.title}: ${before.status} and after`}>
            <p className="real-work__comparison-title">{group.comparison?.title}</p>
            <div className="real-work__comparison-photos">
              <WorkPhoto
                image={before}
                className={beforeAbove ? 'real-work-photo--comparison-wide' : ''}
                sizes={beforeAbove ? WIDE_COMPARISON_IMAGE_SIZES : COMPARISON_IMAGE_SIZES}
                onOpen={() => onOpenPhoto(before.src)}
              />
              {afters.map((after, index) => (
                <WorkPhoto
                  key={after.src}
                  image={after}
                  statusLabel="After"
                  className={index > 0 && !beforeAbove ? 'real-work-photo--comparison-wide' : ''}
                  sizes={index > 0 && !beforeAbove ? WIDE_COMPARISON_IMAGE_SIZES : COMPARISON_IMAGE_SIZES}
                  onOpen={() => onOpenPhoto(after.src)}
                />
              ))}
            </div>
          </div>
        ) : portraitPair ? (
          <div className="real-work__comparison" role="group" aria-label={`${group.title} photos`}>
            <div className="real-work__comparison-photos">
              {photos.map((image) => (
                <WorkPhoto
                  key={image.src}
                  image={image}
                  sizes={COMPARISON_IMAGE_SIZES}
                  onOpen={() => onOpenPhoto(image.src)}
                />
              ))}
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
          {group.note && <p className="real-work__note">{group.note}</p>}
          <CtaLink href={group.ctaHref} variant="tertiary">
            {group.ctaLabel}
          </CtaLink>
        </div>
      </div>
      {(supportingPhotos.length > 0 || group.video) && (
        <div className="real-work__support" aria-label={`${group.title} additional media`}>
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
      const { before, afters } = comparisonPhotos(group);
      const orderedPhotos = before && afters.length > 0
        ? [before, ...afters, ...photos.filter((image) => image.src !== before.src && !afters.some((after) => after.src === image.src))]
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
