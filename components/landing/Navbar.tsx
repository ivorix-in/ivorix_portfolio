"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import CTAButton from "./CTAButton";
import { cn } from "@/lib/cn";

const NAV_LINKS = [
  { href: "#features", label: "About" },
  { href: "#use-cases", label: "Use Cases" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
] as const;

function LogoMark() {
  return (
    <span
      aria-hidden
      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[10px] border border-sky-300/45 bg-gradient-to-br from-white/90 to-sky-100/60 shadow-[0_0_20px_rgba(99,140,255,0.25)]"
    >
      <span className="h-3.5 w-3.5 rounded bg-gradient-to-br from-blue-500 via-indigo-500 to-indigo-400 shadow-[0_0_12px_rgba(99,102,241,0.6)]" />
    </span>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-5 left-1/2 z-[100] w-[calc(100%-40px)] max-w-[1180px] -translate-x-1/2">
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-x-3 -inset-y-2 rounded-[22px] bg-[radial-gradient(ellipse_80%_120%_at_50%_0%,rgba(99,140,255,0.22),rgba(56,189,248,0.08)_40%,transparent_70%)] opacity-85 blur-xl"
      />

      <nav
        className="glass-nav relative flex items-center justify-between gap-6 rounded-2xl py-3.5 pr-7 pl-9"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="flex shrink-0 items-center gap-3.5 pr-7"
          onClick={() => setIsOpen(false)}
        >
          <LogoMark />
          <span className="font-heading text-lg font-extrabold tracking-[-0.04em] text-slate-900">
            Ivorix
          </span>
        </Link>

        <ul className="hidden flex-1 list-none items-center justify-center gap-9 md:flex">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="rounded-[10px] px-3.5 py-2 text-sm font-medium text-slate-500 transition-all duration-250 hover:bg-white/55 hover:text-blue-800 hover:shadow-[0_0_24px_rgba(99,140,255,0.2),0_0_0_1px_rgba(147,197,253,0.35)]"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <CTAButton href="#pricing" variant="nav">
            Let&apos;s talk
          </CTAButton>
        </div>

        <button
          type="button"
          className="flex items-center justify-center rounded-[10px] border border-sky-200/50 bg-white/50 p-2 text-slate-900 shadow-[0_0_16px_rgba(99,140,255,0.12)] md:hidden"
          onClick={() => setIsOpen((o) => !o)}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className={cn(
              "glass-panel absolute top-full right-0 left-0 mt-[-8px] rounded-b-2xl border-t-0 px-6 py-6 md:hidden"
            )}
          >
            <ul className="flex list-none flex-col gap-1 text-center">
              {NAV_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={() => setIsOpen(false)}
                    className="block rounded-xl px-4 py-3 text-base font-semibold text-slate-700 transition-colors hover:bg-white/70 hover:text-blue-800"
                  >
                    {label}
                  </Link>
                </li>
              ))}
              <li className="mt-3">
                <CTAButton href="#pricing" variant="nav" className="w-full">
                  Let&apos;s talk
                </CTAButton>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
