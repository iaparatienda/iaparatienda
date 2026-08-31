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
  {
    slug: "cuanto-cuesta-intercom-argentina",
    title: "Cuánto cuesta Intercom en Argentina (2026): precios y qué incluye",
    description: "Precio real de Intercom para comercios argentinos: desde cuánto sale por usuario, qué incluye ese plan, costos ocultos a presupuestar y alternativas más baratas si tu volumen es bajo.",
    keywords: ["precio intercom argentina", "cuanto cuesta intercom", "intercom precio por usuario", "intercom para pymes", "intercom vs tidio"],
    content: ["Intercom no vende por \"sitio\" sino por usuario (asiento de agente). Para un comercio argentino el punto de partida realista es desde ~USD 39 por usuario/mes, y el precio sube según el volumen de canales y las funciones de IA que activás.", "En ese rango obtenés omnicanal (email + chat web + voz) y la IA que se entrena sobre tu base de conocimiento: FAQs, políticas de envío, descripciones de producto, y responde en el tono de tu marca. Es lo que lo distingue de un simple widget de chat.", "Cobro: mensual o anual. La anual suele traer un descuento equivalente a 2-3 meses; si ya sabés que vas a usarlo, conviene cerrar anual para bajar el costo efectivo por mes.", "Costos que hay que presupuestar aparte del asiento: integración con tu stack (CRM/e-commerce), carga y curado de tu base de conocimiento (FAQs, políticas), y el tiempo de equipo para entrenarlo. Eso, no la licencia, es donde se va la diferencia de implementación.", "Para Argentina: cotiza en USD, así que mirá el tipo de cambio al que te facturan y si aceptan facturación local. Todos los planes de esta categoría tienen trial — probá con tus casos reales antes de firmar.", "Si tu volumen de consultas es bajo (decenas por día, no cientos), Intercom suele ser overkill. Para presupuesto ajustado, Tidio y LiveChat arrancan desde ~USD 29/mes y cubren FAQ, calificación de leads y escalamiento a humano.", "Criterio de decisión simple: canal principal + volumen. Email/omnichannel y volumen alto → Intercom. Web-only y volumen bajo → Tidio/LiveChat. Probá Intercom en trial con tus tickets reales y compará deflection antes de decidir."],
    relatedTools: ["intercom", "tidio", "livechat"],
    category: "atencion-cliente",
  },
  {
    slug: "alternativas-zendesk-pymes-2026",
    title: "Alternativas a Zendesk para pymes (2026): cuándo conviene otra cosa",
    description: "Zendesk AI resuelve hasta el 60% de tickets sin agente, pero a ~USD 115/agente/mes suele ser overkill para una pyme. Comparamos Drift, Tidio y LiveChat por canal, precio y caso de uso.",
    keywords: ["alternativas a zendesk", "zendesk para pymes", "zendesk precio", "zendesk vs drift", "soporte al cliente pyme"],
    content: ["Zendesk AI va más lejos que un chatbot: no solo responde, sino que califica el ticket, lo prioriza y lo enruta, resolviendo hasta ~60% sin intervención humana. Potente — pero desde ~USD 115 por agente/mes, un precio pensado para equipos con volumen alto, no para una pyme que atiende decenas de consultas por día.", "Si tu cuello de botella es WhatsApp (muy común en retail argentino), Drift es el ajuste directo: conversacional, entiende contexto, se integra a WhatsApp Business. Desde ~USD 99/mes. Es la alternativa más sensata si tu canal principal es WhatsApp.", "Si tu presupuesto es ajustado y tu canal es web, Tidio y LiveChat arrancan desde ~USD 29/mes: responden FAQs, califican leads y escalan a humano cuando hace falta. Menos autonomía que Zendesk, pero cubren el caso de uso de una pyme sin el precio enterprise.", "Comparado por caso de uso: volumen alto + multi-canal + routing complejo → Zendesk AI. WhatsApp-first → Drift. Web + presupuesto bajo → Tidio/LiveChat. El error típico es pagar enterprise para un problema que una herramienta de $29-99/mes resuelve.", "Si ya usás Zendesk y querés bajar costos, mirá qué fracción de tickets realmente necesita routing humano: muchas pymes descubren que el 70-80% es FAQ repetitivo que un bot de menor costo defiende igual de bien.", "Migración es más barata de lo que parece: exportá tus macros/FAQs y reentrená el bot nuevo sobre tu base de conocimiento. La mayoría de los casos de uso de una pyme se traslada en una semana.", "Probá el ajuste real: cargá tus tickets reales en trial de Drift o Tidio y compará deflection y CSAT contra tu setup actual. La decisión se toma con tus datos, no con la ficha de ventas."],
    relatedTools: ["zendesk-ai", "drift", "tidio"],
    category: "atencion-cliente",
  },
  {
    slug: "mejor-chatbot-whatsapp-business-argentina",
    title: "Mejor chatbot para WhatsApp Business en Argentina (2026)",
    description: "En retail argentino WhatsApp es el canal dominante. Qué puede (y qué no) un chatbot sobre WhatsApp Business, por qué Drift es el ajuste nativo, requisitos de setup y alternativas de presupuesto.",
    keywords: ["chatbot whatsapp argentina", "whatsapp business chatbot tienda", "drift whatsapp", "automatizar whatsapp tienda", "chatbot ventas whatsapp"],
    content: ["En retail argentino el cliente pregunta por WhatsApp primero: \"hacen delivery?\", \"tienen talla M?\", \"dónde está mi pedido\". Un chatbot web que no llega a WhatsApp deja afuera el canal donde realmente ocurre la venta.", "Drift es la opción nativa para ese caso: conversacional, entiende contexto, y se integra directo a WhatsApp Business. Desde ~USD 99/mes. Está pensado para que la conversación siga en el canal que tu cliente ya usa, no para forzarlo a un widget web.", "Qué defiende bien sobre WhatsApp: FAQs de producto, tallas, horarios, políticas de envío, estado de pedido y calificación de leads. Qué sigue requiriendo humano: reclamos, negociaciones de precio, y decisiones de alto ticket donde la empatía vende.", "Requisitos de setup: cuenta WhatsApp Business, tu catálogo/FAQ cargado como base de conocimiento, y reglas de escalamiento a humano. La carga y curado de esa base es el paso que más tiempo toma, no la instalación.", "Si aún no estás listo para WhatsApp-first, Tidio y LiveChat (desde ~USD 29/mes) cubren el canal web: FAQ, leads y escalamiento. Útil como puente, pero no reemplazan la experiencia nativa de WhatsApp para una tienda que vive de ese canal.", "El criterio no es \"el más barato\" sino \"el que defiende mi canal dominante\". Si tu volumen entra por WhatsApp, la pregunta correcta es cuánto de eso podés automatizar sin perder la venta.", "Probá Drift en trial con tus conversaciones reales de WhatsApp y medí qué fracción se resuelve sola. Ese número, no el precio de portada, es el que decide."],
    relatedTools: ["drift", "tidio"],
    category: "atencion-cliente",
  },
  {
    slug: "ia-responder-tickets-sin-agente",
    title: "Responder tickets con IA sin agente: cómo funciona y qué resuelve solo",
    description: "Cómo una IA resuelve hasta ~60% de tickets sin intervención humana: qué se defiende solo, qué escala a humano, el precio de cada opción y cómo medir el ROI real en tu operación.",
    keywords: ["ia responder tickets", "automatizar soporte tickets", "zendesk ia", "intercom ia", "reducir tickets sin agente"],
    content: ["El costo real de soporte no es el software: es los agentes en horas pico respondiendo lo mismo. Una IA de resolución defiende la fracción repetitiva — estado de pedido, políticas, FAQs — y deja a humanos lo que requiere juicio.", "Zendesk AI es el tope de esa autonomía: califica, prioriza y enruta, resolviendo hasta ~60% sin agente. Intercom llega a autonomía alta entrenándose sobre tu base de conocimiento, con énfasis en omnicanal. Son dos caminos al mismo objetivo, con precios muy distintos.", "Qué se defiende solo: preguntas repetitivas, estado de pedido, políticas de envío/devolución, horarios. Qué escala a humano: reclamos, excepciones, ventas de alto ticket. La línea entre ambos se configura, no se adivina.", "Precio por caso de uso: Zendesk AI desde ~USD 115/agente/mes (volumen alto, routing complejo). Intercom desde ~USD 39/usuario/mes (omnichannel + IA). Si tu fracción repetitiva es alta y el volumen medio-alto, la matemática cambia rápido.", "Medí el ROI con tres números: tasa de deflection (% que se resuelve solo), costo por ticket resuelto, y CSAT post-automatización. Si el CSAT no cae y el costo/ticket baja, el caso se paga solo.", "El error es subir autonomía sin medir: soltar el bot sin reglas de escalamiento quema CSAT; apretarlo de más deja todo en humanos y no ganás nada. Calibrá contra tus tickets reales.", "Cargá tu histórico de tickets en trial de la opción que te calce y compará deflection/CSAT contra tu setup actual. La decisión se toma con tus datos."],
    relatedTools: ["zendesk-ai", "intercom"],
    category: "atencion-cliente",
  },
  {
    slug: "ia-inventario-pymes",
    title: "Cómo usar IA para inventario en una pyme (2026)",
    description: "Qué puede hacer una IA de inventario para una pyme: reorden automático, conciliación multi-canal y alertas de stock, el precio real, y qué expectativas cortar antes de empezar.",
    keywords: ["ia inventario pyme", "gestión de inventario ia", "zoho inventory", "reorden automático", "control de stock pyme"],
    content: ["Para una pyme el dolor de inventario no es exótico: stockouts en lo que más vende, sobre-stock en lo que no, y cuentas que no cierran entre canal físico y online. La IA entra donde hay patrón, no donde hay criterio.", "Zoho Inventory apunta a ese caso desde ~USD 29/mes: gestión multi-canal, reorden automático y integración con marketplaces. Es el punto de entrada más barato de la categoría para una pyme.", "Workflows concretos: alertas de stock bajo por SKU, sugerencias de reorden basadas en velocidad de venta, y conciliación entre canal físico y online para que la cuenta cierre. Eso quita horas de planilla manual cada semana.", "Cortá la expectativa correcta: una IA de inventario no te adivina la demanda perfecta. Mejora la velocidad de reacción a señales que ya existen (velocidad de venta, estacionalidad, promos), no lee el futuro. Úsala para no stockout en lo que ya sabés que vende.", "El ajuste por tamaño importa: a este precio y estas funciones, Zoho Inventory calza una pyme con volumen real. Si tu operación es una sola ubicación con SKU chico, puede que una planilla bien armada te alcance más barato — mirá el volumen antes de pagar.", "Criterio de decisión: volumen de SKUs + multi-canal + frecuencia de reorden. Si tenés los tres, la automatización se paga en semanas por horas de equipo recuperadas.", "Probá la conciliación multi-canal en trial con tus datos reales y mirá cuántas horas de planilla quita la primera semana. Ese número decide."],
    relatedTools: ["zoho-inventory"],
    category: "operaciones",
  },
  {
    slug: "chatbot-vs-agente-humano",
    title: "Chatbot vs. agente humano: cuándo conviene cada uno (y el modelo híbrido)",
    description: "No eseither/or: es routing. Cuándo el bot gana, cuándo el humano gana, cómo armar el modelo híbrido que califica y escala, y los métricas que deciden.",
    keywords: ["chatbot vs agente humano", "cuando usar chatbot", "modelo hibrido soporte", "calificacion de leads", "escalamiento a humano"],
    content: ["Framelo bien: no es \"bot o humano\", es routing. El bot defiende la fracción repetitiva y 24/7; el humano toma lo que requiere juicio, empatía o alto ticket. La calidad del sistema está en la línea entre ambos.", "El bot gana cuando: volumen alto, preguntas repetitivas, necesidad 24/7, y costo por interacción que hay que bajar. Ahí un humano es lento, caro e inconsistente.", "El humano gana cuando: reclamos, excepciones, ventas de alto ticket, y cualquier cosa donde la empatía es el producto. Un bot ahí quema la relación y la venta.", "El modelo híbrido es el estándar: el bot califica el caso y lo enruta — Zendesk AI hace exactamente eso, resolviendo hasta ~60% solo y escalando el resto (desde ~USD 115/agente/mes). Intercom (desde ~USD 39/usuario/mes) llega a autonomía alta sobre tu base de conocimiento. Drift (~USD 99/mes) si el canal es WhatsApp.", "Cuatro métricas deciden la calibración: tasa de deflection (% resuelto solo), tasa de escalamiento correcta, CSAT post-automatización, y costo por ticket resuelto. Subir autonomía sin mirar estos cuatro quema CSAT; apretar de más no ganás nada.", "La calibración se hace contra tus casos reales, no contra la promesa del vendor. Cargá tu histórico en trial y medí qué fracción se resuelve sola sin caer el CSAT.", "Ese número — deflection alto + CSAT estable — es el que justifica el modelo híbrido. Todo lo demás es marketing."],
    relatedTools: ["zendesk-ai", "intercom", "drift"],
    category: "atencion-cliente",
  },
]

export function getArticle(slug: string) {
  return articles.find(a => a.slug === slug)
}
