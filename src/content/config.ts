import { defineCollection, z } from 'astro:content'

const blogCollection = defineCollection({
	schema: z.object({
		title: z.string(),
		date: z.date(),
		author: z.string(),
		description: z.string(),
		image: z.string().optional(),
		cover: z.string().optional(),
	}),
})

export const collections = {
	blog: blogCollection,
}
