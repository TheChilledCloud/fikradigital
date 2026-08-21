import { MARK_OUTLINES, MARK_COUNTERS, MARK_SEED } from './markData';

interface BrainMarkProps {
  className?: string;
  style?: React.CSSProperties;
}

/**
 * The official Fikra mark, extracted 1:1 from the final logo files.
 * Colours flow through CSS variables so the same mark works on any surface:
 *   --mk-line  (outline + counter strokes)   default #1c1917
 *   --mk-bg    (counter fills)               default #f5f1e8
 *   --mk-seed  (the seed/idea accent)        default #7d7466
 * Dark surface (graphite): set --mk-line to #f5f5f4, --mk-bg to #171717,
 * --mk-seed to #d4af37 — exactly the official 30_graphite_gold lockup.
 */
export function BrainMark({ className, style }: BrainMarkProps) {
  return (
    <svg
      viewBox="84.45 23.77 64.04 119.77"
      className={className}
      style={style}
      aria-hidden="true"
      focusable="false"
    >
      <g strokeLinejoin="round" strokeMiterlimit={1.3}>
        {MARK_OUTLINES.map((d, i) => (
          <path
            key={`o${i}`}
            d={d}
            fill="var(--mk-line, #1c1917)"
            stroke="var(--mk-line, #1c1917)"
            strokeWidth={0.25}
          />
        ))}
        {MARK_COUNTERS.map((d, i) => (
          <path
            key={`c${i}`}
            d={d}
            fill="var(--mk-bg, #f5f1e8)"
            stroke="var(--mk-line, #1c1917)"
            strokeWidth={0.25}
          />
        ))}
        <path
          d={MARK_SEED[0]}
          fill="var(--mk-seed, #7d7466)"
          stroke="var(--mk-line, #1c1917)"
          strokeWidth={0.25}
        />
      </g>
    </svg>
  );
}
