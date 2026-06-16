'use client';

import React, { useEffect, useInsertionEffect, useRef, useState } from 'react';
import Navbar from '@/components/Navbar';
import Image from "next/image";
import logo from '@/public/logo.png'
import ShinyText from "@/components/ShinyText/ShinyText";

// ─────────────────────────────────────────────────────────────────────────────
// Keyframe injection — stable, SSR-safe via useInsertionEffect
// ─────────────────────────────────────────────────────────────────────────────
const KEYFRAMES = `
  @keyframes floatCube {
    0%,100% { transform: perspective(700px) rotateX(7deg) rotateY(-10deg) translateY(0px); }
    50%      { transform: perspective(700px) rotateX(7deg) rotateY(-10deg) translateY(-14px); }
  }
  @keyframes orbitCW  { to { transform: rotate(360deg);  } }
  @keyframes orbitCCW { to { transform: rotate(-360deg); } }
  @keyframes pulseDot {
    0%,100% { opacity: 1;   transform: scale(1);    }
    50%     { opacity: 0.4; transform: scale(0.72); }
  }
  @keyframes dashScroll {
    to { stroke-dashoffset: -40; }
  }
`;

function GlobalAnimations() {
  useInsertionEffect(() => {
    if (typeof document === 'undefined') return;
    const id = 'ivorx-svc-keyframes';
    if (document.getElementById(id)) return;
    const el = document.createElement('style');
    el.id = id;
    el.textContent = KEYFRAMES;
    document.head.appendChild(el);
  }, []);
  return null;
}

// ─────────────────────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────────────────────
interface StatItem { icon: React.ReactNode; value: string; label: string }
interface ServiceItem { icon: React.ReactNode; title: string; desc: string }
interface StepItem { num: string; title: string; desc: string; icon: React.ReactNode }

// ─────────────────────────────────────────────────────────────────────────────
// Fade-up utility
// ─────────────────────────────────────────────────────────────────────────────
function fu(visible: boolean, delay = 0): string {
  return [
    'transition-all duration-700 ease-out',
    visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5',
    delay ? `[transition-delay:${delay}ms]` : '',
  ].join(' ');
}

function FadeUp({
  visible, delay = 0, className = '', children,
}: { visible: boolean; delay?: number; className?: string; children: React.ReactNode }) {
  return <div className={`${fu(visible, delay)} ${className}`}>{children}</div>;
}

// ─────────────────────────────────────────────────────────────────────────────
// Scroll-reveal hook
// ─────────────────────────────────────────────────────────────────────────────
function useVisible(threshold = 0.10) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

// ─────────────────────────────────────────────────────────────────────────────
// SVG icon set
// ─────────────────────────────────────────────────────────────────────────────
const Icon = {
  Code: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  Mobile: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="2" width="14" height="20" rx="2" /><line x1="12" y1="18" x2="12.01" y2="18" />
    </svg>
  ),
  Cloud: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
    </svg>
  ),
  Shield: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  BarChart: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />
      <line x1="2" y1="20" x2="22" y2="20" />
    </svg>
  ),
  Settings: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  ),
  Search: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  ),
  Lightbulb: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <line x1="9" y1="18" x2="15" y2="18" /><line x1="10" y1="22" x2="14" y2="22" />
      <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14" />
    </svg>
  ),
  Rocket: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" /><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  ),
  Users: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  Briefcase: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" /><path d="M2 12h20" />
    </svg>
  ),
  Calendar: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  ),
  Globe: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  ),
  ArrowRight: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
    </svg>
  ),
};

// ─────────────────────────────────────────────────────────────────────────────
// Badge
// ─────────────────────────────────────────────────────────────────────────────
function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-[10px] sm:text-xs font-bold tracking-[0.18em] text-blue-600 uppercase block mb-3">
      {children}
    </span>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// ── HERO ─────────────────────────────────────────────────────────────────────
// ─────────────────────────────────────────────────────────────────────────────

/** Single ambient sphere */
function Sphere({ size, style }: { size: number; style: React.CSSProperties }) {
  return (
    <div
      className="absolute rounded-full pointer-events-none"
      style={{
        width: size, height: size,
        background: 'radial-gradient(circle at 32% 30%, #c7d2fe 0%, #818cf8 55%, #6366f1 100%)',
        boxShadow: '0 4px 18px rgba(99,102,241,0.30)',
        ...style,
      }}
    />
  );
}

/** Fluid glassmorphic Ivorx cube — no hardcoded pixel widths */
function HeroCube() {
  return (
    <div
      className="relative w-full max-w-[280px] sm:max-w-[320px] mx-auto select-none"
      style={{ aspectRatio: '1 / 1' }}
    >
      {/* Outer orbit ring */}
      <div
        className="absolute inset-0 rounded-full border border-indigo-200/40 pointer-events-none"
        style={{ animation: 'orbitCW 22s linear infinite' }}
      >
        <Sphere size={13} style={{ top: -6.5, left: '50%', transform: 'translateX(-50%)' }} />
        <Sphere size={8} style={{ bottom: -4, right: '12%' }} />
      </div>

      {/* Inner orbit */}
      <div
        className="absolute rounded-full border border-indigo-100/30 pointer-events-none"
        style={{ inset: '16%', animation: 'orbitCCW 15s linear infinite' }}
      >
        <Sphere size={7} style={{ top: -3.5, right: '20%' }} />
      </div>

      {/* Platform shadow */}
      <div
        className="absolute bottom-[8%] left-1/2 -translate-x-1/2 rounded-full pointer-events-none"
        style={{
          width: '58%', height: '5%',
          background: 'radial-gradient(ellipse, rgba(165,180,252,0.42) 0%, transparent 70%)',
          filter: 'blur(5px)',
        }}
      />

      {/* Main cube face */}
      <div
        className="absolute"
        style={{
          inset: '20%',
          borderRadius: '18%',
          background: 'linear-gradient(135deg, rgba(255,255,255,0.80) 0%, rgba(224,231,255,0.64) 50%, rgba(199,210,254,0.52) 100%)',
          border: '1.5px solid rgba(255,255,255,0.84)',
          boxShadow: [
            '0 28px 72px rgba(99,102,241,0.22)',
            '0 8px 24px rgba(99,102,241,0.12)',
            'inset 0 1.5px 0 rgba(255,255,255,0.90)',
            'inset 0 -1px 0 rgba(165,180,252,0.22)',
          ].join(', '),
          backdropFilter: 'blur(18px)',
          WebkitBackdropFilter: 'blur(18px)',
          animation: 'floatCube 4.5s ease-in-out infinite',
        }}
      >
        {/* Shine */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            borderRadius: 'inherit',
            background: 'linear-gradient(135deg, rgba(255,255,255,0.52) 0%, transparent 50%)',
          }}
        />
        {/* Logo mark */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-1.5">
          <Image
            src={logo}
            alt="Ivorx Logo"
            width={80}
            height={80}
          />
          <span className="font-bold text-indigo-700 leading-none" style={{ fontSize: 'clamp(8px, 3.2%, 13px)', letterSpacing: '-0.2px' }}>
            ivorx
          </span>
        </div>
        {/* Right face */}
        <div
          className="absolute top-0 pointer-events-none"
          style={{
            width: '14%', height: '100%', right: '-11%',
            borderRadius: '0 12% 12% 0',
            background: 'linear-gradient(180deg, rgba(165,180,252,0.36) 0%, rgba(129,140,248,0.20) 100%)',
            transform: 'skewY(-6deg)', transformOrigin: 'top left',
          }}
        />
        {/* Bottom face */}
        <div
          className="absolute left-0 pointer-events-none"
          style={{
            width: '100%', height: '14%', bottom: '-11%',
            borderRadius: '0 0 12% 12%',
            background: 'linear-gradient(90deg, rgba(165,180,252,0.28) 0%, rgba(129,140,248,0.16) 100%)',
            transform: 'skewX(-6deg)', transformOrigin: 'top left',
          }}
        />
      </div>

      {/* Floating icons around cube */}
      {/* Code icon chip */}
      <div
        className="absolute z-10 flex items-center justify-center
          w-10 h-10 rounded-xl bg-white border border-slate-100/80
          shadow-[0_8px_24px_rgba(99,102,241,0.14)]"
        style={{ top: '8%', right: '0%', animation: 'floatCube 5s ease-in-out infinite 0.8s' }}
      >
        <span className="text-blue-600"><Icon.Code /></span>
      </div>
      {/* Cloud chip */}
      <div
        className="absolute z-10 flex items-center justify-center
          w-9 h-9 rounded-xl bg-white border border-slate-100/80
          shadow-[0_8px_20px_rgba(99,102,241,0.12)]"
        style={{ bottom: '22%', right: '2%', animation: 'floatCube 4.2s ease-in-out infinite 1.4s' }}
      >
        <span className="text-blue-500"><Icon.Cloud /></span>
      </div>
      {/* Bar chart chip */}
      <div
        className="absolute z-10 flex items-center justify-center
          w-8 h-8 rounded-xl bg-white border border-slate-100/80
          shadow-[0_6px_18px_rgba(99,102,241,0.10)]"
        style={{ bottom: '28%', left: '2%', animation: 'floatCube 3.8s ease-in-out infinite 0.4s' }}
      >
        <span className="text-indigo-500"><Icon.BarChart /></span>
      </div>

      {/* Ambient spheres */}
      <Sphere size={14} style={{ top: '9%', left: '4%', animation: 'floatCube 5.5s ease-in-out infinite 0.6s' }} />
      <Sphere size={7} style={{ bottom: '18%', left: '0%', animation: 'floatCube 4s ease-in-out infinite 1.1s' }} />
    </div>
  );
}

function HeroSection() {
  const { ref, visible } = useVisible(0.05);
  const [btnHover, setBtnHover] = useState(false);

  return (
    <div
      ref={ref}
      className="w-full"
      style={{ background: 'linear-gradient(155deg, #f7f8ff 0%, #eef1fd 55%, #f4f6ff 100%)' }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center py-10 sm:py-12 lg:py-16">

          {/* Left copy */}
          <div className="flex flex-col justify-center text-center lg:text-left order-2 lg:order-1">
            <FadeUp visible={visible} delay={0} className="mb-5">
              <span className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold
                text-blue-600 bg-white border border-blue-100/80 rounded-full px-3.5 py-1.5
                shadow-sm shadow-blue-100/40">
                Our Services
              </span>
            </FadeUp>

            <FadeUp visible={visible} delay={80}>
              <h1 className="font-bold text-slate-900 leading-[1.15] tracking-tight mb-5
                text-[28px] sm:text-4xl md:text-[2.75rem] lg:text-[2.5rem] xl:text-5xl max-md:px-2">
                Technology Solutions<br className="hidden sm:block" />
                {' '}Built for{' '}
                <span className="text-blue-600">
                  <ShinyText
                  text="Your Success"
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
              </h1>
            </FadeUp>

            <FadeUp visible={visible} delay={160}>
              <p className="text-sm sm:text-[15px] text-slate-500 leading-relaxed mb-8
                max-w-md mx-auto lg:mx-0">
                We create innovative, reliable, and scalable IT solutions that help businesses
                grow, adapt, and lead in the modern digital landscape.
              </p>
            </FadeUp>

            <FadeUp visible={visible} delay={240}>
              <div className="flex justify-center lg:justify-start">
                <button
                  onMouseEnter={() => setBtnHover(true)}
                  onMouseLeave={() => setBtnHover(false)}
                  className="inline-flex items-center gap-2.5 bg-slate-900
                    text-white font-semibold text-sm px-6 py-3 rounded-xl
                    shadow-lg shadow-slate-900/20 transition-all duration-200
                    hover:bg-slate-800 hover:shadow-xl hover:shadow-slate-900/25
                    active:scale-[0.97]"
                >
                  Explore Services
                  <span
                    className="transition-transform duration-200"
                    style={{ transform: btnHover ? 'translateX(4px)' : 'translateX(0)' }}
                  >
                    <Icon.ArrowRight />
                  </span>
                </button>
              </div>
            </FadeUp>
          </div>

          {/* Right: cube */}
          <FadeUp visible={visible} delay={100}
            className="flex items-center justify-center order-1 lg:order-2 py-4 lg:py-0">
            <HeroCube />
          </FadeUp>

        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// ── SERVICES GRID ─────────────────────────────────────────────────────────────
// ─────────────────────────────────────────────────────────────────────────────
const SERVICES: ServiceItem[] = [
  {
    icon: <Icon.Code />,
    title: 'Custom Software Development',
    desc: 'We build custom software solutions tailored to your business needs and goals, ensuring scalability and long-term reliability.',
  },
  {
    icon: <Icon.Mobile />,
    title: 'Web & Mobile Development',
    desc: 'Responsive, scalable, and high-performance websites and mobile apps that engage users and drive conversions.',
  },
  {
    icon: <Icon.Cloud />,
    title: 'Cloud Solutions',
    desc: 'Secure and scalable cloud infrastructure to optimize performance, reduce costs, and accelerate your operations.',
  },
  {
    icon: <Icon.Shield />,
    title: 'Cybersecurity',
    desc: 'Protect your business with advanced security solutions and proactive threat detection strategies.',
  },
  {
    icon: <Icon.BarChart />,
    title: 'IT Consulting',
    desc: 'Strategic IT consulting to help you innovate, optimize, and drive meaningful digital transformation.',
  },
  {
    icon: <Icon.Settings />,
    title: 'Maintenance & Support',
    desc: 'Reliable support and maintenance to ensure your systems run smoothly and efficiently, 24/7.',
  },
];

function ServiceCard({ item, visible, delay }: { item: ServiceItem; visible: boolean; delay: number }) {
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={[
        'group relative bg-white rounded-2xl border border-slate-100/90',
        'flex flex-col p-3 sm:p-7 cursor-default overflow-hidden',
        'transition-all duration-500',
        hover
          ? 'shadow-[0_20px_48px_-12px_rgba(59,130,246,0.16)] border-blue-100/70 -translate-y-1'
          : 'shadow-sm',
        fu(visible, delay),
      ].join(' ')}
    >
      {/* Ambient top-right glow on hover */}
      <div
        className="absolute -top-6 -right-6 w-24 h-24 rounded-full pointer-events-none transition-opacity duration-500"
        style={{
          background: 'radial-gradient(circle, rgba(99,102,241,0.10) 0%, transparent 70%)',
          opacity: hover ? 1 : 0,
        }}
      />

      {/* Icon */}
      <div className={[
        'w-8 h-8 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-5',
        'border transition-colors duration-300',
        hover
          ? 'bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-500/25'
          : 'bg-blue-50/70 border-blue-100/50 text-blue-600 shadow-sm shadow-blue-100/30',
      ].join(' ')}>
        <div className="scale-75 sm:scale-100">{item.icon}</div>
      </div>

      <h3 className="text-[11px] sm:text-[15px] font-bold text-slate-900 mb-1 sm:mb-2 leading-tight">
        {item.title}
      </h3>
      <p className="text-[9px] sm:text-[13px] text-slate-400 leading-snug sm:leading-relaxed flex-1">
        {item.desc}
      </p>

      {/* Learn More link */}
      <button
        className={[
          'inline-flex items-center gap-1.5 mt-5',
          'text-[10px] sm:text-xs font-semibold tracking-wide',
          'transition-colors duration-200',
          hover ? 'text-blue-600' : 'text-slate-400',
        ].join(' ')}
      >
        Learn More
        <span className={`transition-transform duration-200 ${hover ? 'translate-x-1' : 'translate-x-0'}`}>
          <Icon.ArrowRight />
        </span>
      </button>
    </div>
  );
}

function ServicesGrid() {
  const { ref, visible } = useVisible();
  return (
    <div ref={ref}>
      {/* Section header */}
      <div className={`text-center mb-10 sm:mb-12 ${fu(visible)}`}>
        <Badge>What We Do</Badge>
        <h2 className="font-bold text-slate-900 tracking-tight
          text-2xl sm:text-3xl md:text-4xl leading-tight">
          Our Services
        </h2>
        <p className="text-sm sm:text-[15px] text-slate-500 max-w-lg mx-auto mt-4 leading-relaxed">
          End-to-end IT services designed to solve complex challenges and deliver real business value.
        </p>
      </div>

      {/* Strictly 2-col grid on mobile and tablet */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-5 max-md:px-2">
        {SERVICES.map((s, i) => (
          <ServiceCard key={i} item={s} visible={visible} delay={80 + i * 80} />
        ))}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// ── PROCESS SECTION ──────────────────────────────────────────────────────────
// ─────────────────────────────────────────────────────────────────────────────
const STEPS: StepItem[] = [
  { num: '01', title: 'Discover', desc: 'We understand your business and goals.', icon: <Icon.Search /> },
  { num: '02', title: 'Plan', desc: 'We create a strategy tailored to your needs.', icon: <Icon.Lightbulb /> },
  { num: '03', title: 'Build', desc: 'We build scalable and secure solutions.', icon: <Icon.Code /> },
  { num: '04', title: 'Deliver', desc: 'We deliver, support, and help you grow.', icon: <Icon.Rocket /> },
];

/** Dashed connector line between steps — hidden on mobile, shown md+ */
function DashLine() {
  return (
    <div className="hidden md:flex flex-1 items-center px-2" aria-hidden>
      <svg width="100%" height="2" className="overflow-visible">
        <line
          x1="0" y1="1" x2="100%" y2="1"
          stroke="#CBD5E1"
          strokeWidth="1.5"
          strokeDasharray="5 5"
          style={{ animation: 'dashScroll 1.8s linear infinite' }}
        />
      </svg>
    </div>
  );
}

function ProcessSection() {
  const { ref, visible } = useVisible();

  return (
    <div
      ref={ref}
      className={`bg-[#F8FAFC] rounded-3xl border border-slate-100 p-6 sm:p-10 lg:p-14 max-md:mx-4 ${fu(visible)}`}
    >
      {/* Header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 mb-8 sm:mb-10">
        <div className={`lg:col-span-5 ${fu(visible, 60)}`}>
          <Badge>Our Approach</Badge>
          <h2 className="font-bold text-slate-900 tracking-tight
            text-2xl sm:text-3xl leading-snug">
            A Simple Process.<br />Powerful Results.
          </h2>
          <p className="text-sm text-slate-500 leading-relaxed mt-4 max-w-md">
            We follow a proven process to deliver solutions that are efficient, transparent,
            and aligned with your goals.
          </p>
          <button
            className="inline-flex items-center gap-2 mt-6
              bg-slate-900 hover:bg-slate-800 active:scale-[0.97]
              text-white font-semibold text-xs sm:text-sm px-5 py-2.5 rounded-xl
              shadow-lg shadow-slate-900/15 transition-all duration-200 group"
          >
            Our Process
            <span className="transition-transform duration-200 group-hover:translate-x-1">
              <Icon.ArrowRight />
            </span>
          </button>
        </div>

        {/* Steps — row on md+, column on mobile */}
        <div className={`lg:col-span-7 ${fu(visible, 130)}`}>
          {/* md+ horizontal row with dashed connectors */}
          <div className="hidden md:flex items-start gap-0">
            {STEPS.map((step, i) => (
              <React.Fragment key={i}>
                <div className={`flex flex-col items-center text-center flex-shrink-0 w-28 lg:w-32 ${fu(visible, 160 + i * 80)}`}>
                  {/* Icon circle */}
                  <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-white border border-blue-100/60
                    flex items-center justify-center text-blue-600
                    shadow-[0_6px_20px_rgba(99,102,241,0.10)] mb-4">
                    {step.icon}
                  </div>
                  <span className="text-[10px] font-bold text-blue-600/70 tracking-widest mb-1">{step.num}</span>
                  <p className="text-xs sm:text-[13px] font-bold text-slate-900 mb-1.5 leading-snug">{step.title}</p>
                  <p className="text-[11px] text-slate-400 leading-relaxed">{step.desc}</p>
                </div>
                {i < STEPS.length - 1 && <DashLine />}
              </React.Fragment>
            ))}
          </div>

          {/* mobile: 2x2 grid down to 320px */}
          <div className="grid grid-cols-2 gap-2 sm:gap-4 md:hidden">
            {STEPS.map((step, i) => (
              <div
                key={i}
                className={`flex flex-col bg-white rounded-2xl border border-slate-100/90 p-4 shadow-sm ${fu(visible, 160 + i * 70)}`}
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-blue-50/70 border border-blue-100/50
                  flex items-center justify-center text-blue-600
                  shadow-sm shadow-blue-100/30 mb-2 sm:mb-3">
                  <div className="scale-75 sm:scale-100">{step.icon}</div>
                </div>
                <span className="text-[9px] sm:text-[10px] font-bold text-blue-500/80 tracking-widest mb-1">{step.num}</span>
                <p className="text-[11px] sm:text-xs font-bold text-slate-900 mb-1 leading-snug">{step.title}</p>
                <p className="text-[9px] sm:text-[11px] text-slate-400 leading-snug sm:leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// ── STATS BANNER ─────────────────────────────────────────────────────────────
// ─────────────────────────────────────────────────────────────────────────────
const STATS: StatItem[] = [
  { icon: <Icon.Users />, value: '50+', label: 'Happy Clients' },
  { icon: <Icon.Briefcase />, value: '120+', label: 'Projects Delivered' },
  { icon: <Icon.Calendar />, value: '10+', label: 'Years of Experience' },
  { icon: <Icon.Globe />, value: '15+', label: 'Countries Served' },
];

function StatsBanner() {
  const { ref, visible } = useVisible();

  return (
    <div
      ref={ref}
      className={`w-full bg-white border border-slate-100 rounded-2xl shadow-sm overflow-hidden ${fu(visible)}`}
    >
      {/*
        Responsive border strategy:
        - Mobile (2-col): col-0 gets border-r; row-0 (items 0,1) get border-b
        - Desktop (4-col): all except last get border-r; no border-b
        Using explicit conditional classes per-cell avoids divide-x/y breaking on wrap.
      */}
      <div className="grid grid-cols-2 lg:grid-cols-4">
        {STATS.map((s, i) => (
          <div
            key={i}
            className={[
              'flex max-md:flex-col items-center max-md:text-center gap-3 sm:gap-4 px-3 sm:px-7 py-4 sm:py-6',
              fu(visible, i * 70),
              // Mobile column divider (left col only)
              i % 2 === 0 ? 'border-r border-slate-100' : '',
              // Mobile row divider (first row only)
              i < 2 ? 'border-b border-slate-100 lg:border-b-0' : '',
              // Desktop column divider (all except last)
              i < 3 ? 'lg:border-r lg:border-slate-100' : '',
            ].join(' ')}
          >
            <div className="w-12 h-12 sm:w-12 sm:h-12 rounded-xl bg-blue-50/70 flex-shrink-0
              flex items-center justify-center text-blue-600 shadow-sm shadow-blue-100/30">
              {s.icon}
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-extrabold tracking-tight text-slate-900 leading-none">
                {s.value}
              </p>
              <p className="text-[12px] sm:text-xs font-medium text-slate-500 mt-1">{s.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// ── CTA BANNER ───────────────────────────────────────────────────────────────
// ─────────────────────────────────────────────────────────────────────────────

/** Layered glassmorphic Ivorx mark for CTA */
function CTAMark() {
  return (
    <div className="relative flex items-center justify-center" style={{ width: 200, height: 170 }}>
      {/* Back card */}
      <div
        className="absolute"
        style={{
          width: 130, height: 90,
          bottom: 18, right: 0,
          borderRadius: 18,
          background: 'linear-gradient(140deg, rgba(224,231,255,0.80) 0%, rgba(199,210,254,0.62) 100%)',
          border: '1px solid rgba(255,255,255,0.72)',
          boxShadow: '0 6px 24px rgba(99,102,241,0.10)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          transform: 'rotate(5deg) translateY(6px)',
        }}
      >
        <div className="absolute inset-0 flex flex-col justify-center px-4 gap-2.5">
          <div className="h-1.5 rounded-full bg-indigo-300/50 w-4/5" />
          <div className="h-1.5 rounded-full bg-indigo-300/35 w-3/5" />
        </div>
      </div>

      {/* Front card */}
      <div
        className="absolute"
        style={{
          width: 148, height: 104,
          bottom: 22, left: 0,
          borderRadius: 20,
          background: 'linear-gradient(145deg, rgba(255,255,255,0.96) 0%, rgba(238,242,255,0.84) 100%)',
          border: '1px solid rgba(255,255,255,0.90)',
          boxShadow: '0 10px 36px rgba(99,102,241,0.14), 0 2px 6px rgba(0,0,0,0.04)',
          backdropFilter: 'blur(14px)',
          WebkitBackdropFilter: 'blur(14px)',
          transform: 'rotate(-3deg)',
        }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
          <Image
            src={logo}
            alt="Ivorx Logo"
            width={70}
            height={60}
          />

          <div className="space-y-1.5 px-4 w-full">
            <div className="h-1 rounded-full bg-slate-200/80 w-full" />
            <div className="h-1 rounded-full bg-slate-200/60 w-4/5" />
          </div>
        </div>
      </div>

      {/* Decorative dots */}
      {([
        { w: 16, top: 10, right: 16, bg: 'linear-gradient(135deg,#c7d2fe,#a5b4fc)', sh: '0 3px 10px rgba(99,102,241,0.26)' },
        { w: 9, top: 55, right: 4, bg: 'linear-gradient(135deg,#e0e7ff,#c7d2fe)', sh: '0 2px 6px rgba(99,102,241,0.16)' },
        { w: 7, top: 28, left: 6, bg: 'linear-gradient(135deg,#dbeafe,#bfdbfe)', sh: '0 2px 5px rgba(59,130,246,0.14)' },
      ] as const).map((dot, i) => (
        <div key={i} className="absolute rounded-full" style={{
          width: dot.w, height: dot.w,
          top: (dot as any).top,
          right: (dot as any).right,
          left: (dot as any).left,
          background: dot.bg,
          boxShadow: dot.sh,
        }} />
      ))}

      {/* Ground glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 rounded-full pointer-events-none" style={{
        width: 130, height: 12,
        background: 'radial-gradient(ellipse, rgba(99,102,241,0.12) 0%, transparent 70%)',
        filter: 'blur(5px)',
      }} />
    </div>
  );
}

function CTABanner() {
  const { ref, visible } = useVisible();

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden rounded-3xl border border-indigo-100/55
        p-8 sm:p-12 lg:p-14 max-md:mx-4 max-md:p-6
        grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center
        ${fu(visible)}`}
      style={{ background: 'linear-gradient(135deg, #EEF2FF 0%, rgba(240,249,255,0.12) 50%, #F5F3FF 100%)' }}
    >
      {/* Ambient blobs */}
      <div className="absolute -right-8 -bottom-8 w-60 h-60 rounded-full bg-indigo-200/30 blur-3xl pointer-events-none" />
      <div className="absolute -left-10 top-0 w-52 h-52 rounded-full bg-blue-100/22 blur-3xl pointer-events-none" />

      {/* Left: text + CTA */}
      <div className={`lg:col-span-7 relative z-10 text-left ${fu(visible, 80)}`}>
        <Badge>Let's Work Together</Badge>
        <h2 className="font-bold text-slate-900 tracking-tight mb-3
          text-2xl sm:text-3xl leading-snug">
          Ready to Start Your Project?
        </h2>
        <p className="text-slate-500 text-xs sm:text-sm leading-relaxed max-w-md mb-6 sm:mb-7">
          Let's discuss how we can help you achieve your business goals with the right technology.
        </p>
        <button
          className="inline-flex items-center gap-2.5 rounded-xl
            bg-slate-900 hover:bg-slate-800 active:scale-[0.97]
            text-white font-semibold text-xs sm:text-sm tracking-wide
            px-6 py-3 w-max
            shadow-lg shadow-slate-900/15
            hover:shadow-xl hover:shadow-slate-900/20
            transition-all duration-200 group"
        >
          Get In Touch
          <span className="transition-transform duration-200 group-hover:translate-x-1">
            <Icon.ArrowRight />
          </span>
        </button>
      </div>

      {/* Right: graphic */}
      <div className={`lg:col-span-5 relative z-10 flex justify-center lg:justify-end ${fu(visible, 170)}`}>
        <CTAMark />

      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// ── ROOT EXPORT ───────────────────────────────────────────────────────────────
// ─────────────────────────────────────────────────────────────────────────────
export default function ServiceSection() {
  return (
    <>
      <GlobalAnimations />

      <div className="w-full bg-white pt-5">

        {/* Navbar */}
        <Navbar />

        {/* Hero */}
        <HeroSection />

        {/* Main content */}
        <section className="bg-white w-full py-10 sm:py-12 lg:py-14" id="services">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12 lg:space-y-14">
            <ServicesGrid />
            <ProcessSection />
            <StatsBanner />
            <CTABanner />
          </div>
        </section>

      </div>
    </>
  );
}