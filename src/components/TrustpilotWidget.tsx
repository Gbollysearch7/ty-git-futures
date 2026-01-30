"use client";

import Script from "next/script";

export default function TrustpilotWidget() {
  return (
    <>
      <Script
        src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"
        strategy="lazyOnload"
      />
      <div className="flex justify-center py-6">
        <div
          className="trustpilot-widget"
          data-locale="en-US"
          data-template-id="56278e9abfbbba0bdcd568bc"
          data-businessunit-id="tradersyard.com"
          data-style-height="52px"
          data-style-width="100%"
          data-theme="dark"
          data-stars="4,5"
        >
          <a
            href="https://www.trustpilot.com/review/tradersyard.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-6 px-6 py-3 bg-bg-card border border-border rounded-full hover:border-[#00b67a] hover:-translate-y-0.5 transition-all"
          >
            <span className="flex items-center gap-1.5 text-sm font-semibold text-text-primary">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10 1L12.39 6.86L18.72 7.28L13.82 11.46L15.28 17.64L10 14.36L4.72 17.64L6.18 11.46L1.28 7.28L7.61 6.86L10 1Z" fill="#00b67a" />
              </svg>
              Trustpilot
            </span>
            <span className="text-2xl font-bold text-[#00b67a]">4.5</span>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className="w-[22px] h-[22px] bg-[#00b67a] text-white text-sm flex items-center justify-center"
                >
                  ★
                </span>
              ))}
            </div>
            <span className="text-sm font-semibold text-[#00b67a] bg-[#00b67a]/10 px-3 py-1 rounded-full">
              Excellent
            </span>
          </a>
        </div>
      </div>
    </>
  );
}
