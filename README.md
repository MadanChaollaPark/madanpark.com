# madanpark.com

**A responsive portfolio implemented with HTML, CSS and JavaScript.**

[Live website](https://madanpark.com) · [Current source](site/) · [Automated checks](scripts/check_site.py)

The current website source lives in **`site/`**. This snapshot was checked against the live homepage on 20 October 2026. Older HTML at the repository root is retained as the earlier GitHub Pages implementation.

## Software engineering

- Responsive layouts for project case studies and twelve visual experiments.
- Light/dark themes and JavaScript interactions, including the Patina experiment.
- Semantic document structure, keyboard-accessible navigation and image alternatives.
- Canonical URLs, per-page metadata, sitemap, web manifest and a dedicated 404.
- Automated checks for local links, anchors, assets, metadata and design-route completeness.
- Static asset build output for Cloudflare Workers; no application database required.

## Run and verify

```sh
npm ci
npm run dev
```

Open [localhost:4173](http://localhost:4173).

```sh
npm run check
npm run build
```

The check script validates the current `site/` tree. The older `scripts/check_links.py` remains for the historical root site. Building creates local static-asset output only; it does not deploy.

## Source map

| Path | Purpose |
| --- | --- |
| `site/index.html` | Current portfolio homepage |
| `site/work/` | EUJobs, ITCCK and GPTandME case-study pages |
| `site/directions/` | Twelve visual/interaction experiments |
| `site/portfolio.css`, `portfolio.js`, `portfolio-theme.js` | Current layout, interaction and theme implementation |
| `site/_headers`, `site/_redirects` | Static response policy and redirects |
| `scripts/check_site.py` | Current-site integrity checks |
| `scripts/build.mjs` | Static asset build |
| `cloudflare.config.ts` | Build configuration with an example account fallback |

## Publication boundary

The public configuration omits the deployment account ID. A real deployment requires the operator's own account configuration and authorization. No deployment command is run by the repository's validation workflow.

The root GitHub Pages files remain unchanged by this source publication. The current custom-domain website is served through the existing Cloudflare deployment.

For code-focused project examples, see [EUJobs](https://github.com/MadanChaollaPark/eujobs) and [Gmail migration tools](https://github.com/MadanChaollaPark/gmail-migration-tools).
