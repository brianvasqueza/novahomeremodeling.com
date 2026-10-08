# Phases 2 and 3 review — October 8, 2026

The cleanup and technical changes are verified locally and remain **uncommitted, unstaged, and undeployed**. The live checks below describe the earlier production version, not the cleaned-up version. Technical accessibility and corrected content do not guarantee that Google will index a page.

## Diff review and corrections

Reviewed tracked changes and the new service-process data against `HEAD`. No CSS, fonts, image sources, responsive rules, animation settings, package/dependency files, slug changes, draft publication, domain configuration, canonical helpers, or robots rules were introduced. Work gallery files and `docs/update-oak-kitchen-cabinets.md` are unchanged.

Three review corrections were made:

1. Changed the kitchen-cost guide link description from “Budget ranges” to scope, cost drivers, and estimate considerations, matching the cleaned-up guide.
2. Restored four unnecessary alt-description edits in the unrelated bathroom-updates and oak-cabinet articles. All three non-targeted blog records now match `HEAD` exactly.
3. Corrected the shared heading generator's plural wording for pergolas and closet systems to “pergola construction” and “closet installation.” Checked those consumers after the final rebuild.

## Files changed and why

| File | Purpose |
| --- | --- |
| `data/service-pages.ts` | Service-specific, factual scope and planning copy for the six audited services; soften unsupported operating practices, statistics, specifications, and promises. |
| `data/service-landing.ts` | Appropriate landing-section overrides for those services, especially siding and commercial work; practical scope lists, reference-image descriptions, and shared claim cleanup. |
| `data/service-process.ts` (new) | Per-service planning and three-stage copy for all 26 entries; four-step content for shared process consumers. |
| `data/service-visuals.ts` | Replace visitor-visible image/website-building instructions with service work descriptions; identify reference/inspiration imagery. |
| `app/services/[slug]/page.tsx` | Supply process data to the existing component; remove the unsupported free-estimate CTA claim. |
| `components/sections/ServiceLandingSections.tsx` | Remove the shared unsupported free-estimate CTA claim. |
| `components/sections/Process.tsx` | Accept service content while retaining the existing structure, images, scrolling, and animations; clear default copy for home/city pages. |
| `data/content.ts` | Replace generic cabinetry, fixed-week, universal-crew, and drawer-signing process claims with useful planning steps. |
| `data/blog.ts` | Targeted cleanup of four articles: preserve layouts, scopes, material comparisons, and useful guidance; remove unsupported prices, timelines, statistics, resale percentages, and blanket technical claims. Record their substantive modification dates. |
| `data/internal-links.ts` | Kitchen-layout guide anchor, corrected kitchen-cost description, and commercial-specific city-link descriptions. |
| `app/services/page.tsx` | Natural paragraph links to siding, fencing, and commercial remodeling; replace unsupported universal-crew claims. |
| `app/contact/page.tsx` | Focus the introduction on project details and requesting an estimate; accurate inspiration-image descriptions. |
| `components/sections/Contact.tsx` | Explain email-draft preparation and manual sending; remove false receipt/response guarantees and unsupported trust claims; retain the form and contact alternatives. |
| `components/layout/Nav.tsx` | Remove unsupported free-estimate and credential copy from shared navigation. |
| `components/layout/StickyMobileCTA.tsx` | Remove the unsupported free-estimate claim. |
| `components/layout/Footer.tsx` | Remove unsupported founding-year and bonding/insurance claims; broader remodeling description. |
| `lib/seo/json-ld.ts` | Remove unsupported founding/language/price-tier assertions; correct the commercial service audience/category. No new schema added. |
| `app/sitemap.ts` | Replace the blanket site date with explicit dates tied to substantive page changes; unknown dates are omitted, article dates retained, route membership unchanged. |
| `docs/focused-content-cleanup.md` (new) | Content decisions, validation, and detailed owner questions. |
| `docs/technical-indexing-check.md` (new) | Technical findings, date evidence, and internal-link inventory. |
| `docs/phase-2-3-review.md` (new) | Final review, corrections, verification boundaries, and release checklist. |

## Content and technical outcomes

- Prepare / Install / Finish cards explain the relevant work. The known “Mid-project imagery…” instruction and nearby website-building notes are absent from visitor-facing output across the local public-page crawl.
- Siding content covers visible/concealed damage, possible water entry, profiles, weather protection, and finish matching. Fencing, carpentry, outdoor work, home renovations, and commercial sections address their own scopes.
- The four guides retain their topic focus, section counts, images, and practical information. Unsourced exact numbers and absolute claims were removed or softened. No other articles were rewritten.
- Contact explains what the existing mailto form actually does and provides direct email/telephone alternatives.
- The sitemap no longer reuses June 27 for unrelated pages. Explicit dates reflect substantive edits, including the shared process rewrite; unchanged principal content retains older dates. There is no runtime/build/deployment-date fallback.
- Contextual hub and guide links added during cleanup render as normal HTML anchors. No extra link lists, redirects, FAQs, or schema were added in the technical/review phases.

## Final local production verification

| Check | Result |
| --- | --- |
| Existing project checks | `npm run lint`, `npm run build` (including TypeScript), and `git diff --check` pass after the last source edit. Build generated 60 pages/resources. No standalone test script or existing test suite is configured. |
| Public routes | All 53 public sitemap pages return direct HTTP 200 from `next start` on localhost. This includes the 11 audited URLs and all shared-component consumers. |
| Canonicals/directives | Exactly one matching production HTTPS non-www canonical per page; index/follow; no unintended HTML noindex or `X-Robots-Tag`. Browser checks also verified a single canonical after hydration. |
| Server-rendered output | Useful main content and crawlable anchors present without executing client JavaScript. Known shared design instructions and old shared process/receipt claims absent. |
| Shared consumers | All 26 service data entries have complete content. All 25 non-kitchen visual-process routes render three cards. Kitchen retains its separate experience. Home and all ten city pages render the cleaned-up default process. Shared contact/navigation/footer output checked throughout the crawl. |
| Sitemap | Exact 53-page set from public route data; one entry each; HTTPS non-www URLs; direct destinations; correct per-article dates and recorded page dates; no drafts, placeholders, fonts, or static assets. |
| Crawl/resources | robots permits pages and rendering resources and excludes only `/api/`. All 22 unique CSS/JavaScript/preloaded font resources referenced by the 11 target pages return 200. Fonts and `/_next/` remain intact. |
| HTML links | All crawled internal anchor destinations resolve; target services/articles have their relevant hub anchors; related-service and article links remain crawlable; no public links to either removed placeholder. |
| Browser/layout | Headless Chrome at 1440×1000 and 390×844: all 11 target routes plus home, Houston city, kitchen, bathroom, exterior painting, pergolas, and closet systems (18 routes total). No detected page overflow or clipped inspected text. No failed HTTP responses, pending/broken inspected images, or JavaScript exceptions in the main browser run. |
| Visual review | Inspected representative service-stage cards, shared process headings/panels, blog tables/images, contact form/draft state, and mobile navigation. Existing responsive table scrolling is preserved. Fourteen additional gallery/stage/article-image/form section checks passed. |
| Interactive behavior | Form validation, prepared-draft guidance, fallback text, and reset work at both sizes. Mobile menu opens/closes without overflow. All four process phases advance with matching captions on the two corrected-heading routes. |
| Preservation | Service slugs/hero images, all service/blog visual-image URLs, service feature/FAQ counts, article section counts/publication dates/statuses, and published-post list remain unchanged. The three non-targeted blog records match `HEAD`. |

Both removed URLs return **404**, remain absent from public HTML anchors and the sitemap, and have no homepage redirects:

- `/blog/materials-that-age-well-in-houston-homes`
- `/blog/how-we-plan-a-fixed-fee-feasibility-study`

Browser limitation: native computer-use tooling could not initialize (`CUA_REPL_ENABLED_SURFACES is required`), so checks used installed headless Chrome through its debugging protocol. Actual mail-app handoff and delivered email were not verified; headless Chrome sent no inquiry. Visual checks cover representative sections, not every possible viewport or every image on the site. Temporary audit scripts/screenshots stayed outside the repository; no copy-string test suite was added.

## Fresh live verification

Read-only production checks passed for all 53 sitemap pages: direct HTTPS non-www 200, one self-canonical, no unintended noindex/header directive, permitted resources, and resolving internal links. Both removed placeholders return 404. All 11 www target URLs return matching-path 308 redirects and preserve a test query string.

Production still has the earlier copy, missing cleanup hub/guide anchors, and blanket June 27 non-blog dates. The cleaned-up content and corrected sitemap have **not** been verified as deployed. No Vercel configuration was modified or deployed, and no conflicting application domain redirect was found.

## Remaining owner facts

1. Confirm current phone/email, hours, service areas, and whether inquiries should continue through email drafts. Confirm any actual response/privacy policy and whether estimates/consultations are free.
2. Supply evidence before reinstating credentials, insurance/bonding, founding/experience claims, languages, or warranties.
3. Confirm staffing/contact/reporting practices, fabrication/design capabilities, change approvals, commercial project types, after-hours availability, and who handles professional review, drawings, permits, and inspections.
4. Identify actual Nova project photos and approved project details. Supply dated, scoped cost/scheduling examples if numerical guide content is wanted.

These questions do not appear as public TODOs. Existing business claims outside the audited content and changed shared sections have not received a comprehensive factual audit.

## Deployment steps — future actions only

The local branch is `main`, origin is `git@github.com:brianvasqueza/novahomeremodeling.com.git`, and the project uses Next.js with `npm run build`. There is no local `.vercel` project link or repository deployment workflow to verify dashboard settings from. Use the existing Vercel project; confirm its Git connection and configured production branch before releasing.

1. Review the listed source/data/docs changes and owner facts. Create a review branch and commit only the reviewed files, including the new service-process file; preserve unrelated work. Do not change dependencies or domain settings.
2. Once approved for pushing, push the review branch through the existing Git workflow and inspect its Vercel preview build and representative pages. Use the current Next.js preset/build settings; no new environment variables are required by these changes.
3. Once approved for production, merge to the project's configured production branch and verify that Vercel deploys the intended commit. Retain direct non-www production and matching-path www 308 redirects. [Vercel documents this preview/production Git workflow](https://vercel.com/docs/git).

No branch, commit, push, preview deployment, or production deployment was created during this review.

## Short post-deployment checklist

1. Confirm the intended commit is live. Check the 11 Phase 1 URLs for direct 200, corrected content, one self-canonical, no unintended noindex/header directive, and useful HTML before JavaScript.
2. Verify robots/resources and the generated sitemap's exact public-route membership, preferred host, nonredirecting URLs, and substantive dates. Both removed placeholders must still be 404 and absent from links/sitemap.
3. Follow the services-hub paragraph links, blog cards, kitchen-layout guide link, relevant article links, and related-service cards on production. Check a service, blog table, contact page, and mobile menu at desktop/mobile sizes.
4. Manually confirm mailto handoff and fallback instructions with a real email app; send a clearly identified test inquiry only if the owner authorizes delivery.
5. Use Search Console URL Inspection's live test on representative preferred URLs; review rendered content/resources and the sitemap. Request indexing for the materially updated intended public pages as appropriate and monitor later crawl/indexing reports. Do not request indexing for fonts or removed URLs. Google retains the indexing decision.
