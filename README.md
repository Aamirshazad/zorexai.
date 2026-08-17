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
npm run lint
npm run typecheck
npm run build
```

Or run the full production gate:

```bash
npm run check
```

## Deployment

The project is ready for Vercel or another Node.js-compatible Next.js host. Build with `npm run build` and serve with `npm run start`.

Before production deployment, run the full quality gate and perform Lighthouse/PageSpeed and real-device responsive QA.

## Content authority layer

- `content/authority.ts` stores article-level topic relationships and buyer questions.
- `components/content/article-authority.tsx` renders practical takeaways, questions, relevant capabilities, and related reading.
- `components/content/business-ai-faq.tsx` provides visible buying guidance on the Services page.
- `CONTENT_AUTHORITY_IMPLEMENTATION.md` documents the editorial and linking standards for future content.

## Search and AI crawler readiness

The public site is intentionally crawlable for Google Search and major AI/search crawlers. See `AI_CRAWLER_ACCESS.md` for the crawler policy and post-deployment verification checklist.
