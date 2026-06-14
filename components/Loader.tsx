"use client";

import { motion, AnimatePresence } from "framer-motion";

export default function Loader({ isVisible = true }: { isVisible?: boolean }) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 bg-[#030014]/95 backdrop-blur-md flex flex-col items-center justify-center z-[9999]"
        >
          <div className="relative flex items-center justify-center w-24 h-24 md:w-28 md:h-28">
            {/* Outer subtle glow */}
            <div className="absolute inset-0 rounded-full bg-violet-600/10 blur-xl"></div>
            
            {/* Inner intense glow core */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-indigo-500/20 blur-md"></div>

            {/* Outer Ring Clockwise */}
            <motion.div
              className="absolute inset-0 rounded-full border-t-[3px] border-r-[3px] border-violet-500 shadow-[0_0_20px_rgba(139,92,246,0.5)]"
              animate={{ rotate: 360 }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
            />
            
            {/* Inner Ring Counter-Clockwise */}
            <motion.div
              className="absolute inset-3 md:inset-4 rounded-full border-b-[3px] border-l-[3px] border-indigo-400 shadow-[0_0_15px_rgba(99,102,241,0.6)]"
              animate={{ rotate: -360 }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}