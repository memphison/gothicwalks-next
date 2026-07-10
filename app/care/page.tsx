"use client";

// app/care/page.tsx
// Post-tour page: Tip your guide -> Leave a review -> Stay in touch.
// Supports ?g=<guide-slug> so each guide's card QR opens with their tip section.
// Before launch: swap GUIDE PHOTO and FORMSPREE_ID placeholders.

import { useEffect, useState } from "react";

const FORMSPREE_ID = "YOUR_NEW_FORM_ID"; // create a new Formspree form for this, don't reuse the contact form
const GOOGLE_REVIEW_URL =
  "https://search.google.com/local/writereview?placeid=ChIJswE-vM2KOC4R9HlkSGnHMog";

const GUIDES = [
  {
    slug: "jonita",
    name: "Jonita",
    photo: "/guides/jonita.jpg", // headshot, square, ~600px
    venmo: "https://venmo.com/u/Jonita-Aadland",
    cashapp: "https://cash.app/$JonitaAadland",
  },
  // add future guides here
];

export default function CarePage() {
  const [guide, setGuide] = useState(GUIDES[0]);
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");

  useEffect(() => {
    const slug = new URLSearchParams(window.location.search).get("g");
    const match = GUIDES.find((g) => g.slug === slug);
    if (match) setGuide(match);
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const data = new FormData(e.currentTarget);
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      setStatus(res.ok ? "done" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <main className="min-h-screen bg-[#101014] text-[#e9e4d6] antialiased">
      <div className="mx-auto flex max-w-md flex-col gap-14 px-6 py-14">

        {/* Header */}
        <header className="flex flex-col items-center gap-4 text-center">
          <p className="font-serif text-xl uppercase tracking-[0.35em]">
            Gothic Walks
          </p>
          <span aria-hidden className="h-px w-10 bg-[#9b8757]" />
          <h1 className="font-serif text-3xl leading-snug">
            Thank you for walking with&nbsp;us.
          </h1>
          <p className="text-sm leading-relaxed text-[#a8a294]">
            The city did the haunting. A few small things before the night lets you go.
          </p>
        </header>

        {/* 1. Tip your guide */}
        <section aria-labelledby="tip" className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <span className="font-serif text-sm tracking-[0.25em] text-[#9b8757]">I</span>
            <h2 id="tip" className="font-serif text-xl tracking-wide">
              Tip your guide
            </h2>
          </div>

          <div className="flex flex-col items-center gap-5 border border-[#2a2a31] bg-[#16161c] px-6 py-8">
            <img
              src={guide.photo}
              alt={`${guide.name}, Gothic Walks guide`}
              className="h-28 w-28 rounded-full border border-[#9b8757] object-cover"
            />
            <div className="flex flex-col items-center gap-1 text-center">
              <p className="font-serif text-2xl">{guide.name}</p>
              <p className="text-xs uppercase tracking-[0.2em] text-[#a8a294]">
                Your storyteller tonight
              </p>
            </div>
            <div className="flex w-full flex-col gap-3">
              <a href={guide.venmo} className="block w-full border border-[#9b8757] py-3 text-center font-serif tracking-wide transition-colors hover:bg-[#9b8757] hover:text-[#101014]">
                Tip with Venmo
              </a>
              <a href={guide.cashapp} className="block w-full border border-[#2a2a31] py-3 text-center font-serif tracking-wide transition-colors hover:border-[#9b8757]">
                Tip with Cash App
              </a>
            </div>
            <p className="text-xs leading-relaxed text-[#7d786c]">
              100% goes to {guide.name}.
            </p>
          </div>
        </section>

        {/* 2. Leave a review */}
        <section aria-labelledby="review" className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <span className="font-serif text-sm tracking-[0.25em] text-[#9b8757]">II</span>
            <h2 id="review" className="font-serif text-xl tracking-wide">
              Tell the next traveler
            </h2>
          </div>
          <div className="flex flex-col gap-5 border border-[#2a2a31] bg-[#16161c] px-6 py-8">
            <p className="text-sm leading-relaxed text-[#c9c3b2]">
              We keep our groups small, so reviews from guests like you are how
              the next curious traveler finds us. One minute, and we read every one.
            </p>
            <a
              href={GOOGLE_REVIEW_URL}
              className="block w-full bg-[#9b8757] py-3 text-center font-serif tracking-wide text-[#101014] transition-opacity hover:opacity-90"
            >
              Leave a Google review
            </a>
          </div>
        </section>

        {/* 3. Stay in touch */}
        <section aria-labelledby="stay" className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <span className="font-serif text-sm tracking-[0.25em] text-[#9b8757]">III</span>
            <h2 id="stay" className="font-serif text-xl tracking-wide">
              Keep one ear on Savannah
            </h2>
          </div>

          {status === "done" ? (
            <div className="flex flex-col items-center gap-3 border border-[#9b8757] bg-[#16161c] px-6 py-10 text-center">
              <p className="font-serif text-xl">You&rsquo;re on the list.</p>
              <p className="text-sm text-[#a8a294]">
                We&rsquo;ll write when there&rsquo;s something worth telling.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 border border-[#2a2a31] bg-[#16161c] px-6 py-8">
              <p className="text-sm leading-relaxed text-[#c9c3b2]">
                New routes, new stories, first word on October nights. No noise, no spam.
              </p>
              <label className="flex flex-col gap-2 text-xs uppercase tracking-[0.2em] text-[#a8a294]">
                Email
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="you@example.com"
                  className="border border-[#2a2a31] bg-[#101014] px-4 py-3 text-base normal-case tracking-normal text-[#e9e4d6] placeholder-[#5d594f] focus:border-[#9b8757] focus:outline-none"
                />
              </label>
              <label className="flex flex-col gap-2 text-xs uppercase tracking-[0.2em] text-[#a8a294]">
                Mobile (optional)
                <input
                  type="tel"
                  name="phone"
                  placeholder="(912) 555-0100"
                  className="border border-[#2a2a31] bg-[#101014] px-4 py-3 text-base normal-case tracking-normal text-[#e9e4d6] placeholder-[#5d594f] focus:border-[#9b8757] focus:outline-none"
                />
              </label>
              <label className="flex items-start gap-3 text-xs leading-relaxed text-[#a8a294]">
                <input type="checkbox" name="sms_consent" value="yes" className="mt-1 accent-[#9b8757]" />
                <span>
                  I agree to receive occasional texts from Gothic Walks (about 1&ndash;2
                  per month). Msg &amp; data rates may apply. Reply STOP to opt out.
                </span>
              </label>
              <input type="hidden" name="guide" value={guide.slug} />
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full border border-[#9b8757] py-3 font-serif tracking-wide transition-colors hover:bg-[#9b8757] hover:text-[#101014] disabled:opacity-50"
              >
                {status === "sending" ? "One moment\u2026" : "Walk with us again"}
              </button>
              {status === "error" && (
                <p className="text-xs text-[#c07a6a]">
                  Something slipped in the dark. Try once more.
                </p>
              )}
            </form>
          )}
        </section>

        {/* Footer */}
        <footer className="flex flex-col items-center gap-3 pb-4 text-center">
          <span aria-hidden className="h-px w-10 bg-[#9b8757]" />
          <p className="font-serif text-sm italic text-[#a8a294]">
            The city does the haunting. We just tell the story.
          </p>
          <p className="text-xs text-[#5d594f]">
            Gothic Walks &middot; Savannah, Georgia &middot; gothicwalks.com
          </p>
        </footer>
      </div>
    </main>
  );
}