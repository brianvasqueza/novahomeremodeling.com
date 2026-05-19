'use client';

import type { ReactNode } from 'react';

type AnimationScopeProps = {
  children: ReactNode;
  className?: string;
};

export function AnimationScope({ children, className }: AnimationScopeProps) {
  return <div className={className}>{children}</div>;
}
