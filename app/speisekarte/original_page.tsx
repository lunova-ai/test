"use client";

import type { ReactNode } from "react";
import FadeIn from "../home/components/FadeIn";

/* ------------------------------------------------------
   PAGE – SPEISEKARTE (NEUES EDLERES DESIGN)
------------------------------------------------------ */
export default function Speisekarte() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20 space-y-24">

      {/* INTRO */}
      <FadeIn>
        <div className="text-center">
          <p className="text-xs tracking-[0.28em] uppercase text-[var(--brand)] mb-3">
            La mia Casa · Cucina & Amore
          </p>

          <h1 className="text-4xl md:text-5xl font-cinzel text-[var(--dark)] mb-4">
            Speisekarte
          </h1>

          <p className="text-lg text-[#555] leading-relaxed max-w-3xl mx-auto">
            Italienische Klassiker, moderne Akzente und ehrliche Handarbeit –
            so entsteht bei uns ein Stück Italien mitten in Hartberg.
            Küchenchef Daniel kocht mit Gefühl für Produkte, Aromen und die Freude am Genuss.
          </p>

          <blockquote className="text-sm text-[#777] italic mt-6">
            „Kochen bedeutet für mich, Emotionen auf den Teller zu bringen – und Gäste
            mit jedem Bissen ein Stück Italien spüren zu lassen.“ – Daniel
          </blockquote>

          <div className="w-24 h-[1px] bg-[rgba(237,146,97,0.35)] mx-auto mt-10"></div>
        </div>
      </FadeIn>



      {/* ------------------------------------------------------
         ANTIPASTI
      ------------------------------------------------------ */}
      <MenuSection title="Antipasti · Vorspeisen">
        <MenuItem name="Caprese di Burrata" price="12,90" desc="Bunte Tomatenvariation, Burrata, Basilikumpesto & Balsamicoglace" />
        <MenuItem name="Hartberger Antipasti-Platte" price="14,50" desc="Feine Auswahl an italienischen & regionalen Spezialitäten" />
        <MenuItem name="Prosciutto Crudo e Melone" price="11,50" desc="Rohschinken mit Zuckermelone" />
        <MenuItem name="Supplì Explosion" price="10,90" desc="Knusprige Risottobällchen, gefüllt mit Tomate-Mozzarella, Zitrone-Thunfisch-Olive & Bolognese" />
        <MenuItem name="Zuppa di Basilico" price="5,50" desc="Basilikumschaumsuppe mit Pizzastangerl" />
      </MenuSection>



      {/* ------------------------------------------------------
         INSALATONE
      ------------------------------------------------------ */}
      <MenuSection
        title="Insalatone · Salate"
        subtitle="Alle Salate werden mit Gebäck serviert."
      >
        <MenuItem name="Caesar Salad" price="13,50" desc="Blattsalate, gegrillte Hühnerstreifen, Croutons, Tomaten, Parmesan, Anchovi-Parmesan-Dressing" />
        <MenuItem name="Insalata Venice" price="14,90" desc="Blattsalate, Tomaten, Avocado, Mango, Burrata, Pistazien, Mango-Limetten-Dressing" />
        <MenuItem name="Insalata Melone" price="11,90" desc="Blattsalate, Melone, Feta, Tomaten, Gurken, Oliven, Zwiebel, Hausdressing" />
        <MenuItem name="Insalata Regina" price="15,50" desc="Blattsalat, Garnelen, Gurken, Karotten, Radieschen, Oliven, Tomaten, Kräuter-Dressing" />
        <MenuItem name="Insalata di Tonno" price="12,90" desc="Blattsalate, Tomaten, Thunfisch, Zwiebel, Oliven, Mais, Balsamico-Dressing" />
        <MenuItem name="Insalata La mia Casa" price="13,90" desc="Blattsalate, Rohkost, geröstete Erdäpfel, Zwiebel, gegrillte Hühnerstreifen, Käse, Kräuter-Dressing" />
        <MenuItem name="Insalata Toscana" price="13,50" desc="Rucola, Mozzarella, Prosciutto, Parmesan, Tomaten, Oliven, Balsamico-Dressing" />
        <MenuItem name="Insalata Manzo" price="17,90" desc="Blattsalate, Roastbeef, Tomaten, Gurken, Karotten, Radieschen, Kräuter-Dressing" />
        <MenuItem name="Insalata Styria" price="14,40" desc="Blattsalate, gebackene Hühnerstreifen in Kürbispanade, Radieschen, Gurken, Tomaten, Kernöl-Dressing" />
      </MenuSection>



      {/* ------------------------------------------------------
         CARNE & PESCE
      ------------------------------------------------------ */}
      <MenuSection title="Carne & Pesce · Hauptgerichte">
        <MenuItem name="Saltimbocca Romana" price="16,90" desc="Hühnerfilet mit Prosciutto & Salbei, auf cremiger Polenta und Zitronen-Jus" />
        <MenuItem name="Pollo alla Mediterranea" price="16,90" desc="Gegrilltes Hühnerfilet mit Tomaten-Oliven-Sugo & Kräuter-Gnocchi" />
        <MenuItem name="Piccata alla Styria" price="16,90" desc="Hühnerfilet in Parmesan-Kürbiskern-Panier auf Spaghetti mit Paradeisersugo & Basilikum" />
        <MenuItem name="Cozze Provenzale (klein/groß)" price="9,90 / 15,90" desc="Miesmuscheln in Tomatensauce mit Knoblauch, Zwiebel & Petersilie" />
        <MenuItem name="Fritto Misto di Mare" price="18,90" desc="Calamari, Garnelen, Ährenfische & Meeresfrüchte mit Sauce tartare" />
      </MenuSection>



      {/* ------------------------------------------------------
         PRIMI PIATTI SPECIALE
      ------------------------------------------------------ */}
      <MenuSection title="Primi Piatti Speciale · Pasta">
        <MenuItem name="Spaghetti Burrata" price="14,90" desc="Spaghetti mit Paradeisersauce, Kirschtomaten, Burrata & Basilikum" />
        <MenuItem name="Pasta Pescatore" price="16,50" desc="Spaghetti mit Garnelen, Muscheln & Meeresfrüchten in Paradeisersauce" />
        <MenuItem name="Pasta Styria" price="12,10" desc="Penne mit Kürbiskern-Pesto & Parmesan-Crunch" />
        <MenuItem name="Ravioli Burrata" price="15,90" desc="Ravioli mit Burrata & Basilikum, auf Olivenschaum & Tomatenreduktion" />
      </MenuSection>



      {/* ------------------------------------------------------
         PASTA CLASSICO
      ------------------------------------------------------ */}
      <MenuSection
        title="Pasta Classico"
        subtitle="Wählen Sie Ihre Pasta: Spaghetti, Penne, Gnocchi oder glutenfreie Pasta (+ € 1,00)."
      >
        <MenuItem name="Aglio, Olio e Peperoncino" price="11,50" desc="Knoblauch · Olivenöl · Petersilie · frischer Chili" />
        <MenuItem name="Pomodoro e Basilico" price="11,50" desc="Paradeisersauce · Basilikum" />
        <MenuItem name="Arrabbiata" price="11,50" desc="Scharfes Tomatensugo · Chili" />
        <MenuItem name="Gorgonzola" price="11,50" desc="Cremige Gorgonzolasauce" />
        <MenuItem name="Bolognese" price="12,50" desc="Klassische Paradeiser-Fleischsauce" />
        <MenuItem name="Carbonara" price="12,90" desc="Original italienisch – ohne Sahne" />
        <MenuItem name="Lasagne della Casa" price="12,50" desc="Im Pizzaofen überbacken" />
        <MenuItem name="Nudeltopf ‚Casa‘" price="12,50" desc="Mit Käse überbacken" />
      </MenuSection>



      {/* ------------------------------------------------------
         RISOTTI
      ------------------------------------------------------ */}
      <MenuSection title="Risotti">
        <MenuItem name="Risotto ai Frutti di Mare" price="16,50" desc="Safranrisotto mit Meeresfrüchten & Parmesanchip" />
        <MenuItem name="Risotto ai Funghi" price="13,50" desc="Cremiges Risotto mit sautierten Pilzen & Grünem Veltliner" />
      </MenuSection>



      {/* ------------------------------------------------------
         PIZZA – KLASSISCH
      ------------------------------------------------------ */}
      <MenuSection title="Pizza · klassisch" columns={2}>
        <MenuItem name="Margherita" price="10,40" desc="Paradeisersauce · Mozzarella · Basilikum" />
        <MenuItem name="Prosciutto" price="12,40" desc="Paradeisersauce · Mozzarella · Schinken" />
        <MenuItem name="Prosciutto e Funghi" price="13,10" desc="Paradeisersauce · Mozzarella · Schinken · Champignons" />
        <MenuItem name="Salami" price="12,40" desc="Paradeisersauce · Mozzarella · Salami" />
        <MenuItem name="Carne" price="13,40" desc="Paradeisersauce · Mozzarella · Bolognese" />
        <MenuItem name="Capricciosa" price="14,10" desc="Paradeisersauce · Mozzarella · Schinken · Champignons · Artischocken · Oliven" />
        <MenuItem name="Contese" price="14,40" desc="Paradeisersauce · Mozzarella · Schinken · Champignons · Salami · Ei" />
        <MenuItem name="Diavolo" price="14,10" desc="Paradeisersauce · Mozzarella · scharfe Salami · Paprika · Zwiebeln · Pfefferoni" />
        <MenuItem name="Rusticana" price="14,10" desc="Paradeisersauce · Mozzarella · Schinken · Speck · Mais · Pfefferoni" />
        <MenuItem name="Casalinga" price="14,10" desc="Paradeisersauce · Mozzarella · Schinken · Salami · Zwiebel · Speck · Champignons" />
        <MenuItem name="Prosciutto e Rucola" price="14,10" desc="Paradeisersauce · Mozzarella · Prosciutto · Rucola · Grana · Olivenöl" />
        <MenuItem name="Tonno" price="14,10" desc="Paradeisersauce · Mozzarella · Thunfisch · Zwiebel · Oliven" />
        <MenuItem name="Frutti di Mare" price="16,10" desc="Paradeisersauce · Mozzarella · Meeresfrüchte · Muscheln" />
        <MenuItem name="Formaggio" price="15,10" desc="Paradeisersauce · Mozzarella · Camembert · Schafkäse · Gorgonzola" />
      </MenuSection>



      {/* ------------------------------------------------------
         PIZZA SPEZIALE
      ------------------------------------------------------ */}
      <MenuSection title="Pizza · Speciale" columns={2}>
        <MenuItem name="Gamberetti e Rucola" price="16,40" desc="Paradeisersauce · Mozzarella · Garnelen · Zucchini · Oliven · Rucola · Zitrone" />
        <MenuItem name="Burrata" price="15,40" desc="Paradeisersauce · Mozzarella · Burrata · Olivenöl · Kirschparadeiser · Rucola · Prosciutto" />
        <MenuItem name="Tartufo" price="16,40" desc="Paradeisersauce · Mozzarella · Trüffelsalami · Rucola · Trüffelöl · Grana" />
        <MenuItem name="Steira" price="14,40" desc="Paradeisersauce · Mozzarella · Speck · Zwiebel · Kernöl · Kürbiskerne · Ei" />
        <MenuItem name="Brie e Crudo" price="14,40" desc="Paradeisersauce · Mozzarella · Brie · Prosciutto Crudo" />
      </MenuSection>



      {/* ------------------------------------------------------
         DESSERT
      ------------------------------------------------------ */}
      <MenuSection title="Das Süße zum Schluss">
        <MenuItem name="Dessertteller aus Dreierlei" price="8,90" desc="Die süße Überraschung des Hauses" />
      </MenuSection>



      {/* ------------------------------------------------------
         HINWEISE & ALLERGENE
      ------------------------------------------------------ */}
      <FadeIn>
        <div className="mt-10 text-sm text-[#666] space-y-2 text-center">
          <p>
            Für Speisenänderungen erlauben wir uns einen Aufwandszuschlag von{" "}
            <span className="font-semibold">€ 0,60</span> zu verrechnen.
          </p>
          <p>
            Pizzakarton zum Mitnehmen:{" "}
            <span className="font-semibold">€ 0,60</span>
          </p>
          <p className="mt-4 italic">
            *** Über Allergene informiert Sie gerne unser Fachpersonal. ***
          </p>
        </div>
      </FadeIn>
    </div>
  );
}




/* ------------------------------------------------------
   COMPONENTS — Neues edles Layout
------------------------------------------------------ */

interface MenuSectionProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
  columns?: 1 | 2;
}

function MenuSection({ title, subtitle, children, columns = 1 }: MenuSectionProps) {
  return (
    <FadeIn>
      <section className="space-y-6">

        <div>
          <h2 className="text-3xl font-cinzel text-[var(--dark)] mb-1">{title}</h2>
          {subtitle && (
            <p className="text-sm text-[#777] max-w-2xl mb-2">
              {subtitle}
            </p>
          )}
          <div className="w-16 h-[1px] bg-[rgba(237,146,97,0.35)] mb-6"></div>
        </div>

        <div
          className={
            columns === 2
              ? "grid md:grid-cols-2 gap-x-12 gap-y-6"
              : "space-y-6"
          }
        >
          {children}
        </div>

      </section>
    </FadeIn>
  );
}


interface MenuItemProps {
  name: string;
  price: string;
  desc?: string;
}

function MenuItem({ name, price, desc }: MenuItemProps) {
  return (
    <div className="flex justify-between items-start gap-4">
      <div className="max-w-md">
        <p className="text-lg font-medium text-[var(--dark)]">{name}</p>
        {desc && (
          <p className="text-sm text-[#666] leading-relaxed mt-1">{desc}</p>
        )}
      </div>

      <p className="text-lg font-semibold text-[var(--brand)] whitespace-nowrap">
        {price} €
      </p>
    </div>
  );
}

