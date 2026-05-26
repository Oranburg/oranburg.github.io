## LawJ tooling — read first

This repo is part of Seth Oranburg's writing/teaching ecosystem. The shared toolchain lives at:

`/Users/sco/Library/Mobile Documents/com~apple~CloudDocs/Repos/LawJ/LawJ/`

Before reaching for an agent or hand-writing utility code, check whether there is already a script in LawJ that does what you need. The pattern Seth prefers is **scripts over agents**: mechanical work belongs in a versioned, tested script, not in agent-improvised code.

### Graphics (figures, diagrams, charts)

This repo has the `lawj graphics` toolchain installed. Use it for any diagram, chart, or figure that ends up on a page in this repo:

```
cd "/Users/sco/Library/Mobile Documents/com~apple~CloudDocs/Repos/LawJ/LawJ"
PYTHONPATH=. .venv/bin/python -m lawj.cli graphics new mermaid <name> --type flowchart-lr
PYTHONPATH=. .venv/bin/python -m lawj.cli graphics render <file.mmd> --out-root <this-repo>/public/figures
PYTHONPATH=. .venv/bin/python -m lawj.cli graphics audit <file.mmd>
PYTHONPATH=. .venv/bin/python -m lawj.cli graphics register <name> <source> --alt "..." --used-in "<this-repo>:<page>"
```

The repo-local figure component (`Figure.astro`, `Figure.jsx`, or `figure.html` depending on stack) reads from `public/figures/web/` (or `assets/figures/web/` for Jekyll). The CSS palette at `src/styles/lawj-palette.css` (or `assets/css/`) is generated from `lawj/graphics/style.toml` — never edit by hand. After any palette change in LawJ, regenerate with `lawj graphics style css --out <this-repo>/<css path>`.

Full guide: `LawJ/docs/graphics-toolchain.md`. The graphics-editor subagent at `~/.claude/agents/graphics-editor.md` knows the CLI and the house aesthetic.

### Other LawJ subsystems worth knowing about

- `lawj export` for Markdown → DOCX (never pandoc directly).
- `lawj scrub-docx` before any DOCX leaves Seth's hands.
- `lawj ingest` for new documents into the scholarship library.
- `lawj add-person` / `add-place` / `people search` for the address book.
- `lawj verify-batch` / `verify-status` for citation verification rounds.
- Slide decks: PptxGenJS skill, not python-pptx.
- Books: `scripts/book_to_typst_pdf.py` (Typst) for production PDF.

See `LawJ/CLAUDE.md` for the full operating system. The LawJ CLAUDE.md is authoritative; this pointer just keeps a reminder in this repo.
