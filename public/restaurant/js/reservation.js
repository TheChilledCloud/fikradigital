/* ============================================================
   BEIT AL-SHAM — reservation system
   Time slots · guest stepper · live summary · validation ·
   WhatsApp confirmation · success animation
   Language-aware: dynamic strings via window.__t (js/i18n.js)
   ============================================================ */
(function () {
  "use strict";

  const form = document.getElementById("book-form");
  if (!form) return;

  const dateEl = document.getElementById("bk-date");
  const slotsBox = document.getElementById("bk-slots");
  const nameEl = document.getElementById("bk-name");
  const phoneEl = document.getElementById("bk-phone");
  const occasionEl = document.getElementById("bk-occasion");
  const notesEl = document.getElementById("bk-notes");
  const gVal = document.getElementById("g-val");
  const gNote = document.getElementById("g-note");
  const sumLines = document.getElementById("sum-lines");
  const panel = document.getElementById("success-panel");
  const successMsg = document.getElementById("success-msg");
  const waBtn = document.getElementById("success-wa");
  const callBtn = document.getElementById("success-call");

  const WA_NUM = "491776971407";
  const TIMES = [
    "12:00", "12:30", "13:00", "13:30", "14:30", "15:30", "16:30",
    "17:00", "17:30", "18:00", "18:30", "19:00", "19:30",
    "20:00", "20:30", "21:00", "21:30", "22:00",
  ];
  const PEAK = new Set(["18:00", "18:30", "19:00", "19:30", "20:00", "20:30"]);

  let guests = 2;
  let selectedTime = null;
  let selectedDate = null;

  const t = (k) => (typeof window.__t === "function" ? window.__t(k) : k);
  const loc = () => {
    const l = typeof window.__lang === "function" ? window.__lang() : "en";
    return l === "de" ? "de-DE" : l === "ar" ? "ar" : "en-GB";
  };

  /* ---------- date bounds ---------- */
  const today = new Date();
  const iso = (d) => d.toISOString().split("T")[0];
  dateEl.min = iso(today);
  const maxD = new Date(today.getTime() + 90 * 86400000);
  dateEl.max = iso(maxD);

  /* ---------- prefill from URL (?date=..&guests=..) ---------- */
  const params = new URLSearchParams(location.search);
  if (params.get("date") && params.get("date") >= dateEl.min) {
    dateEl.value = params.get("date");
    selectedDate = params.get("date");
  }
  const gParam = parseInt(params.get("guests"), 10);
  if (gParam >= 1 && gParam <= 12) guests = gParam;

  /* ---------- time slots ---------- */
  function buildSlots() {
    slotsBox.innerHTML = "";
    const daySeed = selectedDate ? selectedDate.split("-").reduce((a, b) => a + parseInt(b, 10), 0) : 1;
    TIMES.forEach((tm, i) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "slot";
      btn.textContent = tm;
      // deterministic pseudo-availability per day
      const off = (daySeed * 3 + i * 7) % 11 === 0;
      if (off) btn.classList.add("off");
      if (PEAK.has(tm)) btn.classList.add("peak");
      btn.addEventListener("click", () => {
        if (btn.classList.contains("off")) return;
        slotsBox.querySelectorAll(".slot.selected").forEach((s) => s.classList.remove("selected"));
        btn.classList.add("selected");
        selectedTime = tm;
        renderSummary();
      });
      slotsBox.appendChild(btn);
    });
  }

  /* ---------- guests stepper ---------- */
  function renderGuests() {
    gVal.textContent = guests;
    gNote.textContent =
      guests >= 8 ? t("g.note.big") : guests >= 5 ? t("g.note.med") : "";
    renderSummary();
  }
  document.getElementById("g-minus").addEventListener("click", () => { if (guests > 1) { guests--; renderGuests(); } });
  document.getElementById("g-plus").addEventListener("click", () => { if (guests < 12) { guests++; renderGuests(); } });

  /* ---------- live summary ---------- */
  function renderSummary() {
    if (!selectedDate || !selectedTime) {
      sumLines.innerHTML = '<div class="sum-empty">' + t("sum.empty") + "</div>";
      return;
    }
    const d = new Date(selectedDate + "T00:00:00");
    const weekday = d.toLocaleDateString(loc(), { weekday: "long" });
    const dateStr = d.toLocaleDateString(loc(), { day: "numeric", month: "long", year: "numeric" });
    const occasion = occasionEl.value || "—";
    sumLines.innerHTML =
      line(t("sum.day"), weekday) +
      line(t("sum.date"), dateStr) +
      line(t("sum.time"), selectedTime + (PEAK.has(selectedTime) ? " " + t("sum.peak") : "")) +
      line(t("sum.guests"), guests + " " + (guests > 1 ? t("sum.guests.suffix") : t("sum.guest.suffix"))) +
      line(t("sum.occ"), occasion);
  }
  function line(k, v) {
    return '<div class="sum-line"><span>' + k + "</span><b>" + v + "</b></div>";
  }

  dateEl.addEventListener("change", () => { selectedDate = dateEl.value; buildSlots(); renderSummary(); });
  occasionEl.addEventListener("change", renderSummary);

  /* ---------- validation ---------- */
  function validate() {
    const errors = [];
    if (!selectedDate) errors.push(t("val.date"));
    if (!selectedTime) errors.push(t("val.time"));
    if (nameEl.value.trim().length < 2) errors.push(t("val.name"));
    if (!/^[+0-9\s\-/()]{6,}$/.test(phoneEl.value.trim())) errors.push(t("val.phone"));
    if (errors.length) {
      alert(t("val.msg").replace("{list}", errors.join(", ")));
      return false;
    }
    return true;
  }

  /* ---------- submit ---------- */
  function onLangChange() {
    renderGuests();
    renderSummary();
    if (panel.classList.contains("show")) {
      successMsg.textContent = buildSuccessMsg();
    }
  }

  function buildSuccessMsg() {
    if (!selectedDate || !selectedTime) return t("sp.msg");
    const d = new Date(selectedDate + "T00:00:00");
    const dateStr = d.toLocaleDateString(loc(), { weekday: "long", day: "numeric", month: "long", year: "numeric" });
    const tpl = guests >= 8 ? t("sp.line.big") : t("sp.line");
    return tpl
      .replace("{date}", dateStr)
      .replace("{time}", selectedTime)
      .replace("{guests}", guests) +
      " " + t("sp.msg");
  }
  window.__onLangChange = onLangChange;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!validate()) return;

    const d = new Date(selectedDate + "T00:00:00");
    const dateStr = d.toLocaleDateString(loc(), { weekday: "long", day: "numeric", month: "long", year: "numeric" });
    const name = nameEl.value.trim();
    const phone = phoneEl.value.trim();

    const text =
      t("wa.prefix") + dateStr +
      t("wa.time") + selectedTime +
      t("wa.guests") + guests +
      (occasionEl.value ? t("wa.occ") + occasionEl.value : "") +
      (notesEl.value.trim() ? t("wa.notes") + notesEl.value.trim() : "") +
      t("wa.name") + name +
      t("wa.phone") + phone;

    waBtn.href = "https://wa.me/" + WA_NUM + "?text=" + encodeURIComponent(text);
    successMsg.textContent = buildSuccessMsg();

    // success animation
    panel.classList.add("show");
    if (typeof gsap !== "undefined") {
      const circle = panel.querySelector(".check circle");
      const path = panel.querySelector(".check path");
      gsap.fromTo(circle, { strokeDashoffset: 290 }, { strokeDashoffset: 0, duration: 1.1, ease: "power2.inOut" });
      gsap.fromTo(path, { strokeDashoffset: 80 }, { strokeDashoffset: 0, duration: 0.6, delay: 0.7, ease: "power2.out" });
      gsap.fromTo(".success-panel h3, .success-panel .ar, .success-panel p, .success-panel .btn",
        { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.6, stagger: 0.12, delay: 1.0 });
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  /* ---------- init ---------- */
  buildSlots();
  renderGuests();
})();
