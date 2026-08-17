/* ============================================================
   CROWN & BLADE — trilingual i18n (EN / DE / AR + RTL)
   Applies immediately at parse time (script at end of <body>).
   ============================================================ */
(function () {
  "use strict";

  var LANGS = ["en", "de", "ar"];
  var KEY = "cb-lang";

  var dict = {
    /* ================= ENGLISH ================= */
    en: {
      "nav.home": "Home",
      "nav.services": "Services",
      "nav.booking": "Book",
      "nav.book": "Book now",

      "hero.kicker": "Barbershop — Düsseldorf",
      "hero.title": "Where every cut is a <em>craft.</em>",
      "hero.sub":
        "Classic barbering with a modern edge — precision cuts, hot-towel shaves and honest advice. Walk in or book ahead.",
      "hero.cta1": "Book your chair",
      "hero.cta2": "View services",
      "hero.open": "Open today · Tue–Sun",
      "hero.hours": "Tue–Sun · 10:00–20:00",
      "hero.rating": "4.9 / 5 · 400+ reviews",
      "hero.scroll": "Scroll",
      "a11y.prev": "Previous testimonial",
      "a11y.next": "Next testimonial",

      "marquee":
        "Haircut • Beard sculpting • Hot towel shave • Kids’ cuts • Royal package • Classic cut • Skin fade •",

      "svc.kicker": "What we do",
      "svc.title": "Sharp services, <em>honest prices.</em>",
      "svc.sub":
        "Every service starts with a consultation and ends with a hot towel — the way barbering was meant to be.",
      "svc.1.n": "The Classic Cut",
      "svc.1.d":
        "Precision scissors and a razor finish, styled exactly the way you like it.",
      "svc.2.n": "Beard Sculpting",
      "svc.2.d":
        "Sharp lines, perfect shape and a hot towel — a beard that means business.",
      "svc.3.n": "Hot Towel Shave",
      "svc.3.d":
        "The traditional straight-razor shave with warm towels and soothing balm.",
      "svc.full": "Full menu & prices",

      "craft.kicker": "The craft",
      "craft.title": "Old-school skill, <em>new-school standards.</em>",
      "craft.p":
        "Every chair at Crown & Blade is a master’s chair. We learned the trade the slow way — scissors, clippers, a straight razor and an eye for detail — and we treat your cut like it’s the only one we do today.",
      "craft.badge": "Since 2012",
      "craft.stat1": "Years of craft",
      "craft.stat2": "Cuts delivered",
      "craft.stat3": "Client rating",

      "testi.kicker": "Word of mouth",
      "testi.title": "What our clients <em>say.</em>",
      "testi.1.q":
        "Best fade in the city, no question. The hot towel at the end is worth the trip alone.",
      "testi.1.w": "Karim A. · Regular since 2019",
      "testi.2.q":
        "I’ve been coming here for three years. They remember how you like it — every single time.",
      "testi.2.w": "Jonas M. · Client since 2022",
      "testi.3.q":
        "Booked online, sat down five minutes later, walked out looking sharp. Couldn’t be easier.",
      "testi.3.w": "Daniel S. · First visit",

      "cta.title": "Ready for a <em>fresh cut?</em>",
      "cta.sub":
        "Book your chair in under a minute — we’ll have the towel warm and the clippers ready.",
      "cta.btn": "Book an appointment",

      "footer.tagline":
        "Precision cuts, hot-towel shaves and honest advice in the heart of Düsseldorf.",
      "footer.explore": "Explore",
      "footer.hours": "Opening hours",
      "footer.contact": "Contact",
      "footer.home": "Home",
      "footer.services": "Services",
      "footer.booking": "Book now",
      "footer.h1": "Tue–Fri · 10:00–20:00",
      "footer.h2": "Saturday · 09:00–20:00",
      "footer.h3": "Sunday · 10:00–16:00",
      "footer.h4": "Monday · closed",
      "footer.addr1": "Königsallee 12",
      "footer.addr2": "40212 Düsseldorf, Germany",
      "footer.rights": "© 2026 Crown & Blade. All rights reserved.",

      "phero.kicker": "Services & prices",
      "phero.title": "The full <em>menu.</em>",
      "phero.sub":
        "No surprises, no upsells — just honest prices for work we’re proud of.",

      "menu.kicker": "Price list",
      "menu.title": "Cut, shape, <em>shave.</em>",
      "m.1.n": "Classic Cut",
      "m.1.d": "Scissors, clippers and a razor finish",
      "m.1.t": "30 min",
      "m.1.p": "€29",
      "m.2.n": "Skin Fade",
      "m.2.d": "Precision fade blended down to the skin",
      "m.2.t": "45 min",
      "m.2.p": "€35",
      "m.3.n": "Beard Sculpting",
      "m.3.d": "Lines, shape and a hot-towel finish",
      "m.3.t": "30 min",
      "m.3.p": "€19",
      "m.4.n": "Hot Towel Shave",
      "m.4.d": "Traditional straight-razor shave with balm",
      "m.4.t": "40 min",
      "m.4.p": "€27",
      "m.5.n": "Cut + Beard",
      "m.5.d": "The full groom in one sitting",
      "m.5.t": "60 min",
      "m.5.p": "€45",
      "m.6.n": "Kids’ Cut",
      "m.6.d": "For the little gentlemen — under 12",
      "m.6.t": "20 min",
      "m.6.p": "€18",
      "m.7.n": "Royal Package",
      "m.7.d": "Cut, shave, face mask and styling",
      "m.7.t": "90 min",
      "m.7.p": "€59",
      "m.8.n": "Grey Blending",
      "m.8.d": "Subtle blending that looks natural",
      "m.8.t": "45 min",
      "m.8.p": "€39",
      "menu.note":
        "First visit? Arrive 10 minutes early so we can talk through exactly what you want.",

      "pkg.kicker": "Packages",
      "pkg.title": "The <em>ritual,</em> complete.",
      "pkg.sub":
        "Three ways to experience Crown & Blade — pick the one that fits your day.",
      "pkg.1.n": "Classic",
      "pkg.1.p": "€29",
      "pkg.1.d": "The essential — a sharp cut and honest advice.",
      "pkg.1.f1": "Consultation & styling",
      "pkg.1.f2": "Cut with scissors & clippers",
      "pkg.1.f3": "Styling & product",
      "pkg.2.n": "Signature",
      "pkg.2.p": "€45",
      "pkg.2.d": "Our most booked — cut and beard in perfect harmony.",
      "pkg.2.f1": "Everything in Classic",
      "pkg.2.f2": "Beard sculpting",
      "pkg.2.f3": "Hot towel & balm",
      "pkg.3.n": "Royal",
      "pkg.3.p": "€59",
      "pkg.3.d": "The full ritual — 90 minutes of being looked after.",
      "pkg.3.f1": "Everything in Signature",
      "pkg.3.f2": "Hot towel shave",
      "pkg.3.f3": "Face mask & styling",
      "pkg.book": "Book this",
      "pkg.badge": "Most booked",

      "exp.kicker": "The experience",
      "exp.title": "What to <em>expect.</em>",
      "exp.sub":
        "From the moment you sit down to the final mirror check — a calm, focused hour.",
      "exp.1.t": "Welcome & consult",
      "exp.1.d":
        "Coffee or tea, then we talk about what you want — style, length, shape.",
      "exp.2.t": "The cut",
      "exp.2.d":
        "Scissors and clippers, worked by hand with constant checks in the mirror.",
      "exp.3.t": "Hot towel & finish",
      "exp.3.d": "A steaming towel to settle the skin, then a razor-sharp finish.",
      "exp.4.t": "Style & product",
      "exp.4.d": "Structured, styled and ready — with the right product for your hair.",

      "cta2.title": "See you in the <em>chair?</em>",
      "cta2.sub":
        "Booking takes less than a minute. Walk-ins welcome whenever we have space.",
      "cta2.btn": "Book an appointment",

      "bhero.kicker": "Booking",
      "bhero.title": "Book your <em>chair.</em>",
      "bhero.sub":
        "Choose a service, pick a time, and we’ll confirm by WhatsApp or phone — usually within the hour.",

      "form.kicker": "Appointment",
      "form.title": "Tell us when to <em>expect you.</em>",
      "form.name": "Full name",
      "form.phone": "Phone / WhatsApp",
      "form.service": "Service",
      "form.barber": "Barber",
      "form.any": "Any barber",
      "form.date": "Preferred date",
      "form.time": "Preferred time",
      "form.notes": "Notes (optional)",
      "form.notes.ph":
        "Anything we should know — allergies, a style reference, a special occasion…",
      "form.submit": "Request booking",
      "form.note":
        "We confirm every request personally — no bots, no auto-replies.",
      "form.success":
        "<b>Thank you!</b> Your request is on its way — we’ll confirm your slot on WhatsApp within the hour.",
      "form.error":
        "Please fill in your name, phone and a preferred time.",

      "info.hours_t": "Opening hours",
      "info.addr_t": "Find us",
      "info.contact_t": "Contact",
      "info.h1": "Tue–Fri · 10:00–20:00",
      "info.h2": "Saturday · 09:00–20:00",
      "info.h3": "Sunday · 10:00–16:00",
      "info.h4": "Monday · closed",
      "info.addr1": "Königsallee 12",
      "info.addr2": "40212 Düsseldorf, Germany",
      "info.getdir": "Get directions",
      "info.wa": "WhatsApp us",
      "info.wa_sub": "Fastest for same-day slots",

      "faq.kicker": "Good to know",
      "faq.title": "Questions, <em>answered.</em>",
      "faq.1.q": "Do I need to book in advance?",
      "faq.1.a":
        "It helps — especially Friday and Saturday. But walk-ins are always welcome when we have a free chair, and we’ll tell you honestly how long the wait is.",
      "faq.2.q": "What if I’m running late?",
      "faq.2.a":
        "Give us a call and we’ll hold your slot for up to 10 minutes. After that we’ll squeeze you in between the next appointments.",
      "faq.3.q": "Do you cut all hair types?",
      "faq.3.a":
        "Yes — straight, curly, coily, fine or thick. If a style isn’t the right fit for us, we’ll honestly point you to someone who is.",

      "title": "Crown & Blade — Barbershop in Düsseldorf",
      "meta":
        "Crown & Blade — precision cuts, beard sculpting and hot-towel shaves in the heart of Düsseldorf. Book your chair online.",
      "lang.next": "Deutsch",
    },

    /* ================= DEUTSCH ================= */
    de: {
      "nav.home": "Start",
      "nav.services": "Leistungen",
      "nav.booking": "Termin",
      "nav.book": "Jetzt buchen",

      "hero.kicker": "Barbershop — Düsseldorf",
      "hero.title": "Jeder Schnitt ist <em>Handwerk.</em>",
      "hero.sub":
        "Klassisches Barbershop-Handwerk mit modernem Anspruch — präzise Schnitte, Heißrasur und ehrliche Beratung. Komm vorbei oder buche vorab.",
      "hero.cta1": "Stuhl sichern",
      "hero.cta2": "Leistungen ansehen",
      "hero.open": "Heute geöffnet · Di–So",
      "hero.hours": "Di–So · 10:00–20:00",
      "hero.rating": "4,9 / 5 · 400+ Bewertungen",
      "hero.scroll": "Scrollen",
      "a11y.prev": "Vorherige Bewertung",
      "a11y.next": "Nächste Bewertung",

      "marquee":
        "Haarschnitt • Bart-Formung • Heißrasur • Kinderhaarschnitte • Royal-Paket • Klassischer Schnitt • Skin Fade •",

      "svc.kicker": "Was wir tun",
      "svc.title": "Präzise Leistungen, <em>ehrliche Preise.</em>",
      "svc.sub":
        "Jede Behandlung beginnt mit einer Beratung und endet mit einem warmen Handtuch — so, wie Barbershop-Kunst gedacht ist.",
      "svc.1.n": "Der klassische Schnitt",
      "svc.1.d":
        "Präzision mit Schere und Messer, gestylt genau nach deinem Geschmack.",
      "svc.2.n": "Bart-Formung",
      "svc.2.d":
        "Saubere Konturen, perfekte Form und ein warmes Handtuch — ein Bart, der was hermacht.",
      "svc.3.n": "Heißrasur",
      "svc.3.d":
        "Die traditionelle Rasur mit dem Rasiermesser, warmen Tüchern und pflegendem Balsam.",
      "svc.full": "Alle Leistungen & Preise",

      "craft.kicker": "Das Handwerk",
      "craft.title": "Altes Handwerk, <em>neue Maßstäbe.</em>",
      "craft.p":
        "Jeder Stuhl bei Crown & Blade ist ein Meisterstuhl. Wir haben das Handwerk auf die klassische Art gelernt — Schere, Maschine, Rasiermesser und ein Auge fürs Detail — und behandeln jeden Schnitt, als wäre er der einzige heute.",
      "craft.badge": "Seit 2012",
      "craft.stat1": "Jahre Handwerk",
      "craft.stat2": "Schnitte",
      "craft.stat3": "Kundenbewertung",

      "testi.kicker": "Weiterempfehlung",
      "testi.title": "Was unsere Kunden <em>sagen.</em>",
      "testi.1.q":
        "Der beste Fade der Stadt, keine Frage. Das warme Handtuch am Ende ist allein die Fahrt wert.",
      "testi.1.w": "Karim A. · Stammkunde seit 2019",
      "testi.2.q":
        "Ich komme seit drei Jahren hierher. Sie merken sich, wie man es mag — jedes einzelne Mal.",
      "testi.2.w": "Jonas M. · Kunde seit 2022",
      "testi.3.q":
        "Online gebucht, fünf Minuten später im Stuhl und raus wie neu. Einfacher geht’s nicht.",
      "testi.3.w": "Daniel S. · Erster Besuch",

      "cta.title": "Bereit für einen <em>frischen Schnitt?</em>",
      "cta.sub":
        "Sicher dir in unter einer Minute deinen Stuhl — Handtuch und Maschine sind schon warm.",
      "cta.btn": "Termin buchen",

      "footer.tagline":
        "Präzise Schnitte, Heißrasur und ehrliche Beratung im Herzen Düsseldorfs.",
      "footer.explore": "Entdecken",
      "footer.hours": "Öffnungszeiten",
      "footer.contact": "Kontakt",
      "footer.home": "Start",
      "footer.services": "Leistungen",
      "footer.booking": "Termin buchen",
      "footer.h1": "Di–Fr · 10:00–20:00",
      "footer.h2": "Samstag · 09:00–20:00",
      "footer.h3": "Sonntag · 10:00–16:00",
      "footer.h4": "Montag · geschlossen",
      "footer.addr1": "Königsallee 12",
      "footer.addr2": "40212 Düsseldorf, Deutschland",
      "footer.rights": "© 2026 Crown & Blade. Alle Rechte vorbehalten.",

      "phero.kicker": "Leistungen & Preise",
      "phero.title": "Die ganze <em>Karte.</em>",
      "phero.sub":
        "Keine Überraschungen, kein Verkaufsdruck — nur ehrliche Preise für Arbeit, auf die wir stolz sind.",

      "menu.kicker": "Preisliste",
      "menu.title": "Schneiden, Formen, <em>Rasieren.</em>",
      "m.1.n": "Klassischer Schnitt",
      "m.1.d": "Schere, Maschine und Messer-Finish",
      "m.1.t": "30 Min.",
      "m.1.p": "29 €",
      "m.2.n": "Skin Fade",
      "m.2.d": "Präziser Fade bis auf die Haut",
      "m.2.t": "45 Min.",
      "m.2.p": "35 €",
      "m.3.n": "Bart-Formung",
      "m.3.d": "Konturen, Form und warmes Handtuch",
      "m.3.t": "30 Min.",
      "m.3.p": "19 €",
      "m.4.n": "Heißrasur",
      "m.4.d": "Klassische Rasiermesser-Rasur mit Balsam",
      "m.4.t": "40 Min.",
      "m.4.p": "27 €",
      "m.5.n": "Schnitt + Bart",
      "m.5.d": "Die komplette Pflege in einem Termin",
      "m.5.t": "60 Min.",
      "m.5.p": "45 €",
      "m.6.n": "Kinderhaarschnitt",
      "m.6.d": "Für die kleinen Herren — unter 12",
      "m.6.t": "20 Min.",
      "m.6.p": "18 €",
      "m.7.n": "Royal-Paket",
      "m.7.d": "Schnitt, Rasur, Gesichtsmaske und Styling",
      "m.7.t": "90 Min.",
      "m.7.p": "59 €",
      "m.8.n": "Grau-Deckung",
      "m.8.d": "Dezente Einarbeitung, die natürlich wirkt",
      "m.8.t": "45 Min.",
      "m.8.p": "39 €",
      "menu.note":
        "Erster Besuch? Komm 10 Minuten früher, damit wir in Ruhe besprechen können, was du möchtest.",

      "pkg.kicker": "Pakete",
      "pkg.title": "Der <em>Ritus,</em> komplett.",
      "pkg.sub":
        "Drei Wege, Crown & Blade zu erleben — wähle den, der zu deinem Tag passt.",
      "pkg.1.n": "Classic",
      "pkg.1.p": "29 €",
      "pkg.1.d": "Das Wesentliche — ein sauberer Schnitt und ehrliche Beratung.",
      "pkg.1.f1": "Beratung & Styling",
      "pkg.1.f2": "Schnitt mit Schere & Maschine",
      "pkg.1.f3": "Styling & Produkt",
      "pkg.2.n": "Signature",
      "pkg.2.p": "45 €",
      "pkg.2.d": "Unser meistgebuchtes Paket — Schnitt und Bart in perfekter Harmonie.",
      "pkg.2.f1": "Alles aus Classic",
      "pkg.2.f2": "Bart-Formung",
      "pkg.2.f3": "Warmes Handtuch & Balsam",
      "pkg.3.n": "Royal",
      "pkg.3.p": "59 €",
      "pkg.3.d": "Der komplette Ritus — 90 Minuten rundum verwöhnt.",
      "pkg.3.f1": "Alles aus Signature",
      "pkg.3.f2": "Heißrasur",
      "pkg.3.f3": "Gesichtsmaske & Styling",
      "pkg.book": "Dieses buchen",
      "pkg.badge": "Am beliebtesten",

      "exp.kicker": "Das Erlebnis",
      "exp.title": "Was dich <em>erwartet.</em>",
      "exp.sub":
        "Vom Moment im Stuhl bis zum letzten Blick in den Spiegel — eine ruhige, fokussierte Stunde.",
      "exp.1.t": "Willkommen & Beratung",
      "exp.1.d":
        "Kaffee oder Tee, dann besprechen wir, was du möchtest — Stil, Länge, Form.",
      "exp.2.t": "Der Schnitt",
      "exp.2.d":
        "Schere und Maschine, von Hand gearbeitet, mit ständigen Spiegelchecks.",
      "exp.3.t": "Warmes Handtuch & Finish",
      "exp.3.d":
        "Ein dampfendes Handtuch für die Haut, dann ein messerscharfes Finish.",
      "exp.4.t": "Styling & Produkt",
      "exp.4.d":
        "Geföhnt, gestylt und fertig — mit dem passenden Produkt für dein Haar.",

      "cta2.title": "Bis bald im <em>Stuhl?</em>",
      "cta2.sub":
        "Die Buchung dauert unter einer Minute. Laufkundschaft willkommen, solange Plätze frei sind.",
      "cta2.btn": "Termin buchen",

      "bhero.kicker": "Buchung",
      "bhero.title": "Sicher dir deinen <em>Stuhl.</em>",
      "bhero.sub":
        "Wähle eine Leistung und eine Uhrzeit — wir bestätigen per WhatsApp oder Telefon, meist innerhalb einer Stunde.",

      "form.kicker": "Terminanfrage",
      "form.title": "Sag uns, wann wir dich <em>erwarten dürfen.</em>",
      "form.name": "Vollständiger Name",
      "form.phone": "Telefon / WhatsApp",
      "form.service": "Leistung",
      "form.barber": "Barber",
      "form.any": "Egal welcher",
      "form.date": "Wunschdatum",
      "form.time": "Wunschzeit",
      "form.notes": "Anmerkungen (optional)",
      "form.notes.ph":
        "Alles, was wir wissen sollten — Allergien, eine Stilvorlage, ein besonderer Anlass …",
      "form.submit": "Anfrage senden",
      "form.note":
        "Wir bestätigen jede Anfrage persönlich — keine Bots, keine Auto-Antworten.",
      "form.success":
        "<b>Danke!</b> Deine Anfrage ist unterwegs — wir bestätigen deinen Termin per WhatsApp innerhalb einer Stunde.",
      "form.error":
        "Bitte gib deinen Namen, deine Telefonnummer und eine Wunschzeit an.",

      "info.hours_t": "Öffnungszeiten",
      "info.addr_t": "Adresse",
      "info.contact_t": "Kontakt",
      "info.h1": "Di–Fr · 10:00–20:00",
      "info.h2": "Samstag · 09:00–20:00",
      "info.h3": "Sonntag · 10:00–16:00",
      "info.h4": "Montag · geschlossen",
      "info.addr1": "Königsallee 12",
      "info.addr2": "40212 Düsseldorf, Deutschland",
      "info.getdir": "Route planen",
      "info.wa": "WhatsApp-Nachricht",
      "info.wa_sub": "Am schnellsten für kurzfristige Termine",

      "faq.kicker": "Gut zu wissen",
      "faq.title": "Fragen, <em>beantwortet.</em>",
      "faq.1.q": "Muss ich vorher buchen?",
      "faq.1.a":
        "Es hilft — vor allem freitags und samstags. Ohne Termin schauen wir, wann ein Stuhl frei wird, und sagen dir ehrlich, wie lange es dauert.",
      "faq.2.q": "Was, wenn ich zu spät komme?",
      "faq.2.a":
        "Ruf uns an, wir halten deinen Termin bis zu 10 Minuten. Danach schieben wir dich zwischen den nächsten Terminen ein.",
      "faq.3.q": "Schneidet ihr alle Haartypen?",
      "faq.3.a":
        "Ja — glatt, lockig, kraus, fein oder dick. Sollte ein Stil nicht zu uns passen, empfehlen wir dir ehrlich jemanden, der besser passt.",

      "title": "Crown & Blade — Barbershop in Düsseldorf",
      "meta":
        "Crown & Blade — präzise Schnitte, Bart-Formung und Heißrasur im Herzen Düsseldorfs. Buche deinen Stuhl online.",
      "lang.next": "العربية",
    },

    /* ================= العربية ================= */
    ar: {
      "nav.home": "الرئيسية",
      "nav.services": "الخدمات",
      "nav.booking": "احجز",
      "nav.book": "احجز الآن",

      "hero.kicker": "صالون حلاقة — دوسلدورف",
      "hero.title": "كل قصة شعر <em>حِرفة.</em>",
      "hero.sub":
        "حلاقة كلاسيكية بلمسة عصرية — قصّات دقيقة، حلاقة بالمنشفة الساخنة، ونصائح صادقة. تفضّل بزيارتنا أو احجز مسبقًا.",
      "hero.cta1": "احجز كرسيك",
      "hero.cta2": "تصفّح الخدمات",
      "hero.open": "مفتوح اليوم · الثلاثاء–الأحد",
      "hero.hours": "الثلاثاء–الأحد · 10:00–20:00",
      "hero.rating": "4.9 / 5 · أكثر من 400 تقييم",
      "hero.scroll": "مرّر",
      "a11y.prev": "التقييم السابق",
      "a11y.next": "التقييم التالي",

      "marquee":
        "قص الشعر • تشذيب اللحية • الحلاقة بالمنشفة الساخنة • قصات الأطفال • الباقة الملكية • القصة الكلاسيكية • قصّ فايد •",

      "svc.kicker": "ماذا نقدّم",
      "svc.title": "خدمات دقيقة <em>بأسعار صادقة.</em>",
      "svc.sub":
        "كل خدمة تبدأ باستشارة وتنتهي بمنشفة ساخنة — هكذا يجب أن تكون الحلاقة.",
      "svc.1.n": "القصة الكلاسيكية",
      "svc.1.d": "قصّ دقيق بالمقص والموس، بتصفيفة على ذوقك تمامًا.",
      "svc.2.n": "تشذيب اللحية",
      "svc.2.d": "خطوط حادة، شكل مثالي، ومنشفة ساخنة — لحية تليق بك.",
      "svc.3.n": "الحلاقة بالمنشفة الساخنة",
      "svc.3.d": "الحلاقة التقليدية بالموس مع مناشف دافئة وبلسم مهدئ.",
      "svc.full": "كل الخدمات والأسعار",

      "craft.kicker": "الحِرفة",
      "craft.title": "مهارة تقليدية <em>بمعايير عصرية.</em>",
      "craft.p":
        "كل كرسي في كراون آند بليد هو كرسي أستاذ. تعلّمنا الحرفة بالطريقة التقليدية — المقص، الآلة، الموس، وعين ترى التفاصيل — ونعتني بقصّتك وكأنها الوحيدة اليوم.",
      "craft.badge": "منذ 2012",
      "craft.stat1": "عامًا من الحرفة",
      "craft.stat2": "قصة شعر",
      "craft.stat3": "تقييم العملاء",

      "testi.kicker": "كلام العملاء",
      "testi.title": "ماذا يقول <em>عملاؤنا.</em>",
      "testi.1.q":
        "أفضل fade في المدينة بلا منازع. والمنشفة الساخنة في النهاية وحدها تستحق الزيارة.",
      "testi.1.w": "كريم ع. · عميل دائم منذ 2019",
      "testi.2.q":
        "أزورهم منذ ثلاث سنوات. يتذكرون كيف تفضّل قصّتك — في كل مرة.",
      "testi.2.w": "يونس م. · عميل منذ 2022",
      "testi.3.q":
        "حجزت عبر الموقع، جلست بعد خمس دقائق، وخرجت في أبهى صورة. لا أسهل من ذلك.",
      "testi.3.w": "دانيال س. · أول زيارة",

      "cta.title": "جاهز <em>لقصة جديدة؟</em>",
      "cta.sub":
        "احجز كرسيك في أقل من دقيقة — سنكون قد سخّنّا المنشفة وجهّزنا الآلة.",
      "cta.btn": "احجز موعدًا",

      "footer.tagline":
        "قصّات دقيقة، حلاقة بالمنشفة الساخنة، ونصائح صادقة في قلب دوسلدورف.",
      "footer.explore": "استكشف",
      "footer.hours": "ساعات العمل",
      "footer.contact": "تواصل معنا",
      "footer.home": "الرئيسية",
      "footer.services": "الخدمات",
      "footer.booking": "احجز الآن",
      "footer.h1": "الثلاثاء–الجمعة · 10:00–20:00",
      "footer.h2": "السبت · 09:00–20:00",
      "footer.h3": "الأحد · 10:00–16:00",
      "footer.h4": "الاثنين · مغلق",
      "footer.addr1": "كونيغسآلي 12",
      "footer.addr2": "40212 دوسلدورف، ألمانيا",
      "footer.rights": "© 2026 كراون آند بليد. جميع الحقوق محفوظة.",

      "phero.kicker": "الخدمات والأسعار",
      "phero.title": "القائمة <em>الكاملة.</em>",
      "phero.sub":
        "لا مفاجآت ولا إضافات غير مرغوبة — فقط أسعار صادقة مقابل عمل نفخر به.",

      "menu.kicker": "قائمة الأسعار",
      "menu.title": "قصّ، تشذيب، <em>حلاقة.</em>",
      "m.1.n": "القصة الكلاسيكية",
      "m.1.d": "مقص وآلة ولمسة الموس",
      "m.1.t": "30 دقيقة",
      "m.1.p": "€29",
      "m.2.n": "قصّ فايد",
      "m.2.d": "قصّ فايد دقيق حتى الجلد",
      "m.2.t": "45 دقيقة",
      "m.2.p": "€35",
      "m.3.n": "تشذيب اللحية",
      "m.3.d": "خطوط، تشذيب، ولمسة منشفة ساخنة",
      "m.3.t": "30 دقيقة",
      "m.3.p": "€19",
      "m.4.n": "الحلاقة بالمنشفة الساخنة",
      "m.4.d": "حلاقة تقليدية بالموس مع بلسم",
      "m.4.t": "40 دقيقة",
      "m.4.p": "€27",
      "m.5.n": "قص + لحية",
      "m.5.d": "العناية الكاملة في جلسة واحدة",
      "m.5.t": "60 دقيقة",
      "m.5.p": "€45",
      "m.6.n": "قصّات الأطفال",
      "m.6.d": "للصغار — تحت 12 عامًا",
      "m.6.t": "20 دقيقة",
      "m.6.p": "€18",
      "m.7.n": "الباقة الملكية",
      "m.7.d": "قصّ، حلاقة، ماسك للوجه، وتصفيف",
      "m.7.t": "90 دقيقة",
      "m.7.p": "€59",
      "m.8.n": "دمج الرمادي",
      "m.8.d": "دمج دقيق بمظهر طبيعي",
      "m.8.t": "45 دقيقة",
      "m.8.p": "€39",
      "menu.note":
        "أول زيارة؟ احضر قبل الموعد بعشر دقائق لنناقش معًا ما تريده بالضبط.",

      "pkg.kicker": "الباقات",
      "pkg.title": "الطقس <em>كاملًا.</em>",
      "pkg.sub": "ثلاث طرق لتجربة كراون آند بليد — اختر ما يناسب يومك.",
      "pkg.1.n": "كلاسيك",
      "pkg.1.p": "€29",
      "pkg.1.d": "الأساسي — قصة أنيقة ونصيحة صادقة.",
      "pkg.1.f1": "استشارة وتصفيف",
      "pkg.1.f2": "قصّ بالمقص والآلة",
      "pkg.1.f3": "تصفيف ومنتج",
      "pkg.2.n": "سيغنتشر",
      "pkg.2.p": "€45",
      "pkg.2.d": "الأكثر حجزًا — قصة ولحية في تناغم تام.",
      "pkg.2.f1": "كل ما في كلاسيك",
      "pkg.2.f2": "تشذيب اللحية",
      "pkg.2.f3": "منشفة ساخنة وبلسم",
      "pkg.3.n": "رويال",
      "pkg.3.p": "€59",
      "pkg.3.d": "الطقس الكامل — 90 دقيقة من العناية التامة.",
      "pkg.3.f1": "كل ما في سيغنتشر",
      "pkg.3.f2": "حلاقة بالمنشفة الساخنة",
      "pkg.3.f3": "ماسك للوجه وتصفيف",
      "pkg.book": "احجز هذه",
      "pkg.badge": "الأكثر حجزًا",

      "exp.kicker": "التجربة",
      "exp.title": "ماذا <em>تتوقع.</em>",
      "exp.sub":
        "من لحظة الجلوس حتى النظرة الأخيرة في المرآة — ساعة هادئة ومركّزة.",
      "exp.1.t": "ترحيب واستشارة",
      "exp.1.d": "قهوة أو شاي، ثم نتحدث عمّا تريد — الأسلوب، الطول، الشكل.",
      "exp.2.t": "القصة",
      "exp.2.d": "مقص وآلة تعمل باليد، مع متابعة مستمرة في المرآة.",
      "exp.3.t": "منشفة ساخنة ولمسات أخيرة",
      "exp.3.d": "منشفة ساخنة لتهدئة البشرة، ثم لمسة الموس الأخيرة.",
      "exp.4.t": "تصفيف ومنتج",
      "exp.4.d": "تصفيف كامل وجاهز — مع المنتج المناسب لشعرك.",

      "cta2.title": "نراك قريبًا <em>على الكرسي؟</em>",
      "cta2.sub": "الحجز يستغرق أقل من دقيقة. مرحبًا بمن يأتي دون موعد إذا توفر مكان.",
      "cta2.btn": "احجز موعدًا",

      "bhero.kicker": "الحجز",
      "bhero.title": "احجز <em>كرسيك.</em>",
      "bhero.sub":
        "اختر خدمة ووقتًا مناسبًا، وسنؤكد عبر واتساب أو الهاتف — عادة خلال ساعة.",

      "form.kicker": "موعد",
      "form.title": "أخبرنا متى <em>نتوقعك.</em>",
      "form.name": "الاسم الكامل",
      "form.phone": "الهاتف / واتساب",
      "form.service": "الخدمة",
      "form.barber": "الحلاق",
      "form.any": "أي حلاق",
      "form.date": "التاريخ المفضل",
      "form.time": "الوقت المفضل",
      "form.notes": "ملاحظات (اختياري)",
      "form.notes.ph":
        "أي شيء يجب أن نعرفه — حساسية، صورة لتصفيفة، مناسبة خاصة…",
      "form.submit": "أرسل طلب الحجز",
      "form.note": "نؤكد كل طلب شخصيًا — لا روبوتات ولا ردود آلية.",
      "form.success":
        "<b>شكرًا لك!</b> طلبك في الطريق — سنؤكد موعدك عبر واتساب خلال ساعة.",
      "form.error": "يرجى إدخال الاسم ورقم الهاتف والوقت المفضل.",

      "info.hours_t": "ساعات العمل",
      "info.addr_t": "موقعنا",
      "info.contact_t": "التواصل",
      "info.h1": "الثلاثاء–الجمعة · 10:00–20:00",
      "info.h2": "السبت · 09:00–20:00",
      "info.h3": "الأحد · 10:00–16:00",
      "info.h4": "الاثنين · مغلق",
      "info.addr1": "كونيغسآلي 12",
      "info.addr2": "40212 دوسلدورف، ألمانيا",
      "info.getdir": "احصل على الاتجاهات",
      "info.wa": "راسلنا واتساب",
      "info.wa_sub": "الأسرع لحجز نفس اليوم",

      "faq.kicker": "معلومات مفيدة",
      "faq.title": "أسئلة <em>مجاب عنها.</em>",
      "faq.1.q": "هل يجب الحجز مسبقًا؟",
      "faq.1.a":
        "من الأفضل — خاصة يومي الجمعة والسبت. أما بدون حجز فنرحب بك دائمًا عندما يتوفر كرسي، وسنخبرك بصراحة بمدة الانتظار.",
      "faq.2.q": "ماذا لو تأخرت؟",
      "faq.2.a":
        "اتصل بنا وسنحتفظ بموعدك حتى 10 دقائق. بعدها سنجد لك وقتًا بين المواعيد التالية.",
      "faq.3.q": "هل تقصّون جميع أنواع الشعر؟",
      "faq.3.a":
        "نعم — الأملس، المجعّد، الخشن، الناعم، والكثيف. وإذا لم يكن أسلوب معين مناسبًا لنا، سنرشدك بصدق إلى من يناسبه.",

      "title": "كراون آند بليد — صالون حلاقة في دوسلدورف",
      "meta":
        "كراون آند بليد — قصّات دقيقة، تشذيب لحية، وحلاقة بالمنشفة الساخنة في قلب دوسلدورف. احجز كرسيك عبر الموقع.",
      "lang.next": "English",
    },
  };

  function currentLang() {
    try {
      var s = localStorage.getItem(KEY);
      if (LANGS.indexOf(s) !== -1) return s;
    } catch (e) {}
    return "en";
  }

  function applyLang(lang, initial) {
    var t = dict[lang] || dict.en;
    var root = document.documentElement;

    root.setAttribute("lang", lang);
    root.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
    root.classList.toggle("lang-ar", lang === "ar");

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (t[key] !== undefined) el.textContent = t[key];
    });
    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-html");
      if (t[key] !== undefined) el.innerHTML = t[key];
    });
    document.querySelectorAll("[data-i18n-ph]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-ph");
      if (t[key] !== undefined) el.setAttribute("placeholder", t[key]);
    });
    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-aria");
      if (t[key] !== undefined) el.setAttribute("aria-label", t[key]);
    });

    if (t.title) document.title = t.title;
    var meta = document.querySelector('meta[name="description"]');
    if (meta && t.meta) meta.setAttribute("content", t.meta);

    var next = LANGS[(LANGS.indexOf(lang) + 1) % LANGS.length];
    var toggle = document.getElementById("langToggle");
    if (toggle) toggle.textContent = dict[next]["lang.next"];

    if (!initial) {
      try {
        localStorage.setItem(KEY, lang);
      } catch (e) {}
    }
  }

  /* boot */
  var lang = currentLang();
  applyLang(lang, true);

  var toggle = document.getElementById("langToggle");
  if (toggle) {
    toggle.addEventListener("click", function () {
      var l = LANGS[(LANGS.indexOf(currentLang()) + 1) % LANGS.length];
      applyLang(l, false);
      window.dispatchEvent(new CustomEvent("langchange", { detail: { lang: l } }));
    });
  }

  window.CBlang = {
    get: currentLang,
    apply: applyLang,
    dict: dict,
  };
})();
