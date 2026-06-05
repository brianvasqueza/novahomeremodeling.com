'use client';

import { useState } from 'react';
import { RichText } from '@/components/common/RichText';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { IconArrow } from '@/components/ui/icons';
import { PRINCIPLES } from '@/data/content';

export function Testimonials() {
  const [idx, setIdx] = useState(0);
  const p = PRINCIPLES[idx];

  return (
    <section className="section" id="testimonials">
      <div className="container testi__grid">
        <div className="testi__left">
          <Eyebrow>05 — The Nova standard</Eyebrow>
          <div className="testi__count">
            {String(idx + 1).padStart(2, '0')} / {String(PRINCIPLES.length).padStart(2, '0')}
          </div>
          <div className="testi__thumbnail-stack">
            {PRINCIPLES.map((item, i) => (
              <button
                key={i}
                className={`testi__thumb ${i === idx ? 'is-active' : ''}`}
                onClick={() => setIdx(i)}
                aria-label={`View principle ${item.label}`}
              >
                <span className="testi__thumb-label">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
        <div className="testi__right">
          <RichText as="blockquote" className="testi__quote" html={p.quote} key={idx} />
          <div className="testi__attr">
            <div className="testi__principle-n">{p.label}</div>
            <div>
              <div className="testi__name">{p.title}</div>
              <div className="testi__role">{p.category}</div>
            </div>
            <div className="testi__nav">
              <button
                aria-label="Previous principle"
                onClick={() => setIdx((prev) => (prev - 1 + PRINCIPLES.length) % PRINCIPLES.length)}
              >
                <IconArrow size={14} dir="left" />
              </button>
              <button
                aria-label="Next principle"
                onClick={() => setIdx((prev) => (prev + 1) % PRINCIPLES.length)}
              >
                <IconArrow size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
