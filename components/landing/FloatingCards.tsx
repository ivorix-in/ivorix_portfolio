"use client";

import { motion } from "framer-motion";
import GlowPlatform from "./GlowPlatform";
import { GrowthCard, CalendarCard } from "./AnalyticsCards";

export default function FloatingCards() {
  return (
    <div className="relative mx-auto mt-5 hidden h-[300px] w-full max-w-[640px] sm:block">
      <motion.div
        className="absolute bottom-0 left-0 z-20"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <GrowthCard />
      </motion.div>

      <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
        <GlowPlatform />
      </div>

      <motion.div
        className="absolute right-0 top-0 z-20"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <CalendarCard />
      </motion.div>
    </div>
  );
}
