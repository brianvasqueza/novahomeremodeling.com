import { SITE } from '@/data/site';
import type { BlogPost } from '@/data/blog';
import type { CityPageData } from '@/data/cities';
import type { ServiceLandingContent } from '@/data/service-landing';
import type { ServicePageData } from '@/data/service-pages';
import { absoluteUrl, blogUrl, cityUrl, serviceUrl } from './urls';

export type BreadcrumbItem = {
  name: string;
  href: string;
};

export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    '@id': absoluteUrl('/#business'),
    name: SITE.legalName,
    url: SITE.url,
    image: absoluteUrl(SITE.socialImage),
    email: SITE.email,
    telephone: SITE.phone,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: SITE.phone,
      email: SITE.email,
      contactType: 'customer service',
      areaServed: 'Houston, TX',
      availableLanguage: ['English', 'Spanish'],
    },
    priceRange: '$$$',
    slogan: SITE.shortDescription,
    foundingDate: '2009',
    knowsAbout: [
      'Houston home remodeling',
      'Kitchen remodeling',
      'Bathroom remodeling',
      'Interior painting',
      'Exterior painting',
      'Drywall repair',
      'Flooring installation',
      'Whole-home renovations',
      'Custom carpentry',
      'Houston residential remodeling',
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: SITE.city,
      addressRegion: SITE.region,
      addressCountry: 'US',
    },
    openingHours: SITE.openingHours,
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '07:00',
        closes: '19:00',
      },
    ],
    areaServed: SITE.serviceArea.map((name) => ({
      '@type': 'City',
      name,
      containedInPlace: {
        '@type': 'State',
        name: 'Texas',
      },
    })),
    makesOffer: {
      '@type': 'OfferCatalog',
      name: 'Residential remodeling services',
      itemListElement: [
        'Kitchen remodeling',
        'Bathroom remodeling',
        'Interior painting',
        'Exterior painting',
        'Drywall repair',
        'Flooring installation',
        'Whole-home renovations',
        'Custom carpentry',
      ].map((name) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name,
        },
      })),
    },
  };
}

export function websiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': absoluteUrl('/#website'),
    name: SITE.legalName,
    url: SITE.url,
    publisher: { '@id': absoluteUrl('/#business') },
    inLanguage: 'en-US',
  };
}

export function breadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.href),
    })),
  };
}

export function serviceJsonLd(service: ServicePageData, content?: ServiceLandingContent) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': absoluteUrl(`${serviceUrl(service.slug)}#service`),
    name: service.title,
    description: content?.seoDescription ?? service.description,
    url: absoluteUrl(serviceUrl(service.slug)),
    image: service.heroImage,
    provider: { '@id': absoluteUrl('/#business') },
    mainEntityOfPage: absoluteUrl(serviceUrl(service.slug)),
    areaServed: SITE.serviceArea.map((name) => ({
      '@type': 'City',
      name,
      containedInPlace: {
        '@type': 'State',
        name: 'Texas',
      },
    })),
    audience: {
      '@type': 'Audience',
      audienceType: 'Houston-area homeowners',
    },
    category: 'Residential remodeling',
    serviceType: service.title,
    hasOfferCatalog: content
      ? {
          '@type': 'OfferCatalog',
          name: content.includes.title,
          itemListElement: content.includes.items.map((item) => ({
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: item,
              areaServed: 'Houston, TX',
            },
          })),
        }
      : undefined,
  };
}

export function serviceWebPageJsonLd(service: ServicePageData, content: ServiceLandingContent) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': absoluteUrl(`${serviceUrl(service.slug)}#webpage`),
    name: content.heroTitle,
    headline: content.heroTitle,
    description: content.seoDescription,
    url: absoluteUrl(serviceUrl(service.slug)),
    isPartOf: { '@id': absoluteUrl('/#website') },
    about: { '@id': absoluteUrl(`${serviceUrl(service.slug)}#service`) },
    primaryImageOfPage: {
      '@type': 'ImageObject',
      url: service.heroImage,
      caption: content.imageAlt,
    },
    spatialCoverage: {
      '@type': 'City',
      name: 'Houston',
      containedInPlace: {
        '@type': 'State',
        name: 'Texas',
      },
    },
    inLanguage: 'en-US',
  };
}

export function faqJsonLd(service: ServicePageData) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': absoluteUrl(`${serviceUrl(service.slug)}#faq`),
    mainEntity: service.faq.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };
}

export function cityPageJsonLd(city: CityPageData) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': absoluteUrl(`${cityUrl(city.slug)}#webpage`),
    name: `Remodeling in ${city.name}`,
    description: city.description,
    url: absoluteUrl(cityUrl(city.slug)),
    isPartOf: { '@id': absoluteUrl('/#website') },
    about: { '@id': absoluteUrl('/#business') },
    spatialCoverage: {
      '@type': 'City',
      name: city.name,
      containedInPlace: {
        '@type': 'State',
        name: 'Texas',
      },
    },
  };
}

export function blogPostJsonLd(post: BlogPost) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': absoluteUrl(`${blogUrl(post.slug)}#article`),
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    datePublished: post.date,
    dateModified: post.modified ?? post.date,
    author: {
      '@type': 'Organization',
      name: post.author,
    },
    publisher: { '@id': absoluteUrl('/#business') },
    mainEntityOfPage: absoluteUrl(blogUrl(post.slug)),
  };
}

export function collectionPageJsonLd({
  name,
  description,
  path,
  items,
}: {
  name: string;
  description: string;
  path: string;
  items: BreadcrumbItem[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': absoluteUrl(`${path}#webpage`),
    name,
    description,
    url: absoluteUrl(path),
    isPartOf: { '@id': absoluteUrl('/#website') },
    about: { '@id': absoluteUrl('/#business') },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        url: absoluteUrl(item.href),
      })),
    },
  };
}
