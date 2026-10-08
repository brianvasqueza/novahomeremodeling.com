# Focused content cleanup — October 8, 2026

Changes are local only. Nothing has been pushed or deployed. This cleanup does not identify the cause of Google Search Console’s indexing status or promise indexing.

## Meaningful changes

| Area | Before | After |
| --- | --- | --- |
| Shared service image cards | Prepare / Install / Finish described how imagery should market the website. | Service-specific inspection, preparation, installation, and finish considerations for all 26 service entries. |
| Shared process | Kitchen cabinetry, drawer signing, fixed planning weeks, and universal crew/schedule promises appeared across unrelated services. | The existing four-step component accepts service content; the home and city defaults cover scope, communication, coordination, and completion without those promises. |
| Six audited services | Generic category copy, repeated feature headings as scope lists, and unsupported operating practices or guarantees. | Specific scope and planning copy for home renovations, siding, fencing, outdoor work, custom carpentry, and commercial remodeling. Existing practical topics, section order, features, and FAQ counts are retained. |
| Commercial service | Residential hero, craft, local content, area-link descriptions, and schema audience/category; no incoming link from the services hub. | Business use, access, landlord/project requirements, relevant local descriptions and schema; a contextual link in the existing services-hub paragraph. |
| Blog guides | Unsourced costs, timelines, resale percentages, project statistics, market superlatives, and blanket technical prescriptions. | Useful layouts, project scopes, storage ideas, material comparisons, and cost drivers remain. Tables compare scope and estimate considerations instead of unsupported prices. Product-specific requirements replace universal specifications. |
| Contact | Opening an email draft displayed “Received — file no. 128” and promised a reply within three business days. | The same form clearly explains that the visitor must review and send the email draft. It offers direct email and telephone alternatives without a receipt or response guarantee. |
| Shared business claims | Licensing, insurance, bonding, founding year, guaranteed privacy and free-estimate claims lacked evidence in the inspected material. | Removed these claims from the changed shared navigation, footer, contact, process, and service CTAs, and removed unsupported founding/language/price-tier schema values. |
| Image descriptions | Stock/inspiration imagery was described as Houston or Nova project work. | Updated descriptions identify inspiration/reference imagery without claiming project provenance. All image URLs are preserved. |

## Blog review decisions

- **Kitchen remodel cost:** retained the refresh / mid-range / full-remodel distinction and the cabinet, appliance, layout, contingency, and bid-comparison guidance. Removed unsourced dollar figures, cabinet-budget percentages, and duration estimates.
- **Kitchen layout ideas:** retained all six layout discussions, storage and lighting topics, and comparison tables. Removed unsubstantiated project history, one-third success statistic, resale recovery percentage, market rankings, universal clearance/hood/lighting rules, and prices. The title no longer contains a second brand suffix. Added an existing-pattern guide link from the kitchen service.
- **Open concept:** retained structural assessment, connected/defined layout options, zoning, flooring, ventilation, and pros/cons. Replaced unsourced cost/duration figures and blanket hood airflow advice with scope and installation considerations.
- **Texas flooring:** retained the material-by-material comparison and practical selection guidance. Removed price/duration claims, a universal humidity range, and blanket waterproof/slab suitability labels. The existing table now distinguishes product and installation conditions.
- Publication dates, slugs, statuses, images, and article section counts are unchanged. Only the four edited posts receive an updated `modified` date. No drafts were published.

The added quartz heat precaution was checked against [Caesarstone’s care instructions](https://www.caesarstone.com/care-maintenance/quartz-mineral-surfaces/), which recommend protecting surfaces from hot cookware. The article links to that source and directs readers to the guidance for their chosen product; it does not claim Nova uses that brand.

## Design and indexing preservation

- No CSS, fonts, colors, spacing rules, animation settings, image sources, responsive breakpoints, or image configuration changed.
- Existing section/component structure remains. Content props and data overrides supply the changed text; the services-hub links use its existing paragraph/link styling.
- No domain, redirect, canonical helper, robots, sitemap route-list, or slug changes. The non-www production preference remains intact.
- The possible no-JavaScript reveal enhancement was intentionally left out because this phase requires preserving animations and behavior.

## Validation

- `npm run lint` passed.
- `npm run build` passed, including TypeScript checks and all 60 generated pages/resources.
- `git diff --check` passed.
- Data comparisons against the original revision verified all service slugs and hero images, all visual-story/blog image URLs, service feature/FAQ counts, article section counts, publication dates/statuses, and the published-post list.
- Reviewed the complete three-card and four-step data for all 26 services. All 25 routes using the shared visual-process section render its three cards; the kitchen route retains its separate experience component.
- Crawled all 53 local production sitemap URLs: all returned 200 with matching non-www canonicals, index/follow directives, and server-rendered content. Checked all shared consumers for the removed design instructions and shared claims.
- Checked the 11 target pages in a headless browser at 1440px and 390px widths; no page-level horizontal overflow. Inspected representative service-card, commercial, contact, and blog-table screenshots. Tables retain their existing horizontal scrolling on narrow screens.

## Questions for the owner

1. Which licensing, insurance, bonding, founding-date, language, and warranty claims can be supported with current records? Are estimates or consultations free, and under what conditions?
2. Are the current phone, email, service areas, and Monday–Saturday 7 AM–7 PM hours accurate? Should inquiries continue through email drafts, or should a later phase add a directly delivered form? Is there a documented response policy and privacy policy?
3. What are the actual staffing, project-contact, reporting, design, fabrication/shop, and change-approval practices? Which inspected methods and specialty capabilities can be accurately described?
4. Which commercial project types are accepted? Is after-hours work available? Who handles professional review, drawings, permits, inspections, and landlord coordination? Which locations are served for each service?
5. Are there current, documented cost ranges and scheduling examples that can support the four guides? What scope, exclusions, date, and evidence should accompany them? Which photos show completed Nova work, and which project/location details are approved for publication?

These questions are kept in this internal report; no owner-confirmation placeholders or public TODO text were added to the website. Other site-specific marketing copy outside the audited content and changed shared components has not received a comprehensive business-claim review.
