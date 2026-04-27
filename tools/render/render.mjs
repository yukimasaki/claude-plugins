#!/usr/bin/env bun
// Render an HTML file to PNG (static) and/or WebM (animated) via Playwright.
//
// Usage:
//   bun render.mjs <input.html> [options]
//
// Options:
//   --out <dir>          Output directory (default: dirname of input)
//   --name <basename>    Output basename (default: input basename without .html)
//   --size <WxH>         Viewport size, e.g. 1280x640 (default: 1280x640)
//   --duration <ms>      WebM recording duration (default: 6000)
//   --wait <ms>          Settle time after fonts.ready before capture (default: 500)
//   --no-png             Skip PNG output
//   --no-webm            Skip WebM output
//   --help               Show this message
//
// Examples:
//   bun render.mjs ./hero.html --name hero
//   bun render.mjs ./design.html --size 1920x1080 --no-webm
//   bun render.mjs ./animation.html --no-png --duration 12000

import { chromium } from "playwright";
import { parseArgs } from "node:util";
import { fileURLToPath } from "node:url";
import { dirname, resolve, basename, extname, join } from "node:path";
import { existsSync, readdirSync, renameSync, unlinkSync, mkdirSync } from "node:fs";

const HELP = `Usage: bun render.mjs <input.html> [options]

Options:
  --out <dir>          Output directory (default: dirname of input)
  --name <basename>    Output basename (default: input basename without .html)
  --size <WxH>         Viewport size (default: 1280x640)
  --duration <ms>      WebM recording duration in ms (default: 6000)
  --wait <ms>          Settle time after fonts.ready (default: 500)
  --no-png             Skip PNG output
  --no-webm            Skip WebM output
  --help               Show this message
`;

const { values, positionals } = parseArgs({
  args: process.argv.slice(2),
  options: {
    out: { type: "string" },
    name: { type: "string" },
    size: { type: "string", default: "1280x640" },
    duration: { type: "string", default: "6000" },
    wait: { type: "string", default: "500" },
    "no-png": { type: "boolean", default: false },
    "no-webm": { type: "boolean", default: false },
    help: { type: "boolean", default: false },
  },
  allowPositionals: true,
});

if (values.help || positionals.length === 0) {
  console.log(HELP);
  process.exit(values.help ? 0 : 1);
}

const inputArg = positionals[0];
const inputPath = resolve(process.cwd(), inputArg);
if (!existsSync(inputPath)) {
  console.error(`[render] input not found: ${inputPath}`);
  process.exit(1);
}

const sizeMatch = String(values.size).match(/^(\d+)x(\d+)$/);
if (!sizeMatch) {
  console.error(`[render] invalid --size "${values.size}" (expected WxH, e.g. 1280x640)`);
  process.exit(1);
}
const width = Number(sizeMatch[1]);
const height = Number(sizeMatch[2]);
const duration = Number(values.duration);
const wait = Number(values.wait);

const outDir = values.out ? resolve(process.cwd(), values.out) : dirname(inputPath);
const baseName = values.name ?? basename(inputPath, extname(inputPath));
mkdirSync(outDir, { recursive: true });

const fileURL = "file://" + inputPath;
const wantPng = !values["no-png"];
const wantWebm = !values["no-webm"];

if (!wantPng && !wantWebm) {
  console.error("[render] both --no-png and --no-webm given, nothing to do");
  process.exit(1);
}

console.log(`[render] launching chromium…`);
const browser = await chromium.launch();

if (wantPng) {
  const page = await browser.newPage({
    viewport: { width, height },
    deviceScaleFactor: 1,
  });
  await page.goto(fileURL, { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(wait);
  await page.addStyleTag({
    content: `*, *::before, *::after { animation-play-state: paused !important; transition: none !important; }`,
  });
  await page.waitForTimeout(200);
  const pngPath = join(outDir, `${baseName}.png`);
  await page.screenshot({
    path: pngPath,
    type: "png",
    clip: { x: 0, y: 0, width, height },
  });
  console.log(`[render] ${pngPath} written (${width}x${height})`);
  await page.close();
}

if (wantWebm) {
  const context = await browser.newContext({
    viewport: { width, height },
    recordVideo: { dir: outDir, size: { width, height } },
  });
  const page = await context.newPage();
  await page.goto(fileURL, { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(duration);
  await page.close();
  await context.close();

  // Playwright writes a hashed filename — rename to <baseName>.webm
  const webmFiles = readdirSync(outDir).filter((f) => f.endsWith(".webm"));
  for (const f of webmFiles) {
    const src = join(outDir, f);
    const dst = join(outDir, `${baseName}.webm`);
    if (src !== dst) {
      try { unlinkSync(dst); } catch {}
      renameSync(src, dst);
    }
  }
  console.log(`[render] ${join(outDir, `${baseName}.webm`)} written (${width}x${height}, ~${duration}ms)`);
}

await browser.close();
console.log(`[render] done`);
