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

  /* ---------- deck carousel (blog posts) ---------- */
  // Horizontal scroll-snap track, one slide per view. Buttons and arrow keys move one
  // slide; swiping works natively. The counter and title follow the scroll position.
  // data-autoplay="<ms>" advances automatically; it pauses while the pointer or the
  // keyboard focus is on the carousel, during a touch, and while the tab is hidden.

  function initDeckCarousels() {
    document.querySelectorAll('[data-carousel]').forEach(function (root) {
      var track = root.querySelector('.deck-track');
      if (!track) return;
      var slides = Array.prototype.slice.call(track.children);
      var prev = root.querySelector('[data-prev]');
      var next = root.querySelector('[data-next]');
      var counter = root.querySelector('[data-counter]');
      var title = root.querySelector('.deck-title');   // not [data-title]: every slide carries that attribute too
      var index = 0, raf = 0;
      var delay = parseInt(root.getAttribute('data-autoplay') || '0', 10);
      var timer = null, paused = false;

      function render() {
        if (counter) counter.textContent = (index + 1) + ' / ' + slides.length;
        if (title) title.textContent = slides[index].getAttribute('data-title') || '';
        if (prev) prev.disabled = index === 0;
        if (next) next.disabled = index === slides.length - 1;
      }
      function update() {   // follow a manual swipe
        var w = track.clientWidth || 1;
        index = Math.max(0, Math.min(slides.length - 1, Math.round(track.scrollLeft / w)));
        render();
      }
      var settling = 0;   // while a programmatic scroll is in flight, ignore scroll events
      function go(i, instant) {   // move, and reflect the target at once rather than after the smooth scroll
        index = Math.max(0, Math.min(slides.length - 1, i));
        render();
        clearTimeout(settling);
        settling = setTimeout(function () { settling = 0; update(); }, instant ? 50 : 700);
        track.scrollTo({ left: index * track.clientWidth, behavior: instant ? 'instant' : 'smooth' });
      }
      function stop() { if (timer) { clearInterval(timer); timer = null; } }
      function start() {
        if (!(delay > 0)) return;
        stop();
        timer = setInterval(function () {
          if (paused) return;   // hidden tabs are handled by the visibilitychange listener below
          if (index >= slides.length - 1) go(0, true); else go(index + 1);
        }, delay);
      }

      if (prev) prev.addEventListener('click', function () { go(index - 1); start(); });
      if (next) next.addEventListener('click', function () { go(index + 1); start(); });
      root.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowLeft')  { e.preventDefault(); go(index - 1); start(); }
        if (e.key === 'ArrowRight') { e.preventDefault(); go(index + 1); start(); }
      });
      track.addEventListener('scroll', function () {
        if (settling) return;
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(update);
      }, { passive: true });
      window.addEventListener('resize', update);

      if (delay > 0) {
        root.addEventListener('mouseenter', function () { paused = true; });
        root.addEventListener('mouseleave', function () { paused = false; });
        root.addEventListener('focusin',    function () { paused = true; });
        root.addEventListener('focusout',   function () { paused = false; });
        track.addEventListener('touchstart', function () { paused = true; }, { passive: true });
        track.addEventListener('touchend',   function () { setTimeout(function () { paused = false; }, delay * 2); }, { passive: true });
        document.addEventListener('visibilitychange', function () { if (document.hidden) stop(); else start(); });
      }

      update();
      start();
    });
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

  /* ---------- contributions: merged public pull requests, read live from the GitHub API ---------- */
  // The <li data-pr="owner/repo#n"> cards already in the page are the curated, translated ones. They are
  // also the fallback when the API is unreachable or rate limited, and what crawlers see. Every other
  // merged pull request gets a generated card. Strings coming from the API are only ever written with
  // textContent, and links are rebuilt from the validated repository name, never taken from the response.

  var CONTRIB_CACHE_KEY = 'jc.contrib.v1';
  var CONTRIB_TTL = 6 * 60 * 60 * 1000;   // unauthenticated API: 10 searches/min and 60 core calls/h per visitor IP
  var CONTRIB_MAX = 12;
  var CONTRIB_REPO = /^[\w.-]+\/[\w.-]+$/;

  function initContributions() {
    var list = document.querySelector('[data-contrib]');
    if (!list || !window.fetch) return;
    var user = list.getAttribute('data-contrib-user') || '';
    if (!/^[A-Za-z0-9-]+$/.test(user)) return;
    var cached = readContribCache(user);
    if (cached) { renderContributions(list, cached); return; }
    fetchContributions(user, curatedContribCards(list)).then(function (items) {
      if (!items.length) return;
      writeContribCache(user, items);
      renderContributions(list, items);
    }).catch(function () { /* keep the static cards */ });
  }

  function curatedContribCards(list) {
    var map = {};
    Array.prototype.forEach.call(list.querySelectorAll('[data-pr]'), function (li) {
      map[li.getAttribute('data-pr')] = li;
    });
    return map;
  }

  function githubJson(url) {
    return fetch(url, { headers: { Accept: 'application/vnd.github+json' } }).then(function (r) {
      if (!r.ok) throw new Error('GitHub API ' + r.status);
      return r.json();
    });
  }

  function fetchContributions(user, curated) {
    // Merged, public, and outside the author's own repositories.
    var q = 'author:' + user + ' type:pr is:merged is:public -user:' + user;
    var url = 'https://api.github.com/search/issues?per_page=' + CONTRIB_MAX +
      '&sort=created&order=desc&q=' + encodeURIComponent(q);
    return githubJson(url).then(function (data) {
      return Promise.all((data.items || []).slice(0, CONTRIB_MAX).map(function (it) {
        var item = {
          repo: String(it.repository_url || '').replace('https://api.github.com/repos/', ''),
          number: parseInt(it.number, 10),
          title: String(it.title || ''),
          excerpt: contribExcerpt(it.body),
          mergedAt: (it.pull_request && it.pull_request.merged_at) || ''
        };
        if (!CONTRIB_REPO.test(item.repo) || curated[item.repo + '#' + item.number]) return item;
        // The search result has no diff stats and no repository description; the pull request has both.
        return githubJson('https://api.github.com/repos/' + item.repo + '/pulls/' + item.number).then(function (pr) {
          item.additions = pr.additions;
          item.deletions = pr.deletions;
          item.files = pr.changed_files;
          item.mergedAt = pr.merged_at || item.mergedAt;
          item.repoDesc = String((pr.base && pr.base.repo && pr.base.repo.description) || '');
          return item;
        }).catch(function () { return item; });
      }));
    }).then(function (items) {
      return items.filter(function (p) { return CONTRIB_REPO.test(p.repo) && p.number > 0 && p.mergedAt; })
        .sort(function (a, b) { return a.mergedAt < b.mergedAt ? 1 : -1; });
    });
  }

  // First paragraph of the pull request description, as plain text.
  function contribExcerpt(body) {
    var text = String(body || '').replace(/\r/g, '');
    var section = text.match(/^#+\s*(?:Problem|Summary|Description|Context)[^\n]*\n+([\s\S]*?)(?=\n#+\s|$)/im);
    if (section) text = section[1];
    text = text.replace(/```[\s\S]*?```/g, ' ').replace(/<!--[\s\S]*?-->/g, ' ')
      .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ').replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
      .replace(/^#+\s.*$/gm, ' ').replace(/^\s*[-+*]\s+/gm, '').replace(/[`*]/g, '')
      .replace(/\s+/g, ' ').trim();
    if (text.length <= 320) return text;
    return text.slice(0, 320).replace(/\s+\S*$/, '') + '…';
  }

  function readContribCache(user) {
    try {
      var c = JSON.parse(localStorage.getItem(CONTRIB_CACHE_KEY) || 'null');
      if (c && c.user === user && Array.isArray(c.items) && Date.now() - c.t < CONTRIB_TTL) return c.items;
    } catch (_) {}
    return null;
  }

  function writeContribCache(user, items) {
    try { localStorage.setItem(CONTRIB_CACHE_KEY, JSON.stringify({ user: user, t: Date.now(), items: items })); } catch (_) {}
  }

  function renderContributions(list, items) {
    var lang = currentPageLang();
    var labels = (I18N[lang] && I18N[lang].contrib) || (I18N.en && I18N.en.contrib) || {};
    var curated = curatedContribCards(list);
    var icons = {
      repo: list.querySelector('.contrib-repo svg'),
      state: list.querySelector('.contrib-state svg'),
      link: list.querySelector('.contrib-link svg')
    };
    // appendChild moves a card that is already in the list, so the list ends up in API order, newest first.
    items.forEach(function (p) {
      var card = curated[p.repo + '#' + p.number] || buildContribCard(p, labels, lang, icons);
      if (card) list.appendChild(card);
    });
    var status = document.querySelector('[data-contrib-status]');
    if (status && labels.synced) { status.textContent = labels.synced; status.hidden = false; }
  }

  function contribEl(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }

  function contribLink(cls, href, text) {
    var a = contribEl('a', cls, text);
    a.href = href;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    return a;
  }

  function buildContribCard(p, labels, lang, icons) {
    var number = parseInt(p.number, 10);
    if (!CONTRIB_REPO.test(String(p.repo)) || !(number > 0)) return null;   // cached data is re-validated too
    var repoUrl = 'https://github.com/' + p.repo;
    var prUrl = repoUrl + '/pull/' + number;

    var li = contribEl('li', 'contrib-item');
    li.setAttribute('data-pr', p.repo + '#' + number);

    var head = contribEl('div', 'contrib-head');
    var repo = contribLink('contrib-repo', repoUrl, p.repo);
    repo.dir = 'ltr';
    if (icons.repo) repo.insertBefore(icons.repo.cloneNode(true), repo.firstChild);
    var state = contribEl('div', 'contrib-state');
    if (icons.state) state.appendChild(icons.state.cloneNode(true));
    state.appendChild(contribEl('span', '', labels.merged || 'Merged'));
    head.appendChild(repo);
    head.appendChild(state);
    li.appendChild(head);

    var title = contribEl('h3', 'contrib-title');
    var titleLink = contribLink('', prUrl, String(p.title || '') + ' ');
    titleLink.dir = 'ltr';
    titleLink.appendChild(contribEl('span', 'contrib-num', '#' + number));
    title.appendChild(titleLink);
    li.appendChild(title);

    var desc = String(p.repoDesc || '').replace(/:[a-z0-9_+-]+:/g, '').replace(/\s+/g, ' ').trim();
    if (desc) {
      var project = contribEl('div', 'contrib-project', desc.length > 150 ? desc.slice(0, 150).replace(/\s+\S*$/, '') + '…' : desc);
      project.dir = 'ltr';
      project.lang = 'en';
      li.appendChild(project);
    }
    if (p.excerpt) {
      var para = contribEl('p', '', String(p.excerpt));
      para.dir = 'ltr';
      para.lang = 'en';
      li.appendChild(para);
    }

    var foot = contribEl('div', 'contrib-foot');
    var stats = contribEl('div', 'contrib-stats');
    var merged = new Date(p.mergedAt);
    if (!isNaN(merged)) {
      var when = contribEl('time', '', merged.toLocaleDateString({ en: 'en-GB', ar: 'ar-u-nu-latn' }[lang] || lang, { day: 'numeric', month: 'long', year: 'numeric' }));
      when.dateTime = String(p.mergedAt).slice(0, 10);
      stats.appendChild(when);
    }
    if (typeof p.files === 'number') {
      stats.appendChild(document.createTextNode(' · ' + (labels.nFiles || '{n} files').replace('{n}', p.files) + ' · '));
      stats.appendChild(contribEl('b', 'add', '+' + p.additions));
      stats.appendChild(document.createTextNode(' '));
      stats.appendChild(contribEl('b', 'del', '-' + p.deletions));
    }
    foot.appendChild(stats);
    var view = contribLink('contrib-link', prUrl, null);
    view.appendChild(contribEl('span', '', labels.view || 'View the pull request'));
    if (icons.link) view.appendChild(icons.link.cloneNode(true));
    foot.appendChild(view);
    li.appendChild(foot);
    return li;
  }

  /* ---------- boot ---------- */

  function boot() {
    if (applyLangQueryParam()) return;
    if (autoRedirectToBrowserLang()) return;
    initLangSwitch();
    initRotor();
    setYear();
    initHeaderShadow();
    initDeckCarousels();
    initContributions();
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
