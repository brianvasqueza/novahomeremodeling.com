# Google Indexing Checklist — Nova Home Remodeling & Design

**Date:** May 20, 2026  
**Domain:** https://novahomeremodeling.com  
**Build status:** ✅ Clean — 47 routes generated, 0 TypeScript errors, 0 lint errors

---

## Quick Reference

| Item | Value |
|------|-------|
| Sitemap URL | https://novahomeremodeling.com/sitemap.xml |
| Robots.txt URL | https://novahomeremodeling.com/robots.txt |
| Total sitemap entries | 42 |
| Total generated pages | 43 (42 + 404) |
| JSON-LD scripts | 219 across all pages |
| Images checked | 329 |

---

## 1. Pages Ready to Submit

### Priority 1 — Submit first (highest search value)

| URL | Title | Status |
|-----|-------|--------|
| https://novahomeremodeling.com/ | Houston Home Remodeling Company | ✅ Ready |
| https://novahomeremodeling.com/services/kitchen-remodeling | Kitchen Remodeling in Houston, TX | ✅ Ready |
| https://novahomeremodeling.com/services/bathroom-remodeling | Bathroom Remodeling in Houston, TX | ✅ Ready |
| https://novahomeremodeling.com/services/interior-painting | Interior Painting in Houston, TX | ✅ Ready |
| https://novahomeremodeling.com/services/exterior-painting | Exterior Painting in Houston, TX | ✅ Ready |
| https://novahomeremodeling.com/services/flooring | Flooring Installation in Houston, TX | ✅ Ready |
| https://novahomeremodeling.com/services/drywall-repair | Drywall Repair in Houston, TX | ✅ Ready |
| https://novahomeremodeling.com/cities/houston | Home Remodeling in Houston, TX | ✅ Ready |

### Priority 2 — Submit with sitemap (strong local pages)

| URL | Status |
|-----|--------|
| https://novahomeremodeling.com/services | ✅ Ready |
| https://novahomeremodeling.com/cities | ✅ Ready |
| https://novahomeremodeling.com/services/home-renovations | ✅ Ready |
| https://novahomeremodeling.com/services/deck-construction | ✅ Ready |
| https://novahomeremodeling.com/services/tile-installation | ✅ Ready |
| https://novahomeremodeling.com/services/cabinet-installation | ✅ Ready |
| https://novahomeremodeling.com/services/outdoor-remodeling | ✅ Ready |
| https://novahomeremodeling.com/services/patio-remodeling | ✅ Ready |
| https://novahomeremodeling.com/cities/katy | ✅ Ready |
| https://novahomeremodeling.com/cities/sugar-land | ✅ Ready |
| https://novahomeremodeling.com/cities/the-woodlands | ✅ Ready |
| https://novahomeremodeling.com/cities/cypress | ✅ Ready |
| https://novahomeremodeling.com/cities/pearland | ✅ Ready |

### Priority 3 — Allow sitemap to pick up (remaining pages)

All remaining `/services/[slug]` and `/cities/[slug]` pages are technically ready and included in the sitemap. Let Google discover them via sitemap rather than manual submission.

### ⚠️ Hold — Do not prioritize yet

| URL | Issue |
|-----|-------|
| https://novahomeremodeling.com/blog/how-we-plan-a-fixed-fee-feasibility-study | Placeholder body content |
| https://novahomeremodeling.com/blog/materials-that-age-well-in-houston-homes | Placeholder body content |

The blog post detail pages are indexable and in the sitemap, but contain the placeholder text: *"This journal entry is intentionally data-backed and ready for CMS content."* Google will index thin content and it can harm topical authority. Either replace with real article bodies or add `noindex` until content is ready.

---

## 2. Sitemap URL

```
https://novahomeremodeling.com/sitemap.xml
```

### Sitemap entry count

| Category | Count |
|----------|-------|
| Static pages (`/`, `/services`, `/cities`, `/blog`) | 4 |
| Service pages | 26 |
| City pages | 10 |
| Blog posts | 2 |
| **Total** | **42** |

### All service slugs in sitemap

`kitchen-remodeling` · `bathroom-remodeling` · `interior-painting` · `exterior-painting` · `drywall-repair` · `beam-installation` · `window-installation` · `door-installation` · `flooring` · `tile-installation` · `outdoor-remodeling` · `patio-remodeling` · `deck-construction` · `trim-finish-carpentry` · `cabinet-installation` · `closet-systems` · `framing` · `custom-carpentry` · `lighting-installation` · `accent-walls` · `siding-repair` · `fence-installation` · `pergolas` · `home-renovations` · `garage-remodeling` · `commercial-remodeling`

### All city slugs in sitemap

`houston` · `katy` · `sugar-land` · `cypress` · `pearland` · `the-woodlands` · `pasadena` · `spring` · `tomball` · `richmond`

---

## 3. Robots.txt URL

```
https://novahomeremodeling.com/robots.txt
```

### Current robots.txt behavior

```
User-agent: *
Allow: /
Disallow: /api/
Sitemap: https://novahomeremodeling.com/sitemap.xml
```

All public pages are crawlable. Only `/api/` routes are blocked. No important pages are inadvertently blocked.

---

## 4. Verification Results

### ✅ Passed — No action needed

| Check | Result |
|-------|--------|
| Production build | Clean — 0 errors, 0 warnings |
| TypeScript | 0 errors |
| Sitemap route | Exists and generates valid XML |
| Robots.txt route | Exists with correct rules |
| Duplicate page titles | 0 across 42 pages |
| Duplicate meta descriptions | 0 across 42 pages |
| Pages with exactly 1 H1 | 42 / 42 |
| Images with missing alt text | 0 / 329 |
| Images with empty alt text | 0 / 329 |
| JSON-LD parse errors | 0 / 219 scripts |
| Broken internal page links | 0 |
| Pages blocked from indexing | 0 |
| Canonical URLs present | All checked pages confirmed |
| Robots meta on all pages | `index, follow` on all |
| Open Graph tags | og:title, og:description, og:image, og:image:alt on all pages |
| Twitter Card | `summary_large_image` on all pages |
| Contact phone consistency | (281) 690-3431 consistent sitewide |
| Contact email consistency | brivaqz@gmail.com consistent sitewide |

### ✅ Schema markup verified

| Page type | Schema types present |
|-----------|---------------------|
| Homepage | `Organization`, `LocalBusiness`, `HomeAndConstructionBusiness`, `WebSite`, `WebPage` |
| Service pages | `Service`, `FAQPage`, `BreadcrumbList`, `WebPage` |
| City pages | `WebPage`, `BreadcrumbList` |
| Blog posts | `BlogPosting`, `BreadcrumbList` |
| Blog index | `CollectionPage` |
| Services index | `CollectionPage` |

### ✅ Conversion paths verified

| CTA | Location | Status |
|-----|----------|--------|
| "Get a Free Estimate" | Homepage hero | ✅ |
| "Get a Free Estimate" | All 26 service page heroes | ✅ |
| "Request a Free Estimate" | Bottom of every service page | ✅ |
| "Schedule a Free Estimate" | Homepage mid-page CTA section | ✅ |
| "Get a Free Estimate" | Parallax section | ✅ |
| "Free Estimate" | Global navigation bar | ✅ |
| "Get a Free Estimate" | Sticky mobile bar | ✅ |
| Clickable phone link | Nav, footer, contact, sticky bar | ✅ |
| Clickable email | Footer, contact section | ✅ |
| Contact form | Homepage, every service page | ✅ |

### ✅ Internal linking verified

| Link type | Status |
|-----------|--------|
| Service cards → service pages | ✅ Using `next/link` |
| Footer → kitchen, bath, painting, flooring service pages | ✅ |
| Footer → all services index | ✅ |
| Service pages → related services | ✅ |
| Service pages → area city pages | ✅ |
| Homepage → service pages (SEO nav block) | ✅ |
| Kitchen page → cabinet, tile, flooring | ✅ |
| All pages → contact form | ✅ |

### ⚠️ Minor — Not blocking, worth noting

| Issue | Detail |
|-------|--------|
| Blog post body content | 2 blog posts have placeholder body copy — thin content risk if indexed |
| 6 service title tags 71–72 chars | 1–2 chars over 70-char guideline. Google will usually display without truncation. Not a blocker. Slugs: `cabinet-installation`, `commercial-remodeling`, `flooring`, `home-renovations`, `lighting-installation`, `pergolas` |
| 6 service descriptions 166–170 chars | 1–5 chars over 165-char guideline. Minor truncation risk. Slugs: `closet-systems`, `commercial-remodeling`, `fence-installation`, `garage-remodeling`, `pergolas`, `trim-finish-carpentry` |
| No `sameAs` in schema | No social profile or Google Business Profile URLs added. Add when real profiles exist. |
| No `hasMap` in schema | No Google Maps listing URL added. Add when GMB profile is public. |
| Contact form uses `mailto:` | Opens email client. No server-side capture. Functional but limited for tracking. |

---

## 5. Remaining Manual Steps

Complete these before or immediately after deploying to production:

### Before going live

- [ ] **Replace blog post body content.** The 2 blog posts have placeholder body text. Either write real articles (recommended) or add `noindex` to blog detail pages temporarily. File: `app/blog/[slug]/page.tsx`, content source: `data/blog.ts`.
- [ ] **Verify domain DNS is pointed to hosting.** The domain `novahomeremodeling.com` must resolve for Google to crawl it.
- [ ] **Confirm SSL/HTTPS is active.** All canonical URLs use `https://`. Google will not index an HTTP-only site cleanly.
- [ ] **Check that `/sitemap.xml` loads in browser.** Navigate to `https://novahomeremodeling.com/sitemap.xml` and confirm it returns valid XML with all 42 URLs.
- [ ] **Check that `/robots.txt` loads in browser.** Navigate to `https://novahomeremodeling.com/robots.txt` and confirm it shows the expected rules.

### After going live

- [ ] **Set up Google Search Console** (steps below).
- [ ] **Submit sitemap** in Search Console.
- [ ] **Request manual indexing** for the 8 Priority 1 pages.
- [ ] **Add Google Business Profile** (if not already done). A verified GBP strongly supports local SEO for Houston searches.
- [ ] **Add `sameAs` to schema** once any social profiles (Instagram, Facebook, Houzz) or directory listings are created.
- [ ] **Add `hasMap`** once a Google Maps listing is public.

### Optional improvements (post-launch)

- [ ] Replace `mailto:` form with a real server-side form endpoint for lead capture reliability and conversion tracking.
- [ ] Add conversion tracking (GA4 event or form submission pixel) once consent/privacy requirements are understood.
- [ ] Consider `noindex` on blog detail pages until real article content replaces placeholders.

---

## 6. Google Search Console Submission Steps

### Step 1 — Add property

1. Go to [Google Search Console](https://search.google.com/search-console).
2. Click **Add property**.
3. Choose **URL prefix** and enter: `https://novahomeremodeling.com`
4. Click **Continue**.

### Step 2 — Verify ownership

Choose one of the following methods:

**Option A — HTML file upload (simplest)**
1. Download the verification HTML file Google provides.
2. Place it in the `/public` directory of this Next.js project as-is (e.g., `public/google1234abc.html`).
3. Deploy the updated build.
4. Click **Verify** in Search Console.

**Option B — DNS record**
1. Log in to your domain registrar (GoDaddy, Namecheap, etc.).
2. Add a TXT record to the DNS with the value Google provides.
3. Wait up to 24 hours for DNS propagation.
4. Click **Verify** in Search Console.

**Option C — Meta tag**
1. Copy the `<meta name="google-site-verification" ...>` tag Google provides.
2. Add it to `app/layout.tsx` inside the `<head>` using Next.js metadata:
   ```tsx
   export const metadata = {
     verification: { google: 'your-verification-code-here' }
   };
   ```
3. Deploy and click **Verify**.

### Step 3 — Submit sitemap

1. In Search Console, go to **Sitemaps** (left sidebar).
2. In the "Add a new sitemap" field, enter: `sitemap.xml`
3. Click **Submit**.
4. The full URL Google will index: `https://novahomeremodeling.com/sitemap.xml`
5. Wait for Google to report back — typically 1–3 days to process.

### Step 4 — Request manual indexing for priority pages

After sitemap submission, manually request indexing for the highest-priority pages so Google crawls them sooner:

1. In Search Console, use the **URL Inspection** tool (top search bar).
2. Enter each URL below, then click **Request Indexing**:

```
https://novahomeremodeling.com/
https://novahomeremodeling.com/services/kitchen-remodeling
https://novahomeremodeling.com/services/bathroom-remodeling
https://novahomeremodeling.com/services/interior-painting
https://novahomeremodeling.com/services/flooring
https://novahomeremodeling.com/services/drywall-repair
https://novahomeremodeling.com/cities/houston
https://novahomeremodeling.com/services
```

### Step 5 — Monitor after submission

Check these Search Console reports after 1–2 weeks:

| Report | What to look for |
|--------|-----------------|
| **Coverage** | Pages should move from "Discovered" to "Indexed". Watch for "Excluded" or "Error" entries. |
| **Sitemaps** | Confirm Google processed all 42 URLs without errors. |
| **URL Inspection** | For any page showing "URL is not on Google" after 2 weeks, reinspect and re-request indexing. |
| **Core Web Vitals** | Check after first 28 days of data. |
| **Search results** | After ~2–4 weeks, search `site:novahomeremodeling.com` in Google to see indexed pages. |

---

## Build Command Reference

```bash
# Run locally in production mode
npm run build && npm start

# TypeScript check only
npx tsc --noEmit

# Lint
npm run lint
```

---

*Last verified: May 20, 2026 — Build clean, 42 sitemap URLs, 0 broken links, 0 missing alt text, 0 JSON-LD errors, 0 duplicate metadata.*
