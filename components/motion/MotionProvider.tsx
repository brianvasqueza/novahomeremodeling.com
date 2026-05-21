'use client';

import { LazyMotion, domAnimation } from 'framer-motion';
import type { ReactNode } from 'react';

// Loads Framer Motion's animation features lazily (~28kb gzipped)
// instead of bundling them with the initial JS payload.
// All motion components inside must use `m` from framer-motion, not `motion`.
export function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={domAnimation}>
      {children}
    </LazyMotion>
  );
}
