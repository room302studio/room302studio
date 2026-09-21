import { defineCollection, defineContentConfig, z } from "@nuxt/content";

// tags appear as either a space-separated string or a YAML array across posts
const tags = z.union([z.string(), z.array(z.string())]).optional();

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: "page",
      source: "blog/**",
      schema: z.object({
        date: z.string().optional(),
        modified: z.string().optional(),
        author: z.string().optional(),
        authorEmail: z.string().optional(),
        tags,
        inprogress: z.boolean().optional(),
        hidden: z.boolean().optional(),
        draft: z.boolean().optional(),
        image: z.string().optional(),
      }),
    }),

    members: defineCollection({
      type: "page",
      source: "members/**",
      schema: z.object({
        name: z.string().optional(),
        role: z.string().optional(),
        website: z.string().optional(),
        photo: z.string().optional(),
        authorEmail: z.string().optional(),
      }),
    }),

    clientWork: defineCollection({
      type: "page",
      source: "our-work/client-work/**",
      schema: z.object({
        client: z.string().optional(),
        brief: z.string().optional(),
        role: z.string().optional(),
        date: z.string().optional(),
        technology: z.string().optional(),
        image: z.string().optional(),
        url: z.string().optional(),
        tags,
      }),
    }),

    internalWork: defineCollection({
      type: "page",
      source: "our-work/internal/**",
      schema: z.object({
        date: z.string().optional(),
        technology: z.string().optional(),
        url: z.string().optional(),
        image: z.string().optional(),
        tags,
      }),
    }),

    // Standalone pages such as content/process.md
    pages: defineCollection({
      type: "page",
      source: "*.md",
    }),
  },
});
