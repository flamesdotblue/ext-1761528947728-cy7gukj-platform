import React from 'react';
import { Rocket } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 flex items-center justify-between rounded-xl border border-white/10 bg-slate-900/30 px-4 py-3 backdrop-blur-md">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 ring-1 ring-white/20">
              <Rocket className="h-5 w-5 text-white" />
            </span>
            <span className="text-lg font-semibold tracking-tight">DuneWave</span>
          </div>
          <nav className="hidden gap-6 text-sm text-white/80 sm:flex">
            <a href="#features" className="transition hover:text-white">Features</a>
            <a href="#cta" className="transition hover:text-white">Get Started</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </nav>
          <button className="rounded-md bg-white px-3 py-1.5 text-sm font-medium text-slate-900 shadow-sm transition hover:shadow">
            Launch App
          </button>
        </div>
      </div>
    </header>
  );
}
