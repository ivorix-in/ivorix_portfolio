'use client';

import React, { useEffect, useRef, useState } from 'react';

// ─────────────────────────────────────────────────────────────────────────────
// SVG Icons
// ─────────────────────────────────────────────────────────────────────────────
const Icons = {
  Users: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  ),
  Briefcase: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2"/>
      <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
      <path d="M2 12h20"/>
    </svg>
  ),
  Calendar: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2"/>
      <line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/>
      <line x1="3" y1="10" x2="21" y2="10"/>
    </svg>
  ),
  Globe: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>
  ),
  Lightbulb: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <line x1="9" y1="18" x2="15" y2="18"/><line x1="10" y1="22" x2="14" y2="22"/>
      <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14"/>
    </svg>
  ),
  Shield: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  ),
  Target: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
    </svg>
  ),
  Check: () => (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  ),
  ArrowRight: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
    </svg>
  ),
};

// ─────────────────────────────────────────────────────────────────────────────
// Scroll-reveal hook
// ─────────────────────────────────────────────────────────────────────────────
function useVisible(threshold = 0.10) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

// Fade-up class helper
const fadeUp = (visible: boolean, delay = 0) =>
  `transition-all duration-700 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`
  + (delay ? ` [transition-delay:${delay}ms]` : '');

// ─────────────────────────────────────────────────────────────────────────────
// 1 · Stats Banner
// ─────────────────────────────────────────────────────────────────────────────
const STATS = [
  { icon: <Icons.Users />,     value: '50+',  label: 'Happy Clients'       },
  { icon: <Icons.Briefcase />, value: '120+', label: 'Projects Delivered'  },
  { icon: <Icons.Calendar />,  value: '10+',  label: 'Years of Experience' },
  { icon: <Icons.Globe />,     value: '15+',  label: 'Countries Served'    },
];

function StatsBanner() {
  const { ref, visible } = useVisible();
  return (
    <div
      ref={ref}
      className={`w-full bg-white border border-slate-100 rounded-2xl shadow-sm
        grid grid-cols-2 lg:grid-cols-4 divide-y divide-slate-100 lg:divide-y-0 lg:divide-x divide-slate-100
        ${fadeUp(visible)}`}
    >
      {STATS.map((s, i) => (
        <div key={i} className={`flex items-center gap-4 px-7 py-6 ${fadeUp(visible, i * 70)}`}>
          <div className="w-12 h-12 rounded-xl bg-blue-50/70 flex items-center justify-center text-blue-600 flex-shrink-0">
            {s.icon}
          </div>
          <div>
            <p className="text-2xl font-extrabold tracking-tight text-slate-900 leading-none">{s.value}</p>
            <p className="text-xs font-medium text-slate-500 mt-1">{s.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 2 · Mission Header
// ─────────────────────────────────────────────────────────────────────────────
function MissionHeader() {
  const { ref, visible } = useVisible();
  return (
    <div ref={ref} className={`text-center pt-16 pb-2 ${fadeUp(visible)}`}>
      <span className="text-xs font-bold tracking-widest text-blue-600 mb-3 block uppercase">
        Our Mission
      </span>
      <h2 className="font-bold text-3xl md:text-4xl text-slate-900 tracking-tight">
        Technology with Purpose
      </h2>
      <p className="text-sm text-slate-500 text-center max-w-lg mx-auto mt-4 leading-relaxed">
        We use technology and creativity to solve real problems and create digital solutions
        that make a lasting impact.
      </p>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 3 · Beliefs Grid
// ─────────────────────────────────────────────────────────────────────────────
const BELIEFS = [
  { icon: <Icons.Lightbulb />, title: 'Innovation',    desc: 'We embrace new ideas and build future-ready solutions.'              },
  { icon: <Icons.Shield />,    title: 'Integrity',     desc: 'We work with honesty, transparency, and strong ethics.'              },
  { icon: <Icons.Users />,     title: 'Collaboration', desc: 'We believe in teamwork and growing together with our clients.'       },
  { icon: <Icons.Target />,    title: 'Impact',        desc: 'We focus on delivering solutions that create real business value.'   },
];

function BeliefsGrid() {
  const { ref, visible } = useVisible();
  return (
    <div ref={ref} className="pt-10 pb-6">
      <span className={`text-xs font-bold tracking-widest text-blue-600 mb-8 block text-center uppercase ${fadeUp(visible)}`}>
        What We Believe In
      </span>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {BELIEFS.map((b, i) => (
          <div
            key={i}
            className={`bg-white rounded-2xl border border-slate-100/80 shadow-sm
              hover:shadow-md hover:-translate-y-0.5
              flex flex-col items-center text-center p-8
              ${fadeUp(visible, i * 90)}`}
            style={{ transitionDuration: '650ms' }}
          >
            <div className="w-12 h-12 rounded-xl bg-blue-50/60 border border-blue-100/40
              flex items-center justify-center mb-5 text-blue-600">
              {b.icon}
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-2">{b.title}</h3>
            <p className="text-xs text-slate-400 leading-relaxed">{b.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 4 · Why Choose Ivorx  ── precise rebuild
// ─────────────────────────────────────────────────────────────────────────────
const CHECKLIST = [
  'Experienced and skilled team',
  'Agile and client-focused approach',
  'Quality solutions on time',
  'Long-term partnership',
];

/** Ivorx geometric "A∧" mark in blue */
function IvorxMark() {
  return (
    <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
      {/* Outer A shape */}
      <path d="M26 8L6 42H17.5L26 26L34.5 42H46L26 8Z" fill="#2563EB" />
      {/* Inner cutout highlight */}
      <path d="M20 42L26 30L32 42" fill="#EFF6FF" opacity="0.55" />
    </svg>
  );
}

/** Concentric dashed orbit rings with dot nodes */
function OrbitRings() {
  // Ring specs: size, node angles
  const rings = [
    { size: 160, nodes: [30, 150, 270], dotSize: 5, color: 'border-slate-200'    },
    { size: 230, nodes: [60, 180, 300], dotSize: 6, color: 'border-slate-200/70' },
  ];

  return (
    <>
      {rings.map((r, ri) => (
        <div
          key={ri}
          className={`absolute rounded-full border border-dashed ${r.color} pointer-events-none`}
          style={{ width: r.size, height: r.size }}
        >
          {r.nodes.map((deg) => {
            const rad   = (deg * Math.PI) / 180;
            const half  = r.size / 2;
            const dotR  = r.dotSize / 2;
            const left  = half + half * Math.cos(rad) - dotR;
            const top   = half + half * Math.sin(rad) - dotR;
            return (
              <div
                key={deg}
                className="absolute rounded-full bg-slate-300"
                style={{ width: r.dotSize, height: r.dotSize, left, top }}
              />
            );
          })}
        </div>
      ))}
    </>
  );
}

function WhyChoosePanel() {
  const { ref, visible } = useVisible();
  return (
    <div
      ref={ref}
      className={`bg-[#F8FAFC] rounded-[2rem] border border-slate-100
        p-6 sm:p-10 lg:p-14
        grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center
        ${fadeUp(visible)}`}
    >
      {/* ── Left: Ecosystem graphic ── */}
      <div className="lg:col-span-5 flex items-center justify-center min-h-[260px]">
        <div className="relative flex items-center justify-center" style={{ width: 240, height: 240 }}>

          <OrbitRings />

          {/* Central white icon tile */}
          <div className="relative z-10 w-28 h-28 bg-white rounded-[1.8rem]
            shadow-xl shadow-blue-500/5
            border border-slate-100/60
            flex items-center justify-center">
            <IvorxMark />
          </div>
        </div>
      </div>

      {/* ── Right: Copy + checklist ── */}
      <div className={`lg:col-span-7 text-left flex flex-col justify-center ${fadeUp(visible, 120)}`}>
        <span className="text-xs font-bold tracking-widest text-blue-600 mb-3 block uppercase">
          Why Choose Ivorx
        </span>
        <h2 className="font-bold text-2xl lg:text-3xl text-slate-900 tracking-tight mb-4">
          Your Growth, Our Priority
        </h2>
        <p className="text-slate-500 text-sm leading-relaxed max-w-xl mb-6">
          We combine expertise, technology, and a customer-first approach to deliver
          solutions that drive growth and results.
        </p>

        <ul className="space-y-3.5 pl-1">
          {CHECKLIST.map((item, i) => (
            <li key={i} className={`flex items-center gap-3 ${fadeUp(visible, 180 + i * 70)}`}>
              <span className="flex items-center justify-center w-5 h-5 rounded-full
                bg-blue-50 text-blue-600 border border-blue-100/60 flex-shrink-0">
                <Icons.Check />
              </span>
              <span className="text-xs font-medium text-slate-600 tracking-wide">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 5 · CTA Banner  ── precise rebuild
// ─────────────────────────────────────────────────────────────────────────────

/** Premium 3-D double-bubble chat asset */
function ChatAsset3D() {
  return (
    <div
      className="relative flex items-end justify-center"
      style={{ width: 240, height: 180, filter: 'drop-shadow(0 10px 20px rgba(99,102,241,0.14))' }}
    >
      {/* ── Back bubble (slightly behind + tilted) ── */}
      <div
        className="absolute"
        style={{
          width: 155, height: 105,
          bottom: 20, right: 0,
          borderRadius: 22,
          background: 'linear-gradient(140deg, rgba(224,231,255,0.80) 0%, rgba(199,210,254,0.65) 100%)',
          border: '1px solid rgba(255,255,255,0.72)',
          boxShadow: '0 6px 24px rgba(99,102,241,0.10)',
          transform: 'rotate(4deg) translateY(6px)',
        }}
      >
        {/* Lines */}
        <div className="absolute inset-0 flex flex-col justify-center px-5 gap-2.5">
          <div className="h-2 rounded-full bg-indigo-200/60 w-4/5" />
          <div className="h-2 rounded-full bg-indigo-200/45 w-3/5" />
        </div>
        {/* Tail */}
        <div className="absolute" style={{
          bottom: -9, right: 22,
          borderLeft: '8px solid transparent', borderRight: '5px solid transparent',
          borderTop: '10px solid rgba(199,210,254,0.70)',
        }} />
      </div>

      {/* ── Front bubble (main) ── */}
      <div
        className="absolute"
        style={{
          width: 170, height: 112,
          bottom: 28, left: 0,
          borderRadius: 24,
          background: 'linear-gradient(145deg, rgba(255,255,255,0.92) 0%, rgba(238,242,255,0.80) 100%)',
          border: '1px solid rgba(255,255,255,0.85)',
          boxShadow: '0 8px 32px rgba(99,102,241,0.12), 0 2px 6px rgba(0,0,0,0.05)',
          transform: 'rotate(-3deg)',
        }}
      >
        {/* Three message dots */}
        <div className="absolute inset-0 flex flex-col justify-center px-6 gap-3">
          <div className="h-2 rounded-full bg-slate-200/80 w-full" />
          <div className="h-2 rounded-full bg-slate-200/60 w-4/5" />
          <div className="h-2 rounded-full bg-slate-200/40 w-3/5" />
        </div>
        {/* Tail */}
        <div className="absolute" style={{
          bottom: -11, left: 26,
          borderLeft: '10px solid transparent', borderRight: '6px solid transparent',
          borderTop: '13px solid rgba(238,242,255,0.82)',
        }} />
      </div>

      {/* Floating decorative spheres */}
      {[
        { w: 20, h: 20, top: 10,  right: 20, bg: 'linear-gradient(135deg,#c7d2fe,#a5b4fc)', shadow: 'rgba(99,102,241,0.3)' },
        { w: 11, h: 11, top: 60,  right: 6,  bg: 'linear-gradient(135deg,#e0e7ff,#c7d2fe)', shadow: 'rgba(99,102,241,0.18)' },
        { w: 8,  h: 8,  top: 28,  left: 10,  bg: 'linear-gradient(135deg,#dbeafe,#bfdbfe)', shadow: 'rgba(59,130,246,0.18)' },
        { w: 6,  h: 6,  bottom: 10, left: 40, bg: 'linear-gradient(135deg,#ede9fe,#ddd6fe)', shadow: 'rgba(139,92,246,0.18)' },
      ].map((s, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            width: s.w, height: s.h,
            top: (s as any).top, right: (s as any).right,
            bottom: (s as any).bottom, left: (s as any).left,
            background: s.bg,
            boxShadow: `0 2px 8px ${s.shadow}`,
          }}
        />
      ))}

      {/* Ground shadow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 rounded-full" style={{
        width: 160, height: 16,
        background: 'radial-gradient(ellipse, rgba(99,102,241,0.12) 0%, transparent 70%)',
        filter: 'blur(6px)',
      }} />
    </div>
  );
}

function CTABanner() {
  const { ref, visible } = useVisible();
  const [hovered, setHovered] = useState(false);

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden rounded-[2rem] border border-indigo-100/50
        p-8 sm:p-12 lg:p-14
        grid grid-cols-1 lg:grid-cols-12 gap-8 items-center
        ${fadeUp(visible)}`}
      style={{
        background: 'linear-gradient(135deg, #EEF2FF 0%, rgba(240,253,244,0.15) 50%, #F5F3FF 100%)',
      }}
    >
      {/* Ambient glow blobs */}
      <div className="absolute -right-4 -bottom-4 w-48 h-48 rounded-full bg-indigo-200/40 blur-3xl pointer-events-none" />
      <div className="absolute -left-8 top-0 w-40 h-40 rounded-full bg-blue-100/30 blur-3xl pointer-events-none" />

      {/* ── Left: Copy + button ── */}
      <div className={`lg:col-span-7 relative z-10 ${fadeUp(visible, 80)}`}>
        <span className="text-xs font-bold tracking-widest text-blue-600 mb-3.5 block uppercase">
          Let's Build Something Great
        </span>
        <h2 className="font-bold text-2xl lg:text-3xl text-slate-900 tracking-tight mb-3">
          Let's Create the Future Together
        </h2>
        <p className="text-slate-500 text-xs lg:text-sm leading-relaxed max-w-md mb-6">
          Have a project in mind? We'd love to hear about it and help you bring it to life.
        </p>

        <button
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="inline-flex items-center gap-2 rounded-xl
            bg-[#1E293B] hover:bg-slate-900 active:scale-95
            text-white font-semibold text-xs tracking-wide
            px-6 py-3 w-max shadow-md
            transition-all duration-200"
        >
          Get In Touch
          <span style={{ transform: hovered ? 'translateX(4px)' : 'translateX(0)', transition: 'transform 0.2s' }}>
            <Icons.ArrowRight />
          </span>
        </button>
      </div>

      {/* ── Right: 3-D chat visual ── */}
      <div className={`lg:col-span-5 relative z-10 flex justify-center lg:justify-end ${fadeUp(visible, 160)}`}>
        <ChatAsset3D />
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Main export  →  file: AboutSection.tsx
// ─────────────────────────────────────────────────────────────────────────────
export default function AboutSection() {
  return (
    <section className="bg-white w-full py-12" id="about">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <StatsBanner />
        <MissionHeader />
        <BeliefsGrid />
        <WhyChoosePanel />
        <CTABanner />
      </div>
    </section>
  );
}