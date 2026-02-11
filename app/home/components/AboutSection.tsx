import FadeIn from "./FadeIn";

export function AboutSection() {
  return (
    <section className="w-full bg-[#f5f0ea] border-y border-[#e0dbd4]">
      <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12">
        <FadeIn>
          <div className="border-l-2 border-[var(--brand)] pl-6">
            <h2 className="text-2xl md:text-3xl font-cinzel mb-4 text-[var(--dark)]">
              La mia Casa – mit Herz &amp; Erfahrung
            </h2>
            <p className="text-lg text-[#444] leading-relaxed mb-4">
              Erfahrung aus Salzburg, Ischgl, Grafendorf – kombiniert mit echter italienischer Herzlichkeit.
            </p>
            <p className="text-lg text-[#444] leading-relaxed">
              Ob Date, Familienfeier oder After-Work: Jeder Abend soll sich anfühlen wie ein Besuch bei guten Freunden.
            </p>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="space-y-4 text-[#555] text-base leading-relaxed">
            <p>
              Im La mia Casa verbinden wir mediterrane Küche mit steirischer Bodenständigkeit.
              Ein Glas Wein an der Bar, ein gemeinsamer Tisch, Zeit zum Durchatmen – dafür sind wir da.
            </p>
            <p>
              Für besondere Anlässe, kleine Runden oder größere Feiern beraten wir dich gerne persönlich
              und finden das passende Setting für deinen Abend.
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
  );
}
