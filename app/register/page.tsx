"use client";
import Link from "next/link";
import { useState } from "react";

export default function Register() {
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
                    <div className="text-5xl mb-4">🎉</div>
                    <h1 className="text-3xl font-bold text-white mb-3">You&apos;re on the list!</h1>
                    <p className="text-white/60 text-sm mb-6">Thanks for signing up. We&apos;ll be in touch soon.</p>
                    <Link href="/" className="bg-white text-gray-900 font-semibold px-6 py-3 rounded-xl hover:bg-gray-100 transition-colors text-sm">
                        Back to home
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="relative min-h-screen flex items-center justify-center font-sans py-12">
            <div className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/dan-meyers-IQVFVH0ajag-unsplash.jpg')" }} aria-hidden="true" />
            <div className="fixed inset-0 -z-10 bg-black/50" aria-hidden="true" />

            <div className="w-full max-w-md mx-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
                <div className="text-center mb-8">
                    <Link href="/" className="text-white/60 text-sm hover:text-white transition-colors">
                        ← Back to home
                    </Link>
                    <h1 className="text-3xl font-bold text-white mt-4 mb-2">Create your account</h1>
                    <p className="text-white/60 text-sm">Start tracking your herd for free</p>
                </div>

                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-1.5">
                        <label htmlFor="name" className="text-white/80 text-sm font-medium">Full name</label>
                        <input
                            id="name" name="name" type="text" autoComplete="name" required
                            placeholder="John Smith"
                            className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-white/50 transition-colors"
                        />
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <label htmlFor="email" className="text-white/80 text-sm font-medium">Email address</label>
                        <input
                            id="email" name="email" type="email" autoComplete="email" required
                            placeholder="you@example.com"
                            className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-white/50 transition-colors"
                        />
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <label htmlFor="password" className="text-white/80 text-sm font-medium">Password</label>
                        <input
                            id="password" type="password" autoComplete="new-password" required
                            placeholder="••••••••"
                            className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-white/50 transition-colors"
                        />
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <label htmlFor="confirm" className="text-white/80 text-sm font-medium">Confirm password</label>
                        <input
                            id="confirm" type="password" autoComplete="new-password" required
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
                        {status === "submitting" ? "Creating account…" : "Create Account"}
                    </button>
                </form>

                <p className="text-center text-white/50 text-sm mt-6">
                    Already have an account?{" "}
                    <Link href="/signin" className="text-white font-medium hover:underline">Sign in</Link>
                </p>
            </div>
        </div>
    );
}
