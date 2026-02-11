import FadeIn from "./FadeIn";

export function IntroSection() {
  return (
    <section id="intro" className="max-w-6xl mx-auto px-6 py-20 scroll-mt-24">
      <FadeIn>
        <h2 className="text-3xl md:text-4xl font-cinzel tracking-tight mb-4 text-[var(--dark)]">
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
  );
}
