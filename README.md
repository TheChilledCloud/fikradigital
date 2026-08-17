# fikradigital — Webdesign-Studio

Source for the fikradigital.de website — standalone trilingual (EN/DE/AR) web-design studio site, hosted on GitHub Pages.

- Live: **https://fikradigital.de**
- Repo: `TheChilledCloud/fikradigital` — `main` = source, `gh-pages` = built site (Pages source branch)
- Demo subpaths (restaurant, dentists, crown-blade, mawj, rihla) live in `public/` and ship with the build.

## Deploy

```bash
npm install          # if node_modules missing (NODE_ENV=development npm install on this host)
npm run build        # → dist/
git checkout gh-pages
rm -rf assets crown-blade dentists mawj restaurant rihla vite.svg
cp -r ../fikradigital/dist/* .   # from the project root: cp -r dist/* .
cp index.html 404.html           # SPA fallback so deep links render the app
git add -A && git commit -m "deploy: ..." && git push origin gh-pages
git checkout main
```

## DNS (fikradigital.de at GoDaddy)

Replace the GoDaddy parking A records with the four GitHub Pages A records:

| Type | Name | Value |
|------|------|-------|
| A | @ | `185.199.108.153` |
| A | @ | `185.199.109.153` |
| A | @ | `185.199.110.153` |
| A | @ | `185.199.111.153` |

Then open repo **Settings → Pages** — if GitHub shows a verification TXT (`_github-challenge-fikradigital.de`), add it at GoDaddy too, then HTTPS auto-provisions.

Optional: `CNAME www → thechilledcloud.github.io` if you want www.fikradigital.de to work.
