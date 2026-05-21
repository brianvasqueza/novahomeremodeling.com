import { ResponsiveImage } from '@/components/common/ResponsiveImage';
import type { CraftItem } from '@/data/content';
import { cn } from '@/lib/cn';

type CraftCardProps = {
  item: CraftItem;
};

export function CraftCard({ item }: CraftCardProps) {
  return (
    <article
      className={cn(
        'craft-item',
        item.span === 'wide' && 'craft-item--wide',
        item.offset && 'craft-item--offset',
      )}
    >
      <div className="craft-item__media media-reveal">
        <ResponsiveImage
          src={item.img}
          alt={item.imageAlt}
          sizes="(max-width: 760px) 100vw, (max-width: 1200px) 50vw, 680px"
        />
        <div className="craft-item__overlay" />
        <div className="craft-item__cap">{item.title}</div>
      </div>
      <div className="craft-item__num">{item.n}</div>
      <h3 className="craft-item__title">{item.title}</h3>
      <p className="craft-item__desc">{item.desc}</p>
    </article>
  );
}
