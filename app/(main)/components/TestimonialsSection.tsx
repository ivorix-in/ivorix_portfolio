"use client";

import Image from "next/image";

export default function TestimonialSection() {
  const testimonials = [
    {
      id: 1,
      text: "This AI agent platform saved us hundreds of hours every month Our customer support is now 10x faster and more efficient.",
      name: "Fauna Lemelin",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: 2,
      text: "Since adopting this AI platform, we've reduced manual work and improved our customer support speed by nearly ten times.",
      name: "Jeffery B. Lambert",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 3,
      text: "The workflow builder is incredibly intuitive. We automated our entire lead generation process in just a few hours.",
      name: "Jackie B. Smith",
      image: "https://randomuser.me/api/portraits/men/11.jpg", // High quality portrait matching the reference image
      featured: true,
    },
    {
      id: 4,
      text: "Game changer! We've reduced operational costs by 60% while improving service quality. Couldn't recommend it more.",
      name: "Charles K. Felix",
      image: "https://randomuser.me/api/portraits/men/46.jpg",
    },
    {
      id: 5,
      text: "Our team now handles customer requests much faster, saving hundreds of hours monthly with the help of AI automation.",
      name: "Jessamine Gaillou",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
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
                Testimonial
              </span>
            </div>

            {/* Heading */}
            <h2 className="mt-7 text-[46px] md:text-[56px] lg:text-[68px] font-[800] leading-[1.04] tracking-[-0.045em] text-[#0f172a]">
              <span className="text-[#4B7EFF] bg-gradient-to-r from-[#4B7EFF] to-[#3B82F6] bg-clip-text text-transparent">Trusted</span> by Teams
              <span className="block mt-1 md:mt-2">That Value Efficiency</span>
            </h2>
          </div>

          {/* Right Column (Description) */}
          <div className="max-w-[320px] lg:pt-14 self-start">
            <p className="text-[18px] lg:text-[20px] leading-[1.5] text-[#64748B] font-[450] tracking-[-0.025em]">
              our clients streamline operations and boost productivity with the
              power of intelligent AI agents.
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
            See More
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
      className={`rounded-[24px] border relative overflow-hidden transition-all duration-500 ease-out group hover:translate-y-[-5px]
      ${
        featured
          ? "h-[464px] bg-gradient-to-br from-[#E0ECFF] via-[#F4F8FF] to-[#E3F9FF] border-[#C7DCFF] p-8 lg:p-9 shadow-[0_6px_24px_rgba(75,126,255,0.04)] hover:shadow-[0_20px_48px_rgba(75,126,255,0.15)]"
          : "h-[220px] bg-white border-[#E2E8F0] p-7 lg:p-8 shadow-[0_2px_8px_rgba(0,0,0,0.015)] hover:shadow-[0_16px_32px_rgba(0,0,0,0.06)]"
      }`}
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
        <p className={`font-[450] tracking-[-0.015em] transition-colors duration-300 ${
          featured 
            ? "text-[18px] lg:text-[20px] leading-[1.6] text-[#1e293b]" 
            : "text-[15px] lg:text-[16px] leading-[1.65] text-[#475569] group-hover:text-[#1e293b]"
        }`}>
          {item.text}
        </p>

        {/* Profile Info */}
        <div className="flex items-center gap-4 mt-6">
          <div className={`relative w-12 h-12 rounded-full overflow-hidden border shrink-0 bg-[#F1F5F9] transition-transform duration-500 group-hover:scale-105 ${
            featured ? "border-[#A3C5FF] shadow-[0_2px_8px_rgba(75,126,255,0.1)]" : "border-[#E2E8F0]"
          }`}>
            <Image
              src={item.image}
              alt={item.name}
              fill
              className="object-cover"
            />
          </div>

          <h4 className="text-[16px] lg:text-[17px] font-[700] tracking-[-0.025em] text-[#0f172a] transition-colors duration-300">
            {item.name}
          </h4>
        </div>
      </div>
    </div>
  );
}