/* ============================================================
   BEIT AL-SHAM — menu category filtering with GSAP transitions
   ============================================================ */
(function () {
  "use strict";
  const bar = document.getElementById("cat-bar");
  if (!bar) return;
  const pills = bar.querySelectorAll(".cat-pill");
  const sections = document.querySelectorAll(".menu-sec");
  const hasGSAP = typeof window.gsap !== "undefined";

  // current user-selected category; the scroll-spy is only allowed to
  // override the active pill while viewing ALL sections
  let currentCat = "all";

  function applyFilter(cat) {
    currentCat = cat;
    pills.forEach((p) => p.classList.toggle("active", p.dataset.cat === cat));

    let firstVisible = null;
    sections.forEach((sec) => {
      const show = cat === "all" || sec.dataset.cat === cat;
      // toggle display immediately so layout/scroll positions stay stable
      sec.style.display = show ? "" : "none";
      if (!show) return;
      if (!firstVisible) firstVisible = sec;
      if (hasGSAP) {
        gsap.fromTo(
          sec,
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.45, ease: "power2.out", clearProps: "opacity,transform" }
        );
      } else {
        sec.style.opacity = 1;
      }
    });

    if (typeof ScrollTrigger !== "undefined") ScrollTrigger.refresh();

    // scroll to the first visible section if the user filtered from below it
    if (firstVisible && window.scrollY > firstVisible.offsetTop + 120) {
      window.scrollTo({ top: firstVisible.offsetTop - 140, behavior: "smooth" });
    }
  }

  pills.forEach((p) => p.addEventListener("click", () => applyFilter(p.dataset.cat)));

  // Scroll-spy: highlight the section at 55% of the viewport.
  // Only active in the "All" view — a filtered selection (Grills, Sweets, …)
  // must never be overwritten by scrolling. Hidden sections are skipped.
  function updateSpy() {
    if (currentCat !== "all") return;
    const probe = window.scrollY + window.innerHeight * 0.55;
    let current = null;
    sections.forEach((sec) => {
      if (sec.style.display === "none") return;
      const rect = sec.getBoundingClientRect();
      if (rect.top + window.scrollY <= probe) current = sec;
    });
    if (current) {
      pills.forEach((p) => p.classList.toggle("active", p.dataset.cat === current.dataset.cat));
    } else {
      // above the first section → "All" is the natural highlight
      pills.forEach((p) => p.classList.toggle("active", p.dataset.cat === "all"));
    }
  }
  window.addEventListener("scroll", updateSpy, { passive: true });
  updateSpy();
})();
