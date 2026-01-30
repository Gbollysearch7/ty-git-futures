export default function Discord() {
  return (
    <section className="py-24 bg-bg-primary">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="bg-gradient-to-br from-[#1a2e1a] to-[#0d1f0d] rounded-3xl p-8 sm:p-16 grid md:grid-cols-2 gap-16 items-center border border-primary/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_70%_50%,rgba(34,197,94,0.1),transparent_60%)]" />

          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Join Our Trading Community
            </h2>
            <p className="text-base text-text-secondary leading-relaxed mb-8">
              Connect with 20,000+ traders. Share strategies, get live market
              analysis, and learn from funded traders. Free to join.
            </p>
            <a
              href="https://discord.gg/2j2zYnTHYp"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-bg-primary text-lg font-semibold rounded-2xl hover:bg-primary-light hover:shadow-[0_0_40px_rgba(34,197,94,0.3)] transition-all"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.3698a19.7913 19.7913 0 0 0-4.8851-1.5152.0741.0741 0 0 0-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 0 0-.0785-.037 19.7363 19.7363 0 0 0-4.8852 1.515.0699.0699 0 0 0-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 0 0 .0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 0 0 .0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 0 0-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 0 1-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 0 1 .0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 0 1 .0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 0 1-.0066.1276 12.2986 12.2986 0 0 1-1.873.8914.0766.0766 0 0 0-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 0 0 .0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 0 0 .0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 0 0-.0312-.0286z" />
              </svg>
              Join Discord Community
            </a>
          </div>

          {/* Discord mockup */}
          <div className="relative z-10 hidden md:block">
            <div className="bg-[#1e1e1e] rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
              <div className="bg-[#2d2d2d] px-4 py-2 flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <span className="w-3 h-3 rounded-full bg-[#28c940]" />
              </div>
              <div className="p-6">
                <p className="text-sm font-semibold text-[#8e9297] mb-4 pb-2 border-b border-[#3d3d3d]">
                  # general-chat
                </p>
                {[
                  { user: "Alex_Trades", text: "Just hit my profit target on NQ! First try 🎉" },
                  { user: "FuturesKing", text: "Static drawdown is such a game changer" },
                  { user: "SarahTrader", text: "Got my payout in 2 hours. Fastest ever." },
                  { user: "MikeES", text: "Anyone else trading the open tomorrow?" },
                  { user: "TYSupport", text: "Congrats Alex! Welcome to the funded side 💰" },
                ].map((msg, i) => (
                  <div key={i} className="mb-2">
                    <span className="text-[13px] font-semibold text-primary mr-2">{msg.user}</span>
                    <span className="text-[13px] text-[#dcddde]">{msg.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
