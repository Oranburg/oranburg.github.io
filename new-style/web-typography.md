# Web Typography

**Status:** Established (core pattern decided March 2026). The serif/sans relationship on screen is resolved: sans-dominant with serif as an authority accent.

---

## The Pattern

Web pages use sans-serif for all structural text (headings, body, navigation, UI) and reserve serif for content that carries scholarly or authoritative weight — quotations, case excerpts, book titles, article titles, statutory text, taglines, and similar material where the shift to serif signals "this is source material" or "this is the literary voice."

This is not a decorative choice. The serif signals a change in register — from the author's own prose to the authorities being cited or the scholarly output being referenced. It distinguishes Seth's analytical voice (sans) from the primary sources and finished works (serif).

### Font Assignments

| Role | Font | Weight | Usage |
|---|---|---|---|
| Headlines | Oswald | 700 | H1, H2, H3, section labels, nav links, CTA buttons |
| Body | Roboto | 400 | Paragraph text, UI elements, form fields, captions, metadata |
| UI / Emphasis | Roboto | 500 | Labels, form labels, navigation secondary, bold inline |
| Authority Accent | Crimson Text | 400/600 | Quotations, case names, book titles, article titles, taglines, scholarship intros |
| Monospace | Roboto Mono | 400 | Code blocks, technical content (D-011) |

### Heading Hierarchy

| Level | Font | Size | Color | Additional |
|---|---|---|---|---|
| H1 | Oswald | 2.5rem (home) / 2rem (pages) | `--blue-deep` | — |
| H2 | Oswald | 2rem (home) / 1.3rem (pages) | `--blue-deep` | 3px bottom border in `--red-deep` |
| H3 | Oswald | 1.8rem (home) / 1.4rem (pages) | `--blue-bright` | — |
| H4 | Roboto | 1.3rem | `--red-deep` | weight: 500 |

### Line Height

- Body text: 1.7 (established in Jekyll CSS; good for long-form reading on screen)
- Headings: 1.1–1.2 (tight, as is conventional for display text)

### Letter Spacing and Case

- **Eyebrows / small labels only:** Uppercase + letter-spacing 1–2px. This is the ONLY context for uppercase.
- **Headings (H1–H3):** Title case. No uppercase. No letter-spacing. Oswald is already condensed and assertive — adding uppercase makes it shout.
- **Navigation links:** Uppercase is acceptable in nav bars. Letter-spacing 0.5px max.
- **Body text:** Default case, default spacing.

### Minimum Font Sizes (Readability Floor)

| Element | Minimum | Notes |
|---|---|---|
| Body paragraphs | 1rem (16px) | Non-negotiable |
| Card body text | 0.95rem | No smaller |
| Subtitles / literary accent | 1.15rem | Crimson Text must be readable, not decorative |
| H1 | 2.5rem | Generous |
| H2 | 1.8rem | Clear section break |
| H3 | 1.4rem | Distinct from body |
| Footer / fine print | 0.85rem | The only element allowed below 0.95rem |

## Structural Rules

- **No stacked headings (D-018):** On web pages, every heading must be followed by at least one paragraph of body text before the next heading. An H2 followed immediately by an H3 is a structural error. This applies to all page content — articles, about pages, project descriptions. If a section contains only subsections, write a brief introductory paragraph framing what follows.

## Font Loading

Google Fonts. The canonical embed loads full weight/italic ranges for all four families:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&family=Oswald:wght@200..700&family=Roboto+Mono:ital,wght@0,100..700;1,100..700&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
```

### CSS Custom Properties

```css
:root {
  --font-headline: 'Oswald', sans-serif;
  --font-body: 'Roboto', sans-serif;
  --font-accent: 'Crimson Text', serif;
  --font-mono: 'Roboto Mono', 'Consolas', 'Courier New', monospace;
}
```

## Applying the Serif Accent

The serif accent should be applied via CSS class, not by hard-coding font-family on individual elements. This makes the pattern explicit and portable:

```css
.authority, .literary {
  font-family: var(--font-accent);
}
```

Use `.authority` for quotations, case names, statutory text. Use `.literary` for book titles, article titles, taglines — or combine into one class if the distinction is unnecessary.

## Convergence Notes

- The oranburg.law landing page must be updated from Inter/system-ui to Oswald/Crimson Text/Roboto (D-008).
- Quaere (quaere.org) must be brought into the Oranburg Style: same font stack, dark-first palette, CSS variables (D-009).
- Border radius standardizes at 8px for cards and panels across all properties (D-010). The 16px value on the landing page is retired.
