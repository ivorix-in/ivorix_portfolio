import TestimonialSection from "../(main)/components/TestimonialsSection";
import FAQSection from "../(main)/components/FAQSection";

import Hero from "./components/hero";
import Footer from "@/components/footer";
import Navbar from "@/components/Navbar";
import FeaturesSection from "./components/FeaturesSection";
import StepsSection from "./components/StepsSection";
import IndustriesSection from "./components/IndustriesSection";
import AboutSection from "./components/AboutSection";
import Iridescence from "@/components/Iridescence/Iridescence"; 
import LightPillar from "@/components/LightPillar/LightPillar";
import Aurora from "@/components/Aurora/Aurora";
import BlobCursor from "@/components/BlobCursor/BlobCursor"; 
import Ballpit from "@/components/Ballpit/Ballpit";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      {/* Global Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Iridescence
          color={[0.5, 0.6, 0.8]}
          mouseReact={true}
          amplitude={0.1}
          speed={1}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <FeaturesSection />
        <StepsSection />
        <IndustriesSection />
        <LightPillar />
        <TestimonialSection />
        <FAQSection />
        <Footer />
      </div>
    </main>
  );
}