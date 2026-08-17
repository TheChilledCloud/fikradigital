# fikradigital — Webdesign-Studio

Source for the fikradigital.de website — standalone trilingual (EN/DE/AR) web-design studio site.

- Live: **https://fikradigital.de** (Cloudflare Pages)
- Repo: `TheChilledCloud/fikradigital` — `main` = source (legacy `gh-pages` branch was the old GitHub Pages deploy)
- Demo subpaths (restaurant, dentists, crown-blade, mawj, rihla) live in `public/` and ship with the build.
- SPA fallback: `public/_redirects` (`/* /index.html 200`) — deep links return proper 200s.

## Deploy (Cloudflare Pages)

```bash
npm install          # if node_modules missing (NODE_ENV=development npm install on this host)
npm run build        # → dist/
wrangler login       # one-time OAuth (browser)
wrangler pages deploy dist --project-name fikradigital --branch main
```

Custom domain `fikradigital.de` is attached to the Pages project in the Cloudflare dashboard (DNS: zone already on Cloudflare; Pages project creates the record automatically). Email routing (info@fikradigital.de) is configured in the Cloudflare zone.

## Cloudflare agent setup

- Skills: `cloudflare/` category in the Hermes skill library (imported from `cloudflare/skills`, script at `AppData/Local/hermes/workspace/skill-imports/import_cloudflare_skills.py`, source copy at `~/.claude/skills/`)
- MCP servers registered in Hermes: `cloudflare`, `cloudflare-docs`, `cloudflare-bindings`, `cloudflare-builds`, `cloudflare-observability` (OAuth on first use)
