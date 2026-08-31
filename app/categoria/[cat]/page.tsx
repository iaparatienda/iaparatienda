import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getToolsByCategory, categories } from '@/data/tools'
import { articles } from '@/data/articles'
import type { Metadata } from 'next'

interface Props {
  params: Promise<{ cat: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { cat } = await params
  const c = categories.find(x => x.slug === cat)
  if (!c) return { title: 'Categoría no encontrada' }
  return {
    title: `${c.name} — IA para Tienda`,
    description: `Herramientas de IA para ${c.desc.toLowerCase()}. Compará opciones, precios y capacidades.`,
  }
}

export default async function CategoryPage({ params }: Props) {
  const { cat } = await params
  const c = categories.find(x => x.slug === cat)
  if (!c) notFound()
  const tools = getToolsByCategory(cat)
  const relatedGuides = articles.filter(a => a.category === cat).slice(0, 4)

  return (
    <div>
      <p className="mb-2 text-xs text-zinc-400">
        <Link href="/" className="hover:underline">Inicio</Link> / {c.name}
      </p>
      <h1 className="text-2xl font-bold">{c.name}</h1>
      <p className="mt-2 text-zinc-600">{c.desc}</p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {tools.map(tool => (
          <Link
            key={tool.slug}
            href={`/tool/${tool.slug}`}
            className="group rounded-lg border border-zinc-200 p-5 transition hover:border-emerald-300 hover:shadow-sm"
          >
            <div className="mb-1 flex items-center justify-between">
              <span className="font-semibold group-hover:text-emerald-700">{tool.name}</span>
              {tool.featured && (
                <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-medium text-emerald-700">
                  ★
                </span>
              )}
            </div>
            <p className="line-clamp-2 text-sm text-zinc-600">{tool.description}</p>
            <p className="mt-2 text-xs text-zinc-400">{tool.pricing}</p>
          </Link>
        ))}
      </div>

      {relatedGuides.length > 0 && (
        <section className="mt-10 border-t border-zinc-200 pt-6">
          <h2 className="text-lg font-semibold text-zinc-900">Guías relacionadas</h2>
          {relatedGuides.map((a) => (
            <Link key={a.slug} href={`/blog/${a.slug}`} className="block text-sm text-zinc-600 hover:text-emerald-700">→ {a.title}</Link>
          ))}
        </section>
      )}
    </div>
  )
}
