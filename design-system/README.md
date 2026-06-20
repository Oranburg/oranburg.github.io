# Oranburg design system

A shared, accessibility-first design package for every Oranburg property: the
Jekyll hub, the Astro apps, the Vite + React apps, Next, and any plain-HTML or
Python-generated page. It ships one token sheet and one breadcrumb + footer pair
implemented identically across stacks.

## What is in the package

```
design-system/
  og-tokens.css              Canonical --og- tokens + shared component CSS + migration shim
  partials/
    og-breadcrumb.html       Jekyll / plain-HTML breadcrumb partial
    og-footer.html           Jekyll / plain-HTML footer partial
  astro/
    Breadcrumb.astro         Astro breadcrumb
    Footer.astro             Astro footer
  react/
    Breadcrumb.jsx           React breadcrumb (vite-react + next)
    Footer.jsx               React footer (vite-react + next)
  README.md                  This file
```

The breadcrumb and the footer are visually identical across the HTML partial,
the Astro component, and the React component. They emit the same DOM structure,
the same `.og-breadcrumb` / `.og-footer` class names, the same tokens, and the
same labels. `og-tokens.css` styles all three, so the look is defined once.

## Base angle and grafts

The base is accessibility-first. Onto it the package grafts the eight verified
CUA brand palette hexes, the migration compatibility shim, the parchment/gold
exclusion rationale, the `#f5f3ee` theme-color fix, the `--og-radius-md` 8px
resolution, the longer `--og-font-mono` fallback chain, and the shared
`--og-font-hebrew` exception. See the notes below for the parts that need Seth's
sign-off.

## The tokens

Every token is namespaced `--og-`. Short names (`--bg`, `--text`, `--accent`,
and so on) survive only through the migration shim and only for one release.

- Brand palette (constant across modes): `--og-blue-deep #0A3255`,
  `--og-blue-bright #2459A9`, `--og-blue-light #6DACDE`, `--og-red-deep #B21F2C`,
  `--og-red-bright #E82F35`, `--og-red-light #E96955`, `--og-yellow #FFD65C`,
  `--og-teal #B5E1E1`. These eight hexes match the published CUA palette at
  brand.catholic.edu/color exactly. Yellow and teal are accent-only at 5 to 10
  percent visual weight and must not become the dominant surface accent.
- Functional surfaces and ink: `--og-bg`, `--og-bg-panel`, `--og-bg-soft`,
  `--og-ink`, `--og-ink-muted`, `--og-rule`.
- Links and accents: `--og-link`, `--og-link-onpanel`, `--og-accent`,
  `--og-accent-red`.
- Heading text colors: `--og-heading-1`, `--og-heading-2`, `--og-heading-3`.
- Fonts: `--og-font-headline`, `--og-font-body`, `--og-font-accent`,
  `--og-font-mono`, `--og-font-hebrew`.
- Type sizes (fluid, with a 1rem floor on body): `--og-size-body`,
  `--og-size-small`, `--og-size-h1`, `--og-size-h2`, `--og-size-h3`, plus
  `--og-line-body` and `--og-line-heading`.
- Layout and spacing: `--og-max-width`, `--og-radius-sm`, `--og-radius-md`,
  `--og-radius-pill`, and `--og-space-xs` through `--og-space-3xl`.

Panel surfaces are `--og-bg-panel` and `--og-bg-soft`, not `--panel` or
`--panel-soft`.

### `--og-radius-md` is 8px

This closes the stale open question in the spacing doc. The 16px landing radius
was retired per web-typography.md D-010, so `--og-radius-md` resolves to 8px and
that value is the one written here.

## Accessibility

The package targets WCAG 2.2 AA for normal text (at least 4.5:1 contrast) and at
least 3:1 only where a token comment marks a value large-only.

Verified text/background pairs:

- Light-mode H3 `#2459A9` on white: 6.8:1. This retires blue-light (2.44:1) and
  teal (1.42:1) as H3 text colors.
- Teal `#B5E1E1` is fill or badge only, never text on light. As a fill it pairs
  with `--og-blue-deep` text at 9.3:1.
- Light `--og-accent` dark teal `#176D6D`: 5.6:1. This is a non-brand
  accessibility substitution (see sign-off below).
- Dark red-as-text `--og-accent-red #E96955`: 5.9:1 on black. Brand
  `#B21F2C` is reserved for 24px or larger and bold, plus solid fills.
- Breadcrumb muted text reaches AA through `--og-bg-soft #12466F` and
  `--og-ink-muted #B6BEC9`.

Semantic markup, enforced identically in all three implementations:

- Breadcrumb is `nav[aria-label="Breadcrumb"] > ol > li`. The current page is
  plain text carrying `aria-current="page"`. Separators are CSS `::before`
  generated content on `.og-breadcrumb li + li`, never an in-DOM glyph.
- Footer is `footer[role="contentinfo"]` (explicit, one per page) with the link
  cluster in `nav[aria-label="Footer"] > ul`.
- Both ship `a:focus-visible` outlines (WCAG 2.4.7 / 2.4.11).
- The token sheet carries `@media (prefers-reduced-motion: reduce)`.

## Links: nothing is invented

Components and partials take caller-supplied trail and links. The only shared
default link is `oranburg.law`, used when a caller passes nothing. The hub keeps
its own full footer inventory as hub-specific content; that inventory does not
belong in this shared package.

## How each stack consumes the package

### Jekyll (the hub)

1. Copy `og-tokens.css` into the site (for example `assets/css/og-tokens.css`)
   and link it in the layout `<head>` before `site.css`:

   ```html
   <link rel="stylesheet" href="/assets/css/og-tokens.css">
   ```

2. Copy `partials/og-breadcrumb.html` and `partials/og-footer.html` into
   `_includes/`. Render them with caller-supplied data:

   ```liquid
   {% include og-breadcrumb.html
      trail="Home::https://oranburg.law,Scholarship::/scholarship/"
      current="Architects of the Void" %}

   {% include og-footer.html
      links="Home::https://oranburg.law,Contact::/contact/"
      copyright="© 2026 Seth C. Oranburg. All rights reserved." %}
   ```

   Each `trail` / `links` entry is `Label::href`; entries are comma-separated.
   Omit `trail` or `links` to fall back to the single `oranburg.law` default.

3. While the hub still uses short names, the migration shim in `og-tokens.css`
   keeps `--bg`, `--text`, and the rest resolving to the `--og-` values, so a
   half-converted `site.css` never renders with an unset background.

### Astro

1. Import `og-tokens.css` once at the layout or top-level page so the tokens and
   the `.og-breadcrumb` / `.og-footer` rules are global:

   ```astro
   ---
   import "../../design-system/og-tokens.css";
   import Breadcrumb from "../../design-system/astro/Breadcrumb.astro";
   import Footer from "../../design-system/astro/Footer.astro";
   ---
   <Breadcrumb
     trail={[{ label: "Home", href: "https://oranburg.law" },
             { label: "Daf", href: "/daf/" }]}
     current="Berakhot 2a"
   />
   <Footer
     links={[{ label: "Home", href: "https://oranburg.law" }]}
     copyright="© 2026 Seth C. Oranburg."
   />
   ```

### Vite + React

1. Import `og-tokens.css` once at the entry (for example `src/main.jsx`):

   ```jsx
   import "../design-system/og-tokens.css";
   ```

2. Import and use the components:

   ```jsx
   import Breadcrumb from "../design-system/react/Breadcrumb.jsx";
   import Footer from "../design-system/react/Footer.jsx";

   <Breadcrumb
     trail={[{ label: "Home", href: "https://oranburg.law" }]}
     current="Study"
   />
   <Footer links={[{ label: "Home", href: "https://oranburg.law" }]} />
   ```

### Next

1. Import `og-tokens.css` once in the root layout (`app/layout.tsx`) or
   `pages/_app`:

   ```jsx
   import "../design-system/og-tokens.css";
   ```

2. Use the same React components. They hold no client state, so they render as
   server components under the app router. For internal navigation you can swap
   the `<a>` for `next/link` in a thin wrapper; the default `<a>` works for
   absolute and external links as-is.

### Plain HTML

1. Link the sheet in `<head>`:

   ```html
   <link rel="stylesheet" href="/design-system/og-tokens.css">
   ```

2. Paste the markup from `partials/og-breadcrumb.html` and
   `partials/og-footer.html`, replacing the Liquid loop with literal `<li>`
   entries. Keep the structure exact: `nav[aria-label="Breadcrumb"] > ol > li`,
   the current crumb as a `<span aria-current="page">`, and the footer as
   `footer[role="contentinfo"]` with `nav[aria-label="Footer"] > ul`.

### Python generation

1. Emit the same DOM the partials describe. A generator should produce, per
   breadcrumb:

   ```html
   <nav aria-label="Breadcrumb" class="og-breadcrumb">
     <ol>
       <li><a href="...">Label</a></li>
       <li><span aria-current="page">Current</span></li>
     </ol>
   </nav>
   ```

   and link `og-tokens.css` in the page head. Do not emit a separator glyph; the
   stylesheet draws it. Pass the trail and the footer links in from the caller;
   default to the single `oranburg.law` link when none is supplied.

## Migration

### The compatibility shim

`og-tokens.css` ends with an alias block that maps the retired short names
(`--bg`, `--text`, `--accent`, the palette names, the fonts, the spacing) to the
canonical `--og-` values. It ships for one release so a half-converted file
never renders with an unset background. Remove it once `site.css`, chumash, and
havruta are all converted to the `--og-` names.

### Gold and parchment stay app-local

`--og-gold` and the `--og-parchment` trio are not in this package. Those hexes
are not in the CUA palette and they describe the Torah scroll, not the brand, so
they stay app-local in chumash. `--og-font-hebrew` is the one shared font
exception, because both chumash and havruta render Hebrew.

### The `#f5f3ee` theme-color fix

`default.html` in the hub still carries one warm-palette value:

```html
<meta name="theme-color" content="#f5f3ee" media="(prefers-color-scheme: light)">
```

Replace `#f5f3ee` with `#FFFFFF` so the last warm value is gone. (Flagged for
sign-off below.)

### Before deleting `lawj-palette.css`

`lawj-palette.css` defines `--og-accent-*` and `--og-series-*` tokens that this
package does not carry. Grep the whole LawJ corpus for `og-accent-` and
`og-series-` before retiring the file, so no generated graphic loses its colors:

```bash
grep -rn 'og-accent-\|og-series-' /path/to/LawJ
```

Retire `lawj-palette.css` only after that grep comes back clean (or after the
remaining users are migrated).

## Flagged for Seth's sign-off

Signed off by Seth Oranburg on 2026-06-20. Status recorded per item below.

1. APPROVED. The cool palette is canonical over the warm `lawj-palette.css`.
2. APPROVED. The non-brand dark teal `#176D6D` as the light-mode `--og-accent`
   (an accessibility substitution, since brand teal fails as text on light).
3. PENDING AT RETIREMENT. Run the `og-accent-` / `og-series-` grep across LawJ
   before deleting `lawj-palette.css`. The file is not being retired yet, so this
   guardrail runs when retirement is scheduled.
4. APPROVED and APPLIED. The `#f5f3ee` theme-color fix in `default.html` is done;
   the light-mode `theme-color` is now `#FFFFFF`.
5. APPROVED. The minimal app-footer link set (the single `oranburg.law` default,
   with the hub keeping its own full inventory).
