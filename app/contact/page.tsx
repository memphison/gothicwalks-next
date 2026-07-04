// app/contact/page.tsx
/* eslint-disable react/no-unescaped-entities */
"use client";
import { useState } from "react";
import Header from "@/app/components/Header";



export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;
    const data = new FormData(form);

    const res = await fetch("https://formspree.io/f/mjglokaj", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    if (res.ok) {
      setSubmitted(true);
    } else {
      setSubmitting(false);
      alert("Something went wrong. Please try again or email us directly.");
    }
  }

  return (
    <main className="min-h-screen bg-[#141210] text-[#e8e2d8]">
      <Header />

      <section className="mx-auto max-w-2xl px-6 pt-12 pb-24 md:pt-16">
        <p className="mb-6 text-sm font-semibold uppercase tracking-[0.22em] text-[#990000] [font-family:var(--font-label)]">
          Get in touch
        </p>
        <h1
          className="text-5xl font-normal leading-tight tracking-[-0.025em] text-[#f0ebe0] md:text-6xl [font-family:var(--font-display)]"
          style={{ marginBottom: "1rem" }}
        >
          We'd love to hear from you.
        </h1>
        <p className="text-xl leading-8 text-[#b0a898] [font-family:var(--font-body)]">
          Questions about the tour, private or group bookings, or anything else
          — send us a note and we'll get back to you promptly.
        </p>

        {submitted ? (
          <div
            className="mt-12 rounded-[1.5rem] border border-[#2a2520] bg-[#1c1916] text-center"
            style={{ padding: "3rem 2rem" }}
          >
            <h2 className="text-3xl font-normal text-[#f0ebe0] [font-family:var(--font-display)]">
              Message received.
            </h2>
            <p
              className="text-lg leading-8 text-[#b0a898] [font-family:var(--font-body)]"
              style={{ marginTop: "1rem" }}
            >
              We'll be in touch soon. In the meantime, Savannah will be waiting.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-12 rounded-[1.5rem] border border-[#2a2520] bg-[#1c1916]"
            style={{ padding: "2rem" }}
          >
            {/* Name row */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm uppercase tracking-[0.18em] text-[#8a6f47] [font-family:var(--font-label)]"
                >
                  First Name
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  required
                  className="mt-2 w-full rounded-xl border border-[#2a2520] bg-[#231f1b] px-4 py-3 text-base text-[#e8e2d8] outline-none transition focus:border-[#8a6f47] [font-family:var(--font-body)]"
                  placeholder="First name"
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm uppercase tracking-[0.18em] text-[#8a6f47] [font-family:var(--font-label)]"
                >
                  Last Name
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  required
                  className="mt-2 w-full rounded-xl border border-[#2a2520] bg-[#231f1b] px-4 py-3 text-base text-[#e8e2d8] outline-none transition focus:border-[#8a6f47] [font-family:var(--font-body)]"
                  placeholder="Last name"
                />
              </div>
            </div>

            {/* Email */}
            <div style={{ marginTop: "1.5rem" }}>
              <label
                htmlFor="email"
                className="block text-sm uppercase tracking-[0.18em] text-[#8a6f47] [font-family:var(--font-label)]"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-2 w-full rounded-xl border border-[#2a2520] bg-[#231f1b] px-4 py-3 text-base text-[#e8e2d8] outline-none transition focus:border-[#8a6f47] [font-family:var(--font-body)]"
                placeholder="your@email.com"
              />
            </div>

            {/* Phone */}
            <div style={{ marginTop: "1.5rem" }}>
              <label
                htmlFor="phone"
                className="block text-sm uppercase tracking-[0.18em] text-[#8a6f47] [font-family:var(--font-label)]"
              >
                Phone <span className="text-[#5a534d] normal-case tracking-normal">— optional</span>
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                className="mt-2 w-full rounded-xl border border-[#2a2520] bg-[#231f1b] px-4 py-3 text-base text-[#e8e2d8] outline-none transition focus:border-[#8a6f47] [font-family:var(--font-body)]"
                placeholder="(912) 555-0100"
              />
            </div>

            {/* Note */}
            <div style={{ marginTop: "1.5rem" }}>
              <label
                htmlFor="message"
                className="block text-sm uppercase tracking-[0.18em] text-[#8a6f47] [font-family:var(--font-label)]"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="mt-2 w-full rounded-xl border border-[#2a2520] bg-[#231f1b] px-4 py-3 text-base text-[#e8e2d8] outline-none transition focus:border-[#8a6f47] [font-family:var(--font-body)]"
                placeholder="Questions, group bookings, anything at all..."
              />
            </div>

            {/* Opt-ins */}
            <div
              className="rounded-2xl border border-[#2a2520] bg-[#231f1b] p-5"
              style={{ marginTop: "1.5rem" }}
            >
              <p className="text-sm uppercase tracking-[0.18em] text-[#8a6f47] [font-family:var(--font-label)]">
                Stay in the loop
              </p>

              {/* Email opt-in — default checked */}
              <label className="mt-4 flex cursor-pointer items-start gap-3">
                <input
                  type="checkbox"
                  name="emailOptIn"
                  value="yes"
                  defaultChecked
                  className="mt-1 h-4 w-4 shrink-0 accent-[#8a6f47]"
                />
                <span className="text-base leading-7 text-[#b0a898] [font-family:var(--font-body)]">
                  Keep me in the know — tour updates, special offers, and the
                  occasional dark piece of Savannah history worth sharing.
                </span>
              </label>

              {/* Text opt-in — default unchecked */}
              <label className="mt-4 flex cursor-pointer items-start gap-3">
                <input
                  type="checkbox"
                  name="textOptIn"
                  value="yes"
                  className="mt-1 h-4 w-4 shrink-0 accent-[#8a6f47]"
                />
                <span className="text-base leading-7 text-[#b0a898] [font-family:var(--font-body)]">
                  The occasional text is fine — availability alerts, last-minute
                  openings, that sort of thing. We won&apos;t abuse it.
                </span>
              </label>
            </div>

            <div className="flex justify-center" style={{ marginTop: "2rem" }}>
              <button
                type="submit"
                disabled={submitting}
                className="gw-btn-light"
              >
                {submitting ? "Sending..." : "Send Message"}
              </button>
            </div>

            <p
              className="text-center text-sm text-[#5a534d] [font-family:var(--font-label)]"
              style={{ marginTop: "1rem" }}
            >
              We typically respond within one business day.
            </p>
          </form>
        )}
      </section>

      <footer className="border-t border-[#2a2520] px-6 py-10 text-center">
        <p className="text-sm uppercase tracking-[0.2em] text-[#7a7268] [font-family:var(--font-label)]">
          Gothic Walks — Savannah, Georgia
        </p>
      </footer>
    </main>
  );
}