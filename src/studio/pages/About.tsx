import { useLanguage } from '../context/LanguageContext';
import { Reveal } from '../components/Reveal';
import { BrainMark } from '../components/BrainMark';
import profileImg from '../assets/profile.jpg';

export function About() {
  const { t, isRtl } = useLanguage();
  const facts: any[] = t('about.facts') ?? [];

  return (
    <>
      <section className="relative pt-36 pb-12 overflow-hidden">
        <div className="absolute inset-0 paper-grid pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-5 md:px-8 text-center">
          <Reveal>
            <span className="eyebrow mb-5">{t('about.title')}</span>
            <h1 className="display-fikra text-4xl md:text-6xl mb-4">{t('about.title')}</h1>
            <p className="text-ink/60 max-w-xl mx-auto">{t('about.sub')}</p>
          </Reveal>
        </div>
      </section>

      <section className="py-10 md:py-16">
        <div className="max-w-6xl mx-auto px-5 md:px-8 grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          {/* Photo — offset gold frame + the mark as a seal */}
          <Reveal className="lg:col-span-2">
            <div className="relative group max-w-sm mx-auto lg:mx-0">
              <div
                className="absolute -inset-3 rounded-[28px] border border-gold/40 rotate-2 group-hover:rotate-0 transition-transform duration-500"
                aria-hidden="true"
              />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-ink/20">
                <img
                  src={profileImg}
                  alt="Ahmad Alfaisal"
                  className="w-full aspect-[4/5] object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <BrainMark
                className="absolute -bottom-7 -end-4 h-20 w-auto drop-shadow-lg"
                style={{
                  ['--mk-line' as string]: 'var(--color-ink)',
                  ['--mk-bg' as string]: 'var(--color-canvas)',
                  ['--mk-seed' as string]: 'var(--color-gold)',
                }}
              />
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
                  <div
                    key={f.label}
                    className="group rounded-2xl border border-ink/10 bg-white px-5 py-4 hover:border-gold/50 transition-colors duration-300"
                  >
                    <div className="flex items-center gap-2 text-[10px] font-bold tracking-widest text-taupe uppercase mb-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold" aria-hidden="true" />
                      {f.label}
                    </div>
                    <div className="font-display font-semibold text-sm leading-snug">{f.value}</div>
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
