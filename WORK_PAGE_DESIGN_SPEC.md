# /work Page — Content & Design Specification

Phase scope: this document specifies content and design for a new `/work` route. It is a
specification only. No production route, component, style, sitemap, or navigation changes
have been made. It builds directly on the inspection already recorded in `WORK_PAGE_PLAN.md`
and does not repeat that inspection — it resolves it into exact copy, exact image assignments,
and exact layout direction, ready to hand to implementation.

---

## 0. Verification against `WORK_PAGE_PLAN.md` and `gallery_realwork`

The task brief listed six likely work groups. Checked against the actual 40-file inventory in
`public/gallery_realwork` and against `WORK_PAGE_PLAN.md` §3–4, five of the six are confirmed
as-is. One addition is warranted:

- **Kitchen Cabinet, Sink & Appliance Installation is added as a seventh visual moment.**
  The folder contains 7 kitchen photos (progress and near-finished) — one of the *strongest*
  documented sets in the whole folder, stronger than Bathroom or Deck. `WORK_PAGE_PLAN.md`
  independently identified this as its own group (§4, item 2). Leaving it out would waste the
  best-documented proof of a second trade skill. It is added as its own "Real Work" section,
  scoped carefully to cabinets/sink/appliance connections — not called a "kitchen remodel,"
  per the plan's own caution (§11).
- **Custom Carpentry / Stair Framing is re-scoped from a seventh card into the single
  "craftsmanship moment"** (Section D of the brief), using one image editorially rather than
  as another card. This matches the brief's explicit instruction ("use one construction-in-
  progress image... this should feel editorial, not like another card") and avoids the
  smallest, least-finished-looking material (rough stair framing, a framing video, a beam
  photo) competing head-to-head with fully photographed rooms.
- The other five groups (Windows/Exterior, Bathroom, Walkway/Gate, Deck/Railing, Exterior
  Structure) are confirmed as-is against the photo inventory.

Net result: **6 "Real Work" sections + 1 editorial craftsmanship moment**, using 22 of the 40
files. The remaining files (extra window/kitchen angles, both MP4s, a couple of redundant
angles) are left in reserve for a future expansion — consistent with "a modest collection,"
not stretched to look bigger than it is.

---

## 1. Final Recommended Page Structure

```
SiteShell (navLight)
 └─ main
     A. PageHero                         id="top" (built-in)
     B. Intro band (Section)             id="about-this-work"
     C. Real Work sections (×6)          id per section, see §3
     D. Craftsmanship moment (editorial) id="craftsmanship"
     E. Final CTA (CTASection, custom copy)   id="cta"
     F. Contact (unmodified, existing component)  id="contact"
```

`Nav` and `Footer` are unchanged — provided by `SiteShell` exactly as on every other page. No
new header/footer variant is introduced.

---

## 2. Section A — Hero (uses existing `PageHero` component as-is)

`PageHero` is used exactly as it is used on every other inner page (`handyman-services-houston`,
`drywall-repair-houston`, `services/[slug]`, etc.) — no new hero component.

```
eyebrow:      "Real Nova Projects"
title:        "Real Work. Real Homes."
description:  "Completed and in-progress photos from real Nova Home Remodeling
               projects — window and siding repair, bathroom updates, kitchen
               cabinets, decks, walkways, and the carpentry behind them, around
               Houston. No stock photography on this page."
image:        /gallery_realwork/front-house-window-installation-siding-repair-after.jpg
               (current file: "fronthouse window installation and siding fixed (after).JPG")
imageAlt:     "Front exterior of a two-story house after window installation and
               siding repair work."
ctaLabel:     "Request an Estimate"
ctaHref:      "/contact"
```

**Why this copy:** "Real Work. Real Homes." is plain text, title-case, no `<em>` — this matches
every existing `PageHero` title in the codebase (`Houston Handyman & Home Repair Services`,
`Drywall Repair in Houston`, etc.). None of them use the serif italic accent; that pattern is
reserved for in-page section `H2`s (`R-T3`), not the `PageHero` `H1`. Do not introduce an `<em>`
here — it would be a new pattern, not a reused one.

The "no stock photography on this page" line is folded into the description sentence itself
rather than added as a separate trust badge, so no new markup is needed in `PageHero`.

**Secondary CTA (small, flagged addition):** The brief asks for a secondary CTA "only if it
fits the existing site design." One already exists sitewide: the homepage `Hero` pairs its
primary button with a plain underlined link using the `.hero__cta-alt` class (`"See remodeling
work"` → `#work`). `PageHero` doesn't currently expose a slot for this. Recommend a small,
optional `secondaryLabel`/`secondaryHref` prop on `PageHero` (default `undefined`, so no other
page using `PageHero` changes), rendered with the existing `.hero__cta-alt` class:

```
secondaryLabel: "Call (281) 690-3431"
secondaryHref:  SITE.phoneHref
```

This is the only prop-level change recommended anywhere in this spec. Everything else reuses
components unmodified.

---

## 3. Section B — Short Trust/Context Intro

Standard `Section` + the documented "section anatomy" head grid (DESIGN_SYSTEM §7): eyebrow +
`H2` on the left, one lede paragraph on the right, 12-col grid, same proportions as `Approach`
(`1/8` left, `9/13` right). Light background (`--bg-1`, default `.section`, no `--alt`/`--dark`).

```
id:       about-this-work
eyebrow:  "Completed & In Progress"        (no number — see §10 for why)
h2:       "Good construction shows before it's <em>finished.</em>"
lede:     "This page includes both completed projects and work still underway.
           Framing, siding repair, and cabinet installs look different mid-project
           than they do once painted and trimmed out — we think that's worth
           showing, not just the polished result."
```

Body copy stays inside the standard `38–42ch` max-width (`R-T5`). No image in this section — it
is a short text-only pause between the hero and the first real-work photos, which keeps the
page's visual weight on the photography that follows.

---

## 4. Section C — Real Work Sections (×6)

### Repeating per-section anatomy

Each of the six groups uses the **same** two-part anatomy, both parts already existing patterns
in the codebase — nothing new is invented:

**Part 1 — Cover + copy panel** (12-col grid, `gap: 40px`, collapsing to `1fr` at 1100px per
the existing breakpoint convention):
- **Image column (cols 1–8, 8 of 12):** cover photo in a `.craft-item__media`-style frame
  (`media-reveal` wrapper, existing hover-zoom, `border-radius` per craft-item precedent). A
  small glass status chip sits in the top-right corner, reusing `.ba__label` styling verbatim
  (10px uppercase, `0.32em` tracking, `rgba(14,14,12,0.55)` background, `blur(8px)`) — text
  reads `Completed`, `In Progress`, or `Before`.
- **Copy column (cols 9–12, 4 of 12):** a short category label (styled like `.craft-item__num`
  — small, gold-toned index-style text, but holding a word instead of a number, e.g. "Windows
  & Exterior"), an `H3` title (`.craft-item__title` styling), one paragraph
  (`.craft-item__desc` styling, ≤ 45 words), and a tertiary `CtaLink` ("Need something
  similar?" pattern, see per-section copy below).

Image gets 8 of 12 columns deliberately — more than the documented `7/5` splits used elsewhere
— because this page's job is to let the photography carry the section (brief: "the page must
remain primarily visual"). The grid mechanism itself (12 columns, 40px gap, collapse at 1100px)
is identical to every other split layout on the site; only the column ratio is new, which is
allowed under `R-L2` (any 12-col split is compliant, not just the six pre-listed ratios).

**Part 2 — Supporting images row** (sits directly below Part 1, full width): reuses
`ServiceMicroGallery`'s existing `.svc-micro-gallery__grid` (4-column grid, 16px gap, first
image spans 2) verbatim — this component already exists and already ships on service pages.
Each image gets a two-line caption using the exact `.port-img__cap` treatment from
`PortfolioScroll` (title line + detail line), which is **already always-visible on mobile**
(see `app/globals.css` line ~4221: `.port-img__cap { opacity: 1 }` under the 768px query) — so
this satisfies "no tiny captions" / "no hover-only captions on mobile" without any new CSS.

Sections stack full-width down the page with generous vertical rhythm between them — reuse the
`--s-10` spacing token (128px) as the between-section gap, the same order of magnitude as the
Craft grid's `row-gap: 88px` and Project grid's `row-gap: 128px`. **Do not** lay the six groups
out as a 2-up or 3-up card grid — that reads as "excessive cards," which the brief explicitly
rules out. Six large, unhurried, full-width sections is the intended feel.

---

### 4.1 Windows & Exterior Repair

```
id:       windows-exterior
category: "Windows & Exterior"
h3:       "Window Installation & Siding Repair"
body:     "Replacement windows installed along with the surrounding siding and
           trim repair needed to properly finish each opening — inside and out,
           on more than one side of the house."
cta:      "Need similar window or siding work?" → /services/window-installation
```
Inline mention inside the body (implementation may hyperlink "siding repair" to
`/services/siding-repair`) is optional; the tertiary CTA is the primary link.

| Role | Current file | Suggested filename | Caption | Badge |
|---|---|---|---|---|
| Cover | `backhouse window and door installed.JPG` | `rear-house-window-door-installed-siding-repair.jpg` | Rear exterior — after | Completed |
| Supporting | `window installation.JPG` | `front-house-window-installation-progress.jpg` | Front exterior — windows going in | In Progress |
| Supporting | `fronthouse window install and siding fix progress .JPG` | `front-house-window-install-siding-progress.jpg` | Front exterior — siding repair | In Progress |
| Supporting | `openwall_before 1.HEIC` | `porch-wall-opening-before-repair-1.jpg` | Porch wall — before | Before |
| Supporting | `openwall_after 2.HEIC` | `porch-wall-siding-repair-after-2.jpg` | Porch wall — after | Completed |

Alt text: reuse `WORK_PAGE_PLAN.md` §3 table verbatim for each file (already written and good).

---

### 4.2 Kitchen Cabinets & Sink

```
id:       kitchen
category: "Kitchen Cabinets & Sink"
h3:       "Kitchen Cabinet & Sink Installation"
body:     "New cabinet boxes, doors, and hardware installed alongside sink,
           faucet, and appliance connections — shown here from bare walls
           through to a finished, working kitchen."
cta:      "Need cabinets or a kitchen refresh?" → /services/kitchen-remodeling
```
Deliberately scoped to cabinets/sink/appliances — never call this a "kitchen remodel"
(`WORK_PAGE_PLAN.md` §11 flags this exact risk).

| Role | Current file | Suggested filename | Caption | Badge |
|---|---|---|---|---|
| Cover | `kitchenremode and cabinet installation finished.JPG` | `kitchen-cabinet-appliance-installation-after.jpg` | Finished kitchen | Completed |
| Supporting | `kitchen remodel and cabinet installation progress A.JPG` | `kitchen-cabinet-installation-progress-a.jpg` | Cabinet install — in progress | In Progress |
| Supporting | `kitchen remodel and cabinet painting progress A.JPG` | `kitchen-cabinet-painting-progress.jpg` | Cabinet painting — in progress | In Progress |
| Supporting | `kitchenremodel and sink installation progress B 3.JPG` | `kitchen-sink-cabinet-installation-progress.jpg` | Sink install — in progress | In Progress |

---

### 4.3 Bathroom Improvements

```
id:       bathroom
category: "Bathroom Improvements"
h3:       "Bathroom Vanity, Fixture & Finish Work"
body:     "Bathroom improvements including vanity and fixture installation,
           tile work, and finishing details — the kind of focused update that
           modernizes a bathroom without a full gut renovation."
cta:      "Need a bathroom refresh like this?" → /services/bathroom-remodeling
```

Only two photos — the smallest group. Keep it exactly that small rather than padding it out;
it is more credible than pretending there are more.

| Role | Current file | Suggested filename | Caption | Badge |
|---|---|---|---|---|
| Cover | `vanity and toilet install.JPG` | `bathroom-vanity-toilet-installation-after.jpg` | Vanity & fixtures — after | Completed |
| Supporting | `toilet installation.JPG` | `bathroom-toilet-vanity-installation-after.jpg` | Toilet & tile — after | Completed |

*(Note: `bahtroom full remodel.MP4` exists but is deliberately excluded at launch — see §9.)*

---

### 4.4 Walkway & Gate

```
id:       walkway-gate
category: "Walkway & Gate"
h3:       "Concrete Walkway & Gate Installation"
body:     "A concrete stepping-stone walkway with a gravel border, built from
           form and pour through to a finished path, plus a new wood gate at
           the fence line."
cta:      "Need a walkway, gate, or fence repair?" → /services/fence-installation
```

| Role | Current file | Suggested filename | Caption | Badge |
|---|---|---|---|---|
| Cover | `walkway + door fence.JPG` | `walkway-gate-installation-after.jpg` | Walkway & gate — after | Completed |
| Supporting | `walkway.JPG` | `concrete-walkway-gravel-path-after.jpg` | Finished walkway | Completed |
| Supporting | `walkway in progress.JPG` | `walkway-installation-progress.jpg` | Walkway — in progress | In Progress |

---

### 4.5 Deck & Railing

```
id:       deck-railing
category: "Deck & Railing"
h3:       "Second-Story Deck Railing"
body:     "Railing framed and installed on an elevated deck, from rough framing
           to a finished rail that's safe to lean on and built to match the
           house."
cta:      "Need a deck or railing built?" → /services/deck-construction
```

| Role | Current file | Suggested filename | Caption | Badge |
|---|---|---|---|---|
| Cover | `rail installation.JPG` | `deck-railing-installation-after.jpg` | Railing — after | Completed |
| Supporting | `rail framing.JPG` | `second-story-deck-rail-framing-progress.jpg` | Railing — framing | In Progress |
| Supporting | `rail and deck framing.JPG` | `deck-railing-framing-progress.jpg` | Deck & rail — framing | In Progress |

---

### 4.6 Custom Exterior Structure

```
id:       exterior-structure
category: "Exterior Structure"
h3:       "Small Exterior Structure — Siding, Caulking & Paint"
body:     "A small exterior structure re-sided, caulked, and painted — the same
           finish-carpentry attention we bring to a house, applied to a
           standalone structure on the property."
cta:      "Need exterior painting or siding work?" → /services/exterior-painting
```

Copy deliberately avoids "tiny house" per `WORK_PAGE_PLAN.md` §11 — uses "small exterior
structure" throughout.

| Role | Current file | Suggested filename | Caption | Badge |
|---|---|---|---|---|
| Cover | `tiny house caulking and painting.JPG` | `small-exterior-structure-caulking-painting-after.jpg` | Exterior structure — after | Completed |
| Supporting | `tiny house painting.JPG` | `small-exterior-structure-painting-after.jpg` | Painted exterior — after | Completed |
| Supporting | `tiny house painting 2.JPG` | `small-exterior-structure-trim-paint-detail.jpg` | Trim detail | Completed |

---

## 5. Section D — Craftsmanship / Process Moment (editorial, not a card)

Reuses `ServiceVisualBreak`'s existing `.svc-visual-break` pattern verbatim: full-bleed image,
dark gradient overlay (already tuned per `R-C4` — do not adjust opacity), centered-left copy
block over the image. This component already exists and already ships on service pages — using
it here is a direct reuse, not a new pattern.

```
id:       craftsmanship
image:    /gallery_realwork/custom-wood-stair-framing-complete.jpg
          (current file: "finished stair.JPG")
imageAlt: "Newly framed wood stairs inside a construction space before finish
           materials are installed."
kicker:   "Behind the Finish"
h2:       "The best work happens before the <em>finish work.</em>"
body:     "Framing, beams, and stair carpentry rarely get photographed — they're
           covered by drywall, trim, and paint within days. We include a few of
           these in-progress shots because they're proof of what's underneath
           every finished room: square corners, solid framing, and stairs built
           to hold weight safely for decades, not just look good on day one."
```

**No CTA, no link, no supporting image grid here.** `ServiceVisualBreak` already supports
running with `areaLinks` omitted (it renders nothing if the list is empty) — use it that way.
This is the one deliberately quiet, non-clickable moment on the page, exactly as the brief asks
("editorial, not another card").

---

## 6. Section E — Final CTA

Reuses the existing `CTASection` component's exact CSS classes (`.cta`, `.cta__index`,
`.cta__h`, `.cta__sub`, `.cta__trust`) with page-specific copy. `CTASection` is currently
hardcoded; recommend making its text configurable via optional props with the homepage copy as
the default (so no other page changes), OR a thin page-local component using the identical class
names. Either way, the **visual output must be pixel-identical** to the existing component —
only the words differ.

```
id:            cta
index/eyebrow: "Get Started"                          (no number — see §10)
h2:            "See something your home <em>needs?</em>"
sub-paragraph: "From smaller repairs and installations to larger remodeling
               projects — tell us what you need done."
ctaLabel:      "Request a Free Estimate"
ctaHref:       "#contact"
phone:         reuse .cta__phone / link--gold, SITE.phoneDisplay / SITE.phoneHref — unchanged
trust line:    "Houston, Texas · Monday–Saturday, 7:00 AM–7:00 PM"   (reused verbatim)
```

The sub-paragraph is a small addition to the component (a `<p>` between `H2` and the button) —
style it identically to `.ba__lede`/`.craft__lede` (16px / 1.7 / max ~38ch), which is already an
established body-copy treatment, not a new one.

Followed immediately by the existing `<Contact />` section, completely unmodified — same as it
appears at the bottom of the homepage and `handyman-services-houston`.

---

## 7. Internal-Link Destinations (verified against `data/service-pages.ts`)

All of the following slugs exist today in `SERVICE_PAGE_DATA` and resolve via `serviceUrl(slug)`
→ `/services/${slug}`:

| Link text | URL |
|---|---|
| Window installation | `/services/window-installation` |
| Siding repair | `/services/siding-repair` |
| Kitchen remodeling | `/services/kitchen-remodeling` |
| Cabinet installation | `/services/cabinet-installation` |
| Bathroom remodeling | `/services/bathroom-remodeling` |
| Fence installation | `/services/fence-installation` |
| Outdoor remodeling | `/services/outdoor-remodeling` |
| Deck construction | `/services/deck-construction` |
| Exterior painting | `/services/exterior-painting` |
| Custom carpentry | `/services/custom-carpentry` |
| Contact (final CTA + hero) | `/contact` (hero) and `#contact` (final CTA, in-page) |

Breadcrumbs: `Home (/) → Work (/work)`, rendered with the existing `Breadcrumbs` component,
same as every other inner page.

---

## 8. Desktop Layout Direction

- **Hero:** `PageHero`, `80svh`, unchanged from every other page.
- **Intro (B):** single `section__head`-style grid, `1/8` + `9/13`, no image, generous
  `--section-y` padding above/below.
- **Real Work sections (C):** six full-width blocks, each an `8/12` image + `4/12` copy row,
  followed by a full-width 4-column supporting-image row. `~128px` (`--s-10`) between sections.
- **Craftsmanship moment (D):** full-bleed `min-height: clamp(520px, 70vh, 760px)` break,
  identical proportions to `ServiceVisualBreak` elsewhere on the site.
- **Final CTA (E) + Contact (F):** identical to every other page that ends this way.

No new grid ratios beyond the one 8/12–4/12 split noted in §4; everything else reuses an
existing component wholesale.

---

## 9. Mobile Layout Direction (320px–430px)

- `PageHero` already collapses correctly at 768px (full-bleed image, stacked copy, full-width
  buttons) — no changes needed.
- Intro band: `1/8 + 9/13` grid collapses to `1fr` at 1100px automatically (existing rule) —
  eyebrow/H2 stack above the lede paragraph.
- Each Real Work section: `8/12 + 4/12` collapses to `1fr` at 1100px — cover image stacks full
  width above the category label / title / paragraph / CTA link. The 4-column supporting-image
  grid (`.svc-micro-gallery__grid`) collapses to `1fr` at 768px (existing rule) — supporting
  photos stack one per row, full width, preserving their original aspect ratio via
  `object-fit: cover` inside a fixed-`aspect-ratio` frame (no cropping surprises).
- Captions on supporting images are **always visible** on mobile (existing `768px` override on
  `.port-img__cap`), not hover-dependent — satisfies "no tiny captions," "no hover-only."
- Status badges (`.ba__label` glass chips) are legible at small sizes already (10px + heavy
  tracking + blurred dark backing) — no separate mobile treatment needed.
- Craftsmanship moment: `ServiceVisualBreak` already reduces `min-height` at narrow widths
  (existing `768px` rule) and stacks its copy full-width over the image.
- Final CTA + Contact: unchanged, already mobile-tuned (`Contact`'s form fields go
  single-column at 768px, per existing rule).
- No carousels, no horizontal scroll anywhere on this page — every gallery is a `1fr`-collapsing
  grid, so nothing requires horizontal swiping to understand.
- `StickyMobileCTA` (already part of `SiteShell`) continues to provide the persistent tap-to-call
  / estimate affordance on mobile without this page adding anything extra.

---

## 10. How This Matches the Existing Nova Design System

- **No new colors, no new fonts, no new border-radius or spacing values.** Every token used
  above (`--gold-700` em accent, `--stone`/`--ink` body text, `--s-10` spacing, `--r-2` image
  corners) already exists in `DESIGN_SYSTEM.md`.
- **No eyebrow numbering.** The brief's example eyebrow ("REAL NOVA PROJECTS") and `UI_RULES.md`
  `R-T6` both suggest a numbered `"## — Label"` format, but that numbering is specific to the
  homepage's single continuous 01–11 section sequence (`Approach` is `01`, `Contact` is `11`,
  etc.). Every standalone inner page in the codebase — `KitchenRemodelingExperience`,
  `ServiceVisualStory`/`ServiceMicroGallery`, `handyman-services-houston`'s article sections —
  already uses short, un-numbered eyebrow phrases instead, because a standalone page inventing
  its own "01" would collide with (or misleadingly extend) the homepage's numbering. This spec
  follows that actual, already-established inner-page precedent rather than the homepage-specific
  convention.
- **Every component reused is one that already ships today:** `PageHero`, `Section`, `Eyebrow`,
  `Button`/`CtaLink`, `ResponsiveImage`, `Breadcrumbs`, `JsonLd`, the `.craft-item__*` card
  anatomy, `ServiceMicroGallery`'s `.svc-micro-gallery__grid`, `PortfolioScroll`'s
  `.port-img__cap` caption treatment, `.ba__label` glass status chips, and `ServiceVisualBreak`'s
  full-bleed editorial pattern. The only net-new visual idea is a status chip reading
  "Completed" / "In Progress" / "Before" — built entirely from the existing `.ba__label` CSS, no
  new class.
- **Motion is untouched:** `media-reveal` on every cover image, `reveal-blur` on every heading
  and lede, `IntersectionObserver`-driven, one-shot, `prefers-reduced-motion`-safe — all inherited
  automatically from `AnimationsProvider`/`initAnimations()` the same way every other page gets it.
  No custom keyframes are introduced.
- **Distinct from homepage "Project Inspiration":** `ProjectGrid` (`/#work`) is untouched by this
  spec and keeps its own copy ("Project Inspiration," "representative examples," filter tags).
  `/work` never uses the word "inspiration," never uses stock/Unsplash imagery, and every image
  credit lives under `/gallery_realwork/`. Nothing on `/work` disputes or downplays the homepage
  section — the intro band (§3) explains the real-vs-in-progress distinction, not a real-vs-
  inspiration one, since that split is already handled by the two pages simply drawing from
  different, clearly separate image pools.

---

## 11. Image Optimization Notes (prerequisite for implementation, not done in this phase)

- 4 files are `.HEIC` (`openwall_before/after 1/2`) — confirmed via `sips` they are readable
  locally (4032×3024) but Next/browsers cannot serve `.HEIC` directly. **Convert to `.jpg`
  before implementation** — this blocks shipping the Windows & Exterior group's before/after
  pair as specified.
- Filenames in `public/gallery_realwork` currently contain spaces, a stray colon
  (`side:back house...`), typos, and mixed-case extensions. The "Suggested filename" column in
  §4 (sourced from `WORK_PAGE_PLAN.md` §3) is the target normalized name — lowercase, hyphenated,
  no special characters — needed before these can be safely used as URL paths / `next/image`
  `src` values.
- The two `.MP4` files (`bahtroom full remodel.MP4`, `framing in house.MP4`) are **excluded from
  this spec's initial image list** — vertical phone video is heavy for cold mobile/QR traffic.
  If added later, use a static poster frame with tap-to-play, not autoplay.
- `priority` loading is used only on the `PageHero` image, per existing sitewide convention;
  every other image on this page lazy-loads.

---

## 12. Metadata & Structured Data

```
title:        "Our Work in Houston"        (createMetadata appends " | Nova Home
                                              Remodeling & Design" automatically)
description:  "Completed and in-progress work from Nova Home Remodeling & Design —
               Houston window and siding repair, bathroom updates, kitchen
               cabinets, decks, walkways, and the carpentry behind them."
path:         "/work"
image:        the hero cover image (front-house-window-installation-siding-repair-after.jpg)
```

Structured data (reusing existing helpers in `lib/seo/json-ld.ts`, same as every other page):

- `breadcrumbJsonLd([{ name: 'Home', href: '/' }, { name: 'Work', href: '/work' }])`
- `collectionPageJsonLd({ name: 'Our Work — Nova Home Remodeling & Design', description, path:
  '/work', items: [six group titles, each pointing to its in-page anchor, e.g. `/work#kitchen`] })`
  — this helper already exists and already does exactly this shape of thing (§ confirmed by
  reading `lib/seo/json-ld.ts` lines 268–298).
- No `Project`/`CreativeWork`/`Review`/`AggregateRating` schema — unverifiable claims, per
  `WORK_PAGE_PLAN.md` §7.

---

## 13. Files Likely Touched at Implementation Time (not created in this phase)

Per `WORK_PAGE_PLAN.md` §10, unchanged by this spec phase:

- New: `app/work/page.tsx`, a typed content file for the six groups, a `RealWorkSection`
  component (Part 1 + Part 2 anatomy from §4), optimized/renamed image assets.
- Small edits: optional `secondaryLabel`/`secondaryHref` prop on `PageHero` (§2); optional copy
  props on `CTASection` (§6, defaulting to current homepage copy).
- Deferred to a later phase (not part of this spec): pointing `Nav`'s "Work" link and the
  homepage's "See remodeling work" / "View all work" links at `/work` instead of `/#work`, and
  adding `/work` to `app/sitemap.ts`.
