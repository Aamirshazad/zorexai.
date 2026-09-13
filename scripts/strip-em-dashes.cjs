/* One-off cleanup: remove em dashes (U+2014) from all site text.
   Dry run: node scripts/strip-em-dashes.cjs
   Apply:   node scripts/strip-em-dashes.cjs --apply
   Replacement rules (every em dash that is not part of a decorative run):
     "A — B"  -> "A B"      "A —"   -> "A"
     "A —B"  -> "A B"      "A— B"  -> "A B"
     "A—B"   -> "A B"      "—B"    -> " B"
   Box-drawing divider chars (U+2500 ─) used in comment rules are a
   different character and are left untouched, as are en dashes (–, ranges). */
const fs = require('fs');
const path = require('path');

const APPLY = process.argv.includes('--apply');
const ROOTS = ['app', 'components', 'content'];
const DASH = '—';

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(p, out);
    else out.push(p);
  }
  return out;
}

const files = ROOTS.filter((r) => fs.existsSync(r)).flatMap((r) => walk(r));

const countAll = () =>
  files.reduce((n, f) => n + (fs.readFileSync(f, 'utf8').split(DASH).length - 1), 0);

console.log('em dashes in app/components/content:', countAll());

if (!APPLY) {
  console.log('(dry run — pass --apply to write changes)');
  process.exit(0);
}

let removed = 0;
let changed = 0;
for (const file of files) {
  const text = fs.readFileSync(file, 'utf8');
  if (!text.includes(DASH)) continue;

  let out = '';
  let i = 0;
  while (i < text.length) {
    const ch = text[i];
    if (ch !== DASH) {
      out += ch;
      i++;
      continue;
    }
    const b = i > 0 ? text[i - 1] : '\n';
    const a = i + 1 < text.length ? text[i + 1] : '\n';
    if (a === DASH || b === DASH) {
      out += ch; // decorative run — keep
      i++;
      continue;
    }

    if (b === ' ') {
      if (a === ' ') {
        i += 2; // "A — B" -> "A B"
      } else if (a === '\n' || a === '\r' || a === '"' || a === "'" || a === '`') {
        out = out.slice(0, -1);
        i++; // "A —" -> "A" (drop the emitted space too)
      } else {
        i++; // "A —B" -> "A B" (keep the one space)
      }
    } else if (a === ' ' || a === '\n' || a === '\r') {
      i++; // "A— B" / "— A" -> "A B" / "A"
    } else {
      out += ' ';
      i++; // "A—B" / "—B" -> "A B" / " B"
    }
    removed++;
  }

  if (out !== text) {
    fs.writeFileSync(file, out);
    changed++;
  }
}

console.log(`removed ${removed} em dashes across ${changed} files`);
console.log('remaining em dashes:', countAll());
