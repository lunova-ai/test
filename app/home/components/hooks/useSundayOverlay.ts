import { useEffect } from "react";

export function useSundayOverlay(opts: {
  showSunday: boolean;
  setShowSunday: (v: boolean) => void;
  setAnimateSun: (v: boolean) => void;
  durationMs?: number;
}) {
  const { showSunday, setShowSunday, setAnimateSun, durationMs = 8500 } = opts;

  useEffect(() => {
    if (!showSunday) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setShowSunday(false);
    };

    window.addEventListener("keydown", onKeyDown);

    // Animation starten
    setAnimateSun(true);

    // Nach durationMs stoppen (Overlay bleibt offen)
    const timer = window.setTimeout(() => setAnimateSun(false), durationMs);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.clearTimeout(timer);
      // Wichtig: beim Schließen sofort stoppen
      setAnimateSun(false);
    };
  }, [showSunday, setShowSunday, setAnimateSun, durationMs]);
}

