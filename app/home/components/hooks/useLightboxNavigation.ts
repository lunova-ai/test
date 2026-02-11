import { useEffect } from "react";

export function useLightboxNavigation(opts: {
  active: number | null;
  length: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const { active, length, onClose, onPrev, onNext } = opts;

  useEffect(() => {
    if (active === null) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active, length, onClose, onPrev, onNext]);
}
