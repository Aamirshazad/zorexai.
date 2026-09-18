# Zorex AI — Corporate Website

Production-oriented Next.js App Router implementation for the Zorex AI corporate website.

## Stack

- Next.js 16.2.11
- React 19.2.3
- TypeScript
- Tailwind CSS 4
- Lucide React 1.28.0
- Next Image / next/font

## Architecture

- App Router with static generation for the complete corporate route set.
- Shared header/footer and reusable UI primitives.
- Route metadata is generated from `content/manifest.json`.
- Page bodies are compiled into React components under `components/pages/`.
- Business-page content is not loaded from HTML files at runtime.
- `app/sitemap.ts` and `app/robots.ts` provide the SEO discovery layer.
- `components/structured-data.tsx` provides Organization/WebSite JSON-LD.

## Development

```bash
npm install
npm run dev
```

## Quality checks

```bash
npm run copy       # copy and consistency guard
npm run lint
npm run typecheck
npm run build
```

Or run the full production gate:

```bash
npm run check      # copy + lint + typecheck + build
```

`npm run copy` runs `scripts/check-copy.cjs`, which fails the build on:

- known clause-jams left behind by a bulk em-dash removal,
- sentence segments over 32 words with no internal punctuation,
- facts that must be authored in exactly one place (for example, duration
  chips must read `company.callLength`, never a retyped literal).

## Deployment

The project is ready for Vercel or another Node.js-compatible Next.js host. Build with `npm run build` and serve with `npm run start`.

Before production deployment, run the full quality gate and perform Lighthouse/PageSpeed and real-device responsive QA.

## Content authority layer

- `content/authority.ts` is the single source for article-level takeaways, buyer questions, capability links, and related reading. Add new articles here rather than in the page component.
- `components/content/article-authority.tsx` renders that data as practical takeaways, questions, relevant capabilities, and related reading.
- `content/faqs.ts` holds both question sets: `generalFaq` for `/faq` and `buyingFaq` for the buying-guidance block on `/services`. The two sets deliberately do not share questions, and `components/structured-data.tsx` emits FAQPage schema from the same arrays.
- `components/content/business-ai-faq.tsx` renders the buying guidance on the Services page.

Editorial rules for the layer, enforced where possible by `npm run copy`:

- One page owns one answer. Do not duplicate a question across pages.
- Every answer names its subject in the first sentence, so an answer engine can lift it without the question attached.

## Search and AI crawler readiness

The public site is intentionally crawlable for Google Search and major AI/search crawlers.

- `app/robots.ts` is the crawler policy: a broad `*` rule plus explicit `allow` entries for Googlebot/Google-Extended, the OpenAI agents (OAI-SearchBot, ChatGPT-User, GPTBot, OAI-AdsBot), the Anthropic agents (Claude-SearchBot, Claude-User, ClaudeBot), and Perplexity.
- `app/sitemap.ts` generates the sitemap from `content/manifest.json` and excludes the `noindex` legal pages, so the sitemap and the page metadata never disagree.
- `components/structured-data.tsx` emits Organization, WebSite, BreadcrumbList, and FAQPage JSON-LD.

Post-deployment verification: confirm `SITE_URL` matches the final production origin, then check `/robots.txt` and `/sitemap.xml` on that origin, and submit the sitemap in Search Console.
