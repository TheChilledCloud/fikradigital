export interface ProjectImage {
  src: string;
  caption: string;
}

export interface Project {
  id: string;
  name: string;
  nativeName?: string;
  tagline: string;
  description: string;
  features: string[];
  tags: string[];
  meta: { label: string; value: string }[];
  images: ProjectImage[];
  liveUrl: string;
  badge?: string;
}

export interface ServiceItem {
  icon: string;
  title: string;
  desc: string;
}

export interface Translations {
  meta: { title: string; description: string };
  nav: {
    home: string;
    work: string;
    services: string;
    about: string;
    contact: string;
    cta: string;
    langBtn: string;
    backMain: string;
  };
  hero: {
    eyebrow: string;
    titleA: string;
    titleB: string;
    sub: string;
    ctaPrimary: string;
    ctaSecondary: string;
    badge1: string;
    badge2: string;
    badge3: string;
    scroll: string;
  };
  marquee: string[];
  home: {
    servicesTitle: string;
    servicesSub: string;
    workTitle: string;
    workSub: string;
    viewAll: string;
    processTitle: string;
    processSub: string;
    process: { step: string; title: string; desc: string }[];
    stats: { value: string; label: string }[];
    ctaTitle: string;
    ctaSub: string;
    ctaBtn: string;
  };
  work: {
    title: string;
    sub: string;
    projects: Project[];
    live: string;
    yourSite: string;
    yourSiteDesc: string;
  };
  services: {
    title: string;
    sub: string;
    items: ServiceItem[];
    popular: string;
    pricingTitle: string;
    pricingSub: string;
    pricing: {
      name: string;
      price: string;
      oldPrice?: string;
      monthly?: string;
      badge?: string;
      desc: string;
      features: string[];
      featured?: boolean;
      cta?: string;
    }[];
    pricingNote: string;
    ustNote: string;
    processTitle: string;
    processSub: string;
    process: { step: string; title: string; desc: string }[];
    guarantee: string;
    guaranteeDesc: string;
    ctaTitle: string;
    ctaBtn: string;
  };
  about: {
    title: string;
    sub: string;
    bio1: string;
    bio2: string;
    bio3: string;
    facts: { label: string; value: string }[];
    role: string;
  };
  contact: {
    title: string;
    sub: string;
    cards: { label: string; value: string; hint: string }[];
    formTitle: string;
    formName: string;
    formEmail: string;
    formProject: string;
    formBudget: string;
    formMessage: string;
    formSend: string;
    formNote: string;
    response: string;
  };
  footer: {
    rights: string;
    built: string;
    tagline: string;
    imprint: string;
    privacy: string;
  };
}

export const translations: Record<'en' | 'de' | 'ar', Translations> = {
  en: {
    meta: {
      title: 'fikradigital — Websites that sell',
      description: 'Custom, high-end websites for restaurants, businesses and brands. Designed, built and deployed by Ahmad Alfaisal. Arabic, English and German.',
    },
    nav: {
      home: 'Home',
      work: 'Work',
      services: 'Services',
      about: 'About',
      contact: 'Contact',
      cta: 'Start a project',
      langBtn: 'DEUTSCH',
      backMain: 'Main site',
    },
    hero: {
      eyebrow: 'WEB DESIGN & DEVELOPMENT STUDIO',
      titleA: 'Websites',
      titleB: 'that sell.',
      sub: 'I design and build high-end websites for restaurants, businesses and brands — with cinematic animations, full trilingual support (Arabic · English · German) and everything deployed and ready to grow your business.',
      ctaPrimary: 'See the work',
      ctaSecondary: 'Start a project',
      badge1: 'Animations',
      badge2: 'عربي · English · Deutsch',
      badge3: 'SEO & Fast',
      scroll: 'SCROLL TO EXPLORE',
    },
    marquee: [
      'Custom Websites', 'Restaurant Sites', 'Landing Pages', 'Arabic · English · Deutsch', 'Animations', 'E-Commerce', 'Redesigns',
    ],
    home: {
      servicesTitle: 'What I build',
      servicesSub: 'Everything a modern business needs to look serious online — designed, built and shipped end-to-end.',
      workTitle: 'Selected work',
      workSub: 'Real products, live on the internet. Every project is designed, built and deployed by me.',
      viewAll: 'View all projects',
      processTitle: 'How it works',
      processSub: 'A simple, transparent process — from first call to launch.',
      process: [
        { step: '01', title: 'Discover', desc: 'We talk about your business, goals and inspiration. I research your market and competitors.' },
        { step: '02', title: 'Design', desc: 'You get a custom design with your brand identity — reviewed and refined with you.' },
        { step: '03', title: 'Build', desc: 'Pixel-perfect development with animations, mobile-first layout and SEO basics.' },
        { step: '04', title: 'Launch', desc: 'I deploy it to your domain, connect analytics and hand over everything you own.' },
      ],
      stats: [
        { value: '100%', label: 'Custom design' },
        { value: '3 days', label: 'Typical delivery' },
        { value: '3', label: 'Languages built-in' },
        { value: '∞', label: 'Support after launch' },
      ],
      ctaTitle: 'Have a business that deserves a better website?',
      ctaSub: 'Tell me about your project — I reply within 24 hours with honest advice and a clear quote.',
      ctaBtn: 'Let’s talk',
    },
    work: {
      title: 'Selected work',
      sub: 'Websites I designed, built and deployed. Click any project to see it live.',
      projects: [
        {
          id: 'beit-al-sham',
          name: 'Beit Al-Sham',
          nativeName: 'بيت الشام',
          tagline: 'Arabic fine-dining — a cinematic 4-page experience',
          description:
            'A complete website for an authentic Syrian restaurant in Düsseldorf. Deep green-night palette with brass gold, pomegranate and cream; Arabic calligraphy beside an editorial serif. The story unfolds as you scroll — from the Umayyad courtyard hero to a scroll-cinema origin story and a reservation flow that hands off to WhatsApp.',
          features: [
            '4 pages: landing, menu (30 dishes), story, reservation',
            'Fully bilingual — Arabic RTL calligraphy + English',
            'Reservation system with live summary → prefilled WhatsApp booking',
            'GSAP ScrollTrigger scroll-cinema, Lenis smooth scroll, preloader',
            'Custom dish photography, optimized & lazy-loaded',
            'Mobile-first, reduced-motion safe, zero JS errors',
          ],
          tags: ['HTML', 'CSS', 'GSAP', 'Lenis', 'RTL Arabic', 'A11y'],
          meta: [
            { label: 'Client', value: 'Restaurant — Düsseldorf' },
            { label: 'Year', value: '2026' },
            { label: 'Pages', value: '4' },
            { label: 'Deploy', value: 'Static / CDN' },
          ],
          images: [],
          liveUrl: '/restaurant/',
          badge: 'FLAGSHIP',
        },
        {
          id: 'stretton-dental',
          name: 'Stretton Dental Specialists',
          tagline: 'Dental practice website — expert care, exceptional smiles',
          description:
            'A professional website for a dental practice in Brisbane, Australia. Clean medical design with warm, reassuring tones — services, team, and patient-first conversion paths. Built to earn trust and turn visitors into booked appointments.',
          features: [
            'Practice website with services, team & contact paths',
            'Appointment-focused conversion design',
            'Warm, trustworthy medical brand aesthetic',
            'Mobile-first, fast-loading, SEO-ready',
          ],
          tags: ['WordPress', 'UX Design', 'SEO', 'Medical'],
          meta: [
            { label: 'Client', value: 'Dental practice — Brisbane, AU' },
            { label: 'Status', value: 'Live' },
            { label: 'Stack', value: 'WordPress' },
            { label: 'Deploy', value: 'dental-specialists.com.au' },
          ],
          images: [],
          liveUrl: 'https://dental-specialists.com.au/',
        },
        {
          id: 'crown-blade',
          name: 'Crown & Blade',
          nativeName: 'كراون آند بليد',
          tagline: 'Premium barbershop — a dark, cinematic 3-page experience',
          description:
            'A complete website for a premium barbershop in Düsseldorf. Ink-and-brass palette with warm cream, editorial serif headlines and a custom cursor. Three pages — landing, services & pricing, booking — with Lenis smooth scroll, GSAP scroll reveals, parallax and a booking flow that hands off to WhatsApp.',
          features: [
            '3 pages: landing, services & prices, booking',
            'Trilingual — English, Deutsch, العربية with full RTL',
            'Booking form → prefilled WhatsApp confirmation',
            'GSAP ScrollTrigger reveals & parallax, Lenis smooth scroll, preloader',
            'Custom cursor, magnetic buttons, animated counters',
            'Mobile-first, reduced-motion safe, zero JS errors',
          ],
          tags: ['HTML', 'CSS', 'GSAP', 'Lenis', 'RTL Arabic', 'A11y'],
          meta: [
            { label: 'Client', value: 'Barbershop — Düsseldorf' },
            { label: 'Year', value: '2026' },
            { label: 'Pages', value: '3' },
            { label: 'Deploy', value: 'Static / CDN' },
          ],
          images: [],
          liveUrl: '/crown-blade/',
          badge: 'NEW',
        },
        {
          id: 'mawj',
          name: 'MAWJ — A House on the Edge of the Sea',
          nativeName: 'موج',
          tagline: 'Boutique hotel on the Latakia corniche — editorial elegance by the Mediterranean',
          description:
            'A complete website for a boutique hotel on the Latakia corniche — forty-two rooms, a private beach, a kitchen that cooks what the sea brings in each morning. The design language is Editorial Riviera: cream paper backgrounds, deep navy ink, champagne-brass accents, Cinzel display type beside a quiet Arabic script. One page tells the whole story — house, rooms, dining, experiences, the coast — with a vertical numbered rail, offset brass-framed imagery and a trilingual booking flow that hands off to WhatsApp.',
          features: [
            'One-page editorial experience: house, rooms, dining, experiences, coast',
            'Trilingual — English, Deutsch, العربية with full RTL',
            'Vertical numbered rail navigation, offset brass-framed imagery',
            'Cursor-following room previews with accordion',
            'Sticky crossfade experience panel, animated coastal route map',
            'Mobile-first, reduced-motion safe, zero JS errors',
          ],
          tags: ['HTML', 'CSS', 'GSAP', 'Lenis', 'RTL Arabic', 'A11y'],
          meta: [
            { label: 'Client', value: 'Boutique hotel — Latakia' },
            { label: 'Year', value: '2026' },
            { label: 'Pages', value: '1' },
            { label: 'Deploy', value: 'Static / CDN' },
          ],
          images: [],
          liveUrl: '/mawj/',
          badge: 'NEW',
        },
        {
          id: 'rihla',
          name: 'RIHLA — Journeys through Syria',
          nativeName: 'رحلة',
          tagline: 'Private journeys through Syria — ten thousand years of history, one journey at a time',
          description:
            'A website for a private travel house curating journeys through Syria. Warm cream canvas, ink serif headlines and a single ember accent — a hint of colour at the moments that matter. Destinations told as editorial stories, journeys designed entirely around each traveller, the voices of past guests, and a planning flow in three languages. Built with React and animated with care.',
          features: [
            'Destinations as editorial stories — cities, sites, seasons',
            'Trilingual — English, Deutsch, العربية with full RTL',
            'React + Tailwind with Framer Motion animation',
            'Journey planning flow → prefilled WhatsApp handoff',
            'Cream-and-ember design system with living motion',
            'Mobile-first, reduced-motion safe, zero JS errors',
          ],
          tags: ['React', 'Tailwind', 'Framer Motion', 'RTL Arabic', 'A11y'],
          meta: [
            { label: 'Client', value: 'Travel house — Syria' },
            { label: 'Year', value: '2026' },
            { label: 'Pages', value: '1 (SPA)' },
            { label: 'Deploy', value: 'Static / CDN' },
          ],
          images: [],
          liveUrl: '/rihla/',
          badge: 'NEW',
        },
      ],
      live: 'View live site',
      yourSite: 'Your site could be next',
      yourSiteDesc: 'From a single landing page to a full multi-page presence — custom-designed, animated and deployed.',
    },
    services: {
      title: 'Services',
      sub: 'Everything you need to look serious online — one partner, no agency overhead.',
      items: [
        { icon: 'layout', title: 'Custom websites', desc: 'Business, portfolio and brand websites designed from scratch — no templates, no cookie-cutter.' },
        { icon: 'utensils', title: 'Restaurant & café sites', desc: 'Menus, reservations, trilingual menus and mouth-watering design that fills tables.' },
        { icon: 'sparkles', title: 'Redesigns', desc: 'Your existing site modernized: new design, animations, speed and mobile experience.' },
        { icon: 'cart', title: 'E-commerce', desc: 'Online stores with smooth checkout — from a few products to full catalogs.' },
        { icon: 'globe', title: 'Hosting & domains', desc: 'I handle deployment, domains, SSL and email — your site stays fast and secure.' },
        { icon: 'heart', title: 'Care & support', desc: 'Updates, content changes and peace of mind after launch. You’re never alone.' },
      ],
      popular: 'POPULAR',
      pricingTitle: 'Simple pricing',
      pricingSub: 'Transparent packages — no hidden costs. Every plan includes domain, hosting and maintenance.',
      pricing: [
        { name: 'Standard Website', price: '€299', oldPrice: '€399', monthly: '+ €29/month', badge: 'Launch offer — only for the first 5 clients', desc: 'Your complete online presence — nothing for you to manage.', features: ['Professional website for your business — live in 48 hours', 'Everything included: domain, hosting & security — zero technical work for you', 'Looks perfect on smartphone, tablet & computer', 'Customers can call or message you directly from the site', 'Legally compliant (Imprint & Privacy Policy included)', 'We handle updates & changes for you — 1 free edit per month'] },
        { name: 'Business Pro', price: '€790–990', monthly: '+ €39/month', desc: 'For growing businesses that want to win customers online.', featured: true, features: ['Everything in Standard, plus up to 5 pages', 'Quote request forms & WhatsApp button — turn visitors into customers', 'Found on Google: local search optimization + Google Business profile', 'Priority support — same-day answers', '2 free edits per month', 'Live within 3–5 business days'] },
        { name: 'Custom Solutions', price: 'Quote', desc: 'Tailored to your requirements — contact us for a free, no-obligation quote.', cta: 'Get in touch now', features: ['Booking & appointment systems for clinics and service businesses', 'Customer management (CRM) & automated lead follow-up', 'Employee time & shift tracking', 'Multilingual websites (DE / EN / AR)', 'Custom portals, dashboards & internal tools'] },
      ],
      pricingNote: 'All packages include domain, hosting, SSL, GDPR compliance & monthly maintenance.',
      ustNote: 'All prices in accordance with § 19 UStG (German small-business regulation) — no VAT charged.',
      processTitle: 'The process',
      processSub: 'Clear stages, clear communication, no surprises.',
      process: [
        { step: '01', title: 'Free consultation', desc: 'We discuss goals, scope and budget. You get honest advice — even if it’s “you don’t need a new site yet”.' },
        { step: '02', title: 'Design mockup', desc: 'A custom design for your brand. You review and request changes until it feels right.' },
        { step: '03', title: 'Development', desc: 'Clean code, animations, mobile-first. You watch progress at every step.' },
        { step: '04', title: 'Launch & beyond', desc: 'Deployed to your domain, analytics connected, and support whenever you need it.' },
      ],
      guarantee: 'No templates. No agency markup.',
      guaranteeDesc: 'Every pixel is designed for your brand — and you own everything: design, code and domain.',
      ctaTitle: 'Not sure what you need?',
      ctaBtn: 'Get a free consultation',
    },
    about: {
      title: 'About',
      sub: 'The person behind the pixels.',
      bio1: 'I’m Ahmad Alfaisal — a web designer and developer. Every project carries years of engineering discipline: I build each website the way I’d build critical infrastructure — clean, reliable and secure.',
      bio2: 'My websites aren’t just pretty — they’re fast, accessible and built to convert. I obsess over the details: loading speed, natural-feeling animations, and copy that sells.',
      bio3: 'Working with clients across Europe, Australia and the Middle East — in Arabic, English and German. No translators needed.',
      facts: [
        { label: 'Languages', value: 'Arabic · English · German' },
        { label: 'Focus', value: 'Websites that sell' },
        { label: 'Response', value: '< 24 hours' },
      ],
      role: 'Web Designer & Developer',
    },
    contact: {
      title: 'Let’s build something great',
      sub: 'Tell me about your project — free consultation, honest advice, reply within 24 hours.',
      cards: [
        { label: 'Email', value: 'info@fikradigital.de', hint: 'Best for project briefs' },
        { label: 'Phone / WhatsApp', value: '+49 177 6971407', hint: 'AR · EN · DE' },
        { label: 'GitHub', value: 'TheChilledCloud', hint: 'Code & experiments' },
      ],
      formTitle: 'Or send a message',
      formName: 'Your name',
      formEmail: 'Email',
      formProject: 'What do you need?',
      formBudget: 'Budget range',
      formMessage: 'Tell me about your project…',
      formSend: 'Send message',
      formNote: 'This opens your email app with everything pre-filled — no data stored.',
      response: 'Opening your mail app…',
    },
    footer: {
      rights: 'All rights reserved.',
      built: 'Designed & built with passion.',
      tagline: 'Websites that sell.',
      imprint: 'Imprint',
      privacy: 'Privacy Policy',
    },
  },
  de: {
    meta: {
      title: 'fikradigital — Websites, die verkaufen',
      description: 'Maßgeschneiderte Websites für Restaurants, Unternehmen und Marken — Design, Entwicklung und Launch aus einer Hand. Arabisch, Englisch und Deutsch.',
    },
    nav: {
      home: 'Startseite',
      work: 'Arbeiten',
      services: 'Leistungen',
      about: 'Über mich',
      contact: 'Kontakt',
      cta: 'Projekt starten',
      langBtn: 'العربية',
      backMain: 'Hauptseite',
    },
    hero: {
      eyebrow: 'WEBDESIGN & ENTWICKLUNG',
      titleA: 'Websites,',
      titleB: 'die verkaufen.',
      sub: 'Ich gestalte und entwickle hochwertige Websites für Restaurants, Unternehmen und Marken — mit cineastischen Animationen, in drei Sprachen (Arabisch · Englisch · Deutsch) und bereit für den Launch, damit Ihr Geschäft online wächst.',
      ctaPrimary: 'Arbeiten ansehen',
      ctaSecondary: 'Projekt starten',
      badge1: 'Animationen',
      badge2: 'عربي · English · Deutsch',
      badge3: 'SEO & schnell',
      scroll: 'ZUM ENTDECKEN SCROLLEN',
    },
    marquee: [
      'Individuelle Websites', 'Restaurant-Websites', 'Landing Pages', 'عربي · English · Deutsch', 'Animationen', 'E-Commerce', 'Redesigns',
    ],
    home: {
      servicesTitle: 'Was ich baue',
      servicesSub: 'Alles, was ein modernes Unternehmen braucht, um online seriös aufzutreten — entworfen, gebaut und veröffentlicht aus einer Hand.',
      workTitle: 'Ausgewählte Arbeiten',
      workSub: 'Echte Produkte, live im Internet. Jedes Projekt wird von mir entworfen, entwickelt und veröffentlicht.',
      viewAll: 'Alle Projekte ansehen',
      processTitle: 'So arbeite ich',
      processSub: 'Ein einfacher, transparenter Ablauf — vom ersten Gespräch bis zum Launch.',
      process: [
        { step: '01', title: 'Kennenlernen', desc: 'Wir sprechen über Ihr Unternehmen, Ihre Ziele und Ihre Inspiration. Ich schaue mir Ihren Markt und Ihre Wettbewerber an.' },
        { step: '02', title: 'Design', desc: 'Sie erhalten ein individuelles Design für Ihre Marke — wir prüfen und verfeinern es gemeinsam, bis es passt.' },
        { step: '03', title: 'Umsetzung', desc: 'Pixelgenaue Entwicklung mit Animationen, Mobile-First-Layout und SEO-Grundlagen.' },
        { step: '04', title: 'Launch', desc: 'Ich veröffentliche auf Ihrer Domain, verbinde die Analysen und übergebe Ihnen alles, was Ihnen gehört.' },
      ],
      stats: [
        { value: '100%', label: 'Individuelles Design' },
        { value: '3 Tage', label: 'Typische Lieferzeit' },
        { value: '3', label: 'Sprachen integriert' },
        { value: '∞', label: 'Support nach Launch' },
      ],
      ctaTitle: 'Ihr Unternehmen verdient mehr als eine Standard-Website.',
      ctaSub: 'Erzählen Sie mir von Ihrem Projekt — ich melde mich innerhalb von 24 Stunden mit einer ehrlichen Einschätzung und einem klaren Angebot.',
      ctaBtn: 'Sprechen wir',
    },
    work: {
      title: 'Ausgewählte Arbeiten',
      sub: 'Websites, die ich entworfen, entwickelt und veröffentlicht habe. Klicken Sie auf ein Projekt, um es live zu sehen.',
      projects: [
        {
          id: 'beit-al-sham',
          name: 'Beit Al-Sham',
          nativeName: 'بيت الشام',
          tagline: 'Arabische Feinküche — ein cineastisches Erlebnis auf 4 Seiten',
          description:
            'Die komplette Website für ein authentisches syrisches Restaurant in Düsseldorf. Tiefe Grün-Nacht-Palette mit Messinggold, Granatapfel und Creme, dazu arabische Kalligrafie neben einem ruhigen Serifenschriftschnitt. Die Geschichte entfaltet sich beim Scrollen — vom Innenhof-Hero der Umayyaden über die cineastisch erzählte Gründungsgeschichte bis zum Reservierungsablauf, der direkt zu WhatsApp führt.',
          features: [
            '4 Seiten: Landing, Speisekarte (30 Gerichte), Geschichte, Reservierung',
            'Komplett zweisprachig — arabische RTL-Kalligrafie + Englisch',
            'Reservierungssystem mit Live-Übersicht → vorbefüllte WhatsApp-Buchung',
            'GSAP ScrollTrigger Scroll-Cinema, Lenis Smooth Scroll, Preloader',
            'Eigene Food-Fotografie, optimiert & lazy-loaded',
            'Mobile-First, reduced-motion-sicher, null JS-Fehler',
          ],
          tags: ['HTML', 'CSS', 'GSAP', 'Lenis', 'RTL Arabisch', 'A11y'],
          meta: [
            { label: 'Kunde', value: 'Restaurant — Düsseldorf' },
            { label: 'Jahr', value: '2026' },
            { label: 'Seiten', value: '4' },
            { label: 'Deploy', value: 'Statisch / CDN' },
          ],
          images: [],
          liveUrl: '/restaurant/',
          badge: 'FLAGSHIP',
        },
        {
          id: 'stretton-dental',
          name: 'Stretton Dental Specialists',
          tagline: 'Website einer Zahnarztpraxis — Expertenpflege, außergewöhnliche Lächeln',
          description:
            'Eine professionelle Website für eine Zahnarztpraxis in Brisbane, Australien. Klares medizinisches Design mit warmen, beruhigenden Tönen — Leistungen, Team und patientenorientierte Wege, die Besucher zu Terminbuchungen führen.',
          features: [
            'Praxis-Website mit Leistungen, Team & Kontaktwegen',
            'Terminorientiertes Konversionsdesign',
            'Warme, vertrauenswürdige medizinische Ästhetik',
            'Mobile-First, schnell ladend, SEO-bereit',
          ],
          tags: ['WordPress', 'UX-Design', 'SEO', 'Medizin'],
          meta: [
            { label: 'Kunde', value: 'Zahnarztpraxis — Brisbane, AU' },
            { label: 'Status', value: 'Live' },
            { label: 'Stack', value: 'WordPress' },
            { label: 'Deploy', value: 'dental-specialists.com.au' },
          ],
          images: [],
          liveUrl: 'https://dental-specialists.com.au/',
        },
        {
          id: 'crown-blade',
          name: 'Crown & Blade',
          nativeName: 'كراون آند بليد',
          tagline: 'Premium-Barbershop — ein dunkles, cineastisches 3-Seiten-Erlebnis',
          description:
            'Die komplette Website für einen Premium-Barbershop in Düsseldorf. Ink-Brass-Palette mit warmem Creme, editorialem Serifenschnitt und eigenem Cursor. Drei Seiten — Landing, Leistungen & Preise, Buchung — mit Lenis Smooth Scroll, GSAP-Scroll-Animationen, Parallax und einem Buchungsablauf, der direkt zu WhatsApp führt.',
          features: [
            '3 Seiten: Landing, Leistungen & Preise, Buchung',
            'Dreisprachig — English, Deutsch, العربية mit vollem RTL',
            'Buchungsformular → vorbefüllte WhatsApp-Bestätigung',
            'GSAP ScrollTrigger-Reveals & Parallax, Lenis Smooth Scroll, Preloader',
            'Eigener Cursor, magnetische Buttons, animierte Zähler',
            'Mobile-First, reduced-motion-sicher, null JS-Fehler',
          ],
          tags: ['HTML', 'CSS', 'GSAP', 'Lenis', 'RTL Arabisch', 'A11y'],
          meta: [
            { label: 'Kunde', value: 'Barbershop — Düsseldorf' },
            { label: 'Jahr', value: '2026' },
            { label: 'Seiten', value: '3' },
            { label: 'Deploy', value: 'Statisch / CDN' },
          ],
          images: [],
          liveUrl: '/crown-blade/',
          badge: 'NEW',
        },
        {
          id: 'mawj',
          name: 'MAWJ — Ein Haus am Rand des Meeres',
          nativeName: 'موج',
          tagline: 'Boutique-Hotel an der Corniche von Latakia — editoriale Eleganz am Mittelmeer',
          description:
            'Die komplette Website für ein Boutique-Hotel an der Corniche von Latakia — zweiundvierzig Zimmer, ein privater Strand, eine Küche, die kocht, was das Meer jeden Morgen hergibt. Die Designsprache ist Editorial Riviera: cremefarbene Papiertöne, tiefe Marine-Tinte, Champagner-Messing-Akzente, Cinzel als Display-Schrift neben einem ruhigen arabischen Schriftschnitt. Eine Seite erzählt die ganze Geschichte — Haus, Zimmer, Kulinarik, Erlebnisse, die Küste — mit einer nummerierten Seitenleiste, versetzt gerahmten Bildern und einem dreisprachigen Buchungsablauf, der direkt zu WhatsApp führt.',
          features: [
            'Einseitiges Editorial-Erlebnis: Haus, Zimmer, Kulinarik, Erlebnisse, Küste',
            'Dreisprachig — English, Deutsch, العربية mit vollem RTL',
            'Nummerierte Seitenleiste, versetzt gerahmte Bilder in Messing-Optik',
            'Zimmer-Vorschauen, die dem Cursor folgen, mit Akkordeon',
            'Sticky-Erlebnispaneel mit Überblendung, animierte Küstenroute',
            'Mobile-First, reduced-motion-sicher, null JS-Fehler',
          ],
          tags: ['HTML', 'CSS', 'GSAP', 'Lenis', 'RTL Arabisch', 'A11y'],
          meta: [
            { label: 'Kunde', value: 'Boutique-Hotel — Latakia' },
            { label: 'Jahr', value: '2026' },
            { label: 'Seiten', value: '1' },
            { label: 'Deploy', value: 'Statisch / CDN' },
          ],
          images: [],
          liveUrl: '/mawj/',
          badge: 'NEW',
        },
        {
          id: 'rihla',
          name: 'RIHLA — Reisen durch Syrien',
          nativeName: 'رحلة',
          tagline: 'Private Reisen durch Syrien — zehntausend Jahre Geschichte, eine Reise nach der anderen',
          description:
            'Die Website für ein privates Reisehaus, das Reisen durch Syrien kuratiert. Warmer Cremeton, serifenbetonte Schlagzeilen und ein einziger Ember-Akzent — ein Hauch von Farbe genau in den Momenten, die zählen. Reiseziele als editoriale Geschichten, Reisen, die ganz auf den Reisenden zugeschnitten sind, Stimmen früherer Gäste und ein Planungsablauf in drei Sprachen. Gebaut mit React und mit Sorgfalt animiert.',
          features: [
            'Reiseziele als editoriale Geschichten — Städte, Orte, Jahreszeiten',
            'Dreisprachig — English, Deutsch, العربية mit vollem RTL',
            'React + Tailwind mit Framer-Motion-Animationen',
            'Reiseplanung → vorbefüllte WhatsApp-Weiterleitung',
            'Cream-and-Ember-Designsystem mit lebendiger Bewegung',
            'Mobile-First, reduced-motion-sicher, null JS-Fehler',
          ],
          tags: ['React', 'Tailwind', 'Framer Motion', 'RTL Arabisch', 'A11y'],
          meta: [
            { label: 'Kunde', value: 'Reisehaus — Syrien' },
            { label: 'Jahr', value: '2026' },
            { label: 'Seiten', value: '1 (SPA)' },
            { label: 'Deploy', value: 'Statisch / CDN' },
          ],
          images: [],
          liveUrl: '/rihla/',
          badge: 'NEW',
        },
      ],
      live: 'Website ansehen',
      yourSite: 'Ihre Website könnte die nächste sein',
      yourSiteDesc: 'Von einer einzelnen Landing Page bis zur kompletten Multi-Page-Präsenz — individuell gestaltet, animiert und veröffentlicht.',
    },
    services: {
      title: 'Leistungen',
      sub: 'Alles, was Sie brauchen, um online seriös aufzutreten — ein Partner, ohne Agentur-Umwege.',
      items: [
        { icon: 'layout', title: 'Individuelle Websites', desc: 'Websites für Unternehmen, Portfolios und Marken — von Grund auf gestaltet, ohne Vorlagen und Massenware.' },
        { icon: 'utensils', title: 'Restaurant- & Café-Sites', desc: 'Speisekarten, Reservierungen, mehrsprachige Menüs und ein Design, das die Gäste an den Tisch holt.' },
        { icon: 'sparkles', title: 'Redesigns', desc: 'Wir machen aus Ihrer bestehenden Website eine moderne: neues Design, Animationen, Tempo und ein rundes Mobile-Erlebnis.' },
        { icon: 'cart', title: 'E-Commerce', desc: 'Online-Shops mit reibungslosem Checkout — vom Start mit wenigen Produkten bis zum vollständigen Katalog.' },
        { icon: 'globe', title: 'Hosting & Domains', desc: 'Deployment, Domains, SSL und E-Mail übernehme ich — Ihre Website bleibt schnell und sicher.' },
        { icon: 'heart', title: 'Pflege & Support', desc: 'Updates, Inhaltsänderungen und ein gutes Gefühl nach dem Launch. Sie sind nie allein.' },
      ],
      popular: 'BELIEBT',
      pricingTitle: 'Klare Preise',
      pricingSub: 'Transparente Pakete ohne versteckte Kosten. Jedes Paket inklusive Domain, Hosting und Wartung.',
      pricing: [
        { name: 'Standard Website', price: '€299', oldPrice: '€399', monthly: '+ €29/Monat', badge: 'Eröffnungsangebot — nur für die ersten 5 Kunden', desc: 'Der komplette Online-Auftritt für Ihr Unternehmen — ohne technische Arbeit.', features: ['Professionelle Website für Ihr Unternehmen — live in 48 Stunden', 'Alles inklusive: Domain, Hosting & Sicherheit — null technischer Aufwand für Sie', 'Sieht auf Smartphone, Tablet & Computer perfekt aus', 'Kunden können Sie direkt von der Website anrufen oder anschreiben', 'Rechtssicher (Impressum & Datenschutz inklusive)', 'Wir übernehmen Updates & Änderungen — 1 kostenlose Bearbeitung pro Monat'] },
        { name: 'Business Pro', price: '€790–990', monthly: '+ €39/Monat', desc: 'Für Unternehmen, die online Kunden gewinnen wollen.', featured: true, features: ['Alles aus Standard, plus bis zu 5 Seiten', 'Anfrageformulare & WhatsApp-Button — Besucher werden zu Kunden', 'Bei Google auffindbar: lokale Suchoptimierung + Google-Business-Profil', 'Prioritäts-Support — Antwort am selben Tag', '2 kostenlose Bearbeitungen pro Monat', 'Live innerhalb von 3–5 Werktagen'] },
        { name: 'Custom Solutions', price: 'Angebot', desc: 'Individuell nach Ihren Anforderungen — kontaktieren Sie uns für ein unverbindliches Angebot.', cta: 'Jetzt Kontakt aufnehmen', features: ['Buchungs- & Terminsysteme für Praxen und Dienstleister', 'Kundenverwaltung (CRM) & automatisierte Lead-Nachfassung', 'Arbeitszeiterfassung & Schichtplanung für Mitarbeiter', 'Mehrsprachige Websites (DE / EN / AR)', 'Individuelle Portale, Dashboards & interne Tools'] },
      ],
      pricingNote: 'Alle Pakete inklusive Domain, Hosting, SSL, DSGVO & monatlicher Wartung.',
      ustNote: 'Alle Preise verstehen sich gemäß § 19 UStG ohne Umsatzsteuer (Kleinunternehmerregelung).',
      processTitle: 'Der Ablauf',
      processSub: 'Klare Phasen, klare Kommunikation, keine Überraschungen.',
      process: [
        { step: '01', title: 'Kostenloses Erstgespräch', desc: 'Wir besprechen Ziele, Umfang und Budget. Sie bekommen eine ehrliche Einschätzung — selbst wenn die lautet: „Sie brauchen noch keine neue Website“.' },
        { step: '02', title: 'Design-Entwurf', desc: 'Ein individuelles Design für Ihre Marke. Sie prüfen es und fordern Änderungen, bis es sich richtig anfühlt.' },
        { step: '03', title: 'Entwicklung', desc: 'Sauberer Code, Animationen, Mobile-First. Sie verfolgen den Fortschritt bei jedem Schritt.' },
        { step: '04', title: 'Launch & danach', desc: 'Veröffentlichung auf Ihrer Domain, Analysen verbunden und Support, wann immer Sie ihn brauchen.' },
      ],
      guarantee: 'Keine Vorlagen. Kein Agentur-Aufschlag.',
      guaranteeDesc: 'Jedes Pixel ist auf Ihre Marke abgestimmt — und alles gehört Ihnen: Design, Code und Domain.',
      ctaTitle: 'Nicht sicher, was Sie brauchen?',
      ctaBtn: 'Kostenlose Beratung erhalten',
    },
    about: {
      title: 'Über mich',
      sub: 'Die Person hinter den Designs.',
      bio1: 'Ich bin Ahmad Alfaisal — Webdesigner und Entwickler. Hinter jedem Projekt steckt jahrelange Ingenieursdisziplin: Ich baue jede Website so, wie ich kritische Infrastruktur bauen würde — sauber, zuverlässig und sicher.',
      bio2: 'Meine Websites sind nicht nur schön, sondern schnell, barrierefrei und darauf ausgelegt, zu verkaufen. Ich achte auf jedes Detail: Ladezeit, natürlich wirkende Animationen und Texte, die überzeugen.',
      bio3: 'Meine Kunden kommen aus Europa, Australien und dem Nahen Osten — ich arbeite auf Arabisch, Englisch und Deutsch. Übersetzer sind nicht nötig.',
      facts: [
        { label: 'Sprachen', value: 'Arabisch · Englisch · Deutsch' },
        { label: 'Fokus', value: 'Websites, die verkaufen' },
        { label: 'Antwort', value: '< 24 Stunden' },
      ],
      role: 'Webdesigner & Entwickler',
    },
    contact: {
      title: 'Lassen Sie uns etwas Großartiges bauen',
      sub: 'Erzählen Sie mir von Ihrem Projekt — kostenlose Beratung, ehrliche Einschätzung und Antwort innerhalb von 24 Stunden.',
      cards: [
        { label: 'E-Mail', value: 'info@fikradigital.de', hint: 'Am besten für Projektbeschreibungen' },
        { label: 'Telefon / WhatsApp', value: '+49 177 6971407', hint: 'AR · EN · DE' },
        { label: 'GitHub', value: 'TheChilledCloud', hint: 'Code & Experimente' },
      ],
      formTitle: 'Oder schreiben Sie mir direkt',
      formName: 'Ihr Name',
      formEmail: 'E-Mail',
      formProject: 'Was brauchen Sie?',
      formBudget: 'Budgetrahmen',
      formMessage: 'Erzählen Sie mir von Ihrem Projekt…',
      formSend: 'Nachricht senden',
      formNote: 'Dies öffnet Ihre Mail-App mit allen Feldern vorbefüllt — es werden keine Daten gespeichert.',
      response: 'Ihre Mail-App wird geöffnet…',
    },
    footer: {
      rights: 'Alle Rechte vorbehalten.',
      built: 'Mit Leidenschaft entworfen und gebaut.',
      tagline: 'Websites, die verkaufen.',
      imprint: 'Impressum',
      privacy: 'Datenschutz',
    },
  },
  ar: {
    meta: {
      title: 'fikradigital — مواقع تبيع',
      description: 'مواقع مخصصة للمطاعم والشركات والعلامات التجارية — تصميم وبرمجة ونشر من أحمد الفيصل. بالعربية والإنجليزية والألمانية.',
    },
    nav: {
      home: 'الرئيسية',
      work: 'أعمالي',
      services: 'الخدمات',
      about: 'من أنا',
      contact: 'تواصل',
      cta: 'ابدأ مشروعك',
      langBtn: 'ENGLISH',
      backMain: 'الموقع الرئيسي',
    },
    hero: {
      eyebrow: 'استوديو تصميم وبرمجة المواقع',
      titleA: 'مواقع',
      titleB: 'تبيع.',
      sub: 'أصمم وأبني مواقع عصرية للمطاعم والشركات والعلامات التجارية — بحركات سينمائية، وبثلاث لغات (عربي، إنجليزي، ألماني)، وأنشرها جاهزة لتكون أداة نمو حقيقية لأعمالك.',
      ctaPrimary: 'شاهد أعمالي',
      ctaSecondary: 'ابدأ مشروعك',
      badge1: 'حركات وانتقالات',
      badge2: 'عربي · إنجليزي · ألماني',
      badge3: 'سريع ومتوافق مع SEO',
      scroll: 'مرر للاستكشاف',
    },
    marquee: [
      'مواقع مخصصة', 'مواقع مطاعم', 'صفحات هبوط', 'عربي · إنجليزي · ألماني', 'حركات وانتقالات', 'متاجر إلكترونية', 'إعادة تصميم',
    ],
    home: {
      servicesTitle: 'ماذا أبني لك؟',
      servicesSub: 'كل ما يحتاجه مشروعك ليبدو احترافياً على الإنترنت — تصميم وبرمجة ونشر من البداية إلى النهاية.',
      workTitle: 'أعمال مختارة',
      workSub: 'مشاريع حقيقية تعمل على الإنترنت. كل موقع صممته وبرمجته ونشرته بنفسي.',
      viewAll: 'عرض كل المشاريع',
      processTitle: 'كيف أعمل معك؟',
      processSub: 'خطوات بسيطة وواضحة — من أول اتصال إلى الإطلاق.',
      process: [
        { step: '01', title: 'فهم المشروع', desc: 'نتحدث عن عملك وأهدافك، وأدرس سوقك ومنافسيك لأفهم ما يناسبك.' },
        { step: '02', title: 'التصميم', desc: 'تحصل على تصميم خاص بهوية علامتك — نراجعه معاً ونعدّله حتى يرضيك تماماً.' },
        { step: '03', title: 'البرمجة', desc: 'تنفيذ دقيق مع حركات سلسة وتصميم متجاوب مع الجوال وأساسيات SEO.' },
        { step: '04', title: 'الإطلاق', desc: 'أنشر موقعك على نطاقك الخاص، أربط أدوات التحليلات، وأسلّمك كل شيء.' },
      ],
      stats: [
        { value: '100%', label: 'تصميم مخصص' },
        { value: '3 أيام', label: 'مدة التسليم' },
        { value: '3', label: 'لغات مدمجة' },
        { value: '∞', label: 'دعم بعد الإطلاق' },
      ],
      ctaTitle: 'مشروعك يستحق موقعاً أفضل؟',
      ctaSub: 'حدثني عن مشروعك — أرد خلال 24 ساعة بنصيحة صادقة وعرض سعر واضح.',
      ctaBtn: 'لنتحدث',
    },
    work: {
      title: 'أعمال مختارة',
      sub: 'مواقع صممتها وبرمجتها ونشرتها. اضغط على أي مشروع لرؤيته مباشرة.',
      projects: [
        {
          id: 'beit-al-sham',
          name: 'بيت الشام',
          nativeName: 'Beit Al-Sham',
          tagline: 'مطعم عربي راقٍ — تجربة سينمائية من 4 صفحات',
          description:
            'موقع متكامل لمطعم سوري أصيل في دوسلدورف. لوحة ألوان ليلية خضراء مع ذهبي نحاسي ورمان وكريمي، وخط عربي أنيق بجانب خط تحريري هادئ. تنسج القصة أثناء التمرير — من باحة الجامع الأموي إلى حكاية تأسيس المطعم بأسلوب سينمائي، ونظام حجز يرسل الطلب مباشرة إلى واتساب.',
          features: [
            '4 صفحات: رئيسية، قائمة طعام (30 طبقاً)، القصة، الحجز',
            'ثنائية اللغة بالكامل — خط عربي RTL + إنجليزي',
            'نظام حجز يعرض ملخصاً فورياً ثم يحوّلك إلى واتساب بطلب جاهز',
            'حركات GSAP ScrollTrigger وتمرير سلس مع Lenis',
            'تصوير أطباق مخصص ومحسّن',
            'متجاوب مع الجوال ومراعٍ لسهولة الوصول',
          ],
          tags: ['HTML', 'CSS', 'GSAP', 'Lenis', 'عربي RTL', 'A11y'],
          meta: [
            { label: 'العميل', value: 'مطعم — دوسلدورف' },
            { label: 'السنة', value: '2026' },
            { label: 'الصفحات', value: '4' },
            { label: 'النشر', value: 'استاتيكي / CDN' },
          ],
          images: [],
          liveUrl: '/restaurant/',
          badge: 'الأبرز',
        },
        {
          id: 'stretton-dental',
          name: 'ستريتون لأخصائيي الأسنان',
          tagline: 'موقع عيادة أسنان — رعاية خبيرة، ابتسامات استثنائية',
          description:
            'موقع احترافي لعيادة أسنان في بريزبين بأستراليا. تصميم طبي نظيف بألوان دافئة تطمئن الزائر — الخدمات والفريق ومسارات تواصل مصممة لتحويل الزوار إلى حجوزات مواعيد.',
          features: [
            'موقع عيادة يشمل الخدمات والفريق ومسارات التواصل',
            'تصميم يركز على تحويل الزوار إلى حجوزات',
            'هوية طبية دافئة وموثوقة',
            'متجاوب وسريع وجاهز لـ SEO',
          ],
          tags: ['WordPress', 'تصميم UX', 'SEO', 'طبّي'],
          meta: [
            { label: 'العميل', value: 'عيادة أسنان — بريزبين، AU' },
            { label: 'الحالة', value: 'مباشر' },
            { label: 'التقنية', value: 'WordPress' },
            { label: 'النشر', value: 'dental-specialists.com.au' },
          ],
          images: [],
          liveUrl: 'https://dental-specialists.com.au/',
        },
        {
          id: 'crown-blade',
          name: 'Crown & Blade',
          nativeName: 'كراون آند بليد',
          tagline: 'صالون حلاقة فاخر — تجربة داكنة سينمائية من 3 صفحات',
          description:
            'موقع كامل لصالون حلاقة فاخر في دوسلدورف. لوحة ألوان داكنة مع لمسات نحاسية وكريمي دافئ، وعناوين سيريف أنيقة مع مؤشر مخصص. ثلاث صفحات — الرئيسية، الخدمات والأسعار، الحجز — مع تمرير سلس، وحركات ظهور أثناء التمرير، وتأثير بارالاكس، ونظام حجز يرسل الطلب مباشرة إلى واتساب.',
          features: [
            '3 صفحات: الرئيسية، الخدمات والأسعار، الحجز',
            'ثلاثي اللغات — إنجليزي، ألماني، عربي مع دعم كامل لاتجاه RTL',
            'نموذج حجز → تأكيد عبر واتساب برسالة جاهزة',
            'حركات ظهور وتأثير بارالاكس مع GSAP، وتمرير سلس Lenis، وشاشة تحميل',
            'مؤشر مخصص وأزرار مغناطيسية وعدادات متحركة',
            'متجاوب مع الجوال، آمن لتفضيل تقليل الحركة، بلا أخطاء برمجية',
          ],
          tags: ['HTML', 'CSS', 'GSAP', 'Lenis', 'RTL عربي', 'A11y'],
          meta: [
            { label: 'العميل', value: 'صالون حلاقة — دوسلدورف' },
            { label: 'السنة', value: '2026' },
            { label: 'الصفحات', value: '3' },
            { label: 'النشر', value: 'استضافة ثابتة / CDN' },
          ],
          images: [],
          liveUrl: '/crown-blade/',
          badge: 'NEW',
        },
        {
          id: 'mawj',
          name: 'موج — بيت على حافة البحر',
          nativeName: 'MAWJ',
          tagline: 'فندق بوتيك على كورنيش اللاذقية — أناقة تحريرية على شاطئ المتوسط',
          description:
            'موقع متكامل لفندق بوتيك على كورنيش اللاذقية — اثنان وأربعون غرفة، وشاطئ خاص، ومطبخ يطبخ ما تجلبه المتوسط كل صباح. لغة التصميم «ريفييرا تحريرية»: خلفيات كريمية كالورق، وحبر كحلي عميق، ولمسات نحاسية شامبانيا، وخط عناوين Cinzel بجانب خط عربي هادئ. صفحة واحدة تحكي القصة كلها — البيت والغرف والمأكولات والتجارب والساحل — مع قائمة جانبية مرقّمة، وصور مؤطّرة بالنحاس بشكل متدرّج، ونظام حجز ثلاثي اللغات يحوّل الطلب مباشرة إلى واتساب.',
          features: [
            'تجربة تحريرية من صفحة واحدة: البيت، الغرف، المأكولات، التجارب، الساحل',
            'ثلاثي اللغات — English، Deutsch، العربية مع دعم كامل لـ RTL',
            'قائمة جانبية مرقّمة وصور مؤطّرة بالنحاس',
            'معاينات غرف تتبع المؤشر مع أكورديون',
            'لوحة تجارب ثابتة بانتقالات متقاطعة وخريطة ساحل متحركة',
            'متجاوب مع الجوال، آمن لتفضيل تقليل الحركة، بلا أخطاء برمجية',
          ],
          tags: ['HTML', 'CSS', 'GSAP', 'Lenis', 'عربي RTL', 'A11y'],
          meta: [
            { label: 'العميل', value: 'فندق بوتيك — اللاذقية' },
            { label: 'السنة', value: '2026' },
            { label: 'الصفحات', value: '1' },
            { label: 'النشر', value: 'استضافة ثابتة / CDN' },
          ],
          images: [],
          liveUrl: '/mawj/',
          badge: 'NEW',
        },
        {
          id: 'rihla',
          name: 'رحلة — أسفار في سوريا',
          nativeName: 'RIHLA',
          tagline: 'رحلات خاصة في سوريا — عشرة آلاف عام من التاريخ، رحلة واحدة في كل مرة',
          description:
            'موقع لدار أسفار خاصة تنظّم رحلات في سوريا. قماش كريمي دافئ، وعناوين سيريف بحبر داكن، ومسة واحدة بلون الجمر — لمسة لون في اللحظات التي تستحق. الوجهات تُروى كقصص تحريرية، والرحلات تُصمَّم حول كل مسافر، وأصوات ضيوف سابقين، وتدفّق تخطيط بثلاث لغات. مبنيّ بـ React ومتحرّك بعناية.',
          features: [
            'وجهات تُروى كقصص تحريرية — مدن ومواقع وفصول',
            'ثلاثي اللغات — English، Deutsch، العربية مع دعم كامل لـ RTL',
            'React + Tailwind مع حركات Framer Motion',
            'تدفّق تخطيط الرحلة → تحويل جاهز إلى واتساب',
            'نظام تصميم كريمي وجمري بحركة حيّة',
            'متجاوب مع الجوال، آمن لتفضيل تقليل الحركة، بلا أخطاء برمجية',
          ],
          tags: ['React', 'Tailwind', 'Framer Motion', 'عربي RTL', 'A11y'],
          meta: [
            { label: 'العميل', value: 'دار أسفار — سوريا' },
            { label: 'السنة', value: '2026' },
            { label: 'الصفحات', value: '1 (SPA)' },
            { label: 'النشر', value: 'استضافة ثابتة / CDN' },
          ],
          images: [],
          liveUrl: '/rihla/',
          badge: 'NEW',
        },
      ],
      live: 'زيارة الموقع',
      yourSite: 'موقعك قد يكون التالي',
      yourSiteDesc: 'من صفحة هبوط واحدة إلى موقع متكامل — تصميم مخصص وحركات ونشر كامل.',
    },
    services: {
      title: 'الخدمات',
      sub: 'كل ما تحتاجه لتظهر باحترافية على الإنترنت — شريك واحد، بلا تعقيدات الوكالات.',
      items: [
        { icon: 'layout', title: 'مواقع مخصصة', desc: 'مواقع أعمال وشخصية وعلامات تجارية مصممة من الصفر — لا قوالب جاهزة ولا نسخ مكررة.' },
        { icon: 'utensils', title: 'مواقع المطاعم والمقاهي', desc: 'قوائم طعام وحجوزات وقوائم متعددة اللغات وتصميم يملأ الطاولات.' },
        { icon: 'sparkles', title: 'إعادة تصميم', desc: 'نعيد تصميم موقعك الحالي: هوية جديدة وحركات وسرعة وتجربة جوال مريحة.' },
        { icon: 'cart', title: 'متاجر إلكترونية', desc: 'متاجر بعملية شراء سلسة — من منتجات قليلة إلى كتالوج كامل.' },
        { icon: 'globe', title: 'استضافة ونطاقات', desc: 'أتكفل بالنشر والنطاقات وشهادات SSL والبريد — موقعك يبقى سريعاً وآمناً.' },
        { icon: 'heart', title: 'دعم وصيانة', desc: 'تحديثات وتعديلات وطمأنينة بعد الإطلاق. لن تبقى وحدك أبداً.' },
      ],
      popular: 'الأكثر طلباً',
      pricingTitle: 'أسعار واضحة',
      pricingSub: 'باقات شفافة بلا تكاليف خفية — كل باقة تشمل النطاق والاستضافة والصيانة.',
      pricing: [
        { name: 'الموقع القياسي', price: '€299', oldPrice: '€399', monthly: '+ €29 شهرياً', badge: 'عرض الإطلاق — لأول 5 عملاء فقط', desc: 'حضور إلكتروني متكامل لعملك — دون أي عناء تقني.', features: ['موقع احترافي لعملك — ينطلق خلال 48 ساعة', 'كل شيء مشمول: النطاق والاستضافة والأمان — بلا أي عمل تقني منك', 'يظهر بشكل مثالي على الجوال والجهاز اللوحي والحاسوب', 'يمكن لعملائك الاتصال أو مراسلتك مباشرة من الموقع', 'متوافق قانونياً (بيانات النشر وسياسة الخصوصية مشمولة)', 'نتولى التحديثات والتعديلات — تعديل مجاني واحد شهرياً'] },
        { name: 'أعمال برو', price: '€790–990', monthly: '+ €39 شهرياً', desc: 'للأعمال النامية التي تريد كسب عملاء عبر الإنترنت.', featured: true, features: ['كل مزايا الباقة القياسية، بالإضافة إلى 5 صفحات', 'نماذج طلب عروض وزر واتساب — يحوّل الزوار إلى عملاء', 'الظهور في Google: تحسين البحث المحلي + ملف Google Business', 'دعم ذو أولوية — رد في نفس اليوم', 'تعديلان مجانيان شهرياً', 'ينطلق خلال 3–5 أيام عمل'] },
        { name: 'حلول مخصصة', price: 'عرض خاص', desc: 'مصممة وفق متطلباتك — تواصل معنا للحصول على عرض سعر دون أي التزام.', cta: 'تواصل الآن', features: ['أنظمة حجز ومواعيد للعيادات وقطاع الخدمات', 'إدارة العملاء (CRM) ومتابعة العملاء المحتملين تلقائياً', 'تتبع ساعات العمل وجداول المناوبات للموظفين', 'مواقع متعددة اللغات (عربي / إنجليزي / ألماني)', 'بوابات ولوحات تحكم وأدوات داخلية مخصصة'] },
      ],
      pricingNote: 'جميع الباقات تشمل النطاق والاستضافة وشهادة SSL والامتثال لـ DSGVO والصيانة الشهرية.',
      ustNote: 'جميع الأسعار وفقاً للمادة 19 من قانون الضرائب الألماني (UStG) — بدون ضريبة قيمة مضافة (نظام المشاريع الصغيرة).',
      processTitle: 'مراحل العمل',
      processSub: 'مراحل واضحة وتواصل صريح — بلا مفاجآت.',
      process: [
        { step: '01', title: 'استشارة مجانية', desc: 'نناقش أهدافك ونطاق العمل وميزانيتك، وأعطيك رأياً صادقاً — حتى لو كان «موقعك الحالي لا يحتاج تغييراً بعد».' },
        { step: '02', title: 'نموذج التصميم', desc: 'تصميم مخصص لعلامتك تراجعه وتطلب تعديلاته حتى تشعر أنه مناسب تماماً.' },
        { step: '03', title: 'التطوير', desc: 'كود نظيف وحركات سلسة وتصميم يبدأ من الجوال. تتابع التقدم في كل خطوة.' },
        { step: '04', title: 'الإطلاق وما بعده', desc: 'نشر على نطاقك وربط التحليلات ودعم دائم متى احتجت.' },
      ],
      guarantee: 'بلا قوالب جاهزة. بلا عمولات وسطاء.',
      guaranteeDesc: 'كل بكسل مصمم لعلامتك — وكل شيء ملكك: التصميم والكود والنطاق.',
      ctaTitle: 'لست متأكداً ماذا تحتاج؟',
      ctaBtn: 'احصل على استشارة مجانية',
    },
    about: {
      title: 'من أنا',
      sub: 'من يقف خلف هذه التصاميم؟',
      bio1: 'أنا أحمد الفيصل — مصمم ومطور مواقع. خلف كل مشروع سنوات من الانضباط الهندسي: أبني كل موقع كما أبني بنية تحتية حرجة — نظيفاً وموثوقاً وآمناً.',
      bio2: 'مواقعي ليست جميلة فحسب، بل سريعة وسهلة الاستخدام ومصممة لتُبيع. أهتم بأدق التفاصيل: سرعة التحميل، حركات طبيعية، ونصوص تلامس الزائر.',
      bio3: 'أعمل مع عملاء في أوروبا وأستراليا والشرق الأوسط — بالعربية والإنجليزية والألمانية. لا حاجة لمترجمين.',
      facts: [
        { label: 'اللغات', value: 'العربية، الإنجليزية، الألمانية' },
        { label: 'التركيز', value: 'مواقع تبيع' },
        { label: 'الرد', value: 'خلال 24 ساعة' },
      ],
      role: 'مصمم ومطور مواقع',
    },
    contact: {
      title: 'لنصنع شيئاً رائعاً معاً',
      sub: 'حدثني عن مشروعك — استشارة مجانية، رأي صادق، ورد خلال 24 ساعة.',
      cards: [
        { label: 'البريد', value: 'info@fikradigital.de', hint: 'الأفضل لملخصات المشاريع' },
        { label: 'الهاتف / واتساب', value: '+49 177 6971407', hint: 'عربي · إنجليزي · ألماني' },
        { label: 'GitHub', value: 'TheChilledCloud', hint: 'كود وتجارب' },
      ],
      formTitle: 'أو راسلني مباشرة',
      formName: 'اسمك',
      formEmail: 'بريدك الإلكتروني',
      formProject: 'ما الذي تحتاجه؟',
      formBudget: 'الميزانية التقريبية',
      formMessage: 'احكِ لي عن مشروعك…',
      formSend: 'إرسال الرسالة',
      formNote: 'سيُفتح تطبيق البريد لديك وكل الحقول معبأة مسبقاً — لا نخزّن أي بيانات.',
      response: 'جاري فتح تطبيق البريد…',
    },
    footer: {
      rights: 'جميع الحقوق محفوظة.',
      built: 'صُمم وبُني بشغف.',
      tagline: 'مواقع تبيع.',
      imprint: 'بيانات النشر',
      privacy: 'سياسة الخصوصية',
    },
  },
};
