'use client';

import { useState } from 'react';
import { Section } from '@/components/common/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import type { ServicePageData } from '@/data/service-pages';

type ServiceFAQProps = {
  service: ServicePageData;
};

export function ServiceFAQ({ service }: ServiceFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function toggle(i: number) {
    setOpenIndex((prev) => (prev === i ? null : i));
  }

  return (
    <Section id="faq">
      <div className="faq__head">
        <div>
          <Eyebrow>Common questions</Eyebrow>
          <h2 className="faq__h">
            What clients <em>ask us most.</em>
          </h2>
        </div>
        <p className="faq__lede">
          Honest answers to the questions that come up in every first conversation about this type of work.
        </p>
      </div>

      <div className="faq__list">
        {service.faq.map((item, i) => (
          <div
            key={i}
            className={`faq__item${openIndex === i ? ' faq__item--open' : ''}`}
          >
            <button
              type="button"
              className="faq__question"
              onClick={() => toggle(i)}
              aria-expanded={openIndex === i}
              aria-controls={`faq-answer-${service.slug}-${i}`}
            >
              <span>{item.q}</span>
              <span className="faq__icon" aria-hidden>+</span>
            </button>
            <div
              className="faq__answer"
              id={`faq-answer-${service.slug}-${i}`}
              aria-hidden={openIndex !== i}
            >
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
