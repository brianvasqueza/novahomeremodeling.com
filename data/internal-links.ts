import { CITY_PAGE_DATA } from './cities';
import { SERVICE_PAGE_DATA, type ServicePageData } from './service-pages';

export type InternalLink = {
  href: string;
  label: string;
  description: string;
};

const PRIORITY_CITY_SLUGS = [
  'houston',
  'katy',
  'sugar-land',
  'cypress',
  'pearland',
  'the-woodlands',
];

export function getServiceAreaLinks(service: ServicePageData): InternalLink[] {
  const selectedCities = CITY_PAGE_DATA.filter((city) => {
    if (city.featuredServices.includes(service.slug)) return true;
    return PRIORITY_CITY_SLUGS.includes(city.slug) && service.category === 'whole-home';
  }).slice(0, 6);

  return selectedCities.map((city) => ({
    href: `/cities/${city.slug}`,
    label: `${city.name} remodeling`,
    description: city.character,
  }));
}

export function getCityServiceLinks(citySlug: string): InternalLink[] {
  const city = CITY_PAGE_DATA.find((item) => item.slug === citySlug);
  if (!city) return [];

  return city.featuredServices
    .map((slug) => SERVICE_PAGE_DATA.find((service) => service.slug === slug))
    .filter((service): service is ServicePageData => Boolean(service))
    .map((service) => ({
      href: `/services/${service.slug}`,
      label: service.title,
      description: service.tagline,
    }));
}

export function getNearbyCityLinks(currentSlug: string): InternalLink[] {
  return CITY_PAGE_DATA.filter((city) => city.slug !== currentSlug)
    .slice(0, 6)
    .map((city) => ({
      href: `/cities/${city.slug}`,
      label: city.name,
      description: city.character,
    }));
}

export const PRIMARY_INTERNAL_LINKS: InternalLink[] = [
  {
    href: '/services',
    label: 'Services',
    description: 'The core remodeling services Nova takes on across the Houston area.',
  },
  {
    href: '/cities',
    label: 'Service areas',
    description: 'Houston and surrounding communities where the crew regularly works.',
  },
  {
    href: '/blog',
    label: 'Remodeling journal',
    description: 'A future-ready publishing home for process, planning, material, and local guidance.',
  },
];
