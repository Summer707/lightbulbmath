import Link from "next/link";


export default function Navbar() {
return (
<header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
<nav className="mx-auto max-w-6xl px-6 h-14 flex items-center justify-between">
<Link href="/" className="flex items-center gap-2">
<img src="/bulb-mark.svg" alt="Lightbulb" className="h-6 w-6" />
<span className="font-semibold">Lightbulb</span>
</Link>
<div className="flex items-center gap-6 text-sm">
<Link href="/rules">Rules</Link>
<Link href="/practice">Practice</Link>
<Link href="/season/2024">2024</Link>
<Link href="/season/2025">2025</Link>
<Link href="/about">About</Link>
<Link href="/register" className="rounded-full border px-3 py-1.5 hover:bg-zinc-50">Register</Link>
</div>
</nav>
</header>
);
}