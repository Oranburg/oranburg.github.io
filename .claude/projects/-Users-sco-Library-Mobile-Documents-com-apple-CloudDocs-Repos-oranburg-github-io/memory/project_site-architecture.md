---
name: Site architecture and current state
description: Complete state of oranburg.law and all companion sites — updated 2026-03-31
type: project
---

## Main Site: oranburg.law (Oranburg/oranburg.github.io)

**Platform:** Jekyll on GitHub Pages

**Content totals:**
- 47 publications in scholarship.yml (all with substantive abstracts, 40 with links)
- 37+ blog posts (insight posts from deep-read papers + originals + social media articles)
- 3 interactive demos (Trade Secret Paradox, Ostracism Game, Research Explorer)
- 3 course landing pages (Contracts, BA, Trade Secrets)
- 372 YouTube videos, 28+ podcast episodes cataloged
- Courses hub page (data-driven from videos.yml)

**All files are markdown or text.** Zero PDFs, zero DOCX.

**Data files:**
- `_data/scholarship.yml` — 47 publications, 7 clusters, CV-ready citations
- `_data/commentary.yml` — 11 items (16 more tracked in perma-cc-links.md)
- `_data/videos.yml` — 372 YouTube videos, 35 playlists
- `_data/podcasts.yml` — 28 Podbean episodes
- `_data/insights_taxonomy.yml` — 4 taxonomy buckets

**Reference docs:**
- `new-style/content-plan.md` — strategic direction + implementation status
- `new-style/insight-protocol.md` — how to write posts (first person, full read, verify)
- `new-style/deep-read-reflections.md` — reflection log with 6 papers completed
- `new-style/scholarship-yml-audit.md` — gap tracker
- `new-style/perma-cc-links.md` — 16 missing commentary items + all stats + all links
- `new-style/commentary-range.md` — outlet analysis
- `new-style/deeper-insights.md` — 22 secondary insights (6 have posts, 16 remaining)

**Deep-read posts completed:**
- Club Good, Wrong Plaintiff, Exclusive Inclusion, Beyond the Ivory Tower (AEN)
- Crosstagion, GENIUS Dilemma
- Securities Regulation and Social Media (2 posts)
- PTS casebook (description rewritten)

## Companion Sites

### safety-machine (Oranburg/safety-machine)
- **Book:** The Safety Machine: Harm Without Fault (formerly Judgment Proof)
- **Status:** Site built and pushed. 4 pages + Deskilling Loop Simulator
- **Contents:** Home, The Argument, Explore (game), About
- **Manuscript:** `manuscript/the-safety-machine.md` (2,503 lines)
- **Notes:** `manuscript/safety-machine-notes.yml` (comprehensive YAML)
- **Style:** Oranburg Style framework (oranburg-style.css + theme.js)
- **Deploy:** Enable GitHub Pages on the repo

### contracts-course (Oranburg/contracts-course)
- **Book:** Contract Law: Rules, Cases, and Problems (2d ed.)
- **Status:** Site built and pushed. Home page + Bilbo's Contract exercise
- **Contents:** Home (7 modules, resource stats), exercises/bilbo-contract.md
- **Manuscript:** Full casebook, teacher's manual, statutory supplement (all MD)
- **Notes:** `manuscript/course-notes.yml` (7 modules, all resources mapped)
- **Style:** Oranburg Style framework
- **Deploy:** Enable GitHub Pages on the repo

### Other Sites (already deployed)
- `oranburg.law/equally-poor/` — Equally Poor project
- `oranburg.law/PTS/` — Protecting Trade Secrets companion (7 chapters + 2 tools)
- `oranburg.law/law-governance/` — Law & Governance companion
- `actag.bio` — ACTAG project

## Key Rules (from memory files)
- Posts must be FIRST PERSON ("I argue")
- Tags must come from insights/topics/ valid list
- Source PDFs may be outdated — verify against SSRN before writing
- Read every page before writing an insight post
- Reflect after each paper, document in deep-read-reflections.md
- cv-engine is the source of truth (deferred until scholarship data complete)

## Stats (as of 2026-03-30)
- Google Scholar: 568 citations, h-index 12, i10-index 15
- SSRN: Rank 8,609 / 2,656,546 (top 0.3%), ~75K views, ~12K downloads
- YouTube: 8,350 subscribers, 621K views, 372 videos
- LinkedIn: 2,463 followers
- Podbean: ~1,060 downloads/month

## Remaining Work (priority order)
1. Add 16 commentary items to commentary.yml (tracked in perma-cc-links.md)
2. Deep-read and rewrite remaining digital asset papers (CLARITY, Function over Form)
3. Fill 7 remaining scholarship.yml link gaps (3 need journal URLs from Seth)
4. Write remaining 16 deeper-insight posts
5. cv-engine integration (architecture decided, gap analysis done)
6. Restructure Insights navigation (simplify 4-bucket/17-topic maze)
7. Read Contracts and BA casebooks for deeper descriptions
8. Build Risk vs Uncertainty and Two Purposes interactives for safety-machine
