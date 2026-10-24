# zomers.online

Static rebuild of [zomers.online](https://zomers.online), the personal site of Robert Zomers, replacing
the old WordPress install. Built with [Astro](https://astro.build) and edited through
[Drikus CMS](https://github.com/studioroor/drikus-cms).

## Development

```sh
bun install
bun run dev       # http://localhost:4321
bun run build     # static site in dist/
bun run check     # type-check
```

The scripts run Astro on Bun's runtime (`bun --bun`), so no particular Node version is needed.

## Content

All text and images live in JSON files that Drikus CMS edits. The forms are described in
[`.drikus/config.yml`](.drikus/config.yml).

| File                     | What                                                           |
| ------------------------ | -------------------------------------------------------------- |
| `src/data/home.json`     | Homepage: greeting, role cards, statement, logos, buttons       |
| `src/data/quiz.json`     | The "Ben jij een Tom, Kevin of Robert?" quiz                    |
| `src/data/settings.json` | Site name, scrolling bar, contact details, webring, copyright   |
| `public/uploads/`        | Images and PDFs, served from `/uploads/…`                       |

The quiz runs entirely in the browser. Every answer counts towards Tom, Kevin or Robert; the result
with the most answers wins, and a tie goes to the result listed first.

## Deployment

Every push to `main` (including CMS publishes) builds the site and deploys it to GitHub Pages via
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml). `public/CNAME` sets the custom
domain. Any other static host works too: build with `bun run build` and serve `dist/`.
