# Production validation

Run in CI and before deployment:

```bash
npm ci
npm run lint
npm run typecheck
npm run build
npm start
```

Then run browser-based Lighthouse/Accessibility checks against the production build.

## Required checks

- No TypeScript errors
- No ESLint errors/warnings treated as acceptable without review
- Production build succeeds
- All internal routes return 200
- Unknown routes return the custom 404
- Sitemap contains every indexable route exactly once
- Robots references the canonical sitemap
- Canonical tags use the production domain
- Open Graph metadata resolves correctly
- Images have meaningful alt text or are explicitly decorative
- Keyboard navigation works through the full header and forms
- Mobile navigation opens, closes with Escape, and restores focus
- Forms expose labels, browser autocomplete, and accessible validation states
- Core Web Vitals are checked on a production deployment
