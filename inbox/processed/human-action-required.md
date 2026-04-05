# Human Action Required — Remaining Items from Katie's Review

These issues require your personal judgment or content that only you can supply.
The AI assistant handled everything it could autonomously (see the change log at the bottom).

---

## ISSUE-02 — About Section Bio: Plain Language Rewrite

**Katie said:** *"Consider using plain language! Especially for newer law students who may not be familiar with some of these concepts."*

**File to edit:** `index.html` — the About section (roughly lines 20–60, look for the section with your current bio text).

Katie provided a full plain-language draft. You can adopt it as written, revise it, or use it as inspiration:

> Seth C. Oranburg is a law professor who studies how new technology affects trust in business and government.
>
> He researches how technology changes what people consider right and wrong, and how it breaks down trust in institutions. He looks for ways the law can help rebuild that trust and keep markets honest.
>
> His work covers business law, securities rules, contracts, trade secrets, and digital money—including cryptocurrency and online autonomous organizations.
>
> Oranburg asks: How does law create trust in organizations? What should law do when institutions fail?
>
> Before becoming a professor, he worked as a lawyer helping startups and venture capitalists at Fenwick & West in Silicon Valley. He also worked on antitrust cases at Cadwalader, Wickersham & Taft in Washington, D.C.
>
> He graduated with honors from the University of Chicago Law School and magna cum laude from the University of Florida.

**Decision:** Replace the current bio with Katie's draft, adapt it, or leave as-is if you prefer the academic tone for your audience.

---

## ISSUE-03 — Add a Personal Touch to the About Section

**Katie said:** *"A sentence or two about your interests, hobbies, or life outside of work can help visitors and students get to know you beyond your professional accomplishments."*

**File to edit:** `index.html` — end of the About section bio.

Katie highlighted a specific sentence (in yellow in her PDF):

> *"When he isn't working, Attorney Oranburg enjoys discovering new hiking trails near his home in New Hampshire, spending time with his daughter, Zeeva, and cooking with his wife, Talia."*

**Decision:** Add this sentence (or your own version) at the end of the bio if you're comfortable sharing personal details on the site.

---

## ISSUE-04 — Hero Subtitle: Too Dense / Academic

**Katie said:** *"I just don't like this IDK"* (in response to the dense academic hero subtitle).

**File to edit:** `index.html` — the front matter field called `hero_subtitle` (line ~6):

```
hero_subtitle: "Researching how technological disruption destabilizes moral norms and social trust, and how legal design can restore integrity to markets and institutions"
```

**Options:**
1. **Simplify it** — e.g., `"Studying how law can rebuild trust when technology disrupts institutions."`
2. **Remove it** — delete the `hero_subtitle:` line entirely. The tagline already introduces you.
3. **Leave it** — if you feel this phrasing accurately targets your audience (faculty, scholars, media).

---

## ISSUE-09 — Contracts Podcast Possibly Not Loading

**Katie said:** *"Possibly a webpage issue because the podcasts work for me on the Trade Secrets Course page."* (mentioned twice)

**What to verify:** Open your site's Contract Law page (`/courses/contracts/`) in a browser, expand the "Listen to the Contract Law Podcast Series" dropdown, and confirm episodes are actually loading.

- The embed uses a Podbean playlist filter for Season 1 (`filter=season&season=1`).
- Trade Secrets uses Season 12 and works fine.

**If Season 1 is empty in Podbean:** Either update the season number to whatever season your contracts content lives in, or remove the season filter to show all episodes.

**File to edit (if needed):** `courses/contracts/index.html` — look for the `<iframe>` with `season=1` and update the season number.

---

## ISSUE-14 — Scholarship PDF Links (Still Needs Your Files)

The AI renamed the "PDF" label to **"Preprint"** on the Scholarship page — this is an accurate description of the markdown files currently being linked.

**But the real fix Katie expected** is linking to actual PDF documents. To do that:

1. Export PDFs of your published articles (from your own files, Westlaw, publisher agreements, SSRN, etc.)
2. Upload them to the repository under `/assets/pdfs/` (create that folder if needed)
3. In `_data/scholarship.yml`, update each `links.pdf:` value to point to the PDF file, e.g.:
   ```yaml
   links:
     pdf: "/assets/pdfs/oranburg-genius-dilemma.pdf"
   ```
4. You can do this incrementally — one paper at a time — and the "Preprint" label will automatically show a proper PDF when the path is updated.

**Note:** Check your publication agreements. Some publishers restrict hosting PDFs publicly. SSRN links (already present for most entries) are the safest alternative for restricted papers.

---

## What Was Fixed Automatically

The following 11 issues from Katie's review were fixed in code by the AI assistant:

| Issue | Fix Applied |
|-------|-------------|
| **ISSUE-01** | Added `tagline: "Law Professor \| Fintech Scholar \| Public Commentator"` to all non-home pages so the header is consistent site-wide |
| **ISSUE-05** | Added brief sub-descriptions under "Featured Guides & Essays" and "Latest Notes & Commentary" on the Insights page to clarify their distinction |
| **ISSUE-06** | The Insights topic back button now reads "← Back to [Bucket Name]" (e.g., "← Back to Lawyers & Learning") instead of always going to the generic Library |
| **ISSUE-07** | The nav bar "Courses" link now points to `/courses/` (the main hub). The `/lectures/` page was renamed "Video Lectures & Podcasts" with its own back link to `/courses/` to make the hierarchy clear |
| **ISSUE-08** | Added `← Back to Courses` link at the top of all three course pages: Contracts, Business Associations, Trade Secrets |
| **ISSUE-10** | Contracts Related Scholarship now shows SSRN and Full Text links (where available) alongside each article |
| **ISSUE-11** | Fixed BA casebook display: no longer shows a dangling comma when the publisher field is empty. Now renders as "(forthcoming 2026)" cleanly |
| **ISSUE-12** | BA Related Scholarship now shows SSRN and Full Text links (where available) alongside each article |
| **ISSUE-13** | Trade Secrets casebook: removed hardcoded "forthcoming" from the intro paragraph; book card now shows "Buy now" (since the book is published); publisher display is conditional |
| **ISSUE-14** | Renamed "PDF" label to "Preprint" on the Scholarship page — an accurate description until real PDF files are uploaded (see remaining work above) |
| **ISSUE-15** | Contact page intro no longer says "reach out directly" since no direct contact info is displayed |
