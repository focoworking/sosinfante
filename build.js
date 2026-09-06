#!/usr/bin/env node
/* Generador estatico sin dependencias. `node build.js` -> ./site */
const fs = require('fs');
const path = require('path');
const { site, sedes, proyectos, cifras, formasDeApoyo, faqs, blog, identidad, voluntariado, tienda, legales } = require('./src/content.js');

const OUT = path.join(__dirname, 'site');
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const write = (rel, body) => {
  const file = path.join(OUT, rel);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, body);
  pages.push(rel);
};
const pages = [];

const NAV = [
  ['/nosotros/', 'nosotros'],
  ['/proyectos/', 'proyectos'],
  ['/sedes/', 'sedes'],
  ['/involucrate/', 'involúcrate'],
  ['/tienda/', 'tienda'],
  ['/blog/', 'blog'],
  ['/transparencia/', 'transparencia'],
  ['/faq/', 'faq'],
  ['/contacto/', 'contacto']
];

function layout({ url, title, description, body, jsonld = [], lang = 'es', hero = '' }) {
  const canonical = site.domain + url;
  const ld = jsonld.map((o) => `<script type="application/ld+json">${JSON.stringify(o)}</script>`).join('');
  return `<!doctype html>
<html lang="${lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<link rel="canonical" href="${canonical}">
<link rel="alternate" hreflang="es" href="${site.domain}${url}">
<link rel="alternate" hreflang="en" href="${site.domain}/en/">
<link rel="alternate" hreflang="x-default" href="${site.domain}/">
<meta property="og:type" content="website">
<meta property="og:site_name" content="${site.name}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${canonical}">
<meta property="og:image" content="${site.domain}/assets/og.svg">
<meta property="og:locale" content="${lang === 'en' ? 'en_US' : 'es_419'}">
<meta name="twitter:card" content="summary_large_image">
<meta name="theme-color" content="${site.color}">
<meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1">
<link rel="icon" href="/assets/favicon.svg" type="image/svg+xml">
<link rel="manifest" href="/site.webmanifest">
<link rel="alternate" type="application/rss+xml" title="${site.name} — blog" href="/feed.xml">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;600;800&family=Archivo+Black&display=swap">
<link rel="stylesheet" href="/assets/styles.css">
${ld}
</head>
<body>
<a class="skip" href="#main">Saltar al contenido</a>
<header class="site-head">
  <a class="logo" href="/" aria-label="${site.name}, inicio">
    <img src="/assets/logo.svg" alt="${site.name}" width="120" height="64">
  </a>
  <button class="burger" aria-expanded="false" aria-controls="nav" aria-label="Abrir menú">☰</button>
  <nav id="nav" class="nav" aria-label="Principal">
    <ul>${NAV.map(([h, t]) => `<li><a href="${h}"${url === h ? ' aria-current="page"' : ''}>${t}</a></li>`).join('')}</ul>
  </nav>
  <div class="head-cta">
    <a class="lang" href="${lang === 'en' ? '/' : '/en/'}" hreflang="${lang === 'en' ? 'es' : 'en'}">${lang === 'en' ? 'ES' : 'EN'}</a>
    <a class="btn btn-primary" href="/dona/">Donar</a>
  </div>
</header>
${hero}
<main id="main">
${body}
</main>
<footer class="site-foot">
  <div class="foot-grid">
    <div>
      <img src="/assets/logo.svg" alt="" width="110" height="58" class="foot-logo">
      <p>${esc(site.tagline)}.<br>Miami · Quito · Valera</p>
      <p class="mini">${esc(identidad.lema)}</p>
    </div>
    <div>
      <h3>Sedes</h3>
      <ul>${sedes.map((s) => `<li><a href="/sedes/${s.slug}/">${s.bandera} ${s.ciudad}, ${s.pais}</a></li>`).join('')}</ul>
    </div>
    <div>
      <h3>Actúa</h3>
      <ul>
        <li><a href="/dona/">Donar</a></li>
        <li><a href="/involucrate/#voluntariado">Voluntariado</a></li>
        <li><a href="/contacto/#alianzas">Empresas y fundaciones</a></li>
        <li><a href="/transparencia/">Transparencia</a></li>
      </ul>
    </div>
    <div>
      <h3>Contacto</h3>
      <ul>
        <li><a href="mailto:${site.email}">${site.email}</a></li>
        <li><a href="tel:${site.telefono.replace(/[^+0-9]/g, '')}">${site.telefono}</a></li>
        <li><a href="https://wa.me/${site.whatsapp.replace(/[^0-9]/g, '')}">WhatsApp</a></li>
        <li>${site.direccionUS}</li>
        ${site.social.map((u) => `<li><a rel="me noopener" href="${u}">${u.split('/')[2].replace('www.', '')}</a></li>`).join('')}
      </ul>
    </div>
  </div>
  <p class="legal"><a href="/legal/privacidad/">Privacidad</a> · <a href="/legal/terminos/">Términos</a> · <a href="/legal/devoluciones/">Retornos y devoluciones</a></p>
  <p class="legal">© ${new Date().getFullYear()} ${esc(site.legalName)}. Si una niña, niño o adolescente está en riesgo inmediato, llama a emergencias: 911 (EE.UU. y Venezuela) · ECU 911 (Ecuador).</p>
</footer>
<script src="/assets/main.js" defer></script>
</body>
</html>`;
}

/* ---------- bloques reutilizables ---------- */
const orgLd = {
  '@context': 'https://schema.org',
  '@type': 'NGO',
  '@id': site.domain + '/#organization',
  name: site.name,
  legalName: site.legalName,
  url: site.domain,
  logo: site.domain + '/assets/logo.svg',
  foundingDate: site.founded,
  email: site.email,
  telephone: site.telefono,
  address: { '@type': 'PostalAddress', streetAddress: '3800 Inverrary Blvd', addressLocality: 'Fort Lauderdale', addressRegion: 'FL', postalCode: '33319', addressCountry: 'US' },
  description: site.description,
  sameAs: site.social,
  areaServed: ['US', 'EC', 'VE'],
  knowsLanguage: ['es', 'en'],
  location: sedes.map((s) => ({
    '@type': 'Place',
    name: `${site.name} ${s.ciudad}`,
    address: { '@type': 'PostalAddress', addressLocality: s.ciudad, addressRegion: s.region, addressCountry: s.pais },
    geo: { '@type': 'GeoCoordinates', latitude: s.lat, longitude: s.lng }
  })),
  contactPoint: sedes.map((s) => ({
    '@type': 'ContactPoint',
    contactType: `sede ${s.ciudad}`,
    email: s.contacto,
    areaServed: s.pais,
    availableLanguage: s.idioma.split(' / ')
  }))
};
const websiteLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': site.domain + '/#website',
  url: site.domain,
  name: site.name,
  inLanguage: 'es',
  publisher: { '@id': site.domain + '/#organization' }
};
const crumbs = (items) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it[0], item: site.domain + it[1] }))
});

const cifrasBlock = `<section class="band cifras" aria-labelledby="cifras-t">
  <h2 id="cifras-t">El problema, en datos</h2>
  <div class="grid-3">
    ${cifras.map((c) => `<figure class="cifra"><strong>${c.dato}</strong><figcaption>${esc(c.texto)} <cite>${esc(c.fuente)}</cite></figcaption></figure>`).join('')}
  </div>
</section>`;

const donaBlock = `<section class="band cta-band">
  <h2>Reabrimos en tres países. Sostén la operación.</h2>
  <p>Cada donación se asigna a un proyecto y a una sede, y se reporta cada trimestre.</p>
  <p class="cta-row"><a class="btn btn-primary btn-lg" href="/dona/">Donar ahora</a> <a class="btn btn-ghost btn-lg" href="/involucrate/">Ser voluntario</a></p>
</section>`;

/* ---------- home ---------- */
write('index.html', layout({
  url: '/',
  title: 'SOS Infante · Ninez sin violencia en Miami, Quito y Valera',
  description: site.description,
  jsonld: [orgLd, websiteLd, {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Proyectos de SOS Infante',
    itemListElement: proyectos.map((p, i) => ({ '@type': 'ListItem', position: i + 1, url: `${site.domain}/proyectos/${p.slug}/`, name: p.nombre }))
  }],
  hero: `<section class="hero">
    <p class="eyebrow">Reapertura 2026 · Miami 🇺🇸 · Quito 🇪🇨 · Valera 🇻🇪</p>
    <h1>¿Imaginas un mundo con adultos protectores?</h1>
    <p class="lead">${esc(site.description)}</p>
    <p class="cta-row"><a class="btn btn-primary btn-lg" href="/dona/">Donar</a> <a class="btn btn-ghost btn-lg" href="/proyectos/">Ver proyectos</a></p>
  </section>`,
  body: `
<section class="band answer">
  <h2>¿Qué es SOS Infante?</h2>
  <p class="answer-text">${esc(faqs[0].a)}</p>
</section>
<section class="band">
  <h2>Tres sedes, una sola ruta de protección</h2>
  <div class="grid-3">
    ${sedes.map((s) => `<article class="card">
      <p class="tag">${s.bandera} ${esc(s.pais)}</p>
      <h3><a href="/sedes/${s.slug}/">${esc(s.ciudad)}</a></h3>
      <p class="mini">${esc(s.apertura)}</p>
      <p>${esc(s.resumen)}</p>
    </article>`).join('')}
  </div>
</section>
${cifrasBlock}
<section class="band">
  <h2>Proyectos activos</h2>
  <div class="grid-2">
    ${proyectos.map((p) => `<article class="card">
      <p class="tag">${esc(p.tipo)}</p>
      <h3><a href="/proyectos/${p.slug}/">${esc(p.nombre)}</a></h3>
      <p class="claim">${esc(p.claim)}</p>
      <p>${esc(p.resumen)}</p>
      <p class="mini">${p.sedes.map((x) => esc(x)).join(' · ')}</p>
    </article>`).join('')}
  </div>
</section>
${donaBlock}`
}));

/* ---------- nosotros ---------- */
write('nosotros/index.html', layout({
  url: '/nosotros/',
  title: 'Quiénes somos · SOS Infante',
  description: 'Visión, valores y método de SOS Infante: amor, fe, oportunidades, servicio y generosidad al servicio de una niñez sin violencia.',
  jsonld: [orgLd, crumbs([['Inicio', '/'], ['Nosotros', '/nosotros/']])],
  hero: `<section class="hero hero-sm"><p class="eyebrow">Nosotros</p><h1>Una vida, una esperanza. Uno a la vez.</h1><p class="lead">${esc(identidad.promesa)}</p></section>`,
  body: `
<section class="band answer"><h2>Visión</h2><p class="answer-text">${esc(identidad.vision)}</p><p>${esc(identidad.creencia)}</p></section>
<section class="band"><h2>Valores</h2><div class="grid-3">
${identidad.valores.map((v) => `<article class="card"><p class="tag">${esc(v.nombre)}</p><h3>${esc(v.frase)}</h3><p>${esc(v.texto)}</p></article>`).join('')}
</div></section>
<section class="band"><h2>Cómo trabajamos</h2>
<ol class="steps">
<li><strong>Detectar.</strong> Formamos adultos protectores en escuelas y comunidades para reconocer señales tempranas.</li>
<li><strong>Atender.</strong> Brigadas médicas, nutricionales y psicológicas para infantes expuestos a violencia.</li>
<li><strong>Acompañar.</strong> Rutas de denuncia, apoyo legal y seguimiento a 90 días.</li>
<li><strong>Reportar.</strong> Metas públicas por proyecto y por sede en la página de transparencia.</li>
</ol></section>
${donaBlock}`
}));

/* ---------- proyectos ---------- */
write('proyectos/index.html', layout({
  url: '/proyectos/',
  title: 'Proyectos · SOS Infante',
  description: 'Adulto Protector, Shungo Corazón, Todo Posi y Embarazo infantil: cero tolerancia. Los cuatro programas activos de SOS Infante en 2026.',
  jsonld: [crumbs([['Inicio', '/'], ['Proyectos', '/proyectos/']])],
  hero: `<section class="hero hero-sm"><p class="eyebrow">Proyectos 2026</p><h1>Cuatro programas activos</h1><p class="lead">Prevención, atención directa, comunicación e incidencia. Cada proyecto declara su meta y su avance.</p></section>`,
  body: `<section class="band"><div class="grid-2">
${proyectos.map((p) => `<article class="card"><p class="tag">${esc(p.tipo)}</p><h3><a href="/proyectos/${p.slug}/">${esc(p.nombre)}</a></h3><p class="claim">${esc(p.claim)}</p><p>${esc(p.resumen)}</p><ul class="mini-list">${p.metricas.map((m) => `<li>${esc(m)}</li>`).join('')}</ul></article>`).join('')}
</div></section>${donaBlock}`
}));

proyectos.forEach((p) => {
  const sedesP = sedes.filter((s) => p.sedes.includes(s.slug));
  write(`proyectos/${p.slug}/index.html`, layout({
    url: `/proyectos/${p.slug}/`,
    title: `${p.nombre} · SOS Infante`,
    description: p.resumen,
    jsonld: [
      crumbs([['Inicio', '/'], ['Proyectos', '/proyectos/'], [p.nombre, `/proyectos/${p.slug}/`]]),
      {
        '@context': 'https://schema.org',
        '@type': 'SocialMediaPosting' === '' ? '' : 'Project',
        name: p.nombre,
        description: p.resumen,
        url: `${site.domain}/proyectos/${p.slug}/`,
        parentOrganization: { '@id': site.domain + '/#organization' },
        areaServed: sedesP.map((s) => `${s.ciudad}, ${s.pais}`)
      }
    ],
    hero: `<section class="hero hero-sm"><p class="eyebrow">${esc(p.tipo)}</p><h1>${esc(p.nombre)}</h1><p class="lead">${esc(p.claim)}</p></section>`,
    body: `
<section class="band answer"><h2>¿En qué consiste?</h2><p class="answer-text">${esc(p.resumen)}</p><p>${esc(p.detalle)}</p></section>
<section class="band"><h2>Formato</h2><ul class="mini-list big">${p.metricas.map((m) => `<li>${esc(m)}</li>`).join('')}</ul>
<p><strong>Indicador principal:</strong> ${esc(p.kpi)}.</p></section>
<section class="band"><h2>Dónde opera</h2><div class="grid-3">${sedesP.map((s) => `<article class="card"><p class="tag">${s.bandera} ${esc(s.pais)}</p><h3><a href="/sedes/${s.slug}/">${esc(s.ciudad)}</a></h3><p>${esc(s.rol)}</p></article>`).join('')}</div></section>
${donaBlock}`
  }));
});

/* ---------- sedes ---------- */
write('sedes/index.html', layout({
  url: '/sedes/',
  title: 'Sedes: Miami, Quito y Valera · SOS Infante',
  description: 'SOS Infante opera en Miami (Estados Unidos), Quito (Ecuador) y Valera, estado Trujillo (Venezuela). Qué hace cada sede y cómo contactarla.',
  jsonld: [crumbs([['Inicio', '/'], ['Sedes', '/sedes/']]), orgLd],
  hero: `<section class="hero hero-sm"><p class="eyebrow">Dónde estamos</p><h1>Miami · Quito · Valera</h1><p class="lead">La violencia contra la niñez no se detiene en las fronteras; las familias que atendemos tampoco.</p></section>`,
  body: `<section class="band"><div class="grid-3">
${sedes.map((s) => `<article class="card"><p class="tag">${s.bandera} ${esc(s.pais)}</p><h3><a href="/sedes/${s.slug}/">${esc(s.ciudad)}</a></h3><p class="mini">${esc(s.apertura)}</p><p>${esc(s.resumen)}</p><p><a href="mailto:${s.contacto}">${s.contacto}</a></p></article>`).join('')}
</div></section>${donaBlock}`
}));

sedes.forEach((s) => {
  const proys = proyectos.filter((p) => p.sedes.includes(s.slug));
  write(`sedes/${s.slug}/index.html`, layout({
    url: `/sedes/${s.slug}/`,
    title: `SOS Infante ${s.ciudad}, ${s.pais} · ${s.apertura}`,
    description: `${s.resumen} Programas, contacto y formas de apoyar en ${s.ciudad}.`,
    jsonld: [
      crumbs([['Inicio', '/'], ['Sedes', '/sedes/'], [s.ciudad, `/sedes/${s.slug}/`]]),
      {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        additionalType: 'https://schema.org/NGO',
        name: `${site.name} ${s.ciudad}`,
        url: `${site.domain}/sedes/${s.slug}/`,
        parentOrganization: { '@id': site.domain + '/#organization' },
        email: s.contacto,
        address: { '@type': 'PostalAddress', addressLocality: s.ciudad, addressRegion: s.region, addressCountry: s.pais },
        geo: { '@type': 'GeoCoordinates', latitude: s.lat, longitude: s.lng },
        areaServed: `${s.ciudad}, ${s.pais}`,
        knowsLanguage: s.idioma.split(' / ')
      }
    ],
    hero: `<section class="hero hero-sm"><p class="eyebrow">${s.bandera} ${esc(s.pais)} · ${esc(s.apertura)}</p><h1>${esc(s.ciudad)}</h1><p class="lead">${esc(s.rol)}</p></section>`,
    body: `
<section class="band answer"><h2>¿Qué hace SOS Infante en ${esc(s.ciudad)}?</h2><p class="answer-text">${esc(s.resumen)}</p></section>
<section class="band"><h2>Programas en ${esc(s.ciudad)}</h2><div class="grid-2">${proys.map((p) => `<article class="card"><p class="tag">${esc(p.tipo)}</p><h3><a href="/proyectos/${p.slug}/">${esc(p.nombre)}</a></h3><p>${esc(p.resumen)}</p></article>`).join('')}</div></section>
<section class="band"><h2>Contacto ${esc(s.ciudad)}</h2><p><a class="btn btn-primary" href="mailto:${s.contacto}">${s.contacto}</a> <a class="btn btn-ghost" href="https://wa.me/${site.whatsapp.replace(/[^0-9]/g, '')}">WhatsApp</a></p><p class="mini">Idiomas de atención: ${esc(s.idioma)}.</p></section>
${donaBlock}`
  }));
});

/* ---------- dona ---------- */
write('dona/index.html', layout({
  url: '/dona/',
  title: 'Donar a SOS Infante · Miami, Quito y Valera',
  description: 'Dona en línea, por transferencia o en especie. Donación mensual desde USD 10, donación única y alianzas corporativas desde USD 2.500.',
  jsonld: [crumbs([['Inicio', '/'], ['Donar', '/dona/']]), {
    '@context': 'https://schema.org',
    '@type': 'DonateAction',
    name: 'Donar a SOS Infante',
    recipient: { '@id': site.domain + '/#organization' },
    target: site.domain + '/dona/'
  }],
  hero: `<section class="hero hero-sm"><p class="eyebrow">Donar</p><h1>Tu donación se convierte en atención directa</h1><p class="lead">Elige el monto y la sede. Recibes recibo, y cada trimestre el reporte de uso por proyecto.</p></section>`,
  body: `
<section class="band"><div class="grid-2">
${formasDeApoyo.map((f) => `<article class="card"><p class="tag">${esc(f.monto)}</p><h3>${esc(f.titulo)}</h3><p>${esc(f.texto)}</p><p><a class="btn btn-primary" href="${f.href}">${esc(f.cta)}</a></p></article>`).join('')}
</div></section>
<section class="band" id="mensual"><h2>Donación mensual</h2>
<form class="donate" action="#" method="post" aria-label="Donación mensual">
  <fieldset><legend>Monto mensual (USD)</legend>
    <label><input type="radio" name="monto" value="10" checked> 10</label>
    <label><input type="radio" name="monto" value="25"> 25</label>
    <label><input type="radio" name="monto" value="50"> 50</label>
    <label><input type="radio" name="monto" value="100"> 100</label>
    <label class="otro">Otro <input type="number" name="otro" min="1" step="1" inputmode="numeric" aria-label="Otro monto"></label>
  </fieldset>
  <fieldset><legend>Destino</legend>
    <label for="sede">Sede</label>
    <select id="sede" name="sede">${sedes.map((s) => `<option value="${s.slug}">${s.ciudad}, ${s.pais}</option>`).join('')}<option value="donde-mas-urge">Donde más se necesite</option></select>
    <label for="proyecto">Proyecto</label>
    <select id="proyecto" name="proyecto">${proyectos.map((p) => `<option value="${p.slug}">${p.nombre}</option>`).join('')}<option value="general">Fondo general</option></select>
  </fieldset>
  <label for="email">Correo</label>
  <input id="email" type="email" name="email" autocomplete="email" required>
  <button class="btn btn-primary btn-lg" type="submit">Continuar al pago seguro</button>
  <p class="mini">Conecta este formulario a la pasarela (Stripe / Donorbox / PayPal Giving). Sin pasarela conectada, el botón no procesa pagos.</p>
</form></section>
<section class="band" id="unica"><h2>Donación única y transferencias</h2>
<ul class="mini-list big">
<li><strong>Tarjeta:</strong> mismo formulario, opción “una sola vez”.</li>
<li><strong>Transferencia EE.UU. (Miami):</strong> datos bancarios a solicitud en <a href="mailto:miami@sosinfante.org">miami@sosinfante.org</a>.</li>
<li><strong>Transferencia Ecuador (Quito):</strong> <a href="mailto:quito@sosinfante.org">quito@sosinfante.org</a>.</li>
<li><strong>En especie:</strong> alimentos, medicinas y material escolar en las tres sedes.</li>
</ul></section>
<section class="band answer"><h2>¿Es deducible de impuestos?</h2><p class="answer-text">${esc(faqs[3].a)}</p></section>`
}));

/* ---------- involucrate ---------- */
write('involucrate/index.html', layout({
  url: '/involucrate/',
  title: 'Involúcrate: voluntariado y alianzas · SOS Infante',
  description: 'Voluntariado en psicología, medicina, trabajo social, diseño, datos y logística en Miami, Quito y Valera. También alianzas corporativas y padrinazgo de cohortes.',
  jsonld: [crumbs([['Inicio', '/'], ['Involúcrate', '/involucrate/']])],
  hero: `<section class="hero hero-sm"><p class="eyebrow">Involúcrate</p><h1>Hay una forma de ayudar que encaja contigo</h1><p class="lead">Tiempo, oficio, red de contactos o dinero: todo entra en la misma ruta de protección.</p></section>`,
  body: `
<section class="band" id="voluntariado"><h2>Voluntariado</h2>
<p>Buscamos perfiles de psicología, medicina, trabajo social, diseño, datos, traducción y logística. Todo voluntariado con contacto directo con niñez requiere verificación de antecedentes y formación previa en salvaguarda.</p>
<form class="donate" action="#" method="post" aria-label="Postulación de voluntariado">
  <label for="nombre">Nombre</label><input id="nombre" name="nombre" required autocomplete="name">
  <label for="vemail">Correo</label><input id="vemail" type="email" name="email" required autocomplete="email">
  <label for="vsede">Sede</label><select id="vsede" name="sede">${sedes.map((s) => `<option>${s.ciudad}</option>`).join('')}<option>Remoto</option></select>
  <label for="perfil">Tu oficio o habilidad</label><input id="perfil" name="perfil" required>
  <label for="horas">Horas disponibles al mes</label><input id="horas" name="horas" type="number" min="1" inputmode="numeric">
  <button class="btn btn-primary btn-lg" type="submit">Postular</button>
  <p class="mini">Conecta este formulario a tu CRM o a un endpoint de formularios antes de publicar.</p>
</form></section>
<section class="band" id="esquema"><h2>Áreas y horas</h2>
<p>${esc(voluntariado.intro)}</p>
<table class="tbl"><caption>Esquema base de dedicación por área</caption>
<thead><tr><th scope="col">Área</th><th scope="col">Dedicación</th><th scope="col">Perfil</th></tr></thead>
<tbody>${voluntariado.esquema.map((e) => `<tr><td>${esc(e.area)}</td><td>${esc(e.dedicacion)}</td><td>${esc(e.nota)}</td></tr>`).join('')}</tbody></table>
<p class="mini">Las actividades pueden extenderse según la necesidad del centro de atención o de los infantes.</p>
</section>
<section class="band"><h2>Requisitos y aporte</h2>
<ul class="mini-list big">${voluntariado.requisitos.map((r) => `<li>${esc(r)}</li>`).join('')}</ul>
<p>${esc(voluntariado.aporte)}</p></section>
<section class="band"><h2>Otras formas</h2><div class="grid-3">
<article class="card"><h3>Empresas</h3><p>Patrocina una cohorte completa de Adulto Protector con reporte de impacto trimestral.</p><p><a class="btn btn-ghost" href="/contacto/#alianzas">Hablar con alianzas</a></p></article>
<article class="card"><h3>Escuelas</h3><p>Lleva los talleres a tu unidad educativa en Quito, Valera o Miami.</p><p><a class="btn btn-ghost" href="/contacto/">Solicitar taller</a></p></article>
<article class="card"><h3>Difunde</h3><p>Usa el kit de campaña de Todo Posi en tus redes y en tu aula.</p><p><a class="btn btn-ghost" href="/proyectos/todo-posi/">Ver campaña</a></p></article>
</div></section>
${donaBlock}`
}));

/* ---------- transparencia ---------- */
write('transparencia/index.html', layout({
  url: '/transparencia/',
  title: 'Transparencia y salvaguarda · SOS Infante',
  description: 'Metas públicas 2026 por proyecto y sede, política de salvaguarda infantil, uso de fondos y canal de denuncias de SOS Infante.',
  jsonld: [crumbs([['Inicio', '/'], ['Transparencia', '/transparencia/']])],
  hero: `<section class="hero hero-sm"><p class="eyebrow">Transparencia</p><h1>Metas públicas, reporte trimestral</h1><p class="lead">La confianza no se declara: se publica.</p></section>`,
  body: `
<section class="band"><h2>Metas 2026</h2>
<table class="tbl"><caption>Compromiso público del primer año de reapertura</caption>
<thead><tr><th scope="col">Proyecto</th><th scope="col">Indicador</th><th scope="col">Meta 2026</th><th scope="col">Sedes</th></tr></thead>
<tbody>
<tr><td>Adulto Protector</td><td>adultos formados</td><td>3.000</td><td>Miami, Quito, Valera</td></tr>
<tr><td>Shungo Corazón</td><td>niñas y niños atendidos</td><td>1.200</td><td>Quito, Valera</td></tr>
<tr><td>Todo Posi</td><td>adolescentes alcanzados</td><td>25.000</td><td>Miami, Quito</td></tr>
<tr><td>Embarazo infantil: cero tolerancia</td><td>casos acompañados</td><td>120</td><td>Quito, Valera</td></tr>
</tbody></table>
<p class="mini">Actualizamos esta tabla cada trimestre con el avance real, incluso cuando va por debajo de la meta.</p></section>
<section class="band"><h2>Uso de fondos</h2><ul class="mini-list big">
<li><strong>78%</strong> atención directa (brigadas, terapia, alimentos, materiales).</li>
<li><strong>14%</strong> operación y equipo en territorio.</li>
<li><strong>8%</strong> administración, auditoría y captación.</li>
</ul></section>
<section class="band"><h2>Salvaguarda infantil</h2>
<ul class="mini-list big">
<li>Verificación de antecedentes para todo el personal y voluntariado con contacto con niñez.</li>
<li>Política de dos adultos: ninguna persona adulta permanece a solas con una niña o niño.</li>
<li>Consentimiento informado para uso de imagen; rostros de menores se protegen por defecto.</li>
<li>Canal de denuncias: <a href="mailto:salvaguarda@sosinfante.org">salvaguarda@sosinfante.org</a>, con respuesta en 72 horas.</li>
</ul></section>`
}));

/* ---------- faq ---------- */
write('faq/index.html', layout({
  url: '/faq/',
  title: 'Preguntas frecuentes · SOS Infante',
  description: 'Qué es SOS Infante, dónde opera, cómo donar, deducibilidad, voluntariado, qué hacer ante una sospecha de violencia contra la niñez.',
  jsonld: [
    crumbs([['Inicio', '/'], ['FAQ', '/faq/']]),
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } }))
    }
  ],
  hero: `<section class="hero hero-sm"><p class="eyebrow">FAQ</p><h1>Preguntas frecuentes</h1><p class="lead">Respuestas cortas y verificables, pensadas también para buscadores y asistentes de IA.</p></section>`,
  body: `<section class="band"><div class="faq">
${faqs.map((f) => `<details><summary><h2>${esc(f.q)}</h2></summary><p>${esc(f.a)}</p></details>`).join('')}
</div></section>${donaBlock}`
}));

/* ---------- contacto ---------- */
write('contacto/index.html', layout({
  url: '/contacto/',
  title: 'Contacto · SOS Infante Miami, Quito y Valera',
  description: 'Escríbenos por sede, reporta un caso, propone una alianza o solicita un taller. Emergencias: 911 / ECU 911.',
  jsonld: [crumbs([['Inicio', '/'], ['Contacto', '/contacto/']]), orgLd],
  hero: `<section class="hero hero-sm"><p class="eyebrow">Contacto</p><h1>Hablemos</h1><p class="lead">Si hay riesgo inmediato para una niña, niño o adolescente, llama primero a emergencias.</p></section>`,
  body: `
<section class="band alert"><h2>Emergencias</h2><p><strong>911</strong> (Estados Unidos y Venezuela) · <strong>ECU 911</strong> (Ecuador). Después escríbenos: acompañamos la ruta de denuncia y damos contención inicial.</p></section>
<section class="band"><h2>Por sede</h2><div class="grid-3">
${sedes.map((s) => `<article class="card"><p class="tag">${s.bandera} ${esc(s.pais)}</p><h3>${esc(s.ciudad)}</h3><p><a href="mailto:${s.contacto}">${s.contacto}</a></p><p class="mini">${esc(s.idioma)}</p></article>`).join('')}
</div></section>
<section class="band"><h2>Datos generales</h2>
<ul class="mini-list big">
<li><strong>Correo:</strong> <a href="mailto:${site.email}">${site.email}</a></li>
<li><strong>Teléfono / WhatsApp:</strong> <a href="tel:${site.telefono.replace(/[^+0-9]/g, '')}">${site.telefono}</a></li>
<li><strong>Dirección (EE.UU.):</strong> ${site.direccionUS}</li>
<li><strong>Horario:</strong> ${site.horario}</li>
</ul></section>
<section class="band" id="alianzas"><h2>Alianzas, prensa y talleres</h2>
<form class="donate" action="#" method="post" aria-label="Formulario de contacto">
  <label for="cnombre">Nombre</label><input id="cnombre" name="nombre" required autocomplete="name">
  <label for="cemail">Correo</label><input id="cemail" type="email" name="email" required autocomplete="email">
  <label for="motivo">Motivo</label><select id="motivo" name="motivo"><option>Alianza corporativa</option><option>Fundación / cooperación</option><option>Prensa</option><option>Taller en escuela</option><option>Reportar un caso</option><option>Otro</option></select>
  <label for="msg">Mensaje</label><textarea id="msg" name="mensaje" rows="5" required></textarea>
  <button class="btn btn-primary btn-lg" type="submit">Enviar</button>
  <p class="mini">Conecta este formulario a tu CRM o endpoint antes de publicar.</p>
</form></section>`
}));

/* ---------- blog ---------- */
write('blog/index.html', layout({
  url: '/blog/',
  title: 'Blog · SOS Infante',
  description: 'Notas sobre la reapertura, la nueva sede en Valera y guías prácticas para reconocer y frenar la violencia contra la niñez.',
  jsonld: [crumbs([['Inicio', '/'], ['Blog', '/blog/']]), {
    '@context': 'https://schema.org', '@type': 'Blog', url: site.domain + '/blog/', publisher: { '@id': site.domain + '/#organization' },
    blogPost: blog.map((b) => ({ '@type': 'BlogPosting', headline: b.titulo, datePublished: b.fecha, url: `${site.domain}/blog/${b.slug}/` }))
  }],
  hero: `<section class="hero hero-sm"><p class="eyebrow">Blog</p><h1>Lo que aprendemos, publicado</h1></section>`,
  body: `<section class="band"><div class="grid-2">
${blog.map((b) => `<article class="card"><p class="tag"><time datetime="${b.fecha}">${b.fecha}</time></p><h3><a href="/blog/${b.slug}/">${esc(b.titulo)}</a></h3><p>${esc(b.resumen)}</p></article>`).join('')}
</div></section>`
}));

blog.forEach((b) => {
  write(`blog/${b.slug}/index.html`, layout({
    url: `/blog/${b.slug}/`,
    title: `${b.titulo} · SOS Infante`,
    description: b.resumen,
    jsonld: [
      crumbs([['Inicio', '/'], ['Blog', '/blog/'], [b.titulo, `/blog/${b.slug}/`]]),
      {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: b.titulo,
        description: b.resumen,
        datePublished: b.fecha,
        dateModified: b.fecha,
        inLanguage: 'es',
        author: { '@type': 'Organization', name: b.autor },
        publisher: { '@id': site.domain + '/#organization' },
        mainEntityOfPage: `${site.domain}/blog/${b.slug}/`
      }
    ],
    hero: `<section class="hero hero-sm"><p class="eyebrow"><time datetime="${b.fecha}">${b.fecha}</time> · ${esc(b.autor)}</p><h1>${esc(b.titulo)}</h1><p class="lead">${esc(b.resumen)}</p></section>`,
    body: `<section class="band article">${b.cuerpo.map((p) => `<p>${esc(p)}</p>`).join('')}</section>${donaBlock}`
  }));
});

/* ---------- EN ---------- */
write('en/index.html', layout({
  url: '/en/',
  lang: 'en',
  title: 'SOS Infante · Childhood without violence — Miami, Quito, Valera',
  description: 'SOS Infante is a nonprofit preventing and responding to physical, psychological and sexual violence against children in Miami (USA), Quito (Ecuador) and Valera (Venezuela).',
  jsonld: [orgLd],
  hero: `<section class="hero"><p class="eyebrow">Reopening 2026 · Miami 🇺🇸 · Quito 🇪🇨 · Valera 🇻🇪</p><h1>Can you imagine a world with protective adults?</h1><p class="lead">SOS Infante prevents and responds to violence against children, working with families, schools and communities across three countries.</p><p class="cta-row"><a class="btn btn-primary btn-lg" href="/dona/">Donate</a> <a class="btn btn-ghost btn-lg" href="/proyectos/">Programs</a></p></section>`,
  body: `
<section class="band answer"><h2>What is SOS Infante?</h2><p class="answer-text">SOS Infante is a nonprofit organization that prevents and responds to physical, psychological and sexual violence against children and adolescents. It works with families, schools and communities in Miami (United States), Quito (Ecuador) and Valera (Venezuela).</p></section>
<section class="band"><h2>Where we work</h2><div class="grid-3">${sedes.map((s) => `<article class="card"><p class="tag">${s.bandera} ${esc(s.pais)}</p><h3><a href="/sedes/${s.slug}/">${esc(s.ciudad)}</a></h3><p>${esc(s.resumen)}</p></article>`).join('')}</div></section>
<section class="band"><h2>Programs</h2><div class="grid-2">${proyectos.map((p) => `<article class="card"><p class="tag">${esc(p.tipo)}</p><h3><a href="/proyectos/${p.slug}/">${esc(p.nombre)}</a></h3><p>${esc(p.resumen)}</p></article>`).join('')}</div></section>
<section class="band cta-band"><h2>Support the reopening</h2><p>Every gift is assigned to a program and a city, and reported quarterly.</p><p class="cta-row"><a class="btn btn-primary btn-lg" href="/dona/">Donate</a></p></section>`
}));


/* ---------- tienda ---------- */
write('tienda/index.html', layout({
  url: '/tienda/',
  title: 'Tienda solidaria · SOS Infante',
  description: 'Compra ropa, artículos de casa y apadrinamientos. Cada compra financia los proyectos de SOS Infante en Miami, Quito y Valera.',
  jsonld: [
    crumbs([['Inicio', '/'], ['Tienda', '/tienda/']]),
    {
      '@context': 'https://schema.org',
      '@type': 'OfferCatalog',
      name: 'Tienda solidaria SOS Infante',
      url: site.domain + '/tienda/',
      provider: { '@id': site.domain + '/#organization' },
      itemListElement: tienda.productos.map((p, i) => ({
        '@type': 'Offer',
        position: i + 1,
        itemOffered: { '@type': 'Product', name: p.nombre, category: p.categoria },
        price: (p.oferta || p.precio).toFixed(2),
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock'
      }))
    }
  ],
  hero: `<section class="hero hero-sm"><p class="eyebrow">Tienda</p><h1>Compra que sostiene</h1><p class="lead">${esc(tienda.intro)}</p></section>`,
  body: `
<section class="band"><h2>Categorías</h2><div class="grid-4">
${tienda.categorias.map((c) => `<article class="card"><h3>${esc(c.nombre)}</h3><p class="mini">${c.items} productos</p></article>`).join('')}
</div></section>
<section class="band"><h2>Productos</h2><div class="grid-4">
${tienda.productos.map((p) => `<article class="prod"><div class="ph" aria-hidden="true">SOS</div><div class="body"><p class="tag">${esc(p.categoria)}</p><h3>${esc(p.nombre)}</h3><p class="price">${p.oferta ? `<s>$${p.precio.toFixed(2)}</s> $${p.oferta.toFixed(2)}` : `$${p.precio.toFixed(2)}`}</p><p><a class="btn btn-primary" href="/contacto/?producto=${encodeURIComponent(p.nombre)}">Pedir</a></p></div></article>`).join('')}
</div></section>
<section class="band answer"><h2>Envíos y devoluciones</h2><p class="answer-text">Producción bajo demanda con envío a Estados Unidos, Ecuador y Venezuela. Tienes 14 días para solicitar un retorno de productos físicos sin uso. Revisa la <a href="/legal/devoluciones/">política de retornos y devoluciones</a>.</p>
<p class="mini">Conecta esta página a tu pasarela (WooCommerce, Shopify o Stripe Checkout) antes de publicar; hoy los botones envían al formulario de contacto.</p></section>
${donaBlock}`
}));

/* ---------- legales ---------- */
legales.forEach((l) => {
  write(`legal/${l.slug}/index.html`, layout({
    url: `/legal/${l.slug}/`,
    title: `${l.titulo} · SOS Infante`,
    description: l.resumen,
    jsonld: [crumbs([['Inicio', '/'], [l.titulo, `/legal/${l.slug}/`]])],
    hero: `<section class="hero hero-sm"><p class="eyebrow">Legal · actualizado ${new Date().toISOString().slice(0, 10)}</p><h1>${esc(l.titulo)}</h1><p class="lead">${esc(l.resumen)}</p></section>`,
    body: l.secciones.map((sec) => `<section class="band article"><h2>${esc(sec[0])}</h2><p>${esc(sec[1])}</p></section>`).join('') +
      `<section class="band"><p class="mini">Dudas sobre estas políticas: <a href="mailto:${site.email}">${site.email}</a>.</p></section>`
  }));
});

/* ---------- 404 ---------- */
write('404.html', layout({
  url: '/404.html',
  title: 'Página no encontrada · SOS Infante',
  description: 'La página que buscas no existe.',
  hero: `<section class="hero hero-sm"><p class="eyebrow">404</p><h1>Esa página no existe</h1><p class="lead">Puede que la hayamos movido en la reapertura.</p><p class="cta-row"><a class="btn btn-primary" href="/">Ir al inicio</a> <a class="btn btn-ghost" href="/proyectos/">Ver proyectos</a></p></section>`,
  body: ''
}));

/* ---------- archivos maquina ---------- */
const urls = pages.filter((p) => p !== '404.html').map((p) => '/' + p.replace(/index\.html$/, '').replace(/\.html$/, ''));
write('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `<url><loc>${site.domain}${u}</loc><changefreq>weekly</changefreq><priority>${u === '/' ? '1.0' : '0.7'}</priority></url>`).join('\n')}
</urlset>`);

write('robots.txt', `User-agent: *
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

Sitemap: ${site.domain}/sitemap.xml`);

write('llms.txt', `# ${site.name}

> ${site.description}

Reapertura 2026. Sedes: Miami (Estados Unidos), Quito (Ecuador), Valera — estado Trujillo (Venezuela).
Contacto: ${site.email}. Emergencias: 911 (EE.UU., Venezuela), ECU 911 (Ecuador).

## Datos citables
${cifras.map((c) => `- ${c.dato}: ${c.texto} Fuente: ${c.fuente}.`).join('\n')}

## Proyectos
${proyectos.map((p) => `- [${p.nombre}](${site.domain}/proyectos/${p.slug}/): ${p.resumen} Sedes: ${p.sedes.join(', ')}.`).join('\n')}

## Sedes
${sedes.map((s) => `- [${s.ciudad}, ${s.pais}](${site.domain}/sedes/${s.slug}/): ${s.rol}. ${s.apertura}. Contacto: ${s.contacto}.`).join('\n')}

## Preguntas frecuentes
${faqs.map((f) => `- ${f.q} ${f.a}`).join('\n')}

## Paginas
${urls.map((u) => `- ${site.domain}${u}`).join('\n')}
`);

write('llms-full.txt', `# ${site.name} — contenido completo\n\n${proyectos.map((p) => `## ${p.nombre}\n${p.claim}\n${p.resumen}\n${p.detalle}\nFormato: ${p.metricas.join('; ')}. Indicador: ${p.kpi}.`).join('\n\n')}\n\n${blog.map((b) => `## ${b.titulo} (${b.fecha})\n${b.cuerpo.join('\n')}`).join('\n\n')}\n`);

write('feed.xml', `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"><channel>
<title>${site.name} — blog</title>
<link>${site.domain}/blog/</link>
<description>${esc(site.description)}</description>
<language>es</language>
${blog.map((b) => `<item><title>${esc(b.titulo)}</title><link>${site.domain}/blog/${b.slug}/</link><guid>${site.domain}/blog/${b.slug}/</guid><pubDate>${new Date(b.fecha).toUTCString()}</pubDate><description>${esc(b.resumen)}</description></item>`).join('\n')}
</channel></rss>`);

write('site.webmanifest', JSON.stringify({
  name: site.name, short_name: 'SOS Infante', start_url: '/', display: 'standalone',
  background_color: '#ffffff', theme_color: site.color,
  icons: [{ src: '/assets/favicon.svg', sizes: 'any', type: 'image/svg+xml' }]
}, null, 2));

/* ---------- assets ---------- */
fs.mkdirSync(path.join(OUT, 'assets'), { recursive: true });
for (const f of fs.readdirSync(path.join(__dirname, 'src/assets'))) {
  fs.copyFileSync(path.join(__dirname, 'src/assets', f), path.join(OUT, 'assets', f));
}
console.log(`OK · ${pages.length} archivos generados en /site`);
