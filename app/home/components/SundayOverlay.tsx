import { useEffect, useMemo, type CSSProperties } from "react";

export function SundayOverlay({
  open,
  animateSun,
  onClose,
}: {
  open: boolean;
  animateSun: boolean;
  onClose: () => void;
}) {
  // 🔒 Globales Overlay-Flag
  useEffect(() => {
    if (!open) return;

    const prev = document.body.dataset.overlay;
    document.body.dataset.overlay = "open";
    window.dispatchEvent(new Event("overlay:change"));

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);

      if (prev === undefined) delete document.body.dataset.overlay;
      else document.body.dataset.overlay = prev;

      window.dispatchEvent(new Event("overlay:change"));
    };
  }, [open, onClose]);

  const particles = useMemo(() => {
    if (!animateSun) return [];

    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

    const count = reduceMotion ? 8 : 18;

    return Array.from({ length: count }).map((_, i) => {
      const size = 10 + Math.random() * 34;

      return {
        key: i,
        style: {
          left: `${Math.random() * 96}%`,
          top: `${-10 - Math.random() * 25}%`,
          width: `${size}px`,
          height: `${size}px`,
          opacity: `${0.25 + Math.random() * 0.35}`,
          animationDuration: `${7 + Math.random() * 7}s`,
          animationDelay: `${Math.random() * 1.8}s`,
          // leichter Drift
          ["--dx" as any]: `${-22 + Math.random() * 44}px`,
        } as CSSProperties,
      };
    });
  }, [animateSun]);

  if (!open) return null;

  return (
    <div
      className="overlay overlay--glow"
      role="dialog"
      aria-modal="true"
      aria-label="Sonntag Details"
      onClick={onClose}
    >
      <button
        type="button"
        className="overlay-close overlay-close--glass"
        aria-label="Schließen"
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
      >
        ✕
      </button>

      <div className="popup popup--glass" onClick={(e) => e.stopPropagation()}>
        <p className="text-xs tracking-[0.28em] uppercase text-[var(--brand)]">
          Sonntag
        </p>

        <h2 className="mt-2 text-2xl md:text-3xl font-cinzel text-[var(--dark)]">
          ☀️ Durchgehend Küche
        </h2>

        <p className="mt-3 text-base md:text-lg leading-relaxed text-[#555]">
          Jeden Sonntag von <span className="font-semibold">11–19 Uhr</span> –
          perfekt für einen entspannten Sonntag{" "}
          <span className="text-[#666]">(ohne Küchenpause)</span>.
        </p>

        <div className="mt-5 text-left rounded-2xl border border-white/10 bg-black/20 backdrop-blur px-4 py-3">
          <p className="text-sm text-white/90">
            📞 Reservierung:{" "}
            <a className="underline underline-offset-2" href="tel:+436649238843">
              +43 664 923 8843
            </a>
          </p>
          <p className="mt-1 text-sm text-white/70">
            Oder schreib uns per WhatsApp / Kontaktformular.
          </p>
        </div>

        <div className="mt-6 flex flex-wrap gap-3 justify-center sticky bottom-0 bg-black/35 backdrop-blur -mx-[1.1rem] px-[1.1rem] py-3 border-t border-white/10">
          <a href="tel:+436649238843" className="btn-brand">
            Jetzt anrufen
          </a>
          <a href="/kontakt" className="btn-outline">
            Anfrage senden
          </a>
        </div>

        <p className="mt-4 text-xs text-white/70">
          Tipp: ESC oder Klick außerhalb schließt das Fenster.
        </p>
      </div>

      {animateSun && (
        <div className="sun-layer" aria-hidden="true">
          {particles.map((p) => (
            <div key={p.key} className="sun-particle" style={p.style} />
          ))}
        </div>
      )}
    </div>
  );
}

