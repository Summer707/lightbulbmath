import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import site from "@/data/site";


export const metadata: Metadata = {
title: `${site.fullName} – ${site.tagline}`,
description: "Logic‑first math contest with two high school divisions based in Edison, New Jersey.",
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
return (
<html lang="en">
<body className="min-h-screen flex flex-col">
<Navbar />
<main className="flex-1">{children}</main>
<Footer />
</body>
</html>
);
}