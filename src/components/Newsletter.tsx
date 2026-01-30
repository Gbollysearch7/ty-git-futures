"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        const data = await res.json().catch(() => ({}));
        setErrorMsg(data.error || "Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Network error. Please try again.");
      setStatus("error");
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-primary to-primary-dark">
      <div className="max-w-[600px] mx-auto px-6 text-center">
        <h2 className="text-2xl sm:text-[32px] font-bold text-black mb-2">
          Stay in the Loop
        </h2>
        <p className="text-base text-black/70 mb-8">
          Get trading tips, promo codes, and updates. No spam, ever.
        </p>

        {status === "success" ? (
          <div className="bg-white/95 rounded-xl px-6 py-4 text-gray-800 font-semibold">
            Thanks for subscribing! Check your email for a welcome message.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-[500px] mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => { setEmail(e.target.value); setStatus("idle"); }}
              placeholder="Enter your email"
              required
              className="flex-1 px-5 py-3.5 border-none rounded-xl text-[15px] bg-white/95 text-gray-800 placeholder:text-gray-500"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="px-7 py-3.5 bg-black text-white font-semibold rounded-xl hover:bg-gray-800 transition-colors disabled:opacity-60"
            >
              {status === "loading" ? "Subscribing..." : "Subscribe"}
            </button>
          </form>
        )}
        {status === "error" && (
          <p className="text-sm text-red-900 mt-3 font-medium">{errorMsg}</p>
        )}
      </div>
    </section>
  );
}
