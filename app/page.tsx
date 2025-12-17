"use client";

import FadeIn from "./components/FadeIn";

/* ------------------------------------------------------
   STARTSEITE – edel, typolastig, ohne Bilder/Banner
------------------------------------------------------ */
export default function Page() {
  return (
    <div className="w-full flex flex-col">

      {/* ------------------------------------------------------
         HERO SECTION
      ------------------------------------------------------ */}
      <section
        id="home"
        className="
          relative w-full min-h-[75vh] flex items-center 
          border-b border-[#e1ddd8]
          bg-[var(--cream)]
        "
      >
        <div
          className="
            relative max-w-6xl mx-auto px-6 py-20 md:py-28
            grid gap-16 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]
            items-start
          "
        >
          {/* LEFT – Claim & Intro */}
          <FadeIn>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <p className="text-xs tracking-[0.28em] uppercase text-[var(--brand)]">
                  Hauptplatz 5 · 8230 Hartberg
                </p>

                <h1 className="text-4xl md:text-5xl font-cinzel tracking-tight leading-tight text-[var(--dark)]">
                  Deine Bar, deine Küche,<br />dein Wohnzimmer in Hartberg.
                </h1>
              </div>

              <p className="text-lg md:text-xl text-[#555] leading-relaxed max-w-xl">
                Mediterrane Küche trifft steirische Herzlichkeit – Aperitivo an der Bar,
                Holzofenpizza & Pasta, gemütliche Abende mit Freunden.
              </p>

              <div className="h-px w-24 bg-[var(--brand)] mt-2" />

              <p className="text-sm md:text-base text-[#666] max-w-xl">
                La mia Casa ist ein Ort zum Ankommen: ein Glas Wein, ein gutes Essen,
                vertraute Gesichter – ein Wohnzimmer mitten am Hauptplatz.
              </p>

              {/* CTA */}
              <div className="mt-6 flex flex-wrap gap-4">
                <a href="/speisekarte" className="btn-brand text-base md:text-lg">
                  Speisekarte ansehen
                </a>
                <a href="/kontakt" className="btn-outline text-base md:text-lg">
                  Tisch reservieren
                </a>
              </div>
            </div>
          </FadeIn>

          {/* RIGHT – kompakte Faktenkarte */}
          <FadeIn>
            <aside
              className="
                w-full rounded-3xl bg-white/90 
                border border-[#e5e1da] px-7 py-7 space-y-5
              "
            >
              <h2 className="text-lg font-cinzel tracking-tight text-[var(--dark)] mb-2">
                La mia Casa auf einen Blick
              </h2>

              <div className="space-y-4 text-sm text-[#555]">
                <div>
                  <p className="font-semibold text-[var(--dark)] mb-1">Adresse</p>
                  <p>Hauptplatz 5<br />8230 Hartberg</p>
                </div>

                <div>
                  <p className="text-sm leading-relaxed">
        Mo, Do, Fr & Sa: 16:00 – 24:00 Uhr<br />
        So: 10:30 – 20:00 Uhr<br />
        Di & Mi: Ruhetag
      </p>
                </div>

                <div>
                  <p className="font-semibold text-[var(--dark)] mb-1">Reservierung</p>
                  <p>
                    Telefon &amp; WhatsApp:<br />
                    <span className="font-semibold text-[var(--dark)]">
                      +43 6649238843
                    </span>
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <a
                  href="tel:+436649238843"
                  className="btn-brand w-full text-sm text-center block"
                >
                  Jetzt anrufen
                </a>
              </div>
            </aside>
          </FadeIn>
        </div>
      </section>

      {/* ------------------------------------------------------
         USP SECTION – Brand-Orange Block
      ------------------------------------------------------ */}
      <section className="w-full bg-[var(--brand)] text-[var(--white)]">
        <div
          className="max-w-6xl mx-auto px-6 py-12 grid gap-10 
                     md:grid-cols-3 text-sm md:text-base"
        >
          <FadeIn>
            <div>
              <p className="text-xs tracking-[0.25em] uppercase opacity-80 mb-2">
                Küche
              </p>
              <h3 className="font-cinzel text-lg mb-1">
                Holzofenpizza &amp; Pasta
              </h3>
              <p className="opacity-90">Knusprig, mediterran, hausgemacht.</p>
            </div>
          </FadeIn>

          <FadeIn>
            <div>
              <p className="text-xs tracking-[0.25em] uppercase opacity-80 mb-2">
                Bar
              </p>
              <h3 className="font-cinzel text-lg mb-1">
                Aperitivo &amp; Drinks
              </h3>
              <p className="opacity-90">Spritz, Wein, Cocktails &amp; Vibes.</p>
            </div>
          </FadeIn>

          <FadeIn>
            <div>
              <p className="text-xs tracking-[0.25em] uppercase opacity-80 mb-2">
                Events
              </p>
              <h3 className="font-cinzel text-lg mb-1">
                Feiern &amp; Veranstaltungen
              </h3>
              <p className="opacity-90">Für Firmenfeiern &amp; private Anlässe.</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ------------------------------------------------------
         INTRO SECTION – viel Weißraum
      ------------------------------------------------------ */}
      <section id="intro" className="max-w-6xl mx-auto px-6 py-20">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-cinzel tracking-tight mb-4">
            Italienisches Ristorante mit Herz &amp; Charakter
          </h2>
        </FadeIn>

        <FadeIn>
          <p className="text-xl text-[#444] leading-relaxed max-w-3xl">
            La mia Casa steht für Atmosphäre, Herzlichkeit und mediterranen Genuss.
            Hausgemachte Pasta, Holzofenpizza, Antipasti – ein Abend wie bei Freunden.
          </p>
        </FadeIn>
      </section>

      {/* ------------------------------------------------------
         FEATURES – leichte Karten
      ------------------------------------------------------ */}
      <section
        id="kueche"
        className="
          max-w-6xl mx-auto px-6 pb-20 
          grid md:grid-cols-2 lg:grid-cols-4 gap-8
        "
      >
        <FadeIn>
          <Feature title="Pizza aus dem Holzofen" text="Knusprig &amp; traditionell italienisch." />
        </FadeIn>
        <FadeIn>
          <Feature title="Frische Pasta" text="Mediterrane Nudelgerichte – cremig &amp; würzig." />
        </FadeIn>
        <FadeIn>
          <Feature title="Salate &amp; Antipasti" text="Knackig, frisch &amp; hausgemacht." />
        </FadeIn>
        <FadeIn>
          <Feature title="Mehr Genuss…" text="Desserts, Specials &amp; Überraschungen." />
        </FadeIn>
      </section>

      {/* ------------------------------------------------------
         STORY / AMBIENTE – reine Typo, ohne Bild
      ------------------------------------------------------ */}
      <section className="w-full bg-[#f5f0ea] border-y border-[#e0dbd4]">
        <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12">
          <FadeIn>
            <div className="border-l-2 border-[var(--brand)] pl-6">
              <h2 className="text-2xl md:text-3xl font-cinzel mb-4">
                La mia Casa – mit Herz &amp; Erfahrung
              </h2>
              <p className="text-lg text-[#444] leading-relaxed mb-4">
                Erfahrung aus Salzburg, Ischgl, Grafendorf –
                kombiniert mit echter italienischer Herzlichkeit.
              </p>
              <p className="text-lg text-[#444] leading-relaxed">
                Ob Date, Familienfeier oder After-Work: Jeder Abend soll sich anfühlen
                wie ein Besuch bei guten Freunden.
              </p>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="space-y-4 text-[#555] text-base leading-relaxed">
              <p>
                Im La mia Casa verbinden wir mediterrane Küche mit steirischer
                Bodenständigkeit. Ein Glas Wein an der Bar, ein gemeinsamer Tisch,
                Zeit zum Durchatmen – dafür sind wir da.
              </p>
              <p>
                Für besondere Anlässe, kleine Runden oder größere Feiern beraten wir
                dich gerne persönlich und finden das passende Setting für deinen Abend.
              </p>
              <a
                href="/team"
                className="inline-block mt-4 text-[var(--brand)] hover:text-[var(--brand-dark)] font-semibold"
              >
                Mehr über uns →
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ------------------------------------------------------
         KONTAKT SECTION
      ------------------------------------------------------ */}
      <section id="kontakt" className="max-w-6xl mx-auto px-6 py-20">
        <FadeIn>
          <div
            className="
              rounded-3xl bg-white/95 
              border border-[#e4ded6]
              px-8 py-10 flex flex-col md:flex-row 
              items-start md:items-center justify-between gap-6
            "
          >
            <div className="space-y-3">
              <h2 className="text-2xl md:text-3xl font-cinzel mb-1">
                Lust auf einen Abend bei uns?
              </h2>

              <p className="text-lg text-[#555] max-w-xl">
                Reserviere telefonisch oder per WhatsApp – wir freuen uns auf dich.
              </p>

              <p className="mt-2 text-lg font-semibold text-[var(--dark)]">
                +43 6649238843
              </p>
            </div>

            <a href="/kontakt" className="btn-brand text-lg px-8 py-3">
              Kontakt &amp; Reservierung
            </a>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}

/* ------------------------------------------------------
   Feature Card Component
------------------------------------------------------ */
function Feature({ title, text }: { title: string; text: string }) {
  return (
    <div
      className="
        card
        hover:-translate-y-[2px] transition-transform
      "
    >
      <h3 className="text-xl font-cinzel mb-2 text-[var(--dark)]">{title}</h3>
      <p className="text-[#555] text-sm leading-relaxed">{text}</p>
    </div>
  );
}




