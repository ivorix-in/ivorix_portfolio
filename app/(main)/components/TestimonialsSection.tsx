"use client";

import { Layers, BarChart, Cpu, Target, ShieldCheck } from "lucide-react";

export default function TestimonialSection() {
  const testimonials = [
    {
      id: 1,
      text: "We deliver comprehensive digital solutions under one roof, from robust web applications to advanced SEO, ensuring seamless integration and consistent brand messaging.",
      name: "All-in-One Solutions",
      icon: <Layers className="w-6 h-6 text-slate-600" />,
    },
    {
      id: 2,
      text: "Our strategies are built on solid analytics and market research, ensuring every marketing campaign and digital initiative delivers maximum return on investment.",
      name: "Data-Driven Approach",
      icon: <BarChart className="w-6 h-6 text-slate-600" />,
    },
    {
      id: 3,
      text: "We stay ahead of the curve by utilizing the latest technologies, modern web frameworks, and advanced design principles to keep your business highly competitive.",
      name: "Innovative Technology",
      icon: <Cpu className="w-6 h-6 text-blue-600" />,
      featured: true,
    },
    {
      id: 4,
      text: "Every business is unique. We take the time to understand your specific challenges and craft customized digital strategies that align perfectly with your goals.",
      name: "Tailored Strategies",
      icon: <Target className="w-6 h-6 text-slate-600" />,
    },
    {
      id: 5,
      text: "Our dedicated team provides continuous monitoring, maintenance, and optimization even after your project launches to ensure your long-term success.",
      name: "Ongoing Support",
      icon: <ShieldCheck className="w-6 h-6 text-slate-600" />,
    },
  ];

  return (
    <section className="w-full bg-[#FAFBFD] py-24 px-6 md:px-12 lg:px-16 overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        {/* Top Header */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 lg:gap-16">
          {/* Left Column */}
          <div className="flex-1 max-w-[640px]">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 border border-[#E2E8F0] rounded-[10px] px-3.5 py-1.5 bg-white shadow-[0_2px_6px_rgba(0,0,0,0.02)]">
              <div className="w-[7px] h-[7px] rounded-full bg-[#4B7EFF]" />
              <span className="text-[13px] font-[600] text-[#1e293b] tracking-[-0.1px]">
                Why Choose Us
              </span>
            </div>

            {/* Heading */}
            <h2 className="mt-7 text-[46px] md:text-[56px] lg:text-[68px] font-[800] leading-[1.04] tracking-[-0.045em] text-[#0f172a]">
              Why Businesses <span className="text-[#4B7EFF] bg-gradient-to-r from-[#4B7EFF] to-[#3B82F6] bg-clip-text text-transparent">Trust</span>
              <span className="block mt-1 md:mt-2">IVORIX</span>
            </h2>
          </div>

          {/* Right Column (Description) */}
          <div className="max-w-[320px] lg:pt-14 self-start">
            <p className="text-[18px] lg:text-[20px] leading-[1.5] text-[#64748B] font-[450] tracking-[-0.025em]">
              We combine technical excellence with strategic thinking to deliver complete digital solutions that drive measurable business growth.
            </p>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-start">
          {/* Left Column */}
          <div className="flex flex-col gap-6 lg:gap-8">
            {testimonials.slice(0, 2).map((item) => (
              <Card key={item.id} item={item} />
            ))}
          </div>

          {/* Center Column (Featured) */}
          <div>
            <Card item={testimonials[2]} featured />
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6 lg:gap-8">
            {testimonials.slice(3, 5).map((item) => (
              <Card key={item.id} item={item} />
            ))}
          </div>
        </div>

        {/* "See More" Button */}
        <div className="flex justify-center mt-16">
          <button className="h-[52px] px-10 rounded-[14px] bg-[#0f172a] hover:bg-[#1e293b] text-white text-[15px] font-[600] tracking-[-0.01em] transition-all duration-300 shadow-[0_8px_20px_rgba(15,23,42,0.12)] hover:shadow-[0_12px_28px_rgba(15,23,42,0.2)] hover:scale-[1.015] flex items-center justify-center cursor-pointer">
            Explore Our Services
          </button>
        </div>
      </div>
    </section>
  );
}

/* Card Component */
function Card({
  item,
  featured = false,
}: {
  item: any;
  featured?: boolean;
}) {
  return (
    <div
      className={`relative w-full rounded-2xl overflow-hidden transition-all duration-500 ease-out flex flex-col justify-between ${
        featured
          ? "h-[464px] bg-gradient-to-br from-blue-50 via-indigo-50 to-white border-blue-100/70 p-8 lg:p-9 shadow-[0_20px_48px_-12px_rgba(59,130,246,0.16)] hover:-translate-y-1"
          : "h-[220px] bg-white border border-slate-100/90 p-7 lg:p-8 shadow-sm hover:shadow-[0_20px_48px_-12px_rgba(59,130,246,0.16)] hover:border-blue-100/70 hover:-translate-y-1"
      }`}
      style={{
        borderWidth: featured ? "2px" : "1px",
      }}
    >
      {/* Soft Glow for Featured Card */}
      {featured && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[320px] h-[320px] bg-[#4B7EFF]/12 blur-[80px] rounded-full transition-opacity duration-500 group-hover:opacity-80" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[320px] h-[320px] bg-[#00D2FF]/8 blur-[80px] rounded-full transition-opacity duration-500 group-hover:opacity-80" />
        </div>
      )}

      <div className="relative z-10 flex flex-col justify-between h-full">
        {/* Testimonial Text */}
        <p className={`transition-colors duration-300 ${featured
            ? "text-[15px] leading-relaxed text-slate-900 font-medium"
            : "text-[13px] leading-relaxed text-slate-500 group-hover:text-slate-700"
          }`}>
          {item.text}
        </p>

        {/* Profile Info */}
        <div className="flex items-center gap-4 mt-6">
          <div className={`relative w-12 h-12 rounded-full overflow-hidden flex items-center justify-center border shrink-0 bg-[#F1F5F9] transition-transform duration-500 group-hover:scale-105 ${featured ? "border-[#A3C5FF] shadow-[0_2px_8px_rgba(75,126,255,0.1)]" : "border-[#E2E8F0]"
            }`}>
            {item.icon}
          </div>

          <h4 className="text-[14px] font-bold text-slate-900 leading-snug transition-colors duration-300">
            {item.name}
          </h4>
        </div>
      </div>
    </div>
  );
}