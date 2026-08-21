'use client';

import type { ReactNode } from 'react';
import { m, useReducedMotion } from 'framer-motion';
import { CtaLink } from '@/components/ui/CTA';
import { SITE } from '@/data/site';
import { blurReveal, fadeIn, ctaReveal, reducedFade } from '@/lib/motion/variants';
import { ease, duration, viewportOnce } from '@/lib/motion/config';

type CTASectionProps = {
  index?: string;
  heading?: ReactNode;
  body?: string;
  ctaLabel?: string;
  ctaHref?: string;
  showEmail?: boolean;
};

export function CTASection({
  index = '10 — Get started',
  heading,
  body,
  ctaLabel = 'Request a Houston Remodeling Estimate',
  ctaHref = '#contact',
  showEmail = true,
}: CTASectionProps = {}) {
  const reduced = useReducedMotion();

  const headingVariants = reduced ? reducedFade : blurReveal;
  const fadeVariants = reduced ? reducedFade : fadeIn;
  const ctaVariants = reduced ? reducedFade : ctaReveal;

  return (
    <section className="cta section" id="cta">
      <div className="container">
        <m.div
          className="cta__index"
          variants={fadeVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          transition={{ duration: duration.base, ease: ease.smooth }}
        >
          {index}
        </m.div>
        <m.h2
          className="cta__h"
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          transition={{ duration: duration.slow, ease: ease.out, delay: 0.1 }}
        >
          {heading ?? (
            <>
              Plan your Houston
              <br />
              remodeling <em>estimate.</em>
            </>
          )}
        </m.h2>
        {body && (
          <m.p
            className="cta__body"
            variants={fadeVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            transition={{ duration: duration.base, ease: ease.smooth, delay: 0.22 }}
          >
            {body}
          </m.p>
        )}
        <m.div
          variants={ctaVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          transition={{ duration: duration.base, ease: ease.out, delay: 0.3 }}
        >
          <CtaLink href={ctaHref}>
            {ctaLabel}
          </CtaLink>
        </m.div>
        <m.div
          className="cta__sub"
          variants={fadeVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          transition={{ duration: duration.base, ease: ease.smooth, delay: 0.5 }}
        >
          <a className="link link--gold cta__phone" href={SITE.phoneHref}>
            {SITE.phoneDisplay}
          </a>
          {showEmail && (
            <>
              <span className="cta__sub-divider">·</span>
              <a className="link link--gold" href={SITE.emailHref}>
                {SITE.email}
              </a>
            </>
          )}
        </m.div>
        <m.div
          className="cta__trust"
          variants={fadeVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          transition={{ duration: duration.base, ease: ease.smooth, delay: 0.65 }}
        >
          Houston, Texas &nbsp;·&nbsp; Monday–Saturday, 7:00 AM–7:00 PM
        </m.div>
      </div>
    </section>
  );
}
