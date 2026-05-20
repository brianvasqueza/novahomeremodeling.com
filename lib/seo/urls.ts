import { SITE } from '@/data/site';

export const ROUTES = {
  home: '/',
  services: '/services',
  cities: '/cities',
  blog: '/blog',
  contact: '/contact',
} as const;

export function absoluteUrl(path = '/') {
  return new URL(path, SITE.url).toString();
}

export function serviceUrl(slug: string) {
  return `/services/${slug}`;
}

export function cityUrl(slug: string) {
  return `/cities/${slug}`;
}

export function blogUrl(slug: string) {
  return `/blog/${slug}`;
}
