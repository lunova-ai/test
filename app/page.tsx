"use client";

import FadeIn from "./components/FadeIn";

/* ------------------------------------------------------
   STARTSEITE – ohne Countdown, mit Coming-Soon Banner
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
          relative w-full min-h-[85vh] flex items-center 
          border-b border-[#e1ddd8]
          bg-gradient-to-b from-[#f9f6f2] to-[#ece8e2]
          overflow-hidden
        "
      >

        {/* Hintergrundbild */}
        <div className="absolute inset-0 bg-[url('/la-mia-casa-hero.jpg')] bg-cover bg-center opacity-10"></div>

        <div
          className="
            relative z-10 max-w-6xl mx-auto px-6 py-24 md:py-32
            flex flex-col md:flex-row items-center
            gap-16 md:gap-20
          "
        >

          {/* ------------------------------------------------------
             LEFT CONTENT
          ------------------------------------------------------ */}
          <FadeIn>
            <div className="flex flex-col items-center md:items-start text-center md:text-left">

              {/* ------------------------------------------------------
                 LUXUS COMING-SOON BANNER
              ------------------------------------------------------ */}
              <div
                className="
                  relative mb-8 px-10 py-4 rounded-full 
                  bg-gradient-to-b from-[#2a2a2a] to-[#111]
                  border border-[#3d3d3d]
                  shadow-xl shadow-black/40
                  text-cream tracking-[0.25em] uppercase
                  text-sm md:text-base
                  flex items-center gap-4
                  backdrop-blur-xl select-none
                "
              >
                <span className="text-gold text-lg animate-pulseGlow">✨</span>

                <span className="font-semibold whitespace-nowrap">
                  Bald für dich da – La mia Casa eröffnet in Kürze
                </span>

                <span className="text-gold text-lg animate-pulseGlow">✨</span>

                {/* Shine */}
                <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
                  <div className="absolute inset-y-0 -left-full w-1/2 bg-white/10 blur-xl animate-shimmer"></div>
                </div>
              </div>

              {/* ------------------------------------------------------
                 LOGO
              ------------------------------------------------------ */}
              <img
                src="/la-mia-casa-logo.jpg"
                alt="La mia Casa Logo"
                className="w-56 md:w-72 mb-6 drop-shadow-md"
              />

              <span className="inline-block text-xs tracking-[0.35em] uppercase text-gold mb-4">
                Neu am Hauptplatz · Hartberg
              </span>

              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-dark mb-4 leading-snug">
                Deine Bar, deine Küche,<br />dein Wohnzimmer.
              </h1>

              <p className="text-lg md:text-xl text-[#555] max-w-xl leading-relaxed">
                Mediterrane Küche trifft steirische Herzlichkeit – Aperitivo an der Bar,
                Holzofenpizza & Pasta, gemütliche Abende mit Freunden.
              </p>

              {/* CTA */}
              <div className="mt-10 flex flex-wrap gap-4">
                <a href="/speisekarte" className="btn-gold text-base md:text-lg">
                  Speisekarte ansehen
                </a>
                <a href="/kontakt" className="btn-outline text-base md:text-lg">
                  Tisch reservieren
                </a>
              </div>
            </div>
          </FadeIn>


          {/* ------------------------------------------------------
             RIGHT INFO CARD
          ------------------------------------------------------ */}
          <FadeIn>
            <aside
              className="
                w-full md:w-80 lg:w-96 rounded-3xl bg-white/90 backdrop-blur-sm 
                shadow-xl border border-[#e5e1da] px-7 py-8 space-y-5
              "
            >
              <h2 className="text-lg font-semibold tracking-tight text-dark">
                Heute Lust auf La mia Casa?
              </h2>

              <div className="text-sm text-[#555] space-y-1">
                <p className="font-semibold text-dark">Adresse</p>
                <p>Hauptplatz 5<br />8230 Hartberg</p>
              </div>

              <div className="text-sm text-[#555] space-y-1">
                <p className="font-semibold text-dark">Öffnungszeiten</p>
                <p>
                  Mo, Mi, Do, Fr, Sa: 16–24 Uhr<br />
                  Sonntag: 10:30–19 Uhr<br />
                  Dienstag: Ruhetag
                </p>
              </div>

              <div className="text-sm text-[#555] space-y-1">
                <p className="font-semibold text-dark">Reservierung</p>
                <p>
                  Telefon & WhatsApp:<br />
                  <span className="font-semibold text-dark">+43 644 923 8843</span>
                </p>
              </div>

              <div className="pt-2">
                <a
                  href="tel:+436449238843"
                  className="btn-gold w-full text-sm text-center"
                >
                  Jetzt anrufen
                </a>
              </div>
            </aside>
          </FadeIn>

        </div>
      </section>




      {/* ------------------------------------------------------
         USP SECTION
      ------------------------------------------------------ */}
      <section className="w-full bg-dark text-cream">
        <div
          className="max-w-6xl mx-auto px-6 py-12 grid gap-10 
                     md:grid-cols-3 text-sm md:text-base"
        >
          <FadeIn>
            <div>
              <p className="text-xs tracking-[0.25em] uppercase text-gold mb-2">
                Küche
              </p>
              <h3 className="font-semibold mb-1">Holzofenpizza & Pasta</h3>
              <p className="opacity-80">Knusprig, mediterran, hausgemacht.</p>
            </div>
          </FadeIn>

          <FadeIn>
            <div>
              <p className="text-xs tracking-[0.25em] uppercase text-gold mb-2">
                Bar
              </p>
              <h3 className="font-semibold mb-1">Aperitivo & Drinks</h3>
              <p className="opacity-80">Spritz, Wein, Cocktails & Vibes.</p>
            </div>
          </FadeIn>

          <FadeIn>
            <div>
              <p className="text-xs tracking-[0.25em] uppercase text-gold mb-2">
                Events
              </p>
              <h3 className="font-semibold mb-1">Feiern & Veranstaltungen</h3>
              <p className="opacity-80">Für Firmenfeiern & private Anlässe.</p>
            </div>
          </FadeIn>
        </div>
      </section>




      {/* ------------------------------------------------------
         INTRO SECTION
      ------------------------------------------------------ */}
      <section id="intro" className="max-w-6xl mx-auto px-6 py-20">
        <FadeIn>
          <p className="text-sm tracking-[0.25em] text-gold uppercase mb-4">
            Hauptplatz 5 · 8230 Hartberg
          </p>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Italienisches Ristorante mit Herz & Charakter
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
         FEATURES
      ------------------------------------------------------ */}
      <section
        id="kueche"
        className="
          max-w-6xl mx-auto px-6 pb-20 
          grid md:grid-cols-2 lg:grid-cols-4 gap-8
        "
      >
        <FadeIn><Feature title="Pizza aus dem Holzofen" text="Knusprig & traditionell italienisch." /></FadeIn>
        <FadeIn><Feature title="Frische Pasta" text="Mediterrane Nudelgerichte – cremig & würzig." /></FadeIn>
        <FadeIn><Feature title="Salate & Antipasti" text="Knackig, frisch & hausgemacht." /></FadeIn>
        <FadeIn><Feature title="Mehr Genuss…" text="Desserts, Specials & Überraschungen." /></FadeIn>
      </section>




      {/* ------------------------------------------------------
         STORY SECTION
      ------------------------------------------------------ */}
      <section id="events" className="w-full bg-[#f3eee8] border-y border-[#e0dbd4]">
        <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">

          <FadeIn>
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img src="/la-mia-casa-auto.jpg" alt="" className="w-full object-cover" />
            </div>
          </FadeIn>

          <FadeIn>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                La mia Casa – mit Herz & Erfahrung
              </h2>

              <p className="text-lg text-[#444] leading-relaxed mb-4">
                Erfahrung aus Salzburg, Ischgl, Grafendorf und Stambach – kombiniert
                mit echter italienischer Herzlichkeit.
              </p>

              <p className="text-lg text-[#444] leading-relaxed">
                Ob Date, Familienfeier oder After-Work: Jeder Abend wird besonders.
              </p>

              <a
                href="/team"
                className="inline-block mt-6 text-gold hover:text-dark font-semibold text-lg"
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
              rounded-3xl bg-white/90 shadow-xl border border-[#e4ded6]
              px-8 py-10 flex flex-col md:flex-row 
              items-center justify-between gap-6
            "
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">
                Lust auf einen Abend bei uns?
              </h2>

              <p className="text-lg text-[#555]">
                Reserviere telefonisch oder per WhatsApp – wir freuen uns auf dich.
              </p>

              <p className="mt-3 text-lg font-semibold text-dark">
                +43 644 923 8843
              </p>
            </div>

            <a href="/kontakt" className="btn-gold text-lg px-8 py-3">
              Kontakt & Reservierung
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
        p-7 rounded-2xl bg-white/90 backdrop-blur-sm
        border border-[#ece7e1] shadow-sm
        hover:shadow-md hover:-translate-y-1 transition
      "
    >
      <h3 className="text-xl font-semibold mb-2 text-dark">{title}</h3>
      <p className="text-[#555] text-sm leading-relaxed">{text}</p>
    </div>
  );
}



