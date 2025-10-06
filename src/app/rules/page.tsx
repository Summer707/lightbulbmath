import Section from "@/components/Section";
import rules from "@/data/rules.json";
import divisions from "@/data/divisions.json";


export default function Rules() {
return (
<>
<Section title="Philosophy">
<p>{rules.philosophy}</p>
</Section>
<Section title="Format">
<ul className="list-disc ml-6">
<li>Sprint: {rules.format.sprint.items} items in {rules.format.sprint.minutes} minutes. Scoring {rules.format.sprint.scoring}.</li>
<li>Solve: {rules.format.solve.items} problems in {rules.format.solve.minutes} minutes. {rules.format.solve.pointsEach} points each with rubric {rules.format.solve.rubric}.</li>
</ul>
</Section>
<Section title="Divisions">
<ul className="list-disc ml-6">
{divisions.map((d) => (
<li key={d.id}>{d.name} (grades {d.grades}). Calculus allowed: {d.calcAllowed ? "yes" : "no"}.</li>
))}
</ul>
</Section>
<Section title="Tiebreakers">
<ol className="list-decimal ml-6">
{rules.tiebreakers.map((t: string) => (
<li key={t}>{t}</li>
))}
</ol>
</Section>
<Section title="Integrity">
<ul className="list-disc ml-6">
{rules.integrity.map((i: string) => (
<li key={i}>{i}</li>
))}
</ul>
</Section>
<Section title="Allowed tools and excluded topics">
<p>Division A: {rules.allowedTools.A.join(", ")}</p>
<p>Division B: {rules.allowedTools.B.join(", ")}</p>
<p className="mt-2">Excluded topics: {rules.excludedTopics.join(", ")}</p>
</Section>
</>
);
}