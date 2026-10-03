import type { Metadata } from 'next';
import { SITE } from '@/data/site';
import { absoluteUrl } from './urls';

type PageMetadataInput = {
  title?: string;
  description?: string;
  path?: string;
  authorName?: string;
  category?: string;
  image?: string;
  imageWidth?: number;
  imageHeight?: number;
  imageAlt?: string;
  noIndex?: boolean;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
};

export function createMetadata({
  title = SITE.title,
  description = SITE.description,
  path = '/',
  authorName = SITE.legalName,
  category = 'home remodeling',
  image = SITE.socialImage,
  imageWidth = 1200,
  imageHeight = 630,
  imageAlt = SITE.legalName,
  noIndex = false,
  type = 'website',
  publishedTime,
  modifiedTime,
}: PageMetadataInput = {}): Metadata {
  const resolvedTitle = title === SITE.title ? title : `${title} | ${SITE.name}`;
  const resolvedImage = image.startsWith('http') ? image : absoluteUrl(image);

  return {
    metadataBase: new URL(SITE.url),
    title: resolvedTitle,
    description,
    alternates: {
      canonical: absoluteUrl(path),
    },
    applicationName: SITE.legalName,
    authors: [{ name: authorName, url: SITE.url }],
    creator: SITE.legalName,
    publisher: SITE.legalName,
    category,
    robots: noIndex
      ? { index: false, follow: false, googleBot: { index: false, follow: false } }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            'max-image-preview': 'large',
            'max-snippet': -1,
            'max-video-preview': -1,
          },
        },
    openGraph: {
      title: resolvedTitle,
      description,
      url: absoluteUrl(path),
      siteName: SITE.name,
      type,
      locale: SITE.locale,
      images: [{ url: resolvedImage, width: imageWidth, height: imageHeight, alt: imageAlt }],
      publishedTime,
      modifiedTime,
    },
    twitter: {
      card: 'summary_large_image',
      title: resolvedTitle,
      description,
      images: [{ url: resolvedImage, alt: imageAlt }],
    },
  };
}
