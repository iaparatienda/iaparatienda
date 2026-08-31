import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getArticle, articles } from '@/data/articles'
import { getTool } from '@/data/tools'
import type { Metadata } from 'next'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const article = getArticle(slug)
  if (!article) return { title: 'Guía no encontrada' }
  return {
    title: article.title,
    description: article.description,
    keywords: article.keywords,
    openGraph: {
      title: article.title,
      description: article.description,
      type: 'article',
      publishedTime: new Date().toISOString(),
    },
  }
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params
  const article = getArticle(slug)
  if (!article) notFound()

  // JSON-LD structured data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    keywords: article.keywords.join(', '),
    author: { '@type': 'Organization', name: 'Email para Tu Tienda' },
    publisher: { '@type': 'Organization', name: 'Email para Tu Tienda', url: 'https://iaparatienda.com' },
    datePublished: new Date().toISOString(),
  }

  return (
    <article className="max-w-2xl">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <p className="mb-2 text-xs text-zinc-400">
        <Link href="/" className="hover:underline">Inicio</Link> / <Link href="/blog" className="hover:underline">Guías</Link>
      </p>

      <h1 className="text-2xl font-bold leading-snug">{article.title}</h1>
      <p className="mt-3 text-zinc-600">{article.description}</p>

      <div className="prose mt-8 space-y-5">
        {article.content.map((para, i) => (
          <p key={i} className="leading-relaxed text-zinc-800">{para}</p>
        ))}
      </div>

      {/* Related tools */}
      <hr className="my-8 border-zinc-200" />
      <h2 className="text-lg font-semibold">Herramientas comparadas en esta guía</h2>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {article.relatedTools.map(slug => {
          const tool = getTool(slug)
          if (!tool) return null
          return (
            <Link
              key={slug}
              href={`/tool/${tool.slug}`}
              className="group flex items-center justify-between rounded-md border border-zinc-200 px-4 py-3 hover:border-emerald-300"
            >
              <div>
                <p className="text-sm font-medium group-hover:text-emerald-700">{tool.name}</p>
                <p className="text-xs text-zinc-400">{tool.pricing}</p>
              </div>
              <span className="text-zinc-300 group-hover:text-emerald-500">→</span>
            </Link>
          )
        })}
      </div>

      {/* Other guides */}
      <hr className="my-8 border-zinc-200" />
      <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">Otras guías</h2>
      <div className="mt-3 space-y-2">
        {articles.filter(a => a.slug !== slug).slice(0, 4).map(a => (
          <Link key={a.slug} href={`/blog/${a.slug}`} className="block text-sm text-zinc-600 hover:text-emerald-700">
            → {a.title}
          </Link>
        ))}
      </div>
    </article>
  )
}
