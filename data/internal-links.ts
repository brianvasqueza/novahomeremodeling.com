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

const SERVICE_GUIDE_LINKS: Record<string, InternalLink[]> = {
  'kitchen-remodeling': [
    {
      href: '/blog/kitchen-remodel-cost-houston',
      label: 'Kitchen remodel cost guide',
      description: 'Budget ranges, cost drivers, and Houston-specific planning notes for kitchen remodels.',
    },
    {
      href: '/blog/open-concept-remodeling-ideas',
      label: 'Open concept remodeling ideas',
      description: 'What to know before opening walls between the kitchen, dining, and living areas.',
    },
    {
      href: '/blog/best-flooring-options-texas-homes',
      label: 'Flooring options for Texas homes',
      description: 'A practical comparison of LVP, tile, hardwood, carpet, and concrete for Houston homes.',
    },
  ],
  'bathroom-remodeling': [
    {
      href: '/blog/how-long-does-bathroom-remodel-take',
      label: 'Bathroom remodel timeline guide',
      description: 'A phase-by-phase look at bathroom remodel timelines, delays, and planning decisions.',
    },
    {
      href: '/blog/best-flooring-options-texas-homes',
      label: 'Flooring options for Texas homes',
      description: 'Moisture, slab, and humidity considerations for flooring in Houston homes.',
    },
  ],
  flooring: [
    {
      href: '/blog/best-flooring-options-texas-homes',
      label: 'Best flooring options for Texas homes',
      description: 'Compare flooring materials for Houston humidity, slab foundations, and everyday traffic.',
    },
    {
      href: '/blog/kitchen-remodel-cost-houston',
      label: 'Kitchen remodel cost guide',
      description: 'Understand how flooring fits into a larger kitchen remodeling budget.',
    },
    {
      href: '/blog/how-long-does-bathroom-remodel-take',
      label: 'Bathroom remodel timeline guide',
      description: 'See where bathroom tile and flooring fit into the remodel sequence.',
    },
  ],
  'home-renovations': [
    {
      href: '/blog/open-concept-remodeling-ideas',
      label: 'Open concept remodeling ideas',
      description: 'Structural, cost, and design considerations for opening up older Houston layouts.',
    },
    {
      href: '/blog/best-flooring-options-texas-homes',
      label: 'Flooring options for Texas homes',
      description: 'Material guidance for whole-home flooring decisions in Houston-area remodels.',
    },
    {
      href: '/blog/kitchen-remodel-cost-houston',
      label: 'Kitchen remodel cost guide',
      description: 'A realistic cost primer for one of the largest scopes in a whole-home remodel.',
    },
  ],
  'beam-installation': [
    {
      href: '/blog/open-concept-remodeling-ideas',
      label: 'Open concept remodeling ideas',
      description: 'How beams, posts, permits, and finish work shape an open-concept remodel.',
    },
  ],
  framing: [
    {
      href: '/blog/open-concept-remodeling-ideas',
      label: 'Open concept remodeling ideas',
      description: 'Planning notes for wall removal, structural framing, and layout changes.',
    },
  ],
};

export function getServiceGuideLinks(service: ServicePageData): InternalLink[] {
  return SERVICE_GUIDE_LINKS[service.slug] ?? [];
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
