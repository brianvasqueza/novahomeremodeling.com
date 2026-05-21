'use client';

import { m, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';
import { imageReveal, reducedFade } from '@/lib/motion/variants';
import { ease, duration, viewportOnce } from '@/lib/motion/config';

interface ImageRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

// Wraps an image with a scale-out + fade-in reveal.
// REQUIRED: parent or this wrapper must have overflow:hidden — the initial
// scale:1.04 state would otherwise be visible outside the image bounds.
// Uses `overflow-hidden` inline style by default; pass className to override.
export function ImageReveal({ children, className, delay = 0 }: ImageRevealProps) {
  const reduced = useReducedMotion();

  return (
    <m.div
      className={className}
      style={className ? undefined : { overflow: 'hidden' }}
      variants={reduced ? reducedFade : imageReveal}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      transition={{
        duration: reduced ? duration.base : duration.image,
        ease: ease.out,
        delay,
      }}
    >
      {children}
    </m.div>
  );
}
