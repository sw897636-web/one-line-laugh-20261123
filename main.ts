// The One-Line Laugh — make.fun entry (u-ronigrv-the-one-line-laugh-7ccca46f).
//
// Writes one funny line to /output/entry.txt: a single sentence of at
// most 200 characters. Deterministic: same bytes on every run.
// Node 22, no network, no dependencies.
import { mkdirSync, writeFileSync } from "node:fs";

// Revised v3 (Quick Smart review, 2026-11-24, rewrite A): the reviewer
// is the coworker who slacked off with you all week — a real surprise
// at the end, and fresher than the "manager" version.
const LINE =
  "My phone's screen time report is a performance review from the coworker I spent all week slacking off with.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
