#!/usr/bin/env node
// Packs eval cases into paste-ready files for platforms without a file system
// (ChatGPT, Gemini, Copilot). For each case it writes two files:
//   dist/evals/<id>.run.md    paste into a fresh chat on the platform under test
//   dist/evals/<id>.grade.md  paste into a separate chat with the output to grade it
// Usage: node scripts/bundle-evals.mjs            (smoke cases)
//        node scripts/bundle-evals.mjs --all      (every case)
//        node scripts/bundle-evals.mjs msa-02 x-04 (by id prefix)
import { readFileSync, writeFileSync, mkdirSync, readdirSync, statSync, existsSync } from "node:fs";
import { join, relative } from "node:path";

const root = new URL("..", import.meta.url).pathname;
const evalsDir = join(root, "evals");
const outDir = join(root, "dist", "evals");
mkdirSync(outDir, { recursive: true });

const args = process.argv.slice(2);
const all = args.includes("--all");
const ids = args.filter((a) => !a.startsWith("--"));

const read = (p) => readFileSync(p, "utf8");
const walk = (dir) =>
  readdirSync(dir).flatMap((n) => {
    const p = join(dir, n);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });

const cases = readdirSync(evalsDir)
  .filter((d) => existsSync(join(evalsDir, d, "evals.json")))
  .flatMap((d) => {
    const j = JSON.parse(read(join(evalsDir, d, "evals.json")));
    const arr = j.evals || j.tests || Object.values(j).find(Array.isArray) || [];
    return arr.map((e) => ({ ...e, suite: d }));
  })
  .filter((e) => (ids.length ? ids.some((i) => e.id.startsWith(i)) : all || e.smoke));

const lang = (f) => (f.endsWith(".json") ? "json" : f.endsWith(".md") ? "markdown" : "");
const fence = (body, l) => {
  const ticks = body.includes("```") ? "````" : "```";
  return `${ticks}${l}\n${body.trimEnd()}\n${ticks}`;
};

const setupSkill = () => {
  const files = [
    "build-my-focus-engine/SKILL.md",
    ...walk(join(root, "build-my-focus-engine/reference")).map((p) => relative(root, p)),
    "profile-template.md",
    ...walk(join(root, "templates")).map((p) => relative(root, p)),
  ];
  return files.map((f) => `### ${f}\n\n${fence(read(join(root, f)), lang(f))}`).join("\n\n");
};

for (const c of cases) {
  const fx = join(root, c.files?.[0] || `evals/fixtures/${c.id}/`);
  const fixtureFiles = walk(fx).sort();
  const helper = fixtureFiles.find((f) => f.endsWith("/helper.md"));
  const data = fixtureFiles.filter((f) => f !== helper && !f.endsWith("README.md"));

  const parts = [
    `# Eval run: ${c.id}`,
    "Read everything below before you reply. Your instructions are in section 2. Section 3 is the simulated environment. Your reply should be only what the helper would deliver (plus the PROFILE WRITE-BACK section).",
    `## 1. Runner rules\n\n${read(join(evalsDir, "RUNNER.md"))}`,
    helper
      ? `## 2. Your instructions (the helper)\n\n${fence(read(helper), "markdown")}`
      : `## 2. Your instructions (the setup skill and its files)\n\n${setupSkill()}`,
    `## 3. Simulated environment\n\n` +
      data.map((f) => `### ${relative(fx, f)}\n\n${fence(read(f), lang(f))}`).join("\n\n"),
    `## 4. The message\n\n> ${c.prompt}`,
  ];
  writeFileSync(join(outDir, `${c.id}.run.md`), parts.join("\n\n") + "\n");

  const grade = [
    `# Grade eval: ${c.id}`,
    "You are a strict grader. Below are the expected outcome, a checklist, and the transcript of a run. For each expectation, answer PASS or FAIL with one line of evidence quoted from the output. A vague or partial match is a FAIL. End with `RESULT: n/N passed`.",
    `## Expected output\n\n${c.expected_output || "(none)"}`,
    `## Expectations\n\n${(c.expectations || []).map((e, i) => `${i + 1}. ${e}`).join("\n")}`,
    `## Simulated environment (for checking facts)\n\n` +
      data.map((f) => `### ${relative(fx, f)}\n\n${fence(read(f), lang(f))}`).join("\n\n"),
    "## Output to grade\n\nPaste the full output of the run below this line.\n\n---\n",
  ];
  writeFileSync(join(outDir, `${c.id}.grade.md`), grade.join("\n\n") + "\n");
  console.log(`${c.id}: run ${read(join(outDir, `${c.id}.run.md`)).length.toLocaleString()} chars`);
}
console.log(`\n${cases.length} case(s) written to ${relative(root, outDir)}/`);
