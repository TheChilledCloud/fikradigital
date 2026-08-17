import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../utils/translations';

export type StudioLang = 'en' | 'de' | 'ar';

interface LanguageContextProps {
  lang: StudioLang;
  isRtl: boolean;
  setLanguage: (lang: StudioLang) => void;
  toggleLanguage: () => void;
  t: (key: string) => any;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

const ORDER: StudioLang[] = ['en', 'de', 'ar'];

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<StudioLang>(() => {
    try {
      const saved = localStorage.getItem('studio-lang');
      return saved === 'ar' || saved === 'de' ? saved : 'en';
    } catch {
      return 'en';
    }
  });

  const isRtl = lang === 'ar';

  useEffect(() => {
    const root = window.document.documentElement;
    root.setAttribute('dir', isRtl ? 'rtl' : 'ltr');
    root.classList.toggle('lang-ar', isRtl);
    try {
      localStorage.setItem('studio-lang', lang);
    } catch { /* ignore */ }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang, isRtl]);

  const setLanguage = (l: StudioLang) => setLang(l);

  const toggleLanguage = () => {
    setLang((prev) => ORDER[(ORDER.indexOf(prev) + 1) % ORDER.length]);
  };

  const t = (key: string): any => {
    const keys = key.split('.');
    let value: any = translations[lang];
    for (const k of keys) {
      if (value && value[k] !== undefined) {
        value = value[k];
      } else {
        let fb: any = translations['en'];
        for (const fk of keys) {
          if (fb && fb[fk] !== undefined) fb = fb[fk];
          else return key;
        }
        return fb;
      }
    }
    return value;
  };

  return (
    <LanguageContext.Provider value={{ lang, isRtl, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
