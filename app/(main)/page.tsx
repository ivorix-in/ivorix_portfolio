import  TestimonialSection from '../(main)/components/TestimonialsSection'
import  PricingSection from '../(main)/components/PricingSection'
import FAQSection from "../(main)/components/FAQSection";
import Hero from './components/hero';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <main>
    <Hero />
    <TestimonialSection/>
    <PricingSection/>
    <FAQSection/>
    <Footer />
    </main>
  );
}


