# /work Page Implementation Notes

## Files Created

- `app/work/page.tsx`
  - New `/work` route.
  - Adds metadata, breadcrumbs, CollectionPage JSON-LD, the real-work hero, intro band, real-work sections, craftsmanship visual break, CTA, and contact form.
- `data/work-gallery.ts`
  - Typed real-work content and image assignments.
  - Uses only images from `public/gallery_realwork`.
- `components/sections/RealWorkGallery.tsx`
  - Client gallery section for the six real-work groups, with a small custom photo lightbox.
  - Uses existing `ResponsiveImage`, `CtaLink`, `media-reveal`, `.ba__label`, and `.port-img__cap` patterns.
  - Includes two real project video tiles with poster images, native controls, `playsInline`, and `preload="none"`.
- `WORK_PAGE_IMPLEMENTATION.md`
  - This implementation record.

## Files Changed

- `app/globals.css`
  - Added scoped `.work-*` / `.real-work-*` styles.
  - Added `.cta__body` support.
  - Added a small `em` color rule inside `.svc-visual-break__copy h2`.
  - Added responsive behavior at the site's existing `1100px`, `768px`, and touch breakpoints.
- `components/sections/PageHero.tsx`
  - Added optional `secondaryLabel` / `secondaryHref` props.
  - Defaults preserve all existing page behavior.
- `components/sections/CTASection.tsx`
  - Added optional copy props for page-specific CTA text.
  - Defaults preserve existing homepage behavior.
- `components/sections/ServiceVisualStory.tsx`
  - Added optional `id`, `title`, `body`, and `kicker` props to `ServiceVisualBreak`.
  - Existing service pages remain unchanged.
- `components/layout/Nav.tsx`
  - Updated the primary Work link to `/work`.
- `components/layout/Footer.tsx`
  - Added Work links using the existing footer link patterns.
- `components/sections/Hero.tsx`
  - Updated homepage "See remodeling work" link to `/work`.
- `components/sections/PortfolioScroll.tsx`
  - Updated "View all work" link to `/work`.
- `app/sitemap.ts`
  - Added `/work` to static sitemap routes.
- `lib/seo/urls.ts`
  - Added `work: '/work'` to `ROUTES`.

## Image Handling

- Used only real project assets from `public/gallery_realwork`.
- Normalized the filenames used by the page to clean kebab-case names.
- Converted the two used HEIC files into JPEG web copies:
  - `porch-wall-opening-before-repair-1.jpg`
  - `porch-wall-siding-repair-after-2.jpg`
- Left original HEIC source files in place.
- Included the two MP4 files only as user-controlled video tiles with poster images and `preload="none"`; they do not autoplay.
- Used `next/image` through the existing `ResponsiveImage` component.
- Prioritized only the hero image through `PageHero`.
- All gallery still images remain lazy-loaded below the hero.
- Used fixed aspect-ratio frames to prevent layout shift.
- Used `object-fit: cover` with adjusted frame ratios and object positions to avoid letterboxing.

## Reusable Components And Patterns

- `SiteShell`
- `Nav`
- `Footer`
- `StickyMobileCTA`
- `PageHero`
- `Section`
- `Eyebrow`
- `CtaLink`
- `ResponsiveImage`
- `Breadcrumbs`
- `JsonLd`
- `ServiceVisualBreak`
- `CTASection`
- `Contact`
- Existing CSS patterns: `.container`, `.section`, `.media-reveal`, `.ba__label`, `.port-img__cap`, `.hero__cta-alt`.

## Responsive Decisions

- Mobile is single-column for the intro, each work group, and each supporting-image grid.
- The real-work section collapses at the existing `1100px` breakpoint.
- Supporting images collapse at the existing `768px` service-gallery breakpoint.
- Captions are visible on mobile/touch instead of relying on hover.
- Touch devices suppress gallery image zoom using the existing hover-disable pattern.
- The page uses no filters, no carousels, and no horizontal scrolling gallery.

## Deviations From The Design Spec

- The spec marked nav/footer/homepage link updates and sitemap addition as deferred. I implemented them in this phase because `/work` is now a production route and should be reachable through existing Work links and included in the sitemap.
- The spec did not require video at launch. Two real project videos are included as deferred, user-initiated media with poster images because the current asset folder contains relevant real work footage and the implementation does not autoplay or preload the MP4 payloads.
- The spec did not require a lightbox. A small custom lightbox was added without a third-party gallery dependency so homeowners can inspect real-work photos more closely.

## Validation

- `npm run lint` passed.
- `npx tsc --noEmit` passed.
- `npm run build` passed and included `/work` as a static route.
