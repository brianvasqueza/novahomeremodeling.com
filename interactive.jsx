/* HALDEN — interactive components: BeforeAfter slider, Testimonials carousel, Contact form */

const { useEffect, useState, useRef } = React;

/* ============ BEFORE / AFTER SLIDER ============ */
const BA_DATA = [
  {
    label: "Project No. 074 — Mill Valley · Kitchen",
    before: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=2000&q=85&auto=format&fit=crop&sat=-100",
    after:  "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=2000&q=85&auto=format&fit=crop",
  },
];

const BeforeAfter = () => {
  const wrapRef = useRef(null);
  const [pos, setPos] = useState(50);
  const draggingRef = useRef(false);

  const setFromX = (clientX) => {
    const el = wrapRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const p = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, p)));
  };

  useEffect(() => {
    const onMove = (e) => {
      if (!draggingRef.current) return;
      const x = e.touches ? e.touches[0].clientX : e.clientX;
      setFromX(x);
    };
    const onUp = () => { draggingRef.current = false; };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("touchmove", onMove, { passive: true });
    window.addEventListener("touchend", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("touchmove", onMove);
      window.removeEventListener("touchend", onUp);
    };
  }, []);

  const onDown = (e) => {
    draggingRef.current = true;
    const x = e.touches ? e.touches[0].clientX : e.clientX;
    setFromX(x);
  };

  const d = BA_DATA[0];
  return (
    <section className="beforeafter" id="beforeafter">
      <div className="container">
        <div className="ba__head">
          <div className="ba__head-l">
            <Eyebrow dark gold>09 — Before · After</Eyebrow>
            <h2 className="ba__h">
              The same room.<br />
              Drag to <em>see.</em>
            </h2>
          </div>
          <div className="ba__head-r">
            <p className="ba__lede">
              A 1947 cottage kitchen, taken back to studs and rebuilt in white oak, honed
              limestone, and unlacquered brass. Eight months on site. Photographed the morning
              after we left.
            </p>
          </div>
        </div>

        <div
          ref={wrapRef}
          className="ba__wrap"
          style={{ "--ba-pos": `${pos}%` }}
          onMouseDown={onDown}
          onTouchStart={onDown}
          role="slider"
          aria-label="Before and after comparison"
          aria-valuenow={Math.round(pos)}
          aria-valuemin={0}
          aria-valuemax={100}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "ArrowLeft") setPos(p => Math.max(0, p - 4));
            if (e.key === "ArrowRight") setPos(p => Math.min(100, p + 4));
          }}
        >
          <div className="ba__layer ba__layer--before" style={{ backgroundImage: `url('${d.before}')` }} />
          <div className="ba__layer ba__layer--after"  style={{ backgroundImage: `url('${d.after}')` }} />
          <div className="ba__label ba__label--before">Before</div>
          <div className="ba__label ba__label--after">After</div>
          <div className="ba__handle" />
        </div>

        <div className="ba__caption">
          <div><span>Project</span><span>No. 074 — Mill Valley</span></div>
          <div><span>Type</span><span>Kitchen, down‑to‑studs</span></div>
          <div><span>Duration</span><span>8 months, on site</span></div>
          <div><span>Year</span><span>2023</span></div>
        </div>
      </div>
    </section>
  );
};

/* ============ TESTIMONIALS CAROUSEL ============ */
const TESTIMONIALS = [
  {
    quote: <>They moved like architects and built like joiners. We bought a house and they handed it back <em>a home.</em></>,
    name: "Eleanor & James Whitfield",
    role: "Project No. 074 — Mill Valley · 2023",
  },
  {
    quote: <>Sixteen months, no surprises, no change orders past month four. We have never written that sentence about a builder before.</>,
    name: "M. & R. Asato",
    role: "Project No. 081 — Carmel · 2024",
  },
  {
    quote: <>The drawer they signed is in the pantry. We open it more than we should, just to look. <em>It is a small joy.</em></>,
    name: "Catherine Pemberton",
    role: "Project No. 069 — Sausalito · 2022",
  },
];

const Testimonials = () => {
  const [i, setI] = useState(0);
  const t = TESTIMONIALS[i];
  return (
    <section className="section" id="testimonials">
      <div className="container testi__grid">
        <div className="testi__left">
          <Eyebrow>10 — In their words</Eyebrow>
          <div className="testi__count">{String(i + 1).padStart(2, "0")} / {String(TESTIMONIALS.length).padStart(2, "0")}</div>
        </div>
        <div className="testi__right">
          <blockquote className="testi__quote" key={i}>{t.quote}</blockquote>
          <div className="testi__attr">
            <div className="testi__avatar" />
            <div>
              <div className="testi__name">{t.name}</div>
              <div className="testi__role">{t.role}</div>
            </div>
            <div className="testi__nav">
              <button aria-label="Previous testimonial" onClick={() => setI(p => (p - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}>
                <IconArrow size={14} dir="left" />
              </button>
              <button aria-label="Next testimonial" onClick={() => setI(p => (p + 1) % TESTIMONIALS.length)}>
                <IconArrow size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ============ CONTACT FORM ============ */
const SCOPE_OPTIONS = ["Kitchen", "Bath", "Primary suite", "Whole‑home", "Addition", "Heritage"];
const BUDGET_OPTIONS = ["$200k – $500k", "$500k – $1M", "$1M – $2.5M", "$2.5M+"];

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", location: "", timeline: "", scope: [], budget: "", message: "" });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));
  const toggleScope = (s) => setForm(f => ({
    ...f,
    scope: f.scope.includes(s) ? f.scope.filter(x => x !== s) : [...f.scope, s],
  }));

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Please tell us your name.";
    if (!form.email.trim()) e.email = "We need an email to reply to.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "That doesn't look like an email.";
    if (form.scope.length === 0) e.scope = "Pick at least one.";
    if (!form.budget) e.budget = "An honest range helps.";
    if (!form.message.trim() || form.message.trim().length < 12) e.message = "A sentence or two about the home.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
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
        <span className="form__success-eyebrow">Received — file no. 093</span>
        <h3 className="form__success-h">
          Thank you, {form.name.split(" ")[0] || "friend"}.<br />
          We'll write back <em>this week.</em>
        </h3>
        <p className="form__success-body">
          A senior member of the studio reads every inquiry. Expect a real reply within seven days —
          a short letter, a few questions, and a proposed time for a long phone call.
        </p>
        <div style={{ marginTop: 24 }}>
          <Button variant="tertiary" as="button" onClick={() => { setSent(false); setForm({ name: "", email: "", phone: "", location: "", timeline: "", scope: [], budget: "", message: "" }); }}>
            Send another
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      <div className="form__step-indicator">
        <span className={`dot ${stepDone.a ? "is-active" : ""}`} />
        <span>You</span>
        <span className={`dot ${stepDone.b ? "is-active" : ""}`} />
        <span>Project</span>
        <span className={`dot ${stepDone.c ? "is-active" : ""}`} />
        <span>Letter</span>
      </div>

      <div className="form__row form__row--two">
        <div className="form__row">
          <label className="form__label" htmlFor="f-name">Your name</label>
          <input id="f-name" className="form__input" autoComplete="name" value={form.name} onChange={e => set("name", e.target.value)} />
          {errors.name && <div className="form__error">{errors.name}</div>}
        </div>
        <div className="form__row">
          <label className="form__label" htmlFor="f-email">Email</label>
          <input id="f-email" type="email" className="form__input" autoComplete="email" value={form.email} onChange={e => set("email", e.target.value)} />
          {errors.email && <div className="form__error">{errors.email}</div>}
        </div>
      </div>

      <div className="form__row form__row--two">
        <div className="form__row">
          <label className="form__label" htmlFor="f-phone">Phone <span style={{ opacity: 0.5, letterSpacing: 0 }}>(optional)</span></label>
          <input id="f-phone" type="tel" className="form__input" autoComplete="tel" value={form.phone} onChange={e => set("phone", e.target.value)} />
        </div>
        <div className="form__row">
          <label className="form__label" htmlFor="f-location">Project location</label>
          <input id="f-location" className="form__input" placeholder="City, state" value={form.location} onChange={e => set("location", e.target.value)} />
        </div>
      </div>

      <div className="form__row">
        <label className="form__label">Scope — pick one or more</label>
        <div className="form__chips">
          {SCOPE_OPTIONS.map(s => (
            <button
              key={s}
              type="button"
              className={`form__chip ${form.scope.includes(s) ? "is-active" : ""}`}
              onClick={() => toggleScope(s)}
            >{s}</button>
          ))}
        </div>
        {errors.scope && <div className="form__error">{errors.scope}</div>}
      </div>

      <div className="form__row">
        <label className="form__label">Investment range</label>
        <div className="form__chips">
          {BUDGET_OPTIONS.map(b => (
            <button
              key={b}
              type="button"
              className={`form__chip ${form.budget === b ? "is-active" : ""}`}
              onClick={() => set("budget", b)}
            >{b}</button>
          ))}
        </div>
        {errors.budget && <div className="form__error">{errors.budget}</div>}
      </div>

      <div className="form__row">
        <label className="form__label" htmlFor="f-timeline">When would you like to begin?</label>
        <select id="f-timeline" className="form__select" value={form.timeline} onChange={e => set("timeline", e.target.value)}>
          <option value="">— select —</option>
          <option>Within three months</option>
          <option>Within six months</option>
          <option>Within a year</option>
          <option>Exploring, no fixed date</option>
        </select>
      </div>

      <div className="form__row">
        <label className="form__label" htmlFor="f-message">A few words about the home</label>
        <textarea id="f-message" className="form__textarea" rows={4} placeholder="Year built, square footage, rooms involved, the feeling you're after." value={form.message} onChange={e => set("message", e.target.value)} />
        {errors.message && <div className="form__error">{errors.message}</div>}
      </div>

      <div className="form__submit-row">
        <p className="form__hint">A senior member of the studio reads every inquiry. We reply within seven days.</p>
        <Button variant="primary" as="button" type="submit">Send the letter</Button>
      </div>
    </form>
  );
};

const Contact = () => (
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
            <span className="value">221 Dolores Street<br />Carmel‑by‑the‑Sea, CA 93923</span>
          </div>
          <div className="contact__info-group">
            <span className="label">Hours</span>
            <span className="value">Tues – Fri · 9 to 5<br />By appointment only</span>
          </div>
          <div className="contact__info-group">
            <span className="label">Direct</span>
            <span className="value">
              <a className="link" href="mailto:studio@halden.co">studio@halden.co</a><br />
              <a className="link" href="tel:+18315550142">+1 (831) 555 0142</a>
            </span>
          </div>
          <div className="contact__info-group">
            <span className="label">For press</span>
            <span className="value">
              <a className="link" href="mailto:press@halden.co">press@halden.co</a>
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

Object.assign(window, { BeforeAfter, Testimonials, Contact });
