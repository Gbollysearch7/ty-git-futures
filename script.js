// TradersYard Futures Landing Page - JavaScript

// ============================================
// COMPETITOR DATA
// ============================================
const competitorData = {
    apex: {
        name: 'Apex Trader Funding',
        monthlyFee: 167,
        paFee: 85,
        drawdown: 'Trailing',
        minDays: 7,
        activationFee: '$85/month PA fee',
        firstPayout: '8+ days',
        profitSplit: '75-90%',
        platformFees: 'Varies',
        dataFees: 'Included',
        timeLimit: '30 days',
        consistencyRule: 'None'
    },
    topstep: {
        name: 'Topstep',
        monthlyFee: 89,
        paFee: 129, // one-time activation
        paFeeType: 'one-time',
        drawdown: 'EOD Trailing',
        minDays: 2,
        activationFee: '$129 (or monthly plan)',
        firstPayout: '5 winning days',
        profitSplit: '90%',
        platformFees: 'Included',
        dataFees: 'Included',
        timeLimit: 'None',
        consistencyRule: 'None'
    },
    takeprofittrader: {
        name: 'Take Profit Trader',
        monthlyFee: 170,
        paFee: 130,
        paFeeType: 'one-time',
        drawdown: 'EOD/Intraday',
        minDays: 5,
        activationFee: '$130 one-time',
        firstPayout: 'Day one (PRO)',
        profitSplit: '80-90%',
        platformFees: 'Included',
        dataFees: 'Included',
        timeLimit: 'None',
        consistencyRule: 'Yes (Test)'
    },
    myfundedfutures: {
        name: 'MyFundedFutures',
        monthlyFee: 157,
        paFee: 0,
        drawdown: 'EOD',
        minDays: 2,
        activationFee: 'Varies by plan',
        firstPayout: 'Daily (Rapid)',
        profitSplit: '80-90%',
        platformFees: 'Included',
        dataFees: 'Included',
        timeLimit: 'None',
        consistencyRule: 'None'
    },
    tradeify: {
        name: 'Tradeify',
        monthlyFee: 103,
        paFee: 0,
        drawdown: 'EOD Trailing',
        minDays: 0,
        activationFee: '$0',
        firstPayout: '5 Win Days',
        profitSplit: '90%',
        platformFees: 'Included',
        dataFees: 'Included',
        timeLimit: 'None',
        consistencyRule: '40% (Eval)'
    },
    bulenox: {
        name: 'Bulenox',
        monthlyFee: 145,
        paFee: 0,
        drawdown: 'EOD Trailing',
        minDays: 1,
        activationFee: '$0',
        firstPayout: '5 Days',
        profitSplit: '90%',
        platformFees: 'Included',
        dataFees: 'Included',
        timeLimit: 'None',
        consistencyRule: '30%'
    }
};

const tradersYardData = {
    name: 'TradersYard',
    prices: {
        10000: 97,  // with LAUNCH35 discount
        25000: 162,
        50000: 194,
        100000: 276,
        150000: 357
    },
    drawdown: 'STATIC',
    minDays: 0,
    activationFee: '$0',
    firstPayout: 'On-demand',
    profitSplit: '90%',
    platformFees: 'Included',
    dataFees: 'Included',
    timeLimit: 'Unlimited',
    consistencyRule: 'None'
};

// Static account specifications (ORIGINAL prices - no promo applied)
const staticAccountSpecs = {
    10000: {
        price: 149,
        balance: '$10,000',
        profitTarget: '$800',
        maxLoss: '$400',
        contracts: '1 Mini / 10 Micros',
        resetFee: '$99',
        promoCode: 'LAUNCH35'
    },
    25000: {
        price: 249,
        balance: '$25,000',
        profitTarget: '$2,000',
        maxLoss: '$1,000',
        contracts: '2 Minis / 20 Micros',
        resetFee: '$199',
        promoCode: 'LAUNCH35'
    },
    50000: {
        price: 299,
        balance: '$50,000',
        profitTarget: '$3,000',
        maxLoss: '$2,000',
        contracts: '5 Minis / 50 Micros',
        resetFee: '$149',
        promoCode: 'LAUNCH35'
    },
    100000: {
        price: 424,
        balance: '$100,000',
        profitTarget: '$6,000',
        maxLoss: '$3,000',
        contracts: '10 Minis / 100 Micros',
        resetFee: '$249',
        promoCode: 'LAUNCH35'
    },
    150000: {
        price: 549,
        balance: '$150,000',
        profitTarget: '$9,000',
        maxLoss: '$4,500',
        contracts: '15 Minis / 150 Micros',
        resetFee: '$349',
        promoCode: 'LAUNCH35'
    }
};

// EOD account specifications (ORIGINAL prices - no promo applied)
const eodAccountSpecs = {
    50000: {
        price: 399,
        balance: '$50,000',
        profitTarget: '$4,000',
        maxLoss: '$2,000',
        contracts: '3 Minis / 30 Micros',
        resetFee: '$349',
        promoCode: 'LAUNCH40'
    },
    150000: {
        price: 549,
        balance: '$150,000',
        profitTarget: '$9,000',
        maxLoss: '$4,500',
        contracts: '15 Minis / 150 Micros',
        resetFee: '$349',
        promoCode: 'LAUNCH40'
    }
};

// ============================================
// PRICING SELECTOR
// ============================================
function initPricingSelector() {
    const typeCards = document.querySelectorAll('.type-card');
    const staticSizes = document.getElementById('static-sizes');
    const eodSizes = document.getElementById('eod-sizes');

    let currentType = 'static';
    let currentSize = 10000;

    // Type card click handler
    typeCards.forEach(card => {
        card.addEventListener('click', () => {
            const type = card.dataset.type;

            // Update active type card
            typeCards.forEach(c => c.classList.remove('active'));
            card.classList.add('active');

            // Show/hide size selectors
            if (type === 'static') {
                staticSizes.classList.remove('hidden');
                eodSizes.classList.add('hidden');
                currentType = 'static';
                currentSize = 10000; // Reset to first size
            } else {
                staticSizes.classList.add('hidden');
                eodSizes.classList.remove('hidden');
                currentType = 'eod';
                currentSize = 50000; // Reset to first EOD size
            }

            // Reset active pills
            document.querySelectorAll('.size-pill').forEach(p => p.classList.remove('active'));
            const activeSizeSelector = type === 'static' ? staticSizes : eodSizes;
            activeSizeSelector.querySelector('.size-pill').classList.add('active');

            updatePricingDisplay();
        });
    });

    // Size pill click handlers
    document.querySelectorAll('.size-pill').forEach(pill => {
        pill.addEventListener('click', () => {
            const size = parseInt(pill.dataset.size);
            const parentSelector = pill.closest('.account-size-selector');

            // Update active pill within the same selector
            parentSelector.querySelectorAll('.size-pill').forEach(p => p.classList.remove('active'));
            pill.classList.add('active');

            currentSize = size;
            updatePricingDisplay();
        });
    });

    function updatePricingDisplay() {
        const specs = currentType === 'static' ? staticAccountSpecs[currentSize] : eodAccountSpecs[currentSize];
        const drawdownType = currentType === 'static' ? 'Static (from starting balance)' : 'EOD Trailing';

        // Update account title
        const titleEl = document.getElementById('selected-account-title');
        titleEl.textContent = `${specs.balance} ${currentType === 'static' ? 'Static' : 'EOD'} Account`;

        // Update price (ORIGINAL price, no promo)
        const priceEl = document.getElementById('display-price');
        priceEl.textContent = `$${specs.price}`;

        // Update promo code
        const promoEl = document.getElementById('promo-code-display');
        promoEl.textContent = specs.promoCode;

        // Update specs table
        document.getElementById('spec-balance').textContent = specs.balance;
        document.getElementById('spec-balance-funded').textContent = specs.balance;
        document.getElementById('spec-target').textContent = specs.profitTarget;
        document.getElementById('spec-maxloss').textContent = specs.maxLoss;
        document.getElementById('spec-maxloss-funded').textContent = specs.maxLoss;
        document.getElementById('spec-drawdown').textContent = drawdownType;
        document.getElementById('spec-contracts').textContent = specs.contracts;
        document.getElementById('spec-reset').textContent = specs.resetFee;
    }

    // Initialize display
    updatePricingDisplay();
}

// ============================================
// COMPARISON GRID (Static - no JS needed)
// ============================================
// The comparison grid is now fully static HTML
// No JavaScript initialization required

// ============================================
// CALCULATOR
// ============================================
function initCalculator() {
    const accountSelect = document.getElementById('calc-account');
    const periodSelect = document.getElementById('calc-period');
    const competitorSelect = document.getElementById('calc-competitor');

    const competitorNameEl = document.getElementById('calc-competitor-name');
    const monthlyEl = document.getElementById('calc-monthly');
    const activationEl = document.getElementById('calc-activation');
    const competitorTotalEl = document.getElementById('calc-competitor-total');
    const tyFeeEl = document.getElementById('calc-ty-fee');
    const tyTotalEl = document.getElementById('calc-ty-total');
    const savingsEl = document.getElementById('calc-savings');

    function calculateSavings() {
        const accountSize = parseInt(accountSelect.value);
        const months = parseInt(periodSelect.value);
        const competitorKey = competitorSelect.value;
        const competitor = competitorData[competitorKey];

        // TradersYard cost (one-time)
        const tyCost = tradersYardData.prices[accountSize];

        // Competitor cost
        let competitorCost;
        if (competitor.paFeeType === 'one-time') {
            competitorCost = (competitor.monthlyFee * months) + competitor.paFee;
        } else {
            competitorCost = (competitor.monthlyFee + competitor.paFee) * months;
        }

        // Update UI
        competitorNameEl.textContent = competitor.name;
        monthlyEl.textContent = `$${competitor.monthlyFee}`;

        if (competitor.paFeeType === 'one-time') {
            activationEl.textContent = `$${competitor.paFee} (one-time)`;
        } else {
            activationEl.textContent = `$${competitor.paFee}/mo`;
        }

        competitorTotalEl.textContent = `$${competitorCost.toLocaleString()}`;
        tyFeeEl.textContent = `$${tyCost}`;
        tyTotalEl.textContent = `$${tyCost}`;

        const savings = competitorCost - tyCost;
        savingsEl.textContent = `$${savings.toLocaleString()}`;
    }

    accountSelect.addEventListener('change', calculateSavings);
    periodSelect.addEventListener('change', calculateSavings);
    competitorSelect.addEventListener('change', calculateSavings);

    // Initialize
    calculateSavings();
}

// ============================================
// FAQ ACCORDION
// ============================================
function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');

        question.addEventListener('click', () => {
            // Close other items
            faqItems.forEach(other => {
                if (other !== item) {
                    other.classList.remove('active');
                }
            });

            // Toggle current item
            item.classList.toggle('active');
        });
    });
}

// ============================================
// SMOOTH SCROLL
// ============================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const navHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ============================================
// MOBILE MENU
// ============================================
function initMobileMenu() {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navRight = document.querySelector('.nav-right');

    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            navRight.classList.toggle('mobile-open');
            menuBtn.classList.toggle('active');
        });
    }
}

// ============================================
// THEME TOGGLE
// ============================================
function initThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    const html = document.documentElement;

    // Check for saved theme preference or default to dark
    const savedTheme = localStorage.getItem('theme') || 'dark';
    html.setAttribute('data-theme', savedTheme);

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = html.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

            html.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
        });
    }
}

// ============================================
// ANIMATIONS ON SCROLL
// ============================================
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observe elements
    document.querySelectorAll('.reason-card, .pricing-card, .step-card, .comparison-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(el);
    });
}

// Add animation class styles
const style = document.createElement('style');
style.textContent = `
    .animate-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }

    .nav-right.mobile-open {
        display: flex !important;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        flex-direction: column;
        background: var(--bg-primary);
        padding: var(--spacing-lg);
        border-bottom: 1px solid var(--border-color);
    }

    .mobile-menu-btn.active span:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
    }

    .mobile-menu-btn.active span:nth-child(2) {
        opacity: 0;
    }

    .mobile-menu-btn.active span:nth-child(3) {
        transform: rotate(-45deg) translate(7px, -6px);
    }
`;
document.head.appendChild(style);

// ============================================
// INITIALIZE ALL
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    initThemeToggle();
    initPricingSelector();
    initCalculator();
    initFAQ();
    initSmoothScroll();
    initMobileMenu();
    initScrollAnimations();
});
