declare module "@/data/site.json" {
  const site: {
    brand: string;
    fullName: string;
    tagline: string;
    city: string;
    state: string;
    domain: string;
    contactEmail: string;
    nextContest: {
      season: number;
      dateISO: string;
      label: string;
    };
  };
  export default site;
}

declare module "@/data/rules.json" {
  const rules: {
    philosophy: string;
    format: {
      sprint: {
        items: number;
        minutes: number;
        scoring: string;
      };
      solve: {
        items: number;
        minutes: number;
        pointsEach: number;
        rubric: string;
      };
    };
    tiebreakers: string[];
    integrity: string[];
    allowedTools: {
      A: string[];
      B: string[];
    };
    excludedTopics: string[];
  };
  export default rules;
}

declare module "@/data/divisions.json" {
  const divisions: Array<{
    id: string;
    name: string;
    grades: string;
    summary: string;
    calcAllowed: boolean;
  }>;
  export default divisions;
}

declare module "@/data/overview-2024.json" {
  const overview: {
    season: number;
    divisions: Array<{
      id: string;
      name: string;
      description: string;
    }>;
  };
  export default overview;
}

declare module "@/data/overview-2025.json" {
  const overview: {
    season: number;
    divisions: Array<{
      id: string;
      name: string;
      description: string;
    }>;
  };
  export default overview;
}

declare module "@/data/winners-2024.json" {
  const winners: {
    season: number;
    divisions: Array<{
      id: string;
      name: string;
      winners: Array<{
        place: number;
        name: string;
        school: string;
        score: number;
      }>;
    }>;
  };
  export default winners;
}
