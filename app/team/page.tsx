"use client";

import FadeIn from "../home/components/FadeIn";

export default function Team() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20 space-y-24">

      {/* ------------------------------------------------------
         INTRO — CINZEL HEADER + ZITAT
      ------------------------------------------------------ */}
      <FadeIn>
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-cinzel text-[var(--dark)] mb-4">
            Unser Team
          </h1>

          <p className="text-lg text-[#555] max-w-xl mx-auto leading-relaxed">
            Menschen mit Herz, Erfahrung und echter Gastfreundschaft.
            La mia Casa lebt durch jene, die es jeden Tag mit Leben füllen.
          </p>

          <div className="w-24 h-[1px] bg-[rgba(237,146,97,0.35)] mx-auto mt-8"></div>
        </div>
      </FadeIn>



      {/* ------------------------------------------------------
         KARIN & REINHOLD — HOST SECTION
      ------------------------------------------------------ */}
      <FadeIn>
        <section className="grid md:grid-cols-2 gap-16 items-start">

          {/* LEFT — TEXT KARIN */}
          <div className="space-y-8">
            <h2 className="text-2xl md:text-3xl font-cinzel text-[var(--dark)]">
              Karin – Gastgeberin aus Leidenschaft
            </h2>

            <p className="text-lg text-[#555] leading-relaxed">
              Karin bringt jahrelange Erfahrung aus Salzburg, Ischgl, Grafendorf und weiteren Stationen mit. 
              Sie ist eine Gastgeberin mit Herz – aufmerksam, warmherzig und immer mit echtem Interesse am Menschen.
              Ihre Liebe zur Gastronomie spürt man in jeder Begegnung.
            </p>

            <blockquote className="italic text-[#666] border-l-2 border-[rgba(237,146,97,0.35)] pl-4">
              „Gastronomie ist kein Beruf – es ist ein Gefühl. Ein Zuhause für Gäste zu schaffen, ist meine Leidenschaft.“
            </blockquote>
          </div>

          {/* RIGHT — TEXT REINHOLD */}
          <div className="space-y-8">
            <h2 className="text-2xl md:text-3xl font-cinzel text-[var(--dark)]">
              Reinhold – ruhig, herzlich & erfahren
            </h2>

            <p className="text-lg text-[#555] leading-relaxed">
              Reinhold stammt aus Salzburg und ist seit vielen Jahren in der Steiermark zuhause. 
              Er ist ein Mensch mit offenen Ohren und offenem Herzen – freundlich, bodenständig und authentisch.
              Viele wissen es nicht: Er war Teilnehmer der Olympischen Spiele in Seoul – eine Erfahrung,
              die seine Disziplin, Ruhe und Ausdauer geprägt hat.
            </p>

            <p className="text-lg text-[#555] leading-relaxed">
              Im La mia Casa sorgt er für jene warme Atmosphäre, die den Unterschied macht.
            </p>
          </div>

        </section>
      </FadeIn>


      {/* Divider */}
      <FadeIn>
        <div className="w-full h-[1px] bg-[rgba(237,146,97,0.35)]"></div>
      </FadeIn>



      {/* ------------------------------------------------------
         DANIEL — KÜCHENCHEF
      ------------------------------------------------------ */}
      <FadeIn>
        <section className="space-y-8 max-w-3xl">

          <h2 className="text-2xl md:text-3xl font-cinzel text-[var(--dark)]">
            Daniel – Küchenchef mit Gefühl
          </h2>

          <p className="text-lg text-[#555] leading-relaxed">
            Daniel ist das kulinarische Herz des Hauses. Für ihn ist Kochen kein Prozess,
            sondern Ausdruck von Emotion – mit jeder Zutat, jedem Handgriff, jedem Teller.
          </p>

          <blockquote className="italic text-[#555] border-l-2 border-[rgba(237,146,97,0.35)] pl-4 text-lg">
            „Kochen bedeutet für mich, Emotionen auf den Teller zu bringen – und Gäste 
            mit jedem Bissen ein Stück Italien spüren zu lassen.“ – Daniel
          </blockquote>

          <p className="text-lg text-[#555] leading-relaxed">
            Seine Küche verbindet mediterrane Aromen mit steirischer Bodenständigkeit – 
            ehrlich, handwerklich und voller Leidenschaft.
          </p>

        </section>
      </FadeIn>


      {/* Divider */}
      <FadeIn>
        <div className="w-full h-[1px] bg-[rgba(237,146,97,0.35)]"></div>
      </FadeIn>



      {/* ------------------------------------------------------
         TEAM TEASER — REST DER CREW
      ------------------------------------------------------ */}
      <FadeIn>
        <section className="space-y-8 text-center">

          <h2 className="text-2xl md:text-3xl font-cinzel text-[var(--dark)]">
            Gemeinsam für euch da
          </h2>

          <p className="text-lg text-[#555] max-w-2xl mx-auto leading-relaxed">
            Hinter Karin, Reinhold und Daniel steht ein kleines, herzliches Team,
            das jeden Tag dafür sorgt, dass sich Gäste wie zuhause fühlen.
            Menschen, die mit Freude, Professionalität und Humor zusammenarbeiten –
            und genau das spürt man auch.
          </p>

          <p className="text-sm text-[#888] italic">
            Bald gibt es hier Fotos & Details zu unserem gesamten Team.
          </p>

        </section>
      </FadeIn>

    </div>
  );
}

