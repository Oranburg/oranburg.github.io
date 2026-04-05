# Katie's Web Review — Processed Notes
**Source:** `inbox/Oranburg Law Web - Review.pdf`  
**Reviewer:** Katie (Teaching Assistant)  
**Processed:** 2026-04-05  
**Machine-readable versions:** `katie-review-2026.json` / `katie-review-2026.yaml`

---

## Overview

Katie reviewed all five main sections of oranburg.law and provided 15 distinct observations spanning content quality, navigation UX, broken links, and structural issues. The site is a Jekyll/GitHub Pages academic portfolio using Liquid templates and YAML data files. This document summarizes her findings in plain terms with technical file references.

**Priority snapshot:** 1 high · 5 medium · 9 low

---

## 🔴 High Priority

### ISSUE-14 — Scholarship PDF Links Open Markdown Files
**Section:** Scholarship page  
**Katie said:** *"These 'PDF' links open md files. This happens with all 'PDF' links where they appear under this page."*

All 33 scholarship entries with PDF links in `_data/scholarship.yml` point to `.md` files (e.g., `/scholarship/04 Oranburg – PUBLICATION The Genius Dilemma.md`) — not actual PDFs. The rendered "PDF" link label is misleading.

**Fix options:**
- **Best:** Upload real PDF files to `/assets/pdfs/` and update `links.pdf` values in `scholarship.yml`
- **Quick:** Rename "PDF" label to "Preprint" or "Working Paper" in `scholarship/index.html` (line 79)
- **Alternative:** Remove local `.md` links and rely on SSRN links (most entries have `links.ssrn`)

---

## 🟡 Medium Priority

### ISSUE-01 — Header Tagline Inconsistency
**Section:** Site-wide header  
**Katie said:** *"Make subheading the same across all pages OR replace 'educator' with 'Commentator' for consistency with home page."*

Home page shows **"Law Professor | Fintech Scholar | Public Commentator"** (set in `index.html` front matter). All other pages fall back to a different tagline. The `default.html` layout (line 76) uses `page.tagline` if set, otherwise `site.description`.

**Fix:** Add `tagline: "Law Professor | Fintech Scholar | Public Commentator"` to the front matter of `insights/index.html`, `courses/index.html`, `lectures/index.html`, `scholarship/index.html`, and `contact/index.html`.

---

### ISSUE-02 — About Section Bio: Plain Language
**Section:** Home → About  
**Katie said:** *"Consider using plain language! Especially for newer law students who may not be familiar with some of these concepts."*

The current bio uses terms like "technological disruption," "decentralized autonomous organizations," and "institutional trust" that may alienate a general audience. Katie provided a complete plain-language draft in the PDF (see `katie-review-2026.json` → ISSUE-02 for the full text).

**Fix:** Replace bio text in `index.html` About section with Katie's draft or a similar plain-language version.

---

### ISSUE-06 — Insights Topic Back Button Skips Parent Bucket
**Section:** Insights → Library → [Bucket] → [Topic]  
**Katie said:** *"I was trying to go back to the 'Lawyers & Learning' page, but only option is to skip that page and go back to library."*

The back button in `_layouts/insights_topic.html` (line 48) always hardcodes `/insights/library/` regardless of which bucket (e.g., Lawyers & Learning at `/insights/library/lawyers-learning/`) the user came from. The breadcrumb shows the path but is not interactive for going back.

**Fix:** Add a `parent_bucket_url` front matter field to each of the 18 topic pages and update `insights_topic.html` to use it for the back link.

---

### ISSUE-07 — Duplicate Courses Pages (/lectures/ and /courses/)
**Section:** Courses  
**Katie said:** *"Duplicate??"*

Two pages both list the same 3 courses:
- `/lectures/` — what the navbar "Courses" link points to (`default.html` line 88)
- `/courses/` — the canonical base URL for course pages (e.g., `/courses/contracts/`)

The `/lectures/` page is richer (adds lecture playlists, podcast, assessment), while `/courses/` is a simpler course card grid with a CTA to `/lectures/`. A user clicking "Courses" in the nav hits `/lectures/`, but all course links go to `/courses/*`.

**Fix:** Consolidate into one page at `/courses/`, or give `/lectures/` a clearly distinct title like "Video Library."

---

### ISSUE-08 — No Back Button on Any Course Page
**Section:** Courses → Contracts, Business Associations, Trade Secrets  
**Katie said:** *"NO BACK BUTTON FROM CONTRACTS / BA / TS COURSE PAGE BACK TO COURSES"* (flagged on 3 separate PDF pages)

None of the three individual course pages (`courses/contracts/index.html`, `courses/business-associations/index.html`, `courses/trade-secrets/index.html`) have a back button or link to return to the courses hub. By contrast, Insights topic pages have `← Back to the Library`.

**Fix:** Add `<p><a href="/lectures/">← Back to Courses</a></p>` near the top of each course page, or create a `_layouts/course.html` layout that auto-injects this.

---

### ISSUE-13 — Trade Secrets Casebook: Stale "Forthcoming" Label
**Section:** Courses → Trade Secrets → Casebook  
**Katie said:** *"Link not active. 'Forthcoming' 2025?"*

The Trade Secrets course page (`courses/trade-secrets/index.html`) has hardcoded "forthcoming" and "Pre-order now" text that is not driven by the `status` field in `scholarship.yml`. The book (`protecting-trade-secrets`) is now `status: published` (2026) with a valid Carolina Academic Press link, but the template still shows the old labels.

**Fix:** Update template to conditionally render text based on `pts_book.status`.

---

## 🟢 Low Priority

### ISSUE-03 — Add Personal Touch to About Section
**Section:** Home → About  
**Katie said:** *"A sentence or two about your interests, hobbies, or life outside of work can help visitors and students get to know you."*

Katie provided a specific suggested sentence (highlighted in yellow): *"When he isn't working, Attorney Oranburg enjoys discovering new hiking trails near his home in New Hampshire, spending time with his daughter, Zeeva, and cooking with his wife, Talia."*

---

### ISSUE-04 — Hero Subtitle Too Dense
**Section:** Home → Hero  
**Katie said:** *"I just don't like this IDK"*

The hero subtitle (`hero_subtitle` field in `index.html` front matter, rendered in `default.html` line 77) reads as a dense academic mission statement. Katie's informal reaction suggests it feels off-putting. Consider simplifying or removing it.

---

### ISSUE-05 — Insights: Two Similar Section Headings
**Section:** Insights page  
**Katie said:** *"Duplicated intentionally? Just flagging."*

The Insights page has "Featured Guides & Essays" and "Latest Notes & Commentary" as two adjacent sections. The distinction is intentional but not obvious to newcomers. Consider adding sub-descriptions.

---

### ISSUE-09 — Contracts Podcast Possibly Not Loading
**Section:** Courses → Contract Law → Podcast  
**Katie said:** *"Possibly a webpage issue because the podcasts work for me on the Trade Secrets Course page."* (mentioned twice)

Both courses embed the same Podbean playlist with different season filters. Trade Secrets uses `season=12`, Contracts uses `season=1`. Worth verifying that season 1 returns episodes in the Podbean player.

---

### ISSUE-10 — Contracts: Related Scholarship Has No Links
**Section:** Courses → Contract Law → Related Scholarship  
**Katie said:** *"Link not active"*

The Related Scholarship section on the Contracts page renders articles as plain text (title + journal/year) with no hyperlinks. The main Scholarship page does render SSRN/Full Text/PDF links. Same issue exists on the BA page (ISSUE-12).

---

### ISSUE-11 — Business Associations: Dangling Comma in Book Display
**Section:** Courses → Business Associations → Casebooks  
**Katie said:** *"Looks like information is missing (see red arrows) – remove comma or add remaining information."*

The BA casebook (`business-associations-book`) has `journal: null` in `scholarship.yml`. The template renders `{{ ba_book.journal }} (forthcoming {{ ba_book.year }})` — producing a blank where the publisher name should be. Also, in the article list, `{{ pub.journal }}, {{ pub.year }}` produces `, 2026` when journal is null.

**Fix:** Wrap all journal references in `{% if pub.journal %}...{% endif %}` conditionals.

---

### ISSUE-12 — Business Associations: Related Scholarship Has No Links
**Section:** Courses → Business Associations → Related Scholarship  
**Katie said:** *"None of the links on this list are active."*

Same structural issue as ISSUE-10 — same fix applies.

---

### ISSUE-15 — Contact Page: "Reach Out Directly" With No Direct Contact Info
**Section:** Contact page  
**Katie said:** *"Might delete this sentence unless you provide a method for people to reach out directly (email, phone, etc.)"*

The page intro says "Use the form below or **reach out directly**" but no email address or phone number is shown. The contact form uses `sco259@nyu.edu` in a JavaScript mailto handler but doesn't display it.

**Fix:** Either remove "or reach out directly" OR display the email address visibly on the page.

---

## Technical File Quick-Reference

| File | Issues |
|------|--------|
| `index.html` | 01, 02, 03, 04 |
| `_layouts/default.html` (line 76–77) | 01, 04 |
| `_layouts/insights_topic.html` (line 48) | 06 |
| `insights/index.html` | 05 |
| `lectures/index.html` + `courses/index.html` | 07 |
| `courses/contracts/index.html` | 08, 09, 10 |
| `courses/business-associations/index.html` | 08, 11, 12 |
| `courses/trade-secrets/index.html` | 08, 13 |
| `scholarship/index.html` (line 79) | 14 |
| `_data/scholarship.yml` | 11, 12, 13, 14 |
| `contact/index.html` | 15 |
| `_config.yml` | 01 |
