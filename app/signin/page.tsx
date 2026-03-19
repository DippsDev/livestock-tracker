"use client";
import Link from "next/link";
import { useState } from "react";

export default function SignIn() {
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus("submitting");
        const data = new FormData(e.currentTarget);
        const res = await fetch("https://formspree.io/f/mzdjoqpp", {
            method: "POST",
            body: data,
            headers: { Accept: "application/json" },
        });
        setStatus(res.ok ? "success" : "error");
    }

    if (status === "success") {
        return (
            <div className="relative min-h-screen flex items-center justify-center font-sans">
                <div className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: "url('/dan-meyers-IQVFVH0ajag-unsplash.jpg')" }} aria-hidden="true" />
                <div className="fixed inset-0 -z-10 bg-black/50" aria-hidden="true" />
                <div className="w-full max-w-md mx-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 text-center">
                    <div className="text-5xl mb-4">👋</div>
                    <h1 className="text-3xl font-bold text-white mb-3">Welcome back!</h1>
                    <p className="text-white/60 text-sm mb-6">You&apos;ve successfully signed in to LiveTrack.</p>
                    <Link href="/" className="bg-white text-gray-900 font-semibold px-6 py-3 rounded-xl hover:bg-gray-100 transition-colors text-sm">
                        Back to home
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="relative min-h-screen flex items-center justify-center font-sans">
            <div className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/dan-meyers-IQVFVH0ajag-unsplash.jpg')" }} aria-hidden="true" />
            <div className="fixed inset-0 -z-10 bg-black/50" aria-hidden="true" />

            <div className="w-full max-w-md mx-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
                <div className="text-center mb-8">
                    <Link href="/" className="text-white/60 text-sm hover:text-white transition-colors">
                        ← Back to home
                    </Link>
                    <h1 className="text-3xl font-bold text-white mt-4 mb-2">Welcome back</h1>
                    <p className="text-white/60 text-sm">Sign in to your LiveTrack account</p>
                </div>

                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-1.5">
                        <label htmlFor="email" className="text-white/80 text-sm font-medium">Email address</label>
                        <input
                            id="email" name="email" type="email" autoComplete="email" required
                            placeholder="you@example.com"
                            className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-white/50 transition-colors"
                        />
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="text-white/80 text-sm font-medium">Password</label>
                            <a href="#" className="text-white/50 text-xs hover:text-white transition-colors">Forgot password?</a>
                        </div>
                        <input
                            id="password" type="password" autoComplete="current-password" required
                            placeholder="••••••••"
                            className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-white/50 transition-colors"
                        />
                    </div>

                    {status === "error" && (
                        <p className="text-red-400 text-xs text-center">Something went wrong. Please try again.</p>
                    )}

                    <button
                        type="submit"
                        disabled={status === "submitting"}
                        className="mt-2 bg-white text-gray-900 font-semibold py-3 rounded-xl hover:bg-gray-100 transition-colors text-sm disabled:opacity-60"
                    >
                        {status === "submitting" ? "Signing in…" : "Sign In"}
                    </button>
                </form>

                <p className="text-center text-white/50 text-sm mt-6">
                    Don&apos;t have an account?{" "}
                    <Link href="/register" className="text-white font-medium hover:underline">Get started free</Link>
                </p>
            </div>
        </div>
    );
}
