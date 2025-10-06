// src/app/season/[year]/winners/page.tsx
import Section from "@/components/Section";
import WinnersTable from "@/components/WinnersTable";
import winners2024 from "@/data/winners-2024.json";
import type { DivisionWinners, Award, HonMention } from "@/lib/types";

// Raw JSON shape you currently have (id/name + winners[] with "name")
type RawWinner = {
  place: number;
  name: string;     // will map to "student"
  school: string;
  score?: number;
  state?: string;
};

type RawHonMention = {
  name?: string;     // sometimes "name"
  student?: string;  // sometimes "student"
  school: string;
  state?: string;
};

type RawDivision = {
  id?: string;
  name: string;
  winners: RawWinner[];
  honorableMentions?: RawHonMention[];
};

type RawWinnersFile = {
  season: number;
  divisions: RawDivision[];
};

export default function WinnersPage() {
  const data = winners2024 as unknown as RawWinnersFile;

  // Normalize RawDivision[] -> DivisionWinners[]
  const divisions: DivisionWinners[] = data.divisions.map((div): DivisionWinners => {
    const awards: Award[] = div.winners.map((w): Award => ({
      place: w.place,
      student: w.name,       // rename field
      school: w.school,
      state: w.state,
      score: w.score,
    }));

    const honorableMentions: HonMention[] | undefined = div.honorableMentions?.map((h): HonMention => ({
      student: h.student ?? h.name ?? "",
      school: h.school,
      state: h.state,
    }));

    return {
      name: div.name,
      awards,
      honorableMentions,
    };
  });

  return (
    <Section title={`Winners ${data.season}`}>
      <WinnersTable divisions={divisions} />
    </Section>
  );
}
