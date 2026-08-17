import { useLanguage } from '../context/LanguageContext';
import { Reveal } from '../components/Reveal';
import profileImg from '../assets/profile.jpg';

export function About() {
  const { t, isRtl } = useLanguage();
  const facts: any[] = t('about.facts') ?? [];

  return (
    <>
      <section className="relative pt-36 pb-14 overflow-hidden">
        <div className="absolute inset-0 paper-grid pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-5 md:px-8 text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet/30 bg-violet/5 text-violet text-xs font-bold tracking-widest uppercase mb-5">
              <span className="w-2 h-2 rounded-full bg-violet animate-pulse" />
              {t('about.title')}
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight mb-4">{t('about.title')}</h1>
            <p className="text-ink/60 max-w-xl mx-auto">{t('about.sub')}</p>
          </Reveal>
        </div>
      </section>

      <section className="py-10 md:py-16">
        <div className="max-w-6xl mx-auto px-5 md:px-8 grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          {/* Photo */}
          <Reveal className="lg:col-span-2">
            <div className="relative group max-w-sm mx-auto lg:mx-0">
              <div className="absolute -inset-4 bg-violet/20 blur-2xl rounded-3xl group-hover:rotate-2 transition-transform duration-500" />
              <div className="relative rounded-3xl overflow-hidden border-4 border-white shadow-2xl">
                <img
                  src={profileImg}
                  alt="Ahmad Alfaisal"
                  className="w-full aspect-[4/5] object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div
                className="absolute -bottom-5 start-1/2 -translate-x-1/2 bg-ink text-canvas text-xs font-bold px-5 py-2.5 rounded-full whitespace-nowrap shadow-lg text-center"
                dir={isRtl ? 'rtl' : 'ltr'}
              >
                {t('about.role')}
              </div>
            </div>
          </Reveal>

          {/* Bio */}
          <div className="lg:col-span-3">
            <Reveal>
              <p className="text-ink/75 leading-relaxed mb-5">{t('about.bio1')}</p>
              <p className="text-ink/75 leading-relaxed mb-5">{t('about.bio2')}</p>
              <p className="text-ink/60 leading-relaxed mb-8">{t('about.bio3')}</p>
            </Reveal>

            <Reveal>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {facts.map((f: any) => (
                  <div key={f.label} className="rounded-xl border border-ink/10 bg-white px-5 py-4">
                    <div className="text-[10px] font-bold tracking-widest text-violet uppercase mb-1">{f.label}</div>
                    <div className="font-display font-bold text-sm leading-snug">{f.value}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
