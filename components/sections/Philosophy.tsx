'use client';

import { m, useReducedMotion } from 'framer-motion';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { staggerContainer, staggerChild, reducedFade, reducedContainer } from '@/lib/motion/variants';
import { ease } from '@/lib/motion/config';

export function Philosophy() {
  const reduced = useReducedMotion();

  const listVariants = reduced ? reducedContainer : staggerContainer;
  const itemVariants = reduced ? reducedFade : staggerChild;

  return (
    <section className="section section--dark" id="philosophy">
      <div className="container philo__grid">
        <div className="philo__l">
          <Eyebrow dark gold>02 — Philosophy</Eyebrow>
          <h2 className="philo__h">
            Five things we <em>will not</em> compromise on.
          </h2>
        </div>
        <div className="philo__r">
          <m.ul
            className="philo__principles"
            variants={listVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-8% 0px' }}
            transition={{ staggerChildren: 0.12, delayChildren: 0.15 }}
          >
            <m.li
              variants={itemVariants}
              transition={{ duration: 0.55, ease: ease.out }}
            >
              <div className="n">I</div>
              <div>
                <h3>
                  One project, <em>one crew.</em>
                </h3>
                <p>
                  The same crew from demolition to the day we hand you the keys. No revolving
                  subcontractors, no unfamiliar faces six months into your home.
                </p>
              </div>
            </m.li>
            <m.li
              variants={itemVariants}
              transition={{ duration: 0.55, ease: ease.out }}
            >
              <div className="n">II</div>
              <div>
                <h3>Drawn before built.</h3>
                <p>
                  Every cabinet, every joint, every seam appears on a shop drawing before any saw is
                  turned on. Surprises are for theater, not for homes.
                </p>
              </div>
            </m.li>
            <m.li
              variants={itemVariants}
              transition={{ duration: 0.55, ease: ease.out }}
            >
              <div className="n">III</div>
              <div>
                <h3>We keep a manageable schedule.</h3>
                <p>
                  Taking on more than the crew can cover well is how quality slips. We do not bid more
                  work than we can staff. The timeline we give you at the start is the one we keep.
                </p>
              </div>
            </m.li>
            <m.li
              variants={itemVariants}
              transition={{ duration: 0.55, ease: ease.out }}
            >
              <div className="n">IV</div>
              <div>
                <h3>
                  The bill is the <em>estimate.</em>
                </h3>
                <p>
                  Fixed‑fee feasibility. Open‑book construction. No surprise change orders past
                  month four — we eat any miscount that&apos;s ours.
                </p>
              </div>
            </m.li>
            <m.li
              variants={itemVariants}
              transition={{ duration: 0.55, ease: ease.out }}
            >
              <div className="n">V</div>
              <div>
                <h3>We sign our work.</h3>
                <p>
                  Initials and date, in ink, on the inside of a drawer face. You have our number for
                  the rest of the house&apos;s life.
                </p>
              </div>
            </m.li>
          </m.ul>
        </div>
      </div>
    </section>
  );
}
