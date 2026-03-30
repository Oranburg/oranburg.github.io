# Content Plan — oranburg.law

Updated: 2026-03-30 (end of session)
Source: Full audit of 28 published works, 2 book manuscripts, 14 WIP docs, current site structure, YouTube (372 videos), Podbean (108+ episodes), and strategic discussion about audience and information architecture.

---

## Strategic Direction (established 2026-03-30)

### High-Value Audience
Litigation attorneys evaluating potential expert witnesses. They arrive via Google searching for a scholar who has published on the specific issue in their case. The site must make Seth's published record discoverable by the search terms litigators use, without claiming expert witness credentials that don't yet exist.

### Secondary Audiences
- Journalists/staffers researching live policy questions (stablecoin, CLARITY Act, gig economy)
- Conference organizers evaluating speakers
- Fellow scholars looking for papers
- Professors evaluating casebooks
- Students in Seth's courses

### Design Principle
Optimize for the primary audience without building a separate "expert witness" page. The scholarship record, presented with litigation-relevant discoverability, does the work. Bar admissions (NH, CA, DC) and practice background (Fenwick & West, Cadwalader) should be visible. The site should make a litigator think "this is someone I should call" without ever saying "hire me."

### Information Architecture Decision
The 4-bucket/17-topic Insights taxonomy is over-engineered for the content it serves (10 posts across 23 navigation pages). Rather than filling it, restructure around:
1. **Topic tags that match search terms** — the words litigators and journalists actually Google (trade secret valuation, stablecoin regulation, digital asset classification, gig worker classification, antitrust blockchain)
2. **Course landing pages** — consolidate book + lectures + podcast + Quaere for each course (Contracts, Business Associations, Trade Secrets)
3. **Argument threads** — the long-arc intellectual trajectories that connect papers across years (discovery layer, not primary navigation)

The Quaere model (multi-dimensional taxonomy with knowledge dimensions and cognitive processes) informs this: content has multiple axes (domain, mode, trajectory) and shouldn't be flattened into one. But the primary tagging structure must serve the primary user, not the taxonomy designer.

---

## Completed Work (2026-03-30 session)

### Phase 1: Style Alignment — DONE
- Full Oranburg Style: dark mode default, semantic CSS variables, canonical fonts
- Sun/moon toggle in nav bar matching equally-poor
- Footer cross-links to equally-poor, PTS, law-governance, actag.bio
- Image cropping fix (object-position: top)

### Phase 2: Data System — DONE
- `_data/scholarship.yml` — 31 publications, 7 clusters, CV-ready citations
- `_data/commentary.yml` — 11 op-eds/podcasts/video
- `_data/videos.yml` — 372 YouTube videos, 35 playlists
- `_data/podcasts.yml` — 28 Podbean episodes
- Home page and scholarship page refactored to render from YAML
- Template at top of each file for easy additions

### Phase 3: Content — DONE
- Scholarship audit (`new-style/scholarship-audit.md`) — all 28 papers summarized
- 5 insight posts (Digital Assets cluster), tags fixed to match taxonomy
- Research Explorer at `/scholarship/explorer/` (hex diagram with drill-down)

### Phase 4: Documentation — DONE
- 7 memory files covering profile, plan, efficiency, architecture, YouTube, Podbean, tag rules
- Content plan updated with strategic direction

---

## Next Steps (prioritized)

### Step 1: Make practice background and bar admissions visible
Currently the home page bio mentions Fenwick & West and Cadwalader but bar admissions are only on the contact page. Move bar admissions into the About section or positions callout. This is the single easiest change that improves discoverability for the high-value audience.

### Step 2: SEO-optimize scholarship page for litigation search terms
Add meta descriptions and heading text that include the phrases litigators search for. Example: the trade secrets cluster heading could be "Trade Secret Misappropriation & Valuation" rather than "Intellectual Property & Trade Secrets." The papers already have the right content; the labels need to speak the litigator's language.

### Step 3: Add course landing pages
Create `/courses/contracts/`, `/courses/business-associations/`, `/courses/trade-secrets/` that consolidate for each course: the casebook (from scholarship.yml), the podcast season (from videos.yml), the YouTube lecture playlist (from videos.yml), and a link to Quaere. This serves professors and students — the secondary audience — without cluttering the primary path.

### Step 4: Prune dead pages
Remove or redirect: `/blog/`, `/podcast/`, `/philosophy/`, `/teaching/`. These are empty stubs that make the site feel abandoned. The content they promise either doesn't exist or lives elsewhere.

### Step 5: Write remaining insight posts (13 of 18 planned)
Cover the remaining clusters: Startup Finance (4 posts), Governance (3), Labor (2), Education (2), IP (1), Civil Society (1). Each post uses tags from the existing topic vocabulary.

### Step 6: Restructure Insights navigation
Replace the 4-bucket/17-topic maze with a simpler structure organized around the topics people actually search for. Keep the topic pages that have content; redirect or remove the empty ones.

### Step 7: Refactor lectures page
Read from `_data/videos.yml` to show YouTube lecture playlists organized by course and topic, instead of the current single Podbean embed with TODO placeholders.

### Step 8: Build the Fintech Timeline demo
Interactive timeline from the Cambridge book. Lower priority but high visual impact.

---

## File Locations

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
| Data: taxonomy | `_data/insights_taxonomy.yml` | 4 insights taxonomy buckets (under review) |

---

## Tag Vocabulary (for insight posts)

Valid tags (matching `insights/topics/` pages): bar-prep, business, civil-society, democracy, entrepreneurship, experiential-learning, fintech, legal-education, legal-innovation, markets, nonprofit, organizations, pedagogy, pluralism, regulation, securities, startup-law.

All posts must also include `kind:` (essay, guide, commentary, reflection).
