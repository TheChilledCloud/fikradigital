import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowLeft } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { LanguageSwitch } from '../../components/LanguageSwitch';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { lang, setLanguage, t } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname, lang]);

  const links = [
    { to: '/', label: t('nav.home'), end: true },
    { to: '/work', label: t('nav.work'), end: false },
    { to: '/services', label: t('nav.services'), end: false },
    { to: '/about', label: t('nav.about'), end: false },
    { to: '/contact', label: t('nav.contact'), end: false },
  ];

  const linkCls = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-semibold transition-colors hover:text-violet ${
      isActive ? 'text-violet' : 'text-ink/70'
    }`;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-canvas/85 backdrop-blur-xl shadow-[0_4px_30px_rgba(22,18,15,0.06)]' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 h-16 md:h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Link to="/" className="flex items-center gap-2 group">
            <span className="w-9 h-9 rounded-xl bg-violet flex items-center justify-center text-white font-display font-bold text-sm shadow-lg shadow-violet/30 group-hover:rotate-6 transition-transform">
              FD
            </span>
            <span className="font-display font-bold text-lg tracking-tight">
              fikra<span className="text-violet">digital</span>
            </span>
          </Link>
          <a
            href="https://ahmad-alfaisal.me"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1.5 ms-2 px-3 py-1.5 rounded-full border border-ink/10 text-xs font-bold text-ink/60 hover:text-violet hover:border-violet/40 transition-colors"
          >
            <ArrowLeft size={12} className="rtl:rotate-180" />
            {t('nav.backMain')}
          </a>
        </div>

        {/* Desktop links */}
        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} className={linkCls} end={l.end}>
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <LanguageSwitch
            options={[
              { value: 'en', label: 'EN' },
              { value: 'de', label: 'DE' },
              { value: 'ar', label: 'AR' },
            ]}
            value={lang}
            onChange={(v) => setLanguage(v as 'en' | 'de' | 'ar')}
            variant="light"
            id="studio-nav"
            size="sm"
          />
          <Link
            to="/contact"
            className="btn-studio px-5 py-2.5 text-sm text-white bg-violet shadow-lg shadow-violet/30 hover:shadow-violet/50 hover:-translate-y-0.5"
          >
            {t('nav.cta')}
          </Link>
        </div>

        {/* Mobile burger */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 rounded-lg border border-ink/10"
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="lg:hidden overflow-hidden bg-canvas/95 backdrop-blur-xl border-t border-ink/5"
          >
            <div className="px-6 py-5 flex flex-col gap-1">
              {links.map((l, i) => (
                <motion.div
                  key={l.to}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <NavLink
                    to={l.to}
                    className={({ isActive }) =>
                      `block py-3 text-base font-bold ${isActive ? 'text-violet' : 'text-ink/80'}`
                    }
                    end={l.end}
                  >
                    {l.label}
                  </NavLink>
                </motion.div>
              ))}
              <a
                href="https://ahmad-alfaisal.me"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 py-3 text-sm font-bold text-ink/60"
              >
                <ArrowLeft size={14} className="rtl:rotate-180" /> {t('nav.backMain')}
              </a>
              <div className="flex items-center gap-3 pt-4 mt-2 border-t border-ink/10">
                <LanguageSwitch
                  options={[
                    { value: 'en', label: 'EN' },
                    { value: 'de', label: 'DE' },
                    { value: 'ar', label: 'AR' },
                  ]}
                  value={lang}
                  onChange={(v) => setLanguage(v as 'en' | 'de' | 'ar')}
                  variant="light"
                  id="studio-mobile"
                  size="sm"
                />
                <Link
                  to="/contact"
                  className="btn-studio px-5 py-2.5 text-sm text-white bg-violet flex-1 justify-center"
                >
                  {t('nav.cta')}
                </Link>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
