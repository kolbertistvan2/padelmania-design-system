/* Közvetlen MP4-letöltés. A böngésző a download attribútumot külső
   domainen figyelmen kívül hagyja, ezért blobként hívjuk le a fájlt és
   úgy mentjük. Ha a lehívás elhasal (CORS/hálózat), visszaesik új lapra. */
document.addEventListener('click', async function (e) {
  var a = e.target.closest && e.target.closest('a.dl');
  if (!a) return;
  var href = a.getAttribute('href') || '';
  if (!/\.mp4(\?|$)/i.test(href)) return;

  e.preventDefault();
  var old = a.textContent;
  a.textContent = 'Letöltés…';
  a.style.pointerEvents = 'none';

  try {
    var r = await fetch(href);
    if (!r.ok) throw new Error('HTTP ' + r.status);
    var blob = await r.blob();
    var url = URL.createObjectURL(blob);
    var l = document.createElement('a');
    l.href = url;
    l.download = a.getAttribute('download') || 'video.mp4';
    document.body.appendChild(l);
    l.click();
    l.remove();
    setTimeout(function () { URL.revokeObjectURL(url); }, 5000);
  } catch (err) {
    console.error('video-download.js', err);
    window.open(href, '_blank', 'noopener');
  }

  a.textContent = old;
  a.style.pointerEvents = '';
});
