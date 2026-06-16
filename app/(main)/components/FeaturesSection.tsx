"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { Zap, GitFork, TrendingUp, Terminal } from "lucide-react";
import ShinyText from "@/components/ShinyText/ShinyText";

export default function FeaturesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.15 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const fade = `transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`;

  return (
    <section ref={ref} className="py-16 max-md:py-10 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          {/* Badge */}
          <div
            className={`inline-flex items-center rounded-xl gap-2 bg-indigo-50 border border-indigo-100 text-indigo-600 px-5 py-1.5 rounded-full text-sm font-medium mb-6 ${fade}`}
          >
            <div className="w-2 h-2 bg-indigo-600 rounded-full" />
            Our Services
          </div>

          {/* Main Heading with Selection Box Effect */}
          <h2
            className={`text-5xl md:text-6xl max-md:text-4xl font-extrabold text-slate-900 leading-tight ${fade}`}
          >
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                <ShinyText
                  text="Comprehensive"
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
              {/* Selection Box */}
              <span className="absolute -inset-2 border border-slate-300 rounded-lg pointer-events-none" />
              {/* Corner Handles */}
              <span className="absolute -top-1 -left-1 w-2.5 h-2.5 bg-slate-900" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-slate-900" />
              <span className="absolute -bottom-1 -left-1 w-2.5 h-2.5 bg-slate-900" />
              <span className="absolute -bottom-1 -right-1 w-2.5 h-2.5 bg-slate-900" />
            </span>{" "}
            Digital Expertise
          </h2>

          <p
            className={`mt-6 text-lg max-md:text-base text-slate-500 max-w-2xl mx-auto ${fade}`}
          >
            Everything you need to build, grow, and scale your business in the
            digital era with high-quality customized solutions.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column */}
          <div className="lg:col-span-3 space-y-6 max-md:grid max-md:grid-cols-2 max-md:gap-2 max-md:space-y-0">
            <FeatureCard
              icon={<Zap className="w-6 h-6" />}
              title="Custom Web Development"
              desc="Modern, responsive, and high-performance websites built for scale and conversions."
            />
            <FeatureCard
              icon={<GitFork className="w-6 h-6" />}
              title="SEO & Search Visibility"
              desc="Boost your organic search rankings and drive high-quality traffic to your website."
            />
            <FeatureCard
              icon={<TrendingUp className="w-6 h-6" />}
              title="Digital Marketing & Campaigns"
              desc="Data-driven campaigns to increase brand awareness, engagement, and ROI."
            />
          </div>

          {/* Center - Multi-Agent Card */}
          <div className="lg:col-span-6 flex justify-center">
            <MultiAgentCard />
          </div>

          {/* Right Column */}
          <div className="lg:col-span-3 space-y-6 max-md:grid max-md:grid-cols-2 max-md:gap-2 max-md:space-y-0">
            <FeatureCard
              icon={<TrendingUp className="w-6 h-6" />}
              title="IT Infrastructure & Solutions"
              desc="Tailored software and secure infrastructure to streamline your business operations."
            />
            <FeatureCard
              icon={<Terminal className="w-6 h-6" />}
              title="Mobile App Development"
              desc="High-performance, intuitive iOS and Android applications built for scale and engagement."
            />
            <FeatureCard
              icon={<Zap className="w-6 h-6" />}
              title="Branding & Business Growth"
              desc="Strategic branding and business plans to establish a strong, memorable identity."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`group relative bg-white rounded-2xl border border-slate-100/90 flex flex-col p-3 sm:p-7 cursor-default overflow-hidden transition-all duration-500 ${
        hover
          ? "shadow-[0_20px_48px_-12px_rgba(59,130,246,0.16)] border-blue-100/70 -translate-y-1"
          : "shadow-sm"
      }`}
    >
      {/* Ambient top-right glow on hover */}
      <div
        className="absolute -top-6 -right-6 w-24 h-24 rounded-full pointer-events-none transition-opacity duration-500"
        style={{
          background:
            "radial-gradient(circle, rgba(99,102,241,0.10) 0%, transparent 70%)",
          opacity: hover ? 1 : 0,
        }}
      />

      <div
        className={`w-8 h-8 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-5 border transition-colors duration-300 ${
          hover
            ? "bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-500/25"
            : "bg-blue-50/70 border-blue-100/50 text-blue-600 shadow-sm shadow-blue-100/30"
        }`}
      >
        <div className="scale-75 sm:scale-100">{icon}</div>
      </div>
      <h3 className="text-[11px] sm:text-[15px] font-bold text-slate-900 mb-1 sm:mb-2 leading-tight">
        {title}
      </h3>
      <p className="text-[9px] sm:text-[13px] text-slate-400 leading-snug sm:leading-relaxed flex-1">
        {desc}
      </p>
    </div>
  );
}

// Premium Multi-Agent Collaboration Card
function MultiAgentCard() {
  return (
    <div className="max-w-[420px] w-full">
      <div
        className="relative p-1 rounded-[2.75rem] bg-gradient-to-b from-blue-200 via-indigo-200 to-transparent"
        style={{ boxShadow: "0 0 60px rgba(59, 130, 246, 0.12)" }}
      >
        <div className="bg-white rounded-[2.5rem] p-10 max-md:p-6 text-center">
          <h3 className="text-2xl font-semibold text-slate-900 mb-2">
            Full-Cycle Digital Partner
          </h3>
          <p className="text-slate-500 text-[15px] max-w-[260px] mx-auto mb-10">
            We bring together specialized teams to deliver comprehensive tech
            solutions.
          </p>

          {/* Arc Area */}
          <div className="relative h-[260px] w-[300px] mx-auto">
            {/* Trails */}
            <svg width="300" height="260" className="absolute inset-0">
              <defs>
                <linearGradient id="t" x1="50%" y1="0%" x2="50%" y2="100%">
                  <stop offset="0%" stopColor="#94a3b8" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#94a3b8" stopOpacity="0" />
                </linearGradient>
              </defs>
              <rect
                x="147"
                y="105"
                width="6"
                height="140"
                rx="3"
                fill="url(#t)"
              />
              <rect
                x="105"
                y="118"
                width="4"
                height="125"
                rx="2"
                fill="url(#t)"
              />
              <rect
                x="191"
                y="118"
                width="4"
                height="125"
                rx="2"
                fill="url(#t)"
              />
              <rect
                x="73"
                y="135"
                width="3"
                height="105"
                rx="1.5"
                fill="url(#t)"
              />
              <rect
                x="224"
                y="135"
                width="3"
                height="105"
                rx="1.5"
                fill="url(#t)"
              />
            </svg>

            {/* Avatars */}
            {[
              {
                left: 22,
                top: 145,
                size: 42,
                src: "https://randomuser.me/api/portraits/women/49.jpg",
              },
              {
                left: 72,
                top: 95,
                size: 54,
                src: "https://randomuser.me/api/portraits/men/32.jpg",
              },
              {
                left: 118,
                top: 52,
                size: 68,
                src: "https://randomuser.me/api/portraits/women/79.jpg",
              },
              {
                left: 172,
                top: 95,
                size: 54,
                src: "https://randomuser.me/api/portraits/women/65.jpg",
              },
              {
                left: 228,
                top: 145,
                size: 42,
                src: "https://randomuser.me/api/portraits/men/46.jpg",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="absolute rounded-full"
                style={{
                  left: item.left,
                  top: item.top,
                  width: item.size,
                  height: item.size,
                }}
              >
                <div className="absolute inset-[-12px] bg-white rounded-full blur-md" />
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow">
                  <Image
                    src={item.src}
                    alt=""
                    width={item.size}
                    height={item.size}
                    className="object-cover"
                    unoptimized
                  />
                </div>
              </div>
            ))}
          </div>

          <button className="mt-6 px-8 py-3 bg-zinc-900 hover:bg-black text-white text-sm font-medium rounded-full transition-all active:scale-95">
            View All Services
          </button>
        </div>
      </div>
    </div>
  );
}
