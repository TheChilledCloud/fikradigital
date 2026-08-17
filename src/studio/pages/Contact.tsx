import { useState } from 'react';
import { Mail, Phone, Send } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Reveal } from '../components/Reveal';
import { GithubIcon } from '../components/BrandIcons';

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
    const subject = encodeURIComponent(`[Studio] ${form.project} — ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nProject: ${form.project}\nBudget: ${form.budget}\n\n${form.message}`
    );
    window.location.href = `mailto:ahmad.alfaisal@proton.me?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  const field = 'w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-sm outline-none focus:border-violet focus:ring-2 focus:ring-violet/20 transition-all';

  const hrefFor = (c: any) => {
    if (c.value.includes('@')) return `mailto:${c.value}`;
    if (c.value.replace(/\s/g, '').startsWith('+')) return `tel:${c.value.replace(/\s/g, '')}`;
    if (c.value.includes('github')) return 'https://github.com/TheChilledCloud';
    return '#';
  };

  return (
    <>
      <section className="relative pt-36 pb-14 overflow-hidden">
        <div className="absolute inset-0 paper-grid pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-5 md:px-8 text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet/30 bg-violet/5 text-violet text-xs font-bold tracking-widest uppercase mb-5">
              <span className="w-2 h-2 rounded-full bg-violet animate-pulse" />
              {t('contact.title')}
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight mb-4">{t('contact.title')}</h1>
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
                  className="group h-full flex flex-col rounded-2xl border border-ink/10 bg-white p-6 hover:shadow-xl hover:shadow-violet/10 hover:-translate-y-1 hover:border-violet/40 transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-xl bg-violet/10 text-violet flex items-center justify-center mb-4 group-hover:bg-violet group-hover:text-white transition-colors">
                    {cardIcons[i === 0 ? 'mail' : i === 1 ? 'phone' : 'github']}
                  </div>
                  <div className="text-[10px] font-bold tracking-widest text-violet uppercase mb-1">{c.label}</div>
                  <div className="font-display font-bold text-sm break-all" dir="ltr">{c.value}</div>
                  <div className="text-ink/50 text-xs mt-2">{c.hint}</div>
                </a>
              </Reveal>
            ))}
          </div>

          {/* Form */}
          <Reveal>
            <div className="max-w-2xl mx-auto rounded-3xl border border-ink/10 bg-white p-8 md:p-12">
              <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight mb-8 text-center">
                {t('contact.formTitle')}
              </h2>
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder={t('contact.formName')} className={field} />
                  <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder={t('contact.formEmail')} className={field} dir="ltr" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input value={form.project} onChange={(e) => setForm({ ...form, project: e.target.value })} placeholder={t('contact.formProject')} className={field} />
                  <input value={form.budget} onChange={(e) => setForm({ ...form, budget: e.target.value })} placeholder={t('contact.formBudget')} className={field} />
                </div>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder={t('contact.formMessage')}
                  className={`${field} resize-none`}
                />
                <button
                  type="submit"
                  className="btn-studio w-full py-4 text-base text-white bg-violet shadow-lg shadow-violet/30 hover:shadow-violet/50 hover:-translate-y-0.5"
                >
                  {sent ? t('contact.response') : (<><Send size={16} /> {t('contact.formSend')}</>)}
                </button>
                <p className="text-center text-xs text-ink/45">{t('contact.formNote')}</p>
              </form>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
