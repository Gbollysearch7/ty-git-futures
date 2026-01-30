"use client";

import { useEffect, useRef, useState, useMemo, useCallback } from "react";

function AnimatedCounter({ end, suffix = "", prefix = "" }: { end: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1500;
          const startTime = performance.now();
          const step = (now: number) => {
            const progress = Math.min((now - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * end));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [end]);

  return (
    <span ref={ref}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
}

const cyclingWords = ["Full Static Drawdown", "One-Step Evaluation", "90% Profit Split", "No Monthly Fees", "Same-Day Payouts"];

function CyclingText() {
  const [index, setIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const cycle = useCallback(() => {
    setAnimating(true);
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % cyclingWords.length);
      setAnimating(false);
    }, 400);
  }, []);

  useEffect(() => {
    const id = setInterval(cycle, 3000);
    return () => clearInterval(id);
  }, [cycle]);

  return (
    <span className={`inline-block bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent transition-all duration-400 ${animating ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"}`}>
      {cyclingWords[index]}
    </span>
  );
}

const stats = [
  { value: 20000, suffix: "+", label: "Active Traders" },
  { value: 90, suffix: "%", label: "Profit Split" },
  { value: 4, prefix: "<", suffix: "hr", label: "Payout Speed" },
  { value: 0, suffix: "", label: "Monthly Fees", display: "$0" },
];

export default function Hero() {
  // A/B test: read variant from cookie
  const variant = useMemo(() => {
    if (typeof document === "undefined") return "A";
    const match = document.cookie.match(/ty-ab-variant=([AB])/);
    return match ? match[1] : "A";
  }, []);

  const headline = variant === "B" ? (
    <>
      Stop Losing Money to{" "}
      <span className="bg-gradient-to-r from-danger to-warning bg-clip-text text-transparent">
        Trailing Drawdown
      </span>
    </>
  ) : (
    <>
      The Only Prop Firm With{" "}
      <CyclingText />
    </>
  );

  return (
    <section id="hero" className="relative overflow-hidden py-24 bg-bg-primary">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_-20%,rgba(34,197,94,0.15),transparent_50%)]" />
      <div className="absolute top-1/2 right-[5%] -translate-y-1/2 w-[500px] h-[400px] opacity-50 pointer-events-none z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 500 400'%3E%3Cdefs%3E%3ClinearGradient id='fg' x1='0%25' y1='0%25' x2='0%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%2322c55e' stop-opacity='0.6'/%3E%3Cstop offset='100%25' stop-color='%2322c55e' stop-opacity='0.1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg fill='none' stroke='%2322c55e' stroke-width='2'%3E%3Cline x1='50' y1='280' x2='50' y2='320' stroke-opacity='0.3'/%3E%3Crect x='42' y='290' width='16' height='20' fill='%2322c55e' fill-opacity='0.4' rx='2'/%3E%3Cline x1='90' y1='250' x2='90' y2='300' stroke-opacity='0.4'/%3E%3Crect x='82' y='260' width='16' height='30' fill='%2322c55e' fill-opacity='0.5' rx='2'/%3E%3Cline x1='130' y1='200' x2='130' y2='270' stroke-opacity='0.5'/%3E%3Crect x='122' y='210' width='16' height='45' fill='%2322c55e' fill-opacity='0.6' rx='2'/%3E%3Cline x1='170' y1='180' x2='170' y2='240' stroke-opacity='0.5'/%3E%3Crect x='162' y='190' width='16' height='35' fill='%2322c55e' fill-opacity='0.5' rx='2'/%3E%3Cline x1='210' y1='140' x2='210' y2='210' stroke-opacity='0.6'/%3E%3Crect x='202' y='150' width='16' height='45' fill='%2322c55e' fill-opacity='0.7' rx='2'/%3E%3Cline x1='250' y1='100' x2='250' y2='180' stroke-opacity='0.7'/%3E%3Crect x='242' y='110' width='16' height='55' fill='%2322c55e' fill-opacity='0.8' rx='2'/%3E%3Cline x1='290' y1='80' x2='290' y2='150' stroke-opacity='0.7'/%3E%3Crect x='282' y='90' width='16' height='45' fill='%2322c55e' fill-opacity='0.8' rx='2'/%3E%3Cline x1='330' y1='60' x2='330' y2='120' stroke-opacity='0.8'/%3E%3Crect x='322' y='70' width='16' height='35' fill='%2322c55e' fill-opacity='0.9' rx='2'/%3E%3Cline x1='370' y1='40' x2='370' y2='100' stroke-opacity='0.9'/%3E%3Crect x='362' y='50' width='16' height='35' fill='%2322c55e' fill-opacity='1' rx='2'/%3E%3Cline x1='410' y1='50' x2='410' y2='90' stroke-opacity='0.8'/%3E%3Crect x='402' y='55' width='16' height='25' fill='%2322c55e' fill-opacity='0.9' rx='2'/%3E%3Cline x1='450' y1='35' x2='450' y2='80' stroke-opacity='1'/%3E%3Crect x='442' y='40' width='16' height='30' fill='%2322c55e' fill-opacity='1' rx='2'/%3E%3C/g%3E%3Cpath d='M30 320 Q150 280 250 180 T450 40' stroke='%2322c55e' stroke-width='3' fill='none' stroke-opacity='0.3'/%3E%3Cpath d='M30 320 Q150 280 250 180 T450 40 L450 400 L30 400 Z' fill='url(%23fg)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        }}
      />
      <div className="absolute top-[30%] right-[10%] w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(34,197,94,0.2),transparent_70%)] rounded-full z-0 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Content */}
        <div className="lg:text-left text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-xs font-semibold text-primary mb-6">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse-dot" />
            FUTURES PROP FIRM — NOW LIVE
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-bold leading-[1.1] mb-6">
            {headline}
          </h1>

          <p className="text-lg text-text-secondary mb-8 leading-relaxed max-w-xl lg:max-w-none">
            Pay once. Get funded in one day. Keep 90% of your profits. No trailing drawdown. No monthly subscriptions. No hidden fees.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-10 lg:justify-start justify-center">
            <a
              href="https://tradersyard.com/auth/register"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-bg-primary text-lg font-semibold rounded-2xl hover:bg-primary-light hover:shadow-[0_0_40px_rgba(34,197,94,0.3)] transition-all"
            >
              Get Funded Now
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7 4L13 10L7 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="#compare"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-border text-text-primary text-lg font-semibold rounded-2xl hover:border-border-hover hover:bg-white/5 transition-all"
            >
              See How We Compare
            </a>
          </div>

          {/* Social proof */}
          <div className="flex flex-col sm:flex-row items-center gap-6 lg:justify-start justify-center">
            <div className="flex flex-col gap-1">
              <span className="text-sm text-text-secondary">Traders Funded</span>
              <span className="text-lg font-bold text-primary">20,000+</span>
            </div>
            <div className="hidden sm:block w-px h-10 bg-border" />
            <div className="flex flex-col gap-1">
              <span className="text-sm text-text-secondary">Trustpilot</span>
              <div className="flex items-center gap-1">
                <span className="text-lg font-bold text-[#00b67a]">4.5</span>
                <span className="text-[#00b67a]">★★★★★</span>
              </div>
            </div>
            <div className="hidden sm:block w-px h-10 bg-border" />
            <div className="flex flex-col gap-1">
              <span className="text-sm text-text-secondary">Profit Split</span>
              <span className="text-lg font-bold text-primary">90%</span>
            </div>
          </div>
        </div>

        {/* Stats grid */}
        <div className="flex justify-center">
          <div className="grid grid-cols-2 gap-4 w-full max-w-md">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-bg-card border border-border rounded-2xl p-8 text-center transition-all hover:border-primary hover:-translate-y-1"
              >
                <span className="block text-4xl font-bold text-primary mb-1">
                  {stat.display ? (
                    stat.display
                  ) : (
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} prefix={stat.prefix || ""} />
                  )}
                </span>
                <span className="text-sm text-text-secondary">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
