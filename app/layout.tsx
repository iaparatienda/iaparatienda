import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Email & SMS para Tu Tienda — Directorio de Herramientas de Marketing',
    template: '%s | Email para Tu Tienda',
  },
  description: 'Las mejores herramientas de email y SMS marketing para tu tienda: campañas, automatización, recuperación de carritos y retención.',
  keywords: ['email marketing pyme', 'sms marketing tienda', 'automatizacion email', 'recuperacion carritos', 'whatsapp commerce'],
  openGraph: {
    title: 'Email para Tu Tienda — Directorio',
    description: 'Directorio curado de herramientas de email y SMS marketing para comercios.',
    url: 'https://iaparatienda.com',
    siteName: 'Email para Tu Tienda',
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
              name: 'Email para Tu Tienda',
              url: 'https://iaparatienda.com',
              description: 'Directorio curado de herramientas de email y SMS marketing para comercios',
              inLanguage: 'es-AR',
            }),
          }}
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-G0C3SB26Y3"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-G0C3SB26Y3');
            `,
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
