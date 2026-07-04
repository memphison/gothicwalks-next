// app/components/Header.tsx
"use client";

import { useState } from "react";
import Link from "next/link";

type HeaderProps = {
  variant?: "home" | "site";
};

export default function Header({ variant = "site" }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

 const links =
  variant === "home"
    ? [
        ["The Walk", "#walk"],
        ["Along the Route", "#stops"],
        ["Details", "#details"],
      ]
    : [
        ["The Walk", "/#walk"],
        ["Along the Route", "/#stops"],
        ["Details", "/#details"],
      ];

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-[#d8a24a]/15 bg-[#14100c]/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <Link
          href="/"
          className="flex items-center gap-3 [font-family:var(--font-display)] text-2xl tracking-wide text-[#efe6d4]"
          onClick={() => setMenuOpen(false)}
        >
          <span className="h-2.5 w-2.5 rotate-45 bg-[#d8a24a] shadow-[0_0_16px_rgba(216,162,74,0.8)]" />
          <span>
            Gothic <span className="font-medium">Walks</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map(([label, href]) =>
            href.startsWith("#") ? (
              <a key={href} href={href} className="gw-nav-link">
                {label}
              </a>
            ) : (
              <Link key={href} href={href} className="gw-nav-link">
                {label}
              </Link>
            )
          )}

          <Link href="/book" className="gw-btn-gold-sm">
            Reserve
          </Link>
        </nav>

        <div className="flex items-center gap-4 md:hidden">
          <button
            className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] border border-[#d8a24a]/25"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span
              className={`block h-px w-5 bg-[#efe6d4] transition-all duration-300 ${
                menuOpen ? "translate-y-[6px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-px w-5 bg-[#efe6d4] transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-px w-5 bg-[#efe6d4] transition-all duration-300 ${
                menuOpen ? "-translate-y-[6px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-[#d8a24a]/15 bg-[#14100c] px-5 py-6 md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-5">
            {links.map(([label, href]) =>
              href.startsWith("#") ? (
                <a
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm font-semibold uppercase tracking-[0.18em] text-[#b3a489] transition hover:text-[#efe6d4] [font-family:var(--font-label)]"
                >
                  {label}
                </a>
              ) : (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm font-semibold uppercase tracking-[0.18em] text-[#b3a489] transition hover:text-[#efe6d4] [font-family:var(--font-label)]"
                >
                  {label}
                </Link>
              )
            )}

            <Link
              href="/book"
              onClick={() => setMenuOpen(false)}
              className="gw-btn-gold mt-2 w-full"
            >
              Check Dates & Reserve
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}