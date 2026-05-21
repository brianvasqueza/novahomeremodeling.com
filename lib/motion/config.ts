// Unified animation timing tokens for the Nova motion system.
// All Framer Motion components reference these — change here to update sitewide.

// Bezier cubic easing curves
export const ease = {
  out: [0.16, 1, 0.3, 1],          // fast start, long graceful deceleration
  inOut: [0.45, 0, 0.55, 1],       // symmetric smooth
  smooth: [0.25, 0.46, 0.45, 0.94], // natural, slightly weighted out
} as const;

// Duration presets in seconds
export const duration = {
  fast: 0.22,
  base: 0.45,
  slow: 0.65,
  image: 1.0,
} as const;

// Stagger delay between sibling children in seconds
export const stagger = {
  fast: 0.055,
  base: 0.09,
  slow: 0.14,
} as const;

// IntersectionObserver viewport settings — fire slightly before element reaches view
export const viewportOnce = { once: true, margin: '-8% 0px' } as const;

// Reduced-motion override transitions — opacity only, fast
export const reducedTransition = { duration: duration.base, ease: ease.smooth } as const;
