"use client";
import { useEffect, useMemo, useState } from "react";

type MCQ = { id: string; type: "mcq"; prompt: string; choices: string[] };
type FR  = { id: string; type: "fr";  prompt: string };
type Item = MCQ | FR;

export default function ContestClient({
  slug, title, durationMinutes, items
}: {
  slug: string; title: string; durationMinutes: number; items: Item[];
}) {
  const storageKey = `lb:${slug}:answers`;
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  // Load saved answers on mount
  useEffect(() => {
    try {
      const raw = localStorage.getItem(storageKey);
      if (raw) setAnswers(JSON.parse(raw));
    } catch {}
  }, [storageKey]);

  // Autosave on change
  useEffect(() => {
    try {
      localStorage.setItem(storageKey, JSON.stringify(answers));
    } catch {}
  }, [answers, storageKey]);

  // Optional: stable order (or randomize once if you want)
  const ordered = useMemo(() => items.slice(), [items]);

  async function submitToServer() {
    const payload = {
      teamSlug: slug,
      answers,
      startedAtISO: null,
      endedAtISO: new Date().toISOString(),
    };

    try {
      const resp = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const j = await resp.json();
      if (!resp.ok) {
        alert("Submission failed: " + (j?.error || resp.statusText));
      } else {
        setSubmitted(true);
        alert("Submitted successfully!");
        // Optional: lock edits
        // localStorage.removeItem(storageKey);
      }
    } catch (err) {
      console.error(err);
      alert("Network error submitting answers.");
    }
  }

  return (
    <main className="mx-auto max-w-4xl p-6">
      <h1 className="text-2xl font-semibold">{title}</h1>
      <p className="text-sm text-zinc-600 mt-1">
        Duration {durationMinutes} minutes • Selections/answers autosave on this device.
      </p>

      <div className="mt-6 space-y-6">
        {ordered.map((p, idx) => (
          <div key={p.id} className="rounded-lg border p-4">
            <div className="text-sm text-zinc-500 mb-2">Problem {idx + 1}</div>
            <div
              className="prose prose-zinc max-w-none"
              dangerouslySetInnerHTML={{ __html: p.prompt }}
            />
            {"choices" in p ? (
              <div className="mt-3 space-y-2">
                {(p as MCQ).choices.map((c, i) => (
                  <label key={i} className="flex items-center gap-2">
                    <input
                      type="radio"
                      name={p.id}
                      checked={answers[p.id] === String(i)}
                      onChange={() => setAnswers({ ...answers, [p.id]: String(i) })}
                    />
                    <span dangerouslySetInnerHTML={{ __html: c }} />
                  </label>
                ))}
              </div>
            ) : (
              <textarea
                className="mt-3 w-full min-h-[120px] rounded border p-2"
                value={answers[p.id] ?? ""}
                onChange={(e) => setAnswers({ ...answers, [p.id]: e.target.value })}
                placeholder="Type your reasoning here"
              />
            )}
          </div>
        ))}
      </div>

      <div className="mt-6 flex gap-3">
        <button
          className="rounded border px-3 py-1.5"
          onClick={submitToServer}
          disabled={submitted}
        >
          {submitted ? "Submitted" : "Submit"}
        </button>
        <button
          className="rounded border px-3 py-1.5"
          onClick={() => {
            localStorage.removeItem(storageKey);
            setAnswers({});
          }}
          disabled={submitted}
        >
          Clear local answers
        </button>
      </div>
    </main>
  );
}
