import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

async function render(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${path}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`https://preview.madanpark.test${path}`, {
      headers: { accept: "text/html", "x-forwarded-proto": "https" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

const routes = [
  ["/", "Madan Park — Five Rooms, One History", "Five rooms.", "Choose the room"],
  ["/operator", "The Unreasonable Operator — Madan Park", "Give me the market", "20.8K clicks"],
  ["/playground", "Tiny Useful Machines — Madan Park", "tiny machines", "Open the toybox"],
  ["/institutions", "The Evidence Brief — Madan Park", "institutions with consequences", "Evidence Sprint"],
  ["/story", "Pasta Water — Madan Park", "Pasta", "Bologna BookClub"],
  ["/lab", "Signal Intelligence — Madan Park", "Query the", "CASE INDEX"],
];

for (const [path, title, marker, secondaryMarker] of routes) {
  test(`server-renders ${path}`, async () => {
    const response = await render(path);
    assert.equal(response.status, 200);
    assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

    const html = await response.text();
    assert.match(html, new RegExp(`<title>${title.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}<\\/title>`, "i"));
    assert.match(html, new RegExp(marker, "i"));
    assert.match(html, new RegExp(secondaryMarker, "i"));
    assert.doesNotMatch(html, /codex-preview|Your site is taking shape|react-loading-skeleton/i);
    assert.match(html, /https:\/\/[^\"]+\/og\.png/i);
  });
}

test("the index links every audience-specific route", async () => {
  const html = await (await render("/")).text();
  for (const path of ["/operator/", "/playground/", "/institutions/", "/story/", "/lab/"]) {
    assert.match(html, new RegExp(`href=["']${path}["']`));
  }
  assert.match(html, /Only public-safe claims made the page/i);
});

test("starter assets are removed and finished-site assets are present", async () => {
  const [page, layout, css, packageJson] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);

  assert.doesNotMatch(page, /SkeletonPreview|codex-preview/);
  assert.doesNotMatch(layout, /Starter Project|codex-preview/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
  assert.match(css, /operator-site/);
  assert.match(css, /kawaii-site/);
  assert.match(css, /institution-site/);
  assert.match(css, /story-site/);
  assert.match(css, /lab-site/);

  await Promise.all([
    access(new URL("../public/favicon.ico", import.meta.url)),
    access(new URL("../public/favicon.svg", import.meta.url)),
    access(new URL("../public/apple-touch-icon.png", import.meta.url)),
  ]);
});
