import type { MetadataRoute } from 'next';
import { BLOG_POSTS } from '@/data/blog';
import { CITY_PAGE_DATA } from '@/data/cities';
import { SERVICE_PAGE_DATA } from '@/data/service-pages';
import { SITE } from '@/data/site';
import { absoluteUrl, blogUrl, cityUrl, serviceUrl } from '@/lib/seo/urls';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteLastModified = new Date(SITE.lastUpdated);

  const staticRoutes = ['/', '/services', '/cities', '/blog'].map((path) => ({
    url: absoluteUrl(path),
    lastModified: siteLastModified,
    changeFrequency: 'monthly' as const,
    priority: path === '/' ? 1 : 0.8,
  }));

  const serviceRoutes = SERVICE_PAGE_DATA.map((service) => ({
    url: absoluteUrl(serviceUrl(service.slug)),
    lastModified: siteLastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const cityRoutes = CITY_PAGE_DATA.map((city) => ({
    url: absoluteUrl(cityUrl(city.slug)),
    lastModified: siteLastModified,
    changeFrequency: 'monthly' as const,
    priority: city.slug === 'houston' ? 0.8 : 0.65,
  }));

  const blogRoutes = BLOG_POSTS.map((post) => ({
    url: absoluteUrl(blogUrl(post.slug)),
    lastModified: new Date(post.modified ?? post.date),
    changeFrequency: 'yearly' as const,
    priority: 0.5,
  }));

  return [...staticRoutes, ...serviceRoutes, ...cityRoutes, ...blogRoutes];
}
