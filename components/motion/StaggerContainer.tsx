'use client';

import { m, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';
import { staggerContainer, staggerChild, reducedContainer, reducedFade } from '@/lib/motion/variants';
import { ease, duration, stagger, viewportOnce } from '@/lib/motion/config';

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number; // override stagger.base in seconds
  delayChildren?: number; // initial delay before first child
}

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
  // Direct transition override for individual item
  transition?: { duration?: number; delay?: number };
}

// Wraps a list of items — propagates stagger timing to all direct children.
// Children should use <StaggerItem> or have variants with hidden/visible keys.
export function StaggerContainer({
  children,
  className,
  staggerDelay = stagger.base,
  delayChildren = 0.05,
}: StaggerContainerProps) {
  const reduced = useReducedMotion();

  const containerVariants = reduced
    ? reducedContainer
    : {
        hidden: staggerContainer.hidden,
        visible: {
          ...staggerContainer.visible,
          transition: {
            staggerChildren: staggerDelay,
            delayChildren,
          },
        },
      };

  return (
    <m.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      {children}
    </m.div>
  );
}

// Individual item inside a StaggerContainer — inherits timing from parent.
export function StaggerItem({ children, className, transition }: StaggerItemProps) {
  const reduced = useReducedMotion();

  return (
    <m.div
      className={className}
      variants={reduced ? reducedFade : staggerChild}
      transition={transition ?? { duration: duration.base, ease: ease.out }}
    >
      {children}
    </m.div>
  );
}
