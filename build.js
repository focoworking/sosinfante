#!/usr/bin/env node
/* Generador estático trilingüe, sin dependencias.  `node build.js` -> ./site
 *
 * Cada página se declara una vez y se emite en español, inglés y portugués,
 * con su propia URL, sus enlaces internos y sus etiquetas hreflang.
 */
const fs = require('fs');
const path = require('path');
const { IDIOMAS, ruta, alternativas } = require('./src/i18n/rutas.js');
const UI = require('./src/i18n/ui.js');
const PAGINAS = require('./src/i18n/paginas.js');

const OUT = path.join(__dirname, 'site');
const BASE = (process.env.BASE_PATH || '').replace(/\/+$/, '');
const DOMINIO = 'https://www.sosinfante.org';

fs.rmSync(OUT, { recursive: true, force: true });

const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const LOGO = fs
  .readFileSync(path.join(__dirname, 'src/assets/logo.svg'), 'utf8')
  .replace(/<\?xml[^>]*\?>\s*/, '')
  .replace('<svg ', '<svg class="logo-svg" ');

const paginas = []; // {url, idioma} de todo lo publicado, para sitemap y feeds

/* ---------- utilidades de salida ---------- */

// Prefija las rutas absolutas cuando el sitio se publica en una subcarpeta.
const rebase = (html) =>
  BASE
    ? html.replace(/(href|src)="\/(?!\/)/g, `$1="${BASE}/`).replace(/(content=")\/(?!\/)/g, `$1${BASE}/`)
    : html;

// Marca los bloques que aparecen al desplazar. Sin JS siguen visibles.
const animar = (html) =>
  html
    .replace(/<section class="band/g, '<section data-reveal class="band')
    .replace(/<div class="(grid-2|grid-3|grid-4|steps-grid|trust)"/g, '<div data-reveal data-reveal-stagger class="$1"')
    .replace(/<ol class="flow"/g, '<ol data-reveal data-reveal-stagger class="flow"');

function escribir(rel, cuerpo) {
  const archivo = path.join(OUT, rel);
  fs.mkdirSync(path.dirname(archivo), { recursive: true });
  if (rel.endsWith('.html')) {
    if (/\bundefined\b/.test(cuerpo)) {
      throw new Error(`La página ${rel} contiene «undefined»: revisa los nombres de campo del contenido`);
    }
    fs.writeFileSync(archivo, rebase(animar(cuerpo)));
  } else {
    fs.writeFileSync(archivo, cuerpo);
  }
}

// Convierte una ruta del sitio en la ruta de archivo correspondiente.
const archivoDe = (url) => url.replace(/^\//, '').replace(/\/$/, '') + (url === '/' ? 'index.html' : '/index.html');

/* ---------- plantilla común ---------- */

function plantilla({ L, C, T, P, url, clave, slug, title, description, body, hero = '', jsonld = [] }) {
  const canonical = DOMINIO + url;
  const alts = alternativas(clave, slug);
  const ld = jsonld.map((o) => `<script type="application/ld+json">${JSON.stringify(o)}</script>`).join('');
  const R = (c, s) => ruta(c, L, s);

  const nav = [
    ['fundacion', T.nav.fundacion],
    ['proyectos', T.nav.proyectos],
    ['sedes', T.nav.sedes],
    ['acopio', T.nav.acopio],
    ['tienda', T.nav.tienda],
    ['voluntariado', T.nav.voluntariado],
    ['campanas', T.nav.campanas]
  ];

  return `<!doctype html>
<html lang="${T.htmlLang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<link rel="canonical" href="${canonical}">
${alts.map((a) => `<link rel="alternate" hreflang="${a.idioma.hreflang}" href="${DOMINIO}${a.url}">`).join('\n')}
<link rel="alternate" hreflang="x-default" href="${DOMINIO}${alts[0].url}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="${C.site.name}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${canonical}">
<meta property="og:image" content="${DOMINIO}/assets/og.svg">
<meta property="og:locale" content="${T.ogLocale}">
<meta name="twitter:card" content="summary_large_image">
<meta name="theme-color" content="#1EB5C4">
<meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1">
<link rel="icon" href="/assets/favicon.svg" type="image/svg+xml">
<link rel="manifest" href="/site.webmanifest">
<link rel="alternate" type="application/rss+xml" title="${C.site.name}" href="${L === 'es' ? '/feed.xml' : `/${L}/feed.xml`}">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Google+Sans:ital,opsz,wght@0,17..18,400..700;1,17..18,400..700&family=Montserrat:wght@800&display=swap">
<link rel="stylesheet" href="/assets/styles.css">
${ld}
</head>
<body>
<a class="skip" href="#main">${T.saltar}</a>
<div class="topbar">${T.topbar} <a href="${R('voluntariado')}">${T.topbarEnlace}</a></div>
<header class="site-head">
  <div class="head-top">
    <a class="logo" href="${R('home')}" aria-label="${C.site.name}, ${T.inicio}">${LOGO}</a>
    <button class="burger" aria-expanded="false" aria-controls="nav" aria-label="${T.abrirMenu}"><span></span><span></span></button>
  </div>
  <nav id="nav" class="nav" aria-label="${T.menuPrincipal}">
    <ul>${nav.map(([c, t]) => `<li><a href="${R(c)}"${clave === c ? ' aria-current="page"' : ''}>${t}</a></li>`).join('')}</ul>
    <div class="head-cta">
      <div class="idiomas" role="group" aria-label="${T.cambiarIdioma}">
        ${alts
          .map((a) =>
            a.idioma.codigo === L
              ? `<span class="idioma actual" aria-current="true">${a.idioma.etiqueta}</span>`
              : `<a class="idioma" href="${a.url}" hreflang="${a.idioma.hreflang}" lang="${a.idioma.hreflang}">${a.idioma.etiqueta}</a>`
          )
          .join('')}
      </div>
      <a class="btn btn-primary" href="${R('dona')}">${T.donar}</a>
    </div>
  </nav>
</header>
${hero}
<main id="main">
${body}
</main>
<section class="foot-cta">
  <div class="inner">
    <h2>${esc(T.cierre.titulo)}</h2>
    <p>${esc(T.cierre.texto)}</p>
    <p class="cta-row"><a class="btn btn-primary btn-lg" href="${R('dona')}">${T.donar}</a> <a class="btn btn-ghost btn-lg" href="${R('voluntariado')}">${T.serVoluntario}</a> <a class="btn btn-ghost btn-lg" href="${R('acopio')}">${T.donarEnEspecie}</a></p>
  </div>
</section>
<footer class="site-foot">
  <div class="foot-grid">
    <div>
      <span class="foot-logo" aria-hidden="true">${LOGO}</span>
      <p>${esc(T.pie.tagline)}.<br>Miami · Quito · Valera</p>
      <p class="mini">${esc(C.identidad.lema)}</p>
    </div>
    <div>
      <h3>${T.pie.sedes}</h3>
      <ul>${C.sedes.map((s) => `<li><a href="${R('sede', s.slug)}">${s.bandera} ${esc(s.ciudad)}, ${esc(s.pais)}</a></li>`).join('')}</ul>
    </div>
    <div>
      <h3>${T.pie.fundacion}</h3>
      <ul>
        <li><a href="${R('fundacion')}">${T.pie.mision}</a></li>
        <li><a href="${R('departamentos')}">${T.pie.departamentos}</a></li>
        <li><a href="${R('transparencia')}">${T.pie.transparencia}</a></li>
        <li><a href="${R('aliados')}">${T.pie.aliados}</a></li>
        <li><a href="${R('prensa')}">${T.pie.prensa}</a></li>
        <li><a href="${R('blog')}">${T.pie.blog}</a></li>
        <li><a href="${R('faq')}">${T.pie.faq}</a></li>
        <li><a href="${R('contacto')}">${T.pie.contactoEnlace}</a></li>
      </ul>
    </div>
    <div>
      <h3>${T.pie.actua}</h3>
      <ul>
        <li><a href="${R('dona')}">${T.donar}</a></li>
        <li><a href="${R('voluntariado')}">${T.pie.voluntariado}</a></li>
        <li><a href="${R('acopio')}">${T.pie.especie}</a></li>
        <li><a href="${R('involucrate')}">${T.pie.otras}</a></li>
        <li><a href="${R('contacto')}#alianzas">${T.pie.empresas}</a></li>
        <li><a href="${R('transparencia')}">${T.pie.transparencia}</a></li>
      </ul>
    </div>
    <div>
      <h3>${T.pie.contacto}</h3>
      <ul>
        <li><a href="mailto:${C.site.email}">${C.site.email}</a></li>
        <li><a href="tel:${C.site.telefono.replace(/[^+0-9]/g, '')}">${C.site.telefono}</a></li>
        <li><a href="https://wa.me/${C.site.whatsapp}">WhatsApp</a></li>
        <li>${esc(C.site.direccionUS)}</li>
        ${C.site.social.map((u) => `<li><a rel="me noopener" href="${u}">${u.split('/')[2].replace('www.', '')}</a></li>`).join('')}
      </ul>
    </div>
  </div>
  <div class="foot-mark" aria-hidden="true">${LOGO}</div>
  <p class="legal">${C.legales
    .map((l, i) => `<a href="${R('legal', l.slug)}">${[T.pie.privacidad, T.pie.terminos, T.pie.devoluciones][i]}</a>`)
    .join(' · ')}</p>
  <p class="legal">© ${new Date().getFullYear()} ${esc(C.site.legalName)}. ${esc(T.pie.emergencias)}</p>
</footer>
<a class="wa" href="https://wa.me/${C.site.whatsapp}" aria-label="${T.escribenosWhatsapp}"><svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor" aria-hidden="true"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm0 1.98c2.12 0 4.1.83 5.6 2.33a7.85 7.85 0 0 1 2.32 5.6c0 4.37-3.55 7.93-7.92 7.93a7.9 7.9 0 0 1-4.03-1.1l-.29-.17-2.99.78.8-2.92-.19-.3a7.86 7.86 0 0 1-1.21-4.22c0-4.37 3.55-7.93 7.91-7.93zm-2.3 4.1c-.17 0-.45.07-.69.32-.24.25-.9.88-.9 2.14s.92 2.48 1.05 2.65c.13.17 1.8 2.75 4.37 3.75 2.13.84 2.57.67 3.03.63.46-.04 1.49-.61 1.7-1.2.21-.59.21-1.09.15-1.2-.06-.1-.23-.17-.48-.29-.25-.13-1.49-.73-1.72-.82-.23-.08-.4-.12-.56.13-.17.25-.65.82-.79.98-.15.17-.29.19-.54.07-.25-.13-1.06-.39-2.02-1.25-.75-.66-1.25-1.49-1.4-1.74-.15-.25-.02-.38.11-.5.11-.11.25-.29.37-.44.12-.15.16-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.56-1.36-.77-1.86-.2-.49-.4-.42-.56-.43h-.48z"/></svg></a>
<div class="sticky-cta">
  <a class="btn btn-primary" href="${R('dona')}">${T.donar}</a>
  <a class="btn btn-ghost" href="${R('voluntariado')}">${T.serVoluntario}</a>
</div>
<script src="/assets/main.js" defer></script>
</body>
</html>`;
}

/* ========================================================================
   Generación por idioma
   ======================================================================== */

function generarIdioma(L) {
  const C = require(`./src/i18n/${L}.js`);
  const T = UI[L];
  const P = PAGINAS[L];
  const R = (c, s) => ruta(c, L, s);

  const pagina = ({ clave, slug, title, description, body, hero, jsonld }) => {
    const url = R(clave, slug);
    escribir(archivoDe(url), plantilla({ L, C, T, P, url, clave, slug, title, description, body, hero, jsonld }));
    paginas.push({ url, idioma: L });
  };

  /* --- datos estructurados reutilizables --- */
  const orgLd = {
    '@context': 'https://schema.org',
    '@type': 'NGO',
    '@id': DOMINIO + '/#organization',
    name: C.site.name,
    legalName: C.site.legalName,
    url: DOMINIO,
    logo: DOMINIO + '/assets/logo.svg',
    foundingDate: C.site.founded,
    email: C.site.email,
    telephone: C.site.telefono,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '3800 Inverrary Blvd',
      addressLocality: 'Fort Lauderdale',
      addressRegion: 'FL',
      postalCode: '33319',
      addressCountry: 'US'
    },
    description: C.site.description,
    sameAs: C.site.social,
    areaServed: ['US', 'EC', 'VE'],
    knowsLanguage: ['es', 'en', 'pt'],
    location: C.sedes.map((s) => ({
      '@type': 'Place',
      name: `${C.site.name} ${s.ciudad}`,
      address: { '@type': 'PostalAddress', addressLocality: s.ciudad, addressRegion: s.region, addressCountry: s.pais },
      geo: { '@type': 'GeoCoordinates', latitude: s.lat, longitude: s.lng }
    }))
  };
  const migas = (items) => ({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it[0], item: DOMINIO + it[1] }))
  });

  const bloqueCifras = `<section class="band cifras"><h2>${T.etiquetas.problema}</h2>
  <div class="grid-3">${C.cifras
    .map((c) => `<figure class="cifra"><strong>${esc(c.dato)}</strong><figcaption>${esc(c.texto)} <cite>${esc(c.fuente)}</cite></figcaption></figure>`)
    .join('')}</div></section>`;

  const bloqueConfianza = `<section class="band"><h2>${T.etiquetas.confianza}</h2>
  <div class="trust">${C.confianza
    .map((c) => {
      const [clave, ancla] = c.href.split('#');
      return `<a href="${R(clave)}${ancla ? '#' + ancla : ''}"><h3>${esc(c.titulo)}</h3><p>${esc(c.texto)}</p></a>`;
    })
    .join('')}</div></section>`;

  const bloqueDonacion = `<section class="band cta-band"><h2>${esc(T.bandaDonacion.titulo)}</h2><p>${esc(T.bandaDonacion.texto)}</p>
  <p class="cta-row"><a class="btn btn-primary btn-lg" href="${R('dona')}">${T.cta.donar}</a> <a class="btn btn-ghost btn-lg" href="${R('voluntariado')}">${T.serVoluntario}</a></p></section>`;

  const bloqueBoletin = `<section class="band news"><div class="inner">
  <div><h2>${esc(T.boletin.titulo)}</h2><p>${esc(T.boletin.texto)}</p></div>
  <div><form action="#" method="post" aria-label="${esc(T.boletin.titulo)}">
    <label class="skip" for="news-email">${T.boletin.campo}</label>
    <input id="news-email" type="email" name="email" placeholder="${T.boletin.marcador}" autocomplete="email" required>
    <button class="btn btn-primary" type="submit">${T.boletin.boton}</button>
  </form><p class="mini">${esc(T.boletin.nota)}</p></div></div></section>`;

  /* --- portada --- */
  pagina({
    clave: 'home',
    title: P.home.title,
    description: C.site.description,
    jsonld: [
      orgLd,
      { '@context': 'https://schema.org', '@type': 'WebSite', '@id': DOMINIO + '/#website', url: DOMINIO, name: C.site.name, inLanguage: T.htmlLang, publisher: { '@id': DOMINIO + '/#organization' } },
      { '@context': 'https://schema.org', '@type': 'ItemList', name: P.proyectos.title, itemListElement: C.proyectos.map((p, i) => ({ '@type': 'ListItem', position: i + 1, url: DOMINIO + R('proyecto', p.slug), name: p.nombre })) }
    ],
    hero: `<section class="hero hero-big">
      <p class="eyebrow">${P.home.eyebrow}</p>
      <h1>${esc(P.home.h1)}</h1>
      <p class="lead">${esc(C.site.description)}</p>
      <p class="cta-row"><a class="btn btn-primary btn-lg" href="${R('dona')}">${T.cta.donar}</a> <a class="btn btn-ghost btn-lg" href="${R('voluntariado')}">${T.cta.voluntario}</a></p>
      <div class="hero-stats">${C.impacto
        .map((i) => {
          const n = Number(String(i.n).replace(/\./g, ''));
          return `<div><strong${Number.isFinite(n) ? ` data-count="${n}"` : ''}>${esc(i.n)}</strong><span>${esc(i.l)}</span></div>`;
        })
        .join('')}</div>
    </section>`,
    body: `
<section class="band answer"><h2>${T.etiquetas.queEs}</h2><p class="answer-text">${esc(C.faqs[0].a)}</p></section>
${bloqueConfianza}
<section class="band"><h2>${esc(P.home.sedesTitulo)}</h2><div class="grid-3">
${C.sedes.map((s) => `<article class="card"><p class="tag">${s.bandera} ${esc(s.pais)}</p><h3><a href="${R('sede', s.slug)}">${esc(s.ciudad)}</a></h3><p class="mini">${esc(s.apertura)}</p><p>${esc(s.resumen)}</p></article>`).join('')}
</div></section>
${bloqueCifras}
<section class="band"><h2>${T.etiquetas.programas}</h2><div class="grid-2">
${C.proyectos.map((p) => `<article class="card"><p class="tag">${esc(p.tipo)}</p><h3><a href="${R('proyecto', p.slug)}">${esc(p.nombre)}</a></h3><p class="claim">${esc(p.claim)}</p><p>${esc(p.resumen)}</p></article>`).join('')}
</div></section>
<section class="band"><h2>${esc(P.home.acopioTitulo)}</h2><p>${esc(P.home.acopioTexto)}</p>
<div class="steps-grid">${C.acopio.flujo.slice(0, 4).map((f) => `<div class="step"><p class="num">${f[0]}</p><h3>${esc(f[1])}</h3><p>${esc(f[2])}</p></div>`).join('')}</div>
<p class="cta-row" style="margin-top:1.4rem"><a class="btn btn-primary" href="${R('acopio')}">${P.home.acopioCta}</a> <a class="btn btn-ghost" href="${R('tienda')}#impacto">${P.home.catalogoCta}</a></p></section>
<section class="band"><h2>${esc(P.home.campanasTitulo)}</h2><div class="grid-3">
${C.campanas.map((c) => `<article class="card"><p class="tag">${esc(c.mes)}</p><h3>${esc(c.nombre)}</h3><p>${esc(c.gancho)}</p><p class="mini">${T.etiquetas.meta}: ${esc(c.meta)}</p></article>`).join('')}
</div><p class="cta-row" style="margin-top:1.4rem"><a class="btn btn-ghost" href="${R('campanas')}">${T.etiquetas.verCalendario}</a></p></section>
<section class="band"><h2>${esc(P.home.voluntariadoTitulo)}</h2><p>${esc(P.home.voluntariadoTexto)}</p>
<div class="steps-grid">${C.embudoVoluntariado.map((e) => `<div class="step"><p class="num">${e.paso}</p><h3>${esc(e.titulo)}</h3><p>${esc(e.texto)}</p></div>`).join('')}</div>
<p class="cta-row" style="margin-top:1.4rem"><a class="btn btn-primary btn-lg" href="${R('voluntariado')}">${T.etiquetas.postular}</a></p></section>
${bloqueDonacion}${bloqueBoletin}`
  });

  /* --- la fundación --- */
  pagina({
    clave: 'fundacion',
    title: P.fundacion.title,
    description: P.fundacion.description,
    jsonld: [orgLd, migas([[T.inicio, R('home')], [P.fundacion.eyebrow, R('fundacion')]])],
    hero: `<section class="hero hero-big"><p class="eyebrow">${P.fundacion.eyebrow}</p><h1>${esc(C.identidad.lema)}</h1><p class="lead">${esc(C.identidad.promesa)}</p><p class="cta-row"><a class="btn btn-primary btn-lg" href="${R('departamentos')}">${P.fundacion.verDepartamentos}</a> <a class="btn btn-ghost btn-lg" href="${R('transparencia')}">${T.pie.transparencia}</a></p></section>`,
    body: `
<section class="band answer"><h2>${P.fundacion.mision}</h2><p class="answer-text">${esc(P.fundacion.misionTexto)}</p></section>
<section class="band answer"><h2>${P.fundacion.vision}</h2><p class="answer-text">${esc(C.identidad.vision)}</p><p>${esc(C.identidad.creencia)}</p></section>
<section class="band"><h2>${P.fundacion.valores}</h2><div class="grid-3">${C.identidad.valores.map((v) => `<article class="card"><p class="tag">${esc(v.nombre)}</p><h3>${esc(v.frase)}</h3><p>${esc(v.texto)}</p></article>`).join('')}</div></section>
<section class="band"><h2>${P.fundacion.gobierno}</h2><div class="wrap"><table class="tbl"><caption>${P.fundacion.gobiernoCaption}</caption>
<thead><tr><th scope="col">${P.fundacion.organo}</th><th scope="col">${P.fundacion.responsabilidad}</th></tr></thead>
<tbody>${C.gobernanza.map((g) => `<tr><td><strong>${esc(g[0])}</strong></td><td>${esc(g[1])}</td></tr>`).join('')}</tbody></table></div></section>
<section class="band"><h2>${P.fundacion.sostenibilidad}</h2><p>${esc(P.fundacion.sostenibilidadTexto)}</p>
<div class="wrap"><table class="tbl"><caption>${P.fundacion.ingresosCaption}</caption>
<thead><tr><th scope="col">${P.fundacion.linea}</th><th scope="col">${P.fundacion.margen}</th><th scope="col">${P.fundacion.rol}</th><th scope="col">${P.fundacion.metaAnual}</th></tr></thead>
<tbody>${C.lineasIngreso.map((l) => `<tr><td><strong>${esc(l.linea)}</strong></td><td>${esc(l.margen)}</td><td>${esc(l.rol)}</td><td>${esc(l.meta)}</td></tr>`).join('')}</tbody></table></div>
<p class="mini">${esc(P.fundacion.ingresosNota)}</p></section>
<section class="band"><h2>${P.fundacion.comoTrabajamos}</h2><ol class="steps">${P.fundacion.pasos.map((p) => `<li><strong>${esc(p[0])}</strong> ${esc(p[1])}</li>`).join('')}</ol></section>
${bloqueDonacion}${bloqueBoletin}`
  });

  /* --- departamentos --- */
  pagina({
    clave: 'departamentos',
    title: P.departamentos.title,
    description: P.departamentos.description,
    jsonld: [
      migas([[T.inicio, R('home')], [P.fundacion.eyebrow, R('fundacion')], [P.departamentos.h1, R('departamentos')]]),
      { '@context': 'https://schema.org', '@type': 'ItemList', name: P.departamentos.h1, itemListElement: C.departamentos.map((d, i) => ({ '@type': 'ListItem', position: i + 1, name: d.nombre, description: d.mision })) }
    ],
    hero: `<section class="hero hero-sm"><p class="eyebrow">${P.departamentos.eyebrow}</p><h1>${esc(P.departamentos.h1)}</h1><p class="lead">${esc(P.departamentos.lead)}</p><p class="cta-row"><a class="btn btn-primary" href="${R('voluntariado')}">${T.etiquetas.postular}</a></p></section>`,
    body: `<section class="band"><div class="grid-2">
${C.departamentos.map((d) => `<article class="card" id="${d.slug}"><p class="tag">${esc(d.nombre)}</p><h3>${esc(d.mision)}</h3>
<p class="mini"><strong>${P.departamentos.entrega}</strong></p><ul class="mini-list">${d.entregables.map((e) => `<li>${esc(e)}</li>`).join('')}</ul>
<p class="mini"><strong>${P.departamentos.perfiles}</strong> ${d.roles.map(esc).join(' · ')}</p></article>`).join('')}
</div></section>${bloqueBoletin}`
  });

  /* --- proyectos --- */
  pagina({
    clave: 'proyectos',
    title: P.proyectos.title,
    description: `${C.proyectos.map((p) => p.nombre).join(', ')}.`,
    jsonld: [migas([[T.inicio, R('home')], [P.proyectos.h1, R('proyectos')]])],
    hero: `<section class="hero hero-sm"><p class="eyebrow">${P.proyectos.eyebrow}</p><h1>${esc(P.proyectos.h1)}</h1><p class="lead">${esc(P.proyectos.lead)}</p></section>`,
    body: `<section class="band"><div class="grid-2">
${C.proyectos.map((p) => `<article class="card"><p class="tag">${esc(p.tipo)}</p><h3><a href="${R('proyecto', p.slug)}">${esc(p.nombre)}</a></h3><p class="claim">${esc(p.claim)}</p><p>${esc(p.resumen)}</p><ul class="mini-list">${p.metricas.map((m) => `<li>${esc(m)}</li>`).join('')}</ul></article>`).join('')}
</div></section>${bloqueDonacion}`
  });

  C.proyectos.forEach((p) => {
    const sedesP = C.sedes.filter((s) => p.sedes.includes(s.slug));
    pagina({
      clave: 'proyecto',
      slug: p.slug,
      title: `${p.nombre} · ${C.site.name}`,
      description: p.resumen,
      jsonld: [
        migas([[T.inicio, R('home')], [P.proyectos.h1, R('proyectos')], [p.nombre, R('proyecto', p.slug)]]),
        { '@context': 'https://schema.org', '@type': 'Project', name: p.nombre, description: p.resumen, url: DOMINIO + R('proyecto', p.slug), parentOrganization: { '@id': DOMINIO + '/#organization' }, areaServed: sedesP.map((s) => `${s.ciudad}, ${s.pais}`) }
      ],
      hero: `<section class="hero hero-sm"><p class="eyebrow">${esc(p.tipo)}</p><h1>${esc(p.nombre)}</h1><p class="lead">${esc(p.claim)}</p></section>`,
      body: `
<section class="band answer"><h2>${P.proyectos.enQueConsiste}</h2><p class="answer-text">${esc(p.resumen)}</p><p>${esc(p.detalle)}</p></section>
<section class="band"><h2>${P.proyectos.formato}</h2><ul class="mini-list big">${p.metricas.map((m) => `<li>${esc(m)}</li>`).join('')}</ul>
<p><strong>${P.proyectos.indicador}</strong> ${esc(p.kpi)}.</p></section>
<section class="band"><h2>${P.proyectos.dondeOpera}</h2><div class="grid-3">${sedesP.map((s) => `<article class="card"><p class="tag">${s.bandera} ${esc(s.pais)}</p><h3><a href="${R('sede', s.slug)}">${esc(s.ciudad)}</a></h3><p>${esc(s.rol)}</p></article>`).join('')}</div></section>
${bloqueDonacion}`
    });
  });

  /* --- sedes --- */
  pagina({
    clave: 'sedes',
    title: P.sedes.title,
    description: P.sedes.description,
    jsonld: [orgLd, migas([[T.inicio, R('home')], [P.sedes.h1, R('sedes')]])],
    hero: `<section class="hero hero-sm"><p class="eyebrow">${P.sedes.eyebrow}</p><h1>${esc(P.sedes.h1)}</h1><p class="lead">${esc(P.sedes.lead)}</p></section>`,
    body: `<section class="band"><div class="grid-3">
${C.sedes.map((s) => `<article class="card"><p class="tag">${s.bandera} ${esc(s.pais)}</p><h3><a href="${R('sede', s.slug)}">${esc(s.ciudad)}</a></h3><p class="mini">${esc(s.apertura)}</p><p>${esc(s.resumen)}</p><p><a href="mailto:${s.contacto}">${s.contacto}</a></p></article>`).join('')}
</div></section>${bloqueDonacion}`
  });

  C.sedes.forEach((s) => {
    const proys = C.proyectos.filter((p) => p.sedes.includes(s.slug));
    pagina({
      clave: 'sede',
      slug: s.slug,
      title: `${C.site.name} ${s.ciudad}, ${s.pais} · ${s.apertura}`,
      description: s.resumen,
      jsonld: [
        migas([[T.inicio, R('home')], [P.sedes.h1, R('sedes')], [s.ciudad, R('sede', s.slug)]]),
        { '@context': 'https://schema.org', '@type': 'LocalBusiness', additionalType: 'https://schema.org/NGO', name: `${C.site.name} ${s.ciudad}`, url: DOMINIO + R('sede', s.slug), parentOrganization: { '@id': DOMINIO + '/#organization' }, email: s.contacto, address: { '@type': 'PostalAddress', addressLocality: s.ciudad, addressRegion: s.region, addressCountry: s.pais }, geo: { '@type': 'GeoCoordinates', latitude: s.lat, longitude: s.lng }, areaServed: `${s.ciudad}, ${s.pais}` }
      ],
      hero: `<section class="hero hero-sm"><p class="eyebrow">${s.bandera} ${esc(s.pais)} · ${esc(s.apertura)}</p><h1>${esc(s.ciudad)}</h1><p class="lead">${esc(s.rol)}</p></section>`,
      body: `
<section class="band answer"><h2>${esc(P.sedes.queHace(s.ciudad))}</h2><p class="answer-text">${esc(s.resumen)}</p></section>
<section class="band"><h2>${esc(P.sedes.programasEn(s.ciudad))}</h2><div class="grid-2">${proys.map((p) => `<article class="card"><p class="tag">${esc(p.tipo)}</p><h3><a href="${R('proyecto', p.slug)}">${esc(p.nombre)}</a></h3><p>${esc(p.resumen)}</p></article>`).join('')}</div></section>
<section class="band"><h2>${esc(P.sedes.contactoEn(s.ciudad))}</h2><p><a class="btn btn-primary" href="mailto:${s.contacto}">${s.contacto}</a> <a class="btn btn-ghost" href="https://wa.me/${C.site.whatsapp}">WhatsApp</a></p><p class="mini">${P.sedes.idiomas} ${esc(s.idioma)}.</p></section>
${bloqueDonacion}`
    });
  });

  /* --- centro de acopio --- */
  pagina({
    clave: 'acopio',
    title: P.acopio.title,
    description: P.acopio.description,
    jsonld: [
      migas([[T.inicio, R('home')], [P.acopio.h1, R('acopio')]]),
      { '@context': 'https://schema.org', '@type': 'LocalBusiness', additionalType: 'https://schema.org/NGO', name: `${C.site.name} ${P.acopio.h1}`, url: DOMINIO + R('acopio'), parentOrganization: { '@id': DOMINIO + '/#organization' }, email: C.site.email, telephone: C.site.telefono, address: { '@type': 'PostalAddress', streetAddress: '3800 Inverrary Blvd', addressLocality: 'Fort Lauderdale', addressRegion: 'FL', postalCode: '33319', addressCountry: 'US' }, openingHours: 'Mo-Fr 08:00-17:00' }
    ],
    hero: `<section class="hero hero-big"><p class="eyebrow">${P.acopio.eyebrow}</p><h1>${esc(P.acopio.h1)}</h1><p class="lead">${esc(C.acopio.promesa)}</p><p class="cta-row"><a class="btn btn-primary btn-lg" href="#entregar">${P.acopio.comoEntregar}</a> <a class="btn btn-ghost btn-lg" href="${R('tienda')}#impacto">${P.home.catalogoCta}</a></p></section>`,
    body: `
<section class="band answer"><h2>${esc(P.acopio.queEs)}</h2><p class="answer-text">${esc(P.acopio.queEsTexto)}</p></section>
<section class="band"><h2>${P.acopio.queRecibimos}</h2><div class="grid-2">
<div><h3>${P.acopio.siRecibimos}</h3><ul class="mini-list big">${C.acopio.aceptamos.map((a) => `<li>${esc(a)}</li>`).join('')}</ul></div>
<div><h3>${P.acopio.noRecibimos}</h3><ul class="mini-list big">${C.acopio.noAceptamos.map((a) => `<li>${esc(a)}</li>`).join('')}</ul></div>
</div></section>
<section class="band"><h2>${esc(P.acopio.deTuCaja)}</h2>
<div class="steps-grid">${C.acopio.flujo.map((f) => `<div class="step"><p class="num">${f[0]}</p><h3>${esc(f[1])}</h3><p>${esc(f[2])}</p></div>`).join('')}</div>
<p class="mini">${esc(C.acopio.nota)}</p></section>
<section class="band" id="entregar"><h2>${esc(P.acopio.comoEntregarTitulo)}</h2>
<ul class="mini-list big">${P.acopio.entregas.map((e) => `<li><strong>${esc(e[0])}</strong> ${esc(e[1](C.acopio.direccion, C.acopio.horario))}</li>`).join('')}</ul>
<p class="cta-row"><a class="btn btn-primary btn-lg" href="https://wa.me/${C.site.whatsapp}">${P.acopio.agendar}</a> <a class="btn btn-ghost btn-lg" href="${R('contacto')}#alianzas">${P.acopio.colecta}</a></p></section>
<section class="band answer"><h2>${P.acopio.trazabilidad}</h2><p class="answer-text">${esc(P.acopio.trazabilidadTexto)}</p></section>
${bloqueDonacion}${bloqueBoletin}`
  });

  /* --- tienda --- */
  pagina({
    clave: 'tienda',
    title: P.tienda.title,
    description: P.tienda.description,
    jsonld: [
      migas([[T.inicio, R('home')], [P.tienda.eyebrow, R('tienda')]]),
      {
        '@context': 'https://schema.org',
        '@type': 'OfferCatalog',
        name: P.tienda.title,
        url: DOMINIO + R('tienda'),
        provider: { '@id': DOMINIO + '/#organization' },
        itemListElement: C.catalogoImpacto.concat(C.tienda.productos).map((p, i) => ({
          '@type': 'Offer',
          position: i + 1,
          itemOffered: { '@type': 'Product', name: p.nombre, category: p.categoria || P.tienda.catalogo },
          price: (p.oferta || p.precio).toFixed(2),
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock'
        }))
      }
    ],
    hero: `<section class="hero hero-big"><p class="eyebrow">${P.tienda.eyebrow}</p><h1>${esc(P.tienda.h1)}</h1><p class="lead">${esc(P.tienda.lead)}</p><p class="cta-row"><a class="btn btn-primary btn-lg" href="#impacto">${P.tienda.catalogo}</a> <a class="btn btn-ghost btn-lg" href="#productos">${P.tienda.productos}</a></p></section>`,
    body: `
<section class="band" id="impacto"><h2>${P.tienda.catalogo}</h2><p>${esc(P.tienda.catalogoTexto)}</p>
<div class="grid-3">${C.catalogoImpacto.map((c) => `<article class="card"><p class="tag">${esc(c.entrega)}</p><h3>${esc(c.nombre)}</h3><p class="price">$${c.precio.toFixed(2)}</p><p>${esc(c.detalle)}</p><p><a class="btn btn-primary" href="${R('dona')}?item=${encodeURIComponent(c.nombre)}">${P.tienda.regalar}</a></p></article>`).join('')}</div></section>
<section class="band" id="productos"><h2>${P.tienda.categorias}</h2><div class="grid-4">
${C.tienda.categorias.map((c) => `<article class="card"><h3>${esc(c.nombre)}</h3><p class="mini">${c.items} ${P.tienda.unidades}</p></article>`).join('')}
</div></section>
<section class="band"><h2>${P.tienda.productos}</h2><div class="grid-4">
${C.tienda.productos.map((p) => `<article class="prod"><div class="ph" aria-hidden="true">SOS</div><div class="body"><p class="tag">${esc(p.categoria)}</p><h3>${esc(p.nombre)}</h3><p class="price">${p.oferta ? `<s>$${p.precio.toFixed(2)}</s> $${p.oferta.toFixed(2)}` : `$${p.precio.toFixed(2)}`}</p><p><a class="btn btn-primary" href="${R('contacto')}?producto=${encodeURIComponent(p.nombre)}">${P.tienda.pedir}</a></p></div></article>`).join('')}
</div></section>
<section class="band answer"><h2>${P.tienda.envios}</h2><p class="answer-text">${esc(P.tienda.enviosTexto)}</p><p class="mini">${esc(P.tienda.enviosNota)}</p></section>
${bloqueDonacion}`
  });

  /* --- voluntariado --- */
  const faqsVol = C.faqs.slice(-4);
  pagina({
    clave: 'voluntariado',
    title: P.voluntariado.title,
    description: P.voluntariado.description,
    jsonld: [
      migas([[T.inicio, R('home')], [P.voluntariado.eyebrow, R('voluntariado')]]),
      { '@context': 'https://schema.org', '@type': 'JobPosting', title: P.voluntariado.eyebrow, description: P.voluntariado.description, employmentType: 'VOLUNTEER', hiringOrganization: { '@id': DOMINIO + '/#organization' }, jobLocation: C.sedes.map((s) => ({ '@type': 'Place', address: { '@type': 'PostalAddress', addressLocality: s.ciudad, addressCountry: s.pais } })), jobLocationType: 'TELECOMMUTE', datePosted: '2026-09-06', directApply: true },
      { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqsVol.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) }
    ],
    hero: `<section class="hero hero-big"><p class="eyebrow">${P.voluntariado.eyebrow}</p><h1>${esc(P.voluntariado.h1)}</h1><p class="lead">${esc(P.voluntariado.lead)}</p><p class="cta-row"><a class="btn btn-primary btn-lg" href="#postular">${T.etiquetas.postular}</a> <a class="btn btn-ghost btn-lg" href="#areas">${P.voluntariado.verAreas}</a></p></section>`,
    body: `
<section class="band"><h2>${P.voluntariado.comoEs}</h2>
<div class="steps-grid">${C.embudoVoluntariado.map((e) => `<div class="step"><p class="num">${e.paso}</p><h3>${esc(e.titulo)}</h3><p>${esc(e.texto)}</p></div>`).join('')}</div>
<p class="mini">${esc(P.voluntariado.entrevistaNota)}</p></section>
<section class="band" id="areas"><h2>${P.voluntariado.areas}</h2><p>${esc(C.voluntariado.intro)}</p>
<div class="wrap"><table class="tbl"><caption>${P.voluntariado.areasCaption}</caption>
<thead><tr><th scope="col">${P.voluntariado.area}</th><th scope="col">${P.voluntariado.dedicacion}</th><th scope="col">${P.voluntariado.perfil}</th></tr></thead>
<tbody>${C.voluntariado.esquema.map((e) => `<tr><td>${esc(e.area)}</td><td>${esc(e.dedicacion)}</td><td>${esc(e.nota)}</td></tr>`).join('')}</tbody></table></div></section>
<section class="band answer"><h2>${P.voluntariado.requisitos}</h2><ul class="mini-list big">${C.voluntariado.requisitos.map((r) => `<li>${esc(r)}</li>`).join('')}</ul><p>${esc(C.voluntariado.aporte)}</p></section>
<section class="band" id="postular"><h2>${P.voluntariado.postula}</h2>
<form class="donate" action="#" method="post" aria-label="${esc(P.voluntariado.postula)}">
  <label for="vnombre">${P.voluntariado.form.nombre}</label><input id="vnombre" name="nombre" required autocomplete="name">
  <label for="vmail">${P.voluntariado.form.correo}</label><input id="vmail" type="email" name="email" required autocomplete="email">
  <label for="vtel">${P.voluntariado.form.telefono}</label><input id="vtel" name="telefono" autocomplete="tel">
  <label for="vciudad">${P.voluntariado.form.donde}</label><select id="vciudad" name="ciudad">${C.sedes.map((s) => `<option>${esc(s.ciudad)}, ${esc(s.pais)}</option>`).join('')}<option>${P.voluntariado.form.otraCiudad}</option></select>
  <label for="varea">${P.voluntariado.form.areaPostula}</label><select id="varea" name="area">${C.voluntariado.esquema.map((e) => `<option>${esc(e.area)}</option>`).join('')}</select>
  <label for="vhoras">${P.voluntariado.form.horas}</label><input id="vhoras" name="horas" type="number" min="1" inputmode="numeric">
  <label for="vexp">${P.voluntariado.form.experiencia}</label><textarea id="vexp" name="experiencia" rows="4"></textarea>
  <button class="btn btn-primary btn-lg" type="submit">${P.voluntariado.form.enviar}</button>
  <p class="mini">${esc(P.voluntariado.form.nota)}</p>
</form></section>
<section class="band"><h2>${P.voluntariado.preguntas}</h2><div class="faq">
${faqsVol.map((f) => `<details><summary><h2>${esc(f.q)}</h2></summary><p>${esc(f.a)}</p></details>`).join('')}
</div></section>${bloqueBoletin}`
  });

  /* --- campañas --- */
  pagina({
    clave: 'campanas',
    title: P.campanas.title,
    description: P.campanas.description,
    jsonld: [
      migas([[T.inicio, R('home')], [P.campanas.h1, R('campanas')]]),
      { '@context': 'https://schema.org', '@type': 'ItemList', name: P.campanas.h1, itemListElement: C.campanas.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.nombre, description: c.gancho })) }
    ],
    hero: `<section class="hero hero-big"><p class="eyebrow">${P.campanas.eyebrow}</p><h1>${esc(P.campanas.h1)}</h1><p class="lead">${esc(P.campanas.lead)}</p><p class="cta-row"><a class="btn btn-primary btn-lg" href="${R('voluntariado')}">${P.campanas.sumarme}</a></p></section>`,
    body: `<section class="band"><div class="wrap"><table class="tbl"><caption>${P.campanas.caption}</caption>
<thead><tr><th scope="col">${P.campanas.mes}</th><th scope="col">${P.campanas.campana}</th><th scope="col">${P.campanas.gancho}</th><th scope="col">${P.campanas.activo}</th><th scope="col">${T.etiquetas.meta}</th></tr></thead>
<tbody>${C.campanas.map((c) => `<tr><td>${esc(c.mes)}</td><td><strong>${esc(c.nombre)}</strong></td><td>${esc(c.gancho)}</td><td>${esc(c.activo)}</td><td>${esc(c.meta)}</td></tr>`).join('')}</tbody></table></div></section>
<section class="band"><h2>${P.campanas.comoFunciona}</h2><div class="steps-grid">
${P.campanas.fases.map((f, i) => `<div class="step"><p class="num">0${i + 1}</p><h3>${esc(f[0])}</h3><p>${esc(f[1])}</p></div>`).join('')}
</div></section>${bloqueDonacion}${bloqueBoletin}`
  });

  /* --- donar --- */
  pagina({
    clave: 'dona',
    title: P.dona.title,
    description: P.dona.description,
    jsonld: [
      migas([[T.inicio, R('home')], [P.dona.eyebrow, R('dona')]]),
      { '@context': 'https://schema.org', '@type': 'DonateAction', name: P.dona.title, recipient: { '@id': DOMINIO + '/#organization' }, target: DOMINIO + R('dona') }
    ],
    hero: `<section class="hero hero-sm"><p class="eyebrow">${P.dona.eyebrow}</p><h1>${esc(P.dona.h1)}</h1><p class="lead">${esc(P.dona.lead)}</p></section>`,
    body: `
<section class="band"><div class="grid-2">
${C.formasDeApoyo.map((f) => {
      const [clave, ancla] = f.href.split('#');
      return `<article class="card"><p class="tag">${esc(f.monto)}</p><h3>${esc(f.titulo)}</h3><p>${esc(f.texto)}</p><p><a class="btn btn-primary" href="${R(clave)}${ancla ? '#' + ancla : ''}">${esc(f.cta)}</a></p></article>`;
    }).join('')}
</div></section>
<section class="band" id="mensual"><h2>${P.dona.mensual}</h2>
<form class="donate" action="#" method="post" aria-label="${esc(P.dona.mensual)}">
  <fieldset><legend>${P.dona.montoMensual}</legend>
    <label><input type="radio" name="monto" value="10" checked> 10</label>
    <label><input type="radio" name="monto" value="25"> 25</label>
    <label><input type="radio" name="monto" value="50"> 50</label>
    <label><input type="radio" name="monto" value="100"> 100</label>
    <label class="otro">${P.dona.otro} <input type="number" name="otro" min="1" step="1" inputmode="numeric" aria-label="${P.dona.otro}"></label>
  </fieldset>
  <fieldset><legend>${P.dona.destino}</legend>
    <label for="sede">${P.dona.sede}</label>
    <select id="sede" name="sede">${C.sedes.map((s) => `<option value="${s.slug}">${esc(s.ciudad)}, ${esc(s.pais)}</option>`).join('')}<option>${P.dona.dondeMasUrge}</option></select>
    <label for="proyecto">${P.dona.proyecto}</label>
    <select id="proyecto" name="proyecto">${C.proyectos.map((p) => `<option value="${p.slug}">${esc(p.nombre)}</option>`).join('')}<option>${P.dona.fondoGeneral}</option></select>
  </fieldset>
  <label for="email">${P.dona.correo}</label>
  <input id="email" type="email" name="email" autocomplete="email" required>
  <button class="btn btn-primary btn-lg" type="submit">${P.dona.continuar}</button>
  <p class="mini">${esc(P.dona.notaPasarela)}</p>
</form></section>
<section class="band" id="unica"><h2>${P.dona.unica}</h2><ul class="mini-list big">
${P.dona.opciones.map((o) => `<li><strong>${esc(o[0])}</strong> ${esc(o[1])}</li>`).join('')}
</ul></section>
<section class="band answer"><h2>${P.dona.deducible}</h2><p class="answer-text">${esc(C.faqs[3].a)}</p></section>
<section class="band"><h2>${P.dona.porQueConfiar}</h2><div class="trust">${C.confianza.map((c) => {
      const [clave, ancla] = c.href.split('#');
      return `<a href="${R(clave)}${ancla ? '#' + ancla : ''}"><h3>${esc(c.titulo)}</h3><p>${esc(c.texto)}</p></a>`;
    }).join('')}</div></section>
${bloqueBoletin}`
  });

  /* --- involúcrate --- */
  pagina({
    clave: 'involucrate',
    title: P.involucrate.title,
    description: P.involucrate.description,
    jsonld: [migas([[T.inicio, R('home')], [P.involucrate.eyebrow, R('involucrate')]])],
    hero: `<section class="hero hero-sm"><p class="eyebrow">${P.involucrate.eyebrow}</p><h1>${esc(P.involucrate.h1)}</h1><p class="lead">${esc(P.involucrate.lead)}</p><p class="cta-row"><a class="btn btn-primary btn-lg" href="${R('voluntariado')}">${T.etiquetas.postular}</a></p></section>`,
    body: `<section class="band"><h2>${P.involucrate.otras}</h2><div class="grid-3">
${P.involucrate.tarjetas.map((t, i) => `<article class="card"><h3>${esc(t[0])}</h3><p>${esc(t[1])}</p><p><a class="btn btn-ghost" href="${[R('contacto') + '#alianzas', R('contacto'), R('proyecto', 'todo-posi')][i]}">${esc(t[2])}</a></p></article>`).join('')}
</div></section>${bloqueDonacion}${bloqueBoletin}`
  });

  /* --- transparencia --- */
  pagina({
    clave: 'transparencia',
    title: P.transparencia.title,
    description: P.transparencia.description,
    jsonld: [migas([[T.inicio, R('home')], [P.transparencia.eyebrow, R('transparencia')]])],
    hero: `<section class="hero hero-sm"><p class="eyebrow">${P.transparencia.eyebrow}</p><h1>${esc(P.transparencia.h1)}</h1><p class="lead">${esc(P.transparencia.lead)}</p></section>`,
    body: `
<section class="band"><h2>${P.transparencia.metas}</h2><div class="wrap"><table class="tbl"><caption>${P.transparencia.metasCaption}</caption>
<thead><tr><th scope="col">${P.transparencia.proyecto}</th><th scope="col">${P.transparencia.indicador}</th><th scope="col">${P.transparencia.meta}</th><th scope="col">${P.transparencia.sedesCol}</th></tr></thead>
<tbody>${C.proyectos.map((p, i) => `<tr><td>${esc(p.nombre)}</td><td>${esc(p.kpi)}</td><td>${['3.000', '1.200', '25.000', '400', '120'][i]}</td><td>${p.sedes.map((s) => esc(C.sedes.find((x) => x.slug === s).ciudad)).join(' · ')}</td></tr>`).join('')}</tbody></table></div>
<p class="mini">${esc(P.transparencia.metasNota)}</p></section>
<section class="band"><h2>${P.transparencia.fondos}</h2><ul class="mini-list big">${P.transparencia.fondosLista.map((f) => `<li><strong>${f[0]}</strong> ${esc(f[1])}</li>`).join('')}</ul></section>
<section class="band" id="salvaguarda"><h2>${P.transparencia.salvaguarda}</h2><ul class="mini-list big">${P.transparencia.salvaguardaLista.map((s) => `<li>${esc(s)}</li>`).join('')}</ul>
<p><a href="mailto:${C.site.email}">${C.site.email}</a></p></section>${bloqueBoletin}`
  });

  /* --- aliados --- */
  pagina({
    clave: 'aliados',
    title: P.aliados.title,
    description: P.aliados.description,
    jsonld: [migas([[T.inicio, R('home')], [P.aliados.eyebrow, R('aliados')]])],
    hero: `<section class="hero hero-sm"><p class="eyebrow">${P.aliados.eyebrow}</p><h1>${esc(P.aliados.h1)}</h1><p class="lead">${esc(P.aliados.lead)}</p></section>`,
    body: `<section class="band"><div class="grid-2">
${P.aliados.tarjetas.map((t) => `<article class="card"><p class="tag">${esc(t[0])}</p><h3>${esc(t[1])}</h3><p>${esc(t[2])}</p></article>`).join('')}
</div><p class="cta-row" style="margin-top:1.6rem"><a class="btn btn-primary btn-lg" href="${R('contacto')}#alianzas">${P.aliados.hablar}</a></p></section>${bloqueBoletin}`
  });

  /* --- prensa --- */
  pagina({
    clave: 'prensa',
    title: P.prensa.title,
    description: P.prensa.description,
    jsonld: [migas([[T.inicio, R('home')], [P.prensa.eyebrow, R('prensa')]])],
    hero: `<section class="hero hero-sm"><p class="eyebrow">${P.prensa.eyebrow}</p><h1>${esc(P.prensa.h1)}</h1><p class="lead">${esc(P.prensa.lead)}</p></section>`,
    body: `
<section class="band answer"><h2>${P.prensa.descripcion}</h2><p class="answer-text">${esc(C.site.description)}</p>
<p class="mini">${P.prensa.nombreLegal} ${esc(C.site.legalName)} · ${P.prensa.fundada} ${C.site.founded} · ${P.prensa.contactoPrensa} <a href="mailto:${C.site.email}">${C.site.email}</a> · ${C.site.telefono}</p></section>
<section class="band"><h2>${P.prensa.cifrasTitulo}</h2><div class="grid-3">${C.cifras.map((c) => `<figure class="cifra"><strong>${esc(c.dato)}</strong><figcaption>${esc(c.texto)} <cite>${esc(c.fuente)}</cite></figcaption></figure>`).join('')}</div></section>
<section class="band"><h2>${P.prensa.comoCubrir}</h2><ul class="mini-list big">${P.prensa.guia.map((g) => `<li>${esc(g)}</li>`).join('')}</ul></section>
<section class="band"><h2>${P.prensa.recursos}</h2><ul class="mini-list big">
<li><a href="/assets/logo.svg">${P.prensa.logotipo}</a></li>
<li><a href="${L === 'es' ? '/llms.txt' : `/${L}/llms.txt`}">${P.prensa.resumen}</a></li>
<li><a href="${R('transparencia')}">${P.prensa.metasEnlace}</a></li>
<li><a href="${L === 'es' ? '/feed.xml' : `/${L}/feed.xml`}">${P.prensa.feed}</a></li>
</ul></section>${bloqueBoletin}`
  });

  /* --- preguntas frecuentes --- */
  pagina({
    clave: 'faq',
    title: P.faq.title,
    description: P.faq.description,
    jsonld: [
      migas([[T.inicio, R('home')], [P.faq.eyebrow, R('faq')]]),
      { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: C.faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) }
    ],
    hero: `<section class="hero hero-sm"><p class="eyebrow">${P.faq.eyebrow}</p><h1>${esc(P.faq.h1)}</h1><p class="lead">${esc(P.faq.lead)}</p></section>`,
    body: `<section class="band"><div class="faq">
${C.faqs.map((f) => `<details><summary><h2>${esc(f.q)}</h2></summary><p>${esc(f.a)}</p></details>`).join('')}
</div></section>${bloqueDonacion}`
  });

  /* --- contacto --- */
  pagina({
    clave: 'contacto',
    title: P.contacto.title,
    description: P.contacto.description,
    jsonld: [orgLd, migas([[T.inicio, R('home')], [P.contacto.eyebrow, R('contacto')]])],
    hero: `<section class="hero hero-sm"><p class="eyebrow">${P.contacto.eyebrow}</p><h1>${esc(P.contacto.h1)}</h1><p class="lead">${esc(P.contacto.lead)}</p></section>`,
    body: `
<section class="band alert"><h2>${P.contacto.emergencias}</h2><p>${esc(P.contacto.emergenciasTexto)}</p></section>
<section class="band"><h2>${P.contacto.porSede}</h2><div class="grid-3">
${C.sedes.map((s) => `<article class="card"><p class="tag">${s.bandera} ${esc(s.pais)}</p><h3>${esc(s.ciudad)}</h3><p><a href="mailto:${s.contacto}">${s.contacto}</a></p><p class="mini">${esc(s.idioma)}</p></article>`).join('')}
</div></section>
<section class="band"><h2>${P.contacto.datos}</h2><ul class="mini-list big">
<li><strong>${P.contacto.correo}</strong> <a href="mailto:${C.site.email}">${C.site.email}</a></li>
<li><strong>${P.contacto.telefono}</strong> <a href="tel:${C.site.telefono.replace(/[^+0-9]/g, '')}">${C.site.telefono}</a></li>
<li><strong>${P.contacto.direccion}</strong> ${esc(C.site.direccionUS)}</li>
<li><strong>${P.contacto.horario}</strong> ${esc(C.site.horario)}</li>
</ul></section>
<section class="band" id="alianzas"><h2>${P.contacto.alianzas}</h2>
<form class="donate" action="#" method="post" aria-label="${esc(P.contacto.alianzas)}">
  <label for="cnombre">${P.contacto.form.nombre}</label><input id="cnombre" name="nombre" required autocomplete="name">
  <label for="cemail">${P.contacto.form.correo}</label><input id="cemail" type="email" name="email" required autocomplete="email">
  <label for="motivo">${P.contacto.form.motivo}</label><select id="motivo" name="motivo">${P.contacto.form.motivos.map((m) => `<option>${esc(m)}</option>`).join('')}</select>
  <label for="msg">${P.contacto.form.mensaje}</label><textarea id="msg" name="mensaje" rows="5" required></textarea>
  <button class="btn btn-primary btn-lg" type="submit">${P.contacto.form.enviar}</button>
  <p class="mini">${esc(P.contacto.form.nota)}</p>
</form></section>`
  });

  /* --- blog --- */
  pagina({
    clave: 'blog',
    title: P.blog.title,
    description: P.blog.description,
    jsonld: [
      migas([[T.inicio, R('home')], [P.blog.eyebrow, R('blog')]]),
      { '@context': 'https://schema.org', '@type': 'Blog', url: DOMINIO + R('blog'), publisher: { '@id': DOMINIO + '/#organization' }, blogPost: C.blog.map((b) => ({ '@type': 'BlogPosting', headline: b.titulo, datePublished: b.fecha, url: DOMINIO + R('nota', b.id) })) }
    ],
    hero: `<section class="hero hero-sm"><p class="eyebrow">${P.blog.eyebrow}</p><h1>${esc(P.blog.h1)}</h1></section>`,
    body: `<section class="band"><div class="grid-2">
${C.blog.map((b) => `<article class="card"><p class="tag"><time datetime="${b.fecha}">${b.fecha}</time></p><h3><a href="${R('nota', b.id)}">${esc(b.titulo)}</a></h3><p>${esc(b.resumen)}</p></article>`).join('')}
</div></section>${bloqueBoletin}`
  });

  C.blog.forEach((b) => {
    pagina({
      clave: 'nota',
      slug: b.id,
      title: `${b.titulo} · ${C.site.name}`,
      description: b.resumen,
      jsonld: [
        migas([[T.inicio, R('home')], [P.blog.eyebrow, R('blog')], [b.titulo, R('nota', b.id)]]),
        { '@context': 'https://schema.org', '@type': 'BlogPosting', headline: b.titulo, description: b.resumen, datePublished: b.fecha, dateModified: b.fecha, inLanguage: T.htmlLang, author: { '@type': 'Organization', name: b.autor }, publisher: { '@id': DOMINIO + '/#organization' }, mainEntityOfPage: DOMINIO + R('nota', b.id) }
      ],
      hero: `<section class="hero hero-sm"><p class="eyebrow"><time datetime="${b.fecha}">${b.fecha}</time> · ${esc(b.autor)}</p><h1>${esc(b.titulo)}</h1><p class="lead">${esc(b.resumen)}</p></section>`,
      body: `<section class="band article">${b.cuerpo.map((p) => `<p>${esc(p)}</p>`).join('')}</section>${bloqueDonacion}`
    });
  });

  /* --- legales --- */
  C.legales.forEach((l) => {
    pagina({
      clave: 'legal',
      slug: l.slug,
      title: `${l.titulo} · ${C.site.name}`,
      description: l.resumen,
      jsonld: [migas([[T.inicio, R('home')], [l.titulo, R('legal', l.slug)]])],
      hero: `<section class="hero hero-sm"><p class="eyebrow">${P.legal.eyebrow} ${C.LEGAL_ACTUALIZADO}</p><h1>${esc(l.titulo)}</h1><p class="lead">${esc(l.resumen)}</p></section>`,
      body:
        l.secciones.map((s) => `<section class="band article"><h2>${esc(s[0])}</h2><p>${esc(s[1])}</p></section>`).join('') +
        `<section class="band"><p class="mini">${P.legal.dudas} <a href="mailto:${C.site.email}">${C.site.email}</a>.</p></section>`
    });
  });

  /* --- resumen legible por máquinas, por idioma --- */
  const prefijo = L === 'es' ? '' : `${L}/`;
  escribir(`${prefijo}llms.txt`, `# ${C.site.name}

> ${C.site.description}

${C.sedes.map((s) => `- ${s.ciudad}, ${s.pais}: ${s.rol}. ${s.apertura}.`).join('\n')}

## ${T.etiquetas.problema}
${C.cifras.map((c) => `- ${c.dato}: ${c.texto} ${T.etiquetas.fuente}: ${c.fuente}.`).join('\n')}

## ${T.etiquetas.programas}
${C.proyectos.map((p) => `- [${p.nombre}](${DOMINIO}${R('proyecto', p.slug)}): ${p.resumen}`).join('\n')}

## FAQ
${C.faqs.map((f) => `- ${f.q} ${f.a}`).join('\n')}
`);

  escribir(`${prefijo}feed.xml`, `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"><channel>
<title>${esc(C.site.name)}</title>
<link>${DOMINIO}${R('blog')}</link>
<description>${esc(C.site.description)}</description>
<language>${T.htmlLang}</language>
${C.blog.map((b) => `<item><title>${esc(b.titulo)}</title><link>${DOMINIO}${R('nota', b.id)}</link><guid>${DOMINIO}${R('nota', b.id)}</guid><pubDate>${new Date(b.fecha).toUTCString()}</pubDate><description>${esc(b.resumen)}</description></item>`).join('\n')}
</channel></rss>`);

  return { C, T, P };
}

/* ========================================================================
   Ejecución
   ======================================================================== */

const { C: Ces, T: Tes, P: Pes } = (() => {
  let ref;
  IDIOMAS.forEach((i) => {
    const r = generarIdioma(i.codigo);
    if (i.codigo === 'es') ref = r;
  });
  return ref;
})();

/* --- URL histórica que ahora redirige --- */
escribir('nosotros/index.html', `<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8">
<title>Quiénes somos · ${Ces.site.name}</title>
<link rel="canonical" href="${DOMINIO}/fundacion/">
<meta name="robots" content="noindex,follow">
<meta http-equiv="refresh" content="0; url=/fundacion/">
</head>
<body><p>Esta página se trasladó a <a href="/fundacion/">la ficha de la fundación</a>.</p></body>
</html>`);

/* --- página de error --- */
escribir('404.html', `<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${Pes.error404.title}</title>
<meta name="robots" content="noindex">
<link rel="stylesheet" href="/assets/styles.css">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Google+Sans:opsz,wght@17..18,400..700&family=Montserrat:wght@800&display=swap">
</head>
<body>
<section class="hero hero-big">
  <p class="eyebrow">404</p>
  <h1>${Pes.error404.h1}</h1>
  <p class="lead">${Pes.error404.lead}</p>
  <p class="cta-row"><a class="btn btn-primary btn-lg" href="/">${Pes.error404.inicio}</a> <a class="btn btn-ghost btn-lg" href="/proyectos/">${Pes.error404.proyectos}</a></p>
</section>
</body>
</html>`);

/* --- mapa del sitio con las tres versiones de cada página --- */
escribir('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${paginas
  .map((p) => `<url><loc>${DOMINIO}${p.url}</loc><changefreq>weekly</changefreq><priority>${p.url === '/' ? '1.0' : '0.7'}</priority></url>`)
  .join('\n')}
</urlset>`);

escribir('robots.txt', `User-agent: *
Allow: /

# Rastreadores de IA: permitidos, queremos ser citados con exactitud.
User-agent: GPTBot
Allow: /
User-agent: OAI-SearchBot
Allow: /
User-agent: ClaudeBot
Allow: /
User-agent: Claude-SearchBot
Allow: /
User-agent: PerplexityBot
Allow: /
User-agent: Google-Extended
Allow: /
User-agent: Applebot-Extended
Allow: /
User-agent: Bingbot
Allow: /

Sitemap: ${DOMINIO}/sitemap.xml`);

escribir('site.webmanifest', JSON.stringify({
  name: Ces.site.name,
  short_name: 'SOS Infante',
  start_url: '/',
  display: 'standalone',
  background_color: '#FAFAF9',
  theme_color: '#1EB5C4',
  icons: [{ src: '/assets/favicon.svg', sizes: 'any', type: 'image/svg+xml' }]
}, null, 2));

/* --- recursos estáticos --- */
fs.mkdirSync(path.join(OUT, 'assets'), { recursive: true });
for (const f of fs.readdirSync(path.join(__dirname, 'src/assets'))) {
  const destino = f === '.htaccess' ? path.join(OUT, f) : path.join(OUT, 'assets', f);
  fs.copyFileSync(path.join(__dirname, 'src/assets', f), destino);
}

const porIdioma = IDIOMAS.map((i) => `${i.codigo}: ${paginas.filter((p) => p.idioma === i.codigo).length}`).join(' · ');
console.log(`OK · ${paginas.length} páginas (${porIdioma})`);
