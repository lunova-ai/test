"use client";

import FadeIn from "../components/FadeIn";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useState } from "react";

export default function Galerie() {
  // Lightbox Steuerung
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  // Galerie Bilder
  const images = [
    { src: "/la-mia-casa-hero.jpg", alt: "Eingang des La mia Casa" },
    { src: "/la-mia-casa-ofen.jpg", alt: "Holzofen im La mia Casa" },
    { src: "/la-mia-casa-auto.jpg", alt: "Fiat 500 vor La mia Casa" },
    { src: "/la-mia-casa-logo.jpg", alt: "La mia Casa Logo" },
    // Weitere Bilder einfach anhängen
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-20">

      {/* Überschrift */}
      <FadeIn>
        <h1 className="text-5xl font-serif font-bold mb-4 text-dark">
          Galerie
        </h1>

        <p className="text-lg text-[#555] mb-12 max-w-2xl leading-relaxed">
          Eindrücke aus La mia Casa – Atmosphäre, Küche, Drinks und besondere Momente.
        </p>
      </FadeIn>

      {/* MASONRY GRID */}
      <div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">
        {images.map((img, i) => (
          <FadeIn key={i}>
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="w-full mb-6 rounded-2xl shadow-lg cursor-pointer 
                         hover:opacity-90 hover:scale-[1.02] transition-all duration-300
                         break-inside-avoid"
              onClick={() => {
                setIndex(i);
                setOpen(true);
              }}
            />
          </FadeIn>
        ))}
      </div>

      {/* LIGHTBOX */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={images}
        animation={{ fade: 300 }}
        controller={{ closeOnBackdropClick: true }}
      />
    </div>
  );
}
