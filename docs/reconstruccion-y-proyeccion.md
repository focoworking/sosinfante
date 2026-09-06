# Reconstrucción de sosinfante.org — qué se conserva, qué se corrige y qué resultados esperar

> Auditoría hecha sobre las capturas del sitio 2022. El inventario real de URLs, tráfico y pedidos se hace en cuanto se abra el acceso al servidor y a Analytics/Search Console.

---

## 1. Diagnóstico del sitio anterior

### Lo que estaba bien (y hay que conservar sí o sí)

| Activo | Por qué vale |
|---|---|
| **Dominio con historial** | Un dominio con años de indexación y enlaces vale más que cualquier rediseño. Es el activo número uno. |
| **Identidad de marca** | El logo de la mano en la O, el turquesa, la tipografía negra condensada: es reconocible y está bien resuelta. No se toca. |
| **Manifiesto** | "Una vida, una esperanza", "Uno a la vez", "El amor en nuestra piel", los cinco valores. Es lenguaje propio, no plantilla. Vale oro para diferenciarse. |
| **Blog con artículos reales** | Bullying, suicidio adolescente, embarazo infantil, mando y control. Contenido de intención informativa: es lo que atrae tráfico frío y lo que citan los buscadores y los asistentes de IA. |
| **Tienda ya montada** | WooCommerce con categorías, ofertas y carrito funcionando. La infraestructura de cobro existe; el problema es el catálogo, no la tecnología. |
| **Cifras con fuente** | "4 de 10 niñas", UNICEF 2020, 79.946 llamadas al ECU 911. Datos citables ya trabajados. |
| **Documentación legal** | Privacidad, términos, devoluciones. Aburrido y necesario; ya está escrito. |
| **Sección de voluntariado detallada** | Horas por área, requisitos, aporte de USD 50. Información honesta y concreta. |

### Lo que fallaba

| Problema | Consecuencia | Corrección en el sitio nuevo |
|---|---|---|
| **Nomenclatura "´22"** en menú y campañas | El sitio se ve caducado el 1 de enero siguiente | Etiquetas atemporales; el año vive en el contenido, no en el menú |
| **Sin llamada a la acción persistente** | El visitante navega y se va sin donar ni postular | Botón Donar fijo en cabecera, barra fija en móvil, WhatsApp flotante |
| **Blog en carrusel** | El contenido más valioso escondido detrás de flechas; Google indexa mal, el usuario no lo ve | Grilla estática, artículo por URL propia |
| **Menú de 7 ítems con iconos y sin jerarquía** | "Tienda" pesa lo mismo que "Proyectos"; no hay ruta de conversión | 7 entradas jerarquizadas + CTA separado; el resto al pie |
| **Tienda desconectada de la misión** | Velas y mantas genéricas: compite con Amazon y pierde | Catálogo de impacto primero (kit alimentario, terapia, brigada), merch después |
| **Textos largos en mayúsculas centrados** | Ilegible en móvil, cero jerarquía tipográfica | Escala tipográfica, párrafos de 70 caracteres, respuestas de 40-60 palabras arriba |
| **Formularios sin destino** | Postulaciones y contactos que se pierden | Todo a CRM, respuesta comprometida en 72 h |
| **Sin datos estructurados** | Invisible para featured snippets, Google Jobs, mapas y asistentes de IA | 59 bloques JSON-LD: NGO, LocalBusiness por sede, FAQPage, JobPosting, OfferCatalog, DonateAction |
| **Traductor automático GTranslate** | Inglés de mala calidad, sin hreflang, sin valor SEO en Estados Unidos | Versión inglesa escrita y con hreflang, apuntada a Miami |
| **Sin transparencia financiera** | La objeción número uno del donante latino queda sin respuesta | Metas públicas, uso de fondos, salvaguarda y canal de denuncias |
| **Un solo país en el relato** | Miami y Venezuela invisibles | Tres sedes con página propia y schema local |

### La falla de fondo

El sitio de 2022 **informaba**. Estaba hecho para que alguien entendiera la organización. No estaba hecho para que alguien **hiciera** algo: donar, postular, entregar una caja, comprar un kit. Ese es el cambio de categoría de la reconstrucción, no el color ni la tipografía.

---

## 2. Plan de migración sin perder lo ganado

Nueve de cada diez migraciones pierden posicionamiento. Se pierde por una sola razón: redirecciones mal hechas. El trabajo real ocurre en los 90 días posteriores al lanzamiento.

**Antes de tocar nada**
1. Volcado completo de URLs actuales (rastreo del sitio + sitemap + logs del servidor).
2. Exportar Analytics y Search Console: qué páginas traen tráfico y con qué consultas. Sin eso, se migra a ciegas.
3. Copia de seguridad completa de base de datos y archivos.
4. Exportar pedidos, clientes y productos de WooCommerce, y toda lista de correos con su consentimiento.

**Mapa de redirecciones 1:1**
- Cada artículo del blog conserva su slug: `/blog/nuestro-hijo-victima-de-bullying/` sigue siendo esa URL. Nunca redirigir todo a la portada: es el error que cuesta un año de recuperación.
- `proyectos´22` → `/proyectos/`; `voluntariado´22` → `/voluntariado/`; `faq´s` → `/faq/`; `involúcrate` → `/involucrate/`; `tienda` → `/tienda/`.
- Productos descontinuados → categoría equivalente, no a 404.
- Cero cadenas de redirección (A→B→C) y cero redirecciones a páginas que redirigen.

**Al publicar**
- Sitemap nuevo enviado a Search Console y Bing el mismo día.
- Verificar indexación de las 20 URLs con más tráfico histórico durante 4 semanas.
- Monitorear 404 en logs semanalmente el primer mes.

**Expectativa realista:** con mapa 1:1 limpio, la visibilidad se recupera en 2 a 8 semanas, y la mejora real llega entre el mes 3 y el 6, cuando el contenido nuevo empieza a posicionar.

---

## 3. Resultados esperables

Sin acceso todavía a las métricas actuales, estas cifras son un modelo con supuestos explícitos, no una promesa. En cuanto tenga la línea base real las ajusto.

### Supuestos de partida (a validar)
- Tráfico orgánico actual estimado: 400–1.500 sesiones/mes.
- Conversión a donación hoy: prácticamente nula (no había pasarela visible ni CTA).
- Base de correos: existente pero sin uso sistemático.

### Escenario objetivo, mes 12

| Indicador | Mes 3 | Mes 6 | Mes 12 |
|---|---|---|---|
| Sesiones orgánicas / mes | 1.200 | 4.000 | 10.000 |
| Visitas a `/dona/` | 100 | 340 | 850 |
| Donaciones completadas / mes | 8 | 30 | 75 |
| Donantes mensuales activos (acumulado, con 3 % de baja) | 25 | 110 | 300 |
| Postulaciones de voluntariado / mes | 15 | 45 | 110 |
| Voluntarios activos con turno fijo | 20 | 60 | 120 |
| Pedidos del catálogo de impacto / mes | 10 | 40 | 110 |
| Kilos acopiados en Miami / mes | 1.000 | 2.500 | 4.000 |

### De dónde salen los 600 donantes mensuales de la meta anual

La web sola no los entrega. Desglose honesto por canal:

| Canal | Donantes mensuales año 1 |
|---|---|
| Web + SEO + AEO/GEO | 300 |
| Campañas presenciales y acopio en Miami | 120 |
| Peer-to-peer (cada voluntario abre su meta) | 100 |
| Alianzas corporativas y matching de empleados | 80 |
| **Total** | **600** |

Quien prometa 600 solo con el sitio, miente. El sitio es el convertidor; el volumen lo traen las campañas y la red.

### Traducción a dinero (escenario objetivo)

| Línea | Año 1 |
|---|---|
| 300 donantes mensuales × USD 15 × promedio 7 meses activos | ~USD 31.000 |
| Catálogo de impacto: 110 pedidos/mes × USD 45 × 6 meses de rodaje | ~USD 30.000 |
| Reventa del acopio en Miami | ~USD 90.000 |
| Merch bajo demanda | ~USD 12.000 |
| Alianzas, grants y formación pagada | ~USD 150.000 |
| **Total año 1** | **~USD 313.000** |

Es la mitad de la meta de USD 630.000 del modelo. Eso es lo normal en un año 1: el año 2 es el que multiplica, porque los donantes mensuales ya están y no hay que volver a adquirirlos. Retener cuesta cinco veces menos que captar.

### Lo que se gana aunque el tráfico no explote

- **Ser citado por asistentes de IA.** Con `llms.txt`, FAQ estructurada y datos con fuente, cuando alguien pregunte a ChatGPT o Perplexity "a qué ONG dono para niñez en Ecuador", SOS Infante puede aparecer en la respuesta. Ahí no hay puja publicitaria: gana quien está mejor estructurado.
- **Aparecer en Google Jobs** con el `JobPosting` de voluntariado.
- **Aparecer en el mapa** de cada ciudad con el `LocalBusiness` por sede.
- **Poder postular a fondos.** Sin metas públicas, uso de fondos y política de salvaguarda, la mayoría de convocatorias descarta en el primer filtro. Esto ya no es marketing: es habilitación.

---

## 4. El caso de estudio: cómo construirlo desde el día uno

Un caso de éxito no se escribe al final; se instrumenta al principio.

1. **Línea base publicada esta semana**: tráfico, donantes, voluntarios, kilos, beneficiarios. Aunque sean ceros. Sin la foto del día cero no hay historia que contar después.
2. **Un indicador por proyecto**, no cinco: adultos formados, niñas y niños atendidos, adolescentes alcanzados, casos acompañados, infantes en arteterapia.
3. **Reporte trimestral público**, también cuando se va por debajo de la meta. Publicar un trimestre malo genera más confianza que tres buenos maquillados.
4. **Trazabilidad de la caja**: donante → contenido → destino → acta de entrega. Es la evidencia que convierte donación única en mensual y la que se muestra a una fundación.
5. **Historias con consentimiento y rostro protegido**, con la métrica al lado. Un testimonio sin dato es publicidad; un dato sin historia no emociona. Van juntos.
6. **Publicar el caso en abierto** al cierre del año 1: metodología, números, aciertos y errores. Es lo que atrae grants, prensa y aliados en el año 2.

---

## 5. Riesgos reales de esta reconstrucción

| Riesgo | Probabilidad | Mitigación |
|---|---|---|
| Migración mal redirigida | Alta si se hace rápido | Mapa 1:1 antes de publicar, verificación de 404 durante 4 semanas |
| Pasarela y CRM sin conectar | Alta | Es lo primero: sin cobro, el sitio no factura |
| Convenio con institución pública en Ecuador demorado | Media | Empezar con courier consolidado y compra local para el catálogo de impacto |
| Contenido que envejece (otra vez el "´22") | Media | Nomenclatura atemporal ya aplicada; reporte trimestral como ritmo editorial |
| Equipo sin capacidad para el ritmo de campañas | Media | Seis campañas al año, no doce; departamentos con responsables nombrados |
| Uso indebido de imágenes de niñez | Baja pero crítica | Política de salvaguarda, consentimiento informado, rostros protegidos por defecto |

---

## 6. Qué necesito de tu lado para pasar de modelo a números reales

1. Accesos: servidor/hosting, WordPress, dominio (DNS), Google Analytics y Search Console.
2. Exportación de WooCommerce: productos, pedidos y clientes.
3. Base de correos y de voluntariado histórica, con su consentimiento.
4. Estados financieros del último año, aunque sean informales.
5. Fotografía y video en bruto de los proyectos.
6. Estatutos, RUC / registro y estado del 501(c)(3) si existe.

Con eso reemplazo cada supuesto de este documento por un dato, y el modelo pasa de proyección a plan.

## Fuentes

- [Guide to recovery after a site migration — Koozai](https://www.koozai.com/blog/search-marketing/your-guide-to-recovery-after-a-site-migration/)
- [Website migration SEO: avoid 50 % traffic loss — Numen Technology](https://www.numentechnology.co.uk/blog/website-migration-seo-strategy)
- [Website migration SEO checklist 2026 — Vaza](https://vaza.ai/blog/website-migration-seo-checklist-how-to-relaunch-without-tanking-your-rankings)
- [SEO recovery timeline after website migration — Thatware](https://thatware.co/seo-recovery-timeline-after-website-migration/)
- [Recurring giving statistics 2026 — Neon One](https://neonone.com/resources/blog/recurring-giving-statistics/)
- [Optimizing donation landing pages — Fundraise Up](https://fundraiseup.com/blog/Optimizing-Donation-Landing-Pages/)
