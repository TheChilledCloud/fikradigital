/* ============================================================
   BEIT AL-SHAM — shared motion & interaction layer
   Lenis smooth scroll · GSAP ScrollTrigger · preloader · cursor
   ============================================================ */
(function () {
  "use strict";

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const hasGSAP = typeof window.gsap !== "undefined";
  const hasLenis = typeof window.Lenis !== "undefined";
  const PHONE_DISPLAY = "+49 177 6971407";
  const PHONE_TEL = "+491776971407";
  const WA_LINK = "https://wa.me/491776971407";

  /* ---------- smooth scroll (Lenis + ScrollTrigger bridge) ---------- */
  let lenis = null;
  if (hasLenis && !prefersReduced) {
    lenis = new Lenis({ lerp: 0.09, wheelMultiplier: 0.95 });
    if (hasGSAP) {
      lenis.on("scroll", ScrollTrigger.update);
      gsap.ticker.add((t) => lenis.raf(t * 1000));
      gsap.ticker.lagSmoothing(0);
    }
  }

  /* ---------- preloader ---------- */
  const preloader = document.getElementById("preloader");
  let loaded = false, introDone = false;

  function hidePreloader() {
    if (!preloader) return;
    const tl = gsap.timeline({ onComplete: () => { preloader.style.display = "none"; } });
    tl.to(".pl-logo", { y: -18, opacity: 0, duration: 0.5, ease: "power2.in" })
      .to(preloader, { yPercent: -100, duration: 0.9, ease: "power4.inOut" }, "-=0.15");
  }

  function runPreloader() {
    if (!preloader) { playIntro(); return; }
    const counter = { v: 0 };
    const countEl = preloader.querySelector(".pl-count");
    const barEl = preloader.querySelector(".pl-bar i");
    gsap.to(".pl-logo", { opacity: 1, y: 0, duration: 1.1, ease: "power3.out", delay: 0.15 });
    gsap.to(".pl-sub", { opacity: 1, duration: 0.8, delay: 0.5 });
    gsap.to(counter, {
      v: 100, duration: 1.7, ease: "power2.inOut", delay: 0.35,
      onUpdate: () => {
        const v = Math.round(counter.v);
        if (countEl) countEl.textContent = v + "%";
        if (barEl) barEl.style.width = v + "%";
      },
      onComplete: () => {
        loaded = true;
        if (introDone) hidePreloader(); else playIntro();
      },
    });
  }

  /* ---------- hero intro ---------- */
  function playIntro() {
    const hero = document.querySelector(".hero");
    if (!hero) { introDone = true; if (loaded) hidePreloader(); else { introDone = true; } return; }
    const tl = gsap.timeline({
      defaults: { ease: "power3.out" },
      onComplete: () => { introDone = true; if (loaded) hidePreloader(); },
    });
    tl.to(".hero-bg img", { scale: 1, duration: 2.6, ease: "power2.out" }, 0)
      .to(".hero-kicker", { opacity: 1, y: 0, duration: 0.9 }, 0.25)
      .to(".hero h1 .word > span", { y: 0, duration: 1.15, stagger: 0.09, ease: "power4.out" }, 0.35)
      .fromTo(".hero-meta > *", { opacity: 0, y: 22 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.08 }, 0.95)
      .fromTo(".hero-ctas > *", { opacity: 0, y: 26 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.1 }, 1.1)
      .fromTo(".badge", { opacity: 0, scale: 0.5 }, { opacity: 1, scale: 1, duration: 0.9, stagger: 0.12, ease: "back.out(1.7)" }, 1.25)
      .fromTo(".hero-scroll", { opacity: 0 }, { opacity: 1, duration: 0.8 }, 1.6);
  }

  /* ---------- scroll reveals ---------- */
  function initReveals() {
    const items = gsap.utils.toArray("[data-reveal]");
    if (!items.length) return;
    gsap.utils.toArray(items).forEach((el) => {
      gsap.fromTo(el,
        { opacity: 0, y: el.dataset.reveal === "left" ? 56 : el.dataset.reveal === "right" ? -56 : 46, x: el.dataset.reveal === "left" ? -56 : el.dataset.reveal === "right" ? 56 : 0, scale: el.dataset.reveal === "zoom" ? 1.12 : 1 },
        {
          opacity: 1, y: 0, x: 0, scale: 1, duration: 1.15, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 86%", once: true },
        });
    });
  }

  /* ---------- parallax ---------- */
  function initParallax() {
    gsap.utils.toArray("[data-parallax]").forEach((el) => {
      const speed = parseFloat(el.dataset.parallax || "0.15");
      gsap.to(el, {
        yPercent: speed * 100, ease: "none",
        scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true },
      });
    });
  }

  /* ---------- counters ---------- */
  function initCounters() {
    gsap.utils.toArray("[data-count]").forEach((el) => {
      const target = parseFloat(el.dataset.count);
      const suffix = el.dataset.suffix || "";
      const obj = { v: 0 };
      gsap.to(obj, {
        v: target, duration: 1.8, ease: "power2.out",
        scrollTrigger: { trigger: el, start: "top 88%", once: true },
        onUpdate: () => { el.textContent = Math.round(obj.v) + suffix; },
      });
    });
  }

  /* ---------- signature dishes horizontal drift (subtle) ---------- */
  function initDrift() {
    gsap.utils.toArray("[data-drift]").forEach((el) => {
      gsap.fromTo(el,
        { xPercent: -2 },
        { xPercent: 0, ease: "none", scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: 1 } });
    });
  }

  /* ---------- nav ---------- */
  function initNav() {
    const nav = document.querySelector(".nav");
    const onScroll = () => nav && nav.classList.toggle("scrolled", (window.scrollY || lenis?.scroll || 0) > 50);
    if (lenis) lenis.on("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* ---------- mobile menu ---------- */
  function initMenu() {
    const burger = document.querySelector(".burger");
    const overlay = document.querySelector(".menu-overlay");
    if (!burger || !overlay) return;
    const links = overlay.querySelectorAll(".mo-link");
    const tl = gsap.timeline({ paused: true })
      .to(overlay, { clipPath: "inset(0 0 0% 0)", visibility: "visible", duration: 0.7, ease: "power4.inOut" })
      .fromTo(links, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.55, stagger: 0.07, ease: "power3.out" }, "-=0.2")
      .to(".mo-foot", { opacity: 1, duration: 0.5 }, "-=0.3");
    burger.addEventListener("click", () => {
      const open = overlay.classList.toggle("open");
      burger.classList.toggle("open", open);
      if (open) { tl.play(); lenis && lenis.stop(); } else { tl.reverse(); lenis && lenis.start(); }
    });
    overlay.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => {
      tl.reverse(); burger.classList.remove("open"); overlay.classList.remove("open");
      lenis && lenis.start();
    }));
  }

  /* ---------- marquee duplication ---------- */
  function initMarquees() {
    document.querySelectorAll(".marquee .mq-track").forEach((t) => {
      if (t.dataset.dup) return;
      t.dataset.dup = "1";
      t.innerHTML += t.innerHTML;
    });
  }

  /* ---------- testimonials ---------- */
  function initTestimonials() {
    const wrap = document.querySelector(".testi-wrap");
    if (!wrap) return;
    const slides = wrap.querySelectorAll(".testi-slide");
    const dotsBox = wrap.querySelector(".testi-dots");
    const prev = wrap.querySelector(".testi-prev");
    const next = wrap.querySelector(".testi-next");
    let idx = 0, timer = null;
    slides.forEach((_, i) => {
      const d = document.createElement("i");
      if (i === 0) d.classList.add("active");
      d.addEventListener("click", () => go(i));
      dotsBox.appendChild(d);
    });
    const dots = dotsBox.querySelectorAll("i");
    function go(i) {
      slides[idx].classList.remove("active");
      dots[idx].classList.remove("active");
      idx = (i + slides.length) % slides.length;
      slides[idx].classList.add("active");
      dots[idx].classList.add("active");
      resetTimer();
    }
    function resetTimer() {
      clearInterval(timer);
      timer = setInterval(() => go(idx + 1), 6000);
    }
    prev && prev.addEventListener("click", () => go(idx - 1));
    next && next.addEventListener("click", () => go(idx + 1));
    resetTimer();
  }

  /* ---------- cursor + magnetic ---------- */
  function initCursor() {
    if (prefersReduced || window.matchMedia("(hover: none)").matches) return;
    const dot = document.querySelector(".cursor-dot");
    const ring = document.querySelector(".cursor-ring");
    if (!dot || !ring) return;
    const pos = { x: innerWidth / 2, y: innerHeight / 2 };
    const ringPos = { ...pos };
    window.addEventListener("mousemove", (e) => {
      pos.x = e.clientX; pos.y = e.clientY;
      dot.style.left = pos.x + "px"; dot.style.top = pos.y + "px";
    });
    gsap.ticker.add(() => {
      ringPos.x += (pos.x - ringPos.x) * 0.16;
      ringPos.y += (pos.y - ringPos.y) * 0.16;
      ring.style.left = ringPos.x + "px"; ring.style.top = ringPos.y + "px";
    });
    const hoverables = "a, button, .dish, .frame, input, select, textarea, .slot";
    document.addEventListener("mouseover", (e) => {
      if (e.target.closest(hoverables)) ring.classList.add("hovering");
    });
    document.addEventListener("mouseout", (e) => {
      if (e.target.closest(hoverables)) ring.classList.remove("hovering");
    });
    // magnetic
    document.querySelectorAll("[data-magnetic]").forEach((el) => {
      el.addEventListener("mousemove", (e) => {
        const r = el.getBoundingClientRect();
        const x = (e.clientX - r.left - r.width / 2) * 0.3;
        const y = (e.clientY - r.top - r.height / 2) * 0.3;
        gsap.to(el, { x, y, duration: 0.4, ease: "power3.out" });
      });
      el.addEventListener("mouseleave", () => gsap.to(el, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1,0.4)" }));
    });
  }

  /* ---------- footer year + global helpers ---------- */
  document.querySelectorAll("[data-year]").forEach((el) => (el.textContent = new Date().getFullYear()));
  document.querySelectorAll("[data-phone-display]").forEach((el) => (el.textContent = PHONE_DISPLAY));
  document.querySelectorAll("[data-phone-tel]").forEach((el) => (el.href = "tel:" + PHONE_TEL));
  document.querySelectorAll("[data-wa]").forEach((el) => (el.href = WA_LINK));

  /* ---------- boot ---------- */
  function boot() {
    initNav();
    initMenu();
    initMarquees();
    initTestimonials();
    initCursor();
    if (!hasGSAP) {
      // graceful degradation
      document.documentElement.classList.add("no-gsap");
      document.querySelectorAll("[data-reveal]").forEach((el) => el.classList.add("revealed"));
      const pre = document.getElementById("preloader");
      if (pre) pre.style.display = "none";
      return;
    }
    initReveals();
    initParallax();
    initCounters();
    initDrift();
    if (preloader) runPreloader(); else playIntro();
  }

  // safety net: hero words/kicker start hidden by CSS for the intro animation;
  // if anything goes wrong (blocked script, interrupted animation), force-reveal
  setTimeout(() => {
    document.querySelectorAll(".hero h1 .word > span").forEach((s) => {
      const st = getComputedStyle(s);
      if (st.transform === "none" || parseFloat(st.transform.split(",")[5] || "0") > 0.5) {
        s.style.transform = "none";
        s.style.opacity = "1";
      }
    });
    const k = document.querySelector(".hero-kicker");
    if (k && getComputedStyle(k).opacity === "0") k.style.opacity = "1";
  }, 4000);

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
