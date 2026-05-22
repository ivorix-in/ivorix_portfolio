"use client";

import { motion } from "framer-motion";
import TrustBadge from "./TrustBadge";
import CTAButton from "./CTAButton";
import FloatingCards from "./FloatingCards";
import FloatingCardsMobile from "./FloatingCardsMobile";
import LogoStrip from "./LogoStrip";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#fafbff] via-[#f0f4ff] to-[#e2eaf8] pt-[120px] pb-16 sm:pb-0"
      aria-labelledby="hero-heading"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-28 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(147,197,253,0.35)_0%,transparent_70%)] blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[10%] -left-20 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,rgba(99,140,255,0.2)_0%,transparent_70%)] blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[20%] -right-16 h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.15)_0%,transparent_70%)] blur-3xl"
      />

      <div className="relative z-10 mx-auto flex max-w-[820px] flex-col items-center gap-5 px-6 text-center">
        <TrustBadge />

        <motion.h1
          id="hero-heading"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
          className="font-heading text-[clamp(2.25rem,6vw,4rem)] font-extrabold leading-[1.08] tracking-[-0.04em] text-slate-900"
        >
          Design Smart{" "}
          <span className="inline-flex translate-y-[-4px] align-middle">
            <svg
              width="42"
              height="42"
              viewBox="0 0 42 42"
              fill="none"
              className="drop-shadow-[0_0_20px_rgba(99,102,241,0.45)]"
              aria-hidden
            >
              <defs>
                <linearGradient id="heroIconGrad" x1="0" y1="0" x2="42" y2="42">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="50%" stopColor="#6366f1" />
                  <stop offset="100%" stopColor="#818cf8" />
                </linearGradient>
              </defs>
              <rect width="42" height="42" rx="10" fill="url(#heroIconGrad)" />
              <path
                d="M10 22l8 8 14-16"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>{" "}
          Workflows
          <br />
          That Power Your{" "}
          <span className="text-glow-ai rounded-lg border-2 border-dashed border-indigo-400/60 bg-white/50 px-2.5 py-0">
            AI Agents
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: 0.16 }}
          className="max-w-[480px] text-[15px] leading-relaxed text-slate-500"
        >
          Automate your daily tasks with smart AI agents designed to improve
          efficiency, reduce effort, and deliver faster results.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.24 }}
        >
          <CTAButton href="#pricing">Get Started Free</CTAButton>
        </motion.div>

        <FloatingCards />
        <FloatingCardsMobile />

        <motion.div
          className="w-full pt-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <LogoStrip />
        </motion.div>
      </div>
    </section>
  );
}
