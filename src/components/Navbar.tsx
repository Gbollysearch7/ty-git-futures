"use client";

import { useState, useEffect } from "react";

/* eslint-disable @next/next/no-img-element */

const languages = [
  { code: "en", label: "English", flag: "https://tradersyard.com/landing/flags/en.svg", url: "https://tradersyard.com" },
  { code: "de", label: "Deutsch", flag: "https://tradersyard.com/landing/flags/de.svg", url: "https://tradersyard.com/de" },
  { code: "es", label: "Español", flag: "https://tradersyard.com/landing/flags/es.svg", url: "https://tradersyard.com/es" },
  { code: "fr", label: "Français", flag: "https://tradersyard.com/landing/flags/fr.svg", url: "https://tradersyard.com/fr" },
  { code: "pt", label: "Português", flag: "https://tradersyard.com/landing/flags/pt.svg", url: "https://tradersyard.com/pt" },
  { code: "ar", label: "العربية", flag: "https://tradersyard.com/landing/flags/ar.svg", url: "https://tradersyard.com/ar" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [selectedLang, setSelectedLang] = useState(languages[0]);
  const [langOpen, setLangOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  // Close language dropdown when clicking outside
  useEffect(() => {
    const handleClick = () => setLangOpen(false);
    if (langOpen) {
      document.addEventListener("click", handleClick);
      return () => document.removeEventListener("click", handleClick);
    }
  }, [langOpen]);

  const handleLangSelect = (lang: typeof languages[0]) => {
    setSelectedLang(lang);
    setLangOpen(false);
    // Navigate to localized tradersyard URL
    window.location.href = lang.url;
  };

  return (
    <>
      {/* Forex / Futures Product Toggle */}
      <div className="bg-bg-secondary border-b border-border">
        <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-center py-2.5">
          <div className="inline-flex items-center bg-bg-card rounded-full p-1 border border-border shadow-lg">
            <a
              href="https://tradersyard.com"
              className="px-7 py-2.5 text-sm font-bold rounded-full transition-all text-text-secondary hover:text-text-primary hover:bg-white/5"
            >
              Forex
            </a>
            <span
              className="px-7 py-2.5 text-sm font-bold rounded-full transition-all bg-primary text-bg-primary cursor-default shadow-[0_0_20px_rgba(34,197,94,0.3)]"
            >
              Futures
            </span>
          </div>
        </div>
      </div>

      <nav className={`sticky top-0 z-50 backdrop-blur-xl border-b border-border transition-all ${scrolled ? "bg-bg-primary/98 shadow-lg" : "bg-bg-primary/95"}`}>
        <div className="max-w-[1400px] mx-auto px-6 h-16 flex items-center justify-between gap-8">
          {/* Logo - exact match to tradersyard.com */}
          <div className="flex items-center flex-shrink-0">
            <a href="https://tradersyard.com" className="text-[22px] font-bold">
              <span className="text-text-primary lowercase">traders</span>
              <span className="text-primary lowercase">yard</span>
            </a>
          </div>

          {/* Center nav - Desktop (exact match to tradersyard.com) */}
          <div className="hidden xl:flex items-center gap-0.5 flex-1 justify-center">
            <a href="https://tradersyard.com" className="text-sm font-medium text-text-secondary px-3 py-2 rounded-md hover:text-text-primary hover:bg-white/5 transition-all whitespace-nowrap">
              Home
            </a>
            <a href="https://tradersyard.com/#pricing" className="text-sm font-medium text-text-secondary px-3 py-2 rounded-md hover:text-text-primary hover:bg-white/5 transition-all whitespace-nowrap">
              Pricing
            </a>
            <a href="https://tradersyard.com/about" className="text-sm font-medium text-text-secondary px-3 py-2 rounded-md hover:text-text-primary hover:bg-white/5 transition-all whitespace-nowrap">
              About
            </a>

            {/* Arena Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-sm font-medium text-text-secondary px-3 py-2 rounded-md hover:text-text-primary hover:bg-white/5 transition-all">
                Arena
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform group-hover:rotate-180">
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
              <div className="absolute top-full left-0 min-w-[200px] bg-bg-card border border-border rounded-xl p-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-2.5 group-hover:translate-y-1 transition-all shadow-[0_10px_40px_rgba(0,0,0,0.3)] z-50">
                <a href="https://tradersyard.com/arena" className="flex items-center gap-2 px-3.5 py-2.5 text-sm font-medium text-text-secondary rounded-md hover:bg-white/5 hover:text-text-primary transition-all">
                  Tournaments
                </a>
                <a href="https://tradersyard.com/landing-survivor-showdown" className="flex items-center gap-2 px-3.5 py-2.5 text-sm font-medium text-text-secondary rounded-md hover:bg-white/5 hover:text-text-primary transition-all">
                  Survivor Showdown
                </a>
              </div>
            </div>

            {/* Resources Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-sm font-medium text-text-secondary px-3 py-2 rounded-md hover:text-text-primary hover:bg-white/5 transition-all">
                Resources
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform group-hover:rotate-180">
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
              <div className="absolute top-full left-0 min-w-[200px] bg-bg-card border border-border rounded-xl p-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-2.5 group-hover:translate-y-1 transition-all shadow-[0_10px_40px_rgba(0,0,0,0.3)] z-50">
                <a href="https://tradersyard.com/rules" className="flex items-center gap-2 px-3.5 py-2.5 text-sm font-medium text-text-secondary rounded-md hover:bg-white/5 hover:text-text-primary transition-all">
                  Rules
                </a>
                <a href="https://tradersyard.com/account-scaling" className="flex items-center gap-2 px-3.5 py-2.5 text-sm font-medium text-text-secondary rounded-md hover:bg-white/5 hover:text-text-primary transition-all">
                  Account Scaling
                </a>
                <a href="https://tradersyard.com/affiliate-program" className="flex items-center gap-2 px-3.5 py-2.5 text-sm font-medium text-text-secondary rounded-md hover:bg-white/5 hover:text-text-primary transition-all">
                  Affiliate
                </a>
                <a href="https://tradersyard.com/support" className="flex items-center gap-2 px-3.5 py-2.5 text-sm font-medium text-text-secondary rounded-md hover:bg-white/5 hover:text-text-primary transition-all">
                  Support
                </a>
                <a href="https://docs.tradersyard.com" className="flex items-center gap-2 px-3.5 py-2.5 text-sm font-medium text-text-secondary rounded-md hover:bg-white/5 hover:text-text-primary transition-all" target="_blank" rel="noopener">
                  Docs
                </a>
                <a href="https://blog.tradersyard.com/" className="flex items-center gap-2 px-3.5 py-2.5 text-sm font-medium text-text-secondary rounded-md hover:bg-white/5 hover:text-text-primary transition-all" target="_blank" rel="noopener">
                  Blog
                </a>
              </div>
            </div>
          </div>

          {/* Right nav - Desktop */}
          <div className="hidden xl:flex items-center gap-4 flex-shrink-0">
            {/* Language Selector - functional */}
            <div className="relative">
              <button
                onClick={(e) => { e.stopPropagation(); setLangOpen(!langOpen); }}
                className="flex items-center gap-1.5 px-3 py-2 bg-bg-card border border-border rounded-xl hover:border-border-hover transition-all cursor-pointer"
              >
                <img src={selectedLang.flag} alt={selectedLang.label} className="w-5 h-3.5 object-cover rounded-sm" />
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={`text-text-secondary transition-transform ${langOpen ? "rotate-180" : ""}`}>
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
              {langOpen && (
                <div className="absolute top-full right-0 mt-1 min-w-[160px] bg-bg-card border border-border rounded-xl p-1 shadow-[0_10px_40px_rgba(0,0,0,0.3)] z-50">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={(e) => { e.stopPropagation(); handleLangSelect(lang); }}
                      className={`flex items-center gap-2 px-3.5 py-2.5 text-sm font-medium rounded-md hover:bg-white/5 transition-all w-full text-left ${lang.code === selectedLang.code ? "text-primary" : "text-text-secondary hover:text-text-primary"}`}
                    >
                      <img src={lang.flag} alt={lang.label} className="w-5 h-3.5 object-cover rounded-sm flex-shrink-0" />
                      <span>{lang.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <a href="https://tradersyard.com/auth/login" className="inline-flex items-center gap-2 px-4 py-2 border border-border text-text-primary text-sm font-semibold rounded-xl hover:border-border-hover hover:bg-white/5 transition-all">
              Sign In
            </a>
          </div>

          {/* Mobile menu button */}
          <button onClick={() => setMobileOpen(!mobileOpen)} className="xl:hidden flex flex-col gap-[5px] p-2.5" aria-label="Toggle menu">
            <span className={`w-6 h-0.5 bg-text-primary rounded transition-all ${mobileOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`w-6 h-0.5 bg-text-primary rounded transition-all ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`w-6 h-0.5 bg-text-primary rounded transition-all ${mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="xl:hidden fixed top-16 inset-x-0 bottom-0 bg-bg-primary z-40 border-t border-border overflow-y-auto animate-slide-down">
            <div className="p-6">
              {/* Mobile Forex/Futures toggle */}
              <div className="flex items-center justify-center mb-6 pb-4 border-b border-border">
                <div className="inline-flex items-center bg-bg-card rounded-full p-1 border border-border shadow-lg">
                  <a
                    href="https://tradersyard.com"
                    className="px-7 py-2.5 text-sm font-bold rounded-full transition-all text-text-secondary hover:text-text-primary hover:bg-white/5"
                    onClick={() => setMobileOpen(false)}
                  >
                    Forex
                  </a>
                  <span className="px-7 py-2.5 text-sm font-bold rounded-full bg-primary text-bg-primary cursor-default shadow-[0_0_20px_rgba(34,197,94,0.3)]">
                    Futures
                  </span>
                </div>
              </div>

              <a href="https://tradersyard.com" className="block py-4 text-base font-medium text-text-secondary border-b border-border" onClick={() => setMobileOpen(false)}>Home</a>
              <a href="https://tradersyard.com/#pricing" className="block py-4 text-base font-medium text-text-secondary border-b border-border" onClick={() => setMobileOpen(false)}>Pricing</a>
              <a href="https://tradersyard.com/about" className="block py-4 text-base font-medium text-text-secondary border-b border-border" onClick={() => setMobileOpen(false)}>About</a>

              {/* Arena mobile dropdown */}
              <div className="border-b border-border">
                <button
                  onClick={() => setMobileDropdown(mobileDropdown === "arena" ? null : "arena")}
                  className="flex items-center justify-between w-full py-4 text-base font-medium text-text-secondary"
                >
                  Arena
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={`transition-transform ${mobileDropdown === "arena" ? "rotate-180" : ""}`}>
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
                {mobileDropdown === "arena" && (
                  <div className="pl-6 pb-4">
                    <a href="https://tradersyard.com/arena" className="block py-2 text-[15px] text-text-secondary hover:text-primary" onClick={() => setMobileOpen(false)}>Tournaments</a>
                    <a href="https://tradersyard.com/landing-survivor-showdown" className="block py-2 text-[15px] text-text-secondary hover:text-primary" onClick={() => setMobileOpen(false)}>Survivor Showdown</a>
                  </div>
                )}
              </div>

              {/* Resources mobile dropdown */}
              <div className="border-b border-border">
                <button
                  onClick={() => setMobileDropdown(mobileDropdown === "resources" ? null : "resources")}
                  className="flex items-center justify-between w-full py-4 text-base font-medium text-text-secondary"
                >
                  Resources
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={`transition-transform ${mobileDropdown === "resources" ? "rotate-180" : ""}`}>
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
                {mobileDropdown === "resources" && (
                  <div className="pl-6 pb-4">
                    <a href="https://tradersyard.com/rules" className="block py-2 text-[15px] text-text-secondary hover:text-primary" onClick={() => setMobileOpen(false)}>Rules</a>
                    <a href="https://tradersyard.com/account-scaling" className="block py-2 text-[15px] text-text-secondary hover:text-primary" onClick={() => setMobileOpen(false)}>Account Scaling</a>
                    <a href="https://tradersyard.com/affiliate-program" className="block py-2 text-[15px] text-text-secondary hover:text-primary" onClick={() => setMobileOpen(false)}>Affiliate</a>
                    <a href="https://tradersyard.com/support" className="block py-2 text-[15px] text-text-secondary hover:text-primary" onClick={() => setMobileOpen(false)}>Support</a>
                    <a href="https://docs.tradersyard.com" className="block py-2 text-[15px] text-text-secondary hover:text-primary" onClick={() => setMobileOpen(false)} target="_blank" rel="noopener">Docs</a>
                    <a href="https://blog.tradersyard.com/" className="block py-2 text-[15px] text-text-secondary hover:text-primary" onClick={() => setMobileOpen(false)} target="_blank" rel="noopener">Blog</a>
                  </div>
                )}
              </div>

              {/* Mobile language selector */}
              <div className="border-b border-border">
                <button
                  onClick={() => setMobileDropdown(mobileDropdown === "lang" ? null : "lang")}
                  className="flex items-center justify-between w-full py-4 text-base font-medium text-text-secondary"
                >
                  <span className="flex items-center gap-2">
                    <img src={selectedLang.flag} alt={selectedLang.label} className="w-5 h-3.5 object-cover rounded-sm" />
                    {selectedLang.label}
                  </span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={`transition-transform ${mobileDropdown === "lang" ? "rotate-180" : ""}`}>
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
                {mobileDropdown === "lang" && (
                  <div className="pl-6 pb-4">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => handleLangSelect(lang)}
                        className={`flex items-center gap-2 py-2 text-[15px] w-full text-left ${lang.code === selectedLang.code ? "text-primary" : "text-text-secondary hover:text-primary"}`}
                      >
                        <img src={lang.flag} alt={lang.label} className="w-5 h-3.5 object-cover rounded-sm" />
                        {lang.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile CTAs */}
              <div className="mt-8 pt-6 border-t border-border space-y-3">
                <a href="https://tradersyard.com/auth/register" className="block w-full text-center px-6 py-3.5 bg-primary text-bg-primary font-semibold rounded-xl hover:bg-primary-light transition-all" onClick={() => setMobileOpen(false)}>
                  Get Funded Now
                </a>
                <a href="https://tradersyard.com/auth/login" className="block w-full text-center px-6 py-3.5 border border-border text-text-primary font-semibold rounded-xl hover:bg-white/5 transition-all" onClick={() => setMobileOpen(false)}>
                  Sign In
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
