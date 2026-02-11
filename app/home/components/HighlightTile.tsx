type Props = {
  kicker: string;
  title: string;
  meta: string;
  text: string;
  hint?: string;
  icon: "calendar" | "pizza" | "snow" | "party" | "cocktail";
  onClick?: () => void;
};

export function HighlightTile({
  kicker,
  title,
  meta,
  text,
  hint,
  icon,
  onClick,
}: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group w-full text-left rounded-2xl border border-[#e9e4dc] bg-white/80 p-4 shadow-[0_10px_25px_rgba(0,0,0,0.05)] hover:shadow-[0_18px_40px_rgba(0,0,0,0.08)] hover:-translate-y-[2px] transition focus:outline-none"
    >
      <p className="text-[11px] tracking-[0.22em] uppercase text-[var(--brand)] mb-1">
        {kicker}
      </p>

      <h3 className="font-semibold text-[var(--dark)] text-base mb-1">
        {title}
      </h3>

      <div className="inline-flex items-center rounded-full bg-[var(--brand)]/10 px-2.5 py-1 text-xs text-[var(--brand-dark)] mb-2">
        {meta}
      </div>

      <p className="text-sm text-[#555] leading-relaxed">
        {text}
      </p>

      {hint && (
        <p className="mt-3 text-sm font-semibold text-[var(--brand)] group-hover:text-[var(--brand-dark)]">
          {hint}
        </p>
      )}
    </button>
  );
}

