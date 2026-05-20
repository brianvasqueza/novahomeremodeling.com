import Link from 'next/link';
import { RichText } from '@/components/common/RichText';
import { IconArrow, SvcIcon } from '@/components/ui/icons';
import type { ServiceCard as ServiceCardType } from '@/data/services';
import { cn } from '@/lib/cn';

type ServiceCardProps = {
  service: ServiceCardType;
  href?: string;
};

export function ServiceCard({ service, href = '#contact' }: ServiceCardProps) {
  return (
    <Link
      href={href}
      className={cn('svc-card', service.span === 2 && 'svc-card--span2')}
      aria-label={`${service.titleText} — view service details`}
    >
      <div className="svc-card__icon">
        <SvcIcon type={service.icon} />
      </div>
      <div className="svc-card__num">{service.num}</div>
      <RichText as="h3" className="svc-card__title" html={service.title} />
      <p className="svc-card__desc">{service.desc}</p>
      <div className="svc-card__arrow" aria-hidden="true">
        <IconArrow size={13} />
      </div>
    </Link>
  );
}
