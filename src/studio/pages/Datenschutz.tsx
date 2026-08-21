import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Reveal } from '../components/Reveal';

const block = 'rounded-2xl border border-ink/10 bg-white p-7 md:p-8';
const h2 = 'display-fikra text-xl mb-3';
const p = 'text-ink/70 text-sm leading-relaxed mb-3';
const a = 'text-gold-deep underline underline-offset-2 hover:text-ink transition-colors';
const li = 'text-ink/70 text-sm leading-relaxed mb-2 flex gap-2.5';

export function Datenschutz() {
  const { t } = useLanguage();

  useEffect(() => {
    document.title = 'Datenschutzerklärung — Fikra Digital';
  }, []);

  return (
    <>
      {/* Header */}
      <section className="relative pt-36 pb-14 overflow-hidden">
        <div className="absolute inset-0 paper-grid pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-5 md:px-8 text-center">
          <Reveal>
            <div className="eyebrow mb-5">
              Datenschutz
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight mb-4">Datenschutzerklärung</h1>
            <p className="text-ink/60 max-w-xl mx-auto">Informationen gemäß Art. 13, 14 DSGVO</p>
          </Reveal>
        </div>
      </section>

      {/* Content */}
      <section className="pb-24">
        <div className="max-w-3xl mx-auto px-5 md:px-8 space-y-6">
          <Reveal>
            <div className={block}>
              <h2 className={h2}>1. Verantwortlicher</h2>
              <p className={p}>
                Verantwortlich für die Datenverarbeitung auf dieser Website ist:
              </p>
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
              <h2 className={h2}>2. Allgemeine Hinweise</h2>
              <p className={p}>
                Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Wir verarbeiten personenbezogene
                Daten ausschließlich im Rahmen der gesetzlichen Bestimmungen der Datenschutz-Grundverordnung (DSGVO)
                und des Bundesdatenschutzgesetzes (BDSG). Mit dieser Datenschutzerklärung informieren wir Sie über
                Umfang und Zweck der Verarbeitung personenbezogener Daten auf dieser Website.
              </p>
              <p className={p}>
                <strong>Grundsatz:</strong> Diese Website ist bewusst schlank aufgebaut. Sie verwendet keine
                Cookies, keine Tracking- oder Analyse-Tools und keine Werbenetzwerke.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className={block}>
              <h2 className={h2}>3. Datenerfassung beim Besuch der Website</h2>
              <p className={p}>
                Beim Aufruf dieser Website werden durch den Webserver automatisch Informationen in sogenannten
                Server-Logfiles gespeichert, die Ihr Browser automatisch übermittelt:
              </p>
              <ul className="mb-3">
                <li className={li}>IP-Adresse des anfragenden Geräts</li>
                <li className={li}>Datum und Uhrzeit des Zugriffs</li>
                <li className={li}>Name und URL der abgerufenen Datei</li>
                <li className={li}>Browsertyp und -version sowie Betriebssystem (User-Agent)</li>
                <li className={li}>Referrer-URL (die zuvor besuchte Seite)</li>
              </ul>
              <p className={p}>
                Diese Daten sind technisch erforderlich, um die Website korrekt auszuliefern (Rechtsgrundlage: Art. 6
                Abs. 1 lit. f DSGVO — berechtigtes Interesse an der sicheren und stabilen Bereitstellung der Website).
                Die Logfiles werden automatisch nach kurzer Zeit gelöscht und nicht mit anderen Datenquellen
                zusammengeführt.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className={block}>
              <h2 className={h2}>4. Kontaktformular und E-Mail-Kontakt</h2>
              <p className={p}>
                Das Kontaktformular dieser Website speichert keine Daten auf einem Server. Beim Absenden wird Ihr
                E-Mail-Programm mit einer vorausgefüllten Nachricht geöffnet — die Übertragung erfolgt ausschließlich
                über Ihren eigenen E-Mail-Anbieter. Es gelten die Datenschutzbestimmungen Ihres E-Mail-Anbieters.
              </p>
              <p className={p}>
                Wenn Sie uns per E-Mail oder Telefon kontaktieren, verarbeiten wir die von Ihnen mitgeteilten Daten
                (Name, Kontaktdaten, Projektinformationen) ausschließlich zur Bearbeitung Ihrer Anfrage
                (Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO — Vertragsanbahnung, bzw. Art. 6 Abs. 1 lit. f DSGVO).
                Ihre Daten werden gelöscht, sobald sie für die Bearbeitung nicht mehr erforderlich sind und keine
                gesetzlichen Aufbewahrungspflichten entgegenstehen.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className={block}>
              <h2 className={h2}>5. Hosting</h2>
              <p className={p}>
                Diese Website wird auf <strong>GitHub Pages</strong> gehostet, einem Hosting-Dienst der GitHub Inc.,
                88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA. Beim Aufruf der Website verarbeitet der
                Webserver von GitHub technisch notwendige Zugriffsdaten (insbesondere IP-Adresse, Datum und Uhrzeit
                des Zugriffs, aufgerufene Seite, User-Agent), um die Website sicher und stabil auszuliefern
                (Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO).
              </p>
              <p className={p}>
                Da GitHub seinen Sitz in den USA hat, kann eine Übermittlung personenbezogener Daten in die USA
                stattfinden. Für die USA besteht ein Angemessenheitsbeschluss der Europäischen Kommission
                (EU-US Data Privacy Framework). Weitere Informationen finden Sie in der{' '}
                <a
                  className={a}
                  href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Privacy Statement
                </a>
                . Eine Weitergabe Ihrer Daten an Dritte zu Werbezwecken findet nicht statt.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className={block}>
              <h2 className={h2}>6. SSL-/TLS-Verschlüsselung</h2>
              <p className={p}>
                Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine
                SSL-/TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des
                Browsers von „http://“ auf „https://“ wechselt und an dem Schloss-Symbol in Ihrer Browserzeile. Bei
                aktivierter Verschlüsselung können die Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen
                werden.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className={block}>
              <h2 className={h2}>7. Ihre Rechte als betroffene Person</h2>
              <p className={p}>Ihnen stehen bezüglich Ihrer personenbezogenen Daten folgende Rechte zu:</p>
              <ul className="mb-3">
                <li className={li}>Recht auf Auskunft (Art. 15 DSGVO)</li>
                <li className={li}>Recht auf Berichtigung (Art. 16 DSGVO)</li>
                <li className={li}>Recht auf Löschung („Recht auf Vergessenwerden“, Art. 17 DSGVO)</li>
                <li className={li}>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
                <li className={li}>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
                <li className={li}>Widerspruchsrecht gegen die Verarbeitung (Art. 21 DSGVO)</li>
                <li className={li}>Recht auf Widerruf erteilter Einwilligungen (Art. 7 Abs. 3 DSGVO)</li>
              </ul>
              <p className={p}>
                Zur Ausübung Ihrer Rechte genügt eine formlose Mitteilung an die unter Punkt 1 genannten Kontaktdaten.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className={block}>
              <h2 className={h2}>8. Beschwerderecht bei der Aufsichtsbehörde</h2>
              <p className={p}>
                Im Falle datenschutzrechtlicher Verstöße steht Ihnen ein Beschwerderecht bei einer
                Datenschutzaufsichtsbehörde zu. Zuständige Aufsichtsbehörde ist die Landesbeauftragte für Datenschutz
                und Informationsfreiheit Nordrhein-Westfalen (LDI NRW), Kavalleriestraße 2–4, 40213 Düsseldorf.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className={block}>
              <h2 className={h2}>9. Keine automatisierte Entscheidungsfindung</h2>
              <p className={p}>
                Eine automatisierte Entscheidungsfindung einschließlich Profiling im Sinne des Art. 22 DSGVO findet
                nicht statt.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className={block}>
              <h2 className={h2}>10. Aktualität dieser Datenschutzerklärung</h2>
              <p className={p}>
                Diese Datenschutzerklärung ist aktuell gültig. Durch die Weiterentwicklung unserer Website oder
                aufgrund geänderter gesetzlicher Vorgaben kann eine Anpassung erforderlich werden.
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
