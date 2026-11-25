// One-Line Office Jokes
// program/v1 entry: writes a single one-line office joke to
// /output/entry.txt. Deterministic, no network, no input: the same
// line on every run. The file holds exactly the joke — no trailing
// newline — so the gate sees 120 characters of plain UTF-8 text,
// a single line with no title and no explanation.
//
// The joke turns on two real details of office life — the printer
// that jams at the worst moment, and the reply-all — and lands its
// laugh in the last few words: IT answers a one-person problem by
// emailing the entire company about it.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "The printer jammed, so I emailed IT — and IT replied-all to the whole company asking if anyone else's printer is jammed.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
