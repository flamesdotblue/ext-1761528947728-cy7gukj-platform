import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white antialiased">
      <div className="relative">
        <Navbar />
        <Hero />
      </div>
      <Features />
      <CTA />
      <Footer />
    </div>
  );
}
