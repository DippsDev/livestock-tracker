import Link from "next/link";
import { PhoneIcon, EnvelopeIcon, ClockIcon } from "@heroicons/react/24/solid";

export default function ContactSales() {
    return (
        <div className="relative min-h-screen flex items-center justify-center font-sans py-12 px-4">
            <div
                className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/dan-meyers-IQVFVH0ajag-unsplash.jpg')" }}
                aria-hidden="true"
            />
            <div className="fixed inset-0 -z-10 bg-black/55" aria-hidden="true" />

            <div className="w-full max-w-4xl">
                <div className="text-center mb-10">
                    <Link href="/" className="text-white/60 text-sm hover:text-white transition-colors">
                        ← Back to home
                    </Link>
                    <h1 className="text-4xl font-bold text-white mt-4 mb-2">Talk to Sales</h1>
                    <p className="text-white/60 text-sm max-w-md mx-auto">
                        Tell us about your operation and a sales director will get back to you within one business day.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Contact info sidebar */}
                    <div className="flex flex-col gap-5">
                        {[
                            { icon: <PhoneIcon className="w-5 h-5 text-white" />, label: "Phone", value: "+267 76 285 847" },
                            { icon: <EnvelopeIcon className="w-5 h-5 text-white" />, label: "Email", value: "nandi@gmail.com" },
                            { icon: <ClockIcon className="w-5 h-5 text-white" />, label: "Hours", value: "Mon–Fri, 8am–6pm" },
                        ].map((item) => (
                            <div key={item.label} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-5 flex items-start gap-4">
                                <div className="mt-0.5">{item.icon}</div>
                                <div>
                                    <p className="text-white/50 text-xs mb-0.5">{item.label}</p>
                                    <p className="text-white text-sm font-medium">{item.value}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Form */}
                    <div className="md:col-span-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
                        <form className="flex flex-col gap-4" action="https://formspree.io/f/mpqybqon" method="POST">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex flex-col gap-1.5">
                                    <label htmlFor="name" className="text-white/80 text-sm font-medium">Full name</label>
                                    <input id="name" name="name" type="text" required placeholder="John Smith"
                                        className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-white/50 transition-colors" />
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <label htmlFor="email" className="text-white/80 text-sm font-medium">Work email</label>
                                    <input id="email" name="email" type="email" required placeholder="you@farm.com"
                                        className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-white/50 transition-colors" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex flex-col gap-1.5">
                                    <label htmlFor="phone" className="text-white/80 text-sm font-medium">Phone number</label>
                                    <input id="phone" name="phone" type="tel" placeholder="+267 76 285 847"
                                        className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-white/50 transition-colors" />
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <label htmlFor="company" className="text-white/80 text-sm font-medium">Farm / Company name</label>
                                    <input id="company" name="company" type="text" placeholder="Green Pastures Farm"
                                        className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-white/50 transition-colors" />
                                </div>
                            </div>

                            <div className="flex flex-col gap-1.5">
                                <label htmlFor="herd" className="text-white/80 text-sm font-medium">Estimated herd size</label>
                                <select id="herd" name="herd"
                                    className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-white/50 transition-colors">
                                    <option value="" className="text-gray-900">Select a range</option>
                                    <option value="1-50" className="text-gray-900">1 – 50 animals</option>
                                    <option value="51-200" className="text-gray-900">51 – 200 animals</option>
                                    <option value="201-500" className="text-gray-900">201 – 500 animals</option>
                                    <option value="500+" className="text-gray-900">500+ animals</option>
                                </select>
                            </div>

                            <div className="flex flex-col gap-1.5">
                                <label htmlFor="message" className="text-white/80 text-sm font-medium">How can we help?</label>
                                <textarea id="message" name="message" rows={4}
                                    placeholder="Tell us about your operation and what you're looking for..."
                                    className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-white/50 transition-colors resize-none" />
                            </div>

                            <button type="submit"
                                className="mt-1 bg-white text-gray-900 font-semibold py-3 rounded-xl hover:bg-gray-100 transition-colors text-sm">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
