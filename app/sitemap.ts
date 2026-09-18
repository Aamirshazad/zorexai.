import type { MetadataRoute } from 'next';
import { getCanonicalUrl, getPageKind, pages } from '@/lib/site-data';

/**
 * XML sitemap.
 *
 * Rules applied here:
 *   - `noindex` pages (the legal set) are excluded. Submitting a URL that is
 *     marked noindex produces a "Submitted URL marked noindex" error in Search
 *     Console — the two signals must agree.
 *   - `lastModified` is emitted for dated content so crawlers and AI answer
 *     engines can judge freshness without re-fetching every page.
 *   - `changeFrequency` and `priority` reflect how often each page kind is
 *     expected to change, which gives the four hub pages their correct weight.
 *
 * Legal pages keep `index: false` in lib/metadata.ts, so exclude + noindex stay
 * consistent by construction rather than by convention.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return pages
    .filter((page) => getPageKind(page.route) !== 'legal')
    .map((page) => {
      const kind = getPageKind(page.route);

      const changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'] =
        kind === 'home'
          ? 'weekly'
          : kind === 'blog' || kind === 'case-studies' || kind === 'services' || kind === 'industries'
            ? 'weekly'
            : kind === 'article'
              ? 'monthly'
              : 'monthly';

      const priority = kind === 'home' ? 1 : kind === 'services' || kind === 'case-studies' ? 0.9 : 0.7;

      return {
        url: getCanonicalUrl(page.route),
        // Dated articles report their own publish date; everything else reports
        // the build time, which is when its copy was last reviewed.
        lastModified: page.publishedAt ? new Date(page.publishedAt) : now,
        changeFrequency,
        priority,
      };
    });
}
