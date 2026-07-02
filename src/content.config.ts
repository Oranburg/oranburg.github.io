import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Insight posts migrated from the Jekyll _posts directory; frontmatter is
// unchanged except that Astro ignores the layout key.
const insights = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/insights" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    kind: z.string().optional(),
    featured: z.boolean().default(false),
    excerpt: z.string().optional(),
    deck: z.string().optional(),
    image: z.string().optional(),
    layout: z.string().optional(),
  }),
});

// Archival document pages (publication texts, updates, the CV document, the
// demos essay) rendered at their original Jekyll URLs. The unpublished wip
// drafts are deliberately not part of this collection.
const docs = defineCollection({
  // generateId keeps the original path so each document keeps its exact
  // Jekyll URL (spaces, dashes, and all) instead of a slugified one.
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/docs",
    generateId: ({ entry }) => entry.replace(/\.md$/, ""),
  }),
  schema: z.object({}).passthrough(),
});

export const collections = { insights, docs };
