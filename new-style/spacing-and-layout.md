# Spacing and Layout

**Status:** Partially established. Web spacing patterns are visible in existing CSS. Print spacing has known values from manuscript audits but is subject to the typography discussion.

---

## Web Layout

### Content Width

| Context | Max Width | Source |
|---|---|---|
| Main content area | 1100px | Both oranburg.law stylesheets use `--max-width: 1100px` |
| Contact forms | 800px | Narrower for readability of form fields |
| Content prose (Quaere) | 400px | Very narrow — under review |

### Spacing Scale (Web)

No formal spacing scale has been declared. Current CSS uses ad hoc values. The following are the most common recurring values:

| Token | Value | Usage |
|---|---|---|
| xs | 0.25rem | Gap between nav items, minor padding |
| sm | 0.5rem | Card internal spacing, heading margins |
| md | 1rem | Standard padding, card gaps |
| lg | 1.5rem | Section padding, hero padding, grid gaps |
| xl | 2rem | Section margins, major vertical rhythm |
| 2xl | 3rem | Section separators, footer top margin |
| 3xl | 4rem | Section top margins on home page, header padding |

### Border Radius

| Context | Value | Notes |
|---|---|---|
| Cards, panels | 8px or 16px | 16px on dark landing; 8px on Jekyll pages |
| Buttons (CTA) | 6px | Rectangular with slight rounding |
| Pill buttons (nav) | 999px | Full pill shape on dark landing page nav |
| Tags / badges | 3px | Barely rounded |

**Open question:** The border-radius values are inconsistent between the dark landing page (16px, very rounded) and the Jekyll content pages (8px, moderate). Should these converge?

## Print Layout

### Margins

No explicit margin standard has been set. Typical law review and university press conventions:

- Standard: 1" all sides (Word default, most journal requirements)
- Some presses specify 1.25" left for binding gutter

### Line Spacing

| Document | Current Practice | Notes |
|---|---|---|
| Law review drafts | 1.1 (Seth's preference) | Tight for law; intentional |
| TSPT manuscript | 1.15 | Slightly looser; closest to Seth's current practice |
| Judgment Proof | 1.1 | Matches Seth's stated preference |
| QELS manuscript | (drifted) | Used default spacing; not Seth's choice |
| Journal submission | Double-spaced | Required by most law reviews regardless of author preference |

**Open question:** Should the style guide specify 1.1 as the default for all non-submission documents, with double-spacing noted as a submission-only override? Or vary by document type?

### Paragraph Spacing

| Style | Description | Usage |
|---|---|---|
| First-line indent | 0.5" indent, no space between paragraphs | Traditional for scholarship and books |
| Block paragraphs | No indent, space between paragraphs | Modern; used in correspondence and web |

**Open question:** Which paragraph style for which document types?
