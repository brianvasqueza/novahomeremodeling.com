import type { ElementType, ReactNode } from 'react';
import { cn } from '@/lib/cn';

type SectionProps = {
  id?: string;
  className?: string;
  containerClassName?: string;
  children: ReactNode;
  as?: ElementType;
  contained?: boolean;
};

export function Section({
  id,
  className,
  containerClassName,
  children,
  as,
  contained = true,
}: SectionProps) {
  const Tag = (as ?? 'section') as ElementType;

  return (
    <Tag id={id} className={cn('section', className)}>
      {contained ? <div className={cn('container', containerClassName)}>{children}</div> : children}
    </Tag>
  );
}
