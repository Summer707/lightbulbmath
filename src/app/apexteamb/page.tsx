import ContestClient from "@/components/ContestClient";
import set from "@/data/sets/apexteamb.json";
import type { ContestSet } from "@/lib/types";

export const dynamic = "force-static";

export default function Page() {
  const s = set as ContestSet;
  return (
    <ContestClient
      slug={s.slug}
      title={s.title}
      durationMinutes={s.durationMinutes}
      items={s.items}
    />
  );
}
