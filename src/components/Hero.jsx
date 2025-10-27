import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Spline
          scene="https://prod.spline.design/50gS2Nx3yhdqzJSa/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_20%,rgba(255,255,255,0.15),transparent_60%)]" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/20 via-slate-950/10 to-slate-950/60" />
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur">
            Dreamy, modern, tech aesthetic
          </p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
            Ride the waves of a dreamy digital landscape
          </h1>
          <p className="mt-4 max-w-xl text-base text-white/80 sm:text-lg">
            A wavy animated background with dunes, depth, and motion. Build immersive hero experiences with clarity and performance.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#cta"
              className="rounded-md bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow transition hover:shadow-lg"
            >
              Get Started
            </a>
            <a
              href="#features"
              className="rounded-md border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 backdrop-blur transition hover:border-white/30 hover:bg-white/10"
            >
              Explore Features
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
