import TestimonialSection from "../(main)/components/TestimonialsSection";
import FAQSection from "../(main)/components/FAQSection";

import Hero from "./components/hero";
import Footer from "@/components/footer";
import Navbar from "@/components/Navbar";
import FeaturesSection from "./components/FeaturesSection";
import StepsSection from "./components/StepsSection";
import IndustriesSection from "./components/IndustriesSection";
import AboutSection from "./components/AboutSection";

export default function Home() {
  return (
    <main>
      <Navbar />

      <Hero />
      <FeaturesSection />
      <StepsSection />
      <IndustriesSection />
      <TestimonialSection />
      <FAQSection />
      <Footer />
    </main>
  );
}