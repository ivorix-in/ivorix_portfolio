"use client";
import Link from "next/link";
import Image from "next/image";
import logo from '@/public/logo.png'

export default function Navbar() {
  return (
    <nav className="fixed top-[20px] left-1/2 -translate-x-1/2 w-[calc(100%-48px)] max-w-[960px] z-[100]">
      <div className="flex items-center justify-between bg-white/45 backdrop-blur-[20px] border border-white/70 rounded-2xl px-5 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.06)]">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 no-underline">
            <Image
            src={logo}
            alt="Ivorx Logo"
            width={56}
            height={56}
            className="-my-2"
          />  
          <span className="text-[15px] font-bold text-[#111] tracking-[-0.3px]">Ivorix</span>
        </Link>
        <ul className="hidden sm:flex list-none gap-8 m-0 p-0 items-center">
          <li><Link href="/" className="text-[14px] font-medium text-[#444] no-underline transition-colors duration-200 hover:text-[#111]">Home</Link></li>
          <li><Link href="/about" className="text-[14px] font-medium text-[#444] no-underline transition-colors duration-200 hover:text-[#111]">About</Link></li>
          {/* <li><Link href="#">Use Cases</Link></li> */}
          <li><Link href="/services" className="text-[14px] font-medium text-[#444] no-underline transition-colors duration-200 hover:text-[#111]">Services</Link></li>
          {/* <li><Link href="#">Pricing</Link></li> */}
          <li><Link href='#' className="text-[14px] font-medium text-[#444] no-underline transition-colors duration-200 hover:text-[#111]">Contacts</Link></li>
        </ul>

        {/* CTA */}
        <Link href="#" className="inline-block bg-gradient-to-b from-[#2a2a2a] to-[#0a0a0a] text-white text-[13px] font-semibold px-7 py-[9px] rounded-[10px] no-underline tracking-[0.4px] border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),_0_4px_14px_rgba(0,0,0,0.35)] transition-all duration-200 hover:bg-gradient-to-b hover:from-[#3a3a3a] hover:to-[#1a1a1a] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.1),_0_6px_20px_rgba(0,0,0,0.45)] hover:-translate-y-px active:translate-y-0 active:shadow-[0_1px_4px_rgba(0,0,0,0.3)]">
          LET'S TALK
        </Link>
      </div>


    </nav>
  );
}