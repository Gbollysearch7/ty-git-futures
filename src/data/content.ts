// ============================================
// COMPETITOR DATA
// ============================================
export interface Competitor {
  name: string;
  monthlyFee: number;
  paFee: number;
  paFeeType?: "one-time" | "monthly";
  drawdown: string;
  minDays: string;
  activationFee: string;
  firstPayout: string;
  profitSplit: string;
  platformFees: string;
  timeLimit: string;
  consistencyRule: string;
}

export const competitorData: Record<string, Competitor> = {
  apex: {
    name: "Apex Trader Funding",
    monthlyFee: 167,
    paFee: 85,
    drawdown: "Trailing",
    minDays: "7 Days",
    activationFee: "$85/mo PA",
    firstPayout: "8+ Days",
    profitSplit: "75-90%",
    platformFees: "Varies",
    timeLimit: "30 Days",
    consistencyRule: "None",
  },
  topstep: {
    name: "Topstep",
    monthlyFee: 89,
    paFee: 129,
    paFeeType: "one-time",
    drawdown: "EOD Trailing",
    minDays: "2 Days",
    activationFee: "$129 one-time",
    firstPayout: "5 Win Days",
    profitSplit: "90%",
    platformFees: "Included",
    timeLimit: "None",
    consistencyRule: "None",
  },
  takeprofittrader: {
    name: "Take Profit Trader",
    monthlyFee: 170,
    paFee: 130,
    paFeeType: "one-time",
    drawdown: "EOD Trailing",
    minDays: "5 Days",
    activationFee: "$130 one-time",
    firstPayout: "After Buffer",
    profitSplit: "80-90%",
    platformFees: "Included",
    timeLimit: "None",
    consistencyRule: "50% Daily",
  },
  myfundedfutures: {
    name: "MyFundedFutures",
    monthlyFee: 157,
    paFee: 0,
    drawdown: "EOD",
    minDays: "2 Days",
    activationFee: "Varies",
    firstPayout: "Daily (Rapid)",
    profitSplit: "80-90%",
    platformFees: "Included",
    timeLimit: "None",
    consistencyRule: "None",
  },
  tradeify: {
    name: "Tradeify",
    monthlyFee: 103,
    paFee: 0,
    drawdown: "EOD Trailing",
    minDays: "0 Days",
    activationFee: "$0",
    firstPayout: "5 Win Days",
    profitSplit: "90%",
    platformFees: "Included",
    timeLimit: "None",
    consistencyRule: "40% (Eval)",
  },
  bulenox: {
    name: "Bulenox",
    monthlyFee: 145,
    paFee: 0,
    drawdown: "EOD Trailing",
    minDays: "1 Day",
    activationFee: "$0",
    firstPayout: "5 Days",
    profitSplit: "90%",
    platformFees: "Included",
    timeLimit: "None",
    consistencyRule: "30%",
  },
};

export const tradersYardData = {
  name: "TradersYard",
  prices: {
    10000: 97,
    25000: 162,
    50000: 194,
    100000: 276,
    150000: 357,
  } as Record<number, number>,
  drawdown: "STATIC",
  minDays: "0 Days",
  activationFee: "$0",
  firstPayout: "On-Demand",
  profitSplit: "90%",
  platformFees: "Included",
  timeLimit: "Unlimited",
  consistencyRule: "None",
};

// ============================================
// PRICING DATA
// ============================================
export interface PricingPlan {
  size: string;
  price: number;
  profitTarget: string;
  maxLoss: string;
  drawdownType: string;
  maxContracts: string;
  minDays: string;
  resetFee: string;
  popular?: boolean;
}

export const staticPlans: PricingPlan[] = [
  {
    size: "$50K",
    price: 299,
    profitTarget: "$3,000",
    maxLoss: "$2,000",
    drawdownType: "Static",
    maxContracts: "5 Minis / 50 Micros",
    minDays: "0 Days",
    resetFee: "$149",
  },
  {
    size: "$100K",
    price: 424,
    profitTarget: "$6,000",
    maxLoss: "$3,000",
    drawdownType: "Static",
    maxContracts: "10 Minis / 100 Micros",
    minDays: "0 Days",
    resetFee: "$249",
    popular: true,
  },
  {
    size: "$150K",
    price: 549,
    profitTarget: "$9,000",
    maxLoss: "$4,500",
    drawdownType: "Static",
    maxContracts: "15 Minis / 150 Micros",
    minDays: "0 Days",
    resetFee: "$349",
  },
];

export const eodPlans: PricingPlan[] = [
  {
    size: "$50K",
    price: 399,
    profitTarget: "$4,000",
    maxLoss: "$2,000",
    drawdownType: "EOD Trailing",
    maxContracts: "3 Minis / 30 Micros",
    minDays: "0 Days",
    resetFee: "$349",
  },
  {
    size: "$100K",
    price: 499,
    profitTarget: "$6,000",
    maxLoss: "$3,000",
    drawdownType: "EOD Trailing",
    maxContracts: "10 Minis / 100 Micros",
    minDays: "0 Days",
    resetFee: "$349",
    popular: true,
  },
  {
    size: "$150K",
    price: 549,
    profitTarget: "$9,000",
    maxLoss: "$4,500",
    drawdownType: "EOD Trailing",
    maxContracts: "15 Minis / 150 Micros",
    minDays: "0 Days",
    resetFee: "$349",
  },
];

// ============================================
// 10 REASONS DATA
// ============================================
export const reasons = [
  { number: "01", title: "0 Days to Pass", description: "Hit your profit target on day one? You're funded on day one. No minimum trading days. No waiting." },
  { number: "02", title: "Full Static Drawdown", description: "The ONLY futures prop with true static drawdown. Your safety buffer never shrinks, no matter how much you profit.", featured: true },
  { number: "03", title: "One-Time Fee", description: "Pay once, trade forever. $194 for a 50K account. No monthly subscriptions. No recurring charges. Ever." },
  { number: "04", title: "First Payout On-Demand", description: "Made money? Take it out. No 14-day waiting period. No minimum profitable days. Request when you want." },
  { number: "05", title: "90% Profit Split", description: 'Keep 90% of everything you make. From day one. Not something you "earn" - it\'s your starting point.' },
  { number: "06", title: "No Consistency Rule", description: "Made 100% of your profits in one epic trade? Great. No rules about spreading profits across days." },
  { number: "07", title: "Unlimited Eval Time", description: "Take a week. Take a year. No pressure, no expiration. Pass when you're ready." },
  { number: "08", title: "$0 Activation Fee", description: "Pass and start trading immediately. No hidden $149 activation fee. No $85/month \"PA fee.\" Zero." },
  { number: "09", title: "Free Platform & Data", description: "Trading platform included. Live data feed included. Other props charge $50-$150 extra." },
  { number: "10", title: "<4 Hour Payouts", description: "Request a payout. Get your money in under 4 hours. Not 4 days. Hours." },
];

// ============================================
// FAQ DATA
// ============================================
export const faqs = [
  {
    question: "What makes TradersYard different from other futures prop firms?",
    answer: "Three things set us apart: (1) We're the ONLY futures prop offering full static drawdown - your max loss level never moves, even when you profit. (2) One-time fees instead of monthly subscriptions - pay $194 once vs $200+/month forever. (3) No artificial barriers - 0 minimum trading days, no consistency rules, and your first payout is on-demand.",
  },
  {
    question: "How does static drawdown actually work?",
    answer: "With static drawdown, your maximum loss level is fixed from day one and never changes. If you have a $50K account with $2,000 max drawdown, your stop level is $48,000. Even if you profit to $60,000, your stop stays at $48,000 - giving you a $12,000 buffer instead of $2,000. Trailing drawdown would move your stop to $58,000, leaving you with the same tiny buffer regardless of profits.",
  },
  {
    question: "Is there really no monthly fee?",
    answer: 'Correct. You pay once for your evaluation account. If you need to reset, you pay the reset fee. That\'s it. No monthly subscriptions, no "PA fees," no recurring charges of any kind. Other props charge $150-$250 per month. We charge $194 once for a 50K account (with current promo).',
  },
  {
    question: "How fast can I get funded?",
    answer: "As fast as you can hit your profit target. There are no minimum trading days. If you hit your target on day one while following the rules, you're funded on day one. Most traders take 3-10 days, but it's entirely up to your trading performance.",
  },
  {
    question: "How do payouts work?",
    answer: "Your first payout is on-demand - no waiting period. After that, you can request payouts every 14 days. We process payouts in under 4 hours. You keep 90% of your profits. We support bank transfers, cryptocurrency, and other methods.",
  },
  {
    question: "What's the catch?",
    answer: "There isn't one. We make money when you pay for an evaluation. We want you to pass and get funded - funded traders who make money and stay active are good for our ecosystem. Unlike subscription models that profit from keeping you in evaluation forever, our one-time fee model means we're actually incentivized to help you succeed.",
  },
  {
    question: "What is a TradersYard Challenge?",
    answer: "The TradersYard Challenge is an evaluation program designed to measure your trading skills. You trade on a simulated account with real market data, and once you hit your profit target while respecting the drawdown rules, you get access to a funded account.",
  },
  {
    question: "How do I sign up?",
    answer: "Signing up is simple: Choose your account size, select between Static or EOD drawdown, complete payment, and you'll receive your trading credentials within minutes. Use promo codes LAUNCH35 (Static accounts) or LAUNCH40 (EOD accounts) for up to 40% off.",
  },
  {
    question: "Do I have to use my own funds to trade challenges?",
    answer: "No. The evaluation fee is the only cost. You trade with our simulated capital during the challenge. Once funded, you trade with our capital and keep 90% of profits. You never risk your own money on trades.",
  },
  {
    question: "What platforms can I use for trading?",
    answer: "We support all major trading platforms including NinjaTrader, Tradovate, TradingView, and more. Platform fees and data feeds are included in your account - no additional costs.",
  },
];

// ============================================
// TESTIMONIALS DATA
// ============================================
export interface Testimonial {
  text: string;
  name: string;
  location: string;
  date: string;
  avatar?: string;
  initials: string;
  initialsColor?: string;
}

export const testimonials: Testimonial[] = [
  {
    text: "Very nice prop firm, they paid me today my first payout, so they are legit and the rules are simple. I like TradersYard!",
    name: "Will Morningstar",
    location: "Monaco",
    date: "Jul 28, 2025",
    avatar: "https://tradersyard.com/landing/trader-avatars/trader-01.webp",
    initials: "WM",
  },
  {
    text: "Trading with TradersYard has been a game-changer for me. Their clear rules and no hidden fees made it easy to focus on growing my account. Plus, the support team is always there when I need them.",
    name: "Dominic Mang",
    location: "Austria",
    date: "Jul 28, 2025",
    avatar: "https://tradersyard.com/landing/trader-avatars/trader-02.webp",
    initials: "DM",
  },
  {
    text: "I took part in their iPhone trading competition, a two-week competition with very simple easy-to-follow rules. I secured 1st rank and was awarded the iPhone 16 as first prize.",
    name: "Ritik Kaushal",
    location: "India",
    date: "Jul 28, 2025",
    initials: "RK",
  },
  {
    text: "The static drawdown is a game-changer. I was constantly getting stopped out with trailing drawdown on other props. Here, I can actually let my winners run without worrying about my buffer shrinking.",
    name: "Ashvin Dhakad",
    location: "India",
    date: "Jul 10, 2025",
    initials: "A",
    initialsColor: "#22c55e",
  },
  {
    text: "First of all it's Europe based and they have a scaling program feature. Then they cover almost all trading instruments... Good to Go!",
    name: "K Pete",
    location: "Germany",
    date: "Jul 28, 2025",
    initials: "K",
    initialsColor: "#22c55e",
  },
  {
    text: "Got funded in 3 days. The one-time fee saved me over $2,000 compared to what I was paying monthly at Apex. No brainer switch.",
    name: "Ryan Pope",
    location: "United States",
    date: "Jun 10, 2025",
    initials: "RP",
    initialsColor: "#4250eb",
  },
  {
    text: "Passed my eval on the first day. Zero minimum trading days means if you're confident in your strategy, you can get funded immediately. Best prop firm rules I've seen.",
    name: "Bertil Dobris",
    location: "Estonia",
    date: "Apr 29, 2025",
    initials: "B",
    initialsColor: "#22c55e",
  },
  {
    text: "They are a good broker with no hidden rules. You just need to pass the account and get paid. They are opening new opportunities for traders, so join and start making money!",
    name: "Priya Garg",
    location: "India",
    date: "Jun 16, 2025",
    avatar: "https://tradersyard.com/landing/trader-avatars/trader-03.webp",
    initials: "PG",
  },
  {
    text: "I am truly proud to be a trader at TradersYard. I found the response from the Support Team to be top notch and everyone was very sincere.",
    name: "Arefin Islam",
    location: "United Kingdom",
    date: "Jul 28, 2025",
    avatar: "https://tradersyard.com/landing/trader-avatars/trader-02.webp",
    initials: "AI",
  },
];

// ============================================
// COMPARISON TABLE DATA
// ============================================
export const comparisonFeatures = [
  "Pricing Model",
  "50K Account Cost",
  "Drawdown Type",
  "Min Trading Days",
  "Activation Fee",
  "Profit Split",
  "Time Limit",
  "First Payout",
  "Platform Fees",
  "Consistency Rule",
];

export const tyComparisonValues = [
  "One-Time Fee",
  "$299",
  "STATIC",
  "0 Days",
  "$0",
  "90%",
  "Unlimited",
  "On-Demand",
  "Included",
  "None",
];

export const comparisonCompetitors = [
  {
    name: "Apex Trader Funding",
    values: ["Monthly Sub", "$167/mo", "Trailing", "7 Days", "$85/mo PA", "75-90%", "30 Days", "8+ Days", "Varies", "None"],
  },
  {
    name: "Topstep",
    values: ["Monthly Sub", "$89/mo", "EOD Trailing", "2 Days", "$129 one-time", "90%", "None", "5 Win Days", "Included", "None"],
  },
  {
    name: "MyFundedFutures",
    values: ["Monthly Sub", "$157/mo", "EOD", "2 Days", "Varies", "80-90%", "None", "Daily (Rapid)", "Included", "None"],
  },
  {
    name: "Tradeify",
    values: ["Monthly Sub", "$103/mo", "EOD Trailing", "0 Days", "$0", "90%", "None", "5 Win Days", "Included", "40% (Eval)"],
  },
  {
    name: "Take Profit Trader",
    values: ["Monthly Sub", "$170/mo", "EOD Trailing", "5 Days", "$130 one-time", "80-90%", "None", "After Buffer", "Included", "50% Daily"],
  },
];
