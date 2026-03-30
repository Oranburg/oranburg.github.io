---
name: CV engine integration plan
description: How cv-engine repo connects to oranburg.github.io — scholarship.yml as shared data source, CV page, push workflow
type: reference
---

**cv-engine repo:** Oranburg/cv-engine (private). Seth has an existing project there for generating CVs.

**CV file on this site:** `cv/CV - Oranburg Curriculum Vitae.md` (339 lines, converted from DOCX)

**Architecture decision (2026-03-30): cv-engine is the source of truth.**
Seth does not edit YAML directly. cv-engine is the authoritative database.
It pushes clean YAML to oranburg.github.io. The website consumes, never authors.

**Three-layer design:**

Layer 1 (build now): cv-engine as database + generator
- Stores all publications, positions, awards, service, commentary
- Generates DOCX/PDF CVs on demand
- Pushes _data/scholarship.yml and _data/commentary.yml to oranburg.github.io
- Seth adds entries through UI or conversation, not YAML editing

Layer 2 (build soon): cv-engine as collaborator
- Cross-checks SSRN for current abstracts and links
- Verifies citation format (Bluebook)
- Flags stale entries ("this says forthcoming 2025 — has it been published?")
- Asks for confirmation before committing changes

Layer 3 (build later): cv-engine as active agent
- Scheduled sweeps of Gmail, Google Drive, calendar via Claude scheduling tools
- Surfaces accomplishments Seth hasn't recorded (conference invitations, SSRN uploads, committee appointments)
- Drafts CV entries, asks Seth to verify before committing

**Next steps:**
1. Examine cv-engine repo (Oranburg/cv-engine, private) — understand current state and data model
2. Align cv-engine data model with scholarship.yml structure (or make cv-engine generate it)
3. Build push workflow: cv-engine → GitHub API → oranburg.github.io/_data/
4. Create /cv/ page on oranburg.github.io that renders from the YAML data
5. Layer 2: add SSRN verification and citation checking

**All papers/books now readable as MD** — zero PDFs or DOCX remain in the repo.
