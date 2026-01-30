"use client";

import { useState } from "react";
import { faqs } from "@/data/content";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-bg-secondary">
      <div className="max-w-[1280px] mx-auto px-6 text-center">
        <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-xs font-semibold text-primary tracking-wider mb-6">
          FAQ
        </span>
        <h2 className="text-3xl sm:text-[42px] font-bold mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-lg text-text-secondary mb-12">
          Everything you need to know about getting funded.
        </p>

        <div className="max-w-[800px] mx-auto text-left">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-border">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex justify-between items-center py-6 text-left"
                aria-expanded={openIndex === i}
                aria-controls={`faq-answer-${i}`}
              >
                <span className="text-base font-semibold text-text-primary pr-4">
                  {faq.question}
                </span>
                <span
                  className={`text-2xl text-primary transition-transform flex-shrink-0 ${
                    openIndex === i ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
              <div
                id={`faq-answer-${i}`}
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i ? "max-h-[500px]" : "max-h-0"
                }`}
              >
                <p className="pb-6 text-[15px] font-medium text-text-secondary leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <a
            href="https://docs.tradersyard.com"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border text-text-primary font-semibold rounded-xl hover:border-border-hover hover:bg-white/5 transition-all"
          >
            View Full Help Center
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M4 12L12 4M12 4H5M12 4V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
