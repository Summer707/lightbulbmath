import Section from "@/components/Section";
import WinnersTable from "@/components/WinnersTable";
import winners2024 from "@/data/winners-2024.json";
import type { DivisionWinners } from "@/lib/types";

export default function WinnersPage() {
  const data = winners2024 as any;

  // Normalize your shape -> DivisionWinners[]
  const divisions: DivisionWinners[] = (data.divisions || []).map((div: any) => ({
    name: div.name,
    awards: (div.winners || []).map((w: any) => ({
      place: w.place,
      student: w.name,         // your JSON uses "name" -> expected "student"
      school: w.school,
      state: w.state ?? undefined,
      score: w.score ?? undefined,
    })),
    honorableMentions: (div.honorableMentions || []).map((h: any) => ({
      student: h.name ?? h.student ?? "",
      school: h.school ?? "",
      state: h.state ?? undefined,
    })),
  }));

  return (
    <Section title={`Winners ${data.season}`}>
      <WinnersTable divisions={divisions} />
    </Section>
  );
}
