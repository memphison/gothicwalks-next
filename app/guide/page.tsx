// app/guide/page.tsx
import Link from "next/link";

const applyUrl = "mailto:guides@gothicwalks.com?subject=Gothic Walks Guide Interest";

export const metadata = {
  title: "Become a Tour Guide | Gothic Walks Savannah",
  description:
    "Lead small-group ghost tours through Savannah's Historic District. Set your own schedule, get paid the same day, no scripts. Apply to guide with Gothic Walks.",
  alternates: { canonical: "https://gothicwalks.com/guide" },
  openGraph: {
    title: "Become a Tour Guide | Gothic Walks Savannah",
    description:
      "Lead small-group ghost tours through Savannah's Historic District. Set your own schedule, get paid the same day, no scripts.",
    url: "https://gothicwalks.com/guide",
    siteName: "Gothic Walks",
    locale: "en_US",
    type: "website",
  },
};

export default function GuidePage() {
  return (
    <main className="min-h-screen bg-[#141210] text-[#e8e2d8]">

      <header className="border-b border-[#2a2520] bg-[#141210]/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link
            href="/"
            className="text-2xl italic tracking-[0.12em] text-[#e8e2d8] [font-family:var(--font-display)]"
          >
            Gothic Walks
          </Link>
          <Link
            href="/"
            className="text-sm uppercase tracking-[0.2em] text-[#7a7268] transition hover:text-[#e8e2d8] [font-family:var(--font-label)]"
          >
            Back
          </Link>
        </div>
      </header>

      <section className="mx-auto grid max-w-7xl gap-16 px-6 py-20 md:grid-cols-[1fr_0.9fr] md:py-24">
        <div className="flex flex-col">
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.22em] text-[#990000] [font-family:var(--font-label)]">
            We&apos;re looking for the right guides
          </p>
          <h1 className="text-5xl font-normal leading-[0.96] tracking-[-0.025em] text-[#f0ebe0] md:text-7xl [font-family:var(--font-display)]">
            Tell ghost stories.
            <br />
            <span className="italic">Get paid for it.</span>
          </h1>
          <p className="mt-8 max-w-xl text-xl leading-8 text-[#b0a898] [font-family:var(--font-body)]">
            Gothic Walks keeps things small, deliberate, and story-driven. The
            kind of tour that doesn&apos;t need theatrics, and the kind of guide
            who doesn&apos;t either.
          </p>
          <div className="mt-10">
            <a href={applyUrl} className="gw-btn-light">Apply to Guide</a>
          </div>
        </div>

        <div className="rounded-[2rem] border border-[#2a2520] bg-[#1c1916] p-5">
          <div className="rounded-[1.5rem] bg-[#231f1b] p-7">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.22em] text-[#990000] [font-family:var(--font-label)]">
              Why guide with us
            </p>
            <ul className="space-y-4 pt-4 text-lg leading-6 text-[#e8e2d8] [font-family:var(--font-body)]">
              {[
                ["Set your own schedule.", "Work the nights you want."],
                ["Earn more. Get paid the same day.", "No waiting, no splits."],
                ["You run the tour.", "We handle the bookings."],
                ["No scripts. No micromanaging.", "Your voice, your pacing."],
                ["Smaller groups.", "Better experience for everyone."],
                ["Get in early.", "Help shape what this becomes."],
                ["Locally owned.", "Not corporate. Not a franchise."],
              ].map(([primary, secondary]) => (
                <li key={primary} className="border-b border-[#2a2520] pb-3 last:border-0 last:pb-0">
                  <span className="block font-medium text-[#f0ebe0]">{primary}</span>
                  <span className="mt-0.5 block text-sm uppercase tracking-[0.16em] text-[#7a7268] [font-family:var(--font-label)]">
                    {secondary}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-y border-[#2a2520] bg-[#1c1916]">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.22em] text-[#990000] [font-family:var(--font-label)]">
            Not your average ghost tour company.
          </p>
          <h2 className="text-5xl font-normal leading-[1.05] tracking-[-0.02em] text-[#f0ebe0] md:text-6xl [font-family:var(--font-display)]">
            Definitely not your{" "}
            <span className="italic">average crew.</span>
          </h2>
          <p className="gw-centered-body mt-8 text-[#b0a898]">
            We&apos;re looking for guides who can hold a crowd, read the room,
            tell a story well, and make Savannah feel alive after dark.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-20">
        <p className="mb-6 text-sm font-semibold uppercase tracking-[0.22em] text-[#990000] [font-family:var(--font-label)]">
          Interested?
        </p>
        <h2 className="text-5xl font-normal leading-tight tracking-[-0.02em] text-[#f0ebe0] [font-family:var(--font-display)]">
          Send us a note.
        </h2>
        <p className="mt-7 text-xl leading-8 text-[#b0a898] [font-family:var(--font-body)]">
          Tell us a bit about your background, tour experience if you have it,
          and why Gothic Walks sounds like your kind of thing.
        </p>
        <div className="mt-10">
          <a href={applyUrl} className="gw-btn-light">Contact Gothic Walks</a>
        </div>
      </section>

      <footer className="border-t border-[#2a2520] px-6 py-10 text-center">
        <p className="text-sm uppercase tracking-[0.2em] text-[#7a7268] [font-family:var(--font-label)]">
          Gothic Walks — Savannah, Georgia
        </p>
      </footer>

    </main>
  );
}