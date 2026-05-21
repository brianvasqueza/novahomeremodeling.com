'use client';

import { m, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';
import { sectionEntrance, reducedFade } from '@/lib/motion/variants';
import { ease, duration, viewportOnce } from '@/lib/motion/config';

interface SectionRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number; // seconds
  // Render as a semantic element other than div
  as?: 'section' | 'article' | 'aside' | 'div';
}

// Section-level entrance — larger travel distance for dramatic impact.
// Designed for top-level section wrappers, not individual elements.
export function SectionReveal({ children, className, delay = 0, as = 'div' }: SectionRevealProps) {
  const reduced = useReducedMotion();
  const Tag = m[as];

  return (
    <Tag
      className={className}
      variants={reduced ? reducedFade : sectionEntrance}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      transition={{
        duration: reduced ? duration.base : duration.slow,
        ease: ease.out,
        delay,
      }}
    >
      {children}
    </Tag>
  );
}
