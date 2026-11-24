import { writeFileSync, mkdirSync } from "node:fs";

// The tip is built from three beats: a concrete scene, the turn, the punchline.
const SETUP = "Tip: your agent just re-read the same file for the fifth time.";
const TURN = " It's not stuck — it's doing what you do in standup:";
const PUNCH = " stalling, and calling it thinking.";

function validateTip(text: string): void {
  if (text.length < 1 || text.length > 200) {
    throw new Error(`Tip must be 1-200 characters, got ${text.length}`);
  }
  if (text.includes("\n") || text.trim() !== text) {
    throw new Error("Tip must be a single line with no surrounding whitespace");
  }
}

const TIP = SETUP + TURN + PUNCH;
validateTip(TIP);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TIP, "utf8");
console.log(`Wrote ${TIP.length} characters to /output/entry.txt`);
