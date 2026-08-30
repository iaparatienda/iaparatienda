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
  { slug: 'atencion-cliente', name: 'Atención al Cliente', desc: 'Chatbots, ticketing, voz' },
  { slug: 'ventas-marketing', name: 'Ventas & Marketing', desc: 'Email, ads, personalización' },
  { slug: 'operaciones', name: 'Operaciones', desc: 'Inventario, supply chain, logística' },
  { slug: 'finanzas', name: 'Finanzas', desc: 'Facturación, gastos, contabilidad' },
  { slug: 'seguridad', name: 'Seguridad', desc: 'Vigilancia, acceso, fraude' },
]

export const tools: Tool[] = [
  // Atención al Cliente
  { name: 'Intercom', slug: 'intercom', description: 'Plataforma de atención al cliente con IA para chat, email y voz. Respuestas automáticas basadas en tu base de conocimiento.', category: 'atencion-cliente', url: 'https://www.intercom.io', affiliateUrl: 'https://www.intercom.io?ref=iaparatienda', pricing: 'Desde $39/usuario/mes', featured: true, tags: ['chatbot', 'ticketing', 'ia'] },
  { name: 'Zendesk AI', slug: 'zendesk-ai', description: 'Agentes IA que resuelven hasta el 60% de tickets sin intervención humana. Integración con CRM y e-commerce.', category: 'atencion-cliente', url: 'https://www.zendesk.com/ai/', affiliateUrl: 'https://www.zendesk.com/ai/?ref=iaparatienda', pricing: 'Desde $115/agente/mes', featured: true, tags: ['ticketing', 'ia', 'crm'] },
  { name: 'Drift', slug: 'drift', description: 'Chatbot conversacional para WhatsApp, web y app. Ideal para tiendas que venden por WhatsApp.', category: 'atencion-cliente', url: 'https://drift.com', affiliateUrl: 'https://drift.com?ref=iaparatienda', pricing: 'Desde $99/mes', featured: false, tags: ['whatsapp', 'chatbot'] },
  { name: 'Tidio', slug: 'tidio', description: 'Chatbot IA para pymes. Responde preguntas frecuentes, califica leads y agenda citas directamente en el sitio.', category: 'atencion-cliente', url: 'https://tidio.com', affiliateUrl: 'https://tidio.com?ref=iaparatienda', pricing: 'Desde $29/mes', featured: false, tags: ['chatbot', 'pymes'] },
  { name: 'LiveChat', slug: 'livechat', description: 'Chat en vivo con IA para e-commerce. Trackea pedidos, responde sobre envíos y reduce carga del equipo.', category: 'atencion-cliente', url: 'https://www.livechat.com', affiliateUrl: 'https://www.livechat.com?ref=iaparatienda', pricing: 'Desde $29/mes', featured: false, tags: ['chat', 'ecommerce'] },

  // Ventas & Marketing
  { name: 'Klaviyo', slug: 'klaviyo', description: 'Email y SMS marketing con IA para e-commerce. Flujo automático de carritos abandonados, post-compra y win-back.', category: 'ventas-marketing', url: 'https://www.klaviyo.com', affiliateUrl: 'https://www.klaviyo.com?ref=iaparatienda', pricing: 'Free hasta 250 contactos', featured: true, tags: ['email', 'sms', 'ecommerce'] },
  { name: 'Omnisend', slug: 'omnisend', description: 'Marketing automation para Shopify. Email, SMS, popups y push con segmentación por IA.', category: 'ventas-marketing', url: 'https://www.omnisend.com', affiliateUrl: 'https://www.omnisend.com?ref=iaparatienda', pricing: 'Free plan disponible', featured: false, tags: ['shopify', 'email', 'sms'] },
  { name: 'Jasper', slug: 'jasper', description: 'IA para copywriting de marca. Genera descripciones de producto, emails, ads y contenido SEO con tu tono de voz.', category: 'ventas-marketing', url: 'https://www.jasper.ai', affiliateUrl: 'https://www.jasper.ai?ref=iaparatienda', pricing: 'Desde $49/usuario/mes', featured: false, tags: ['copywriting', 'seo', 'ia'] },
  { name: 'AdCreative', slug: 'adcreative', description: 'Genera variaciones de ads (imagen + copy) con IA. Testea qué creativo performa mejor antes de gastar en ads.', category: 'ventas-marketing', url: 'https://www.adcreative.com', affiliateUrl: 'https://www.adcreative.com?ref=iaparatienda', pricing: 'Desde $29/mes', featured: false, tags: ['ads', 'creative', 'ia'] },
  { name: 'Limelight', slug: 'limelight', description: 'IA que escribe descripciones de producto optimizadas para conversión. Se integra con Shopify, WooCommerce, Wix.', category: 'ventas-marketing', url: 'https://limelight.ai', affiliateUrl: 'https://limelight.ai?ref=iaparatienda', pricing: 'Desde $99/mes', featured: false, tags: ['producto', 'seo', 'conversion'] },

  // Operaciones
  { name: 'Cogent', slug: 'cogent', description: 'IA para gestión de inventario y demanda. Prevé ventas, optimiza reorden y reduce stockouts en retail.', category: 'operaciones', url: 'https://www.cogent.com', affiliateUrl: 'https://www.cogent.com?ref=iaparatienda', pricing: 'Contactar ventas', featured: true, tags: ['inventario', 'demanda', 'retail'] },
  { name: 'Blue Yonder', slug: 'blue-yonder', description: 'Suite de planificación de demanda y supply chain con IA. Para cadenas de tienda de tamaño medio a grande.', category: 'operaciones', url: 'https://www.blueyonder.com', affiliateUrl: 'https://www.blueyonder.com?ref=iaparatienda', pricing: 'Enterprise', featured: false, tags: ['supply-chain', 'demanda'] },
  { name: 'ShipBob', slug: 'shipbob', description: 'Optimización de fulfillment multi-warehouse. IA decide desde dónde envía para minimizar costo y tiempo.', category: 'operaciones', url: 'https://www.shipbob.com', affiliateUrl: 'https://www.shipbob.com?ref=iaparatienda', pricing: 'Desde $99/mes', featured: false, tags: ['logistica', 'envios'] },
  { name: 'Zoho Inventory', slug: 'zoho-inventory', description: 'Gestión de inventario con IA para pymes. Multi-canal, reorden automático, integración con marketplaces.', category: 'operaciones', url: 'https://www.zoho.com/inventory/', affiliateUrl: 'https://www.zoho.com/inventory/?ref=iaparatienda', pricing: 'Desde $29/mes', featured: false, tags: ['inventario', 'pymes'] },
  { name: 'Circuit', slug: 'circuit', description: 'IA para planificación de rutas de reparto y último kilómetro. Optimiza paradas y ventanas de entrega.', category: 'operaciones', url: 'https://circuit.app', affiliateUrl: 'https://circuit.app?ref=iaparatienda', pricing: 'Desde $39/ruta/mes', featured: false, tags: ['rutas', 'reparto'] },

  // Finanzas
  { name: 'Basis', slug: 'basis', description: 'Contabilidad con IA para pymes. Categorización automática de gastos, cierre mensual asistido, integración con banco.', category: 'finanzas', url: 'https://www.usebasis.com', affiliateUrl: 'https://www.usebasis.com?ref=iaparatienda', pricing: 'Desde $45/mes', featured: true, tags: ['contabilidad', 'pymes', 'ia'] },
  { name: 'Pilot', slug: 'pilot', description: 'IA que categoriza transacciones bancarias automáticamente. Ahorra horas de contabilidad manual cada mes.', category: 'finanzas', url: 'https://www.pilot.com', affiliateUrl: 'https://www.pilot.com?ref=iaparatienda', pricing: 'Desde $45/mes', featured: false, tags: ['contabilidad', 'banco'] },
  { name: 'Finta', slug: 'finta', description: 'Facturación y cobranza con IA para pymes latinas. Envía facturas, recuerda pagos, genera reportes fiscales.', category: 'finanzas', url: 'https://finta.com', affiliateUrl: 'https://finta.com?ref=iaparatienda', pricing: 'Desde $19/mes', featured: false, tags: ['facturacion', 'latam', 'pymes'] },
  { name: 'Numeric', slug: 'numeric', description: 'Bookkeeping con IA. Conecta tu banco, categoriza solo, cierra el mes en minutos. Ideal para tiendas con alto volumen.', category: 'finanzas', url: 'https://www.usenumeric.com', affiliateUrl: 'https://www.usenumeric.com?ref=iaparatienda', pricing: 'Desde $59/mes', featured: false, tags: ['contabilidad', 'ia'] },
  { name: 'QuickBooks + Intuit AI', slug: 'quickbooks-ai', description: 'El estándar de contabilidad ahora con IA: categorización automática, detección de anomalías, forecast de flujo de caja.', category: 'finanzas', url: 'https://quickbooks.intuit.com', affiliateUrl: 'https://quickbooks.intuit.com?ref=iaparatienda', pricing: 'Desde $35/mes', featured: false, tags: ['contabilidad', 'flujo-caja'] },

  // Seguridad
  { name: 'Vidyard', slug: 'vidyard', description: 'Videovigilancia con IA para retail. Detección de intrusiones, conteo de personas, alertas en tiempo real.', category: 'seguridad', url: 'https://www.vidyard.com', affiliateUrl: 'https://www.vidyard.com?ref=iaparatienda', pricing: 'Desde $99/cámara/mes', featured: false, tags: ['video', 'ia', 'retail'] },
  { name: 'SimpliFi', slug: 'simplifi', description: 'IA antifraude para pagos en tienda. Detecta tarjetas clonadas, skimming y anomalías en POS.', category: 'seguridad', url: 'https://www.simplifi.com', affiliateUrl: 'https://www.simplifi.com?ref=iaparatienda', pricing: '% por transacción', featured: false, tags: ['fraude', 'pos', 'pagos'] },
  { name: 'Kisele', slug: 'kisele', description: 'Control de acceso con IA para locales comerciales. Reconocimiento facial, logs de entrada, alertas de cola.', category: 'seguridad', url: 'https://www.kisele.com', affiliateUrl: 'https://www.kisele.com?ref=iaparatienda', pricing: 'Desde $49/punto/mes', featured: false, tags: ['acceso', 'video'] },
  { name: 'Sightlock', slug: 'sightlock', description: 'Cerraduras inteligentes con IA para comercios. Apertura por app, turnos de empleado, auditoría completa.', category: 'seguridad', url: 'https://www.sightlock.com', affiliateUrl: 'https://www.sightlock.com?ref=iaparatienda', pricing: 'Desde $129/puerta', featured: false, tags: ['acceso', 'cerraduras'] },
  { name: 'Cambridge Semantics', slug: 'cambridge-semantics', description: 'IA para análisis de video en retail: heatmaps de piso, detección de out-of-stock en estantería, compliance.', category: 'seguridad', url: 'https://cambridgesemantics.com', affiliateUrl: 'https://cambridgesemantics.com?ref=iaparatienda', pricing: 'Contactar ventas', featured: false, tags: ['video', 'estanteria', 'retail'] },
]

export function getTool(slug: string) {
  return tools.find(t => t.slug === slug)
}

export function getToolsByCategory(cat: string) {
  return tools.filter(t => t.category === cat)
}
