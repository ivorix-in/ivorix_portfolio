import TestimonialSection from "../(main)/components/TestimonialsSection";
import PricingSection from "../(main)/components/PricingSection";
import FAQSection from "../(main)/components/FAQSection";
import FeaturesSection from "./components/FeaturesSection";
import StepsSection from "./components/StepsSection";
import IndustriesSection from "./components/IndustriesSection";
import Footer from "@/components/footer";
import { Navbar, HeroSection } from "@/components/landing";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <StepsSection />
      <IndustriesSection />
      <TestimonialSection />
      <PricingSection />
      <FAQSection />
      <Footer />
    </main>
  );
}
