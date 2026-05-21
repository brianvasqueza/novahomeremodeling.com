'use client';

import { m, useReducedMotion } from 'framer-motion';
import { staggerContainer, staggerChild, reducedFade, reducedContainer } from '@/lib/motion/variants';
import { ease } from '@/lib/motion/config';

const childVariants = (reduced: boolean) =>
  reduced ? reducedFade : staggerChild;

export function Stats() {
  const reduced = useReducedMotion();

  return (
    <section className="section section--flush">
      <div className="container">
        <m.div
          className="stats"
          variants={reduced ? reducedContainer : staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-8% 0px' }}
          transition={{ staggerChildren: 0.1, delayChildren: 0.05 }}
        >
          <m.div
            className="stat"
            variants={childVariants(!!reduced)}
            transition={{ duration: 0.55, ease: ease.out }}
          >
            <div className="stat__n">127</div>
            <div className="stat__l">Completed projects</div>
          </m.div>
          <m.div
            className="stat"
            variants={childVariants(!!reduced)}
            transition={{ duration: 0.55, ease: ease.out }}
          >
            <div className="stat__n">
              16<em>yr</em>
            </div>
            <div className="stat__l">Remodeling Houston homes</div>
          </m.div>
          <m.div
            className="stat"
            variants={childVariants(!!reduced)}
            transition={{ duration: 0.55, ease: ease.out }}
          >
            <div className="stat__n">15</div>
            <div className="stat__l">Craftspeople, in‑house</div>
          </m.div>
          <m.div
            className="stat"
            variants={childVariants(!!reduced)}
            transition={{ duration: 0.55, ease: ease.out }}
          >
            <div className="stat__n">
              100<em>%</em>
            </div>
            <div className="stat__l">Finish carpentry, not subcontracted</div>
          </m.div>
        </m.div>
      </div>
    </section>
  );
}
