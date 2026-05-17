/* HALDEN — Atoms + static sections (Nav, Hero, Marquee, Approach, Stats, Services list, ProjectGrid, Craftsmanship, ServiceAreas, Philosophy, CTA, Footer)
   Interactive pieces (BeforeAfter slider, Contact form, Testimonials carousel) live in interactive.jsx. */

const { useEffect, useState, useRef, useMemo } = React;

/* -------- Icons -------- */
const IconArrow = ({ size = 14, dir = "right" }) => {
  const r = { right: 0, down: 90, left: 180, up: 270 }[dir] || 0;
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="square" style={{ transform: `rotate(${r}deg)` }}>
      <line x1="4" y1="12" x2="20" y2="12" />
      <polyline points="14,6 20,12 14,18" />
    </svg>
  );
};
const IconPlus = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="square">
    <line x1="12" y1="4" x2="12" y2="20" /><line x1="4" y1="12" x2="20" y2="12" />
  </svg>
);
const IconMark = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="square">
    <rect x="3" y="3" width="18" height="18" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="12" y1="3" x2="12" y2="21" />
  </svg>
);

/* -------- Reusable -------- */
const Button = ({ children, variant = "primary", onDark = false, as: As = "button", arrow = true, ...rest }) => {
  const cls = (() => {
    if (variant === "primary") return onDark ? "btn btn--primary-on-dark" : "btn btn--primary";
    if (variant === "tertiary") return `btn btn--tertiary ${onDark ? "on-dark" : ""}`;
    return "btn";
  })();
  return (
    <As className={cls} {...rest}>
      {children}
      {arrow ? <IconArrow /> : null}
    </As>
  );
};

const Eyebrow = ({ children, dark = false, gold = false }) => (
  <span className={`eyebrow ${dark ? "eyebrow--dark" : ""} ${gold ? "eyebrow--gold" : ""}`}>{children}</span>
);

/* -------- NAV -------- */
const Nav = ({ light, showProgress }) => {
  const [stuck, setStuck] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setStuck(y > 80);
      if (showProgress) {
        const h = document.documentElement.scrollHeight - window.innerHeight;
        setProgress(h > 0 ? (y / h) * 100 : 0);
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [showProgress]);

  return (
    <header className={`nav ${stuck ? "is-stuck" : ""} ${light && !stuck ? "is-light is-dark" : ""}`}>
      <div className="container nav__inner">
        <a href="#top" className="nav__wm" aria-label="Halden — home">
          <svg className="nav__wm-mark" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25">
            <rect x="3" y="3" width="18" height="18" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="12" y1="3" x2="12" y2="21" />
          </svg>
          HALDEN
        </a>
        <nav className="nav__links" aria-label="Primary">
          <a href="#work">Work</a>
          <a href="#services">Services</a>
          <a href="#process">Process</a>
          <a href="#craft">Craft</a>
          <a href="#studio">Studio</a>
        </nav>
        <Button variant="tertiary" as="a" href="#contact" onDark={light && !stuck} arrow={false}>Start a project</Button>
      </div>
      {showProgress ? <div className="nav__progress" style={{ width: `${progress}%` }} /> : null}
    </header>
  );
};

/* -------- HERO -------- */
const HERO_IMAGES = {
  kitchen: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=2400&q=85&auto=format&fit=crop",
  framing: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=2400&q=85&auto=format&fit=crop",
  bath:    "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=2400&q=85&auto=format&fit=crop",
  facade:  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=2400&q=85&auto=format&fit=crop",
};

const Hero = ({ image = "kitchen" }) => (
  <section className="hero" id="top">
    <div className="hero__bg" style={{ "--hero-img": `url('${HERO_IMAGES[image] || HERO_IMAGES.kitchen}')` }} />
    <div className="hero__overlay" />
    <div className="hero__index">No. 092 — Carmel, CA · Est. 2008</div>
    <div className="container hero__body">
      <div className="hero__copy">
        <div className="hero__eyebrow">Halden — Remodeling &amp; Craft</div>
        <h1 className="hero__h1">
          Built with precision.<br />
          Spaces designed <em>to&nbsp;last.</em>
        </h1>
      </div>
      <div className="hero__meta">
        <div className="hero__meta-strip">
          <div><span>Studio</span><span>Carmel‑by‑the‑Sea, CA</span></div>
          <div><span>Practice</span><span>Sixteen years</span></div>
          <div><span>Completed</span><span>Ninety‑two projects</span></div>
          <div><span>License</span><span>CLB‑994821 · Bonded</span></div>
        </div>
        <a className="hero__scroll" href="#approach">
          Scroll to read
          <IconArrow size={12} dir="down" />
        </a>
      </div>
    </div>
  </section>
);

/* -------- MARQUEE -------- */
const Marquee = () => {
  const items = ["Whole‑home", "Kitchen", "Primary suite", "Bath", "Additions", "Coastal", "Heritage", "Joinery"];
  const Group = () => (
    <span>
      {items.map((it, i) => (i === 1 || i === 6) ? <em key={i}>{it}</em> : <React.Fragment key={i}>{it}</React.Fragment>)}
    </span>
  );
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        <Group /><Group /><Group />
      </div>
    </div>
  );
};

/* -------- APPROACH -------- */
const Approach = () => (
  <section className="section" id="studio">
    <div className="container approach__grid">
      <div className="approach__left">
        <Eyebrow>01 — Studio</Eyebrow>
        <h2 className="approach__h">
          A studio of fifteen.<br />
          We measure twice.<br />
          We frame <em>in‑house.</em>
        </h2>
      </div>
      <div className="approach__right">
        <div className="approach__body">
          <p>
            Halden is a residential remodeling practice on the West Coast. Whole‑home renovations,
            additions, kitchen &amp; bath — almost always with the architect at the table from day one.
          </p>
          <p>
            We don't subcontract finish carpentry. We measure every cabinet on site. We sign each
            project on the inside of a drawer face when it's done.
          </p>
        </div>
        <div className="approach__cta">
          <Button variant="tertiary" as="a" href="#studio-brief">Read the studio brief</Button>
        </div>
      </div>
    </div>
  </section>
);

/* -------- STATS -------- */
const Stats = () => (
  <section className="section" style={{ paddingBlock: 0 }}>
    <div className="container">
      <div className="stats">
        <div className="stat"><div className="stat__n">92</div><div className="stat__l">Completed projects</div></div>
        <div className="stat"><div className="stat__n">16<em>yr</em></div><div className="stat__l">In continuous practice</div></div>
        <div className="stat"><div className="stat__n">15</div><div className="stat__l">Craftspeople, in‑house</div></div>
        <div className="stat"><div className="stat__n">100<em>%</em></div><div className="stat__l">Finish carpentry, not subcontracted</div></div>
      </div>
    </div>
  </section>
);

/* -------- SERVICES -------- */
const SERVICES = [
  { num: "01", title: <>Whole‑home renovation</>, desc: "Down‑to‑studs remodels. Plans, permits, structure, finish — start to keys.", scope: ["Architecture aligned", "12–24 months", "From $850k"] },
  { num: "02", title: <>Kitchen &amp; <em>bath</em></>, desc: "The two rooms we're most often asked for. Cabinetry shop‑drawn in our millwork studio.", scope: ["Stone, walnut, brass", "5–9 months", "From $180k"] },
  { num: "03", title: <>Primary suite &amp; addition</>, desc: "Adding a wing, a stair, or a roof. Structural changes handled in‑house with our engineer.", scope: ["Foundation to finish", "8–14 months", "From $320k"] },
  { num: "04", title: <>Heritage &amp; <em>restoration</em></>, desc: "Sensitive work on pre‑1940 homes. Joinery, plaster, lime, original windows — kept and rebuilt.", scope: ["Period detail", "9–18 months", "From $400k"] },
];

const Services = () => (
  <section className="section" id="services">
    <div className="container">
      <div className="services__head">
        <div className="services__head-l">
          <Eyebrow>02 — Services</Eyebrow>
          <h2 className="services__h">
            Four practices,<br />
            one <em>standard.</em>
          </h2>
        </div>
        <div className="services__head-r">
          <p className="services__lede">
            We do not estimate every project. We work on six to eight homes a year, in depth,
            and refuse the rest. Each engagement begins with a fixed‑fee feasibility study.
          </p>
        </div>
      </div>
      <div className="services__list">
        {SERVICES.map(s => (
          <a key={s.num} href="#contact" className="svc">
            <div className="svc__num">{s.num}</div>
            <h3 className="svc__title">{s.title}</h3>
            <p className="svc__desc">{s.desc}</p>
            <div className="svc__meta">
              {s.scope.map((m, i) => <div key={i}>{m}</div>)}
            </div>
            <div className="svc__icon"><IconArrow size={18} /></div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

/* -------- PROJECTS -------- */
const PROJECTS = [
  { index: "081", category: "Whole‑home", title: <>A weekend house, <em>framed in white oak.</em></>, location: "Carmel‑by‑the‑Sea, CA", year: 2024, sqft: "3,400", span: "lg", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=82&auto=format&fit=crop" },
  { index: "078", category: "Bath", title: <>Limestone, linen, light.</>, location: "Pacific Heights, SF", year: 2023, sqft: "1,200", span: "sm", offset: true, img: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1400&q=82&auto=format&fit=crop" },
  { index: "074", category: "Kitchen", title: <>A pantry built like a <em>library.</em></>, location: "Mill Valley, CA", year: 2023, sqft: "240", span: "sm", img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1400&q=82&auto=format&fit=crop" },
  { index: "069", category: "Addition", title: <>Twenty‑two feet of <em>steel and glass.</em></>, location: "Sausalito, CA", year: 2022, sqft: "4,800", span: "lg", offset: true, img: "https://images.unsplash.com/photo-1567016526105-22da7c13161a?w=1600&q=82&auto=format&fit=crop" },
  { index: "061", category: "Heritage", title: <>A Craftsman, <em>quietly restored.</em></>, location: "Berkeley Hills, CA", year: 2021, sqft: "2,800", span: "full", landscape: true, img: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=2000&q=82&auto=format&fit=crop" },
];

const PROJECT_FILTERS = ["All work", "Whole‑home", "Kitchen", "Bath", "Addition", "Heritage"];

const ProjectGrid = () => {
  const [active, setActive] = useState("All work");
  const list = useMemo(() =>
    active === "All work" ? PROJECTS : PROJECTS.filter(p => p.category === active),
  [active]);
  return (
    <section className="section" id="work">
      <div className="container">
        <div className="projects__head">
          <div>
            <Eyebrow>03 — Selected work</Eyebrow>
            <h2 className="projects__h">
              Ninety‑two completed.<br />
              Five <em>shown.</em>
            </h2>
          </div>
          <Button variant="tertiary" as="a" href="#archive">Index — by year</Button>
        </div>

        <div className="projects__filters">
          {PROJECT_FILTERS.map(f => (
            <button
              key={f}
              type="button"
              className={`tag ${active === f ? "tag--ink" : ""}`}
              onClick={() => setActive(f)}
            >{f}</button>
          ))}
        </div>

        <div className="projects__list">
          {list.map(p => (
            <article
              key={p.index}
              className={`project project--${p.span || "lg"} ${p.offset ? "project--offset" : ""} ${p.landscape ? "project--landscape" : ""} ${p.span === "full" ? "project--wide" : ""}`}
            >
              <a href="#">
                <div className="project__media">
                  <img src={p.img} alt="" loading="lazy" />
                  <span className="project__num">No. {p.index}</span>
                  <span className="project__tag">{p.category}</span>
                </div>
                <div className="project__meta">{p.location} · {p.year} · {p.sqft} sqft</div>
                <h3 className="project__title">{p.title}</h3>
              </a>
            </article>
          ))}
          {list.length === 0 && (
            <div style={{ gridColumn: "span 12", padding: "80px 0", textAlign: "center", color: "var(--fg-3)", fontSize: 14, letterSpacing: "0.04em" }}>
              No projects under this filter. Try another.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

/* -------- PROCESS (dark) -------- */
const STEPS = [
  { n: "01", t: <>Brief</>, b: "A long conversation, in your home. We listen, walk, measure, photograph. Two weeks of observation before a single sketch.", d: "Weeks 1–4" },
  { n: "02", t: <>Drawings</>, b: "Plan sets in collaboration with your architect — or ours. Every cabinet shop‑drawn. Every joint specified.", d: "Months 2–4" },
  { n: "03", t: <>Build</>, b: "Fifteen craftspeople in‑house. Framing, cabinetry, tile, finish — same team start to finish. No revolving door.", d: "Months 4–14" },
  { n: "04", t: <>Sign</>, b: "We sign the inside of a drawer face when we leave. You have our number for the rest of the house's life.", d: "After keys" },
];
const Process = () => (
  <section className="section section--dark" id="process">
    <div className="container">
      <div className="process__head">
        <div className="process__head-l">
          <Eyebrow dark gold>04 — Process</Eyebrow>
          <h2 className="process__h">
            Four phases.<br />
            Sixteen months, <em>on average.</em>
          </h2>
        </div>
        <div className="process__head-r">
          <p className="process__lede">
            We work one project at a time per crew. The number of homes in our pipeline at any
            moment is published, in plain numbers, on the studio dashboard.
          </p>
        </div>
      </div>
      <div className="process__steps">
        {STEPS.map(s => (
          <div className="step" key={s.n}>
            <div className="step__num">{s.n}</div>
            <h3 className="step__title">{s.t}</h3>
            <p className="step__body">{s.b}</p>
            <div className="step__duration">{s.d}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* -------- CRAFTSMANSHIP / MATERIALS -------- */
const CRAFT = [
  { n: "M.01", t: "White oak, rift‑sawn", d: "From a single mill in Oregon. Two weeks acclimating on site before a board is cut.", img: "https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?w=1200&q=82&auto=format&fit=crop", span: "default" },
  { n: "M.02", t: "Hand‑cut joinery", d: "Dovetails, finger joints, mortise and tenon. No biscuit, no pocket screw, no shortcut.", img: "https://images.unsplash.com/photo-1503387837-b154d5074bd2?w=1600&q=82&auto=format&fit=crop", span: "wide", offset: true },
  { n: "M.03", t: "Honed limestone", d: "Belgian bluestone and Italian travertine. Sealed only with linseed and beeswax.", img: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&q=82&auto=format&fit=crop", span: "default" },
  { n: "M.04", t: "Unlacquered brass", d: "Hardware allowed to patinate. We supply a small jar of oil, not a polishing cloth.", img: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=1200&q=82&auto=format&fit=crop", span: "default", offset: true },
  { n: "M.05", t: "Lime plaster", d: "Three‑coat troweled plaster, cured for ninety days. Breathable, soft, never cracking.", img: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=1200&q=82&auto=format&fit=crop", span: "default" },
  { n: "M.06", t: "Salvaged hardware", d: "Hinges and pulls reused from the original house wherever possible. New only where necessary.", img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=1200&q=82&auto=format&fit=crop", span: "default" },
];
const Craft = () => (
  <section className="section section--alt" id="craft">
    <div className="container">
      <div className="craft__head">
        <div className="craft__head-l">
          <Eyebrow>05 — Materials</Eyebrow>
          <h2 className="craft__h">
            A short list of <em>materials</em> we trust.
          </h2>
        </div>
        <div className="craft__head-r">
          <p className="craft__lede">
            We work from a deliberately narrow palette — six materials, six finishes, two metals.
            The discipline is in the restraint. The result is a house that ages well.
          </p>
        </div>
      </div>

      <div className="craft__grid">
        {CRAFT.map(c => (
          <article key={c.n} className={`craft-item ${c.span === "wide" ? "craft-item--wide" : ""} ${c.offset ? "craft-item--offset" : ""}`}>
            <div className="craft-item__media"><img src={c.img} alt="" loading="lazy" /></div>
            <div className="craft-item__num">{c.n}</div>
            <h4 className="craft-item__title">{c.t}</h4>
            <p className="craft-item__desc">{c.d}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

/* -------- SERVICE AREAS -------- */
const AREAS = [
  ["Carmel‑by‑the‑Sea", "Home studio"],
  ["Pacific Heights, SF", "115 mi"],
  ["Mill Valley", "130 mi"],
  ["Sausalito", "128 mi"],
  ["Berkeley Hills", "118 mi"],
  ["Sea Ranch", "180 mi"],
  ["Napa Valley", "165 mi"],
  ["Pebble Beach", "8 mi"],
  ["Big Sur (north)", "32 mi"],
  ["Atherton & Woodside", "95 mi"],
];
const ServiceAreas = () => (
  <section className="section" id="areas">
    <div className="container areas__grid">
      <div className="areas__l">
        <Eyebrow>06 — Where we work</Eyebrow>
        <h2 className="areas__h">
          Coastal California.<br />
          On <em>invitation.</em>
        </h2>
        <p className="approach__body" style={{ marginTop: 32, maxWidth: "36ch" }}>
          We travel for the right project. Studio in Carmel; most work within a two‑hour drive.
          Out‑of‑region commissions handled on a case basis with embedded crew.
        </p>
      </div>
      <div className="areas__r">
        <ul className="areas__list">
          {AREAS.map(([n, d]) => (
            <li key={n}>
              <span>{n}</span>
              <span className="areas__dist">{d}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

/* -------- PHILOSOPHY -------- */
const Philosophy = () => (
  <section className="section section--dark" id="philosophy">
    <div className="container philo__grid">
      <div className="philo__l">
        <Eyebrow dark gold>07 — Philosophy</Eyebrow>
        <h2 className="philo__h">
          Five rules we <em>refuse</em> to break.
        </h2>
      </div>
      <div className="philo__r">
        <ul className="philo__principles">
          <li>
            <div className="n">I</div>
            <div>
              <h4>One project, <em>one crew.</em></h4>
              <p>The same fifteen hands from demolition to the day we hand you the keys. No revolving subcontractors, no new faces in month seven.</p>
            </div>
          </li>
          <li>
            <div className="n">II</div>
            <div>
              <h4>Drawn before built.</h4>
              <p>Every cabinet, every joint, every seam appears on a shop drawing before any saw is turned on. Surprises are for theater, not for homes.</p>
            </div>
          </li>
          <li>
            <div className="n">III</div>
            <div>
              <h4>Six to eight homes a year.</h4>
              <p>We refuse the rest. The studio's calendar is the only constraint we will not bend, regardless of the project's size.</p>
            </div>
          </li>
          <li>
            <div className="n">IV</div>
            <div>
              <h4>The bill is the <em>estimate.</em></h4>
              <p>Fixed‑fee feasibility. Open‑book construction. No surprise change orders past month four — we eat any miscount that's ours.</p>
            </div>
          </li>
          <li>
            <div className="n">V</div>
            <div>
              <h4>We sign our work.</h4>
              <p>Initials and date, in ink, on the inside of a drawer face. You have our number for the rest of the house's life.</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
);

/* -------- CTA -------- */
const CTASection = () => (
  <section className="cta section" id="cta">
    <div className="container">
      <div className="cta__index">08 — Begin</div>
      <h2 className="cta__h">
        A project deserves<br />
        <em>a conversation.</em>
      </h2>
      <Button variant="primary" as="a" href="#contact">Start a project</Button>
      <div className="cta__sub">
        Or write to us — <a className="link link--gold" href="mailto:studio@halden.co">studio@halden.co</a>
      </div>
    </div>
  </section>
);

/* -------- FOOTER -------- */
const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer__top">
        <div>
          <div className="footer__wm">HALDEN</div>
          <p className="footer__motto">
            A residential remodeling studio on the West Coast.<br />
            Whole‑home renovations, additions, kitchen &amp; bath.
          </p>
        </div>
        <div className="footer__col">
          <h6>Studio</h6>
          <ul>
            <li><a href="#studio">Approach</a></li>
            <li><a href="#">Team</a></li>
            <li><a href="#">Press &amp; awards</a></li>
            <li><a href="#">Journal</a></li>
          </ul>
        </div>
        <div className="footer__col">
          <h6>Work</h6>
          <ul>
            <li><a href="#work">All projects</a></li>
            <li><a href="#">Kitchen &amp; bath</a></li>
            <li><a href="#">Whole‑home</a></li>
            <li><a href="#">Heritage</a></li>
          </ul>
        </div>
        <div className="footer__col">
          <h6>Contact</h6>
          <ul>
            <li><a href="mailto:studio@halden.co">studio@halden.co</a></li>
            <li><a href="tel:+18315550142">+1 (831) 555 0142</a></li>
            <li><a href="#">221 Dolores St,<br />Carmel‑by‑the‑Sea, CA 93923</a></li>
          </ul>
        </div>
      </div>
      <div className="footer__bot">
        <div>© 2008 — 2026 Halden Studio · License CLB‑994821 · Bonded &amp; insured</div>
        <div className="social">
          <a className="link" href="#">Instagram</a>
          <a className="link" href="#">Are.na</a>
          <a className="link" href="#">Pinterest</a>
        </div>
      </div>
      <div className="footer__big-wm" aria-hidden="true">HALDEN</div>
    </div>
  </footer>
);

Object.assign(window, {
  IconArrow, IconPlus, IconMark,
  Button, Eyebrow,
  Nav, Hero, Marquee, Approach, Stats, Services, ProjectGrid,
  Process, Craft, ServiceAreas, Philosophy, CTASection, Footer,
});
