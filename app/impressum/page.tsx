"use client";

import FadeIn from "../home/components/FadeIn";

export default function Impressum() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20 space-y-20">
      {/* HEADER */}
      <FadeIn>
        <h1 className="text-4xl md:text-5xl font-cinzel text-[var(--dark)] mb-4">
          Impressum
        </h1>

        <p className="text-sm tracking-[0.25em] uppercase text-[var(--brand)] mb-6">
          Angaben gemäß § 5 ECG &amp; § 24 MedienGesetz
        </p>

        <div className="w-24 h-[1px] bg-[rgba(237,146,97,0.35)]" />
      </FadeIn>

      {/* BETREIBER */}
      <FadeIn>
        <section className="space-y-2">
          <h2 className="text-2xl font-cinzel text-[var(--dark)] mb-2">
            Betreiber
          </h2>

          <p className="text-lg text-[#555] leading-relaxed">
            La mia Casa Hartberg
            <br />
            Karin &amp; Reinhold Leitner
            <br />
            Hauptplatz 5
            <br />
            8230 Hartberg
            <br />
            Österreich
          </p>
        </section>
      </FadeIn>

      {/* KONTAKT */}
      <FadeIn>
        <section className="space-y-2">
          <h2 className="text-2xl font-cinzel text-[var(--dark)] mb-2">
            Kontakt
          </h2>

          <p className="text-lg text-[#555] leading-relaxed">
            Telefon:{" "}
            <a
              href="tel:+436649238843"
              className="text-[var(--brand)] hover:text-[var(--brand-dark)]"
            >
              +43 664 923 8843
            </a>
            <br />
            Web:{" "}
            <a
              href="https://la-mia-casa.app"
              className="text-[var(--brand)] hover:text-[var(--brand-dark)]"
            >
              la-mia-casa.app
            </a>
          </p>
        </section>
      </FadeIn>

      {/* HAFTUNG */}
      <FadeIn>
        <section className="space-y-2">
          <h2 className="text-2xl font-cinzel text-[var(--dark)] mb-2">
            Haftung
          </h2>

          <p className="text-lg text-[#555] leading-relaxed">
            Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung
            für die Inhalte externer Links. Für den Inhalt verlinkter Seiten sind
            ausschließlich deren Betreiber verantwortlich.
          </p>
        </section>
      </FadeIn>

      {/* URHEBERRECHT */}
      <FadeIn>
        <section className="space-y-2">
          <h2 className="text-2xl font-cinzel text-[var(--dark)] mb-2">
            Urheberrecht
          </h2>

          <p className="text-lg text-[#555] leading-relaxed">
            Die Inhalte dieser Website sind urheberrechtlich geschützt. Eine
            Vervielfältigung, Bearbeitung, Verbreitung oder sonstige Verwertung
            außerhalb der Grenzen des Urheberrechts bedarf der vorherigen
            schriftlichen Zustimmung der jeweiligen Rechteinhaber.
            <br />
            <br />
            Hinweis zu Bildern: Auf dieser Website werden Bildmaterial und Grafiken
            verwendet. Sofern nicht anders angegeben, stammen diese aus eigenem
            Material bzw. werden mit entsprechender Nutzungsberechtigung
            eingesetzt.
          </p>
        </section>
      </FadeIn>

      {/* MEDIENINHABER */}
      <FadeIn>
        <section className="space-y-2">
          <h2 className="text-2xl font-cinzel text-[var(--dark)] mb-2">
            Medieninhaber
          </h2>

          <p className="text-lg text-[#555] leading-relaxed">
            La mia Casa Hartberg – Karin &amp; Reinhold Leitner
          </p>
        </section>
      </FadeIn>
    </div>
  );
}

