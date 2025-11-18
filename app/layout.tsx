import type { Metadata } from "next";
import "./globals.css";

import MobileMenuButton from "./components/MobileMenuButton";
import MobileMenu from "./components/MobileMenu";
import WhatsAppButton from "./components/WhatsAppButton";

export const metadata: Metadata = {
  title: "La mia Casa – Deine Bar, Deine Küche, Dein Wohnzimmer",
  description:
    "Mediterrane & steirische Küche im edlen Ambiente – Holzofenpizza, Pasta, Salate & Aperitivo in Hartberg.",
};

// ⭐ Edle Schrift (La mia Casa) → empfehle später in globals.css einzubinden (Google Font: 'Allura')
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body className="min-h-screen flex flex-col bg-cream text-dark">

        {/* TOPBAR ------------------------------------------------------ */}
        <header className="
          sticky top-0 z-50
          bg-white/80 backdrop-blur-xl
          border-b border-black/5
          shadow-[0_2px_10px_rgba(0,0,0,0.05)]
        ">
          <div className="max-w-7xl mx-auto px-6 h-[72px] flex items-center justify-between">

            {/* LOGO (Premium Schriftzug) */}
            <a
              href="/"
              className="font-logo text-[32px] leading-none text-dark"
            >
              La mia Casa
            </a>

            {/* DESKTOP NAV ------------------------------------------------ */}
            <nav className="hidden md:flex items-center gap-10 text-[15px] font-medium">
              {[
                ["Küche", "/speisekarte"],
                ["Events", "/events"],
                ["Galerie", "/galerie"],
                ["Team", "/team"],
                ["Kontakt", "/kontakt"],
              ].map(([label, link]) => (
                <a
                  key={label}
                  href={link}
                  className="
                    relative text-[#444]
                    hover:text-dark transition
                  "
                >
                  {label}

                  {/* Underline Animation */}
                  <span
                    className="
                      absolute left-0 -bottom-1 h-[2px] w-0 bg-gold
                      transition-all duration-300
                      group-hover:w-full
                    "
                  />
                </a>
              ))}
            </nav>

            {/* CTA rechts ------------------------------------------------ */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href="tel:+43XXXXXXXX"
                className="
                  text-sm text-dark font-semibold
                  hover:text-gold transition
                "
              >
                +43 (0) XXX XXX XXXX
              </a>

              <a
                href="/kontakt"
                className="
                  px-5 py-2 rounded-lg bg-gold text-dark
                  font-semibold shadow-sm hover:bg-[#c39645] transition
                "
              >
                Tisch reservieren
              </a>
            </div>

            {/* MOBILE MENU BUTTON */}
            <div className="md:hidden">
              <MobileMenuButton />
            </div>
          </div>
        </header>

        {/* MOBILE MENU */}
        <MobileMenu />

        {/* CONTENT */}
        <main className="flex-1">{children}</main>

        {/* FLOATING WHATSAPP */}
        <WhatsAppButton />

        {/* FOOTER ------------------------------------------------------- */}
        <footer className="mt-20 py-12 bg-dark text-cream">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between">

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

          <div className="max-w-7xl mx-auto px-6 mt-6 opacity-50 text-sm">
            © {new Date().getFullYear()} La mia Casa – Crafted with style by Moni the Brain
          </div>
        </footer>
      </body>
    </html>
  );
}

