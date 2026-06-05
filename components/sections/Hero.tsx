'use client';

import { useRef } from 'react';
import { m, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { HERO_IMAGES } from '@/data/content';
import { SITE } from '@/data/site';
import { ease } from '@/lib/motion/config';

interface HeroProps {
  image?: keyof typeof HERO_IMAGES;
}

// Entry timing — staggered from eyebrow → headline → CTA → meta
const T = {
  eyebrow: { delay: 0.12, dur: 0.65 },
  h1:      { delay: 0.30, dur: 0.90 },
  cta:     { delay: 0.60, dur: 0.60 },
  meta:    { delay: 0.88, dur: 0.60 },
  index:   { delay: 1.40, dur: 0.55 },
} as const;

export function Hero({ image = 'kitchen' }: HeroProps) {
  const imgUrl = HERO_IMAGES[image] ?? HERO_IMAGES.kitchen;
  const sectionRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  // Scroll-driven values — scoped to hero section exiting viewport
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  // Background parallax: moves up 72px as hero exits (img larger than hero via inset:-12%)
  const bgY = useTransform(
    scrollYProgress,
    [0, 1],
    reduced ? ['0px', '0px'] : ['0px', '-72px'],
  );

  // Overlay deepens subtly as user scrolls into content
  const overlayDepth = useTransform(
    scrollYProgress,
    [0, 0.65],
    reduced ? [0, 0] : [0, 0.14],
  );

  return (
    <section className="hero" id="top" ref={sectionRef}>
      {/* ── Background image: parallax scroll + cinematic zoom-in on load ── */}
      <m.div
        className="hero__bg"
        style={{ y: bgY }}
        initial={reduced ? false : { scale: 1.08 }}
        animate={{ scale: 1.0 }}
        transition={{ duration: 1.9, ease: ease.out }}
      >
        <Image
          src={imgUrl}
          alt="Luxury modern Houston home exterior with stone, glass, wood cladding, and pool terrace."
          fill
          sizes="100vw"
          priority
          quality={85}
          style={{ objectFit: 'cover' }}
        />
      </m.div>

      {/* ── Static gradient overlay ── */}
      <div className="hero__overlay" />

      {/* ── Scroll-depth overlay: darkens very slightly as hero exits ── */}
      <m.div className="hero__overlay-depth" style={{ opacity: overlayDepth }} />

      {/* ── Vertical index badge ── */}
      <m.div
        className="hero__index"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.65 }}
        transition={{ duration: T.index.dur, delay: T.index.delay, ease: ease.smooth }}
      >
        No. 127 — Houston, TX · Est. 2009
      </m.div>

      {/* ── Main content ── */}
      <div className="container hero__body">
        <div className="hero__copy">

          {/* Eyebrow — first element to appear */}
          <m.div
            className="hero__eyebrow"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 0.88, y: 0 }}
            transition={{ duration: T.eyebrow.dur, delay: T.eyebrow.delay, ease: ease.out }}
          >
            Houston Home Remodeling Company
          </m.div>

          {/* H1 — blur-to-sharp reveal, the cinematic centrepiece */}
          <m.h1
            className="hero__h1"
            initial={reduced
              ? { opacity: 0 }
              : { opacity: 0, filter: 'blur(9px)', y: 20 }
            }
            animate={reduced
              ? { opacity: 1 }
              : { opacity: 1, filter: 'blur(0px)', y: 0 }
            }
            transition={{ duration: T.h1.dur, delay: T.h1.delay, ease: ease.out }}
          >
            Houston homes, rebuilt.
            <br />
            Every detail <em>planned&nbsp;first.</em>
          </m.h1>

          {/* CTA buttons */}
          <m.div
            className="hero__cta"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: T.cta.dur, delay: T.cta.delay, ease: ease.out }}
          >
            <Button variant="primary" onDark as="a" href="#contact">
              Request a Houston Remodeling Estimate
            </Button>
            <a className="hero__cta-alt" href="#work">
              See remodeling work
            </a>
          </m.div>
        </div>

        {/* Meta strip + scroll indicator */}
        <m.div
          className="hero__meta"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: T.meta.dur, delay: T.meta.delay, ease: ease.out }}
        >
          <div className="hero__meta-strip">
            <div>
              <span>Based in</span>
              <span>Houston, TX</span>
            </div>
            <div>
              <span>Since</span>
              <span>2009</span>
            </div>
            <div>
              <span>Completed</span>
              <span>127 projects</span>
            </div>
            <div>
              <span>Call</span>
              <a href={SITE.phoneHref}>{SITE.phoneDisplay}</a>
            </div>
          </div>

          <ScrollCue reduced={!!reduced} />
        </m.div>
      </div>
    </section>
  );
}

// ── Premium scroll indicator ─────────────────────────────────────────────────
// A thin vertical track with a luminous line that slides down on a loop.
// Architectural, precise, unhurried — matches the brand's measured tone.

function ScrollCue({ reduced }: { reduced: boolean }) {
  return (
    <a className="hero__scroll-cue" href="#approach" aria-label="Scroll to content">
      <span className="hero__scroll-cue-label">Scroll</span>
      <span className="hero__scroll-cue-track" aria-hidden="true">
        {!reduced && (
          <m.span
            className="hero__scroll-cue-line"
            animate={{ y: ['-100%', '350%'] }}
            transition={{
              duration: 1.55,
              repeat: Infinity,
              ease: [0.4, 0, 0.6, 1],
              repeatDelay: 1.0,
              // Start after page entrance animations have settled
              delay: 2.4,
            }}
          />
        )}
      </span>
    </a>
  );
}
