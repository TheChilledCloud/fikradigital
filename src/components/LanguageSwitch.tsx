import { motion } from 'framer-motion';

interface LangOption {
  value: string;
  label: string;
}

interface LanguageSwitchProps {
  options: LangOption[];
  value: string;
  onChange: (value: string) => void;
  /** light = studio (violet), dark = HUD (amethyst) */
  variant?: 'light' | 'dark';
  /** unique namespace for the sliding pill's layoutId */
  id: string;
  size?: 'sm' | 'md';
}

/**
 * Segmented language switch with a sliding pill indicator.
 */
export function LanguageSwitch({ options, value, onChange, variant = 'light', id, size = 'md' }: LanguageSwitchProps) {
  return (
    <div
      className={`relative flex items-center rounded-full p-1 border select-none ${
        variant === 'light'
          ? 'border-ink/10 bg-white/80'
          : 'border-[var(--border-panel)] bg-[var(--bg-panel)] backdrop-blur-md'
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
                ? variant === 'light'
                  ? 'text-white'
                  : 'text-[var(--color-nebula-dynamic)]'
                : variant === 'light'
                  ? 'text-ink/55 hover:text-ink'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
            }`}
          >
            {isActive && (
              <motion.span
                layoutId={`${id}-lang-pill`}
                className={`absolute inset-0 rounded-full ${
                  variant === 'light'
                    ? 'bg-violet shadow-sm shadow-violet/30'
                    : 'bg-amethyst'
                }`}
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
