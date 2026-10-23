(function () {
  // Reveal on scroll
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var ro = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); ro.unobserve(e.target); } });
    }, { rootMargin: '0px 0px -10% 0px' });
    reveals.forEach(function (r) { ro.observe(r); });
  } else { reveals.forEach(function (r) { r.classList.add('in'); }); }

  // Nav highlight
  var links = Array.prototype.slice.call(document.querySelectorAll('.nav a[href^="#"]'));
  var targets = links.map(function (a) { return document.querySelector(a.getAttribute('href')); }).filter(Boolean);
  if ('IntersectionObserver' in window && targets.length) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (!e.isIntersecting) return;
        links.forEach(function (a) { a.removeAttribute('aria-current'); });
        var a = links.find(function (l) { return l.getAttribute('href') === '#' + e.target.id; });
        if (a) a.setAttribute('aria-current', 'true');
      });
    }, { rootMargin: '-40% 0px -55% 0px' });
    targets.forEach(function (t) { io.observe(t); });
  }

  // 30-second previews on the singles grid: one shared audio element, play/pause button per card.
  var audio = new Audio(); audio.preload = 'none';
  var current = null;
  function stop() { audio.pause(); if (current) { current.classList.remove('playing'); current.querySelector('.play').setAttribute('aria-label', 'Play 30-second preview'); } current = null; }
  audio.addEventListener('ended', stop); audio.addEventListener('error', stop);
  document.querySelectorAll('.single[data-preview]').forEach(function (card) {
    var btn = document.createElement('button');
    btn.className = 'play'; btn.type = 'button'; btn.setAttribute('aria-label', 'Play 30-second preview');
    btn.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>';
    card.appendChild(btn);
    btn.addEventListener('click', function (ev) {
      ev.preventDefault(); ev.stopPropagation();
      if (current === card) { stop(); return; }
      stop();
      current = card; card.classList.add('playing'); btn.setAttribute('aria-label', 'Pause preview');
      audio.src = card.getAttribute('data-preview');
      audio.play().catch(stop);
    });
  });
})();
