import FadeIn from "./FadeIn";

export function ContactCTA() {
  return (
    <section id="kontakt" className="max-w-6xl mx-auto px-6 py-20 scroll-mt-24">
      <FadeIn>
        <div className="rounded-3xl bg-white/95 border border-[#e4ded6] px-8 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-[0_18px_45px_rgba(0,0,0,0.04)]">
          <div className="space-y-3">
            <h2 className="text-2xl md:text-3xl font-cinzel mb-1 text-[var(--dark)]">
              Lust auf einen Abend bei uns?
            </h2>
            <p className="text-lg text-[#555] max-w-xl">
              Reserviere telefonisch oder per WhatsApp – wir freuen uns auf dich.
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
  );
}
