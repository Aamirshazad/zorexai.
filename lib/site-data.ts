import manifest from '@/content/manifest.json';

/**
 * Canonical origin for every absolute URL the site emits (canonicals, OG tags,
 * sitemap, robots, JSON-LD).
 *
 * Set `NEXT_PUBLIC_SITE_URL` in the hosting environment to the FINAL production
 * origin — the one that serves this app directly, with no redirect hop. Never
 * let this point at a domain that redirects elsewhere: a canonical that lands on
 * a different origin is worse than no canonical at all.
 *
 * The fallback is the current deployment origin so preview builds stay
 * self-consistent instead of advertising someone else's domain.
 */
const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

export const SITE_URL = (configuredSiteUrl && configuredSiteUrl.length > 0
  ? configuredSiteUrl
  : 'https://zorexai-ten.vercel.app'
).replace(/\/+$/, '');

export const SITE_NAME = 'Zorex AI';
export const DEFAULT_DESCRIPTION =
  'Zorex AI is an AI software company that designs, builds, deploys, and continuously improves AI-powered systems, agentic systems, and AI integrated with existing systems for real business functions.';
export const DEFAULT_OG_IMAGE = '/og-default.jpg';
export const DEFAULT_LOGO = '/zorex-logo.png';

export type PageKind =
  | 'home'
  | 'about'
  | 'contact'
  | 'services'
  | 'service'
  | 'industries'
  | 'industry'
  | 'process'
  | 'case-studies'
  | 'case-study'
  | 'blog'
  | 'article'
  | 'faq'
  | 'security'
  | 'legal';

export type PageMeta = {
  route: string;
  title: string;
  description: string;
  ogImage?: string;
  kind?: PageKind;
  section?: string;
  publishedAt?: string;
  author?: string;
};

const manifestPages = manifest as PageMeta[];

export const pages = manifestPages.filter((page) => page.route !== '404');
export const pageByRoute = new Map(pages.map((page) => [page.route, page]));

export function getCanonicalUrl(route: string): string {
  return route ? `${SITE_URL}/${route}` : `${SITE_URL}/`;
}

export function getPageKind(route: string): PageKind {
  if (!route) return 'home';
  if (route === 'about') return 'about';
  if (route === 'contact') return 'contact';
  if (route === 'services') return 'services';
  if (route.startsWith('service-')) return 'service';
  if (route === 'industries') return 'industries';
  if (route.startsWith('industry-')) return 'industry';
  if (route === 'process') return 'process';
  if (route === 'case-studies') return 'case-studies';
  if (route.startsWith('case-study-')) return 'case-study';
  if (route === 'blog') return 'blog';
  if (route === 'faq') return 'faq';
  if (route === 'security') return 'security';
  if (route.startsWith('blog-')) return 'article';
  if (route === 'privacy' || route === 'terms') return 'legal';
  return 'legal';
}

export function getPageMeta(route: string): PageMeta | undefined {
  const page = pageByRoute.get(route);
  if (!page) return undefined;
  return {
    ...page,
    kind: page.kind ?? getPageKind(route),
  };
}

export function getBreadcrumbItems(route: string) {
  if (!route) return [];
  const page = getPageMeta(route);
  if (!page) return [];

  const items = [{ name: 'Home', url: `${SITE_URL}/` }];
  const kind = page.kind;

  if (kind === 'service') {
    items.push({ name: 'Solutions', url: `${SITE_URL}/services` });
  }
  if (kind === 'industry') {
    items.push({ name: 'Industries', url: `${SITE_URL}/industries` });
  }
  if (kind === 'case-study') {
    items.push({ name: 'Examples', url: `${SITE_URL}/case-studies` });
  }
  if (kind === 'article') {
    items.push({ name: 'Insights', url: `${SITE_URL}/blog` });
  }

  items.push({ name: page.title.split(' | ')[0], url: getCanonicalUrl(route) });
  return items;
}

/**
 * The same trail as `getBreadcrumbItems`, but with root-relative `href` values
 * so the visible component can hand them straight to next/link.
 *
 * Both functions read the same parent map below, so the trail a person sees and
 * the trail a crawler reads can never disagree.
 */
const PARENT_BY_KIND: Partial<Record<PageKind, { name: string; href: string }>> = {
  service: { name: 'Solutions', href: '/services' },
  industry: { name: 'Industries', href: '/industries' },
  'case-study': { name: 'Examples', href: '/case-studies' },
  article: { name: 'Insights', href: '/blog' },
};

export function getBreadcrumbTrail(route: string): { name: string; href: string; current?: boolean }[] {
  if (!route) return [];
  const page = getPageMeta(route);
  if (!page) return [];

  const kind = page.kind ?? getPageKind(route);
  const trail: { name: string; href: string; current?: boolean }[] = [{ name: 'Home', href: '/' }];

  const parent = PARENT_BY_KIND[kind];
  if (parent) trail.push({ name: parent.name, href: parent.href });

  // The final crumb is the page's own short title. Hub pages render a single
  // "Home / Services" trail rather than a self-referential label repeated twice.
  const isHub = page.route === 'services' || page.route === 'industries' || page.route === 'case-studies' || page.route === 'blog';
  trail.push({ name: isHub ? page.title.split(' | ')[0] : shortenCrumb(page.title), href: `/${page.route}`, current: true });

  return trail;
}

/** Breadcrumb labels should read as page names, not as 80-character headlines. */
function shortenCrumb(title: string): string {
  const head = title.split(' | ')[0];
  if (head.length <= 42) return head;
  const cut = head.slice(0, 42);
  const lastSpace = cut.lastIndexOf(' ');
  return `${(lastSpace > 24 ? cut.slice(0, lastSpace) : cut).trim()}…`;
}
