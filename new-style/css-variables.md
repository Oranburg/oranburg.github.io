# CSS Variables / Design Tokens

**Status:** Established. These are the canonical CSS custom properties for all Oranburg web properties.

---

## Complete Variable Set

```css
/* ==========================================================================
   Oranburg Style — CSS Custom Properties
   Canonical source: Oranburg-Style/web/css-variables.md
   ========================================================================== */

:root, [data-theme="dark"] {

  /* --- Colors: Palette --- */
  --blue-deep:    #0A3255;
  --blue-bright:  #2459A9;
  --blue-light:   #6DACDE;
  --red-deep:     #B21F2C;
  --red-bright:   #E82F35;
  --red-light:    #E96955;
  --yellow:       #FFD65C;
  --teal:         #B5E1E1;

  /* --- Colors: Functional (dark mode default — pure black for OLED) --- */
  --bg:           #000000;
  --bg-secondary: #0A3255;
  --bg-soft:      #0D3D68;
  --text:         #FFFFFF;
  --muted:        #9CA3AF;
  --border:       #1E5080;
  --accent:       #6DACDE;
  --accent-2:     #B5E1E1;
  --accent-red:   #B21F2C;

  /* --- Typography --- */
  --font-headline: 'Oswald', sans-serif;
  --font-body:     'Roboto', sans-serif;
  --font-accent:   'Crimson Text', serif;
  --font-mono:     'Roboto Mono', 'Consolas', 'Courier New', monospace;

  /* --- Layout --- */
  --max-width:     1100px;
  --radius-sm:     4px;
  --radius-md:     8px;    /* standard for cards and panels */
  --radius-pill:   999px;

  /* --- Spacing --- */
  --space-xs:  0.25rem;
  --space-sm:  0.5rem;
  --space-md:  1rem;
  --space-lg:  1.5rem;
  --space-xl:  2rem;
  --space-2xl: 3rem;
  --space-3xl: 4rem;

  /* --- Gradient stop (for radial bg) --- */
  --gradient-stop: 42%;
}

[data-theme="light"] {

  /* --- Colors: Functional (light mode) --- */
  --bg:           #FFFFFF;
  --bg-secondary: #F8F9FA;
  --bg-soft:      #E9ECEF;
  --text:         #000000;
  --muted:        #555555;
  --border:       #D0D8E4;
  --accent:       #2459A9;
  --accent-2:     #B5E1E1;
  --accent-red:   #B21F2C;
}
```

## Usage Notes

### Palette vs. Functional Variables
- **Palette variables** (`--blue-deep`, `--red-bright`, etc.) are constant — they do not change between dark and light mode. Use them when you need a specific brand color regardless of theme.
- **Functional variables** (`--bg`, `--text`, `--accent`, etc.) are mode-adaptive. Use them for all theme-sensitive properties (backgrounds, text, borders, links).

### Importing This File
This variable set should be included at the top of every Oranburg web property's CSS, either by:
- Copying the `:root` block into the site's main stylesheet
- Importing from a shared CSS file (when the style repo is set up on GitHub)
- Using it as the single source of truth for design token generation

### Extending
New functional variables can be added as needed. Palette variables should only change if the color palette itself is revised (which would be a major style decision requiring a decision log entry).
