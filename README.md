# fikradigital — Webdesign-Studio

Source for the fikradigital.de website (GitHub Pages, trilingual EN/DE/AR).

**Deployment (Pages branch `gh-pages`):**

```bash
npm run build            # builds dist/
git checkout gh-pages    # branch that GitHub Pages serves
# replace site files with dist contents:
rm -rf assets restaurant dentists crown-blade mawj rihla vite.svg
cp -r ../fikradigital/dist/* .   # or: cp -r ../../cv-website/dist/* .
cp index.html 404.html            # SPA fallback for deep links
git add -A && git commit -m "deploy: ..." && git push origin gh-pages
```

- Live: https://fikradigital.de
- Domain in `CNAME` (both branches); DNS: A records `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
- Studio demos (restaurant, dentists, crown-blade, mawj, rihla) live in `public/` and ship with the build.
