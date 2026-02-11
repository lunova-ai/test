"use client";

type IconName = "calendar" | "pizza" | "snow" | "party" | "cocktail" | "sun";

type Props = {
  kicker: string;
  title: string;
  meta: string;
  text: string;
  hint?: string;
  icon?: IconName;
  showIcon?: boolean;
  onClick?: () => void;
  disabled?: boolean;
};

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

function TileIcon({ icon }: { icon: IconName }) {
  const common = "h-5 w-5";
  switch (icon) {
    case "calendar":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M7 2v3M17 2v3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M3.5 9h17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path
            d="M6 6.5h12a2.5 2.5 0 0 1 2.5 2.5v10A2.5 2.5 0 0 1 18 21.5H6A2.5 2.5 0 0 1 3.5 19V9A2.5 2.5 0 0 1 6 6.5Z"
            stroke="currentColor"
            strokeWidth="1.8"
          />
        </svg>
      );
    case "pizza":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M12 3c4.7 0 8.7 1.8 10 3.2L12 21 2 6.2C3.3 4.8 7.3 3 12 3Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path d="M12 3v18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <circle cx="9" cy="9" r="1" fill="currentColor" />
          <circle cx="14" cy="11" r="1" fill="currentColor" />
          <circle cx="11" cy="14" r="1" fill="currentColor" />
        </svg>
      );
    case "party":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M4 20l5-16 11 11-16 5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
          <path d="M13 7l4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M6.5 14.5l3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case "cocktail":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M4 3h16l-6 7v9a3 3 0 0 1-6 0v-9L4 3Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path d="M9 21h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case "sun":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M12 16.5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Z"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <path
            d="M12 2.5v2.2M12 19.3v2.2M4.7 4.7l1.6 1.6M17.7 17.7l1.6 1.6M2.5 12h2.2M19.3 12h2.2M4.7 19.3l1.6-1.6M17.7 6.3l1.6-1.6"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      );
    case "snow":
    default:
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M12 2v20M4 6l16 12M20 6 4 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
  }
}

function KickerBadge({ kicker }: { kicker: string }) {
  const k = kicker.trim().toLowerCase();

  // Tailwind-safe: keine opacity-Suffixes auf arbitrary vars
  const tone =
    k.includes("fix") || k.includes("termin")
      ? "bg-[#f6d6cf] text-[#6b2a1a] border-[#f0c3b9]"
      : k.includes("sonntag")
      ? "bg-[#dfe4cf] text-[#3f4a2b] border-[#d2d9be]"
      : "bg-[var(--brand)] text-white border-[var(--brand)]";

  return (
    <span
      className={cx(
        "inline-flex items-center rounded-full px-4 py-1",
        "text-[11px] font-semibold tracking-[0.18em] uppercase",
        "border shadow-sm",
        tone
      )}
    >
      {kicker}
    </span>
  );
}

export function HighlightTile({
  kicker,
  title,
  meta,
  text,
  hint,
  icon,
  showIcon = false, // <- default: aus (ruhiger + mehr Platz)
  onClick,
  disabled = false,
}: Props) {
  const hasAction = typeof onClick === "function" && !disabled;

  return (
    <button
      type="button"
      onClick={hasAction ? onClick : undefined}
      disabled={!hasAction}
      aria-disabled={!hasAction}
      className={cx(
        "group w-full h-full text-left",
        "rounded-[22px] border border-[#e9e4dc] bg-white/85",
        "px-6 py-5",
        "shadow-[0_12px_30px_rgba(0,0,0,0.06)]",
        "transition-transform duration-200 will-change-transform",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--cream)]",
        "[touch-action:manipulation] active:scale-[0.985]",
        !hasAction && "opacity-70 cursor-default active:scale-100 pointer-events-none"
      )}
    >
      <div className="flex h-full flex-col">
        {/* Badge */}
        <div className="mb-4">
          <KickerBadge kicker={kicker} />
        </div>

        {/* Header */}
        <div className="flex items-start gap-3 min-w-0">
          {showIcon && icon ? (
            <div className="shrink-0 text-[var(--brand)] mt-[2px]">
              <TileIcon icon={icon} />
            </div>
          ) : null}

          <div className="min-w-0">
            {/* Titel: 1 Zeile, Ellipsis (keine Wort-Zerstückelung) */}
            <h3
              className={cx(
                "font-semibold text-[var(--dark)] leading-snug",
                "text-[14.5px] md:text-[15.5px]",
                "whitespace-nowrap overflow-hidden text-ellipsis",
                "pr-1"
              )}
              title={title} // Tooltip on hover (nice-to-have)
            >
              {title}
            </h3>

            {/* Meta darf umbrechen */}
            <p className="mt-1 text-sm text-[var(--brand-dark)] leading-snug break-words">
              {meta}
            </p>
          </div>
        </div>

        <p className="mt-4 text-sm text-[#555] leading-relaxed break-words">
          {text}
        </p>

        {/* Hint unten fixiert */}
        {hint ? (
          <p
            className={cx(
              "mt-auto pt-4 inline-flex items-center gap-2",
              "text-sm font-semibold text-[var(--brand)]",
              "sm:group-hover:text-[var(--brand-dark)]",
              "transition"
            )}
          >
            <span className="break-words">{hint}</span>
            <span className="transition-transform sm:group-hover:translate-x-[2px]">›</span>
          </p>
        ) : null}
      </div>

      <style jsx>{`
        @media (hover: hover) and (pointer: fine) {
          button:hover {
            transform: translateY(-3px);
            box-shadow: 0 18px 45px rgba(0, 0, 0, 0.09);
          }
        }
      `}</style>
    </button>
  );
}
