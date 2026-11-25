import { mkdirSync, writeFileSync } from "node:fs";

// The one-line exit: writes the entry to /output/entry.txt only.
// The grader runs this program in a read-only sandbox and reads
// /output/entry.txt, so no relative path is written anywhere.
// FIX (2026-11-25): the previous version wrote a relative entry.txt
// first, which throws in the read-only sandbox before /output is
// reached. This version writes /output only, unguarded.
const line =
  "I resign, effective immediately: the fire exit has been my only career plan since orientation, and today I am following it.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
