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

        <section className="mx-auto max-w-3xl px-6 pt-12 pb-20 md:pt-16 md:pb-28">
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.22em] text-[#990000] [font-family:var(--font-label)]">
            Savannah After Dark
          </p>
          <h1
            className="text-5xl font-normal leading-tight tracking-[-0.025em] text-[#f0ebe0] md:text-6xl [font-family:var(--font-display)]"
            style={{ marginBottom: '1.5rem' }}
          >
            Reserve your spot.
          </h1>
          <p className="text-xl leading-8 text-[#b0a898] [font-family:var(--font-body)]">
            The next available tours start June 4th. Book today to secure your preferred date and time.
          </p>

          <div
            className="mt-8 rounded-[1.5rem] border border-[#2a2520] bg-[#1c1916]"
            style={{ padding: '2rem' }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#7a7268] [font-family:var(--font-label)]">
              Tour details
            </p>

            <dl className="mt-6 grid gap-6 sm:grid-cols-2">
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

            <div
              className="rounded-2xl border border-[#2a2520] bg-[#231f1b] p-5"
              style={{ marginTop: '2rem' }}
            >
              <p className="text-sm uppercase tracking-[0.18em] text-[#8a6f47] [font-family:var(--font-label)]">
                What happens next
              </p>
              <p className="text-lg leading-7 text-[#b0a898] [font-family:var(--font-body)]" style={{ marginTop: '0.75rem' }}>
                You&apos;ll continue to our secure booking page to choose your
                date, confirm availability, and complete your reservation.
              </p>
            </div>

            <div className="flex justify-center" style={{ marginTop: '2rem' }}>
              <a href={bookingUrl} className="gw-btn-light">
                Continue to Secure Booking
              </a>
            </div>

                       <p
              className="text-center text-sm uppercase tracking-[0.2em] text-[#8a6f47] [font-family:var(--font-label)]"
              style={{ marginTop: '1rem', marginBottom: '0' }}
            >
              Tours are limited. Reserve in advance.
            </p>
          </div>

        </section>

      </main>
    </>
  );
}