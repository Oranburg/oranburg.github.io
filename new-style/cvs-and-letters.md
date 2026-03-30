# CVs and Cover Letters

**Status:** Established. These are high-stakes documents with a specific audience (hiring committees, press editors). They must look polished and professional without being flashy.

---

## Context

CVs and cover letters for academic positions, press submissions, and other formal professional contexts. The L&G submission packet (currently in TNR — see drift log DL-006) includes examples that need reformatting.

## Established Rules

- **Body size:** 12pt (D-005)
- **Margins:** 1" all sides (standard)
- **Paragraph style:** Block paragraphs for cover letters (no indent, space between paragraphs). CVs use a structured layout with sections, not flowing paragraphs.
- **Color:** Minimal. Blue for section headings and rules is acceptable. Red accent sparingly. Body text in black.

## Typography

- **Body:** Crimson Text Regular, 12pt, 1.15 line spacing (D-013, D-016)
- **Section headings (CV):** Oswald Bold or SemiBold, uppercase, for EDUCATION, PUBLICATIONS, etc. (D-015)
- **Cover letter body:** Crimson Text Regular, 12pt, block paragraphs
- **Letterhead (personal):** To be designed — name in Oswald, title/institution/contact in Roboto or Crimson Text
- **CUA letterhead:** When writing in official CUA capacity, CUA identity rules apply. See `cua-official.md`.

## Structural Rules

- **No stacked headings (D-018):** In cover letters, every heading or section label must be followed by body text. In CVs, section headings (EDUCATION, PUBLICATIONS, etc.) are followed by structured entries rather than prose, which satisfies the rule — the anti-pattern is a heading followed immediately by another heading with nothing between them.

## Pipeline

For the L&G packet and similar multi-document sets:
- Markdown or structured data → docx-js (Node.js) → .docx
- The generation script must use Oranburg Style fonts and formatting.

## Files to Regenerate

Once the style is finalized:
- `L&G - Submission Materials/Cover Letter - Harvard.docx`
- `L&G - Submission Materials/Cover Letter - Yale.docx`
- `L&G - Submission Materials/Cover Letter - Oxford.docx`
- `L&G - Submission Materials/Cover Letter - Cambridge.docx`
- `L&G - Submission Materials/Cover Letter - Chicago.docx`
- `L&G - Submission Materials/Curriculum Vitae - Seth C. Oranburg.docx`
