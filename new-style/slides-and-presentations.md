# Slides and Presentations

**Status:** Established. Typography aligned with the unified system (D-012).

---

## Context

Lecture slides for law school courses and conference presentations. The law-lecture-slides skill produces PPTX files with a dark academic theme: deep blue (#0A3255) background, 8-color CUA palette, Oswald headings and Roboto body (D-012).

## Established Rules

- **Color palette:** CUA 8-color palette on deep blue background. This is working well and should persist.
- **Slide types:** Title, learning outcomes, comparison cards, 2x2 grid, content grid, flow diagram, scenario, Venn diagram, timeline, synthesis, homework. These pedagogical structures are established.
- **Background:** #0A3255 (deep blue). Consistent with dark-mode-first preference.

## Typography (D-012)

- **Slide titles / section headers:** Oswald Bold. At display sizes (36pt+), this fills the role CUA assigns to Acumin Pro Extra Condensed Black.
- **Body / bullet text:** Roboto Regular/Medium
- **Quotations, case excerpts, statutory text:** Crimson Text — the serif accent signals authoritative source material, mirroring the web pattern
- **Code blocks:** Roboto Mono

## Structural Rules

- **No stacked headings (D-018):** Slides with narrative sections (e.g., synthesis slides, scenario analyses) must not stack a slide title directly above a sub-heading with no body text between them. Every heading-level element must be followed by prose. This rule does not apply to bullet-only slides or visual layouts (comparison cards, grids) where headings function as labels within a visual structure rather than section openers in running text.

## Font Availability in PPTX

PowerPoint requires fonts to be installed on the rendering machine. All four Google Fonts (Oswald, Crimson Text, Roboto, Roboto Mono) must be installed locally. If presenting on machines without these fonts, export to PDF.

## Skill Update Required

The `law-lecture-slides` skill must be updated to replace Arial Bold/Regular with Oswald/Roboto/Crimson Text. The skill's SKILL.md file and template configurations need revision.
