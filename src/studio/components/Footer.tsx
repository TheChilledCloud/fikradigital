import { Link } from 'react-router-dom';
import { Mail, Phone } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { GithubIcon, LinkedinIcon } from './BrandIcons';

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-ink text-canvas overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-14 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-8 rounded-lg bg-violet flex items-center justify-center text-white font-display font-bold text-xs">
                FD
              </span>
              <span className="font-display font-bold">fikradigital</span>
            </div>
            <p className="text-canvas/60 text-sm leading-relaxed max-w-xs">
              {t('footer.tagline')} {t('footer.built')}
            </p>
          </div>

          <div className="flex flex-col gap-2 text-sm">
            <span className="text-canvas/40 text-xs uppercase tracking-widest mb-1">Links</span>
            <Link to="/work" className="hover:text-violet transition-colors w-fit">{t('nav.work')}</Link>
            <Link to="/services" className="hover:text-violet transition-colors w-fit">{t('nav.services')}</Link>
            <Link to="/about" className="hover:text-violet transition-colors w-fit">{t('nav.about')}</Link>
            <Link to="/contact" className="hover:text-violet transition-colors w-fit">{t('nav.contact')}</Link>
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-canvas/40 text-xs uppercase tracking-widest mb-1">{t('nav.contact')}</span>
            <a href="mailto:ahmad.alfaisal@proton.me" className="flex items-center gap-2 text-sm hover:text-violet transition-colors w-fit">
              <Mail size={14} className="text-violet" /> ahmad.alfaisal@proton.me
            </a>
            <a href="tel:+491776971407" className="flex items-center gap-2 text-sm hover:text-violet transition-colors w-fit" dir="ltr">
              <Phone size={14} className="text-violet" /> +49 177 6971407
            </a>
            <div className="flex items-center gap-3 mt-2">
              <a href="https://github.com/TheChilledCloud" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border border-canvas/20 hover:border-violet transition-colors" aria-label="GitHub">
                <GithubIcon size={16} />
              </a>
              <a href="https://linkedin.com/in/ahmad-alfaisal" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border border-canvas/20 hover:border-violet transition-colors" aria-label="LinkedIn">
                <LinkedinIcon size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-canvas/10 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-canvas/40">
          <span>© {year} fikradigital. {t('footer.rights')}</span>
          <div className="flex items-center gap-4">
            <Link to="/impressum" className="hover:text-violet transition-colors">{t('footer.imprint')}</Link>
            <Link to="/datenschutz" className="hover:text-violet transition-colors">{t('footer.privacy')}</Link>
          </div>
          <span>{t('footer.built')}</span>
        </div>
      </div>
    </footer>
  );
}
