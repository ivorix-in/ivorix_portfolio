"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What services does IVORIX offer?",
      answer: "We offer full-cycle web development, search engine optimization (SEO), digital marketing, custom IT solutions, branding, and e-commerce development tailored to your business needs.",
    },
    {
      question: "How long does a website project take?",
      answer: "Project timelines vary based on complexity, but a standard corporate website typically takes 4-8 weeks from initial consultation to final launch.",
    },
    {
      question: "Do you provide ongoing support after launch?",
      answer: "Yes, we provide comprehensive post-launch support, security updates, and performance monitoring to ensure your digital assets run smoothly and efficiently.",
    },
    {
      question: "Can IVORIX handle both design and SEO?",
      answer: "Absolutely. Our team integrates SEO best practices directly into the design and development phases to ensure your site is built to rank high and perform beautifully.",
    },
    {
      question: "How do I get started with IVORIX?",
      answer: "Simply reach out via our contact form or book a free consultation. We'll discuss your goals and create a custom roadmap for your digital transformation.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#fbfbfb] py-16 max-md:py-10 px-6 md:px-12 lg:px-16 max-md:px-4 overflow-hidden">
      <div className="max-w-[880px] mx-auto">
        {/* Badge */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 border border-[#d9d9d9] bg-white rounded-[10px] px-3.5 py-1.5 shadow-[0_2px_8px_rgba(0,0,0,0.03)]">
            <div className="w-[7px] h-[7px] rounded-full bg-[#4B7EFF]" />
            <span className="text-[13px] font-[600] text-[#111111] tracking-[-0.1px]">
              FAQ
            </span>
          </div>
        </div>

        {/* Heading */}
        <div className="text-center mt-8">
          <h2 className="text-[44px] md:text-[54px] lg:text-[64px] max-md:text-[36px] font-[750] leading-[1.05] tracking-[-0.04em] text-[#0A0A0A]">
            Frequently <span className="text-[#4B7EFF]">Asked</span> Questions
            <br />
            About Our Services
          </h2>

          <p className="max-w-[680px] mx-auto mt-6 text-[18px] lg:text-[20px] max-md:text-[16px] leading-[1.5] text-[#8B8B8B] font-[450] tracking-[-0.02em]">
            Explore answers to commonly asked questions about our IT solutions, development processes, and support.
          </p>
        </div>

        {/* FAQ Accordion Cards */}
        <div className="mt-16 flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`w-full rounded-2xl border transition-all duration-500 overflow-hidden ${isOpen
                ? "border-blue-100/70 bg-white shadow-[0_20px_48px_-12px_rgba(59,130,246,0.16)] -translate-y-1"
                : "border-slate-100/90 bg-white shadow-sm hover:shadow-[0_20px_48px_-12px_rgba(59,130,246,0.16)] hover:border-blue-100/70 hover:-translate-y-1"
              }`}
              >
                {/* Question Trigger */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-7 max-md:p-5 flex items-center justify-between text-left cursor-pointer focus:outline-none select-none"
                >
                  <h3 className="text-[18px] lg:text-[20px] max-md:text-[16px] font-semibold tracking-[-0.02em] text-[#111111] pr-4">
                    {faq.question}
                  </h3>

                  <div className="shrink-0 flex items-center justify-center">
                    <ChevronRight
                      size={20}
                      className={`text-[#555555] transition-transform duration-300 ${isOpen ? "rotate-90 text-[#4B7EFF]" : ""
                        }`}
                    />
                  </div>
                </button>

                {/* Answer Expandable Area */}
                <div
                  className={`transition-all duration-300 ease-in-out ${isOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
                    }`}
                >
                  <div className="px-8 pb-7 max-md:px-5 max-md:pb-5 text-[15px] lg:text-[16px] leading-[1.6] text-[#4B5563] font-[450] tracking-[-0.01em] border-t border-[#F3F4F6] pt-5">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Centered Bottom Button */}
        <div className="flex justify-center mt-14">
          <button className="h-[52px] px-9 rounded-[14px] bg-[#111111] hover:bg-[#222222] text-white text-[15px] font-semibold transition-all duration-300 shadow-[0_8px_20px_rgba(0,0,0,0.12)] hover:scale-[1.02] flex items-center justify-center cursor-pointer">
            View All FAQs
          </button>
        </div>
      </div>
    </section>
  );
}