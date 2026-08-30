export interface Article {
  slug: string
  title: string
  description: string
  keywords: string[]
  content: string[] // paragraphs
  relatedTools: string[] // slugs
  category: string
}

export const articles: Article[] = [
  {
    slug: 'mejor-chatbot-para-tienda-2026',
    title: 'Mejor chatbot IA para tu tienda en 2026: comparativa completa',
    description: 'Comparamos los 5 mejores chatbots IA para comercios: Intercom, Zendesk AI, Drift, Tidio y LiveChat. Precios, capacidades, y cuál conviene según tu volumen.',
    keywords: ['mejor chatbot tienda', 'chatbot ia comercio', 'ia atencion al cliente', 'chatbot whatsapp tienda', 'automatizacion soporte'],
    relatedTools: ['intercom', 'zendesk-ai', 'drift', 'tidio', 'livechat'],
    category: 'atencion-cliente',
    content: [
      'Si tu tienda recibe más de 50 consultas por día, responder a mano ya no escala. Los chatbots con IA resuelven entre el 40% y el 70% de las preguntas frecuentes sin intervención humana: "dónde está mi pedido", "hacen delivery?", "tienen talla M?", "cuál es el horario".',
      'Intercom es el más completo si vendes por email + chat + voz. Su IA se entrena con tu base de conocimiento (FAQs, políticas de envío, descripciones de producto) y responde en tono de marca. Desde $39/usuario/mes. Ideal si ya usás Intercom para soporte.',
      'Zendesk AI va un paso más allá: no solo responde, sino que califica el ticket, lo prioriza y lo enruta. Resuelve hasta el 60% sin agente. Más caro ($115/agente/mes) pero si tenés volumen alto de tickets, el ROI se paga solo.',
      'Si vendés por WhatsApp (muy común en Argentina), Drift es el más natural: conversacional, entiende contexto, y se integra directo con WhatsApp Business. Desde $99/mes.',
      'Para pymes con presupuesto ajustado, Tidio ($29/mes) y LiveChat ($29/mes) cubren lo básico: respuestas a FAQs, calificación de leads, y escalamiento a humano cuando hace falta.',
      'El criterio de decisión es simple: volumen de consultas (>200/día → Zendesk), canal principal (WhatsApp → Drift, email → Intercom, web → Tidio/LiveChat), y presupuesto. Todos tienen trial para que probés sin compromiso.',
    ],
  },
  {
    slug: 'ia-para-inventario-pymes',
    title: 'IA para inventario: cómo dejar de perder plata en stockouts y sobrestock',
    description: 'Las herramientas de IA para gestión de inventario que convienen a pymes: Cogent, Zoho Inventory, ShipBob. Previsión de demanda, reorden automático, y cómo evitar el stockout.',
    keywords: ['ia inventario', 'gestion inventario ia', 'prevision demanda', 'reorden automatico', 'ia retail pymes'],
    relatedTools: ['cogent', 'zoho-inventory', 'shipbob'],
    category: 'operaciones',
    content: [
      'El problema clásico de la tienda: o te quedás sin lo que más vende (stockout), o te ahogás en stock que no sale. Ambos cuestan plata. La IA lo resuelve previendo demanda por SKU, no por intuición.',
      'Cogent es el más potente: analiza historial de ventas, estacionalidad, día de semana, promos, y genera un plan de reorden automático. Si vendés más de 1000 SKUs, el tiempo que ahorras en planificación cubre la licencia varias veces.',
      'Para pymes que no llegan a ese volumen, Zoho Inventory ($29/mes) da lo esencial: conteo en tiempo real, alertas de mínimo, reorden sugerido, y multi-canal (tienda física + web + marketplaces).',
      'ShipBob resuelve otro problema: si tenés stock en más de un lugar (tienda + bodega + marketplace), decide desde dónde cumple cada pedido para minimizar costo de envío y tiempo de entrega.',
      'El punto: no se trata de "IA mágica" sino de que el cálculo de demanda por SKU, hecho a mano en Excel, escala mal. Con IA, el cálculo es continuo y se ajusta solo.',
    ],
  },
  {
    slug: 'ia-contabilidad-tienda',
    title: 'IA para contabilidad de tienda: cerrá el mes en minutos, no en días',
    description: 'Basis, Pilot, Numeric y QuickBooks con IA: cómo la categorización automática de gastos te ahorra 20+ horas mensuales de contabilidad manual.',
    keywords: ['ia contabilidad', 'categorizacion automatica gastos', 'cierre mensual ia', 'contabilidad pymes ia', 'automatizacion financiera'],
    relatedTools: ['basis', 'pilot', 'numeric', 'quickbooks-ai'],
    category: 'finanzas',
    content: [
      'Si cerrás el mes a mano, categorizando cada movimiento bancario una por una, te lleva 2-3 días. Con IA, el cierre es de 30 minutos: revisás lo que el modelo no estuvo seguro y listo.',
      'Basis ($45/mes) se conecta directo a tu banco, categoriza cada transacción con 95%+ precisión, y genera el P&L y balance sin que toques una celda. Si vendés en Argentina, también maneja retenciones y IVA básicos.',
      'Pilot hace lo mismo pero con enfoque en detección de anomalías: te avisa si hay un gasto duplicado, una cuota que no reconocés, o un proveedor que factura distinto.',
      'Numeric ($59/mes) apunta a tiendas con alto volumen de transacciones (500+/mes). Cuanto más volumen, más se paga la automatización.',
      'QuickBooks + Intuit AI es el estándar si ya usás QuickBooks: ahora la categorización es automática y el forecast de flujo de caja te dice cuándo vas a quedar corto.',
      'Para Argentina específicamente, Finta ($19/mes) habla tu idioma fiscal: facturas electrónicas, monedas, reportes AFIP. Es la opción más práctica si operás en pesos.',
    ],
  },
  {
    slug: 'ia-ventas-marketing-tienda',
    title: 'IA para ventas y marketing: carritos abandonados, email y ads sin equipo',
    description: 'Klaviyo, Omnisend, Jasper y Limelight: cómo una sola persona con IA hace el trabajo de marketing de un equipo de 5. Flujos automáticos, copy de producto, y ads que convierten.',
    keywords: ['ia marketing tienda', 'carrito abandonado ia', 'email marketing ia', 'copywriting ia producto', 'ia ventas ecommerce'],
    relatedTools: ['klaviyo', 'omnisend', 'jasper', 'adcreative', 'limelight'],
    category: 'ventas-marketing',
    content: [
      'El carrito abandonado es el flujo de marketing con mejor ROI que existe: 15-25% de recuperación. Klaviyo lo automatiza con IA: detecta el abandono, envía la secuencia (recordatorio → descuento → último aviso), y optimiza timing por comportamiento.',
      'Si usás Shopify, Omnisend da lo mismo + popups + push notifications. Free hasta cierto volumen, luego desde $19/mes.',
      'El problema del copy: descripciones de producto genéricas no venden. Limelight ($99/mes) genera descripciones optimizadas para conversión, con tu tono de marca, en segundos por SKU. Si tenés 500 productos, no los escribís a mano.',
      'Jasper ($49/usuario/mes) es más amplio: emails, ads, landing pages, contenido SEO. Se entrena con tu brand voice para que no suene a robot.',
      'Para ads pagados, AdCreative genera variaciones de creativo (imagen + copy) y te dice cuál va a performar mejor ANTES de gastar en Meta o Google. Menos prueba-y-error, más señal.',
      'La combinación ganadora para una tienda sola: Klaviyo/Omnisend (flujo) + Limelight (producto) + AdCreative (ads). Tres herramientas, trabajo de equipo completo.',
    ],
  },
  {
    slug: 'seguridad-ia-tienda',
    title: 'Seguridad con IA para tu tienda: fraude, acceso y video sin guardia 24hs',
    description: 'Vidyard, SimpliFi, Sightlock: cómo la IA vigila tu tienda cuando vos no estás. Detección de fraude en POS, control de acceso, y alertas de intrusión en tiempo real.',
    keywords: ['seguridad ia tienda', 'antifraude ia', 'control acceso ia', 'videovigilancia ia retail', 'seguridad comercio ia'],
    relatedTools: ['vidyard', 'simplifi', 'sightlock', 'kisele'],
    category: 'seguridad',
    content: [
      'Si tu tienda cierra a las 20 y la roban a las 21, querés saberlo en segundos, no a la mañana siguiente. Vidyard ($99/cámara/mes) analiza el video en tiempo real: movimiento cuando no debería haberlo, conteo de personas, y te manda alerta al celular.',
      'El fraude en POS es otro costo silencioso: tarjetas clonadas, reverse charging, skimming. SimpliFi analiza cada transacción y flaggea anomalías sin frenar la fila.',
      'Sightlock ($129/puerta) resuelve lo operativo: quién entró, cuándo, y en qué orden. Si un empleado dice que no abrió a las 7, el log lo dice. Turnos, auditoría, cero llaves físicas.',
      'Kisele va un paso más: reconocimiento facial para empleados frecuentes, alertas si alguien conocido del robo anterior aparece, y análisis de cola (cuánta gente quiere entrar y cuánta capacidad tenés).',
      'No reemplaza una alarma o un seguro. Pero cambia el tiempo de detección de "días" a "segundos", y eso cambia todo.',
    ],
  },
  {
    slug: 'ia-logistica-reparto',
    title: 'IA para logística y reparto: optimizá rutas y entregá más en menos horas',
    description: 'Circuit y ShipBob: planificación de rutas con IA para último kilómetro. Menos horas de volante, más entregas por turno, costo de envío bajo control.',
    keywords: ['ia rutas reparto', 'optimizacion ultima milla', 'logistica ia', 'planificacion rutas ia', 'reparto inteligente'],
    relatedTools: ['circuit', 'shipbob'],
    category: 'operaciones',
    content: [
      'Si hacés reparto propio (común en pymes argentinas), la ruta del día la armás "a ojo". Con IA, el sistema ordena paradas por proximidad, ventanas horarias, y capacidad de vehículo. Resultado: 15-30% menos km por turno.',
      'Circuit ($39/ruta/mes) toma tu lista de entregas y genera la ruta óptima en segundos. Se integra con tu ERP o con una planilla. Te dice también qué no va a llegar a tiempo para que lo re-agendes.',
      'ShipBob resuelve el problema multi-origen: si tenés stock en tienda + bodega + marketplace, decide qué origen cumple cada pedido para minimizar costo. No es solo rutas — es fulfillment inteligente.',
      'Para el e-commerce que envía por courier (Andre, Andre, OCASA), la IA no elige el camión pero sí elige el paquete: consolidación, tamaño, y carrier por costo/tiempo.',
    ],
  },
]

export function getArticle(slug: string) {
  return articles.find(a => a.slug === slug)
}
