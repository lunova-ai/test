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
         TEAMKULTUR + JOIN US
      ------------------------------------------------------ */}
      <FadeIn>
        <section className="space-y-10 max-w-3xl mx-auto text-center">

          <h2 className="text-2xl md:text-3xl font-cinzel text-[var(--dark)]">
            Mehr als ein Arbeitsplatz
          </h2>

          <p className="text-lg text-[#555] leading-relaxed">
            Hinter Karin und Reinhold steht ein kleines, herzliches Team,
            das jeden Tag mit Freude, Professionalität und Humor zusammenarbeitet.
            Wir glauben daran, dass man nur dann gute Gastgeber sein kann,
            wenn man sich auch im Team wohlfühlt.
          </p>

          <blockquote className="italic text-[#666] border-l-2 border-[rgba(237,146,97,0.35)] pl-4 text-left">
            „Respekt, Zusammenhalt und echtes Miteinander sind für uns genauso wichtig
            wie gutes Essen und zufriedene Gäste.“
          </blockquote>

        </section>
      </FadeIn>


      {/* Divider */}
      <FadeIn>
        <div className="w-full h-[1px] bg-[rgba(237,146,97,0.35)]"></div>
      </FadeIn>



      {/* ------------------------------------------------------
         JOIN OUR TEAM — ELEGANT & SELBSTBEWUSST
      ------------------------------------------------------ */}
      <FadeIn>
        <section className="space-y-8 text-center max-w-2xl mx-auto">

          <h2 className="text-2xl md:text-3xl font-cinzel text-[var(--dark)]">
            Werde Teil unseres Teams
          </h2>

          <p className="text-lg text-[#555] leading-relaxed">
            Du liebst Gastronomie, arbeitest gerne im Team und möchtest Gäste
            nicht nur bedienen, sondern begeistern?
            Dann passt du vielleicht genau zu uns.
          </p>

          <p className="text-lg text-[#555] leading-relaxed">
            Wir sind immer offen für motivierte Persönlichkeiten –
            egal ob Service, Küche oder Bar.
            Wenn du mit Herz arbeitest und Verantwortung übernehmen möchtest,
            freuen wir uns, von dir zu hören.
          </p>

          <div className="mt-6 flex justify-center">
            <a
              href="/kontakt"
              className="btn-brand"
            >
              Jetzt bewerben
            </a>
          </div>

          <p className="text-sm text-[#888] italic mt-4">
            Initiativbewerbungen sind jederzeit willkommen.
          </p>

        </section>
      </FadeIn>

    </div>
  );
}


