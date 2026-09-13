/* eslint-disable */
// One-shot codemod: converts the legacy sub-page hero template (15 files)
// to the new SubPageHero component. Parses breadcrumbs, eyebrow chip,
// meta label, h1, body paragraph, stats chips, and hero image, then
// regenerates the hero block with the imagine.art-style pattern.
const fs = require('fs');
const path = require('path');

const PAGES_DIR = path.join(__dirname, '..', 'components', 'pages');

const targets = fs.readdirSync(PAGES_DIR).filter((f) =>
  /^(industry-|service-|case-study-|blog-)[a-z0-9-]+\.tsx$/.test(f)
);

function extract(match, re, group = 1) {
  const m = match.match(re);
  return m ? m[group] : null;
}

let changed = 0;
for (const file of targets) {
  const fp = path.join(PAGES_DIR, file);
  let src = fs.readFileSync(fp, 'utf-8');
  const orig = src;

  // ── collect pieces from the legacy hero ──
  const mainMatch = src.match(/<main className="pt-20">([\s\S]*?)<\/section>/);
  if (!mainMatch) continue;
  const heroHtml = mainMatch[0];

  // crumbs: pairs of <li><Link href=X>A</Link></li> ... final <li class>B</li>
  const crumbs = [];
  const crumbRe = /<li><Link className="hover:text-primary transition-colors no-underline" href="([^"]+)">\{"([^"]+)"\}<\/Link><\/li>/g;
  let cm;
  while ((cm = crumbRe.exec(heroHtml))) crumbs.push({ label: cm[2], href: cm[1] });
  const lastCrumb = heroHtml.match(/<li className="text-primary-container font-semibold">\{"([^"]+)"\}<\/li>/);
  if (lastCrumb) crumbs.push({ label: lastCrumb[1] });

  // ── blog article template (no crumbs, no chip icon; centered) ──
  const isArticle = /^blog-/.test(file) && crumbs.length === 0;
  let articleMeta = null;
  if (isArticle) {
    const by = extract(heroHtml, /\{"(By [^"]+)"\}/);
    const date = extract(heroHtml, /\{"((?:January|February|March|April|May|June|July|August|September|October|November|December)[^"]*)"\}/);
    const read = extract(heroHtml, /\{"(\d+ Min Read)"\}/);
    articleMeta = [by, date, read].filter(Boolean).join(' · ');
    crumbs.push({ label: 'Blog', href: '/blog' });
    crumbs.push({ label: lastCrumb ? lastCrumb[1] : 'Article' });
  }

  // eyebrow chip: icon + label
  const chipIcon = extract(heroHtml, /<Icon name="([A-Za-z0-9]+)" className="text-\[14px\]" \/>/);
  const chipLabel = extract(heroHtml, /text-\[14px\]" \/>\{"([^"]+)"\}<\/span>/);
  // meta label after chip
  const meta = extract(heroHtml, /tracking-widest">\{"([^"]+)"\}<\/span> <\/div>/);

  // h1 — keep inner text (may contain plain text or {"..."} runs)
  const h1Match = heroHtml.match(/<h1[^>]*>([\s\S]*?)<\/h1>/);
  let h1 = '';
  if (h1Match) {
    h1 = h1Match[1]
      .replace(/\{"([^"]*)"\}/g, '$1')
      .replace(/<br\s*\/?\s*>/gi, ' ')
      .replace(/<[^>]+>/g, '')
      .trim();
  }

  // body paragraph (first <p> after h1)
  const bodyMatch = heroHtml.match(/<\/h1>[\s\S]*?<p[^>]*>\{"([^"]+)"\}<\/p>/);
  const body = bodyMatch ? bodyMatch[1] : '';

  // stats chips
  const stats = [];
  const statRe = /<div className="font-headline-md text-xl[^"]*">\{"([^"]+)"\}<\/div><div[^>]*>\{"([^"]+)"\}<\/div>/g;
  let sm;
  while ((sm = statRe.exec(heroHtml))) stats.push({ value: sm[1], label: sm[2] });

  // hero image
  const imgMatch = heroHtml.match(/<OptimizedImage src="([^"]+)" alt="([^"]+)"[^>]*\/>/);

  const isCaseStudy = /^case-study-/.test(file) && crumbs.length === 0;
  if (isCaseStudy) {
    crumbs.push({ label: 'Case Studies', href: '/case-studies' });
    crumbs.push({ label: h1.split(':')[0].slice(0, 40) });
  }

  if (!h1 || !body || crumbs.length === 0) continue;

  // ── build replacement ──
  const props = [
    `eyebrow=${JSON.stringify(chipLabel || (isArticle ? 'Strategic Insight' : 'Deep Dive'))}`,
    `icon=${JSON.stringify(chipIcon || 'Sparkles')}`,
    `crumbs={${JSON.stringify(crumbs).replace(/"([a-zA-Z_]+)":/g, '$1:')}}`,
    `title=${JSON.stringify(h1)}`,
  ];
  if (isArticle && articleMeta) props.push(`meta=${JSON.stringify(articleMeta)}`);
  else if (meta) props.push(`meta=${JSON.stringify(meta)}`);
  if (body) props.push(`body=${JSON.stringify(body)}`);
  if (imgMatch) props.push(`image={${JSON.stringify({ src: imgMatch[1], alt: imgMatch[2] }).replace(/"([a-zA-Z_]+)":/g, '$1:')}}`);
  if (stats.length) props.push(`stats={${JSON.stringify(stats).replace(/"([a-zA-Z_]+)":/g, '$1:')}}`);
  // blog + case-study pages have no secondary CTA in the old hero
  if (/^blog-|^case-study-/.test(file)) props.push(`secondaryLabel=${JSON.stringify('Read More Insights')}`, `secondaryHref="/blog"`);

  const newHero = `<main className="font-ui bg-page-wash">
      <SubPageHero
        ${props.join('\n        ')}
      />`;

  src = src.replace(/<main className="pt-20">[\s\S]*?<\/section>/, newHero);

  // add the import (after the FinalCta import line if present, else after Icon import)
  if (!src.includes('sub-page-hero')) {
    if (src.includes("} from '@/components/content/final-cta'")) {
      src = src.replace("} from '@/components/content/final-cta'", "} from '@/components/content/final-cta';\nimport { SubPageHero } from '@/components/content/sub-page-hero'");
    } else {
      src = src.replace("} from '@/components/ui/icon'", "} from '@/components/ui/icon'\nimport { SubPageHero } from '@/components/content/sub-page-hero'");
    }
  }

  if (src !== orig) {
    fs.writeFileSync(fp, src);
    changed++;
    console.log('upgraded', file);
  }
}
console.log(`\n${changed}/${targets.length} files upgraded`);
