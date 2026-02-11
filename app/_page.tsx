"use client";

import FadeIn from "./home/components/FadeIn";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

export default function Page() {
  const gallery = useMemo(
    () => [
      {
        src: "/images/home/gallery-1.jpg",
        alt: "Mediterranes Gericht mit Polenta und Gemüse auf schwarzem Teller.",
        title: "Holzofen-Klassiker",
        subtitle: "Knackig, saftig, ehrlich",
      },
      {
        src: "/images/home/gallery-2.jpg",
        alt: "Pasta mit Tomatensauce, Topping und Rucola.",
        title: "Pasta & Sauce",
        subtitle: "Hausgemacht wie in Italien",
      },
      {
        src: "/images/home/gallery-3.jpg",
        alt: "Lasagne in einem Keramiktopf vor dem Holzofen.",
        title: "Ofen & Feuer",
        subtitle: "Wärme, Aroma, Crunch",
      },
      {
        src: "/images/home/gallery-4.jpg",
        alt: "Fritto misto mit Meeresfrüchten, Zitronen und Dip.",
        title: "Fritto & Teilen",
        subtitle: "Perfekt für die Runde",
      },
    ],
    []
  );

  const [active, setActive] = useState<number | null>(null);

  // Keyboard-Navigation für Lightbox
  useEffect(() => {
    if (active === null) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowLeft") {
        setActive((v) =>
          v === null ? 0 : (v - 1 + gallery.length) % gallery.length
        );
      }
      if (e.key === "ArrowRight") {
        setActive((v) => (v === null ? 0 : (v + 1) % gallery.length));
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active, gallery.length]);

  const close = () => setActive(null);
  const prev = () =>
    setActive((v) => (v === null ? 0 : (v - 1 + gallery.length) % gallery.length));
  const next = () =>
    setActive((v) => (v === null ? 0 : (v + 1) % gallery.length));

  return (
    <div className="w-full flex flex-col bg-[var(--cream)]">
      {/* ------------------------------------------------------
         HERO – Split: Text links, Pizza-Bild rechts
      ------------------------------------------------------ */}
      <section
        id="home"
        className="relative w-full border-b border-[#e1ddd8] bg-[var(--cream)] scroll-mt-24"
      >
        {/* dezente Stucco-/Paper-Textur */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.55]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(225,122,74,0.12),transparent_55%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_30%,rgba(0,0,0,0.04),transparent_55%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_45%_90%,rgba(225,122,74,0.08),transparent_60%)]" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 py-16 md:py-24 grid gap-12 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-start">
          <FadeIn>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <p className="text-xs tracking-[0.28em] uppercase text-[var(--brand)]">
                  Hauptplatz 5 · 8230 Hartberg
                </p>

                <h1 className="text-4xl md:text-5xl font-cinzel tracking-tight leading-tight text-[var(--dark)]">
                  Deine Bar, deine Küche,
                  <br />
                  dein Wohnzimmer in Hartberg.
                </h1>
              </div>

              <p className="text-lg md:text-xl text-[#555] leading-relaxed max-w-xl">
                Mediterrane Küche trifft steirische Herzlichkeit – Aperitivo an
                der Bar, Holzofenpizza &amp; Pasta, gemütliche Abende mit
                Freunden.
              </p>

              <div className="h-px w-24 bg-[var(--brand)] mt-1" />

              {/* Highlights-Card */}
              <div className="rounded-2xl border border-[#e5e1da] bg-white/75 px-5 py-5 md:px-6 md:py-6 shadow-[0_18px_45px_rgba(0,0,0,0.04)]">
                <p className="text-xs tracking-[0.22em] uppercase text-[var(--brand)] mb-4">
                  Highlights
                </p>

                <div className="grid gap-4 md:grid-cols-3">
                  <HighlightTile
                    kicker="Jeden Sonntag"
                    title="Durchgehend Küche"
                    meta="11–19 Uhr"
                    text="Perfekt für einen entspannten Sonntag – ohne Küchenpause."
                    icon="calendar"
                  />

                  <HighlightTile
                    kicker="Neu"
                    title="Holzofenpizza zum Mitnehmen"
                    meta="Abholung"
                    text="Unsere Pizza aus dem Holzofen gibt’s ab sofort auch zum Mitnehmen."
                    icon="pizza"
                  />

                  <HighlightTile
                    kicker="Saison"
                    title="Italien im Winter genießen"
                    meta="warm & gemütlich"
                    text="Komm zu uns und genieß mediterranen Genuss, auch im Winter."
                    icon="snow"
                  />
                </div>

                <div className="mt-5 text-sm md:text-base text-[#555]">
                  <p>Dann komm zu uns – wir freuen uns auf dich.</p>
                  <p className="mt-1 text-xs md:text-sm text-[#666]">
                    Fragen? Schreib uns gerne per WhatsApp oder ruf einfach an.
                  </p>
                </div>

                <div className="mt-5 flex flex-wrap gap-3">
                  <a href="/speisekarte" className="btn-brand text-sm md:text-base">
                    Speisekarte ansehen
                  </a>
                  <a href="/kontakt" className="btn-outline text-sm md:text-base">
                    Reservieren
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Pizza-Hero rechts, leicht schräg */}
          <FadeIn>
            <div className="relative flex justify-center md:justify-end">
              <div className="relative">
                <div
                  className="relative rounded-[26px] overflow-hidden border border-[#e5e1da] shadow-[0_35px_70px_rgba(0,0,0,0.12)] bg-black/10"
                  style={{ transform: "rotate(6deg) translateZ(0)" }}
                >
                  <Image
                    src="/images/home/hero.png"
                    alt="Holzofenpizza auf Holzbrett."
                    width={960}
                    height={960}
                    priority
                    sizes="(min-width: 1024px) 480px, (min-width: 768px) 60vw, 90vw"
                    className="h-[320px] md:h-[520px] w-full object-cover"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-black/5 to-transparent" />
                </div>

                {/* feiner Rahmen */}
                <div
                  className="pointer-events-none absolute -inset-3 rounded-[30px] border border-white/55 opacity-50"
                  style={{ transform: "rotate(6deg)" }}
                />

                {/* Badge unten */}
                <div
                  className="absolute -bottom-4 left-6 right-6 md:left-10 md:right-10"
                  style={{ transform: "rotate(6deg)" }}
                >
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/85 backdrop-blur px-4 py-2 text-xs md:text-sm text-[var(--dark)] border border-[#e5e1da] shadow-[0_18px_40px_rgba(0,0,0,0.08)]">
                    <span className="text-[11px] tracking-[0.22em] uppercase text-[var(--brand)]">
                      Holzofen
                    </span>
                    <span className="font-semibold">
                      Frisch. Knusprig. Italienisch.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ------------------------------------------------------
         3er-Info-Band
      ------------------------------------------------------ */}
      <section className="w-full bg-[var(--brand)] text-[var(--white)]">
        <div className="max-w-6xl mx-auto px-6 py-12 grid gap-10 md:grid-cols-3 text-sm md:text-base">
          <FadeIn>
            <div>
              <p className="text-xs tracking-[0.25em] uppercase opacity-80 mb-2">
                Küche
              </p>
              <h3 className="font-cinzel text-lg mb-1">
                Holzofenpizza &amp; Pasta
              </h3>
              <p className="opacity-90">Knusprig, mediterran, hausgemacht.</p>
            </div>
          </FadeIn>

          <FadeIn>
            <div>
              <p className="text-xs tracking-[0.25em] uppercase opacity-80 mb-2">
                Bar
              </p>
              <h3 className="font-cinzel text-lg mb-1">Aperitivo &amp; Drinks</h3>
              <p className="opacity-90">Spritz, Wein, Cocktails &amp; Vibes.</p>
            </div>
          </FadeIn>

          <FadeIn>
            <div>
              <p className="text-xs tracking-[0.25em] uppercase opacity-80 mb-2">
                Events
              </p>
              <h3 className="font-cinzel text-lg mb-1">
                Feiern &amp; Veranstaltungen
              </h3>
              <p className="opacity-90">Für Firmenfeiern &amp; private Anlässe.</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ------------------------------------------------------
         Galerie – Unsere Klassiker
      ------------------------------------------------------ */}
      <section
        id="galerie"
        className="relative w-full border-b border-[#e1ddd8] bg-[var(--cream)] scroll-mt-24"
      >
        {/* weiche Glows im Hintergrund */}
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
                  Vier Gerichte, vier Stimmungen – ein kleiner Vorgeschmack aus
                  unserer Küche.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* 2×2 Grid – ruhiges Layout, alle Karten gleich groß */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {gallery.map((item, idx) => (
              <FadeIn key={item.src}>
                <button
                  type="button"
                  onClick={() => setActive(idx)}
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
                    <p className="text-xs tracking-[0.22em] uppercase opacity-90">
                      {item.title}
                    </p>
                    <p className="mt-1 text-sm opacity-90">{item.subtitle}</p>
                  </div>
                </button>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Lightbox-Overlay */}
        {active !== null && gallery[active] && (
          <div
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-label="Bildansicht"
            onClick={close}
          >
            <div
              className="relative w-full max-w-5xl rounded-3xl overflow-hidden border border-white/15 bg-black"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <Image
                  src={gallery[active].src}
                  alt={gallery[active].alt}
                  width={1600}
                  height={1100}
                  className="w-full h-[70vh] object-contain bg-black"
                />

                <button
                  type="button"
                  onClick={close}
                  className="absolute top-4 right-4 rounded-full bg-white/10 hover:bg-white/20 text-white px-3 py-2 text-sm backdrop-blur"
                  aria-label="Schließen"
                >
                  ✕
                </button>

                <button
                  type="button"
                  onClick={prev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/10 hover:bg-white/20 text-white px-3 py-2 text-sm backdrop-blur"
                  aria-label="Vorheriges Bild"
                >
                  ←
                </button>

                <button
                  type="button"
                  onClick={next}
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/10 hover:bg-white/20 text-white px-3 py-2 text-sm backdrop-blur"
                  aria-label="Nächstes Bild"
                >
                  →
                </button>
              </div>

              <div className="px-5 py-4 bg-black/60 text-white border-t border-white/10">
                <p className="font-cinzel text-lg leading-tight">
                  {gallery[active].title}
                </p>
                <p className="text-sm opacity-90 mt-1">
                  {gallery[active].subtitle}
                </p>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* ------------------------------------------------------
         Intro / Story
      ------------------------------------------------------ */}
      <section
        id="intro"
        className="max-w-6xl mx-auto px-6 py-20 scroll-mt-24"
      >
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-cinzel tracking-tight mb-4 text-[var(--dark)]">
            Italienisches Ristorante mit Herz &amp; Charakter
          </h2>
        </FadeIn>

        <FadeIn>
          <p className="text-xl text-[#444] leading-relaxed max-w-3xl">
            La mia Casa steht für Atmosphäre, Herzlichkeit und mediterranen
            Genuss. Hausgemachte Pasta, Holzofenpizza, Antipasti – ein Abend
            wie bei Freunden.
          </p>
        </FadeIn>
      </section>

      {/* ------------------------------------------------------
         Kleine Feature-Karten
      ------------------------------------------------------ */}
      <section
        id="kueche"
        className="max-w-6xl mx-auto px-6 pb-20 grid md:grid-cols-2 lg:grid-cols-4 gap-8 scroll-mt-24"
      >
        <FadeIn>
          <Feature
            title="Pizza aus dem Holzofen"
            text="Knusprig &amp; traditionell italienisch."
          />
        </FadeIn>
        <FadeIn>
          <Feature
            title="Frische Pasta"
            text="Mediterrane Nudelgerichte – cremig &amp; würzig."
          />
        </FadeIn>
        <FadeIn>
          <Feature
            title="Salate &amp; Antipasti"
            text="Knackig, frisch &amp; hausgemacht."
          />
        </FadeIn>
        <FadeIn>
          <Feature
            title="Mehr Genuss …"
            text="Desserts, Specials &amp; Überraschungen."
          />
        </FadeIn>
      </section>

      {/* ------------------------------------------------------
         Über uns / Textband
      ------------------------------------------------------ */}
      <section className="w-full bg-[#f5f0ea] border-y border-[#e0dbd4]">
        <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12">
          <FadeIn>
            <div className="border-l-2 border-[var(--brand)] pl-6">
              <h2 className="text-2xl md:text-3xl font-cinzel mb-4 text-[var(--dark)]">
                La mia Casa – mit Herz &amp; Erfahrung
              </h2>
              <p className="text-lg text-[#444] leading-relaxed mb-4">
                Erfahrung aus Salzburg, Ischgl, Grafendorf – kombiniert mit
                echter italienischer Herzlichkeit.
              </p>
              <p className="text-lg text-[#444] leading-relaxed">
                Ob Date, Familienfeier oder After-Work: Jeder Abend soll sich
                anfühlen wie ein Besuch bei guten Freunden.
              </p>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="space-y-4 text-[#555] text-base leading-relaxed">
              <p>
                Im La mia Casa verbinden wir mediterrane Küche mit steirischer
                Bodenständigkeit. Ein Glas Wein an der Bar, ein gemeinsamer
                Tisch, Zeit zum Durchatmen – dafür sind wir da.
              </p>
              <p>
                Für besondere Anlässe, kleine Runden oder größere Feiern beraten
                wir dich gerne persönlich und finden das passende Setting für
                deinen Abend.
              </p>
              <a
                href="/team"
                className="inline-block mt-4 text-[var(--brand)] hover:text-[var(--brand-dark)] font-semibold"
              >
                Mehr über uns →
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ------------------------------------------------------
         Kontakt / CTA
      ------------------------------------------------------ */}
      <section
        id="kontakt"
        className="max-w-6xl mx-auto px-6 py-20 scroll-mt-24"
      >
        <FadeIn>
          <div className="rounded-3xl bg-white/95 border border-[#e4ded6] px-8 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-[0_18px_45px_rgba(0,0,0,0.04)]">
            <div className="space-y-3">
              <h2 className="text-2xl md:text-3xl font-cinzel mb-1 text-[var(--dark)]">
                Lust auf einen Abend bei uns?
              </h2>
              <p className="text-lg text-[#555] max-w-xl">
                Reserviere telefonisch oder per WhatsApp – wir freuen uns auf
                dich.
              </p>
              <p className="mt-2 text-lg font-semibold text-[var(--dark)]">
                <a href="tel:+436649238843">+43 6649238843</a>
              </p>
            </div>

            <a href="/kontakt" className="btn-brand text-lg px-8 py-3">
              Kontakt &amp; Reservierung
            </a>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}

/* ----------------------------------------------------------
   Hilfs-Komponenten
---------------------------------------------------------- */

function HighlightTile({
  kicker,
  title,
  meta,
  text,
  icon,
}: {
  kicker: string;
  title: string;
  meta: string;
  text: string;
  icon: "calendar" | "pizza" | "snow";
}) {
  const Icon = () => {
    const common = "h-5 w-5";
    if (icon === "calendar") {
      return (
        <svg
          className={common}
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M7 2v3M17 2v3"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M3.5 9h17"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M6 6.5h12a2.5 2.5 0 0 1 2.5 2.5v10A2.5 2.5 0 0 1 18 21.5H6A2.5 2.5 0 0 1 3.5 19V9A2.5 2.5 0 0 1 6 6.5Z"
            stroke="currentColor"
            strokeWidth="1.8"
          />
        </svg>
      );
    }
    if (icon === "pizza") {
      return (
        <svg
          className={common}
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M12 3c4.7 0 8.7 1.8 10 3.2L12 21 2 6.2C3.3 4.8 7.3 3 12 3Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="M12 3v18"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <circle cx="9" cy="9" r="1" fill="currentColor" />
          <circle cx="14" cy="11" r="1" fill="currentColor" />
          <circle cx="11" cy="14" r="1" fill="currentColor" />
        </svg>
      );
    }
    // snow / Winter
    return (
      <svg
        className={common}
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M12 2v20M4 6l16 12M20 6 4 18"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    );
  };

  return (
    <div className="group rounded-2xl border border-[#e9e4dc] bg-white/80 p-4 shadow-[0_10px_25px_rgba(0,0,0,0.05)] hover:shadow-[0_18px_40px_rgba(0,0,0,0.08)] hover:-translate-y-[2px] transition">
      <div className="flex items-start gap-3">
        <div className="shrink-0 rounded-xl bg-[var(--brand)]/15 text-[var(--brand)] p-2">
          <Icon />
        </div>
        <div className="min-w-0">
          <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
            <span className="text-[11px] tracking-[0.22em] uppercase text-[var(--brand)]">
              {kicker}
            </span>
            <span className="font-semibold text-[var(--dark)]">{title}</span>
          </div>
          <div className="mt-1 inline-flex items-center rounded-full bg-[var(--brand)]/10 px-2.5 py-1 text-xs text-[var(--brand-dark)]">
            {meta}
          </div>
        </div>
      </div>
      <p className="mt-3 text-sm text-[#555] leading-relaxed">{text}</p>
    </div>
  );
}

function Feature({ title, text }: { title: string; text: string }) {
  return (
    <div className="card hover:-translate-y-[2px] transition-transform">
      <h3 className="text-xl font-cinzel mb-2 text-[var(--dark)]">{title}</h3>
      <p className="text-[#555] text-sm leading-relaxed">{text}</p>
    </div>
  );
}



