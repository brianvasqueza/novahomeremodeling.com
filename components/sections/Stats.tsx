'use client';

import { useEffect, useRef, useState } from 'react';
import { m, useReducedMotion, useInView } from 'framer-motion';
import { staggerContainer, staggerChild, reducedFade, reducedContainer } from '@/lib/motion/variants';
import { ease } from '@/lib/motion/config';

interface StatDef {
  n: number;
  suffix?: string;
  label: string;
  dur: number;
}

const STATS: StatDef[] = [
  { n: 127, label: 'Completed Projects',            dur: 1800 },
  { n: 16,  suffix: 'yr', label: 'Houston Remodeling Experience', dur: 1400 },
  { n: 100, suffix: '%',  label: 'Owner-Led Projects',            dur: 2000 },
  { n: 1,   label: 'Dedicated Crew Per Project',    dur: 600  },
];

function useCountUp(end: number, duration: number, trigger: boolean, skipAnim: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    if (skipAnim) { setCount(end); return; }
    let start: number | null = null;
    let raf: number;
    const tick = (ts: number) => {
      if (start === null) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      setCount(Math.round((1 - Math.pow(1 - p, 3)) * end));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [trigger, end, duration, skipAnim]);
  return count;
}

function StatCard({ n, suffix, label, dur, trigger, skipAnim }: StatDef & { trigger: boolean; skipAnim: boolean }) {
  const count = useCountUp(n, dur, trigger, skipAnim);
  return (
    <>
      <div className="stat__n">
        {count}
        {suffix && <em>{suffix}</em>}
      </div>
      <div className="stat__l">{label}</div>
    </>
  );
}

const childVariants = (reduced: boolean) => reduced ? reducedFade : staggerChild;

export function Stats() {
  const reduced = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { once: true, margin: '-8% 0px' });

  return (
    <section className="section section--flush">
      <div className="container">
        <m.div
          ref={containerRef}
          className="stats"
          variants={reduced ? reducedContainer : staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-8% 0px' }}
          transition={{ staggerChildren: 0.1, delayChildren: 0.05 }}
        >
          {STATS.map((s) => (
            <m.div
              key={s.label}
              className="stat"
              variants={childVariants(!!reduced)}
              transition={{ duration: 0.55, ease: ease.out }}
            >
              <StatCard {...s} trigger={inView} skipAnim={!!reduced} />
            </m.div>
          ))}
        </m.div>
      </div>
    </section>
  );
}
