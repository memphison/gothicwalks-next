// app/components/Footer.tsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="px-5 py-12 md:px-8 md:py-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <Link
          href="/"
          className="flex items-center gap-3 [font-family:var(--font-display)] text-4xl tracking-wide text-[#efe6d4]"
        >
          <span className="h-2.5 w-2.5 rotate-45 bg-[#d8a24a] shadow-[0_0_16px_rgba(216,162,74,0.8)]" />
          <span>Gothic Walks</span>
        </Link>

        <div className="flex flex-wrap gap-6 text-xs font-semibold uppercase tracking-[0.18em] text-[#b3a489] [font-family:var(--font-label)]">
          <Link href="/tour">The Tour</Link>
          <Link href="/tour#faq">FAQ</Link>
          <Link href="/book">Book</Link>
          <Link href="/guide">Guide</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-3 border-t border-[#d8a24a]/15 pt-8 text-xs tracking-[0.08em] text-[#6d6149] md:flex-row md:justify-between">
        <p>Gothic Walks · Savannah, Georgia</p>
        <p>No actors. No props. No plastic pumpkins.</p>
      </div>
    </footer>
  );
}