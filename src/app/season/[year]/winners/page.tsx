import Section from "@/components/Section";
import winners2024 from "@/data/winners-2024.json";
import WinnersTable from "@/components/WinnersTable";


export default function WinnersPage() {
const data = winners2024; // This route is only used for 2024 in this starter
return (
<Section title={`Winners ${data.season}`}>
<WinnersTable divisions={data.divisions} />
</Section>
);
}