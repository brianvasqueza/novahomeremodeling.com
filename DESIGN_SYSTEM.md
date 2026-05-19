# Halden Design System

The living reference for the Halden remodeling website. Every future page must feel like it belongs here — premium, editorial, restrained.

---

## 1. Typography

### Fonts
| Role | Variable | Stack |
|------|----------|-------|
| Sans (primary) | `--font-satoshi` / `--font-sans` | Satoshi Variable → Manrope → system-ui |
| Serif (accent) | `--font-instrument-serif` / `--font-serif` | Instrument Serif → Cormorant Garamond → Times New Roman |

Loaded via `next/font` in `app/layout.tsx`. Both injected as CSS vars on `<html>`. **Never use raw font names in CSS** — always reference `var(--font-sans)` and `var(--font-serif)`.

### Type Scale
```css
--t-eyebrow:   0.6875rem  /* 11px — labels, tags, meta */
--t-meta:      0.8125rem  /* 13px — captions, small print */
--t-body-sm:   0.9375rem  /* 15px — secondary body */
--t-body:      1rem        /* 16px — default body */
--t-body-lg:   1.125rem   /* 18px — large body */
--t-h6:        1.25rem    /* 20px */
--t-h5:        1.5rem     /* 24px */
--t-h4:        2rem       /* 32px */
--t-h3:        2.75rem    /* 44px */
--t-h2:        3.75rem    /* 60px — rarely used directly; prefer clamp() */
--t-h1:        5.5rem     /* 88px */
--t-display:   8rem       /* 128px — footer watermark only */
```

### Heading Scale in Practice
All section headings use `font-weight: 300` (Satoshi Light) with `clamp()` for fluid sizing:

| Element | clamp() | Line-height | Tracking |
|---------|---------|-------------|---------|
| `.hero__h1` | `clamp(2.8rem, 7.6vw, 8.5rem)` | `0.98` | `-0.04em` |
| `.approach__h` | `clamp(2.5rem, 5vw, 5rem)` | `1.04` | `-0.035em` |
| `.services__h` | `clamp(2.25rem, 4.8vw, 4.5rem)` | `1.05` | `-0.035em` |
| `.projects__h` | `clamp(2.25rem, 5vw, 5rem)` | `1.02` | `-0.04em` |
| `.ba__h` | `clamp(2.25rem, 5vw, 5rem)` | `1.02` | `-0.04em` |
| `.craft__h` | `clamp(2.25rem, 5vw, 5rem)` | `1.02` | `-0.04em` |
| `.philo__h` | `clamp(2.25rem, 4.8vw, 5rem)` | `1.04` | `-0.035em` |
| `.cta__h` | `clamp(2.75rem, 6.2vw, 6rem)` | `1.02` | `-0.04em` |
| `.contact__h` | `clamp(2.25rem, 4.6vw, 4.5rem)` | `1.04` | `-0.035em` |
| `.testi__quote` | `clamp(1.75rem, 3.4vw, 3.25rem)` | `1.22` | `-0.025em` |
| `.areas__h` | `clamp(2rem, 4vw, 4rem)` | `1.05` | `-0.035em` |

**Rule:** Every section H2 gets `font-weight: 300`, fluid sizing, tight tracking (`-0.035em` to `-0.04em`), and `max-width` capped to 13–18ch.

### Italic Accent Pattern
Section headings embed `<em>` for serif italic gold accents:
```jsx
<h2 className="section__h">
  Built with precision.{' '}
  <em>Spaces that last.</em>
</h2>
```
The `<em>` renders in `--font-serif` italic at `--gold-700` (light surfaces) or `--gold-500` (dark surfaces).

### Body & Meta Text
```css
body text:       16px / 1.45 / --fw-regular / --tr-normal
secondary body:  15–16px / 1.7–1.72 / --fg-2  (max-width: 38–42ch)
meta / caption:  10–11px / letter-spacing 0.18–0.32em / uppercase
eyebrow:         0.6875rem / fw-medium / ls 0.14em / uppercase
```

### Line-height Tokens
```css
--lh-tight:   1.02   /* display headings */
--lh-snug:    1.12   /* subheadings */
--lh-normal:  1.45   /* body default */
--lh-relaxed: 1.6    /* secondary body, descriptions */
```

### Letter-spacing Tokens
```css
--tr-tight:  -0.04em  /* hero, display */
--tr-snug:   -0.02em  /* section headings */
--tr-normal: -0.01em  /* body */
--tr-wide:    0.14em  /* eyebrow */
--tr-wider:   0.22em  /* uppercase micro labels */
```

---

## 2. Color System

### Palette
```css
/* Paper (warm off-white) */
--paper:     #F6F4EF   /* primary background */
--paper-2:   #EFEBE3   /* alt section background */
--paper-3:   #E6E1D6   /* card backgrounds, inputs */

/* Stone (warm grays) */
--stone-100: #DCD6C8
--stone-200: #C8C2B6   /* body text on dark */
--stone-300: #ADA79B   /* muted on dark */
--stone-400: #8B867C   /* process bar done state */

/* Ink (warm near-black) */
--ink-900: #0E0E0C   /* primary text, dark bg */
--ink-800: #1A1A17   /* process sticky card */
--ink-700: #2A2926
--ink-600: #3D3B36
--ink-500: #57544E
--ink-400: #6E6A62
--ink-300: #8A857B

/* Bronze (warm brown accent) */
--bronze-700: #6B5232   /* form focus, error */
--bronze-600: #8C6F4B   /* accent, hover */
--bronze-500: #A6896A
--bronze-400: #C2A988   /* avatar gradient */

/* Gold (editorial accent — primary accent color) */
--gold-800: #7A5A1A
--gold-700: #9C7A2E   /* em on light surfaces */
--gold-600: #B08A38   /* eyebrow gold, progress bar */
--gold-500: #C8A55A   /* em on dark surfaces */
--gold-400: #DCC084
```

### Semantic Aliases
```css
--fg-1: var(--ink-900)    /* primary text */
--fg-2: var(--ink-700)    /* secondary text */
--fg-3: var(--ink-500)    /* muted text */
--fg-4: var(--ink-300)    /* very muted */
--fg-inverse: var(--paper)

--bg-1: var(--paper)      /* default */
--bg-2: var(--paper-2)    /* alt section */
--bg-3: var(--paper-3)    /* cards, chips */
--bg-dark: var(--ink-900)
--bg-dark-2: var(--ink-800)

--accent: var(--bronze-600)        /* links, hover states */
--accent-hover: var(--bronze-700)
--accent-gold: var(--gold-600)
--accent-gold-soft: var(--gold-500)
```

### Border / Line Tokens
```css
--line-1:         rgba(14,14,12,0.10)   /* subtle dividers on light */
--line-2:         rgba(14,14,12,0.18)   /* stronger borders */
--line-3:         rgba(14,14,12,0.42)   /* nav outline */
--line-inverse:   rgba(246,244,239,0.14) /* dividers on dark */
--line-inverse-2: rgba(246,244,239,0.28) /* hero meta border */
```

### Background Usage by Section
| Section | Background |
|---------|-----------|
| Default sections | `--bg-1` (paper) |
| `.section--alt` | `--bg-2` (paper-2) — Craft, Contact |
| `.section--dark` | `--bg-dark` (ink-900) — Philosophy, Process, BeforeAfter |
| Hero | Full-bleed image + dark gradient overlay |
| Parallax | Full-bleed image + dark overlay |
| Footer | `--bg-dark` |

### Hover States
- Links: underline slide-in via `::after scaleX(0 → 1)`
- Buttons: `translateY(-2px)` + `box-shadow`
- Cards: `translateY(-5px)` + enhanced shadow + gold ring
- Images: `scale(1.04)` at `--dur-cinema`
- Nav links: `scaleX(0 → 1)` underline
- Area list items: `padding-left` slide

### Overlay & Transparency Patterns
```css
Nav stuck (light):    rgba(246,244,239,0.78) + blur(20px) saturate(140%)
Nav stuck (dark):     rgba(14,14,12,0.65) + blur(20px)
Project tag (glass):  rgba(246,244,239,0.85) + blur(8px)
Before/after labels:  rgba(14,14,12,0.55) + blur(8px)
Parallax overlay:     linear-gradient(180deg, rgba(14,14,12,0.48), rgba(14,14,12,0.68))
Hero overlay:         multi-stop gradient — heavy top (0.45) + heavy bottom (0.8)
Glass service cards:  linear-gradient(rgba(255,255,255,0.72), rgba(246,244,239,0.5)) + blur(20px) saturate(160%)
```

---

## 3. Layout System

### Container
```css
.container {
  max-width: var(--container-max);   /* 1480px */
  margin: 0 auto;
  padding-inline: var(--container-pad);  /* clamp(24px, 5vw, 88px) */
}
```

### Section Vertical Rhythm
```css
--section-y: clamp(96px, 14vh, 192px)   /* padding-block on .section */
```
Exception: CTA section uses `clamp(128px, 18vh, 224px)` for extra breathing room.

### Spacing Scale
```css
--s-1:  4px   --s-2:  8px   --s-3:  12px  --s-4:  16px
--s-5:  24px  --s-6:  32px  --s-7:  48px  --s-8:  64px
--s-9:  96px  --s-10: 128px --s-11: 192px --s-12: 256px
```

### 12-Column Grid Pattern
Every split layout uses a 12-column grid with `40px` column gap:
```css
display: grid;
grid-template-columns: repeat(12, 1fr);
gap: 40px;
```

Common column splits:
| Layout | Left | Right |
|--------|------|-------|
| 7/5 (Approach) | `1 / 8` | `9 / 13` |
| 6/6 (Services head) | `1 / 7` | `8 / 13` |
| 5/7 (Process head) | `1 / 8` | `9 / 13` |
| 5/6 (Areas) | `1 / 6` | `7 / 13` |
| 5/7 (Philosophy) | `1 / 6` | `7 / 13` |
| 5/6 (Contact) | `1 / 6` | `7 / 13` (gap: 64px) |
| 3/9 (Testimonials) | `1 / 4` | `5 / 13` |

### Card Grid Systems
```css
/* Service bento */
grid-template-columns: repeat(4, 1fr);  gap: 14px;

/* Project grid */
grid-template-columns: repeat(12, 1fr); gap: 40px; row-gap: 128px;

/* Craft grid */
grid-template-columns: repeat(12, 1fr); gap: 40px; row-gap: 88px;

/* Stats */
grid-template-columns: repeat(4, 1fr);

/* Footer */
grid-template-columns: 2.2fr 1fr 1fr 1fr;

/* Process sticky */
grid-template-columns: 380px 1fr;  gap: 72px;
```

### Project Spans
```css
.project        /* span 6 — default */
.project--lg    /* span 7 */
.project--sm    /* span 5 */
.project--full  /* span 12 */
.project--offset /* margin-top: 144px (vertical stagger) */
```

### Craft Item Spans
```css
.craft-item       /* span 3 */
.craft-item--wide /* span 6 */
.craft-item--offset /* margin-top: 96px */
```

### Border Radius Tokens
```css
--r-0:   0
--r-1:   2px
--r-2:   4px        /* project images, process card */
--r-pill: 999px     /* tags, chips, avatars, nav buttons */
```
Cards use `border-radius: 10px` (not tokenized — inline value).

---

## 4. Component System

### Eyebrow (`<Eyebrow>`)
```tsx
<Eyebrow>02 — Services</Eyebrow>       // default: --fg-3 on light
<Eyebrow dark>07 — Philosophy</Eyebrow> // --stone-300 on dark bg
<Eyebrow gold>07 — Philosophy</Eyebrow> // --gold-600, solid line
```
Always rendered before an H2. Contains section number + label: `"02 — Services"`.
Adds a 24px hairline (`::before`) at 50% opacity as a leading accent.

### Button (`<Button>`)
```tsx
<Button variant="primary" as="a" href="#contact">Start a project</Button>
<Button variant="primary" onDark as="a" href="#contact">Start a conversation</Button>
<Button variant="tertiary" as="a" href="#archive" arrow={false}>Index — by year</Button>
```

| Variant | Class | Usage |
|---------|-------|-------|
| `primary` (default) | `.btn--primary` | Dark fill, paper text — main CTAs |
| `primary` + `onDark` | `.btn--primary-on-dark` | Paper fill, ink text — on dark sections |
| `tertiary` | `.btn--tertiary` | Transparent + underline slide — secondary actions |
| `tertiary` + `onDark` | `.btn--tertiary.on-dark` | Same on dark bg |

Tertiary buttons prepend `—` via `::before` and animate an underline on hover.
Primary buttons lift `translateY(-2px)` + shadow on hover.
Both include an `<IconArrow>` by default (suppress with `arrow={false}`).

### Tag / Filter Pill
```html
<button class="tag">All work</button>
<button class="tag tag--ink">Selected</button>  <!-- active state -->
```
Pill shape, `--paper-3` background, toggles to ink fill on active/hover.

### Form Chip (multi-select)
```html
<button class="form__chip">Whole-home</button>
<button class="form__chip is-active">Kitchen</button>
```
Similar to tag but used inside forms. Border transitions to `--ink-900` on hover; fills on active.

### Link Underline
```html
<a class="link">studio@halden.co</a>
<a class="link link--gold">email text</a>
```
Underline slides in via `::after` width `0 → 100%`. Gold variant uses `--gold-600`.

### Eyebrow with leading lines (section variants)
Some sections use custom eyebrow-like elements (not the `<Eyebrow>` component):
- `.hero__eyebrow` — inline with 40px gold line before
- `.parallax-eyebrow` — centered, flanked by lines on both sides
- `.cta__index` — centered, flanked by 36px lines on both sides
- `.step-item__num` — left-aligned, 24px gold line before

### Service Card (Glass Bento)
```html
<a class="svc-card svc-card--span2">
  <div class="svc-card__icon">...</div>
  <div class="svc-card__num">01</div>
  <h3 class="svc-card__title">...</h3>
  <p class="svc-card__desc">...</p>
  <div class="svc-card__arrow">...</div>
</a>
```
Glassmorphism: `backdrop-filter: blur(20px) saturate(160%)`, white-tinted gradient, subtle inset shadow. Hover: lifts `translateY(-5px)`, gold ring border, icon scales and rotates, arrow shifts diagonally.

### Project Card
```html
<article class="project project--lg project--offset">
  <a>
    <div class="project__media media-reveal">
      <img ...>
      <span class="project__num">No. 001</span>
      <span class="project__tag">Kitchen</span>
      <div class="project__overlay"/>
      <div class="project__hover-caption">Location · Year</div>
    </div>
    <div class="project__meta">...</div>
    <h3 class="project__title">...</h3>
  </a>
</article>
```
Image scales `1.04` on hover. Overlay gradient fades in. Caption slides up from bottom. All transitions use `--dur-cinema` (1100ms) for images and `--dur-slow` (620ms) for overlay.

### Nav
Fixed header, 84px tall. Transparent until `is-stuck` (after 80px scroll). On `is-stuck`: glassmorphism background. Scroll progress hairline in `--gold-600` at bottom edge.

### Process Sticky Card
Left column sticks at `top: 112px`. Contains phase name in serif italic gold. Progress bar segmented — done segments use `--stone-400`, active uses `--gold-500`.

### Stats Bar
4-column grid separated by `--line-1` borders. Numbers use `font-weight: 300` huge sans + small serif italic suffix in gold.

### Before/After Slider
Draggable clip-path: `inset(0 0 0 var(--ba-pos, 50%))`. Handle: white 1px line + 56px circle with `< >` label. Labels: glassmorphism chips top-left/right.

### Parallax Section
`min-height: 58vh`. Background image extends `-25%` to `+25%` vertically (inset: `-25% 0`). `will-change: transform` for GPU compositing. JS moves it 80px total across scroll range.

---

## 5. Motion Language

### Easing Tokens
```css
--ease-out:    cubic-bezier(0.22, 1, 0.36, 1)     /* primary — fast start, spring finish */
--ease-in-out: cubic-bezier(0.65, 0, 0.35, 1)     /* symmetrical — hero zoom, bob animation */
```

### Duration Tokens
```css
--dur-fast:   180ms   /* micro interactions */
--dur-base:   320ms   /* most hover transitions */
--dur-slow:   620ms   /* overlays, reveals */
--dur-cinema: 1100ms  /* image reveals and zooms */
```

### Reveal Classes (set by `initAnimations()`)

**`.reveal`** — Base entrance (Y + opacity):
```css
opacity: 0; transform: translateY(28px);
transition: opacity 720ms --ease-out, transform 720ms --ease-out;
/* .is-in: opacity 1, transform none */
```
Applied to: `.section`, `.project`, `.craft-item`.

**`.reveal-blur`** — Blur-to-sharp entrance:
```css
opacity: 0; filter: blur(10px); transform: translateY(20px);
transition: opacity 820ms, filter 820ms, transform 820ms;
/* .is-in: opacity 1, filter none, transform none */
```
Applied to: all section H2s, eyebrows, lede paragraphs.

**`.word-reveal`** — Word-by-word stagger (hero H1 only):
```css
.w { opacity: 0; filter: blur(8px); transform: translateY(18px);
  transition: opacity 680ms, filter 680ms, transform 680ms; }
/* each .w gets transitionDelay: i * 48ms */
```

**`.media-reveal`** — Clip-wipe + blur-zoom:
```css
img { transform: scale(1.08); filter: blur(10px);
  transition: transform 1300ms --ease-out, filter 1100ms --ease-out; }
::after { /* paper/ink wipe overlay */
  transform: scaleX(1); transform-origin: left;
  transition: transform 920ms cubic-bezier(0.76, 0, 0.24, 1);
}
/* .is-in: img normal scale, ::after scaleX(0) from right */
```
Applied to: `.craft-item__media` elements.

**`.svc-card`** — Bento card stagger:
```css
opacity: 0; transform: translateY(28px);
/* each card: transitionDelay = i * 55ms */
/* .is-in: opacity 1, transform none */
```

### Delay Helpers
```css
.reveal-d1 { transition-delay: 80ms; }
.reveal-d2 { transition-delay: 160ms; }
.reveal-d3 { transition-delay: 240ms; }
.reveal-d4 { transition-delay: 320ms; }
```
Applied to eyebrows and lede text to sequence after their heading.

### Continuous Animations
```css
/* Hero image slow zoom out */
@keyframes hero-zoom { to { transform: scale(1.0); } }
/* duration: 24s --ease-in-out */

/* Scroll-to-read arrow bob */
@keyframes bob {
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(4px); }
}
/* duration: 2.2s --ease-in-out infinite */

/* Marquee scroll */
@keyframes marquee {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}
/* duration: 70s linear infinite */
```

### Scroll-driven Effects
- **Nav progress bar**: `width: 0–100%` via `window.scrollY / (documentHeight - viewportHeight)`, `transition: width 120ms linear`
- **Parallax**: `translateY(progress * 80 - 20)px` — background moves ~80px total as section scrolls through viewport

### IntersectionObserver Setup
- Threshold: `0.07` (7% visible triggers entrance)
- Root margin: `0px 0px -4% 0px` (slight bottom offset)
- One-shot: `io.unobserve(el)` after first trigger — no repeat animations
- Hero fires immediately without IO (above fold)

### Motion Safety
All animations are suppressed with `prefers-reduced-motion: reduce`:
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
  .reveal, .reveal-blur, .media-reveal, .word-reveal .w, .svc-card { opacity: 1; filter: none; transform: none; }
}
```

---

## 6. Responsive Behavior

### Breakpoints
```css
@media (max-width: 1100px)   /* tablet — grid collapses */
@media (max-width: 768px)    /* mobile — stack everything */
```

### 1100px Breakpoints
- All 12-col split grids → `grid-template-columns: 1fr` (single column)
- `right` columns lose `padding-top`
- Service bento: 4-col → 2-col; `svc-card--span2` → span 1
- Craft grid: 12-col → 6-col
- Process sticky: sticky → relative, left card no longer fixed
- Hero meta strip: 4-col → 2-col

### 768px Breakpoints
- `--container-pad` fixed at `24px`
- Nav links hidden (no hamburger implemented)
- Stats: 4-col → 2-col with border adjustments
- Projects: full-width stack (all spans reset to `auto`)
- Craft: 6-col → 2-col
- Footer: 4-col → 2-col
- Contact form rows: 2-col → 1-col
- Areas list: 2-col → 1-col
- Testimonials: side-by-side → stacked
- Before/After caption: 4-col → 2-col; image → portrait ratio `4/5`
- Hero index text: hidden

### Typography on Mobile
Heading sizing is entirely handled by `clamp()` — no responsive overrides needed. At 375px viewport, headings scale to their lower bound (~2.25–2.8rem).

---

## 7. Section Anatomy

Every content section follows this structure:
```tsx
<section className="section [section--dark] [section--alt]" id="slug">
  <div className="container">
    {/* 12-col head grid */}
    <div className="[section]__head">
      <div className="[section]__head-l">
        <Eyebrow>## — Label</Eyebrow>
        <h2 className="[section]__h">
          Main heading with <em>serif accent.</em>
        </h2>
      </div>
      <div className="[section]__head-r">
        <p className="[section]__lede">Supporting paragraph, max ~38–42ch wide.</p>
      </div>
    </div>
    {/* Content body */}
  </div>
</section>
```

Margin between eyebrow and H2: `margin-top: 28px` on the heading.
Margin between head and body: `margin-bottom: 64–96px` on `.head`.

---

## 8. Data Architecture

| File | What it stores |
|------|---------------|
| `data/projects.ts` | `Project[]` — index, category, title, titleHtml, img, location, year, sqft, span, offset, landscape |
| `data/services.ts` | `ServiceCard[]` — num, icon, span (1\|2), title (HTML), desc |
| `data/content.ts` | Everything else — testimonials, process steps, craft items, areas, hero images, form options, BA data |

`titleHtml` fields contain `<em>` tags and must be rendered with `dangerouslySetInnerHTML`. All other fields are plain text.
