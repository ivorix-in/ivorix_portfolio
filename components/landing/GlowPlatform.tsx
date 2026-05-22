"use client";

import { motion } from "framer-motion";

export default function GlowPlatform() {
  return (
    <div
      className="relative flex h-[260px] w-[200px] items-center justify-center"
      aria-hidden
    >
      <motion.div
        className="absolute h-[320px] w-[280px] rounded-full"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(99,140,255,0.35) 0%, rgba(129,140,248,0.12) 40%, transparent 68%)",
        }}
        animate={{ opacity: [0.8, 1, 0.8], scale: [1, 1.05, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute h-[240px] w-[240px] rounded-full border border-sky-300/35 shadow-[0_0_40px_rgba(99,140,255,0.2)]"
        animate={{ rotate: 360 }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute h-[200px] w-[200px] rounded-full border border-indigo-400/25"
        animate={{ rotate: -360 }}
        transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute h-[160px] w-[160px] rounded-full border border-dashed border-indigo-300/40"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      <motion.div
        className="relative z-10 drop-shadow-[0_12px_40px_rgba(99,140,255,0.35)]"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg
          viewBox="0 0 200 260"
          fill="none"
          className="h-[260px] w-[200px]"
          role="img"
          aria-label="AI platform"
        >
          <defs>
            <linearGradient id="orbGrad" x1="100" y1="40" x2="100" y2="220" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#e0e7ff" />
              <stop offset="40%" stopColor="#c7d2fe" />
              <stop offset="100%" stopColor="#a5b4fc" />
            </linearGradient>
            <linearGradient id="faceGrad" x1="60" y1="80" x2="140" y2="180" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#f8fafc" />
              <stop offset="100%" stopColor="#e2e8f0" />
            </linearGradient>
            <filter id="orbGlow">
              <feGaussianBlur stdDeviation="8" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <ellipse cx="100" cy="200" rx="72" ry="18" fill="rgba(99,140,255,0.15)" />
          <path
            d="M100 48 C72 48 52 72 52 108 C52 148 72 168 100 168 C128 168 148 148 148 108 C148 72 128 48 100 48Z"
            fill="url(#orbGrad)"
            stroke="rgba(147,197,253,0.6)"
            strokeWidth="1.5"
            filter="url(#orbGlow)"
          />
          <ellipse
            cx="100"
            cy="108"
            rx="46"
            ry="52"
            fill="url(#faceGrad)"
            stroke="rgba(255,255,255,0.9)"
            strokeWidth="2"
          />
          <circle cx="82" cy="100" r="8" fill="#1e293b" opacity="0.85" />
          <circle cx="118" cy="100" r="8" fill="#1e293b" opacity="0.85" />
          <circle cx="84" cy="98" r="3" fill="white" opacity="0.9" />
          <circle cx="120" cy="98" r="3" fill="white" opacity="0.9" />
          <path
            d="M88 128 Q100 138 112 128"
            stroke="#6366f1"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
            opacity="0.7"
          />
          <path
            d="M68 72 Q100 32 132 72"
            stroke="rgba(99,140,255,0.35)"
            strokeWidth="1"
            fill="none"
            strokeDasharray="4 6"
          />
        </svg>
      </motion.div>
    </div>
  );
}
