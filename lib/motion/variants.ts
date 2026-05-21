// Pure state variants — no transitions embedded.
// Transitions are always passed at the call site for composability.
// Use reducedFade / reducedContainer when prefers-reduced-motion is active.

import type { Variants } from 'framer-motion';

// ─── Entrance variants ─────────────────────────────────────────────────────

// Generic content reveal: subtle upward drift
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

// Opacity-only — use for overlays, captions, metadata
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

// Section-level entrance: larger travel distance for dramatic feel
export const sectionEntrance: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

// CTA reveal: small rise, used for buttons and calls to action
export const ctaReveal: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 },
};

// ─── Text variants ─────────────────────────────────────────────────────────

// Blur-to-sharp: premium heading reveal — requires GPU compositing
export const blurReveal: Variants = {
  hidden: { opacity: 0, filter: 'blur(10px)', y: 14 },
  visible: { opacity: 1, filter: 'blur(0px)', y: 0 },
};

// ─── Media variants ────────────────────────────────────────────────────────

// Image reveal: subtle zoom-out as opacity builds
// Parent container MUST have overflow:hidden for clean edge
export const imageReveal: Variants = {
  hidden: { opacity: 0, scale: 1.04 },
  visible: { opacity: 1, scale: 1 },
};

// ─── Stagger orchestration ─────────────────────────────────────────────────

// Container: controls timing of children — no visual change on parent itself
export const staggerContainer: Variants = {
  hidden: {},
  visible: {},
};

// Generic stagger child — pair with staggerContainer
export const staggerChild: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

// ─── Reduced-motion safe variants ──────────────────────────────────────────

// Use these when useReducedMotion() returns true
export const reducedFade: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const reducedContainer: Variants = {
  hidden: {},
  visible: {},
};
