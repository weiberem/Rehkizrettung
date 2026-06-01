import { config } from "@/lib/config";
import ReservationForm from "@/components/ReservationForm";

export default function Home() {
  return (
    <main>
      {/* ---------------------------------------------------------- */}
      {/*  HERO                                                       */}
      {/* ---------------------------------------------------------- */}
      <header className={`hero${config.heroVideoId ? " hero-has-video" : ""}`}>
        {config.heroVideoId && (
          <div className="hero-video" aria-hidden="true">
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${config.heroVideoId}?autoplay=1&mute=1&loop=1&playlist=${config.heroVideoId}&controls=0&showinfo=0&modestbranding=1&rel=0&playsinline=1&disablekb=1&fs=0`}
              title="Rehkitzrettung Video"
              allow="autoplay; encrypted-media; picture-in-picture"
              tabIndex={-1}
            />
          </div>
        )}
        <div className="hero-overlay" aria-hidden="true" />
        <div className="container hero-inner">
          <p className="eyebrow">🦌 Region {config.region}</p>
          <h1>Rehkitzrettung mit der Drohne</h1>
          <p className="lead">
            Vor dem Mähen suche ich deine Wiese mit einer Wärmebild-Drohne nach
            Rehkitzen ab – damit kein Kitz im Mähwerk endet. Reserviere hier
            unkompliziert deinen Termin.
          </p>
          <a href="#reservieren" className="btn btn-primary btn-lg">
            Jetzt Termin reservieren
          </a>
        </div>
      </header>

      {/* ---------------------------------------------------------- */}
      {/*  WARUM                                                      */}
      {/* ---------------------------------------------------------- */}
      <section className="section">
        <div className="container">
          <h2>Warum Rehkitzrettung?</h2>
          <p className="section-lead">
            Im Frühling legen Rehe ihre Kitze ins hohe Gras. Bei Gefahr fliehen
            sie nicht, sondern drücken sich regungslos auf den Boden – und
            werden so beim Mähen oft schwer verletzt oder getötet. Mit einer
            Drohne mit Wärmebildkamera lassen sich die Kitze frühmorgens
            zuverlässig aufspüren und in Sicherheit bringen.
          </p>
          <div className="cards">
            <div className="card">
              <div className="card-icon">🌅</div>
              <h3>Früh am Morgen</h3>
              <p>
                Wir fliegen kurz vor dem Mähen in den frühen Morgenstunden, wenn
                der Temperaturunterschied am grössten ist.
              </p>
            </div>
            <div className="card">
              <div className="card-icon">📷</div>
              <h3>Wärmebild-Drohne</h3>
              <p>
                Die Kamera erkennt die Körperwärme der Kitze auch im dichten,
                hohen Gras zuverlässig.
              </p>
            </div>
            <div className="card">
              <div className="card-icon">🐾</div>
              <h3>Sicher gerettet</h3>
              <p>
                Gefundene Kitze werden markiert oder vorübergehend aus dem Feld
                getragen, damit du sicher mähen kannst.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/*  ABLAUF                                                     */}
      {/* ---------------------------------------------------------- */}
      <section className="section section-alt">
        <div className="container">
          <h2>So funktioniert&apos;s</h2>
          <ol className="steps">
            <li>
              <span className="step-num">1</span>
              <div>
                <h3>Termin reservieren</h3>
                <p>
                  Fülle das Formular aus mit Standort, Feldgrösse und deinem
                  geplanten Mähdatum.
                </p>
              </div>
            </li>
            <li>
              <span className="step-num">2</span>
              <div>
                <h3>Bestätigung</h3>
                <p>
                  Ich melde mich bei dir und wir legen gemeinsam den genauen
                  Flugtermin fest – idealerweise am Morgen vor dem Mähen.
                </p>
              </div>
            </li>
            <li>
              <span className="step-num">3</span>
              <div>
                <h3>Drohnenflug &amp; Rettung</h3>
                <p>
                  Ich fliege dein Feld ab, finde die Kitze und bringe sie in
                  Sicherheit. Danach kannst du beruhigt mähen.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/*  FORMULAR                                                   */}
      {/* ---------------------------------------------------------- */}
      <section className="section" id="reservieren">
        <div className="container container-narrow">
          <h2>Termin reservieren</h2>
          <p className="section-lead">
            Trag deine Angaben ein und sende sie mit einem Klick per WhatsApp
            oder E-Mail an mich. Du bekommst von mir eine Rückmeldung zur
            Terminbestätigung.
          </p>
          <ReservationForm />
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/*  FOOTER                                                     */}
      {/* ---------------------------------------------------------- */}
      <footer className="footer">
        <div className="container">
          <strong>{config.operatorName}</strong>
          <p>
            Kontakt:{" "}
            <a href={`mailto:${config.contactEmail}`}>{config.contactEmail}</a>
            {config.phoneDisplay ? <> · Tel. {config.phoneDisplay}</> : null}
          </p>
          <p className="muted">
            Freiwillige Rehkitzrettung in der Region {config.region}.
          </p>
        </div>
      </footer>
    </main>
  );
}
