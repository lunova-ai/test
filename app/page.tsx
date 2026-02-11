"use client";

import { useMemo, useState, useCallback } from "react";

import { gallery as galleryData } from "./home/components/gallery";
import { useLightboxNavigation } from "./home/components/hooks/useLightboxNavigation";
import { useBirthdayOverlay } from "./home/components/hooks/useBirthdayOverlay";
import { useGirlsNightOverlay } from "./home/components/hooks/useGirlsNightOverlay";

import { HeroSection } from "./home/components/HeroSection";
import { InfoBand } from "./home/components/InfoBand";
import { GallerySection } from "./home/components/GallerySection";
import { Lightbox } from "./home/components/Lightbox";
import { IntroSection } from "./home/components/IntroSection";
import { FeaturesSection } from "./home/components/FeaturesSection";
import { AboutSection } from "./home/components/AboutSection";
import { ContactCTA } from "./home/components/ContactCTA";

import { BirthdayOverlay } from "./home/components/BirthdayOverlay";
import { GirlsNightOverlay } from "./home/components/GirlsNightOverlay";

export default function Page() {
  const gallery = useMemo(() => galleryData, []);

  const [active, setActive] = useState<number | null>(null);

  // Kindergeburtstag
  const [showBirthday, setShowBirthday] = useState(false);
  const [animateBalloons, setAnimateBalloons] = useState(false);

  // Mädlsabend
  const [showGirlsNight, setShowGirlsNight] = useState(false);
  const [animateBubbles, setAnimateBubbles] = useState(false);

  const close = useCallback(() => setActive(null), []);
  const prev = useCallback(() => {
    setActive((v) => (v === null ? 0 : (v - 1 + gallery.length) % gallery.length));
  }, [gallery.length]);
  const next = useCallback(() => {
    setActive((v) => (v === null ? 0 : (v + 1) % gallery.length));
  }, [gallery.length]);

  useLightboxNavigation({
    active,
    length: gallery.length,
    onClose: close,
    onPrev: prev,
    onNext: next,
  });

  useBirthdayOverlay({
    showBirthday,
    setShowBirthday,
    setAnimateBalloons,
    durationMs: 8000,
  });

  useGirlsNightOverlay({
    showGirlsNight,
    setShowGirlsNight,
    setAnimateBubbles,
    durationMs: 9000,
  });

  return (
    <div className="w-full flex flex-col bg-[var(--cream)]">
      <HeroSection
        onOpenBirthday={() => setShowBirthday(true)}
        onOpenGirlsNight={() => setShowGirlsNight(true)}
      />

     

      <InfoBand />

      <GallerySection gallery={gallery} onOpen={setActive} />

      {active !== null && gallery[active] && (
        <Lightbox item={gallery[active]} onClose={close} onPrev={prev} onNext={next} />
      )}

      <IntroSection />
      <FeaturesSection />
      <AboutSection />
      <ContactCTA />

      <BirthdayOverlay
        open={showBirthday}
        animateBalloons={animateBalloons}
        onClose={() => setShowBirthday(false)}
      />

      <GirlsNightOverlay
        open={showGirlsNight}
        animateBubbles={animateBubbles}
        onClose={() => setShowGirlsNight(false)}
      />
    </div>
  );
}


