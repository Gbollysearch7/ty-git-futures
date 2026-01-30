"use client";

import { useState } from "react";
import { competitorData, tradersYardData } from "@/data/content";

export default function Calculator() {
  const [accountSize, setAccountSize] = useState(50000);
  const [months, setMonths] = useState(12);
  const [competitor, setCompetitor] = useState("apex");

  const comp = competitorData[competitor];
  const compTotal = comp.monthlyFee * months + (comp.paFeeType === "one-time" ? comp.paFee : comp.paFee * months);
  const tyTotal = tradersYardData.prices[accountSize] || 299;
  const savings = compTotal - tyTotal;
  const annualSavings = months < 12 ? Math.round(savings * (12 / months)) : savings;

  return (
    <section className="py-24 bg-bg-secondary">
      <div className="max-w-[1280px] mx-auto px-6 text-center">
        <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-xs font-semibold text-primary tracking-wider mb-6">
          SAVINGS CALCULATOR
        </span>
        <h2 className="text-3xl sm:text-[42px] font-bold mb-4">
          Calculate Your Savings
        </h2>
        <p className="text-lg text-text-secondary mb-12">
          See how much you save switching to TradersYard.
        </p>

        <div className="bg-bg-card border border-border rounded-2xl p-8 sm:p-12 max-w-[900px] mx-auto mb-12">
          {/* Inputs */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            <div className="text-left">
              <label className="block text-sm font-medium text-text-secondary mb-2">
                Account Size
              </label>
              <select
                value={accountSize}
                onChange={(e) => setAccountSize(Number(e.target.value))}
                className="w-full px-4 py-3 bg-bg-primary border border-border rounded-xl text-text-primary text-sm cursor-pointer"
              >
                {Object.keys(tradersYardData.prices).map((size) => (
                  <option key={size} value={size}>
                    ${Number(size).toLocaleString()}
                  </option>
                ))}
              </select>
            </div>
            <div className="text-left">
              <label className="block text-sm font-medium text-text-secondary mb-2">
                Time Period
              </label>
              <select
                value={months}
                onChange={(e) => setMonths(Number(e.target.value))}
                className="w-full px-4 py-3 bg-bg-primary border border-border rounded-xl text-text-primary text-sm cursor-pointer"
              >
                {[3, 6, 12, 24, 36].map((m) => (
                  <option key={m} value={m}>
                    {m} Months
                  </option>
                ))}
              </select>
            </div>
            <div className="text-left">
              <label className="block text-sm font-medium text-text-secondary mb-2">
                Compare Against
              </label>
              <select
                value={competitor}
                onChange={(e) => setCompetitor(e.target.value)}
                className="w-full px-4 py-3 bg-bg-primary border border-border rounded-xl text-text-primary text-sm cursor-pointer"
              >
                {Object.entries(competitorData).map(([key, c]) => (
                  <option key={key} value={key}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Results */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {/* Competitor cost */}
            <div className="bg-bg-primary rounded-xl p-6 text-left">
              <h4 className="text-base font-semibold mb-4">{comp.name}</h4>
              <div className="flex justify-between py-2 text-sm text-text-secondary border-b border-border">
                <span>Monthly Fee</span>
                <span>${comp.monthlyFee}/mo</span>
              </div>
              {comp.paFee > 0 && (
                <div className="flex justify-between py-2 text-sm text-text-secondary border-b border-border">
                  <span>PA/Activation</span>
                  <span>
                    ${comp.paFee}
                    {comp.paFeeType === "one-time" ? " one-time" : "/mo"}
                  </span>
                </div>
              )}
              <div className="flex justify-between py-2 text-sm font-semibold text-text-primary">
                <span>Total ({months}mo)</span>
                <span className="text-danger">${compTotal.toLocaleString()}</span>
              </div>
            </div>

            {/* Savings */}
            <div className="flex flex-col justify-center items-center text-center">
              <span className="text-xs text-text-secondary tracking-wider mb-2">
                YOU SAVE
              </span>
              <span className="text-5xl font-bold text-primary leading-none mb-2">
                ${savings.toLocaleString()}
              </span>
              <p className="text-[13px] text-text-muted">
                That&apos;s ${annualSavings.toLocaleString()}/year in savings
              </p>
            </div>

            {/* TY cost */}
            <div className="bg-primary/10 border border-primary/30 rounded-xl p-6 text-left">
              <h4 className="text-base font-semibold text-primary mb-4">TradersYard</h4>
              <div className="flex justify-between py-2 text-sm text-text-secondary border-b border-border">
                <span>One-Time Fee</span>
                <span>${tyTotal}</span>
              </div>
              <div className="flex justify-between py-2 text-sm text-text-secondary border-b border-border">
                <span>Monthly Fee</span>
                <span className="text-primary font-semibold">$0</span>
              </div>
              <div className="flex justify-between py-2 text-sm font-semibold text-text-primary">
                <span>Total ({months}mo)</span>
                <span className="text-primary">${tyTotal.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>

        <a
          href="https://tradersyard.com/auth/register"
          className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-bg-primary text-lg font-semibold rounded-2xl hover:bg-primary-light hover:shadow-[0_0_40px_rgba(34,197,94,0.3)] transition-all"
        >
          Start Saving Today
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M7 4L13 10L7 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </section>
  );
}
