import type { ComponentPropsWithoutRef, ElementType } from 'react';
import { IconArrow } from './icons';

type ButtonVariant = 'primary' | 'tertiary';

type ButtonProps<T extends ElementType = 'button'> = {
  as?: T;
  variant?: ButtonVariant;
  onDark?: boolean;
  arrow?: boolean;
} & Omit<ComponentPropsWithoutRef<T>, 'as'>;

export function Button<T extends ElementType = 'button'>({
  as,
  variant = 'primary',
  onDark = false,
  arrow = true,
  children,
  className,
  ...rest
}: ButtonProps<T>) {
  const Tag = (as ?? 'button') as ElementType;

  const cls = (() => {
    if (variant === 'primary') return onDark ? 'btn btn--primary-on-dark' : 'btn btn--primary';
    if (variant === 'tertiary') return `btn btn--tertiary${onDark ? ' on-dark' : ''}`;
    return 'btn';
  })();

  return (
    <Tag className={[cls, className].filter(Boolean).join(' ')} {...rest}>
      {children}
      {arrow && <IconArrow />}
    </Tag>
  );
}
