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
- `docs/estrategia-360.md` — arquitectura del sitio y plan SEO / AEO / GEO / LLM / AI.
- `docs/modelo-negocio.md` — marketplace, centro de acopio Miami, unit economics y ruta aduanera.
- `docs/motor-de-captacion.md` — motor voluntario → donante → embajador con benchmarks 2026.
- `docs/reconstruccion-y-proyeccion.md` — auditoría del sitio 2022, plan de migración sin perder SEO y proyección de resultados.

## Antes de publicar

1. Conectar la pasarela de pagos en `/dona/` (Stripe, Donorbox o PayPal Giving).
2. Conectar los formularios de contacto y voluntariado a CRM o endpoint.
3. Conectar la tienda a WooCommerce/Shopify/Stripe Checkout.
4. Sustituir el logo SVG provisional por el original y añadir fotografía real (rostros de menores protegidos por defecto).
5. Verificar el dominio en Google Search Console y Bing Webmaster Tools, y enviar `sitemap.xml`.

## Ver el sitio

**En local** (lo más rápido):

```bash
git clone https://github.com/focoworking/sosinfante.git
cd sosinfante && git checkout claude/reapertura-website-proyecto-social-tjyc91
node build.js && npx --yes serve site      # abre http://localhost:3000
```

**En GitHub Pages** (URL pública, gratis): en el repositorio, Settings → Pages →
Build and deployment → Source: **GitHub Actions**. Este paso solo puede darlo una
persona con permisos de administración: el token de Actions no puede crear el
sitio. Hasta entonces el workflow compila el sitio y avisa en el resumen del run,
sin marcar error. Una vez activado, cada push a `main` o a una rama `claude/**`
publica en `https://focoworking.github.io/sosinfante/`.

**En el servidor propio** (sosinfante.org): sube el contenido de `site/` por FTP o
rsync a la raíz pública. Es HTML estático: no necesita PHP, base de datos ni Node
en el servidor.

```bash
node build.js                       # rutas absolutas desde la raíz del dominio
BASE_PATH=/sosinfante node build.js # si se publica en una subcarpeta
```
