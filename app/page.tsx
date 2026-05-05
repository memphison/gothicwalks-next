import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "Gothic Walks | Savannah Ghost Tour",
  description:
    "A story-driven Savannah ghost tour through Madison Square, the Sorrel-Weed House, Mercer House, and more. Small groups. 90 minutes. No gimmicks.",
  keywords: [
    "Savannah ghost tour",
    "haunted Savannah walking tour",
    "Sorrel-Weed House tour",
    "Mercer House tour",
    "Madison Square Savannah",
    "best ghost tour Savannah",
    "small group ghost tour Savannah",
  ],
  alternates: { canonical: "https://gothicwalks.com" },
  openGraph: {
    title: "Gothic Walks | Savannah Ghost Tour",
    description:
      "A story-driven Savannah ghost tour through Madison Square, the Sorrel-Weed House, Mercer House, and more. Small groups. 90 minutes. No gimmicks.",
    url: "https://gothicwalks.com",
    siteName: "Gothic Walks",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gothic Walks | Savannah Ghost Tour",
    description:
      "A story-driven Savannah ghost tour through Madison Square, the Sorrel-Weed House, Mercer House, and more. Small groups. 90 minutes. No gimmicks.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  name: "Savannah After Dark Ghost Tour",
  description:
    "A 90-minute small-group walking ghost tour through Savannah's most haunted streets, squares, and landmarks.",
  provider: {
    "@type": "TourOperator",
    name: "Gothic Walks",
    url: "https://gothicwalks.com",
  },
  offers: {
    "@type": "Offer",
    url: "https://book.gothicwalks.com/details/424489/savannah-after-dark",
    availability: "https://schema.org/InStock",
  },
};

const details = [
  "90-minute walking tour",
  "Small groups, richer stories",
  "Starts at Madison Square",
  "History, atmosphere, no gimmicks",
];

const buttonClass =
  "rounded-full border border-[#0f0d0b] px-7 py-4 text-center font-sans text-xs font-semibold uppercase tracking-[0.2em] text-[#0f0d0b] transition duration-250 hover:bg-[#0f0d0b] hover:text-[#f5f0e8]";

const smallButtonClass =
  "rounded-full border border-[#0f0d0b] px-5 py-3 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-[#0f0d0b] transition duration-250 hover:bg-[#0f0d0b] hover:text-[#f5f0e8]";

export default function Home() {
  return (
    <>
      <Script
        id="json-ld-tour"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
            <nav className="hidden items-center gap-8 font-sans text-xs uppercase tracking-[0.2em] text-[#6b6258] md:flex">
              <Link href="/book" className="hover:text-[#0f0d0b] transition">Book</Link>
              <Link href="/guide" className="hover:text-[#0f0d0b] transition">Become a Guide</Link>
            </nav>
            <Link href="/book" className={smallButtonClass}>
              Book Now
            </Link>
          </div>
        </header>

        <section className="mx-auto grid max-w-7xl gap-16 px-6 py-20 md:grid-cols-[1.15fr_0.85fr] md:py-32">
          <div className="flex flex-col justify-center">
            <p className="label mb-6">Savannah After Dark</p>
            <h1
              style={{ fontFamily: "var(--font-display)" }}
              className="max-w-2xl text-6xl font-normal leading-[0.96] tracking-[-0.025em] md:text-8xl"
            >
              A more refined walk through Savannah's haunted streets.
            </h1>
            <p
              style={{ fontFamily: "var(--font-body)" }}
              className="mt-8 max-w-xl text-xl leading-8 text-[#6b6258]"
            >
              Gothic Walks is a story-driven ghost tour built for people who
              want the city's real atmosphere, history, and darker legends —
              without the theatrics.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link href="/book" className={buttonClass}>Reserve Your Spot</Link>
              <Link href="/guide" className={buttonClass}>Guide With Us</Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#d8d0c4] bg-[#ede7d9] p-5">
            <div className="flex min-h-[400px] flex-col justify-end rounded-[1.5rem] border border-[#d0c8ba] bg-[#faf7f2] p-7">
              <p className="label mb-5">The Tour</p>
              <h2
                style={{ fontFamily: "var(--font-display)" }}
                className="text-4xl font-normal leading-[1.1] tracking-[-0.02em]"
              >
                Savannah has always looked beautiful by daylight.
                <span className="italic"> We prefer it after dark.</span>
              </h2>
              <p
                style={{ fontFamily: "var(--font-body)" }}
                className="mt-5 text-base leading-7 text-[#6b6258]"
              >
                Madison Square. The Old Sorrel-Weed House. Monterey Square.
                Mercer Williams House. And more. As the city quiets, the
                stories have room to breathe.
              </p>
            </div>
          </div>
        </section>

        <section className="border-y border-[#d8d0c4] bg-[#ede7d9]">
          <div className="mx-auto grid max-w-7xl gap-0 px-6 py-8 md:grid-cols-4">
            {details.map((item, i) => (
              <div
                key={item}
                className={`py-4 md:py-0 md:px-8 ${i > 0 ? "border-t border-[#d8d0c4] md:border-t-0 md:border-l" : ""}`}
              >
                <p
                  style={{ fontFamily: "var(--font-label)" }}
                  className="text-xs uppercase tracking-[0.18em] text-[#6b6258]"
                >
                  {item}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-6 py-24 text-center">
          <p className="label mb-5">Not a haunted pub crawl. Not a jump-scare act.</p>
          <h2
            style={{ fontFamily: "var(--font-display)" }}
            className="text-5xl font-normal leading-[1.05] tracking-[-0.02em] md:text-6xl"
          >
            A small-group tour for people who like their history with a little{" "}
            <span className="italic">blood in the margins.</span>
          </h2>
          <p
            style={{ fontFamily: "var(--font-body)" }}
            className="mx-auto mt-8 max-w-2xl text-xl leading-8 text-[#6b6258]"
          >
            Savannah does not need theatrics. It already has old cemeteries,
            violent scandals, strange deaths, locked rooms, family secrets, and
            enough candlelit windows to make the imagination behave badly.
          </p>
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
    </>
  );
}