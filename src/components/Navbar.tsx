import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <nav className="mx-auto max-w-6xl px-6 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/bulb-mark.svg" alt="Lightbulb" width={24} height={24} />
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
