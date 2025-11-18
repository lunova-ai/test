import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import MobileMenuButton from "./components/MobileMenuButton";
import MobileMenu from "./components/MobileMenu";
import WhatsAppButton from "./components/WhatsAppButton";

export const metadata: Metadata = {
  title: "La mia Casa – Deine Bar, Deine Küche, Dein Wohnzimmer",
  description: "Mediterrane & steirische Küche im edlen Ambiente – Holzofenpizza, Pasta, Salate & Aperitivo in Hartberg.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body className="min-h-screen flex flex-col bg-cream text-dark">

        {/* HEADER */}
        <header className="w-full py-4 bg-white/70 backdrop-blur-md border-b border-black/10 sticky top-0 z-50 shadow-sm">
          <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">

            {/* TEXT LOGO */}
            <Link href="/" className="font-logo text-3xl tracking-widest text-dark">
              La mia Casa
            </Link>

            {/* DESKTOP NAVIGATION */}
            <nav className="hidden md:flex gap-8 text-sm text-[#444] tracking-wide">
              <Link href="/speisekarte" className="hover:text-gold transition">Küche</Link>
              <Link href="/events" className="hover:text-gold transition">Events</Link>
              <Link href="/galerie" className="hover:text-gold transition">Galerie</Link>
              <Link href="/team" className="hover:text-gold transition">Team</Link>
              <Link href="/kontakt" className="hover:text-gold transition">Kontakt</Link>
            </nav>

            {/* MOBILE MENU BUTTON */}
            <MobileMenuButton />
          </div>
        </header>

        {/* MOBILE MENU */}
        <MobileMenu />

        {/* CONTENT */}
        <main className="flex-1">{children}</main>

        {/* WHATSAPP BUTTON */}
        <WhatsAppButton />

        {/* FOOTER */}
        <footer className="mt-20 py-12 bg-dark text-cream">
          <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between">

            <div>
              <h3 className="text-xl font-semibold">La mia Casa</h3>
              <p className="text-sm mt-2 opacity-80 leading-relaxed">
                Hauptplatz 5 · 8230 Hartberg<br />
                Mo–Sa: 16:00 – 24:00<br />
                Sonntag: 10:30 – 19:00<br />
                Dienstag: Ruhetag
              </p>
            </div>

            <div className="mt-6 md:mt-0">
              <a href="tel:+43XXXXXXXX" className="btn-gold inline-block">
                Jetzt anrufen
              </a>
            </div>
          </div>

          <div className="max-w-6xl mx-auto px-6 mt-6 opacity-50 text-sm">
            © {new Date().getFullYear()} La mia Casa – Crafted with style by Moni the Brain
          </div>
        </footer>
      </body>
    </html>
  );
}

