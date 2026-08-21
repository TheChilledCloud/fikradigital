import { Layout, Utensils, Sparkles, ShoppingCart, Globe, HeartHandshake, Check } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Reveal } from '../components/Reveal';
import { FikraButton } from '../components/FikraButton';

const icons: Record<string, React.ReactNode> = {
  layout: <Layout size={24} />,
  utensils: <Utensils size={24} />,
  sparkles: <Sparkles size={24} />,
  cart: <ShoppingCart size={24} />,
  globe: <Globe size={24} />,
  heart: <HeartHandshake size={24} />,
};

export function Services() {
  const { t } = useLanguage();
  const items: any[] = t('services.items') ?? [];
  const pricing: any[] = t('services.pricing') ?? [];
  const process: any[] = t('services.process') ?? [];

  return (
    <>
      {/* Header */}
      <section className="relative pt-36 pb-12 overflow-hidden">
        <div className="absolute inset-0 paper-grid pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-5 md:px-8 text-center">
          <Reveal>
            <span className="eyebrow mb-5">{t('services.title')}</span>
            <h1 className="display-fikra text-4xl md:text-6xl mb-4">{t('services.title')}</h1>
            <p className="text-ink/60 max-w-xl mx-auto">{t('services.sub')}</p>
          </Reveal>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((s: any, i: number) => (
              <Reveal key={s.title} delay={(i % 3) * 0.1} className="h-full">
                <div className="card-fikra group h-full p-8">
                  <div className="w-14 h-14 rounded-full border border-ink/12 text-ink flex items-center justify-center mb-6 group-hover:bg-ink group-hover:text-canvas group-hover:border-ink transition-colors duration-300">
                    {icons[s.icon] ?? <Sparkles size={24} />}
                  </div>
                  <h3 className="display-fikra text-xl mb-3">
                    <span className="card-title-underline">{s.title}</span>
                  </h3>
                  <p className="text-ink/65 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing — the featured plan wears the graphite/gold identity */}
      <section className="py-20 md:py-28 bg-white border-y border-ink/5">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal className="text-center mb-14">
            <span className="eyebrow mb-4">{t('services.pricingTitle')}</span>
            <h2 className="display-fikra text-3xl md:text-5xl mb-3">{t('services.pricingTitle')}</h2>
            <p className="text-ink/60 max-w-xl mx-auto">{t('services.pricingSub')}</p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {pricing.map((p: any, i: number) => (
              <Reveal key={p.name} delay={i * 0.1} className="h-full">
                <div
                  className={`relative h-full rounded-3xl p-8 flex flex-col overflow-hidden ${
                    p.featured
                      ? 'bg-graphite text-porcelain shadow-2xl shadow-graphite/30 scale-[1.02] z-10'
                      : 'card-fikra hover:translate-y-0'
                  }`}
                >
                  {/* gold corner glow on the featured card */}
                  {p.featured && (
                    <div
                      className="absolute -top-16 -end-16 w-40 h-40 rounded-full bg-gold/15 blur-2xl pointer-events-none"
                      aria-hidden="true"
                    />
                  )}
                  {p.featured && (
                    <span className="absolute top-5 end-5 bg-gold text-graphite text-[10px] font-bold tracking-widest px-3.5 py-1 rounded-full uppercase">
                      {t('services.popular')}
                    </span>
                  )}
                  {p.badge && (
                    <span
                      className={`inline-block text-[11px] font-bold tracking-wide px-3 py-1.5 rounded-full mb-4 w-fit ${
                        p.featured ? 'bg-gold/15 text-gold border border-gold/30' : 'bg-gold/10 text-gold-deep border border-gold/30'
                      }`}
                    >
                      {p.badge}
                    </span>
                  )}
                  <h3 className={`display-fikra text-xl mb-2 ${p.featured ? 'text-porcelain' : ''}`}>{p.name}</h3>
                  <div className="mb-1">
                    {p.oldPrice && (
                      <span className={`font-display text-xl line-through me-2 align-top ${p.featured ? 'text-porcelain/40' : 'text-ink/30'}`}>
                        {p.oldPrice}
                      </span>
                    )}
                    <span className={`display-fikra text-4xl ${p.featured ? 'text-gold' : 'text-ink'}`}>{p.price}</span>
                  </div>
                  {p.monthly && (
                    <div className={`text-sm font-semibold mb-2 ${p.featured ? 'text-porcelain/70' : 'text-taupe'}`}>{p.monthly}</div>
                  )}
                  <p className={`text-sm mb-6 ${p.featured ? 'text-porcelain/80' : 'text-ink/60'}`}>{p.desc}</p>
                  <ul className="space-y-3 mb-8 flex-1">
                    {p.features.map((f: string) => (
                      <li key={f} className={`flex gap-2.5 text-sm ${p.featured ? 'text-porcelain/90' : 'text-ink/75'}`}>
                        <Check size={16} className="text-gold shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <FikraButton
                    to="/contact"
                    variant={p.featured ? 'dark' : 'ghost'}
                    className="w-full py-3 text-sm"
                    arrow
                  >
                    {p.cta ?? t('nav.cta')}
                  </FikraButton>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Pricing notes */}
          <Reveal className="mt-12 text-center space-y-2">
            <p className="text-sm text-ink/60">{t('services.pricingNote')}</p>
            <p className="text-xs text-taupe">{t('services.ustNote')}</p>
          </Reveal>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 md:py-28 bg-paper">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal className="text-center mb-14">
            <span className="eyebrow mb-4">{t('services.processTitle')}</span>
            <h2 className="display-fikra text-3xl md:text-5xl mb-3">{t('services.processTitle')}</h2>
            <p className="text-ink/60">{t('services.processSub')}</p>
          </Reveal>

          <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="thought-line hidden lg:block" aria-hidden="true" />
            {process.map((p: any, i: number) => (
              <Reveal key={p.step} delay={i * 0.1}>
                <div className="group relative flex flex-col items-center text-center">
                  <div className="relative z-10 w-16 h-16 rounded-full border border-ink/15 bg-canvas flex items-center justify-center mb-5 group-hover:border-gold group-hover:-translate-y-1 transition-all duration-300">
                    <span className="font-display font-semibold text-lg text-taupe group-hover:text-gold transition-colors duration-300">
                      {p.step}
                    </span>
                  </div>
                  <h3 className="display-fikra text-lg mb-2">{p.title}</h3>
                  <p className="text-ink/60 text-sm leading-relaxed max-w-[16rem]">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee + CTA */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-5 md:px-8 text-center">
          <Reveal>
            <span className="eyebrow mb-4">{t('services.guarantee')}</span>
            <h2 className="display-fikra text-3xl md:text-4xl mb-4">{t('services.guarantee')}</h2>
            <p className="text-ink/60 max-w-xl mx-auto mb-10">{t('services.guaranteeDesc')}</p>
            <div className="display-fikra text-xl mb-4">{t('services.ctaTitle')}</div>
            <FikraButton to="/contact" variant="primary" className="px-8 py-4 text-base" arrow>
              {t('services.ctaBtn')}
            </FikraButton>
          </Reveal>
        </div>
      </section>
    </>
  );
}
