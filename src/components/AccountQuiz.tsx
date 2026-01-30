"use client";

import { useState } from "react";

const steps = [
  {
    question: "What's your trading experience level?",
    options: [
      { label: "Beginner (< 1 year)", value: "beginner" },
      { label: "Intermediate (1-3 years)", value: "intermediate" },
      { label: "Advanced (3+ years)", value: "advanced" },
    ],
  },
  {
    question: "What's your preferred trading style?",
    options: [
      { label: "Scalping (quick trades)", value: "scalping" },
      { label: "Day Trading (intraday)", value: "daytrading" },
      { label: "Swing Trading (multi-day)", value: "swing" },
    ],
  },
  {
    question: "How much capital do you want to manage?",
    options: [
      { label: "Up to $50,000", value: "small" },
      { label: "$50,000 - $100,000", value: "medium" },
      { label: "$150,000+", value: "large" },
    ],
  },
  {
    question: "Do you prefer lower cost or more room to trade?",
    options: [
      { label: "Lower evaluation cost", value: "cost" },
      { label: "Larger drawdown buffer", value: "buffer" },
      { label: "Balance of both", value: "balanced" },
    ],
  },
];

type Answers = Record<number, string>;

function getRecommendation(answers: Answers) {
  const capital = answers[2];
  const preference = answers[3];

  let plan = "Static";
  let size = "100K";

  if (preference === "buffer") {
    plan = "Static";
  } else if (preference === "cost") {
    plan = "EOD";
  }

  if (capital === "small") size = "50K";
  else if (capital === "medium") size = "100K";
  else size = "150K";

  const prices: Record<string, Record<string, number>> = {
    Static: { "50K": 149, "100K": 349, "150K": 549 },
    EOD: { "50K": 99, "100K": 199, "150K": 349 },
  };

  return { plan, size, price: prices[plan]?.[size] ?? 349 };
}

export default function AccountQuiz() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [done, setDone] = useState(false);

  const handleSelect = (value: string) => {
    const next = { ...answers, [step]: value };
    setAnswers(next);
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      setDone(true);
    }
  };

  const reset = () => {
    setStep(0);
    setAnswers({});
    setDone(false);
  };

  const rec = done ? getRecommendation(answers) : null;

  if (!open) {
    return (
      <section className="py-16 bg-bg-secondary">
        <div className="max-w-[1400px] mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Not sure which account is right for you?
          </h2>
          <p className="text-text-secondary text-lg mb-8 max-w-2xl mx-auto">
            Take our 30-second quiz and we&apos;ll recommend the perfect plan based on your trading style and goals.
          </p>
          <button
            onClick={() => setOpen(true)}
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-bg-primary font-semibold text-lg rounded-2xl hover:bg-primary-light hover:shadow-[0_0_40px_rgba(34,197,94,0.3)] transition-all"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM9 13V7l5 3-5 3z" fill="currentColor" />
            </svg>
            Find My Perfect Account
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-bg-secondary">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          {/* Progress */}
          <div className="flex items-center justify-between mb-8">
            {steps.map((_, i) => (
              <div key={i} className="flex items-center flex-1">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                    i < step || done
                      ? "bg-primary text-bg-primary"
                      : i === step && !done
                      ? "bg-primary/20 text-primary border-2 border-primary"
                      : "bg-bg-card text-text-muted border border-border"
                  }`}
                >
                  {i < step || done ? (
                    <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
                      <path d="M4 10l4 4 8-8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  ) : (
                    i + 1
                  )}
                </div>
                {i < steps.length - 1 && (
                  <div className={`flex-1 h-0.5 mx-2 transition-all ${i < step || done ? "bg-primary" : "bg-border"}`} />
                )}
              </div>
            ))}
          </div>

          {!done ? (
            <div className="bg-bg-card border border-border rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-6">{steps[step].question}</h3>
              <div className="space-y-3">
                {steps[step].options.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => handleSelect(opt.value)}
                    className="w-full text-left px-5 py-4 bg-bg-secondary border border-border rounded-xl hover:border-primary hover:bg-primary/5 transition-all text-text-primary font-medium"
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
              {step > 0 && (
                <button
                  onClick={() => setStep(step - 1)}
                  className="mt-4 text-sm text-text-secondary hover:text-text-primary transition-colors"
                >
                  ← Back
                </button>
              )}
            </div>
          ) : rec && (
            <div className="bg-bg-card border border-primary/30 rounded-2xl p-8 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-semibold text-primary mb-6">
                Your Perfect Match
              </div>
              <h3 className="text-2xl font-bold mb-2">
                {rec.size} {rec.plan} Account
              </h3>
              <p className="text-4xl font-bold text-primary mb-2">${rec.price}</p>
              <p className="text-text-secondary mb-6">One-time evaluation fee • No monthly subscription</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="https://tradersyard.com/auth/register"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-bg-primary font-semibold rounded-2xl hover:bg-primary-light transition-all"
                >
                  Get This Account
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                    <path d="M7 4L13 10L7 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <button
                  onClick={reset}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-border text-text-primary font-semibold rounded-2xl hover:bg-white/5 transition-all"
                >
                  Retake Quiz
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
