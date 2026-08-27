# Zorex AI Website — Audit Implementation Tasks

Status legend: `[ ]` pending · `[~]` in progress · `[x]` done
Full rationale in [plan.md](./plan.md).

---

## Phase 1: Foundation

- [x] **Task 1: Canonical positioning + site-wide metadata** — scope M — deps: none
  - Files: `lib/site-data.ts`, `app/layout.tsx`, `content/manifest.json`
  - Description: Set the approved positioning ("AI software company that designs, builds, deploys,
    and continuously improves AI-powered systems, agentic systems, and AI integrated with existing
    systems for real business functions") as DEFAULT_DESCRIPTION and home/about/services metadata.
    Drop "Vertical AI Systems for Business Functions" as the company tagline (remains a service).
  - Acceptance:
    - [x] DEFAULT_DESCRIPTION matches approved positioning sentence
    - [x] layout.tsx title/OG/Twitter updated, no "Vertical AI Systems" as company identity
    - [x] manifest.json home/about/services entries aligned
  - Verification: `npm run typecheck`; grep "Vertical AI Systems for Business Functions" shows no
    company-level usage

- [x] **Task 2: Header + footer alignment** — scope S — deps: Task 1
  - Files: `components/site-footer.tsx`, `components/site-header.tsx`
  - Description: Footer tagline → neutral positioning sentence. Email stays `hello@zorex.com`
    (user decision). Nav labels unchanged.
  - Acceptance:
    - [x] Footer tagline matches positioning, no "Vertical AI systems that remove..." line
  - Verification: `npm run lint`; visual check of footer

**Checkpoint: Foundation**
- [x] `npm run typecheck` + `npm run lint` pass (final `npm run check` at end)
- [x] Positioning sentence consistent across metadata + footer

---

## Phase 2: Homepage

- [x] **Task 3: Homepage hero + proof strip** — scope M — deps: Task 1
  - Files: `components/pages/home.tsx`
  - Description: Rewrite hero to standard hierarchy (eyebrow: who we are → h1: what we do →
    subhead: how → CTAs). Replace unattributed stat strip (30 days / 60% / 40 hrs/wk / 9+) with a
    neutral capability strip. No invented numbers.
  - Acceptance:
    - [x] Hero answers: who we are, what we do, what you get — neutral tone
    - [x] Stat strip replaced with capability strip (no percentages/time claims)
    - [x] CTAs: Book a Strategy Call + See Our Work
  - Verification: `npm run build`; read-through of `/`

- [x] **Task 4: Homepage mid-sections — links, claims, redundancy** — scope M — deps: Task 3
  - Files: `components/pages/home.tsx`
  - Description: Fix mislinked "What We Automate" cards; remove stat chips (60% ticket
    auto-resolution, 3-min avg response, 40-60% cost reduction, 30% more closed deals, 20+ hrs/wk);
    neutralize "Shopify, Gorgias, Klaviyo" and "Zero migration risk"; replace "scales infinitely"
    and "$80K–120K / 3–6 months" in Why Zorex; merge redundant "What We Build" section.
  - Acceptance:
    - [x] Every card links to the correct service page
    - [x] Zero numeric outcome claims in mid-sections
    - [x] Only one "what we build" style section remains; page order: problem → what we build →
      how we work → why us → resource → CTA
  - Verification: `npm run build`; click-through of all card links in dev

- [x] **Task 5: Homepage tone pass** — scope S — deps: Task 4
  - Files: `components/pages/home.tsx`
  - Description: De-jargon remaining copy ("decision-layer AI that reasons", "leverage"); soften
    "$10 tasks" / "30% of their day" in bottleneck cards; keep their substance.
  - Acceptance:
    - [x] No hard percentages/time claims remain on `/`
    - [x] Tone neutral, business+technical blend
  - Verification: grep `[0-9]+%|\$[0-9]|infinitely` on home.tsx returns nothing unapproved

**Checkpoint: Homepage**
- [x] Build passes; `/` follows standard visitor order; zero unattributed stats

---

## Phase 3: Core pages

- [x] **Task 6: Services page** — scope M — deps: Task 1
  - Files: `components/pages/services.tsx`
  - Description: Neutralize "98%+ accuracy" + "10x the volume"; align hero + proof strip with
    claims policy; trim jargon in engagement tiers (tiers themselves stay — audit strength).
  - Acceptance:
    - [x] No unverifiable claims remain
    - [x] 3 engagement tiers intact with neutral copy
  - Verification: `npm run build`; grep claims patterns on services.tsx

- [x] **Task 7: Process page** — scope S — deps: Task 1
  - Files: `components/pages/process.tsx`
  - Description: Rewrite governance line as architectural capability (deployment options designed
    around SOC 2 / GDPR / HIPAA requirements — not "compliance" claims); neutralize stat strip.
  - Acceptance:
    - [x] No "for SOC2, GDPR, and HIPAA compliance" phrasing; capability framing instead
    - [x] Stat strip neutral or removed
  - Verification: `npm run build`; grep `compliance|compliant` on process.tsx

- [x] **Task 8: About page** — scope M — deps: Task 1
  - Files: `components/pages/about.tsx`
  - Description: Fix line-18 positioning; order headings to visitor questions (who → why → what →
    how → team); honest team framing (no implied unnamed bench).
  - Acceptance:
    - [x] Positioning sentence matches canonical version
    - [x] Team section honest (role capabilities without fabricated headcount claims)
  - Verification: `npm run build`; read-through of `/about`

- [x] **Task 9: Contact page** — scope M — deps: Task 2
  - Files: `components/pages/contact.tsx`, possibly `app/layout.tsx` (script)
  - Description: Fix broken Calendly embed (add official loader script; keep current handle per
    user decision); remove stat strip; do NOT add a response-time promise (not confirmed).
  - Acceptance:
    - [x] Calendly widget renders (script loads) — no empty 700px box
    - [x] Stat strip gone; rest of page intact
  - Verification: `npm run build`; load `/contact` in dev and confirm widget renders

**Checkpoint: Core pages**
- [x] Build passes; no unverifiable claims on /services /process /about /contact
- [x] Booking path works end-to-end

---

## Phase 4: Case studies — honesty remediation

- [x] **Task 10: Case studies index** — scope M — deps: Task 1
  - Files: `components/pages/case-studies.tsx`, `content/manifest.json`
  - Description: Add "representative examples" framing; remove 98%/60%/+400%/$2.4M strip; unify
    Novus naming; fix EchoCommerce "B2B Finance" tag; remove fabricated attribution names or make
    role-only.
  - Acceptance:
    - [x] Disclaimer/framing line visible near top
    - [x] No fabricated stats or named individuals presented as real
    - [x] Names/tags consistent with detail pages + manifest
  - Verification: `npm run build`; read-through of `/case-studies`

- [x] **Task 11a: case-study-novus honesty pass** — scope M — deps: Task 10
  - Files: `components/pages/case-study-novus.tsx`
  - Description: Remove invented specifics (city, founded year, headcount, $47M, error rates,
    99.2%); fix stock-photo-as-dashboard caption; add anonymized/illustrative disclaimer.
  - Acceptance: [x] No fabricated facts; disclaimer present; name matches index
  - Verification: `npm run build`

- [x] **Task 11b: case-study-echocommerce honesty pass** — scope M — deps: Task 10
  - Files: `components/pages/case-study-echocommerce.tsx`
  - Description: Same treatment as 11a; align industry framing with corrected tag.
  - Acceptance: [x] No fabricated facts; disclaimer present
  - Verification: `npm run build`

- [x] **Task 11c: case-study-viralgrowth honesty pass** — scope M — deps: Task 10
  - Files: `components/pages/case-study-viralgrowth.tsx`
  - Description: Same treatment as 11a.
  - Acceptance: [x] No fabricated facts; disclaimer present
  - Verification: `npm run build`

**Checkpoint: Case studies**
- [x] Nothing fabricated presented as real; names consistent everywhere

---

## Phase 5: Service + industry sub-pages

- [x] **Task 12: service-vertical-ai claims removal** — scope M — deps: Task 1
  - Files: `components/pages/service-vertical-ai.tsx`
  - Description: Remove "97% vs 72%", "3x Faster Time-to-Value", "100% Regulatory Coverage",
    "pre-compliant with HIPAA, SOC 2, GDPR", Futurum Group citation, fictional CMIO quote,
    "15-25% misinterpretation" stat; rewrite neutral capability/architecture copy.
  - Acceptance: [x] Zero listed claims remain; page still complete and coherent
  - Verification: `npm run build`; grep claims patterns on the file

- [x] **Task 13: Remaining service pages sweep** — scope M — deps: Task 12
  - Files: `service-agentic-ai.tsx`, `service-ai-integration.tsx`, `service-ai-automations.tsx`,
    `service-api-integrations.tsx`, `service-llm-applications.tsx`
  - Description: Sweep stats/compliance overclaims/jargon; align heroes with positioning.
  - Acceptance: [x] No unverifiable claims; heroes consistent
  - Verification: `npm run build`; grep sweep across the 5 files

- [x] **Task 14: Industries hub + industry pages** — scope M — deps: Task 1
  - Files: `industries.tsx` + 9 `industry-*.tsx` pages
  - Description: Fix "response response times" typo; remove "-60% / 24/7 / +3x" strip; keep broad
    framing; sweep industry pages for claims + e-commerce-first tone.
  - Acceptance: [x] Typo fixed; strips neutralized; broad positioning preserved
  - Verification: `npm run build`; grep sweep

**Checkpoint: Sub-pages**
- [x] Site-wide grep for `[0-9]+%`, `\$[0-9]`, `compliant`, `infinitely` shows only approved hits
  (Tailwind class false positives; $10K illustrative routing example; industry-requirement
  compliance mentions; form options and scenario timeframes)

---

## Phase 6: Blog + SEO coherence

- [x] **Task 15: Blog consistency** — scope S — deps: Task 1
  - Files: `components/pages/blog.tsx`, `content/manifest.json`
  - Description: Reconcile dates + authors (default: "Zorex AI Team" byline, consistent dates in
    both blog.tsx and manifest publishedAt/author fields).
  - Acceptance: [x] No fictional individual authors; dates consistent between page and manifest
  - Verification: `npm run build`

- [x] **Task 16: SEO layer coherence** — scope M — deps: Tasks 1-15
  - Files: `lib/site-data.ts`, `components/structured-data.tsx`, `content/manifest.json`
  - Description: SITE_URL stays `https://zorex.ai` (user decision). Update Organization schema
    description to new positioning; confirm manifest descriptions match rewritten pages; verify
    sitemap/robots need no change.
  - Acceptance:
    - [x] JSON-LD Organization description matches new positioning
    - [x] Manifest descriptions consistent with rewritten page copy
  - Verification: `npm run check`; inspect built HTML `<link rel="canonical">` + sitemap output
    (sitemap.ts/robots.ts derive from manifest + site-data; confirmed no change needed)

**Checkpoint: Complete**
- [x] `npm run check` passes
- [x] Claims policy verified site-wide
- [x] Standard heading hierarchy on every page
- [x] Ready for user review
