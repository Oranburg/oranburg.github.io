## Voice and tooling rules — see LawJ/CLAUDE.md

This repo is Seth Oranburg's personal website (oranburg.law). Voice rules apply to every page, post, and prose fragment shipped here.

The authoritative operating manual lives at:

`/Users/sco/Library/Mobile Documents/com~apple~CloudDocs/Repos/LawJ/LawJ/CLAUDE.md`

Read it before drafting or editing. The Markdown Checklist governs voice across all of Seth's prose work (no em dashes, no AI prose patterns, no "load-bearing," no cadence-as-AI-tell, no meta-negation, no signposted insight or stakes-elevation closers, voids not vapidity, full sentences always).

Mechanical enforcement: a global PostToolUse hook at `~/.claude/hooks/voice-check.sh` flags forbidden patterns on every Write/Edit. The canonical pattern inventory lives at `~/.claude/hooks/forbidden-patterns.txt`.

The shared toolchain (lawj CLI, graphics pipeline, /now page curator) lives in LawJ. The `/now` page on this site is curated by `lawj now audit` / `refresh` / `trim`; never edit `BOOK-OF-NOW.md` directly. Graphics use the lawj graphics toolchain.
