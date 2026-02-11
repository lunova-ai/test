"use client";

export default function WhatsAppButton({ phone }: { phone: string }) {
  return (
    <a
      href={`https://wa.me/${phone}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp Nachricht senden"
      className="
        fixed bottom-6 right-6 z-50
        w-14 h-14 rounded-full 
        bg-[var(--brand)]
        flex items-center justify-center
        shadow-lg
        border border-[#f7b08b]
        transition-all duration-300
        hover:bg-[var(--brand-dark)]
        hover:shadow-[0_0_18px_rgba(237,146,97,0.35)]
      "
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3.52 20.48l1.13-4.13a8 8 0 111.94 1.94l-4.13 1.13z"></path>
        <path d="M16.24 14.83a4.4 4.4 0 00-2-.55c-.11 0-.26.02-.4.05-.43.1-.98.33-1.31.53-.24.14-.41.25-.6.22-.18-.02-.39-.18-.83-.69-.63-.7-.99-1.28-1.11-1.46-.16-.27-.01-.42.12-.57.13-.15.28-.33.42-.51.14-.18.2-.3.3-.49.1-.19.05-.36-.03-.52-.09-.17-.79-1.9-1.09-2.6-.29-.71-.59-.6-.81-.6-.21 0-.46-.03-.71-.03s-.52.05-.8.37c-.27.32-1.06 1.04-1.06 2.52 0 1.48 1.08 2.91 1.24 3.11.15.21 2.13 3.25 5.2 4.55 3.07 1.3 3.07.87 3.62.82.55-.06 1.79-.72 2.04-1.42.25-.7.25-1.31.18-1.42-.07-.1-.25-.17-.52-.3z"></path>
      </svg>
    </a>
  );
}
