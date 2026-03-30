# Insight Post Protocol

Version: 1.0 (2026-03-30)
Status: Active. Follow this protocol for every insight post — new or revised.

---

## Purpose

Each insight post translates ONE argument from ONE published paper into an accessible essay. The post must be accurate to the paper's actual text. No invented claims, no inferred positions, no arguments from older drafts.

---

## Pre-Writing Checklist

### 1. Source verification
- [ ] Identify the source paper by number and ID from `_data/scholarship.yml`
- [ ] Check if the PDF in `/scholarship/` is the CURRENT version (compare to SSRN if available)
- [ ] If the PDF is outdated, flag it and do NOT write until the current version is available
- [ ] Read the paper's abstract, introduction, AND conclusion (not just pages 1-3)

### 2. Claim extraction
- [ ] Write down the paper's MAIN THESIS in one sentence
- [ ] Write down 2-3 SUPPORTING ARGUMENTS the paper makes
- [ ] Write down any SPECIFIC FACTS cited (dollar amounts, case names, statistics, dates)
- [ ] Write down any FRAMEWORKS or TAXONOMIES the paper introduces
- [ ] Write down any PROPOSALS the paper makes (legislative, regulatory, doctrinal)
- [ ] For each claim: note the PAGE NUMBER where it appears

### 3. Verification
- [ ] For every factual claim in the post: can I point to a specific page in the paper?
- [ ] For every characterization of the paper's argument: does the paper actually say this?
- [ ] Does the paper make this claim in its CURRENT version, or only in an earlier draft?
- [ ] Am I attributing a position the author takes, or one the author merely describes?

---

## Writing Rules

1. **One paper, one point.** The post makes one argument from one paper. Secondary insights get their own posts.
2. **Attribution.** Use "Oranburg argues" or "the article proposes" — not "the law does X" (unless the paper establishes that the law does X).
3. **Quotes.** Include 1-2 direct quotes from the paper. Blockquote format. Verify the quote appears verbatim in the current version.
4. **No inference.** If the paper doesn't say it, the post doesn't say it. Do not extend the author's argument beyond what is written.
5. **Links.** End with a "Read the full article" section linking to the published source (journal website or SSRN). Include the full citation.

---

## Post Structure

```markdown
---
layout: post
title: "..."
date: YYYY-MM-DD
tags: [from valid taxonomy list only]
kind: essay | guide | commentary | reflection
source_papers: [paper-id]
featured: true | false
excerpt: "One sentence — the hook."
---

[Hook: a concrete fact, paradox, or question — 1-2 sentences]

[Context: why this matters — 1 paragraph]

## [Section heading: the core argument]

[The paper's main argument, with attribution — 2-3 paragraphs]

> [Direct quote from the paper]

## [Section heading: implication or framework]

[What follows from the argument — 2-3 paragraphs]

## [Optional: section heading for a secondary point]

[Closing thought — 1 paragraph. Not a summary. A forward-looking implication or an unresolved question.]

---

**Read the full article:** [Title](URL), Citation (Year).
```

---

## Valid Tags

From `insights/topics/` pages: bar-prep, business, civil-society, democracy, entrepreneurship, experiential-learning, fintech, legal-education, legal-innovation, markets, nonprofit, organizations, pedagogy, pluralism, regulation, securities, startup-law.

Use 3-4 tags per post. Every tag must have a matching topic page.

---

## Post-Writing Checklist

- [ ] Every factual claim is traceable to a specific page in the paper
- [ ] No claims from older drafts that may have been revised
- [ ] The paper's characterization of the law matches the CURRENT state of the law
- [ ] Tags are from the valid list only
- [ ] `kind` field is present
- [ ] `source_papers` field matches the ID in scholarship.yml
- [ ] The "Read the full article" link works
- [ ] The post makes ONE point clearly, not three points vaguely

---

## Error Log

Track errors found during review so the protocol can improve.

| Date | Post | Error | Root Cause | Protocol Fix |
|---|---|---|---|---|
| 2026-03-30 | what-the-genius-act-actually-does | Claimed GENIUS Act creates a "tailored private right of action" | PDF in repo was an earlier draft; the published version removed this provision. The earlier draft's abstract DID say this, so reading the abstract carefully still produced a wrong result. | Added source verification step: check PDF currency against SSRN. When the author flags an error, assume the PDF is outdated and ask for or await the current version. Propagated error to 4 files (post, scholarship.yml, audit, deeper-insights) — always grep for the error across all files. |
| 2026-03-30 | (all 18 posts) | Systematic risk: 13 posts written from audit summaries, not from paper text | Batch speed prioritized over accuracy | Created insight-protocol.md. Future posts must follow the full protocol: read actual paper pages, extract claims with page numbers, verify before writing. |

---

## Protocol Improvement

After every batch of posts (or after finding an error):
1. Add the error to the Error Log above
2. Identify the root cause
3. Add or modify a checklist item to prevent recurrence
4. Update the version number
