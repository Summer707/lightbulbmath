import Section from "@/components/Section";

export default function RulesPage() {
  return (
    <Section title="Competition Rules">
      <div className="space-y-6 text-zinc-700 leading-relaxed">
        <p>
          The Lightbulb Math Competition is designed to celebrate problem-solving and logical reasoning.
          Every question emphasizes clarity of thought rather than memorization or heavy computation.
        </p>

        <h2 className="text-xl font-semibold text-zinc-900 mt-8">Format</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>Two divisions:
            <ul className="list-disc ml-6 mt-1">
              <li><strong>Division A</strong> — Grades 11–12 (may include basic calculus)</li>
              <li><strong>Division B</strong> — Grades 9–10 (pre-calculus material only)</li>
            </ul>
          </li>
          <li>Each team has up to <strong>5 students</strong>.</li>
          <li>Duration: <strong>60 minutes</strong> in one continuous sitting.</li>
          <li>Each team receives a <strong>unique test link</strong> for their division.</li>
          <li>The competition window runs from <strong>October 6–10, 2025</strong>.</li>
        </ul>

        <h2 className="text-xl font-semibold text-zinc-900 mt-8">Rules</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>Teams may collaborate only with members on their registered team.</li>
          <li><strong>No external help or resources</strong> are allowed — this includes the internet, textbooks, or AI tools.</li>
          <li>Graphing calculators are permitted.</li>
          <li>Do not open your team’s link until you are ready to begin. Each link is single-use.</li>
          <li>If a technical issue occurs, note the remaining time and email the Lightbulb team immediately with a short description and a screenshot.</li>
        </ul>

        <h2 className="text-xl font-semibold text-zinc-900 mt-8">Scoring</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>Each problem is weighted equally unless otherwise stated.</li>
          <li>Tiebreakers are decided by the total time taken and accuracy of reasoning in free-response questions.</li>
          <li>Top-scoring teams will be recognized on the Lightbulb website after results are verified.</li>
        </ul>

        <h2 className="text-xl font-semibold text-zinc-900 mt-8">Ethics and Fairness</h2>
        <p>
          By participating, students agree to uphold academic honesty and integrity. Any form of unfair assistance, collaboration
          between teams, or use of prohibited tools may result in disqualification.
        </p>

        <p className="mt-8 italic text-zinc-500">
          Questions about rules or technical support? Contact us at{" "}
          <a href="mailto:lightbulbmath@gmail.com" className="underline">
            lightbulbmath@gmail.com
          </a>.
        </p>
      </div>
    </Section>
  );
}
