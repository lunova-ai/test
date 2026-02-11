import Image from "next/image";
import type { GalleryItem } from "./gallery";

export function Lightbox({
  item,
  onClose,
  onPrev,
  onNext,
}: {
  item: GalleryItem;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Bildansicht"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl rounded-3xl overflow-hidden border border-white/15 bg-black"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <Image
            src={item.src}
            alt={item.alt}
            width={1600}
            height={1100}
            className="w-full h-[70vh] object-contain bg-black"
          />

          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 rounded-full bg-white/10 hover:bg-white/20 text-white px-3 py-2 text-sm backdrop-blur"
            aria-label="Schließen"
          >
            ✕
          </button>

          <button
            type="button"
            onClick={onPrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/10 hover:bg-white/20 text-white px-3 py-2 text-sm backdrop-blur"
            aria-label="Vorheriges Bild"
          >
            ←
          </button>

          <button
            type="button"
            onClick={onNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/10 hover:bg-white/20 text-white px-3 py-2 text-sm backdrop-blur"
            aria-label="Nächstes Bild"
          >
            →
          </button>
        </div>

        <div className="px-5 py-4 bg-black/60 text-white border-t border-white/10">
          <p className="font-cinzel text-lg leading-tight">{item.title}</p>
          <p className="text-sm opacity-90 mt-1">{item.subtitle}</p>
        </div>
      </div>
    </div>
  );
}
