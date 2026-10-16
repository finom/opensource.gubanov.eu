# opensource.gubanov.eu

The list of open source projects by Andrey Gubanov: https://opensource.gubanov.eu

A static Next.js site on GitHub Pages. The projects are in `src/data/projects.tsx`. GitHub stars and weekly npm installs are read at build time, and the `Deploy` workflow rebuilds the page every day.

```sh
npm install
npm run dev
```

`npm run build` writes the site to `out/`. Set `GITHUB_TOKEN` to avoid GitHub's rate limit for anonymous requests. The gates are `npm run typecheck` and `npm run lint`.
