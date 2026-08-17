import { useLanguage } from '../context/LanguageContext';

/** Infinite scrolling marquee band — translated, reverses in RTL. */
export function Marquee() {
  const { t } = useLanguage();
  const items: string[] = t('marquee') ?? [];

  const row = (key: string) => (
    <div key={key} className="flex shrink-0 items-center">
      {items.map((item, i) => (
        <span key={`${key}-${i}`} className="px-8 text-xl md:text-3xl font-display font-bold tracking-tight text-ink/20 uppercase whitespace-nowrap">
          {item}
        </span>
      ))}
    </div>
  );

  if (!items.length) return null;

  return (
    <div className="relative w-full overflow-hidden border-y border-ink/10 bg-canvas py-6 select-none">
      <div className="marquee-track">
        {row('a')}
        {row('b')}
      </div>
    </div>
  );
}
