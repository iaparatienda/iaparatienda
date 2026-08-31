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
    affiliateUrl: "https://www.activecampaign.com",
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
    affiliateUrl: "https://www.klaviyo.com",
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
    affiliateUrl: "https://mailchimp.com",
    pricing: "Free hasta 500 contactos",
    featured: false,
    tags: ["email", "pyme"],
  },
  {
    name: "Brevo",
    slug: "brevo",
    description: "Email + SMS + CRM. Transaccional y marketing con plan gratuito.",
    category: "email",
    url: "https://www.brevo.com",
    affiliateUrl: "https://www.brevo.com",
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
    affiliateUrl: "https://www.attentivelion.com",
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
    affiliateUrl: "https://postscript.io",
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
    affiliateUrl: "https://wati.io",
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
    affiliateUrl: "https://customer.io",
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
    affiliateUrl: "https://www.cleverreach.com",
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
    affiliateUrl: "https://judge.me",
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
    affiliateUrl: "https://www.yotpo.com",
    pricing: "Desde ~$29/mes",
    featured: false,
    tags: ["reviews", "loyalty"],
  },
  {
    name: "Omnisend",
    slug: "omnisend",
    description: "Email, SMS, popups y push para Shopify con segmentación.",
    category: "retencion",
    url: "https://www.omnisend.com",
    affiliateUrl: "https://www.omnisend.com",
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
