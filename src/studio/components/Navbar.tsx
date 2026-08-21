import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { LanguageSwitch } from '../../components/LanguageSwitch';
import { BrainMark } from './BrainMark';
import { FikraButton } from './FikraButton';

const EASE = [0.22, 1, 0.36, 1] as const;

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

  // lock body scroll while the menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const links = [
    { to: '/', label: t('nav.home'), end: true },
    { to: '/work', label: t('nav.work'), end: false },
    { to: '/services', label: t('nav.services'), end: false },
    { to: '/about', label: t('nav.about'), end: false },
    { to: '/contact', label: t('nav.contact'), end: false },
  ];

  const linkCls = ({ isActive }: { isActive: boolean }) =>
    `nav-link ${isActive ? 'is-active' : ''}`;

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-canvas/90 backdrop-blur-xl border-b border-ink/5 shadow-[0_6px_30px_-12px_rgba(28,25,23,0.12)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-8 h-16 md:h-20 flex items-center justify-between gap-4">
          {/* ── Logo lockup: official mark + Fikra / DIGITAL ── */}
          <div className="flex items-center gap-3 min-w-0">
            <Link to="/" className="group flex items-center gap-2.5 shrink-0" aria-label="Fikra Digital — Home">
              <BrainMark
                className="h-9 w-auto transition-transform duration-500 group-hover:-rotate-6"
                style={{ ['--mk-seed' as string]: 'var(--color-gold)' }}
              />
              <span className="flex flex-col leading-none">
                <span className="wordmark-fikra text-[1.35rem]">Fikra</span>
                <span className="wordmark-digital text-[0.6rem] text-taupe mt-0.5">Digital</span>
              </span>
            </Link>

            <a
              href="https://ahmad-alfaisal.me"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden xl:flex items-center gap-1.5 ms-3 px-3 py-1.5 rounded-full border border-ink/10 text-[11px] font-semibold text-taupe hover:text-ink hover:border-gold/50 transition-colors"
            >
              <ArrowLeft size={11} className="rtl:rotate-180" />
              {t('nav.backMain')}
            </a>
          </div>

          {/* ── Desktop links ── */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main">
            {links.map((l) => (
              <NavLink key={l.to} to={l.to} className={linkCls} end={l.end}>
                {l.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <LanguageSwitch
              options={[
                { value: 'en', label: 'EN' },
                { value: 'de', label: 'DE' },
                { value: 'ar', label: 'AR' },
              ]}
              value={lang}
              onChange={(v) => setLanguage(v as 'en' | 'de' | 'ar')}
              id="studio-nav"
              size="sm"
            />
            <FikraButton to="/contact" variant="primary" className="px-5 py-2.5 text-sm" arrow>
              {t('nav.cta')}
            </FikraButton>
          </div>

          {/* ── Mobile burger (two strokes morph into an X) ── */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden relative w-11 h-11 rounded-full border border-ink/12 flex items-center justify-center"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            <span
              className={`absolute w-5 h-[2px] bg-ink rounded-full transition-all duration-300 ${
                open ? 'rotate-45' : '-translate-y-[4px]'
              }`}
            />
            <span
              className={`absolute w-5 h-[2px] bg-ink rounded-full transition-all duration-300 ${
                open ? '-rotate-45' : 'translate-y-[4px]'
              }`}
            />
          </button>
        </div>
      </header>

      {/* ── Full-screen graphite menu ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="fixed inset-0 z-40 bg-graphite text-porcelain lg:hidden overflow-y-auto"
          >
            {/* watermark mark */}
            <BrainMark
              className="absolute -end-10 -bottom-12 h-[60vh] w-auto opacity-[0.05] pointer-events-none"
              style={{ ['--mk-line' as string]: '#f5f5f4', ['--mk-bg' as string]: 'transparent', ['--mk-seed' as string]: 'transparent' }}
            />

            <div className="relative max-w-2xl mx-auto px-6 pt-24 pb-10 min-h-full flex flex-col">
              <nav className="flex flex-col" aria-label="Main">
                {links.map((l, i) => (
                  <motion.div
                    key={l.to}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.08 + i * 0.06, duration: 0.5, ease: EASE }}
                    className="border-b border-porcelain/10"
                  >
                    <NavLink
                      to={l.to}
                      end={l.end}
                      className={({ isActive }) =>
                        `group flex items-center gap-4 py-4 ${isActive ? 'text-gold' : ''}`
                      }
                    >
                      <span className="text-xs font-bold text-gold/80 tracking-[0.25em]">
                        0{i + 1}
                      </span>
                      <span className="display-fikra text-3xl sm:text-4xl transition-transform duration-300 group-hover:translate-x-2 rtl:group-hover:-translate-x-2">
                        {l.label}
                      </span>
                      <ArrowUpRight
                        size={20}
                        className="ms-auto text-porcelain/0 group-hover:text-gold transition-all duration-300 rtl:-scale-x-100"
                      />
                    </NavLink>
                  </motion.div>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.5, ease: EASE }}
                className="mt-auto pt-10 flex flex-col gap-5"
              >
                <div className="flex items-center justify-between gap-4">
                  <LanguageSwitch
                    options={[
                      { value: 'en', label: 'EN' },
                      { value: 'de', label: 'DE' },
                      { value: 'ar', label: 'AR' },
                    ]}
                    value={lang}
                    onChange={(v) => setLanguage(v as 'en' | 'de' | 'ar')}
                    id="studio-mobile"
                    size="sm"
                    onDark
                  />
                  <a
                    href="https://ahmad-alfaisal.me"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-porcelain/60 hover:text-gold transition-colors"
                  >
                    <ArrowLeft size={12} className="rtl:rotate-180" />
                    {t('nav.backMain')}
                  </a>
                </div>
                <FikraButton to="/contact" variant="dark" className="w-full py-4 text-base" arrow onClick={() => setOpen(false)}>
                  {t('nav.cta')}
                </FikraButton>
                <p className="text-center text-[11px] tracking-[0.3em] uppercase text-porcelain/40">
                  {t('nav.menuTagline')}
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
