"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is an AI Agent?",
      answer: "An AI Agent is an autonomous software entity designed to perceive its environment, make decisions, and take actions using artificial intelligence to achieve specific goals without manual intervention.",
    },
    {
      question: "How secure is my data?",
      answer: "We employ industry-leading end-to-end encryption, regular penetration testing, and comply with standard compliance regulations (including GDPR and SOC2) to ensure your data remains highly secure and private.",
    },
    {
      question: "Can I integrate my existing tools?",
      answer: "Yes, our platform supports seamless integrations with major productivity tools, database providers, and standard software platforms through native integrations and a robust, secure custom API.",
    },
    {
      question: "Do I need coding skills?",
      answer: "No, our visual canvas, templates, and pre-built workflows are designed for creators and teams of all technical levels, allowing you to configure and deploy intelligent agents with zero code required.",
    },
    {
      question: "What kind of support do you offer?",
      answer: "We offer 24/7 technical support, dedicated customer success managers for enterprise plans, extensive step-by-step documentation, and a vibrant builder community.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#fbfbfb] py-24 px-6 md:px-12 lg:px-16 overflow-hidden">
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
          <h2 className="text-[44px] md:text-[54px] lg:text-[64px] font-[750] leading-[1.05] tracking-[-0.04em] text-[#0A0A0A]">
            Frequently <span className="text-[#4B7EFF]">Asked</span> Questions
            <br />
            About Our Platform
          </h2>

          <p className="max-w-[680px] mx-auto mt-6 text-[18px] lg:text-[20px] leading-[1.5] text-[#8B8B8B] font-[450] tracking-[-0.02em]">
            Explore answers to commonly asked questions about our AI platform,
            including setup, features, integrations, and support.
          </p>
        </div>

        {/* FAQ Accordion Cards */}
        <div className="mt-16 flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`w-full rounded-[20px] border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "border-[#4B7EFF]/35 bg-white shadow-[0_8px_20px_rgba(75,126,255,0.03)]"
                    : "border-[#EDEDED] bg-[#fbfbfb] hover:bg-white hover:border-gray-300"
                }`}
              >
                {/* Question Trigger */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-7 flex items-center justify-between text-left cursor-pointer focus:outline-none select-none"
                >
                  <h3 className="text-[18px] lg:text-[20px] font-semibold tracking-[-0.02em] text-[#111111] pr-4">
                    {faq.question}
                  </h3>

                  <div className="shrink-0 flex items-center justify-center">
                    <ChevronRight
                      size={20}
                      className={`text-[#555555] transition-transform duration-300 ${
                        isOpen ? "rotate-90 text-[#4B7EFF]" : ""
                      }`}
                    />
                  </div>
                </button>

                {/* Answer Expandable Area */}
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-8 pb-7 text-[15px] lg:text-[16px] leading-[1.6] text-[#4B5563] font-[450] tracking-[-0.01em] border-t border-[#F3F4F6] pt-5">
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