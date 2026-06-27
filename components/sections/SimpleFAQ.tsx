'use client';

import { useState, type ReactNode } from 'react';
import { Section } from '@/components/common/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';

type FAQItem = { q: string; a: string };

type SimpleFAQProps = {
  id?: string;
  eyebrow?: string;
  title: ReactNode;
  lede?: string;
  items: FAQItem[];
};

export function SimpleFAQ({ id = 'faq', eyebrow = 'Common questions', title, lede, items }: SimpleFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function toggle(i: number) {
    setOpenIndex((prev) => (prev === i ? null : i));
  }

  return (
    <Section id={id}>
      <div className="faq__head">
        <div>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className="faq__h">{title}</h2>
        </div>
        {lede && <p className="faq__lede">{lede}</p>}
      </div>

      <div className="faq__list">
        {items.map((item, i) => (
          <div key={item.q} className={`faq__item${openIndex === i ? ' faq__item--open' : ''}`}>
            <button
              type="button"
              className="faq__question"
              onClick={() => toggle(i)}
              aria-expanded={openIndex === i}
              aria-controls={`${id}-answer-${i}`}
            >
              <span>{item.q}</span>
              <span className="faq__icon" aria-hidden>+</span>
            </button>
            <div className="faq__answer" id={`${id}-answer-${i}`} aria-hidden={openIndex !== i}>
              <div className="faq__answer-inner">
                <p>{item.a}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
