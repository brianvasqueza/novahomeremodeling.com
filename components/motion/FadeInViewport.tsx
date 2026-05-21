'use client';

import { m, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';
import { fadeUp, reducedFade } from '@/lib/motion/variants';
import { ease, duration, viewportOnce } from '@/lib/motion/config';

interface FadeInViewportProps {
  children: ReactNode;
  className?: string;
  delay?: number; // seconds
}

export function FadeInViewport({ children, className, delay = 0 }: FadeInViewportProps) {
  const reduced = useReducedMotion();

  return (
    <m.div
      className={className}
      variants={reduced ? reducedFade : fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      transition={{
        duration: reduced ? duration.base : duration.base,
        ease: ease.out,
        delay,
      }}
    >
      {children}
    </m.div>
  );
}
