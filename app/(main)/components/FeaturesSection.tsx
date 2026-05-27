'use client';

import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { Zap, GitFork, TrendingUp, Terminal } from 'lucide-react';

export default function FeaturesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const fade = `transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`;

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-20">
          {/* Badge */}
          <div className={`inline-flex items-center rounded-xl gap-2 bg-indigo-50 border border-indigo-100 text-indigo-600 px-5 py-1.5 rounded-full text-sm font-medium mb-6 ${fade}`}>
            <div className="w-2 h-2 bg-indigo-600 rounded-full" />
            Features
          </div>

          {/* Main Heading with Selection Box Effect */}
          <h2 className={`text-5xl md:text-6xl font-extrabold text-slate-900 leading-tight ${fade}`}>
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Smart Features
              </span>
              {/* Selection Box */}
              <span className="absolute -inset-2 border border-slate-300 rounded-lg pointer-events-none" />
              {/* Corner Handles */}
              <span className="absolute -top-1 -left-1 w-2.5 h-2.5 bg-slate-900" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-slate-900" />
              <span className="absolute -bottom-1 -left-1 w-2.5 h-2.5 bg-slate-900" />
              <span className="absolute -bottom-1 -right-1 w-2.5 h-2.5 bg-slate-900" />
            </span>{' '}
            That Support Your Business
          </h2>

          <p className={`mt-6 text-lg text-slate-500 max-w-2xl mx-auto ${fade}`}>
            Our smart features are designed to simplify workflows, automate repetitive tasks, 
            and help your business operate faster and more efficiently.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-3 space-y-6">
            <FeatureCard 
              icon={<Zap className="w-6 h-6" />}
              title="AI Task Automation"
              desc="Automate repetitive tasks using intelligent AI workflows that learn and adapt."
            />
            <FeatureCard 
              icon={<GitFork className="w-6 h-6" />}
              title="Workflow Builder"
              desc="Design complex workflows with intuitive drag-and-drop visual tools."
            />
          </div>

          {/* Center - Multi-Agent Card */}
          <div className="lg:col-span-6 flex justify-center">
            <MultiAgentCard />
          </div>

          {/* Right Column */}
          <div className="lg:col-span-3 space-y-6">
            <FeatureCard 
              icon={<TrendingUp className="w-6 h-6" />}
              title="Real-Time Monitoring"
              desc="Track agent performance, activity, and results in real-time dashboards."
            />
            <FeatureCard 
              icon={<Terminal className="w-6 h-6" />}
              title="API Integration"
              desc="Connect seamlessly with CRM, email, databases, and thousands of tools."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// Side Feature Card
function FeatureCard({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="bg-white border border-slate-100 rounded-3xl p-8 hover:shadow-md transition-all group">
      <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-600 mb-6 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="font-semibold text-xl text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-500 leading-relaxed">{desc}</p>
    </div>
  );
}

// Premium Multi-Agent Collaboration Card
function MultiAgentCard() {
  return (
    <div className="max-w-[420px] w-full">
      <div 
        className="relative p-1 rounded-[2.75rem] bg-gradient-to-b from-blue-200 via-indigo-200 to-transparent"
        style={{ boxShadow: '0 0 60px rgba(59, 130, 246, 0.12)' }}
      >
        <div className="bg-white rounded-[2.5rem] p-10 text-center">
          <h3 className="text-2xl font-semibold text-slate-900 mb-2">Multi-Agent Collaboration</h3>
          <p className="text-slate-500 text-[15px] max-w-[260px] mx-auto mb-10">
            Create multiple AI agents that work together seamlessly on complex projects.
          </p>

          {/* Arc Area */}
          <div className="relative h-[260px] w-[300px] mx-auto">
            {/* Trails */}
            <svg width="300" height="260" className="absolute inset-0">
              <defs>
                <linearGradient id="t" x1="50%" y1="0%" x2="50%" y2="100%">
                  <stop offset="0%" stopColor="#94a3b8" stopOpacity="0.6"/>
                  <stop offset="100%" stopColor="#94a3b8" stopOpacity="0"/>
                </linearGradient>
              </defs>
              <rect x="147" y="105" width="6" height="140" rx="3" fill="url(#t)"/>
              <rect x="105" y="118" width="4" height="125" rx="2" fill="url(#t)"/>
              <rect x="191" y="118" width="4" height="125" rx="2" fill="url(#t)"/>
              <rect x="73" y="135" width="3" height="105" rx="1.5" fill="url(#t)"/>
              <rect x="224" y="135" width="3" height="105" rx="1.5" fill="url(#t)"/>
            </svg>

            {/* Avatars */}
            {[
              { left: 22, top: 145, size: 42, src: "https://randomuser.me/api/portraits/women/49.jpg" },
              { left: 72, top: 95,  size: 54, src: "https://randomuser.me/api/portraits/men/32.jpg" },
              { left: 118, top: 52, size: 68, src: "https://randomuser.me/api/portraits/women/79.jpg" },
              { left: 172, top: 95, size: 54, src: "https://randomuser.me/api/portraits/women/65.jpg" },
              { left: 228, top: 145, size: 42, src: "https://randomuser.me/api/portraits/men/46.jpg" },
            ].map((item, i) => (
              <div
                key={i}
                className="absolute rounded-full"
                style={{ left: item.left, top: item.top, width: item.size, height: item.size }}
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
            Team Collaboration
          </button>
        </div>
      </div>
    </div>
  );
}

