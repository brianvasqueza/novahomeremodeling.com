'use client';

import { useState } from 'react';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Button } from '@/components/ui/Button';
import { SCOPE_OPTIONS, BUDGET_OPTIONS } from '@/data/content';
import { SITE } from '@/data/site';

interface FormState {
  name: string;
  email: string;
  phone: string;
  location: string;
  timeline: string;
  scope: string[];
  budget: string;
  message: string;
}

const EMPTY_FORM: FormState = {
  name: '',
  email: '',
  phone: '',
  location: '',
  timeline: '',
  scope: [],
  budget: '',
  message: '',
};

function ContactForm() {
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [sent, setSent] = useState(false);

  const set = <K extends keyof FormState>(k: K, v: FormState[K]) =>
    setForm((f) => ({ ...f, [k]: v }));

  const toggleScope = (s: string) =>
    setForm((f) => ({
      ...f,
      scope: f.scope.includes(s) ? f.scope.filter((x) => x !== s) : [...f.scope, s],
    }));

  const validate = () => {
    const e: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) e.name = 'Please tell us your name.';
    if (!form.email.trim()) e.email = 'We need an email to reply to.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "That doesn't look like an email.";
    if (form.scope.length === 0) e.scope = 'Pick at least one.';
    if (!form.budget) e.budget = 'An honest range helps.';
    if (!form.message.trim() || form.message.trim().length < 12)
      e.message = 'A sentence or two about the home.';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    const subject = `Project inquiry from ${form.name}`;
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone || 'Not provided'}`,
      `Project location: ${form.location || 'Not provided'}`,
      `Timeline: ${form.timeline || 'Not selected'}`,
      `Scope: ${form.scope.join(', ')}`,
      `Investment range: ${form.budget}`,
      '',
      form.message,
    ].join('\n');

    window.location.href = `${SITE.emailHref}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  const stepDone = {
    a: !!form.name && !!form.email,
    b: form.scope.length > 0 && !!form.budget,
    c: !!form.message,
  };

  if (sent) {
    return (
      <div className="form form__success">
        <span className="form__success-eyebrow">Received — file no. 128</span>
        <h3 className="form__success-h">
          Thank you, {form.name.split(' ')[0] || 'friend'}.
          <br />
          We&apos;ll be in touch <em>this week.</em>
        </h3>
        <p className="form__success-body">
          Your email app should open with the project details addressed to {SITE.email}. Once sent,
          expect a real reply within three business days — a few questions, and a proposed time to
          walk the project together.
        </p>
        <div style={{ marginTop: 24 }}>
          <Button
            variant="tertiary"
            as="button"
            onClick={() => {
              setSent(false);
              setForm(EMPTY_FORM);
            }}
          >
            Send another
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      <div className="form__step-indicator">
        <span className={`dot ${stepDone.a ? 'is-active' : ''}`} />
        <span>You</span>
        <span className={`dot ${stepDone.b ? 'is-active' : ''}`} />
        <span>Project</span>
        <span className={`dot ${stepDone.c ? 'is-active' : ''}`} />
        <span>Letter</span>
      </div>

      <div className="form__row form__row--two">
        <div className="form__row">
          <label className="form__label" htmlFor="f-name">
            Your name
          </label>
          <input
            id="f-name"
            className="form__input"
            autoComplete="name"
            required
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'f-name-error' : undefined}
            value={form.name}
            onChange={(e) => set('name', e.target.value)}
          />
          {errors.name && <div className="form__error" id="f-name-error">{errors.name}</div>}
        </div>
        <div className="form__row">
          <label className="form__label" htmlFor="f-email">
            Email
          </label>
          <input
            id="f-email"
            type="email"
            className="form__input"
            autoComplete="email"
            required
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'f-email-error' : undefined}
            value={form.email}
            onChange={(e) => set('email', e.target.value)}
          />
          {errors.email && <div className="form__error" id="f-email-error">{errors.email}</div>}
        </div>
      </div>

      <div className="form__row form__row--two">
        <div className="form__row">
          <label className="form__label" htmlFor="f-phone">
            Phone <span className="form__optional">(optional)</span>
          </label>
          <input
            id="f-phone"
            type="tel"
            className="form__input"
            autoComplete="tel"
            value={form.phone}
            onChange={(e) => set('phone', e.target.value)}
          />
        </div>
        <div className="form__row">
          <label className="form__label" htmlFor="f-location">
            Project location
          </label>
          <input
            id="f-location"
            className="form__input"
            placeholder="City, state"
            value={form.location}
            onChange={(e) => set('location', e.target.value)}
          />
        </div>
      </div>

      <div className="form__row">
        <div className="form__label" id="f-scope-label">Scope — pick one or more</div>
        <div
          className="form__chips"
          role="group"
          aria-labelledby="f-scope-label"
          aria-describedby={errors.scope ? 'f-scope-error' : undefined}
        >
          {SCOPE_OPTIONS.map((s) => (
            <button
              key={s}
              type="button"
              className={`form__chip ${form.scope.includes(s) ? 'is-active' : ''}`}
              aria-pressed={form.scope.includes(s)}
              onClick={() => toggleScope(s)}
            >
              {s}
            </button>
          ))}
        </div>
        {errors.scope && <div className="form__error" id="f-scope-error">{errors.scope}</div>}
      </div>

      <div className="form__row">
        <div className="form__label" id="f-budget-label">Investment range</div>
        <div
          className="form__chips"
          role="group"
          aria-labelledby="f-budget-label"
          aria-describedby={errors.budget ? 'f-budget-error' : undefined}
        >
          {BUDGET_OPTIONS.map((b) => (
            <button
              key={b}
              type="button"
              className={`form__chip ${form.budget === b ? 'is-active' : ''}`}
              aria-pressed={form.budget === b}
              onClick={() => set('budget', b)}
            >
              {b}
            </button>
          ))}
        </div>
        {errors.budget && <div className="form__error" id="f-budget-error">{errors.budget}</div>}
      </div>

      <div className="form__row">
        <label className="form__label" htmlFor="f-timeline">
          When would you like to begin?
        </label>
        <select
          id="f-timeline"
          className="form__select"
          value={form.timeline}
          onChange={(e) => set('timeline', e.target.value)}
        >
          <option value="">— select —</option>
          <option>Within three months</option>
          <option>Within six months</option>
          <option>Within a year</option>
          <option>Exploring, no fixed date</option>
        </select>
      </div>

      <div className="form__row">
        <label className="form__label" htmlFor="f-message">
          A few words about the home
        </label>
        <textarea
          id="f-message"
          className="form__textarea"
          rows={4}
          placeholder="Year built, square footage, rooms involved, the feeling you're after."
          required
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'f-message-error' : undefined}
          value={form.message}
          onChange={(e) => set('message', e.target.value)}
        />
        {errors.message && <div className="form__error" id="f-message-error">{errors.message}</div>}
      </div>

      <div className="form__trust-strip">
        <span>Houston, Texas</span>
        <span>{SITE.hoursDisplay}</span>
        <span>16 years in Houston</span>
        <span>No lists, no spam</span>
      </div>
      <div className="form__submit-row">
        <p className="form__hint">
          A senior member of the studio reads every inquiry. We reply within three business days.
        </p>
        <Button variant="primary" as="button" type="submit">
          Send the letter
        </Button>
      </div>
    </form>
  );
}

export function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container contact__grid">
        <div className="contact__l">
          <Eyebrow>11 — Contact</Eyebrow>
          <h2 className="contact__h">
            Tell us about <em>the home.</em>
          </h2>
          <div className="contact__info">
            <div className="contact__info-group">
              <span className="label">Studio</span>
              <span className="value">
                {SITE.address}
                <br />
                Serving Greater Houston
              </span>
            </div>
            <div className="contact__info-group">
              <span className="label">Hours</span>
              <span className="value">
                Monday–Saturday
                <br />
                7:00 AM – 7:00 PM
              </span>
            </div>
            <div className="contact__info-group">
              <span className="label">Prefer to call?</span>
              <a className="contact__phone" href={SITE.phoneHref}>
                {SITE.phoneDisplay}
              </a>
              <a className="link contact__email" href={SITE.emailHref}>
                {SITE.email}
              </a>
            </div>
            <div className="contact__info-group">
              <span className="label">Prefer email?</span>
              <span className="value">
                <a className="link" href={SITE.emailHref}>
                  Send project details
                </a>
              </span>
            </div>
          </div>
        </div>
        <div className="contact__r">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
