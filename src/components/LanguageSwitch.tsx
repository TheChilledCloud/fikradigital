import { motion } from 'framer-motion';

interface LangOption {
  value: string;
  label: string;
}

interface LanguageSwitchProps {
  options: LangOption[];
  value: string;
  onChange: (value: string) => void;
  /** unique namespace for the sliding pill's layoutId */
  id: string;
  size?: 'sm' | 'md';
  /** render on a graphite surface */
  onDark?: boolean;
}

/**
 * Segmented language switch — ink pill on cream, porcelain pill on graphite.
 */
export function LanguageSwitch({ options, value, onChange, id, size = 'md', onDark = false }: LanguageSwitchProps) {
  return (
    <div
      className={`relative flex items-center rounded-full p-1 border select-none ${
        onDark ? 'border-porcelain/20 bg-porcelain/5' : 'border-ink/12 bg-white/70'
      } ${size === 'sm' ? 'gap-0.5' : 'gap-1'}`}
      role="tablist"
      aria-label="Language"
    >
      {options.map((o) => {
        const isActive = o.value === value;
        return (
          <button
            key={o.value}
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(o.value)}
            className={`relative px-3 rounded-full font-bold transition-colors ${
              size === 'sm' ? 'py-1 text-[11px]' : 'py-1.5 text-xs'
            } ${
              isActive
                ? onDark
                  ? 'text-graphite'
                  : 'text-canvas'
                : onDark
                  ? 'text-porcelain/55 hover:text-porcelain'
                  : 'text-taupe hover:text-ink'
            }`}
          >
            {isActive && (
              <motion.span
                layoutId={`${id}-lang-pill`}
                className={`absolute inset-0 rounded-full ${onDark ? 'bg-porcelain' : 'bg-ink'}`}
                transition={{ type: 'spring', stiffness: 420, damping: 34 }}
              />
            )}
            <span className="relative z-10">{o.label}</span>
          </button>
        );
      })}
    </div>
  );
}
