import { ResponsiveImage } from '@/components/common/ResponsiveImage';
import { CtaLink } from '@/components/ui/CTA';

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt?: string;
  ctaLabel?: string;
  ctaHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt = '',
  ctaLabel,
  ctaHref,
  secondaryLabel,
  secondaryHref,
}: PageHeroProps) {
  return (
    <section className="hero page-hero" id="top">
      <div className="hero__bg">
        <ResponsiveImage src={image} alt={imageAlt} sizes="100vw" priority />
      </div>
      <div className="hero__overlay" />
      <div className="hero__index">{eyebrow}</div>
      <div className="container hero__body">
        <div className="hero__copy">
          <div className="hero__eyebrow">Nova Home Remodeling &amp; Design</div>
          <h1 className="hero__h1">{title}</h1>
        </div>
        <div className="hero__meta page-hero__meta">
          <p>{description}</p>
          {ctaLabel && ctaHref && (
            <div className="hero__cta">
              <CtaLink href={ctaHref} onDark>
                {ctaLabel}
              </CtaLink>
              {secondaryLabel && secondaryHref && (
                <a className="hero__cta-alt" href={secondaryHref}>
                  {secondaryLabel}
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
