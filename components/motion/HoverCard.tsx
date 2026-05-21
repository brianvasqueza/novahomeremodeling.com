'use client';

import { m, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';
import { ease, duration } from '@/lib/motion/config';

interface HoverCardProps {
  children: ReactNode;
  className?: string;
  // Scale factor — 1.02 is default, subtle luxury lift
  scale?: number;
  // Vertical lift in px — creates depth sensation
  lift?: number;
}

// Hover interaction wrapper — subtle scale and vertical lift.
// On touch devices, whileHover does not fire on tap, so this is safe
// for mobile without needing @media (hover: none) guards.
// Only active when pointer device supports hover (mouse/trackpad).
export function HoverCard({ children, className, scale = 1.02, lift = 3 }: HoverCardProps) {
  const reduced = useReducedMotion();

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <m.div
      className={className}
      whileHover={{ scale, y: -lift }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: duration.fast, ease: ease.smooth }}
    >
      {children}
    </m.div>
  );
}
