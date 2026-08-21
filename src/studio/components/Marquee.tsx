import { useLanguage } from '../context/LanguageContext';

/** Infinite marquee — alternating solid & outline display type, gold dots. */
export function Marquee() {
  const { t } = useLanguage();
  const items: string[] = t('marquee') ?? [];

  const row = (key: string) => (
    <div key={key} className="flex shrink-0 items-center">
      {items.map((item, i) => (
        <span key={`${key}-${i}`} className="flex items-center">
          <span
            className={`mq-item text-xl md:text-2xl px-7 py-1 ${
              i % 2 === 0 ? 'text-ink/85' : 'mq-outline'
            }`}
          >
            {item}
          </span>
          <span className="mq-sep" aria-hidden="true" />
        </span>
      ))}
    </div>
  );

  if (!items.length) return null;

  return (
    <div className="relative w-full overflow-hidden border-y border-ink/10 bg-paper py-5 select-none" aria-hidden="true">
      <div className="marquee-track">
        {row('a')}
        {row('b')}
      </div>
    </div>
  );
}
