import { useEffect, useMemo, type CSSProperties } from "react";

export function BirthdayOverlay({
  open,
  animateBalloons,
  onClose,
}: {
  open: boolean;
  animateBalloons: boolean;
  onClose: () => void;
}) {
  // Farben sind konstant – kein Hook nötig, aber useMemo ist ok (und muss immer laufen!)
  const colors = useMemo(
    () => ["#ff3b3b", "#ffcc00", "#3b82ff", "#22c55e", "#ff66d9", "#a855f7", "#ff7a00"],
    []
  );

  // Ballons: deterministisch (pro animateBalloons toggle) + reduced motion
  const balloons = useMemo(() => {
    if (!animateBalloons) return [];

    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

    const count = reduceMotion ? 7 : 14;

    return Array.from({ length: count }).map((_, i) => {
      const color = colors[Math.floor(Math.random() * colors.length)];

      return {
        key: i,
        style: {
          left: `${Math.random() * 92}%`,
          animationDuration: `${7 + Math.random() * 5}s`,
          animationDelay: `${Math.random() * 1.5}s`,
          ["--balloon" as any]: color,

          ["--dx1" as any]: `${-60 + Math.random() * 120}px`,
          ["--dx2" as any]: `${-80 + Math.random() * 160}px`,
          ["--dx3" as any]: `${-70 + Math.random() * 140}px`,

          ["--dy1" as any]: `${-40 + Math.random() * 60}px`,
          ["--dy2" as any]: `${-60 + Math.random() * 90}px`,
          ["--dy3" as any]: `${-50 + Math.random() * 80}px`,

          ["--rot" as any]: `${-20 + Math.random() * 40}deg`,
        } as CSSProperties,
      };
    });
  }, [animateBalloons, colors]);

  // 🔒 Globales Overlay-Flag + ESC (nur wenn open)
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

  // ✅ erst NACH allen Hooks conditional return
  if (!open) return null;

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
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
      >
        ✕
      </button>

      <div className="popup popup--light" onClick={(e) => e.stopPropagation()}>
        <p className="text-xs tracking-[0.28em] uppercase text-[var(--brand)]">
          Kindergeburtstag
        </p>

        <h2 className="mt-2 text-2xl md:text-3xl font-cinzel tracking-tight">
          🎈 Pizza Spezialpreis
        </h2>

        <p className="mt-3 text-base md:text-lg text-[#555] leading-relaxed">
          Ab <span className="font-semibold text-[var(--dark)]">5 Kindern</span> – feiern, essen &amp; Spaß haben.
        </p>

        <div className="mt-5 rounded-2xl border border-[#e5e1da] bg-white/80 p-4 text-left">
          <p className="text-sm text-[#555]">
            📞 Reservierung:{" "}
            <a
              className="font-semibold hover:text-[var(--brand-dark)]"
              href="tel:+436649238843"
            >
              +43 664 923 8843
            </a>
          </p>
          <p className="mt-1 text-sm text-[#666]">
            Schreib uns gerne auch per WhatsApp oder Kontaktformular.
          </p>
        </div>

        <div className="mt-6 flex flex-wrap gap-3 justify-center sticky bottom-0 bg-white/95 -mx-[1.1rem] px-[1.1rem] py-3 border-t border-[#eee]">
          <a href="tel:+436649238843" className="btn-brand">
            Jetzt anrufen
          </a>
          <a href="/kontakt" className="btn-outline">
            Anfrage senden
          </a>
        </div>

        <p className="mt-4 text-xs text-[#777]">
          Tipp: ESC oder Klick außerhalb schließt das Fenster.
        </p>
      </div>

      {animateBalloons && (
        <div className="balloon-layer" aria-hidden="true">
          {balloons.map((b) => (
            <div key={b.key} className="balloon balloon-chaos" style={b.style} />
          ))}
        </div>
      )}
    </div>
  );
}

