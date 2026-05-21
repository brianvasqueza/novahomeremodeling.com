'use client';

import { useEffect } from 'react';
import { initAnimations } from '@/lib/animations';

export function AnimationsProvider() {
  useEffect(() => {
    /* Wait for React hydration + first paint to settle before querying DOM */
    const id = setTimeout(initAnimations, 120);
    return () => clearTimeout(id);
  }, []);

  return null;
}
