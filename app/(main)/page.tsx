"use client";

import { useEffect, useState } from "react";

import TestimonialSection from "../(main)/components/TestimonialsSection";
import FAQSection from "../(main)/components/FAQSection";

import Hero from "./components/hero";
import Footer from "@/components/footer";
import Navbar from "@/components/Navbar";
import FeaturesSection from "./components/FeaturesSection";
import StepsSection from "./components/StepsSection";
import IndustriesSection from "./components/IndustriesSection";
import AboutSection from "./components/AboutSection";

import Loader from "@/components/Loader";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

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