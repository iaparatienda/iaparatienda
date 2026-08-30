import Link from 'next/link'
import { categories, tools } from '@/data/tools'

export default function Home() {
  const featured = tools.filter(t => t.featured)

  return (
    <div className="space-y-12">
      {/* Hero */}
      <section className="text-center">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
          Herramientas IA para tu tienda
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-zinc-600">
          Directorio curado de inteligencia artificial aplicada al comercio.
          Atención al cliente, ventas, operaciones, finanzas y seguridad — todo en un lugar.
        </p>
      </section>

      {/* Featured */}
      <section>
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-500">
          Destacados
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map(tool => (
            <Link
              key={tool.slug}
              href={`/tool/${tool.slug}`}
              className="group rounded-lg border border-zinc-200 bg-white p-5 shadow-sm transition hover:border-emerald-300 hover:shadow"
            >
              <div className="mb-2 flex items-center justify-between">
                <span className="font-semibold group-hover:text-emerald-700">{tool.name}</span>
                <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-medium text-emerald-700">
                  Destacado
                </span>
              </div>
              <p className="line-clamp-3 text-sm text-zinc-600">{tool.description}</p>
              <p className="mt-3 text-xs font-medium text-zinc-400">{tool.pricing}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="space-y-6">
        {categories.map(cat => (
          <div key={cat.slug}>
            <div className="mb-3 flex items-baseline gap-3">
              <h2 className="text-lg font-semibold">{cat.name}</h2>
              <span className="text-xs text-zinc-400">{cat.desc}</span>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {tools
                .filter(t => t.category === cat.slug)
                .map(tool => (
                  <Link
                    key={tool.slug}
                    href={`/tool/${tool.slug}`}
                    className="group flex items-center justify-between rounded-md border border-zinc-100 px-4 py-3 transition hover:border-emerald-200 hover:bg-emerald-50/40"
                  >
                    <div>
                      <p className="text-sm font-medium group-hover:text-emerald-800">{tool.name}</p>
                      <p className="text-xs text-zinc-400">{tool.pricing}</p>
                    </div>
                    <span className="text-zinc-300 group-hover:text-emerald-500">→</span>
                  </Link>
                ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}
