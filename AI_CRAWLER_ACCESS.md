# AI / Search Crawler Access

Zorex AI intentionally keeps its public corporate content crawlable for search engines and major AI/search crawlers.

## Current policy

`app/robots.ts` allows:

- Googlebot and Googlebot-Image
- Google-Extended
- OpenAI OAI-SearchBot, ChatGPT-User, GPTBot, and OAI-AdsBot
- Anthropic Claude-SearchBot, Claude-User, and ClaudeBot
- PerplexityBot and Perplexity-User
- all other crawlers via the wildcard `*` rule

The site does **not** rely on a special `llms.txt` or other AI-specific discovery file for Google. Google states that generative-AI search visibility is still grounded in normal Search indexing, crawlability, useful content, and technical SEO.

## Important deployment requirement

Robots.txt alone is not enough. The deployed site and its CDN/WAF must also return successful responses to legitimate crawlers. Avoid:

- CAPTCHA or browser challenges on public pages
- authentication on public marketing pages
- geo-blocking that affects legitimate crawler traffic
- bot rules that return 403/429 to search crawlers
- JavaScript-only rendering for core page content
- accidental `noindex` directives on public pages

OpenAI specifically recommends ensuring OAI-SearchBot can pass both robots.txt and infrastructure/bot-mitigation layers. Perplexity and Anthropic likewise document their crawler access controls through robots.txt.

## Verification after deployment

Check these URLs:

- `https://zorex.ai/robots.txt`
- `https://zorex.ai/sitemap.xml`
- `https://zorex.ai/`
- `https://zorex.ai/services`
- `https://zorex.ai/blog`

For each public page verify:

1. HTTP 200
2. Server-rendered HTML contains the main content
3. Canonical points to the public HTTPS URL
4. No unintended `noindex`
5. Internal links resolve without `.html`
6. Sitemap contains the canonical URL

Use Google Search Console, Bing Webmaster Tools, and the relevant AI/search crawler documentation to monitor discovery and access after launch.
