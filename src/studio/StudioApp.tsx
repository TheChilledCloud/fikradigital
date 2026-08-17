import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CreativeCursor } from '../components/CreativeCursor';
import { Home } from './pages/Home';
import { Work } from './pages/Work';
import { Services } from './pages/Services';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Impressum } from './pages/Impressum';
import { Datenschutz } from './pages/Datenschutz';

/** Scrolls to top + syncs the document title per route. */
function StudioEffects() {
  const { pathname } = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    document.title = t('meta.title');
  }, [pathname, t]);

  return null;
}

export function StudioApp() {
  const location = useLocation();

  return (
    <LanguageProvider>
      <div className="studio-root min-h-screen bg-canvas text-ink">
        <CreativeCursor />
        <Navbar />
        <StudioEffects />

        <main className="min-h-screen">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            >
              <Routes location={location}>
                <Route path="" element={<Home />} />
                <Route path="work" element={<Work />} />
                <Route path="services" element={<Services />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
                <Route path="impressum" element={<Impressum />} />
                <Route path="datenschutz" element={<Datenschutz />} />
                <Route path="*" element={<Home />} />
              </Routes>
            </motion.div>
          </AnimatePresence>
        </main>

        <Footer />
      </div>
    </LanguageProvider>
  );
}
