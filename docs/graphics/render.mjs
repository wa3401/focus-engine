// Screenshots the README graphics from willanderson.tech, light and dark, at 2x
// pixel density, into docs/images/. The diagrams are Astro components in the site
// repo (wa3401/consulting, apps/web/src/components/focus-engine/), rendered in
// their framed README form on /focus-engine/diagrams.
//
// Usage: run the site (`npx astro dev` or `npx astro preview` in apps/web), then
//   npm run graphics                     # all graphics
//   npm run graphics -- header           # just some of them
//   SITE_URL=https://willanderson.tech npm run graphics
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { statSync } from "node:fs";
import { spawnSync } from "node:child_process";

// Playwright is usually installed globally (NODE_PATH); createRequire honors that, ESM import does not.
const require = createRequire(import.meta.url);
const { chromium } = require("playwright");

const here = dirname(fileURLToPath(import.meta.url));
const out = join(here, "..", "images");
const site = (process.env.SITE_URL || "http://localhost:4321").replace(/\/+$/, "");

const graphics = ["header", "helpers-day", "profile-hub", "sources-flow"];
const only = process.argv.slice(2);
const unknown = only.filter((n) => !graphics.includes(n));
if (unknown.length) throw new Error(`unknown graphic(s): ${unknown.join(", ")} (have: ${graphics.join(", ")})`);

// Fonts come from Google Fonts; route the browser through HTTPS_PROXY when one is set,
// but reach a local dev or preview server directly.
const proxy = process.env.HTTPS_PROXY || process.env.https_proxy;
const browser = await chromium.launch(
  proxy ? { proxy: { server: proxy, bypass: "localhost,127.0.0.1,[::1]" } } : {},
);
const page = await browser.newPage({ viewport: { width: 1400, height: 1000 }, deviceScaleFactor: 2 });

for (const theme of ["light", "dark"]) {
  const url = `${site}/focus-engine/diagrams?theme=${theme}`;
  await page.emulateMedia({ colorScheme: theme });
  const res = await page.goto(url, { waitUntil: "networkidle" }).catch((e) => {
    throw new Error(`could not open ${url}. Is the site running? (${e.message.split("\n")[0]})`);
  });
  if (!res || !res.ok()) throw new Error(`${url}: HTTP ${res ? res.status() : "no response"}`);
  await page.evaluate(() => document.fonts.ready);
  const fonts = await page.evaluate(() =>
    ["Archivo", "IBM Plex Mono"].filter(
      (fam) => ![...document.fonts].some((f) => f.family.replace(/"/g, "") === fam && f.status === "loaded"),
    ),
  );
  if (fonts.length) throw new Error(`${url}: web fonts did not load: ${fonts.join(", ")} (offline?)`);
  // Round each graphic's height up to a whole pixel so the frame's bottom hairline
  // lands on the last row of the screenshot instead of a sliver above it.
  await page.evaluate(() => {
    for (const el of document.querySelectorAll("[data-graphic] > *")) {
      el.style.height = Math.ceil(el.getBoundingClientRect().height) + "px";
    }
  });

  for (const name of graphics) {
    if (only.length && !only.includes(name)) continue;
    const el = page.locator(`[data-graphic="${name}"]`);
    if ((await el.count()) !== 1) throw new Error(`${url}: no [data-graphic="${name}"] element`);
    const dest = join(out, `${name}-${theme}.png`);
    await el.screenshot({ path: dest, animations: "disabled" });
    // Shrink to a 256-color palette (Python + Pillow). If unavailable, keep the full-color PNG.
    const opt = spawnSync("python3", [join(here, "optimize.py"), dest], { encoding: "utf8" });
    if (opt.status !== 0) console.warn(`  (not optimized: ${(opt.stderr || opt.error || "").toString().trim().split("\n").pop()})`);
    const kb = Math.round(statSync(dest).size / 1024);
    console.log(`docs/images/${name}-${theme}.png  ${kb} KB`);
  }
}

await browser.close();
