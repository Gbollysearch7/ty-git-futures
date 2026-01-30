import { reasons } from "@/data/content";

export default function Reasons() {
  return (
    <section className="py-24 bg-bg-primary">
      <div className="max-w-[1280px] mx-auto px-6 text-center">
        <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-xs font-semibold text-primary tracking-wider mb-6">
          WHY TRADERSYARD
        </span>
        <h2 className="text-3xl sm:text-[42px] font-bold mb-4">
          10 Reasons Traders Choose Us
        </h2>
        <p className="text-lg text-text-secondary mb-12">
          We built the prop firm we wish existed. Here&apos;s what makes us different.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
          {reasons.map((reason) => (
            <div
              key={reason.number}
              className={`bg-bg-card border rounded-2xl p-6 text-left transition-all hover:-translate-y-1 hover:border-border-hover ${
                reason.featured
                  ? "border-primary bg-gradient-to-b from-primary/[0.08] to-transparent"
                  : "border-border"
              }`}
            >
              <span className="text-xs font-bold text-primary mb-2 block">
                {reason.number}
              </span>
              <h3 className="text-base font-semibold mb-2">{reason.title}</h3>
              <p className="text-[13px] text-text-secondary leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA - NEW: was missing in original */}
        <a
          href="#pricing"
          className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-bg-primary text-lg font-semibold rounded-2xl hover:bg-primary-light hover:shadow-[0_0_40px_rgba(34,197,94,0.3)] transition-all"
        >
          See Our Pricing
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M7 4L13 10L7 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </section>
  );
}
