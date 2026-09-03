export interface Tool {
  name: string
  slug: string
  description: string
  category: string
  url: string
  affiliateUrl: string
  pricing: string
  featured: boolean
  tags: string[]
}

// Helper: allows overriding per-tool affiliate URL via Vercel env vars
// Set NEXT_PUBLIC_AFFILIATE_BREVO, NEXT_PUBLIC_AFFILIATE_ACTIVECAMPAIGN, etc.
// When empty, falls back to plain URL (no commission — fix via PartnerStack)
function affiliate(fallback: string, envKey: string) {
  // @ts-ignore — process.env is replaced at build time by Next.js
  const v = typeof process !== "undefined" ? (process.env as any)[envKey] : undefined
  return v && String(v).startsWith("http") ? String(v) : fallback
}

export const categories = [
  { slug: "email", name: "Email marketing", desc: "Campañas, flujos, automatización" },
  { slug: "sms", name: "SMS & WhatsApp", desc: "SMS, WhatsApp commerce" },
  { slug: "automatizacion", name: "Automatización & segmentación", desc: "Flujos, triggers, comportamiento" },
  { slug: "retencion", name: "Reviews & retención", desc: "Reviews, lealtad, recompra" },
]

export const tools: Tool[] = [
  {
    name: "ActiveCampaign",
    slug: "activecampaign",
    description: "Marketing automation con email + SMS + CRM. Flujos por comportamiento, segmentación y scoring para pymes.",
    category: "email",
    url: "https://www.activecampaign.com",
    affiliateUrl: affiliate("https://www.activecampaign.com", "NEXT_PUBLIC_AFFILIATE_ACTIVECAMPAIGN"),
    pricing: "Desde ~$49/mes",
    featured: true,
    tags: ["email", "automatizacion", "crm"],
  },
  {
    name: "Klaviyo",
    slug: "klaviyo",
    description: "Email, SMS y push para e-commerce. Recuperación de carritos, post-compra y win-back.",
    category: "email",
    url: "https://www.klaviyo.com",
    affiliateUrl: affiliate("https://www.klaviyo.com", "NEXT_PUBLIC_AFFILIATE_KLAVIYO"),
    pricing: "Free hasta 250 contactos",
    featured: true,
    tags: ["email", "sms", "ecommerce"],
  },
  {
    name: "Mailchimp",
    slug: "mailchimp",
    description: "Email marketing para pymes. Campañas, automatización y segmentación en un solo lugar.",
    category: "email",
    url: "https://mailchimp.com",
    affiliateUrl: affiliate("https://mailchimp.com", "NEXT_PUBLIC_AFFILIATE_MAILCHIMP"),
    pricing: "Free hasta 500 contactos",
    featured: false,
    tags: ["email", "pyme"],
  },
  {
    name: "Brevo",
    slug: "brevo",
    description: "Email + SMS + CRM. Transaccional y marketing con plan gratuito. CONSEJO: programa afiliado auto-aprobado en 24h via PartnerStack — ideal para primera comisión.",
    category: "email",
    url: "https://www.brevo.com",
    affiliateUrl: affiliate("https://www.brevo.com", "NEXT_PUBLIC_AFFILIATE_BREVO"),
    pricing: "Free hasta 300 envíos/día",
    featured: false,
    tags: ["email", "sms", "crm"],
  },
  {
    name: "Attentive Lion",
    slug: "attentive-lion",
    description: "SMS marketing para retail y e-commerce. Win-back, promos y mensajes post-compra.",
    category: "sms",
    url: "https://www.attentivelion.com",
    affiliateUrl: affiliate("https://www.attentivelion.com", "NEXT_PUBLIC_AFFILIATE_ATTENTIVE"),
    pricing: "Contactar ventas",
    featured: false,
    tags: ["sms", "retail"],
  },
  {
    name: "Postscript",
    slug: "postscript",
    description: "SMS para Shopify. Recuperación de carritos y mensajes post-compra.",
    category: "sms",
    url: "https://postscript.io",
    affiliateUrl: affiliate("https://postscript.io", "NEXT_PUBLIC_AFFILIATE_POSTSCRIPT"),
    pricing: "Plan gratuito",
    featured: false,
    tags: ["sms", "shopify"],
  },
  {
    name: "Wati",
    slug: "wati",
    description: "WhatsApp commerce. Vende, atiende y recupera pedidos por WhatsApp.",
    category: "sms",
    url: "https://wati.io",
    affiliateUrl: affiliate("https://wati.io", "NEXT_PUBLIC_AFFILIATE_WATI"),
    pricing: "Desde ~$49/mes",
    featured: false,
    tags: ["whatsapp", "ecommerce"],
  },
  {
    name: "Customer.io",
    slug: "customer-io",
    description: "Automatización por comportamiento. Triggers en tiempo real sobre las acciones del usuario.",
    category: "automatizacion",
    url: "https://customer.io",
    affiliateUrl: affiliate("https://customer.io", "NEXT_PUBLIC_AFFILIATE_CUSTOMERIO"),
    pricing: "Contactar ventas",
    featured: false,
    tags: ["automatizacion", "triggers"],
  },
  {
    name: "CleverReach",
    slug: "cleverreach",
    description: "Email/SMS/WhatsApp automation para pymes. Flujos de recuperación y post-compra.",
    category: "automatizacion",
    url: "https://www.cleverreach.com",
    affiliateUrl: affiliate("https://www.cleverreach.com", "NEXT_PUBLIC_AFFILIATE_CLEVERREACH"),
    pricing: "Desde ~$19/mes",
    featured: false,
    tags: ["automatizacion", "sms", "pyme"],
  },
  {
    name: "Judge.me",
    slug: "judge-me",
    description: "Reviews para Shopify. Recolecta testimonios y sube la conversión.",
    category: "retencion",
    url: "https://judge.me",
    affiliateUrl: affiliate("https://judge.me", "NEXT_PUBLIC_AFFILIATE_JUDGEME"),
    pricing: "Plan gratuito",
    featured: false,
    tags: ["reviews", "shopify"],
  },
  {
    name: "Yotpo",
    slug: "yotpo",
    description: "Reviews, lealtad y referidos. Programa de retención para marcas.",
    category: "retencion",
    url: "https://www.yotpo.com",
    affiliateUrl: affiliate("https://www.yotpo.com", "NEXT_PUBLIC_AFFILIATE_YOTPO"),
    pricing: "Desde ~$29/mes",
    featured: false,
    tags: ["reviews", "loyalty"],
  },
  {
    name: "Omnisend",
    slug: "omnisend",
    description: "Email, SMS, popups y push para Shopify con segmentación. 20% recurrente 24 meses via Impact.",
    category: "retencion",
    url: "https://www.omnisend.com",
    affiliateUrl: affiliate("https://www.omnisend.com", "NEXT_PUBLIC_AFFILIATE_OMNISEND"),
    pricing: "Free plan",
    featured: false,
    tags: ["email", "sms", "shopify"],
  },
]

export function getTool(slug: string) {
  return tools.find((t) => t.slug === slug)
}

export function getToolsByCategory(cat: string) {
  return tools.filter((t) => t.category === cat)
}
