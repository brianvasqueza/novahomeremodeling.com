'use client';

import { useState, useEffect, useRef } from 'react';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { STEPS, PHASE_LABELS } from '@/data/content';

export function Process() {
  const [active, setActive] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setActive(Number((e.target as HTMLElement).dataset.idx));
          }
        });
      },
      { threshold: 0.55 },
    );
    stepRefs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

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

        <div className="process-sticky-wrap">
          <div className="process-sticky-left">
            <div className="process-sticky-card">
              <div>
                <div className="process-sticky-num" key={`num-${active}`}>
                  Phase {String(active + 1).padStart(2, '0')} / 04
                </div>
                <div className="process-sticky-phase" key={`phase-${active}`}>
                  {PHASE_LABELS[active]}
                </div>
              </div>
              <div className="process-sticky-bar">
                {STEPS.map((_, i) => (
                  <div
                    key={i}
                    className={[
                      'process-sticky-bar-seg',
                      i === active && 'is-active',
                      i < active && 'is-done',
                    ]
                      .filter(Boolean)
                      .join(' ')}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="process-steps-scroll">
            {STEPS.map((s, i) => (
              <div
                key={s.n}
                className="process-step-item reveal-blur"
                ref={(el) => { stepRefs.current[i] = el; }}
                data-idx={i}
              >
                <div className="step-item__num">{s.n}</div>
                <h3 className="step-item__title">{s.title}</h3>
                <p className="step-item__body">{s.body}</p>
                <div className="step-item__duration">{s.duration}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
