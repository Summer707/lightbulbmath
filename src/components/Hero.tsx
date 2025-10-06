import site from "@/data/site";
import Countdown from "@/components/Countdown";
import Link from "next/link";


export default function Hero() {
return (
<section className="relative overflow-hidden border-b bg-gradient-to-b from-amber-50 to-white">
<div className="mx-auto max-w-6xl px-6 py-16 grid md:grid-cols-2 gap-8 items-center">
<div>
<h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
{site.fullName}
</h1>
<p className="mt-4 text-lg text-zinc-700 max-w-prose">
Logic‑first math from Edison, New Jersey. Two divisions. Clean problems. Honest scoring.
</p>
<div className="mt-6 flex items-center gap-3 text-sm">
<span className="rounded-full bg-amber-100 px-3 py-1 border">Next contest: {site.nextContest.label}</span>
<span className="font-mono"><Countdown target={site.nextContest.dateISO} /></span>
</div>
<div className="mt-8 flex gap-4">
<Link href="/register" className="rounded-lg bg-amber-500 px-4 py-2 text-white">Register</Link>
<Link href="/rules" className="rounded-lg border px-4 py-2">See rules</Link>
</div>
</div>
<div className="relative">
<img src="/hero.jpg" alt="Lightbulb" className="rounded-xl shadow" />
<img src="/logo.svg" alt="Logo" className="absolute -bottom-6 -right-6 h-20 w-20 opacity-90" />
</div>
</div>
</section>
);
}