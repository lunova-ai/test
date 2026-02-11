"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import FadeIn from "../home/components/FadeIn";
import Link from "next/link";

type SpritzMood = "sun" | "rain" | "date" | "friends" | "quick" | "wildcard";

type Recommendation = {
  id: string;
  title: string;
  subtitle: string;
  drink: string;
  food: string;
  vibe: string;
  tip: string;
  cta: { label: string; href: string };
};

type BarHack = {
  id: string;
  title: string;
  text: string;
  badge: string;
};

type CocktailQuizAnswer = "spritz" | "sour" | "bitter" | "fruity";

type CocktailQuizQuestion = {
  id: number;
  question: string;
  options: { label: string; value: CocktailQuizAnswer }[];
};

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

function prefersReducedMotion() {
  if (typeof window === "undefined") return true;
  return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? true;
}

/* --------------------------------------------------------
   Confetti (Canvas) – no libs, reduced-motion safe
-------------------------------------------------------- */

type ConfettiPiece = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  w: number;
  h: number;
  life: number;
  ttl: number;
  spin: number;
  rot: number;
};

function ConfettiBurst({
  fireKey,
  className,
}: {
  fireKey: number;
  className?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const piecesRef = useRef<ConfettiPiece[]>([]);
  const lastTsRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const rect = parent.getBoundingClientRect();
      const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
      canvas.width = Math.floor(rect.width * dpr);
      canvas.height = Math.floor(rect.height * dpr);
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion()) return;

    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const parent = canvas.parentElement;
    const rect = parent?.getBoundingClientRect();
    if (!rect) return;

    const originX = rect.width * (0.22 + Math.random() * 0.56);
    const originY = rect.height * 0.18;

    const colors = [
      "rgba(237,146,97,0.95)",
      "rgba(255,205,100,0.95)",
      "rgba(255,120,140,0.95)",
      "rgba(120,190,255,0.95)",
      "rgba(170,110,255,0.95)",
      "rgba(120,230,170,0.95)",
    ];

    const count = 90;
    const pieces: ConfettiPiece[] = [];
    for (let i = 0; i < count; i++) {
      const angle = -Math.PI / 2 + (-0.85 + Math.random() * 1.7);
      const speed = 180 + Math.random() * 280;

      pieces.push({
        x: originX,
        y: originY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        w: 6 + Math.random() * 8,
        h: 3 + Math.random() * 6,
        life: 0,
        ttl: 900 + Math.random() * 700,
        spin: -7 + Math.random() * 14,
        rot: Math.random() * Math.PI * 2,
      });
    }

    (pieces as any)._colors = colors;
    piecesRef.current = pieces;
    lastTsRef.current = 0;

    const gravity = 820;

    const loop = (ts: number) => {
      if (!ctx || !canvas) return;

      if (!lastTsRef.current) lastTsRef.current = ts;
      const dt = Math.min(0.033, (ts - lastTsRef.current) / 1000);
      lastTsRef.current = ts;

      const w = canvas.clientWidth;
      const h = canvas.clientHeight;

      ctx.clearRect(0, 0, w, h);

      const palette: string[] = (piecesRef.current as any)._colors || colors;

      piecesRef.current = piecesRef.current
        .map((p, idx) => {
          p.life += dt * 1000;
          p.vy += gravity * dt;
          p.x += p.vx * dt;
          p.y += p.vy * dt;
          p.rot += p.spin * dt;

          p.vx *= 0.995;
          p.vy *= 0.997;

          const alpha = Math.max(0, 1 - p.life / p.ttl);
          ctx.save();
          ctx.globalAlpha = alpha;
          ctx.translate(p.x, p.y);
          ctx.rotate(p.rot);
          ctx.fillStyle = palette[idx % palette.length];
          ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
          ctx.restore();

          return p;
        })
        .filter((p) => p.life < p.ttl && p.y < h + 40);

      if (piecesRef.current.length > 0) {
        rafRef.current = requestAnimationFrame(loop);
      } else {
        ctx.clearRect(0, 0, w, h);
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };

    rafRef.current = requestAnimationFrame(loop);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
      piecesRef.current = [];
    };
  }, [fireKey]);

  return (
    <canvas
      ref={canvasRef}
      className={cx("absolute inset-0 pointer-events-none", className)}
      aria-hidden="true"
    />
  );
}

/* --------------------------------------------------------
   UI Bits
-------------------------------------------------------- */

function Card({
  eyebrow,
  title,
  children,
  right,
  className,
}: {
  eyebrow?: string;
  title: string;
  children: React.ReactNode;
  right?: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cx(
        "relative overflow-hidden rounded-3xl bg-white/90 border border-[#e5dfd7] p-6 md:p-8",
        "shadow-[0_16px_40px_rgba(0,0,0,0.04)]",
        className
      )}
    >
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-5">
        <div>
          {eyebrow ? (
            <p className="text-xs tracking-[0.22em] uppercase text-[var(--brand)]">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="text-2xl md:text-3xl font-cinzel text-[var(--dark)] mt-1">
            {title}
          </h2>
        </div>
        {right ? <div className="shrink-0">{right}</div> : null}
      </div>
      {children}
    </div>
  );
}

function MoodButton({
  active,
  label,
  onClick,
}: {
  active?: boolean;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cx(
        "px-4 py-2 rounded-full border text-sm transition",
        "active:scale-[0.99]",
        active
          ? "border-[var(--brand)] bg-[var(--brand)]/10 text-[var(--brand-dark)]"
          : "border-[#e5dfd7] bg-white hover:border-[var(--brand)] hover:bg-[var(--brand)]/5 text-[#555]"
      )}
    >
      {label}
    </button>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-[#e5dfd7] bg-white px-3 py-1 text-xs text-[#666]">
      {children}
    </span>
  );
}

function getTimeLabel() {
  const h = new Date().getHours();
  if (h < 11) return "Vormittag";
  if (h < 15) return "Mittag";
  if (h < 18) return "Nachmittag";
  return "Abend";
}

/* --------------------------------------------------------
   Page
-------------------------------------------------------- */

export default function ExtrasPage() {
  const timeLabel = useMemo(() => getTimeLabel(), []);

  const hacks: BarHack[] = useMemo(
    () => [
      { id: "h1", badge: "Pro-Tipp", title: "Aperitivo-Regel", text: "Erst ein Drink, dann entscheiden. Macht aus „nur kurz“ automatisch einen guten Abend." },
      { id: "h2", badge: "Sharing", title: "Gruppen-Strategie", text: "Eine Pizza zum Teilen + ein Pasta-Gericht extra = alle happy. Wirklich." },
      { id: "h3", badge: "Date", title: "Gemütlich ohne Mühe", text: "Start an der Bar, dann teilen. Klingt simpel — ist aber der Trick." },
      { id: "h4", badge: "Mood", title: "Genießen statt hetzen", text: "Kein Stress. Ein guter Abend ist keine To-do-Liste." },
      { id: "h5", badge: "Bar", title: "Feierabend-Move", text: "Spritz an der Bar, kurzer Blick in die Karte, dann Holzofen. Funktioniert jedes Mal." },
    ],
    []
  );

  const recsByMood: Record<SpritzMood, Recommendation[]> = useMemo(
    () => ({
      sun: [
        {
          id: "sun-1",
          title: "Sonnenmodus: Terrasse im Kopf",
          subtitle: "Frisch, leicht, ein bisschen „Urlaub“.",
          drink: "Aperol Spritz oder Limoncello Spritz",
          food: "Aperitivo-Teller + Pizza zum Teilen",
          vibe: "Du willst Leichtigkeit. Wir liefern Leichtigkeit.",
          tip: "Bar zuerst. Dann teilen. Dann glücklich.",
          cta: { label: "Reservieren", href: "/kontakt" },
        },
      ],
      rain: [
        {
          id: "rain-1",
          title: "Regen draußen – Glanz drinnen",
          subtitle: "Warm, cozy, ohne Drama.",
          drink: "Rotwein oder Negroni",
          food: "Lasagne al Forno oder Pasta Comfort",
          vibe: "Draußen grau. Drinnen: La mia Casa.",
          tip: "Comfort gewinnt. Immer.",
          cta: { label: "Speisekarte", href: "/speisekarte" },
        },
      ],
      date: [
        {
          id: "date-1",
          title: "Date-Night (ohne peinliche Momente)",
          subtitle: "Leise. Gut. Unaufgeregt.",
          drink: "Ein Glas Wein & „wir schauen mal“",
          food: "Pizza Speciale zum Teilen",
          vibe: "Man redet. Man lacht. Man teilt. Perfekt.",
          tip: "Teilen = weniger Entscheidung, mehr Genuss.",
          cta: { label: "Tisch sichern", href: "/kontakt" },
        },
      ],
      friends: [
        {
          id: "friends-1",
          title: "Freunde-Modus: Mitte ist Gesetz",
          subtitle: "Alles in die Mitte. Alle probieren.",
          drink: "Spritz-Runde für alle",
          food: "Sharing-Platte + Pizza + „noch kurz“",
          vibe: "Du bestellst. Alle greifen rein. Ende der Diskussion.",
          tip: "Ein Extra zum Teilen wirkt wie ein Upgrade.",
          cta: { label: "Speisekarte", href: "/speisekarte" },
        },
      ],
      quick: [
        {
          id: "quick-1",
          title: "Nur kurz… (hahaha)",
          subtitle: "Du kommst für 20 Minuten und bleibst 2 Stunden.",
          drink: "Ein schneller Spritz an der Bar",
          food: "Kleiner Snack – und dann schauen wir weiter 😉",
          vibe: "Das Leben ist zu kurz für „nur kurz“.",
          tip: "Setz dich. Trink. Atme. Der Rest passiert.",
          cta: { label: "Kontakt", href: "/kontakt" },
        },
      ],
      wildcard: [
        {
          id: "wild-1",
          title: "Wildcard: Wir entscheiden 😈",
          subtitle: "Heute wird’s spontan gut.",
          drink: "Spritz oder Negroni – je nach Vibe",
          food: "Ein Gericht zum Teilen + etwas Warmes",
          vibe: "Wenn du dich nicht entscheiden willst: perfekt.",
          tip: "Sag einfach: „Mach mir was Gutes.“",
          cta: { label: "Reservieren", href: "/kontakt" },
        },
      ],
    }),
    []
  );

  const [mood, setMood] = useState<SpritzMood | null>(null);
  const [rec, setRec] = useState<Recommendation | null>(null);
  const [hack, setHack] = useState<BarHack>(() => hacks[0]);
  const [confettiKey, setConfettiKey] = useState(0);

  const rollHack = () => {
    const candidates = hacks.filter((h) => h.id !== hack?.id);
    const list = candidates.length ? candidates : hacks;
    setHack(list[Math.floor(Math.random() * list.length)]);
  };

  const pickRecommendation = (picked: SpritzMood) => {
    const pool = recsByMood[picked];
    const next = pool[Math.floor(Math.random() * pool.length)];
    setMood(picked);
    setRec(next);
    if (!prefersReducedMotion()) setConfettiKey((k) => k + 1);
  };

  // Cocktail Quiz
  const cocktailQuiz: CocktailQuizQuestion[] = useMemo(
    () => [
      {
        id: 1,
        question: "Was darf dein Drink heute sein?",
        options: [
          { label: "Frisch & spritzig.", value: "spritz" },
          { label: "Sauer, aber sexy.", value: "sour" },
          { label: "Bitter – ich mein’s ernst.", value: "bitter" },
          { label: "Fruchtig & easy.", value: "fruity" },
        ],
      },
      {
        id: 2,
        question: "Du bestellst an der Bar und sagst …",
        options: [
          { label: "„Mach’s leicht & elegant.“", value: "spritz" },
          { label: "„Ich mag’s mit Kick.“", value: "sour" },
          { label: "„Überrasch mich – aber erwachsen.“", value: "bitter" },
          { label: "„Hauptsache schmeckt sofort.“", value: "fruity" },
        ],
      },
      {
        id: 3,
        question: "Zu Essen passt am besten …",
        options: [
          { label: "Aperitivo-Teller & Oliven.", value: "spritz" },
          { label: "Etwas Cremiges / Burrata-Vibe.", value: "sour" },
          { label: "Herzhaft & würzig.", value: "bitter" },
          { label: "Leicht & snacky.", value: "fruity" },
        ],
      },
    ],
    []
  );

  const cocktailResult: Record<
    CocktailQuizAnswer,
    { title: string; text: string; pick: SpritzMood; cta: { label: string; href: string } }
  > = useMemo(
    () => ({
      spritz: {
        title: "Du bist Team Spritz 🍊",
        text: "Leicht, lebendig, ein bisschen Italien – du startest den Abend am liebsten an der Bar.",
        pick: "sun",
        cta: { label: "Spritz-Setup anzeigen", href: "#spritz" },
      },
      sour: {
        title: "Du bist Team Sour 🍋",
        text: "Du magst’s mit Spannung: frisch, frech, mit einem kleinen Kick.",
        pick: "date",
        cta: { label: "Sour-Setup anzeigen", href: "#spritz" },
      },
      bitter: {
        title: "Du bist Team Bitter 🖤",
        text: "Du bist nicht hier für Zuckerwasser – du willst Charakter im Glas.",
        pick: "rain",
        cta: { label: "Bitter-Setup anzeigen", href: "#spritz" },
      },
      fruity: {
        title: "Du bist Team Fruchtig 🍓",
        text: "Easy, smooth, sofort gut – du willst Genuss ohne Nachdenken.",
        pick: "friends",
        cta: { label: "Frucht-Setup anzeigen", href: "#spritz" },
      },
    }),
    []
  );

  const [cqStep, setCqStep] = useState(0);
  const [cqAnswers, setCqAnswers] = useState<CocktailQuizAnswer[]>([]);
  const [cqResult, setCqResult] = useState<CocktailQuizAnswer | null>(null);

  const answerCocktail = (value: CocktailQuizAnswer) => {
    const next = [...cqAnswers];
    next[cqStep] = value;
    setCqAnswers(next);

    const isLast = cqStep === cocktailQuiz.length - 1;
    if (!isLast) return setCqStep((s) => s + 1);

    const counts: Record<CocktailQuizAnswer, number> = {
      spritz: 0,
      sour: 0,
      bitter: 0,
      fruity: 0,
    };
    next.forEach((a) => (counts[a] = (counts[a] || 0) + 1));

    let best: CocktailQuizAnswer = "spritz";
    let bestScore = -1;
    (Object.keys(counts) as CocktailQuizAnswer[]).forEach((k) => {
      if (counts[k] > bestScore) {
        best = k;
        bestScore = counts[k];
      }
    });

    setCqResult(best);
    // Ergebnis “feiern”
    if (!prefersReducedMotion()) setConfettiKey((k) => k + 1);
  };

  const resetCocktailQuiz = () => {
    setCqStep(0);
    setCqAnswers([]);
    setCqResult(null);
  };

  const currentCQ = cqStep < cocktailQuiz.length ? cocktailQuiz[cqStep] : null;

  // initial content
  useEffect(() => {
    rollHack();
    pickRecommendation("quick");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-6 py-16 md:py-20 space-y-20">
      {/* HERO */}
      <FadeIn>
        <header className="space-y-4 text-center md:text-left">
          <p className="text-xs tracking-[0.28em] uppercase text-[var(--brand)]">
            Extras
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-cinzel tracking-tight text-[var(--dark)]">
            Spritz, Vibes & kleine Überraschungen.
          </h1>
          <p className="text-lg text-[#555] max-w-3xl mx-auto md:mx-0">
            Spiel dich durch ein paar Extras – und hol dir Inspiration für deinen nächsten La mia Casa Moment.
          </p>

          <div className="pt-3 flex flex-wrap gap-2 justify-center md:justify-start">
            <Chip>⏰ {timeLabel}</Chip>
            <Chip>🍊 Spritz-O-Meter 2.0</Chip>
            <Chip>🍸 Cocktail-Quiz</Chip>
            <Chip>😈 Wildcard erlaubt</Chip>
          </div>
        </header>
      </FadeIn>

      {/* COCKTAIL QUIZ */}
      <section className="space-y-8">
        <FadeIn>
          <Card
            eyebrow="Cocktail-Quiz"
            title="Welcher Drink-Typ bist du?"
            right={
              <button
                type="button"
                onClick={resetCocktailQuiz}
                className="text-sm text-[var(--brand)] hover:text-[var(--brand-dark)]"
              >
                Neu starten
              </button>
            }
          >
            <div className="mb-4 flex items-center justify-between text-xs text-[#777] uppercase tracking-[0.22em]">
              <span>Fortschritt</span>
              <span>
                {Math.min(cqStep + 1, cocktailQuiz.length)} / {cocktailQuiz.length}
              </span>
            </div>

            {!cqResult && currentCQ && (
              <div className="space-y-6">
                <h3 className="text-lg md:text-xl font-medium text-[var(--dark)]">
                  {currentCQ.question}
                </h3>

                <div className="grid gap-3 md:grid-cols-2">
                  {currentCQ.options.map((opt) => (
                    <button
                      key={opt.label}
                      type="button"
                      onClick={() => answerCocktail(opt.value)}
                      className="text-left px-4 py-3 rounded-xl border border-[#e5dfd7] bg-white hover:border-[var(--brand)] hover:bg-[var(--brand)]/4 text-sm md:text-base transition"
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {cqResult && (
              <div className="space-y-4">
                <p className="text-sm uppercase tracking-[0.22em] text-[var(--brand)]">
                  Ergebnis
                </p>
                <h3 className="text-xl md:text-2xl font-cinzel text-[var(--dark)]">
                  {cocktailResult[cqResult].title}
                </h3>
                <p className="text-[#555] text-sm md:text-base max-w-2xl">
                  {cocktailResult[cqResult].text}
                </p>

                <button
                  type="button"
                  onClick={() => {
                    pickRecommendation(cocktailResult[cqResult].pick);
                    // smooth scroll to spritz
                    const el = document.getElementById("spritz");
                    el?.scrollIntoView({ behavior: "smooth", block: "start" });
                  }}
                  className="btn-brand px-6 py-3 text-sm md:text-base"
                >
                  Passendes Setup anzeigen →
                </button>

                <p className="text-xs text-[#888] mt-3">
                  Tipp: Du kannst jederzeit neu starten (oder einfach wild drauf los klicken 😈).
                </p>
              </div>
            )}
          </Card>
        </FadeIn>
      </section>

      {/* SPRITZ-O-METER 2.0 */}
      <section id="spritz" className="space-y-8">
        <FadeIn>
          <Card
            eyebrow="Spritz-O-Meter 2.0"
            title="Wähl deinen Vibe. Wir liefern das Setup."
            right={
              <button
                type="button"
                onClick={() => pickRecommendation("wildcard")}
                className="text-sm text-[var(--brand)] hover:text-[var(--brand-dark)]"
              >
                Wildcard 😈
              </button>
            }
            className="bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(255,255,255,0.86))]"
          >
            <div className="absolute inset-0">
              <ConfettiBurst fireKey={confettiKey} />
            </div>

            <p className="text-[#555] max-w-3xl mb-5 relative">
              Tipp: Wähl einfach irgendwas. Es ist sehr schwer, hier falsch zu liegen.
            </p>

            <div className="flex flex-wrap gap-2 mb-6 relative">
              <MoodButton active={mood === "sun"} label="☀️ Sonne" onClick={() => pickRecommendation("sun")} />
              <MoodButton active={mood === "rain"} label="🌧️ Regen" onClick={() => pickRecommendation("rain")} />
              <MoodButton active={mood === "date"} label="🕯️ Date" onClick={() => pickRecommendation("date")} />
              <MoodButton active={mood === "friends"} label="🥂 Freunde" onClick={() => pickRecommendation("friends")} />
              <MoodButton active={mood === "quick"} label="🏃‍♀️ Nur kurz" onClick={() => pickRecommendation("quick")} />
            </div>

            <div className="rounded-2xl border border-[#e5dfd7] bg-white p-5 md:p-6 relative">
              {rec ? (
                <div className="space-y-3">
                  <p className="text-xs tracking-[0.22em] uppercase text-[var(--brand)]">
                    Dein Setup
                  </p>

                  <h3 className="text-xl md:text-2xl font-cinzel text-[var(--dark)] leading-snug">
                    {rec.title}
                  </h3>
                  <p className="text-[#666]">{rec.subtitle}</p>

                  <div className="grid gap-3 md:grid-cols-2">
                    <div className="rounded-2xl border border-[#eee] bg-[var(--cream)]/60 p-4">
                      <p className="text-sm text-[#777] uppercase tracking-[0.18em]">Drink</p>
                      <p className="mt-1 text-[#555] font-medium">{rec.drink}</p>
                    </div>
                    <div className="rounded-2xl border border-[#eee] bg-[var(--cream)]/60 p-4">
                      <p className="text-sm text-[#777] uppercase tracking-[0.18em]">Food</p>
                      <p className="mt-1 text-[#555] font-medium">{rec.food}</p>
                    </div>
                  </div>

                  <p className="text-[#555] leading-relaxed">{rec.vibe}</p>

                  <div className="rounded-2xl border border-[#e5dfd7] bg-white/70 p-4">
                    <p className="text-xs tracking-[0.22em] uppercase text-[var(--brand)]">
                      Mini-Tipp
                    </p>
                    <p className="mt-1 text-[#555]">{rec.tip}</p>
                  </div>

                  <div className="pt-2 flex flex-wrap gap-3">
                    <Link href={rec.cta.href} className="btn-brand px-6 py-3 text-sm md:text-base">
                      {rec.cta.label}
                    </Link>
                    <button
                      type="button"
                      onClick={() => pickRecommendation(mood ?? "wildcard")}
                      className="btn-outline px-6 py-3 text-sm md:text-base"
                    >
                      Noch mal 🎲
                    </button>
                  </div>

                  <p className="text-xs text-[#888] mt-3">
                    {prefersReducedMotion()
                      ? "Animation ist auf deinem Gerät reduziert – fair."
                      : "Konfetti ist Absicht. Wir stehen dazu."}
                  </p>
                </div>
              ) : (
                <p className="text-[#777]">Wähl einen Vibe – und wir bauen dir das Setup.</p>
              )}
            </div>
          </Card>
        </FadeIn>
      </section>

      {/* BAR HACKS */}
      <FadeIn>
        <Card
          eyebrow="Bar-Hacks"
          title="Kleine Tricks für einen richtig guten Abend"
          right={
            <button
              type="button"
              onClick={rollHack}
              className="btn-outline px-5 py-2 text-sm"
            >
              Neuer Tipp ✨
            </button>
          }
        >
          <div className="grid gap-5 lg:grid-cols-3">
            <div className="rounded-3xl border border-[#e5dfd7] bg-white p-5 shadow-[0_12px_30px_rgba(0,0,0,0.03)] lg:col-span-2">
              <div className="flex items-center justify-between gap-3">
                <p className="text-xs tracking-[0.22em] uppercase text-[var(--brand)]">
                  {hack.badge}
                </p>
              </div>

              <h3 className="mt-2 text-xl font-cinzel text-[var(--dark)]">
                {hack.title}
              </h3>
              <p className="mt-2 text-[#555] leading-relaxed">
                {hack.text}
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                <Link href="/kontakt" className="btn-brand px-6 py-3 text-sm md:text-base">
                  Tisch reservieren
                </Link>
                <Link href="/speisekarte" className="btn-outline px-6 py-3 text-sm md:text-base">
                  Speisekarte ansehen
                </Link>
              </div>
            </div>

            <div className="rounded-3xl border border-[#e5dfd7] bg-[var(--cream)]/50 p-5">
              <p className="text-xs tracking-[0.22em] uppercase text-[var(--brand)]">
                Mini-Challenge
              </p>
              <h3 className="mt-2 text-lg font-cinzel text-[var(--dark)]">
                „Nur kurz“-Challenge
              </h3>
              <p className="mt-2 text-sm text-[#555] leading-relaxed">
                Komm „nur kurz“ auf einen Spritz vorbei. Wenn du nach 20 Minuten wieder gehst,
                bist du offiziell stärker als wir alle.
              </p>

              <div className="mt-4 rounded-2xl border border-[#e5dfd7] bg-white p-4">
                <p className="text-xs text-[#777] uppercase tracking-[0.18em]">
                  Cheat-Code
                </p>
                <p className="mt-1 text-sm text-[#555]">
                  Bar zuerst. Dann passiert’s. 😏
                </p>
              </div>
            </div>
          </div>
        </Card>
      </FadeIn>

      {/* FOOTER CTA */}
      <FadeIn>
        <div className="rounded-3xl border border-[#e5dfd7] bg-white/90 p-6 md:p-8 shadow-[0_16px_40px_rgba(0,0,0,0.04)]">
          <h2 className="text-2xl md:text-3xl font-cinzel text-[var(--dark)]">
            Mach’s nicht kompliziert.
          </h2>
          <p className="mt-2 text-[#555] max-w-2xl">
            Komm vorbei, start an der Bar, und den Rest regeln wir gemeinsam.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/kontakt" className="btn-brand px-7 py-3 text-sm md:text-base">
              Tisch reservieren
            </Link>
            <Link href="/speisekarte" className="btn-outline px-7 py-3 text-sm md:text-base">
              Speisekarte ansehen
            </Link>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}




