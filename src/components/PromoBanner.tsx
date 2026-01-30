"use client";

import { useEffect, useState } from "react";

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Set deadline to 7 days from first visit (stored in localStorage)
    let deadline = localStorage.getItem("ty-promo-deadline");
    if (!deadline) {
      const d = new Date();
      d.setDate(d.getDate() + 7);
      deadline = d.toISOString();
      localStorage.setItem("ty-promo-deadline", deadline);
    }
    const end = new Date(deadline).getTime();

    const tick = () => {
      const now = Date.now();
      const diff = Math.max(0, end - now);
      setTimeLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <span className="inline-flex items-center gap-1 font-mono text-sm font-bold bg-white/20 px-2.5 py-0.5 rounded-md">
      {timeLeft.days > 0 && <>{timeLeft.days}d </>}
      {pad(timeLeft.hours)}:{pad(timeLeft.minutes)}:{pad(timeLeft.seconds)}
    </span>
  );
}

export default function PromoBanner() {
  return (
    <div className="bg-gradient-to-r from-primary via-primary-dark to-primary overflow-hidden relative">
      {/* Scrolling text */}
      <div className="py-2.5">
        <div className="flex animate-scroll-banner whitespace-nowrap">
          {[...Array(6)].map((_, i) => (
            <span
              key={i}
              className="px-16 text-sm font-bold text-white tracking-wide inline-flex items-center gap-3"
              style={{ textShadow: "0 1px 2px rgba(0,0,0,0.1)" }}
            >
              LAUNCH SPECIAL: Use code LAUNCH35 for 35% off Static accounts | Use code LAUNCH40 for 40% off EOD accounts
              <CountdownTimer />
              Ends Soon!
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
