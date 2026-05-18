# oranburg.github.io

Personal site for Seth C. Oranburg, served at [oranburg.law](https://oranburg.law) via GitHub Pages. Built with [Jekyll](https://jekyllrb.com/).

---

## Local Preview

```bash
bundle install                              # first time only
bundle exec jekyll serve --livereload
```

Open <http://localhost:4000>. Changes to posts and layouts reload automatically.

---

## Contact Form

The contact form at `/contact/` posts to [Web3Forms](https://web3forms.com). The public access key lives in `_config.yml`:

```yml
web3forms_access_key: "1f621cd8-66ab-4b92-9f3c-1b3805e67a52"
```

The destination email is configured in the Web3Forms dashboard, not in this repo. A hidden `botcheck` honeypot field handles spam. To rotate the key, paste a new one and commit.

---

## Adding a New Post

Posts live in `_posts/` with the filename pattern `YYYY-MM-DD-slug.md`. Example: `_posts/2026-05-17-business-associations-law-in-theory-and-practice.md`.

Front matter template:

```yaml
---
layout: post
title: "Title"
date: 2026-05-17
tags: [tag1, tag2]
kind: announcement       # or oped-companion, essay, note
featured: false
excerpt: "One or two sentences for the blog index."
---
```

Save the Markdown file to `_posts/`, commit, and push. GitHub Pages rebuilds automatically.

---

## Data Files

Most page content is data-driven from `_data/`:

- `scholarship.yml` — books and articles (rendered on home, /cv/, /scholarship/, course pages)
- `commentary.yml` — op-eds, podcasts, quotes (rendered on home, /press/)
- `videos.yml` — YouTube series IDs (rendered on home, course pages)
- `podcasts.yml` — podcast metadata

Edit the YAML; do not hand-edit the rendered pages.

---

## Directory Structure

```
.
├── _config.yml             Jekyll configuration
├── _layouts/               default.html, post.html
├── _data/                  YAML data files
├── _posts/                 Blog posts
├── assets/
│   ├── css/site.css
│   ├── js/site.js
│   └── images-webp/        WebP-optimized images
├── images/                 Original JPEGs
├── cv/                     Curriculum vitae
├── press/                  Press hub
├── media-kit/              Bios and photos for journalists
├── start-here/             Curated reading guide
├── now/                    Current-state page
├── insights/               Essays and notes
├── courses/                Course pages (contracts, BA, trade-secrets)
├── scholarship/            Cluster pages and updates
├── contact/                Contact form
└── index.html              Home
```

Excluded from build: `Gemfile*`, `vendor/`, `ba/` (vestigial chapter manuscript), `inbox/`, `reports/`, `new-style/`, `.claude/`.
