import React from 'react';
import { Sparkles, Shield, Zap } from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: 'Dreamy gradients',
    desc: 'Soft, grainy gradients that add depth without distracting from your content.'
  },
  {
    icon: Shield,
    title: 'Performance focused',
    desc: 'Optimized rendering and layering to keep interactions smooth and responsive.'
  },
  {
    icon: Zap,
    title: 'Instant setup',
    desc: 'Drop-in Spline support with sensible defaults and accessible overlays.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative z-10 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Designed for clarity and motion</h2>
          <p className="mt-3 text-white/70">
            Use a modern, abstract background as a full-width cover while keeping your message front and center.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6 transition hover:border-white/20">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/20">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-white/70">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
