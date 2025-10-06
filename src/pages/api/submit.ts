// server-side only
import type { NextApiRequest, NextApiResponse } from "next";
import { createClient } from "@supabase/supabase-js";

const SUPA_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const SUPA_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY!; // server-only

const supabase = createClient(SUPA_URL, SUPA_KEY);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).end("Method not allowed");

  try {
    const { teamSlug, answers, startedAtISO, endedAtISO } = req.body;

    if (!teamSlug || !answers) return res.status(400).json({ error: "Missing fields" });

    // optional: reject oversized payloads
    if (JSON.stringify(answers).length > 200000) {
      return res.status(413).json({ error: "Payload too large" });
    }

    // capture requester info (IP / UA)
    const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress || null;
    const user_agent = req.headers["user-agent"] || null;

    const { error } = await supabase
      .from("submissions")
      .insert({
        team_slug: teamSlug,
        answers,
        started_at: startedAtISO ?? null,
        ended_at: endedAtISO ?? null,
        ip,
        user_agent,
      });

    if (error) {
      console.error("Supabase insert error:", error);
      return res.status(500).json({ error: error.message });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Server error" });
  }
}
