import Link from "next/link";

const details = [
  "90-minute walking ghost tour",
  "Small groups, richer stories",
  "Starts near Johnson Square",
  "Historic squares, haunted houses, and Savannah after dark",
];

const buttonClass =
  "rounded-full border border-[#171514] bg-[#fbfaf7] px-7 py-4 text-center text-sm font-semibold uppercase tracking-[0.16em] text-[#171514] transition hover:border-[#171514] hover:bg-[#171514] hover:!text-white";

const smallButtonClass =
  "rounded-full border border-[#171514] bg-[#fbfaf7] px-5 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#171514] transition hover:border-[#171514] hover:bg-[#171514] hover:!text-white";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fbfaf7] text-[#171514]">
      <header className="border-b border-[#ddd6cb] bg-[#fbfaf7]/95">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link href="/" className="font-serif text-2xl tracking-[0.18em]">
            GOTHIC WALKS
          </Link>

          <nav className="hidden items-center gap-8 text-sm uppercase tracking-[0.18em] text-[#5f5850] md:flex">
            <Link href="/book">Book</Link>
            <Link href="/guide">Become a Guide</Link>
          </nav>

          <Link href="/book" className={smallButtonClass}>
            Book Now
          </Link>
        </div>
      </header>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-[1.1fr_0.9fr] md:py-24">
        <div className="flex flex-col justify-center">
          <p className="mb-5 text-sm uppercase tracking-[0.32em] text-[#9b825d]">
            Savannah After Dark
          </p>

          <h1 className="max-w-4xl font-serif text-5xl leading-[0.98] tracking-[-0.03em] md:text-7xl">
            A more refined walk through Savannah's haunted streets.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-[#5f5850]">
            Gothic Walks is a story-driven Savannah ghost tour built for people
            who want the city's atmosphere, history, and darker legends without
            the gimmicks.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link href="/book" className={buttonClass}>
              Reserve Your Spot
            </Link>

            <Link href="/guide" className={buttonClass}>
              Guide With Us
            </Link>
          </div>
        </div>

        <div className="rounded-[2rem] border border-[#ddd6cb] bg-[#f2eee7] p-6 shadow-sm">
          <div className="flex min-h-[520px] flex-col justify-end rounded-[1.5rem] border border-[#d8cdbc] bg-white p-8">
            <p className="mb-4 text-sm uppercase tracking-[0.28em] text-[#9b825d]">
              The Tour
            </p>
            <h2 className="font-serif text-4xl leading-tight">
              Savannah has always looked beautiful by daylight.
              <br />
              We prefer it after dark.
            </h2>
            <p className="mt-5 text-base leading-7 text-[#6f6962]">
              Johnson Square. Wright Square. Colonial Park Cemetery. The Olde
              Pink House. The city gets quieter. The stories get better.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-[#ddd6cb] bg-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-10 md:grid-cols-4">
          {details.map((item) => (
            <div key={item} className="border-l border-[#ddd6cb] pl-5">
              <p className="text-sm uppercase tracking-[0.14em] text-[#5f5850]">
                {item}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 text-center">
        <p className="mb-4 text-sm uppercase tracking-[0.28em] text-[#9b825d]">
          Not a haunted pub crawl. Not a jump-scare act.
        </p>
        <h2 className="font-serif text-4xl leading-tight md:text-5xl">
          A small-group ghost tour for people who like their history with a
          little blood in the margins.
        </h2>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#6f6962]">
          Savannah does not need theatrics. It already has old cemeteries,
          violent scandals, strange deaths, locked rooms, family secrets, and
          enough candlelit windows to make the imagination behave badly.
        </p>
      </section>

      <footer className="border-t border-[#ddd6cb] px-6 py-10 text-center text-sm text-[#6f6962]">
        Gothic Walks. Savannah, Georgia.
      </footer>
    </main>
  );
}