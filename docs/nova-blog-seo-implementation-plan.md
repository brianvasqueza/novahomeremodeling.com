# Nova Blog SEO Implementation Plan

Date: 2026-06-27

## 1. Current Project Structure Summary

This project is a Next.js 15 App Router site. Public routes live under `app/`, with data-driven service, city, and blog pages.

Current route structure:

- `/` from `app/(marketing)/page.tsx`
- `/services` from `app/services/page.tsx`
- `/services/[slug]` from `app/services/[slug]/page.tsx`
- `/cities` from `app/cities/page.tsx`
- `/cities/[slug]` from `app/cities/[slug]/page.tsx`
- `/blog` from `app/blog/page.tsx`
- `/blog/[slug]` from `app/blog/[slug]/page.tsx`
- `/contact` from `app/contact/page.tsx`
- `/sitemap.xml` from `app/sitemap.ts`
- `/robots.txt` from `app/robots.ts`

Existing metadata pattern:

- Metadata is centralized through `lib/seo/metadata.ts`.
- Pages call `createMetadata()` with `title`, `description`, `path`, `image`, and `imageAlt`.
- Blog detail pages use `generateMetadata()` in `app/blog/[slug]/page.tsx`.
- Blog metadata is derived from each `BlogPost` record in `data/blog.ts`.
- Article pages pass `type: 'article'`, `publishedTime`, and `modifiedTime`.
- Canonicals are generated through `absoluteUrl(path)`.

Existing sitemap and robots setup:

- `app/sitemap.ts` builds sitemap entries from static routes, `SERVICE_PAGE_DATA`, `CITY_PAGE_DATA`, and `BLOG_POSTS`.
- Adding new blog records to `BLOG_POSTS` should automatically add `/blog/[slug]` URLs to the sitemap.
- `app/robots.ts` allows all public pages and disallows `/api/`.
- Robots points to `https://novahomeremodeling.com/sitemap.xml`.

Existing blog setup:

- Blog content is data-driven in `data/blog.ts`.
- The blog index maps `BLOG_POSTS` in `app/blog/page.tsx`.
- The blog detail route uses `findPost(slug)`, `generateStaticParams()`, `PageHero`, `Breadcrumbs`, `JsonLd`, article sections, FAQ blocks, internal links, CTA, `CTASection`, and `Contact`.
- Blog schema already includes `BlogPosting`, FAQ JSON-LD when FAQs exist, and breadcrumb JSON-LD.
- Existing source drafts are present as untracked files:
  - `nova-blog-small-home-repairs.md`
  - `nova-blog-drywall-repair.md`

Existing service pages:

- Service page data is in `data/service-pages.ts`.
- Current service slugs include `kitchen-remodeling`, `bathroom-remodeling`, `interior-painting`, `exterior-painting`, `drywall-repair`, `beam-installation`, `window-installation`, `door-installation`, `flooring`, `tile-installation`, `outdoor-remodeling`, `patio-remodeling`, `deck-construction`, `trim-finish-carpentry`, `cabinet-installation`, `closet-systems`, `framing`, `custom-carpentry`, `lighting-installation`, `accent-walls`, `siding-repair`, `fence-installation`, `pergolas`, `home-renovations`, `garage-remodeling`, and `commercial-remodeling`.
- The strongest existing service targets for the new handyman/home repair direction are:
  - `/services/drywall-repair`
  - `/services/door-installation`
  - `/services/interior-painting`
  - `/services/trim-finish-carpentry`
  - `/services/siding-repair`
  - `/services/fence-installation`
  - `/services/home-renovations`

Shared layout/components to reuse:

- `components/layout/SiteShell.tsx`
- `components/layout/Nav.tsx`
- `components/layout/Footer.tsx`
- `components/sections/PageHero.tsx`
- `components/sections/CTASection.tsx`
- `components/sections/Contact.tsx`
- `components/seo/Breadcrumbs.tsx`
- `components/seo/JsonLd.tsx`
- `components/common/ResponsiveImage.tsx`
- Existing article classes in `app/globals.css`, including `article-shell`, `article-layout`, `article-section`, `article-callout`, `article-links`, and `article-cta`.

Public image files available in `/public`:

- Brand/assets: `public/assets/*.svg`
- Homepage images: `public/homepage/*.jpg`
- Kitchen images: `public/kitchenremodeling/*.jpg`
- Bathroom images: `public/bathroom remodeling/*.jpg`
- Painting images: `public/painting/*.jpg`
- Outdoor images: `public/Outside Remodeling/*.jpg`
- Drywall images: `public/drywall/charlesdeluvio-DH-FZZ7kM5c-unsplash.jpg` and `public/drywall/h-co-3coKbdfnAFg-unsplash.jpg`

## 2. Recommended Files To Edit/Create

Create or edit these files in the implementation pass:

- `data/blog.ts`
  - Add two new `BlogPost` objects:
    - `small-home-repairs-one-visit`
    - `drywall-repair-patch-replace-repaint`
  - Convert the existing markdown drafts into the current `BlogPost` structure: `intro`, `sections`, `faqs`, `cta`, and `internalLinks`.
  - Use the existing `Maintenance` category unless a new category is intentionally added.

- `data/internal-links.ts`
  - Add `drywall-repair` guide links to the two new blog posts.
  - Consider adding guide links for `door-installation`, `interior-painting`, `trim-finish-carpentry`, `siding-repair`, and `fence-installation` if the goal is to reinforce small repair discovery from service pages.

- `components/sections/Services.tsx`
  - Add a conservative homepage SEO link or brief body reference for small home repairs, drywall repair, door repair, paint touch-ups, and trim/caulking without redesigning the section.
  - Best low-risk option: extend the existing `services__seo-links` nav with links to relevant service pages and the new blog posts.

- `components/layout/Footer.tsx`
  - Consider adding `Drywall Repair` and possibly `Door Installation` to the Services footer list.
  - Do not add unsupported trust claims.

- `app/blog/page.tsx`
  - Likely no required code changes because the index maps `BLOG_POSTS`.
  - Optional copy update: broaden "Remodeling Guides" wording to include "home repair guides" if the blog is shifting toward handyman/home repair content.

- `data/site.ts`
  - Update `lastUpdated` after implementation so sitemap `lastModified` values for static/service/city pages reflect the deployment date if broader linking copy changes are made.

No new route files are recommended. The existing `/blog/[slug]` route should render both new posts.

## 3. Recommended Image Choices From `/public`

Recommended primary image for `small-home-repairs-one-visit`:

- `public/drywall/charlesdeluvio-DH-FZZ7kM5c-unsplash.jpg`
- Use in code as `/drywall/charlesdeluvio-DH-FZZ7kM5c-unsplash.jpg`
- Rationale: closest local asset for small repair/punch-list work and wall repair context.
- Suggested alt: `Small drywall and wall repair work representing one-visit home repairs for Houston homeowners.`

Recommended primary image for `drywall-repair-patch-replace-repaint`:

- `public/drywall/h-co-3coKbdfnAFg-unsplash.jpg`
- Use in code as `/drywall/h-co-3coKbdfnAFg-unsplash.jpg`
- Rationale: most direct local drywall/wall finish asset and already aligned with the drywall service direction.
- Suggested alt: `Smooth interior drywall repair area ready for primer and repainting.`

Recommended supporting images, if section images are added:

- `public/painting/pexels-kseniachernaya-5691707.jpg`
  - Code path: `/painting/pexels-kseniachernaya-5691707.jpg`
  - Use for paint touch-ups or repainting after repair.
- `public/painting/pexels-blue-bird-7217985.jpg`
  - Code path: `/painting/pexels-blue-bird-7217985.jpg`
  - Use for interior paint prep or wall finish context.
- `public/homepage/daniel-barnes-z0VlomRXxE8-unsplash.jpg`
  - Code path: `/homepage/daniel-barnes-z0VlomRXxE8-unsplash.jpg`
  - Use only if a broader home/interior repair visual is needed.

The markdown draft URLs `/handyman-services-houston` and `/drywall-repair-houston` are now planned as new root-level service pages in the expansion section below. The draft URLs `/door-repair-houston` and `/interior-painting-houston` are still not current routes and should use existing service URLs unless separate landing pages or redirects are planned.

## 4. Internal Linking Plan

New post URLs:

- `/blog/small-home-repairs-one-visit`
- `/blog/drywall-repair-patch-replace-repaint`

Recommended links inside `Small Home Repairs You Can Get Done in One Visit`:

- Link "drywall patches" to `/services/drywall-repair`
- Link "doors that stick" or "door repair" to `/services/door-installation`
- Link "paint touch-ups" to `/services/interior-painting`
- Link "trim and baseboard" to `/services/trim-finish-carpentry`
- Link "fence boards" or "gate fixes" to `/services/fence-installation`
- Link "drywall repair: patch, replace, or repaint" to `/blog/drywall-repair-patch-replace-repaint`
- CTA link to `/contact`

Recommended links inside `Drywall Repair: When to Patch, Replace, or Repaint`:

- Link "drywall repair services" to `/services/drywall-repair`
- Link "small holes" or "small repairs" to `/blog/small-home-repairs-one-visit`
- Link "repainting" and "paint touch-up" to `/services/interior-painting`
- Link "water damage" cautiously to `/services/drywall-repair` and avoid implying mold remediation unless supported.
- CTA link to `/contact`

Recommended links from existing pages:

- Homepage `components/sections/Services.tsx`
  - Add links to `/blog/small-home-repairs-one-visit` and `/blog/drywall-repair-patch-replace-repaint` in the existing SEO link block.
  - Consider visible anchor text such as "Small home repairs in Houston" and "Drywall patch, replace, or repaint guide."

- Services index `app/services/page.tsx`
  - Drywall card already exists. Consider changing or adding a link to the drywall article in the card body only if the design supports it cleanly.
  - Consider a small "Home repair guides" link row after the service grid if broader handyman/home repair SEO is a priority.

- Service detail pages through `data/internal-links.ts`
  - Add both new posts to `drywall-repair`.
  - Add `small-home-repairs-one-visit` to `door-installation`, `interior-painting`, `trim-finish-carpentry`, `siding-repair`, and `fence-installation` where relevant.

- Footer `components/layout/Footer.tsx`
  - Add `/services/drywall-repair`.
  - Consider adding `/services/door-installation` or `/blog/small-home-repairs-one-visit` if the footer should support the handyman direction.

Use `/handyman-services-houston` and `/drywall-repair-houston` only after those root-level service pages are created. Continue avoiding unplanned draft URLs such as `/door-repair-houston` unless a route or redirect is intentionally added.

## 5. SEO Metadata Plan

Use the existing `BlogPost` fields and `createMetadata()` behavior.

Post 1:

- Slug: `small-home-repairs-one-visit`
- Route: `/blog/small-home-repairs-one-visit`
- Title/H1: `Small Home Repairs You Can Get Done in One Visit`
- SEO title: `Small Home Repairs Done in One Visit`
- Meta description: `From drywall patches to sticky doors and paint touch-ups, see which small home repairs can often be handled in one visit and how to get a faster estimate.`
- Category: `Maintenance`
- Topics: `small home repairs`, `handyman services`, `drywall repair`, `door repair`, `paint touch-ups`, `Houston home repair`
- Image: `/drywall/charlesdeluvio-DH-FZZ7kM5c-unsplash.jpg`
- Article CTA: contact/photo estimate language pointing to `/contact`

Post 2:

- Slug: `drywall-repair-patch-replace-repaint`
- Route: `/blog/drywall-repair-patch-replace-repaint`
- Title/H1: `Drywall Repair: When to Patch, Replace, or Repaint`
- SEO title: `Drywall Repair: Patch, Replace, or Repaint?`
- Meta description: `Not all drywall damage needs the same fix. Learn when to patch, when to replace drywall, and when repainting is enough after wall damage.`
- Category: `Maintenance`
- Topics: `drywall repair`, `drywall patch`, `replace drywall`, `repaint walls`, `water-damaged drywall`, `Houston drywall repair`
- Image: `/drywall/h-co-3coKbdfnAFg-unsplash.jpg`
- Article CTA: drywall estimate/photo language pointing to `/contact`

Structured data:

- Reuse existing `blogPostJsonLd()`.
- Include visible FAQs so `blogFaqJsonLd()` remains valid.
- Keep author as `Nova Home Remodeling & Design`.
- Use dates that match the implementation date or intended publication date.

Content adaptation notes:

- The draft copy repeatedly says "handyman." That can support the new direction, but the current site does not have a dedicated handyman service page. Use "small home repairs", "home repair", "punch-list repairs", and "drywall/door/paint touch-up work" as the primary phrasing unless a new handyman service page is added later.
- Avoid implying plumbing, electrical, mold remediation, foundation repair, or licensed trade work unless the existing site clearly supports that scope. The site currently says electrical is coordinated with a licensed electrician for lighting-related work.

## 6. Sitemap/Indexing Plan

Expected behavior after adding the posts:

- `generateStaticParams()` in `app/blog/[slug]/page.tsx` will include both new slugs automatically because it maps `BLOG_POSTS`.
- `app/sitemap.ts` will include both new blog URLs automatically because it maps `BLOG_POSTS`.
- `/blog` will list both new posts automatically because it maps `BLOG_POSTS`.
- Article metadata, canonical URL, Open Graph, Twitter card, BlogPosting JSON-LD, FAQ JSON-LD, and breadcrumbs should be generated by existing code.

Recommended implementation verification:

- Run `npm run lint`.
- Run `npm run build`.
- Confirm both new routes render:
  - `/blog/small-home-repairs-one-visit`
  - `/blog/drywall-repair-patch-replace-repaint`
- Confirm sitemap contains both:
  - `https://novahomeremodeling.com/blog/small-home-repairs-one-visit`
  - `https://novahomeremodeling.com/blog/drywall-repair-patch-replace-repaint`
- Confirm no internal links point to non-existent draft URLs.
- Update `GOOGLE_INDEXING_CHECKLIST.md` after implementation if the checklist is intended to remain current.

## Updated Handyman Service Page Expansion

This update adds two planned root-level service landing pages in addition to the two planned blog posts.

Target service URLs:

- `/handyman-services-houston`
- `/drywall-repair-houston`

Target blog URLs requested in this expansion:

- `/small-home-repairs-one-visit`
- `/drywall-repair-patch-replace-repaint`

Important route note:

- The current repo convention renders blog posts at `/blog/[slug]`.
- If the requested root-level blog URLs are required, implement them as explicit App Router pages or redirects. Do not index both root and `/blog/...` versions of the same article.
- Recommended SEO choice for this expansion: make the four requested URLs the canonical URLs, because they are short, keyword-focused, and match the planned service/blog campaign.

### Files To Create Or Edit

Create these new route files if the four requested root-level URLs should be canonical:

- `app/handyman-services-houston/page.tsx`
- `app/drywall-repair-houston/page.tsx`
- `app/small-home-repairs-one-visit/page.tsx`
- `app/drywall-repair-patch-replace-repaint/page.tsx`

Recommended supporting edits:

- `data/site.ts`
  - Update `lastUpdated` after implementation.

- `app/sitemap.ts`
  - Add all four root-level URLs to the static route list or a new explicit marketing/landing route list.
  - If `/blog/...` versions are still generated, do not include both duplicate versions in the sitemap.

- `components/sections/Services.tsx`
  - Add conservative homepage links for handyman services, drywall repair, small home repairs, and drywall repair guidance in the existing `services__seo-links` block.

- `components/layout/Footer.tsx`
  - Add `Handyman Services` and `Drywall Repair` links if footer link count remains manageable.

- `components/layout/Nav.tsx`
  - No required change. Do not add these pages to primary navigation unless the owner wants handyman services elevated as a core offering.

- `lib/seo/json-ld.ts`
  - Either add a reusable root-level `Service` JSON-LD helper that accepts an explicit path, or build page-specific JSON-LD in the two new service page files.
  - Existing `serviceJsonLd()` assumes `/services/[slug]`, so it is not a direct fit for `/handyman-services-houston` or `/drywall-repair-houston`.

- `lib/seo/metadata.ts`
  - No required change. Reuse `createMetadata()` from each new page.

- `app/blog/[slug]/page.tsx` and `data/blog.ts`
  - If root-level blog URLs become canonical, avoid also publishing duplicate `/blog/small-home-repairs-one-visit` and `/blog/drywall-repair-patch-replace-repaint` pages.
  - Best clean approach: keep the source content in shared data, extract reusable blog rendering into a shared component, and point canonical metadata at the root-level URL.

### Recommended Route Structure

Use explicit App Router pages for the two new service pages:

- `app/handyman-services-houston/page.tsx` -> `/handyman-services-houston`
- `app/drywall-repair-houston/page.tsx` -> `/drywall-repair-houston`

For the blog posts, choose one canonical route pattern:

- Option A, root-level campaign URLs: `app/small-home-repairs-one-visit/page.tsx` and `app/drywall-repair-patch-replace-repaint/page.tsx`
- Option B, existing blog convention: `data/blog.ts` records rendered by `app/blog/[slug]/page.tsx`

Recommended for this request: Option A for the two blog posts, because the requested sitemap/internal-link targets are root-level URLs. If Option A is used, either skip adding those two posts to `BLOG_POSTS` or add a route/canonical strategy that prevents duplicate indexed content.

### Existing Components And Layouts To Reuse

Use the existing visual system and avoid redesigning:

- `SiteShell` from `components/layout/SiteShell.tsx`
- `PageHero` from `components/sections/PageHero.tsx`
- `Breadcrumbs` from `components/seo/Breadcrumbs.tsx`
- `JsonLd` from `components/seo/JsonLd.tsx`
- `ResponsiveImage` from `components/common/ResponsiveImage.tsx`
- `Section` from `components/common/Section.tsx`
- `SectionHeading` from `components/common/SectionHeading.tsx`
- `InternalLinkGrid` from `components/sections/InternalLinkGrid.tsx`
- `CTASection` from `components/sections/CTASection.tsx`
- `Contact` from `components/sections/Contact.tsx`

The service pages can reuse the same page rhythm as existing service pages: hero, breadcrumbs, service explanation, included repairs, process, FAQ, related links, CTA, and contact.

### Image Recommendations From `/public`

For `/handyman-services-houston`:

- Primary hero: `public/drywall/charlesdeluvio-DH-FZZ7kM5c-unsplash.jpg`
  - Code path: `/drywall/charlesdeluvio-DH-FZZ7kM5c-unsplash.jpg`
  - Suggested alt: `Home repair and drywall patch work representing Houston handyman services.`

- Supporting paint/touch-up image: `public/painting/pexels-kseniachernaya-5691707.jpg`
  - Code path: `/painting/pexels-kseniachernaya-5691707.jpg`
  - Suggested alt: `Interior paint touch-up work after small wall repairs.`

- Supporting interior repair image: `public/homepage/daniel-barnes-z0VlomRXxE8-unsplash.jpg`
  - Code path: `/homepage/daniel-barnes-z0VlomRXxE8-unsplash.jpg`
  - Suggested alt: `Finished home interior after small repair and remodeling work.`

For `/drywall-repair-houston`:

- Primary hero: `public/drywall/h-co-3coKbdfnAFg-unsplash.jpg`
  - Code path: `/drywall/h-co-3coKbdfnAFg-unsplash.jpg`
  - Suggested alt: `Smooth interior drywall repair in a Houston home ready for primer and paint.`

- Supporting drywall/detail image: `public/drywall/charlesdeluvio-DH-FZZ7kM5c-unsplash.jpg`
  - Code path: `/drywall/charlesdeluvio-DH-FZZ7kM5c-unsplash.jpg`
  - Suggested alt: `Drywall patch and wall repair work for a Houston home.`

- Supporting repaint image: `public/painting/pexels-blue-bird-7217985.jpg`
  - Code path: `/painting/pexels-blue-bird-7217985.jpg`
  - Suggested alt: `Interior wall paint preparation after drywall repair.`

### Metadata Plan

For `/handyman-services-houston`:

- H1: `Houston Handyman & Home Repair Services`
- SEO title: `Handyman Services in Houston, TX`
- Meta description: `Small home repairs in Houston, including drywall patches, door adjustments, trim repair, caulking, paint touch-ups, fence fixes, and punch-list work.`
- Canonical: `https://novahomeremodeling.com/handyman-services-houston`
- Open Graph image: `/drywall/charlesdeluvio-DH-FZZ7kM5c-unsplash.jpg`
- Schema: `Service` plus `WebPage` and `BreadcrumbList`
- Service keywords/topics: `Houston handyman services`, `small home repairs`, `home repair`, `drywall repair`, `door repair`, `paint touch-ups`, `punch-list repairs`

For `/drywall-repair-houston`:

- H1: `Drywall Repair in Houston`
- SEO title: `Drywall Repair in Houston, TX`
- Meta description: `Drywall repair in Houston for small holes, ceiling cracks, texture matching, water-damaged drywall, patching, priming, and repaint-ready wall repairs.`
- Canonical: `https://novahomeremodeling.com/drywall-repair-houston`
- Open Graph image: `/drywall/h-co-3coKbdfnAFg-unsplash.jpg`
- Schema: `Service` plus `WebPage`, `FAQPage`, and `BreadcrumbList`
- Service keywords/topics: `Houston drywall repair`, `drywall patch`, `texture matching`, `ceiling drywall repair`, `water-damaged drywall`, `drywall repainting`

For `/small-home-repairs-one-visit`:

- H1: `Small Home Repairs You Can Get Done in One Visit`
- SEO title: `Small Home Repairs Done in One Visit`
- Meta description: `From drywall patches to sticky doors and paint touch-ups, see which small home repairs can often be handled in one visit and how to get a faster estimate.`
- Canonical: `https://novahomeremodeling.com/small-home-repairs-one-visit`
- Open Graph image: `/drywall/charlesdeluvio-DH-FZZ7kM5c-unsplash.jpg`
- Schema: `Article` or `BlogPosting`, plus `FAQPage` if visible FAQs are included

For `/drywall-repair-patch-replace-repaint`:

- H1: `Drywall Repair: When to Patch, Replace, or Repaint`
- SEO title: `Drywall Repair: Patch, Replace, or Repaint?`
- Meta description: `Not all drywall damage needs the same fix. Learn when to patch, when to replace drywall, and when repainting is enough after wall damage.`
- Canonical: `https://novahomeremodeling.com/drywall-repair-patch-replace-repaint`
- Open Graph image: `/drywall/h-co-3coKbdfnAFg-unsplash.jpg`
- Schema: `Article` or `BlogPosting`, plus `FAQPage` if visible FAQs are included

### Internal Linking Plan For The Four New URLs

Homepage:

- Add a link from the homepage services SEO link block to `/handyman-services-houston` with anchor text like `Handyman services in Houston`.
- Add a link to `/drywall-repair-houston` with anchor text like `Drywall repair in Houston`.
- Add links to `/small-home-repairs-one-visit` and `/drywall-repair-patch-replace-repaint` if the link block can support two guide links without feeling cluttered.

`/handyman-services-houston`:

- Link to `/drywall-repair-houston` from drywall patching, wall damage, or texture matching sections.
- Link to `/small-home-repairs-one-visit` from one-visit/punch-list repair copy.
- Link to `/drywall-repair-patch-replace-repaint` from drywall decision-making copy.
- Link to `/contact` from the hero CTA and final CTA.

`/drywall-repair-houston`:

- Link to `/handyman-services-houston` from small home repair or punch-list context.
- Link to `/drywall-repair-patch-replace-repaint` from patch/replace/repaint guidance.
- Link to `/small-home-repairs-one-visit` from small holes, doorknob dings, or one-visit repair copy.
- Link to `/contact` from the hero CTA and final CTA.

`/small-home-repairs-one-visit`:

- Link to `/handyman-services-houston` early in the intro.
- Link to `/drywall-repair-houston` from the drywall section.
- Link to `/drywall-repair-patch-replace-repaint` from any explanation of patching vs replacing.
- Link to `/contact` in the CTA.

`/drywall-repair-patch-replace-repaint`:

- Link to `/drywall-repair-houston` from the intro and repair-service CTA.
- Link to `/handyman-services-houston` from small holes and general home repair context.
- Link to `/small-home-repairs-one-visit` from one-visit repair guidance.
- Link to `/contact` in the CTA.

Footer:

- Add `/handyman-services-houston` and `/drywall-repair-houston` under Services if these become active business priorities.

### Sitemap And Indexing Plan For All Four New URLs

Add the following canonical URLs to `app/sitemap.ts`:

- `https://novahomeremodeling.com/handyman-services-houston`
- `https://novahomeremodeling.com/drywall-repair-houston`
- `https://novahomeremodeling.com/small-home-repairs-one-visit`
- `https://novahomeremodeling.com/drywall-repair-patch-replace-repaint`

Indexing rules:

- All four pages should be `index, follow`.
- Do not add duplicate `/blog/...` versions to the sitemap if the root blog URLs are canonical.
- If `/blog/...` versions exist for historical or organizational reasons, use redirects or canonical metadata so Google sees one primary URL per article.
- Keep `/robots.txt` unchanged unless a duplicate route needs to be blocked temporarily. Canonical/redirect handling is preferred over robots blocking.

Verification after implementation:

- Run `npm run lint`.
- Run `npm run build`.
- Check all four pages render with one H1 each.
- Check all four pages include canonical tags matching the target root URLs.
- Check sitemap includes the four target URLs.
- Check no internal links point to obsolete draft URLs.
- Check JSON-LD parses cleanly.
- Update `GOOGLE_INDEXING_CHECKLIST.md` with the new page count and priority URLs.

### Claims And Trust-Language Warnings

Do not add or expand these claims unless the business owner provides proof or confirms they are accurate:

- `licensed`
- `insured`
- `bonded`
- `guaranteed`
- `certified`
- `warranty-backed`
- `mold remediation`
- `asbestos handling`
- `structural engineering`
- `licensed electrician` or `licensed plumber`, except where copy clearly says Nova coordinates with licensed trade partners

Existing claims found in the repo that need verification:

- `components/layout/Nav.tsx` includes `Licensed & Insured`.
- `components/layout/Footer.tsx` includes `Bonded & insured`.
- Existing electrical language says work is coordinated with a licensed electrician in lighting-related contexts. Do not generalize that into a broad license claim for handyman services.

Safer language for the new pages:

- Use `careful`, `reliable`, `photo-based estimates`, `repair-focused`, `Houston-area homeowners`, `drywall patches`, `door adjustments`, `trim repair`, `caulking`, `paint touch-ups`, and `punch-list repairs`.
- Avoid guarantees such as `same-day`, `perfect texture match`, `permanent fix`, or `guaranteed repair` unless operationally true and supported.

## 7. Risks Or Questions Found

Trust claims to verify before expanding or reusing:

- `components/layout/Nav.tsx` includes `Licensed & Insured` in the mobile CTA.
- `components/layout/Footer.tsx` includes `Bonded & insured`.
- `SEO_INDEXING_AUDIT.md` notes that bonded and insured wording was kept because it already existed, but I did not find license, insurance, or bond proof in site content during this audit.
- Recommendation: verify these claims with the business owner before adding similar language to the new blog posts, CTAs, schema, or footer updates.

Potential routing/link risks:

- The markdown drafts recommend `/handyman-services-houston`, `/drywall-repair-houston`, `/door-repair-houston`, and `/interior-painting-houston`.
- `/handyman-services-houston` and `/drywall-repair-houston` are now planned as new root-level service pages.
- `/door-repair-houston` and `/interior-painting-houston` still do not currently exist. Use existing service URLs or create a separate redirect/landing-page plan if those exact SEO URLs are desired.

Positioning risk:

- The site currently presents Nova as a remodeling company, not a pure handyman company.
- The new posts can support handyman/home repair SEO, but the language should stay connected to existing service capabilities: drywall repair, door installation/repair-adjacent work, trim, caulking, paint touch-ups, fence/siding repairs, and punch-list repairs.
- A dedicated handyman service page is now planned, but the copy should still be careful about scope and avoid implying licensed-trade work unless confirmed.

Content/scope risk:

- Draft sections mention water damage, mold, old drywall, and possible asbestos concerns. Keep these as homeowner education and avoid claiming Nova performs mold remediation, asbestos handling, foundation repair, or licensed trade work unless confirmed.

Documentation drift:

- `GOOGLE_INDEXING_CHECKLIST.md` appears to describe a previous build state with 4 blog posts, while `data/blog.ts` currently contains 5 blog posts.
- After implementation, update checklist counts and priority URLs if the document is still used operationally.

Working tree note:

- `nova-blog-small-home-repairs.md` and `nova-blog-drywall-repair.md` are currently untracked source drafts. Preserve them unless the owner asks to remove or archive them.
