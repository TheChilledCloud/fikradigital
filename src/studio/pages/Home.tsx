import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Layout, Utensils, Sparkles, Palette, Rocket, MessageCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Hero3D } from '../components/Hero3D';
import { Marquee } from '../components/Marquee';
import { Reveal } from '../components/Reveal';
import { ProjectCard } from '../components/ProjectCard';

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
      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16">
        <div className="absolute inset-0 paper-grid pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-5 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center w-full">
          {/* Text */}
          <div className="text-center lg:text-start">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet/30 bg-violet/5 text-violet text-xs font-bold tracking-widest uppercase mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-violet animate-pulse" />
              {t('hero.eyebrow')}
            </motion.div>

            <h1
              className="font-display font-bold tracking-tight text-5xl sm:text-6xl md:text-7xl mb-6"
              style={{ lineHeight: isRtl ? 1.35 : 1.18 }}
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
                  className="block text-violet"
                >
                  {t('hero.titleB')}
                </motion.span>
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="text-ink/70 max-w-lg mx-auto lg:mx-0 leading-relaxed mb-8"
            >
              {t('hero.sub')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
            >
              <Link to="/work" className="btn-studio px-7 py-3.5 text-sm text-white bg-violet shadow-lg shadow-violet/30 hover:shadow-violet/50 hover:-translate-y-0.5">
                {t('hero.ctaPrimary')} <ArrowRight size={16} className={isRtl ? 'rotate-180' : ''} />
              </Link>
              <Link to="/contact" className="btn-studio px-7 py-3.5 text-sm border-2 border-ink/15 hover:border-violet text-ink hover:text-violet">
                <MessageCircle size={16} /> {t('hero.ctaSecondary')}
              </Link>
            </motion.div>

            {/* floating badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="hidden md:flex items-center justify-center lg:justify-start gap-3 mt-8"
            >
              {[t('hero.badge1'), t('hero.badge2'), t('hero.badge3')].map((b, i) => (
                <span
                  key={b}
                  className="float-y text-xs font-bold px-4 py-2 rounded-full border border-ink/10 bg-white/70 backdrop-blur"
                  style={{ animationDelay: `${i * 0.8}s` }}
                >
                  {b}
                </span>
              ))}
            </motion.div>
          </div>

          {/* 3D Scene */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative h-[320px] sm:h-[420px] lg:h-[540px]"
          >
            <Hero3D />
            <div className="absolute bottom-4 start-1/2 -translate-x-1/2 lg:translate-x-0 lg:start-8 flex items-center gap-2 text-xs font-bold text-ink/50">
              <Palette size={14} className="text-violet" /> {t('hero.badge2')}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="absolute bottom-6 start-1/2 -translate-x-1/2 text-[10px] tracking-[0.35em] text-ink/40 font-bold"
        >
          {t('hero.scroll')} ▾
        </motion.div>
      </section>

      <Marquee />

      {/* ─── SERVICES PREVIEW ─── */}
      <section className="py-20 md:py-28 relative">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <Reveal className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-3">{t('home.servicesTitle')}</h2>
            <p className="text-ink/60 max-w-xl mx-auto">{t('home.servicesSub')}</p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {previewServices.map((s: any, i: number) => (
              <Reveal key={s.title} delay={i * 0.1}>
                <div className="group h-full rounded-2xl border border-ink/10 bg-white p-7 hover:shadow-xl hover:shadow-violet/10 hover:-translate-y-1.5 hover:border-violet/40 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-violet/10 text-violet flex items-center justify-center mb-5 group-hover:bg-violet group-hover:text-white transition-colors duration-300">
                    {serviceIcons[s.icon] ?? <Sparkles size={22} />}
                  </div>
                  <h3 className="font-display text-lg font-bold mb-2">{s.title}</h3>
                  <p className="text-ink/65 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="text-center mt-10">
            <Link to="/services" className="inline-flex items-center gap-2 text-violet font-bold hover:gap-3 transition-all">
              {t('home.viewAll')} <ArrowRight size={16} className={isRtl ? 'rotate-180' : ''} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ─── FEATURED WORK ─── */}
      <section className="py-20 md:py-28 bg-white border-y border-ink/5">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <Reveal className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-3">{t('home.workTitle')}</h2>
            <p className="text-ink/60 max-w-xl mx-auto">{t('home.workSub')}</p>
          </Reveal>

          {project && <ProjectCard project={project} />}

          <Reveal className="text-center mt-12">
            <Link to="/work" className="btn-studio px-7 py-3.5 text-sm text-white bg-violet shadow-lg shadow-violet/30 hover:shadow-violet/50 hover:-translate-y-0.5">
              {t('home.viewAll')} <ArrowRight size={16} className={isRtl ? 'rotate-180' : ''} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ─── PROCESS ─── */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-3">{t('home.processTitle')}</h2>
            <p className="text-ink/60">{t('home.processSub')}</p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((p: any, i: number) => (
              <Reveal key={p.step} delay={i * 0.1}>
                <div className="relative h-full rounded-2xl border border-ink/10 bg-canvas p-7">
                  <span className="font-display text-5xl font-bold text-violet">
                    {p.step}
                  </span>
                  <h3 className="font-display font-bold text-lg mt-3 mb-2">{p.title}</h3>
                  <p className="text-ink/60 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── STATS + CTA ─── */}
      <section className="py-20 md:py-28 bg-white border-t border-ink/5">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((s: any, i: number) => (
              <Reveal key={i} delay={i * 0.08} className="text-center">
                <div className="font-display text-4xl md:text-5xl font-bold text-violet">{s.value}</div>
                <div className="text-ink/55 text-sm mt-2">{s.label}</div>
              </Reveal>
            ))}
          </div>

          <Reveal className="text-center">
            <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-4 max-w-2xl mx-auto">
              {t('home.ctaTitle')}
            </h2>
            <p className="text-ink/60 max-w-xl mx-auto mb-8">{t('home.ctaSub')}</p>
            <Link
              to="/contact"
              className="btn-studio px-8 py-4 text-base text-white bg-violet font-bold shadow-xl shadow-violet/40 hover:shadow-violet/60 hover:-translate-y-0.5"
            >
              {t('home.ctaBtn')} <Rocket size={18} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
