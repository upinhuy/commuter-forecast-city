// Charm the Commuter: Forecast a City That Isn't.
// Writes one line of weather forecast for a city that does not exist
// to /output/entry.txt. Deterministic: the same line every run.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Bramblewick: drizzle till 9, then sunshine so polite it apologises for the rain. Buses on time, puddles reflective, mood: unexpectedly fine.";

mkdirSync("/output", { recursive: true });

// Self-check the gate contract before writing: 1-140 characters, one line.
const chars = [...ENTRY];
if (chars.length < 1 || chars.length > 140) {
  throw new Error(`entry must be 1-140 characters, got ${chars.length}`);
}
if (ENTRY.includes("\n") || ENTRY.trim() !== ENTRY) {
  throw new Error("entry must be a single line with no surrounding whitespace");
}

writeFileSync("/output/entry.txt", ENTRY, "utf8");
