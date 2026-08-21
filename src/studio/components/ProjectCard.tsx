import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ExternalLink, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { projectImages } from '../data/projects';
import type { Project } from '../utils/translations';
import { FikraButton } from './FikraButton';

/**
 * Browser-mockup project card with 3D tilt.
 * The mockup links straight to the live site — visitors view the real thing.
 */
export function ProjectCard({ project }: { project: Project }) {
  const { t } = useLanguage();

  const cover = (projectImages[project.id] ?? [])[0];

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), { stiffness: 180, damping: 22 });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-10, 10]), { stiffness: 180, damping: 22 });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const reset = () => { mx.set(0); my.set(0); };

  const host = (project.liveUrl || '').replace('https://', '').replace('/', '');
  const external = project.liveUrl.startsWith('http');

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
        <motion.div
          onMouseMove={handleMove}
          onMouseLeave={reset}
          style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
          className="relative group"
        >
          <a
            href={project.liveUrl}
            target={external ? '_blank' : undefined}
            rel={external ? 'noopener noreferrer' : undefined}
            className="block"
            aria-label={`${project.name} — ${t('work.live')}`}
          >
            <div className="browser-chrome transition-shadow duration-300 group-hover:shadow-[0_40px_80px_-28px_rgba(28,25,23,0.4)]">
              <div className="flex items-center gap-2 px-4 py-2.5 bg-white border-b border-ink/5">
                <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                <span className="w-3 h-3 rounded-full bg-[#28C840]" />
                <div className="ms-3 flex-1 max-w-sm mx-auto">
                  <div className="flex items-center justify-center gap-2 bg-ink/5 rounded-md px-3 py-1 text-[11px] text-taupe font-semibold">
                    <Globe size={11} className="text-gold" />
                    <span className="truncate" dir="ltr">{host}</span>
                  </div>
                </div>
                <span className="text-[10px] text-taupe font-bold hidden sm:block" dir="ltr">✓ HTTPS</span>
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
                  <div className="w-full aspect-[16/10] bg-paper flex items-center justify-center text-taupe font-display text-2xl font-semibold">
                    {project.name}
                  </div>
                )}
                <div className="absolute inset-0 bg-graphite/0 group-hover:bg-graphite/70 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <span className="flex items-center gap-2 text-sm font-bold text-graphite bg-gold px-5 py-2.5 rounded-full">
                    <ExternalLink size={14} /> {t('work.live')}
                  </span>
                </div>
              </div>
            </div>
          </a>

          {project.badge && (
            <div className="absolute -top-3 -end-3 z-10 rotate-3 bg-ink text-gold text-[11px] font-bold tracking-[0.2em] px-3.5 py-1.5 rounded-full shadow-lg">
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
            <span className="text-2xl md:text-3xl text-gold font-bold" style={{ fontFamily: 'var(--font-arabic, Cairo)' }} dir="rtl">
              {project.nativeName}
            </span>
          )}
          <h3 className="display-fikra text-2xl md:text-4xl">{project.name}</h3>
        </div>
        <p className="text-taupe font-semibold text-sm md:text-base mb-4">{project.tagline}</p>
        <p className="text-ink/70 leading-relaxed mb-6 text-sm md:text-base">{project.description}</p>

        <ul className="space-y-2.5 mb-6">
          {project.features.map((f) => (
            <li key={f} className="flex gap-3 text-ink/75 text-sm">
              <span className="w-5 h-5 rounded-full border border-gold/60 text-gold text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                ✓
              </span>
              <span>{f}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tg) => (
            <span key={tg} className="text-[11px] font-bold tracking-wider text-taupe border border-ink/15 bg-white/60 rounded-full px-3 py-1">
              {tg}
            </span>
          ))}
        </div>

        <FikraButton
          href={project.liveUrl}
          variant="primary"
          className="px-6 py-3 text-sm"
          arrow
        >
          {t('work.live')}
        </FikraButton>
      </motion.div>
    </div>
  );
}
