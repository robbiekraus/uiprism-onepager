// Video start screen and image lightbox. Same behavior as the portfolio case studies.
(function () {
  var btn = document.getElementById('walk-start');
  var video = document.getElementById('walk-video');
  if (btn && video) {
    btn.addEventListener('click', function () {
      btn.classList.add('is-gone');
      video.muted = false;
      var p = video.play();
      if (p && p.catch) p.catch(function () { video.muted = true; video.play(); });
      video.focus();
    });
  }

  var shots = Array.prototype.slice.call(document.querySelectorAll('[data-shot]'));
  if (!shots.length) return;
  var overlay = null, lastFocus = null;

  function close() {
    if (!overlay) return;
    var o = overlay; overlay = null;
    o.classList.remove('is-open');
    document.documentElement.classList.remove('lightbox-open');
    document.removeEventListener('keydown', onKey);
    setTimeout(function () { o.remove(); }, 250);
    if (lastFocus) lastFocus.focus();
  }
  function onKey(e) { if (e.key === 'Escape') close(); }

  function open(box) {
    if (overlay) return;
    var src = box.querySelector('img');
    lastFocus = box;
    overlay = document.createElement('div');
    overlay.className = 'lightbox';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.setAttribute('aria-label', src.alt || 'Enlarged image');
    var img = document.createElement('img');
    img.src = src.currentSrc || src.src;
    img.alt = src.alt || '';
    var x = document.createElement('button');
    x.type = 'button'; x.className = 'lightbox-close'; x.setAttribute('aria-label', 'Close'); x.textContent = '×';
    overlay.appendChild(img); overlay.appendChild(x);
    overlay.addEventListener('click', close);
    document.body.appendChild(overlay);
    document.documentElement.classList.add('lightbox-open');
    document.addEventListener('keydown', onKey);
    requestAnimationFrame(function () { if (overlay) overlay.classList.add('is-open'); });
    x.focus();
  }

  shots.forEach(function (box) {
    box.setAttribute('aria-label', 'Enlarge image: ' + (box.querySelector('img').alt || ''));
    box.addEventListener('click', function () { open(box); });
  });
})();
