import FadeIn from "./FadeIn";
import { FeatureCard } from "./FeatureCard";

export function FeaturesSection() {
  return (
    <section
      id="kueche"
      className="max-w-6xl mx-auto px-6 pb-20 scroll-mt-24"
      aria-labelledby="kueche-heading"
    >
      <h2 id="kueche-heading" className="sr-only">
        Küche
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <FadeIn>
          <FeatureCard
            title="Pizza aus dem Holzofen"
            text="Knusprig & traditionell italienisch."
          />
        </FadeIn>

        <FadeIn>
          <FeatureCard
            title="Frische Pasta"
            text="Mediterrane Nudelgerichte – cremig & würzig."
          />
        </FadeIn>

        <FadeIn>
          <FeatureCard
            title="Salate & Antipasti"
            text="Knackig, frisch & hausgemacht."
          />
        </FadeIn>

        <FadeIn>
          <FeatureCard
            title="Mehr Genuss …"
            text="Desserts, Specials & Überraschungen."
          />
        </FadeIn>
      </div>
    </section>
  );
}
