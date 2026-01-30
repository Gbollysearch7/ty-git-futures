"use client";

import { useEffect, useState } from "react";

export default function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 lg:hidden bg-bg-primary/95 backdrop-blur-xl border-t border-border px-4 py-3 safe-area-bottom">
      <a
        href="https://tradersyard.com/auth/register"
        className="flex items-center justify-center gap-2 w-full py-3.5 bg-primary text-bg-primary font-semibold rounded-xl hover:bg-primary-light transition-all"
      >
        Get Funded — From $194
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M5 3L11 8L5 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>
    </div>
  );
}
