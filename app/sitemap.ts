import type { MetadataRoute } from 'next';
import { getCanonicalUrl, getPageKind, pages } from '@/lib/site-data';

export default function sitemap(): MetadataRoute.Sitemap {
  return pages
    .filter((page) => getPageKind(page.route) !== 'legal')
    .map((page) => ({
      url: getCanonicalUrl(page.route),
    }));
}
