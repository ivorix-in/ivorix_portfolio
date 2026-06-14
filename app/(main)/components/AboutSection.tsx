"use client";

import React, { useEffect, useInsertionEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import CountUp from "@/components/CountUp/CountUp.jsx";
import Image from "next/image";
import logo from '@/public/logo.png'

// ─────────────────────────────────────────────────────────────────────────────
// Global keyframe injection (useInsertionEffect → runs before paint, no flash)
// ─────────────────────────────────────────────────────────────────────────────
const KEYFRAMES = `
  @keyframes floatCube {
    0%,100% { transform: perspective(700px) rotateX(7deg) rotateY(-10deg) translateY(0px);  }
    50%      { transform: perspective(700px) rotateX(7deg) rotateY(-10deg) translateY(-12px); }
  }
  @keyframes orbitCW  { to { transform: rotate(360deg);  } }
  @keyframes orbitCCW { to { transform: rotate(-360deg); } }
  @keyframes pulseDot {
    0%,100% { opacity: 1;   transform: scale(1);   }
    50%     { opacity: 0.4; transform: scale(0.75); }
  }
`;

function GlobalAnimations() {
  useInsertionEffect(() => {
    if (typeof document === "undefined") return;
    const id = "ivorx-keyframes";
    if (document.getElementById(id)) return;
    const el = document.createElement("style");
    el.id = id;
    el.textContent = KEYFRAMES;
    document.head.appendChild(el);
  }, []);
  return null;
}

// ─────────────────────────────────────────────────────────────────────────────
// Prop types
// ─────────────────────────────────────────────────────────────────────────────
interface FadeProps {
  visible: boolean;
  delay?: number;
  className?: string;
  children: React.ReactNode;
}
interface StatItem {
  icon: React.ReactNode;
  value: number;
  suffix: string;
  label: string;
}
interface BeliefItem {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

// ─────────────────────────────────────────────────────────────────────────────
// Utility: fade-up class string
// ─────────────────────────────────────────────────────────────────────────────
function fu(visible: boolean, delay = 0): string {
  return [
    "transition-all duration-700 ease-out",
    visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5",
    delay ? `[transition-delay:${delay}ms]` : "",
  ].join(" ");
}

function FadeUp({ visible, delay = 0, className = "", children }: FadeProps) {
  return <div className={`${fu(visible, delay)} ${className}`}>{children}</div>;
}

// ─────────────────────────────────────────────────────────────────────────────
// Scroll-reveal hook
// ─────────────────────────────────────────────────────────────────────────────
function useVisible(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      { threshold }
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
  Users: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  Briefcase: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
      <path d="M2 12h20" />
    </svg>
  ),
  Calendar: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  ),
  Globe: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  ),
  Lightbulb: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <line x1="9" y1="18" x2="15" y2="18" />
      <line x1="10" y1="22" x2="14" y2="22" />
      <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14" />
    </svg>
  ),
  Shield: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  Target: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  ),
  Check: () => (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  ),
  ArrowRight: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  ),
};

// ─────────────────────────────────────────────────────────────────────────────
// Overline badge — reusable
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

/** Single floating sphere */
function Sphere({ size, style }: { size: number; style: React.CSSProperties }) {
  return (
    <div
      className="absolute rounded-full pointer-events-none"
      style={{
        width: size,
        height: size,
        background: "radial-gradient(circle at 32% 30%, #c7d2fe 0%, #818cf8 55%, #6366f1 100%)",
        boxShadow: `0 4px 18px rgba(99,102,241,0.32)`,
        ...style,
      }}
    />
  );
}

/** Fluid-scaling 3-D glassmorphic cube */
function IvorxCube() {
  return (
    <div
      className="relative w-full max-w-[300px] sm:max-w-[340px] mx-auto select-none"
      style={{ aspectRatio: "1 / 1" }}
    >
      {/* Outer orbit ring */}
      <div
        className="absolute inset-0 rounded-full border border-indigo-200/45 pointer-events-none"
        style={{ animation: "orbitCW 20s linear infinite" }}
      >
        <Sphere size={13} style={{ top: -6.5, left: "50%", transform: "translateX(-50%)" }} />
        <Sphere size={9} style={{ bottom: -4.5, right: "14%" }} />
      </div>

      {/* Inner orbit ring */}
      <div
        className="absolute rounded-full border border-indigo-200/30 pointer-events-none"
        style={{ inset: "14%", animation: "orbitCCW 14s linear infinite" }}
      >
        <Sphere size={8} style={{ top: -4, right: "18%" }} />
      </div>

      {/* Platform shadow discs */}
      <div
        className="absolute bottom-[8%] left-1/2 -translate-x-1/2 rounded-full pointer-events-none"
        style={{
          width: "60%",
          height: "5%",
          background: "radial-gradient(ellipse, rgba(165,180,252,0.45) 0%, transparent 70%)",
          filter: "blur(4px)",
        }}
      />
      <div
        className="absolute bottom-[11%] left-1/2 -translate-x-1/2 rounded-full pointer-events-none"
        style={{
          width: "48%",
          height: "4%",
          background: "radial-gradient(ellipse, rgba(199,210,254,0.55) 0%, transparent 70%)",
          filter: "blur(3px)",
        }}
      />

      {/* ── Main cube face ── */}
      <div
        className="absolute"
        style={{
          inset: "22%",
          borderRadius: "18%",
          background: "linear-gradient(135deg, rgba(255,255,255,0.78) 0%, rgba(224,231,255,0.62) 50%, rgba(199,210,254,0.50) 100%)",
          border: "1.5px solid rgba(255,255,255,0.82)",
          boxShadow: [
            "0 24px 64px rgba(99,102,241,0.20)",
            "0 8px 24px rgba(99,102,241,0.12)",
            "inset 0 1.5px 0 rgba(255,255,255,0.88)",
            "inset 0 -1px 0 rgba(165,180,252,0.25)",
          ].join(", "),
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          animation: "floatCube 4.5s ease-in-out infinite",
        }}
      >
        {/* Shine overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            borderRadius: "inherit",
            background: "linear-gradient(135deg, rgba(255,255,255,0.50) 0%, transparent 50%)",
          }}
        />

        {/* Ivorx mark + wordmark */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-1.5">
          <Image
            src={logo}
            alt="Ivorx Logo"
            width={80}
            height={80}
          />
          <span
            className="font-bold text-indigo-700 leading-none"
            style={{ fontSize: "clamp(9px, 3.5%, 14px)", letterSpacing: "-0.2px" }}
          >
            ivorx
          </span>
        </div>

        {/* Right face */}
        <div
          className="absolute top-0 pointer-events-none"
          style={{
            width: "15%",
            height: "100%",
            right: "-12%",
            borderRadius: "0 12% 12% 0",
            background: "linear-gradient(180deg, rgba(165,180,252,0.38) 0%, rgba(129,140,248,0.22) 100%)",
            transform: "skewY(-6deg)",
            transformOrigin: "top left",
          }}
        />
        {/* Bottom face */}
        <div
          className="absolute left-0 pointer-events-none"
          style={{
            width: "100%",
            height: "15%",
            bottom: "-12%",
            borderRadius: "0 0 12% 12%",
            background: "linear-gradient(90deg, rgba(165,180,252,0.30) 0%, rgba(129,140,248,0.18) 100%)",
            transform: "skewX(-6deg)",
            transformOrigin: "top left",
          }}
        />
      </div>

      {/* Extra ambient spheres */}
      <Sphere size={15} style={{ top: "10%", left: "5%", animation: "floatCube 5.5s ease-in-out infinite 0.6s" }} />
      <Sphere size={8} style={{ bottom: "20%", right: "6%", animation: "floatCube 4s ease-in-out infinite 1.2s" }} />
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
      style={{ background: "linear-gradient(155deg, #f7f8ff 0%, #eef1fd 55%, #f4f6ff 100%)" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center py-14 sm:py-16 lg:py-20">

          {/* ── Left ── */}
          <div className="flex flex-col justify-center text-center lg:text-left order-2 lg:order-1">
            <FadeUp visible={visible} delay={0} className="mb-5">
              <span className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold
                text-blue-600 bg-white border border-blue-100/80 rounded-full px-3.5 py-1.5
                shadow-sm shadow-blue-100/40">
                About Ivorx
              </span>
            </FadeUp>

            <FadeUp visible={visible} delay={80}>
              <h1 className="font-bold text-slate-900 leading-[1.12] tracking-tight mb-5
                text-3xl sm:text-4xl md:text-[2.75rem] lg:text-[2.5rem] xl:text-5xl">
                We Build Technology
                <br className="hidden sm:block" /> That Moves Businesses{" "}
                <span className="text-blue-600">Forward</span>
              </h1>
            </FadeUp>

            <FadeUp visible={visible} delay={160}>
              <p className="text-sm sm:text-[15px] text-slate-500 leading-relaxed mb-8
                max-w-md mx-auto lg:mx-0">
                Ivorx is an IT solutions company focused on delivering innovative, reliable,
                and scalable digital products that help businesses grow and succeed in the digital world.
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
                    active:scale-[0.97] group"
                >
                  Our Story
                  <span
                    className="transition-transform duration-200"
                    style={{ transform: btnHover ? "translateX(4px)" : "translateX(0)" }}
                  >
                    <Icon.ArrowRight />
                  </span>
                </button>
              </div>
            </FadeUp>
          </div>

          {/* ── Right: cube ── */}
          <FadeUp
            visible={visible}
            delay={100}
            className="flex items-center justify-center order-1 lg:order-2 py-4 lg:py-0"
          >
            <IvorxCube />
          </FadeUp>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// ── STATS BANNER ─────────────────────────────────────────────────────────────
// ─────────────────────────────────────────────────────────────────────────────
const STATS: StatItem[] = [
  { icon: <Icon.Users />, value: 50, suffix: "+", label: "Happy Clients" },
  { icon: <Icon.Briefcase />, value: 120, suffix: "+", label: "Projects Delivered" },
  { icon: <Icon.Calendar />, value: 10, suffix: "+", label: "Years of Experience" },
  { icon: <Icon.Globe />, value: 15, suffix: "+", label: "Countries Served" },
];

function StatsBanner() {
  const { ref, visible } = useVisible();
  return (
    <div
      ref={ref}
      className={`w-full bg-white border border-slate-100 rounded-2xl shadow-sm overflow-hidden ${fu(visible)}`}
    >
      <div className="grid grid-cols-2 lg:grid-cols-4">
        {STATS.map((s, i) => (
          <div
            key={i}
            className={[
              "flex items-center gap-3 sm:gap-4 px-5 sm:px-7 py-5 sm:py-6",
              fu(visible, i * 70),
              i % 2 === 0 ? "border-r border-slate-100" : "",
              i < 2 ? "border-b border-slate-100 lg:border-b-0" : "",
              i < 3 ? "lg:border-r lg:border-slate-100" : "",
            ].join(" ")}
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-blue-50/70 flex-shrink-0
              flex items-center justify-center text-blue-600 shadow-sm shadow-blue-100/30">
              {s.icon}
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-extrabold tracking-tight text-slate-900 leading-none flex items-center">
                <CountUp
                  from={0}
                  to={s.value}
                  separator=","
                  direction="up"
                  duration={2}
                  delay={0}
                  className="count-up-text"
                />
                <span>{s.suffix}</span>
              </p>
              <p className="text-[11px] sm:text-xs font-medium text-slate-500 mt-1">
                {s.label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// ── MISSION HEADER ────────────────────────────────────────────────────────────
// ─────────────────────────────────────────────────────────────────────────────
function MissionHeader() {
  const { ref, visible } = useVisible();
  return (
    <div ref={ref} className={`text-center pt-4 pb-2 ${fu(visible)}`}>
      <Badge>Our Mission</Badge>
      <h2 className="font-bold text-slate-900 tracking-tight
        text-2xl sm:text-3xl md:text-4xl leading-tight">
        Technology with Purpose
      </h2>
      <p className="text-sm sm:text-[15px] text-slate-500 max-w-lg mx-auto mt-4 leading-relaxed">
        We use technology and creativity to solve real problems and create digital solutions
        that make a lasting impact.
      </p>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// ── BELIEFS GRID ─────────────────────────────────────────────────────────────
// ─────────────────────────────────────────────────────────────────────────────
const BELIEFS: BeliefItem[] = [
  { icon: <Icon.Lightbulb />, title: "Innovation", desc: "We embrace new ideas and build future-ready solutions." },
  { icon: <Icon.Shield />, title: "Integrity", desc: "We work with honesty, transparency, and strong ethics." },
  { icon: <Icon.Users />, title: "Collaboration", desc: "We believe in teamwork and growing together with our clients." },
  { icon: <Icon.Target />, title: "Impact", desc: "We focus on delivering solutions that create real business value." },
];

function BeliefsGrid() {
  const { ref, visible } = useVisible();
  return (
    <div ref={ref} className="pt-2 pb-2">
      <div className={`text-center mb-8 ${fu(visible)}`}>
        <Badge>What We Believe In</Badge>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {BELIEFS.map((b, i) => (
          <div
            key={i}
            className={[
              "bg-white rounded-2xl border border-slate-100/90 shadow-sm",
              "hover:shadow-md hover:-translate-y-1 hover:border-blue-100/60",
              "flex flex-col items-center text-center p-6 sm:p-8",
              "cursor-default",
              fu(visible, i * 90),
            ].join(" ")}
            style={{ transitionDuration: "600ms", transitionProperty: "all" }}
          >
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl
              bg-blue-50/70 border border-blue-100/50
              flex items-center justify-center mb-4 sm:mb-5 text-blue-600
              shadow-sm shadow-blue-100/30">
              {b.icon}
            </div>
            <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1.5 sm:mb-2">
              {b.title}
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">{b.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// ── WHY CHOOSE IVORX ─────────────────────────────────────────────────────────
// ─────────────────────────────────────────────────────────────────────────────
const CHECKLIST = [
  "Experienced and skilled team",
  "Agile and client-focused approach",
  "Quality solutions on time",
  "Long-term partnership",
];

function IvorxMark() {
  return (
    <>

      <Image
        src={logo}
        alt="Ivorx Logo"
        width={80}
        height={80}
      />

    </>
  );
}

/** Concentric dashed rings with node dots, coordinates computed via trig */
function OrbitRings() {
  const rings = [
    { size: 152, nodes: [30, 150, 275], dotPx: 5, cls: "border-slate-200" },
    { size: 220, nodes: [65, 185, 305], dotPx: 6, cls: "border-slate-200/60" },
  ];
  return (
    <>
      {rings.map((r, ri) => (
        <div
          key={ri}
          className={`absolute rounded-full border border-dashed pointer-events-none ${r.cls}`}
          style={{
            width: r.size,
            height: r.size,
            animation: ri % 2 === 0 ? "orbitCW 10s linear infinite" : "orbitCCW 14s linear infinite",
          }}
        >
          {r.nodes.map((deg) => {
            const rad = (deg * Math.PI) / 180;
            const half = r.size / 2;
            const dr = r.dotPx / 2;
            return (
              <div
                key={deg}
                className="absolute rounded-full bg-blue-400"
                style={{
                  width: r.dotPx,
                  height: r.dotPx,
                  left: half + half * Math.cos(rad) - dr,
                  top: half + half * Math.sin(rad) - dr,
                  animation: `pulseDot 3s ease-in-out infinite ${deg * 8}ms`,
                }}
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
      className={`bg-[#F8FAFC] rounded-3xl border border-slate-100
        p-6 sm:p-10 lg:p-14
        grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center
        ${fu(visible)}`}
    >
      {/* ── Left: ecosystem graphic (hidden on very small, shown from sm up) ── */}
      <div className="hidden sm:flex lg:col-span-5 items-center justify-center">
        <div
          className="relative flex items-center justify-center"
          style={{ width: 240, height: 240 }}
        >
          <OrbitRings />
          {/* Central icon tile */}
          <div className="relative z-10 w-24 h-24 sm:w-28 sm:h-28 bg-white rounded-[1.75rem]
            flex items-center justify-center
            border border-slate-100/70
            shadow-[0_12px_40px_rgba(99,102,241,0.10),0_2px_8px_rgba(0,0,0,0.04)]"
            style={{ animation: "floatCube 4.5s ease-in-out infinite" }}>
            <IvorxMark />
          </div>
        </div>
      </div>

      {/* ── Right: copy + checklist ── */}
      <div className={`lg:col-span-7 text-left flex flex-col justify-center ${fu(visible, 130)}`}>
        <Badge>Why Choose Ivorx</Badge>
        <h2 className="font-bold text-slate-900 tracking-tight mb-3
          text-2xl sm:text-3xl lg:text-[1.9rem] xl:text-3xl leading-snug">
          Your Growth, Our Priority
        </h2>
        <p className="text-sm text-slate-500 leading-relaxed max-w-lg mb-6 sm:mb-7">
          We combine expertise, technology, and a customer-first approach to deliver
          solutions that drive growth and results.
        </p>

        <ul className="space-y-3 sm:space-y-3.5">
          {CHECKLIST.map((item, i) => (
            <li key={i} className={`flex items-center gap-3 ${fu(visible, 190 + i * 70)}`}>
              <span className="flex-shrink-0 flex items-center justify-center w-5 h-5 rounded-full
                bg-blue-50 text-blue-600 border border-blue-100/70
                shadow-sm shadow-blue-100/30">
                <Icon.Check />
              </span>
              <span className="text-xs sm:text-[13px] font-medium text-slate-600 tracking-wide">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// ── CTA BANNER ───────────────────────────────────────────────────────────────
// ─────────────────────────────────────────────────────────────────────────────

/** Layered glassmorphic double-bubble chat illustration */
function ChatAsset() {
  return (
    <div
      className="relative flex items-end justify-center"
      style={{
        width: 220,
        height: 170,
        filter: "drop-shadow(0 12px 22px rgba(99,102,241,0.16))",
      }}
    >
      {/* Back bubble */}
      <div
        className="absolute"
        style={{
          width: 148,
          height: 100,
          bottom: 22,
          right: 0,
          borderRadius: 20,
          background: "linear-gradient(140deg, rgba(224,231,255,0.82) 0%, rgba(199,210,254,0.66) 100%)",
          border: "1px solid rgba(255,255,255,0.75)",
          boxShadow: "0 6px 24px rgba(99,102,241,0.10)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          transform: "rotate(4deg) translateY(5px)",
        }}
      >
        <div className="absolute inset-0 flex flex-col justify-center px-5 gap-2.5">
          <div className="h-1.5 rounded-full bg-indigo-300/55 w-4/5" />
          <div className="h-1.5 rounded-full bg-indigo-300/38 w-3/5" />
        </div>
        <div
          className="absolute"
          style={{
            bottom: -8,
            right: 20,
            borderLeft: "7px solid transparent",
            borderRight: "5px solid transparent",
            borderTop: "9px solid rgba(199,210,254,0.68)",
          }}
        />
      </div>

      {/* Front bubble */}
      <div
        className="absolute"
        style={{
          width: 162,
          height: 108,
          bottom: 26,
          left: 0,
          borderRadius: 22,
          background: "linear-gradient(145deg, rgba(255,255,255,0.94) 0%, rgba(238,242,255,0.82) 100%)",
          border: "1px solid rgba(255,255,255,0.88)",
          boxShadow: "0 8px 32px rgba(99,102,241,0.12), 0 2px 6px rgba(0,0,0,0.04)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          transform: "rotate(-3deg)",
        }}
      >
        <div className="absolute inset-0 flex flex-col justify-center px-5 gap-3">
          <div className="h-1.5 rounded-full bg-slate-200/85 w-full" />
          <div className="h-1.5 rounded-full bg-slate-200/65 w-[82%]" />
          <div className="h-1.5 rounded-full bg-slate-200/45 w-[62%]" />
        </div>
        <div
          className="absolute"
          style={{
            bottom: -10,
            left: 24,
            borderLeft: "9px solid transparent",
            borderRight: "6px solid transparent",
            borderTop: "12px solid rgba(238,242,255,0.84)",
          }}
        />
      </div>

      {/* Decorative spheres */}
      {([
        { w: 18, top: 8, right: 18, bg: "linear-gradient(135deg,#c7d2fe,#a5b4fc)", sh: "0 3px 10px rgba(99,102,241,0.28)" },
        { w: 10, top: 58, right: 5, bg: "linear-gradient(135deg,#e0e7ff,#c7d2fe)", sh: "0 2px 6px rgba(99,102,241,0.18)" },
        { w: 8, top: 26, left: 8, bg: "linear-gradient(135deg,#dbeafe,#bfdbfe)", sh: "0 2px 5px rgba(59,130,246,0.18)" },
        { w: 6, bottom: 12, left: 38, bg: "linear-gradient(135deg,#ede9fe,#ddd6fe)", sh: "0 1px 4px rgba(139,92,246,0.16)" },
      ] as const).map((s, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            width: s.w,
            height: s.w,
            top: (s as any).top,
            right: (s as any).right,
            bottom: (s as any).bottom,
            left: (s as any).left,
            background: s.bg,
            boxShadow: s.sh,
          }}
        />
      ))}

      {/* Ground glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 rounded-full pointer-events-none"
        style={{
          width: 150,
          height: 14,
          background: "radial-gradient(ellipse, rgba(99,102,241,0.14) 0%, transparent 70%)",
          filter: "blur(5px)",
        }}
      />
    </div>
  );
}

function CTABanner() {
  const { ref, visible } = useVisible();
  const [hover, setHover] = useState(false);

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden rounded-3xl border border-indigo-100/55
        p-8 sm:p-12 lg:p-14
        grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center
        ${fu(visible)}`}
      style={{ background: "linear-gradient(135deg, #EEF2FF 0%, rgba(240,249,255,0.12) 50%, #F5F3FF 100%)" }}
    >
      {/* Ambient blobs */}
      <div className="absolute -right-6 -bottom-6 w-56 h-56 rounded-full bg-indigo-200/35 blur-3xl pointer-events-none" />
      <div className="absolute -left-10 top-0 w-48 h-48 rounded-full bg-blue-100/25 blur-3xl pointer-events-none" />

      {/* Left: text + button */}
      <div className={`lg:col-span-7 relative z-10 text-left ${fu(visible, 80)}`}>
        <Badge>Let's Build Something Great</Badge>
        <h2 className="font-bold text-slate-900 tracking-tight mb-3
          text-2xl sm:text-3xl leading-snug">
          Let's Create the Future Together
        </h2>
        <p className="text-slate-500 text-xs sm:text-sm leading-relaxed max-w-md mb-6 sm:mb-7">
          Have a project in mind? We'd love to hear about it and help you bring it to life.
        </p>

        <button
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
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

      {/* Right: chat illustration */}
      <div className={`lg:col-span-5 relative z-10 flex justify-center lg:justify-end ${fu(visible, 170)}`}>
        <ChatAsset />
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// ── ROOT EXPORT ───────────────────────────────────────────────────────────────
// ─────────────────────────────────────────────────────────────────────────────
export default function AboutSection() {
  return (
    <>
      <GlobalAnimations />

      <div className="w-full bg-white pt-5">
        {/* Navbar — full-width above all content */}
        <Navbar />

        {/* Hero — light indigo-tinted gradient background */}
        <HeroSection />

        {/* Main content */}
        <section className="bg-white w-full py-10 sm:py-12 lg:py-14" id="about">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12 lg:space-y-14">
            <StatsBanner />
            <MissionHeader />
            <BeliefsGrid />
            <WhyChoosePanel />
            <CTABanner />
          </div>
        </section>
      </div>
    </>
  );
}