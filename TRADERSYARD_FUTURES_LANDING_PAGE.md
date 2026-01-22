# TradersYard Futures Landing Page - Complete Copy & Section Blueprint

## Document Overview
This document contains all the copy, sections, interactive features, and design specifications for the TradersYard Futures landing page. The page is designed to convert futures traders by highlighting TradersYard's unique advantages: static drawdown, one-time fees, and instant funding.

---

## Design System

### Typography
- **Headlines:** Clash Display Bold
- **Subheadlines:** Clash Display Medium
- **Body:** Clash Display Regular
- **Data/Numbers:** Clash Display Bold (tabular figures)
- **Buttons:** Clash Display Medium

### Color Palette
```css
--brand-blue: #4250eb;
--brand-blue-light: #5a67f2;
--brand-blue-dark: #3340d4;
--background-primary: #06080c;
--background-secondary: #0d1117;
--background-card: #161b22;
--background-card-hover: #1c2129;
--text-primary: #f0f2f5;
--text-secondary: #8892a2;
--text-muted: #636e7b;
--accent-gold: #f59e0b;
--accent-gold-light: #fbbf24;
--success: #22c55e;
--danger: #ef4444;
--border: rgba(255, 255, 255, 0.08);
--border-hover: rgba(255, 255, 255, 0.15);
```

### Gradients
```css
--gradient-hero: linear-gradient(135deg, #4250eb 0%, #6366f1 50%, #8b5cf6 100%);
--gradient-card: linear-gradient(180deg, rgba(66, 80, 235, 0.1) 0%, transparent 100%);
--gradient-glow: radial-gradient(circle at center, rgba(66, 80, 235, 0.3) 0%, transparent 70%);
```

---

## Page Structure

### Navigation Bar (Sticky)

**Left Side:**
- TradersYard Logo (links to main site)
- Product Toggle Buttons:
  - [Futures] - Active/Selected state (blue background)
  - [Forex & CFDs] - Links to tradersyard.com

**Right Side:**
- [Pricing](#pricing)
- [Compare](#compare)
- [Calculator](#calculator)
- [FAQ](#faq)
- [Sign In] (ghost button)
- [Get Funded] (primary CTA button)

---

## Section 1: Promo Banner (Sticky Top)

### Visual
Animated gradient banner with scrolling text effect

### Copy
```
LAUNCH SPECIAL: 35% OFF STATIC ACCOUNTS (LAUNCH35) | 40% OFF EOD ACCOUNTS (LAUNCH40)
```

**Alternative Promo Banners (Rotate):**
```
STATIC DRAWDOWN: 35% OFF | Use code LAUNCH35 | Limited Time Only
```
```
EOD ACCOUNTS: 40% OFF | Use code LAUNCH40 | The Yard is Open
```
```
THE ONLY FUTURES PROP WITH FULL STATIC DRAWDOWN | Now 35% Off
```

---

## Section 2: Hero Section

### Layout
Full-width hero with Vienno mascot on right, text/CTA on left, animated chart patterns in background

### Badge (Above Headline)
```
FUTURES TRADING | NOW LIVE
```

### Headline (H1)
```
The Only Futures Prop Firm
With Full Static Drawdown
```

### Subheadline
```
Pay once. Get funded in one day. Keep 90% of your profits.
No trailing drawdown. No monthly fees. No artificial rules.
```

### Primary CTA
```
[Get Your Funded Account] (Primary button - blue)
```

### Secondary CTA
```
[See How We Compare] (Ghost button with arrow)
```

### Social Proof Strip (Below CTAs)
```
[Trustpilot 4.7/5] | [20K+ Active Traders] | [$1M+ Paid Out]
```

### Animated Stats Bar
```
0 Days to Pass | $0 Activation Fee | 90% Profit Split | <4hr Payouts
```

---

## Section 3: The Problem/Solution Section

### Section Tag
```
WHY TRADERS ARE SWITCHING
```

### Headline (H2)
```
Tired of Losing to Trailing Drawdown?
```

### Body Copy
```
You've been there. Up $5,000 on your account. Feeling confident.
Then the market pulls back 2%. Your trailing drawdown catches up.
Account blown. Money gone. Start over.

It's not your trading. It's the rules.

Trailing drawdown is designed to work against you. The more you make,
the tighter your rope becomes. One bad day erases weeks of progress.

That's why we built something different.
```

### Problem/Solution Grid (3 columns)

**Column 1: The Problem**
```
TRAILING DRAWDOWN
Your safety buffer shrinks as you profit. Make $5K?
Your stop is now $5K higher. One pullback ends everything.
```

**Column 2: Their "Solution"**
```
EOD DRAWDOWN
Better, but still trails. Your high-water mark at end of day
becomes your new danger zone. Still works against you.
```

**Column 3: Our Solution**
```
FULL STATIC DRAWDOWN
Your max loss stays FIXED. Forever. Make $10K in profit?
Your buffer is still the same. Trade with real breathing room.
```

### CTA
```
[See Static Drawdown in Action] (Opens modal with visual explainer)
```

---

## Section 4: Static Drawdown Visual Explainer

### Section Tag
```
HOW IT WORKS
```

### Headline (H2)
```
Static Drawdown: Your Buffer Never Moves
```

### Interactive Visualization
An animated chart showing:
1. Account starts at $50,000
2. Trader profits to $55,000
3. With trailing: drawdown moves to $53,000 (only $2K buffer)
4. With static: drawdown stays at $48,000 ($7K buffer)
5. Market pulls back to $52,000
6. Trailing account: BLOWN
7. Static account: Still trading with $4K profit

### Comparison Cards (Side by side)

**Trailing Drawdown (Other Props)**
```
Starting Balance: $50,000
Max Drawdown: $2,000
Your Profit: $5,000
New Balance: $55,000
New Stop Level: $53,000 (!)
Actual Buffer: Only $2,000

One bad trade and you're done.
```

**Static Drawdown (TradersYard)**
```
Starting Balance: $50,000
Max Drawdown: $2,000
Your Profit: $5,000
New Balance: $55,000
Stop Level: $48,000 (UNCHANGED)
Actual Buffer: $7,000

Trade with confidence.
```

### Bottom Text
```
This is why TradersYard is the ONLY futures prop firm offering full static drawdown.
Not EOD. Not "modified trailing." Full. Static. Drawdown.
```

---

## Section 5: 10 Reasons Section

### Section Tag
```
THE TRADERSYARD ADVANTAGE
```

### Headline (H2)
```
10 Reasons Traders Choose the Yard
```

### Feature Grid (2x5 or scrolling cards)

**1. 0 Days to Pass**
```
Hit your profit target on day one? You're funded on day one.
No minimum trading days. No waiting. No artificial delays.
```

**2. Full Static Drawdown**
```
The ONLY futures prop with true static drawdown.
Your safety buffer never shrinks, no matter how much you profit.
```

**3. One-Time Fee**
```
Pay once, trade forever. $299 for a 50K account.
No monthly subscriptions. No recurring charges. Ever.
```

**4. First Payout On-Demand**
```
Made money? Take it out. No 14-day waiting period.
No minimum profitable days. Request your payout when you want it.
```

**5. 90% Profit Split (Default)**
```
Keep 90% of everything you make. From day one.
Not something you "earn" or "scale to." It's your starting point.
```

**6. No Consistency Rule**
```
Made 100% of your profits in one epic trade? Great.
No rules about spreading profits across days. Trade your way.
```

**7. Unlimited Evaluation Time**
```
Take a week. Take a year. No pressure, no expiration.
Pass when you're ready, not when some arbitrary timer runs out.
```

**8. $0 Activation Fee**
```
Pass your evaluation and start trading immediately.
No hidden $149 activation fee. No $85/month "PA fee." Zero.
```

**9. Free Platform & Data**
```
Trading platform included. Live data feed included.
Other props charge $50-$150 extra. We include everything.
```

**10. <4 Hour Payouts**
```
Request a payout. Get your money in under 4 hours.
Not 4 days. Not "3-5 business days." Hours.
```

---

## Section 6: Pricing Section

### Section Tag
```
TRANSPARENT PRICING
```

### Headline (H2)
```
Choose Your Account Size
```

### Subheadline
```
One-time payment. No monthly fees. Everything included.
```

### Account Type Toggle
```
[STATIC DRAWDOWN] (Active) | [EOD DRAWDOWN]
```

### Pricing Cards - STATIC DRAWDOWN (35% OFF with code LAUNCH35)

**$10K Account**
```
$149 (One-time)
[PROMO: $97 with code LAUNCH35] - SAVE $52

Profit Target: $800
Max Contracts: 1 Mini / 10 Micros
Max Loss (Static): $400
Reset Fee: $99

[Get This Account]
```

**$25K Account**
```
$249 (One-time)
[PROMO: $162 with code LAUNCH35] - SAVE $87

Profit Target: $2,000
Max Contracts: 2 Minis / 20 Micros
Max Loss (Static): $1,000
Reset Fee: $199

[Get This Account]
```

**$50K Account - MOST POPULAR**
```
$299 (One-time)
[PROMO: $194 with code LAUNCH35] - SAVE $105

Profit Target: $3,000
Max Contracts: 5 Minis / 50 Micros
Max Loss (Static): $2,000
Reset Fee: $149

[Get This Account]

"Best value for serious traders"
```

**$100K Account**
```
$424 (One-time)
[PROMO: $276 with code LAUNCH35] - SAVE $148

Profit Target: $6,000
Max Contracts: 10 Minis / 100 Micros
Max Loss (Static): $3,000
Reset Fee: $249

[Get This Account]
```

**$150K Account**
```
$549 (One-time)
[PROMO: $357 with code LAUNCH35] - SAVE $192

Profit Target: $9,000
Max Contracts: 15 Minis / 150 Micros
Max Loss (Static): $4,500
Reset Fee: $349

[Get This Account]
```

### Pricing Cards - EOD DRAWDOWN (40% OFF with code LAUNCH40)

**$50K EOD Account**
```
$399 (One-time)
[PROMO: $239 with code LAUNCH40] - SAVE $160

Profit Target: $4,000
Max Contracts: 3 Minis / 30 Micros
Max Loss (EOD): $2,000
Reset Fee: $349

[Get This Account]
```

**$150K EOD Account**
```
$549 (One-time)
[PROMO: $329 with code LAUNCH40] - SAVE $220

Profit Target: $9,000
Max Contracts: 15 Minis / 150 Micros
Max Loss (EOD): $4,500
Reset Fee: $349

[Get This Account]
```

### What's Included (Below pricing cards)
```
Every account includes:
- Full static drawdown
- Free trading platform
- Free live data feed
- $0 activation fee when funded
- Unlimited evaluation time
- 90% profit split
- On-demand first payout
- 14-day payout cycle (after first)
- <4 hour payout processing
```

### Payment Methods
```
We accept: Visa, Mastercard, Bitcoin, Ethereum, USDT, Solana, PayPal, Skrill
```

---

## Section 7: Interactive Comparison Tool

### Section Tag
```
COMPARE PROP FIRMS
```

### Headline (H2)
```
See How TradersYard Stacks Up
```

### Subheadline
```
Select any futures prop firm and see a side-by-side comparison.
```

### Dropdown Selector
```
Compare TradersYard with: [Select a Prop Firm v]
- Apex Trader Funding
- Topstep
- Take Profit Trader
- MyFundedFutures
- Earn2Trade
- Leeloo Trading
- Bulenox
```

### Comparison Table (Dynamic based on selection)

**Default: TradersYard vs Apex Trader Funding**

| Feature | TradersYard | Apex Trader Funding |
|---------|-------------|---------------------|
| **Pricing Model** | One-time fee | Monthly subscription |
| **50K Account Cost** | $299 once | $167/month |
| **Annual Cost (50K)** | $299 | $2,004+ |
| **Drawdown Type** | STATIC | Trailing |
| **Min Trading Days** | 0 | 7 |
| **Activation Fee** | $0 | $85/month PA fee |
| **First Payout Wait** | None | 8+ days |
| **Profit Split** | 90% default | 75-90% |
| **Platform Fees** | Included | Varies |
| **Data Feed Fees** | Included | Varies |
| **Consistency Rule** | None | None |
| **Time Limit** | Unlimited | 30 days |

### Savings Highlight Box
```
ANNUAL SAVINGS WITH TRADERSYARD

Apex costs $167/mo + $85/mo PA fee = $252/month
That's $3,024 per year

TradersYard costs $299. Once. Forever.

YOU SAVE: $2,725 PER YEAR
```

---

## Section 8: Savings Calculator (Interactive)

### Section Tag
```
CALCULATE YOUR SAVINGS
```

### Headline (H2)
```
How Much Will You Save With TradersYard?
```

### Calculator Interface

**Input Fields:**
```
Account Size: [50K v] (dropdown)
How long do you plan to trade? [12 months v] (dropdown: 3, 6, 12, 24, 36 months)
Current/Planned Prop Firm: [Apex Trader Funding v] (dropdown)
```

**Output Display:**
```
YOUR ANNUAL COMPARISON

With [Selected Competitor]:
Monthly Fee: $167
PA/Activation Fee: $85/month
Total Year 1: $3,024
Total Year 2: $6,048
Total Year 3: $9,072

With TradersYard:
One-Time Fee: $299
Total Year 1: $299
Total Year 2: $299
Total Year 3: $299

----------------------------------------
YOUR SAVINGS OVER 3 YEARS: $8,773
----------------------------------------

That's money back in YOUR pocket. Not theirs.
```

### CTA Below Calculator
```
[Start Saving Today - Get Your Account]
```

---

## Section 9: How It Works

### Section Tag
```
GET FUNDED IN 3 STEPS
```

### Headline (H2)
```
From Sign-Up to Payout in Record Time
```

### Steps (Horizontal timeline)

**Step 1: Choose Your Account**
```
Pick your account size. Pay once.
Get instant access to your evaluation account.
No waiting. No approval process. Start trading immediately.
```

**Step 2: Hit Your Target**
```
Trade futures your way. ES, NQ, MES, MNQ - you choose.
Hit your profit target without exceeding max loss.
0 minimum days. Pass in one day if you've got the skills.
```

**Step 3: Get Funded & Paid**
```
Pass the evaluation? You're instantly funded.
$0 activation fee. Start trading your funded account immediately.
Request your first payout whenever you want. We process in <4 hours.
```

### Bottom Stats
```
Average time to pass: Varies by trader
Fastest payout: Same day
Profit split: 90% to you
```

---

## Section 10: Tradeable Instruments

### Section Tag
```
WHAT YOU CAN TRADE
```

### Headline (H2)
```
Trade the World's Most Popular Futures
```

### Instrument Cards

**Index Futures**
```
E-mini S&P 500 (ES)
E-mini Nasdaq 100 (NQ)
E-mini Russell 2000 (RTY)
E-mini Dow (YM)
```

**Micro Futures**
```
Micro E-mini S&P 500 (MES)
Micro E-mini Nasdaq 100 (MNQ)
Micro E-mini Russell 2000 (M2K)
Micro E-mini Dow (MYM)
```

**Energy Futures**
```
Crude Oil (CL)
Natural Gas (NG)
Micro Crude Oil (MCL)
```

**Metal Futures**
```
Gold (GC)
Silver (SI)
Micro Gold (MGC)
```

**Currency Futures**
```
Euro FX (6E)
British Pound (6B)
Japanese Yen (6J)
Australian Dollar (6A)
```

### Platform Compatibility
```
Trade on your favorite platform:
NinjaTrader | Tradovate | TradingView | Quantower | Sierra Chart
```

---

## Section 11: Rules Transparency

### Section Tag
```
SIMPLE, FAIR RULES
```

### Headline (H2)
```
No Hidden Rules. No Gotchas.
```

### What's Allowed (Green checkmarks)
```
- News trading
- Scalping
- Swing trading
- Any trading strategy
- Trade any time during market hours
- Use any indicators or tools
- Copy trading (your own accounts)
```

### What's Restricted (Yellow warning)
```
- Overnight holding (positions closed by EOD)
- Maximum contracts per account (see pricing)
```

### What We DON'T Have (Red X's showing what other props have that we don't)
```
Other props have these rules. We don't:

- NO daily drawdown limit
- NO minimum trading days
- NO consistency rule
- NO maximum evaluation time
- NO activation fee
- NO monthly subscription
- NO platform fees
- NO data feed fees
- NO scaling plan
- NO "cooling off" periods
```

---

## Section 12: Social Proof / Testimonials

### Section Tag
```
FROM OUR COMMUNITY
```

### Headline (H2)
```
Traders Are Entering the Yard
```

### Testimonial Cards (Carousel)

**Testimonial 1**
```
"Finally, a prop firm that doesn't punish you for making money.
Static drawdown changed everything for me. I'm up $8K and my
buffer hasn't moved an inch."

- Marcus T., ES Trader, Texas
```

**Testimonial 2**
```
"I calculated what I was paying Apex over 18 months. Over $4,000.
Switched to TradersYard, paid $299 once. Same account size.
Better rules. No brainer."

- Jennifer L., NQ Scalper, Florida
```

**Testimonial 3**
```
"Passed my eval in 3 days. No minimum trading days meant I didn't
have to sit around waiting. Got funded, made money, got paid.
Under 4 hours to my bank account."

- David K., Futures Trader, UK
```

**Testimonial 4**
```
"The 90% profit split from day one is huge. Other firms make you
'earn' your way to 90%. Here it's just standard. More money
for me, which is the whole point."

- Sarah M., Index Trader, Germany
```

### Payout Screenshots Gallery
```
[Grid of actual payout screenshots from traders]
$2,450 | $5,890 | $1,200 | $8,340 | $3,100 | $12,500
```

### Trust Badges
```
[Trustpilot 4.7] [20K+ Traders] [Backed by Andromeda Capital Partners Suisse]
```

---

## Section 13: FAQ Section

### Section Tag
```
FREQUENTLY ASKED QUESTIONS
```

### Headline (H2)
```
Got Questions? We've Got Answers.
```

### FAQ Accordion

**Q: What makes TradersYard different from other futures prop firms?**
```
A: Three things set us apart: (1) We're the ONLY futures prop offering
full static drawdown - your max loss level never moves, even when you
profit. (2) One-time fees instead of monthly subscriptions - pay $299
once vs $200+/month forever. (3) No artificial barriers - 0 minimum
trading days, no consistency rules, and your first payout is on-demand.
```

**Q: How does static drawdown actually work?**
```
A: With static drawdown, your maximum loss level is fixed from day one
and never changes. If you have a $50K account with $2,000 max drawdown,
your stop level is $48,000. Even if you profit to $60,000, your stop
stays at $48,000 - giving you a $12,000 buffer instead of $2,000.
Trailing drawdown would move your stop to $58,000, leaving you with
the same tiny buffer regardless of profits.
```

**Q: Is there really no monthly fee?**
```
A: Correct. You pay once for your evaluation account. If you need to
reset, you pay the reset fee. That's it. No monthly subscriptions,
no "PA fees," no recurring charges of any kind. Other props charge
$150-$250 per month. We charge $299 once for a 50K account.
```

**Q: How fast can I get funded?**
```
A: As fast as you can hit your profit target. There are no minimum
trading days. If you hit your target on day one while following the
rules, you're funded on day one. Most traders take 3-10 days, but
it's entirely up to your trading performance.
```

**Q: How do payouts work?**
```
A: Your first payout is on-demand - no waiting period. After that,
you can request payouts every 14 days. We process payouts in under
4 hours. You keep 90% of your profits. We support bank transfers,
cryptocurrency, and other methods.
```

**Q: Can I trade during news events?**
```
A: Yes. News trading is allowed. We don't restrict your strategy.
```

**Q: What's the catch?**
```
A: There isn't one. We make money when you pay for an evaluation.
We want you to pass and get funded - funded traders who make money
and stay active are good for our ecosystem. Unlike subscription
models that profit from keeping you in evaluation forever, our
one-time fee model means we're actually incentivized to help you
succeed.
```

**Q: What platforms can I use?**
```
A: We support NinjaTrader, Tradovate, TradingView, Quantower,
Sierra Chart, and more. Platform access and live data are
included in your evaluation fee at no extra cost.
```

**Q: What happens if I blow my funded account?**
```
A: You can purchase a new evaluation account and try again.
Your previous success doesn't disqualify you - we believe in
giving traders multiple chances to prove themselves.
```

**Q: Is this real money trading?**
```
A: Evaluation accounts trade in a simulated environment. Once
funded, you trade a simulated funded account, but the profits
you withdraw are real money paid to you. This is standard
across the prop firm industry and allows us to provide capital
access without requiring traders to risk their own funds.
```

---

## Section 14: Final CTA Section

### Background
Dark gradient with subtle animated chart patterns

### Headline (H2)
```
Ready to Enter the Yard?
```

### Subheadline
```
Join thousands of traders who've made the switch.
Static drawdown. One-time fee. Real payouts.
```

### Price Reminder
```
50K Static Accounts from $194 (was $299)
Use code LAUNCH35 for 35% off Static | LAUNCH40 for 40% off EOD
```

### CTA Buttons
```
[Get Your Funded Account] (Primary - large)
[Compare Plans] (Secondary)
```

### Urgency Element
```
Promo ends Sunday at midnight. 1,247 traders funded this month.
```

---

## Section 15: Footer

### Footer Links

**Products**
- Futures Accounts
- Forex & CFDs (link to main site)
- Pricing
- Account Scaling

**Company**
- About Us
- Blog
- Affiliate Program
- Careers

**Support**
- Documentation
- FAQ
- Contact Support
- Discord Community

**Legal**
- Terms of Service
- Privacy Policy
- Risk Disclosure
- Refund Policy

### Footer Bottom
```
TradersYard is a trading evaluation company. All accounts provided are
demo accounts with virtual funds in a simulated environment.

2024-2026 TradersYard. All rights reserved.
Backed by Andromeda Capital Partners Suisse.
```

### Social Links
```
[Discord] [Twitter/X] [Instagram] [YouTube] [TikTok]
```

---

## Interactive Features Specifications

### 1. Comparison Tool
- Dropdown with 7+ competitor options
- Dynamic table that updates based on selection
- Data pulled from competitor scraping (see competitor data below)
- Savings calculation auto-updates
- "Share this comparison" button for social proof

### 2. Savings Calculator
- Account size selector (5 options)
- Time period selector (3, 6, 12, 24, 36 months)
- Competitor selector (dropdown)
- Real-time calculation display
- Visual chart showing cost difference over time
- "Download comparison PDF" option

### 3. Static Drawdown Visualizer
- Animated chart showing account balance over time
- Toggle between "Trailing" and "Static" views
- Interactive: user can drag profit level to see buffer change
- Clear visual of when trailing account would blow vs static survives

### 4. Pricing Cards
- Tab toggle between Static and EOD accounts
- Promo pricing shows original crossed out, new price highlighted
- "Most Popular" badge on 50K account
- Expandable details for each card
- Direct link to checkout with promo code pre-applied

---

## Competitor Data for Comparison Tool

### Apex Trader Funding
```
50K Account: $167/month (full price) / currently 80% off promos
Drawdown: Trailing
Min Days: 7
Activation Fee: $85/month PA fee
First Payout: 8+ days
Profit Split: 100% first $25K, then 90%
Reset Fee: $80
Data Included: Yes
Platform Included: Yes (NinjaTrader)
```

### Topstep
```
50K Account: $89/month (standard) or $49/month (no activation)
100K Account: $139/month (standard) or $99/month (no activation)
Drawdown: EOD Trailing
Min Days: 2 (express)
Activation Fee: $129 (no activation fee plan available)
First Payout: 5 winning days of $150+
Profit Split: 90%
Platform: TopstepX included
```

### Take Profit Trader
```
50K Account: $170/month
Drawdown: EOD (test), Intraday (PRO)
Min Days: 5
Activation Fee: $130 one-time
First Payout: Day one of PRO
Profit Split: 80% (PRO), 90% (PRO+)
Platform: CQG/Rithmic
```

### MyFundedFutures
```
50K Account: $157/month (Rapid), $77/month (Core)
Drawdown: EOD
Min Days: 2
Activation Fee: Varies by plan
First Payout: Daily (Rapid), Weekly (Core)
Profit Split: 80-90%
```

---

## SEO Metadata

### Page Title
```
TradersYard Futures | Static Drawdown Prop Firm | Get Funded Today
```

### Meta Description
```
The ONLY futures prop firm with full static drawdown. Pay once ($299),
pass in 0 days, keep 90% profits. No monthly fees. No trailing drawdown.
Get funded and paid fast.
```

### Keywords
```
futures prop firm, static drawdown, futures trading, prop trading,
funded futures account, ES trading, NQ trading, futures evaluation,
no monthly fee prop firm, best futures prop firm
```

### Open Graph
```
Title: TradersYard Futures - The Only Prop Firm With Full Static Drawdown
Description: Pay once. Get funded in one day. Keep 90%. No trailing drawdown.
Image: [Hero image with Vienno mascot and key stats]
```

---

## Mobile Considerations

### Hero Section
- Vienno mascot positioned below headline on mobile
- Stats bar scrolls horizontally
- CTAs stack vertically

### Pricing Cards
- Horizontal scroll carousel on mobile
- "Most Popular" card centered by default
- Swipe indicators

### Comparison Tool
- Simplified table view on mobile
- Key differences highlighted
- "View Full Comparison" expands to full table

### Calculator
- Stacked inputs
- Large, touch-friendly dropdowns
- Results displayed prominently

---

## Animation Notes

### On Scroll
- Sections fade in from bottom
- Stats count up when in view
- Feature cards stagger entrance

### Interactive Elements
- Pricing cards lift on hover
- CTAs have subtle pulse animation
- Comparison table rows highlight on hover

### Background
- Subtle parallax on hero image
- Animated gradient on promo banner
- Chart pattern animations in background (subtle)

---

## Conversion Tracking Points

1. Promo banner click
2. Hero CTA clicks
3. Pricing card selections
4. Comparison tool interactions
5. Calculator usage
6. FAQ expansions
7. Footer CTA clicks
8. Time on page
9. Scroll depth
10. Exit intent popup (show promo code)

---

## A/B Testing Suggestions

### Headlines
- "The Only Futures Prop With Full Static Drawdown" vs
- "Pay Once. Trade Forever. Keep 90%." vs
- "Stop Paying Monthly. Start Trading."

### CTAs
- "Get Your Funded Account" vs
- "Start Trading Now" vs
- "Get Funded Today"

### Pricing Display
- With competitor comparison vs without
- Annual savings highlighted vs monthly
- Promo code prominent vs subtle

---

*Document Version: 1.0*
*Created: January 2026*
*Last Updated: January 2026*
*For: TradersYard Futures Landing Page Development*
