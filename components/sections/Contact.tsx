'use client';

import { useEffect, useRef, useState } from 'react';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Button } from '@/components/ui/Button';
import { SCOPE_OPTIONS, BUDGET_OPTIONS } from '@/data/content';
import { SITE } from '@/data/site';
import { CONTACT_LIMITS, TIMELINE_OPTIONS, validateContactForm, type ContactFieldErrors, type ContactFormData } from '@/lib/contact-form';

const EMPTY_FORM: ContactFormData = {
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
  const [ready, setReady] = useState(false);
  const [form, setForm] = useState<ContactFormData>(EMPTY_FORM);
  const [errors, setErrors] = useState<ContactFieldErrors>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');
  const [submitError, setSubmitError] = useState('');
  const [confirmationSent, setConfirmationSent] = useState(false);
  const [reference, setReference] = useState('');
  const [website, setWebsite] = useState('');
  const submission = useRef<{ id: string; payload: string } | null>(null);
  const submitting = useRef(false);
  const successRef = useRef<HTMLDivElement>(null);

  useEffect(() => setReady(true), []);

  useEffect(() => {
    if (status === 'sent') successRef.current?.focus();
  }, [status]);

  const set = <K extends keyof ContactFormData>(k: K, v: ContactFormData[K]) =>
    setForm((f) => ({ ...f, [k]: v }));

  const toggleScope = (s: string) =>
    setForm((f) => ({
      ...f,
      scope: f.scope.includes(s) ? f.scope.filter((x) => x !== s) : [...f.scope, s],
    }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting.current) return;
    const validated = validateContactForm(form);
    setErrors(validated.errors);
    setSubmitError('');
    if (Object.keys(validated.errors).length) {
      const firstField = Object.keys(validated.errors)[0];
      requestAnimationFrame(() => document.getElementById(`f-${firstField}`)?.focus());
      return;
    }

    const payload = JSON.stringify(validated.data);
    if (submission.current?.payload !== payload) submission.current = { id: crypto.randomUUID(), payload };
    submitting.current = true;
    setStatus('sending');
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 25000);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...validated.data, website, submissionId: submission.current.id }),
        signal: controller.signal,
      });
      const result = await response.json();
      if (!response.ok || result.success !== true) {
        if (result.errors) setErrors(result.errors);
        throw new Error(result.error || 'Your request could not be sent. Please try again.');
      }
      setForm(validated.data);
      setConfirmationSent(result.confirmationSent === true);
      setReference(result.reference);
      setStatus('sent');
    } catch (error) {
      setSubmitError(error instanceof Error && !(error instanceof TypeError) && !(error instanceof SyntaxError) && error.name !== 'AbortError'
        ? error.message : 'We could not confirm your submission. Please try again, or contact Nova directly.');
      setStatus('idle');
    } finally {
      clearTimeout(timeout);
      submitting.current = false;
    }
  };

  const stepDone = {
    a: !!form.name && !!form.email,
    b: form.scope.length > 0 && !!form.budget,
    c: !!form.message,
  };

  if (status === 'sent') {
    return (
      <div ref={successRef} className="form form__success" role="status" tabIndex={-1}>
        <span className="form__success-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><path d="m5 12 4 4L19 6" /></svg>
        </span>
        <span className="form__success-eyebrow">Request sent successfully</span>
        <h3 className="form__success-h">
          Thank you, {form.name.split(/\s+/)[0] || 'friend'}.
          <br />
          Your request is <em>with Nova.</em>
        </h3>
        <p className="form__success-body">
          Nova Home Remodeling &amp; Design has received your project inquiry. Our team will review
          your details and get back to you to discuss your project and next steps.
        </p>
        <p className="form__success-body">
          {confirmationSent
            ? <>A confirmation email is on its way to <strong>{form.email}</strong>. You can reply to it to add details or photos. If you don&apos;t see it, check your spam folder.</>
            : <>Your inquiry was sent, but we couldn&apos;t send your confirmation email. You don&apos;t need to submit again. To add details or photos, email <a className="link" href={SITE.emailHref}>{SITE.email}</a>.</>}
        </p>
        <p className="form__success-reference">Inquiry reference: {reference}</p>
        <div style={{ marginTop: 24 }}>
          <Button
            variant="tertiary"
            as="button"
            onClick={() => {
              setStatus('idle');
              setForm(EMPTY_FORM);
              setErrors({});
              setSubmitError('');
              setWebsite('');
              submission.current = null;
            }}
          >
            Send another inquiry
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={onSubmit} noValidate aria-busy={status === 'sending'}>
      <fieldset className="form__fields" disabled={!ready || status === 'sending'}>
        <div className="form__honeypot" aria-hidden="true">
          <label htmlFor="f-website">Leave this field blank</label>
          <input id="f-website" name="website" autoComplete="off" tabIndex={-1} value={website} onChange={(e) => setWebsite(e.target.value)} />
        </div>
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
              maxLength={CONTACT_LIMITS.name}
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
              maxLength={CONTACT_LIMITS.email}
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
              maxLength={CONTACT_LIMITS.phone}
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={errors.phone ? 'f-phone-error' : undefined}
              value={form.phone}
              onChange={(e) => set('phone', e.target.value)}
            />
            {errors.phone && <div className="form__error" id="f-phone-error">{errors.phone}</div>}
          </div>
          <div className="form__row">
            <label className="form__label" htmlFor="f-location">
              Project location
            </label>
            <input
              id="f-location"
              className="form__input"
              placeholder="City, state"
              maxLength={CONTACT_LIMITS.location}
              aria-invalid={Boolean(errors.location)}
              aria-describedby={errors.location ? 'f-location-error' : undefined}
              value={form.location}
              onChange={(e) => set('location', e.target.value)}
            />
            {errors.location && <div className="form__error" id="f-location-error">{errors.location}</div>}
          </div>
        </div>

        <div className="form__row">
          <div className="form__label" id="f-scope-label">Scope — pick one or more</div>
          <div
            className="form__chips"
            id="f-scope"
            tabIndex={-1}
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
            id="f-budget"
            tabIndex={-1}
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
            aria-invalid={Boolean(errors.timeline)}
            aria-describedby={errors.timeline ? 'f-timeline-error' : undefined}
            value={form.timeline}
            onChange={(e) => set('timeline', e.target.value)}
          >
            <option value="">— select —</option>
            {TIMELINE_OPTIONS.map((timeline) => <option key={timeline}>{timeline}</option>)}
          </select>
          {errors.timeline && <div className="form__error" id="f-timeline-error">{errors.timeline}</div>}
        </div>

        <div className="form__row">
          <label className="form__label" htmlFor="f-message">
            A few words about the remodeling project
          </label>
          <textarea
            id="f-message"
            className="form__textarea"
            rows={4}
            maxLength={CONTACT_LIMITS.message}
            placeholder="Describe the repair or remodel, the areas involved, known issues, and what you would like to change."
            required
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? 'f-message-error' : undefined}
            value={form.message}
            onChange={(e) => set('message', e.target.value)}
          />
          {errors.message && <div className="form__error" id="f-message-error">{errors.message}</div>}
        </div>

        <div className="form__trust-strip">
          <span>{SITE.serviceAreaDisplay}</span>
          <span>{SITE.hoursDisplay}</span>
          <span>Project details by email</span>
          <span>Photos welcome by email</span>
        </div>
        {submitError && (
          <div className="form__submit-error" role="alert">
            <p>{submitError}</p>
            <a className="link" href={SITE.emailHref}>Email Nova directly</a> or call <a className="link" href={SITE.phoneHref}>{SITE.phoneDisplay}</a>.
          </div>
        )}
        <div className="form__submit-row">
          <p className="form__hint">
            Send your project details directly to Nova. We&apos;ll email you a confirmation;
            reply to it to add photos or more information.
          </p>
          <Button variant="primary" as="button" type="submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending your request…' : 'Request a Remodeling Estimate'}
          </Button>
        </div>
      </fieldset>
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
            Tell us about your <em>Houston remodel.</em>
          </h2>
          <p>
            Tell Nova the project location, what you would like to change, and any known issues.
            For a repair, photos of the affected area and the surrounding space can help explain
            the work you are considering.
          </p>
          <div className="contact__info">
            <div className="contact__info-group">
              <span className="label">Service area</span>
              <span className="value">
                {SITE.address}
                <br />
                Serving {SITE.serviceAreaDisplay}
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
            <div className="contact__info-group">
              <span className="label">Website</span>
              <span className="value">
                <a className="link" href={SITE.url}>
                  {SITE.displayWebsite}
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
