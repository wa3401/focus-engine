#!/usr/bin/env node
// Builds the single copy-paste setup prompt (dist/PROMPT.md) and a Claude skill
// folder (dist/build-my-focus-engine/) from the source files, so there is one
// source of truth. Usage: node scripts/build-prompt.mjs
import { readFileSync, writeFileSync, mkdirSync, cpSync, rmSync, readdirSync, statSync } from "node:fs";
import { join, dirname, relative } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");
const read = (p) => readFileSync(join(root, p), "utf8");
const version = JSON.parse(read("package.json")).version;

const sections = [
  ["build-my-focus-engine/SKILL.md", "Setup instructions"],
  ["build-my-focus-engine/reference/preflight.md", "Reference: preflight"],
  ["build-my-focus-engine/reference/interview.md", "Reference: interview"],
  ["build-my-focus-engine/reference/admin-note.md", "Reference: admin note"],
  ["build-my-focus-engine/reference/install/README.md", "Reference: install guides"],
  ["build-my-focus-engine/reference/install/claude.md", "Install: Claude"],
  ["build-my-focus-engine/reference/install/chatgpt.md", "Install: ChatGPT"],
  ["build-my-focus-engine/reference/install/gemini.md", "Install: Gemini"],
  ["build-my-focus-engine/reference/install/copilot.md", "Install: Microsoft 365 Copilot"],
  ["build-my-focus-engine/reference/install/manual.md", "Install: no scheduling"],
  ["profile-template.md", "Template: Assistant Profile"],
  ["templates/_shared/run-loop.md", "Shared: run loop"],
  ["templates/_shared/verification.md", "Shared: verification"],
  ["templates/_shared/feedback.md", "Shared: feedback"],
  ["templates/_shared/safety.md", "Shared: safety"],
  ["templates/_shared/profile-io.md", "Shared: Profile reads and writes"],
  ["templates/my-smart-assistant/TEMPLATE.md", "Template: my-smart-assistant"],
  ["templates/prep-my-meetings/TEMPLATE.md", "Template: prep-my-meetings"],
  ["templates/shut-down-my-day/TEMPLATE.md", "Template: shut-down-my-day"],
  ["templates/hand-off-my-busywork/TEMPLATE.md", "Template: hand-off-my-busywork"],
];

const header = `# focus-engine setup (v${version})

Paste or attach this whole message in a new chat with your AI assistant, then say "build my focus engine".
It sets up helpers that bring you what needs your attention: a morning brief, meeting prep, an end-of-day shutdown, and a busywork audit.
It reads only what you connect, never sends anything to anyone but you, and you can stop anytime.

Below are the setup instructions followed by the reference files they mention. Treat "the file X" as the section titled X.
`;

const body = sections
  .map(([path, title]) => `\n\n---\n\n<!-- file: ${path} -->\n## ${title} (${path})\n\n${read(path).replace(/^---[\s\S]*?---\n/, "")}`)
  .join("");

rmSync(dist, { recursive: true, force: true });
mkdirSync(dist, { recursive: true });
const prompt = (header + body).replace(/1\.0\.0-dev/g, version);
writeFileSync(join(dist, "PROMPT.md"), prompt);

// Claude skill folder: SKILL.md at the root, everything it references beside it.
const skill = join(dist, "build-my-focus-engine");
cpSync(join(root, "build-my-focus-engine"), skill, { recursive: true });
cpSync(join(root, "templates"), join(skill, "templates"), { recursive: true });
cpSync(join(root, "profile-template.md"), join(skill, "profile-template.md"));
const skillMd = join(skill, "SKILL.md");
writeFileSync(skillMd, readFileSync(skillMd, "utf8").replace(/1\.0\.0-dev/g, version));
rmSync(join(skill, "evals"), { recursive: true, force: true });

const count = (dir) =>
  readdirSync(dir).reduce((n, f) => {
    const p = join(dir, f);
    return n + (statSync(p).isDirectory() ? count(p) : 1);
  }, 0);

console.log(`PROMPT.md: ${prompt.length.toLocaleString()} characters`);
console.log(`Skill folder: ${relative(root, skill)} (${count(skill)} files)`);
