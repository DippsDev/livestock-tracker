"use client";
import Link from "next/link";
import { useState } from "react";

export default function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="relative min-h-screen flex items-center justify-center font-sans">
            {/* Background */}
            <div
                className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/dan-meyers-IQVFVH0ajag-unsplash.jpg')" }}
                aria-hidden="true"
            />
            <div className="fixed inset-0 -z-10 bg-black/50" aria-hidden="true" />

            <div className="w-full max-w-md mx-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
                {/* Header */}
                <div className="text-center mb-8">
                    <Link href="/" className="text-white/60 text-sm hover:text-white transition-colors">
                        ← Back to home
                    </Link>
                    <h1 className="text-3xl font-bold text-white mt-4 mb-2">Welcome back</h1>
                    <p className="text-white/60 text-sm">Sign in to your LiveTrack account</p>
                </div>

                {/* Form */}
                <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
                    <div className="flex flex-col gap-1.5">
                        <label htmlFor="email" className="text-white/80 text-sm font-medium">
                            Email address
                        </label>
                        <input
                            id="email"
                            type="email"
                            autoComplete="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="you@example.com"
                            className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-white/50 transition-colors"
                        />
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="text-white/80 text-sm font-medium">
                                Password
                            </label>
                            <a href="#" className="text-white/50 text-xs hover:text-white transition-colors">
                                Forgot password?
                            </a>
                        </div>
                        <input
                            id="password"
                            type="password"
                            autoComplete="current-password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="••••••••"
                            className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-white/50 transition-colors"
                        />
                    </div>

                    <button
                        type="submit"
                        className="mt-2 bg-white text-gray-900 font-semibold py-3 rounded-xl hover:bg-gray-100 transition-colors text-sm"
                    >
                        Sign In
                    </button>
                </form>

                <p className="text-center text-white/50 text-sm mt-6">
                    Don&apos;t have an account?{" "}
                    <Link href="/register" className="text-white font-medium hover:underline">
                        Get started free
                    </Link>
                </p>
            </div>
        </div>
    );
}
