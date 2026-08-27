# Implementation Plan: Zorex AI Website — Audit Remediation

## Overview

Systematic, page-by-page implementation of the approved website audit, with the user's positioning
modifications applied. The audit is the strategic reference; this plan translates it into concrete,
verifiable tasks. No redesign of the visual system, no new strategy — the existing design tokens,
layout patterns, and page architecture are kept. Work is copy, structure, honesty, consistency, and
broken-functionality fixes.

**User-approved positioning (overrides the audit where they conflict):**

1. Zorex AI is an **AI software company** that designs, builds, deploys, and continuously improves
   AI-powered systems, AI agentic systems, and AI integrated with existing systems, for real
   business functions. (NOT the audit's "Vertical AI Systems company" contraction.)
2. Stay **broad** — do not contract to a single e-commerce vertical; do not look like an
   e-commerce agency.
3. **Standard heading hierarchy** answering the visitor's questions in order: who we are → what we
   do → how we work → what you get → proof → trust.
4. **Neutral tone**: less business jargon, fewer hard statistics ("you get 30%", time claims).
   Blend business and technical slightly. Do not invent replacement statistics.
5. Planning and task breakdown first (this document), then implementation.

## Architecture Decisions

- **Keep the existing tech stack and design system** (Next.js App Router, Tailwind 4 tokens, reveal
  animations, Manrope). Changes are content/structure-level inside existing components.
- **Single source of positioning copy**: the canonical positioning sentence lives in
  `lib/site-data.ts` (DEFAULT_DESCRIPTION) and is mirrored consistently in hero, about, footer, and
  metadata. All pages use the same three-service taxonomy: AI Agentic Systems, AI Integration,
  Vertical AI Systems (kept as a service offering name, not as the company identity).
- **Claims policy (from audit P0-1 + user's neutral-tone instruction)**: remove unverifiable
  numbers and absolutes ("scales infinitely", "98%+ accuracy", "100% regulatory coverage",
  "$2.4M", "+400%", "30% more closed deals", unattributed stat strips). Replace with neutral,
  honest capability language. Never invent new statistics. Where a number is a genuine engagement
  fact the user can verify later, mark it in Open Questions instead of keeping it live.
- **Case studies become honest**: reframe as illustrative/representative examples with a visible
  disclaimer, remove fabricated specifics (fictional employee names, invented company financials,
  stock photos captioned as real dashboards), and fix internal name inconsistencies.
- **Compliance claims rewritten as architectural capabilities**: "deployments can be self-hosted,
  VPC, or air-gapped; designed to support SOC 2 / GDPR / HIPAA requirements" — not "compliant /
  pre-compliant / 100% coverage".
- **Domain strategy (needs user decision — see Open Questions)**: canonical `SITE_URL` is
  `https://zorex.ai` but that domain currently serves a parked, noindex Squarespace page while the
  site lives at `zorexai.vercel.app`. Until the user confirms the domain plan, the safe default in
  this plan is to point SITE_URL, emails, and Calendly at consistent, working targets.
- **Calendly**: the inline embed has no loader script anywhere in the repo, so it renders an empty
  700px box. Fix by loading Calendly's official widget script; the personal booking handle
  (`amiralicomsats3`) is flagged for the user to replace with a branded scheduling link.

## Claims Inventory (evidence base)

Unverifiable claims found in source (all to be neutralized per the claims policy):

| Claim | Location |
|---|---|
| "30 days / 60% / 40 hrs/wk / 9+ industries" unattributed stat strip | home.tsx:60-63, services.tsx:35-36, contact.tsx:34-36, process.tsx:35-36 |
| "60% ticket auto-resolution", "3-min avg response", "40-60% cost reduction" | home.tsx:132-134 |
| "30% more closed deals" | home.tsx:144 |
| "20+ hrs/wk reclaimed" | home.tsx:163 |
| "Zorex deploys in 30 days and scales infinitely" | home.tsx:277 |
| "$80K–120K per person per year. 3–6 months to hire." | home.tsx:276 |
| "98%+ accuracy", "10x the volume" | services.tsx:127-128 |
| "98% / 60% / +400% / $2.4M" stat strip + per-card stats | case-studies.tsx:34-37, 59-60, 86-88, 114-116 |
| "97% vs 72%", "3x Faster Time-to-Value", "100% Regulatory Coverage", "pre-compliant with HIPAA, SOC 2, GDPR", Futurum Group citation, fictional CMIO quote, "15-25% misinterpretation" | service-vertical-ai.tsx |
| "Self-hosted, VPC, or air-gapped deployments for SOC2, GDPR, and HIPAA compliance" | process.tsx:168 |
| "-60% / 24/7 / +3x" stats, "response response times" typo | industries.tsx |
| Fictionalized client detail (Austin TX, $47M throughput, 23% error rate, 99.2% test accuracy, stock photo captioned "Live Reporting Dashboard — Post-Implementation") | case-study-novus.tsx, case-study-echocommerce.tsx, case-study-viralgrowth.tsx |

Internal inconsistencies found:

| Inconsistency | Location |
|---|---|
| "Novus Logistics Group" (list) vs "Novus Operations" (detail/manifest) | case-studies.tsx:66 vs case-study-novus.tsx / manifest.json:81 |
| EchoCommerce tagged "B2B Finance" though it's commerce support | case-studies.tsx:81 |
| Blog page shows 2026 dates + "Zorex AI Engineering"/"Zorex AI Team" while manifest has 2024 dates + "Dr. Aris Thorne"/"Elena Rostova" | blog.tsx vs manifest.json:20-56 |
| Homepage "What We Automate" cards mislinked: "Customer & Service Operations"→/service-agentic-ai, "Revenue & Marketing Operations"→/service-vertical-ai | home.tsx:124, 138 |
| Homepage redundancy: "What We Automate" (4 cards) overlaps "What We Build" (3 cards) | home.tsx:112-170, 232-263 |
| Footer email `hello@zorex.com` vs canonical domain `zorex.ai` | site-footer.tsx:22-24, contact.tsx:148 |
| Calendly personal handle `amiralicomsats3` + embed with no loader script | contact.tsx:152, 171 |
| "9+ Industries served" vs 9 industry pages (count is defensible but strip itself is unattributed) | home.tsx:63 |

## Task List

### Phase 1: Foundation — positioning, claims policy, shared chrome

- [ ] **Task 1: Canonical positioning + site-wide metadata** (M)
  Update `lib/site-data.ts` (DEFAULT_DESCRIPTION, home title), `app/layout.tsx` metadata/OG/Twitter
  titles, and `content/manifest.json` home/about/services titles+descriptions to the approved
  "AI software company" positioning. Remove "Vertical AI Systems for Business Functions" as the
  company-level tagline (it remains a service name).
- [ ] **Task 2: Header + footer alignment** (S)
  Footer tagline → neutral AI-software-company sentence; fix footer email to match the domain
  decision (default: `hello@zorex.ai`, confirmed in Open Questions); keep nav labels as-is
  (Solutions / Industries / Examples / How We Work / About) — they already answer visitor
  questions.

### Checkpoint: Foundation
- [ ] `npm run typecheck` + `npm run lint` pass
- [ ] Positioning sentence identical in metadata, footer, and (later) hero/about

### Phase 2: Homepage (highest-traffic page, most audit findings)

- [ ] **Task 3: Homepage hero + proof strip** (M)
  Rewrite hero to standard hierarchy: eyebrow (who we are) → h1 (what we do, outcome-first,
  neutral) → subhead (how, one sentence) → CTAs (Book a Strategy Call / See Our Work). Replace the
  unattributed 4-stat proof strip with a neutral capability strip (e.g., "Agentic systems /
  Integration with existing tools / Built around your workflows / Ongoing improvement") — no
  invented numbers.
- [ ] **Task 4: Homepage mid-sections — fix links, claims, redundancy** (M)
  "What We Automate": fix mislinked cards, remove stat chips ("60% ticket auto-resolution",
  "30% more closed deals", "20+ hrs/wk reclaimed", "40-60% cost reduction"), replace with neutral
  capability bullets; de-ecommerce-ify "Shopify, Gorgias, Klaviyo" chip into neutral tool examples.
  "Why Zorex AI": replace "scales infinitely" and "$80K–120K / 3–6 months" claims with neutral
  comparisons. Merge/remove the redundant "What We Build" section so the page flows: problem →
  what we build (one section) → how we work → why us → resource → CTA.
- [ ] **Task 5: Homepage tone pass** (S)
  De-jargon the remaining sections ("decision-layer AI that reasons", "operational leverage"),
  keep the Operational Bottleneck cards (audit-rated best copy) but soften "$10 tasks" / "30% of
  their day" claims into neutral language.

### Checkpoint: Homepage
- [ ] Build passes; homepage reads in the standard visitor order
- [ ] Zero unattributed statistics remain on `/`

### Phase 3: Core pages

- [ ] **Task 6: Services page** (M)
  Neutralize "98%+ accuracy" and "10x the volume" in Old Way vs Zorex Way; align hero + proof
  strip with claims policy (reuse neutral strip from Task 3); keep the 3 engagement tiers
  (audit strength) with jargon trimmed.
- [ ] **Task 7: Process page** (S)
  Rewrite governance line (process.tsx:168) as architectural capability ("Self-hosted, VPC, or
  air-gapped deployment options, designed around SOC 2 / GDPR / HIPAA requirements"); remove the
  stat strip or replace with neutral process facts (4 phases, typical weeks).
- [ ] **Task 8: About page** (M)
  Fix positioning line 18 to the approved sentence; restructure headings to the standard visitor
  order (who we are → why we exist → what we build → how we build → team); team section: keep
  honest role framing but rewrite so it doesn't imply unnamed bench staff ("Senior builders. No
  handoffs to a bench." → honest small-team framing), per audit's team-credibility finding.
- [ ] **Task 9: Contact page** (M)
  Fix Calendly: add official loader script for the inline widget (or replace embed with a styled
  direct booking link if the script is blocked); flag handle for user swap; fix email; remove stat
  strip; add a response-time promise line ("We reply within one business day") only if the user
  confirms it in Open Questions.

### Checkpoint: Core pages
- [ ] Build passes; no unverifiable claims on /services, /process, /about, /contact
- [ ] Calendly section renders (script loads) or is replaced with working link

### Phase 4: Case studies — honesty remediation

- [ ] **Task 10: Case studies index** (M)
  Add a visible "representative examples" framing line under the hero; remove the 4-stat strip
  (98% / 60% / +400% / $2.4M); fix Novus name inconsistency (pick one name, use everywhere);
  fix EchoCommerce "B2B Finance" tag → "B2B Commerce / Support"; remove fabricated attribution
  names (Aisha Malik, David Liu, Sarah Jensen) or convert to role-only ("Operations Director").
- [ ] **Task 11: Case study detail pages** (L → split)
  For each of novus / echocommerce / viralgrowth: remove invented specifics (city, founding year,
  headcount, revenue, error rates, named employees), remove stock-photo-as-dashboard captions,
  reframe numbers as illustrative or remove, add a one-line disclaimer ("Details anonymized /
  illustrative"). Split into 3 sub-tasks, one per page, if size requires.

### Checkpoint: Case studies
- [ ] No fabricated facts presented as real; disclaimer present on each detail page
- [ ] Client names consistent between index, detail pages, and manifest

### Phase 5: Service + industry sub-pages

- [ ] **Task 12: service-vertical-ai.tsx claims removal** (M)
  Remove "97% vs 72%", "3x Faster Time-to-Value", "100% Regulatory Coverage", "pre-compliant"
  language, the Futurum Group citation, and the fictional CMIO quote; rewrite as capability +
  architectural description in neutral tone.
- [ ] **Task 13: Remaining service pages sweep** (M)
  service-agentic-ai, service-ai-integration, service-ai-automations, service-api-integrations,
  service-llm-applications: sweep for stat claims / compliance overclaims / jargon; align each
  hero with the positioning sentence.
- [ ] **Task 14: Industries hub + 9 industry pages** (M)
  industries.tsx: fix "response response times" typo, remove "-60% / 24/7 / +3x" strip, keep the
  broad framing (user wants broad, not e-commerce-specific). Sweep the 9 industry pages for the
  same claim patterns; ensure none read as e-commerce-first.

### Checkpoint: Sub-pages
- [ ] Grep for claim patterns (`[0-9]+%`, `$[0-9]`, "compliant", "infinitely") returns only
  approved/neutralized hits across components/pages

### Phase 6: Blog + SEO coherence

- [ ] **Task 15: Blog consistency** (S)
  Reconcile dates/authors between blog.tsx (2026 dates, team bylines) and manifest.json (2024
  dates, fictional individual authors). Default: use team byline ("Zorex AI Team") and consistent
  recent dates in both places.
- [ ] **Task 16: SEO layer coherence** (M)
  Apply the domain decision (Open Question 1) to `lib/site-data.ts` SITE_URL, `app/sitemap.ts`,
  `app/robots.ts`, `components/structured-data.tsx`; update Organization schema description to the
  new positioning; verify manifest descriptions for the rewritten pages still match page content.

### Checkpoint: Complete
- [ ] `npm run check` (lint + typecheck + build) passes
- [ ] Full-site grep confirms claims policy applied
- [ ] Every page follows the standard heading hierarchy
- [ ] Ready for user review

## Risks and Mitigations

| Risk | Impact | Mitigation |
|---|---|---|
| Removing all stats makes pages feel thin | Med | Replace with concrete capability statements, process facts (phases, engagement tiers), and honest framing — not invented numbers |
| Case-study honesty refactor removes the only "proof" | High | Keep the 3 narratives as clearly-labeled representative examples; add "what you can expect" framing; ask user for real, verifiable results in Open Questions |
| Domain decision blocks SEO task | Med | Task 16 is last; everything else is domain-independent. Default assumption documented |
| Calendly script blocked by CSP/sandbox in preview | Low | Fallback: styled direct booking-link card instead of embed |
| Copy changes break reveal-animation class expectations | Low | Keep existing className patterns; only text/structure changes inside them |

## Decisions (resolved with user, 2026-08-25)

1. **Domain**: Keep `https://zorex.ai` as canonical (user will connect the domain to Vercel).
   SITE_URL stays unchanged; Task 16 focuses on schema/description coherence only.
2. **Email**: Keep `hello@zorex.com` everywhere (footer + contact). No email change needed.
3. **Case studies**: Reframe as clearly-labeled illustrative/representative examples; strip
   fabricated specifics (Task 10/11 approach confirmed).
4. **Calendly**: Keep the current `amiralicomsats3` handle for now; still fix the broken embed
   (missing loader script) so the widget actually renders.
