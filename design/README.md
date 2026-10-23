# Vincent Le Quang — design portfolio site

Static site, no build step: `index.html`, `resume.html`, `css/style.css`, `js/main.js`, `img/`.
Fonts come from Google Fonts (Fraunces, Inter, JetBrains Mono). Everything else is local.

## Preview locally

```bash
python3 -m http.server 8000
```

then open http://localhost:8000/.

## Deploy

**Live:** https://jacklehamster.github.io/portfolio/ from the `main` branch of https://github.com/jacklehamster/portfolio
(GitHub Pages, source "Deploy from a branch", folder `/`). To publish a change: commit on `main` and `git push`;
the `pages-build-deployment` workflow redeploys in about a minute.

Other options considered:

1. **GitHub Pages, project site** (URL `https://jacklehamster.github.io/portfolio/`): create an empty public repo
   `jacklehamster/portfolio`, push this folder to its `main` branch, enable Pages on `main` / root.
2. **GitHub Pages, user site** (`https://jacklehamster.github.io/`): copy these files into the existing
   `jacklehamster.github.io` repo (it only holds an "old website" link today).
3. **dobuki.net subdomain**: Cloudflare Pages or a Worker serving this folder, e.g. `portfolio.dobuki.net`.

The résumé links in `index.html` point at `resume.html`; the one-page PDF is
`Vincent-Le-Quang-resume.pdf` (rendered from `resume.html` with Chrome, Letter size).

## Regenerating assets

Sources live in `~/portfolio-draft/assets/` and `~/power-troll-src/` (screenshots, marketing, steam).
Images were converted with ffmpeg to webp (max 1600 px wide, quality 82; pixel art lossless with nearest-neighbour).
GIF/MOV marketing clips were converted to webm (VP9) + mp4 (H.264) with a webp poster.

## Design system

Same tokens as the Figma file "Portfolio — Vincent Le Quang"
(https://www.figma.com/design/oMenQL0XteqazfFdGNPSUx): paper/ink palette, one accent per case
(troll pink, turtle blue, access green, misc orange), Fraunces for display, Inter for text,
JetBrains Mono for labels; 18 px radius for cards and figures, 10 px for strips, pill buttons.
