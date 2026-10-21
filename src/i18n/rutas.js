// Rutas por idioma. Cada página se identifica por una clave estable y cada
// idioma define su propio slug: las URLs se leen en el idioma del visitante,
// que es lo que esperan tanto las personas como los buscadores.
const RUTAS = {
  es: {
    prefijo: '',
    home: '/',
    fundacion: '/fundacion/',
    departamentos: '/fundacion/departamentos/',
    proyectos: '/proyectos/',
    proyecto: '/proyectos/{slug}/',
    sedes: '/sedes/',
    sede: '/sedes/{slug}/',
    acopio: '/acopio/',
    tienda: '/tienda/',
    voluntariado: '/voluntariado/',
    campanas: '/campanas/',
    dona: '/dona/',
    involucrate: '/involucrate/',
    transparencia: '/transparencia/',
    aliados: '/aliados/',
    prensa: '/prensa/',
    faq: '/faq/',
    contacto: '/contacto/',
    casos: '/casos-reales/',
    caso: '/casos-reales/{slug}/',
    blog: '/blog/',
    nota: '/blog/{slug}/',
    legal: '/legal/{slug}/'
  },
  en: {
    prefijo: '/en',
    home: '/en/',
    fundacion: '/en/about/',
    departamentos: '/en/about/teams/',
    proyectos: '/en/programs/',
    proyecto: '/en/programs/{slug}/',
    sedes: '/en/locations/',
    sede: '/en/locations/{slug}/',
    acopio: '/en/donation-center/',
    tienda: '/en/shop/',
    voluntariado: '/en/volunteer/',
    campanas: '/en/campaigns/',
    dona: '/en/donate/',
    involucrate: '/en/get-involved/',
    transparencia: '/en/accountability/',
    aliados: '/en/partners/',
    prensa: '/en/press/',
    faq: '/en/faq/',
    contacto: '/en/contact/',
    casos: '/en/real-cases/',
    caso: '/en/real-cases/{slug}/',
    blog: '/en/stories/',
    nota: '/en/stories/{slug}/',
    legal: '/en/legal/{slug}/'
  },
  pt: {
    prefijo: '/pt',
    home: '/pt/',
    fundacion: '/pt/instituto/',
    departamentos: '/pt/instituto/equipes/',
    proyectos: '/pt/programas/',
    proyecto: '/pt/programas/{slug}/',
    sedes: '/pt/unidades/',
    sede: '/pt/unidades/{slug}/',
    acopio: '/pt/centro-de-coleta/',
    tienda: '/pt/loja/',
    voluntariado: '/pt/voluntariado/',
    campanas: '/pt/campanhas/',
    dona: '/pt/doar/',
    involucrate: '/pt/participe/',
    transparencia: '/pt/transparencia/',
    aliados: '/pt/parceiros/',
    prensa: '/pt/imprensa/',
    faq: '/pt/perguntas/',
    contacto: '/pt/contato/',
    casos: '/pt/casos-reais/',
    caso: '/pt/casos-reais/{slug}/',
    blog: '/pt/historias/',
    nota: '/pt/historias/{slug}/',
    legal: '/pt/legal/{slug}/'
  }
};

// Slugs de los contenidos que tienen ficha propia.
const SLUGS = {
  proyecto: {
    'adulto-protector': { es: 'adulto-protector', en: 'protective-adult', pt: 'adulto-protetor' },
    'shungo-corazon': { es: 'shungo-corazon', en: 'shungo-heart', pt: 'shungo-coracao' },
    'todo-posi': { es: 'todo-posi', en: 'todo-posi', pt: 'todo-posi' },
    'artis-terapia': { es: 'artis-terapia', en: 'art-therapy', pt: 'arteterapia' },
    'embarazo-infantil': { es: 'embarazo-infantil', en: 'child-pregnancy', pt: 'gravidez-infantil' }
  },
  sede: {
    miami: { es: 'miami', en: 'miami', pt: 'miami' },
    quito: { es: 'quito', en: 'quito', pt: 'quito' },
    valera: { es: 'valera', en: 'valera', pt: 'valera' }
  },
  nota: {
    reapertura: { es: 'reapertura-2026', en: 'reopening-2026', pt: 'reabertura-2026' },
    valera: { es: 'valera-nueva-sede', en: 'why-valera', pt: 'por-que-valera' },
    senales: {
      es: 'como-reconocer-senales-violencia-infantil',
      en: 'warning-signs-of-child-abuse',
      pt: 'sinais-de-violencia-infantil'
    }
  },
  legal: {
    privacidad: { es: 'privacidad', en: 'privacy', pt: 'privacidade' },
    terminos: { es: 'terminos', en: 'terms', pt: 'termos' },
    devoluciones: { es: 'devoluciones', en: 'returns', pt: 'devolucoes' }
  }
};

const IDIOMAS = [
  { codigo: 'es', etiqueta: 'ES', nombre: 'Español', hreflang: 'es' },
  { codigo: 'en', etiqueta: 'EN', nombre: 'English', hreflang: 'en' },
  { codigo: 'pt', etiqueta: 'PT', nombre: 'Português', hreflang: 'pt' }
];

// ruta('proyecto', 'en', 'adulto-protector') -> /en/programs/protective-adult/
function ruta(clave, idioma, slugBase) {
  const plantilla = RUTAS[idioma][clave];
  if (!plantilla) throw new Error(`Ruta desconocida: ${clave} (${idioma})`);
  if (!plantilla.includes('{slug}')) return plantilla;
  const tabla = SLUGS[clave];
  const slug = tabla && tabla[slugBase] ? tabla[slugBase][idioma] : slugBase;
  return plantilla.replace('{slug}', slug);
}

// Todas las versiones de una misma página, para las etiquetas hreflang.
function alternativas(clave, slugBase) {
  return IDIOMAS.map((i) => ({ idioma: i, url: ruta(clave, i.codigo, slugBase) }));
}

module.exports = { RUTAS, SLUGS, IDIOMAS, ruta, alternativas };
