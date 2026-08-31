import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getTool, categories } from '@/data/tools'
import { articles } from '@/data/articles'
import type { Metadata } from 'next'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const tool = getTool(slug)
  if (!tool) return { title: 'Herramienta no encontrada' }
  const cat = categories.find(c => c.slug === tool.category)
  return {
    title: `${tool.name} — ${cat?.name || 'IA'} | IA para Tienda`,
    description: tool.description,
    keywords: [...tool.tags, 'ia para tienda'],
  }
}

export default async function ToolPage({ params }: Props) {
  const { slug } = await params
  const tool = getTool(slug)
  if (!tool) notFound()
  const cat = categories.find(c => c.slug === tool.category)
  const relatedGuides = articles.filter(a => a.relatedTools.includes(tool.slug)).slice(0, 4)

  return (
    <article className="max-w-2xl">
      <p className="mb-2 text-xs text-zinc-400">
        <Link href="/" className="hover:underline">Inicio</Link>
        {' / '}
        <Link href={`/categoria/${tool.category}`} className="hover:underline">{cat?.name}</Link>
      </p>

      <h1 className="text-2xl font-bold">{tool.name}</h1>
      <p className="mt-3 leading-relaxed text-zinc-700">{tool.description}</p>

      <div className="mt-6 flex flex-wrap items-center gap-4">
        <a
          href={tool.affiliateUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md bg-emerald-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-emerald-700"
        >
          Visitar {tool.name} →
        </a>
        <span className="text-sm text-zinc-500">{tool.pricing}</span>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {tool.tags.map(tag => (
          <span key={tag} className="rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-600">
            {tag}
          </span>
        ))}
      </div>

      <hr className="my-8 border-zinc-200" />

      <section className="space-y-2 text-sm text-zinc-600">
        <h2 className="text-base font-semibold text-zinc-900">¿Por qué está acá?</h2>
        <p>
          {tool.name} aparece en este directorio porque aplica IA directamente a un problema
          operativo de comercio: {cat?.name.toLowerCase()}. No es un wrapper genérico —
          resuelve un flujo concreto de la tienda.
        </p>
      </section>

      {relatedGuides.length > 0 && (
        <section className="mt-8 space-y-2">
          <h2 className="text-base font-semibold text-zinc-900">Guías relacionadas</h2>
          {relatedGuides.map((a) => (
            <Link key={a.slug} href={`/blog/${a.slug}`} className="block text-sm text-zinc-600 hover:text-emerald-700">→ {a.title}</Link>
          ))}
        </section>
      )}
    </article>
  )
}
