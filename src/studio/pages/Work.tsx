import { useLanguage } from '../context/LanguageContext';
import { Reveal } from '../components/Reveal';
import { ProjectCard } from '../components/ProjectCard';
import { FikraButton } from '../components/FikraButton';

export function Work() {
  const { t } = useLanguage();
  const projects: any[] = t('work.projects') ?? [];

  return (
    <>
      {/* Header */}
      <section className="relative pt-36 pb-12 overflow-hidden">
        <div className="absolute inset-0 paper-grid pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-5 md:px-8 text-center">
          <Reveal>
            <span className="eyebrow mb-5">{t('work.title')}</span>
            <h1 className="display-fikra text-4xl md:text-6xl mb-4">{t('work.title')}</h1>
            <p className="text-ink/60 max-w-xl mx-auto">{t('work.sub')}</p>
          </Reveal>
        </div>
      </section>

      {/* Projects */}
      <section className="py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-5 md:px-8 flex flex-col gap-24 md:gap-32">
          {projects.map((p, i) => (
            <div key={p.id} className="relative">
              <span
                className="absolute -top-8 start-0 font-display font-semibold text-6xl md:text-7xl text-ink/6 select-none"
                aria-hidden="true"
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <ProjectCard project={p} />
            </div>
          ))}
        </div>
      </section>

      {/* Your site CTA — blends with the page */}
      <section className="py-16 md:py-24 bg-paper">
        <div className="max-w-3xl mx-auto px-5 md:px-8 text-center">
          <Reveal>
            <span className="eyebrow mb-4">{t('nav.cta')}</span>
            <h2 className="display-fikra text-3xl md:text-4xl mb-3">
              {t('work.yourSite')}
            </h2>
            <p className="text-ink/60 max-w-lg mx-auto mb-8">{t('work.yourSiteDesc')}</p>
            <FikraButton to="/contact" variant="primary" className="px-8 py-4 text-base" arrow>
              {t('hero.ctaSecondary')}
            </FikraButton>
          </Reveal>
        </div>
      </section>
    </>
  );
}
