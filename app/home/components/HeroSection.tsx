"use client";

import FadeIn from "./FadeIn";
import Image from "next/image";
import { HighlightTile } from "./HighlightTile";

export function HeroSection({
  onOpenBirthday,
  onOpenGirlsNight,
  onOpenSunday,
}: {
  onOpenBirthday: () => void;
  onOpenGirlsNight: () => void;
  onOpenSunday: () => void;
}) {
  return (
    <section
      id="home"
      className="relative w-full border-b border-[#e1ddd8] bg-[var(--cream)] scroll-mt-24"
    >
      {/* Hintergrund */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.55]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(225,122,74,0.12),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_30%,rgba(0,0,0,0.04),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_45%_90%,rgba(225,122,74,0.08),transparent_60%)]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-16 md:py-24 grid gap-12 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-start">
        {/* LINKS */}
        <FadeIn>
          <div className="flex flex-col gap-6 min-w-0">
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
              Mediterrane Küche trifft steirische Herzlichkeit – Aperitivo an der
              Bar, Holzofenpizza &amp; Pasta, gemütliche Abende mit Freunden.
            </p>

            <div className="h-px w-24 bg-[var(--brand)] mt-1" />

            {/* HIGHLIGHTS BOX */}
            <div className="rounded-3xl border border-[#e5e1da] bg-white/75 px-5 py-6 md:px-7 md:py-7 shadow-[0_18px_55px_rgba(0,0,0,0.05)]">
              {/* Header wie im Ziel: zentriert, ruhig */}
              <div className="text-center mb-6">
                <p className="font-cinzel text-3xl md:text-4xl tracking-tight text-[var(--dark)]">
                  ✨ Highlights
                </p>
                <p className="mt-2 text-sm md:text-base text-[#666]">
                  Unsere Specials &amp; Fixtermine.
                </p>
              </div>

              {/* Karten: gleiche Höhe, sauberer Umbruch */}
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
                <div className="min-w-0">
                  <HighlightTile
                    kicker="Spezial"
                    title="Kindergeburtstag 🎉"
                    meta="Ab 5 Kindern"
                    text="Feiern, lachen & Pizza genießen."
                    hint="🎈 Party-Details ansehen"
                    onClick={onOpenBirthday}
                  />
                </div>

                <div className="min-w-0">
                  <HighlightTile
                    kicker="Fixtermin"
                    title="Mädlsabend 🍸"
                    meta="Donnerstag · ab 16 Uhr"
                    text="Manchmal ist das die beste Therapie."
                    hint="✨ Ladies-Night entdecken"
                    onClick={onOpenGirlsNight}
                  />
                </div>

                <div className="min-w-0">
                  <HighlightTile
                    kicker="Sonntag"
                    title="Durchgehend Küche ☀️"
                    meta="11–19 Uhr"
                    text="Perfekt für einen entspannten Sonntag – ohne Küchenpause."
                    hint="☀️ Sonntags-Infos ansehen"
                    onClick={onOpenSunday}
                  />
                </div>
              </div>

              {/* Copy + Buttons wie im Ziel zentriert */}
              <div className="mt-7 text-center text-sm md:text-base text-[#555]">
                <p className="font-medium text-[var(--dark)]">
                  Dann komm zu uns – wir freuen uns auf dich.
                </p>
                <p className="mt-2 text-xs md:text-sm text-[#666]">
                  Fragen? Schreib uns gerne per WhatsApp oder ruf einfach an.
                </p>
              </div>

              <div className="mt-6 flex flex-wrap justify-center gap-3">
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

        {/* RECHTS – Bild */}
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

              <div
                className="pointer-events-none absolute -inset-3 rounded-[30px] border border-white/55 opacity-50"
                style={{ transform: "rotate(6deg)" }}
              />

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
  );
}

