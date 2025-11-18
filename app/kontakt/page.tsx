import FadeIn from "../components/FadeIn";

export default function Kontakt() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20">

      <FadeIn>
        <h1 className="text-5xl font-bold mb-4">Kontakt & Reservierung</h1>
        <p className="text-lg text-[#555] mb-12 max-w-2xl">
          Reservierungen, Fragen oder Event-Anfragen – wir sind jederzeit für dich da.
        </p>
      </FadeIn>

      {/* CONTACT BOX */}
      <FadeIn>
        <div className="bg-white/80 backdrop-blur-xl border border-[#ddd] rounded-2xl p-8 shadow-lg mb-16">
          <h2 className="text-3xl font-semibold mb-6">Kontaktdaten</h2>

          <div className="space-y-4 text-lg text-[#444]">

            <p>
              <strong>Adresse:</strong><br />
              Hauptplatz 5, 8230 Hartberg
            </p>

            <p>
              <strong>Telefon:</strong><br />
              <a href="tel:+43XXXXXXXX" className="text-gold hover:text-dark">
                +43 (0) XXX XXX XXXX
              </a>
            </p>

            <p>
              <strong>WhatsApp:</strong><br />
              <a
                href="https://wa.me/43XXXXXXXX"
                className="text-gold hover:text-dark"
                target="_blank"
              >
                Nachricht senden →
              </a>
            </p>

            <p>
              <strong>Öffnungszeiten:</strong><br />
              Mo, Mi, Do, Fr, Sa: 16:00 – 24:00<br />
              Sonntag: 10:30 – 19:00<br />
              Dienstag: Ruhetag
            </p>
          </div>

          <div className="flex gap-6 mt-10">
            <a
              href="tel:+43XXXXXXXX"
              className="px-8 py-4 rounded-lg bg-gold text-dark font-semibold shadow-lg hover:bg-[#c39645] transition"
            >
              Jetzt anrufen
            </a>

            <a
              href="https://wa.me/43XXXXXXXX"
              className="px-8 py-4 rounded-lg border border-dark text-dark font-semibold hover:bg-dark hover:text-white transition"
              target="_blank"
            >
              WhatsApp schreiben
            </a>
          </div>
        </div>
      </FadeIn>

      {/* MAP */}
      <FadeIn>
        <h2 className="text-3xl font-semibold mb-6">Hier findest du uns</h2>

        <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-xl border border-[#ccc]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2726.9168229698934!2d15.973!3d47.281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476e3dcdee1127ad%3A0x3af37c490eb5c675!2sHauptplatz%205%2C%208230%20Hartberg!5e0!3m2!1sde!2sat!4v00000000000"
            width="100%"
            height="100%"
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>
      </FadeIn>

    </div>
  );
}

