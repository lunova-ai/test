"use client";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/43XXXXXXXX"
      target="_blank"
      aria-label="WhatsApp"
      className="
        fixed bottom-6 right-6 z-50 
        bg-green-500 hover:bg-green-600 
        text-white text-2xl
        p-3 rounded-full shadow-xl 
        transition transform hover:scale-110
      "
    >
      💬
    </a>
  );
}
