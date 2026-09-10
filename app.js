/* ============================================================
   Jeremy Canale, site behavior
   - Language switcher (EN / FR / ZH / AR + RTL)
   - Hero rotor (typed words from i18n)
   - Misc interactions
   ============================================================ */

(function () {
  'use strict';

  const I18N = window.I18N || {};
  const RTL_LANGS = window.I18N_RTL || { ar: true };
  const DEFAULT_LANG = window.I18N_DEFAULT || 'en';
  const SUPPORTED = ['en', 'fr', 'zh', 'ar'];
  const STORAGE_KEY = 'jc.lang';
  const LANG_FILES = { en: 'index.html', fr: 'fr.html', zh: 'zh.html', ar: 'ar.html' };

  function currentPageLang() {
    return (document.documentElement.getAttribute('lang') || 'en').toLowerCase().slice(0, 2);
  }

  /* ---------- helpers ---------- */

  function getByPath(obj, path) {
    return path.split('.').reduce(function (acc, key) {
      return acc != null ? acc[key] : undefined;
    }, obj);
  }

  function detectLang() {
    // 1. ?lang=xx query param wins
    const qs = new URLSearchParams(window.location.search);
    const q = qs.get('lang');
    if (q && SUPPORTED.indexOf(q) !== -1) return q;
    // 2. localStorage
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored && SUPPORTED.indexOf(stored) !== -1) return stored;
    } catch (_) {}
    // 3. navigator.language
    const nav = (navigator.language || 'en').slice(0, 2).toLowerCase();
    if (SUPPORTED.indexOf(nav) !== -1) return nav;
    return DEFAULT_LANG;
  }

  /* ---------- apply translations ---------- */

  function applyLang(lang) {
    if (!I18N[lang]) lang = DEFAULT_LANG;
    const dict = I18N[lang];
    const isRTL = !!RTL_LANGS[lang];

    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', isRTL ? 'rtl' : 'ltr');

    // <title> + meta description
    if (dict.meta) {
      if (dict.meta.title) document.title = dict.meta.title;
      const md = document.querySelector('meta[name="description"]');
      if (md && dict.meta.description) md.setAttribute('content', dict.meta.description);
    }

    // every element with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(function (node) {
      const key = node.getAttribute('data-i18n');
      const val = getByPath(dict, key);
      if (typeof val === 'string') {
        // Allow simple <em> emphasis in translations (quote)
        if (/<\/?[a-z][\s\S]*>/i.test(val)) {
          node.innerHTML = val;
        } else {
          node.textContent = val;
        }
      }
    });

    // current-lang label in trigger
    const labelEl = document.querySelector('[data-current-lang]');
    if (labelEl) {
      const labels = { en: 'EN', fr: 'FR', zh: '中文', ar: 'AR' };
      labelEl.textContent = labels[lang] || lang.toUpperCase();
    }

    // refresh rotor words for new locale
    if (window.__rotor && dict.hero && Array.isArray(dict.hero.rotor)) {
      window.__rotor.setWords(dict.hero.rotor);
    }

    // persist
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (_) {}
  }

  /* ---------- language switcher UI ---------- */

  /* ---------- language peers ---------- */
  // Crawlers and preview fetchers render pages with a neutral browser profile. They must
  // never be sent anywhere by client-side code: each URL has to answer with its own
  // content and its own canonical, so no automated hit is filed as a redirect.
  function isAutomatedClient() {
    return !!navigator.webdriver ||
      /bot|crawl|spider|slurp|linkedin|facebookexternalhit|preview/i.test(navigator.userAgent || '');
  }


  // Resolve the URL of the current page in another language. Order of preference:
  //   1. the data-lang-urls JSON map baked on the switcher (guide and tech pages)
  //   2. <link rel="alternate" hreflang="xx"> (present on every pre-rendered page)
  //   3. LANG_FILES, the site-root fallback
  // hreflang hrefs are absolute; they are re-based on the current origin so a visitor
  // on www, on localhost or on a preview host stays on that host.
  function peerUrlForLang(lang) {
    const wrap = document.querySelector('[data-lang-switch]');
    if (wrap) {
      try {
        const raw = wrap.getAttribute('data-lang-urls');
        if (raw) {
          const map = JSON.parse(raw);
          if (map && map[lang]) return map[lang];
        }
      } catch (_) {}
    }
    const link = document.querySelector('link[rel="alternate"][hreflang="' + lang + '"]');
    if (link && link.getAttribute('href')) {
      try {
        const u = new URL(link.getAttribute('href'), window.location.href);
        return window.location.origin + u.pathname + u.search;
      } catch (_) {}
    }
    return LANG_FILES[lang] || null;
  }

  // Drop ?lang= from the address bar, keeping any other parameter and the hash.
  // Shared links and the canonical tag then stay on the clean URL.
  function stripLangParam() {
    if (!window.history || !window.history.replaceState) return;
    try {
      const url = new URL(window.location.href);
      if (!url.searchParams.has('lang')) return;
      url.searchParams.delete('lang');
      const qs = url.searchParams.toString();
      window.history.replaceState(null, '', url.pathname + (qs ? '?' + qs : '') + (window.location.hash || ''));
    } catch (_) {}
  }

  /* ---------- ?lang=xx selector ---------- */

  // An explicit ?lang=xx anywhere on the site selects that language: it navigates to the
  // matching pre-rendered page when one exists, remembers the choice for later visits,
  // and disables the browser-language redirect for this session.
  // Returns true when a navigation was started, so boot() can stop there.
  function applyLangQueryParam() {
    let want = null;
    try { want = new URLSearchParams(window.location.search).get('lang'); } catch (_) { return false; }
    if (!want) return false;
    want = String(want).toLowerCase().slice(0, 2);
    if (SUPPORTED.indexOf(want) === -1) { stripLangParam(); return false; }
    if (isAutomatedClient()) return false;

    // Explicit choice: remember it, and stand down the automatic redirect.
    try { localStorage.setItem(STORAGE_KEY, want); } catch (_) {}
    try { sessionStorage.setItem('jc.autolang', '1'); } catch (_) {}

    if (currentPageLang() === want) { stripLangParam(); return false; }

    const target = peerUrlForLang(want);
    if (!target) { stripLangParam(); return false; }
    let abs;
    try { abs = new URL(target, window.location.href); } catch (_) { stripLangParam(); return false; }
    if (abs.origin + abs.pathname === window.location.origin + window.location.pathname) {
      stripLangParam();
      return false;
    }
    window.location.replace(abs.href + (window.location.hash || ''));
    return true;
  }

  function initLangSwitch() {
    const wrap = document.querySelector('[data-lang-switch]');
    if (!wrap) return;
    const trigger = wrap.querySelector('.lang-trigger');
    const menu = wrap.querySelector('.lang-menu');

    function close() {
      wrap.setAttribute('data-open', 'false');
      trigger.setAttribute('aria-expanded', 'false');
    }
    function open() {
      wrap.setAttribute('data-open', 'true');
      trigger.setAttribute('aria-expanded', 'true');
    }
    trigger.addEventListener('click', function (e) {
      e.stopPropagation();
      wrap.getAttribute('data-open') === 'true' ? close() : open();
    });
    // Per-page override: the build script bakes a data-lang-urls JSON map
    // on the wrapper so each page (main or tech) navigates to the right peer.
    let pageLangUrls = null;
    try {
      const raw = wrap.getAttribute('data-lang-urls');
      if (raw) pageLangUrls = JSON.parse(raw);
    } catch (_) {}

    menu.querySelectorAll('button[data-lang]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        const lang = btn.getAttribute('data-lang');
        close();
        // If we already match the requested lang, do nothing (the page is already correct)
        if (currentPageLang() === lang) return;
        // Persist for any subsequent visits.
        try { localStorage.setItem(STORAGE_KEY, lang); } catch (_) {}
        // Prefer navigating to the pre-rendered peer file (SEO-correct URL).
        const target = (pageLangUrls && pageLangUrls[lang]) || peerUrlForLang(lang);
        if (target) {
          window.location.href = target + (location.hash || '');
          return;
        }
        // Fallback: client-side replacement.
        applyLang(lang);
      });
    });
    document.addEventListener('click', function (e) {
      if (!wrap.contains(e.target)) close();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') close();
    });
  }

  /* ---------- hero rotor (typed) ---------- */

  function initRotor() {
    const root = document.querySelector('[data-rotor]');
    if (!root) return;
    const textEl = root.querySelector('.hero-rotor-text');
    if (!textEl) return;

    let words = ['secure AI agents'];
    let idx = 0;
    let charIdx = 0;
    let deleting = false;
    let timer;

    function step() {
      const word = words[idx % words.length];
      if (!deleting) {
        charIdx++;
        textEl.textContent = word.slice(0, charIdx);
        if (charIdx === word.length) {
          deleting = true;
          timer = setTimeout(step, 1700);
          return;
        }
      } else {
        charIdx--;
        textEl.textContent = word.slice(0, charIdx);
        if (charIdx === 0) {
          deleting = false;
          idx++;
        }
      }
      timer = setTimeout(step, deleting ? 35 : 90);
    }

    window.__rotor = {
      setWords: function (next) {
        if (!Array.isArray(next) || !next.length) return;
        words = next.slice();
        idx = 0; charIdx = 0; deleting = false;
        clearTimeout(timer);
        textEl.textContent = '';
        timer = setTimeout(step, 400);
      }
    };

    timer = setTimeout(step, 400);
  }

  /* ---------- year ---------- */

  function setYear() {
    const el = document.getElementById('year');
    if (el) el.textContent = new Date().getFullYear();
  }

  /* ---------- header shadow on scroll ---------- */

  function initHeaderShadow() {
    const header = document.querySelector('.site-header');
    if (!header) return;
    const onScroll = function () {
      header.classList.toggle('is-scrolled', window.scrollY > 8);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ---------- browser-language redirect ---------- */
  // Once per browser session, send the visitor to the version of the current page that
  // matches their stored preference (language switcher) or, failing that, their browser
  // language, when such a version exists (declared with <link rel="alternate" hreflang>).
  // An explicit ?lang= wins, direct links are respected after the first check, and
  // nothing happens on file:// so local previews stay put.

  function autoRedirectToBrowserLang() {
    var FLAG = 'jc.autolang';
    if (window.location.protocol === 'file:') return false;
    // Crawlers render pages with an English browser: never redirect them, so every
    // language version stays indexable at its own URL (hreflang does the rest).
    if (isAutomatedClient()) return false;
    try { if (sessionStorage.getItem(FLAG)) return false; } catch (_) {}
    try { sessionStorage.setItem(FLAG, '1'); } catch (_) {}
    if (new URLSearchParams(window.location.search).get('lang')) return false;

    var pageLang = currentPageLang();
    var want = null;
    try { want = localStorage.getItem(STORAGE_KEY); } catch (_) {}
    if (!want || SUPPORTED.indexOf(want) === -1) {
      want = null;
      var prefs = (navigator.languages && navigator.languages.length) ? navigator.languages : [navigator.language || ''];
      for (var i = 0; i < prefs.length; i++) {
        var code = String(prefs[i]).slice(0, 2).toLowerCase();
        if (SUPPORTED.indexOf(code) !== -1) { want = code; break; }
      }
    }
    if (!want || want === pageLang) return false;

    var link = document.querySelector('link[rel="alternate"][hreflang="' + want + '"]');
    if (!link || !link.getAttribute('href')) return false;
    var target;
    try {
      var u = new URL(link.getAttribute('href'), window.location.href);
      target = window.location.origin + u.pathname + u.search;   // same host as the current page
    } catch (_) { return false; }
    if (target === window.location.origin + window.location.pathname + window.location.search) return false;
    window.location.replace(target + (window.location.hash || ''));
    return true;
  }

  /* ---------- boot ---------- */

  function boot() {
    if (applyLangQueryParam()) return;
    if (autoRedirectToBrowserLang()) return;
    initLangSwitch();
    initRotor();
    setYear();
    initHeaderShadow();
    // If we're on a pre-rendered page (lang baked into <html lang>), only update
    // the rotor words and the trigger label, do not rewrite the body.
    const pageLang = currentPageLang();
    if (SUPPORTED.indexOf(pageLang) !== -1) {
      const dict = I18N[pageLang];
      if (dict) {
        const labelEl = document.querySelector('[data-current-lang]');
        if (labelEl) {
          const labels = { en: 'EN', fr: 'FR', zh: '中文', ar: 'AR' };
          labelEl.textContent = labels[pageLang] || pageLang.toUpperCase();
        }
        if (window.__rotor && dict.hero && Array.isArray(dict.hero.rotor)) {
          window.__rotor.setWords(dict.hero.rotor);
        }
      }
    } else {
      // Legacy/dev fallback: full client-side replacement.
      applyLang(detectLang());
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
