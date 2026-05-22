"use client";

import { motion } from "framer-motion";

export default function TrustBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="inline-flex items-center gap-2 rounded-full border border-white/90 bg-white/55 px-[18px] py-2 text-[13px] shadow-[0_4px_24px_rgba(59,130,246,0.08)] backdrop-blur-md"
      role="status"
      aria-label="Rated 4.8 on Trustpilot"
    >
      <span className="tracking-[2px] text-amber-500" aria-hidden>
        ★★★★
      </span>
      <span className="font-medium text-slate-600">Trustpilot</span>
      <span className="text-slate-300" aria-hidden>
        |
      </span>
      <span className="font-medium text-slate-500">4.8 Reviews</span>
    </motion.div>
  );
}
