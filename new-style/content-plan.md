# Content Plan — oranburg.law

Generated: 2026-03-29
Source: Full audit of 28 published works, 2 book manuscripts, 14 WIP docs, and current site structure.

---

## Guiding Principles

1. **Seth's voice only.** Every insight post draws directly from his published work. No invented arguments, no paraphrasing-as-if-original. The insights are windows into the scholarship, not substitutes.
2. **Serif for authority.** When quoting or referencing Seth's published text, use `.authority` class (Crimson Text). His analytical voice stays in Roboto.
3. **Dark-first.** All new pages follow the Oranburg Style system (see `new-style/css-variables.md`).
4. **No stacked headings.** Every H2 gets intro prose; every H3 gets a framing sentence.
5. **Link to the source.** Every paper reference links to the published version (journal site, SSRN, or publisher). PDFs in `/scholarship/` are a fallback, not the primary link.

---

## I. Scholarship Page Overhaul (`/scholarship/`)

### Current state
- 5 books in a card grid
- 7 articles with expandable abstracts
- 1 featured video
- No organization by theme; chronological-ish

### Target state
The scholarship page becomes a **curated research portfolio** organized by thematic cluster, with every published work represented.

### Structure

```
/scholarship/
├── Hero: name, research statement, SSRN profile link
├── Thematic sections (each is an H2 with intro prose):
│   ├── Digital Assets & Financial Regulation (7 papers)
│   ├── Startup Finance & Crowdfunding (8 papers)
│   ├── Corporate Governance & Institutional Design (5 papers)
│   ├── Labor, Technology & the Gig Economy (4 papers)
│   ├── Legal Education & Pedagogy (6 papers, 3 textbooks)
│   └── Intellectual Property & Trade Secrets (3 papers)
├── Books section (card grid, as now but with all 5+1 forthcoming)
└── Cross-cutting: Civil Society & Institutional Reform (2 papers)
```

### Each article entry includes:
- Title (`.authority` class, linked to published source)
- Journal, volume, year
- 1-2 sentence description (from Seth's own abstract, condensed)
- Tags for themes
- Expandable full abstract (click to reveal)
- "Read" link → journal website or SSRN
- "PDF" link → local PDF (if in repo)
- "Companion site" link → where applicable (e.g., equally-poor, PTS)

### Links to published sources (to be verified/completed)
| # | Paper | Primary Link |
|---|---|---|
| 1 | Protecting Trade Secrets | cap-press.com (pre-order page) |
| 2 | Valuing Uncertain Trade Secrets | SSRN (forthcoming) |
| 3 | Market Power and Governance Power | CPI website |
| 4 | GENIUS Dilemma | SSRN 5366627 |
| 5 | Replacing Howey with CLARITY | SSRN 5288934 |
| 6 | Function over Form | SSRN 5254743 |
| 7 | A Systems Approach | (forthcoming — no link yet) |
| 8 | Beyond the Ivory Tower | AEN website |
| 9 | Contract Law 2d | cap-press.com |
| 10 | Q&A Business Associations 3d | cap-press.com |
| 11 | Advanced Online CLE | Journal of Legal Education |
| 12 | Antitrust for Blockchain | J. Corp. Law / uiowa.edu |
| 14 | ESG Disclosures | ABA Business Lawyer |
| 15 | History of Financial Technology | Cambridge UP |
| 16 | Social Media & Democracy | Mercer Law Review |
| 17 | Transaction Cost Economics | Journal of Legal Studies |
| 18 | Online Onboarding | ASU Corp. & Bus. L.J. |
| 19 | Corporations Hybrid | Willamette Law Review |
| 20 | Regulatory Democratization | SSRN |
| 21 | Securities Regulation & Social Media | Loyola U. Chi. L.J. |
| 22 | Balancing Flexibility & Rigidity | CUP chapter |
| 23 | Start-Up Financing 2.0 | SSRN / book chapter |
| 24 | Unbundling Employment | Drexel Law Review |
| 25 | Hyperfunding | Colorado Law Review |
| 26 | Female Entrepreneurs | J. Bus. Venturing Insights |
| 27 | Democratizing Startups | Rutgers Law Review |
| 28 | A Place of Their Own | Minnesota Law Review Headnotes |
| 30 | A Little Birdie Said | Fordham J. Corp. & Fin. L. |
| 31 | Bridgefunding | Cornell J.L. & Pub. Pol'y |

---

## II. Insights Content Plan

### What insights are
Short (800-1500 word) accessible essays that translate a published paper's argument for a broader audience. They are NOT summaries — they're entry points that make the reader want to read the source.

### Content pipeline: 18 insights from existing scholarship

Each insight maps to 1-2 papers. Grouped by cluster.

#### Cluster A: Digital Assets & Financial Regulation
1. **"What the GENIUS Act Actually Does"** — From paper 4. Explains the stablecoin regulatory framework in plain language. Why it matters: $260B market, TerraUSD collapse.
2. **"The Temporal Paradox: When a Security Stops Being a Security"** — From paper 5. The lifecycle problem of digital assets under Howey. Why CLARITY matters.
3. **"Not All Tokens Are Securities"** — From paper 6. The function-based framework for utility tokens. What a safe harbor would look like.
4. **"Antitrust for the Decentralized Internet"** — From paper 12. Why breaking up Big Tech with 19th-century tools could break the internet.
5. **"A Short History of Financial Technology"** — From paper 15. Key turning points from the Cambridge book, with timeline.

#### Cluster B: Startup Finance & Crowdfunding
6. **"Bridgefunding: Fixing the Series A Gap"** — From paper 31. The hold-out problem and the inverted-limits proposal.
7. **"Hyperfunding and the Tesla Problem"** — From paper 25. When consumer presales become de facto securities offerings.
8. **"Why Equity Crowdfunding Hasn't Democratized Startups"** — From papers 27 + 28. The JOBS Act's broken promise, illiquidity, and "Too Small To Succeed."
9. **"The Gender Gap in Crowdfunding"** — From paper 26. Empirical findings on female entrepreneurs receiving less when asking for more.

#### Cluster C: Corporate Governance & Institutions
10. **"ESG Disclosure Can Backfire"** — From paper 14. The information paradox: how mandatory ESG rules could reduce CSR.
11. **"Social Media, Corporate Power, and the Giant Goldfish"** — From paper 16. Who really controls speech online, and why it matters for democracy.
12. **"Twitter and the Future of Shareholder Activism"** — From paper 30. How social media solves collective action problems in corporate governance.

#### Cluster D: Labor & the Gig Economy
13. **"Unbundling Employment: A Better Way to Classify Gig Workers"** — From paper 24. The Form GW proposal.
14. **"Why Technology Is Replacing Employment"** — From paper 17. Transaction cost economics explains the rise of gig work.

#### Cluster E: Legal Education
15. **"Why CLE Doesn't Work (and How to Fix It)"** — From paper 11. Learning science vs. seat-time compliance.
16. **"Teaching IP as a System"** — From paper 7. Why siloed IP courses fail students.

#### Cluster F: Trade Secrets & IP
17. **"The Paradox of Valuing Trade Secrets"** — From paper 2. How do you price something whose value depends on secrecy?

#### Cross-cutting
18. **"Beyond the Ivory Tower: Antisemitism, Anti-Zionism, and Campus Free Speech"** — From paper 8. The liberal-realist framework.

### Publishing cadence
These can be written in batches of 3-5. Each one is a Jekyll `_post` with:
- `layout: post`
- `category:` matching the taxonomy bucket
- `tags:` matching topic pages
- `source_papers:` (custom frontmatter listing paper numbers)
- `featured: true/false`

---

## III. Interactive Demos

### What makes sense
Seth's work contains several frameworks that lend themselves to interactive exploration. These would live as standalone HTML pages under `/demos/` or as embedded components.

### Planned demos (in priority order)

#### 1. Digital Asset Classification Flowchart
**Source:** Papers 4, 5, 6 (GENIUS, CLARITY, Function over Form)
**What it does:** User answers 5-7 yes/no questions about a token/asset → the tool classifies it as security, commodity, utility token, or payment stablecoin under current law vs. proposed frameworks (GENIUS Act, CLARITY Act).
**Implementation:** Pure HTML/CSS/JS. No backend. Decision tree logic in JS. Results cite the specific statutory provisions.
**Location:** `/demos/token-classifier/`
**Cross-link from:** Insights 1, 2, 3; scholarship page cluster 1.

#### 2. Startup Financing Decision Guide
**Source:** Paper 23 (Start-Up Financing 2.0)
**What it does:** Interactive questionnaire that walks a founder through key questions (stage, amount needed, control preferences, investor access) and recommends financing approach (debt, equity, convertible, crowdfunding) with pros/cons.
**Implementation:** Pure HTML/CSS/JS.
**Location:** `/demos/startup-financing/`
**Cross-link from:** Insight 6; scholarship page cluster 2.

#### 3. Financial Technology Timeline
**Source:** Paper 15 (History of Financial Technology)
**What it does:** Interactive horizontal timeline from colonial-era incorporation through cryptocurrency. Click/tap any era to expand details. Color-coded by regulatory regime.
**Implementation:** Pure HTML/CSS/JS with scroll-based interaction.
**Location:** `/demos/fintech-timeline/`
**Cross-link from:** Insight 5; scholarship page.

#### 4. Regulatory Burden Matrix
**Source:** Paper 20 (Regulatory Democratization)
**What it does:** 2x2 matrix (complex/simple × rules/standards) with example regulations in each quadrant. Hover/click for explanation of why each type affects startups differently.
**Implementation:** Pure HTML/CSS/JS.
**Location:** `/demos/regulation-matrix/`

### Demos NOT to build yet
- Governance measurement tool (paper 3) — the dual-metric framework is too technical for a general audience
- Gig worker benefits calculator (paper 24) — the Form GW proposal is speculative/normative, not a practical tool

---

## IV. What to Exclude

### Not ready for public showcase
- **All `/scholarship/wip/` files** — The WIP directory has no readme content and contains early-stage manuscripts. Do not reference, summarize, or link to these.
- **Judgment Proof manuscript** — Book in progress. The `/scholarship/judgment-proof/` directory has the combined draft. Do not publish excerpts or summaries without explicit permission. It can be mentioned as "forthcoming" on the Books section.
- **Law and Governance manuscript** — Also in progress. The companion site `/law-governance/` already exists. Link to the companion site; do not excerpt the manuscript.

### Excluded from insights pipeline
- Paper 9 (Contract Law 2d) — textbook, not argumentative scholarship
- Paper 10 (Q&A Business Associations 3d) — study guide
- Paper 1 (Protecting Trade Secrets) — casebook; represented by the PTS companion site instead
- Paper 18 (Online Onboarding) — too narrow/pandemic-specific for a general insight
- Paper 19 (Corporations Hybrid) — same; pandemic-era pedagogy case study

### Books to list as "forthcoming"
- **Business Associations: Law of the Firm** (Aspen Press, 2027)
- **Judgment Proof** (describe as "forthcoming nonfiction" — no details)
- **Law and Governance** (link to /law-governance/ companion site)

---

## V. Cross-Linking Strategy

### From oranburg.law (this site)
| Destination | Where to link | Context |
|---|---|---|
| /equally-poor/ | Scholarship cluster 3; Insight 10 (ESG); footer | Companion to "Equally Poor" project |
| /PTS/ | Scholarship cluster 6; paper 1 card; footer | Companion to Protecting Trade Secrets casebook |
| /law-governance/ | Scholarship cluster 3; Books section; footer | Companion to Law & Governance manuscript |
| actag.bio | Footer; possibly Contact page | ACTAG project |
| SSRN profile | Scholarship page hero | Full paper collection |

### From companion sites back to oranburg.law
Each companion site should link back to:
- The main scholarship page (`oranburg.law/scholarship/`)
- The specific insight post that discusses its source paper
- The home page (already in footers)

---

## VI. Implementation Sequence

### Phase 1: Scholarship page rebuild — DONE (2026-03-30)
All 28 papers organized by 7 thematic clusters, data-driven from `_data/scholarship.yml`.
Home page research + commentary sections also refactored to read from YAML.

### Phase 2: First batch of insights — DONE (2026-03-30)
5 insight posts written for Digital Assets cluster:
1. What the GENIUS Act Actually Does
2. The Temporal Paradox: When a Security Stops Being a Security
3. Not All Tokens Are Securities
4. Antitrust for the Decentralized Internet
5. A Short History of Financial Technology

### Phase 3: Interactive Research Explorer — DONE (2026-03-30)
Hex diagram at `/scholarship/explorer/` with 6 cluster nodes + center,
drill-down to papers, expandable abstracts, keyboard accessible.
(Note: built as vanilla JS + CSS, not React — works without build step.)

### Phase 4: Remaining insights (steady content) — NEXT
Write in batches of 3-5, covering one cluster at a time.
Priority order: B (Startup Finance), C (Governance), D (Labor), E (Education), F (IP).
13 insights remaining from the original 18 planned.

### Phase 5: Fintech Timeline demo
After insights are populated, build the timeline as a visual anchor for the History of Financial Technology book.

### Phase 6: Lectures page refactor
Refactor `/lectures/` to read from `_data/videos.yml` and `_data/podcasts.yml`.
Embed YouTube videos by topic, link Podbean episodes by season.

---

## VII. File Locations

| Content | Path | Notes |
|---|---|---|
| Scholarship page | `/scholarship/index.html` | Data-driven from scholarship.yml |
| Research Explorer | `/scholarship/explorer/index.html` | Interactive hex diagram |
| Insight posts | `/_posts/YYYY-MM-DD-slug.md` | Jekyll posts with source_papers frontmatter |
| Paper PDFs | `/scholarship/*.pdf` | Already in repo |
| Manuscript drafts | `/scholarship/{name}/` | NOT linked publicly |
| WIP | `/scholarship/wip/` | NOT linked publicly |
| This plan | `/new-style/content-plan.md` | Reference doc |
| Scholarship audit | `/new-style/scholarship-audit.md` | Paper summaries and clusters |
| Data: scholarship | `_data/scholarship.yml` | 31 publications, 7 clusters |
| Data: commentary | `_data/commentary.yml` | Op-eds, media (weekly updates) |
| Data: videos | `_data/videos.yml` | 372 YouTube videos, 35 playlists |
| Data: podcasts | `_data/podcasts.yml` | 28 Podbean episodes |
| Data: taxonomy | `_data/insights_taxonomy.yml` | 4 insights taxonomy buckets |
