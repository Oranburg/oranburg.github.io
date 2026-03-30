# Typography

**Status:** Established. All font, heading, and spacing decisions are resolved as of March 2026.

---

## What Is Established

### One Unified Font System (D-013)
The Oranburg Style uses four font families everywhere — web, print, slides, correspondence:

| Family | Role | Weights Used |
|---|---|---|
| Crimson Text | Serif — print body, web authority accent, literary content | 400, 600, 700 + italics |
| Oswald | Sans display — headings, navigation, labels, slide titles | 200–700 (variable) |
| Roboto | Sans body — web body, UI, forms, captions | 100–900 (variable) + italics |
| Roboto Mono | Monospace — code blocks, technical content | 100–700 (variable) |

Garamond, Helvetica Neue, Inter, Arial, Source Sans Pro, and Source Serif Pro are all retired.

### Font Roles by Medium

**Web:** Oswald headings, Roboto body, Crimson Text as authority/literary accent (serif signals a change in register to source material). See `web/web-typography.md`.

**Print / PDF / Word:** Oswald headings over Crimson Text body (D-015). Sans/serif contrast, continuing Seth's longstanding pattern with CUA-aligned fonts.

**Slides:** Oswald headings, Roboto body, Crimson Text for quotations and case excerpts (D-012).

### Default Body Size Baseline
12pt, anchored to the convention that 12pt Times New Roman is standard in legal scholarship. Deviations from 12pt require justification (D-005).

### Display Font Constraint
Oswald Bold at display sizes (or Acumin Pro Extra Condensed Black where Adobe fonts are available) is for display headlines only — slides, banners, hero sections. Never for body text, never for correspondence, never below approximately 24pt.

### Google Fonts Canonical Embed (D-014)
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&family=Oswald:wght@200..700&family=Roboto+Mono:ital,wght@0,100..700;1,100..700&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
```

For print templates, all four families must be installed locally from Google Fonts downloads.

---

## Print Heading Hierarchy (D-015)

| Level | Font | Weight | Size | Usage |
|---|---|---|---|---|
| H1 | Oswald | Bold (700) | 16pt | Chapter titles, document titles |
| H2 | Oswald | SemiBold (600) | 14pt | Major sections |
| H3 | Oswald | Regular (400) | 12pt | Subsections |
| H4 | Roboto | Medium (500) | 12pt | Minor subdivisions (where needed) |
| Body | Crimson Text | Regular (400) | 12pt | Paragraph text |
| Emphasis | Crimson Text | Italic (400i) | 12pt | Case names, terms of art |
| Strong | Crimson Text | SemiBold (600) | 12pt | Key terms, defined phrases |
| Footnotes | Crimson Text | Regular (400) | 10pt | Citations, commentary |

## Structural Rules

### No Stacked Headings (D-018)
Every heading must be followed by at least one paragraph of body text before the next heading or subheading. Two consecutive headings with no intervening prose — e.g., an H2 immediately followed by an H3 — is a structural error.

**Why this matters:** A heading announces a section. If that section contains no text of its own, the heading is an empty container. The reader sees a label with no payload. This is especially common in AI-generated content, where models treat headings as hierarchical labels rather than section openers.

**The fix:** If an H2 contains only H3 subsections, write a brief introductory paragraph under the H2 that frames what the subsections will cover. Even one or two sentences suffices — it gives the reader context and signals that the H2 is a real section, not a filing cabinet drawer.

**Example of the error:**
```
## Governance Babel          ← H2
### Corporate governance     ← H3 immediately follows — stacked headings error
```

**Corrected:**
```
## Governance Babel          ← H2
This chapter surveys the major vocabularies that governance
scholarship has produced across disciplines.   ← body text

### Corporate governance     ← H3 now follows prose
```

### Local Font Installation Requirement
For Crimson Text, Oswald, Roboto, and Roboto Mono to render in Word, the font files must be installed locally on the user's system. Download the families from Google Fonts and install them. Word will display the font name in the ribbon even when the font is absent — it silently substitutes a system serif (typically Times New Roman) without warning. If characters look wrong (especially Crimson Text's distinctive W, which has visibly crossed diagonal strokes), the font is not installed.

---

## Line Spacing (D-016)

| Context | Line Spacing | Notes |
|---|---|---|
| Working documents | 1.15 | Default for all non-submission documents |
| Self-published materials | 1.15 | Pamphlets, white papers |
| Law review submissions | 2.0 (double) | Non-negotiable journal requirement |
| Footnotes | 1.0 (single) | Standard footnote convention |
| Slides | N/A | Slide-specific; see slides-and-presentations.md |

---

## Font Stacks

### Primary System (Google Fonts)
```css
--font-headline: 'Oswald', sans-serif;
--font-body-serif: 'Crimson Text', serif;
--font-body-sans: 'Roboto', sans-serif;
--font-accent: 'Crimson Text', serif;
--font-mono: 'Roboto Mono', 'Consolas', 'Courier New', monospace;
```

### Adobe Premium Equivalents (where licensed)
```css
--font-headline: 'Acumin Pro Extra Condensed', 'Acumin Pro Condensed', 'Oswald', sans-serif;
--font-body-serif: 'Warnock Pro', 'Crimson Text', serif;
--font-body-sans: 'Acumin Pro', 'Roboto', sans-serif;
```

### Compliance Override (law review submissions)
```css
font-family: 'Times New Roman', 'Times', serif;
font-size: 12pt;
line-height: 2;  /* double-spaced */
```

### CSS Classes (from Google Fonts)
```css
/* Crimson Text */
.crimson-text-regular         { font-family: "Crimson Text", serif; font-weight: 400; font-style: normal; }
.crimson-text-semibold        { font-family: "Crimson Text", serif; font-weight: 600; font-style: normal; }
.crimson-text-bold            { font-family: "Crimson Text", serif; font-weight: 700; font-style: normal; }
.crimson-text-regular-italic  { font-family: "Crimson Text", serif; font-weight: 400; font-style: italic; }
.crimson-text-semibold-italic { font-family: "Crimson Text", serif; font-weight: 600; font-style: italic; }
.crimson-text-bold-italic     { font-family: "Crimson Text", serif; font-weight: 700; font-style: italic; }

/* Oswald — variable weight */
.oswald { font-family: "Oswald", sans-serif; font-optical-sizing: auto; font-style: normal; }

/* Roboto — variable weight */
.roboto { font-family: "Roboto", sans-serif; font-optical-sizing: auto; font-style: normal; font-variation-settings: "wdth" 100; }

/* Roboto Mono — variable weight */
.roboto-mono { font-family: "Roboto Mono", monospace; font-optical-sizing: auto; font-style: normal; }
```
