import { mkdirSync, writeFileSync } from "node:fs";

// One line, no trailing newline: the grader gates on 1-140 characters.
const line =
  "I resign as the zoo's overnight penguin keeper; they've unionized, and I can't afford the fish they're demanding.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
