"use client";

import { useMemo, useState } from "react";
import FadeIn from "../home/components/FadeIn";
import Link from "next/link";

type PizzaAnswer = "classic" | "creative" | "sharing" | "comfort";

type PizzaQuestion = {
  id: number;
  question: string;
  options: {
    label: string;
    value: PizzaAnswer;
  }[];
};

type DishSuggestion = {
  id: string;
  title: string;
  mood: string;
  description: string;
  link?: string;
};

type Recipe = {
  id: string;
  title: string;
  teaser: string;
  difficulty: "easy" | "medium";
  time: string;
  servings: string;
  ingredients: string[];
  steps: string[];
};

type TriviaQuestion = {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
};

export default function ExtrasPage() {
  /* --------------------------------------------------------
     1) PIZZA-PERSÖNLICHKEITS-QUIZ
  -------------------------------------------------------- */

  const pizzaQuestions: PizzaQuestion[] = useMemo(
    () => [
      {
        id: 1,
        question: "Wie soll dein perfekter Abend im La mia Casa starten?",
        options: [
          {
            label: "Ein Spritz an der Bar, ankommen & schauen.",
            value: "creative",
          },
          {
            label: "Ein Glas Rotwein und Brot mit Olivenöl.",
            value: "classic",
          },
          {
            label: "Wir bestellen eine Runde für den ganzen Tisch.",
            value: "sharing",
          },
          {
            label: "Erst mal warm werden mit etwas richtig Sättigendem.",
            value: "comfort",
          },
        ],
      },
      {
        id: 2,
        question: "Bei Pizza denkst du zuerst an …",
        options: [
          {
            label: "Tomate, Mozzarella, Prosciutto – so wie früher.",
            value: "classic",
          },
          {
            label: "Gerne etwas Ungewöhnliches – Käse, Feigen, Brie …",
            value: "creative",
          },
          {
            label: "Hauptsache viel – wir teilen sowieso alles.",
            value: "sharing",
          },
          {
            label: "Dicker Belag, viel Käse, Comfort-Food.",
            value: "comfort",
          },
        ],
      },
      {
        id: 3,
        question: "Wie wichtig ist dir Schärfe?",
        options: [
          {
            label: "Eher mild, ich genieße lieber die Aromen.",
            value: "classic",
          },
          {
            label: "Ein bisschen Kick darf sein.",
            value: "creative",
          },
          {
            label: "Wir bestellen einfach beides – mild & scharf.",
            value: "sharing",
          },
          {
            label: "Schärfe ist Nebensache, hauptsache warm und satt.",
            value: "comfort",
          },
        ],
      },
    ],
    []
  );

  const [quizStep, setQuizStep] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState<PizzaAnswer[]>([]);
  const [quizResult, setQuizResult] = useState<PizzaAnswer | null>(null);

  const handleQuizAnswer = (value: PizzaAnswer) => {
    const nextAnswers = [...quizAnswers];
    nextAnswers[quizStep] = value;
    setQuizAnswers(nextAnswers);

    const isLast = quizStep === pizzaQuestions.length - 1;
    if (isLast) {
      const counts: Record<PizzaAnswer, number> = {
        classic: 0,
        creative: 0,
        sharing: 0,
        comfort: 0,
      };
      nextAnswers.forEach((a) => {
        counts[a] = (counts[a] || 0) + 1;
      });

      let best: PizzaAnswer = "classic";
      let bestScore = -1;
      (Object.keys(counts) as PizzaAnswer[]).forEach((key) => {
        if (counts[key] > bestScore) {
          best = key;
          bestScore = counts[key];
        }
      });

      setQuizResult(best);
      setQuizStep(pizzaQuestions.length);
    } else {
      setQuizStep((s) => s + 1);
    }
  };

  const resetQuiz = () => {
    setQuizAnswers([]);
    setQuizStep(0);
    setQuizResult(null);
  };

  const resultText: Record<
    PizzaAnswer,
    { title: string; text: string; link: string }
  > = {
    classic: {
      title: "Du bist Team Klassiker.",
      text: "Du magst es ehrlich, italienisch und ohne viel Schnickschnack – Margherita, Prosciutto & Co. sind genau dein Ding.",
      link: "/speisekarte#pizza-klassisch",
    },
    creative: {
      title: "Du bist Team Kreativ.",
      text: "Neue Kombinationen, besondere Zutaten – Brie, Burrata oder Trüffel dürfen auf deiner Pizza gerne mal auftreten.",
      link: "/speisekarte#pizza-speciale",
    },
    sharing: {
      title: "Du bist Team Sharing.",
      text: "Am liebsten bestellt ihr quer durch die Karte und teilt alles. Perfekt für große Runden und Fritto Misto.",
      link: "/speisekarte#carne-pesce",
    },
    comfort: {
      title: "Du bist Team Comfort-Food.",
      text: "Warm, satt, herzhaft – Lasagne, Pasta aus dem Ofen und reich belegte Pizzen machen dich glücklich.",
      link: "/speisekarte#pasta-classico",
    },
  };

  /* --------------------------------------------------------
     2) „WAS ESS ICH HEUTE?“ – ZUFALLSEMPFEHLUNG
  -------------------------------------------------------- */

  const dishSuggestions: DishSuggestion[] = useMemo(
    () => [
      {
        id: "pizza-brie-crudo",
        title: "Pizza Brie e Crudo",
        mood: "Date Night",
        description:
          "Paradeisersauce, Mozzarella, Brie und Prosciutto Crudo – cremig, herzhaft und ein bisschen elegant.",
        link: "/speisekarte#pizza-speciale",
      },
      {
        id: "pasta-pescatore",
        title: "Pasta Pescatore",
        mood: "Urlaubsgefühl",
        description:
          "Spaghetti mit Garnelen, Muscheln und Meeresfrüchten in Paradeisersauce – wie ein Abend an der Küste.",
        link: "/speisekarte#pasta-speciale",
      },
      {
        id: "fritto-misto",
        title: "Fritto Misto di Mare",
        mood: "Runde mit Freunden",
        description:
          "Calamari, Garnelen und Meeresfrüchte – perfekt, wenn mehrere Hände in die Mitte greifen.",
        link: "/speisekarte#carne-pesce",
      },
      {
        id: "lasagne",
        title: "Lasagne della Casa al Forno",
        mood: "Comfort-Food",
        description:
          "Im Ofen überbacken, herzhaft und warm – ideal nach einem langen Tag oder als Soulfood am Wochenende.",
        link: "/speisekarte#pasta-classico",
      },
    ],
    []
  );

  const [currentSuggestion, setCurrentSuggestion] =
    useState<DishSuggestion | null>(null);

  const rollSuggestion = () => {
    if (dishSuggestions.length === 0) return;
    const candidates = dishSuggestions.filter(
      (d) => d.id !== currentSuggestion?.id
    );
    const list = candidates.length > 0 ? candidates : dishSuggestions;
    const random = list[Math.floor(Math.random() * list.length)];
    setCurrentSuggestion(random);
  };

  /* --------------------------------------------------------
     3) REZEPTE
  -------------------------------------------------------- */

  const recipes: Recipe[] = useMemo(
    () => [
      {
        id: "bruschetta",
        title: "Bruschetta wie bei uns",
        teaser:
          "Wenige Zutaten, viel Geschmack – perfekt als Starter vor der Pizza.",
        difficulty: "easy",
        time: "15 Minuten",
        servings: "2–4 Personen",
        ingredients: [
          "1 Baguette oder Ciabatta",
          "4–5 reife Tomaten",
          "1 kleine rote Zwiebel",
          "1 Knoblauchzehe",
          "Olivenöl (kaltgepresst)",
          "Frisches Basilikum",
          "Salz & Pfeffer",
        ],
        steps: [
          "Brot in Scheiben schneiden und kurz im Ofen oder in der Pfanne anrösten.",
          "Tomaten klein würfeln, Zwiebel fein hacken.",
          "Alles mit Olivenöl, Salz, Pfeffer und klein geschnittenem Basilikum vermischen.",
          "Brot mit einer halbierten Knoblauchzehe einreiben.",
          "Tomatenmischung auf das warme Brot geben und sofort servieren.",
        ],
      },
      {
        id: "aperitivo",
        title: "Kleiner Aperitivo-Teller",
        teaser:
          "In 5 Minuten einen Mini-Aperitivo zuhause zaubern – fast wie bei uns an der Bar.",
        difficulty: "easy",
        time: "5–10 Minuten",
        servings: "2 Personen",
        ingredients: [
          "Oliven",
          "Kleines Stück Hartkäse (z.B. Pecorino oder Parmesan)",
          "Grissini oder Weißbrot",
          "Getrocknete Tomaten",
          "Olivenöl & etwas grobes Salz",
        ],
        steps: [
          "Oliven in einer kleinen Schale anrichten.",
          "Käse in Stücke brechen oder schneiden.",
          "Getrocknete Tomaten mit etwas Olivenöl beträufeln.",
          "Alles auf einem kleinen Brett oder Teller anrichten.",
          "Mit einem Glas Spritz oder Wein genießen.",
        ],
      },
    ],
    []
  );

  const [openRecipeId, setOpenRecipeId] = useState<string | null>(null);

  const toggleRecipe = (id: string) => {
    setOpenRecipeId((current) => (current === id ? null : id));
  };

  /* --------------------------------------------------------
     4) MINI-WISSENSQUIZ (inkl. „Frohe Weihnachten“)
  -------------------------------------------------------- */

  const triviaQuestions: TriviaQuestion[] = useMemo(
    () => [
      {
        id: 1,
        question: "Was bedeutet „al dente“ bei Pasta wirklich?",
        options: [
          "Komplett weich gekocht",
          "Mit leichtem Biss in der Mitte",
          "Mit viel Käse überbacken",
          "Nur mit Salz und Öl gekocht",
        ],
        correctIndex: 1,
        explanation:
          "„Al dente“ heißt wortwörtlich „zum Zahn“ – also mit leichtem Biss, nicht komplett weich.",
      },
      {
        id: 2,
        question: "Was landet in Italien traditionell NICHT auf einer Pizza?",
        options: ["Mozzarella", "Ananas", "Prosciutto", "Frische Tomaten"],
        correctIndex: 1,
        explanation:
          "Die berühmte Pizza Hawaii stammt nicht aus Italien – Ananas ist dort eher ein Running Gag als Klassiker.",
      },
      {
        id: 3,
        question: "Was ist typisch für einen guten Holzofen?",
        options: [
          "Immer exakt 180 °C",
          "Ein bisschen Rauchgeruch und ungleichmäßige Hitze",
          "Ausschließlich Gasflamme",
          "Er wird nur für Brot verwendet",
        ],
        correctIndex: 1,
        explanation:
          "Der Charme eines Holzofens liegt in der hohen, leicht ungleichmäßigen Hitze und dem Aroma – genau das gibt der Pizza ihren Charakter.",
      },
      {
        id: 4,
        question: 'Wie heißt „Frohe Weihnachten“ auf Italienisch?',
        options: ["Buon Natale", "Felice Navidad", "Buona sera", "Ciao Natale"],
        correctIndex: 0,
        explanation:
          "Richtig ist „Buon Natale“. Die anderen Optionen sind zwar bemüht international, aber leider nicht italienisch: „Felice Navidad“ ist Spanisch, „Buona sera“ passt eher zum Abend als zu Weihnachten – und „Ciao Natale“ klingt, als würde man die Feiertage freundlich verabschieden.",
      },
    ],
    []
  );

  const [triviaState, setTriviaState] = useState<{
    [id: number]: { selected: number; isCorrect: boolean };
  }>({});

  const handleTriviaAnswer = (id: number, index: number) => {
    // Antwort nur einmal zulassen
    if (triviaState[id]) return;

    const question = triviaQuestions.find((q) => q.id === id);
    if (!question) return;

    const isCorrect = question.correctIndex === index;
    setTriviaState((prev) => ({
      ...prev,
      [id]: { selected: index, isCorrect },
    }));
  };

  /* --------------------------------------------------------
     RENDER
  -------------------------------------------------------- */

  const currentQuestion =
    quizStep < pizzaQuestions.length ? pizzaQuestions[quizStep] : null;

  return (
    <div className="max-w-6xl mx-auto px-6 py-16 md:py-20 space-y-20">
      {/* Hero */}
      <FadeIn>
        <header className="space-y-4 text-center md:text-left">
          <p className="text-xs tracking-[0.28em] uppercase text-[var(--brand)]">
            Extras
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-cinzel tracking-tight text-[var(--dark)]">
            Ein bisschen La mia Casa für zuhause.
          </h1>
          <p className="text-lg text-[#555] max-w-3xl mx-auto md:mx-0">
            Quiz, kleine Rezepte und Inspirationen – alles, was Lust auf deinen
            nächsten Besuch macht.
          </p>
        </header>
      </FadeIn>

      {/* 1) Pizza-Persönlichkeits-Quiz */}
      <section className="space-y-8">
        <FadeIn>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <h2 className="text-2xl md:text-3xl font-cinzel text-[var(--dark)]">
                Welche Pizza passt heute zu dir?
              </h2>
              <p className="mt-2 text-[#555] max-w-2xl">
                Beantworte ein paar Fragen und wir verraten dir, welche Richtung
                auf der Karte besonders gut zu dir passt.
              </p>
            </div>
            <button
              type="button"
              onClick={resetQuiz}
              className="self-start md:self-auto text-sm text-[var(--brand)] hover:text-[var(--brand-dark)]"
            >
              Quiz neu starten
            </button>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="rounded-3xl bg-white/90 border border-[#e5dfd7] p-6 md:p-8 shadow-[0_16px_40px_rgba(0,0,0,0.04)]">
            {/* Fortschritt */}
            <div className="mb-4 flex items-center justify-between text-xs text-[#777] uppercase tracking-[0.22em]">
              <span>Pizza-Quiz</span>
              <span>
                Frage {Math.min(quizStep + 1, pizzaQuestions.length)} /{" "}
                {pizzaQuestions.length}
              </span>
            </div>

            {currentQuestion && !quizResult && (
              <div className="space-y-6">
                <h3 className="text-lg md:text-xl font-medium text-[var(--dark)]">
                  {currentQuestion.question}
                </h3>
                <div className="grid gap-3">
                  {currentQuestion.options.map((opt) => (
                    <button
                      key={opt.label}
                      type="button"
                      onClick={() => handleQuizAnswer(opt.value)}
                      className="text-left px-4 py-3 rounded-xl border border-[#e5dfd7] bg-white hover:border-[var(--brand)] hover:bg-[var(--brand)]/4 text-sm md:text-base transition"
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {quizResult && (
              <div className="space-y-4">
                <p className="text-sm uppercase tracking-[0.22em] text-[var(--brand)]">
                  Ergebnis
                </p>
                <h3 className="text-xl md:text-2xl font-cinzel text-[var(--dark)]">
                  {resultText[quizResult].title}
                </h3>
                <p className="text-[#555] text-sm md:text-base max-w-xl">
                  {resultText[quizResult].text}
                </p>
                <Link
                  href={resultText[quizResult].link}
                  className="inline-flex items-center gap-2 text-sm md:text-base font-semibold text-[var(--brand)] hover:text-[var(--brand-dark)]"
                >
                  Zur passenden Kategorie der Speisekarte →
                </Link>
              </div>
            )}
          </div>
        </FadeIn>
      </section>

      {/* 2) Zufallsempfehlung */}
      <section className="space-y-6">
        <FadeIn>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h2 className="text-2xl md:text-3xl font-cinzel text-[var(--dark)]">
                „Was ess ich heute?“
              </h2>
              <p className="mt-2 text-[#555] max-w-2xl">
                Lass das Schicksal entscheiden – wir schlagen dir ein Gericht
                von unserer Karte vor.
              </p>
            </div>
            <button
              type="button"
              onClick={rollSuggestion}
              className="btn-brand px-6 py-3 text-sm md:text-base"
            >
              Vorschlag würfeln
            </button>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="rounded-3xl bg-white/90 border border-[#e5dfd7] p-6 md:p-8 min-h-[120px] flex items-center">
            {currentSuggestion ? (
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.22em] text-[var(--brand)]">
                  Stimmung: {currentSuggestion.mood}
                </p>
                <h3 className="text-xl font-cinzel text-[var(--dark)]">
                  {currentSuggestion.title}
                </h3>
                <p className="text-sm md:text-base text-[#555] max-w-xl">
                  {currentSuggestion.description}
                </p>
                {currentSuggestion.link && (
                  <Link
                    href={currentSuggestion.link}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand)] hover:text-[var(--brand-dark)] mt-2"
                  >
                    Gericht auf der Speisekarte ansehen →
                  </Link>
                )}
              </div>
            ) : (
              <p className="text-sm md:text-base text-[#777]">
                Drück auf „Vorschlag würfeln“ und wir suchen dir etwas Passendes
                von der Karte aus.
              </p>
            )}
          </div>
        </FadeIn>
      </section>

      {/* 3) Kleine Rezepte */}
      <section className="space-y-6">
        <FadeIn>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <h2 className="text-2xl md:text-3xl font-cinzel text-[var(--dark)]">
                Kleine Rezepte für zuhause
              </h2>
              <p className="mt-2 text-[#555] max-w-2xl">
                Einfach nachzukochen, ohne großes Chaos in der Küche – ideal
                als Vorgeschmack auf den nächsten Abend bei uns.
              </p>
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="grid gap-6 md:grid-cols-2">
            {recipes.map((recipe) => {
              const isOpen = openRecipeId === recipe.id;
              return (
                <div
                  key={recipe.id}
                  className="rounded-3xl border border-[#e5dfd7] bg-white/90 p-5 md:p-6 shadow-[0_12px_30px_rgba(0,0,0,0.03)]"
                >
                  <button
                    type="button"
                    onClick={() => toggleRecipe(recipe.id)}
                    className="w-full text-left flex items-start justify-between gap-3"
                  >
                    <div>
                      <h3 className="text-lg md:text-xl font-cinzel text-[var(--dark)]">
                        {recipe.title}
                      </h3>
                      <p className="mt-1 text-sm text-[#555]">
                        {recipe.teaser}
                      </p>
                      <p className="mt-2 text-xs text-[#777]">
                        {recipe.time} · {recipe.servings} ·{" "}
                        {recipe.difficulty === "easy"
                          ? "Einfach"
                          : "Mittlerer Aufwand"}
                      </p>
                    </div>
                    <span className="text-sm text-[var(--brand)] mt-1">
                      {isOpen ? "–" : "+"}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="mt-4 grid gap-3 text-sm text-[#555] md:grid-cols-2">
                      <div>
                        <p className="font-semibold mb-1">Zutaten</p>
                        <ul className="list-disc list-inside space-y-1">
                          {recipe.ingredients.map((ing) => (
                            <li key={ing}>{ing}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold mb-1">Zubereitung</p>
                        <ol className="list-decimal list-inside space-y-1">
                          {recipe.steps.map((step, idx) => (
                            <li key={idx}>{step}</li>
                          ))}
                        </ol>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </FadeIn>
      </section>

      {/* 4) Mini-Wissensquiz */}
      <section className="space-y-6">
        <FadeIn>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <h2 className="text-2xl md:text-3xl font-cinzel text-[var(--dark)]">
                Wie gut kennst du Italien &amp; Pizza?
              </h2>
              <p className="mt-2 text-[#555] max-w-2xl">
                Kleine Fragen rund um Küche, Ofen und Sprache – ganz ohne
                Prüfungsstress.
              </p>
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="grid gap-5 md:grid-cols-2">
            {triviaQuestions.map((q) => {
              const state = triviaState[q.id];

              return (
                <div
                  key={q.id}
                  className="rounded-3xl border border-[#e5dfd7] bg-white/90 p-5 shadow-[0_12px_30px_rgba(0,0,0,0.03)]"
                >
                  <p className="text-sm uppercase tracking-[0.18em] text-[var(--brand)] mb-2">
                    Frage {q.id}
                  </p>
                  <p className="text-base md:text-lg font-medium text-[var(--dark)] mb-3">
                    {q.question}
                  </p>

                  <div className="space-y-2">
                    {q.options.map((opt, index) => {
                      const isSelected = state?.selected === index;
                      const isCorrect = q.correctIndex === index;

                      let classes =
                        "w-full text-left px-4 py-2.5 rounded-xl border text-sm transition";

                      if (!state) {
                        classes +=
                          " border-[#e5dfd7] hover:border-[var(--brand)] hover:bg-[var(--brand)]/4";
                      } else if (isCorrect) {
                        classes +=
                          " border-emerald-500/70 bg-emerald-50 text-emerald-800";
                      } else if (isSelected && !isCorrect) {
                        classes +=
                          " border-rose-500/70 bg-rose-50 text-rose-800";
                      } else {
                        classes += " border-[#e5dfd7] opacity-70";
                      }

                      return (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => handleTriviaAnswer(q.id, index)}
                          className={classes}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>

                  {state && (
                    <p className="mt-3 text-xs md:text-sm text-[#555]">
                      {state.isCorrect ? "Richtig:" : "Auflösung:"}{" "}
                      {q.explanation}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </FadeIn>
      </section>
    </div>
  );
}



