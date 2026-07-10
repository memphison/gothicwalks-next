"use client";

// app/care/page.tsx
// Post-tour page: Tip your guide -> Leave a review -> Stay in touch.
// Supports ?g=<guide-slug> so each guide's card QR opens with their tip section.
// Uses divs (not section/header) and explicit alignment so the site's global
// element styles can't leak in. Sized for night reading and thumb taps.
// Before launch: swap FORMSPREE_ID placeholder.

import { useEffect, useState } from "react";

const FORMSPREE_ID = "YOUR_NEW_FORM_ID"; // create a new Formspree form for this, don't reuse the contact form
const GOOGLE_REVIEW_URL =
  "https://search.google.com/local/writereview?placeid=ChIJswE-vM2KOC4R9HlkSGnHMog";

const GUIDES = [
  {
    slug: "jonita",
    name: "Jonita",
    photo: "/guides/jonita.jpg",
    venmo: "https://venmo.com/u/Jonita-Aadland",
    cashapp: "https://cash.app/$JonitaAadland",
  },
  // add future guides here
];

function SectionTitle({ numeral, children }: { numeral: string; children: React.ReactNode }) {
  return (
    <div className="flex w-full flex-row items-baseline justify-start gap-4 text-left">
      <span className="font-serif text-base tracking-[0.25em] text-[#9b8757]">{numeral}</span>
      <h2 className="font-serif text-3xl tracking-wide text-[#f2eee2]">{children}</h2>
    </div>
  );
}

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

  const tipButton =
    "block w-full py-5 text-center font-serif text-xl tracking-wide transition-colors";
  const inputStyle =
    "w-full border border-[#3a3a42] bg-[#101014] px-4 py-4 text-lg normal-case tracking-normal text-[#f2eee2] placeholder-[#6d695e] focus:border-[#9b8757] focus:outline-none";

  return (
    <main className="min-h-screen bg-[#101014] text-[#f2eee2] antialiased">
      <div className="mx-auto flex w-full max-w-md flex-col items-stretch gap-12 px-5 py-12 text-left">

        {/* Header */}
        <div className="flex w-full flex-col items-center gap-4 text-center">
          <p className="font-serif text-xl uppercase tracking-[0.35em]">Gothic Walks</p>
          <span aria-hidden className="h-px w-10 bg-[#9b8757]" />
          <h1 className="font-serif text-4xl leading-snug">
            Thank you for walking with&nbsp;us.
          </h1>
          <p className="text-xl leading-relaxed text-[#b5af9f]">
            The city did the haunting. A few small things before the night lets you go.
          </p>
        </div>

        {/* 1. Tip your guide */}
        <div className="flex w-full flex-col items-stretch gap-6">
          <SectionTitle numeral="I">Tip your guide</SectionTitle>
          <p className="-mt-2 text-lg italic leading-relaxed text-[#b5af9f]">
            Never expected, always appreciated.
          </p>

          <div className="flex w-full flex-col items-center gap-6 border border-[#2a2a31] bg-[#16161c] px-5 py-8">
            <img
              src={guide.photo}
              alt={`${guide.name}, Gothic Walks guide`}
              className="h-32 w-32 rounded-full border border-[#9b8757] object-cover"
            />
            <div className="flex flex-col items-center gap-1 text-center">
              <p className="font-serif text-3xl">{guide.name}</p>
              <p className="text-sm uppercase tracking-[0.2em] text-[#b5af9f]">
                Your storyteller tonight
              </p>
            </div>
            <div className="flex w-full flex-col items-stretch gap-4">
              <a
                href={guide.venmo}
                className={`${tipButton} bg-[#9b8757] text-[#101014] hover:opacity-90`}
              >
                Tip with Venmo
              </a>
              <a
                href={guide.cashapp}
                className={`${tipButton} border border-[#9b8757] text-[#f2eee2] hover:bg-[#9b8757] hover:text-[#101014]`}
              >
                Tip with Cash App
              </a>
            </div>
            <p className="text-lg text-[#b5af9f]">100% goes to {guide.name}.</p>
          </div>
        </div>

        {/* 2. Leave a review */}
        <div className="flex w-full flex-col items-stretch gap-6">
          <SectionTitle numeral="II">Pass the story on</SectionTitle>
          <div className="flex w-full flex-col items-stretch gap-6 border border-[#2a2a31] bg-[#16161c] px-5 py-8">
            <p className="text-xl leading-relaxed text-[#d5cfbe]">
              We keep our groups small, so reviews from guests like you are how
              the next curious traveler finds us. One minute, and we read every one.
            </p>
            <a
              href={GOOGLE_REVIEW_URL}
              className={`${tipButton} bg-[#9b8757] text-[#101014] hover:opacity-90`}
            >
              Leave a Google review
            </a>
          </div>
        </div>

        {/* 3. Stay in touch */}
        <div className="flex w-full flex-col items-stretch gap-6">
          <SectionTitle numeral="III">Don&rsquo;t be a stranger</SectionTitle>

          {status === "done" ? (
            <div className="flex w-full flex-col items-center gap-3 border border-[#9b8757] bg-[#16161c] px-5 py-10 text-center">
              <p className="font-serif text-2xl">You&rsquo;re on the list.</p>
              <p className="text-xl text-[#b5af9f]">
                We&rsquo;ll write when there&rsquo;s something worth telling.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex w-full flex-col items-stretch gap-5 border border-[#2a2a31] bg-[#16161c] px-5 py-8"
            >
              <p className="text-xl leading-relaxed text-[#d5cfbe]">
                New routes, new stories, first word on October nights. No noise, no spam.
              </p>
              <label className="flex w-full flex-col gap-2 text-sm uppercase tracking-[0.2em] text-[#b5af9f]">
                Email
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="you@example.com"
                  className={inputStyle}
                />
              </label>
              <label className="flex w-full flex-col gap-2 text-sm uppercase tracking-[0.2em] text-[#b5af9f]">
                Mobile (optional)
                <input
                  type="tel"
                  name="phone"
                  placeholder="(912) 555-0100"
                  className={inputStyle}
                />
              </label>
              <label className="flex w-full flex-row items-start justify-start gap-3 text-left text-base leading-relaxed text-[#b5af9f]">
                <input
                  type="checkbox"
                  name="sms_consent"
                  value="yes"
                  className="mt-1.5 h-5 w-5 shrink-0 accent-[#9b8757]"
                />
                <span>
                  I agree to receive occasional texts from Gothic Walks (about 1&ndash;2
                  per month). Msg &amp; data rates may apply. Reply STOP to opt out.
                </span>
              </label>
              <input type="hidden" name="guide" value={guide.slug} />
              <button
                type="submit"
                disabled={status === "sending"}
                className={`${tipButton} border border-[#9b8757] text-[#f2eee2] hover:bg-[#9b8757] hover:text-[#101014] disabled:opacity-50`}
              >
                {status === "sending" ? "One moment\u2026" : "Walk with us again"}
              </button>
              {status === "error" && (
                <p className="text-base text-[#c07a6a]">
                  Something slipped in the dark. Try once more.
                </p>
              )}
            </form>
          )}
        </div>

        {/* Footer */}
        <div className="flex w-full flex-col items-center gap-3 pb-4 text-center">
          <span aria-hidden className="h-px w-10 bg-[#9b8757]" />
          <p className="font-serif text-base italic text-[#b5af9f]">
            The city does the haunting. We just tell the story.
          </p>
          <p className="text-sm text-[#6d695e]">
            Gothic Walks &middot; Savannah, Georgia &middot; gothicwalks.com
          </p>
        </div>
      </div>
    </main>
  );
}