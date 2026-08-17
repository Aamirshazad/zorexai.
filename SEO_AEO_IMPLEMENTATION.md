# Zorex AI — SEO & AI Search Readiness Implementation

## Source of truth
This pass follows the supplied Google Search guidance. The implementation treats AEO/GEO as part of strong SEO and does not add unsupported AI-specific markup or tactics.

## Implemented
- Unique page titles and descriptions for all 33 indexable routes.
- One canonical URL source shared by page metadata and sitemap.
- Native Next.js sitemap and robots routes.
- Removed empty `llms.txt`/`llms-full.txt` artifacts.
- Consistent `WebSite` and `Organization` structured data.
- Added page-level `WebPage`/`AboutPage`/`ContactPage`/`CollectionPage` entities where appropriate.
- Added `BlogPosting` structured data with visible publication dates/authors for blog articles.
- Added `Service` structured data for individual service pages.
- Added breadcrumb structured data only to service/industry pages that already expose visible breadcrumb navigation.
- Added a crawlable 512px organization logo asset and favicon metadata.
- Reworked metadata toward natural, intent-aligned descriptions instead of repeated boilerplate.
- Preserved semantic heading structure and fixed the About page missing H1.
- Removed stale `.html`, legacy image, and duplicate SEO artifacts.

## Deliberately not implemented
- No fake “AEO” markup.
- No meta-keywords.
- No keyword-stuffed pages.
- No one-page-per-query fan-out strategy.
- No FAQ schema merely for ranking manipulation.
- No unsupported entity/contact data.

## Post-deployment actions
1. Verify the production domain in Google Search Console.
2. Submit `https://zorex.ai/sitemap.xml`.
3. Inspect the homepage, one service page, one industry page, and one article in URL Inspection.
4. Run the Rich Results Test for Organization, WebSite, Service, and Article markup.
5. Review Search Console’s generative AI performance reporting when available for the property.
6. Measure real-user Core Web Vitals and crawl/indexing status after deployment.

## Validation note
The project source was statically validated in this environment. A full production `npm ci` / `next build` still requires dependency installation in an environment with npm registry access.
