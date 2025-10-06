// src/lib/types.ts
export type MCQ = { id: string; type: "mcq"; prompt: string; choices: string[] };
export type FR  = { id: string; type: "fr";  prompt: string };
export type Item = MCQ | FR;

export type ContestSet = {
  slug: string;
  title: string;
  division?: string;
  durationMinutes: number;
  items: Item[];
};

export type Award = { place: number; student: string; school: string; state?: string; score?: number };
export type HonMention = { student: string; school: string; state?: string };
export type DivisionWinners = { name: string; awards: Award[]; honorableMentions?: HonMention[] };

export type SeasonOverview = {
  year: number;
  title: string;
  blurb: string;
  highlights: string[];
};
