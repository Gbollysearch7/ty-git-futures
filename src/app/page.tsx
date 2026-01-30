import PromoBanner from "@/components/PromoBanner";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedIn from "@/components/FeaturedIn";
import PayoutTicker from "@/components/PayoutTicker";
import ProblemSolution from "@/components/ProblemSolution";
import Reasons from "@/components/Reasons";
import Pricing from "@/components/Pricing";
import AccountQuiz from "@/components/AccountQuiz";
import Comparison from "@/components/Comparison";
import Calculator from "@/components/Calculator";
import HowItWorks from "@/components/HowItWorks";
import ProfitCalculator from "@/components/ProfitCalculator";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Discord from "@/components/Discord";
import Newsletter from "@/components/Newsletter";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import StickyDesktopCTA from "@/components/StickyDesktopCTA";
import ExitIntentPopup from "@/components/ExitIntentPopup";
import Analytics from "@/components/Analytics";
import ScrollAnimations from "@/components/ScrollAnimations";

export default function Home() {
  return (
    <>
      <PromoBanner />
      <Navbar />
      <main>
        <Hero />
        <FeaturedIn />
        <PayoutTicker />
        <ProblemSolution />
        <Reasons />
        <Pricing />
        <AccountQuiz />
        <Comparison />
        <Calculator />
        <HowItWorks />
        <ProfitCalculator />
        <Testimonials />
        <FAQ />
        <Discord />
        <FinalCTA />
        <Newsletter />
      </main>
      <Footer />
      <StickyMobileCTA />
      <StickyDesktopCTA />
      <ExitIntentPopup />
      <Analytics />
      <ScrollAnimations />
    </>
  );
}
