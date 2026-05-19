# UI Rules

Actionable rules for building new pages and components in the Nova Home Remodeling & Design codebase. Read DESIGN_SYSTEM.md first for the token reference. These rules tell you *what to do* and *what to avoid*.

---

## Typography Rules

**R-T1. Always use `clamp()` for section headings.**
Never write a fixed `font-size` for an H2 or display heading. Use the pattern `clamp(min, Xvw, max)` from DESIGN_SYSTEM.md. Picking a static size will break the fluid rhythm at edge viewports.

**R-T2. Weight 300 for all section headings. Weight 400 only for H3–H4 in body content.**
The signature of this site is ultra-light large type. Never use `font-weight: 500` or above on any H1–H2 element.

**R-T3. Every section H2 needs a serif italic `<em>` accent for at least one phrase.**
This is the primary editorial voice of the site. New sections without this feel disconnected. The `<em>` renders automatically in Instrument Serif italic with gold color via CSS.

**R-T4. Caps the em accent color by surface:**
- Light surface (`--bg-1`, `--bg-2`): use `color: var(--gold-700)` on `em`
- Dark surface (`--bg-dark`): use `color: var(--gold-500)` on `em`
Do not use gold-600 or gold-400 — those are for eyebrows and borders.

**R-T5. Body copy max-width: 38–42ch.**
Secondary paragraphs (`__lede`, `__body`) must have an explicit `max-width` in `ch` units. Without it text lines become uncomfortably long at wide viewports.

**R-T6. Eyebrow format: `"## — Label"` (two-digit number, em dash, single word or short phrase).**
```
01 — Studio
02 — Services
03 — Selected work
```
Use the `<Eyebrow>` component. Do not write the eyebrow as plain text.

**R-T7. Never use `font-family` raw values in CSS.** Always `var(--font-sans)` or `var(--font-serif)`.

**R-T8. Uppercase labels: always pair with `letter-spacing: 0.18–0.32em`.**
Uppercase text without generous tracking reads as shouting. Every `text-transform: uppercase` element in this codebase uses at least `0.14em` tracking.

---

## Color Rules

**R-C1. Never invent new colors.**
The palette is fixed. If you need a slightly different shade, use an existing token. Adding new hex values breaks cohesion immediately.

**R-C2. Use semantic aliases, not raw palette tokens, in component CSS.**
Write `color: var(--fg-2)`, not `color: var(--ink-700)`. This ensures dark-mode readiness and easier future theming.

**R-C3. Gold is the only accent color. Bronze is for interactive states.**
- `--gold-600` / `--gold-700` / `--gold-500`: decorative — em tags, eyebrows, progress bars, lines
- `--bronze-600` / `--bronze-700`: interactive — form focus ring, error messages, accent link hover

**R-C4. Overlay opacity values are non-negotiable.**
The nav at `rgba(..., 0.78)` and overlays at `0.48–0.68` are tuned for legibility across images. Do not increase opacity (it kills the atmospheric feel) or decrease it (text becomes unreadable).

**R-C5. On dark sections, body text is `--stone-200`, not `--paper`.**
Pure white (`--paper`) is reserved for headings and high-emphasis text. Descriptions and body copy on dark backgrounds use the warmer, slightly dimmer `--stone-200`.

**R-C6. `::selection` is ink-on-paper — do not override.**
The selection treatment (`background: var(--ink-900); color: var(--paper)`) is part of the brand feel.

---

## Layout Rules

**R-L1. All content lives inside `.container`.**
Never apply `padding-inline` directly to a section. Use `<div className="container">` as the sole width-constrainer.

**R-L2. New split layouts use the 12-column grid pattern.**
```css
display: grid;
grid-template-columns: repeat(12, 1fr);
gap: 40px;
```
Do not use `flex` for two-column content layouts — the 12-col system gives consistent gutters and simpler responsive collapse (just `grid-template-columns: 1fr` at 1100px).

**R-L3. Section vertical spacing comes from the token, not magic numbers.**
```css
.section { padding-block: var(--section-y); }
```
The only override allowed is the CTA section's extra breathing room. Do not write `padding-block: 120px` on a new section.

**R-L4. Row gaps in card grids are larger than column gaps.**
Projects use `row-gap: 128px` vs `column-gap: 40px`. Craft uses `row-gap: 88px`. This vertical separation creates rhythm between rows and prevents visual compression.

**R-L5. Stagger items with `margin-top` offset, not extra wrappers.**
The `.project--offset` and `.craft-item--offset` patterns apply a top margin to selected items for visual stagger. Do not nest in an extra div or use `align-self` to approximate this.

**R-L6. No hardcoded pixel breakpoints for typography.**
`clamp()` handles fluid type. Only use `@media` for layout structural changes (grid collapses, visibility, spacing resets).

---

## Component Rules

**R-CP1. Use `<Button>` for all CTA links and buttons — never write a raw `<a class="btn">` in a component.**
The polymorphic `as` prop handles both `<button>` and `<a>` rendering with correct semantics.

**R-CP2. `variant="tertiary"` for secondary/navigation actions, `variant="primary"` for conversion actions.**
- Primary: "Start a project", "Send the letter", "Start a conversation"
- Tertiary: "Read the studio brief", "Index — by year", "Send another"

**R-CP3. Arrow icons are on by default in `<Button>`. Turn off only for navigation-style links (`arrow={false}`).**

**R-CP4. Use `<Eyebrow dark gold>` on dark sections; `<Eyebrow>` on light sections.**
Gold eyebrow + gold em in the heading creates a consistent visual thread through dark sections (Philosophy, Process, BeforeAfter).

**R-CP5. New client components need `'use client'` only if they use: state, effects, refs, event handlers, or browser APIs.**
Server components are the default. AnimationsProvider, Nav, Process, BeforeAfter, ProjectGrid, Contact are clients. Everything else is server. Wrong direction (making server components client) bloats the JS bundle.

**R-CP6. The `dangerouslySetInnerHTML` pattern is only for pre-sanitized static data strings containing `<em>` tags.**
Never use it with user-generated content or external data. Only with the typed constants in `data/`.

---

## Motion Rules

**R-M1. Never write custom animation keyframes without a corresponding `prefers-reduced-motion` override.**
The global override in `globals.css` catches most cases, but verify any new `@keyframes` or JS-driven animations are gated on `window.matchMedia('(prefers-reduced-motion: reduce)')`.

**R-M2. Image reveals always use `.media-reveal` — never animate images with raw CSS on a new component.**
The `.media-reveal` class on the wrapper + `img` inside gives the clip-wipe + blur-zoom pattern automatically via `initAnimations()`.

**R-M3. Section headings always get `.reveal-blur` — never `.reveal` (plain translate).**
Body text / lede paragraphs get `.reveal-blur` + `.reveal-d1` or `.reveal-d2`. Plain `.reveal` is for section wrappers and card containers.

**R-M4. `initAnimations()` runs once, 750ms after hydration. Do not call it again.**
It uses `IntersectionObserver` with `io.unobserve(el)` — elements that have already entered will not re-animate on re-call.

**R-M5. All hover transitions use `--ease-out` and `--dur-base` unless specified otherwise.**
Use `--dur-cinema` (1100ms) only for image scale/blur. Use `--dur-slow` (620ms) for overlay fades. Use `--dur-fast` (180ms) only for opacity micro-interactions.

**R-M6. Do not animate `width`, `height`, or `top/left/right/bottom`.**
Only animate `transform`, `opacity`, `filter`, `clip-path`, and `box-shadow` for GPU-composited performance. The `areas__list li` padding animation is a deliberate exception (used sparingly).

**R-M7. The marquee animation runs at 70s — do not speed it up.**
Faster marquees feel agitated, not editorial. The 70s pace is calibrated to viewport width.

---

## New Page Checklist

When building a new route (e.g. `/services/kitchen`, `/locations/carmel`, `/blog/post`):

- [ ] Section uses `.section`, `.section--alt`, or `.section--dark` for background
- [ ] H2 is `font-weight: 300`, uses `clamp()`, has `<em>` serif accent
- [ ] Eyebrow uses `<Eyebrow>` component with correct format: `"## — Label"`
- [ ] All content inside `.container`
- [ ] Split layout uses 12-col grid (not flex), collapses at 1100px
- [ ] Images placed inside `.media-reveal` wrapper for entrance animation
- [ ] Body text max-width capped at `38–42ch`
- [ ] CTAs use `<Button>` — primary for conversion, tertiary for navigation
- [ ] No new hex colors introduced
- [ ] Hover transitions use `--ease-out` + `--dur-base`
- [ ] `prefers-reduced-motion` respected (automatic via global CSS; verify any JS animations)
- [ ] Component is a server component unless it needs state/effects/events

---

## What This Site Is NOT

These are failure modes — common patterns that would break the premium aesthetic:

- **No SaaS-style cards** with colored icon badges, drop shadows, and rounded-corner heavy borders
- **No gradient buttons** — buttons are solid ink or transparent text only
- **No multi-color palettes** — the palette is warm neutrals + a single gold accent
- **No system fonts** rendered directly — always through `var(--font-sans)`
- **No center-aligned body copy** — only CTA sections and the parallax section are centered
- **No bold section headings** — `font-weight: 300` is the rule
- **No hover effects that change text** — only transforms, shadows, opacity, and underlines
- **No loading spinners** — this is a static site; no async data fetching in the UI
- **No emoji or decorative punctuation in headings** — only `<em>` italics as accent
