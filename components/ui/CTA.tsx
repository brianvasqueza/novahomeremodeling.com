import type { ComponentPropsWithoutRef } from 'react';
import { Button } from './Button';

type CtaLinkProps = {
  children: React.ReactNode;
  href: string;
  onDark?: boolean;
  variant?: 'primary' | 'tertiary';
  arrow?: boolean;
} & Omit<ComponentPropsWithoutRef<'a'>, 'href'>;

export function CtaLink({
  children,
  href,
  onDark = false,
  variant = 'primary',
  arrow = true,
  ...props
}: CtaLinkProps) {
  return (
    <Button as="a" href={href} variant={variant} onDark={onDark} arrow={arrow} {...props}>
      {children}
    </Button>
  );
}
