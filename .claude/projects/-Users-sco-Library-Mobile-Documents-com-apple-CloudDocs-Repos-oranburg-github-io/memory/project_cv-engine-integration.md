---
name: CV engine integration — ready to build, not urgent
description: cv-engine repo is well-built, gap analysis done, transformation script needed — but scholarship page quality comes first
type: project
---

**Status:** Gap analysis complete (2026-03-30). Ready to build but deferred.
**Why deferred:** The scholarship page — the front door for litigation attorneys — has missing SSRN links, missing journal links, thin abstracts, and incomplete book descriptions. Fixing that is higher priority than plumbing between repos.

**When to revisit:** After scholarship.yml is complete and accurate — all links verified, all abstracts substantive, all books properly described.

**What to build when ready:**
1. Add citation field to cv-engine publications.yaml
2. Write transform script: cv-engine data → scholarship.yml + commentary.yml
3. Map tag vocabularies (cv-engine: crypto, corporate → website: fintech, organizations)
4. GitHub Action to push transformed YAML to oranburg.github.io
5. cv-engine has papers the website doesn't know about yet (Network Externalities, Legitimate University Governance, Beyond Form)
