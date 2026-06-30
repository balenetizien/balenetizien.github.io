// ╔══════════════════════════════════════════════════════════════════════╗
// ║  ⚠️  JANGAN UBAH CARA LOAD FILE INI  ⚠️                             ║
// ║  File ini HARUS dimuat dengan: <script defer src="/assets/js/..."> ║
// ║  • "defer" = tidak parse-blocking, jalan setelah DOM ready        ║
// ║  • Inline di <head> akan blokir FCP dan merusak skor Performa     ║
// ║  • File ini menggantikan inline script 5KB yang ada di <head>     ║
// ╚══════════════════════════════════════════════════════════════════════╝
// lang-redirect.js - loaded with defer, DOM is ready when this runs
(function() {
  // Create google translate container (removed from HTML to avoid invalid <div> in <head>)
  if (!document.getElementById('google_translate_element')) {
    var gte = document.createElement('div');
    gte.id = 'google_translate_element';
    document.body.appendChild(gte);
  }
(function() {
'use strict';
var LANG_KEY = 'bale-lang-v2';
var saved = localStorage.getItem(LANG_KEY);

// Get hreflang links
function getHreflangUrl(lang) {
  var links = document.querySelectorAll('link[hreflang="' + lang + '"]');
  for (var i = 0; i < links.length; i++) {
    var href = links[i].getAttribute('href');
    if (href && href !== window.location.href) return href;
  }
  return null;
}

function isEnglishPage() {
  return window.location.pathname.indexOf('/en/') === 0;
}

// Language switcher button
function addLangSwitcher(label, action) {
  window.addEventListener('DOMContentLoaded', function() {
    var btn = document.createElement('div');
    btn.id = 'lang-switcher';
    btn.innerHTML = label;
    btn.onclick = action;
    document.body.appendChild(btn);
  });
}

// Google Translate fallback (for pages without English version)
function getCookie(name) {
  var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  return match ? match[2] : null;
}
function setGTCookie(lang) {
  var d = window.location.hostname;
  document.cookie = 'googtrans=/id/' + lang + '; path=/; domain=.' + d + '; SameSite=Lax';
  document.cookie = 'googtrans=/id/' + lang + '; path=/; SameSite=Lax';
}
function clearGTCookie() {
  var d = window.location.hostname;
  var exp = 'expires=Thu, 01 Jan 1970 00:00:00 GMT';
  document.cookie = 'googtrans=; path=/; domain=.' + d + '; ' + exp;
  document.cookie = 'googtrans=; path=/; ' + exp;
}
function loadGoogleTranslate() {
  window.googleTranslateElementInit = function() {
    new google.translate.TranslateElement({ pageLanguage: 'id', autoDisplay: false }, 'google_translate_element');
  };
  var s = document.createElement('script');
  s.async = true;
  s.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
  document.head.appendChild(s);
}

// Main language switcher for English pages
function addEnglishPageSwitcher() {
  var idUrl = getHreflangUrl('id') || '/';
  addLangSwitcher('🇮🇩 Bahasa Indonesia', function() {
    localStorage.setItem(LANG_KEY, 'id');
    clearGTCookie();
    window.location.href = idUrl;
  });
}

// Switch to English: redirect to static page or use Google Translate
function switchToEnglish(showNotice) {
  var enUrl = getHreflangUrl('en');
  if (enUrl) {
    // Has a real English page — redirect
    localStorage.setItem(LANG_KEY, 'en-page');
    window.location.href = enUrl;
  } else {
    // No English page — use Google Translate
    localStorage.setItem(LANG_KEY, 'en-gt');
    setGTCookie('en');
    loadGoogleTranslate();
    if (showNotice) {
      window.addEventListener('DOMContentLoaded', function() {
        var notice = document.createElement('div');
        notice.id = 'lang-notice';
        notice.innerHTML = '<span>🌐 Auto-translated to English. <a href="#" onclick="window.baleSetLang(\'id\');return false;">View in Bahasa Indonesia</a></span><button onclick="this.parentElement.remove()">✕</button>';
        document.body.appendChild(notice);
      });
    }
    addLangSwitcher('🇮🇩 Bahasa Indonesia', function() { window.baleSetLang('id'); });
  }
}

window.baleSetLang = function(lang) {
  if (lang === 'id') {
    localStorage.setItem(LANG_KEY, 'id');
    clearGTCookie();
    // If on English page, go to Indonesian equivalent
    var idUrl = getHreflangUrl('id');
    if (idUrl) { window.location.href = idUrl; return; }
    window.location.reload();
  } else {
    switchToEnglish(false);
  }
};

// --- MAIN LOGIC ---

// If already on English page: show Indonesian switcher
if (isEnglishPage()) {
  addEnglishPageSwitcher();
  return;
}

// User already chose Indonesian: stay, show English switcher
if (saved === 'id') {
  addLangSwitcher('🇺🇸 Read in English', function() { switchToEnglish(false); });
  return;
}

// User was on Google Translate version: re-enable GT
if (saved === 'en-gt') {
  if (getCookie('googtrans') && getCookie('googtrans').indexOf('/en') >= 0) {
    loadGoogleTranslate();
  }
  addLangSwitcher('🇮🇩 Bahasa Indonesia', function() { window.baleSetLang('id'); });
  return;
}

// User was redirected to English page already — but this is the ID page
// They must have manually navigated back, keep them in ID
if (saved === 'en-page') {
  addLangSwitcher('🇺🇸 Read in English', function() { switchToEnglish(false); });
  return;
}

// No preference set: auto-detect
window.addEventListener('load', function() {
  var browserLang = (navigator.language || navigator.userLanguage || 'id').toLowerCase();
  if (browserLang.startsWith('id')) {
    addLangSwitcher('🇺🇸 Read in English', function() { switchToEnglish(false); });
    return;
  }
  // Non-Indonesian browser language: verify with IP
  fetch('https://ipapi.co/country/', { cache: 'no-cache' })
    .then(function(r) { return r.text(); })
    .then(function(country) {
      if (country.trim() !== 'ID') {
        switchToEnglish(true);
      } else {
        addLangSwitcher('🇺🇸 Read in English', function() { switchToEnglish(false); });
      }
    })
    .catch(function() {
      // Fallback: trust browser lang
      switchToEnglish(true);
    });
});
})();
})
})();
