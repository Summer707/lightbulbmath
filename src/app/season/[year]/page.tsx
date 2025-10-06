import Section from "@/components/Section";
import overview2024 from "@/data/overview-2024.json";
import overview2025 from "@/data/overview-2025.json";
import Link from "next/link";
import type { SeasonOverview } from "@/lib/types";

const map: Record<string, SeasonOverview> = {
  "2024": overview2024 as unknown as SeasonOverview,
  "2025": overview2025 as unknown as SeasonOverview,
};


export default function Season({ params }: { params: { year: string } }) {
  const data = map[params.year];
  if (!data) return <Section title="Season"><p>Season not found.</p></Section>;
  return (
    <>
      <Section title={`${data.year} – ${data.title}`}>
        <p>{data.blurb}</p>
        <ul className="list-disc ml-6 mt-4">
          {data.highlights.map((h) => <li key={h}>{h}</li>)}
        </ul>
        {data.year === 2024 ? (
          <p className="mt-6"><Link className="underline" href="/season/2024/winners">See 2024 winners</Link></p>
        ) : null}
      </Section>
    </>
  );
}
