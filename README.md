# sosinfante.org — reapertura 2026

Sitio estático de SOS Infante: Miami (EE.UU.), Quito (Ecuador) y Valera (Venezuela).
Sin dependencias: contenido en `src/content.js`, generador en `build.js`, salida publicable en `site/`.

```bash
node build.js          # genera ./site
npx serve site         # o cualquier servidor estático
```

## Estructura

- `src/content.js` — única fuente de verdad: sedes, proyectos, cifras, FAQ, blog, tienda, legales, voluntariado.
- `build.js` — genera HTML + `sitemap.xml`, `robots.txt`, `feed.xml`, `llms.txt`, `llms-full.txt`, `site.webmanifest`.
- `src/assets/` — CSS, JS, logo, favicon, imagen OG.
- `docs/estrategia-360.md` — plan SEO / AEO / GEO / LLM / AI.

## Antes de publicar

1. Conectar la pasarela de pagos en `/dona/` (Stripe, Donorbox o PayPal Giving).
2. Conectar los formularios de contacto y voluntariado a CRM o endpoint.
3. Conectar la tienda a WooCommerce/Shopify/Stripe Checkout.
4. Sustituir el logo SVG provisional por el original y añadir fotografía real (rostros de menores protegidos por defecto).
5. Verificar el dominio en Google Search Console y Bing Webmaster Tools, y enviar `sitemap.xml`.

## Despliegue

`.github/workflows/deploy.yml` publica `site/` en GitHub Pages en cada push a la rama principal.
