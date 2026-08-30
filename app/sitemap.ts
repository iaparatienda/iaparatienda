import type { MetadataRoute } from 'next'
import { tools, categories } from '@/data/tools'
import { articles } from '@/data/articles'

const BASE = 'https://iaparatienda.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const entry = (
    path: string,
    priority: number,
    changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly',
  ) => ({
    url: `${BASE}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  })

  return [
    entry('/', 1, 'daily'),
    ...categories.map((c) => entry(`/categoria/${c.slug}`, 0.8, 'weekly')),
    ...tools.map((t) => entry(`/tool/${t.slug}`, 0.7, 'weekly')),
    entry('/blog', 0.6, 'weekly'),
    ...articles.map((a) => entry(`/blog/${a.slug}`, 0.6, 'monthly')),
  ]
}
