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

const buttonClass =
  "mt-8 inline-flex w-full items-center justify-center rounded-full border border-[#0f0d0b] bg-transparent px-7 py-4 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-[#0f0d0b] transition hover:bg-[#0f0d0b] hover:text-[#f5f0e8]";

export default function BookPage() {
  return (
    <>
      <Script
        id="json-ld-booking"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-[#f5f0e8] text-[#0f0d0b]">

        <header className="border-b border-[#d8d0c4] bg-[#f5f0e8]/95">
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

        <section className="mx-auto max-w-3xl px-6 py-20 md:py-28">
          <p className="label mb-6">Savannah After Dark</p>
          <h1
            style={{ fontFamily: "var(--font-display)" }}
            className="text-6xl font-normal leading-tight tracking-[-0.025em] md:text-7xl"
          >
            Reserve your spot.
          </h1>
          <p
            style={{ fontFamily: "var(--font-body)" }}
            className="mt-7 text-xl leading-8 text-[#6b6258]"
          >
            Now booking tours starting June 4.
          </p>
          <p
            style={{ fontFamily: "var(--font-body)" }}
            className="mt-3 text-xl leading-8 text-[#6b6258]"
          >
            Small groups. Better stories. No costumes, no jump scares, no
            rushing from stop to stop.
          </p>

          <div className="mt-12 rounded-[1.5rem] border border-[#d8d0c4] bg-[#faf7f2] p-8">
            <dl className="grid gap-6 sm:grid-cols-2">
              {[
                ["Tour", "Savannah After Dark"],
                ["Duration", "90 minutes"],
                ["Group Size", "Limited to 15 guests"],
                ["Meeting Area", "Madison Square, Savannah"],
              ].map(([label, value]) => (
                <div key={label}>
                  <dt
                    style={{ fontFamily: "var(--font-label)" }}
                    className="text-xs uppercase tracking-[0.18em] text-[#8a6f47]"
                  >
                    {label}
                  </dt>
                  <dd
                    style={{ fontFamily: "var(--font-body)" }}
                    className="mt-1 text-base text-[#0f0d0b]"
                  >
                    {value}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-8 rounded-2xl border border-[#d8d0c4] bg-[#ede7d9] p-5">
              <p
                style={{ fontFamily: "var(--font-label)" }}
                className="text-xs uppercase tracking-[0.18em] text-[#8a6f47]"
              >
                What happens next
              </p>
              <p
                style={{ fontFamily: "var(--font-body)" }}
                className="mt-3 text-base leading-7 text-[#6b6258]"
              >
                You'll continue to our secure booking page to choose your date,
                confirm availability, and complete your reservation.
              </p>
            </div>

            <a href={bookingUrl} className={buttonClass}>
              Continue to Secure Booking
            </a>

            <p
              style={{ fontFamily: "var(--font-label)" }}
              className="mt-5 text-xs leading-6 text-[#9a8f82]"
            >
              Bookings handled securely through Rezgo at book.gothicwalks.com
            </p>
          </div>

          <p
            style={{ fontFamily: "var(--font-label)" }}
            className="mt-8 text-center text-xs uppercase tracking-[0.2em] text-[#8a6f47]"
          >
            Tours are limited. Reserve in advance.
          </p>
        </section>

      </main>
    </>
  );
}