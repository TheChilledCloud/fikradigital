import { Link } from 'react-router-dom';
import { Layout, Utensils, Sparkles, ShoppingCart, Globe, HeartHandshake, Check, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Reveal } from '../components/Reveal';

const icons: Record<string, React.ReactNode> = {
  layout: <Layout size={24} />,
  utensils: <Utensils size={24} />,
  sparkles: <Sparkles size={24} />,
  cart: <ShoppingCart size={24} />,
  globe: <Globe size={24} />,
  heart: <HeartHandshake size={24} />,
};

export function Services() {
  const { t, isRtl } = useLanguage();
  const items: any[] = t('services.items') ?? [];
  const pricing: any[] = t('services.pricing') ?? [];
  const process: any[] = t('services.process') ?? [];

  return (
    <>
      {/* Header */}
      <section className="relative pt-36 pb-14 overflow-hidden">
        <div className="absolute inset-0 paper-grid pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-5 md:px-8 text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet/30 bg-violet/5 text-violet text-xs font-bold tracking-widest uppercase mb-5">
              <span className="w-2 h-2 rounded-full bg-violet animate-pulse" />
              {t('services.title')}
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight mb-4">{t('services.title')}</h1>
            <p className="text-ink/60 max-w-xl mx-auto">{t('services.sub')}</p>
          </Reveal>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((s: any, i: number) => (
              <Reveal key={s.title} delay={(i % 3) * 0.1}>
                <div className="group h-full rounded-2xl border border-ink/10 bg-white p-8 hover:shadow-xl hover:shadow-violet/10 hover:-translate-y-1.5 hover:border-violet/40 transition-all duration-300">
                  <div className="w-14 h-14 rounded-2xl bg-violet/10 text-violet flex items-center justify-center mb-6 group-hover:bg-violet group-hover:text-white group-hover:rotate-6 transition-all duration-300">
                    {icons[s.icon] ?? <Sparkles size={24} />}
                  </div>
                  <h3 className="font-display text-xl font-bold mb-3">{s.title}</h3>
                  <p className="text-ink/65 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 md:py-28 bg-white border-y border-ink/5">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-3">{t('services.pricingTitle')}</h2>
            <p className="text-ink/60 max-w-xl mx-auto">{t('services.pricingSub')}</p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {pricing.map((p: any, i: number) => (
              <Reveal key={p.name} delay={i * 0.1} className="h-full">
                <div
                  className={`relative h-full rounded-3xl p-8 flex flex-col ${
                    p.featured
                      ? 'bg-violet text-white shadow-2xl shadow-violet/30 scale-105 z-10'
                      : 'border border-ink/10 bg-canvas'
                  }`}
                >
                  {p.featured && (
                    <span className="absolute -top-3 start-1/2 -translate-x-1/2 bg-ink text-canvas text-[10px] font-bold tracking-widest px-4 py-1 rounded-full uppercase whitespace-nowrap">
                      {t('services.popular')}
                    </span>
                  )}
                  {p.badge && (
                    <span
                      className={`inline-block text-[11px] font-bold tracking-wide px-3 py-1.5 rounded-full mb-4 ${
                        p.featured ? 'bg-white/20 text-white' : 'bg-violet/10 text-violet border border-violet/25'
                      }`}
                    >
                      {p.badge}
                    </span>
                  )}
                  <h3 className={`font-display text-xl font-bold mb-2 ${p.featured ? 'text-white' : ''}`}>{p.name}</h3>
                  <div className="mb-1">
                    {p.oldPrice && (
                      <span className={`font-display text-xl line-through me-2 align-top ${p.featured ? 'text-white/50' : 'text-ink/35'}`}>
                        {p.oldPrice}
                      </span>
                    )}
                    <span className={`font-display text-4xl font-bold ${p.featured ? 'text-white' : 'text-violet'}`}>{p.price}</span>
                  </div>
                  {p.monthly && (
                    <div className={`text-sm font-semibold mb-2 ${p.featured ? 'text-white/75' : 'text-ink/55'}`}>{p.monthly}</div>
                  )}
                  <p className={`text-sm mb-6 ${p.featured ? 'text-white/85' : 'text-ink/60'}`}>{p.desc}</p>
                  <ul className="space-y-3 mb-8 flex-1">
                    {p.features.map((f: string) => (
                      <li key={f} className={`flex gap-2.5 text-sm ${p.featured ? 'text-white/90' : 'text-ink/75'}`}>
                        <Check size={16} className={`${p.featured ? 'text-violet bg-white rounded-full' : 'text-violet'} shrink-0 mt-0.5`} />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`btn-studio w-full py-3 text-sm font-bold ${
                      p.featured
                        ? 'bg-white text-violet hover:-translate-y-0.5'
                        : 'border-2 border-ink/15 hover:border-violet text-ink hover:text-violet'
                    }`}
                  >
                    {p.cta ?? t('nav.cta')}
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Pricing notes */}
          <Reveal className="mt-12 text-center space-y-2">
            <p className="text-sm text-ink/60">{t('services.pricingNote')}</p>
            <p className="text-xs text-ink/45">{t('services.ustNote')}</p>
          </Reveal>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-3">{t('services.processTitle')}</h2>
            <p className="text-ink/60">{t('services.processSub')}</p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((p: any, i: number) => (
              <Reveal key={p.step} delay={i * 0.1}>
                <div className="h-full rounded-2xl border border-ink/10 bg-white p-7">
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

      {/* Guarantee + CTA — blends with the page */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-5 md:px-8 text-center">
          <Reveal>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4">{t('services.guarantee')}</h2>
            <p className="text-ink/60 max-w-xl mx-auto mb-10">{t('services.guaranteeDesc')}</p>
            <div className="text-lg font-bold mb-3">{t('services.ctaTitle')}</div>
            <Link
              to="/contact"
              className="btn-studio px-8 py-4 text-base text-white bg-violet font-bold shadow-xl shadow-violet/40 hover:shadow-violet/60 hover:-translate-y-0.5"
            >
              {t('services.ctaBtn')} <ArrowRight size={18} className={isRtl ? 'rotate-180' : ''} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
