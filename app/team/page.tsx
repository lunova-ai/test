import FadeIn from "../components/FadeIn";

export default function Team() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20">

      {/* Intro */}
      <FadeIn>
        <h1 className="text-5xl font-bold mb-4">Das Team</h1>
        <p className="text-lg text-[#555] mb-12 max-w-2xl">
          Herz, Erfahrung und italienische Gastfreundschaft – das macht La mia Casa besonders.
        </p>
      </FadeIn>

      {/* CHEFIN PORTRAIT */}
      <section className="grid md:grid-cols-2 gap-12 items-center">

        {/* FOTO – später echtes Bild */}
        <FadeIn>
          <div className="rounded-2xl overflow-hidden shadow-lg bg-white/40 backdrop-blur">
            <img
              src="/la-mia-casa-auto.jpg"
              alt="Die Chefin"
              className="w-full h-full object-cover"
            />
          </div>
        </FadeIn>

        {/* TEXT */}
        <FadeIn>
          <div>
            <h2 className="text-3xl font-semibold mb-3">Die Chefin</h2>
            <p className="text-lg text-[#444] leading-relaxed">
              La mia Casa steht unter der Leitung einer Gastgeberin, die seit vielen Jahren in
              der Gastronomie zuhause ist – mit Stationen in Salzburg, Ischgl, Grafendorf und Stambach.
              Erfahrung, Leidenschaft und Herzlichkeit prägen jeden Tag im Restaurant.
            </p>

            <p className="mt-6 text-[#666] leading-relaxed">
              <em>
                „Gastronomie ist kein Beruf – es ist ein Gefühl.  
                Ein Zuhause für Gäste zu schaffen, ist mein Anspruch und meine Leidenschaft.“
              </em>
            </p>

            <div className="w-full h-px bg-gradient-to-r from-transparent via-gold to-transparent my-8 opacity-70"></div>

            <p className="text-lg text-[#555]">
              Die Kombination aus mediterraner Küche, steirischer Herzlichkeit und modernem Ambiente
              entsteht durch ein Team, das zusammenhält – und durch eine Chefin, die weiß,
              was einen unvergesslichen Abend ausmacht.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* TEAM GRID – optional für später */}
      <FadeIn>
        <div className="mt-24">
          <h2 className="text-3xl font-semibold mb-6">Unser Team</h2>
          <p className="text-lg text-[#555] max-w-3xl mb-12">
            Ob Küche, Bar oder Service – wir arbeiten Hand in Hand, damit sich jeder Gast
            wie zuhause fühlt. Weitere Teamfotos folgen in Kürze.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 opacity-50">
            <TeamPlaceholder name="Service" />
            <TeamPlaceholder name="Küche" />
            <TeamPlaceholder name="Bar" />
          </div>
        </div>
      </FadeIn>

    </div>
  );
}


/* TEAM CARD PLACEHOLDER */
function TeamPlaceholder({ name }: { name: string }) {
  return (
    <div className="bg-white/60 backdrop-blur border border-[#ddd] rounded-2xl p-6 shadow-sm">
      <div className="w-full h-32 bg-[#eee] rounded-lg mb-4"></div>
      <p className="text-center text-lg font-medium text-[#555]">
        {name}
      </p>
    </div>
  );
}
