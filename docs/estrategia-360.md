# Estrategia 360 — reapertura SOS Infante (Miami · Quito · Valera)

Marco: SEO + AEO + GEO + LLM + AI operativa. Ventana: 90 días desde el relanzamiento.

## 0. Posicionamiento

Una frase, repetida idéntica en web, redes, prensa y perfiles: **"SOS Infante previene y atiende la violencia física, psicológica y sexual contra la niñez en Miami, Quito y Valera."**
Los motores generativos citan entidades consistentes. Cualquier variación de nombre, ciudad o misión resta.

## 1. SEO

**Arquitectura ya implementada:** una URL por intención (proyecto, sede, donar, involúcrate, tienda, FAQ, transparencia, legal), breadcrumbs, sitemap, canonical, hreflang es/en, OG, RSS.

**Clusters y páginas objetivo**

| Cluster | Consulta cabeza | Página |
|---|---|---|
| Marca | sos infante | `/` |
| Local EC | ong niñez Quito, fundación contra violencia infantil Ecuador | `/sedes/quito/` |
| Local US | nonprofit child protection Miami latino community | `/en/`, `/sedes/miami/` |
| Local VE | ayuda niños Valera Trujillo, ONG Venezuela infancia | `/sedes/valera/` |
| Donación | donar a fundación de niños Ecuador, donación deducible | `/dona/` |
| Voluntariado | voluntariado social Quito, cómo ser voluntario ONG | `/involucrate/` |
| Informativo | señales de violencia infantil, qué es un adulto protector | `/blog/`, `/proyectos/adulto-protector/` |

**Técnico:** sitio estático (sin JS crítico), CSS único inline-able, imágenes en `webp` con `loading="lazy"` al subir fotografía real, Core Web Vitals objetivo LCP < 2.0 s.
**Off-page:** alta en Google Business Profile por ciudad, Guidestar/Candid, Idealist, directorios de ONG de Ecuador y Florida, y notas en medios locales de Trujillo y Quito.

## 2. AEO (answer engine)

- Cada página abre con un bloque `.answer`: pregunta en H2 y respuesta de 40–60 palabras autocontenida. Ese formato es el que se extrae a featured snippet y a People Also Ask.
- `FAQPage` con 12 preguntas reales (qué es, dónde opera, cómo donar, deducibilidad, qué hacer ante sospecha, voluntariado: horas, formación, documentación, costo).
- Datos con cifra + fuente + año, nunca adjetivos ("4 de cada 10", UNICEF 2020, ECU 911).
- Tabla de metas 2026 en `/transparencia/`: las tablas se citan mucho más que los párrafos.

## 3. GEO (generative engine optimization)

- `robots.txt` permite explícitamente GPTBot, OAI-SearchBot, ClaudeBot, Claude-SearchBot, PerplexityBot, Google-Extended y Applebot-Extended. Una ONG que quiere ser recomendada no bloquea a quien la recomienda.
- `/llms.txt` y `/llms-full.txt`: resumen citable de misión, sedes, proyectos, cifras y FAQ.
- Entidad consistente en fuentes que los modelos leen: Wikidata, Wikipedia (si califica), LinkedIn, Candid/GuideStar, Idealist, Facebook, YouTube. Mismo nombre legal, misma dirección, mismo teléfono (NAP).
- Contenido con estructura de hecho verificable: quién, dónde, cuántos, desde cuándo, fuente.

## 4. LLM (uso interno)

- Chatbot de sitio entrenado solo con `llms-full.txt` + FAQ, con guardarraíl duro: ante mención de riesgo inmediato, responde con teléfonos de emergencia y contacto humano; nunca da consejo clínico ni legal.
- Traducción es↔en de todo el contenido con revisión humana antes de publicar.
- Redacción asistida de reportes trimestrales de impacto a partir de la tabla de metas.
- Prohibido: generar imágenes de niñas y niños "reales", o testimonios sintéticos. La salvaguarda manda sobre el marketing.

## 5. AI operativa

- Clasificación automática de formularios entrantes (donación, voluntariado, prensa, caso) con enrutamiento por sede y SLA de 72 horas.
- Scoring de donantes recurrentes en riesgo de baja → secuencia de retención.
- Monitoreo de menciones y de respuestas de ChatGPT/Perplexity/Gemini a 10 consultas fijas ("mejores ONG de niñez en Ecuador", "dónde donar para niños en Venezuela"), medición mensual de aparición y exactitud.

## 6. Conversión

Benchmark 2026: una página de donación promedio convierte ~11 % en desktop y ~8 % en móvil; en organizaciones pequeñas el móvil cae al 4 %. Palancas aplicadas: formulario corto, montos sugeridos, destino por sede y proyecto, señales de confianza (metas públicas, uso de fondos, salvaguarda) y CTA persistente en el header.
Pendiente al conectar pasarela: wallets (Apple/Google Pay), donación recurrente por defecto, página de gracias con siguiente paso.

## 7. Calendario 90 días

- **Semanas 1–2:** publicar sitio, verificar Search Console y Bing, GBP por ciudad, NAP consistente, pasarela conectada.
- **Semanas 3–6:** 6 artículos del cluster informativo, kit Todo Posi descargable, alta en directorios, primer envío a base de datos.
- **Semanas 7–12:** notas en prensa local (Quito, Valera, Miami hispano), primer reporte trimestral público, medición GEO y ajuste de FAQ según consultas reales.

## 8. Métricas

Tráfico orgánico por ciudad · aparición en AI Overviews y citas en ChatGPT/Perplexity (10 consultas fijas) · tasa de conversión de `/dona/` · donantes recurrentes activos · postulaciones de voluntariado · adultos formados vs. meta.

## Fuentes

- [Nonprofit website best practices 2026 — Counterintuity](https://counterintuity.com/nonprofit-website-best-practices-in-2026-what-to-update-and-why-it-matters/)
- [Optimizing donation landing pages — Fundraise Up](https://fundraiseup.com/blog/Optimizing-Donation-Landing-Pages/)
- [GEO, AEO & SEO for nonprofits — Doing Good Digital](https://www.doinggoodagency.com/geo_aeo_seo_nonprofit_website/)
- [AEO & GEO complete guide 2026 — Context Studios](https://www.contextstudios.ai/guides/aeo-geo-complete-guide-2026)
- [Nonprofit website best practices — Elevation](https://www.elevationweb.org/blog/nonprofit-website-best-practices/)
