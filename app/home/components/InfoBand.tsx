import FadeIn from "./FadeIn";

export function InfoBand() {
  return (
    <section className="w-full bg-[var(--brand)] text-[var(--white)]">
      <div className="max-w-6xl mx-auto px-6 py-12 grid gap-10 md:grid-cols-3 text-sm md:text-base">
        <FadeIn>
          <div>
            <p className="text-xs tracking-[0.25em] uppercase opacity-80 mb-2">Küche</p>
            <h3 className="font-cinzel text-lg mb-1">Holzofenpizza &amp; Pasta</h3>
            <p className="opacity-90">Knusprig, mediterran, hausgemacht.</p>
          </div>
        </FadeIn>

        <FadeIn>
          <div>
            <p className="text-xs tracking-[0.25em] uppercase opacity-80 mb-2">Bar</p>
            <h3 className="font-cinzel text-lg mb-1">Aperitivo &amp; Drinks</h3>
            <p className="opacity-90">Spritz, Wein, Cocktails &amp; Vibes.</p>
          </div>
        </FadeIn>

        <FadeIn>
          <div>
            <p className="text-xs tracking-[0.25em] uppercase opacity-80 mb-2">Events</p>
            <h3 className="font-cinzel text-lg mb-1">
              Feiern &amp; Veranstaltungen
            </h3>
            <p className="opacity-90">Für Firmenfeiern &amp; private Anlässe.</p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
