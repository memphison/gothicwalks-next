// app/book/page.tsx
import Link from "next/link";
import Script from "next/script";

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

export default function BookPage() {
  return (
    <>
      <Script
        id="json-ld-booking"
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
            <Link
              href="/"
              className="text-sm uppercase tracking-[0.2em] text-[#7a7268] transition hover:text-[#e8e2d8] [font-family:var(--font-label)]"
            >
              Back
            </Link>
          </div>
        </header>

        <section className="mx-auto max-w-3xl px-6 pb-32 py-20 md:py-28">
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.22em] text-[#8a6f47] [font-family:var(--font-label)]">
            Savannah After Dark
          </p>
          <h1 className="text-5xl font-normal leading-tight tracking-[-0.025em] text-[#f0ebe0] md:text-6xl [font-family:var(--font-display)]">
            Reserve your spot.
          </h1>
          <p className="mt-7 text-xl leading-8 text-[#b0a898] [font-family:var(--font-body)]">
            Now booking tours starting June 4.
          </p>
          <p className="mt-3 text-xl leading-8 text-[#b0a898] [font-family:var(--font-body)]">
            Small groups. Better stories. No costumes, no jump scares, no
            rushing from stop to stop.
          </p>

          <div className="mt-12 rounded-[1.5rem] border border-[#2a2520] bg-[#1c1916] p-8">
            <dl className="grid gap-6 sm:grid-cols-2">
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

            <div className="mt-8 rounded-2xl border border-[#2a2520] bg-[#231f1b] p-5">
              <p className="text-sm uppercase tracking-[0.18em] text-[#8a6f47] [font-family:var(--font-label)]">
                What happens next
              </p>
              <p className="mt-3 text-lg leading-7 text-[#b0a898] [font-family:var(--font-body)]">
                You&apos;ll continue to our secure booking page to choose your
                date, confirm availability, and complete your reservation.
              </p>
            </div>

            <div className="mt-8 flex justify-center">
              <a href={bookingUrl} className="gw-btn-light">
                Continue to Secure Booking
              </a>
            </div>

            <p className="mt-5 text-center text-sm leading-6 text-[#7a7268] [font-family:var(--font-label)]">
              Bookings handled securely through Rezgo at book.gothicwalks.com
            </p>

            <p className="mt-8 text-center text-sm uppercase tracking-[0.2em] text-[#8a6f47] [font-family:var(--font-label)]">
              Tours are limited. Reserve in advance.
            </p>
          </div>
        </section>

      </main>
    </>
  );
}