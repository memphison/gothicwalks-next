// app/book/page.tsx
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Script from "next/script";

export const metadata = {
  title: "Book Your Tour | Gothic Walks Savannah",
  description:
    "Reserve your spot on Savannah After Dark, a 90-minute small-group ghost tour starting at Madison Square. Book in advance.",
  alternates: { canonical: "https://gothicwalks.com/book" },
  openGraph: {
    title: "Book Your Tour | Gothic Walks Savannah",
    description:
      "Reserve your spot on Savannah After Dark, a 90-minute small-group ghost tour starting at Madison Square. Book in advance.",
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
    "A 90-minute small-group walking ghost tour through Savannah's haunted squares and landmarks, starting at Madison Square.",
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

const bookingUrl =
  "https://book.gothicwalks.com/details/424489/savannah-after-dark";

const quickFacts = [
  ["Duration", "90 minutes"],
  ["Distance", "About 1 mile"],
  ["Group Size", "Limited to 15"],
  ["Meet", "Madison Square"],
];

const details = [
  ["Tour", "Savannah After Dark"],
  ["Starts", "Madison Square"],
  ["Length", "90 minutes"],
  ["Pace", "Gentle walk, frequent stops"],
  ["Style", "History, atmosphere, no gimmicks"],
  ["Booking", "Choose your date and time securely"],
];

export default function BookPage() {
  return (
    <>
      <Script
        id="json-ld-booking"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-[#14100c] text-[#efe6d4]">
       <Header reserveHref="https://book.gothicwalks.com/details/424489/savannah-after-dark" />

        <section className="relative overflow-hidden px-5 pb-20 pt-28 md:px-8 md:pb-28 md:pt-36">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-55"
            style={{
              backgroundImage:
                "linear-gradient(180deg, rgba(20,16,12,.72), rgba(20,16,12,.94)), url('/images/gothic-hero.jpg')",
            }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_20%,rgba(216,162,74,0.16),transparent_30%)]" />

          <div className="relative z-10 mx-auto grid max-w-6xl gap-12 md:grid-cols-[1.05fr_0.95fr] md:gap-16">
            <div>
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.32em] text-[#d8a24a] [font-family:var(--font-label)]">
                Savannah After Dark
              </p>

              <h1 className="max-w-3xl text-[3.7rem] font-normal leading-[0.9] tracking-[-0.04em] text-[#efe6d4] md:text-[6.7rem] [font-family:var(--font-display)]">
                Reserve your walk.
              </h1>

              <p className="mt-6 max-w-2xl text-xl leading-8 text-[#e7ddca] md:text-2xl [font-family:var(--font-body)]">
                Book your spot for a small-group ghost walk through Savannah
                after dark. Choose your date, confirm availability, and receive
                the meeting details with your confirmation.
              </p>

              <div className="mt-9">
                <a href={bookingUrl} className="gw-btn-gold">
                  Continue to Secure Booking
                </a>
              </div>

              <div className="mt-10 grid max-w-2xl grid-cols-2 gap-5 border-t border-[#d8a24a]/25 pt-6 sm:grid-cols-4">
                {quickFacts.map(([label, value]) => (
                  <div key={label}>
                    <div className="text-2xl leading-none text-[#e7c082] [font-family:var(--font-display)]">
                      {value}
                    </div>
                    <div className="mt-2 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#b3a489] [font-family:var(--font-label)]">
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border border-[#d8a24a]/25 bg-[#1b1610]/85 p-7 shadow-2xl shadow-black/30 md:p-9">
              <h2 className="text-4xl font-normal leading-none text-[#efe6d4] [font-family:var(--font-display)]">
                Before you book
              </h2>

              <p className="mt-4 text-lg leading-8 text-[#cabfa6] [font-family:var(--font-body)]">
                This is a walking tour through the historic district. Wear
                comfortable shoes, arrive a few minutes early, and bring the
                kind of curiosity Savannah tends to reward.
              </p>

              <div className="my-8 border-t border-[#d8a24a]/20" />

              <dl className="space-y-5">
                {details.map(([label, value]) => (
                  <div
                    key={label}
                    className="grid grid-cols-[7.5rem_1fr] items-start gap-5"
                  >
                    <dt className="pt-[0.25rem] text-xs font-semibold uppercase leading-5 tracking-[0.18em] text-[#b3a489] [font-family:var(--font-label)]">
                      {label}
                    </dt>
                    <dd className="text-right text-xl leading-7 text-[#efe6d4] [font-family:var(--font-display)]">
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="mt-9 flex flex-col gap-4">
  <a href={bookingUrl} className="gw-btn-gold w-full">
    Check Dates & Reserve
  </a>

  <p className="text-center text-xs font-semibold uppercase tracking-[0.16em] text-[#b3a489] [font-family:var(--font-label)]">
    Tours are limited. Reserve in advance.
  </p>
</div>
            </div>
          </div>
        </section>

        <section className="bg-[#1b1610] px-5 py-16 md:px-8 md:py-24">
          <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3">
            {[
              [
                "No costume routine",
                "The walk is built around Savannah history, atmosphere, and darker local stories. No actors. No props.",
              ],
              [
                "Small groups",
                "You should be able to hear the guide, ask a question, and feel the city around you.",
              ],
              [
                "Real places",
                "Madison Square, historic homes, old streets, and the kind of details that do not fit on a postcard.",
              ],
            ].map(([title, copy]) => (
              <article key={title} className="border-t border-[#d8a24a]/25 pt-6">
                <h3 className="text-3xl font-normal text-[#efe6d4] [font-family:var(--font-display)]">
                  {title}
                </h3>
                <p className="mt-4 text-base leading-7 text-[#b3a489] [font-family:var(--font-body)]">
                  {copy}
                </p>
              </article>
            ))}
          </div>
        </section>

       <Footer />
      </main>
    </>
  );
}