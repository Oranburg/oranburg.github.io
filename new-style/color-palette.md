# Color Palette

**Status:** Established. Colors are drawn from the CUA institutional identity but belong to the Oranburg Style system. Variable names use neutral, semantic labels — not institutional names.

---

## Primary Colors

| Role | Hex | Suggested Variable | Origin |
|---|---|---|---|
| Deep Blue | #0A3255 | `--blue-deep` | CUA primary blue |
| Cardinal Red | #B21F2C | `--red-deep` | CUA primary red |

## Secondary Colors

| Role | Hex | Suggested Variable | Origin |
|---|---|---|---|
| Bright Red | #E82F35 | `--red-bright` | CUA secondary |
| Bright Blue | #2459A9 | `--blue-bright` | CUA secondary |
| Light Red | #E96955 | `--red-light` | CUA secondary |
| Light Blue | #6DACDE | `--blue-light` | CUA secondary |

## Tertiary / Accent Colors

| Role | Hex | Suggested Variable | Origin |
|---|---|---|---|
| Yellow | #FFD65C | `--yellow` | CUA tertiary |
| Light Blue-Green | #B5E1E1 | `--teal` | CUA tertiary |

## Functional Assignments (Web)

These assignments are established across oranburg.law and sub-sites.

| Function | Color | Notes |
|---|---|---|
| Navigation bar (global) | `--red-deep` | Red bar, white text, yellow hover underline |
| Navigation bar (local/anchor) | `--blue-deep` | Blue bar for on-page section nav |
| Section headings | `--blue-deep` | H2 text color on light backgrounds |
| Sub-headings | `--blue-bright` | H3 text color |
| Accent headings (H4) | `--red-deep` | Used sparingly for fourth-level structure |
| Heading underlines | `--red-deep` | 3px bottom border on H2 |
| Links (body text) | `--blue-bright` | Standard inline link color |
| Link hover / active state | `--red-deep` or `--yellow` | Context-dependent |
| Tags / badges | `--teal` bg, `--blue-deep` text | Light, low-emphasis labeling |
| CTA buttons | `--blue-deep` to `--blue-bright` gradient | Primary action |
| Submit / destructive buttons | `--red-deep` to `--red-bright` gradient | Form submission, alerts |
| Card borders | `--blue-light` | Subtle framing on white cards |
| Left-border callouts | `--red-deep` or `--blue-bright` | Accent stripe on inset boxes |
| Footer background | `--blue-deep` | Full-width footer |

## Dark Mode Palette (D-017)

Dark mode uses **pure black (#000000)** background with **pure white (#FFFFFF)** text. This is intentional for OLED displays, where true black means pixels are fully off — a distinctive, high-impact look. The deep blue (#0A3255) moves up to serve as the panel/card background, providing color and identity against the black canvas.

| Function | Light Mode | Dark Mode | Notes |
|---|---|---|---|
| Background | #FFFFFF | #000000 | Pure white / pure black |
| Panel / card bg | #F8F9FA | #0A3255 | Deep blue panels on black |
| Panel soft | #E9ECEF | #0D3D68 | Slightly lighter blue |
| Panel border | #D0D8E4 | #1E5080 | Blue-shifted border |
| Body text | #000000 | #FFFFFF | Pure black / pure white |
| Muted text | #555555 | #9CA3AF | Secondary content |
| Accent (primary) | `--blue-bright` | `--blue-light` | Brighter in dark mode for contrast |
| Accent (secondary) | `--teal` | `--teal` | Works in both modes |

## Naming Convention

Color variables must use **neutral, semantic names** — not institutional labels. The colors originate from CUA's identity system but serve a personal style system that may outlast any single institutional affiliation.

**Do:** `--blue-deep`, `--red-bright`, `--yellow`
**Do not:** `--catholic-blue`, `--catholic-red`, `--cua-primary`

## Print / Document Colors

For print documents (Word, PDF), color usage is minimal:

- Headings: `--blue-deep` (#0A3255) where color headings are appropriate (CVs, pamphlets, slides)
- Accent rules/lines: `--red-deep` (#B21F2C)
- Body text: Black (#000000) — never colored
- Law review submissions: No color. Black text throughout per journal convention.
