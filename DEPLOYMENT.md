# Deployment Runbook

## GitHub

1. Create `MadanChaollaPark/madanpark.com`.
2. Push `main`.
3. Configure GitHub Pages as `Deploy from a branch`, branch `main`, folder `/`.
4. Set the custom domain to `madanpark.com`.
5. Enable HTTPS once GitHub finishes certificate provisioning.

## DNS

For the apex domain, use GitHub Pages `A` records and optional `AAAA` records. For `www`, use a CNAME to `MadanChaollaPark.github.io`.

Avoid wildcard records for this domain.

## Verify

- `https://madanpark.com/` returns `200`.
- `/robots.txt`, `/sitemap.xml`, `/site.webmanifest`, and `/404.html` are reachable.
- Browser tab favicon appears in light and dark tabs.
- Social preview uses `/og-image.png`.
- `git log --oneline | wc -l` remains at least `50`.
