import Link from "next/link";

const bookingUrl = "https://book.gothicwalks.com";

export default function BookPage() {
  return (
    <main className="min-h-screen bg-[#fbfaf7] text-[#171514]">
      <header className="border-b border-[#ddd6cb] bg-[#fbfaf7]/95">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link href="/" className="font-serif text-2xl tracking-[0.18em]">
            GOTHIC WALKS
          </Link>

          <Link
            href="/"
            className="text-sm uppercase tracking-[0.18em] text-[#5f5850]"
          >
            Back
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <p className="mb-5 text-sm uppercase tracking-[0.32em] text-[#9b825d]">
          Savannah After Dark
        </p>

        <h1 className="font-serif text-5xl leading-tight md:text-6xl">
          Reserve your spot.
        </h1>
  <p className="mt-6 text-lg leading-8 text-[#5f5850]">
          We&apos;re now booking tours starting June 4th.
        </p>
        <p className="mt-6 text-lg leading-8 text-[#5f5850]">
          You’ll continue to our secure booking page to choose your date, confirm
          availability, and complete your reservation.
        </p>

        <div className="mt-10 rounded-[1.5rem] border border-[#ddd6cb] bg-white p-7">
          <dl className="grid gap-5 text-sm uppercase tracking-[0.14em] text-[#5f5850] sm:grid-cols-2">
            <div>
              <dt className="text-[#9b825d]">Tour</dt>
              <dd className="mt-1 text-[#171514]">Savannah After Dark</dd>
            </div>

            <div>
              <dt className="text-[#9b825d]">Duration</dt>
              <dd className="mt-1 text-[#171514]">90 minutes</dd>
            </div>

            <div>
              <dt className="text-[#9b825d]">Group Size</dt>
              <dd className="mt-1 text-[#171514]">Limited to 15 guests</dd>
            </div>

            <div>
              <dt className="text-[#9b825d]">Meeting Area</dt>
              <dd className="mt-1 text-[#171514]">
                Johnson Square, Savannah
              </dd>
            </div>
          </dl>

          <a
            href={bookingUrl}
          className="mt-8 inline-flex w-full items-center justify-center rounded-full border border-[#171514] bg-[#fbfaf7] px-7 py-4 text-center text-sm font-semibold uppercase tracking-[0.16em] text-[#171514] transition hover:bg-[#171514] hover:!text-white"
          >
            Continue to Secure Booking
          </a>

          <p className="mt-5 text-sm leading-6 text-[#6f6962]">
            Bookings are handled through Rezgo. You’ll return to Gothic Walks
            after completing your reservation.
          </p>
        </div>
      </section>
    </main>
  );
}