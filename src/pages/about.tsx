import React from "react"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-blush-50 text-slate-900 font-sans">
      {/* Hero */}
      <section className="fade-in border-b border-blush-100 bg-gradient-to-b from-blush-100/80 via-blush-50 to-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-12 md:flex-row md:items-center md:py-16 lg:py-20">
          <div className="flex-1 space-y-6 text-center md:text-left">
            <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
              About Erin Free
            </h1>
            <p className="mx-auto max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base md:mx-0">
              A grounded, compassionate guide for women in midlife. Based in Napa Valley, Erin
              brings real-world support to every step of the menopause journey.
            </p>
          </div>

          {/* Image placeholder matching landing hero treatment */}
          <div className="flex-1">
            <div className="relative mx-auto max-w-md rounded-3xl bg-sand-50 p-5 shadow-soft sm:p-6">
              <div className="absolute -left-4 -top-4 h-16 w-16 rounded-3xl border border-dashed border-rose-200" />
              <div className="absolute -right-4 -bottom-4 h-20 w-20 rounded-full bg-rose-100/60" />
              <div className="relative flex aspect-[4/5] items-center justify-center rounded-2xl border border-sand-100 bg-gradient-to-br from-white via-blush-50 to-rose-50/80">
                <div className="text-center">
                  <div className="mx-auto mb-4 h-20 w-20 rounded-full border border-rose-100 bg-rose-50/70" />
                  <p className="text-xs font-semibold tracking-wide text-slate-500">
                    Placeholder Image
                  </p>
                  <p className="mt-2 text-sm font-medium text-slate-700">
                    Warm, calming photography of Erin with clients
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    Swap this frame with your brand imagery.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Work Matters */}
      <section className="fade-in bg-blush-100/40 px-6 py-16">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:items-center">
          {/* Image placeholder */}
          <div className="order-1 md:order-none md:flex-1">
            <div className="relative mx-auto max-w-md rounded-3xl bg-sand-50 p-5 shadow-soft sm:p-6">
              <div className="absolute -left-4 -top-4 h-12 w-12 rounded-3xl border border-dashed border-rose-200 sm:h-16 sm:w-16" />
              <div className="absolute -right-4 -bottom-4 h-16 w-16 rounded-full bg-rose-100/70" />
              <div className="relative flex h-full min-h-[220px] items-center justify-center rounded-2xl border border-sand-100 bg-gradient-to-br from-white via-blush-50 to-rose-50/80">
                <div className="text-center px-4">
                  <p className="text-xs font-semibold tracking-wide text-slate-500">
                    Coaching scene placeholder
                  </p>
                  <p className="mt-2 text-sm font-medium text-slate-700">
                    Imagery of Erin listening, reflecting, and supporting women in midlife.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="md:flex-1">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-rose-500">
              Why This Work Matters
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-900">
              Support that sees the whole of you
            </h2>
            <div className="mt-4 space-y-4 text-base text-slate-700">
              <p>
                Too often, women navigating menopause feel dismissed, isolated, or told to just push
                through. I saw that gap and knew something had to change. I created this space to
                offer what’s often missing - support that’s personal, holistic, and grounded in real
                life.
              </p>
              <p>
                What started as a passion for health and wellness became something deeper.
              </p>
              <p>
                My coaching approach meets you where you are and helps you move forward with
                clarity, strength, and confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What You’ll Find Here */}
      <section className="fade-in bg-white px-6 py-16">
        <div className="mx-auto max-w-5xl text-base text-slate-700">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-2xl font-semibold text-slate-900">
                What You’ll Find Here
              </h2>
              <p className="mt-4">
                Erin’s work is not about quick fixes or strict protocols. It is about listening
                closely, honoring your experience, and building a plan that fits and evolves with
                your life.
              </p>
            </div>

            {/* Image placeholder to the right of text on desktop, stacked on mobile */}
            <div className="self-stretch">
              <div className="relative mx-auto max-w-xs rounded-3xl bg-sand-50 p-5 shadow-soft sm:max-w-sm sm:p-6 md:ml-auto">
                <div className="absolute -left-4 -top-4 h-12 w-12 rounded-3xl border border-dashed border-rose-200 sm:h-14 sm:w-14" />
                <div className="absolute -right-4 -bottom-4 h-16 w-16 rounded-full bg-rose-100/60" />
                <div className="relative flex h-full min-h-[200px] items-center justify-center rounded-2xl border border-sand-100 bg-gradient-to-br from-white via-blush-50 to-rose-50/80">
                  <div className="text-center">
                    <p className="text-xs font-semibold tracking-wide text-slate-500">
                      Placeholder Image
                    </p>
                    <p className="mt-2 text-sm font-medium text-slate-700">
                      Quiet, grounded moments from Erin’s coaching practice
                    </p>
                    <p className="mt-1 text-xs text-slate-500">
                      Replace with photography that reflects your space and clients.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full-width pull quote */}
      <section className="fade-in bg-gradient-to-r from-rose-50 via-blush-100/70 to-rose-50 px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <blockquote className="italic text-lg text-slate-600 border-l-4 border-rose-300 pl-4 my-4">
            "This is not just a career. It’s a calling."
          </blockquote>
        </div>
      </section>

      {/* Guiding Beliefs */}
      <section className="fade-in bg-white px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="mb-3 text-center text-xs font-semibold uppercase tracking-[0.25em] text-rose-500">
            Guiding Beliefs
          </div>
          <h2 className="mb-10 text-center text-3xl font-semibold text-slate-900">
            The principles behind every session
          </h2>
          <div className="grid gap-6 text-sm text-slate-700 md:grid-cols-2">
            <div className="group rounded-2xl border border-rose-100 bg-white/80 p-5 shadow-sm transition hover:-translate-y-1 hover:border-rose-200 hover:shadow-soft">
              <h3 className="font-semibold text-slate-900">
                Care should feel personal
              </h3>
              <p className="mt-2">
                Every woman’s journey is different. Support should reflect that.
              </p>
            </div>
            <div className="group rounded-2xl border border-rose-100 bg-white/80 p-5 shadow-sm transition hover:-translate-y-1 hover:border-rose-200 hover:shadow-soft">
              <h3 className="font-semibold text-slate-900">
                Information builds confidence
              </h3>
              <p className="mt-2">
                Understand what is happening in your body makes space for real change.
              </p>
            </div>
            <div className="group rounded-2xl border border-rose-100 bg-white/80 p-5 shadow-sm transition hover:-translate-y-1 hover:border-rose-200 hover:shadow-soft">
              <h3 className="font-semibold text-slate-900">
                Consistency is better than intensity
              </h3>
              <p className="mt-2">
                Small, steady steps add up to powerful results.
              </p>
            </div>
            <div className="group rounded-2xl border border-rose-100 bg-white/80 p-5 shadow-sm transition hover:-translate-y-1 hover:border-rose-200 hover:shadow-soft">
              <h3 className="font-semibold text-slate-900">
                Your voice matters
              </h3>
              <p className="mt-2">
                This work is always a collaboration, not a prescription.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience & Training */}
      <section className="fade-in bg-white px-6 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-rose-500">
            Experience &amp; Training
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-slate-900">
            The foundation behind Erin’s work
          </h2>
          <div className="mx-auto mt-8 max-w-3xl rounded-3xl border border-sand-100 bg-sand-50/80 p-6 text-left shadow-soft sm:p-8">
            <ul className="list-inside list-disc space-y-4 text-sm text-slate-700">
              <li>Certified Menopause Coaching Specialist</li>
              <li>Background in holistic health, behavior change, and client-centered care</li>
              <li>Over a decade of experience supporting women’s wellness</li>
              <li>Deeply familiar with the realities of modern midlife</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Personal Note */}
      <section className="fade-in bg-sand-50/60 px-6 py-16">
        <div className="mx-auto max-w-4xl rounded-3xl border border-sand-100 bg-sand-50/80 p-6 shadow-soft sm:p-8">
          <div className="grid gap-8 md:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] md:items-center">
            {/* Image placeholder similar to mission/about sections */}
            <div className="flex justify-center md:justify-start">
              <div className="relative">
                <div className="h-32 w-32 rounded-full border border-sand-100 bg-gradient-to-br from-rose-50 via-white to-sand-50 shadow-soft sm:h-40 sm:w-40" />
                <div className="absolute -bottom-4 left-1/2 w-40 -translate-x-1/2 rounded-full bg-white/80 px-4 py-2 text-center text-xs text-slate-500 shadow-md">
                  Erin headshot placeholder
                </div>
              </div>
            </div>

            <div className="space-y-4 text-base text-slate-700">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-rose-500">
                A Personal Note
              </p>
              <h2 className="text-2xl font-semibold text-slate-900">
                Life in Napa Valley, rooted in care
              </h2>
              <p>
                I live in Napa Valley with my golden retriever, Scarlet. I spend a lot of time
                outdoors and I make caring for my own health and fitness a daily priority. My work
                is rooted in empathy and real lived experience. This is not just a career for me. It
                is a calling, and it is a privilege to support women through this season of life.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

