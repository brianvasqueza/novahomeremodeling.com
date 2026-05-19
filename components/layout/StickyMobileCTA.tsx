'use client';

import { useState, useEffect } from 'react';
import { SITE } from '@/data/site';

export function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.75);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className={`sticky-cta${visible ? ' is-visible' : ''}`} aria-hidden={!visible}>
      <a className="sticky-cta__phone" href={SITE.phoneHref} tabIndex={visible ? 0 : -1}>
        {SITE.phoneDisplay}
      </a>
      <a className="sticky-cta__btn" href="#contact" tabIndex={visible ? 0 : -1}>
        Get a quote
      </a>
    </div>
  );
}
