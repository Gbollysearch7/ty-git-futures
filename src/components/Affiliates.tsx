export default function Affiliates() {
  const tiers = [
    { name: "Bronze", referrals: "0+", commission: "12%", payout: "Monthly", perk: "—", color: "text-amber-600" },
    { name: "Silver", referrals: "50+", commission: "15%", payout: "Monthly", perk: "Free $25K Challenge", color: "text-gray-400" },
    { name: "Gold", referrals: "125+", commission: "18%", payout: "Weekly", perk: "Free $50K Challenge", color: "text-yellow-400" },
    { name: "Diamond", referrals: "250+", commission: "20%", payout: "Weekly", perk: "Free $100K Challenge", color: "text-cyan-300" },
    { name: "Elite", referrals: "500+", commission: "25%", payout: "Weekly", perk: "5× Free $100K + Partner Circle", color: "text-purple-400" },
  ];

  const steps = [
    {
      number: "01",
      title: "Sign Up for Free",
      description: "Join our affiliate program at no cost. Get instant access to your partner portal with tracking links and custom voucher codes.",
    },
    {
      number: "02",
      title: "Share & Promote",
      description: "Share your referral link with your audience. They get discounted challenge prices — you earn recurring commissions on every purchase.",
    },
    {
      number: "03",
      title: "Get Paid",
      description: "Earn 12–25% revenue split on every referred evaluation and reset. Payouts scale from monthly to weekly as you grow.",
    },
  ];

  return (
    <section className="py-24 bg-bg-secondary">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-xs font-semibold text-primary tracking-wider mb-6">
            AFFILIATE PROGRAM
          </span>
          <h2 className="text-3xl sm:text-[42px] font-bold mb-4">
            Earn Up to 25% Commission
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Start for free, connect with traders worldwide, and profit from our 5-tier partner program. 30-day cookie retention on every referral.
          </p>
        </div>

        {/* How it works - 3 steps */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          {steps.map((s) => (
            <div key={s.number} className="bg-bg-card border border-border rounded-2xl p-6">
              <span className="text-3xl font-bold text-primary/30 mb-3 block">{s.number}</span>
              <h3 className="text-lg font-bold mb-2">{s.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>

        {/* Tier table */}
        <div className="bg-bg-card border border-border rounded-2xl overflow-hidden mb-12">
          <div className="p-6 sm:p-8 border-b border-border">
            <h3 className="text-xl font-bold">Commission Tiers</h3>
            <p className="text-sm text-text-secondary mt-1">The more you refer, the more you earn. Climb the tiers automatically.</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-border text-xs font-semibold text-text-muted uppercase tracking-wider">
                  <th className="px-6 py-4">Tier</th>
                  <th className="px-6 py-4">Referrals</th>
                  <th className="px-6 py-4">Commission</th>
                  <th className="px-6 py-4">Payout Freq.</th>
                  <th className="px-6 py-4">Bonus Perk</th>
                </tr>
              </thead>
              <tbody>
                {tiers.map((tier, i) => (
                  <tr
                    key={tier.name}
                    className={`border-b border-border last:border-b-0 transition-colors hover:bg-white/[0.02] ${i === tiers.length - 1 ? "bg-primary/5" : ""}`}
                  >
                    <td className="px-6 py-4">
                      <span className={`font-bold ${tier.color}`}>{tier.name}</span>
                    </td>
                    <td className="px-6 py-4 text-sm text-text-secondary">{tier.referrals}</td>
                    <td className="px-6 py-4">
                      <span className="text-lg font-bold text-text-primary">{tier.commission}</span>
                    </td>
                    <td className="px-6 py-4 text-sm text-text-secondary">{tier.payout}</td>
                    <td className="px-6 py-4 text-sm text-text-secondary">{tier.perk}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Key stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
          {[
            { value: "12–25%", label: "Revenue Split" },
            { value: "30 Days", label: "Cookie Retention" },
            { value: "$0", label: "Cost to Join" },
            { value: "5 Tiers", label: "Commission Levels" },
          ].map((stat) => (
            <div key={stat.label} className="bg-bg-card border border-border rounded-xl p-5 text-center">
              <p className="text-2xl font-bold text-primary">{stat.value}</p>
              <p className="text-xs text-text-muted mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="https://tradersyard.com/affiliate-program"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-bg-primary text-lg font-semibold rounded-2xl hover:bg-primary-light hover:shadow-[0_0_40px_rgba(34,197,94,0.3)] transition-all"
          >
            Join Affiliate Program
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M7 4L13 10L7 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <p className="text-sm text-text-muted mt-4">
            Free to join • No minimum payout • Recurring commissions
          </p>
        </div>
      </div>
    </section>
  );
}
