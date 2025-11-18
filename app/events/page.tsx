import FadeIn from "../components/FadeIn";

export default function Events() {
  return (
    <div className="w-full">

      {/* HERO */}
      <section className="relative h-[60vh] w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-[url('/la-mia-casa-ofen.jpg')] bg-cover bg-center"
          style={{ backgroundAttachment: "fixed" }}
        ></div>
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 max-w-5xl mx-auto h-full flex flex-col justify-center px-6 text-white">
          <FadeIn>
            <h1 className="text-5xl md:text-6xl font-bold drop-shadow-xl">
              Events & Feiern
            </h1>
          </FadeIn>

          <FadeIn>
            <p className="mt-4 text-xl opacity-90 max-w-xl">
              La mia Casa – der perfekte Ort für Firmenfeiern,
              Geburtstage, Gruppenabende oder besondere Anlässe.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* INTRO */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <FadeIn>
          <h2 className="text-3xl font-semibold mb-4">
            Feiern, genießen & besondere Momente erleben
          </h2>
          <p className="text-lg text-[#555] leading-relaxed max-w-3xl">
            Unser zweistöckiges Lokal bietet moderne Atmosphäre,
            gemütliche Plätze und flexiblen Raum für Veranstaltungen aller Art.  
            Ob Firmenfeier, Geburtstag, Aperitivo-Abend oder Weihnachtsfeier –
            wir gestalten deinen Anlass so, wie du ihn dir vorstellst.
          </p>
        </FadeIn>

        <div className="mt-10 grid md:grid-cols-3 gap-8">

          <FadeIn>
            <EventCard
              title="Firmenfeiern"
              text="Ob kleine Teams oder größere Gruppen – wir bieten elegant gemütliche Räume mit Bar & Küche."
            />
          </FadeIn>

          <FadeIn>
            <EventCard
              title="Geburtstage"
              text="Mit Freunden feiern, Pizza aus dem Holzofen genießen und anstoßen – perfekt für jeden Anlass."
            />
          </FadeIn>

          <FadeIn>
            <EventCard
              title="Vereins- & Gruppenabende"
              text="Gemütlich zusammensitzen, essen und trinken – ideal für Vereine, Clubs und Teams."
            />
          </FadeIn>

        </div>

        <FadeIn>
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gold to-transparent my-16 opacity-70"></div>
        </FadeIn>

        {/* DETAILS SECTION */}
        <FadeIn>
          <h2 className="text-3xl font-semibold mb-6">Was wir bieten</h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-10">

          <FadeIn>
            <DetailItem
              title="Holzofenpizza & mediterrane Küche"
              text="Frisch, heiß, duftend – ideal für Gruppen. Spezielle Menüs möglich."
            />
          </FadeIn>

          <FadeIn>
            <DetailItem
              title="60 Sitzplätze · 2 Etagen"
              text="Oben Essen, unten Bar – perfekt für Feiern jeder Größe."
            />
          </FadeIn>

          <FadeIn>
            <DetailItem
              title="Moderne, gemütliche Atmosphäre"
              text="Mediterran-rustikaler Stil trifft modernes Design – perfekt für Fotos & Stimmung."
            />
          </FadeIn>

          <FadeIn>
            <DetailItem
              title="Getränkespecials & Aperitivos"
              text="Aperol, Wein, Espresso – italienische Atmosphäre garantiert."
            />
          </FadeIn>
        </div>

        <FadeIn>
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gold to-transparent my-16 opacity-70"></div>
        </FadeIn>

        {/* CTA */}
        <FadeIn>
          <h2 className="text-3xl font-semibold mb-4">Reservieren oder Event anfragen</h2>
          <p className="text-lg text-[#555] mb-8 max-w-2xl">
            Kontaktiere uns direkt für Reservierungen, Eventplanung oder spezielle Wünsche.
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <a
              href="tel:+43XXXXXXXX"
              className="px-8 py-4 rounded-lg bg-gold text-dark font-semibold shadow-lg hover:bg-[#c39645] transition w-full sm:w-auto text-center"
            >
              Jetzt anrufen
            </a>

            <a
              href="https://wa.me/43XXXXXXXX"
              className="px-8 py-4 rounded-lg border border-dark text-dark font-semibold hover:bg-dark hover:text-white transition w-full sm:w-auto text-center"
            >
              WhatsApp schreiben
            </a>
          </div>
        </FadeIn>

      </section>
    </div>
  );
}


/* COMPONENTS */

function EventCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="bg-white/70 backdrop-blur border border-[#ddd] rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-[#555] text-sm leading-relaxed">{text}</p>
    </div>
  );
}

function DetailItem({ title, text }: { title: string; text: string }) {
  return (
    <div>
      <h4 className="text-xl font-semibold mb-2 text-dark">{title}</h4>
      <p className="text-[#666]">{text}</p>
    </div>
  );
}
