'use client';

import { useCallback, useMemo, useState } from 'react';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { STEPS, PHASE_LABELS } from '@/data/content';
import {
  ScrollStepContent,
  StickySection,
  StickyVisualPanel,
  type StickyStoryStep,
} from '@/components/storytelling';

const PROCESS_VISUALS = [
  {
    src: '/homepage/michael-brown-0xp3aw009eo-unsplash.jpg',
    alt: 'Luxury remodeled living space used during the consultation and planning phase.',
  },
  {
    src: '/kitchenremodeling/prydumano-design-KyWwFZkcaUU-unsplash.jpg',
    alt: 'Detailed kitchen finishes and cabinetry that support drawings and material planning.',
  },
  {
    src: '/kitchenremodeling/franco-debartolo-JxBwFjX-8hU-unsplash.jpg',
    alt: 'Warm kitchen remodel showing cabinetry, stone counters, and finish work during construction.',
  },
  {
    src: '/bathroom%20remodeling/patrick-bohn-PoXaUHUa-Tg-unsplash.jpg',
    alt: 'Finished bathroom remodel with marble shower and brass fixtures ready for final walkthrough.',
  },
];

export function Process() {
  const [active, setActive] = useState(0);
  const storySteps = useMemo<StickyStoryStep[]>(() => {
    return STEPS.map((step, index) => ({
      id: step.n,
      eyebrow: step.n,
      title: step.title,
      body: step.body,
      meta: step.duration,
      image: PROCESS_VISUALS[index] ?? PROCESS_VISUALS[0],
    }));
  }, []);
  const handleActive = useCallback((index: number) => setActive(index), []);

  return (
    <section className="section section--dark" id="process">
      <div className="container">
        <div className="process__head">
          <div className="process__head-l">
            <Eyebrow dark gold>07 — Process</Eyebrow>
            <h2 className="process__h">
              A remodeling process
              <br />
              Houston homeowners <em>can follow.</em>
            </h2>
          </div>
          <div className="process__head-r">
            <p className="process__lede">
              One crew per Houston remodeling project, start to finish. The same people who frame
              your kitchen are the ones who set the tile, repair drywall, install flooring, and hang
              the cabinets. No handoffs, no strangers mid-project, no timeline surprises.
            </p>
          </div>
        </div>

        <StickySection className="process-sticky-wrap">
          <StickyVisualPanel
            steps={storySteps.map((step, index) => ({
              ...step,
              title: PHASE_LABELS[index] ?? step.title,
            }))}
            activeIndex={active}
          />
          <div className="process-steps-scroll">
            {storySteps.map((step, i) => (
              <ScrollStepContent
                key={step.id}
                step={step}
                index={i}
                isActive={active === i}
                onActive={handleActive}
              />
            ))}
          </div>
        </StickySection>
      </div>
    </section>
  );
}
