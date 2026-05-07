// app/page.tsx
import Script from "next/script";
import Link from "next/link";
import Header from "@/app/components/Header";

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

export default function Home() {
  return (
    <>
      <Script
        id="json-ld-tour"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-[#141210] text-[#e8e2d8]">

        <Header />

        <section className="mx-auto grid max-w-7xl gap-16 px-6 pt-12 pb-20 md:grid-cols-[1.15fr_0.85fr] md:pt-16 md:pb-28">
          <div className="flex flex-col justify-center">
            <p className="mb-6 text-sm font-semibold uppercase tracking-[0.22em] text-[#990000] [font-family:var(--font-label)]">
              A WALKING GHOST TOUR
            </p>
            <h1 className="max-w-2xl text-[2.5rem] font-normal leading-[1.0] tracking-[-0.025em] text-[#f0ebe0] md:text-6xl [font-family:var(--font-display)]">
  Savannah has secrets.<br className="hidden md:block" /> We know them.
</h1>
            <p className="mt-7 max-w-xl text-xl leading-8 text-[#b0a898] [font-family:var(--font-body)]">
              Gothic Walks is a story-driven ghost tour built for people who
              want the city&apos;s real atmosphere, history, and darker legends —
              without the theatrics.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link href="/tour" className="gw-btn-light">The Tour</Link>
              <Link href="/book" className="gw-btn-light">Reserve Your Spot</Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#2a2520] bg-[#1c1916] p-5">
            <div className="rounded-[1.5rem] bg-[#231f1b] p-7 pt-6">
              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.22em] text-[#990000] [font-family:var(--font-label)]">
                On the Route
              </p>
              <h2 className="text-3xl font-normal leading-[1.1] tracking-[-0.02em] text-[#f0ebe0] [font-family:var(--font-display)]">
                Savannah has always looked beautiful by daylight.<br className="hidden md:block" />
                <span className="italic"> We prefer it after dark.</span>
              </h2>
              <p className="mt-4 text-lg leading-7 text-[#b0a898] [font-family:var(--font-body)]">
                Madison Square. The Old Sorrel-Weed House. Monterey Square.
                Mercer Williams House. And more. As the city quiets, the
                stories have room to breathe.
              </p>
            </div>
          </div>
        </section>

        <section className="border-y border-[#2a2520] bg-[#1c1916]">
          <div className="mx-auto grid max-w-7xl gap-0 px-6 py-8 md:grid-cols-4">
            {details.map((item, i) => (
              <div
                key={item}
                className={`py-4 md:py-0 md:px-8 ${i > 0 ? "border-t border-[#2a2520] md:border-t-0 md:border-l" : ""}`}
              >
                <p className="text-base uppercase tracking-[0.18em] text-[#7a7268] [font-family:var(--font-label)]">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="px-6 py-24">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.22em] text-[#990000] [font-family:var(--font-label)]">
              Not a haunted pub crawl. <br className="md:hidden" />Not a jump-scare act.
            </p>
            <h2 className="text-4xl font-normal leading-[1.05] tracking-[-0.02em] text-[#f0ebe0] md:text-5xl [font-family:var(--font-display)]">
  A small-group walk through Savannah's <br className="hidden md:block" />most beautiful{" "}
  <span className="italic">shadows.</span>
</h2>
            <p className="mt-7 gw-centered-body text-[#b0a898]">
              Savannah does not need theatrics. She already has old cemeteries, violent scandals, strange deaths, locked rooms, family secrets, and enough candlelit windows to make the imagination behave badly.
            </p>
          </div>
        </section>

        <footer className="border-t border-[#2a2520] px-6 py-10 text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-[#7a7268] [font-family:var(--font-label)]">
            Gothic Walks — Savannah, Georgia
          </p>
        </footer>

      </main>
    </>
  );
}