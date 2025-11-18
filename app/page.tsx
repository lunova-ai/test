import FadeIn from "./components/FadeIn";

export default function Page() {
  return (
    <div className="w-full flex flex-col">

      {/* HERO – Brand + Quick Info */}
      <section
        id="home"
        className="w-full border-b border-[#e1ddd8] bg-gradient-to-b from-[#f5f2ee] to-[#ece7e1]"
      >
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-24 flex flex-col md:flex-row items-center gap-12">

          {/* LEFT: Logo + Claim */}
          <FadeIn>
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              {/* großes Logo-Bild */}
              <img
                src="/la-mia-casa-logo.jpg"
                alt="La mia Casa Logo"
                className="w-64 md:w-80 mb-6"
              />

              <span className="inline-block text-xs tracking-[0.35em] uppercase text-gold mb-4">
                Neu am Hauptplatz · Hartberg
              </span>

              <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-dark mb-4">
                Deine Bar, deine Küche, dein Wohnzimmer.
              </h1>

              <p className="text-lg md:text-xl text-[#555] max-w-xl leading-relaxed">
                Mediterrane Küche trifft steirische Herzlichkeit – Aperitivo an der Bar,
                Holzofenpizza & Pasta im Ristorante, gemütliche Abende mit Freunden.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a href="/speisekarte" className="btn-gold text-base md:text-lg">
                  Speisekarte ansehen
                </a>
                <a
                  href="/kontakt"
                  className="px-6 py-3 rounded-lg border border-dark text-dark font-semibold hover:bg-dark hover:text-cream transition text-base md:text-lg"
                >
                  Tisch reservieren
                </a>
              </div>
            </div>
          </FadeIn>

          {/* RIGHT: Öffnungszeiten / Facts Card */}
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
                  Mo, Mi, Do, Fr, Sa: 16:00 – 24:00<br />
                  Sonntag: 10:30 – 19:00<br />
                  Dienstag: Ruhetag
                </p>
              </div>

              <div className="text-sm text-[#555] space-y-1">
                <p className="font-semibold text-dark">Reservierung</p>
                <p>
                  Telefon & WhatsApp:<br />
                  <span className="font-semibold text-dark">+43 (0) XXX XXX XXXX</span>
                </p>
              </div>

              <a
                href="tel:+43XXXXXXXX"
                className="mt-4 inline-flex items-center justify-center w-full px-4 py-3 rounded-xl bg-gold text-dark font-semibold hover:bg-[#c39645] transition text-sm"
              >
                Jetzt anrufen
              </a>
            </aside>
          </FadeIn>
        </div>
      </section>

      {/* USP-BAND – macht Tempo und bricht die „Wurst“ */}
      <section className="w-full bg-dark text-cream">
        <div className="max-w-6xl mx-auto px-6 py-10 grid gap-8 md:grid-cols-3 text-sm md:text-base">
          <FadeIn>
            <div>
              <p className="text-xs tracking-[0.25em] uppercase text-gold mb-2">
                Küche
              </p>
              <h3 className="font-semibold mb-1">Holzofenpizza & Pasta</h3>
              <p className="opacity-80">
                Knusprige Pizzen, frische Nudelgerichte & mediterrane Klassiker.
              </p>
            </div>
          </FadeIn>

          <FadeIn>
            <div>
              <p className="text-xs tracking-[0.25em] uppercase text-gold mb-2">
                Bar
              </p>
              <h3 className="font-semibold mb-1">Aperitivo & Drinks</h3>
              <p className="opacity-80">
                Spritz, Wein, Cocktails & gute Musik – ideal für After-Work & Abende.
              </p>
            </div>
          </FadeIn>

          <FadeIn>
            <div>
              <p className="text-xs tracking-[0.25em] uppercase text-gold mb-2">
                Events
              </p>
              <h3 className="font-semibold mb-1">Feiern & Veranstaltungen</h3>
              <p className="opacity-80">
                Zweistöckiges Lokal mit ca. 60 Plätzen – perfekt für Firmenfeiern & Geburtstage.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* INTRO + ÖFFNUNGSZEITEN */}
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
            Holzofenpizza, hausgemachte Pasta, Antipasti und steirische Gastfreundschaft –
            ein Erlebnis wie ein Abend bei Freunden.
          </p>
        </FadeIn>

        <FadeIn>
          <div className="mt-10 text-lg text-[#555] leading-relaxed">
            <strong className="text-dark block mb-1">Öffnungszeiten</strong>
            <p>
              Mo, Mi, Do, Fr, Sa: 16:00 – 24:00<br />
              Sonntag: 10:30 – 19:00<br />
              Dienstag: Ruhetag
            </p>
          </div>
        </FadeIn>
      </section>

      {/* FEATURES – KÜCHE */}
      <section
        id="kueche"
        className="max-w-6xl mx-auto px-6 pb-20 grid md:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        <FadeIn>
          <Feature
            title="Pizza aus dem Holzofen"
            text="Knusprig, heiß & traditionell italienisch – direkt aus dem sichtbaren Holzofen."
          />
        </FadeIn>

        <FadeIn>
          <Feature
            title="Frische Pasta"
            text="Mediterrane Nudelgerichte – cremig, würzig, frisch gekocht & authentisch."
          />
        </FadeIn>

        <FadeIn>
          <Feature
            title="Salatspezialitäten"
            text="Hausgemachte Salate mit knackigen Zutaten und mediterraner Note."
          />
        </FadeIn>

        <FadeIn>
          <Feature
            title="Mehr Genuss…"
            text="Antipasti, Desserts & wöchentlich wechselnde Specials – für alle Genießer."
          />
        </FadeIn>
      </section>

      {/* STORY + AUTO-FOTO */}
      <section id="events" className="w-full bg-[#f3eee8] border-y border-[#e0dbd4]">
        <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
          <FadeIn>
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/la-mia-casa-auto.jpg"
                alt="Fiat 500 vor La mia Casa"
                className="w-full object-cover"
              />
            </div>
          </FadeIn>

          <FadeIn>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                La mia Casa – mit Herz & Erfahrung
              </h2>
              <p className="text-lg text-[#444] leading-relaxed mb-4">
                Die Gastgeberin bringt viel Erfahrung aus Salzburg, Ischgl, Grafendorf und
                Stambach mit – kombiniert mit echter italienischer Herzlichkeit.
              </p>
              <p className="text-lg text-[#444] leading-relaxed">
                Ob Date, Familienfeier oder After-Work: Wir machen aus jedem Abend etwas
                Besonderes.
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

      {/* KONTAKT-TEASER */}
      <section id="kontakt" className="max-w-6xl mx-auto px-6 py-20">
        <FadeIn>
          <div className="rounded-3xl bg-white/90 shadow-xl border border-[#e4ded6] px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">
                Lust auf einen Abend bei uns?
              </h2>
              <p className="text-lg text-[#555]">
                Reserviere deinen Tisch telefonisch oder per WhatsApp – wir freuen uns auf dich.
              </p>
              <p className="mt-3 text-lg font-semibold text-dark">
                +43 (0) XXX XXX XXXX
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

/* FEATURE CARD – Premium Version */
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

