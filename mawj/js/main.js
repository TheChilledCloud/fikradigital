/* MAWJ — motion & interactions: Lenis + GSAP
   rail nav, framed hero, masked reveals, parallax, room hover previews,
   sticky experience panel, quote rotator, coast route draw, magnetic buttons */
(function () {
  'use strict';

  var fine = window.matchMedia('(pointer: fine)').matches;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var gsapOk = typeof window.gsap !== 'undefined' && typeof window.ScrollTrigger !== 'undefined';

  if (!gsapOk) {
    document.documentElement.classList.remove('js'); /* show everything */
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  /* ---------- smooth scroll ---------- */
  var lenis = null;
  if (window.Lenis && !reduce) {
    lenis = new Lenis({ duration: 1.3, easing: function (t) { return Math.min(1, 1.001 - Math.pow(2, -10 * t)); } });
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add(function (t) { lenis.raf(t * 1000); });
    gsap.ticker.lagSmoothing(0);
  }

  var overlay = document.getElementById('menuOverlay');
  var menuBtn = document.getElementById('menuBtn');
  var menuClose = document.getElementById('menuClose');
  var topbar = document.querySelector('.topbar');

  function goTo(target) {
    if (lenis) { lenis.scrollTo(target, { duration: 1.7, offset: topbar ? -topbar.offsetHeight : 0, force: true }); }
    else { var el = document.querySelector(target); if (el) el.scrollIntoView({ behavior: 'smooth' }); }
  }
  function closeMenu() {
    overlay.classList.remove('open');
    overlay.setAttribute('aria-hidden', 'true');
    menuBtn.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('no-scroll');
    if (lenis) lenis.start();
  }
  document.querySelectorAll('[data-scrollto]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var t = a.getAttribute('data-scrollto');
      if (t && document.querySelector(t)) {
        e.preventDefault();
        closeMenu();
        goTo(t);
      }
    });
  });

  /* ---------- hero intro ---------- */
  var heroTl = gsap.timeline({ defaults: { ease: 'power3.out' }, delay: 0.15 });
  if (!reduce) {
    heroTl
      .from('.hero-kicker', { opacity: 0, y: 16, duration: 0.8 })
      .from('.hero-sub', { opacity: 0, y: 22, duration: 0.9 }, '-=0.4')
      .from('.hero-ctas .btn', { opacity: 0, y: 18, duration: 0.8, stagger: 0.12 }, '-=0.6')
      .from('.hero-meta', { opacity: 0, duration: 0.8 }, '-=0.5')
      .from('.hero-fig .hf-img', { clipPath: 'inset(100% 0% 0% 0%)', duration: 1.35, ease: 'power4.inOut' }, '-=0.9')
      .from('.hero-fig .hf-img img', { scale: 1.22, duration: 2.4, ease: 'power3.out' }, '<')
      .from('.hero-fig .hf-frame', { opacity: 0, duration: 0.9 }, '-=1.2');
  } else {
    gsap.set('.hero-title .ln > span', { yPercent: 0 });
  }

  /* ---------- reveals via IntersectionObserver + CSS transitions ----------
     (deterministic; avoids the ScrollTrigger once+refresh revert quirk) */
  if ('IntersectionObserver' in window && !reduce) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add('in-view');
          io.unobserve(en.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    document.querySelectorAll('.reveal, .reveal-lines').forEach(function (el) { io.observe(el); });
  } else {
    document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('in-view'); });
  }

  /* native scroll fallback so ScrollTrigger always updates (Lenis proxies too) */
  window.addEventListener('scroll', function () { ScrollTrigger.update(); }, { passive: true });

  /* ---------- parallax images ---------- */
  gsap.utils.toArray('[data-parallax]').forEach(function (img) {
    var amt = parseFloat(img.getAttribute('data-parallax')) || 6;
    var wrap = img.closest('[data-parallax-wrap]') || img.parentElement;
    gsap.fromTo(img, { yPercent: -amt }, {
      yPercent: amt, ease: 'none',
      scrollTrigger: { trigger: wrap, start: 'top bottom', end: 'bottom top', scrub: 0.6 }
    });
  });

  /* ---------- stats count-up ---------- */
  gsap.utils.toArray('[data-count]').forEach(function (el) {
    var end = parseFloat(el.getAttribute('data-count'));
    var obj = { v: 0 };
    gsap.to(obj, {
      v: end, duration: 1.8, ease: 'power2.out',
      scrollTrigger: { trigger: el, start: 'top 90%', once: true },
      onUpdate: function () { el.textContent = Math.round(obj.v); }
    });
  });

  /* ---------- rail active state ---------- */
  var railLinks = gsap.utils.toArray('.rail-nav a');
  var ids = ['house', 'rooms', 'dining', 'experiences', 'coast', 'reserve'];
  ids.forEach(function (id) {
    var sec = document.getElementById(id);
    if (!sec) return;
    ScrollTrigger.create({
      trigger: sec,
      start: 'top 55%',
      end: 'bottom 55%',
      onToggle: function (self) {
        if (self.isActive) {
          railLinks.forEach(function (a) { a.classList.toggle('active', a.dataset.active === id); });
        }
      }
    });
  });

  /* ---------- room rows: accordion + floating preview ---------- */
  var fp = document.getElementById('fp');
  var fpImg = document.getElementById('fpImg');
  var fpCap = document.getElementById('fpCap');
  var fpX = null, fpY = null;
  if (fine && fp) {
    fpX = gsap.quickTo(fp, 'x', { duration: 0.4, ease: 'power3' });
    fpY = gsap.quickTo(fp, 'y', { duration: 0.4, ease: 'power3' });
    window.addEventListener('mousemove', function (e) { fpX(e.clientX); fpY(e.clientY); });
  }
  gsap.utils.toArray('.room-row').forEach(function (row) {
    var img = row.getAttribute('data-preview');
    var nameEl = row.querySelector('.rr-name');
    var canPreview = fp && fpImg && fpCap && fpX && fpY;
    row.addEventListener('mouseenter', function () {
      if (!canPreview) return;
      if (!fpImg.src.endsWith(img)) fpImg.src = img;
      fpCap.textContent = nameEl.textContent;
      fp.classList.add('show');
      gsap.fromTo(fp, { scale: 0.88 }, { scale: 1, duration: 0.55, ease: 'power3.out' });
    });
    row.addEventListener('mouseleave', function () {
      if (!canPreview) return;
      fp.classList.remove('show');
      gsap.to(fp, { scale: 0.9, duration: 0.35 });
    });
    row.addEventListener('click', function () {
      var open = row.classList.toggle('open');
      row.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    row.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); row.click(); }
    });
  });

  /* ---------- experiences: sticky image crossfade ---------- */
  var expItems = gsap.utils.toArray('.exp-item');
  var esImgs = gsap.utils.toArray('.es-img');
  expItems.forEach(function (item, i) {
    var activate = function () {
      expItems.forEach(function (x) { x.classList.remove('active'); });
      item.classList.add('active');
      esImgs.forEach(function (im, j) { im.classList.toggle('active', j === i); });
    };
    item.addEventListener('mouseenter', activate);
    item.addEventListener('focus', activate);
    item.addEventListener('click', activate);
  });

  /* ---------- quote rotator ---------- */
  var quoteEl = document.getElementById('wQuote');
  var whoEl = document.getElementById('wWho');
  var progFill = document.getElementById('wProgFill');
  var qIdx = 0;
  var qProg = null;
  var Q_DUR = 7;
  var QUOTES = 3;

  function renderQuote(idx, instant) {
    var d = (window.MAWJ_I18N && window.MAWJ_I18N[window.__mawjLang]) || window.MAWJ_I18N.en;
    var q = d['words.q' + (idx + 1)];
    var a = d['words.a' + (idx + 1)];
    if (!q) return;
    if (instant) {
      quoteEl.innerHTML = q;
      whoEl.innerHTML = a;
      restartProgress();
      return;
    }
    gsap.to([quoteEl, whoEl], {
      opacity: 0, y: 16, duration: 0.4, ease: 'power2.in',
      onComplete: function () {
        quoteEl.innerHTML = q;
        whoEl.innerHTML = a;
        gsap.fromTo(quoteEl, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.75, ease: 'power3.out' });
        gsap.fromTo(whoEl, { opacity: 0 }, { opacity: 1, duration: 0.6, delay: 0.12 });
      }
    });
    restartProgress();
  }
  function restartProgress() {
    if (qProg) qProg.kill();
    if (!progFill) return;
    gsap.set(progFill, { scaleX: 0 });
    qProg = gsap.to(progFill, { scaleX: 1, duration: Q_DUR, ease: 'none', onComplete: next });
  }
  function next() { qIdx = (qIdx + 1) % QUOTES; renderQuote(qIdx); }
  function prev() { qIdx = (qIdx + QUOTES - 1) % QUOTES; renderQuote(qIdx); }

  if (quoteEl && whoEl) {
    var wNext = document.getElementById('wNext');
    var wPrev = document.getElementById('wPrev');
    var wCtrls = document.querySelector('.w-ctrls');
    if (wNext) wNext.addEventListener('click', next);
    if (wPrev) wPrev.addEventListener('click', prev);
    if (wCtrls) {
      wCtrls.addEventListener('mouseenter', function () { if (qProg) qProg.pause(); });
      wCtrls.addEventListener('mouseleave', function () { if (qProg) qProg.resume(); });
    }
    if (!reduce) restartProgress();
  }
  document.addEventListener('mawj:langchange', function () {
    if (quoteEl) renderQuote(qIdx, true);
  });

  /* ---------- mobile menu ---------- */
  if (overlay && menuBtn) {
    menuBtn.addEventListener('click', function () {
      var open = overlay.classList.toggle('open');
      overlay.setAttribute('aria-hidden', open ? 'false' : 'true');
      menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
      document.body.classList.toggle('no-scroll', open);
      if (lenis) { if (open) lenis.stop(); else lenis.start(); }
    });
    if (menuClose) menuClose.addEventListener('click', closeMenu);
  }

  /* ---------- mobile topbar auto-hide on scroll ---------- */
  if (topbar) {
    var hideAt = 140;
    var lastY = window.scrollY;
    var barTick = false;
    function updateTopbar() {
      barTick = false;
      var y = window.scrollY;
      var menuOpen = overlay && overlay.classList.contains('open');
      if (menuOpen || y < hideAt) topbar.classList.remove('hidden');
      else if (y > lastY) topbar.classList.add('hidden');
      else if (y < lastY) topbar.classList.remove('hidden');
      lastY = y;
    }
    function requestTopbarUpdate() {
      if (!barTick) { barTick = true; requestAnimationFrame(updateTopbar); }
    }
    if (lenis) lenis.on('scroll', requestTopbarUpdate);
    else window.addEventListener('scroll', requestTopbarUpdate, { passive: true });
    updateTopbar();
    if (menuBtn) menuBtn.addEventListener('click', function () {
      if (overlay && overlay.classList.contains('open')) topbar.classList.remove('hidden');
    });
  }

  /* ---------- magnetic buttons ---------- */
  if (fine) {
    gsap.utils.toArray('[data-magnetic]').forEach(function (btn) {
      var xTo = gsap.quickTo(btn, 'x', { duration: 0.4, ease: 'power3' });
      var yTo = gsap.quickTo(btn, 'y', { duration: 0.4, ease: 'power3' });
      btn.addEventListener('mousemove', function (e) {
        var r = btn.getBoundingClientRect();
        xTo((e.clientX - (r.left + r.width / 2)) * 0.28);
        yTo((e.clientY - (r.top + r.height / 2)) * 0.28);
      });
      btn.addEventListener('mouseleave', function () { xTo(0); yTo(0); });
    });
  }

  /* ---------- coast route draw ---------- */
  var route = document.querySelector('.cm-route');
  if (route) {
    var rlen = route.getTotalLength();
    gsap.set(route, { strokeDasharray: rlen, strokeDashoffset: rlen });
    gsap.to(route, {
      strokeDashoffset: 0, ease: 'none',
      scrollTrigger: { trigger: '.cmap-wrap', start: 'top 82%', end: 'top 28%', scrub: 0.5 }
    });
    gsap.utils.toArray('.cm-dot').forEach(function (d, i) {
      gsap.fromTo(d, { scale: 0, transformOrigin: 'center' }, {
        scale: 1, duration: 0.6, ease: 'back.out(2.2)', delay: i * 0.14,
        scrollTrigger: { trigger: '.cmap-wrap', start: 'top 80%', once: true }
      });
    });
  }

  /* ---------- coast map interaction (dots <-> rows, tooltip) ---------- */
  (function () {
    var wrap = document.querySelector('.cmap-wrap');
    var rows = Array.prototype.slice.call(document.querySelectorAll('.cm-row'));
    var dots = Array.prototype.slice.call(document.querySelectorAll('.cm-dot'));
    if (!wrap || !rows.length || !dots.length) return;
    var tip = document.querySelector('.cm-tip');
    var tipName = tip ? tip.querySelector('.cm-tip-name') : null;
    var tipDesc = tip ? tip.querySelector('.cm-tip-desc') : null;
    var active = -1;

    function cmI18n() {
      return (window.MAWJ_I18N && window.MAWJ_I18N[window.__mawjLang]) || window.MAWJ_I18N.en;
    }
    function cmLabel(i) {
      var d = cmI18n();
      return { name: d['coast.map' + (i + 1) + '.name'], desc: d['coast.map' + (i + 1) + '.desc'] };
    }
    function cmLang() { return (document.documentElement.lang || 'en'); }

    rows.forEach(function (r, i) {
      r.setAttribute('tabindex', '0');
      r.setAttribute('role', 'button');
    });
    dots.forEach(function (d, i) {
      d.setAttribute('aria-label', cmLabel(i).name);
    });

    function placeTip(i) {
      if (!tip || !tipName || !tipDesc) return;
      var lbl = cmLabel(i);
      tipName.textContent = lbl.name;
      tipDesc.textContent = lbl.desc;
      var cx = parseFloat(dots[i].getAttribute('cx'));
      var cy = parseFloat(dots[i].getAttribute('cy'));
      tip.style.left = (cx / 4) + '%';
      tip.style.top = (cy / 5) + '%';
      var side = cmLang() === 'ar' ? 'left' : 'right';
      tip.classList.remove('cm-tip--right', 'cm-tip--left');
      tip.classList.add('cm-tip--' + side);
      tip.classList.add('is-open');
      tip.setAttribute('aria-hidden', 'false');
      dots[i].setAttribute('aria-label', lbl.name);
      // keep the tooltip inside the wrap horizontally
      var wr = wrap.getBoundingClientRect();
      var tr = tip.getBoundingClientRect();
      var overL = tr.left < wr.left, overR = tr.right > wr.right;
      if ((side === 'right' && overR) || (side === 'left' && overL)) {
        tip.classList.remove('cm-tip--' + side);
        tip.classList.add('cm-tip--' + (side === 'right' ? 'left' : 'right'));
      }
    }
    function clearTip() {
      if (!tip) return;
      tip.classList.remove('is-open');
      tip.setAttribute('aria-hidden', 'true');
    }
    function activate(i) {
      if (active === i) { placeTip(i); return; }
      deactivate();
      active = i;
      gsap.to(dots[i], { scale: 1.8, duration: 0.4, ease: 'back.out(3)' });
      if (rows[i]) rows[i].classList.add('cm-row--active');
      placeTip(i);
    }
    function deactivate() {
      if (active < 0) return;
      gsap.to(dots[active], { scale: 1, duration: 0.35, ease: 'power3.out' });
      if (rows[active]) rows[active].classList.remove('cm-row--active');
      active = -1;
      clearTip();
    }

    dots.forEach(function (d, i) {
      ['mouseenter', 'focus', 'click'].forEach(function (ev) {
        d.addEventListener(ev, function (e) { e.stopPropagation(); activate(i); });
      });
      d.addEventListener('mouseleave', deactivate);
      d.addEventListener('blur', deactivate);
      d.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); activate(i); }
      });
    });
    rows.forEach(function (r, i) {
      ['mouseenter', 'focus', 'click'].forEach(function (ev) {
        r.addEventListener(ev, function (e) { e.stopPropagation(); activate(i); });
      });
      r.addEventListener('mouseleave', deactivate);
      r.addEventListener('blur', deactivate);
      r.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); activate(i); }
      });
    });
    document.addEventListener('click', function (e) {
      if (!e.target.closest('.cmap-wrap')) deactivate();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') deactivate();
    });
  })();

  /* ---------- reserve form ---------- */
  var resForm = document.getElementById('resForm');
  if (resForm) {
    resForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var ok = document.getElementById('resOk');
      ok.classList.add('show');
      resForm.reset();
      setTimeout(function () { ok.classList.remove('show'); }, 7000);
    });
  }

  /* ---------- reduced motion: reveal everything ---------- */
  if (reduce) {
    if (lenis) lenis.destroy();
    gsap.set('.ln > span', { yPercent: 0 });
    gsap.set('[data-parallax]', { yPercent: 0 });
  }

  window.addEventListener('load', function () { ScrollTrigger.refresh(); });
})();
