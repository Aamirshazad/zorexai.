import Script from 'next/script';
import {
  DEFAULT_LOGO,
  getBreadcrumbItems,
  getCanonicalUrl,
  getPageKind,
  SITE_NAME,
  SITE_URL,
  type PageMeta,
} from '@/lib/site-data';

const organization = {
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: SITE_NAME,
  alternateName: 'Zorex',
  url: SITE_URL,
  logo: `${SITE_URL}${DEFAULT_LOGO}`,
  sameAs: ['https://www.linkedin.com/company/zorex-ai'],
};

const website = {
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE_NAME,
  alternateName: 'Zorex',
  publisher: { '@id': `${SITE_URL}/#organization` },
  inLanguage: 'en-US',
};

function toAbsoluteImage(value?: string) {
  if (!value) return `${SITE_URL}/og-default.jpg`;
  return value.startsWith('http') ? value : `${SITE_URL}${value.startsWith('/') ? value : `/${value}`}`;
}

function webPageEntity(page: PageMeta) {
  const url = getCanonicalUrl(page.route);
  const kind = page.kind ?? getPageKind(page.route);
  const type = kind === 'about' ? 'AboutPage' : kind === 'contact' ? 'ContactPage' : kind === 'blog' || kind === 'services' || kind === 'industries' || kind === 'case-studies' ? 'CollectionPage' : 'WebPage';
  const entity: Record<string, unknown> = {
    '@type': type,
    '@id': `${url}#webpage`,
    url,
    name: page.title,
    description: page.description,
    isPartOf: { '@id': `${SITE_URL}/#website` },
    inLanguage: 'en-US',
  };

  return entity;
}

function contentEntity(page: PageMeta) {
  const kind = page.kind ?? getPageKind(page.route);
  const url = getCanonicalUrl(page.route);

  if (kind === 'article') {
    return {
      '@type': 'BlogPosting',
      '@id': `${url}#article`,
      headline: page.title,
      description: page.description,
      image: [toAbsoluteImage(page.ogImage)],
      mainEntityOfPage: { '@id': `${url}#webpage` },
      datePublished: page.publishedAt,
      ...(page.author ? { author: { '@type': 'Person', name: page.author } } : { author: { '@id': `${SITE_URL}/#organization` } }),
      publisher: { '@id': `${SITE_URL}/#organization` },
      inLanguage: 'en-US',
    };
  }

  if (kind === 'service') {
    return {
      '@type': 'Service',
      '@id': `${url}#service`,
      name: page.title.replace(/\s*\|.*$/i, ''),
      description: page.description,
      provider: { '@id': `${SITE_URL}/#organization` },
      mainEntityOfPage: { '@id': `${url}#webpage` },
      serviceType: page.title.replace(/\s*\|.*$/i, ''),
    };
  }

  if (kind === 'industry') {
    return {
      '@type': 'WebPage',
      '@id': `${url}#industry-page`,
      url,
      name: page.title,
      description: page.description,
      about: {
        '@type': 'Thing',
        name: page.title.replace(/^AI for\s+/i, '').replace(/\s*\|.*$/i, ''),
      },
      mainEntityOfPage: { '@id': `${url}#webpage` },
      isPartOf: { '@id': `${SITE_URL}/#website` },
      inLanguage: 'en-US',
    };
  }

  if (kind === 'case-study') {
    return {
      '@type': 'Article',
      '@id': `${url}#article`,
      headline: page.title,
      description: page.description,
      image: [toAbsoluteImage(page.ogImage)],
      mainEntityOfPage: { '@id': `${url}#webpage` },
      publisher: { '@id': `${SITE_URL}/#organization` },
      inLanguage: 'en-US',
    };
  }

  return null;
}

function buildGraph(page: PageMeta) {
  const graph: Record<string, unknown>[] = [organization, website, webPageEntity(page)];
  const content = contentEntity(page);
  if (content) graph.push(content);

  const kind = page.kind ?? getPageKind(page.route);
  if (kind === 'service' || kind === 'industry') {
    const breadcrumbItems = getBreadcrumbItems(page.route);
    if (breadcrumbItems.length >= 2) {
      graph.push({
        '@type': 'BreadcrumbList',
        '@id': `${getCanonicalUrl(page.route)}#breadcrumb`,
        itemListElement: breadcrumbItems.map((item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item.name,
          item: item.url,
        })),
      });
    }
  }

  return { '@context': 'https://schema.org', '@graph': graph };
}

export function StructuredData({ page }: { page: PageMeta }) {
  return (
    <Script id={`zorex-structured-data-${page.route || 'home'}`} type="application/ld+json">
      {JSON.stringify(buildGraph(page))}
    </Script>
  );
}
