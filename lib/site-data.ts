import manifest from '@/content/manifest.json';

export const SITE_URL = 'https://zorex.ai';
export const SITE_NAME = 'Zorex AI';
export const DEFAULT_DESCRIPTION =
  'Zorex AI builds business-specific AI systems that automate workflows, improve execution, and create operational capacity.';
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
