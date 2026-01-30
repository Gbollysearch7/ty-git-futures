"use client";

import { useEffect, useState, useRef } from "react";

/* eslint-disable @next/next/no-img-element */

const payoutData = [
  { name: "Alex R.", country: "US", flag: "🇺🇸", amount: 4200, account: "$100,000", type: "Static", date: "Jan 28, 2026" },
  { name: "Sarah K.", country: "UK", flag: "🇬🇧", amount: 2500, account: "$150,000", type: "EOD", date: "Jan 27, 2026" },
  { name: "Michael T.", country: "DE", flag: "🇩🇪", amount: 1250, account: "$50,000", type: "Static", date: "Jan 26, 2026" },
  { name: "Priya G.", country: "IN", flag: "🇮🇳", amount: 7500, account: "$150,000", type: "Static", date: "Jan 25, 2026" },
  { name: "James W.", country: "CA", flag: "🇨🇦", amount: 3000, account: "$100,000", type: "EOD", date: "Jan 24, 2026" },
  { name: "Dominic M.", country: "AU", flag: "🇦🇺", amount: 5000, account: "$150,000", type: "Static", date: "Jan 23, 2026" },
  { name: "Fatima A.", country: "AE", flag: "🇦🇪", amount: 1500, account: "$50,000", type: "EOD", date: "Jan 22, 2026" },
  { name: "Chen W.", country: "SG", flag: "🇸🇬", amount: 6800, account: "$150,000", type: "Static", date: "Jan 21, 2026" },
  { name: "Ryan P.", country: "US", flag: "🇺🇸", amount: 2000, account: "$100,000", type: "Static", date: "Jan 20, 2026" },
  { name: "Sofia N.", country: "BR", flag: "🇧🇷", amount: 3500, account: "$100,000", type: "EOD", date: "Jan 19, 2026" },
  { name: "Omar H.", country: "NG", flag: "🇳🇬", amount: 1800, account: "$50,000", type: "Static", date: "Jan 18, 2026" },
  { name: "Lucas S.", country: "FR", flag: "🇫🇷", amount: 4500, account: "$150,000", type: "EOD", date: "Jan 17, 2026" },
];

export default function PayoutTicker() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    let frame: number;
    const scroll = () => {
      if (!paused && el) {
        el.scrollLeft += 0.5;
        if (el.scrollLeft >= el.scrollWidth / 2) {
          el.scrollLeft = 0;
        }
      }
      frame = requestAnimationFrame(scroll);
    };
    frame = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(frame);
  }, [paused]);

  const cards = [...payoutData, ...payoutData];

  return (
    <section className="py-20 bg-bg-primary">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-xs font-semibold text-primary tracking-wider mb-6">
            REAL PAYOUTS
          </span>
          <h2 className="text-3xl sm:text-[42px] font-bold mb-4">
            Our Traders Get Paid
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Real payouts to real traders. Processed in under 4 hours, every time.
          </p>
        </div>

        {/* Scrolling payout cards */}
        <div
          ref={scrollRef}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          className="flex gap-5 overflow-x-hidden pb-4"
        >
          {cards.map((p, i) => (
            <div
              key={`${p.name}-${i}`}
              className="flex-shrink-0 w-[320px] bg-bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/30 transition-all hover:-translate-y-1"
            >
              {/* Card header with status */}
              <div className="flex items-center justify-between px-6 pt-5 pb-3">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{p.flag}</span>
                  <div>
                    <h4 className="text-base font-bold text-text-primary">{p.name}</h4>
                    <p className="text-xs text-text-muted">{p.country}</p>
                  </div>
                </div>
                <span className="flex items-center gap-1.5 px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  Paid
                </span>
              </div>

              {/* Payout amount */}
              <div className="px-6 py-4">
                <p className="text-xs text-text-muted uppercase tracking-wider mb-1">Payout Amount</p>
                <p className="text-[32px] font-bold text-primary leading-tight">
                  ${p.amount.toLocaleString()}
                </p>
              </div>

              {/* Details rows */}
              <div className="px-6 pb-5 space-y-0">
                <div className="flex items-center justify-between py-3 border-t border-border">
                  <span className="text-sm text-text-muted">Date</span>
                  <span className="text-sm font-medium text-text-primary">{p.date}</span>
                </div>
                <div className="flex items-center justify-between py-3 border-t border-border">
                  <span className="text-sm text-text-muted">Account Size</span>
                  <span className="text-sm font-medium text-text-primary">{p.account}</span>
                </div>
                <div className="flex items-center justify-between py-3 border-t border-border">
                  <span className="text-sm text-text-muted">Plan</span>
                  <span className="text-sm font-semibold text-primary">{p.type}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary stats */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { value: "$2.5M+", label: "Total Paid Out" },
            { value: "20,000+", label: "Funded Traders" },
            { value: "<4hrs", label: "Avg. Payout Speed" },
            { value: "90%", label: "Profit Split" },
          ].map((stat) => (
            <div key={stat.label} className="bg-bg-card border border-border rounded-xl p-5 text-center">
              <p className="text-2xl font-bold text-primary">{stat.value}</p>
              <p className="text-xs text-text-muted mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
