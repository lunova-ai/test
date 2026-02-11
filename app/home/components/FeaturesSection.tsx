import FadeIn from "./FadeIn";
import { FeatureCard } from "./FeatureCard";

export function FeaturesSection() {
  return (
    <section
      id="kueche"
      className="max-w-6xl mx-auto px-6 pb-20 grid md:grid-cols-2 lg:grid-cols-4 gap-8 scroll-mt-24"
    >
      <FadeIn>
        <FeatureCard title="Pizza aus dem Holzofen" text="Knusprig &amp; traditionell italienisch." />
      </FadeIn>
      <FadeIn>
        <FeatureCard title="Frische Pasta" text="Mediterrane Nudelgerichte – cremig &amp; würzig." />
      </FadeIn>
      <FadeIn>
        <FeatureCard title="Salate &amp; Antipasti" text="Knackig, frisch &amp; hausgemacht." />
      </FadeIn>
      <FadeIn>
        <FeatureCard title="Mehr Genuss …" text="Desserts, Specials &amp; Überraschungen." />
      </FadeIn>
    </section>
  );
}
