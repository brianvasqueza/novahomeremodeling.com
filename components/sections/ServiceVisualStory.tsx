import { ResponsiveImage } from '@/components/common/ResponsiveImage';
import { Section } from '@/components/common/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import type { ServiceVisualStory } from '@/data/service-visuals';
import type { ServiceLandingContent } from '@/data/service-landing';
import type { InternalLink } from '@/data/internal-links';

type VisualStoryProps = {
  visualStory: ServiceVisualStory;
};

type VisualBreakProps = VisualStoryProps & {
  content?: ServiceLandingContent;
  areaLinks?: InternalLink[];
};

function ImageFrame({
  image,
  className = '',
  sizes,
}: {
  image: ServiceVisualStory['story']['image'];
  className?: string;
  sizes: string;
}) {
  return (
    <figure className={`svc-visual__figure svc-visual__figure--${image.aspect ?? 'wide'} ${className}`}>
      <ResponsiveImage src={image.src} alt={image.alt} sizes={sizes} className="svc-visual__img" />
    </figure>
  );
}

export function ServiceStoryVisual({ visualStory }: VisualStoryProps) {
  const { story } = visualStory;

  return (
    <Section id="visual-story" className="svc-visual-story">
      <ImageFrame image={story.image} sizes="100vw" className="svc-visual-story__image" />
    </Section>
  );
}

export function ServiceProcessVisual({ visualStory }: VisualStoryProps) {
  const { process } = visualStory;

  return (
    <Section id="construction-visuals" className="svc-visual-process">
      <div className="svc-visual__head">
        <Eyebrow>{process.eyebrow}</Eyebrow>
        <h2 className="svc-visual__h">{process.title}</h2>
      </div>
      <div className="svc-visual-process__grid">
        {process.items.map((item) => (
          <article className="svc-visual-process__item" key={item.title}>
            <ImageFrame image={item.image} sizes="(max-width: 768px) 100vw, 33vw" />
            <div>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

export function ServiceMicroGallery({ visualStory }: VisualStoryProps) {
  const { gallery } = visualStory;

  return (
    <Section id="service-gallery" className="svc-micro-gallery section--alt">
      <div className="svc-visual__head">
        <Eyebrow>{gallery.eyebrow}</Eyebrow>
        <h2 className="svc-visual__h">{gallery.title}</h2>
      </div>
      <div className="svc-micro-gallery__grid">
        {gallery.images.map((image, index) => (
          <ImageFrame
            key={`${image.alt}-${index}`}
            image={image}
            sizes="(max-width: 768px) 100vw, 25vw"
            className={index === 0 ? 'svc-micro-gallery__image--lead' : ''}
          />
        ))}
      </div>
    </Section>
  );
}

export function ServiceVisualBreak({ visualStory, content, areaLinks = [] }: VisualBreakProps) {
  const { visualBreak } = visualStory;
  const local = content?.local;
  const visibleAreaLinks = areaLinks.slice(0, 4);

  return (
    <section className="svc-visual-break" aria-label={local?.title ?? visualBreak.title}>
      <ResponsiveImage
        src={visualBreak.image.src}
        alt={visualBreak.image.alt}
        sizes="100vw"
        className="svc-visual-break__img"
        quality={85}
      />
      <div className="svc-visual-break__overlay" />
      <div className="container svc-visual-break__layout">
        <div className="svc-visual-break__copy">
          <span>{visualBreak.kicker}</span>
          <h2>{local?.title ?? visualBreak.title}</h2>
          <p>{local?.body ?? visualBreak.body}</p>
          {local && (
            <>
              <ul className="svc-visual-break__neighborhoods" aria-label="Houston-area remodeling context">
                {local.neighborhoods.map((name) => (
                  <li key={name}>{name}</li>
                ))}
              </ul>
              <p className="svc-visual-break__note">{local.note}</p>
            </>
          )}
        </div>
        {visibleAreaLinks.length > 0 && (
          <nav className="svc-visual-break__links" aria-label="Related service areas">
            <span className="svc-visual-break__links-title">Related service areas</span>
            {visibleAreaLinks.map((link) => (
              <a href={link.href} key={link.href}>
                <span>{link.label}</span>
                <small>{link.description}</small>
              </a>
            ))}
          </nav>
        )}
      </div>
    </section>
  );
}
