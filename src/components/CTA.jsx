import React from 'react';

export default function CTA() {
  return (
    <section id="cta" className="relative z-10 py-24">
      <div className="absolute inset-0 -z-[0] bg-[radial-gradient(1200px_600px_at_50%_0%,rgba(99,102,241,0.15),transparent_70%)]" />
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 text-center shadow-2xl backdrop-blur">
          <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">Bring your hero to life</h3>
          <p className="mx-auto mt-3 max-w-2xl text-white/80">
            Drop this Spline scene into your product landing page and stand out with a modern, abstract aesthetic.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href="#"
              className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow transition hover:shadow-lg"
            >
              Start Building
            </a>
            <a
              href="#features"
              className="rounded-md border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 backdrop-blur transition hover:border-white/30 hover:bg-white/10"
            >
              See How It Works
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
