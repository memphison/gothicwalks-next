import Link from "next/link";

const applyUrl = "mailto:jonathandunavant@gmail.com?subject=Gothic Walks Guide Interest";

const buttonClass =
  "inline-flex items-center justify-center rounded-full border border-[#171514] bg-[#fbfaf7] px-7 py-4 text-center text-sm font-semibold uppercase tracking-[0.16em] text-[#171514] transition hover:border-[#171514] hover:bg-[#171514] hover:!text-white";

export default function GuidePage() {
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

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-[1fr_0.9fr] md:py-24">
        <div>
          <p className="mb-5 text-sm uppercase tracking-[0.32em] text-[#9b825d]">
            We&apos;re hiring guides
          </p>

          <h1 className="font-serif text-5xl leading-tight md:text-7xl">
            Tell ghost stories.
            <br />
            Get paid for it.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-[#5f5850]">
            Gothic Walks is building a different kind of Savannah ghost tour
            company: smaller groups, better storytelling, and more freedom for
            the people leading the walk.
          </p>

          <div className="mt-9">
            <a href={applyUrl} className={buttonClass}>
              Apply to Guide
            </a>
          </div>
        </div>

        <div className="rounded-[2rem] border border-[#ddd6cb] bg-white p-8">
          <h2 className="font-serif text-3xl">Why guide with us?</h2>

          <ul className="mt-7 space-y-4 text-lg leading-8 text-[#5f5850]">
            <li>Set your own schedule.</li>
            <li>Earn more. Get paid the same day.</li>
            <li>You run the tour. We handle the bookings.</li>
            <li>No scripts. No micromanaging.</li>
            <li>Smaller groups. Better experience.</li>
            <li>Get in early. Help shape it.</li>
            <li>Locally owned. Not corporate.</li>
          </ul>
        </div>
      </section>

      <section className="border-y border-[#ddd6cb] bg-white">
        <div className="mx-auto max-w-5xl px-6 py-16 text-center">
          <p className="text-sm uppercase tracking-[0.28em] text-[#9b825d]">
            Not your average ghost tour company.
          </p>

          <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">
            Definitely not your average crew.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#6f6962]">
            We&apos;re looking for guides who can hold a crowd, read the room,
            tell a story well, and make Savannah feel alive after dark.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="font-serif text-3xl">Interested?</h2>

        <p className="mt-5 text-lg leading-8 text-[#5f5850]">
          Send us a short note with your background, tour experience if you have
          it, and why Gothic Walks sounds like your kind of thing.
        </p>

        <div className="mt-8">
          <a href={applyUrl} className={buttonClass}>
            Contact Gothic Walks
          </a>
        </div>
      </section>

      <footer className="border-t border-[#ddd6cb] px-6 py-10 text-center text-sm text-[#6f6962]">
        Gothic Walks. Savannah, Georgia.
      </footer>
    </main>
  );
}