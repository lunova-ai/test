"use client";

import { useState } from "react";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* MOBILE MENU BUTTON */}
      <button
        className="md:hidden text-4xl text-dark fixed top-4 right-4 z-50 transition hover:text-gold"
        aria-label="Menü öffnen"
        onClick={() => setOpen(true)}
      >
        ☰
      </button>

      {/* BACKDROP */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 z-40 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      ></div>

      {/* SLIDE-IN MENU */}
      <div
        className={`fixed top-0 right-0 w-3/4 h-full bg-white/95 backdrop-blur-xl shadow-2xl z-50 p-8 flex flex-col transform transition-transform duration-500 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* CLOSE BUTTON */}
        <button
          className="text-4xl text-dark self-end mb-10 hover:text-gold transition"
          aria-label="Menü schließen"
          onClick={() => setOpen(false)}
        >
          ✕
        </button>

        {/* NAVIGATION */}
        <nav className="flex flex-col gap-8 text-2xl font-light">
          <a
            href="/speisekarte"
            className="hover:text-gold transition"
            onClick={() => setOpen(false)}
          >
            Küche
          </a>

          <a
            href="/events"
            className="hover:text-gold transition"
            onClick={() => setOpen(false)}
          >
            Events
          </a>

          <a
            href="/galerie"
            className="hover:text-gold transition"
            onClick={() => setOpen(false)}
          >
            Galerie
          </a>

          <a
            href="/team"
            className="hover:text-gold transition"
            onClick={() => setOpen(false)}
          >
            Team
          </a>

          <a
            href="/kontakt"
            className="hover:text-gold transition"
            onClick={() => setOpen(false)}
          >
            Kontakt
          </a>
        </nav>
      </div>
    </>
  );
}
