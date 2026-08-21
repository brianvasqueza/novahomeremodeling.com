# /work Page Planning Notes

Phase scope: inspection and planning only. No production route, component, style, sitemap, navigation, or asset changes have been made.

## 1. Existing Site And Design-System Findings

- Framework: Next.js App Router on Next `15.1.0`, React `19`, TypeScript.
- Styling: global CSS in `app/globals.css`; no Tailwind config found. The site uses CSS custom properties for color, type, spacing, radius, easing, and section rhythm.
- Core shell: pages use `SiteShell`, which includes `Nav`, `Footer`, `StickyMobileCTA`, and `AnimationsProvider`.
- Typography:
  - Local Satoshi font and Google Instrument Serif are loaded in `app/layout.tsx`.
  - Main headings use light Satoshi with serif italic `<em>` accents in gold.
  - Body text is constrained with warm neutral ink/paper colors.
- Color/design tokens:
  - Primary backgrounds: `--paper`, `--paper-2`, `--paper-3`.
  - Text: `--ink-*`, `--stone-*`.
  - Accents: gold for editorial accents, bronze for interactive states.
  - Buttons are square-edged, uppercase, tracked, and should reuse `Button` / `CtaLink`.
- Layout:
  - `.container` provides max width and responsive side padding.
  - `.section` provides vertical rhythm through `--section-y`.
  - Split layouts generally use a 12-column grid and collapse at `1100px`.
- Existing reusable pieces useful for `/work`:
  - `SiteShell`
  - `PageHero`, though it is tall at `80svh`; consider whether a shorter work intro is better for QR/mobile.
  - `Section`
  - `Eyebrow`
  - `Button` / `CtaLink`
  - `ResponsiveImage`
  - `Breadcrumbs`
  - `JsonLd`
  - Existing project/media CSS patterns: `.projects__*`, `.project__*`, `.port-scroll__*`, `.media-reveal`.
- Image handling:
  - `ResponsiveImage` wraps `next/image` with `fill`, `sizes`, lazy loading by default, and quality `82`.
  - `next.config.js` outputs AVIF/WebP and defines device/image sizes.
  - Remote image patterns include Unsplash/Pexels, but `/work` should use only local real Nova photos.
- Motion:
  - Framer Motion is installed.
  - Global reveal behavior comes from `AnimationsProvider` and `lib/animations.ts`.
  - Existing image reveal class is `.media-reveal`; new work images should reuse it.
  - Reduced motion is handled globally; any new JS animation should respect it.
- Design constraints from repo docs:
  - No invented colors.
  - Use existing type scale and section patterns.
  - Use real components for buttons/eyebrows.
  - Avoid detached card-heavy or separate gallery styling.

## 2. Existing Routing And Navigation Findings

- Current routes live under `app/`.
- No `/work` route exists yet.
- Homepage route is `app/(marketing)/page.tsx`.
- `Nav` currently defines `Work` as `/#work`, pointing to the homepage Project Inspiration section.
- Homepage "See remodeling work" in `Hero` points to `#work`.
- `PortfolioScroll` has "View all work" pointing to `#work`.
- Homepage `ProjectGrid` section has `id="work"` and is clearly labeled `Project Inspiration`.
- `ProjectGrid` note says the images are representative examples and real Nova photography is being added as projects are completed. This positioning is good and should remain distinct from `/work`.
- Footer does not currently include a dedicated Work link.
- Route helper files:
  - `lib/seo/urls.ts` has `ROUTES` for home/services/cities/blog/contact, but no work route.
  - `data/routes.ts` mirrors route helpers for services/cities/blog.
- SEO routes:
  - `app/sitemap.ts` includes static routes, landing routes, service routes, city routes, and blog routes. `/work` will need to be added later.
  - `app/robots.ts` allows `/` and disallows `/api/`; no special work-page issue.

## 3. `gallery_realwork` Image Inventory

Folder inspected: `public/gallery_realwork`

There are 40 still images and 2 MP4 videos. File names currently contain spaces, typos, uppercase extensions, HEIC files, and colon characters. Later implementation should normalize output filenames, but this phase does not rename anything.

| Current file | Dimensions | Likely group | Stage | Public strength | Cover candidate | Suggested SEO filename | Suggested alt text |
|---|---:|---|---|---|---|---|---|
| `backhouse install.JPG` | 1884x4080 | Window/door installation and siding repair | In progress | Use | No | `rear-house-window-door-install-progress.jpg` | Rear exterior of a two-story house with window and door installation underway and trim exposed. |
| `backhouse window and door installed.JPG` | 1884x4080 | Window/door installation and siding repair | Completed/near complete | Use | Section cover | `rear-house-window-door-installed-siding-repair.jpg` | Rear exterior of a house after window and door installation with siding repair around the openings. |
| `backhouse window installtion and siding fix prgress.JPG` | 1884x4080 | Window/door installation and siding repair | In progress | Use | No | `rear-house-window-siding-repair-progress.jpg` | Rear exterior wall with a ladder, open window area, and siding repair in progress. |
| `bahtroom full remodel.MP4` | 478x850, 71.96s | Bathroom improvements | Completed video | Use selectively | Possible video poster | `bathroom-vanity-toilet-remodel-walkthrough.mp4` | Vertical video showing a remodeled bathroom with vanity, mirror, lighting, toilet, and gray tile. |
| `beaminstallation.JPG` | 1884x4080 | Custom carpentry / framing | In progress | Use selectively | No | `interior-beam-installation-progress.jpg` | Interior framing with a beam installed above temporary wall framing during construction. |
| `finished stair.JPG` | 1884x4080 | Custom carpentry / stair framing | Completed rough carpentry | Use | Section cover | `custom-wood-stair-framing-complete.jpg` | Newly framed wood stairs inside a construction space before finish materials are installed. |
| `framing in house.MP4` | 478x850, 29.54s | Custom carpentry / framing | In progress video | Use selectively | No | `interior-framing-work-progress.mp4` | Vertical video of interior wall and stair framing work in progress. |
| `fronthouse window and siding fix progress.JPG` | 4080x1884 | Window installation and siding repair | In progress | Use | No | `front-house-window-siding-repair-progress.jpg` | Front exterior wall with new windows and siding repair work in progress. |
| `fronthouse window install and siding fix progress .JPG` | 4080x1884 | Window installation and siding repair | In progress | Use | No | `front-house-window-install-siding-progress.jpg` | Front of a two-story house showing upper window installation and siding repairs underway. |
| `fronthouse window installation and siding fix.JPG` | 4080x1884 | Window installation and siding repair | In progress/near complete | Use | No | `front-house-window-installation-siding-repair.jpg` | Front exterior of a house with new windows and visible siding repair areas. |
| `fronthouse window installation and siding fixed (after).JPG` | 4080x1884 | Window installation and siding repair | Completed/after | Strong use | Primary cover | `front-house-window-installation-siding-repair-after.jpg` | Front exterior of a two-story house after window installation and siding repair work. |
| `kitchen remodel and cabinet installation progress A.JPG` | 942x2040 | Kitchen cabinet and sink work | In progress | Use | No | `kitchen-cabinet-installation-progress-a.jpg` | Kitchen remodel in progress with cabinet boxes, tools, and unfinished wall surfaces. |
| `kitchen remodel and cabinet installation progress B.JPG` | 2040x942 | Kitchen cabinet and sink work | In progress | Use | No | `kitchen-cabinet-installation-progress-b.jpg` | Kitchen cabinet installation in progress with base cabinets and construction materials visible. |
| `kitchen remodel and cabinet installtion B finshed.JPG` | 947x2048 | Kitchen cabinet and sink work | Completed/near complete | Use | Section cover | `kitchen-cabinet-sink-installation-after.jpg` | Compact kitchen with white cabinets, sink, faucet, and finished wall surfaces. |
| `kitchen remodel and cabinet painting progress A.JPG` | 947x2048 | Kitchen cabinet and sink work | In progress | Use | No | `kitchen-cabinet-painting-progress.jpg` | Kitchen cabinet painting and installation work in progress with unfinished lower cabinet area. |
| `kitchenremode and cabinet installation finished.JPG` | 947x2048 | Kitchen cabinet and sink work | Completed/near complete | Use | Section cover | `kitchen-cabinet-appliance-installation-after.jpg` | Kitchen with white cabinets, stainless appliances, tile floor, and finish work near completion. |
| `kitchenremode and cabinet installation progress B 2.JPG` | 942x2040 | Kitchen cabinet and sink work | In progress | Use | No | `kitchen-base-cabinet-installation-progress.jpg` | Kitchen base cabinet installation underway with tools and open wall surfaces visible. |
| `kitchenremodel and sink installation progress B 3.JPG` | 947x2048 | Kitchen cabinet and sink work | In progress | Use | No | `kitchen-sink-cabinet-installation-progress.jpg` | Kitchen sink and cabinet installation in progress before cabinet doors and finish cleanup. |
| `openwall_after 1.HEIC` | 4032x3024 | Exterior wall/siding repair | Completed/after | Use | No | `porch-wall-siding-repair-after-1.jpg` | Porch wall after siding and trim repair, with railing and exterior light visible. |
| `openwall_after 2.HEIC` | 4032x3024 | Exterior wall/siding repair | Completed/after | Use | Section cover for before/after pair | `porch-wall-siding-repair-after-2.jpg` | Porch wall and siding after exterior wall repair beside a railing. |
| `openwall_before 1.HEIC` | 4032x3024 | Exterior wall/siding repair | Before/in progress | Use in pair | No | `porch-wall-opening-before-repair-1.jpg` | Porch wall opening covered with plywood before exterior siding repair. |
| `openwall_before 2.HEIC` | 4032x3024 | Exterior wall/siding repair | Before/in progress | Use in pair | No | `porch-wall-opening-before-repair-2.jpg` | Close view of a porch wall opening covered with plywood before repair. |
| `rail and deck framing.JPG` | 1884x4080 | Deck and railing work | In progress | Use | No | `deck-railing-framing-progress.jpg` | Wood deck surface with railing framing underway and tools on the boards. |
| `rail framing.JPG` | 2560x1184 | Deck and railing work | In progress | Use | Section cover | `second-story-deck-rail-framing-progress.jpg` | Second-story deck railing framing in progress above a covered outdoor area. |
| `rail installation.JPG` | 1884x4080 | Deck and railing work | Completed/near complete | Use | Section cover | `deck-railing-installation-after.jpg` | Newly installed wood railing on an elevated deck beside an exterior stair opening. |
| `side:back house window install and siding fix before.JPG` | 2560x1184 | Window installation and siding repair | Before | Use in sequence | No | `side-rear-house-window-siding-before.jpg` | Side and rear exterior walls with boarded window openings before window and siding repair work. |
| `sidehouse window install and siding fix before.JPG` | 4080x1884 | Window installation and siding repair | Before/in progress | Use in sequence | No | `side-house-window-siding-repair-before.jpg` | Side exterior of a house with upper window openings and siding repair areas before completion. |
| `sidehouse window installation and siding fix 2.JPG` | 1884x4080 | Window installation and siding repair | In progress | Use | No | `side-house-window-installation-siding-progress.jpg` | Side exterior of a house with ladder, new window openings, and siding repair in progress. |
| `sidehouse window installation:replacement and siding fix.JPG` | 1184x2560 | Window installation and siding repair | In progress/near complete | Use | No | `side-house-window-replacement-siding-repair.jpg` | Side exterior of a house showing window replacement and siding repair work from the ground. |
| `tiny house caulking and painting.JPG` | 1884x4080 | Custom exterior structure | Completed/near complete | Strong use | Section cover | `small-exterior-structure-caulking-painting-after.jpg` | Small exterior structure with fresh siding, white doors, and trim after caulking and painting. |
| `tiny house painting 2.JPG` | 1884x4080 | Custom exterior structure | Detail/finish | Use selectively | No | `small-exterior-structure-trim-paint-detail.jpg` | Close view of painted trim and roofline detail on a small exterior structure. |
| `tiny house painting.JPG` | 1184x2560 | Custom exterior structure | Completed/near complete | Use | Section cover | `small-exterior-structure-painting-after.jpg` | Small painted exterior structure with double doors, trim, and light siding. |
| `tiny stair progress.JPG` | 1884x3759 | Custom carpentry / stair framing | In progress | Use | No | `custom-wood-stair-framing-progress.jpg` | Wood stair framing in progress with cut stringers, tools, and unfinished framing. |
| `toilet installation.JPG` | 1884x4080 | Bathroom improvements | Completed/near complete | Use | No | `bathroom-toilet-vanity-installation-after.jpg` | Bathroom with installed toilet, gray vanity, tile floor, and marble-look shower wall. |
| `vanity and toilet install.JPG` | 1884x4080 | Bathroom improvements | Completed/near complete | Use | Section cover | `bathroom-vanity-toilet-installation-after.jpg` | Bathroom vanity, faucet, mirror, light fixture, and toilet installed in a compact bathroom. |
| `walkway + door fence.JPG` | 1884x4080 | Walkway and gate improvements | Completed/near complete | Strong use | Section cover | `walkway-gate-installation-after.jpg` | Concrete stepping-stone walkway with gravel leading to a newly built wood gate. |
| `walkway in progress.JPG` | 1884x4080 | Walkway and gate improvements | In progress | Use | No | `walkway-installation-progress.jpg` | Walkway installation in progress with form boards, gravel, and concrete pads beside a fence. |
| `walkway.JPG` | 1884x4080 | Walkway and gate improvements | Completed/near complete | Strong use | Section cover | `concrete-walkway-gravel-path-after.jpg` | Finished concrete stepping-stone walkway with dark gravel between a fence and brick wall. |
| `window and door installation.JPG` | 1884x4080 | Window/door installation and siding repair | In progress | Use | No | `rear-house-window-door-installation-progress.jpg` | Rear exterior wall with window and door installation in progress beside a ladder. |
| `window demo and installtion progress.JPG` | 4080x1884 | Window installation and siding repair | Demo/in progress | Use | No | `front-house-window-demo-installation-progress.jpg` | Front exterior wall during window demo and installation with open framing visible. |
| `window install on house.JPG` | 1884x4080 | Window installation and siding repair | In progress | Use | No | `upper-window-installation-siding-repair-progress.jpg` | Upper-story window installation in progress with ladder and exposed trim area. |
| `window installation.JPG` | 2560x1184 | Window installation and siding repair | In progress | Use | Section cover | `front-house-window-installation-progress.jpg` | Front exterior of a house with multiple upper window openings during installation work. |

## 4. Proposed Grouping Of Images

Use category labels rather than invented project names. Do not assign dates, neighborhoods, clients, square footage, or project numbers unless verified later.

1. Window Installation, Door Installation, And Exterior Siding Repairs
   - Includes front, side, rear, window/door, siding, and open-wall repair sequences.
   - Strongest proof set because it shows before, progress, and after.
   - Recommended cover: `fronthouse window installation and siding fixed (after).JPG`.
   - Supporting covers: `backhouse window and door installed.JPG`, `openwall_after 2.HEIC`, `window installation.JPG`.

2. Kitchen Cabinet, Sink, And Appliance Installation
   - Shows cabinet installation, painting, sink/faucet work, and near-finished compact kitchen areas.
   - Recommended cover: `kitchenremode and cabinet installation finished.JPG` or `kitchen remodel and cabinet installtion B finshed.JPG`.
   - Avoid calling this a full kitchen remodel unless Nova verifies that scope.

3. Bathroom Improvements
   - Shows vanity, toilet, lighting, tile, and a bathroom walkthrough video.
   - Recommended cover: `vanity and toilet install.JPG`.
   - Use video only if optimized and/or clipped; the source MP4 is heavy.

4. Walkway And Gate Improvements
   - Shows a small exterior access improvement with walkway progress, finished paver/concrete path, gravel, and gate.
   - Recommended cover: `walkway.JPG` or `walkway + door fence.JPG`.

5. Deck And Railing Work
   - Shows framing and railing installation on an elevated deck.
   - Recommended cover: `rail installation.JPG` or `rail framing.JPG`.

6. Custom Exterior Structure
   - Shows a small exterior structure with siding, caulking, painting, trim, doors, and roofline details.
   - Recommended cover: `tiny house caulking and painting.JPG`.
   - Avoid naming it a tiny house unless the business confirms that is the correct customer-facing term. Safer copy: "small exterior structure."

7. Custom Carpentry, Beam, And Stair Framing
   - Shows beam installation, interior framing video, stair framing progress, and finished rough stair framing.
   - Recommended cover: `finished stair.JPG`.
   - Useful for showing capability and process, but frame as in-progress construction/carpentry rather than a polished finished-space portfolio.

## 5. Recommended `/work` Page Structure

Recommended positioning: "Actual Nova work in and around Houston" with clear language that the page includes completed and in-progress photos from real work.

Proposed structure:

1. Hero / first viewport
   - Use a real image from `gallery_realwork`, not stock.
   - H1 idea: "Real Nova Home Remodeling Work"
   - Supporting copy: "Completed and in-progress work from Nova Home Remodeling projects in the Houston area."
   - Include tap-friendly CTAs: "Request an estimate" and "Call Nova".
   - Include a small trust line such as "Real project photos. No stock imagery on this page."
   - For QR visitors, make the purpose clear without requiring scrolling.

2. Short intro band
   - Explain that the page is organized by type of work.
   - Avoid filters while the portfolio is small.
   - Consider compact category anchor links/chips that scroll to sections.

3. Category sections
   - Use one section per grouping above.
   - Each section should include a concise paragraph about the visible work type, not invented project claims.
   - Use a small grid or editorial mosaic reusing `.project__media`, `.port-img`, or similar image reveal behavior.
   - Badge images as "Completed", "In progress", or "Before / progress" where helpful.

4. Process/trust note
   - Small section explaining why in-progress photos are included: homeowners can see the work behind finishes.
   - Keep factual and restrained.

5. Internal service links
   - After each group or near the bottom, link to relevant existing service pages.
   - Use existing button/link styles.

6. CTA / contact
   - Reuse `Contact` or a compact CTA plus `Contact`.
   - Preserve sticky mobile CTA behavior.

## 6. Internal Linking Opportunities

Use exact existing URLs:

- Window installation: `/services/window-installation`
- Siding repair: `/services/siding-repair`
- Door installation: `/services/door-installation`
- Handyman/home repair: `/handyman-services-houston`
- Bathroom remodeling: `/services/bathroom-remodeling`
- Kitchen remodeling: `/services/kitchen-remodeling`
- Cabinet installation: `/services/cabinet-installation`
- Exterior painting: `/services/exterior-painting`
- Fence installation: `/services/fence-installation`
- Outdoor remodeling: `/services/outdoor-remodeling`
- Deck construction: `/services/deck-construction`
- Custom carpentry: `/services/custom-carpentry`
- Framing: `/services/framing`
- Beam installation: `/services/beam-installation`
- Service area Houston: `/cities/houston`
- All services: `/services`
- Contact: `/contact` or `#contact` on the same page if `Contact` is included.

Later navigation changes to consider:

- Change primary nav `Work` from `/#work` to `/work`.
- Change homepage hero "See remodeling work" from `#work` to `/work`.
- Change `PortfolioScroll` "View all work" from `#work` to `/work`.
- Keep homepage `ProjectGrid` anchored as `/#work` because it is still Project Inspiration.
- Consider adding a footer Work link under Company.

## 7. SEO Plan

Primary goal: demonstrate actual work first, then support local search visibility naturally.

Suggested metadata:

- Title: `Our Work in Houston | Nova Home Remodeling & Design`
- Description: `See real completed and in-progress work from Nova Home Remodeling & Design, including Houston home repairs, bathroom improvements, window installation, exterior repairs, deck railing work, and carpentry.`
- Canonical path: `/work`
- OG image: optimized version of the strongest real exterior image, likely the front house window/siding after image.

On-page language:

- Use "real Nova work", "completed and in-progress work", "Houston home remodeling and repair work", and specific visible categories naturally.
- Avoid repeating exact-match keywords in every heading.
- Avoid fabricated claims like project dates, client names, neighborhoods, square footage, permits, or before/after outcomes not visible in the photos.
- Do not call every image a "project"; some are task-level repairs or progress photos.
- Good H2 examples:
  - "Window and exterior repair work"
  - "Kitchen cabinet and sink work"
  - "Bathroom fixture and finish updates"
  - "Walkways, gates, decks, and exterior details"
  - "Carpentry and framing in progress"

Structured data:

- `BreadcrumbList`: appropriate. Use Home > Work.
- `CollectionPage`: appropriate because `/work` is a collection of real work categories/images.
- `ImageObject`: optional for the primary image and maybe selected category cover images. Do not create verbose schema for every photo unless captions and stable URLs are clean.
- `LocalBusiness`: already emitted globally in `app/layout.tsx`; avoid duplicating it on `/work`.
- Avoid `Project` or `CreativeWork` schema with fake project names. There is not enough verified project metadata.
- Avoid `Review`, `AggregateRating`, or offer schema unless verified.

Sitemap:

- Add `/work` to `app/sitemap.ts` later, likely priority around `0.8` and monthly change frequency while the portfolio grows.

## 8. Mobile And Responsive Strategy

- Assume QR traffic lands cold on a phone.
- First viewport must immediately answer:
  - This is Nova.
  - These are real work photos.
  - Nova serves Houston-area homeowners.
  - The visitor can call or request an estimate.
- Avoid a huge desktop-style hero that hides the gallery on mobile. If using `PageHero`, verify that image, H1, copy, and CTA fit well on small screens.
- Use single-column category sections on mobile.
- Avoid horizontal scrolling and complex filter controls.
- Use tap-friendly category anchors if needed.
- Keep captions short and visible on mobile; hover-only captions are not enough.
- Use `sizes` carefully:
  - Full-width hero: `100vw`.
  - Gallery cards: mobile `100vw`, desktop roughly `33vw` or `50vw` depending layout.
- Keep CTAs full-width or easy to tap on mobile, following existing button behavior.

## 9. Image Optimization Strategy

Recommended later asset workflow:

- Keep original files archived, but serve normalized web versions.
- Convert HEIC files to JPEG or WebP-compatible source assets. Browser/Next support for HEIC should not be assumed.
- Normalize filenames to lowercase, hyphenated, descriptive names.
- Remove typos, spaces, trailing spaces, parentheses, and colon characters from public URLs.
- Normalize EXIF orientation so images render consistently in browsers and social previews.
- Export likely sizes:
  - Hero/social image: around 1800-2200px wide, compressed.
  - Gallery large images: around 1400-1800px on the long edge.
  - Thumbnails/card images: around 900-1200px on the long edge.
- Let `next/image` generate AVIF/WebP variants from optimized source files.
- Use `priority` only for the hero image.
- Use lazy loading for all gallery images.
- Avoid loading the two MP4s by default. Options:
  - Use poster images with a tap-to-play video.
  - Clip and compress videos.
  - Defer video loading until interaction.
- Consider cropping or choosing images carefully where vehicles, utility meters, or identifying home details are prominent.

## 10. Files And Components Likely To Be Changed Later

Likely additions:

- `app/work/page.tsx`
- `data/work-gallery.ts` or similar typed content file
- `components/sections/RealWorkGallery.tsx` or similar
- Optional `components/cards/WorkImageCard.tsx`
- Optimized image outputs under `public/gallery_realwork` or a sibling such as `public/gallery_realwork/optimized`

Likely edits:

- `app/globals.css` for narrowly scoped `.work-*` classes, reusing tokens and existing gallery/media patterns.
- `components/layout/Nav.tsx` to point Work to `/work`.
- `components/layout/Footer.tsx` to add Work in company/footer links.
- `components/sections/Hero.tsx` if the homepage "See remodeling work" should point to `/work`.
- `components/sections/PortfolioScroll.tsx` if "View all work" should point to `/work`.
- `app/sitemap.ts` to include `/work`.
- `lib/seo/urls.ts` and/or `data/routes.ts` if adding a `work` route constant.
- Possibly `lib/seo/json-ld.ts` only if a reusable work collection helper is preferred; existing `breadcrumbJsonLd` and `collectionPageJsonLd` may already be enough.

## 11. Concerns And Ambiguities

- The folder proves real work photos exist, but it does not verify dates, neighborhoods, exact scopes, client names, or whether some images belong to the same project. Do not invent those details.
- Several images are work-in-progress or partial task photos. That can build trust if labeled honestly, but it should not be presented as polished finished-project photography.
- Some filenames call work "finished" while visible details still show protection, unfinished surroundings, or active work conditions. Use "near complete" or neutral visible descriptions unless final status is verified.
- The small exterior structure should not be called a "tiny house" in customer-facing copy unless Nova confirms that term.
- Kitchen images support cabinet/sink/appliance installation and progress. They may not be enough to claim a full kitchen remodel case study without confirmation.
- Videos are large relative to mobile QR traffic; use carefully.
- HEIC files and EXIF orientation should be normalized before public use.
- Some photos include cars, utility meters, tools, ladders, or close home exterior details. Review privacy and presentation before publishing.
- `/work` should be clearly distinct from the homepage Project Inspiration section. The homepage can continue to show representative inspiration, while `/work` should say real Nova work and use no stock imagery.
