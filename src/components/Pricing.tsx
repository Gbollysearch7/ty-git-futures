"use client";

import { useState } from "react";
import { staticPlans, eodPlans, type PricingPlan } from "@/data/content";

function PricingCard({ plan }: { plan: PricingPlan }) {
  return (
    <div
      className={`relative bg-bg-card border rounded-2xl p-8 text-center transition-all hover:-translate-y-1 hover:border-border-hover ${
        plan.popular
          ? "border-primary bg-gradient-to-b from-primary/[0.08] to-bg-card"
          : "border-border"
      }`}
    >
      {plan.popular && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-bg-primary px-4 py-1.5 rounded-full text-[11px] font-bold tracking-wider whitespace-nowrap">
          MOST POPULAR
        </span>
      )}

      <div className="mb-4">
        <span className="block text-[28px] font-bold text-text-primary">
          {plan.size}
        </span>
        <span className="text-[13px] text-text-secondary">Account Size</span>
      </div>

      <div className="mb-6 pb-6 border-b border-border">
        <span className="block text-4xl font-bold text-primary">${plan.price}</span>
        <span className="text-[13px] text-text-secondary">one-time fee</span>
      </div>

      <ul className="mb-6 text-left">
        {[
          { label: "Profit Target", value: plan.profitTarget },
          { label: "Max Loss", value: plan.maxLoss },
          { label: "Drawdown", value: plan.drawdownType, highlight: plan.drawdownType === "Static" },
          { label: "Contracts", value: plan.maxContracts },
          { label: "Min Days", value: plan.minDays, highlight: true },
          { label: "Reset Fee", value: plan.resetFee },
        ].map((spec) => (
          <li
            key={spec.label}
            className="flex justify-between items-center py-2 text-[13px] border-b border-border last:border-b-0"
          >
            <span className="text-text-secondary">{spec.label}</span>
            <span className={`font-semibold ${spec.highlight ? "text-primary" : "text-text-primary"}`}>
              {spec.value}
            </span>
          </li>
        ))}
      </ul>

      <a
        href="https://tradersyard.com/auth/register"
        className={`block w-full py-3 rounded-xl text-sm font-semibold transition-all ${
          plan.popular
            ? "bg-primary text-bg-primary hover:bg-primary-light hover:shadow-[0_0_40px_rgba(34,197,94,0.3)]"
            : "border border-border text-text-primary hover:border-border-hover hover:bg-white/5"
        }`}
      >
        Get Funded
      </a>
      <p className="text-[11px] text-text-muted mt-3">14-day money-back guarantee</p>
    </div>
  );
}

export default function Pricing() {
  const [activeTab, setActiveTab] = useState<"static" | "eod">("static");
  const plans = activeTab === "static" ? staticPlans : eodPlans;

  return (
    <section id="pricing" className="py-24 bg-bg-secondary">
      <div className="max-w-[1280px] mx-auto px-6 text-center">
        <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-xs font-semibold text-primary tracking-wider mb-6">
          TRANSPARENT PRICING
        </span>
        <h2 className="text-3xl sm:text-[42px] font-bold mb-4">
          Simple, One-Time Pricing
        </h2>
        <p className="text-lg text-text-secondary mb-10">
          No monthly subscriptions. Pay once, trade forever.
        </p>

        {/* Tabs */}
        <div className="inline-flex bg-bg-card border border-border rounded-full p-1.5 mb-12">
          <button
            onClick={() => setActiveTab("static")}
            className={`px-8 py-3 text-sm font-semibold rounded-full transition-all ${
              activeTab === "static"
                ? "bg-primary text-bg-primary"
                : "text-text-secondary hover:text-text-primary"
            }`}
          >
            Static Drawdown
          </button>
          <button
            onClick={() => setActiveTab("eod")}
            className={`px-8 py-3 text-sm font-semibold rounded-full transition-all ${
              activeTab === "eod"
                ? "bg-primary text-bg-primary"
                : "text-text-secondary hover:text-text-primary"
            }`}
          >
            EOD Drawdown
          </button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1000px] mx-auto mb-12">
          {plans.map((plan) => (
            <PricingCard key={`${activeTab}-${plan.size}`} plan={plan} />
          ))}
        </div>

        {/* Features strip */}
        <div className="flex flex-wrap justify-center gap-8 py-6 border-t border-b border-border mb-8">
          {[
            "90% Profit Split",
            "0 Minimum Trading Days",
            "$0 Activation Fee",
            "Free Platform & Data",
            "On-Demand Payouts",
          ].map((feature) => (
            <div key={feature} className="flex items-center gap-2 text-sm text-text-secondary">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M4 8L7 11L12 5" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {feature}
            </div>
          ))}
        </div>

        {/* Promo notice */}
        <div className="inline-block bg-primary/10 border border-primary/20 rounded-xl px-8 py-4">
          <p className="text-sm text-text-secondary">
            Use code <strong className="text-primary">LAUNCH35</strong> for 35% off Static accounts
            &nbsp;|&nbsp; <strong className="text-primary">LAUNCH40</strong> for 40% off EOD accounts
          </p>
        </div>
      </div>
    </section>
  );
}
