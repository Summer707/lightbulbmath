import site from "@/data/site";


export default function Footer() {
return (
<footer className="border-t mt-16">
<div className="mx-auto max-w-6xl px-6 py-8 text-sm text-zinc-600">
<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
<p>© {new Date().getFullYear()} {site.fullName}. Based in {site.city}, {site.state}.</p>
<p>Contact: <a className="underline" href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a></p>
</div>
</div>
</footer>
);
}