import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Layout, Utensils, Sparkles, Palette } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { BrainDraw } from '../components/BrainDraw';
import { Marquee } from '../components/Marquee';
import { Reveal } from '../components/Reveal';
import { ProjectCard } from '../components/ProjectCard';
import { FikraButton } from '../components/FikraButton';

const serviceIcons: Record<string, React.ReactNode> = {
  layout: <Layout size={22} />,
  utensils: <Utensils size={22} />,
  sparkles: <Sparkles size={22} />,
};

export function Home() {
  const { t, isRtl } = useLanguage();

  const services: any[] = t('services.items') ?? [];
  const previewServices = services.slice(0, 3);
  const process: any[] = t('home.process') ?? [];
  const stats: any[] = t('home.stats') ?? [];
  const project = (t('work.projects') ?? [])[0];

  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-16">
        <div className="absolute inset-0 paper-grid pointer-events-none" aria-hidden="true" />

        <div className="relative max-w-7xl mx-auto px-5 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          {/* Text */}
          <div className="text-center lg:text-start">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="eyebrow mb-6"
            >
              {t('hero.eyebrow')}
            </motion.div>

            <h1
              className="display-fikra text-5xl sm:text-6xl md:text-7xl"
              style={{ lineHeight: isRtl ? 1.35 : 1.12 }}
            >
              <span className={`block overflow-hidden ${isRtl ? 'pb-2' : 'pb-1'}`}>
                <motion.span
                  initial={{ y: '110%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  className="block"
                >
                  {t('hero.titleA')}
                </motion.span>
              </span>
              <span className={`block overflow-hidden ${isRtl ? 'pb-3' : 'pb-2'}`}>
                <motion.span
                  initial={{ y: '110%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.7, delay: 0.38, ease: [0.22, 1, 0.36, 1] }}
                  className="block relative inline-block"
                >
                  {t('hero.titleB')}
                  {/* hand-drawn gold underline */}
                  <svg
                    viewBox="0 0 220 12"
                    className="absolute -bottom-1 left-0 w-full h-[0.35em] rtl:-scale-x-100"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <motion.path
                      d="M4 8 C 60 2, 150 10, 216 5"
                      className="gold-underline"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      transition={{ duration: 0.9, delay: 1.1, ease: 'easeInOut' }}
                    />
                  </svg>
                </motion.span>
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="text-ink/70 max-w-lg mx-auto lg:mx-0 leading-relaxed mb-9"
            >
              {t('hero.sub')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
            >
              <FikraButton to="/work" variant="primary" className="px-7 py-3.5 text-sm" arrow>
                {t('hero.ctaPrimary')}
              </FikraButton>
              <FikraButton to="/contact" variant="ghost" className="px-7 py-3.5 text-sm">
                {t('hero.ctaSecondary')}
              </FikraButton>
            </motion.div>

            {/* floating badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.05, duration: 0.8 }}
              className="hidden md:flex items-center justify-center lg:justify-start gap-3 mt-9"
            >
              {[t('hero.badge1'), t('hero.badge2'), t('hero.badge3')].map((b, i) => (
                <span
                  key={b}
                  className="float-y text-xs font-semibold px-4 py-2 rounded-full border border-ink/12 bg-white/70 text-ink/75"
                  style={{ animationDelay: `${i * 0.8}s` }}
                >
                  {b}
                </span>
              ))}
            </motion.div>
          </div>

          {/* The idea, being sketched */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="relative mx-auto w-full max-w-md aspect-[3/4]"
          >
            {/* orbit ring */}
            <div
              className="absolute inset-[6%] rounded-full border border-dashed border-ink/15 spin-slow"
              aria-hidden="true"
            >
              <span className="absolute -top-1 left-1/2 w-2.5 h-2.5 rounded-full bg-gold -translate-x-1/2" />
              <span className="absolute bottom-[14%] left-[6%] w-2 h-2 rounded-full bg-ink/40" />
              <span className="absolute bottom-[26%] right-[2%] w-1.5 h-1.5 rounded-full bg-taupe/70" />
            </div>

            <motion.div
              className="absolute inset-0 flex items-center justify-center float-y"
              animate={{ rotate: [0, 1.2, 0, -1.2, 0] }}
              transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
            >
              <BrainDraw className="h-[92%] w-auto" />
            </motion.div>

            <div className="absolute bottom-2 start-1/2 -translate-x-1/2 lg:translate-x-0 lg:start-0 flex items-center gap-2 text-xs font-semibold text-taupe">
              <Palette size={14} className="text-gold" /> {t('hero.badge2')}
            </div>
          </motion.div>
        </div>

        {/* scroll cue — a line that draws itself */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="absolute bottom-5 start-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          aria-hidden="true"
        >
          <span className="text-[10px] tracking-[0.35em] text-taupe font-bold">
            {t('hero.scroll')}
          </span>
          <span className="relative block w-px h-9 overflow-hidden">
            <motion.span
              className="absolute left-0 top-0 w-full h-full bg-gold"
              animate={{ y: ['-100%', '100%'] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            />
          </span>
        </motion.div>
      </section>

      <Marquee />

      {/* ═══ SERVICES PREVIEW ═══ */}
      <section className="py-20 md:py-28 relative">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <Reveal className="text-center mb-14">
            <span className="eyebrow mb-4">{t('services.title')}</span>
            <h2 className="display-fikra text-3xl md:text-5xl mb-3">{t('home.servicesTitle')}</h2>
            <p className="text-ink/60 max-w-xl mx-auto">{t('home.servicesSub')}</p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {previewServices.map((s: any, i: number) => (
              <Reveal key={s.title} delay={i * 0.1} className="h-full">
                <div className="card-fikra group h-full p-7 flex flex-col">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 rounded-full border border-ink/12 text-ink flex items-center justify-center group-hover:bg-ink group-hover:text-canvas group-hover:border-ink transition-colors duration-300">
                      {serviceIcons[s.icon] ?? <Sparkles size={22} />}
                    </div>
                    <span className="font-display font-semibold text-sm text-taupe/70 group-hover:text-gold transition-colors duration-300">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="display-fikra text-xl mb-3">
                    <span className="card-title-underline">{s.title}</span>
                  </h3>
                  <p className="text-ink/65 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="text-center mt-11">
            <Link to="/services" className="inline-flex items-center gap-2 font-semibold text-ink hover:text-gold-deep transition-colors group">
              <span className="relative after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-gold after:origin-left after:scale-x-0 after:transition-transform group-hover:after:scale-x-100 rtl:after:origin-right">
                {t('home.viewAll')}
              </span>
              <span className="text-gold transition-transform duration-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1">→</span>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ═══ FEATURED WORK ═══ */}
      <section className="py-20 md:py-28 bg-white border-y border-ink/5">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <Reveal className="text-center mb-14">
            <span className="eyebrow mb-4">{t('work.title')}</span>
            <h2 className="display-fikra text-3xl md:text-5xl mb-3">{t('home.workTitle')}</h2>
            <p className="text-ink/60 max-w-xl mx-auto">{t('home.workSub')}</p>
          </Reveal>

          {project && <ProjectCard project={project} />}

          <Reveal className="text-center mt-12">
            <FikraButton to="/work" variant="primary" className="px-7 py-3.5 text-sm" arrow>
              {t('home.viewAll')}
            </FikraButton>
          </Reveal>
        </div>
      </section>

      {/* ═══ PROCESS ═══ */}
      <section className="py-20 md:py-28 bg-paper">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal className="text-center mb-14">
            <span className="eyebrow mb-4">{t('home.processTitle')}</span>
            <h2 className="display-fikra text-3xl md:text-5xl mb-3">{t('home.processTitle')}</h2>
            <p className="text-ink/60">{t('home.processSub')}</p>
          </Reveal>

          <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* dotted thought line connecting the steps */}
            <div className="thought-line hidden lg:block" aria-hidden="true" />
            {process.map((p: any, i: number) => (
              <Reveal key={p.step} delay={i * 0.1}>
                <div className="group relative flex flex-col items-center text-center">
                  <div className="relative z-10 w-16 h-16 rounded-full border border-ink/15 bg-canvas flex items-center justify-center mb-5 group-hover:border-gold group-hover:-translate-y-1 transition-all duration-300">
                    <span className="font-display font-semibold text-lg text-taupe group-hover:text-gold transition-colors duration-300">
                      {p.step}
                    </span>
                  </div>
                  <h3 className="display-fikra text-lg mb-2">{p.title}</h3>
                  <p className="text-ink/60 text-sm leading-relaxed max-w-[16rem]">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ STATS + CTA ═══ */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
            {stats.map((s: any, i: number) => (
              <Reveal key={i} delay={i * 0.08} className="text-center">
                <div className="display-fikra text-4xl md:text-5xl group-hover:text-gold-deep transition-colors duration-300">
                  {s.value}
                </div>
                <div className="mt-3 inline-flex items-center gap-2 text-sm text-taupe">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold" aria-hidden="true" />
                  {s.label}
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="text-center">
            <span className="eyebrow mb-4">{t('nav.contact')}</span>
            <h2 className="display-fikra text-3xl md:text-5xl mb-4 max-w-2xl mx-auto">
              {t('home.ctaTitle')}
            </h2>
            <p className="text-ink/60 max-w-xl mx-auto mb-9">{t('home.ctaSub')}</p>
            <FikraButton to="/contact" variant="primary" className="px-8 py-4 text-base" arrow>
              {t('home.ctaBtn')}
            </FikraButton>
          </Reveal>
        </div>
      </section>
    </>
  );
}
