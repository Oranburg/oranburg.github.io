# Web Colors

**Status:** Established. The color palette is settled (see `foundations/color-palette.md`). This document specifies how colors are applied in web contexts, including dark mode.

---

## Default Theme: Dark

All web pages default to dark mode. A toggle allows users to switch to light mode. User preference is persisted via `localStorage` (where available) with dark as the fallback.

### Design Intent (D-017)

Dark mode uses **pure black (#000000)** background with **pure white (#FFFFFF)** body text. This is an intentional choice for OLED displays, where true black pixels are fully off — producing a look that is strikingly different from the "dark gray" dark modes most sites use. The palette colors (blues, reds, yellow, teal) provide accent and structure against this black canvas.

Light mode uses **pure white (#FFFFFF)** background with **pure black (#000000)** body text. Clean, high-contrast, no gray compromises.

### Implementation Pattern

```html
<html data-theme="dark">
```

```javascript
// On load: check localStorage, default to dark
const theme = localStorage.getItem('theme') || 'dark';
document.documentElement.setAttribute('data-theme', theme);
```

### Dark Mode Colors

| Token | Variable | Value | Usage |
|---|---|---|---|
| Background | `--bg` | #000000 | Page background (pure black for OLED) |
| Panel | `--panel` | #0A3255 | Cards, panels, elevated surfaces (deep blue) |
| Panel soft | `--panel-soft` | #0D3D68 | Subtle panel variation |
| Text | `--text` | #FFFFFF | Primary body text (pure white) |
| Muted | `--muted` | #9CA3AF | Secondary text, metadata, captions |
| Border | `--border` | #1E5080 | Panel and card borders |
| Accent primary | `--accent` | #6DACDE | Links, interactive elements |
| Accent secondary | `--accent-2` | #B5E1E1 | Secondary accent, gradient endpoints |
| Accent red | `--accent-red` | #B21F2C | Alerts, navigation bar, emphasis |

### Light Mode Colors

| Token | Variable | Value | Usage |
|---|---|---|---|
| Background | `--bg` | #FFFFFF | Page background (pure white) |
| Panel | `--panel` | #F8F9FA | Cards, panels |
| Text | `--text` | #000000 | Primary body text (pure black) |
| Muted | `--muted` | #555555 | Secondary text |
| Border | `--border` | #D0D8E4 | Panel and card borders |
| Accent primary | `--accent` | #2459A9 | Links (darker blue for contrast on white) |
| Accent red | `--accent-red` | #B21F2C | Same red works in both modes |

### Mode-Switching CSS

```css
:root, [data-theme="dark"] {
  --bg: #000000;
  --panel: #0A3255;
  --panel-soft: #0D3D68;
  --text: #FFFFFF;
  --muted: #9CA3AF;
  --border: #1E5080;
  --accent: #6DACDE;
}

[data-theme="light"] {
  --bg: #FFFFFF;
  --panel: #F8F9FA;
  --text: #000000;
  --muted: #555555;
  --border: #D0D8E4;
  --accent: #2459A9;
}
```

## Functional Color Assignments

These apply in both modes unless noted:

| Function | Color | Notes |
|---|---|---|
| Global nav bar bg | `--red-deep` (#B21F2C) | Red bar is constant across modes |
| Local nav bar bg | `--blue-deep` (#0A3255) | Blue sub-nav |
| Heading text | `--blue-deep` (light) / `--accent` (dark) | Headings must contrast with background |
| Section underline | `--red-deep` | 3px border-bottom on H2 |
| Body links | `--accent` | Mode-adaptive blue |
| Hover state | `--yellow` (#FFD65C) | Yellow hover on nav, some CTAs |
| Tags / badges | `--teal` bg (#B5E1E1) | Works in both modes |

## Accessibility

- Dark mode text (#FFFFFF on #000000) provides a contrast ratio of 21:1 — maximum possible. Pure black/white is the highest-contrast pairing available.
- Light mode text (#000000 on #FFFFFF) provides 21:1 — same maximum.
- Accent colors on black backgrounds: `--blue-light` (#6DACDE) on #000000 is approximately 8.5:1 (excellent). `--accent-red` (#B21F2C) on #000000 is approximately 4.2:1 (passes AA for large text; use at heading sizes or with sufficient weight).
- Panel backgrounds (#0A3255) with white text: approximately 12:1 (excellent).
