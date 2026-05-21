'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { SITE } from '@/data/site';

interface NavProps {
  light?: boolean;
  showProgress?: boolean;
}

const NAV_LINKS = [
  { href: '/#work', label: 'Work' },
  { href: '/services', label: 'Services' },
  { href: '/#process', label: 'Process' },
  { href: '/cities', label: 'Areas' },
  { href: '/blog', label: 'Journal' },
];

export function Nav({ light = false, showProgress = true }: NavProps) {
  const [stuck, setStuck] = useState(false);
  const [progress, setProgress] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

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

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const cls = [
    'nav',
    stuck && 'is-stuck',
    light && !stuck && 'is-light is-dark',
    menuOpen && 'menu-open',
  ]
    .filter(Boolean)
    .join(' ');

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={cls}>
      <div className="container nav__inner">
        <Link href="/" className="nav__wm" aria-label="Nova — home" onClick={closeMenu}>
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
          {NAV_LINKS.map(({ href, label }) => (
            <Link key={href} href={href}>{label}</Link>
          ))}
        </nav>
        <div className="nav__right">
          <a className="nav__phone" href={SITE.phoneHref}>
            {SITE.phoneDisplay}
          </a>
          <Button
            variant={stuck ? 'primary' : 'tertiary'}
            as={Link}
            href="/#contact"
            onDark={light && !stuck}
            arrow={false}
            onClick={closeMenu}
          >
            Free Estimate
          </Button>
          <button
            className="nav__hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
              <line className="nav__hbg-1" x1="3" y1="7" x2="21" y2="7" />
              <line className="nav__hbg-2" x1="3" y1="12" x2="21" y2="12" />
              <line className="nav__hbg-3" x1="3" y1="17" x2="21" y2="17" />
            </svg>
          </button>
        </div>
      </div>
      <div className="nav__mobile-menu" aria-hidden={!menuOpen}>
        <div className="nav__mobile-inner">
          <nav className="nav__mobile-links" aria-label="Site navigation">
            {NAV_LINKS.map(({ href, label }, i) => (
              <Link
                key={href}
                href={href}
                className="nav__mobile-link"
                style={{ '--link-index': i } as React.CSSProperties}
                onClick={closeMenu}
              >
                {label}
              </Link>
            ))}
          </nav>
          <div className="nav__mobile-cta">
            <span className="nav__mobile-cta-label">Call for a free estimate</span>
            <a className="nav__mobile-cta-number" href={SITE.phoneHref} onClick={closeMenu}>
              {SITE.phoneDisplay}
            </a>
            <span className="nav__mobile-cta-meta">Houston, TX &nbsp;·&nbsp; Licensed &amp; Insured</span>
          </div>
        </div>
      </div>
      {showProgress && (
        <div className="nav__progress" style={{ width: `${progress}%` }} />
      )}
    </header>
  );
}
