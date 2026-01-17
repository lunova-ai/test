"use client";

import FadeIn from "../components/FadeIn";

export default function Kontakt() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16 md:py-20 space-y-24">
      {/* ------------------------------------------------------
         CINZEL ZITAT
      ------------------------------------------------------ */}
      <FadeIn>
        <div className="text-center">
          <h2 className="font-cinzel text-3xl md:text-4xl mb-4 text-[var(--dark)]">
            „Ein Abend wie bei Freunden – mitten in Hartberg.“
          </h2>

          <div className="w-24 h-[1px] bg-[rgba(237,146,97,0.35)] mx-auto" />
        </div>
      </FadeIn>

      {/* ------------------------------------------------------
         KURZINFO — EDELE LINIENSYMBOLE
      ------------------------------------------------------ */}
      <FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-center">
          {/* Adresse */}
          <div className="flex flex-col items-center gap-3">
            <svg
              width="28"
              height="28"
              stroke="var(--brand)"
              strokeWidth="1.5"
              fill="none"
            >
              <rect x="6" y="6" width="16" height="16" rx="3" />
              <path d="M10 14 L14 10 L18 14" />
              <path d="M10 18 H18" />
            </svg>
            <p className="text-sm text-[#555]">
              Hauptplatz 5 · 8230 Hartberg
              <br />
              Mitten in der Altstadt.
            </p>
          </div>

          {/* Telefon */}
          <div className="flex flex-col items-center gap-3">
            <svg
              width="28"
              height="28"
              stroke="var(--brand)"
              strokeWidth="1.5"
              fill="none"
            >
              <path d="M9 5 L7 7 C7 15 13 21 21 21 L23 19 L20 15 L16 16 L12 12 L13 8 Z" />
            </svg>
            <p className="text-sm text-[#555]">+43 664 9238843</p>
          </div>

          {/* WhatsApp */}
          <div className="flex flex-col items-center gap-3">
            <svg
              width="28"
              height="28"
              stroke="var(--brand)"
              strokeWidth="1.5"
              fill="none"
            >
              <circle cx="14" cy="14" r="9" />
              <path d="M10 10 C11 14 14 16 16 16" />
            </svg>
            <p className="text-sm text-[#555]">WhatsApp Nachricht</p>
          </div>

          {/* Öffnungszeiten */}
          <div className="flex flex-col items-center gap-3">
            <svg
              width="28"
              height="28"
              stroke="var(--brand)"
              strokeWidth="1.5"
              fill="none"
            >
              <circle cx="14" cy="14" r="9" />
              <path d="M14 10 V14 L18 16" />
            </svg>
            <p className="text-sm text-[#555]">
              Mo, Do, Fr &amp; Sa ab 16 Uhr,
              <br />
              So von 11–19 Uhr · Di &amp; Mi Ruhetag
            </p>
          </div>
        </div>

        {/* Trennlinie */}
        <div className="mt-16 w-full h-[1px] bg-[rgba(237,146,97,0.35)]" />
      </FadeIn>

      {/* ------------------------------------------------------
         TWO COLUMN LAYOUT — Kontakt links / Karte rechts
      ------------------------------------------------------ */}
      <FadeIn>
        <div className="grid md:grid-cols-2 gap-16">
          {/* LEFT — KONTAKTKARTE */}
          <div className="space-y-8">
            <h2 className="text-2xl md:text-3xl font-cinzel text-[var(--dark)]">
              Kontakt &amp; Reservierung
            </h2>

            <div className="space-y-6 text-lg text-[#555] leading-relaxed">
              <div>
                <p className="font-semibold text-[var(--dark)]">Adresse</p>
                <p>
                  Hauptplatz 5
                  <br />
                  8230 Hartberg
                </p>
              </div>

              <div>
                <p className="font-semibold text-[var(--dark)]">Telefon</p>
                <a
                  href="tel:+436649238843"
                  className="text-[var(--brand)] hover:text-[var(--brand-dark)] transition font-medium"
                >
                  +43 664 9238843
                </a>
              </div>

              <div>
                <p className="font-semibold text-[var(--dark)]">WhatsApp</p>
                <a
                  href="https://wa.me/436649238843"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--brand)] hover:text-[var(--brand-dark)] transition font-medium"
                >
                  Nachricht senden →
                </a>
              </div>

              <div>
                <p className="font-semibold text-[var(--dark)]">
                  Öffnungszeiten
                </p>
                <p>
                  Mo, Do, Fr &amp; Sa: 16:00 – 24:00 Uhr
                  <br />
                  So: 11:00 – 19:00 Uhr
                  <br />
                  Di &amp; Mi: Ruhetag
                </p>
              </div>
            </div>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-6 pt-6">
              <a
                href="tel:+436649238843"
                className="btn-brand text-base md:text-lg px-8 py-4"
              >
                Jetzt anrufen
              </a>

              <a
                href="https://wa.me/436649238843"
                target="_blank"
                rel="noopener noreferrer"
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
          <div className="rounded-3xl overflow-hidden border border-[#e5e1da] h-[320px] md:h-[460px]">
            <iframe
              src="https://www.google.com/maps?q=Hauptplatz%205,%208230%20Hartberg&output=embed"
              width="100%"
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </FadeIn>

      {/* ------------------------------------------------------
         ABSCHLUSS – „Reservieren lohnt sich…“
      ------------------------------------------------------ */}
      <FadeIn>
        <div className="text-center space-y-4 mt-10 md:mt-16">
          <h3 className="font-cinzel text-2xl text-[var(--dark)]">
            Reservieren lohnt sich.
          </h3>

          <p className="text-lg text-[#555] max-w-xl mx-auto leading-relaxed">
            Egal ob Date, Familienrunde oder After-Work – wir freuen uns auf
            deinen Besuch.
          </p>

          <div className="w-20 h-[1px] bg-[rgba(237,146,97,0.35)] mx-auto" />
        </div>
      </FadeIn>
    </div>
  );
}




