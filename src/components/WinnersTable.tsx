export default function WinnersTable({ divisions }: { divisions: any[] }) {
    return (
    <div className="mt-8 space-y-10">
    {divisions.map((div) => (
    <section key={div.name}>
    <h3 className="text-xl font-semibold">{div.name}</h3>
    <div className="mt-3 overflow-hidden rounded border">
    <table className="w-full text-sm">
    <thead className="bg-zinc-50">
    <tr>
    <th className="p-2 text-left">Place</th>
    <th className="p-2 text-left">Student</th>
    <th className="p-2 text-left">School</th>
    <th className="p-2 text-left">State</th>
    <th className="p-2 text-right">Score</th>
    </tr>
    </thead>
    <tbody>
    {div.awards.map((a: any) => (
    <tr key={a.place} className="border-t">
    <td className="p-2">{a.place}</td>
    <td className="p-2">{a.student}</td>
    <td className="p-2">{a.school}</td>
    <td className="p-2">{a.state}</td>
    <td className="p-2 text-right">{a.score ?? ""}</td>
    </tr>
    ))}
    </tbody>
    </table>
    </div>
    {div.honorableMentions?.length ? (
    <p className="mt-2 text-sm text-zinc-600">
    Honorable mentions: {div.honorableMentions.map((h: any) => `${h.student} (${h.school})`).join(", ")}
    </p>
    ) : null}
    </section>
    ))}
    </div>
    );
    }