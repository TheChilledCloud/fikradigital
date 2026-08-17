/* ============================================================
   CROWN & BLADE — shared motion & interaction layer
   Lenis smooth scroll · GSAP ScrollTrigger · preloader · cursor
   ============================================================ */
(function () {
  "use strict";

  var prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var hasGSAP = typeof window.gsap !== "undefined";
  var hasLenis = typeof window.Lenis !== "undefined";

  var PHONE_DISPLAY = "+49 211 000 0000";
  var PHONE_TEL = "+492110000000";
  var WA_LINK = "https://wa.me/492110000000";

  /* ---------- smooth scroll (Lenis) ---------- */
  var lenis = null;
  if (hasLenis && !prefersReduced) {
    lenis = new Lenis({ lerp: 0.09, wheelMultiplier: 0.95 });
    if (hasGSAP) {
      lenis.on("scroll", ScrollTrigger.update);
      gsap.ticker.add(function (t) { lenis.raf(t * 1000); });
      gsap.ticker.lagSmoothing(0);
    }
  }

  /* ---------- preloader ---------- */
  var preloader = document.getElementById("preloader");
  var loaded = false;
  var introDone = false;

  function hidePreloader() {
    if (!preloader) return;
    var tl = gsap.timeline({
      onComplete: function () { preloader.style.display = "none"; },
    });
    tl.to(".pl-logo", { y: -18, opacity: 0, duration: 0.5, ease: "power2.in" })
      .to(preloader, { yPercent: -100, duration: 0.9, ease: "power4.inOut" }, "-=0.15");
  }

  function runPreloader() {
    if (!preloader) { playIntro(); return; }
    var counter = { v: 0 };
    var countEl = preloader.querySelector(".pl-count");
    var barEl = preloader.querySelector(".pl-bar i");
    gsap.to(".pl-logo", { opacity: 1, y: 0, duration: 1.1, ease: "power3.out", delay: 0.15 });
    gsap.to(".pl-sub", { opacity: 1, duration: 0.8, delay: 0.5 });
    gsap.to(counter, {
      v: 100, duration: 1.7, ease: "power2.inOut", delay: 0.35,
      onUpdate: function () {
        var v = Math.round(counter.v);
        if (countEl) countEl.textContent = v + "%";
        if (barEl) barEl.style.width = v + "%";
      },
      onComplete: function () {
        loaded = true;
        if (introDone) hidePreloader(); else playIntro();
      },
    });
  }

  /* ---------- hero intro (home + page heroes) ---------- */
  function splitWords(el) {
    var text = el.innerHTML.replace(/\s+/g, " ").trim();
    var words = text.split(" ");
    el.innerHTML = words
      .map(function (w) { return '<span class="word"><span>' + w + "</span></span>"; })
      .join(" ");
  }

  function playIntro() {
    var hero = document.querySelector(".hero");
    var pageHero = document.querySelector(".page-hero");
    var tl = gsap.timeline({
      defaults: { ease: "power3.out" },
      onComplete: function () { introDone = true; if (loaded) hidePreloader(); },
    });

    if (hero) {
      tl.to(".hero-bg img", { scale: 1, duration: 2.6, ease: "power2.out" }, 0)
        .to(".hero-kicker", { opacity: 1, y: 0, duration: 0.9 }, 0.2)
        .to(".hero h1 .word > span", { y: 0, duration: 1.15, stagger: 0.09, ease: "power4.out" }, 0.3)
        .fromTo(".hero-sub", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8 }, 0.9)
        .fromTo(".hero-ctas > *", { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.1 }, 1.05)
        .fromTo(".hero-meta > *", { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.08 }, 1.2)
        .fromTo(".hero-scroll", { opacity: 0 }, { opacity: 1, duration: 0.8 }, 1.5);
    } else if (pageHero) {
      tl.to(".page-hero .kicker", { opacity: 1, y: 0, duration: 0.9 }, 0.15)
        .to(".page-hero h1", { opacity: 1, y: 0, duration: 1.1, ease: "power4.out" }, 0.3)
        .fromTo(".page-hero .hero-sub", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8 }, 0.7);
    } else {
      introDone = true;
      if (loaded) hidePreloader();
    }
  }

  /* ---------- scroll reveals ---------- */
  function initReveals() {
    var items = gsap.utils.toArray("[data-reveal]");
    if (!items.length) return;
    items.forEach(function (el) {
      var dir = el.dataset.reveal || "up";
      var from =
        dir === "left" ? { opacity: 0, x: -56 }
        : dir === "right" ? { opacity: 0, x: 56 }
        : dir === "zoom" ? { opacity: 0, scale: 1.1 }
        : { opacity: 0, y: 46 };
      gsap.fromTo(el, from, {
        opacity: 1, x: 0, y: 0, scale: 1,
        duration: 1.15, ease: "power3.out",
        delay: parseFloat(el.dataset.delay || "0") * 0.12,
        scrollTrigger: { trigger: el, start: "top 86%", once: true },
      });
    });
  }

  /* ---------- parallax ---------- */
  function initParallax() {
    gsap.utils.toArray("[data-parallax]").forEach(function (el) {
      var speed = parseFloat(el.dataset.parallax || "0.15");
      gsap.to(el, {
        yPercent: speed * 100, ease: "none",
        scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true },
      });
    });
  }

  /* ---------- counters ---------- */
  function initCounters() {
    gsap.utils.toArray("[data-count]").forEach(function (el) {
      var target = parseFloat(el.dataset.count);
      var suffix = el.dataset.suffix || "";
      var decimals = parseInt(el.dataset.decimals || "0", 10);
      var obj = { v: 0 };
      gsap.to(obj, {
        v: target, duration: 1.8, ease: "power2.out",
        scrollTrigger: { trigger: el, start: "top 88%", once: true },
        onUpdate: function () {
          var n = obj.v;
          var str = decimals
            ? n.toFixed(decimals)
            : Math.round(n).toLocaleString("en-US");
          el.textContent = str + suffix;
        },
      });
    });
  }

  /* ---------- nav ---------- */
  function initNav() {
    var nav = document.querySelector(".nav");
    var onScroll = function () {
      var y = window.scrollY || (lenis ? lenis.scroll : 0) || 0;
      if (nav) nav.classList.toggle("scrolled", y > 50);
    };
    if (lenis) lenis.on("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* ---------- mobile menu ---------- */
  function initMenu() {
    var burger = document.querySelector(".burger");
    var overlay = document.querySelector(".menu-overlay");
    if (!burger || !overlay) return;
    var links = overlay.querySelectorAll(".mo-link");
    var tl = gsap.timeline({ paused: true })
      .to(overlay, { clipPath: "inset(0 0 0% 0)", visibility: "visible", duration: 0.7, ease: "power4.inOut" })
      .fromTo(links, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.55, stagger: 0.07, ease: "power3.out" }, "-=0.2")
      .to(".mo-foot", { opacity: 1, duration: 0.5 }, "-=0.3");
    burger.addEventListener("click", function () {
      var open = overlay.classList.toggle("open");
      burger.classList.toggle("open", open);
      if (open) { tl.play(); if (lenis) lenis.stop(); }
      else { tl.reverse(); if (lenis) lenis.start(); }
    });
    overlay.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        tl.reverse();
        burger.classList.remove("open");
        overlay.classList.remove("open");
        if (lenis) lenis.start();
      });
    });
  }

  /* ---------- marquee duplication ---------- */
  function initMarquees() {
    document.querySelectorAll(".marquee .mq-track").forEach(function (t) {
      if (t.dataset.dup) return;
      t.dataset.dup = "1";
      t.innerHTML += t.innerHTML;
    });
  }
  function resyncMarquees() {
    document.querySelectorAll(".marquee .mq-track").forEach(function (t) {
      var half = t.children[0].cloneNode(true);
      t.innerHTML = "";
      t.appendChild(half);
      t.appendChild(half.cloneNode(true));
    });
  }

  /* ---------- testimonials ---------- */
  function initTestimonials() {
    var wrap = document.querySelector(".testi-wrap");
    if (!wrap) return;
    var slides = wrap.querySelectorAll(".testi-slide");
    var dotsBox = wrap.querySelector(".testi-dots");
    var prev = wrap.querySelector(".testi-prev");
    var next = wrap.querySelector(".testi-next");
    var idx = 0;
    var timer = null;
    slides.forEach(function (_, i) {
      var d = document.createElement("i");
      if (i === 0) d.classList.add("active");
      d.addEventListener("click", function () { go(i); });
      dotsBox.appendChild(d);
    });
    var dots = dotsBox.querySelectorAll("i");
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
      timer = setInterval(function () { go(idx + 1); }, 6000);
    }
    if (prev) prev.addEventListener("click", function () { go(idx - 1); });
    if (next) next.addEventListener("click", function () { go(idx + 1); });
    resetTimer();
  }

  /* ---------- FAQ accordion ---------- */
  function initFaq() {
    document.querySelectorAll(".faq-item").forEach(function (item) {
      var q = item.querySelector(".faq-q");
      if (!q) return;
      q.addEventListener("click", function () {
        var isOpen = item.classList.contains("open");
        document.querySelectorAll(".faq-item.open").forEach(function (o) {
          o.classList.remove("open");
        });
        if (!isOpen) item.classList.add("open");
      });
    });
  }

  /* ---------- booking form ---------- */
  function initBooking() {
    var form = document.getElementById("bookingForm");
    if (!form) return;
    var timeSel = document.getElementById("f-time");
    if (timeSel) {
      ["09:00","09:30","10:00","10:30","11:00","11:30","12:00","12:30",
       "13:00","13:30","14:00","14:30","15:00","15:30","16:00","16:30",
       "17:00","17:30","18:00","18:30","19:00","19:30"].forEach(function (t) {
        var o = document.createElement("option");
        o.value = t;
        o.textContent = t;
        timeSel.appendChild(o);
      });
    }
    var dateInput = document.getElementById("f-date");
    if (dateInput) dateInput.min = new Date().toISOString().split("T")[0];

    var successBox = document.getElementById("formSuccess");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = document.getElementById("f-name").value.trim();
      var phone = document.getElementById("f-phone").value.trim();
      var time = document.getElementById("f-time").value;
      if (!name || !phone || !time) {
        var err = document.getElementById("formError");
        if (err) err.style.display = "block";
        return;
      }
      var errBox = document.getElementById("formError");
      if (errBox) errBox.style.display = "none";

      var lang = (window.CBlang && window.CBlang.get()) || "en";
      var t = (window.CBlang && window.CBlang.dict[lang]) || {};
      var svc = document.getElementById("f-service").selectedOptions[0];
      var barber = document.getElementById("f-barber").selectedOptions[0];
      var date = document.getElementById("f-date").value;
      var notes = document.getElementById("f-notes").value.trim();

      var lines = [(t["hero.kicker"] || "Crown & Blade") + " — " + (t["form.kicker"] || "Booking")];
      lines.push("• " + (t["form.service"] || "Service") + ": " + (svc ? svc.textContent : ""));
      lines.push("• " + (t["form.barber"] || "Barber") + ": " + (barber ? barber.textContent : ""));
      if (date) lines.push("• " + (t["form.date"] || "Date") + ": " + date);
      lines.push("• " + (t["form.time"] || "Time") + ": " + time);
      if (notes) lines.push("• " + (t["form.notes"] || "Notes") + ": " + notes);
      lines.push("— " + name + " · " + phone);

      var msg = lines.join("\n");
      window.open(WA_LINK + "?text=" + encodeURIComponent(msg), "_blank");
      if (successBox) successBox.classList.add("show");
      form.reset();
    });
  }

  /* ---------- cursor + magnetic ---------- */
  function initCursor() {
    if (prefersReduced || window.matchMedia("(hover: none)").matches) return;
    var dot = document.querySelector(".cursor-dot");
    var ring = document.querySelector(".cursor-ring");
    if (!dot || !ring) return;
    var pos = { x: innerWidth / 2, y: innerHeight / 2 };
    var ringPos = { x: pos.x, y: pos.y };
    var shown = false;
    window.addEventListener("mousemove", function (e) {
      pos.x = e.clientX;
      pos.y = e.clientY;
      dot.style.left = pos.x + "px";
      dot.style.top = pos.y + "px";
      if (!shown) {
        shown = true;
        dot.style.opacity = "1";
        ring.style.opacity = "1";
      }
    });
    if (hasGSAP) {
      gsap.ticker.add(function () {
        ringPos.x += (pos.x - ringPos.x) * 0.16;
        ringPos.y += (pos.y - ringPos.y) * 0.16;
        ring.style.left = ringPos.x + "px";
        ring.style.top = ringPos.y + "px";
      });
    }
    var hoverables = "a, button, input, select, textarea, .svc-card, .pkg";
    document.addEventListener("mouseover", function (e) {
      if (e.target.closest(hoverables)) ring.classList.add("hovering");
    });
    document.addEventListener("mouseout", function (e) {
      if (e.target.closest(hoverables)) ring.classList.remove("hovering");
    });
    document.querySelectorAll("[data-magnetic]").forEach(function (el) {
      el.addEventListener("mousemove", function (e) {
        var r = el.getBoundingClientRect();
        var x = (e.clientX - r.left - r.width / 2) * 0.3;
        var y = (e.clientY - r.top - r.height / 2) * 0.3;
        gsap.to(el, { x: x, y: y, duration: 0.4, ease: "power3.out" });
      });
      el.addEventListener("mouseleave", function () {
        gsap.to(el, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1,0.4)" });
      });
    });
  }

  /* ---------- active nav link ---------- */
  function initActive() {
    var file = (location.pathname.split("/").pop() || "index.html").toLowerCase();
    if (file === "" || file === "/") file = "index.html";
    var map = { "index.html": "home", "services.html": "services", "booking.html": "booking" };
    var key = map[file] || "home";
    document.querySelectorAll(".nav-link[data-page], .mo-link[data-page]").forEach(function (a) {
      if (a.dataset.page === key) a.classList.add("active");
    });
  }

  /* ---------- global helpers ---------- */
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
  document.querySelectorAll("[data-phone-display]").forEach(function (el) {
    el.textContent = PHONE_DISPLAY;
  });
  document.querySelectorAll("[data-phone-tel]").forEach(function (el) {
    el.href = "tel:" + PHONE_TEL;
  });
  document.querySelectorAll("[data-wa]").forEach(function (el) {
    el.href = WA_LINK;
  });

  /* ---------- language-change re-sync ---------- */
  window.addEventListener("langchange", function () {
    resyncMarquees();
    document.querySelectorAll(".hero h1").forEach(function (h) {
      splitWords(h);
      if (hasGSAP) {
        gsap.fromTo(h.querySelectorAll(".word > span"),
          { y: "115%" },
          { y: 0, duration: 0.9, stagger: 0.06, ease: "power4.out" });
      }
    });
  });

  /* ---------- boot ---------- */
  function boot() {
    document.body.classList.remove("no-js");
    initActive();
    initNav();
    initMenu();
    initMarquees();
    initTestimonials();
    initFaq();
    initBooking();
    initCursor();

    /* smooth-scroll in-page anchors */
    document.querySelectorAll('a[href^="#"]').forEach(function (a) {
      a.addEventListener("click", function (e) {
        var id = a.getAttribute("href");
        var target = document.querySelector(id);
        if (!target) return;
        e.preventDefault();
        if (lenis) lenis.scrollTo(target, { offset: -70 });
        else target.scrollIntoView({ behavior: "smooth" });
      });
    });

    if (!hasGSAP) {
      document.querySelectorAll("[data-reveal]").forEach(function (el) {
        el.classList.add("force-visible");
      });
      var pre = document.getElementById("preloader");
      if (pre) pre.style.display = "none";
      document.querySelectorAll(".hero h1, .page-hero h1").forEach(function (h) {
        h.classList.add("force-visible");
        splitWords(h);
      });
      return;
    }
    initReveals();
    initParallax();
    initCounters();
    document.querySelectorAll(".hero h1").forEach(splitWords);
    if (preloader) runPreloader(); else playIntro();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
