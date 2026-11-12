// Renders the brand graphics in docs/graphics/src/*.html to PNGs in docs/images/,
// light and dark, at 2x pixel density. Usage: npm run graphics
import { createRequire } from "node:module";
import { fileURLToPath, pathToFileURL } from "node:url";
import { dirname, join } from "node:path";
import { statSync } from "node:fs";
import { spawnSync } from "node:child_process";

// Playwright is usually installed globally (NODE_PATH); createRequire honors that, ESM import does not.
const require = createRequire(import.meta.url);
const { chromium } = require("playwright");

const here = dirname(fileURLToPath(import.meta.url));
const src = join(here, "src");
const out = join(here, "..", "images");

const graphics = [
  ["header.html", "header"],
  ["helpers-day.html", "helpers-day"],
  ["profile-hub.html", "profile-hub"],
  ["sources-flow.html", "sources-flow"],
];
const only = process.argv.slice(2);

// Fonts come from Google Fonts; route the browser through HTTPS_PROXY when one is set.
const proxy = process.env.HTTPS_PROXY || process.env.https_proxy;
const browser = await chromium.launch(proxy ? { proxy: { server: proxy } } : {});
const page = await browser.newPage({ viewport: { width: 1400, height: 1000 }, deviceScaleFactor: 2 });

for (const [file, name] of graphics) {
  if (only.length && !only.includes(name)) continue;
  for (const theme of ["light", "dark"]) {
    const url = pathToFileURL(join(src, file)).href + "?theme=" + theme;
    await page.emulateMedia({ colorScheme: theme });
    await page.goto(url, { waitUntil: "networkidle" });
    await page.evaluate(() => document.fonts.ready);
    await page.waitForSelector("body[data-ready='1']");
    const fonts = await page.evaluate(() =>
      ["Archivo", "IBM Plex Mono"].every((fam) =>
        [...document.fonts].some((f) => f.family.replace(/"/g, "") === fam && f.status === "loaded"),
      ),
    );
    if (!fonts) throw new Error(`${file}: web fonts did not load (offline?)`);
    const dest = join(out, `${name}-${theme}.png`);
    await page.locator(".frame").screenshot({ path: dest, animations: "disabled" });
    // Shrink to a 256-color palette (Python + Pillow). If unavailable, keep the full-color PNG.
    const opt = spawnSync("python3", [join(here, "optimize.py"), dest], { encoding: "utf8" });
    if (opt.status !== 0) console.warn(`  (not optimized: ${(opt.stderr || opt.error || "").toString().trim().split("\n").pop()})`);
    const kb = Math.round(statSync(dest).size / 1024);
    console.log(`docs/images/${name}-${theme}.png  ${kb} KB`);
  }
}

await browser.close();
