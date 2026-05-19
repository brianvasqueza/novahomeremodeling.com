'use client';

import { useRef, useState, useEffect, useCallback } from 'react';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { BA_DATA } from '@/data/content';

export function BeforeAfter() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(50);
  const [activeIdx, setActiveIdx] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const draggingRef = useRef(false);

  const d = BA_DATA[activeIdx];

  const setFromX = useCallback((clientX: number) => {
    const el = wrapRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const p = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(2, Math.min(98, p)));
  }, []);

  useEffect(() => {
    const onMove = (e: MouseEvent | TouchEvent) => {
      if (!draggingRef.current) return;
      const x = 'touches' in e ? e.touches[0].clientX : e.clientX;
      setFromX(x);
    };
    const onUp = () => { draggingRef.current = false; };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
    window.addEventListener('touchmove', onMove, { passive: true });
    window.addEventListener('touchend', onUp);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
      window.removeEventListener('touchmove', onMove);
      window.removeEventListener('touchend', onUp);
    };
  }, [setFromX]);

  const onDown = (e: React.MouseEvent | React.TouchEvent) => {
    draggingRef.current = true;
    const x = 'touches' in e ? e.touches[0].clientX : e.clientX;
    setFromX(x);
  };

  const switchProject = (idx: number) => {
    if (idx === activeIdx || transitioning) return;
    setTransitioning(true);
    setTimeout(() => {
      setActiveIdx(idx);
      setPos(50);
      setTransitioning(false);
    }, 280);
  };

  return (
    <section className="beforeafter" id="beforeafter">
      <div className="container">

        <div className="ba__head">
          <div className="ba__head-l">
            <Eyebrow dark gold>06 — Before · After</Eyebrow>
            <h2 className="ba__h">
              The same room.
              <br />
              Drag to <em>see.</em>
            </h2>
          </div>
          <div className="ba__head-r">
            <p className="ba__lede">{d.body}</p>
          </div>
        </div>

        {/* Project selector tabs */}
        <div className="ba__tabs" role="tablist" aria-label="Select project">
          {BA_DATA.map((item, i) => (
            <button
              type="button"
              key={item.project}
              role="tab"
              aria-selected={i === activeIdx}
              aria-controls="before-after-panel"
              id={`before-after-tab-${i}`}
              tabIndex={i === activeIdx ? 0 : -1}
              className={`ba__tab ${i === activeIdx ? 'is-active' : ''}`}
              onClick={() => switchProject(i)}
            >
              <span className="ba__tab-project">{item.project}</span>
              <span className="ba__tab-type">{item.type}</span>
            </button>
          ))}
        </div>

        {/* Comparison slider */}
        <div
          ref={wrapRef}
          id="before-after-panel"
          className={`ba__wrap ${transitioning ? 'is-transitioning' : ''}`}
          style={{ ['--ba-pos' as string]: `${pos}%` }}
          onMouseDown={onDown}
          onTouchStart={onDown}
          role="slider"
          aria-label={`${d.project} before and after comparison`}
          aria-valuenow={Math.round(pos)}
          aria-valuetext={`${Math.round(pos)} percent after image revealed`}
          aria-valuemin={0}
          aria-valuemax={100}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'ArrowLeft') setPos((p) => Math.max(2, p - 4));
            if (e.key === 'ArrowRight') setPos((p) => Math.min(98, p + 4));
          }}
        >
          <div
            className="ba__layer ba__layer--before"
            style={{ backgroundImage: `url('${d.before}')` }}
          />
          <div
            className="ba__layer ba__layer--after"
            style={{ backgroundImage: `url('${d.after}')` }}
          />
          <div className="ba__label ba__label--before">Before</div>
          <div className="ba__label ba__label--after">After</div>
          <div className="ba__handle">
            <div className="ba__handle-pill">
              <svg width="18" height="10" viewBox="0 0 18 10" fill="none" aria-hidden="true">
                <path d="M1 5H17M1 5L4.5 1.5M1 5L4.5 8.5M17 5L13.5 1.5M17 5L13.5 8.5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Caption row */}
        <div className="ba__caption">
          <div>
            <span>Project</span>
            <span>{d.project} — {d.location}</span>
          </div>
          <div>
            <span>Type</span>
            <span>{d.type}</span>
          </div>
          <div>
            <span>Duration</span>
            <span>{d.duration}</span>
          </div>
          <div>
            <span>Year</span>
            <span>{d.year}</span>
          </div>
        </div>

      </div>
    </section>
  );
}
