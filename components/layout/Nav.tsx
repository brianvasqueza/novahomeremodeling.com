'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { SITE } from '@/data/site';

interface NavProps {
  light?: boolean;
  showProgress?: boolean;
}

export function Nav({ light = false, showProgress = true }: NavProps) {
  const [stuck, setStuck] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setStuck(y > 80);
      if (showProgress) {
        const h = document.documentElement.scrollHeight - window.innerHeight;
        setProgress(h > 0 ? (y / h) * 100 : 0);
      }
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [showProgress]);

  const cls = [
    'nav',
    stuck && 'is-stuck',
    light && !stuck && 'is-light is-dark',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <header className={cls}>
      <div className="container nav__inner">
        <Link href="/" className="nav__wm" aria-label="Nova — home">
          <svg
            className="nav__wm-mark"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.25}
          >
            <rect x="3" y="3" width="18" height="18" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="12" y1="3" x2="12" y2="21" />
          </svg>
          NOVA
        </Link>
        <nav className="nav__links" aria-label="Primary">
          <Link href="/#work">Work</Link>
          <Link href="/services">Services</Link>
          <Link href="/#process">Process</Link>
          <Link href="/cities">Areas</Link>
          <Link href="/blog">Journal</Link>
        </nav>
        <a className="nav__phone" href={SITE.phoneHref}>
          {SITE.phoneDisplay}
        </a>
        <Button
          variant={stuck ? 'primary' : 'tertiary'}
          as={Link}
          href="/#contact"
          onDark={light && !stuck}
          arrow={false}
        >
          Free Estimate
        </Button>
      </div>
      {showProgress && (
        <div className="nav__progress" style={{ width: `${progress}%` }} />
      )}
    </header>
  );
}
