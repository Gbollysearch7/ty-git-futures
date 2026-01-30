export default function FeaturedIn() {
  const partners = [
    { name: "Andromeda Capital", width: 170 },
    { name: "AgenaTrader", width: 130 },
    { name: "Agena Broker", width: 130 },
  ];

  return (
    <section className="py-12 bg-bg-secondary border-y border-border">
      <div className="max-w-[1280px] mx-auto px-6">
        <p className="text-center text-xs font-semibold text-text-muted tracking-[0.2em] uppercase mb-8">
          Our Trusted Partners
        </p>
        <div className="flex flex-wrap items-center justify-center gap-10 sm:gap-16">
          {partners.map((p) => (
            <div
              key={p.name}
              className="flex items-center gap-3 opacity-50 hover:opacity-90 transition-opacity"
              style={{ minWidth: p.width }}
            >
              <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                <span className="text-primary font-bold text-sm">{p.name.charAt(0)}</span>
              </div>
              <span className="text-text-primary font-bold text-lg tracking-wide whitespace-nowrap">
                {p.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
