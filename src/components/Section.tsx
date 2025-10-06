import { ReactNode } from "react";


export default function Section({ title, children }: { title: string; children: ReactNode }) {
return (
<section className="mx-auto max-w-4xl px-6 py-10">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight">{title}</h2>
<div className="mt-4 text-zinc-700 dark:text-zinc-300 leading-relaxed">{children}</div>
</section>
);
}