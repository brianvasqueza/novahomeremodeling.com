# Technical indexing check — October 8, 2026

Checked the 11 Phase 1 URLs against the local production build after the content cleanup and against the currently deployed HTTPS non-www site. Expanded response, canonical, link, and sitemap checks to all 53 intended public pages. Changes remain local; nothing was pushed or deployed. These findings do not identify why Google chose not to index a URL or guarantee indexing.

## Evidence-based fix

| Issue | File | Change |
| --- | --- | --- |
| All 46 non-blog pages inherited `SITE.lastUpdated` (`2026-06-27`), regardless of their actual substantive changes. The cleaned-up services/contact and the October Work gallery update still had that date. | `app/sitemap.ts` | Replaced the global fallback with explicit page dates supported by content changes and inspected history. An unrecorded route omits optional `lastmod` instead of inheriting a date. Existing article `modified` / publication dates remain in use. |

Date evidence and scope:

- **October 8:** the six targeted services and contact were substantively rewritten. All other non-kitchen services received rewritten service-specific process/stage content. The home page and all ten city-detail pages render the rewritten shared process. The kitchen service gained its relevant layout-guide anchor, the services hub gained contextual service links, and the blog hub renders the corrected kitchen-cost excerpt. These are explicit recorded changes, not automatic dates based on a build, deployment, or the current clock.
- **October 7:** Work gallery comparison content and imagery changed in commit `e4e6bb6`.
- **June 27:** the four standalone handyman/drywall service and guide pages were introduced in `43a4fd4`; their principal content remains unchanged.
- **May 20:** the cities listing's principal content/data was last updated in the inspected May 20 history (`023f9dd` / `7d69aeb`). Shared navigation/footer/contact-widget edits alone do not reset its date.
- **Articles:** the four cleaned-up guides retain their explicit October 8 `modified` values. The remaining three retain May 20, October 3, and October 5. Publication dates are unchanged.

The sitemap now has 44 dates reflecting actual October 8 content/link changes and nine older dates. New pages do not receive today's date automatically. Future substantive edits should update the relevant ledger entry or article record. This follows [Google's guidance on accurate, significant-change `lastmod` values](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap).

## Checks already passing

| Check | Local build after cleanup | Current production |
| --- | --- | --- |
| All 53 sitemap page URLs, including the 11 targets | Direct HTTP 200 | Direct HTTPS non-www HTTP 200 |
| Canonicals | Exactly one per page, matching its HTTPS non-www URL | Same |
| Index directives | No HTML `noindex`; no `X-Robots-Tag` | Same |
| Useful server-rendered content | Main content and ordinary anchor links present before client JavaScript | Same; production still has earlier copy |
| robots.txt | Allows `/`, excludes only `/api/`; Googlebot permitted on the target pages and referenced rendering resources | Same |
| Required CSS / JavaScript / preloaded fonts on target pages | All 22 unique referenced resources return 200 | All 22 return 200 |
| Sitemap membership | Exact 53-route set, every page once, preferred host, no redirected destinations | Same |
| Drafts / removed placeholders / fonts / static assets in sitemap | None; source uses `PUBLISHED_BLOG_POSTS` (currently seven published records, zero drafts) | None |
| Public HTML anchor destinations across all 53 pages | No broken or redirected internal destinations, no removed-placeholder links | Same |
| Domain redirects | No conflicting domain redirect, rewrite, middleware, or header override found in application configuration | All 11 www target URLs return 308 to the matching HTTPS non-www path, preserving a test query string |

The local server uses HTTP on localhost for validation; its generated canonicals and sitemap correctly use the production HTTPS host. Vercel domain configuration, fonts, `/_next/` access, robots rules, metadata helpers, schema, slugs, images, and design were not changed in this phase.

## Internal-link review

| Destination | Relevant crawlable anchors in the cleaned-up build |
| --- | --- |
| Home renovations | Services hub, framing/beam related-service cards, relevant city pages, flooring/open-concept articles |
| Siding repair | Services-hub paragraph and exterior-painting related-service card |
| Fence installation | Services-hub paragraph, Work page, exterior-painting/siding related-service cards, Cypress page |
| Commercial remodeling | Services-hub paragraph |
| Custom carpentry | Services hub, relevant related-service cards, Houston/The Woodlands/Richmond pages |
| Outdoor remodeling | Services hub, patio/deck/fence/pergola related-service cards, relevant city pages |
| Kitchen layout article | Blog listing, kitchen-service guide section, oak-cabinet article |
| Open-concept article | Blog listing, kitchen/beam/framing/home-renovation guide sections, relevant articles |
| Kitchen cost article | Blog listing, kitchen/flooring/home-renovation guide sections, relevant articles |
| Flooring article | Blog listing, kitchen/bathroom/flooring/home-renovation guide sections, relevant articles |
| Contact | Shared navigation/footer and contextual article, Work, blog-listing, and standalone-page CTAs |

The previous content cleanup already added the natural services-hub links to siding, fencing, and commercial remodeling, and the kitchen-service link to the layout article (`app/services/page.tsx`, `data/internal-links.ts`). Production does not have those additions yet: commercial currently has no incoming anchor from the crawled public pages, while siding/fencing lack the hub anchors. No further link lists or links were added in this technical phase. Existing related-service cards and relevant article links are normal rendered `<a href>` elements.

Both removed placeholder URLs return **404** locally and in production, have no public anchor links in the crawled pages, and are absent from the sitemap and runtime content data:

- `/blog/materials-that-age-well-in-houston-homes`
- `/blog/how-we-plan-a-fixed-fee-feasibility-study`

They have no homepage redirects.

## Validation

- `npm run lint`, `npm run build` (including TypeScript), and `git diff --check` passed.
- Crawled the rebuilt production server and checked its generated XML against an independent route set from service, city, and published-article data. All 53 URLs and their order were preserved.
- Rechecked per-article dates, historical dates, public hub anchors, removed URLs, HTML content, canonical/directive counts, response headers, rendering resources, and crawl permissions.
- No technical owner confirmation is needed for this fix. Business-fact questions remain in `docs/focused-content-cleanup.md`.
