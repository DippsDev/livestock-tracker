"use client";
import { useState } from "react";
import {
  MapPinIcon, HeartIcon, ChartBarIcon, BellAlertIcon,
  ClipboardDocumentListIcon, SignalIcon, Bars3Icon, XMarkIcon,
} from "@heroicons/react/24/solid";
import { IconNumber1Small, IconNumber2Small, IconNumber3Small } from "@tabler/icons-react";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "/contact-sales" },
];

const features = [
  { icon: <MapPinIcon className="w-8 h-8 text-white" />, title: "Real-Time GPS Tracking", desc: "Know exactly where every animal is at all times. Set geo-fences and get instant alerts when animals stray." },
  { icon: <HeartIcon className="w-8 h-8 text-white" />, title: "Health Monitoring", desc: "Track vitals, vaccination schedules, and health events. Get notified before issues become problems." },
  { icon: <ChartBarIcon className="w-8 h-8 text-white" />, title: "Herd Analytics", desc: "Understand weight trends, breeding cycles, and productivity metrics with easy-to-read dashboards." },
  { icon: <BellAlertIcon className="w-8 h-8 text-white" />, title: "Smart Alerts", desc: "Receive SMS or app notifications for unusual behavior, boundary breaches, or missed health checks." },
  { icon: <ClipboardDocumentListIcon className="w-8 h-8 text-white" />, title: "Digital Records", desc: "Replace paper logs with a complete digital history for every animal — accessible from any device." },
  { icon: <SignalIcon className="w-8 h-8 text-white" />, title: "Works Offline", desc: "No signal? No problem. The app syncs automatically when connectivity is restored." },
];

const steps = [
  { icon: <IconNumber1Small className="w-16 h-16 text-white" stroke={2} />, title: "Tag Your Animals", desc: "Attach our lightweight GPS ear tags or collar devices to your livestock." },
  { icon: <IconNumber2Small className="w-16 h-16 text-white" stroke={2} />, title: "Connect the App", desc: "Download the app, create your farm profile, and your herd appears on the map instantly." },
  { icon: <IconNumber3Small className="w-16 h-16 text-white" stroke={2} />, title: "Monitor & Act", desc: "Get real-time data, health alerts, and insights to make smarter farming decisions." },
];

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative min-h-screen font-sans">
      <div className="fixed inset-0 -z-10 bg-cover bg-no-repeat hero-bg"
        style={{ backgroundImage: "url('/veronica-white-vyQOX7UvY78-unsplash.jpg')" }}
        aria-hidden="true" />
      <div className="fixed inset-0 -z-10 bg-black/40" aria-hidden="true" />

      {/* ── Navbar ── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="flex items-center justify-between px-6 py-4">
          {/* Burger — always visible on mobile, hidden on desktop */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            style={{ display: "flex" }}
            className="desktop-hide text-white p-1"
          >
            {open ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
          </button>

          {/* Desktop links */}
          <nav className="mobile-hide items-center gap-8">
            {navLinks.map((l) => (
              <a key={l.label} href={l.href} className="text-white/80 hover:text-white text-sm font-medium transition-colors">{l.label}</a>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="mobile-hide items-center gap-3">
            <a href="/signin" className="text-white text-sm font-medium hover:text-white/80 transition-colors px-4 py-2">Sign In</a>
            <a href="/register" className="bg-white text-gray-900 text-sm font-semibold px-5 py-2 rounded-full hover:bg-gray-100 transition-colors">Get Started Free</a>
          </div>
        </div>

        {/* Mobile slide-down menu */}
        <div
          className="desktop-hide border-white/20 bg-black/80 backdrop-blur-lg overflow-hidden transition-all duration-300 ease-in-out"
          style={{ maxHeight: open ? "400px" : "0px", borderTopWidth: open ? "1px" : "0px" }}
        >
          <div className="px-6 py-5 flex flex-col gap-4">
            {navLinks.map((l) => (
              <a key={l.label} href={l.href} onClick={() => setOpen(false)}
                className="text-white/80 hover:text-white text-base font-medium transition-colors">{l.label}</a>
            ))}
            <div className="flex flex-col gap-3 pt-2 border-t border-white/20">
              <a href="/signin" onClick={() => setOpen(false)}
                className="text-center border border-white/30 text-white text-xs font-medium px-5 py-2 rounded-full hover:bg-white/10 transition-colors">Sign In</a>
              <a href="/register" onClick={() => setOpen(false)}
                className="text-center bg-white text-gray-900 text-xs font-semibold px-5 py-2 rounded-full hover:bg-gray-100 transition-colors">Get Started Free</a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="flex flex-col items-center justify-center min-h-screen text-center px-6 pt-20">
        <span className="inline-flex items-center gap-2 text-white text-sm font-medium mb-6 tracking-wide uppercase">
          <span className="w-2 h-2 rounded-full inline-block animate-pulse"
            style={{ background: "radial-gradient(circle, #00f0ff, #00ff88)", boxShadow: "0 0 8px 2px #00f0ff, 0 0 16px 4px #00ff88" }} />
          Smart Livestock Management
        </span>
        <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight max-w-4xl mb-6 drop-shadow-lg">
          Track Every Animal.<br />Grow Your Herd.
        </h1>
        <p className="text-white/75 text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
          Real-time GPS tracking, health monitoring, and herd analytics — all in one platform built for modern livestock farmers.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <a href="/register" className="bg-white text-gray-900 font-semibold px-8 py-3.5 rounded-full hover:bg-gray-100 transition-colors text-base shadow-lg">Start Tracking Free →</a>
          <a href="#how-it-works" className="border border-white/50 text-white font-medium px-8 py-3.5 rounded-full hover:bg-white/10 transition-colors text-base">See How It Works</a>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="relative py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">Everything You Need to Manage Your Herd</h2>
          <p className="text-white/70 text-center max-w-xl mx-auto mb-14 text-base">From individual animal tracking to full farm analytics, we&apos;ve got you covered.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-colors">
                <div className="mb-3">{f.icon}</div>
                <h3 className="text-white font-semibold text-lg mb-2">{f.title}</h3>
                <p className="text-white/65 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="relative py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Up and Running in Minutes</h2>
          <p className="text-white/70 mb-14 text-base max-w-lg mx-auto">No complicated setup. Just tag, track, and manage.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((s) => (
              <div key={s.title} className="flex flex-col items-center">
                <div className="mb-3">{s.icon}</div>
                <h3 className="text-white font-semibold text-lg mb-2">{s.title}</h3>
                <p className="text-white/65 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="pricing" className="relative py-24 px-6">
        <div className="max-w-3xl mx-auto text-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Take Control of Your Herd?</h2>
          <p className="text-white/70 mb-8 text-base max-w-md mx-auto">Join thousands of farmers already using LiveTrack to protect and grow their livestock.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/register" className="bg-white text-gray-900 font-semibold px-8 py-3.5 rounded-full hover:bg-gray-100 transition-colors text-base shadow-lg">Start Free Trial</a>
            <a href="/contact-sales" className="border border-white/50 text-white font-medium px-8 py-3.5 rounded-full hover:bg-white/10 transition-colors text-base">Talk to Sales</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="relative py-10 px-8 border-t border-white/20 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-white/50 text-sm">© 2026 LiveTrack. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="text-white/50 hover:text-white text-sm transition-colors">Privacy</a>
          <a href="#" className="text-white/50 hover:text-white text-sm transition-colors">Terms</a>
          <a href="#" className="text-white/50 hover:text-white text-sm transition-colors">Support</a>
        </div>
      </footer>
    </div>
  );
}
