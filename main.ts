// The One-Line Laugh — make.fun entry (u-ronigrv-the-one-line-laugh-7ccca46f).
//
// Writes one funny line to /output/entry.txt: a single sentence of at
// most 200 characters. Deterministic: same bytes on every run.
// Node 22, no network, no dependencies.
import { mkdirSync, writeFileSync } from "node:fs";

// Revised v2: "reads like" — a report reads, it doesn't arrive; tighter
// verb, sounds more natural read aloud, same punchline.
const LINE =
  "My phone's screen time report reads like a performance review from a manager who watched me do nothing all week.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
