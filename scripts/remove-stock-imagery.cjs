/**
 * Removes the Unsplash stock photography from the sub-page heroes.
 *
 * The sub-page heroes passed `image={{ src: 'https://images.unsplash.com/...', alt: 'Client dashboard' }}`
 * — licensed stock presented as a client's dashboard, a strategy session, or
 * article artwork. On a site whose selling point is engineering discipline, a
 * technical buyer notices within seconds, and it is the exact "this is not real"
 * pattern the main pages were rebuilt to avoid.
 *
 * The hero reads fine without a media panel: it already carries the eyebrow
 * chips, the display-type headline, the lede, and the stat chips. Rather than
 * source more imagery nobody owns, the panels come out.
 *
 * Also drops the now-unused OptimizedImage imports and any remaining stock
 * URLs, then reports whether images.unsplash.com is still referenced anywhere —
 * so the next.config.ts allow-list can be retired if it is not.
 *
 * Run: node scripts/remove-stock-imagery.cjs --apply
 */
const fs = require('fs');
const path = require('path');

const APPLY = process.argv.includes('--apply');
const dir = path.join('components', 'pages');
const files = fs.readdirSync(dir).filter((name) => name.endsWith('.tsx'));

let changed = 0;
let remainingStock = 0;

for (const name of files) {
  const full = path.join(dir, name);
  const original = fs.readFileSync(full, 'utf8');
  let next = original;

  // `image={{ src: "...", alt: "..." }}` — appears both inline and on its own
  // line inside the multi-attribute JSX list, so match the attribute itself with
  // its leading indent/newline rather than assuming a comma separator.
  next = next
    .replace(/\r?\n?[ \t]*image=\{\{[^{}]*\}\}\r?\n?/g, '\n')
    .replace(/,\s*image=\{\{[^{}]*\}\}/g, '')
    .replace(/image=\{\{[^{}]*\}\},\s*/g, '');

  // Drop the import once nothing else in the file uses the component.
  const usedOutsideImport = next
    .split('\n')
    .filter((line) => !/^\s*import\s+\{\s*OptimizedImage\s*\}/.test(line))
    .some((line) => line.includes('OptimizedImage'));
  if (!usedOutsideImport) {
    next = next.replace(/^[ \t]*import\s+\{\s*OptimizedImage\s*\}\s+from\s+'@\/components\/ui\/optimized-image';[ \t]*\r?\n?/gm, '');
  }

  if (next !== original) {
    changed += 1;
    console.log(`  updated  ${name}`);
    if (APPLY) fs.writeFileSync(full, next);
  }
}

// Report any stock references left anywhere in the source tree.
for (const file of fs.readdirSync(dir).filter((n) => n.endsWith('.tsx'))) {
  const body = fs.readFileSync(path.join(dir, file), 'utf8');
  const hits = body.match(/images\.unsplash\.com/g) || [];
  if (hits.length) {
    remainingStock += hits.length;
    console.log(`  STOCK REMAINING  ${file}: ${hits.length}`);
  }
}

console.log(`\n${APPLY ? 'APPLIED' : 'DRY RUN'}: ${changed} files, ${remainingStock} stock references remaining in components/pages`);
if (!APPLY) console.log('pass --apply to write changes');