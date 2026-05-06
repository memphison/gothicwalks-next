// app/tour/page.tsx
import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "Savannah After Dark | Gothic Walks Ghost Tour",
  description:
    "A 90-minute small-group walking ghost tour through Savannah's most haunted squares and landmarks. The Sorrel-Weed House, Mercer Williams House, Old Candler Hospital, 432 Abercorn, and more.",
  alternates: { canonical: "https://gothicwalks.com/tour" },
  openGraph: {
    title: "Savannah After Dark | Gothic Walks Ghost Tour",
    description:
      "A 90-minute small-group walking ghost tour through Savannah's most haunted squares and landmarks.",
    url: "https://gothicwalks.com/tour",
    siteName: "Gothic Walks",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Savannah After Dark | Gothic Walks Ghost Tour",
    description:
      "A 90-minute small-group walking ghost tour through Savannah's most haunted squares and landmarks.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Where does the Gothic Walks ghost tour start?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The tour begins at Madison Square in Savannah's Historic District. Exact meeting point details are confirmed after booking. Plan to arrive 10–15 minutes early — we start on time to respect everyone's evening.",
      },
    },
    {
      "@type": "Question",
      name: "How long is the Gothic Walks ghost tour?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The tour runs approximately 90 minutes at a relaxed, story-driven pace. The route covers roughly one mile on foot.",
      },
    },
    {
      "@type": "Question",
      name: "How many people are on the tour?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Gothic Walks limits groups to 15 guests. Smaller groups mean better storytelling, more atmosphere, and a more personal experience.",
      },
    },
    {
      "@type": "Question",
      name: "Is the Gothic Walks tour scary?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The tour is atmospheric and historically detailed, not a jump-scare attraction. The stories are real, the history is dark, and most guests find the experience genuinely unsettling in the best possible way.",
      },
    },
    {
      "@type": "Question",
      name: "Is the tour suitable for children?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The tour is best suited for guests 12 and older. The content involves mature historical themes including death, disease, and violence, but we also know how to read the room.",
      },
    },
    {
      "@type": "Question",
      name: "Can I bring my dog on the Gothic Walks ghost tour?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. Dogs are honored guests on Gothic Walks. Bring a leash and cleanup bags.",
      },
    },
    {
      "@type": "Question",
      name: "What should I wear or bring on the tour?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Comfortable walking shoes and layers appropriate to the weather. Savannah evenings can surprise you in either direction. If rain is in the forecast, bring an umbrella.",
      },
    },
    {
      "@type": "Question",
      name: "What is the weather policy for Gothic Walks?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Gothic Walks runs in light rain — a little drizzle doesn't stop us. In cases of dangerous weather like lightning or severe storms, guests will be notified by text and offered a reschedule or full refund.",
      },
    },
    {
      "@type": "Question",
      name: "What is the cancellation policy for Gothic Walks?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Full refund with 24 hours notice before your tour time. No refunds for no-shows or for bookings made within 24 hours of the tour start time. Contact us directly to cancel.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need to book in advance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Tours regularly sell out, especially on weekends. We recommend booking as early as possible. We accept reservations up to an hour before the tour start time.",
      },
    },
    {
      "@type": "Question",
      name: "Can I take photos and videos on the Gothic Walks tour?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Please do. Guests regularly capture things on camera that weren't visible at the time — shadows in windows, shapes in doorways, light with no obvious source. Keep your camera ready.",
      },
    },
    {
      "@type": "Question",
      name: "Are there restroom breaks during the tour?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We typically stop near restrooms mid-tour. Don't suffer in silence — just ask.",
      },
    },
    {
      "@type": "Question",
      name: "What if I am running late to the Gothic Walks tour?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We start on time to honor everyone's evening. If you're running behind, reach out and we'll do our best to help you catch up with the group.",
      },
    },
    {
      "@type": "Question",
      name: "Should I tip my Gothic Walks guide?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our guides pour everything into the experience. If they earned it, they'll gratefully accept.",
      },
    },
    {
      "@type": "Question",
      name: "What makes Gothic Walks different from other Savannah ghost tours?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Gothic Walks is a story-driven walking tour with no costumes, no jump scares, and no gimmicks. The focus is on Savannah's real history — the documented events, the people, and the places — told at a pace that lets the city's atmosphere do most of the work.",
      },
    },
    {
      "@type": "Question",
      name: "What if a ghost follows me home after the tour?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We recommend sage, cedar, and a strong pour of something you enjoy. Beyond that, you're on your own.",
      },
    },
  ],
};

const stops = [
  {
    name: "Madison Square",
    subtitle: "Where we begin",
    teaser:
      "One of Savannah's most haunted squares and one of its most beautiful. The atmosphere here sets the tone for everything that follows. Something about this particular patch of the city feels different after dark. We begin here deliberately.",
  },
  {
    name: "The Old Sorrel-Weed House",
    subtitle: "Widely considered the most haunted building in Savannah",
    teaser:
      "Built in 1838, it carries the weight of generations — of wealth, of tragedy, and of lives that may not have fully departed. Paranormal investigators have documented some of the most consistent and compelling activity in the city here. The history alone is unsettling. What some guests experience nearby is something else entirely.",
  },
  {
    name: "Mercer Williams House",
    subtitle: "Monterey Square",
    teaser:
      "Made famous by Midnight in the Garden of Good and Evil — a book about a very real murder, in a very real place. Jim Williams lived here, threw legendary parties here, and faced trial four times for a death that occurred within these walls. The house is grand, elegant, and quietly charged. Most guests leave with the distinct feeling they weren't quite alone in the garden.",
  },
  {
    name: "Old Candler Hospital",
    subtitle: "Savannah's oldest hospital — and one of its darkest",
    teaser:
      "Chartered in 1804, Candler was ground zero for Savannah's yellow fever epidemics — waves of disease that claimed thousands in a city that had no idea how to stop them. It later served as a Civil War hospital and POW camp. Beneath the building runs a tunnel. What it was used for, and what may still move through it, is a story best told after dark.",
  },
  {
    name: "432 Abercorn Street",
    subtitle: "Calhoun Square",
    teaser:
      "No name. Just an address. That's how most people know it — which tells you something. Built in 1868 on ground that should never have been built upon, this house has accumulated more dark legend per square foot than almost anywhere else in the city. Some of it is myth. Some of it is documented. We'll tell you which is which, and let you decide what to make of what remains.",
  },
  {
    name: "Hamilton Turner Inn",
    subtitle: "Lafayette Square",
    teaser:
      "One of Savannah's finest Victorian mansions, built in 1873 for a man who made enemies as easily as he made money. The house changed hands under circumstances that left marks — on its history, and perhaps on its halls. Guests staying at the inn have reported things that don't make it into the brochure.",
  },
  {
    name: "Andrew Low House",
    subtitle: "Lafayette Square",
    teaser:
      "A home connected to some of the most significant figures in Savannah's history — and to some of its most persistent apparitions. The Low family's story touches war, loss, and a city forever changed. Several of those who passed through these rooms may not have fully left.",
  },
];

export default function TourPage() {
  return (
    <>
      <Script
        id="json-ld-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-[#141210] text-[#e8e2d8]">

        <header className="border-b border-[#2a2520] bg-[#141210]/95 backdrop-blur-sm">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
            <Link
              href="/"
              className="text-2xl italic tracking-[0.12em] text-[#e8e2d8] [font-family:var(--font-display)]"
            >
              Gothic Walks
            </Link>
            <nav className="hidden items-center gap-8 text-sm uppercase tracking-[0.2em] text-[#7a7268] md:flex [font-family:var(--font-label)]">
              <Link href="/tour" className="transition hover:text-[#e8e2d8]">The Tour</Link>
              <Link href="/book" className="transition hover:text-[#e8e2d8]">Book</Link>
              <Link href="/tour#faq" className="transition hover:text-[#e8e2d8]">FAQ</Link>
              <Link href="/guide" className="transition hover:text-[#e8e2d8]">Become a Guide</Link>
            </nav>
            <Link href="/book" className="gw-btn-light-sm">
              Book Now
            </Link>
          </div>
        </header>

        {/* Hero */}
        <section className="mx-auto max-w-4xl px-6 py-20 md:py-28">
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.22em] text-[#990000] [font-family:var(--font-label)]">
            Savannah After Dark
          </p>
          <h1 className="text-5xl font-normal leading-[1.0] tracking-[-0.025em] text-[#f0ebe0] md:text-7xl [font-family:var(--font-display)]">
            Savannah's history is dark enough without embellishment.
          </h1>
          <p className="mt-8 text-xl leading-8 text-[#b0a898] [font-family:var(--font-body)]">
            Gothic Walks is a 90-minute small-group walking tour through the
            squares, streets, and landmarks of Savannah's Historic District.
            No costumes. No jump scares. No actors. Just the city, the
            stories, and a guide who knows the difference between legend and
            history — and when that difference stops mattering.
          </p>
          <div className="mt-10">
            <Link href="/book" className="gw-btn-light">Reserve Your Spot</Link>
          </div>
        </section>

        {/* Tour details strip */}
        <section className="border-y border-[#2a2520] bg-[#1c1916]">
          <div className="mx-auto grid max-w-7xl gap-0 px-6 py-8 md:grid-cols-4">
            {[
              "90-minute walking tour",
              "Limited to 15 guests",
              "Starts at Madison Square",
              "Tours run nightly",
            ].map((item, i) => (
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

        {/* What to expect */}
        <section className="mx-auto max-w-4xl px-6 py-20">
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.22em] text-[#990000] [font-family:var(--font-label)]">
            What to expect
          </p>
          <h2 className="text-4xl font-normal leading-[1.05] tracking-[-0.02em] text-[#f0ebe0] md:text-5xl [font-family:var(--font-display)]">
            The pace is deliberate.
            <span className="italic"> The city grows quieter as we move.</span>
          </h2>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <p className="text-lg leading-8 text-[#b0a898] [font-family:var(--font-body)]">
              We move through Savannah's Historic District on foot, stopping
              at some of the most documented and storied locations in the city.
              The tour covers roughly one mile at an easy pace, with time at
              each stop for the story to land.
            </p>
            <p className="text-lg leading-8 text-[#b0a898] [font-family:var(--font-body)]">
              Groups are limited to 15 guests. This isn't an accident — smaller
              groups mean better sightlines, better storytelling, and the kind
              of atmosphere that often disappears the moment you add a crowd. By the
              end of the night, most guests leave with at least one moment they
              can't quite explain.
            </p>
          </div>
        </section>

        {/* Stops */}
        <section className="border-t border-[#2a2520]">
          <div className="mx-auto max-w-4xl px-6 py-20">
            <p className="mb-6 text-sm font-semibold uppercase tracking-[0.22em] text-[#990000] [font-family:var(--font-label)]">
              The route
            </p>
            <h2 className="text-4xl font-normal leading-[1.05] tracking-[-0.02em] text-[#f0ebe0] md:text-5xl [font-family:var(--font-display)]">
              Several more terrifying stops along the way.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#b0a898] [font-family:var(--font-body)]">
              The confirmed stops below are anchors of the tour. Additional
              stops vary by night and guide — each with its own darkness, its
              own history, and its own reasons to make you look twice over
              your shoulder.
            </p>

            <div className="mt-12 space-y-0">
              {stops.map((stop, i) => (
                <div
                  key={stop.name}
                  className={`py-10 ${i > 0 ? "border-t border-[#2a2520]" : ""}`}
                >
                  <div className="grid gap-4 md:grid-cols-[1fr_2fr]">
                    <div>
                      <h3 className="text-2xl font-normal tracking-[-0.01em] text-[#f0ebe0] [font-family:var(--font-display)]">
                        {stop.name}
                      </h3>
                      <p className="mt-3 text-base uppercase tracking-[0.16em] text-[#7a7268] [font-family:var(--font-label)]">
                        {stop.subtitle}
                      </p>
                    </div>
                    <p className="text-lg leading-8 text-[#b0a898] [font-family:var(--font-body)]">
                      {stop.teaser}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA band */}
        <section className="border-y border-[#2a2520] bg-[#1c1916]">
          <div className="mx-auto max-w-4xl px-6 py-20 text-center">
            <h2 className="text-4xl font-normal leading-[1.05] tracking-[-0.02em] text-[#f0ebe0] md:text-5xl [font-family:var(--font-display)]">
              Tours are limited to 15 guests.<br />
              <span className="italic">Reserve in advance.</span>
            </h2>
            <p className="mx-auto mt-7 gw-centered-body text-[#b0a898]">
              Weekend tours sell out regularly. If you have a date in mind,
              booking early is the only way to guarantee your spot.
            </p>
            <div className="mt-10 flex justify-center">
              <Link href="/book" className="gw-btn-light">Reserve Your Spot</Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mx-auto max-w-4xl px-6 py-20">
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.22em] text-[#990000] [font-family:var(--font-label)]">
            Before you go
          </p>
          <h2 className="text-4xl font-normal leading-[1.05] tracking-[-0.02em] text-[#f0ebe0] md:text-5xl [font-family:var(--font-display)]">
            Common questions.
          </h2>

          <div className="mt-12 space-y-0">
            {[
              ["Where does the tour start?", "Madison Square in Savannah's Historic District. Exact meeting point details are confirmed after booking. Plan to arrive 10–15 minutes early — we start on time to respect everyone's evening."],
              ["How long is the tour?", "Approximately 90 minutes at a relaxed, story-driven pace. The route covers roughly one mile on foot."],
              ["How many people are on the tour?", "Groups are limited to 15 guests. Smaller groups mean better storytelling, more atmosphere, and a more personal experience."],
              ["Is it scary?", "The tour is atmospheric and historically detailed, not a jump-scare attraction. The stories are real, the history is dark, and most guests find the experience genuinely unsettling in the best possible way."],
              ["Is it suitable for children?", "Best suited for guests 12 and older. The content involves mature historical themes including death, disease, and violence, but we also know how to read the room."],
              ["Can I bring my dog?", "Absolutely. Well behaved dogs are honored guests on Gothic Walks. Just bring cleanup bags and a leash — Savannah's squares are beautiful, and so is not stepping in anything."],
              ["What should I wear?", "Comfortable walking shoes, and layers appropriate to the weather. Savannah evenings can surprise you in either direction. If rain is in the forecast, bring an umbrella — we walk in light rain. We only cancel for dangerous weather like lightning or severe storms, in which case you'll hear from us directly with a reschedule or full refund."],
              ["What's the weather policy?", "A little drizzle doesn't stop us. If dangerous weather forces a cancellation — lightning, severe storms, torrential rain — you'll receive a text offering a reschedule or full refund. If you haven't heard from us, the tour is on."],
              ["What's the cancellation policy?", "Full refund with 24 hours notice before your tour time. No refunds for no-shows or for bookings made within 24 hours of the tour start time. To cancel, contact us directly."],
              ["Do I need to book in advance?", "Yes. Tours regularly sell out, especially on weekends. We recommend booking as early as possible. We accept reservations up to an hour before the tour start time."],
              ["Can I take photos and videos?", "Yes. Please do. Savannah after dark has a way of showing up differently on camera than it does to the naked eye. Guests regularly capture things in photographs that weren't visible when the shutter clicked — shadows in windows, shapes in doorways, light where there wasn't any. We can't explain all of it. We just recommend keeping your camera ready."],
              ["Are restroom breaks available?", "Yes. We are happy to stop for a restroom break. Don't suffer in silence — just ask."],
              ["Running late?", "We start on time to honor everyone's evening. If you're running behind, reach out and we'll do our best to help you catch up with the group."],
              ["Should I tip my guide?", "Gothic Walks guides pour everything into the experience. If they earned it, they'll gratefully accept."],
              ["What if a ghost follows me home?", "We recommend sage, cedar, and a strong pour of something you enjoy. Beyond that, you're on your own."],
            ].map(([q, a], i) => (
              <div
                key={q}
                className={`grid gap-3 py-8 md:grid-cols-[2fr_3fr] ${i > 0 ? "border-t border-[#2a2520]" : ""}`}
              >
                <p className="text-lg font-normal text-[#f0ebe0] [font-family:var(--font-display)]">
                  {q}
                </p>
                <p className="text-lg leading-8 text-[#b0a898] [font-family:var(--font-body)]">
                  {a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Footer CTA */}
        <section className="border-t border-[#2a2520] bg-[#1c1916] px-6 py-20 text-center">
          <h2 className="text-4xl font-normal leading-[1.05] tracking-[-0.02em] text-[#f0ebe0] md:text-5xl [font-family:var(--font-display)]">
            <span className="italic">Savannah After Dark</span> — starting June 4.
          </h2>
          <div className="mt-10 flex justify-center">
            <Link href="/book" className="gw-btn-light">Book Your Tour</Link>
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