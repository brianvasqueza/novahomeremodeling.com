'use client';

import { m, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';
import { fadeUp, reducedFade } from '@/lib/motion/variants';
import { ease, duration, viewportOnce } from '@/lib/motion/config';

type AnimationScopeProps = {
  children: ReactNode;
  className?: string;
  // 'reveal' — fade-up on scroll (default)
  // 'none' — no animation, plain div (use for SSR-critical above-fold content)
  variant?: 'reveal' | 'none';
  delay?: number;
};

// Lightweight animation boundary. Prefer the dedicated motion/* components
// for more control; use AnimationScope for quick one-off wrappers.
export function AnimationScope({
  children,
  className,
  variant = 'reveal',
  delay = 0,
}: AnimationScopeProps) {
  const reduced = useReducedMotion();

  if (variant === 'none') {
    return <div className={className}>{children}</div>;
  }

  return (
    <m.div
      className={className}
      variants={reduced ? reducedFade : fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      transition={{ duration: duration.base, ease: ease.out, delay }}
    >
      {children}
    </m.div>
  );
}
