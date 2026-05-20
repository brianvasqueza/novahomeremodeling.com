import { Button } from '@/components/ui/Button';
import { IconArrow } from '@/components/ui/icons';
import { ResponsiveImage } from '@/components/common/ResponsiveImage';
import { HERO_IMAGES } from '@/data/content';
import { SITE } from '@/data/site';

interface HeroProps {
  image?: keyof typeof HERO_IMAGES;
}

export function Hero({ image = 'kitchen' }: HeroProps) {
  const imgUrl = HERO_IMAGES[image] ?? HERO_IMAGES.kitchen;

  return (
    <section className="hero" id="top">
      <div className="hero__bg">
        <ResponsiveImage
          src={imgUrl}
          alt="Luxury Houston kitchen remodel with wood cabinetry, large island, pendant lighting, and stone countertops."
          sizes="100vw"
          priority
        />
      </div>
      <div className="hero__overlay" />
      <div className="hero__index">No. 127 — Houston, TX · Est. 2009</div>
      <div className="container hero__body">
        <div className="hero__copy">
          <div className="hero__eyebrow">Houston Home Remodeling Company</div>
          <h1 className="hero__h1">
            Houston homes, rebuilt.
            <br />
            Every detail <em>drawn&nbsp;first.</em>
          </h1>
          <div className="hero__cta">
            <Button variant="primary" onDark as="a" href="#contact">
              Get a Houston Remodeling Estimate
            </Button>
            <a className="hero__cta-alt" href="#work">
              See remodeling work
            </a>
          </div>
        </div>
        <div className="hero__meta">
          <div className="hero__meta-strip">
            <div>
              <span>Based in</span>
              <span>Houston, TX</span>
            </div>
            <div>
              <span>Since</span>
              <span>2009</span>
            </div>
            <div>
              <span>Completed</span>
              <span>127 projects</span>
            </div>
            <div>
              <span>Call</span>
              <a href={SITE.phoneHref}>{SITE.phoneDisplay}</a>
            </div>
          </div>
          <a className="hero__scroll" href="#approach">
            Scroll to read
            <IconArrow size={12} dir="down" />
          </a>
        </div>
      </div>
    </section>
  );
}
