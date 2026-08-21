import { motion } from 'framer-motion';
import { MARK_OUTLINES, MARK_COUNTERS, MARK_SEED } from './markData';

const VIEW = '84.45 23.77 64.04 119.77';
const DRAW_DURATION = 2.1;

interface BrainDrawProps {
  className?: string;
  style?: React.CSSProperties;
  /** ink on light, porcelain on dark */
  tone?: 'ink' | 'light';
}

/**
 * The idea being sketched: the brain's continuous line draws itself in,
 * the folds follow, and the gold seed drops into place at the end.
 */
export function BrainDraw({ className, style, tone = 'ink' }: BrainDrawProps) {
  const line = tone === 'ink' ? '#1C1917' : '#F5F5F4';
  const seed = tone === 'ink' ? '#D4AF37' : '#D4AF37';

  return (
    <svg viewBox={VIEW} className={className} style={style} aria-hidden="true" focusable="false">
      <g strokeLinejoin="round">
        {MARK_OUTLINES.map((d, i) => (
          <motion.path
            key={`o${i}`}
            d={d}
            fill="none"
            stroke={line}
            strokeWidth={0.5}
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 1 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: DRAW_DURATION, delay: 0.15 + i * 0.12, ease: 'easeInOut' }}
          />
        ))}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: DRAW_DURATION + 0.25 }}
        >
          {MARK_COUNTERS.map((d, i) => (
            <path
              key={`c${i}`}
              d={d}
              fill="none"
              stroke={line}
              strokeWidth={0.32}
              strokeLinecap="round"
            />
          ))}
          <motion.path
            d={MARK_SEED[0]}
            fill={seed}
            stroke="none"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            style={{ originX: 0.5, originY: 0.5 }}
            transition={{ type: 'spring', stiffness: 240, damping: 17, delay: DRAW_DURATION + 0.45 }}
          />
        </motion.g>
      </g>
    </svg>
  );
}
