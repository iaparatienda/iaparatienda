export interface Article {
  slug: string
  title: string
  description: string
  keywords: string[]
  content: string[]
  relatedTools: string[]
  category: string
}

export const articles: Article[] = [
  {
    slug: "mejor-email-marketing-pymes-2026",
    title: "Mejor email marketing para pymes (2026): comparativa",
    description: "Qué email marketing conviene a una pyme: ActiveCampaign, Klaviyo y Mailchimp por canal, precio y caso de uso.",
    keywords: ["mejor email marketing pyme", "email marketing pymes", "activecampaign vs klaviyo", "email marketing para tienda"],
    content: ["El error típico es elegir por marca y no por caso de uso. Para una pyme, la pregunta correcta es: ¿cuánto volumen tengo, qué canal uso, y cuánto puedo automatizar sin perder la venta?", "ActiveCampaign combina email + SMS + CRM y automatiza por comportamiento: es el ajuste más completo si necesitás segmentación y scoring desde el día uno. Paga comisión recurrente por afiliado, así que es también el de mejor fit para un directorio.", "Klaviyo apunta al e-commerce: recuperación de carritos, post-compra y win-back. Si vendés online, es el más directo.", "Mailchimp y Brevo cubren el rango bajo con planes gratuitos: buenos para empezar, limitados cuando crecéis volumen.", "Criterio de decisión simple: canal principal + volumen. Omnicanal + CRM + automatización → ActiveCampaign. E-commerce + carritos → Klaviyo. Volumen bajo → Mailchimp/Brevo.", "Probá el ajuste real con tus casos y compará deflection antes de decidir. El número, no la marca, decide."],
    relatedTools: ["activecampaign", "klaviyo", "mailchimp"],
    category: "email",
  },
  {
    slug: "email-vs-sms-para-tienda",
    title: "Email vs. SMS: cuál conviene para tu tienda",
    description: "Email y SMS no compiten: cubren momentos distintos. Cuándo usar cada uno y cómo combinarlos sin quemar audiencia.",
    keywords: ["email vs sms marketing", "sms marketing tienda", "whatsapp vs email", "canal de marketing pyme"],
    content: ["Email y SMS no son rivales: llegan en momentos distintos. Email para el ciclo largo (nutrición, educación, recompra). SMS para el instante (promos, urgencias, post-compra).", "SMS tiene tasa de apertura mucho mayor pero caduca rápido y cuesta por mensaje: usalo para el momento de alta intención, no para nutrir.", "Para retail, el fit más común es email para la relación y SMS para la urgencia: carrito abandonado, stock de un producto, promo de fin de semana.", "Attentive Lion y Postscript cubren el lado SMS para retail/Shopify; Wati para WhatsApp commerce.", "El criterio no es cuál es mejor sino cuál llega en el momento correcto. Combinarlos bien es donde está el ROI."],
    relatedTools: ["attentive-lion", "postscript"],
    category: "sms",
  },
  {
    slug: "recuperar-carritos-abandonados",
    title: "Cómo recuperar carritos abandonados con email/SMS",
    description: "El flujo de recuperación de carritos: qué mensaje, en qué ventana, por qué canal, y cómo medirlo sin parecer spam.",
    keywords: ["recuperar carritos abandonados", "cart abandonment email", "flujo carrito abandonado", "recuperar venta online"],
    content: ["El carrito abandonado es el lead más caliente que tenés: ya quiso comprar. La recuperación es el flujo de mejor ROI del e-commerce.", "La ventana importa: un recordatorio suave a las ~1-2h, y uno con incentivo (envío gratis / descuento chico) a las ~24h. Más allá de eso, dejalo ir.", "SMS llega antes y con más fuerza que email en este caso; email alcanza más gente. Muchos usan ambos en secuencia.", "Klaviyo y Omnisend hacen este flujo nativo para e-commerce/Shopify; CleverReach para pymes.", "Medí recuperación por canal y por hora, y cortá lo que no convierte. El número decide."],
    relatedTools: ["klaviyo", "omnisend"],
    category: "email",
  },
  {
    slug: "whatsapp-commerce-para-tienda",
    title: "WhatsApp commerce para tu tienda (2026)",
    description: "Vender, atender y recuperar pedidos por WhatsApp: qué se puede automatizar, qué sigue requiriendo humano, y el fit por canal.",
    keywords: ["whatsapp commerce tienda", "vender por whatsapp", "whatsapp business comercio", "automatizar whatsapp ventas"],
    content: ["En retail latinoamericano el cliente cierra la compra por WhatsApp primero. Ignorar ese canal es dejar afuera la venta.", "Lo que se automatiza bien: FAQs, estado de pedido, disponibilidad, promos. Lo que sigue requiriendo humano: negociación de precio, reclamos, alto ticket.", "Wati y Attentive Lion cubren ese fit para retail/ecommerce.", "El criterio es el canal dominante de tu cliente, no el que a vos te resulta más cómodo.", "Probá el ajuste con tus conversaciones reales y medí qué fracción se resuelve sola."],
    relatedTools: ["wati", "attentive-lion"],
    category: "sms",
  },
  {
    slug: "reviews-para-subir-conversion",
    title: "Reviews para subir conversión en e-commerce",
    description: "Cómo conseguir más reviews y convertirlas en conversión: el flujo, el momento de la solicitud, y los tools que lo hacen.",
    keywords: ["reviews ecommerce", "conseguir reviews tienda", "reviews shopify", "subir conversion reviews"],
    content: ["Las reviews son la prueba social que falta en el último clic. Pedirlas bien es uno de los leverages más baratos de conversión.", "El momento importa: pedila post-compra, cuando la experiencia es positiva (envío recibido, problema resuelto), no en frío.", "Judge.me lo hace para Shopify con plan gratuito; Yotpo para marcas que quieren reviews + lealtad + referidos.", "Cuidado con el volumen: pedir de más quema la relación. El momento bien elegido gana.", "Medí tasa de solicitud→review y su efecto en conversión, y ajustá el momento."],
    relatedTools: ["judge-me", "yotpo"],
    category: "retencion",
  },
]

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug)
}
