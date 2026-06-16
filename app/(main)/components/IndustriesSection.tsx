"use client";

import React from "react";
import ShinyText from "@/components/ShinyText/ShinyText";

export default function IndustriesSection() {
  return (
    <section className="w-full bg-[#f5f5f5] py-16 max-md:py-10 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Top Content */}
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-xl border border-[#d9d9d9] bg-white px-4 py-2 shadow-sm">
            <div className="h-2 w-2 rounded-full bg-[#4d7cff]" />
            <span className="text-sm font-medium text-[#4a4a4a]">
              Industries We Empower
            </span>
          </div>

          {/* Heading */}
          <h2 className="max-w-4xl text-[58px] max-md:text-[36px] leading-[1.05] font-semibold tracking-[-2px] text-black">
            Businesses We
            <br />
            <span className="text-[#4d7cff]">
              <ShinyText
                  text="Transform"
                  speed={2}
                  delay={0}
                  color="#2563eb"
                  shineColor="#60a5fa"
                  spread={120}
                  direction="left"
                  yoyo={false}
                  pauseOnHover={false}
                  disabled={false}
                />
            </span>
          </h2>

          {/* Subtitle */}
          <p className="mt-5 max-w-xl text-[15px] max-md:text-[14px] leading-7 text-[#8c8c8c]">
            We deliver tailored digital solutions and innovative technology 
            <br />
            strategies for every industry to help you scale and succeed.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Card 1 */}
          <div className="group relative bg-white rounded-2xl border border-slate-100/90 p-6 sm:p-7 overflow-hidden transition-all duration-500 hover:shadow-[0_20px_48px_-12px_rgba(59,130,246,0.16)] hover:border-blue-100/70 hover:-translate-y-1 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900 mb-2 leading-snug">
              E-Commerce & Retail
            </h3>

            <p className="max-w-md text-[15px] leading-relaxed text-slate-500">
              Transform your retail business with scalable, secure online stores and digital platforms that maximize sales.
            </p>

            <ul className="mt-8 space-y-3">
              {[
                "Custom Online Stores",
                "Conversion Rate Optimization",
                "Omni-channel Marketing",
                "Inventory Integration"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-[14px] text-slate-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Card 2 */}
          <div className="group relative bg-white rounded-2xl border border-slate-100/90 p-6 sm:p-7 overflow-hidden transition-all duration-500 hover:shadow-[0_20px_48px_-12px_rgba(59,130,246,0.16)] hover:border-blue-100/70 hover:-translate-y-1 shadow-sm">
            <ul className="mt-8 space-y-3 mb-8">
              {[
                "MVP Development",
                "Scalable Cloud Architecture",
                "API Development & Integration",
                "Agile IT Consulting"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-[14px] text-slate-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <h3 className="mt-8 text-2xl font-bold text-slate-900 mb-2 leading-snug">
              Startups & Technology
            </h3>

            <p className="max-w-md text-[15px] leading-relaxed text-slate-500">
              Accelerate innovation for tech companies and startups through modern web applications and custom IT solutions.
            </p>
          </div>

          {/* Card 3 */}
          <div className="group relative bg-white rounded-2xl border border-slate-100/90 p-6 sm:p-7 overflow-hidden transition-all duration-500 hover:shadow-[0_20px_48px_-12px_rgba(59,130,246,0.16)] hover:border-blue-100/70 hover:-translate-y-1 shadow-sm">
            <ul className="mt-8 space-y-3 mb-8">
              {[
                "HIPAA Compliant Platforms",
                "E-Learning & LMS Systems",
                "Patient Portals & Telehealth",
                "Virtual Classrooms"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-[14px] text-slate-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <h3 className="mt-8 text-2xl font-bold text-slate-900 mb-2 leading-snug">
              Healthcare & Education
            </h3>

            <p className="max-w-md text-[15px] leading-relaxed text-slate-500">
              Enhance patient care and digital learning with compliant, user-friendly platforms and reliable systems.
            </p>
          </div>

          {/* Card 4 */}
          <div className="group relative bg-white rounded-2xl border border-slate-100/90 p-6 sm:p-7 overflow-hidden transition-all duration-500 hover:shadow-[0_20px_48px_-12px_rgba(59,130,246,0.16)] hover:border-blue-100/70 hover:-translate-y-1 shadow-sm">
            <ul className="mt-8 space-y-3 mb-8">
              {[
                "Property Listing Platforms",
                "Enterprise Resource Planning",
                "Corporate Branding",
                "B2B Marketing Strategies"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-[14px] text-slate-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <h3 className="mt-8 text-2xl font-bold text-slate-900 mb-2 leading-snug">
              Real Estate & Corporate
            </h3>

            <p className="max-w-md text-[15px] leading-relaxed text-slate-500">
              Streamline enterprise operations and enhance property visibility with advanced digital strategies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}