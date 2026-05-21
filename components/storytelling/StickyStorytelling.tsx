'use client';

import Image from 'next/image';
import { AnimatePresence, m, useInView, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';
import { useEffect, useRef } from 'react';
import { ease, duration } from '@/lib/motion/config';

export type StickyStoryStep = {
  id: string;
  eyebrow: string;
  title: string;
  body: string;
  meta?: string;
  image: {
    src: string;
    alt: string;
  };
};

type StickySectionProps = {
  children: ReactNode;
  className?: string;
};

export function StickySection({ children, className }: StickySectionProps) {
  return <div className={['sticky-story', className].filter(Boolean).join(' ')}>{children}</div>;
}

type StickyVisualPanelProps = {
  steps: StickyStoryStep[];
  activeIndex: number;
};

export function StickyVisualPanel({ steps, activeIndex }: StickyVisualPanelProps) {
  const active = steps[activeIndex] ?? steps[0];

  return (
    <aside className="sticky-story__visual-col" aria-label="Current process phase">
      <div className="sticky-story__visual-panel">
        <ActiveStepTransition activeKey={active.id}>
          <div className="sticky-story__image-wrap">
            <Image
              src={active.image.src}
              alt={active.image.alt}
              fill
              sizes="(max-width: 980px) 100vw, 42vw"
              quality={82}
            />
          </div>
        </ActiveStepTransition>

        <div className="sticky-story__shade" />
        <div className="sticky-story__caption">
          <ActiveStepTransition activeKey={`${active.id}-caption`} compact>
            <div>
              <div className="sticky-story__num">
                Phase {String(activeIndex + 1).padStart(2, '0')} / {String(steps.length).padStart(2, '0')}
              </div>
              <div className="sticky-story__phase">{active.title}</div>
            </div>
          </ActiveStepTransition>

          <div className="sticky-story__bar" aria-hidden="true">
            {steps.map((step, index) => (
              <span
                key={step.id}
                className={[
                  'sticky-story__bar-seg',
                  index === activeIndex && 'is-active',
                  index < activeIndex && 'is-done',
                ]
                  .filter(Boolean)
                  .join(' ')}
              />
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}

type ScrollStepContentProps = {
  step: StickyStoryStep;
  index: number;
  isActive: boolean;
  onActive: (index: number) => void;
};

export function ScrollStepContent({ step, index, isActive, onActive }: ScrollStepContentProps) {
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { amount: 0.58, margin: '-12% 0px -28% 0px' });
  const reduced = useReducedMotion();

  useEffect(() => {
    if (inView) onActive(index);
  }, [inView, index, onActive]);

  return (
    <m.article
      ref={ref}
      className={['sticky-story__step', isActive && 'is-active'].filter(Boolean).join(' ')}
      initial={false}
      animate={
        reduced || isActive
          ? { opacity: 1, y: 0, filter: 'blur(0px)' }
          : { opacity: 0.48, y: 10, filter: 'blur(1.5px)' }
      }
      transition={{ duration: duration.base, ease: ease.out }}
    >
      <div className="step-item__num">{step.eyebrow}</div>
      <h3 className="step-item__title">{step.title}</h3>
      <p className="step-item__body">{step.body}</p>
      {step.meta && <div className="step-item__duration">{step.meta}</div>}
    </m.article>
  );
}

type ActiveStepTransitionProps = {
  activeKey: string;
  children: ReactNode;
  compact?: boolean;
};

export function ActiveStepTransition({ activeKey, children, compact = false }: ActiveStepTransitionProps) {
  const reduced = useReducedMotion();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <m.div
        key={activeKey}
        className="sticky-story__transition"
        initial={
          reduced
            ? { opacity: 1 }
            : { opacity: 0, y: compact ? 6 : 0, filter: compact ? 'blur(3px)' : 'blur(5px)' }
        }
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        exit={
          reduced
            ? { opacity: 1 }
            : { opacity: 0, y: compact ? -4 : 0, filter: compact ? 'blur(2px)' : 'blur(4px)' }
        }
        transition={{
          duration: reduced ? 0.01 : compact ? 0.28 : 0.48,
          ease: ease.out,
        }}
      >
        {children}
      </m.div>
    </AnimatePresence>
  );
}
