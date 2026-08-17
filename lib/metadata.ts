import type { Metadata } from 'next';
import {
  DEFAULT_OG_IMAGE,
  getCanonicalUrl,
  getPageKind,
  SITE_NAME,
  SITE_URL,
  type PageMeta,
} from '@/lib/site-data';

function cleanTitle(title: string) {
  return title.replace(/\s*\|\s*Zorex(?: AI)?\s*$/i, '');
}

function absoluteUrl(value: string) {
  return value.startsWith('http') ? value : `${SITE_URL}${value.startsWith('/') ? value : `/${value}`}`;
}

export function createPageMetadata(page: PageMeta): Metadata {
  const canonical = getCanonicalUrl(page.route);
  const title = cleanTitle(page.title);
  const ogImage = absoluteUrl(page.ogImage || DEFAULT_OG_IMAGE);
  const kind = page.kind ?? getPageKind(page.route);
  const noIndex = kind === 'legal';

  return {
    title,
    description: page.description,
    alternates: { canonical },
    robots: noIndex
      ? {
          index: false,
          follow: true,
        }
      : {
          index: true,
          follow: true,
          maxSnippet: -1,
          maxImagePreview: 'large',
          maxVideoPreview: -1,
          googleBot: {
            index: true,
            follow: true,
            maxSnippet: -1,
            maxImagePreview: 'large',
            maxVideoPreview: -1,
          },
        },
    openGraph: {
      title,
      description: page.description,
      type: kind === 'article' || kind === 'case-study' ? 'article' : 'website',
      url: canonical,
      siteName: SITE_NAME,
      locale: 'en_US',
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
      ...(kind === 'article' && page.publishedAt
        ? { publishedTime: page.publishedAt, authors: page.author ? [page.author] : undefined }
        : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: page.description,
      images: [ogImage],
    },
  };
}
