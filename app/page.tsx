"use client";

import { useMemo, useState, useCallback } from "react";

import { gallery as galleryData } from "./home/components/gallery";
import { useLightboxNavigation } from "./home/components/hooks/useLightboxNavigation";
import { useBirthdayOverlay } from "./home/components/hooks/useBirthdayOverlay";
import { useGirlsNightOverlay } from "./home/components/hooks/useGirlsNightOverlay";
import { useSundayOverlay } from "./home/components/hooks/useSundayOverlay";

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
import { SundayOverlay } from "./home/components/SundayOverlay";

export default function Page() {
  const gallery = useMemo(() => galleryData, []);
  const [active, setActive] = useState<number | null>(null);

  // Kindergeburtstag
  const [showBirthday, setShowBirthday] = useState(false);
  const [animateBalloons, setAnimateBalloons] = useState(false);

  // Mädlsabend
  const [showGirlsNight, setShowGirlsNight] = useState(false);
  const [animateBubbles, setAnimateBubbles] = useState(false);

  // Sonntag (neu)
  const [showSunday, setShowSunday] = useState(false);
  const [animateSun, setAnimateSun] = useState(false);

  // Lightbox Controls
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

  // Overlays
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

  useSundayOverlay({
    showSunday,
    setShowSunday,
    setAnimateSun,
    durationMs: 8500,
  });

  // Öffnen/Schließen sauber kapseln
  const openBirthday = useCallback(() => setShowBirthday(true), []);
  const openGirlsNight = useCallback(() => setShowGirlsNight(true), []);
  const openSunday = useCallback(() => setShowSunday(true), []);

  const closeBirthday = useCallback(() => setShowBirthday(false), []);
  const closeGirlsNight = useCallback(() => setShowGirlsNight(false), []);
  const closeSunday = useCallback(() => setShowSunday(false), []);

  return (
    <div className="w-full flex flex-col bg-[var(--cream)]">
      <HeroSection
        onOpenBirthday={openBirthday}
        onOpenGirlsNight={openGirlsNight}
        onOpenSunday={openSunday}
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

      <BirthdayOverlay open={showBirthday} animateBalloons={animateBalloons} onClose={closeBirthday} />

      <GirlsNightOverlay open={showGirlsNight} animateBubbles={animateBubbles} onClose={closeGirlsNight} />

      <SundayOverlay open={showSunday} animateSun={animateSun} onClose={closeSunday} />
    </div>
  );
}


