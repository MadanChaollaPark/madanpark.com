# madanpark.com

Static personal portfolio for Madan Park. The site is built for GitHub Pages, custom domain `madanpark.com`, and a rollback-friendly commit history.

## Local Preview

```sh
python3 -m http.server --bind 127.0.0.1 4173
```

Open `http://127.0.0.1:4173`.

## Routes

- `/` - main portfolio.
- `/work/` - work index.
- `/work/kongor/` - Project KONGOR case study.
- `/work/lobbyear/` - policy video intelligence case study.
- `/work/eujobs/` - EU jobs marketplace case study.
- `/work/neatcode-style-lab/` - NeatCode style system case study.
- `/lab/` - experiments and style lab.
- `/lab/neatcode/` - six NeatCode-derived styles.
- `/writing/` - notes and public thinking.
- `/about/` - bio and operating principles.
- `/contact/` - contact and fit.
- `/now/` - current focus.

## Deploy

The repository is static. GitHub Pages should publish from `main` and `/`.

Keep `/CNAME` as exactly:

```txt
madanpark.com
```

## Notes

The design borrows product requirements from strong modern portfolio patterns while keeping the UI, copy, project framing, and assets original.
