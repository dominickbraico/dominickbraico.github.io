# dominickbraico.github.io

Personal engineering portfolio for Dominick Braico — a static site with no build step.

## Structure

```
index.html            page markup (nav, hero, about, experience, projects, resume, footer)
assets/css/style.css   styles
assets/js/main.js      scroll-reveal animation + mobile nav toggle
images/                project media, experience logos, favicons, resume PDF
```

## Editing content

All page content lives directly in `index.html`. Each section is clearly commented
(`<!-- ── ABOUT ─── -->`, etc.). To add or update a project, copy an existing
`<article class="proj-card">` block inside `#projects` and swap the media, title,
description, and tags.

## Running locally

No build tooling required — open `index.html` directly in a browser, or serve the
directory with any static file server, e.g.:

```
python -m http.server 8000
```

## Deployment

Served as-is via GitHub Pages from the repository root.
