import Link from "next/link";

const applyUrl = "mailto:guides@gothicwalks.com?subject=Gothic Walks Guide Interest";

const buttonClass =
  "inline-flex items-center justify-center rounded-full border border-[#0f0d0b] bg-transparent px-7 py-4 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-[#0f0d0b] transition hover:bg-[#0f0d0b] hover:text-[#f5f0e8]";

export default function GuidePage() {
  return (
    <main className="min-h-screen bg-[#f5f0e8] text-[#0f0d0b]">

      <header className="border-b border-[#d8d0c4] bg-[#f5f0e8]/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link
            href="/"
            style={{ fontFamily: "var(--font-display)" }}
            className="text-2xl font-normal tracking-[0.12em] italic"
          >
            Gothic Walks
          </Link>
          <Link
            href="/"
            style={{ fontFamily: "var(--font-label)" }}
            className="text-xs uppercase tracking-[0.2em] text-[#6b6258] hover:text-[#0f0d0b] transition"
          >
            Back
          </Link>
        </div>
      </header>

      <section className="mx-auto grid max-w-7xl gap-16 px-6 py-20 md:grid-cols-[1fr_0.9fr] md:py-32">
        <div className="flex flex-col justify-center">
          <p className="label mb-6">We&apos;re looking for the right guides</p>
          <h1
            style={{ fontFamily: "var(--font-display)" }}
            className="text-6xl font-normal leading-[0.96] tracking-[-0.025em] md:text-8xl"
          >
            Tell ghost stories.
            <br />
            <span className="italic">Get paid for it.</span>
          </h1>
          <p
            style={{ fontFamily: "var(--font-body)" }}
            className="mt-8 max-w-xl text-xl leading-8 text-[#6b6258]"
          >
            Gothic Walks keeps things small, deliberate, and story-driven. The
            kind of tour that doesn&apos;t need theatrics, and the kind of guide
            who doesn&apos;t either.
          </p>
          <div className="mt-10">
            <a href={applyUrl} className={buttonClass}>
              Apply to Guide
            </a>
          </div>
        </div>

        <div className="rounded-[2rem] border border-[#d8d0c4] bg-[#ede7d9] p-5">
          <div className="rounded-[1.5rem] border border-[#d0c8ba] bg-[#faf7f2] p-7">
            <p className="label mb-6">Why guide with us</p>
            <ul
              style={{ fontFamily: "var(--font-body)" }}
              className="space-y-5 text-lg leading-7 text-[#2a2520]"
            >
              {[
                ["Set your own schedule.", "Work the nights you want."],
                ["Earn more. Get paid the same day.", "No waiting, no splits."],
                ["You run the tour.", "We handle the bookings."],
                ["No scripts. No micromanaging.", "Your voice, your pacing."],
                ["Smaller groups.", "Better experience for everyone."],
                ["Get in early.", "Help shape what this becomes."],
                ["Locally owned.", "Not corporate. Not a franchise."],
              ].map(([primary, secondary]) => (
                <li key={primary} className="border-b border-[#d8d0c4] pb-5 last:border-0 last:pb-0">
                  <span className="block font-medium">{primary}</span>
                  <span
                    style={{ fontFamily: "var(--font-label)" }}
                    className="mt-0.5 block text-xs uppercase tracking-[0.16em] text-[#9a8f82]"
                  >
                    {secondary}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-y border-[#d8d0c4] bg-[#ede7d9]">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <p className="label mb-5">Not your average ghost tour company.</p>
          <h2
            style={{ fontFamily: "var(--font-display)" }}
            className="text-5xl font-normal leading-[1.05] tracking-[-0.02em] md:text-6xl"
          >
            Definitely not your{" "}
            <span className="italic">average crew.</span>
          </h2>
          <p
            style={{ fontFamily: "var(--font-body)" }}
            className="mx-auto mt-8 max-w-2xl text-xl leading-8 text-[#6b6258]"
          >
            We&apos;re looking for guides who can hold a crowd, read the room,
            tell a story well, and make Savannah feel alive after dark.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-20">
        <p className="label mb-6">Interested?</p>
        <h2
          style={{ fontFamily: "var(--font-display)" }}
          className="text-5xl font-normal leading-tight tracking-[-0.02em]"
        >
          Send us a note.
        </h2>
        <p
          style={{ fontFamily: "var(--font-body)" }}
          className="mt-7 text-xl leading-8 text-[#6b6258]"
        >
          Tell us a bit about your background, tour experience if you have it,
          and why Gothic Walks sounds like your kind of thing.
        </p>
        <div className="mt-10">
          <a href={applyUrl} className={buttonClass}>
            Contact Gothic Walks
          </a>
        </div>
      </section>

      <footer className="border-t border-[#d8d0c4] px-6 py-10 text-center">
        <p
          style={{ fontFamily: "var(--font-label)" }}
          className="text-xs uppercase tracking-[0.2em] text-[#9a8f82]"
        >
          Gothic Walks — Savannah, Georgia
        </p>
      </footer>

    </main>
  );
}