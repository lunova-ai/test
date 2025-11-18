"use client";

export default function MobileMenuButton() {
  return (
    <button
      className="md:hidden text-3xl text-dark hover:text-gold transition"
      onClick={() => {
        const event = new CustomEvent("open-mobile-menu");
        window.dispatchEvent(event);
      }}
      aria-label="Menü öffnen"
    >
      ☰
    </button>
  );
}
