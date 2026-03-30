---
name: Token efficiency and agent usage
description: User strongly prefers intelligence and efficiency over speed — avoid parallel agent swarms that waste tokens
type: feedback
---

Do not launch 5 parallel agents to read PDFs. Use one agent with fail-safe file writes, or read PDFs directly with the Read tool (pages 1-3 for abstract+intro is sufficient).

**Why:** On 2026-03-29, launching 5 parallel agents burned tokens rapidly — 3 of 5 hit usage limits and returned nothing. The user explicitly said: "I'm looking for intelligence AND EFFICIENCY, not speed."

**How to apply:** For research tasks, use a single agent with incremental file writes as a fail-safe. For simple file reads (YAML, HTML, small markdown), read directly — don't spawn agents. Only use parallel agents when the tasks are truly independent AND cheap (e.g., running tests, checking multiple small files).
