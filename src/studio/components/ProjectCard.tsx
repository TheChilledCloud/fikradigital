import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ExternalLink, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { projectImages } from '../data/projects';
import type { Project } from '../utils/translations';

/**
 * Browser-mockup project card with 3D tilt and scanline sweep.
 * The mockup links straight to the live site — visitors view the real thing.
 */
export function ProjectCard({ project }: { project: Project }) {
  const { t } = useLanguage();

  const cover = (projectImages[project.id] ?? [])[0];

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [9, -9]), { stiffness: 180, damping: 22 });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-11, 11]), { stiffness: 180, damping: 22 });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const reset = () => { mx.set(0); my.set(0); };

  const host = (project.liveUrl || '').replace('https://', '').replace('/', '');

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
      {/* Mockup */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative [perspective:1400px] order-1"
      >
        <div className="absolute -inset-8 bg-violet/10 blur-3xl rounded-full" />
        <motion.div
          onMouseMove={handleMove}
          onMouseLeave={reset}
          style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
          className="relative group"
        >
          <a
            href={project.liveUrl}
            target={project.liveUrl.startsWith('http') ? '_blank' : undefined}
            rel={project.liveUrl.startsWith('http') ? 'noopener noreferrer' : undefined}
            className="block"
            aria-label={`${project.name} — ${t('work.live')}`}
          >
            <div className="browser-chrome transition-shadow duration-300 group-hover:shadow-2xl group-hover:shadow-violet/20">
              <div className="flex items-center gap-2 px-4 py-2.5 bg-white border-b border-ink/5">
                <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                <span className="w-3 h-3 rounded-full bg-[#28C840]" />
                <div className="ms-3 flex-1 max-w-sm mx-auto">
                  <div className="flex items-center justify-center gap-2 bg-ink/5 rounded-md px-3 py-1 text-[11px] text-ink/60 font-semibold">
                    <Globe size={11} className="text-violet" />
                    <span className="truncate" dir="ltr">{host}</span>
                  </div>
                </div>
                <span className="text-[10px] text-violet font-bold hidden sm:block" dir="ltr">✓ HTTPS</span>
              </div>

              <div className="relative overflow-hidden">
                {cover ? (
                  <img
                    src={cover.src}
                    alt={project.name}
                    className="w-full aspect-[16/10] object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full aspect-[16/10] bg-violet/10 flex items-center justify-center text-ink/40 font-display text-2xl font-bold">
                    {project.name}
                  </div>
                )}
                <div className="scanline" />
                <div className="absolute inset-0 bg-ink/0 hover:bg-ink/55 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <span className="flex items-center gap-2 text-sm font-bold text-white border border-white/50 px-5 py-2.5 rounded-full bg-ink/70">
                    <ExternalLink size={14} className="text-violet" /> {t('work.live')}
                  </span>
                </div>
              </div>
            </div>
          </a>

          {project.badge && (
            <div className="absolute -top-3 -end-3 z-10 rotate-3 bg-violet text-white text-[11px] font-bold tracking-[0.2em] px-3 py-1.5 rounded-full shadow-lg shadow-violet/30">
              {project.badge}
            </div>
          )}
        </motion.div>
      </motion.div>

      {/* Details */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        className="order-2"
      >
        <div className="flex items-baseline gap-3 mb-2 flex-wrap">
          {project.nativeName && (
            <span className="text-2xl md:text-3xl text-violet font-bold" style={{ fontFamily: 'var(--font-arabic, Cairo)' }} dir="rtl">
              {project.nativeName}
            </span>
          )}
          <h3 className="font-display text-2xl md:text-4xl font-bold tracking-tight">{project.name}</h3>
        </div>
        <p className="text-violet font-semibold text-sm md:text-base mb-4">{project.tagline}</p>
        <p className="text-ink/70 leading-relaxed mb-6 text-sm md:text-base">{project.description}</p>

        <ul className="space-y-2.5 mb-7">
          {project.features.map((f) => (
            <li key={f} className="flex gap-3 text-ink/75 text-sm">
              <span className="w-5 h-5 rounded-full bg-violet text-white text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">✓</span>
              <span>{f}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 mb-7">
          {project.tags.map((tg) => (
            <span key={tg} className="text-[11px] font-bold tracking-wider text-violet border border-violet/25 bg-violet/5 rounded-full px-3 py-1">
              {tg}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-4">
          <a
            href={project.liveUrl}
            target={project.liveUrl.startsWith('http') ? '_blank' : undefined}
            rel={project.liveUrl.startsWith('http') ? 'noopener noreferrer' : undefined}
            className="btn-studio px-6 py-3.5 text-sm text-white bg-violet shadow-lg shadow-violet/25 hover:shadow-violet/45 hover:-translate-y-0.5"
          >
            <ExternalLink size={16} /> {t('work.live')}
          </a>
        </div>
      </motion.div>
    </div>
  );
}
