"use client";

import { useEffect, useState } from "react";

export default function StickyDesktopCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 800);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 inset-x-0 z-[60] hidden lg:block transition-all duration-300 ${
        visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
    >
      <div className="bg-bg-primary/98 backdrop-blur-xl border-b border-border shadow-lg">
        <div className="max-w-[1400px] mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <a href="https://tradersyard.com" className="text-lg font-bold">
              <span className="text-text-primary lowercase">traders</span>
              <span className="text-primary lowercase">yard</span>
            </a>
            <span className="text-sm text-text-muted hidden sm:inline">|</span>
            <span className="text-sm text-text-secondary hidden sm:inline">
              Static Drawdown Futures Prop Firm
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-text-secondary hidden md:inline">
              From <strong className="text-primary">$194</strong> one-time
            </span>
            <a
              href="https://tradersyard.com/auth/register"
              className="inline-flex items-center gap-2 px-6 py-2 bg-primary text-bg-primary text-sm font-semibold rounded-xl hover:bg-primary-light hover:shadow-[0_0_40px_rgba(34,197,94,0.3)] transition-all"
            >
              Get Funded
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M5 3L9 7L5 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
