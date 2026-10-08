'use client';

import { useCallback, useMemo, useState } from 'react';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { STEPS } from '@/data/content';
import type { ProcessContent } from '@/data/service-process';
import {
  ScrollStepContent,
  StickySection,
  StickyVisualPanel,
  type StickyStoryStep,
} from '@/components/storytelling';

const PROCESS_VISUALS = [
  {
    src: '/homepage/michael-brown-0xp3aw009eo-unsplash.jpg',
    alt: 'Interior inspiration showing an open living space.',
  },
  {
    src: '/kitchenremodeling/prydumano-design-KyWwFZkcaUU-unsplash.jpg',
    alt: 'Kitchen inspiration with cabinetry and coordinated finishes.',
  },
  {
    src: '/kitchenremodeling/franco-debartolo-JxBwFjX-8hU-unsplash.jpg',
    alt: 'Kitchen inspiration showing wood cabinetry and stone counters.',
  },
  {
    src: '/bathroom%20remodeling/patrick-bohn-PoXaUHUa-Tg-unsplash.jpg',
    alt: 'Bathroom inspiration with a marble-look shower and brass fixtures.',
  },
];

const DEFAULT_CONTENT: ProcessContent = {
  title: 'A remodeling process',
  audience: 'Houston homeowners',
  lede: 'Start with the rooms involved and the changes you want to make. A clear scope helps you compare estimates, plan access, and understand which decisions are needed before work begins.',
  steps: STEPS,
};

export function Process({ content = DEFAULT_CONTENT }: { content?: ProcessContent } = {}) {
  const [active, setActive] = useState(0);
  const storySteps = useMemo<StickyStoryStep[]>(() => {
    return content.steps.map((step, index) => ({
      id: step.n,
      eyebrow: step.n,
      title: step.title,
      body: step.body,
      meta: step.duration,
      image: PROCESS_VISUALS[index] ?? PROCESS_VISUALS[0],
    }));
  }, [content.steps]);
  const handleActive = useCallback((index: number) => setActive(index), []);

  return (
    <section className="section section--dark" id="process">
      <div className="container">
        <div className="process__head">
          <div className="process__head-l">
            <Eyebrow dark gold>07 — Process</Eyebrow>
            <h2 className="process__h">
              {content.title}
              <br />
              {content.audience} <em>can follow.</em>
            </h2>
          </div>
          <div className="process__head-r">
            <p className="process__lede">
              {content.lede}
            </p>
          </div>
        </div>

        <StickySection className="process-sticky-wrap">
          <StickyVisualPanel
            steps={storySteps}
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
