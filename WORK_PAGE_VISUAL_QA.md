# /work Page — Visual & Content QA

Scope: QA pass on the already-implemented `/work` page (`app/work/page.tsx`, `data/work-gallery.ts`,
`components/sections/RealWorkGallery.tsx`, plus the `app/globals.css` rules added for it). Read
`WORK_PAGE_PLAN.md`, `WORK_PAGE_DESIGN_SPEC.md`, `WORK_PAGE_IMPLEMENTATION.md`, and
`WORK_PAGE_SEO.md` first, then inspected the real components, CSS, and — critically — the actual
source photos (not just their alt text) before changing anything. Fixes below are corrective, not
a redesign: every change reuses a value, ratio, or pattern that already exists elsewhere on the
site.

---

## 1. Problems Found

### 1a. Critical — most photos on the page rendered as broken, letterboxed thumbnails
`data/work-gallery.ts` set `fit: 'contain'` on nearly every cover and supporting image (19 of 22
used photos). Those images sit in `.real-work-photo` boxes with a **fixed 4:3 landscape
aspect-ratio**, but the actual source photos are vertical phone shots — I opened eight of them
directly (`rear-house-window-door-installed-siding-repair.jpg`, the kitchen/bathroom/walkway/deck/
exterior-structure covers, the hero, and a supporting bathroom shot) and confirmed real dimensions
like 1884×4080 and 947×2048 (aspect ≈ 0.46–0.58). With `object-fit: contain` inside a 4:3 box, the
math is unforgiving: a 900px-wide, 690px-tall box holding a 0.46-aspect photo renders the photo at
only **~319px wide**, leaving roughly **290px of empty `--paper-3` (cream) padding on each side**.
That's not a stylistic crop — it's a pale, empty box with a thin photo floating in the middle,
repeated across nearly every section on the page. This is the single biggest reason the page would
have read as "broken" or "AI-template-placeholder" rather than premium and editorial: it directly
contradicts the sitewide rule that *every other image on this site* — hero, `ProjectCard`,
`CraftCard`, `ServiceVisualStory`, `BeforeAfter`, `PortfolioScroll` — uses full-bleed
`object-fit: cover`, no exceptions, no letterboxing.

The implementer's own notes (`WORK_PAGE_IMPLEMENTATION.md`, "Deviations") explain the reasoning:
`contain` was used "where cover cropping could hide important construction details." That's a
legitimate worry, but the fix belongs in aspect-ratio choice, not `object-fit`.

### 1b. Grid split fought the actual photography
The cover slot was 8-of-12 columns (a wide, landscape-shaped box) paired with a 4-of-12 text
column. Since virtually every cover photo is a tall vertical phone shot, that wide box either (a)
under `contain`, produced the pillarboxed look in 1a, or (b) under plain `cover` at the *original*
4:3 ratio, would have cropped away roughly two-thirds of each photo's vertical content — losing
whole windows, half a kitchen, etc. Neither option was right; see §2 for the fix.

### 1c. Two "before/after" photos rendered sideways
Independent of the crop bug: `porch-wall-opening-before-repair-1.jpg` and
`porch-wall-siding-repair-after-2.jpg` — the two files converted from HEIC during implementation —
had **no EXIF orientation tag and sideways pixel data**. I rendered both directly and confirmed
they displayed rotated 90° (porch ceiling running vertically instead of overhead, deck floor on
the side instead of underfoot). This is a real, pre-existing defect that would have shipped to
production; it wasn't specific to the `contain`/`cover` issue. Fixed in §2.

### 1d. Two source images were 7MB "raw" conversions
Those same two porch-wall files were full 4032×3024, ~7MB each — every other converted/used image
in the folder is 200KB–1.6MB. Next's image optimizer would reprocess them on request, so this
wasn't a user-facing "the page is slow" bug, but it's inconsistent asset hygiene (bigger build
cache misses, more Vercel image-transform cost) and worth fixing while touching these files anyway.

### 1e. Status shown twice on the same photo
`WorkPhoto` rendered the same status word in **two places** on every supporting image: once in the
top-right glass badge (`.ba__label`, e.g. "In Progress") and again as the second line of the
caption (`.port-img__cap-detail`, also "In Progress"). That reads as repetitive/templated rather
than "intentionally labeled" — the brief's own language for what to avoid.

### 1f. Supporting-photo grid left visible empty gaps
`RealWorkGallery` reused `ServiceMicroGallery`'s fixed 4-column grid with the first image spanning
2 columns (`svc-micro-gallery__image--lead`). That pattern assumes a roughly-4-image gallery. Three
of the six work groups have only **1 or 2** supporting photos (Bathroom: 1, Walkway/Gate: 2,
Deck/Railing: 2). With a lead image spanning 2 of 4 columns and nothing to fill the remainder, those
rows would have rendered with a visibly empty, unfilled column-track on the right — looking
unfinished rather than intentionally modest.

### 1g. Everything else checked out
I reviewed the hero, intro band, craftsmanship editorial break, final CTA, `Contact`, and all the
site-wide wiring (`Nav`, `Footer`, homepage `Hero`/`ProjectGrid`/`PortfolioScroll`, `sitemap.ts`,
`urls.ts`, `services/page.tsx`) touched by this feature. All of it reuses existing components and
CSS classes correctly, the `em` accent colors follow `R-T4` (gold-500 on the dark craftsmanship
break, gold-700 on the light intro band), the new `ProjectGrid` note ("Looking for projects we've
actually completed? View Our Work.") is gentle and doesn't undercut the existing Project
Inspiration section, and a grep across the new page's copy for generic contractor phrases
("transform your space," "elevate your home," "unparalleled," etc.) turned up nothing — the
existing copy is already grounded in what the photos actually show. No changes were needed in any
of these areas.

---

## 2. Changes Made

**`data/work-gallery.ts`**
- Removed the `fit`/`WorkImageFit` field and type entirely — every image now always renders with
  `object-fit: cover`, matching the rest of the site. There is no longer a way to accidentally
  reintroduce letterboxing.
- Added `objectPosition: 'center 20%'` to the deck/railing cover so the crop favors the new
  railing (the actual work) over the lower half of the photo, which also happens to reduce
  visibility of the house's street-number plaques (see §6).

**`components/sections/RealWorkGallery.tsx`**
- Removed the second caption line (`.port-img__cap-detail`, the duplicate status word) — the
  corner badge is now the single source of status, the caption line is the one-line factual
  description only.
- Removed the `lead`/2-column-span treatment from supporting photos.
- Supporting photos now render in their own `.real-work__support` grid instead of borrowing
  `.svc-micro-gallery__grid`.

**`app/globals.css`** (`REAL WORK PAGE` block)
- **Grid split:** cover image column changed from `1/9` (8 of 12) to `1/7` (6 of 12); copy column
  from `9/13` to `7/13`. This is the documented sitewide "6/6" split (`DESIGN_SYSTEM.md`'s
  "Common column splits" table), not a new ratio — and it gives the copy column roughly double the
  width it had before (~680px vs. ~300px), so a 42ch paragraph and a tertiary CTA link no longer
  sit in a cramped sidebar.
- **Cover sizing:** replaced the old `aspect-ratio: 4/3` + `min-height: clamp(340px, 48vw, 690px)`
  (two competing sizing mechanisms) with a single, higher-specificity override —
  `.real-work__cover.real-work-photo { aspect-ratio: auto; height: clamp(380px, 44vw, 640px) }` —
  so the box height is art-directed directly instead of derived from a mismatched aspect ratio.
  This also means the same rule holds at mobile widths (the clamp's 380px floor), so the cover
  photo never becomes "absurdly tall" on a phone.
- **Base aspect-ratio flipped from 4:3 to 3:4** for supporting photos (`.real-work-photo`), since
  19 of the 22 used photos are portrait-sourced. A 3:4 box crops far less off a ~0.46-aspect
  source than the old 4:3 box did (roughly 62% of the photo's height stays visible vs. ~35% before)
  — directly addressing the "cover crop hides construction details" concern that motivated the
  original `contain` workaround, without reintroducing letterboxing. The 3 supporting photos that
  are genuinely landscape-sourced keep their existing `aspect: 'wide'` (16:9) tag, unchanged.
- **`object-fit` hardcoded to `cover`** (dropped the `--work-object-fit` CSS-variable indirection —
  there's no longer a legitimate reason to ever set it to anything else, so the footgun is gone).
- **Supporting-photo grid** now uses `grid-template-columns: repeat(auto-fill, minmax(200px, 260px))`
  with `justify-content: start` instead of a fixed 4-column track. Each group's row now sizes to
  however many supporting photos it actually has (1 to 4) and packs them left-aligned at a
  consistent card width — no dangling empty column on groups with only 1–2 supporting photos, and
  no need for a "lead" image to make the row look intentional.
- Removed the now-dead `.real-work__cover { min-height: auto }` reset at the 1100px breakpoint
  (the property it reset no longer exists on that element).

**Image assets** (`public/gallery_realwork/`)
- Rotated `porch-wall-opening-before-repair-1.jpg` and `porch-wall-siding-repair-after-2.jpg` 90°
  clockwise to correct the sideways orientation (verified upright against the original photo
  content — porch ceiling overhead, deck underfoot, light fixture right-side up — before
  committing to the rotation).
- Recompressed both from 4032×3024 (~7MB each) down to 1800×1350 (~820–840KB each), matching the
  size range of every other image in the folder.

**Validation:** `npm run lint`, `npx tsc --noEmit`, and `npm run build` all pass clean after these
changes; `/work` still generates as a static route.

---

## 3. Images Intentionally Excluded — and Images Reviewed but Kept

No image in active use on `/work` was weak enough to cut during this pass — I reviewed the
selection against the photos and it's already disciplined (22 of 40 available files are used; the
rest were already set aside during the design phase). Specifically kept-as-is after review:

- **Bathroom group stays at 2 images** (cover + 1). It's the thinnest section on the page, but
  padding it with a weaker or repetitive photo would be worse than an honest, modest section. This
  matches the plan's own instruction not to pretend the portfolio is bigger than it is.
- **Deck/Railing cover** (`deck-railing-construction.jpg`) is a busier photo than ideal — a large
  share of the frame is sky and tree canopy rather than the railing itself — but it's the only
  "after" shot available for that group, so I kept it and biased the crop position instead of
  swapping it for a weaker framing-stage photo.

Still excluded from the still-photo grid at this QA point: the redundant/duplicate-angle stills
not already selected for a group. The two `.MP4` files were later included only as native,
user-controlled video tiles with poster frames, no autoplay, and `preload="none"`.

---

## 4. Desktop Adjustments

- Cover-image column narrowed from 8/12 to 6/12 columns, reusing the sitewide 6/6 grid split
  instead of an invented 8/4 one.
- Cover height is now a direct, art-directed `clamp(380px, 44vw, 640px)` rather than a value
  derived from a mismatched aspect ratio — it stays a moderate, editorial size at any desktop width
  instead of ballooning past 900px tall the way an aspect-ratio-driven box would have at 6/12
  width with a 3:4 ratio.
- Supporting-image rows now size to their actual photo count instead of always reserving a fixed
  4-column track, so a 2-photo group no longer leaves a visibly empty gap next to a 3- or 4-photo
  group.
- Net effect: the page no longer becomes "a giant narrow column of portrait images" (the box shapes
  stay landscape-moderate; the crop, not the box, does the work of handling vertical source photos)
  and the wider copy column gives text room to breathe next to a large photo.

## 5. Mobile Adjustments

- The dominant, page-wide fix (removing `contain`) was itself the biggest mobile fix — the
  letterboxing bug was present at every viewport width, not just desktop.
- The cover's `clamp(380px, 44vw, 640px)` height rule carries its higher specificity into the
  768px breakpoint, so at phone widths it settles at its 380px floor — a reasonable, capped height
  rather than a viewport-height-driven blowout.
- The existing mobile-only rule that forces supporting photos to a shorter 4:3 ratio at 768px
  (already in the codebase, untouched by this pass) now works correctly for the first time, since
  it's paired with `cover` instead of `contain` — supporting photos are short, snappy, and fully
  cropped rather than letterboxed.
- Captions remain always-visible on touch (existing rule, unaffected), status badges remain legible
  at small sizes (existing `.ba__label` sizing, unaffected), and no carousels or horizontal scroll
  were introduced anywhere.

## 6. Copy Adjustments

None needed. I read through `app/work/page.tsx` and `data/work-gallery.ts` line by line and ran a
targeted grep for common AI-contractor phrasing ("transform your space," "bring your vision to
life," "unparalleled craftsmanship," "where quality meets...," "elevate your home," etc.) — zero
matches. The existing copy is already short, factual, and scoped to what each photo actually shows
(e.g., it correctly avoids calling the kitchen work a "remodel" and avoids "tiny house" for the
exterior structure, both flagged as risks in the original plan). No wording changes were made.

---

## 7. Still Requiring Manual Review

- **Two visible street-address plaques** ("1112") appear in the deck/railing cover photo. I biased
  the crop upward to favor the railing over the lower half of the frame, but the source file still
  contains the address twice. Nova should confirm they're comfortable with the property's street
  number being publicly visible on the marketing site, or provide a replacement/cropped source
  photo if not.
- **Parked cars are visible** (partially, at a distance) in the hero image and in the
  "before" porch-wall photo. Plates aren't legible at the resolution served, but this is worth a
  quick human look before the page goes live, per the original plan's own privacy note.
- **Bathroom section is thin** (2 photos). Not a bug — an honest reflection of what's in the
  folder — but if Nova has or takes more bathroom photos, that's the section to prioritize
  expanding.
- **No live browser/device pass was possible in this environment** — there's no
  Playwright/Puppeteer/Chrome executable available here (same constraint noted in
  `WORK_PAGE_IMPLEMENTATION.md`). This QA pass verified the fix through the actual source-photo
  pixel dimensions, the CSS math those dimensions produce, and direct inspection of every corrected
  image file, plus a clean lint/typecheck/build — but a final look at the rendered page on a real
  phone (ideally via the printed QR flow it's meant to serve) is still worth doing before launch.
