import type { MetadataRoute } from 'next';
import { PUBLISHED_BLOG_POSTS } from '@/data/blog';
import { CITY_PAGE_DATA } from '@/data/cities';
import { SERVICE_PAGE_DATA } from '@/data/service-pages';
import { absoluteUrl, blogUrl, cityUrl, serviceUrl } from '@/lib/seo/urls';

// Record substantive page content/link changes, not build or deployment dates.
// Dates absent from this ledger are omitted; new routes must not inherit a site-wide date.
const PAGE_LAST_MODIFIED: Partial<Record<string, string>> = {
  '/': '2026-10-08', // Shared process copy rewritten in the content cleanup.
  '/work': '2026-10-07', // Gallery comparisons and imagery updated.
  '/services': '2026-10-08', // Contextual service links added.
  '/cities': '2026-05-20',
  '/blog': '2026-10-08', // Published guide excerpt updated.
  '/contact': '2026-10-08', // Email-draft instructions and confirmation corrected.

  // These standalone pages were added on June 27; their main content is unchanged.
  '/handyman-services-houston': '2026-06-27',
  '/drywall-repair-houston': '2026-06-27',
  '/small-home-repairs-one-visit': '2026-06-27',
  '/drywall-repair-patch-replace-repaint': '2026-06-27',

  // The kitchen guide links changed; the other services received rewritten
  // service-specific process/stage content through the shared components.
  '/services/kitchen-remodeling': '2026-10-08',
  '/services/bathroom-remodeling': '2026-10-08',
  '/services/interior-painting': '2026-10-08',
  '/services/exterior-painting': '2026-10-08',
  '/services/drywall-repair': '2026-10-08',
  '/services/beam-installation': '2026-10-08',
  '/services/window-installation': '2026-10-08',
  '/services/door-installation': '2026-10-08',
  '/services/flooring': '2026-10-08',
  '/services/tile-installation': '2026-10-08',
  '/services/outdoor-remodeling': '2026-10-08',
  '/services/patio-remodeling': '2026-10-08',
  '/services/deck-construction': '2026-10-08',
  '/services/trim-finish-carpentry': '2026-10-08',
  '/services/cabinet-installation': '2026-10-08',
  '/services/closet-systems': '2026-10-08',
  '/services/framing': '2026-10-08',
  '/services/custom-carpentry': '2026-10-08',
  '/services/lighting-installation': '2026-10-08',
  '/services/accent-walls': '2026-10-08',
  '/services/siding-repair': '2026-10-08',
  '/services/fence-installation': '2026-10-08',
  '/services/pergolas': '2026-10-08',
  '/services/home-renovations': '2026-10-08',
  '/services/garage-remodeling': '2026-10-08',
  '/services/commercial-remodeling': '2026-10-08',

  // These city pages also render the substantively rewritten default Process.
  '/cities/houston': '2026-10-08',
  '/cities/katy': '2026-10-08',
  '/cities/sugar-land': '2026-10-08',
  '/cities/cypress': '2026-10-08',
  '/cities/pearland': '2026-10-08',
  '/cities/the-woodlands': '2026-10-08',
  '/cities/pasadena': '2026-10-08',
  '/cities/spring': '2026-10-08',
  '/cities/tomball': '2026-10-08',
  '/cities/richmond': '2026-10-08',
};

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ['/', '/work', '/services', '/cities', '/blog', '/contact'].map((path) => ({
    url: absoluteUrl(path),
    lastModified: PAGE_LAST_MODIFIED[path],
    changeFrequency: 'monthly' as const,
    priority: path === '/' ? 1 : 0.8,
  }));

  const landingRoutes = [
    { path: '/handyman-services-houston', changeFrequency: 'monthly' as const, priority: 0.7 },
    { path: '/drywall-repair-houston', changeFrequency: 'monthly' as const, priority: 0.7 },
    { path: '/small-home-repairs-one-visit', changeFrequency: 'yearly' as const, priority: 0.5 },
    { path: '/drywall-repair-patch-replace-repaint', changeFrequency: 'yearly' as const, priority: 0.5 },
  ].map(({ path, changeFrequency, priority }) => ({
    url: absoluteUrl(path),
    lastModified: PAGE_LAST_MODIFIED[path],
    changeFrequency,
    priority,
  }));

  const serviceRoutes = SERVICE_PAGE_DATA.map((service) => ({
    url: absoluteUrl(serviceUrl(service.slug)),
    lastModified: PAGE_LAST_MODIFIED[serviceUrl(service.slug)],
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const cityRoutes = CITY_PAGE_DATA.map((city) => ({
    url: absoluteUrl(cityUrl(city.slug)),
    lastModified: PAGE_LAST_MODIFIED[cityUrl(city.slug)],
    changeFrequency: 'monthly' as const,
    priority: city.slug === 'houston' ? 0.8 : 0.65,
  }));

  const blogRoutes = PUBLISHED_BLOG_POSTS.map((post) => ({
    url: absoluteUrl(blogUrl(post.slug)),
    lastModified: new Date(post.modified ?? post.date),
    changeFrequency: 'yearly' as const,
    priority: 0.5,
  }));

  return [...staticRoutes, ...landingRoutes, ...serviceRoutes, ...cityRoutes, ...blogRoutes];
}
