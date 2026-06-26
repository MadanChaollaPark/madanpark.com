# QA Checklist

- Run `python3 scripts/check_links.py`.
- Run `python3 -m http.server --bind 127.0.0.1 4173`.
- Open `/`, `/work/`, `/lab/neatcode/`, `/contact/`, and `/404.html`.
- Check desktop width around 1440px and mobile width around 390px.
- Tab through header, style switcher, project cards, and contact buttons.
- Confirm style choice persists across routes.
- Confirm `/CNAME` contains only `madanpark.com`.
- Confirm `git log --oneline | wc -l` is at least `50` before push.
