---
name: Insights posts must use existing tag vocabulary
description: New insight posts must use tags from insights/topics/ pages and include kind field — never invent new tag values
type: feedback
---

When writing new _posts/ files, tags MUST come from the existing topic pages in insights/topics/. The valid tags are: bar-prep, business, civil-society, democracy, entrepreneurship, experiential-learning, fintech, legal-education, legal-innovation, markets, nonprofit, organizations, pedagogy, pluralism, regulation, securities, startup-law.

Do NOT invent tags like "stablecoin", "GENIUS Act", "Big Tech", "DeFi" — those have no topic pages and orphan the post from the navigation.

Also include `kind:` (essay, guide, commentary, reflection) — not `category:`. The insights page uses `kind` for badges.

**Why:** On 2026-03-30, 5 new insight posts were written with invented tags that didn't match any topic page. The posts appeared in the Latest list but were unreachable from the Browse by Area navigation, making the insights section feel disjointed.

**How to apply:** Before writing a new post, check `ls insights/topics/` for valid tag names. Map the post's subject matter to 3-4 of those tags. Use `kind:` not `category:`.
