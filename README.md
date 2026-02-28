# oranburg.github.io

Personal site and blog for Seth C. Oranburg, built with [Jekyll](https://jekyllrb.com/) and hosted on [GitHub Pages](https://pages.github.com/).

---

## Local Preview

```bash
# Install dependencies (first time only)
bundle install

# Start a local server with live-reload
bundle exec jekyll serve --livereload
```

Open <http://localhost:4000> in your browser. Changes to posts and layouts are picked up automatically.

---

## Adding a New Post from iA Writer

### Filename convention

Posts live in `_posts/` and must follow this pattern:

```
YYYY-MM-DD-slug-here.md
```

For example: `_posts/2026-03-15-teaching-with-cases.md`

### Front matter template

Paste this at the top of every new post in iA Writer:

```yaml
---
layout: post
title: "Your Post Title Here"
date: YYYY-MM-DD HH:MM:SS -0500
categories: [philosophy]   # pick one or more: philosophy, teaching, podcast
tags: [tag1, tag2]
excerpt: "One or two sentences that describe the post. Used in the blog listing."
---
```

- **`layout`**: always `post`
- **`categories`**: determines which hub page the post appears on (`/philosophy/`, `/teaching/`, `/podcast/`)
- **`excerpt`**: shown on the blog index; keep it under ~160 characters

### Saving from iA Writer

1. In iA Writer, go to **File → Save…** (or use the share sheet on iOS/iPadOS).
2. Save or export as **Markdown** to `_posts/` with the correct filename.
3. Commit and push. GitHub Pages will rebuild the site automatically.

---

## Directory Structure

```
.
├── _config.yml          # Jekyll configuration
├── _layouts/
│   ├── default.html     # Shared HTML shell (header, nav, footer)
│   └── post.html        # Individual blog post template
├── _posts/              # Blog posts (Markdown)
├── assets/
│   ├── css/site.css     # Shared stylesheet
│   └── js/site.js       # Minimal JavaScript
├── blog/index.html      # Blog listing page
├── philosophy/index.html
├── teaching/index.html
├── podcast/index.html
└── index.html           # Landing page (static, not processed by Jekyll layouts)
```