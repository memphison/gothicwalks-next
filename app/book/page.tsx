import Link from "next/link";

export default function BookPage() {
  return (
    <main className="min-h-screen bg-[#fbfaf7] text-[#171514]">
      <header className="border-b border-[#ddd6cb] bg-[#fbfaf7]/95">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link href="/" className="font-serif text-2xl tracking-[0.18em]">
            GOTHIC WALKS
          </Link>

          <Link
            href="/"
            className="text-sm uppercase tracking-[0.18em] text-[#5f5850]"
          >
            Back
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h1 className="mb-4 font-serif text-4xl">Reserve Your Spot</h1>

        <p className="mb-10 text-[#5f5850]">
          Select a date and time for Savannah After Dark.
        </p>

        <div className="overflow-hidden rounded-xl border border-[#ddd6cb] bg-white">
          <iframe
            src="https://gothicwalks.rezgo.com"
            width="100%"
            height="1100"
            className="block w-full border-0"
          />
        </div>
      </section>
    </main>
  );
}