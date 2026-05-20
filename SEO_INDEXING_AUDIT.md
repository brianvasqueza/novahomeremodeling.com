# SEO Indexing Audit — Nova Home Remodeling & Design

Date: May 20, 2026  
Domain: https://novahomeremodeling.com  
Business: Nova Home Remodeling & Design  
Phone: (281) 690-3431  
Email: brivaqz@gmail.com  
Service area: Houston, TX and surrounding areas

## Audit Scope

This audit reviewed the Next.js project for Google indexing readiness and local SEO. It focused on metadata, canonical URLs, sitemap and robots configuration, schema markup, internal links, heading structure, image alt text, placeholder content, contact-form behavior, business info consistency, and basic performance/indexability risks.

Technical SEO foundation fixes were applied after the initial audit. This document now records both the original findings and the fixes completed.

## Technical SEO Fixes Completed

Completed on May 20, 2026:

- Shortened homepage title and meta description while preserving Houston remodeling intent.
- Added page-specific `imageAlt` support to `createMetadata()` for Open Graph and Twitter/X card images.
- Passed unique image alt text into metadata for homepage, service pages, city pages, blog pages, and collection pages.
- Improved `/blog` metadata so it has stronger Houston remodeling context.
- Improved `/cities` metadata and tightened long city descriptions for Katy, Sugar Land, and The Woodlands.
- Tightened long service metadata for bathroom remodeling and interior painting.
- Shortened long service title tags for outdoor remodeling and trim/finish carpentry.
- Strengthened the short framing title tag.
- Updated sitemap `lastModified` source date in `data/site.ts` to `2026-05-20`.
- Verified canonical URLs still resolve to `https://novahomeremodeling.com`.
- Verified sitemap and robots generation still work through `npm run build`.
- Verified generated public pages have unique title and meta description values.
- Verified generated public pages have one H1 each and page-specific OG image alt metadata.

Files changed for these fixes:

- `app/(marketing)/page.tsx`
- `app/blog/page.tsx`
- `app/blog/[slug]/page.tsx`
- `app/cities/page.tsx`
- `app/cities/[slug]/page.tsx`
- `app/services/page.tsx`
- `app/services/[slug]/page.tsx`
- `data/cities.ts`
- `data/service-landing.ts`
- `data/site.ts`
- `lib/seo/metadata.ts`

## Page Structure Fixes Completed

Completed on May 20, 2026:

- Confirmed the public Next.js pages render with one crawlable `<h1>` each.
- Improved the `/services` H1 from a generic service index label to `Houston Remodeling Services`.
- Improved the `/cities` H1 from a broad geographic label to `Houston Remodeling Service Areas`.
- Improved the `/blog` H1 from a vague journal label to `Houston Remodeling Journal`.
- Strengthened homepage section headings so they clearly describe remodeling topics, including the company/about section, project proof, before/after proof, process, materials, service areas, CTA, and contact section.
- Tightened the kitchen remodeling page H2s so the major sections clearly signal Houston kitchen remodeling, layout planning, construction sequence, materials, finished results, and conversion intent.
- Kept important section text crawlable in standard HTML headings, paragraphs, lists, and links.
- Demoted repeated generic footer labels from H2s to styled text so page-specific heading structure stays cleaner.
- Preserved the existing design system, component structure, animations, responsive behavior, and visual hierarchy.
- Replaced plain internal route-card anchors on `/services`, `/cities`, and `/blog` with Next.js `Link` components for cleaner internal navigation behavior.
- Rebuilt the site and verified generated public HTML still reports `HEADING_ISSUES 0`.

Files changed for these fixes:

- `app/services/page.tsx`
- `app/cities/page.tsx`
- `app/blog/page.tsx`
- `components/sections/Approach.tsx`
- `components/sections/BeforeAfter.tsx`
- `components/sections/Contact.tsx`
- `components/sections/CTASection.tsx`
- `components/sections/Craft.tsx`
- `components/sections/KitchenRemodelingExperience.tsx`
- `components/sections/ParallaxSection.tsx`
- `components/sections/Process.tsx`
- `components/sections/ProjectGrid.tsx`
- `components/sections/ServiceAreas.tsx`
- `components/layout/Footer.tsx`

## Local SEO Improvements Completed

Completed on May 20, 2026:

- Updated the core site description to clearly state `Home remodeling in Houston, TX and surrounding areas`.
- Added a reusable `serviceAreaDisplay` value for consistent service-area wording across footer, contact, schema, and form trust text.
- Added a reusable `displayWebsite` value and surfaced `novahomeremodeling.com` as a clickable website link in the contact section and footer.
- Strengthened homepage local relevance in services, service areas, CTA, contact, and hero text without changing the visual layout.
- Updated homepage CTA language from generic free-estimate phrasing to clearer Houston estimate wording.
- Updated the footer to show consistent business identity, clickable phone, clickable email, clickable website, and service-area wording.
- Strengthened service page local signals by changing the internal service-area block to `Houston and surrounding areas` and using clearer `near Houston` heading language.
- Improved schema contact/service offer area wording from a narrow Houston-only string to the consistent `Houston, TX and surrounding areas` service-area phrase.
- Replaced vague luxury/premium phrasing in site descriptions, city descriptions, service metadata, image alt text, and service copy where it did not help homeowners understand the work.
- Kept existing trust claims limited to claims already present in the site, including the footer's bonded and insured wording.

Files changed for these fixes:

- `app/(marketing)/page.tsx`
- `app/services/[slug]/page.tsx`
- `components/layout/Footer.tsx`
- `components/sections/Contact.tsx`
- `components/sections/CTASection.tsx`
- `components/sections/Hero.tsx`
- `components/sections/KitchenRemodelingExperience.tsx`
- `components/sections/ParallaxSection.tsx`
- `components/sections/ServiceAreas.tsx`
- `components/sections/Services.tsx`
- `data/cities.ts`
- `data/service-landing.ts`
- `data/service-pages.ts`
- `data/service-visuals.ts`
- `data/services.ts`
- `data/site.ts`
- `lib/seo/json-ld.ts`

## Structured Data Improvements Completed

Completed on May 20, 2026:

- Strengthened the global business JSON-LD so Nova is identified as `Organization`, `LocalBusiness`, and `HomeAndConstructionBusiness`.
- Kept the global business schema tied to the existing `/#business` entity used across service, city, blog, and website schema.
- Added reusable service-area place generation for Houston and surrounding service-area cities.
- Added `legalName`, `alternateName`, `description`, `logo`, clickable website URL, phone, email, address locality, opening hours, contact point, area served, and residential remodeling offer catalog to the business schema.
- Kept the existing `WebSite` schema in the root layout.
- Kept existing `Service` schema on service pages, now backed by the reusable service-area place helper.
- Kept existing `FAQPage` schema on service pages where FAQ content is visibly rendered.
- Kept existing `BreadcrumbList` schema on pages with visible breadcrumbs.
- Kept existing `WebPage`, `CollectionPage`, and `BlogPosting` schema where appropriate.
- Did not add fake reviews, ratings, awards, certifications, social profiles, maps, or geo coordinates.
- Rebuilt the site and parsed all generated `application/ld+json` scripts with `JSONLD_PARSE_ERRORS 0`.
- Verified key rendered schema types: global `Organization + LocalBusiness + HomeAndConstructionBusiness`, `WebSite`, service-page `Service`, service-page `FAQPage`, page `BreadcrumbList`, collection pages, city pages, and blog posts.

Files changed for these fixes:

- `lib/seo/json-ld.ts`
- `SEO_INDEXING_AUDIT.md`

## Image SEO And Performance Fixes Completed

Completed on May 20, 2026:

- Audited image usage across homepage, collection pages, blog pages, city pages, service pages, project cards, galleries, testimonials, and shared visual-story components.
- Confirmed the site is already using Next.js `Image` directly or through `ResponsiveImage` for rendered page imagery.
- Confirmed hero images are prioritized through `ResponsiveImage priority` on `Hero` and `PageHero`.
- Confirmed non-critical `ResponsiveImage` images lazy-load by default.
- Added per-post blog image alt text in `data/blog.ts` and used it for blog metadata and blog post hero images.
- Replaced generic generated service visual alt text such as numbered gallery/detail language with more descriptive service, process, material, and Houston-area context.
- Tightened blog index image alt text to describe the actual planning/carpentry visual.
- Reduced oversized remote image requests from 2400px/q85 to 2000px/q82 where safe, while preserving the existing visual strategy and layout.
- Kept service-page image intent aligned with the service category: kitchen, bathroom, painting, drywall, flooring, deck, patio, pergola, and outdoor visuals remain service-specific.
- Rebuilt the site and verified rendered HTML includes `329` image tags with `BAD_ALT_COUNT 0`.

Files changed for these fixes:

- `app/blog/page.tsx`
- `app/blog/[slug]/page.tsx`
- `app/(marketing)/page.tsx`
- `app/services/page.tsx`
- `app/cities/page.tsx`
- `components/sections/PhotoStrip.tsx`
- `data/blog.ts`
- `data/cities.ts`
- `data/content.ts`
- `data/projects.ts`
- `data/service-pages.ts`
- `data/service-visuals.ts`
- `SEO_INDEXING_AUDIT.md`

## What Is Correct

### Indexability Basics

- `app/robots.ts` exists and allows crawling sitewide except `/api/`.
- `robots.txt` points to `https://novahomeremodeling.com/sitemap.xml`.
- `app/sitemap.ts` exists and includes static pages, service pages, city pages, and blog posts.
- Production build succeeds with 47 generated routes, including `/robots.txt` and `/sitemap.xml`.
- No page is globally blocked from indexing in generated metadata. Rendered pages use `index, follow`.
- Unknown dynamic routes correctly return not-found behavior and metadata helpers support `noIndex` for missing records.

### Metadata And Canonicals

- Metadata is centralized through `lib/seo/metadata.ts`.
- Every rendered HTML page checked includes a canonical URL.
- No duplicate generated titles or descriptions were detected in the built HTML output.
- Service pages use service-specific metadata from `data/service-landing.ts`.
- City pages use city-specific titles and descriptions from `data/cities.ts`.
- Blog pages use post-specific title, excerpt, image, and article metadata.

### Schema Markup

- Organization schema is present globally via `organizationJsonLd()`.
- Website schema is present globally via `websiteJsonLd()`.
- Homepage has WebPage JSON-LD with Houston remodeling service ItemList.
- Service pages include Service, WebPage, FAQPage, and BreadcrumbList schema.
- City pages include WebPage and BreadcrumbList schema.
- Blog posts include BlogPosting and BreadcrumbList schema.
- Collection pages use CollectionPage schema.

### Heading And Image Accessibility

- Rendered static pages checked from `.next/server/app` have exactly one `<h1>` each.
- Main index pages now use clearer H1s for Houston remodeling services, Houston remodeling service areas, and the Houston remodeling journal.
- Homepage section headings now describe the section purpose more directly while keeping the premium editorial tone.
- Kitchen remodeling section headings now include clearer service and Houston context.
- No rendered `<img>` tags were missing alt text in the built output checked.
- Hero and service imagery generally has descriptive, service-relevant alt text.

### Internal Linking And Crawlability

- Main navigation links to Work, Services, Process, Areas, Blog, and Contact.
- Footer links to Services, Areas, Blog, service pages, phone, email, and Houston city page.
- Homepage links to core services including kitchen remodeling, bathroom remodeling, interior painting, exterior painting, drywall repair, and flooring.
- Service pages include related services and city/service-area internal links.
- City pages include nearby city links and service links.
- Link audit found no broken internal page routes. The only false positive was `/assets/logo-mark.svg`, which is an asset, not a page.

### Business Info Consistency

- Business name, phone, email, and address are centralized in `data/site.ts`.
- Phone is consistently formatted as `(281) 690-3431` for display and `tel:+12816903431` for links.
- Email is consistently `brivaqz@gmail.com`.
- Local signals appear across metadata, schema, footer, contact section, hero, city pages, and service pages.

### Image Performance Basics

- Next Image is used for most rendered images through `ResponsiveImage` or `next/image`.
- Remote image domains are configured in `next.config.js` for Unsplash and Pexels.
- AVIF/WebP formats are enabled in `next.config.js`.
- Local public assets are small: `public` is about 28 KB.

## What Is Missing Or Weak

### 1. Homepage Title And Description Were Too Long

Rendered homepage metadata:

- Title length: 108 characters
- Description length: 201 characters

Status: Fixed.

These were not indexing blockers, but Google could have rewritten them. The homepage metadata has now been shortened while preserving Houston home remodeling relevance.

Files:

- `app/(marketing)/page.tsx`

Completed fix:

- Title now targets Houston home remodeling more cleanly.
- Description is shorter and still mentions kitchens, bathrooms, painting, drywall repair, flooring, and whole-home renovations.

### 2. Some Index And Service Metadata Was Slightly Long Or Short

The following generated metadata exceeded ideal length ranges:

- `/cities`: description about 183 characters.
- `/cities/the-woodlands`: description about 181 characters.
- `/services/bathroom-remodeling`: description about 180 characters.
- `/services/interior-painting`: description about 186 characters.
- `/services/outdoor-remodeling`: title about 76 characters.
- `/services/trim-finish-carpentry`: title about 78 characters.
- `/blog`: title is short at 18 characters; description is short at 68 characters.
- `/services/framing`: title is short at 22 characters.
- Blog post titles are around 76–77 characters after brand suffix.

Status: Mostly fixed for the technical foundation pass.

Fixed:

- `/cities` metadata.
- `/blog` metadata.
- Katy, Sugar Land, and The Woodlands descriptions.
- Bathroom remodeling description.
- Interior painting description.
- Outdoor remodeling title.
- Trim/finish carpentry title.
- Framing title.

Still worth watching:

- Blog post titles remain somewhat long after the brand suffix, but are unique and acceptable.

Files:

- `app/cities/page.tsx`
- `app/blog/page.tsx`
- `data/cities.ts`
- `data/service-landing.ts`
- `data/blog.ts`

Recommendation:

- Tighten long descriptions by 10–25 characters.
- Expand short titles/descriptions with natural local context.
- Keep service title tags readable and not overpacked.

### 3. Blog Post Bodies Are Placeholder Content

Blog post pages render this placeholder copy:

> This journal entry is intentionally data-backed and ready for CMS content...

This is a content-quality risk. The blog URLs are indexable and present in the sitemap, but the actual body content is thin/placeholder.

Files:

- `app/blog/[slug]/page.tsx`
- `data/blog.ts`

Recommendation:

- Either write real article bodies before indexing blog posts, or temporarily noindex blog detail pages until content is real.
- Best option: add real article content because blog posts are useful for topical authority.

### 4. Open Graph Image Alt Was Generic

`createMetadata()` sets all OG image alt text to `SITE.legalName`, even when the page image is a kitchen, service, city, or blog image.

Status: Fixed for public pages.

`createMetadata()` now accepts `imageAlt`, and public page metadata passes page-specific alt text. The built-in 404 page can still show generic fallback metadata, which is acceptable because it is not an indexable public content page.

File:

- `lib/seo/metadata.ts`

Recommendation:

- Add optional `imageAlt` to `createMetadata()` input.
- Pass page-specific image alt text for homepage, service pages, city pages, blog posts, and collection pages.

### 5. Business Schema Could Be More Complete For Local SEO

Organization schema is good, but could be stronger.

Current strengths:

- Name, URL, email, phone, service area, opening hours, knowsAbout, and offers are present.

Missing/weak:

- No `sameAs` profiles.
- No `geo` coordinates.
- No `hasMap` or specific public business profile URL.
- No street address, which may be intentional for service-area business privacy.
- No review/rating markup. Do not add fake ratings.

Files:

- `data/site.ts`
- `lib/seo/json-ld.ts`

Recommendation:

- If available, add official social/business profiles to `sameAs`.
- If there is a Google Business Profile or public map listing, add `hasMap`.
- If a real office address should be public, add full postal address. If not, keep service-area-only structure.

### 6. Some Pages Still Use Plain `<a>` For Internal Route Cards

This is not an indexing blocker because URLs render correctly, but Next.js prefers `Link` for internal navigation.

Files:

- `app/services/page.tsx`
- `app/cities/page.tsx`
- `app/blog/page.tsx`
- `components/cards/ServiceCard.tsx`

Recommendation:

- Convert internal route-card links and service-card links to `next/link` where practical.
- Keep external, mail, phone, and hash links as `<a>`.

### 7. Remote Stock Imagery Depends On Third-Party Availability

Most images are optimized through Next Image, but many are remote Pexels/Unsplash URLs. This is acceptable, but has risks:

- Upstream 404s can break visuals.
- External response latency affects image loading.
- Licensing/source changes are outside project control.

Files:

- `data/content.ts`
- `data/projects.ts`
- `data/service-pages.ts`
- `data/service-visuals.ts`
- `data/cities.ts`
- `components/sections/PhotoStrip.tsx`
- `components/sections/PortfolioScroll.tsx`
- `components/sections/FeaturedProject.tsx`
- `components/sections/KitchenRemodelingExperience.tsx`
- `app/globals.css`

Recommendation:

- For final production, download approved hero/core images into the project or a stable CDN.
- Keep SEO-friendly filenames and dimensions.
- Continue using Next Image for optimization.

### 8. Parallax Background Is CSS-Only

The parallax background image in CSS is decorative and does not need alt text if decorative. However, if it is content-bearing, crawlers and assistive tech do not receive image context.

File:

- `app/globals.css`

Recommendation:

- Leave as CSS if purely decorative.
- If intended as content, convert to an image component in `components/sections/ParallaxSection.tsx` with descriptive alt text and responsive sizing.

### 9. Contact Form Opens Email Client Only

The contact form uses `mailto:` after validation. This is simple and functional, but less reliable than a server-side form handler.

File:

- `components/sections/Contact.tsx`

Risks:

- User must have an email client configured.
- No server-side lead capture.
- No spam protection or delivery logging.
- No conversion tracking event.

Recommendation:

- Add a server-side form endpoint or trusted form service later.
- Add success/failure analytics only after consent/privacy requirements are considered.

### 10. Blog And Service/City Body Content Should Be Reviewed For Local Uniqueness

The service and city architecture is strong, but city/service pages should avoid feeling like near-duplicates over time.

Files:

- `data/cities.ts`
- `data/service-landing.ts`
- `data/service-pages.ts`

Recommendation:

- Ensure each city page has distinct local details beyond city names.
- Add real project examples by area when available.
- Add project photos with local context where possible.

## Internal Linking And Conversion Flow Improvements Completed

Completed on May 20, 2026:

- Converted `ServiceCard` from `<a>` to Next.js `Link` for all service card internal routes. This enables prefetching and is consistent with the rest of the codebase. Closes SEO audit item 6 (route-card `<a>` links).
- Updated `ServiceCard` `aria-label` from generic `{title} service` to `{title} — view service details` for clearer assistive-technology context.
- Added above-the-fold CTA button to every service page hero. Previously only the kitchen-remodeling page had a hero CTA. All other service pages now include a "Get a Free Estimate" button in the `PageHero` component, ensuring a clear conversion path is visible before the user scrolls on any service page.
- Updated the primary nav CTA from "Start a project" to "Free Estimate" — consistent with the rest of the site's conversion language and shorter for the nav bar context.
- Updated `StickyMobileCTA` from "Start a project" to "Get a Free Estimate" — consistent with hero and mid-page CTA language.
- Updated the `ServiceConsultation` section CTA from "Talk about this project" to "Request a Free Estimate" — applies to every service page near-bottom CTA, making the action specific and consistent.
- Replaced the footer "Explore" column with a "Services" column linking directly to the four highest-traffic service pages: Kitchen Remodeling, Bathroom Remodeling, Interior Painting, Flooring Installation, plus an "All Remodeling Services" index link. These are crawlable footer links that improve internal PageRank distribution to key service pages.

Files changed for these fixes:

- `components/cards/ServiceCard.tsx`
- `components/layout/Nav.tsx`
- `components/layout/StickyMobileCTA.tsx`
- `components/layout/Footer.tsx`
- `components/sections/ServiceLandingSections.tsx`
- `app/services/[slug]/page.tsx`

## Extremely Small Safe Fixes To Consider Later

These are low-risk items not yet completed:

1. Add `sameAs` URLs if real company profiles exist.
2. Add `hasMap` if a public Google Business Profile or map listing is available.
3. Replace placeholder blog article bodies with real content.
4. Consider moving final approved remote images to stable local/CDN assets.

## Recommended Order Of Fixes

### Priority 1 — Indexing And Snippet Quality

1. Done — Shorten homepage title and meta description.
2. Done — Tighten long descriptions for `/cities`, The Woodlands, bathroom remodeling, and interior painting.
3. Done — Expand weak short metadata for `/blog` and `/services/framing`.
4. Done — Add page-specific OG image alt support.

### Priority 2 — Content Quality

5. Replace placeholder blog detail content with real article bodies.
6. Review city pages for unique local details and add real project references where possible.
7. Review service pages for any remaining generic stock language.

### Priority 3 — Local SEO Enrichment

8. Add real `sameAs` links to schema if social or Google Business Profile URLs exist.
9. Add `hasMap` if a Google Business Profile/map listing is public.
10. Consider more structured service-area content on high-priority city pages.

### Priority 4 — Crawlability And Technical Polish

11. Done — Convert internal route-card anchors to Next `Link` (ServiceCard converted).
12. Consider moving approved remote images to stable local/CDN assets.
13. Consider a real form endpoint for contact submissions.
14. Re-run a production crawl with a crawler such as Screaming Frog, Sitebulb, or a custom script after deployment.

## Files Most Likely To Need Editing

- `app/(marketing)/page.tsx`
- `app/blog/[slug]/page.tsx`
- `app/blog/page.tsx`
- `app/cities/page.tsx`
- `app/cities/[slug]/page.tsx`
- `app/services/page.tsx`
- `app/services/[slug]/page.tsx`
- `components/sections/Contact.tsx`
- `components/cards/ServiceCard.tsx`
- `data/site.ts`
- `data/blog.ts`
- `data/cities.ts`
- `data/service-landing.ts`
- `data/service-pages.ts`
- `lib/seo/metadata.ts`
- `lib/seo/json-ld.ts`

## Verification Performed

- Ran production build with `npm run build` successfully.
- Confirmed generated routes include sitemap and robots.
- Inspected `app/sitemap.ts` and `app/robots.ts`.
- Checked generated HTML for canonical URLs, robots meta, H1 counts, and image alt coverage.
- Checked generated metadata for duplicate titles/descriptions.
- Checked internal links in generated HTML against generated routes.
- Searched source for placeholder content and business info consistency.
- After fixes, reran `npm run lint` and `npm run build`.
- After fixes, rechecked generated HTML for title/description uniqueness, canonical domain, H1 counts, and page-specific OG image alt metadata.

## Summary

The site is generally ready for Google crawling from a technical standpoint: sitemap, robots, canonicals, schema, internal linking, H1s, and image alt text are mostly in good shape. The main technical metadata issues identified in the initial audit have been fixed. The biggest remaining indexing-readiness issue is content quality on blog detail pages, because they currently contain placeholder body copy. Local SEO foundations are strong, but schema could be enriched with real public profile/map data if available.
