import { SERVICE_PAGE_DATA } from './service-pages';
import { CITY_PAGE_DATA } from './cities';
export { BLOG_POSTS, findPost, type BlogPost } from './blog';

export type ServicePage = {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  heroImage: string;
};

export const SERVICE_PAGES: ServicePage[] = SERVICE_PAGE_DATA.map((s) => ({
  slug: s.slug,
  title: s.title,
  eyebrow: s.eyebrow,
  description: s.description,
  heroImage: s.heroImage,
}));

export type CityPage = {
  slug: string;
  name: string;
  distance: string;
  description: string;
};

export const CITY_PAGES: CityPage[] = CITY_PAGE_DATA.map((c) => ({
  slug: c.slug,
  name: c.name,
  distance: c.distance,
  description: c.description,
}));

export function findService(slug: string) {
  return SERVICE_PAGES.find((page) => page.slug === slug);
}

export function findCity(slug: string) {
  return CITY_PAGES.find((page) => page.slug === slug);
}
