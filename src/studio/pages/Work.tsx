import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Reveal } from '../components/Reveal';
import { ProjectCard } from '../components/ProjectCard';

export function Work() {
  const { t, isRtl } = useLanguage();
  const projects: any[] = t('work.projects') ?? [];

  return (
    <>
      {/* Header */}
      <section className="relative pt-36 pb-14 overflow-hidden">
        <div className="absolute inset-0 paper-grid pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-5 md:px-8 text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet/30 bg-violet/5 text-violet text-xs font-bold tracking-widest uppercase mb-5">
              <span className="w-2 h-2 rounded-full bg-violet animate-pulse" />
              {t('work.title')}
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight mb-4">{t('work.title')}</h1>
            <p className="text-ink/60 max-w-xl mx-auto">{t('work.sub')}</p>
          </Reveal>
        </div>
      </section>

      {/* Projects */}
      <section className="py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-5 md:px-8 flex flex-col gap-24 md:gap-32">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </section>

      {/* Your site CTA — blends with the page, no separate card */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-5 md:px-8 text-center">
          <Reveal>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-3">
              {t('work.yourSite')}
            </h2>
            <p className="text-ink/60 max-w-lg mx-auto mb-8">{t('work.yourSiteDesc')}</p>
            <Link
              to="/contact"
              className="btn-studio px-8 py-4 text-base text-white bg-violet shadow-lg shadow-violet/30 hover:shadow-violet/50 hover:-translate-y-0.5"
            >
              {t('hero.ctaSecondary')} <ArrowRight size={16} className={isRtl ? 'rotate-180' : ''} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
