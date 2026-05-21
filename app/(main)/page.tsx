import  TestimonialSection from '../(main)/components/TestimonialsSection'
import  PricingSection from '../(main)/components/PricingSection'
import FAQSection from "../(main)/components/FAQSection";
import Hero from './components/hero';
import Footer from '@/components/footer';
import Navbar from '@/components/Navbar';
import FeaturesSection from './components/FeaturesSection';
import StepsSection from './components/StepsSection';
export default function Home() {
  return (
    <main>
    <Navbar />
    <Hero />
    <FeaturesSection/>
    <StepsSection/>
    <TestimonialSection/>
    <PricingSection/>
    <FAQSection/>
    <Footer />
    </main>
  );
}


