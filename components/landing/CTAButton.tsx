"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

type CTAButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "nav";
  className?: string;
  onClick?: () => void;
};

export default function CTAButton({
  href = "#",
  children,
  variant = "primary",
  className,
  onClick,
}: CTAButtonProps) {
  const base =
    variant === "primary"
      ? cn(
          "relative inline-flex items-center justify-center overflow-hidden",
          "rounded-xl px-8 py-3.5 text-sm font-semibold tracking-wide text-white",
          "bg-gradient-to-b from-slate-800 to-slate-950",
          "border border-sky-200/25",
          "shadow-[0_0_40px_rgba(59,130,246,0.2),0_8px_24px_rgba(15,23,42,0.2)]",
          "transition-shadow duration-300"
        )
      : cn(
          "relative inline-flex items-center justify-center overflow-hidden",
          "rounded-xl px-7 py-2.5 text-[13px] font-semibold tracking-wide text-white",
          "bg-gradient-to-b from-slate-800 to-slate-950",
          "border border-sky-200/20",
          "shadow-[0_0_28px_rgba(59,130,246,0.18),0_6px_20px_rgba(15,23,42,0.3)]"
        );

  const content = (
    <>
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-[shine_4s_ease-in-out_infinite]"
      />
      {children}
    </>
  );

  if (onClick) {
    return (
      <motion.button
        type="button"
        onClick={onClick}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
        className={cn(base, className)}
      >
        {content}
      </motion.button>
    );
  }

  return (
    <motion.div
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={cn("inline-block", variant === "nav" && className?.includes("w-full") && "block w-full")}
    >
      <Link href={href} className={cn(base, className)}>
        {content}
      </Link>
    </motion.div>
  );
}
