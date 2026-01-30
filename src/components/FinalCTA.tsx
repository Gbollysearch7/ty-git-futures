export default function FinalCTA() {
  return (
    <section className="py-24 bg-gradient-to-b from-bg-primary to-bg-secondary text-center relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(34,197,94,0.3),transparent_70%)] opacity-50" />

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        <h2 className="text-3xl sm:text-5xl font-bold mb-4">
          Ready to Get Funded?
        </h2>
        <p className="text-lg text-text-secondary mb-8">
          Join the only futures prop firm with static drawdown. Pay once. Keep 90%.
        </p>

        <div className="mb-8">
          <span className="block text-xl mb-2">
            Starting from{" "}
            <strong className="text-primary text-2xl">$194</strong>
          </span>
          <span className="block text-base text-text-muted">
            <s>$299</s> — Use code <strong className="text-primary">LAUNCH35</strong> at checkout
          </span>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <a
            href="https://tradersyard.com/auth/register"
            className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-primary text-bg-primary text-lg font-semibold rounded-2xl hover:bg-primary-light hover:shadow-[0_0_40px_rgba(34,197,94,0.3)] transition-all"
          >
            Get Funded Now
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M7 4L13 10L7 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a
            href="https://discord.gg/2j2zYnTHYp"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-10 py-5 border border-border text-text-primary text-lg font-semibold rounded-2xl hover:border-border-hover hover:bg-white/5 transition-all"
          >
            Join Discord
          </a>
        </div>

        <p className="text-sm text-text-secondary">
          14-day money-back guarantee &bull; No monthly fees &bull; Instant access
        </p>
      </div>
    </section>
  );
}
