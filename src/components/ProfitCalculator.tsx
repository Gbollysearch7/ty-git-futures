"use client";

import { useState } from "react";

const accountSizes = [
  { label: "$50,000", value: 50000 },
  { label: "$100,000", value: 100000 },
  { label: "$150,000", value: 150000 },
];

const profitSplitPercent = 90;

export default function ProfitCalculator() {
  const [accountSize, setAccountSize] = useState(100000);
  const [profitPercent, setProfitPercent] = useState(5);

  const grossProfit = (accountSize * profitPercent) / 100;
  const yourPayout = (grossProfit * profitSplitPercent) / 100;
  const monthlyEstimate = yourPayout;
  const yearlyEstimate = yourPayout * 12;

  return (
    <section className="py-24 bg-bg-primary">
      <div className="max-w-[1280px] mx-auto px-6 text-center">
        <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-xs font-semibold text-primary tracking-wider mb-6">
          PROFIT CALCULATOR
        </span>
        <h2 className="text-3xl sm:text-[42px] font-bold mb-4">
          See How Much You Could Earn
        </h2>
        <p className="text-lg text-text-secondary mb-12 max-w-2xl mx-auto">
          Estimate your take-home profit with TradersYard&apos;s {profitSplitPercent}% profit split. No hidden deductions.
        </p>

        <div className="bg-bg-card border border-border rounded-2xl p-8 sm:p-12 max-w-[900px] mx-auto">
          {/* Inputs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
            {/* Account Size Selector */}
            <div className="text-left">
              <label className="block text-sm font-medium text-text-secondary mb-3">
                Account Size
              </label>
              <div className="flex gap-2">
                {accountSizes.map((size) => (
                  <button
                    key={size.value}
                    onClick={() => setAccountSize(size.value)}
                    className={`flex-1 px-4 py-3 rounded-xl text-sm font-semibold transition-all border ${
                      accountSize === size.value
                        ? "bg-primary text-bg-primary border-primary"
                        : "bg-bg-primary border-border text-text-secondary hover:border-border-hover hover:text-text-primary"
                    }`}
                  >
                    {size.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Profit Percentage Slider */}
            <div className="text-left">
              <label className="block text-sm font-medium text-text-secondary mb-3">
                Monthly Profit Target
              </label>
              <div className="flex items-center gap-4">
                <input
                  type="range"
                  min={1}
                  max={20}
                  step={0.5}
                  value={profitPercent}
                  onChange={(e) => setProfitPercent(Number(e.target.value))}
                  className="flex-1 h-2 rounded-full appearance-none cursor-pointer accent-primary bg-bg-primary"
                />
                <span className="text-2xl font-bold text-primary min-w-[60px] text-right">
                  {profitPercent}%
                </span>
              </div>
              <p className="text-xs text-text-muted mt-2">
                {profitPercent <= 5 ? "Conservative" : profitPercent <= 10 ? "Moderate" : "Aggressive"} target
              </p>
            </div>
          </div>

          {/* Results */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-bg-primary rounded-xl p-6 text-center">
              <p className="text-xs text-text-muted tracking-wider mb-2">GROSS PROFIT</p>
              <p className="text-3xl font-bold text-text-primary">
                ${grossProfit.toLocaleString(undefined, { maximumFractionDigits: 0 })}
              </p>
              <p className="text-sm text-text-secondary mt-1">per month</p>
            </div>

            <div className="bg-primary/10 border border-primary/30 rounded-xl p-6 text-center">
              <p className="text-xs text-primary tracking-wider mb-2">YOUR PAYOUT ({profitSplitPercent}%)</p>
              <p className="text-3xl font-bold text-primary">
                ${yourPayout.toLocaleString(undefined, { maximumFractionDigits: 0 })}
              </p>
              <p className="text-sm text-text-secondary mt-1">per month</p>
            </div>

            <div className="bg-bg-primary rounded-xl p-6 text-center">
              <p className="text-xs text-text-muted tracking-wider mb-2">YEARLY ESTIMATE</p>
              <p className="text-3xl font-bold text-text-primary">
                ${yearlyEstimate.toLocaleString(undefined, { maximumFractionDigits: 0 })}
              </p>
              <p className="text-sm text-text-secondary mt-1">per year</p>
            </div>
          </div>

          {/* Breakdown */}
          <div className="mt-8 pt-6 border-t border-border">
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-text-secondary">
              <span className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-text-primary" />
                Account: ${accountSize.toLocaleString()}
              </span>
              <span className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-primary" />
                Profit Split: {profitSplitPercent}%
              </span>
              <span className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-primary-light" />
                Monthly Fees: $0
              </span>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://tradersyard.com/auth/register"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-bg-primary text-lg font-semibold rounded-2xl hover:bg-primary-light hover:shadow-[0_0_40px_rgba(34,197,94,0.3)] transition-all"
          >
            Start Earning Today
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M7 4L13 10L7 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a
            href="#pricing"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-border text-text-primary text-lg font-semibold rounded-2xl hover:border-border-hover hover:bg-white/5 transition-all"
          >
            View All Plans
          </a>
        </div>
      </div>
    </section>
  );
}
