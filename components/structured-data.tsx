import {
  DEFAULT_LOGO,
  getBreadcrumbItems,
  getCanonicalUrl,
  getPageKind,
  SITE_NAME,
  SITE_URL,
  type PageMeta,
} from '@/lib/site-data';
import { company } from '@/content/company';
import { buyingFaq, generalFaq } from '@/content/faqs';
import { services } from '@/content/services';

/**
 * Pages that carry an FAQ block, mapped to the exact array that renders it.
 * The schema is generated from the same array the page renders, so a question
 * cannot exist in the markup without existing on the page — which is the
 * condition Google checks before it will show FAQ rich results.
 */
const FAQ_BY_ROUTE: Record<string, { question: string; answer: string }[]> = {
  faq: generalFaq,
  services: buyingFaq,
};

/**
 * What the organisation actually does, as machine-readable offers.
 *
 * Derived from the single services array rather than hand-typed, so the schema
 * cannot name a service the site does not have (or forget one it does).
 */
const serviceOffer = services.map((service) => ({
  '@type': 'Offer',
  itemOffered: {
    '@type': 'Service',
    name: service.name,
    description: service.oneLine,
    url: `${SITE_URL}${service.href}`,
  },
}));

const organization = {
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: SITE_NAME,
  alternateName: 'Zorex',
  // Description first, in one sentence, because that is the line answer engines
  // read to decide what this entity is.
  description: company.description,
  disambiguatingDescription: company.positioning,
  url: SITE_URL,
  logo: `${SITE_URL}${DEFAULT_LOGO}`,
  email: company.email,
  foundingDate: String(company.foundedYear),
  numberOfEmployees: { '@type': 'QuantitativeValue', value: company.headcount },
  knowsAbout: services.map((service) => service.name),
  areaServed: 'Worldwide',
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'sales',
      email: company.email,
      availableLanguage: ['en'],
    },
  ],
  sameAs: [company.linkedin, 'https://www.linkedin.com/company/zorex-ai'],
  // What the organisation sells, as offers. Sourced from content/services.ts.
  makesOffer: serviceOffer,
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
      ...(page.author ? { author: { '@type': 'Organization', name: page.author } } : { author: { '@id': `${SITE_URL}/#organization` } }),
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

  // Breadcrumbs on every page that has a parent. This was previously limited to
  // service and industry pages, so the 4 hub pages and 8 case studies and
  // articles published a trail the pages themselves never showed.
  const breadcrumb = breadcrumbEntity(page);
  if (breadcrumb) graph.push(breadcrumb);

  // FAQPage, only where the page actually renders those questions.
  const faq = faqEntity(page);
  if (faq) graph.push(faq);

  return { '@context': 'https://schema.org', '@graph': graph };
}

function breadcrumbEntity(page: PageMeta) {
  const items = getBreadcrumbItems(page.route);
  if (items.length < 2) return null;

  return {
    '@type': 'BreadcrumbList',
    '@id': `${getCanonicalUrl(page.route)}#breadcrumb`,
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

function faqEntity(page: PageMeta) {
  const questions = FAQ_BY_ROUTE[page.route];
  if (!questions?.length) return null;

  return {
    '@type': 'FAQPage',
    '@id': `${getCanonicalUrl(page.route)}#faq`,
    mainEntity: questions.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };
}

export function StructuredData({ page }: { page: PageMeta }) {
  // Plain inline <script> (not next/script) so the JSON-LD is present in the
  // statically prerendered HTML and visible to crawlers that don't run JS.
  return (
    <script
      id={`zorex-structured-data-${page.route || 'home'}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(buildGraph(page)) }}
    />
  );
}
