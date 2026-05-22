"use client";

import { motion } from "framer-motion";

const BAR_HEIGHTS = ["40%", "60%", "45%", "80%", "55%", "70%"] as const;
const DAY_LABELS = ["M", "T", "W", "T", "F", "S", "S"] as const;

function GlassShine() {
  return (
    <span
      aria-hidden
      className="pointer-events-none absolute inset-x-0 top-0 h-1/2 rounded-t-2xl bg-gradient-to-b from-white/70 to-transparent"
    />
  );
}

export function GrowthCard() {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.35, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4 }}
      className="glass-panel relative w-40 overflow-hidden rounded-2xl p-4"
      aria-label="Growth analytics"
    >
      <GlassShine />
      <p className="relative text-[11px] font-medium text-slate-400">Growth</p>
      <p className="relative mb-3 text-lg font-bold tracking-tight text-slate-900">
        $1,823.00
      </p>
      <div className="relative flex h-[50px] items-end gap-1.5">
        {BAR_HEIGHTS.map((height, i) => (
          <div
            key={i}
            className={`flex-1 rounded-t-md ${
              i === 3
                ? "bg-gradient-to-t from-blue-500 to-indigo-500 shadow-[0_0_12px_rgba(99,102,241,0.4)]"
                : "bg-gradient-to-t from-blue-100 to-blue-200"
            }`}
            style={{ height }}
          />
        ))}
      </div>
    </motion.article>
  );
}

export function CalendarCard() {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.45, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4 }}
      className="glass-panel relative w-[200px] overflow-hidden rounded-2xl p-4"
      aria-label="Calendar"
    >
      <GlassShine />
      <p className="relative mb-2 text-center text-xs font-bold text-slate-900">
        January 2026
      </p>
      <div className="relative grid grid-cols-7 gap-0.5 text-center">
        {DAY_LABELS.map((d, i) => (
          <span key={`label-${i}`} className="py-0.5 text-[9px] font-semibold text-slate-400">
            {d}
          </span>
        ))}
        {Array.from({ length: 31 }, (_, i) => (
          <span
            key={i}
            className={`rounded py-0.5 text-[9px] ${
              i + 1 === 20
                ? "bg-gradient-to-br from-blue-500 to-indigo-500 font-bold text-white shadow-[0_0_12px_rgba(99,102,241,0.45)]"
                : "text-slate-500"
            }`}
          >
            {i + 1}
          </span>
        ))}
      </div>
    </motion.article>
  );
}

export default function AnalyticsCards() {
  return (
    <>
      <GrowthCard />
      <CalendarCard />
    </>
  );
}
