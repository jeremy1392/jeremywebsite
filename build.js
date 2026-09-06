/* ============================================================
   Pre-render the multilingual variants of the site.

   Reads:  index.html (English source, with data-i18n attributes)
           i18n.js   (translation dictionary)
   Writes: fr.html · zh.html · ar.html   (each fully baked,
           html[lang/dir] set, title + meta description swapped,
           canonical/hreflang updated for SEO)
   Also writes: sitemap.xml · robots.txt · favicon.svg

   Usage:  node build.js
   ============================================================ */

const fs = require('fs');

const BASE_URL  = 'https://jeremycanale.com';
const SOURCE    = 'index.html';
const LOCALES   = [
  { lang: 'fr', file: 'fr.html', dir: 'ltr' },
  { lang: 'zh', file: 'zh.html', dir: 'ltr' },
  { lang: 'ar', file: 'ar.html', dir: 'rtl' }
];
const LANG_LABEL = { en: 'EN', fr: 'FR', zh: '中文', ar: 'AR' };

/* ---------- load i18n dictionary by evaluating i18n.js in a stub window ---------- */
const i18nSrc = fs.readFileSync('i18n.js', 'utf8');
const wstub = {};
eval(
  i18nSrc
    .replace(/window\.I18N\b/g,         'wstub.I18N')
    .replace(/window\.I18N_RTL\b/g,     'wstub.RTL')
    .replace(/window\.I18N_DEFAULT\b/g, 'wstub.DEF')
);
const I18N = wstub.I18N;

const get = (dict, p) => p.split('.').reduce((a, k) => (a == null ? a : a[k]), dict);
const escapeAttr = s => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

/* ---------- per-locale build ---------- */
function buildLocale({ lang, file, dir }) {
  const dict = I18N[lang];
  if (!dict) throw new Error('Missing locale ' + lang);

  let html = fs.readFileSync(SOURCE, 'utf8');

  // 1. <html lang dir>
  html = html.replace(
    /<html\s+lang="en"\s+dir="ltr"/,
    `<html lang="${lang}" dir="${dir}"`
  );

  // 2. Meta tags carrying data-i18n + content="..."
  //    matches both attribute orders.
  html = html.replace(
    /(<meta\b[^>]*?\bdata-i18n=")([^"]+)("[^>]*?\bcontent=")([^"]*)("[^>]*\/?>)/g,
    (_m, p1, key, p3, oldVal, p5) => {
      const v = get(dict, key);
      return p1 + key + p3 + (typeof v === 'string' ? escapeAttr(v) : oldVal) + p5;
    }
  );
  html = html.replace(
    /(<meta\b[^>]*?\bcontent=")([^"]*)("[^>]*?\bdata-i18n=")([^"]+)("[^>]*\/?>)/g,
    (_m, p1, oldVal, p3, key, p5) => {
      const v = get(dict, key);
      return p1 + (typeof v === 'string' ? escapeAttr(v) : oldVal) + p3 + key + p5;
    }
  );

  // 3. Generic <tag ... data-i18n="key" ...>content</tag>
  //    non-greedy content + same closing tag. All data-i18n elements on this
  //    site are leaf-ish (no nested tags of the same name), so this is safe.
  html = html.replace(
    /<([a-z][a-z0-9]*)\b([^>]*?)\bdata-i18n="([^"]+)"([^>]*?)>([\s\S]*?)<\/\1>/g,
    (m, tag, before, key, after, content) => {
      const v = get(dict, key);
      const newContent = (typeof v === 'string') ? v : content;
      return '<' + tag + before + ' data-i18n="' + key + '"' + after + '>' + newContent + '</' + tag + '>';
    }
  );

  // 4. <html data-theme> we leave alone. Canonical:
  html = html.replace(
    /<link rel="canonical" href="[^"]*"\s*\/>/,
    `<link rel="canonical" href="${BASE_URL}/${file}" />`
  );

  // 5. og:locale + og:url
  html = html.replace(
    /<meta property="og:locale" content="[^"]*"\s*\/>/,
    `<meta property="og:locale" content="${ogLocale(lang)}" />`
  );
  html = html.replace(
    /<meta property="og:url" content="[^"]*"\s*\/>/,
    `<meta property="og:url" content="${BASE_URL}/${file}" />`
  );

  // 6. Language switcher trigger label.
  html = html.replace(
    /<span data-current-lang>EN<\/span>/,
    `<span data-current-lang>${LANG_LABEL[lang]}</span>`
  );

  fs.writeFileSync(file, html);
  console.log(`  ✓ ${file.padEnd(12)} ${html.length} bytes`);
}

function ogLocale(lang) {
  return ({ en: 'en_US', fr: 'fr_FR', zh: 'zh_CN', ar: 'ar_AE' })[lang] || 'en_US';
}

/* ---------- TECH LANDING PAGES ---------- */
const path = require('path');
const TECH = require('./tech-data.js');

const LANG_ROOT  = { en: 'index.html', fr: 'fr.html', zh: 'zh.html', ar: 'ar.html' };
const LANG_DIR   = { en: 'ltr', fr: 'ltr', zh: 'ltr', ar: 'rtl' };
const TECH_LABELS = {
  en: { back: "Back to consulting", what: "What is it?", why: "Why implement it?", how: "How I help",
        deliverables: "Expected deliverables", related: "Related technologies", by: "by",
        ctaTitle: "Ready to implement?", ctaSub: "Initial scoping call, typically 30 minutes, no commitment." },
  fr: { back: "Retour au conseil", what: "De quoi s'agit-il ?", why: "Pourquoi l'implémenter ?", how: "Comment je vous aide",
        deliverables: "Livrables attendus", related: "Technologies liées", by: "par",
        ctaTitle: "Prêt à implémenter ?", ctaSub: "Appel de cadrage initial, typiquement 30 minutes, sans engagement." },
  zh: { back: "返回咨询服务", what: "这是什么？", why: "为什么要采用？", how: "我如何提供帮助",
        deliverables: "预期交付物", related: "相关技术", by: "由",
        ctaTitle: "准备开始落地？", ctaSub: "首次范围沟通，通常 30 分钟，无须承诺。" },
  ar: { back: "العودة إلى الاستشارات", what: "ما هذا؟", why: "لماذا تطبيقه؟", how: "كيف أساعدك",
        deliverables: "المخرجات المتوقعة", related: "تقنيات ذات صلة", by: "بواسطة",
        ctaTitle: "هل أنت جاهز للتطبيق؟", ctaSub: "مكالمة استكشاف أولية، عادةً ثلاثون دقيقة، دون أي التزام." }
};

/* Inline vendor logos, scaled to fill a 64x64 chip. */
const VENDOR_SVG = {
  microsoft: `<svg viewBox="0 0 48 48"><rect x="6" y="6" width="17" height="17" fill="#F25022"/><rect x="25" y="6" width="17" height="17" fill="#7FBA00"/><rect x="6" y="25" width="17" height="17" fill="#00A4EF"/><rect x="25" y="25" width="17" height="17" fill="#FFB900"/></svg>`,
  nvidia: `<svg viewBox="0 0 48 48"><rect width="48" height="48" rx="10" fill="#0a0f0a"/><text x="24" y="28" text-anchor="middle" font-family="Inter, Arial, sans-serif" font-weight="900" font-size="10.5" fill="#76B900" letter-spacing="0.5">NVIDIA</text><rect x="10" y="33" width="28" height="2" rx="1" fill="#76B900"/></svg>`,
  anthropic: `<svg viewBox="0 0 48 48"><rect width="48" height="48" rx="10" fill="#1a1410"/><path d="M24 8 L36 40 H30 L27.5 33 H20.5 L18 40 H12 L24 8 Z M24 18 L21.8 27 H26.2 L24 18 Z" fill="#D97757"/></svg>`,
  paloalto: `<svg viewBox="0 0 48 48"><rect width="48" height="48" rx="10" fill="#fff"/><g fill="#FA582D"><rect x="8" y="10" width="6" height="28" rx="1"/><rect x="17" y="10" width="6" height="28" rx="1"/><rect x="26" y="10" width="14" height="6" rx="1"/><rect x="26" y="21" width="14" height="6" rx="1"/><rect x="26" y="32" width="14" height="6" rx="1"/></g></svg>`,
  aws: `<svg viewBox="0 0 48 48"><rect width="48" height="48" rx="10" fill="#232F3E"/><text x="24" y="22" text-anchor="middle" font-family="Inter, Arial, sans-serif" font-weight="800" font-size="12" fill="#fff" letter-spacing="0.4">aws</text><path d="M9 32 Q 24 41 39 32" stroke="#FF9900" stroke-width="2.8" fill="none" stroke-linecap="round"/><path d="M36 30 L 39 32 L 36 34" stroke="#FF9900" stroke-width="2.4" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  'generic-violet': `<svg viewBox="0 0 48 48"><defs><linearGradient id="gv" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#a78bfa"/><stop offset="1" stop-color="#6d28d9"/></linearGradient></defs><rect width="48" height="48" rx="10" fill="url(#gv)"/><g fill="none" stroke="#fff" stroke-width="2"><circle cx="16" cy="18" r="4"/><circle cx="32" cy="18" r="4"/><circle cx="24" cy="32" r="4"/><line x1="16" y1="18" x2="32" y2="18"/><line x1="16" y1="18" x2="24" y2="32"/><line x1="32" y1="18" x2="24" y2="32"/></g></svg>`,
  'generic-cyan': `<svg viewBox="0 0 48 48"><defs><linearGradient id="gc" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#22d3ee"/><stop offset="1" stop-color="#0e7490"/></linearGradient></defs><rect width="48" height="48" rx="10" fill="url(#gc)"/><g fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M24 9 L37 14 V 24 C 37 31 31 35 24 38 C 17 35 11 31 11 24 V 14 Z"/><path d="M18 24 L 23 29 L 31 19"/></g></svg>`,
  'generic-green': `<svg viewBox="0 0 48 48"><defs><linearGradient id="gg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#34d399"/><stop offset="1" stop-color="#047857"/></linearGradient></defs><rect width="48" height="48" rx="10" fill="url(#gg)"/><g fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round"><path d="M10 32 L 18 24 L 24 28 L 38 14"/><circle cx="38" cy="14" r="2.4" fill="#fff"/><circle cx="10" cy="32" r="2.4" fill="#fff"/></g></svg>`,
  'generic-amber': `<svg viewBox="0 0 48 48"><defs><linearGradient id="ga" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fbbf24"/><stop offset="1" stop-color="#b45309"/></linearGradient></defs><rect width="48" height="48" rx="10" fill="url(#ga)"/><g fill="none" stroke="#1a1410" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="24" cy="24" r="11"/><g><circle cx="24" cy="14.5" r="1.4" fill="#1a1410"/><circle cx="32" cy="20" r="1.4" fill="#1a1410"/><circle cx="32" cy="28" r="1.4" fill="#1a1410"/><circle cx="24" cy="33.5" r="1.4" fill="#1a1410"/><circle cx="16" cy="28" r="1.4" fill="#1a1410"/><circle cx="16" cy="20" r="1.4" fill="#1a1410"/></g></g></svg>`,
  google: `<svg viewBox="0 0 48 48"><rect width="48" height="48" rx="10" fill="#fff"/><path d="M24 14 a 10 10 0 1 0 9.5 13 H 24 v -4 h 14 a 12 12 0 1 1 -3.6 -8.5" fill="none" stroke="#4285F4" stroke-width="3" stroke-linecap="round"/><path d="M24 23 H 38" stroke="#34A853" stroke-width="3" stroke-linecap="round" fill="none" opacity="0"/><path d="M14 24 a 10 10 0 0 0 19 5" stroke="#34A853" stroke-width="3" stroke-linecap="round" fill="none"/><path d="M14 24 a 10 10 0 0 1 4 -8" stroke="#FBBC05" stroke-width="3" stroke-linecap="round" fill="none"/><path d="M18 16 a 10 10 0 0 1 14 0" stroke="#EA4335" stroke-width="3" stroke-linecap="round" fill="none"/></svg>`
};

function ensureDir(d) { if (!fs.existsSync(d)) fs.mkdirSync(d, { recursive: true }); }

function techFileName(slug, lang) { return lang === 'en' ? `${slug}.html` : `${slug}.${lang}.html`; }
function techFileUrl(slug, lang)  { return `${BASE_URL}/tech/${techFileName(slug, lang)}`; }

function renderTechPage(tech, lang) {
  const dict = I18N[lang];
  const c = tech.content[lang] || tech.content.en;
  const lbl = TECH_LABELS[lang];
  const dir = LANG_DIR[lang];
  const langRoot = LANG_ROOT[lang];

  // Per-page lang URL map for the switcher
  const langUrls = JSON.stringify({
    en: techFileName(tech.slug, 'en'),
    fr: techFileName(tech.slug, 'fr'),
    zh: techFileName(tech.slug, 'zh'),
    ar: techFileName(tech.slug, 'ar')
  }).replace(/"/g, '&quot;');

  // Related techs (other 4 from same group, fallback to other techs)
  const related = TECH.filter(t => t.slug !== tech.slug)
                      .sort((a, b) => (a.group === tech.group ? -1 : 1))
                      .slice(0, 6);

  const relatedHtml = related.map(t => {
    const rc = (t.content[lang] || t.content.en);
    return `      <li><a href="${techFileName(t.slug, lang)}">${escapeHtml(t.title)}</a></li>`;
  }).join('\n');

  const whyBullets = c.why.map(b => `        <li>${escapeHtml(b)}</li>`).join('\n');
  const delivBullets = c.deliverables.map(b => `        <li>${escapeHtml(b)}</li>`).join('\n');

  const pageTitle = `${tech.title} ${dict.nav.consulting || 'Consulting'} | Jeremy Canale, ${dict.hero.eyebrow}`;
  const pageDesc  = `${c.subtitle} ${dict.contact.title || ''}`.trim();

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": `${tech.title} consulting, implementation and audit`,
    "name": `${tech.title} consulting by Jeremy Canale`,
    "description": c.subtitle,
    "provider": {
      "@type": "Person",
      "name": "Jeremy Canale",
      "url": BASE_URL,
      "jobTitle": "Agentic Security Architect"
    },
    "areaServed": ["Europe", "Middle East", "Asia"],
    "category": c.category,
    "url": techFileUrl(tech.slug, lang)
  };

  const vendorSvg = VENDOR_SVG[tech.vendor] || VENDOR_SVG['generic-cyan'];

  return `<!doctype html>
<html lang="${lang}" dir="${dir}" data-theme="dark" class="tech-page">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
  <meta name="color-scheme" content="dark" />
  <meta name="theme-color" content="#070b1c" />

  <title>${escapeHtml(pageTitle)}</title>
  <meta name="description" content="${escapeAttr(pageDesc)}" />
  <meta name="author" content="Jeremy Canale" />

  <link rel="canonical" href="${techFileUrl(tech.slug, lang)}" />
  <link rel="alternate" hreflang="en" href="${techFileUrl(tech.slug, 'en')}" />
  <link rel="alternate" hreflang="fr" href="${techFileUrl(tech.slug, 'fr')}" />
  <link rel="alternate" hreflang="zh" href="${techFileUrl(tech.slug, 'zh')}" />
  <link rel="alternate" hreflang="ar" href="${techFileUrl(tech.slug, 'ar')}" />
  <link rel="alternate" hreflang="x-default" href="${techFileUrl(tech.slug, 'en')}" />

  <meta property="og:type" content="article" />
  <meta property="og:title" content="${escapeAttr(pageTitle)}" />
  <meta property="og:description" content="${escapeAttr(c.subtitle)}" />
  <meta property="og:url" content="${techFileUrl(tech.slug, lang)}" />
  <meta property="og:locale" content="${ogLocale(lang)}" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${escapeAttr(pageTitle)}" />
  <meta name="twitter:description" content="${escapeAttr(c.subtitle)}" />

  <link rel="icon" type="image/svg+xml" href="../favicon.svg" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;700&family=Noto+Naskh+Arabic:wght@400;600;700&family=Noto+Sans+SC:wght@400;500;700;900&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="../styles.css" />

  <script type="application/ld+json">
${JSON.stringify(serviceLd, null, 2)}
  </script>
</head>
<body>

  <div class="bg-layer" aria-hidden="true">
    <svg class="bg-grid" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="bgGlow" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stop-color="#22d3ee" stop-opacity="0.18" />
          <stop offset="50%" stop-color="#a78bfa" stop-opacity="0.08" />
          <stop offset="100%" stop-color="#070b1c" stop-opacity="0" />
        </radialGradient>
        <pattern id="bgDots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="1" fill="#22d3ee" fill-opacity="0.10" />
        </pattern>
      </defs>
      <rect width="1200" height="800" fill="url(#bgDots)" />
      <rect width="1200" height="800" fill="url(#bgGlow)" />
    </svg>
    <div class="bg-noise"></div>
  </div>

  <header class="site-header">
    <a href="../${langRoot}#top" class="brand" aria-label="Jeremy Canale">
      <span class="brand-mark" aria-hidden="true">
        <svg viewBox="0 0 40 40" width="32" height="32">
          <defs>
            <linearGradient id="brandGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#22d3ee" />
              <stop offset="100%" stop-color="#a78bfa" />
            </linearGradient>
          </defs>
          <path d="M20 2 L36 10 V22 C36 30 28 36 20 38 C12 36 4 30 4 22 V10 Z" fill="none" stroke="url(#brandGrad)" stroke-width="2" />
          <circle cx="20" cy="18" r="3.2" fill="url(#brandGrad)" />
          <circle cx="12" cy="24" r="1.8" fill="#22d3ee" />
          <circle cx="28" cy="24" r="1.8" fill="#a78bfa" />
        </svg>
      </span>
      <span class="brand-text">
        <span class="brand-name">Jeremy Canale</span>
        <span class="brand-tag">${escapeHtml(dict.brand.tag)}</span>
      </span>
    </a>

    <nav class="site-nav" aria-label="Primary">
      <a href="../${langRoot}#expertise">${escapeHtml(dict.nav.expertise)}</a>
      <a href="../${langRoot}#consulting">${escapeHtml(dict.nav.consulting)}</a>
      <a href="../${langRoot}#cases">${escapeHtml(dict.nav.cases)}</a>
      <a href="../${langRoot}#experience">${escapeHtml(dict.nav.experience)}</a>
      <a href="../${langRoot}#certifications">${escapeHtml(dict.nav.certifications)}</a>
      <a href="../${langRoot}#faq">${escapeHtml(dict.nav.faq)}</a>
      <a href="../${langRoot}#contact">${escapeHtml(dict.nav.contact)}</a>
    </nav>

    <div class="header-actions">
      <div class="lang-switch" data-lang-switch data-lang-urls="${langUrls}">
        <button class="lang-trigger" aria-haspopup="listbox" aria-expanded="false">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8">
            <circle cx="12" cy="12" r="9" />
            <path d="M3 12h18" />
            <path d="M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18z" />
          </svg>
          <span data-current-lang>${LANG_LABEL[lang]}</span>
          <svg viewBox="0 0 10 6" width="10" height="6" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M1 1l4 4 4-4" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </button>
        <ul class="lang-menu" role="listbox">
          <li><button data-lang="en" type="button"><span>EN</span> English</button></li>
          <li><button data-lang="fr" type="button"><span>FR</span> Français</button></li>
          <li><button data-lang="zh" type="button"><span>中文</span> 简体中文</button></li>
          <li><button data-lang="ar" type="button"><span>AR</span> العربية</button></li>
        </ul>
      </div>
      <a class="btn btn-primary header-cta" href="../${langRoot}#contact">
        <span>${escapeHtml(dict.nav.cta)}</span>
        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
      </a>
    </div>
  </header>

  <main>
    <section class="tech-hero">
      <a href="../${langRoot}#consulting" class="tech-back">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M11 18l-6-6 6-6"/></svg>
        ${escapeHtml(lbl.back)}
      </a>

      <div class="tech-hero-head">
        <div class="tech-hero-logo">${vendorSvg}</div>
        <div class="tech-hero-meta">
          <span class="tech-hero-category">${escapeHtml(c.category)}</span>
          <span class="tech-hero-vendor">${escapeHtml(lbl.by)} ${escapeHtml(tech.vendorName)}</span>
        </div>
      </div>

      <h1>${escapeHtml(tech.title)}</h1>
      <p class="tech-hero-subtitle">${escapeHtml(c.subtitle)}</p>
    </section>

    <div class="tech-content">
      <article class="tech-block span-2">
        <h2><span class="tech-num">01</span> ${escapeHtml(lbl.what)}</h2>
        <p>${escapeHtml(c.what)}</p>
      </article>
      <article class="tech-block">
        <h2><span class="tech-num">02</span> ${escapeHtml(lbl.why)}</h2>
        <ul class="tech-bullets">
${whyBullets}
        </ul>
      </article>
      <article class="tech-block">
        <h2><span class="tech-num">03</span> ${escapeHtml(lbl.how)}</h2>
        <p>${escapeHtml(c.how)}</p>
      </article>
      <article class="tech-block span-2">
        <h2><span class="tech-num">04</span> ${escapeHtml(lbl.deliverables)}</h2>
        <ul class="tech-bullets">
${delivBullets}
        </ul>
      </article>
    </div>

    <div class="tech-cta-bar">
      <div class="tech-cta-text">
        <strong>${escapeHtml(lbl.ctaTitle)}</strong>
        <span>${escapeHtml(lbl.ctaSub)}</span>
      </div>
      <a class="btn btn-primary" href="mailto:contact@jeremycanale.com?subject=${encodeURIComponent(tech.title)}%20consulting%20enquiry">
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>
        contact@jeremycanale.com
      </a>
    </div>

    <div class="tech-related">
      <div class="tech-related-title">${escapeHtml(lbl.related)}</div>
      <ul class="tech-related-list">
${relatedHtml}
      </ul>
    </div>
  </main>

  <footer class="site-footer">
    <div class="footer-inner">
      <span>© <span id="year"></span> Jeremy Canale</span>
      <span class="dot-sep">·</span>
      <span>${escapeHtml(dict.footer.tag)}</span>
      <span class="dot-sep">·</span>
      <a href="https://rankiteo.com" target="_blank" rel="noopener noreferrer">Rankiteo</a>
    </div>
  </footer>

  <script src="../i18n.js" defer></script>
  <script src="../app.js" defer></script>
</body>
</html>
`;
}

function escapeHtml(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function buildTechPages() {
  const out = path.join(__dirname, 'tech');
  ensureDir(out);
  let count = 0;
  for (const tech of TECH) {
    for (const lang of ['en', 'fr', 'zh', 'ar']) {
      // Skip locales that have no translated content yet, fall back to EN.
      const html = renderTechPage(tech, lang);
      const file = path.join(out, techFileName(tech.slug, lang));
      fs.writeFileSync(file, html);
      count++;
    }
  }
  console.log(`  ✓ ${count} tech pages written to /tech/`);
}

/* ---------- sitemap.xml ---------- */
function buildSitemap() {
  const lastmod = new Date().toISOString().split('T')[0];
  const main = [
    { loc: BASE_URL + '/',          lang: 'en' },
    { loc: BASE_URL + '/fr.html',   lang: 'fr' },
    { loc: BASE_URL + '/zh.html',   lang: 'zh' },
    { loc: BASE_URL + '/ar.html',   lang: 'ar' }
  ];
  const mainAlternates = main
    .map(u => `      <xhtml:link rel="alternate" hreflang="${u.lang}" href="${u.loc}"/>`)
    .concat([`      <xhtml:link rel="alternate" hreflang="x-default" href="${BASE_URL}/"/>`])
    .join('\n');

  const mainEntries = main.map(u => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${u.lang === 'en' ? '1.0' : '0.9'}</priority>
${mainAlternates}
  </url>`).join('\n');

  // Standalone pages (blog / downloadable resources), single language.
  const EXTRA_PAGES = [
    { loc: BASE_URL + '/security-architect-guide/', lang: 'fr', changefreq: 'yearly', priority: '0.8' }
  ];
  const extraEntries = EXTRA_PAGES.map(u => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
      <xhtml:link rel="alternate" hreflang="${u.lang}" href="${u.loc}"/>
      <xhtml:link rel="alternate" hreflang="x-default" href="${u.loc}"/>
  </url>`).join('\n');

  // Tech pages: one URL entry per tech per lang, with hreflang alternates for that tech.
  const techEntries = TECH.flatMap(tech => {
    const alts = ['en', 'fr', 'zh', 'ar']
      .map(l => `      <xhtml:link rel="alternate" hreflang="${l}" href="${techFileUrl(tech.slug, l)}"/>`)
      .concat([`      <xhtml:link rel="alternate" hreflang="x-default" href="${techFileUrl(tech.slug, 'en')}"/>`])
      .join('\n');
    return ['en', 'fr', 'zh', 'ar'].map(lang => `  <url>
    <loc>${techFileUrl(tech.slug, lang)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${lang === 'en' ? '0.8' : '0.7'}</priority>
${alts}
  </url>`);
  }).join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${mainEntries}
${extraEntries}
${techEntries}
</urlset>
`;
  fs.writeFileSync('sitemap.xml', xml);
  console.log(`  ✓ sitemap.xml (${main.length + EXTRA_PAGES.length + TECH.length * 4} urls)`);
}

/* ---------- robots.txt ---------- */
function buildRobots() {
  const txt = `User-agent: *
Allow: /

Sitemap: ${BASE_URL}/sitemap.xml
`;
  fs.writeFileSync('robots.txt', txt);
  console.log('  ✓ robots.txt');
}

/* ---------- favicon.svg (inline brand mark) ---------- */
function buildFavicon() {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#22d3ee"/>
      <stop offset="100%" stop-color="#a78bfa"/>
    </linearGradient>
  </defs>
  <rect width="40" height="40" rx="9" fill="#070b1c"/>
  <path d="M20 6 L33 11 V21 C33 28 27 33 20 35 C13 33 7 28 7 21 V11 Z"
        fill="none" stroke="url(#g)" stroke-width="2.4"/>
  <circle cx="20" cy="18" r="3.4" fill="url(#g)"/>
  <circle cx="13" cy="24" r="1.8" fill="#22d3ee"/>
  <circle cx="27" cy="24" r="1.8" fill="#a78bfa"/>
  <line x1="20" y1="18" x2="13" y2="24" stroke="#22d3ee" stroke-width="1" opacity="0.7"/>
  <line x1="20" y1="18" x2="27" y2="24" stroke="#a78bfa" stroke-width="1" opacity="0.7"/>
</svg>
`;
  fs.writeFileSync('favicon.svg', svg);
  console.log('  ✓ favicon.svg');
}

/* ---------- run ---------- */
console.log('Building Jeremy Canale personal site...');
console.log('');
console.log('Locales:');
LOCALES.forEach(buildLocale);
console.log('');
console.log('Tech landing pages:');
buildTechPages();
console.log('');
console.log('SEO infrastructure:');
buildSitemap();
buildRobots();
buildFavicon();
console.log('');
console.log('Done.');
