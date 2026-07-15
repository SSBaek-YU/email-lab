import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: z.object({
    title: z.string(),
    titleKo: z.string().optional(),
    date: z.coerce.date(),
    category: z.enum(['announcement', 'publication', 'award', 'event', 'people']),
    summary: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { news };
