"use client";

import FadeIn from "../components/FadeIn";

export default function Kontakt() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20 space-y-24">

      {/* ------------------------------------------------------
         CINZEL ZITAT
      ------------------------------------------------------ */}
      <FadeIn>
        <div className="text-center">
          <h2 className="font-cinzel text-3xl md:text-4xl mb-4 text-[var(--dark)]">
            „Ein Abend wie bei Freunden – mitten in Hartberg.“
          </h2>

          <div className="w-24 h-[1px] bg-[rgba(237,146,97,0.35)] mx-auto"></div>
        </div>
      </FadeIn>


      {/* ------------------------------------------------------
         KURZINFO — EDELE LINIENSYMBOLE
      ------------------------------------------------------ */}
      <FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-center">

          {/* Ort */}
          <div className="flex flex-col items-center gap-3">
            {/* Custom minimal line-icon */}
            <svg width="28" height="28" stroke="var(--brand)" strokeWidth="1.5" fill="none">
              <path d="M14 3 C8 3 5 7 5 11 C5 16 14 25 14 25 C14 25 23 16 23 11 C23 7 20 3 14 3 Z" />
              <circle cx="14" cy="11" r="3" />
            </svg>
            <p className="text-sm text-[#555]">Hauptplatz 5 · 8230 Hartberg</p>
          </div>

          {/* Telefon */}
          <div className="flex flex-col items-center gap-3">
            <svg width="28" height="28" stroke="var(--brand)" strokeWidth="1.5" fill="none">
              <path d="M7 4 L7 8 L11 10 L13 8 L17 12 L15 14 L17 18 L21 18" />
            </svg>
            <p className="text-sm text-[#555]">+43 6649238843</p>
          </div>

          {/* WhatsApp */}
          <div className="flex flex-col items-center gap-3">
            <svg width="28" height="28" stroke="var(--brand)" strokeWidth="1.5" fill="none">
              <circle cx="14" cy="14" r="9" />
              <path d="M10 10 C11 14 14 16 16 16" />
            </svg>
            <p className="text-sm text-[#555]">WhatsApp Nachricht</p>
          </div>

          {/* Öffnungszeiten */}
          <div className="flex flex-col items-center gap-3">
            <svg width="28" height="28" stroke="var(--brand)" strokeWidth="1.5" fill="none">
              <circle cx="14" cy="14" r="9" />
              <path d="M14 8 L14 14 L18 16" />
            </svg>
            <p className="text-sm text-[#555]">Täglich geöffnet (Di & Mi Ruhetag)</p>
          </div>

        </div>

        {/* Trennlinie */}
        <div className="mt-16 w-full h-[1px] bg-[rgba(237,146,97,0.35)]"></div>
      </FadeIn>




      {/* ------------------------------------------------------
         TWO COLUMN LAYOUT — Kontakt links / Karte rechts
      ------------------------------------------------------ */}
      <FadeIn>
        <div className="grid md:grid-cols-2 gap-16">

          {/* LEFT — KONTAKTKARTE */}
          <div className="space-y-8">

            <h2 className="text-2xl md:text-3xl font-cinzel text-[var(--dark)]">
              Kontakt & Reservierung
            </h2>

            <div className="space-y-6 text-lg text-[#555] leading-relaxed">

              <div>
                <p className="font-semibold text-[var(--dark)]">Adresse</p>
                <p>Hauptplatz 5<br />8230 Hartberg</p>
              </div>

              <div>
                <p className="font-semibold text-[var(--dark)]">Telefon</p>
                <a
                  href="tel:+436649238843"
                  className="text-[var(--brand)] hover:text-[var(--brand-dark)] transition font-medium"
                >
                  +43 6649238843
                </a>
              </div>

              <div>
                <p className="font-semibold text-[var(--dark)]">WhatsApp</p>
                <a
                  href="https://wa.me/436649238843"
                  target="_blank"
                  className="text-[var(--brand)] hover:text-[var(--brand-dark)] transition font-medium"
                >
                  Nachricht senden →
                </a>
              </div>

              <div>
                <p className="font-semibold text-[var(--dark)]">Öffnungszeiten</p>
                <p>
                  Mo, Do, Fr & Sa: 16:00 – 24:00 Uhr<br />
                  So: 10:30 – 20:00 Uhr<br />
                  Di & Mi: Ruhetag
                </p>
              </div>

            </div>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-6 pt-6">
              <a href="tel:+436649238843" className="btn-brand text-base md:text-lg px-8 py-4">
                Jetzt anrufen
              </a>

              <a
                href="https://wa.me/436649238843"
                target="_blank"
                className="
                  px-8 py-4 rounded-lg border border-[var(--dark)] 
                  text-[var(--dark)] font-semibold
                  hover:bg-[var(--dark)] hover:text-white 
                  transition text-base md:text-lg
                "
              >
                WhatsApp schreiben
              </a>
            </div>
          </div>


          {/* RIGHT — MAP */}
          <div className="rounded-3xl overflow-hidden border border-[#e5e1da] h-[460px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2726.9168229698934!2d15.973!3d47.281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476e3dcdee1127ad%3A0x3af37c490eb5c675!2sHauptplatz%205%2C%208230%20Hartberg!5e0!3m2!1sde!2sat!4v00000000000"
              width="100%"
              height="100%"
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>

        </div>
      </FadeIn>




      {/* ------------------------------------------------------
         ABSCHLUSS – „Reservieren lohnt sich…“
      ------------------------------------------------------ */}
      <FadeIn>
        <div className="text-center space-y-4 mt-16">
          <h3 className="font-cinzel text-2xl text-[var(--dark)]">
            Reservieren lohnt sich.
          </h3>

          <p className="text-lg text-[#555] max-w-xl mx-auto leading-relaxed">
            Egal ob Date, Familienrunde oder After-Work – wir freuen uns auf deinen Besuch.
          </p>

          <div className="w-20 h-[1px] bg-[rgba(237,146,97,0.35)] mx-auto"></div>
        </div>
      </FadeIn>

    </div>
  );
}



