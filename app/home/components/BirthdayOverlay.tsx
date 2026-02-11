import type { CSSProperties } from "react";

export function BirthdayOverlay({
  open,
  animateBalloons,
  onClose,
}: {
  open: boolean;
  animateBalloons: boolean;
  onClose: () => void;
}) {
  if (!open) return null;

  const colors = [
    "#ff3b3b",
    "#ffcc00",
    "#3b82ff",
    "#22c55e",
    "#ff66d9",
    "#a855f7",
    "#ff7a00",
  ];

  return (
    <div
      className="overlay overlay--dark"
      role="dialog"
      aria-modal="true"
      aria-label="Kindergeburtstag Details"
      onClick={onClose}
    >
      <button
        type="button"
        className="overlay-close overlay-close--light"
        aria-label="Schließen"
        onClick={onClose}
      >
        ✕
      </button>

      <div className="popup popup--light" onClick={(e) => e.stopPropagation()}>
        <p className="text-xs tracking-[0.28em] uppercase text-[var(--brand)]">
          Kindergeburtstag
        </p>

        <h2 className="mt-2 text-2xl md:text-3xl font-cinzel tracking-tight text-[var(--dark)]">
          🎈 Pizza Spezialpreis
        </h2>

        <p className="mt-3 text-base md:text-lg text-[#555] leading-relaxed">
          Ab <span className="font-semibold text-[var(--dark)]">5 Kindern</span>{" "}
          – unkompliziert feiern, essen &amp; Spaß haben.
        </p>

        <div className="mt-5 rounded-2xl border border-[#e5e1da] bg-white/80 p-4 text-left">
          <p className="text-sm text-[#555]">
            📞 Reservierung:{" "}
            <a
              className="font-semibold text-[var(--dark)] hover:text-[var(--brand-dark)]"
              href="tel:+436649238843"
            >
              +43 664 923 8843
            </a>
          </p>
          <p className="mt-1 text-sm text-[#666]">
            Schreib uns gerne auch per WhatsApp oder über das Kontaktformular.
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

        <p className="mt-4 text-xs text-[#777]">
          Tipp: ESC oder Klick außerhalb schließt das Fenster.
        </p>
      </div>

      {animateBalloons && (
        <div className="balloon-layer" aria-hidden="true">
          {Array.from({ length: 14 }).map((_, i) => {
            const drift = `${20 + Math.random() * 55}px`;
            const duration = `${6 + Math.random() * 4}s`;
            const left = `${Math.random() * 92}%`;
            const color = colors[Math.floor(Math.random() * colors.length)];
            return (
              <div
                key={i}
                className="balloon"
                style={
                  {
                    left,
                    animationDuration: duration,
                    ["--drift" as any]: drift,
                    ["--balloon" as any]: color,
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
