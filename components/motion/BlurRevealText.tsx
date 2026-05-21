'use client';

import { m, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';
import { blurReveal, reducedFade } from '@/lib/motion/variants';
import { ease, duration, viewportOnce } from '@/lib/motion/config';

interface BlurRevealTextProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  // Render inline (span) vs block (div) — use inline for headings with existing block context
  inline?: boolean;
}

// Blur-to-sharp reveal for premium heading entrances.
// The blur filter creates a cinematic sharpening effect as text comes into focus.
// GPU-accelerated via filter property — use sparingly (headings, hero copy).
export function BlurRevealText({ children, className, delay = 0, inline = false }: BlurRevealTextProps) {
  const reduced = useReducedMotion();
  const Tag = inline ? m.span : m.div;

  return (
    <Tag
      className={className}
      variants={reduced ? reducedFade : blurReveal}
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
