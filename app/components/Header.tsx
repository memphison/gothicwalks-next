// app/components/Header.tsx
"use client";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="border-b border-[#2a2520] bg-[#141210]/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link
          href="/"
          className="text-2xl italic tracking-[0.12em] text-[#e8e2d8] [font-family:var(--font-display)]"
        >
          Gothic Walks
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 text-xs uppercase tracking-[0.2em] text-[#7a7268] md:flex [font-family:var(--font-label)]">
          <Link href="/tour" className="transition hover:text-[#e8e2d8]">The Tour</Link>
          <Link href="/book" className="transition hover:text-[#e8e2d8]">Book</Link>
          <Link href="/tour#faq" className="transition hover:text-[#e8e2d8]">FAQ</Link>
          <Link href="/guide" className="transition hover:text-[#e8e2d8]">Become a Guide</Link>
   <Link href="/contact" className="transition hover:text-[#e8e2d8]">Contact</Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/book" className="gw-btn-light-sm hidden md:inline-flex">
            Book Now
          </Link>
          {/* Hamburger — mobile only */}
          <button
            className="flex flex-col justify-center gap-[5px] md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block h-px w-6 bg-[#e8e2d8] transition-all duration-300 ${menuOpen ? "translate-y-[6px] rotate-45" : ""}`} />
            <span className={`block h-px w-6 bg-[#e8e2d8] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-px w-6 bg-[#e8e2d8] transition-all duration-300 ${menuOpen ? "-translate-y-[6px] -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-[#2a2520] bg-[#141210] px-6 py-6 md:hidden">
          <nav className="flex flex-col gap-6 [font-family:var(--font-label)]">
            <Link href="/tour" onClick={() => setMenuOpen(false)} className="text-sm uppercase tracking-[0.2em] text-[#b0a898] transition hover:text-[#e8e2d8]">The Tour</Link>
            <Link href="/book" onClick={() => setMenuOpen(false)} className="text-sm uppercase tracking-[0.2em] text-[#b0a898] transition hover:text-[#e8e2d8]">Book</Link>
            <Link href="/tour#faq" onClick={() => setMenuOpen(false)} className="text-sm uppercase tracking-[0.2em] text-[#b0a898] transition hover:text-[#e8e2d8]">FAQ</Link>
            <Link href="/guide" onClick={() => setMenuOpen(false)} className="text-sm uppercase tracking-[0.2em] text-[#b0a898] transition hover:text-[#e8e2d8]">Become a Guide</Link>
            <Link href="/contact" onClick={() => setMenuOpen(false)} className="text-sm uppercase tracking-[0.2em] text-[#b0a898] transition hover:text-[#e8e2d8]">Contact</Link>
            <div className="pt-2">
              <Link href="/book" onClick={() => setMenuOpen(false)} className="gw-btn-light w-full text-center">
                Book Now
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}