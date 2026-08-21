import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Reveal } from '../components/Reveal';

const block = 'rounded-2xl border border-ink/10 bg-white p-7 md:p-8';
const h2 = 'display-fikra text-xl mb-3';
const p = 'text-ink/70 text-sm leading-relaxed mb-3';
const a = 'text-gold-deep underline underline-offset-2 hover:text-ink transition-colors';

export function Impressum() {
  const { t } = useLanguage();

  useEffect(() => {
    document.title = 'Impressum — Fikra Digital';
  }, []);

  return (
    <>
      {/* Header */}
      <section className="relative pt-36 pb-14 overflow-hidden">
        <div className="absolute inset-0 paper-grid pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-5 md:px-8 text-center">
          <Reveal>
            <div className="eyebrow mb-5">
              Impressum
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight mb-4">Impressum</h1>
            <p className="text-ink/60 max-w-xl mx-auto">Angaben gemäß § 5 DDG</p>
          </Reveal>
        </div>
      </section>

      {/* Content */}
      <section className="pb-24">
        <div className="max-w-3xl mx-auto px-5 md:px-8 space-y-6">
          <Reveal>
            <div className={block}>
              <h2 className={h2}>Diensteanbieter</h2>
              <p className={p}>
                <strong>Fikra Digital</strong> — Webdesign-Studio
                <br />
                Inhaber: Ahmad Alfaisal
                <br />
                [Straße und Hausnummer]
                <br />
                [PLZ] Wuppertal
                <br />
                Deutschland
              </p>
              <p className={p}>
                <strong>Kontakt:</strong>
                <br />
                Telefon: +49 177 6971407
                <br />
                E-Mail:{' '}
                <a className={a} href="mailto:info@fikradigital.de">
                  info@fikradigital.de
                </a>
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className={block}>
              <h2 className={h2}>Umsatzsteuer</h2>
              <p className={p}>
                Als Kleinunternehmer im Sinne von § 19 UStG wird keine Umsatzsteuer berechnet und daher keine
                Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG ausgewiesen.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className={block}>
              <h2 className={h2}>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
              <p className={p}>
                Ahmad Alfaisal
                <br />
                [Straße und Hausnummer]
                <br />
                [PLZ] Wuppertal
                <br />
                Verantwortlich für die Website <strong>fikradigital.de</strong>
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className={block}>
              <h2 className={h2}>EU-Streitschlichtung</h2>
              <p className={p}>
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
                <a className={a} href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">
                  https://ec.europa.eu/consumers/odr/
                </a>
                . Unsere E-Mail-Adresse finden Sie oben im Impressum.
              </p>
              <p className={p}>
                Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className={block}>
              <h2 className={h2}>Haftung für Inhalte</h2>
              <p className={p}>
                Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten nach den
                allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir als Diensteanbieter jedoch nicht
                verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu
                forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung
                der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine
                diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung
                möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend
                entfernen.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className={block}>
              <h2 className={h2}>Haftung für Links</h2>
              <p className={p}>
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.
                Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
                verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die
                verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
                Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche
                Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht
                zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className={block}>
              <h2 className={h2}>Urheberrecht</h2>
              <p className={p}>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
                Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
                Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw.
                Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch
                gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die
                Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten
                Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden
                Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
              </p>
            </div>
          </Reveal>

          <Reveal className="pt-4 text-center">
            <Link
              to="/contact"
              className="btn-fikra btn-fikra-ghost inline-flex items-center gap-2 px-6 py-3 text-sm"
            >
              <ArrowLeft size={16} /> {t('nav.contact')}
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
