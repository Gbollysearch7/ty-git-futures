/* eslint-disable @next/next/no-img-element */
import { testimonials } from "@/data/content";
import TrustpilotWidget from "./TrustpilotWidget";

export default function Testimonials() {
  return (
    <section className="py-24 bg-bg-primary">
      <div className="max-w-[1280px] mx-auto px-6 text-center">
        <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-xs font-semibold text-primary tracking-wider mb-6">
          TESTIMONIALS
        </span>
        <h2 className="text-3xl sm:text-[42px] font-bold mb-4">
          Trusted by 20,000+ Traders
        </h2>
        <p className="text-lg text-text-secondary mb-12">
          Real reviews from real traders on Trustpilot.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 text-left transition-all hover:-translate-y-1 hover:shadow-lg shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
            >
              <div className="flex justify-between items-center mb-4">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, s) => (
                    <span
                      key={s}
                      className="w-[22px] h-[22px] bg-[#00b67a] text-white text-sm flex items-center justify-center"
                    >
                      ★
                    </span>
                  ))}
                </div>
                <span className="text-[13px] text-gray-500">{t.date}</span>
              </div>

              <p className="text-[15px] text-gray-800 leading-relaxed mb-6 min-h-[80px]">
                {t.text}
              </p>

              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full overflow-hidden bg-bg-card flex-shrink-0">
                  {t.avatar ? (
                    <img src={t.avatar} alt={t.name} width={44} height={44} className="w-full h-full object-cover" />
                  ) : (
                    <div
                      className="w-full h-full flex items-center justify-center text-white text-sm font-semibold"
                      style={{ backgroundColor: t.initialsColor || "#22c55e" }}
                    >
                      {t.initials}
                    </div>
                  )}
                </div>
                <div>
                  <span className="block text-sm font-semibold text-gray-800">{t.name}</span>
                  <span className="text-[13px] text-gray-500">{t.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trustpilot widget - real embed with fallback */}
        <div className="mb-12">
          <TrustpilotWidget />
        </div>

        {/* CTA - NEW: was missing in original after testimonials */}
        <a
          href="https://tradersyard.com/auth/register"
          className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-bg-primary text-lg font-semibold rounded-2xl hover:bg-primary-light hover:shadow-[0_0_40px_rgba(34,197,94,0.3)] transition-all"
        >
          Join 20,000+ Traders
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M7 4L13 10L7 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </section>
  );
}
