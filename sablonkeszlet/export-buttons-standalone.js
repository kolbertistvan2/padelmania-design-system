/* PNG-letöltő gomb minden .ad artboard alá. A böngészőben rendereli a
   kreatívot, így előre exportált fájl nélkül is működik — bármelyik
   verzió-fájlban. */
(function () {
  var LIB = (window.__resources && window.__resources.htmlToImage) || 'https://unpkg.com/html-to-image@1.11.13/dist/html-to-image.js';

  function css() {
    if (document.getElementById('pm-dl-css')) return;
    var s = document.createElement('style');
    s.id = 'pm-dl-css';
    s.textContent = '.pm-dl{display:inline-flex;align-items:center;gap:7px;align-self:flex-start;background:var(--action-primary,#FF6B4A);color:#fff;border:0;cursor:pointer;font:600 14px/1 var(--font-sans,Inter,sans-serif);border-radius:var(--radius-md,10px);padding:11px 16px;margin-top:4px}.pm-dl:hover{filter:brightness(.96)}.pm-dl:disabled{opacity:.6;cursor:default}';
    document.head.appendChild(s);
  }

  function label(ad, i) {
    if (!ad.id) return 'kreativ-' + (i + 1);
    if (/^ad-/.test(ad.id)) return ad.id.replace(/^ad-/, 'labda-990-').replace(/-dl$/, '-keszlet');
    return 'padelmania-' + ad.id;
  }

  function init() {
    css();
    var ads = document.querySelectorAll('.ad');
    Array.prototype.forEach.call(ads, function (ad, i) {
      if (ad.parentElement.querySelector('.pm-dl')) return;
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'pm-dl';
      b.textContent = 'PNG letöltése';
      b.addEventListener('click', function () {
        b.disabled = true;
        b.textContent = 'Készül…';
        window.htmlToImage
          .toPng(ad, { width: ad.offsetWidth, height: ad.offsetHeight, pixelRatio: 1, cacheBust: true })
          .then(function (url) {
            var l = document.createElement('a');
            l.href = url;
            l.download = label(ad, i) + '.png';
            document.body.appendChild(l);
            l.click();
            l.remove();
          })
          .catch(function (e) {
            alert('A letöltés nem sikerült: ' + (e && e.message ? e.message : e));
          })
          .then(function () {
            b.disabled = false;
            b.textContent = 'PNG letöltése';
          });
      });
      ad.parentElement.appendChild(b);
    });
  }

  function load() {
    if (window.htmlToImage) return init();
    var s = document.createElement('script');
    s.src = LIB;
    s.onload = init;
    s.onerror = function () { console.error('export-buttons.js: html-to-image nem töltődött be'); };
    document.head.appendChild(s);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', load);
  else load();
})();
