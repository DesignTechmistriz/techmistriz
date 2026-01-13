"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <a href="#home" className="flex items-center">
          <Image
            src="/download.png"
            alt="logo"
            width={140}
            height={60}
            className="object-contain w-[120px] h-auto md:w-[160px]"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-slate-700 font-medium">
          <Link href="#home" className="hover:text-[#6c63ff]">Home</Link>
          <Link href="#about" className="hover:text-[#6c63ff]">About</Link>
          <Link href="#services" className="hover:text-[#6c63ff]">Services</Link>
          <Link href="#process" className="hover:text-[#6c63ff]">Process</Link>
          <Link href="#contact" className="hover:text-[#6c63ff]">Contact</Link>
        </nav>

        {/* CTA Desktop */}
        <Link
          href="#contact"
          className="hidden md:inline-block bg-[#6c63ff] text-white px-5 py-2 rounded-lg font-semibold hover:bg-[#5a53ff] transition"
        >
          Get Started
        </Link>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5"
          onClick={() => setOpen(!open)}
        >
          <span className={`h-[3px] w-6 bg-slate-700 transition ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`h-[3px] w-6 bg-slate-700 transition ${open ? "opacity-0" : ""}`} />
          <span className={`h-[3px] w-6 bg-slate-700 transition ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
  className={`md:hidden fixed left-0 right-0 top-20 bg-white z-40 overflow-y-auto border-t border-slate-200 transition-all duration-300 ${
    open ? "h-[calc(100vh-80px)]" : "h-0"
  }`}
>

        <nav className="flex flex-col p-6 text-slate-700 font-medium space-y-4">
          <Link href="#home" onClick={() => setOpen(false)}>Home</Link>
          <Link href="#about" onClick={() => setOpen(false)}>About</Link>
          <Link href="#services" onClick={() => setOpen(false)}>Services</Link>
          <Link href="#process" onClick={() => setOpen(false)}>Process</Link>
          <Link href="#contact" onClick={() => setOpen(false)}>Contact</Link>

          <Link
            href="#contact"
            className="bg-[#6c63ff] text-white px-5 py-2 rounded-lg font-semibold text-center"
            onClick={() => setOpen(false)}
          >
            Get Started
          </Link>
        </nav>
      </div>
    </header>
  );
}
