import Link from 'next/link';
import type { BreadcrumbItem } from '@/lib/seo/json-ld';

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
};

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <ol className="container breadcrumbs__list">
        {items.map((item, index) => {
          const isCurrent = index === items.length - 1;

          return (
            <li className="breadcrumbs__item" key={item.href}>
              {isCurrent ? (
                <span aria-current="page">{item.name}</span>
              ) : (
                <Link href={item.href}>{item.name}</Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
