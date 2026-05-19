'use client';

import { useState } from 'react';
import Image from 'next/image';
import { RichText } from '@/components/common/RichText';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { IconArrow } from '@/components/ui/icons';
import { TESTIMONIALS } from '@/data/content';

export function Testimonials() {
  const [idx, setIdx] = useState(0);
  const t = TESTIMONIALS[idx];

  return (
    <section className="section" id="testimonials">
      <div className="container testi__grid">
        <div className="testi__left">
          <Eyebrow>05 — In their words</Eyebrow>
          <div className="testi__count">
            {String(idx + 1).padStart(2, '0')} / {String(TESTIMONIALS.length).padStart(2, '0')}
          </div>
          <div className="testi__thumbnail-stack">
            {TESTIMONIALS.map((item, i) => (
              <button
                key={i}
                className={`testi__thumb ${i === idx ? 'is-active' : ''}`}
                onClick={() => setIdx(i)}
                aria-label={`View testimonial from ${item.name}`}
              >
                <Image
                  src={item.img}
                  alt={item.imgAlt}
                  width={60}
                  height={60}
                  className="testi__thumb-img"
                />
              </button>
            ))}
          </div>
        </div>
        <div className="testi__right">
          <RichText as="blockquote" className="testi__quote" html={t.quote} key={idx} />
          <div className="testi__attr">
            <div className="testi__avatar">
              <Image
                src={t.img}
                alt={t.imgAlt}
                width={48}
                height={48}
                className="testi__avatar-img"
              />
            </div>
            <div>
              <div className="testi__name">{t.name}</div>
              <div className="testi__role">{t.role}</div>
            </div>
            <div className="testi__nav">
              <button
                aria-label="Previous testimonial"
                onClick={() => setIdx((p) => (p - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
              >
                <IconArrow size={14} dir="left" />
              </button>
              <button
                aria-label="Next testimonial"
                onClick={() => setIdx((p) => (p + 1) % TESTIMONIALS.length)}
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
