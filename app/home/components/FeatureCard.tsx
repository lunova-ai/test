export function FeatureCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="card hover:-translate-y-[2px] transition-transform">
      <h3 className="text-xl font-cinzel mb-2 text-[var(--dark)]">{title}</h3>
      <p className="text-[#555] text-sm leading-relaxed">{text}</p>
    </div>
  );
}
