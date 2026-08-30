import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'IA para Tienda — Directorio de Herramientas IA para Comercios',
    template: '%s | IA para Tienda',
  },
  description: 'Las mejores herramientas de inteligencia artificial para tu tienda: atención al cliente, ventas, operaciones, finanzas y seguridad.',
  keywords: ['ia para tienda', 'ia comercio', 'herramientas ia retail', 'chatbot tienda', 'ia ventas'],
  openGraph: {
    title: 'IA para Tienda — Directorio',
    description: 'Directorio curado de herramientas IA para comercios.',
    url: 'https://iaparatienda.com',
    siteName: 'IA para Tienda',
    locale: 'es_AR',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        {/* Site-wide structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'IA para Tienda',
              url: 'https://iaparatienda.com',
              description: 'Directorio curado de herramientas IA para comercios',
              inLanguage: 'es-AR',
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <header className="border-b border-zinc-200 bg-white px-6 py-4">
          <div className="mx-auto flex max-w-5xl items-center justify-between">
            <a href="/" className="text-lg font-bold tracking-tight">
              IA<span className="text-emerald-600">para</span>Tienda
            </a>
            <nav className="hidden gap-6 text-sm text-zinc-600 md:flex">
              <a href="/categoria/atencion-cliente" className="hover:text-zinc-900">Atención</a>
              <a href="/categoria/ventas-marketing" className="hover:text-zinc-900">Ventas</a>
              <a href="/categoria/operaciones" className="hover:text-zinc-900">Operaciones</a>
              <a href="/categoria/finanzas" className="hover:text-zinc-900">Finanzas</a>
              <a href="/categoria/seguridad" className="hover:text-zinc-900">Seguridad</a>
              <a href="/blog" className="hover:text-zinc-900">Guías</a>
            </nav>
          </div>
        </header>
        <main className="mx-auto max-w-5xl px-6 py-10">{children}</main>
        <footer className="border-t border-zinc-200 bg-white px-6 py-6 text-center text-xs text-zinc-400">
          © {new Date().getFullYear()} iaparatienda.com — Directorio independiente. Links de afiliado pueden aplicar.
        </footer>
      </body>
    </html>
  )
}
