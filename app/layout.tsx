import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import MobileMenuButton from "./home/components/MobileMenuButton";
import MobileMenu from "./home/components/MobileMenu";
import WhatsAppButton from "./home/components/WhatsAppButton";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: "La mia Casa – Ristorante, Bar & Pizzeria in Hartberg",
  description:
    "La mia Casa – Holzofenpizza, Pasta, Salate & Aperitivo am Hauptplatz Hartberg. Italienisch-steirische Küche, gemütliche Atmosphäre & herzliche Gastgeber.",
  keywords: [
    "Pizzeria Hartberg",
    "Restaurant Hartberg",
    "Holzofenpizza Hartberg",
    "La mia Casa",
    "Ristorante Hartberg",
    "Pizza Hartberg",
    "Mediterrane Küche Hartberg",
    "Steirische Küche Hartberg",
    "Beste Pizza Hartberg",
    "Aperitivo Hartberg",
    "Essen gehen Hartberg",
  ],
  metadataBase: new URL("https://www.la-mia-casa.app"),
  alternates: {
    canonical: "https://www.la-mia-casa.app",
  },
  openGraph: {
    title: "La mia Casa – Dein Ristorante in Hartberg",
    description:
      "Mediterran, steirisch & herzlich – Holzofenpizza, Pasta, Aperitivo & Events im Herzen von Hartberg.",
    url: "https://www.la-mia-casa.app",
    siteName: "La mia Casa Hartberg",
    locale: "de_AT",
    type: "website",
    images: [
      {
        url: "https://www.la-mia-casa.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "La mia Casa Hartberg – Ristorante, Bar & Pizzeria",
      },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body className="min-h-screen flex flex-col bg-cream text-dark">
        {/* HEADER */}
        <header
          className="
            w-full py-5
            bg-white/70
            backdrop-blur-md
            sticky top-0
            z-50
            shadow-sm
            header-gradient
            header-line
          "
        >
          <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="
                font-logo
                text-2xl md:text-3xl
                text-[var(--dark)]
                tracking-[0.03em]
                hover:text-[var(--brand)]
                transition-colors
              "
            >
              La mia Casa
            </Link>

            {/* DESKTOP NAVIGATION */}
            <nav
              className="hidden md:flex gap-10 text-[15px] font-cinzel text-[#333]"
              aria-label="Hauptnavigation"
            >
              <Link href="/speisekarte" className="nav-link">
                Speisekarte
              </Link>
              <Link href="/team" className="nav-link">
                Über uns
              </Link>
              <Link href="/extras" className="nav-link">
                Extras
              </Link>
              <Link href="/kontakt" className="nav-link">
                Kontakt
              </Link>
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
        <WhatsAppButton phone="436649238843" />

        {/* FOOTER */}
        <footer className="bg-[#f8f5f2] text-[var(--dark)] mt-20 border-t border-[rgba(237,146,97,0.4)] py-10">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">
            {/* Adresse */}
            <div>
              <h3 className="font-cinzel text-lg mb-2">La mia Casa</h3>
              <p className="text-sm leading-relaxed">
                Hauptplatz 5
                <br />
                8230 Hartberg
                <br />
                Österreich
              </p>
            </div>

            {/* Öffnungszeiten */}
            <div>
              <h3 className="font-cinzel text-lg mb-2">Öffnungszeiten</h3>
              <p className="text-sm leading-relaxed">
                Mo, Do, Fr &amp; Sa: 16:00 – 24:00 Uhr
                <br />
                So: 11:00 – 19:00 Uhr
                <br />
                Di &amp; Mi: Ruhetag
              </p>
            </div>

            {/* Kontakt */}
            <div>
              <h3 className="font-cinzel text-lg mb-2">Kontakt</h3>
              <p className="text-sm leading-relaxed">
                Telefon / WhatsApp:
                <br />
                <a
                  href="tel:+436649238843"
                  className="underline hover:text-[var(--brand)]"
                >
                  +43 6649238843
                </a>
              </p>
            </div>
          </div>

          {/* Untere Leiste */}
          <div className="max-w-6xl mx-auto px-6 mt-10 flex flex-col md:flex-row justify-between items-center text-xs text-[#666] gap-4">
            <div className="flex gap-6">
              <a href="/impressum" className="hover:text-[var(--brand)]">
                Impressum
              </a>
              <a href="/datenschutz" className="hover:text-[var(--brand)]">
                Datenschutz
              </a>
            </div>

            <p>© {new Date().getFullYear()} La mia Casa</p>
          </div>
        </footer>

        {/* STRUCTURED DATA – GOOGLE LOCAL BUSINESS */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Restaurant",
              name: "La mia Casa",
              image: "https://www.la-mia-casa.app/og-image.jpg",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Hauptplatz 5",
                addressLocality: "Hartberg",
                postalCode: "8230",
                addressCountry: "AT",
              },
              telephone: "+436649238843",
              servesCuisine: ["Italian", "Mediterranean", "Steirisch", "Pizza"],
              priceRange: "$$",
              url: "https://www.la-mia-casa.app",
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Thursday", "Friday", "Saturday"],
                  opens: "16:00",
                  closes: "24:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Sunday",
                  opens: "11:00",
                  closes: "19:00",
                },
              ],
            }),
          }}
        />

        {/* VERCEL SPEED INSIGHTS */}
        <SpeedInsights />
      </body>
    </html>
  );
}




