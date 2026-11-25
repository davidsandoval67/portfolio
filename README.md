# David Sandoval — Engineering Portfolio

Plain HTML/CSS/JS. No build step. Open the folder in VS Code and use the Live Server extension (or double-click `index.html`) to preview.

## Files
- `index.html` — the whole site: intro, projects, experience, education, skills, contact
- `assets/style.css` — all styling; change colors/fonts at the top in `:root`
- `assets/main.js` — project pop-up and photo enlarger (no edits needed)
- `assets/img/` — photos; `assets/img/logos/` — organization and school logos
- `files/` — resume and HERC design proposal PDFs

## Common edits
- **Add a project:** copy one `<article class="card">…</article>` block and edit it. The card shows the picture, title and facts; the text inside `<template class="detail">` shows in the pop-up.
- **Add a project group** (e.g. Coursework): copy a `<div class="group">…</div>` block.
- **Add a job:** copy one `<div class="row">…</div>` in the Experience section.
- **Change the big top-right photo:** replace `assets/img/tra-team.jpg` (same name), or change the `src` in the `feature` button.

## Publish on GitHub Pages
1. Create a public repo on GitHub named `portfolio`.
2. Upload everything inside this folder (not the folder itself) with "uploading an existing file", then Commit.
3. Repo → Settings → Pages → Source: "Deploy from a branch", branch `main`, folder `/ (root)` → Save.
4. Your site will be at `https://YOUR-USERNAME.github.io/portfolio/` in a minute or two.
5. Replace `YOUR-GITHUB-USERNAME` in the two `og:` lines of `index.html` with your username and upload `index.html` again.

To update later: edit the files, then upload the changed ones to the repo again (same names overwrite).
