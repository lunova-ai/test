import type { CSSProperties } from "react";

export function GirlsNightOverlay({
  open,
  animateBubbles,
  onClose,
}: {
  open: boolean;
  animateBubbles: boolean;
  onClose: () => void;
}) {
  if (!open) return null;

  return (
    <div
      className="overlay overlay--glow"
      role="dialog"
      aria-modal="true"
      aria-label="Mädlsabend Details"
      onClick={onClose}
    >
      <button
        type="button"
        className="overlay-close overlay-close--glass"
        aria-label="Schließen"
        onClick={onClose}
      >
        ✕
      </button>

      <div className="popup popup--glass" onClick={(e) => e.stopPropagation()}>
        <p className="girls-eyebrow text-xs tracking-[0.28em] uppercase">
          Mädlsabend
        </p>

        <h2 className="girls-title mt-2 text-2xl md:text-3xl font-cinzel tracking-tight">
          🍸 Jeden Donnerstag
        </h2>

        <p className="girls-text mt-3 text-base md:text-lg leading-relaxed">
          Ab <span className="font-semibold">16 Uhr</span> – gratis Cocktail{" "}
          <span className="girls-muted">(mit &amp; ohne Alk.)</span> bei uns an der Bar.
        </p>

        <div className="girls-box mt-5 text-left">
          <p className="girls-text text-sm">
            📞 Reservierung:{" "}
            <a className="girls-link" href="tel:+436649238843">
              +43 664 923 8843
            </a>
          </p>
          <p className="girls-muted mt-1 text-sm">
            Oder schreib uns per WhatsApp / Kontaktformular.
          </p>
        </div>

        <div className="mt-6 flex flex-wrap gap-3 justify-center">
          <a href="tel:+436649238843" className="btn-brand text-sm md:text-base">
            Jetzt anrufen
          </a>
          <a href="/kontakt" className="btn-outline text-sm md:text-base">
            Anfrage senden
          </a>
        </div>

        <p className="girls-muted mt-4 text-xs">
          Tipp: ESC oder Klick außerhalb schließt das Fenster.
        </p>
      </div>

      {animateBubbles && (
        <div className="bubble-layer" aria-hidden="true">
          {Array.from({ length: 14 }).map((_, i) => {
            const size = 18 + Math.random() * 42;
            const left = `${Math.random() * 92}%`;
            const duration = `${7 + Math.random() * 6}s`;
            const drift = `${20 + Math.random() * 60}px`;
            const delay = `${Math.random() * 1.5}s`;
            return (
              <div
                key={i}
                className="bubble"
                style={
                  {
                    left,
                    width: `${size}px`,
                    height: `${size}px`,
                    animationDuration: duration,
                    animationDelay: delay,
                    ["--drift" as any]: drift,
                  } as CSSProperties
                }
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
