// app/page.tsx
import Header from "@/app/components/Header";
import Script from "next/script";
import Link from "next/link";

export const metadata = {
  title: "Gothic Walks | Savannah Ghost Tour",
  description:
    "A story-driven Savannah ghost tour through Madison Square, the Sorrel-Weed House, Monterey Square, Mercer-Williams House, and more. Small groups. 90 minutes. No gimmicks.",
  keywords: [
    "Savannah ghost tour",
    "haunted Savannah walking tour",
    "Sorrel-Weed House tour",
    "Mercer-Williams House tour",
    "Madison Square Savannah",
    "best ghost tour Savannah",
    "small group ghost tour Savannah",
  ],
  alternates: { canonical: "https://gothicwalks.com" },
  openGraph: {
    title: "Gothic Walks | Savannah Ghost Tour",
    description:
      "A story-driven Savannah ghost tour through Madison Square, the Sorrel-Weed House, Monterey Square, Mercer-Williams House, and more. Small groups. 90 minutes. No gimmicks.",
    url: "https://gothicwalks.com",
    siteName: "Gothic Walks",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gothic Walks | Savannah Ghost Tour",
    description:
      "A story-driven Savannah ghost tour through Madison Square, the Sorrel-Weed House, Monterey Square, Mercer-Williams House, and more. Small groups. 90 minutes. No gimmicks.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  name: "Savannah After Dark Ghost Tour",
  description:
    "A 90-minute small-group walking ghost tour through Savannah's haunted streets, squares, and landmarks.",
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

const stats = [
  ["90", "Minutes"],
  ["15", "Guests, max"],
  ["1", "Slow mile"],
  ["0", "Props or costumes"],
];

const stops = [
  {
    number: "I",
    title: "Madison Square",
    copy: "A beautiful square with a long memory. This is where the walk begins, and where Savannah starts to change after dark.",
    image: "/images/madison-square.jpg",
  },
  {
    number: "II",
    title: "Sorrel-Weed House",
    copy: "One of Savannah's most famous haunted houses, with a history of scandal, grief, and stories that refuse to stay indoors.",
    image: "/images/sorrel-weed-house.jpg",
  },
 {
  number: "III",
  title: "Andrew Low House",
  copy: "A handsome Lafayette Square house with deep Savannah roots, polished rooms, and the kind of quiet that feels carefully kept.",
  image: "/images/andrew-low-house.jpg",
},
  {
    number: "IV",
    title: "Mercer-Williams House",
    copy: "A landmark of elegance, notoriety, and Savannah mystery. Some houses become famous. Others become legends.",
    image: "/images/mercer-williams-house.jpg",
  },
];

const faqs = [
  [
    "Is this family friendly?",
    "Yes, but it is a story-driven evening ghost tour. It is not built around jump scares, gore, or actors leaping from behind trees.",
  ],
  [
    "What happens if it rains?",
    "Savannah weather is part of the atmosphere. Light rain usually means the walk continues. Severe weather may require a delay or reschedule.",
  ],
  [
    "Where exactly do we meet?",
    "The walk begins at Madison Square. Your booking confirmation will include the exact meeting point and arrival instructions.",
  ],
  [
    "How long and how far is it?",
    "The walk is about 90 minutes and roughly one slow mile through Savannah's historic district.",
  ],
];

export default function Home() {
  return (
    <>
      <Script
        id="json-ld-tour"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-[#14100c] text-[#efe6d4]">
       <Header variant="home" />

        <section className="relative flex min-h-screen items-end overflow-hidden px-5 pb-16 pt-32 md:px-8 md:pb-24">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-75"
            style={{
              backgroundImage:
                "linear-gradient(180deg, rgba(20,16,12,.60) 0%, rgba(20,16,12,.20) 38%, rgba(20,16,12,.82) 78%, #14100c 100%), url('/images/gothic-hero.jpg')",
            }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_34%,rgba(216,162,74,0.18),transparent_32%),radial-gradient(circle_at_80%_20%,rgba(239,230,212,0.08),transparent_28%)]" />

          <div className="relative z-10 mx-auto w-full max-w-7xl">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.32em] text-[#d8a24a] [font-family:var(--font-label)]">
              Savannah, Georgia · Nightly After Dusk
            </p>

            <h1 className="max-w-4xl text-[3.75rem] font-normal leading-[0.9] tracking-[-0.04em] text-[#efe6d4] md:text-[7.75rem] [font-family:var(--font-display)]">
              Savannah,
              <br />
              <span className="italic text-[#e7c082]">after dark.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-xl leading-8 text-[#e7ddca] md:text-2xl [font-family:var(--font-body)]">
              An intimate ghost walk through the haunted heart of America&apos;s
              most beautiful old city. Real history, darker legends, and no
              costumed theatrics.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link href="/book" className="gw-btn-gold">
                Reserve Your Walk
              </Link>
              <a href="#walk" className="gw-btn-ghost">
                Hear the Story
              </a>
            </div>

            <div className="mt-12 grid max-w-3xl grid-cols-2 gap-5 border-t border-[#d8a24a]/25 pt-6 sm:grid-cols-4">
              {stats.map(([value, label]) => (
                <div key={label}>
                  <div className="text-3xl leading-none text-[#e7c082] [font-family:var(--font-display)]">
                    {value}
                  </div>
                  <div className="mt-2 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#b3a489] [font-family:var(--font-label)]">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="walk" className="bg-[#1b1610] px-5 py-20 md:px-8 md:py-32">
          <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:gap-20">
            <div className="flex flex-col justify-center">
              <p className="mb-6 text-xs font-semibold uppercase tracking-[0.32em] text-[#d8a24a] [font-family:var(--font-label)]">
                The Walk
              </p>

              <p className="text-3xl leading-[1.22] text-[#e4dac4] md:text-4xl [font-family:var(--font-display)]">
                Savannah does not need much help being haunted. The old squares,
                shuttered houses, family scandals, cemeteries, locked rooms,
                and candlelit windows have already done most of the work.
              </p>

              <p className="mt-7 text-lg leading-8 text-[#cabfa6] [font-family:var(--font-body)]">
                Gothic Walks is built for people who want atmosphere and story,
                not plastic props. We walk the city at its quietest hour, when
                the crowds thin out and Savannah starts telling on herself.
              </p>

              <p className="mt-8 text-sm font-semibold uppercase tracking-[0.18em] text-[#b3a489] [font-family:var(--font-label)]">
                Small groups · Real places · No jump scares
              </p>
            </div>

            <div className="relative min-h-[460px] overflow-hidden border border-[#d8a24a]/25 bg-[#221b13]">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "linear-gradient(180deg, rgba(20,16,12,.06), rgba(20,16,12,.42)), url('/images/savannah-house.jpg')",
                }}
              />
              <div className="absolute inset-4 border border-[#d8a24a]/45" />
            </div>
          </div>
        </section>

        <section id="stops" className="px-5 py-20 md:px-8 md:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-4xl md:mb-16">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.32em] text-[#d8a24a] [font-family:var(--font-label)]">
                Along the Route
              </p>
              <h2 className="text-4xl font-normal leading-[1.02] tracking-[-0.03em] text-[#efe6d4] md:text-6xl [font-family:var(--font-display)]">
  A slow mile through Savannah&apos;s most unsettling corners.
</h2>

<p className="mt-6 max-w-2xl text-lg leading-8 text-[#b3a489] [font-family:var(--font-body)]">
  Every walk follows the same spirit, but the route can shift with the night,
  the guide, and the stories worth telling.
</p>
            </div>

            <div className="grid gap-1 md:grid-cols-2">
              {stops.map((stop) => (
                <article
                  key={stop.title}
                  className="group relative min-h-[310px] overflow-hidden bg-[#221b13] md:min-h-[380px]"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-105"
                    style={{
                      backgroundImage: `linear-gradient(180deg, rgba(20,16,12,.18), rgba(20,16,12,.94)), url('${stop.image}')`,
                    }}
                  />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(216,162,74,0.16),transparent_30%)]" />
                  <div className="relative z-10 flex min-h-[310px] flex-col justify-end p-7 md:min-h-[380px] md:p-9">
                    <p className="text-sm tracking-[0.18em] text-[#d8a24a] [font-family:var(--font-display)]">
                      {stop.number}
                    </p>
                    <h3 className="mt-2 text-3xl font-normal text-[#efe6d4] [font-family:var(--font-display)]">
                      {stop.title}
                    </h3>
                    <p className="mt-3 max-w-md text-base leading-7 text-[#d8ccb4] [font-family:var(--font-body)]">
                      {stop.copy}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="details" className="bg-[#1b1610] px-5 py-20 md:px-8 md:py-32">
          <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1.05fr_0.95fr] md:gap-20">
            <div>
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.32em] text-[#d8a24a] [font-family:var(--font-label)]">
                The Particulars
              </p>

              <h2 className="text-4xl font-normal leading-[1.04] tracking-[-0.03em] text-[#efe6d4] md:text-6xl [font-family:var(--font-display)]">
                Everything you need before the sun goes down.
              </h2>

              <div className="mt-10 border-t border-[#d8a24a]/25">
                {[
                  ["Meeting Point", "Madison Square"],
                  ["Departs", "Evening, seasonally"],
                  ["Duration", "90 minutes"],
                  ["Distance", "About 1 slow mile"],
                  ["Group Size", "Small groups"],
                  ["Style", "History, atmosphere, no gimmicks"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="flex items-baseline justify-between gap-8 border-b border-[#d8a24a]/25 py-5"
                  >
                    <span className="text-xs font-semibold uppercase tracking-[0.20em] text-[#b3a489] [font-family:var(--font-label)]">
                      {label}
                    </span>
                    <span className="text-right text-2xl text-[#efe6d4] [font-family:var(--font-display)]">
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="border border-[#d8a24a]/25 bg-[#221b13]/80 p-7 md:p-9">
              <h3 className="text-4xl font-normal text-[#efe6d4] [font-family:var(--font-display)]">
                Reserve your walk
              </h3>
              <p className="mt-3 text-base leading-7 text-[#b3a489] [font-family:var(--font-body)]">
                Book your spot for Savannah after dark. You&apos;ll receive the
                meeting details and arrival instructions with your confirmation.
              </p>

              <div className="my-8 border-t border-[#d8a24a]/20" />

             <div className="space-y-5">
 {[
  ["Best For", "Couples, families, curious skeptics"],
  ["Pace", "Gentle walk, frequent stops"],
  ["Meeting Point", "Madison Square"],
  ["Tone", "Eerie, historic, not theatrical"],
].map(([label, value]) => (
   <div
  key={label}
  className="grid grid-cols-[9rem_1fr] items-start gap-6"
>
  <span className="pt-[0.35rem] text-xs font-semibold uppercase leading-5 tracking-[0.18em] text-[#b3a489] [font-family:var(--font-label)]">
    {label}
  </span>
  <span className="text-right text-xl leading-7 text-[#efe6d4] [font-family:var(--font-display)]">
    {value}
  </span>
</div>
  ))}
</div>

              <Link href="/book" className="gw-btn-gold mt-9 w-full">
  Check Dates & Reserve
</Link>
            </div>
          </div>
        </section>

        <section className="px-5 py-20 md:px-8 md:py-32">
  <div className="mx-auto max-w-6xl">
    <div className="mx-auto max-w-4xl text-center">
      <p className="mb-5 text-xs font-semibold uppercase tracking-[0.32em] text-[#d8a24a] [font-family:var(--font-label)]">
        From the Walk
      </p>

      <h2 className="text-4xl font-normal leading-[1.04] tracking-[-0.03em] text-[#efe6d4] md:text-6xl [font-family:var(--font-display)]">
        Built for people who want the city,
<br />
not the costume.
      </h2>
    </div>

    <div className="mx-auto mt-14 grid max-w-5xl gap-10 md:grid-cols-3">
      {[
        [
          "Been on a few walking tours in Sav and this certainly was the best!",
          "Jim C.",
        ],
        [
          "The guide was such a good storyteller and made the experience amazing.",
          "Ricky A.",
        ],
        [
          "Savannah ghost tours just got an upgrade.",
          "Jonathan S.",
        ],
      ].map(([quote, who]) => (
        <figure key={quote} className="text-left">
          <div className="text-sm tracking-[0.3em] text-[#d8a24a]">
            ★★★★★
          </div>
          <blockquote className="mt-5 text-2xl leading-8 text-[#e4dac4] [font-family:var(--font-display)]">
            “{quote}”
          </blockquote>
          <figcaption className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-[#b3a489] [font-family:var(--font-label)]">
            {who}
          </figcaption>
        </figure>
      ))}
    </div>
  </div>
</section>

        <section className="border-y border-[#d8a24a]/15 bg-[#1b1610] px-5 py-20 md:px-8 md:py-28">
          <div className="mx-auto max-w-4xl">
            <p className="mb-5 text-center text-xs font-semibold uppercase tracking-[0.32em] text-[#d8a24a] [font-family:var(--font-label)]">
              Before You Walk
            </p>
            <h2 className="mb-12 text-center text-4xl font-normal leading-[1.04] tracking-[-0.03em] text-[#efe6d4] md:text-6xl [font-family:var(--font-display)]">
              Questions, answered.
            </h2>

            <div className="border-t border-[#d8a24a]/25">
              {faqs.map(([question, answer]) => (
                <details
                  key={question}
                  className="group border-b border-[#d8a24a]/25 py-6"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-8 text-2xl text-[#efe6d4] [font-family:var(--font-display)]">
                    {question}
                    <span className="text-[#d8a24a] transition group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 max-w-2xl text-base leading-7 text-[#b3a489] [font-family:var(--font-body)]">
                    {answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

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
      </main>
    </>
  );
}