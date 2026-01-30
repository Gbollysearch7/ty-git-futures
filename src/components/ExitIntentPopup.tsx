"use client";

import { useEffect, useState } from "react";

export default function ExitIntentPopup() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Only show once per session
    if (sessionStorage.getItem("ty-exit-shown")) return;

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        setShow(true);
        sessionStorage.setItem("ty-exit-shown", "1");
        document.removeEventListener("mouseout", handleMouseLeave);
      }
    };

    // Wait 10s before enabling exit intent
    const timeout = setTimeout(() => {
      document.addEventListener("mouseout", handleMouseLeave);
    }, 10000);

    return () => {
      clearTimeout(timeout);
      document.removeEventListener("mouseout", handleMouseLeave);
    };
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setShow(false)} />

      {/* Modal */}
      <div className="relative bg-bg-card border border-border rounded-3xl p-8 sm:p-12 max-w-lg w-full text-center shadow-2xl animate-slide-down">
        <button
          onClick={() => setShow(false)}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-text-muted hover:text-text-primary rounded-full hover:bg-white/10 transition-all"
          aria-label="Close"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M4 4L14 14M14 4L4 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        <div className="text-5xl mb-4">🎯</div>
        <h3 className="text-2xl sm:text-3xl font-bold mb-3">
          Wait! Don&apos;t Miss This
        </h3>
        <p className="text-text-secondary mb-2">
          Use this exclusive code for an extra discount:
        </p>
        <div className="bg-primary/10 border-2 border-dashed border-primary rounded-xl px-6 py-4 mb-6">
          <span className="text-3xl font-bold text-primary tracking-widest">
            LAUNCH40
          </span>
          <p className="text-sm text-text-secondary mt-1">
            40% off any EOD account — limited time only
          </p>
        </div>
        <a
          href="https://tradersyard.com/auth/register"
          className="block w-full py-4 bg-primary text-bg-primary text-lg font-semibold rounded-xl hover:bg-primary-light hover:shadow-[0_0_40px_rgba(34,197,94,0.3)] transition-all mb-3"
        >
          Claim My Discount
        </a>
        <button
          onClick={() => setShow(false)}
          className="text-sm text-text-muted hover:text-text-secondary transition-colors"
        >
          No thanks, I&apos;ll pay full price
        </button>
      </div>
    </div>
  );
}
