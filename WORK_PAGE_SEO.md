# Work Page SEO Notes

## 1. Final Title

`Real Remodeling & Home Repair Work in Houston | Nova Home Remodeling & Design`

The page source uses `WORK_PAGE_TITLE` with the existing `createMetadata` helper, which appends the Nova brand suffix consistently with the rest of the site.

## 2. Final Meta Description

`See real Nova remodeling and home repair work in Houston, including bathroom updates, window installation, exterior repairs, deck railing, walkways, and carpentry.`

The description names the page as real Nova work, includes Houston naturally, and mentions representative services without stuffing every possible keyword.

## 3. Canonical

`https://novahomeremodeling.com/work`

The canonical stays clean for the permanent printed QR-code destination. No UTM parameters or alternate tracking URLs were added.

## 4. Structured Data

Added/verified on `/work`:

- `BreadcrumbList` for Home > Work, using the existing breadcrumb helper.
- `CollectionPage` for the real-work gallery page.
- One `primaryImageOfPage` `ImageObject` for the real Nova project hero image.
- `ItemList` entries for the visible work sections, using their on-page anchors.

Intentionally not added:

- No duplicate `LocalBusiness` or `Organization` schema on the page because those already exist globally in `app/layout.tsx`.
- No reviews, ratings, Product schema, project dates, addresses, costs, neighborhoods, or other unsupported project claims.
- No bulk ImageObject spam for every image in the gallery.

## 5. Internal Links Added

Links to `/work`:

- Main Work navigation points to `/work` for desktop and mobile.
- Footer Work links point to `/work`.
- Homepage hero CTA points to `/work`.
- Homepage Project Inspiration section now includes: "Looking for projects we've actually completed? View Our Work."
- Homepage portfolio CTA points to `/work`.
- Services overview intro now includes a natural link to `/work`.

Links from `/work`:

- Intro copy links to `/handyman-services-houston`.
- Work sections link to verified service routes:
  - `/services/window-installation`
  - `/services/kitchen-remodeling`
  - `/services/bathroom-remodeling`
  - `/services/fence-installation`
  - `/services/deck-construction`
  - `/services/exterior-painting`

## 6. Sitemap Changes

`/work` is included in the generated sitemap at:

`https://novahomeremodeling.com/sitemap.xml`

Generated build output was inspected and confirmed one sitemap entry for:

`https://novahomeremodeling.com/work`

It uses the existing static route settings: monthly change frequency and priority `0.8`.

## 7. Navigation Changes

The primary Work nav destination is `/work` through the shared `NAV_LINKS` array, so desktop and mobile navigation stay consistent.

The existing homepage Project Inspiration section was not removed or redesigned. It now clarifies the distinction between representative inspiration imagery and actual Nova project photos by linking to `/work`.

## 8. Image SEO Changes

The active `/work` images use real project photos from `public/gallery_realwork`. High-value active filenames were normalized to descriptive kebab-case names without changing image quality:

- `houston-window-installation-exterior-repair.jpg`
- `kitchen-cabinet-appliance-installation.jpg`
- `bathroom-vanity-fixture-installation.jpg`
- `exterior-walkway-gate-improvement.jpg`
- `deck-railing-construction.jpg`
- `custom-exterior-structure.jpg`
- `custom-stair-framing.jpg`

The page uses the Next.js image component through the existing `ResponsiveImage` wrapper, with responsive sizes, explicit layout constraints, lazy loading below the fold, and only the hero image prioritized.

The `/work` Open Graph image uses the real hero project photo with its source dimensions, `4080x1884`, instead of the sitewide default social-image dimensions.

## 9. Google Search Console After Deployment

After deployment:

- Inspect `https://novahomeremodeling.com/work` with URL Inspection.
- Request indexing for the clean `/work` URL.
- Submit or refresh `https://novahomeremodeling.com/sitemap.xml`.
- Confirm Google-selected canonical matches `https://novahomeremodeling.com/work`.
- Use the live test to verify crawlability and rendered content.
- Check detected structured data for BreadcrumbList and CollectionPage.
- Monitor early queries around real Nova work, Houston remodeling projects, home repair work, bathroom updates, window installation, exterior repairs, deck railing, walkways, and carpentry.
- Keep printed QR codes pointed at the clean canonical URL, not a tracked URL.

## Validation

- `npm run lint` passed.
- `npx tsc --noEmit` passed.
- `npm run build` passed.
- Generated metadata, robots output, sitemap output, schema presence, and `/work` navigation links were inspected after build.
