export default function Footer() {
  const footerLinks = {
    Products: [
      { label: "Futures Challenge", href: "#pricing" },
      { label: "Forex Arena", href: "https://tradersyard.com/arena/forex" },
      { label: "Crypto Arena", href: "https://tradersyard.com/arena/crypto" },
      { label: "Stocks Arena", href: "https://tradersyard.com/arena/stocks" },
    ],
    Resources: [
      { label: "Help Center", href: "https://docs.tradersyard.com" },
      { label: "Blog", href: "https://blog.tradersyard.com" },
      { label: "FAQ", href: "#faq" },
      { label: "Trading Rules", href: "https://docs.tradersyard.com" },
    ],
    Company: [
      { label: "About Us", href: "https://tradersyard.com/about" },
      { label: "Careers", href: "https://tradersyard.com/careers" },
      { label: "Contact", href: "https://tradersyard.com/contact" },
      { label: "Affiliate Program", href: "https://tradersyard.com/affiliates" },
    ],
    Legal: [
      { label: "Terms of Service", href: "https://tradersyard.com/terms" },
      { label: "Privacy Policy", href: "https://tradersyard.com/privacy" },
      { label: "Refund Policy", href: "https://tradersyard.com/refund" },
      { label: "Risk Disclosure", href: "https://tradersyard.com/risk" },
    ],
  };

  const socialLinks = [
    {
      label: "Twitter",
      href: "https://twitter.com/TradersYard",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      label: "Instagram",
      href: "https://instagram.com/tradersyard",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" />
          <circle cx="12" cy="12" r="5" />
          <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
        </svg>
      ),
    },
    {
      label: "YouTube",
      href: "https://youtube.com/@tradersyard",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
    },
    {
      label: "Discord",
      href: "https://discord.gg/2j2zYnTHYp",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.317 4.3698a19.7913 19.7913 0 0 0-4.8851-1.5152.0741.0741 0 0 0-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 0 0-.0785-.037 19.7363 19.7363 0 0 0-4.8852 1.515.0699.0699 0 0 0-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 0 0 .0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 0 0 .0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 0 0-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 0 1-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 0 1 .0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 0 1 .0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 0 1-.0066.1276 12.2986 12.2986 0 0 1-1.873.8914.0766.0766 0 0 0-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 0 0 .0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 0 0 .0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 0 0-.0312-.0286z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-bg-secondary border-t border-border pt-16 pb-8">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="https://tradersyard.com" className="text-[22px] font-bold inline-block mb-4">
              <span className="text-text-primary">Traders</span>
              <span className="text-primary">Yard</span>
            </a>
            <p className="text-sm text-text-secondary mb-4">
              The only futures prop firm with full static drawdown. One-time fees, 90% profit split.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-bg-card rounded-xl flex items-center justify-center text-text-secondary hover:bg-primary hover:text-bg-primary transition-all"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold mb-6">{title}</h4>
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-sm text-text-secondary mb-2 hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-center sm:text-left">
            <p className="text-[13px] text-text-muted mb-1">
              &copy; {new Date().getFullYear()} TradersYard. All rights reserved.
            </p>
            <p className="text-[12px] text-text-muted max-w-[600px]">
              Risk Disclosure: Trading futures involves substantial risk of loss. Past performance
              is not indicative of future results. This is not financial advice.
            </p>
          </div>
          <div className="flex gap-2">
            {socialLinks.slice(0, 4).map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-border rounded-lg flex items-center justify-center text-text-secondary hover:bg-primary hover:border-primary hover:text-bg-primary transition-all"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
