import {
  comparisonFeatures,
  tyComparisonValues,
  comparisonCompetitors,
} from "@/data/content";

export default function Comparison() {
  return (
    <section id="compare" className="py-24 bg-bg-primary">
      <div className="max-w-[1280px] mx-auto px-6 text-center">
        <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-xs font-semibold text-primary tracking-wider mb-6">
          HEAD-TO-HEAD
        </span>
        <h2 className="text-3xl sm:text-[42px] font-bold mb-4">
          See How We Compare
        </h2>
        <p className="text-lg text-text-secondary mb-12">
          Side-by-side comparison against the biggest futures prop firms.
        </p>

        {/* Comparison Grid */}
        <div className="overflow-x-auto pb-4 mb-12">
          <div className="flex gap-0.5 min-w-[900px] max-w-[1200px] mx-auto">
            {/* Labels column */}
            <div className="flex-none w-40 min-w-[160px]">
              <div className="h-[60px] flex items-center" />
              {comparisonFeatures.map((feature) => (
                <div
                  key={feature}
                  className="h-12 flex items-center text-sm text-text-secondary mb-0.5"
                >
                  {feature}
                </div>
              ))}
            </div>

            {/* TradersYard column */}
            <div className="flex-1 min-w-[180px]">
              <div className="h-[60px] flex items-center justify-center bg-brand-blue text-white rounded-t-xl mb-0.5">
                <span className="text-base font-bold tracking-wider">TradersYard</span>
              </div>
              {tyComparisonValues.map((value, i) => (
                <div
                  key={i}
                  className={`h-12 flex items-center justify-center text-sm font-medium mb-0.5 bg-brand-blue/[0.08] ${
                    ["STATIC", "0 Days", "$0", "90%", "Unlimited", "On-Demand", "Included", "None"].includes(value)
                      ? "text-primary font-semibold"
                      : "text-text-primary"
                  }`}
                >
                  {value}
                </div>
              ))}
            </div>

            {/* Competitor columns */}
            {comparisonCompetitors.map((comp) => (
              <div key={comp.name} className="flex-1 min-w-[180px]">
                <div className="h-[60px] flex items-center justify-center bg-bg-elevated text-text-primary rounded-t-xl mb-0.5">
                  <span className="text-[13px] font-semibold">{comp.name}</span>
                </div>
                {comp.values.map((value, i) => (
                  <div
                    key={i}
                    className="h-12 flex items-center justify-center text-sm text-text-secondary mb-0.5 bg-bg-elevated"
                  >
                    {value}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-[1000px] mx-auto mb-12">
          {[
            {
              icon: "💰",
              title: "Save $2,000+/Year",
              desc: "One-time fee vs monthly subscriptions. The savings add up fast.",
            },
            {
              icon: "🛡️",
              title: "Only Static Drawdown",
              desc: "Your safety buffer grows as you profit. No other prop offers this.",
            },
            {
              icon: "⚡",
              title: "Fastest Payouts",
              desc: "Get your money in under 4 hours. First payout is on-demand.",
            },
          ].map((card) => (
            <div
              key={card.title}
              className="bg-bg-card border border-border rounded-2xl p-6 flex items-start gap-4 text-left transition-all hover:border-primary hover:-translate-y-0.5"
            >
              <span className="text-[28px] flex-shrink-0">{card.icon}</span>
              <div>
                <h4 className="text-base font-semibold mb-1">{card.title}</h4>
                <p className="text-[13px] text-text-secondary leading-relaxed">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA - NEW: was missing in original */}
        <a
          href="https://tradersyard.com/auth/register"
          className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-bg-primary text-lg font-semibold rounded-2xl hover:bg-primary-light hover:shadow-[0_0_40px_rgba(34,197,94,0.3)] transition-all"
        >
          Switch to TradersYard
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M7 4L13 10L7 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </section>
  );
}
