"use client";

import FadeIn from "../home/components/FadeIn";

export default function DatenschutzPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16 md:py-20 space-y-12">
      {/* Header */}
      <FadeIn>
        <header className="space-y-4">
          <p className="text-xs tracking-[0.28em] uppercase text-[var(--brand)]">
            Rechtliches
          </p>
          <h1 className="text-3xl md:text-4xl font-cinzel tracking-tight text-[var(--dark)]">
            Datenschutzerklärung
          </h1>
          <p className="text-base md:text-lg text-[#555] max-w-3xl">
            Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen.
            Wir verarbeiten Ihre Daten daher ausschließlich auf Grundlage der
            gesetzlichen Bestimmungen (DSGVO, DSG, TKG&nbsp;2021).
          </p>
        </header>
      </FadeIn>

      {/* Verantwortliche Stelle */}
      <FadeIn>
        <section className="space-y-3">
          <h2 className="text-2xl font-cinzel text-[var(--dark)]">
            1. Verantwortliche Stelle
          </h2>
          <p className="text-sm md:text-base text-[#555] leading-relaxed">
            Verantwortlich für die Verarbeitung Ihrer personenbezogenen Daten
            auf dieser Website ist:
          </p>
          <div className="text-sm md:text-base text-[var(--dark)] leading-relaxed">
            <p className="font-semibold">La mia Casa Hartberg</p>
            <p>Karin &amp; Reinhold Leitner</p>
            <p>Hauptplatz 5</p>
            <p>8230 Hartberg</p>
            <p>Österreich</p>
            <p className="mt-2">
              Telefon:{" "}
              <a href="tel:+436649238843" className="text-[var(--brand)]">
                +43 664 9238843
              </a>
            </p>
          </div>
        </section>
      </FadeIn>

      {/* Allgemeines */}
      <FadeIn>
        <section className="space-y-3">
          <h2 className="text-2xl font-cinzel text-[var(--dark)]">
            2. Allgemeines zur Datenverarbeitung
          </h2>
          <p className="text-sm md:text-base text-[#555] leading-relaxed">
            Wir verarbeiten personenbezogene Daten ausschließlich im Rahmen der
            gesetzlichen Bestimmungen (DSGVO, DSG, TKG&nbsp;2021).
          </p>
          <p className="text-sm md:text-base text-[#555] leading-relaxed">
            Diese Website verwendet{" "}
            <strong>keine Analyse-Tools (z.&nbsp;B. Google Analytics)</strong>,
            keine Marketing-Cookies und keine Datenbank. Personenbezogene Daten
            fallen nur an, wenn Sie aktiv Kontakt mit uns aufnehmen oder
            eingebettete Dienste (z.&nbsp;B. Google Maps) nutzen.
          </p>
        </section>
      </FadeIn>

      {/* Server-Logfiles / Hosting */}
      <FadeIn>
        <section className="space-y-3">
          <h2 className="text-2xl font-cinzel text-[var(--dark)]">
            3. Server-Logfiles (Hosting)
          </h2>
          <p className="text-sm md:text-base text-[#555] leading-relaxed">
            Unsere Website wird bei einem externen Hosting-Dienstleister
            betrieben. Beim Aufruf unserer Seiten werden automatisch technische
            Daten in sogenannten Server-Logfiles verarbeitet, zum Beispiel:
          </p>
          <ul className="list-disc list-inside text-sm md:text-base text-[#555] space-y-1">
            <li>IP-Adresse</li>
            <li>Datum und Uhrzeit des Zugriffs</li>
            <li>aufgerufene Seite/Datei</li>
            <li>Browsertyp und Betriebssystem</li>
          </ul>
          <p className="text-sm md:text-base text-[#555] leading-relaxed">
            Diese Verarbeitung ist technisch notwendig, um die Website
            bereitzustellen und die Sicherheit zu gewährleisten. Rechtsgrundlage
            ist unser berechtigtes Interesse gemäß Art. 6 Abs. 1 lit. f DSGVO.
            Die Logdaten werden vom Hosting-Dienstleister in der Regel nach
            kurzer Zeit automatisch wieder gelöscht.
          </p>
        </section>
      </FadeIn>

      {/* Kontakt: Telefon & WhatsApp */}
      <FadeIn>
        <section className="space-y-3">
          <h2 className="text-2xl font-cinzel text-[var(--dark)]">
            4. Kontakt (Telefon &amp; WhatsApp)
          </h2>
          <p className="text-sm md:text-base text-[#555] leading-relaxed">
            Wenn Sie uns telefonisch oder per WhatsApp kontaktieren, verarbeiten
            wir die von Ihnen freiwillig mitgeteilten Daten (z.&nbsp;B. Name,
            Telefonnummer, Inhalt der Nachricht) ausschließlich zur Bearbeitung
            Ihrer Anfrage bzw. Reservierung.
          </p>
          <p className="text-sm md:text-base text-[#555] leading-relaxed">
            Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO
            (Vertragsanbahnung/-erfüllung, z.&nbsp;B. Reservierungen) sowie
            Art. 6 Abs. 1 lit. f DSGVO (unser berechtigtes Interesse an einer
            effizienten Kommunikation).
          </p>
          <h3 className="text-lg font-semibold text-[var(--dark)] mt-4">
            WhatsApp
          </h3>
          <p className="text-sm md:text-base text-[#555] leading-relaxed">
            Bei Kontaktaufnahme über WhatsApp werden Daten an den Anbieter
            (WhatsApp / Meta) übermittelt. Dabei kann es zu einer Übermittlung
            von Daten in Drittländer (z.&nbsp;B. USA) kommen. Auf Umfang und
            Dauer der Speicherung haben wir keinen Einfluss. Die Nutzung ist
            freiwillig; alternativ können Sie uns jederzeit telefonisch
            erreichen.
          </p>
          <p className="text-sm md:text-base text-[#555] leading-relaxed">
            Wir speichern Kontaktdaten nur so lange, wie dies für die Abwicklung
            der Anfrage erforderlich ist.
          </p>
        </section>
      </FadeIn>

      {/* Google Maps */}
      <FadeIn>
        <section className="space-y-3">
          <h2 className="text-2xl font-cinzel text-[var(--dark)]">
            5. Google Maps
          </h2>
          <p className="text-sm md:text-base text-[#555] leading-relaxed">
            Auf unserer Kontaktseite ist eine Karte des Dienstes Google Maps
            eingebettet, um Ihnen die Anfahrt zu erleichtern. Beim Laden der
            Karte werden Daten (z.&nbsp;B. IP-Adresse, technische Browserdaten
            und ggf. Standortdaten) an Google übertragen und dort gemäß der
            Datenschutzerklärung von Google verarbeitet. Google kann Daten auch
            in Drittländer (insbesondere die USA) übermitteln.
          </p>
          <p className="text-sm md:text-base text-[#555] leading-relaxed">
            Die Nutzung von Google Maps erfolgt auf Grundlage unseres
            berechtigten Interesses gemäß Art. 6 Abs. 1 lit. f DSGVO, unseren
            Standort benutzerfreundlich darzustellen. Wenn Sie nicht möchten,
            dass Google Daten über Sie verarbeitet, nutzen Sie die Karte bitte
            nicht.
          </p>
        </section>
      </FadeIn>

      {/* Cookies */}
      <FadeIn>
        <section className="space-y-3">
          <h2 className="text-2xl font-cinzel text-[var(--dark)]">
            6. Cookies
          </h2>
          <p className="text-sm md:text-base text-[#555] leading-relaxed">
            Unsere Website setzt derzeit keine Tracking- oder Marketing-Cookies
            ein. Technisch notwendige Cookies können verwendet werden, um die
            Seite korrekt anzuzeigen; diese dienen ausschließlich der
            Funktionsfähigkeit der Website und werden nicht für Analyse- oder
            Werbezwecke genutzt.
          </p>
        </section>
      </FadeIn>

      {/* Rechte */}
      <FadeIn>
        <section className="space-y-3">
          <h2 className="text-2xl font-cinzel text-[var(--dark)]">
            7. Ihre Rechte
          </h2>
          <p className="text-sm md:text-base text-[#555] leading-relaxed">
            Ihnen stehen im Rahmen der DSGVO insbesondere folgende Rechte zu:
          </p>
          <ul className="list-disc list-inside text-sm md:text-base text-[#555] space-y-1">
            <li>Recht auf Auskunft über Ihre Daten</li>
            <li>Recht auf Berichtigung unrichtiger Daten</li>
            <li>Recht auf Löschung (&bdquo;Recht auf Vergessenwerden&ldquo;)</li>
            <li>Recht auf Einschränkung der Verarbeitung</li>
            <li>Recht auf Datenübertragbarkeit</li>
            <li>Recht auf Widerspruch gegen bestimmte Verarbeitungen</li>
          </ul>
          <p className="text-sm md:text-base text-[#555] leading-relaxed">
            Außerdem können Sie erteilte Einwilligungen jederzeit mit Wirkung
            für die Zukunft widerrufen. Zur Ausübung Ihrer Rechte können Sie
            sich jederzeit an uns wenden – am einfachsten telefonisch oder
            persönlich im Lokal (Kontaktdaten siehe oben).
          </p>
          <p className="text-sm md:text-base text-[#555] leading-relaxed">
            Sie haben außerdem das Recht, Beschwerde bei einer
            Aufsichtsbehörde einzureichen. In Österreich ist dies die
            Österreichische Datenschutzbehörde (www.dsb.gv.at).
          </p>
        </section>
      </FadeIn>

      {/* Stand */}
      <FadeIn>
        <section className="space-y-2 text-xs md:text-sm text-[#777]">
          <p>
            Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit
            sie stets den aktuellen rechtlichen Anforderungen entspricht oder
            um Änderungen unserer Leistungen in der Datenschutzerklärung
            umzusetzen.
          </p>
          <p>Stand: 2026</p>
        </section>
      </FadeIn>
    </div>
  );
}

