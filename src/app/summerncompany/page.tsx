import ContestClient from "@/components/ContestClient";
import set from "@/data/sets/summerncompany.json";
export const dynamic = "force-static";

export default function Page() {
  const s = set as any;
  return (
    <ContestClient
      slug={s.slug}
      title={s.title}
      durationMinutes={s.durationMinutes}
      items={s.items}
    />
  );
}
