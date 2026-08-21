import { useState } from 'react';
import { Mail, Phone, Send } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Reveal } from '../components/Reveal';
import { GithubIcon } from '../components/BrandIcons';
import { FikraButton } from '../components/FikraButton';

const cardIcons: Record<string, React.ReactNode> = {
  mail: <Mail size={22} />,
  phone: <Phone size={22} />,
  github: <GithubIcon size={22} />,
};

export function Contact() {
  const { t } = useLanguage();
  const cards: any[] = t('contact.cards') ?? [];

  const [form, setForm] = useState({ name: '', email: '', project: '', budget: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[Fikra] ${form.project} — ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nProject: ${form.project}\nBudget: ${form.budget}\n\n${form.message}`
    );
    window.location.href = `mailto:info@fikradigital.de?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  const hrefFor = (c: any) => {
    if (c.value.includes('@')) return `mailto:${c.value}`;
    if (c.value.replace(/\s/g, '').startsWith('+')) return `tel:${c.value.replace(/\s/g, '')}`;
    if (c.value.includes('github')) return 'https://github.com/TheChilledCloud';
    return '#';
  };

  return (
    <>
      <section className="relative pt-36 pb-12 overflow-hidden">
        <div className="absolute inset-0 paper-grid pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-5 md:px-8 text-center">
          <Reveal>
            <span className="eyebrow mb-5">{t('nav.contact')}</span>
            <h1 className="display-fikra text-4xl md:text-6xl mb-4">{t('contact.title')}</h1>
            <p className="text-ink/60 max-w-xl mx-auto">{t('contact.sub')}</p>
          </Reveal>
        </div>
      </section>

      <section className="py-10 md:py-16">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          {/* Contact cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-16">
            {cards.map((c: any, i: number) => (
              <Reveal key={c.label} delay={i * 0.08} className="h-full">
                <a
                  href={hrefFor(c)}
                  target={hrefFor(c).startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="card-fikra group h-full flex flex-col p-6"
                >
                  <div className="w-11 h-11 rounded-full border border-ink/12 text-ink flex items-center justify-center mb-4 group-hover:bg-ink group-hover:text-canvas group-hover:border-ink transition-colors duration-300">
                    {cardIcons[i === 0 ? 'mail' : i === 1 ? 'phone' : 'github']}
                  </div>
                  <div className="flex items-center gap-2 text-[10px] font-bold tracking-widest text-taupe uppercase mb-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold" aria-hidden="true" />
                    {c.label}
                  </div>
                  <div className="font-display font-semibold text-sm break-all" dir="ltr">{c.value}</div>
                  <div className="text-ink/50 text-xs mt-2">{c.hint}</div>
                </a>
              </Reveal>
            ))}
          </div>

          {/* Form */}
          <Reveal>
            <div className="max-w-2xl mx-auto rounded-3xl border border-ink/10 bg-white p-8 md:p-12 shadow-[0_24px_50px_-30px_rgba(28,25,23,0.2)]">
              <div className="text-center mb-8">
                <span className="eyebrow mb-3">{t('contact.formTitle')}</span>
                <h2 className="display-fikra text-2xl md:text-3xl">{t('contact.formTitle')}</h2>
              </div>
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder={t('contact.formName')} className="field-fikra" />
                  <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder={t('contact.formEmail')} className="field-fikra" dir="ltr" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input value={form.project} onChange={(e) => setForm({ ...form, project: e.target.value })} placeholder={t('contact.formProject')} className="field-fikra" />
                  <input value={form.budget} onChange={(e) => setForm({ ...form, budget: e.target.value })} placeholder={t('contact.formBudget')} className="field-fikra" />
                </div>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder={t('contact.formMessage')}
                  className="field-fikra resize-none"
                />
                <FikraButton type="submit" variant="primary" className="w-full py-4 text-base" arrow>
                  {sent ? t('contact.response') : (<>{t('contact.formSend')} <Send size={16} className="hidden" /></>)}
                </FikraButton>
                <p className="text-center text-xs text-taupe">{t('contact.formNote')}</p>
              </form>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
