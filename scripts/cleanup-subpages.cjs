/**
 * Final sub-page cleanup.
 *
 * Runs after the token migration and handles four things the mechanical token
 * map could not:
 *
 *   1. The five blog articles each carried their own bespoke "Ready to Deploy
 *      Agentic Architecture?" CTA section — the same block, copy-pasted with a
 *      different headline, using a one-off `btn-lift` pill that matches no other
 *      button on the site. All five now render the shared FinalCta component, so
 *      there is one closing CTA pattern across the whole site.
 *
 *   2. `blog-ai-commerce` named a different company: "Discover how Aetheris AI
 *      can be customized..." A template leftover, and the kind of detail that
 *      ends a sales conversation. Also replaced a dead `href="#"` CTA.
 *
 *   3. Class fragments the token map had no equivalent for
 *      (text-on-secondary-fixed, hover:bg-primary-fixed-variant, a legacy
 *      gradient rail, and the remaining shadow-lg elevation).
 *
 *   4. Adds the FinalCta import where it is now needed.
 *
 * Run: node scripts/cleanup-subpages.cjs --apply
 */
const fs = require('fs');
const path = require('path');

const APPLY = process.argv.includes('--apply');

/** Per-article closing CTA, replacing the duplicated bespoke block. */
const CTA_BY_FILE = {
  'blog-agentic-systems.tsx': {
    heading: 'Ready to put agentic systems to work?',
    body: 'Bring one workflow that needs judgment, and we will tell you honestly whether an agent should carry it.',
  },
  'blog-ai-commerce.tsx': {
    heading: 'Ready to scale support without scaling headcount?',
    body: 'Walk us through your ticket volume and the systems behind it, and we will show you where the queue actually forms.',
  },
  'blog-cognitive-infrastructure.tsx': {
    heading: 'Ready to move past basic retrieval?',
    body: 'Bring your document set and the questions your team asks of it. We will show you where naive retrieval breaks and what replaces it.',
  },
  'blog-intelligent-process.tsx': {
    heading: 'Ready to stop repairing broken automations?',
    body: 'Show us the workflow that fails silently today, and we will tell you whether it needs rules, judgment, or a redesign.',
  },
  'blog-llm-security.tsx': {
    heading: 'Ready to deploy AI inside your own boundary?',
    body: 'Tell us which systems and records are involved, and we will set out what access the workflow needs and what it never gets.',
  },
};

const CLASS_FIXES = [
  ['text-on-secondary-fixed', 'text-ink'],
  ['hover:bg-primary-fixed-variant', 'hover:opacity-90'],
  ['from-outline-variant/30 via-secondary to-outline-variant/30', 'from-transparent via-[var(--line-strong)] to-transparent'],
  ['bg-primary-fixed-variant', 'bg-panel-2'],
  ['text-primary-fixed-variant', 'text-ink'],
  ['shadow-lg', ''],
  ['btn-lift', 'btn-ink'],
];

const TEXT_FIXES = [
  // Template leftover naming another company.
  ['Aetheris AI', 'Zorex AI'],
  // Dead CTA.
  ['href="#"', 'href="/contact"'],
];

const dir = path.join('components', 'pages');
const files = fs.readdirSync(dir).filter((name) => name.endsWith('.tsx'));
let changed = 0;

for (const name of files) {
  const full = path.join(dir, name);
  const original = fs.readFileSync(full, 'utf8');
  let next = original;

  for (const [from, to] of CLASS_FIXES) {
    next = next.split(from).join(to);
  }
  for (const [from, to] of TEXT_FIXES) {
    next = next.split(from).join(to);
  }

  // Replace the duplicated bespoke closing CTA with the shared component.
  const cta = CTA_BY_FILE[name];
  if (cta) {
    const blockRe = /<section className="max-w-container-max mx-auto px-5 sm:px-8 pb-section-padding">\s*<div className="reveal bg-ink rounded-\[20px\][\s\S]*?<\/section>/;
    if (blockRe.test(next)) {
      next = next.replace(
        blockRe,
        `<FinalCta\n        heading="${cta.heading}"\n        body="${cta.body}"\n        secondaryLabel="Read more insights"\n        secondaryHref="/blog"\n      />`,
      );
    }
    if (!next.includes("from '@/components/content/final-cta'")) {
      next = next.replace(
        /^(import[^\n]*\n)/,
        `$1import { FinalCta } from '@/components/content/final-cta';\n`,
      );
    }
  }

  if (next !== original) {
    changed += 1;
    console.log(`  updated  ${name}`);
    if (APPLY) fs.writeFileSync(full, next);
  }
}

console.log(`\n${APPLY ? 'APPLIED' : 'DRY RUN'}: ${changed} files`);
if (!APPLY) console.log('pass --apply to write changes');