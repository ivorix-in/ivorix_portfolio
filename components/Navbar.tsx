"use client";
import Link from "next/link";
import Image from "next/image";
import logo from '@/public/logo.png';
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <nav className="fixed top-[20px] left-1/2 -translate-x-1/2 w-[calc(100%-32px)] max-md:w-[calc(100%-24px)] max-w-[1080px] z-[100]">
        <div className="flex items-center justify-between bg-white/45 backdrop-blur-[20px] border border-white/70 rounded-2xl px-6 py-2.5 shadow-[0_8px_32px_rgba(0,0,0,0.06)] relative z-[101]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 no-underline" onClick={() => setIsOpen(false)}>
            <Image
              src={logo}
              alt="Ivorx Logo"
              width={44}
              height={44}
              className="-my-1"
            />
            <span className="text-[17px] md:text-[19px] font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-700 tracking-[0.18em] uppercase ml-1">IVORIX</span>
          </Link>

          <ul className="hidden md:flex list-none gap-8 m-0 p-0 items-center">
            <li><Link href="/" className="text-[15px] font-semibold text-[#444] no-underline transition-colors duration-200 hover:text-[#111]">Home</Link></li>
            <li><Link href="/about" className="text-[15px] font-semibold text-[#444] no-underline transition-colors duration-200 hover:text-[#111]">About</Link></li>
            <li><Link href="/services" className="text-[15px] font-semibold text-[#444] no-underline transition-colors duration-200 hover:text-[#111]">Services</Link></li>
            <li><Link href='#' className="text-[15px] font-semibold text-[#444] no-underline transition-colors duration-200 hover:text-[#111]">Contacts</Link></li>
          </ul>

          <div className="flex items-center gap-4">
            {/* CTA */}
            <Link href="#" className="max-md:hidden inline-block bg-black text-white text-[14px] font-bold px-7 py-[8px] rounded-[10px] no-underline tracking-[0.5px] border border-white/10 transition-all duration-200 hover:bg-[#1a1a1a] hover:-translate-y-px active:translate-y-0 shadow-none">
              LET'S TALK
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden flex items-center justify-center p-2 text-slate-800 focus:outline-none"
              onClick={toggleMenu}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Fullscreen Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-white/95 backdrop-blur-lg z-[99] transition-all duration-500 ease-in-out md:hidden flex flex-col items-center justify-center ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
      >
        <ul className="flex flex-col items-center gap-8 list-none p-0 m-0 text-center">
          <li>
            <Link href="/" onClick={toggleMenu} className="text-3xl font-bold text-slate-900 transition-colors hover:text-blue-600">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" onClick={toggleMenu} className="text-3xl font-bold text-slate-900 transition-colors hover:text-blue-600">
              About
            </Link>
          </li>
          <li>
            <Link href="/services" onClick={toggleMenu} className="text-3xl font-bold text-slate-900 transition-colors hover:text-blue-600">
              Services
            </Link>
          </li>
          <li>
            <Link href="#" onClick={toggleMenu} className="text-3xl font-bold text-slate-900 transition-colors hover:text-blue-600">
              Contacts
            </Link>
          </li>
        </ul>
        <Link
          href="#"
          onClick={toggleMenu}
          className="mt-12 bg-slate-900 text-white text-lg font-semibold px-10 py-4 rounded-xl shadow-xl active:scale-95 transition-transform"
        >
          LET'S TALK
        </Link>
      </div>
    </>
  );
}