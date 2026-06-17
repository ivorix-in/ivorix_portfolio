import TestimonialSection from "../(main)/components/TestimonialsSection";
import FAQSection from "../(main)/components/FAQSection";

import Hero from "./components/hero";
import Footer from "@/components/footer";
import Navbar from "@/components/Navbar";
import FeaturesSection from "./components/FeaturesSection";
import StepsSection from "./components/StepsSection";
import IndustriesSection from "./components/IndustriesSection";
import AboutSection from "./components/AboutSection";

import LightPillar from "@/components/LightPillar/LightPillar";
import Aurora from "@/components/Aurora/Aurora";
import BlobCursor from "@/components/BlobCursor/BlobCursor"; 
import Ballpit from "@/components/Ballpit/Ballpit";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Aurora />
      <FeaturesSection />
      {/* <BlobCursor /> */}
      <StepsSection />
      <IndustriesSection />
      <LightPillar />
      <TestimonialSection />
      <FAQSection />
      {/* <Ballpit /> */}
      <Footer />
    </main>
  );
}