export default function HowItWorks() {
  return (
    <section className="py-24 bg-bg-primary">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-xs font-semibold text-primary tracking-wider mb-6">
            HOW IT WORKS
          </span>
          <h2 className="text-3xl sm:text-[42px] font-bold mb-4">
            Get Funded in 3 Steps
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Simple. Fast. No hidden steps, no monthly fees, no complexity.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-6">
          {/* Step 1 — Full-width card */}
          <div className="bg-bg-card border border-border rounded-2xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="p-8 sm:p-10 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-6">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary text-bg-primary text-sm font-bold">
                    1
                  </span>
                  <span className="text-xs font-semibold text-text-muted uppercase tracking-widest">Step 1</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                  Choose Your<br />
                  <span className="text-primary">Account</span>
                </h3>
                <p className="text-text-secondary leading-relaxed mb-6 max-w-md">
                  Select your account size (50K, 100K, or 150K) and drawdown type (Static or EOD). Pay a one-time evaluation fee — no subscriptions, no hidden costs, no activation fees.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-bg-primary border border-border rounded-full text-xs font-medium text-text-secondary">
                    <svg width="14" height="14" viewBox="0 0 20 20" fill="none"><path d="M4 10l4 4 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary" /></svg>
                    From $99 one-time
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-bg-primary border border-border rounded-full text-xs font-medium text-text-secondary">
                    <svg width="14" height="14" viewBox="0 0 20 20" fill="none"><path d="M4 10l4 4 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary" /></svg>
                    $0 monthly fees
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-bg-primary border border-border rounded-full text-xs font-medium text-text-secondary">
                    <svg width="14" height="14" viewBox="0 0 20 20" fill="none"><path d="M4 10l4 4 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary" /></svg>
                    Instant access
                  </span>
                </div>
              </div>
              <div className="bg-bg-secondary lg:border-l border-t lg:border-t-0 border-border p-8 sm:p-10 lg:p-12 flex items-center justify-center">
                {/* Visual: Account cards */}
                <div className="grid grid-cols-3 gap-3 w-full max-w-sm">
                  {[
                    { size: "50K", price: "$99", popular: false },
                    { size: "100K", price: "$199", popular: true },
                    { size: "150K", price: "$349", popular: false },
                  ].map((plan) => (
                    <div key={plan.size} className={`rounded-xl p-4 text-center transition-all ${plan.popular ? "bg-primary/10 border-2 border-primary scale-105" : "bg-bg-card border border-border"}`}>
                      <p className={`text-lg font-bold mb-1 ${plan.popular ? "text-primary" : "text-text-primary"}`}>{plan.size}</p>
                      <p className="text-xs text-text-muted">{plan.price}</p>
                      {plan.popular && <p className="text-[10px] text-primary font-semibold mt-1">POPULAR</p>}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Steps 2 and 3 — Side by side */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Step 2 */}
            <div className="bg-bg-card border border-border rounded-2xl p-8 sm:p-10">
              <div className="flex items-center gap-3 mb-6">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary text-bg-primary text-sm font-bold">
                  2
                </span>
                <span className="text-xs font-semibold text-text-muted uppercase tracking-widest">Step 2</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">
                Pass the<br />
                <span className="text-primary">Evaluation</span>
              </h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Trade futures on a simulated account. Hit your profit target while respecting drawdown rules. Zero minimum trading days required — pass at your own pace.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-bg-primary border border-border rounded-full text-xs font-medium text-text-secondary">
                  <svg width="14" height="14" viewBox="0 0 20 20" fill="none"><path d="M4 10l4 4 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary" /></svg>
                  0 minimum trading days
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-bg-primary border border-border rounded-full text-xs font-medium text-text-secondary">
                  <svg width="14" height="14" viewBox="0 0 20 20" fill="none"><path d="M4 10l4 4 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary" /></svg>
                  One-step evaluation
                </span>
              </div>
              {/* Visual: Progress bar */}
              <div className="bg-bg-primary rounded-xl p-5 border border-border">
                <div className="flex items-center justify-between text-xs text-text-muted mb-3">
                  <span>Profit Target</span>
                  <span className="text-primary font-semibold">$6,000 / $8,000</span>
                </div>
                <div className="w-full h-3 bg-bg-elevated rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-primary to-primary-light rounded-full" style={{ width: "75%" }} />
                </div>
                <p className="text-xs text-text-muted mt-2">75% complete — keep going!</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-gradient-to-br from-bg-card to-primary/5 border border-primary/20 rounded-2xl p-8 sm:p-10">
              <div className="flex items-center gap-3 mb-6">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary text-bg-primary text-sm font-bold">
                  3
                </span>
                <span className="text-xs font-semibold text-text-muted uppercase tracking-widest">Step 3</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">
                Get Funded<br />
                <span className="text-primary">& Get Paid</span>
              </h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Once passed, trade with our capital. Keep 90% of your profits. Request payouts anytime — processed in under 4 hours. No payout minimums.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-xs font-medium text-primary">
                  <svg width="14" height="14" viewBox="0 0 20 20" fill="none"><path d="M4 10l4 4 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  90% profit split
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-xs font-medium text-primary">
                  <svg width="14" height="14" viewBox="0 0 20 20" fill="none"><path d="M4 10l4 4 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  &lt;4hr payouts
                </span>
              </div>
              {/* Visual: Payout receipt */}
              <div className="bg-bg-card rounded-xl p-5 border border-border">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs text-text-muted uppercase tracking-wider">Payout Receipt</span>
                  <span className="flex items-center gap-1.5 px-2.5 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                    Complete
                  </span>
                </div>
                <div className="space-y-0">
                  <div className="flex items-center justify-between py-2.5 border-b border-border">
                    <span className="text-sm text-text-muted">Amount</span>
                    <span className="text-lg font-bold text-primary">$4,500</span>
                  </div>
                  <div className="flex items-center justify-between py-2.5 border-b border-border">
                    <span className="text-sm text-text-muted">Account</span>
                    <span className="text-sm font-medium text-text-primary">100K Static</span>
                  </div>
                  <div className="flex items-center justify-between py-2.5">
                    <span className="text-sm text-text-muted">Processed</span>
                    <span className="text-sm font-medium text-text-primary">2 hours</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Video Explainer */}
        <div className="max-w-[800px] mx-auto mt-16 mb-12">
          <div className="relative aspect-video bg-bg-card border border-border rounded-2xl overflow-hidden group cursor-pointer">
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-bg-card to-bg-elevated">
              <div className="text-center">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:shadow-[0_0_40px_rgba(34,197,94,0.4)] transition-all">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
                    <path d="M8 5V19L19 12L8 5Z" />
                  </svg>
                </div>
                <p className="text-text-secondary text-sm font-medium">
                  Watch: How TradersYard Futures Works (2 min)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="https://tradersyard.com/auth/register"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-bg-primary text-lg font-semibold rounded-2xl hover:bg-primary-light hover:shadow-[0_0_40px_rgba(34,197,94,0.3)] transition-all"
          >
            Start Your Challenge
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M7 4L13 10L7 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
