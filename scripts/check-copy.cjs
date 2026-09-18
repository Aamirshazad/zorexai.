/**
 * Copy + consistency guard.
 *
 * Exists because of a specific failure: a one-off cleanup script
 * (scripts/strip-em-dashes.cjs, since deleted) rewrote every "A — B" prose
 * construction to "A B" across the whole site. That rule is safe for decorative
 * divider runs in comments and catastrophic for prose, where an em dash is
 * load-bearing punctuation. The result shipped run-on sentences that read as
 * though words were missing — in hero copy, on the homepage, in front of buyers.
 *
 * Three checks, all of which are cheap and were all tripped by that incident:
 *
 *   1. DAMAGED_PHRASES    known clause-jams, matched as literal substrings
 *   2. Unpunctuated runs  any sentence segment over MAX_RUN words with no
 *                         punctuation, which is where a removed dash hides
 *   3. Single-source rules duration claims and invalid preload hints must come
 *                         from their one source of truth, never be retyped
 *
 * Run:      node scripts/check-copy.cjs
 * Exit code 1 on any finding, so it can gate a build.
 */
const fs = require('fs');
const path = require('path');

const ROOTS = ['components', 'content', 'app', 'lib'];
const EXTENSIONS = new Set(['.ts', '.tsx']);
const MAX_RUN = 32;

/** Literal clause-jams confirmed as em-dash-removal damage. */
const DAMAGED_PHRASES = [
  'systems agentic systems',
  'run nothing to rip out',
  'work not the other way',
  'commitments a proven',
  'confidential we&apos;ll sign',
  'constraints then design',
  'rail audit first',
  'and capacity only grows',
  'rules not judgment',
  'boundary self-hosted',
  'call it gives us',
  'bench the people who',
  'Build the system keeps',
  'finish. the work',
  'workflow read, decide',
  'bar because the difference',
  'cycles systems built',
  'data your team keeps',
  'product a moat',
  'sourcing analysts analyzing',
  'analytics output without headcount',
  'infrastructure e-discovery',
  'maintenance downtime prevented',
  'systems providers back to patient',
  'busy which was most days',
];

/**
 * Facts that must be authored in exactly one place. Retyping them is how the
 * site ended up promising 45 minutes on six pages and 30 on two.
 */
const SINGLE_SOURCE_RULES = [
  {
    // Duration chips must read company.callLength, never a literal.
    pattern: /\b(30|45|60)\s*minutes\b/,
    allowFiles: ['content/company.ts'],
    message: 'Duration literals must come from company.callLength — not retyped.',
  },
  {
    // `video` is not a valid `as` value for rel=preload; the browser ignores it.
    pattern: /as:\s*'video'/,
    allowFiles: [],
    message: "`as: 'video'` is not a valid preload hint — the browser drops the tag and logs a warning.",
  },
  {
    // Legal pages are noindex, so their URLs must not be advertised anywhere.
    pattern: /^\s*privacy\b.*$/,
    allowFiles: [],
    enabled: false,
    message: 'placeholder',
  },
];

function walk(dir, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === 'node_modules' || entry.name.startsWith('.')) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else if (EXTENSIONS.has(path.extname(entry.name))) out.push(full);
  }
  return out;
}

const files = ROOTS.flatMap((root) => walk(root));
const findings = [];

/**
 * Extract only writer-facing prose from a TS/TSX file.
 *
 * Two sources, and both are needed:
 *   - string literals   content/*.ts data objects and JSX {"..."} children
 *   - JSX text nodes    raw text sitting between tags, e.g. <h1>Build it</h1>
 *
 * An earlier version of this function stripped every {...} block, which
 * silently excluded all of content/*.ts because its strings live inside object
 * literals. That produced false negatives on the very files the guard exists
 * to protect, so prose is now collected positively rather than by subtraction.
 */
function proseOnly(source) {
  const withoutComments = source
    .replace(/\/\*[\s\S]*?\*\//g, ' ')
    .replace(/(^|[^:])\/\/[^\n]*/g, '$1 ');

  const chunks = [];

  // String literals, minus any used as a className/attribute value.
  for (const match of withoutComments.matchAll(/(?:'((?:[^'\\]|\\.)*)'|"((?:[^"\\]|\\.)*)"|`((?:[^`\\]|\\.)*)`)/g)) {
    const value = match[1] ?? match[2] ?? match[3] ?? '';
    const precededByAttribute = withoutComments
      .slice(Math.max(0, match.index - 24), match.index)
      .match(/(className|class|href|src|style|id|name|type|aria-\w+|data-\w+)\s*=\s*\{?\s*$/);
    if (precededByAttribute) continue;
    chunks.push(value);
  }

  // JSX text nodes: text between > and <, excluding braces/props.
  for (const match of withoutComments.matchAll(/>([^<>{}]{25,})</g)) {
    chunks.push(match[1]);
  }

  return chunks.join(' \u0000 ').replace(/\s+/g, ' ');
}

const normalise = (value) => value.replace(/&apos;/g, "'").replace(/&#x27;/g, "'").replace(/&quot;/g, '"');

for (const file of files) {
  const rel = path.relative(process.cwd(), file).split(path.sep).join('/');
  const raw = fs.readFileSync(file, 'utf8');
  const prose = normalise(proseOnly(raw));

  // 1. Known clause-jams.
  for (const phrase of DAMAGED_PHRASES) {
    if (prose.includes(normalise(phrase))) {
      findings.push({ rel, check: 'damaged-phrase', detail: `"${phrase}" — looks like a removed em dash` });
    }
  }

  // 2. Unpunctuated runs, checked per extracted prose chunk.
  for (const chunk of prose.split('\u0000')) {
    // Judge one sentence at a time. A chunk holding three short sentences is
    // perfectly healthy prose; a single 30-word sentence with no comma is where
    // a removed dash hides.
    for (const sentence of normalise(chunk).split(/(?<=[.!?])\s+/)) {
      const segment = sentence.trim();
      if (segment.length < 120) continue;
      const words = segment.split(/\s+/).filter(Boolean);
      // Internal punctuation means the sentence is a controlled long sentence,
      // not a run-on: commas, colons, semicolons, brackets and dashes all count.
      const hasInternalPunctuation = /[,;:()[\]\u2013\u2014]/.test(segment);
      if (words.length > MAX_RUN && !hasInternalPunctuation) {
        findings.push({
          rel,
          check: 'long-unpunctuated-run',
          detail: `${words.length} words with no punctuation — verify no dash was stripped: "${segment.slice(0, 90)}…"`,
        });
      }
    }
  }

  // 3. Single-source rules. Tested against prose rather than the raw file, so a
  // comment that mentions the number (for example, explaining that a value used
  // to be hardcoded) does not trip the check.
  for (const rule of SINGLE_SOURCE_RULES) {
    if (rule.enabled === false) continue;
    if (rule.allowFiles.includes(rel)) continue;
    const offender = prose.match(rule.pattern);
    if (!offender) continue;
    findings.push({ rel, check: 'single-source', detail: `${rule.message} Found: "${offender[0].trim()}"` });
  }
}

if (findings.length === 0) {
  console.log(`check-copy: clean (${files.length} files scanned)`);
  process.exit(0);
}

console.error(`check-copy: ${findings.length} finding(s)\n`);
for (const finding of findings) {
  console.error(`  ${finding.rel}\n    [${finding.check}] ${finding.detail}\n`);
}
process.exit(1);