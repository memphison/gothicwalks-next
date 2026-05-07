// app/book/page.tsx
import Link from "next/link";
import Script from "next/script";
import Header from "@/app/components/Header";

export const metadata = {
  title: "Book Your Tour | Gothic Walks Savannah",
  description:
    "Reserve your spot on Savannah After Dark — a 90-minute small-group ghost tour starting at Madison Square. Limited to 15 guests. Book now.",
  alternates: { canonical: "https://gothicwalks.com/book" },
  openGraph: {
    title: "Book Your Tour | Gothic Walks Savannah",
    description:
      "Reserve your spot on Savannah After Dark — a 90-minute small-group ghost tour starting at Madison Square. Limited to 15 guests. Book now.",
    url: "https://gothicwalks.com/book",
    siteName: "Gothic Walks",
    locale: "en_US",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "Savannah After Dark Ghost Tour",
  description:
    "A 90-minute small-group walking ghost tour through Savannah's most haunted squares and landmarks, starting at Madison Square.",
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  location: {
    "@type": "Place",
    name: "Madison Square",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Bull St & Harris St",
      addressLocality: "Savannah",
      addressRegion: "GA",
      postalCode: "31401",
      addressCountry: "US",
    },
  },
  organizer: {
    "@type": "Organization",
    name: "Gothic Walks",
    url: "https://gothicwalks.com",
  },
  offers: {
    "@type": "Offer",
    url: "https://book.gothicwalks.com/details/424489/savannah-after-dark",
    availability: "https://schema.org/InStock",
    validFrom: "2025-01-01",
  },
};

const bookingUrl = "https://book.gothicwalks.com/details/424489/savannah-after-dark";

const quickFacts = [
  { label: "Starts", value: "June 4th" },
  { label: "Duration", value: "90 min" },
  { label: "Group", value: "15 guests" },
  { label: "Meet", value: "Madison Square" },
];

export default function BookPage() {
  return (
    <>
      <Script
        id="json-ld-booking"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-[#141210] text-[#e8e2d8]">

        <Header />

        <section className="mx-auto max-w-3xl px-6 pt-10 pb-20 md:pt-16 md:pb-28">

          {/* Label */}
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-[#990000] [font-family:var(--font-label)]">
            Savannah After Dark
          </p>

          {/* Headline — breaks on mobile for impact */}
          <h1 className="gw-book-headline">
            Reserve<br className="md:hidden" /> your spot.
          </h1>

          {/* Sub-copy — brighter on mobile */}
          <p className="gw-book-subtext mt-5">
            Small-group ghost walks through Savannah&rsquo;s most haunted squares and streets. Limited availability. Book in advance.
          </p>

          {/* Quick-facts strip — mobile-prominent, desktop subtler */}
          <div className="gw-quick-facts mt-7">
            {quickFacts.map(({ label, value }) => (
              <div key={label} className="gw-quick-fact">
                <span className="gw-quick-fact-label">{label}</span>
                <span className="gw-quick-fact-value">{value}</span>
              </div>
            ))}
          </div>

          {/* Primary CTA — visible above the fold on mobile */}
          <div className="mt-8 flex justify-center md:hidden">
            <a href={bookingUrl} className="gw-btn-book-primary">
              Book Now
            </a>
          </div>

          {/* Detail card */}
          <div className="gw-book-card mt-10 md:mt-8">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#7a7268] [font-family:var(--font-label)]">
              Tour details
            </p>

            <dl className="mt-5 grid gap-5 sm:grid-cols-2">
              {[
                ["Tour", "Savannah After Dark"],
                ["Duration", "90 minutes"],
                ["Group Size", "Limited to 15 guests"],
                ["Meeting Area", "Madison Square, Savannah"],
              ].map(([label, value]) => (
                <div key={label}>
                  <dt className="text-sm uppercase tracking-[0.18em] text-[#8a6f47] [font-family:var(--font-label)]">
                    {label}
                  </dt>
                  <dd className="mt-1 text-lg text-[#e8e2d8] [font-family:var(--font-body)]">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-6 rounded-2xl border border-[#2a2520] bg-[#231f1b] p-5">
              <p className="text-sm uppercase tracking-[0.18em] text-[#8a6f47] [font-family:var(--font-label)]">
                What happens next
              </p>
              <p className="gw-book-card-body mt-3">
                You&apos;ll continue to our secure booking page to choose your
                date, confirm availability, and complete your reservation.
              </p>
            </div>

            <div className="mt-7 flex justify-center">
              <a href={bookingUrl} className="gw-btn-light">
                Continue to Secure Booking
              </a>
            </div>

            <p className="mt-6 text-center text-sm uppercase tracking-[0.2em] text-[#8a6f47] [font-family:var(--font-label)]">
              Tours are limited. Reserve in advance.
            </p>
          </div>

        </section>

      </main>
    </>
  );
}
