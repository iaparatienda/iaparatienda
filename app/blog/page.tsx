import Link from 'next/link'
import { articles } from '@/data/articles'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Guías IA para Comercio — IA para Tienda',
  description: 'Comparativas, guías y análisis de herramientas IA para comercios. Elegí la correcta sin perder semanas de prueba.',
}

export default function BlogIndex() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Guías & Comparativas</h1>
      <p className="mt-2 max-w-2xl text-zinc-600">
        Análisis práctico de herramientas IA para comercios. Sin humo: qué hace, cuánto cuesta, y cuándo conviene.
      </p>

      <div className="mt-8 space-y-4">
        {articles.map(a => (
          <Link
            key={a.slug}
            href={`/blog/${a.slug}`}
            className="group block rounded-lg border border-zinc-200 p-5 transition hover:border-emerald-300 hover:shadow-sm"
          >
            <h2 className="font-semibold group-hover:text-emerald-700">{a.title}</h2>
            <p className="mt-1 line-clamp-2 text-sm text-zinc-600">{a.description}</p>
            <p className="mt-2 text-xs text-zinc-400">
              {a.relatedTools.length} herramientas comparadas
            </p>
            <span className="mt-3 inline-block text-sm font-medium text-emerald-600">
              Leer guía →
            </span>
          </Link>
        ))}
      </div>
    </div>
  )
}
