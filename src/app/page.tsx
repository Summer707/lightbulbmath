import Hero from "@/components/Hero";
import Section from "@/components/Section";
import divisions from "@/data/divisions.json";


export default function Home() {
return (
<>
<Hero />
<Section title="Why Lightbulb">
<p>
We reward reasoning and clarity, not niche tricks. Two divisions keep it fair for 9–10 and 11–12. If a fact beyond the standard set is required, we state it.
</p>
</Section>
<Section title="Divisions">
<div className="grid md:grid-cols-2 gap-6">
{divisions.map((d) => (
<div key={d.id} className="rounded-xl border p-5">
<h3 className="text-lg font-semibold">{d.name} • Grades {d.grades}</h3>
<p className="mt-2 text-sm text-zinc-700">{d.summary}</p>
<p className="mt-1 text-sm">Calculus allowed: {d.calcAllowed ? "Yes" : "No"}</p>
</div>
))}
</div>
</Section>
</>
);
}