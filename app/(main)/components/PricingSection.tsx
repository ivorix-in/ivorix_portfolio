"use client";

import { useState } from "react";

export default function PricingSection() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "annually">("monthly");

  const plans = [
    {
      title: "Starter",
      subtitle: "Perfect for trying out AI agents",
      price: {
        monthly: "Free",
        annually: "Free",
      },
      button: "Get Started",
      popular: false,
      features: [
        "2 AI agents",
        "Basic workflows",
        "100 tasks/month",
      ],
    },
    {
      title: "Pro",
      subtitle: "For growing businesses",
      price: {
        monthly: "$29/month",
        annually: "$24/month",
      },
      button: "Get Started",
      popular: true,
      features: [
        "10 AI agents",
        "Advanced workflows",
        "10,000 tasks/month",
        "Priority support",
      ],
    },
    {
      title: "Enterprise",
      subtitle: "For large organizations",
      price: {
        monthly: "Custom",
        annually: "Custom",
      },
      button: "Contact Sales",
      popular: false,
      features: [
        "Unlimited agents",
        "Custom workflows",
        "Unlimited tasks",
        "Dedicated support",
      ],
    },
  ];

  return (
    <section className="w-full bg-[#fbfbfb] py-24 px-6 md:px-12 lg:px-16 overflow-hidden">
      <div className="max-w-[1140px] mx-auto">
        {/* Badge */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 border border-[#d9d9d9] bg-white rounded-[10px] px-3.5 py-1.5 shadow-[0_2px_8px_rgba(0,0,0,0.03)]">
            <div className="w-[7px] h-[7px] rounded-full bg-[#4B7EFF]" />
            <span className="text-[13px] font-[600] text-[#111111] tracking-[-0.1px]">
              Pricing
            </span>
          </div>
        </div>

        {/* Heading */}
        <div className="text-center mt-8">
          <h2 className="text-[44px] md:text-[54px] lg:text-[64px] font-[750] leading-[1.05] tracking-[-0.04em] text-[#0A0A0A]">
            Smart Pricing <span className="text-[#4B7EFF]">Plans</span> For
            <br />
            Growing Businesses
          </h2>

          <p className="max-w-[680px] mx-auto mt-6 text-[18px] lg:text-[20px] leading-[1.5] text-[#8B8B8B] font-[450] tracking-[-0.02em]">
            Our pricing plans are built to support businesses of all sizes,
            offering flexible options that grow with your needs and budget.
          </p>
        </div>

        {/* Toggle */}
        <div className="flex items-center justify-center gap-8 mt-12">
          {/* Monthly option */}
          <button
            onClick={() => setBillingPeriod("monthly")}
            className="flex items-center gap-2.5 cursor-pointer focus:outline-none select-none group"
          >
            <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-all duration-300 ${
              billingPeriod === "monthly" ? "border-black bg-black" : "border-[#D1D5DB] group-hover:border-gray-400"
            }`}>
              {billingPeriod === "monthly" && (
                <div className="w-[7px] h-[7px] rounded-full bg-[#fbfbfb]" />
              )}
            </div>
            <span className={`text-[15px] font-semibold tracking-[-0.01em] transition-colors duration-300 ${
              billingPeriod === "monthly" ? "text-black font-bold" : "text-[#8C8C8C]"
            }`}>
              Monthly
            </span>
          </button>

          {/* Annually option */}
          <button
            onClick={() => setBillingPeriod("annually")}
            className="flex items-center gap-2.5 cursor-pointer focus:outline-none select-none group"
          >
            <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-all duration-300 ${
              billingPeriod === "annually" ? "border-black bg-black" : "border-[#D1D5DB] group-hover:border-gray-400"
            }`}>
              {billingPeriod === "annually" && (
                <div className="w-[7px] h-[7px] rounded-full bg-[#fbfbfb]" />
              )}
            </div>
            <span className={`text-[15px] font-semibold tracking-[-0.01em] transition-colors duration-300 ${
              billingPeriod === "annually" ? "text-black font-bold" : "text-[#8C8C8C]"
            }`}>
              Annually
            </span>
            <span className="text-[14px] font-bold text-[#4B7EFF] tracking-[-0.01em] ml-0.5">
              Save 15%
            </span>
          </button>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16 items-start">
          {plans.map((plan, index) => {
            const isPro = plan.popular;
            const priceText = billingPeriod === "annually" ? plan.price.annually : plan.price.monthly;

            if (isPro) {
              return (
                <div
                  key={index}
                  className="relative rounded-[26px] bg-gradient-to-b from-[#b9d3ff] via-[#edf3ff] to-[#c2f0ff] p-[1.5px] shadow-[0_12px_36px_rgba(75,126,255,0.08)] hover:shadow-[0_20px_48px_rgba(75,126,255,0.16)] transition-all duration-300 hover:scale-[1.01] group flex flex-col overflow-hidden"
                >
                  {/* Most Popular Banner */}
                  <div className="w-full text-center py-3.5 text-[#111111] text-[15px] font-[650] tracking-[-0.02em] select-none">
                    Most Popular
                  </div>

                  {/* Inner White Card */}
                  <div className="rounded-[24.5px] bg-white border border-[#edf3ff] p-8 flex flex-col h-full">
                    {/* Header */}
                    <div>
                      <h3 className="text-[26px] font-[700] tracking-[-0.02em] text-[#111111]">
                        {plan.title}
                      </h3>
                      <p className="mt-1.5 text-[14px] text-[#8c8c8c] font-[450] tracking-[-0.01em]">
                        {plan.subtitle}
                      </p>
                    </div>

                    {/* Price */}
                    <div className="mt-8">
                      <h4 className="text-[44px] lg:text-[48px] font-extrabold tracking-[-0.04em] text-[#111111] leading-none">
                        {priceText}
                      </h4>
                    </div>

                    {/* CTA Button */}
                    <button className="w-full h-[52px] rounded-[14px] mt-8 bg-[#111111] hover:bg-[#222222] text-white text-[15px] font-semibold transition-all duration-300 shadow-[0_6px_16px_rgba(0,0,0,0.1)] hover:scale-[1.01] flex items-center justify-center cursor-pointer">
                      {plan.button}
                    </button>

                    {/* Divider */}
                    <div className="w-full h-[1px] bg-[#EBEBEB] my-8 shrink-0" />

                    {/* Features checklist */}
                    <div className="flex flex-col gap-5">
                      {plan.features.map((feature, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-3.5"
                        >
                          <div className="w-5 h-5 rounded-full border border-[#111111] flex items-center justify-center shrink-0">
                            <svg
                              width="9"
                              height="7"
                              viewBox="0 0 10 8"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="text-[#111111]"
                            >
                              <path d="M9 1L3.5 6.5L1 4" />
                            </svg>
                          </div>
                          <span className="text-[15px] lg:text-[16px] text-[#222222] font-[450] tracking-[-0.015em]">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            // Starter & Enterprise Card Layout
            return (
              <div
                key={index}
                className="rounded-[26px] bg-white border border-[#EBEBEB] p-8 flex flex-col shadow-[0_2px_8px_rgba(0,0,0,0.01)] hover:shadow-[0_12px_28px_rgba(0,0,0,0.04)] transition-all duration-300 hover:scale-[1.01] group"
              >
                {/* Header */}
                <div>
                  <h3 className="text-[26px] font-[700] tracking-[-0.02em] text-[#111111]">
                    {plan.title}
                  </h3>
                  <p className="mt-1.5 text-[14px] text-[#8c8c8c] font-[450] tracking-[-0.01em]">
                    {plan.subtitle}
                  </p>
                </div>

                {/* Price */}
                <div className="mt-8">
                  <h4 className="text-[44px] lg:text-[48px] font-extrabold tracking-[-0.04em] text-[#111111] leading-none">
                    {priceText}
                  </h4>
                </div>

                {/* CTA Button */}
                <button className="w-full h-[52px] rounded-[14px] mt-8 bg-white hover:bg-[#FAFBFD] border border-[#E5E7EB] hover:border-gray-300 text-[#111111] text-[15px] font-semibold transition-all duration-300 hover:scale-[1.01] flex items-center justify-center cursor-pointer">
                  {plan.button}
                </button>

                {/* Divider */}
                <div className="w-full h-[1px] bg-[#EBEBEB] my-8 shrink-0" />

                {/* Features checklist */}
                <div className="flex flex-col gap-5">
                  {plan.features.map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3.5"
                    >
                      <div className="w-5 h-5 rounded-full border border-[#D1D5DB] flex items-center justify-center shrink-0">
                        <svg
                          width="9"
                          height="7"
                          viewBox="0 0 10 8"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-[#555555]"
                        >
                          <path d="M9 1L3.5 6.5L1 4" />
                        </svg>
                      </div>
                      <span className="text-[15px] lg:text-[16px] text-[#4B5563] font-[450] tracking-[-0.015em]">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}