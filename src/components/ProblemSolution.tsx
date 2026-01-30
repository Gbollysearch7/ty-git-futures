export default function ProblemSolution() {
  return (
    <section className="py-24 bg-bg-secondary">
      <div className="max-w-[1280px] mx-auto px-6 text-center">
        <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-xs font-semibold text-primary tracking-wider mb-6">
          THE PROBLEM
        </span>
        <h2 className="text-3xl sm:text-[42px] font-bold mb-4">
          Trailing Drawdown Is{" "}
          <span className="text-danger">Killing Your Account</span>
        </h2>

        <div className="max-w-[700px] mx-auto mb-12">
          <p className="text-lg text-text-secondary mb-6">
            Every other futures prop uses trailing drawdown. Your max loss level moves up with your
            profits — so the more money you make, the easier it is to lose your account.
          </p>
          <p className="text-2xl font-semibold text-text-primary">
            We fixed that.
          </p>
        </div>

        {/* Comparison Cards */}
        <div className="grid sm:grid-cols-2 gap-8 max-w-[1000px] mx-auto mb-12">
          {/* Bad - Trailing */}
          <div className="bg-bg-card border border-danger/30 rounded-2xl p-8 text-left">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-2xl">📉</span>
              <h3 className="flex-1 text-xl font-semibold">Trailing Drawdown</h3>
              <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-danger/10 text-danger">
                OTHERS
              </span>
            </div>
            <p className="text-sm text-text-secondary mb-6">
              Your max loss follows your highest profit. Make $5,000? Your stop moves up by $5,000. Your safety margin never grows.
            </p>
            <div className="bg-bg-primary rounded-xl p-4">
              <div className="flex justify-between py-2 text-sm border-b border-border">
                <span className="text-text-secondary">Account Balance</span>
                <span className="text-text-primary font-medium">$55,000</span>
              </div>
              <div className="flex justify-between py-2 text-sm border-b border-border">
                <span className="text-text-secondary">Trailing Stop</span>
                <span className="text-warning font-semibold">$53,000 ↑</span>
              </div>
              <div className="flex justify-between py-2 text-sm">
                <span className="text-text-secondary">Actual Buffer</span>
                <span className="text-danger font-semibold">Only $2,000</span>
              </div>
            </div>
          </div>

          {/* Good - Static */}
          <div className="bg-bg-card border border-primary/30 rounded-2xl p-8 text-left bg-gradient-to-b from-primary/5 to-transparent">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-2xl">📈</span>
              <h3 className="flex-1 text-xl font-semibold">Static Drawdown</h3>
              <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-primary/10 text-primary">
                TRADERSYARD
              </span>
            </div>
            <p className="text-sm text-text-secondary mb-6">
              Your max loss stays fixed at your starting balance minus the drawdown. Profit $5,000? Your buffer is now $7,000.
            </p>
            <div className="bg-bg-primary rounded-xl p-4">
              <div className="flex justify-between py-2 text-sm border-b border-border">
                <span className="text-text-secondary">Account Balance</span>
                <span className="text-text-primary font-medium">$55,000</span>
              </div>
              <div className="flex justify-between py-2 text-sm border-b border-border">
                <span className="text-text-secondary">Static Stop</span>
                <span className="text-primary font-semibold">$48,000 (fixed)</span>
              </div>
              <div className="flex justify-between py-2 text-sm">
                <span className="text-text-secondary">Actual Buffer</span>
                <span className="text-success font-semibold">$7,000!</span>
              </div>
            </div>
          </div>
        </div>

        <p className="text-base text-text-secondary mb-8">
          <strong className="text-primary">TradersYard</strong> is the only futures prop firm that
          offers full static drawdown. Your buffer grows as you profit.
        </p>

        {/* CTA - NEW: was missing in original */}
        <a
          href="https://tradersyard.com/auth/register"
          className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-bg-primary text-lg font-semibold rounded-2xl hover:bg-primary-light hover:shadow-[0_0_40px_rgba(34,197,94,0.3)] transition-all"
        >
          Trade With Static Drawdown
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M7 4L13 10L7 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </section>
  );
}
