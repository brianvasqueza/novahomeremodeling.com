import Link from 'next/link';
import { Section } from '@/components/common/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import type { InternalLink } from '@/data/internal-links';

type InternalLinkGridProps = {
  eyebrow: string;
  title: string;
  links: InternalLink[];
  id?: string;
};

export function InternalLinkGrid({ eyebrow, title, links, id = 'internal-links' }: InternalLinkGridProps) {
  if (links.length === 0) return null;

  return (
    <Section id={id} className="internal-links">
      <div className="internal-links__head">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="internal-links__h">{title}</h2>
      </div>
      <div className="internal-links__grid">
        {links.map((link) => (
          <Link className="internal-link-card" href={link.href} key={link.href}>
            <span className="internal-link-card__title">{link.label}</span>
            <span className="internal-link-card__body">{link.description}</span>
            <span className="internal-link-card__cta">Explore</span>
          </Link>
        ))}
      </div>
    </Section>
  );
}
