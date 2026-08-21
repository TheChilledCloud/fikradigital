import { Link } from 'react-router-dom';
import { Mail, Phone } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { BrainMark } from './BrainMark';

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  const links = [
    { to: '/work', label: t('nav.work') },
    { to: '/services', label: t('nav.services') },
    { to: '/about', label: t('nav.about') },
    { to: '/contact', label: t('nav.contact') },
  ];

  return (
    <footer className="relative bg-graphite text-porcelain overflow-hidden">
      {/* watermark mark */}
      <BrainMark
        className="absolute -end-14 top-1/2 -translate-y-1/2 h-[130%] w-auto opacity-[0.045] pointer-events-none"
        style={{
          ['--mk-line' as string]: '#f5f5f4',
          ['--mk-bg' as string]: 'transparent',
          ['--mk-seed' as string]: 'rgba(212,175,55,0.5)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-5 md:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-5">
              <BrainMark
                className="h-12 w-auto"
                style={{
                  ['--mk-line' as string]: '#f5f5f4',
                  ['--mk-bg' as string]: '#171717',
                  ['--mk-seed' as string]: '#d4af37',
                }}
              />
              <span className="flex flex-col leading-none">
                <span className="wordmark-fikra text-2xl text-porcelain">Fikra</span>
                <span className="wordmark-digital text-[0.65rem] text-gold mt-1">Digital</span>
              </span>
            </div>
            <p className="text-porcelain/60 text-sm leading-relaxed max-w-sm mb-6">
              {t('footer.tagline')} {t('footer.built')}
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/TheChilledCloud"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-porcelain/20 flex items-center justify-center text-porcelain/70 hover:text-gold hover:border-gold transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon size={16} />
              </a>
              <a
                href="https://linkedin.com/in/ahmad-alfaisal"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-porcelain/20 flex items-center justify-center text-porcelain/70 hover:text-gold hover:border-gold transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={16} />
              </a>
            </div>
          </div>

          {/* Explore */}
          <div className="md:col-span-3">
            <div className="eyebrow !text-porcelain/50 mb-5">{t('footer.explore')}</div>
            <div className="flex flex-col gap-3 text-sm">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className="w-fit text-porcelain/75 hover:text-gold transition-colors relative after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all hover:after:w-full"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <div className="eyebrow !text-porcelain/50 mb-5">{t('nav.contact')}</div>
            <div className="flex flex-col gap-4 text-sm">
              <a
                href="mailto:info@fikradigital.de"
                className="flex items-center gap-3 w-fit text-porcelain/75 hover:text-gold transition-colors"
              >
                <span className="w-9 h-9 rounded-full border border-porcelain/15 flex items-center justify-center text-gold">
                  <Mail size={14} />
                </span>
                info@fikradigital.de
              </a>
              <a
                href="tel:+491776971407"
                className="flex items-center gap-3 w-fit text-porcelain/75 hover:text-gold transition-colors"
                dir="ltr"
              >
                <span className="w-9 h-9 rounded-full border border-porcelain/15 flex items-center justify-center text-gold">
                  <Phone size={14} />
                </span>
                +49 177 6971407
              </a>
              <div className="flex items-center gap-3 text-porcelain/50 text-xs pt-1">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-gold" aria-hidden="true" />
                {t('about.facts.0.value')}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-porcelain/10 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-porcelain/45">
          <span>© {year} Fikra Digital. {t('footer.rights')}</span>
          <div className="flex items-center gap-5">
            <Link to="/impressum" className="hover:text-gold transition-colors">{t('footer.imprint')}</Link>
            <span className="text-porcelain/20" aria-hidden="true">·</span>
            <Link to="/datenschutz" className="hover:text-gold transition-colors">{t('footer.privacy')}</Link>
          </div>
          <span>{t('footer.built')}</span>
        </div>
      </div>
    </footer>
  );
}
