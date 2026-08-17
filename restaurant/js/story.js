/* ============================================================
   BEIT AL-SHAM — pinned scroll narrative (story page)
   Scenes crossfade + drift while pinned; progress bar fills.
   ============================================================ */
(function () {
  "use strict";
  const wrap = document.getElementById("story-scenes");
  if (!wrap) return;
  const scenes = wrap.querySelectorAll(".scene");
  if (!scenes.length) return;
  const bar = document.getElementById("scene-bar");

  // graceful degradation without GSAP: show first scene only
  if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") {
    scenes.forEach((s, i) => s.classList.toggle("on", i === 0));
    if (bar) bar.style.width = "100%";
    return;
  }

  // initial states: all hidden except first
  gsap.set(scenes, { autoAlpha: 0 });
  gsap.set(scenes[0], { autoAlpha: 1 });

  const tl = gsap.timeline({
    defaults: { ease: "none" },
    scrollTrigger: {
      trigger: wrap,
      start: "top top",
      end: "bottom bottom",
      scrub: 0.6,
      onUpdate: (self) => {
        if (bar) bar.style.width = (self.progress * 100).toFixed(2) + "%";
      },
    },
  });

  const sceneDur = 1 / scenes.length;

  scenes.forEach((scene, i) => {
    const img = scene.querySelector(".s-bg img");
    const inner = scene.querySelector(".s-inner");
    const from = i * sceneDur;
    const to = from + sceneDur;

    // text blocks rise in early, then everything drifts up & fades
    tl.fromTo(inner, { y: 70, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.55 * sceneDur, ease: "power2.out" }, from + sceneDur * 0.12)
      .to(inner, { y: -80, autoAlpha: 0, duration: 0.45 * sceneDur, ease: "power1.in" }, to - sceneDur * 0.42)
      .to(img, { scale: 1.22, duration: sceneDur, ease: "none" }, from);

    // hide previous scene at its end, reveal next scene at its start —
    // with a small overlap so there is NEVER a scroll position with no
    // scene visible (would show the bare page background)
    if (i > 0) {
      tl.set(scene, { autoAlpha: 1 }, from - 0.015);
    }
    if (i < scenes.length - 1) {
      tl.set(scene, { autoAlpha: 0 }, to + 0.015);
    }
  });
})();
