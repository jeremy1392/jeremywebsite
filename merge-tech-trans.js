/* ============================================================
   Merge the FR/ZH/AR translation JSON files produced by the
   translator agents into tech-data.js, then run build.js.

   Reads:  tech-trans/fr.json · tech-trans/zh.json · tech-trans/ar.json
   Writes: tech-data.js (in place, EN preserved)

   Run:    node merge-tech-trans.js
   ============================================================ */

const fs = require('fs');
const path = require('path');

const ROOT  = __dirname;
const TRANS = path.join(ROOT, 'tech-trans');
const DATA  = path.join(ROOT, 'tech-data.js');

const TECH = require('./tech-data.js');

const SCHEMA_KEYS = ['category', 'subtitle', 'what', 'why', 'how', 'deliverables'];

function loadJson(file) {
  if (!fs.existsSync(file)) return null;
  try { return JSON.parse(fs.readFileSync(file, 'utf8')); }
  catch (e) { console.error('Failed to parse', file, e.message); return null; }
}

function validate(lang, dict) {
  if (!dict) { console.warn(`  ⚠ ${lang}.json missing — skipped`); return false; }
  let ok = true;
  for (const tech of TECH) {
    const block = dict[tech.slug];
    if (!block) { console.warn(`  ⚠ ${lang}: missing slug "${tech.slug}"`); ok = false; continue; }
    for (const k of SCHEMA_KEYS) {
      if (!(k in block)) { console.warn(`  ⚠ ${lang}/${tech.slug}: missing "${k}"`); ok = false; }
    }
    const enWhy = tech.content.en.why.length;
    const enDel = tech.content.en.deliverables.length;
    if (Array.isArray(block.why) && block.why.length !== enWhy)
      console.warn(`  ⚠ ${lang}/${tech.slug}: why has ${block.why.length} bullets vs ${enWhy} EN`);
    if (Array.isArray(block.deliverables) && block.deliverables.length !== enDel)
      console.warn(`  ⚠ ${lang}/${tech.slug}: deliverables has ${block.deliverables.length} vs ${enDel} EN`);
  }
  // em-dash check
  const flat = JSON.stringify(dict);
  if (flat.includes('—') || flat.includes('——')) {
    console.warn(`  ⚠ ${lang}: contains em-dashes — they should be replaced`);
  }
  return ok;
}

const FR = loadJson(path.join(TRANS, 'fr.json'));
const ZH = loadJson(path.join(TRANS, 'zh.json'));
const AR = loadJson(path.join(TRANS, 'ar.json'));

console.log('Validating translations...');
const okFR = validate('fr', FR);
const okZH = validate('zh', ZH);
const okAR = validate('ar', AR);

// Build the updated TECH array (in-memory)
const updated = TECH.map(tech => {
  const content = { en: tech.content.en };
  if (FR && FR[tech.slug]) content.fr = FR[tech.slug];
  if (ZH && ZH[tech.slug]) content.zh = ZH[tech.slug];
  if (AR && AR[tech.slug]) content.ar = AR[tech.slug];
  return { ...tech, content };
});

// Re-serialize as a JS module (preserves comments-free, readable output)
function jsString(s) {
  return JSON.stringify(s);
}
function serializeContent(block) {
  return `{
        category: ${jsString(block.category)},
        subtitle: ${jsString(block.subtitle)},
        what: ${jsString(block.what)},
        why: [
${block.why.map(b => '          ' + jsString(b)).join(',\n')}
        ],
        how: ${jsString(block.how)},
        deliverables: [
${block.deliverables.map(b => '          ' + jsString(b)).join(',\n')}
        ]
      }`;
}

const body = updated.map(tech => {
  const langs = Object.keys(tech.content);
  const langBlocks = langs.map(l => `      ${l}: ${serializeContent(tech.content[l])}`).join(',\n');
  return `  {
    slug: ${jsString(tech.slug)},
    title: ${jsString(tech.title)},
    vendor: ${jsString(tech.vendor)},
    vendorName: ${jsString(tech.vendorName)},
    group: ${jsString(tech.group)},
    content: {
${langBlocks}
    }
  }`;
}).join(',\n\n');

const out = `/* ============================================================
   Tech landing-page data, 12 flagship technologies x up to 4 languages.
   Auto-merged by merge-tech-trans.js, do not edit by hand below this line.

   Per-language schema:
     category, subtitle, what (paragraph),
     why (bullets[]), how (paragraph), deliverables (bullets[])
   ============================================================ */

const TECH = [

${body}

];

if (typeof module !== 'undefined') module.exports = TECH;
if (typeof window !== 'undefined') window.TECH = TECH;
`;

fs.writeFileSync(DATA, out);
console.log('');
console.log(`Wrote ${DATA} (${out.length} bytes)`);
console.log(`Locales merged: en${FR ? ', fr' : ''}${ZH ? ', zh' : ''}${AR ? ', ar' : ''}`);
console.log('');
console.log('Now run: node build.js');
