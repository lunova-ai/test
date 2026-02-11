import FadeIn from "./FadeIn";
import Image from "next/image";
import type { GalleryItem } from "./gallery";

export function GallerySection({
  gallery,
  onOpen,
}: {
  gallery: GalleryItem[];
  onOpen: (idx: number) => void;
}) {
  return (
    <section
      id="galerie"
      className="relative w-full border-b border-[#e1ddd8] bg-[var(--cream)] scroll-mt-24"
    >
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[var(--brand)]/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-[var(--brand)]/15 blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6 py-16 md:py-20">
        <FadeIn>
          <p className="text-xs tracking-[0.28em] uppercase text-[var(--brand)]">
            Unsere Klassiker
          </p>
        </FadeIn>

        <FadeIn>
          <div className="mt-2 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-cinzel tracking-tight text-[var(--dark)]">
                Ein Blick, der Appetit macht.
              </h2>
              <p className="mt-3 text-base md:text-lg text-[#555] max-w-2xl">
                Vier Gerichte, vier Stimmungen – ein kleiner Vorgeschmack aus unserer Küche.
              </p>
            </div>
          </div>
        </FadeIn>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {gallery.map((item, idx) => (
            <FadeIn key={item.src}>
              <button
                type="button"
                onClick={() => onOpen(idx)}
                className="group relative w-full aspect-[4/3] rounded-3xl overflow-hidden border border-[#e5e1da] bg-white/60 shadow-[0_22px_55px_rgba(0,0,0,0.09)] focus:outline-none focus:ring-2 focus:ring-[var(--brand)] transition-transform duration-300 hover:-translate-y-[3px]"
                aria-label={`${item.title} groß ansehen`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 1024px) 40vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-left text-white">
                  <p className="text-xs tracking-[0.22em] uppercase opacity-90">{item.title}</p>
                  <p className="mt-1 text-sm opacity-90">{item.subtitle}</p>
                </div>
              </button>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
