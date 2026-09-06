// Contenido central del sitio SOS Infante. Una sola fuente de verdad para
// paginas, menus, datos estructurados, sitemap y feeds para motores/LLM.

const site = {
  name: 'SOS Infante',
  legalName: 'SOS Infante — Fundacion por la ninez sin violencia',
  domain: 'https://www.sosinfante.org',
  tagline: 'Rompemos ciclos de violencia contra la ninez',
  description:
    'SOS Infante es una organizacion sin fines de lucro que previene y atiende la violencia fisica, psicologica y sexual contra ninas, ninos y adolescentes. Opera en Miami (EE.UU.), Quito (Ecuador) y Valera (Venezuela).',
  founded: '2018',
  email: 'accion@sosinfante.org',
  telefono: '+1 305 988 1925',
  whatsapp: '+13059881925',
  direccionUS: '3800 Inverrary Blvd, Fort Lauderdale, FL 33319, Estados Unidos',
  horario: 'Lunes a viernes, 08h00 a 17h00',
  color: '#12b3c4',
  locales: ['es', 'en'],
  social: [
    'https://www.facebook.com/sosinfante/',
    'https://www.instagram.com/sosinfante/',
    'https://www.youtube.com/@sosinfante',
    'https://www.linkedin.com/company/sosinfante/'
  ]
};

const sedes = [
  {
    slug: 'miami',
    ciudad: 'Miami',
    pais: 'Estados Unidos',
    bandera: '🇺🇸',
    rol: 'Sede de alianzas, recaudacion internacional y voluntariado corporativo',
    apertura: 'Reapertura 2026',
    region: 'FL',
    lat: 25.7617,
    lng: -80.1918,
    resumen:
      'Miami es el nodo diaspora: conecta a familias latinas, empresas y fundaciones de Florida con los programas de proteccion en Ecuador y Venezuela.',
    programas: ['Adulto Protector en escuelas bilingues', 'Alianzas corporativas', 'Fondo de emergencia regional'],
    contacto: 'accion@sosinfante.org',
    idioma: 'es / en'
  },
  {
    slug: 'quito',
    ciudad: 'Quito',
    pais: 'Ecuador',
    bandera: '🇪🇨',
    rol: 'Sede operativa historica: prevencion, atencion psicologica y campanas',
    apertura: 'Operacion continua desde 2018 · relanzamiento 2026',
    region: 'Pichincha',
    lat: -0.1807,
    lng: -78.4678,
    resumen:
      'Desde Quito coordinamos talleres en unidades educativas, atencion psicologica a sobrevivientes y las campanas publicas de prevencion.',
    programas: ['Shungo Corazon', 'Todo Posi', 'Adulto Protector', 'Embarazo infantil: cero tolerancia'],
    contacto: 'accion@sosinfante.org',
    idioma: 'es'
  },
  {
    slug: 'valera',
    ciudad: 'Valera',
    pais: 'Venezuela',
    bandera: '🇻🇪',
    rol: 'Nueva sede: asistencia alimentaria, medica y escuela de adultos protectores',
    apertura: 'Apertura 2026',
    region: 'Trujillo',
    lat: 9.3167,
    lng: -70.6,
    resumen:
      'Valera (estado Trujillo) abre como base andina para atender ninez en riesgo por migracion, desnutricion y violencia intrafamiliar.',
    programas: ['Shungo Corazon Venezuela', 'Brigadas medicas comunitarias', 'Red de adultos protectores'],
    contacto: 'accion@sosinfante.org',
    idioma: 'es'
  }
];

const proyectos = [
  {
    slug: 'adulto-protector',
    nombre: 'Adulto Protector',
    claim: '¿Imaginas un mundo con adultos protectores?',
    tipo: 'Campana de prevencion',
    sedes: ['miami', 'quito', 'valera'],
    resumen:
      'Formacion de madres, padres, docentes y cuidadores para detectar, frenar y denunciar la violencia contra la ninez antes de que ocurra.',
    detalle:
      'El promedio de familias latinas que viven realidades de abandono, alcoholismo, violencia intrafamiliar, agresion verbal, fisica y psicologica es alto. Adulto Protector entrega un metodo de 6 sesiones: senales de alerta, lenguaje del cuidado, rutas de denuncia, manejo de crisis, disciplina sin violencia y sostenimiento comunitario.',
    metricas: ['6 sesiones por cohorte', '1 facilitador cada 25 adultos', 'Seguimiento a 90 dias'],
    kpi: 'adultos formados'
  },
  {
    slug: 'shungo-corazon',
    nombre: 'Shungo Corazon',
    claim: 'Asistencia medica, alimentaria y mental a infantes',
    tipo: 'Programa de atencion directa',
    sedes: ['quito', 'valera'],
    resumen:
      '«Shungo» viene del kichwa y significa corazon: ternura, carino, amor. Atencion integral a ninas y ninos en situacion de vulnerabilidad.',
    detalle:
      'Brigadas que combinan control medico y nutricional, entrega de alimentos, y terapia psicologica breve para infantes expuestos a violencia. Se ejecuta con unidades educativas y centros comunitarios aliados.',
    metricas: ['Atencion medica + nutricional', 'Terapia psicologica breve (8 sesiones)', 'Kits alimentarios mensuales'],
    kpi: 'ninas y ninos atendidos'
  },
  {
    slug: 'todo-posi',
    nombre: 'Todo Posi',
    claim: 'Campana de salud mental y actitud protectora',
    tipo: 'Campana de comunicacion',
    sedes: ['miami', 'quito'],
    resumen:
      'Campana positiva que convierte la conversacion sobre violencia en una practica cotidiana de cuidado, hecha con y para adolescentes.',
    detalle:
      'Contenido creado con adolescentes: piezas para redes, retos escolares y kit descargable para docentes. Objetivo: normalizar pedir ayuda y quitar la carga de verguenza a quien denuncia.',
    metricas: ['Kit docente descargable', 'Retos escolares', 'Contenido co-creado con adolescentes'],
    kpi: 'adolescentes alcanzados'
  },
  {
    slug: 'artis-terapia',
    nombre: 'Artis Terapia',
    claim: 'El arte como herramienta de identificacion y tratamiento',
    tipo: 'Campana de arteterapia',
    sedes: ['quito', 'valera'],
    resumen:
      'Campana que impulsa el arte para identificar, tratar y prevenir traumas psicologicos en infantes.',
    detalle:
      'Talleres de artes escenicas, plastica y musica facilitados por profesionales del arte junto a psicologia. El arte abre la puerta a lo que la nina o el nino todavia no puede nombrar, y da un canal seguro para procesarlo. Requiere facilitadores con experiencia profesional en artes escenicas.',
    metricas: ['2 dias por semana (16 horas) y 1 sabado al mes', 'Duplas arte + psicologia', 'Cierre con muestra comunitaria'],
    kpi: 'infantes en proceso de arteterapia'
  },
  {
    slug: 'embarazo-infantil',
    nombre: 'Embarazo infantil: cero tolerancia',
    claim: 'Cada minuto importa',
    tipo: 'Incidencia y datos',
    sedes: ['quito', 'valera'],
    resumen:
      'Investigacion, datos abiertos y acompanamiento legal frente al embarazo en ninas menores de 14 anos, que en la ley es violencia sexual.',
    detalle:
      'Publicamos cifras verificables, acompanamos rutas de denuncia y formamos periodistas y docentes para nombrar el hecho por su nombre: un embarazo en una nina menor de 14 anos es consecuencia de un delito.',
    metricas: ['Datos abiertos por provincia', 'Acompanamiento legal', 'Guia para prensa'],
    kpi: 'casos acompanados'
  }
];

const cifras = [
  {
    dato: '4 de cada 10',
    texto: 'mujeres ha manifestado ser victima de algun tipo de atentado de naturaleza sexual a lo largo de su vida.',
    fuente: 'Encuesta nacional de violencia de genero, Ecuador'
  },
  {
    dato: '1 de cada 4',
    texto: 'ninos menores de 5 anos (cerca de 176 millones) vive en un hogar donde su madre es victima de violencia basada en genero.',
    fuente: 'UNICEF, 2020'
  },
  {
    dato: '79.946',
    texto: 'llamadas al ECU 911 relacionadas con violencia intrafamiliar entre marzo y diciembre de 2020 en Ecuador.',
    fuente: 'ECU 911, Ecuador'
  }
];

const formasDeApoyo = [
  {
    titulo: 'Donacion mensual',
    monto: 'desde USD 10',
    texto: 'Sostiene la atencion psicologica y los kits alimentarios de Shungo Corazon todo el ano.',
    cta: 'Donar mensual',
    href: '/dona/#mensual'
  },
  {
    titulo: 'Donacion unica',
    monto: 'el monto que decidas',
    texto: 'Cubre brigadas medicas y materiales de los talleres Adulto Protector.',
    cta: 'Donar una vez',
    href: '/dona/#unica'
  },
  {
    titulo: 'Empresas y fundaciones',
    monto: 'alianzas desde USD 2.500',
    texto: 'Patrocinio de cohortes completas de Adulto Protector con reporte de impacto trimestral.',
    cta: 'Hablar con alianzas',
    href: '/contacto/#alianzas'
  },
  {
    titulo: 'Voluntariado',
    monto: 'tu tiempo',
    texto: 'Psicologia, medicina, diseno, datos, traduccion y logistica en las tres sedes.',
    cta: 'Postular',
    href: '/involucrate/#voluntariado'
  }
];

const faqs = [
  {
    q: '¿Que es SOS Infante?',
    a: 'SOS Infante es una organizacion sin fines de lucro que previene y atiende la violencia fisica, psicologica y sexual contra ninas, ninos y adolescentes. Trabaja con familias, escuelas y comunidades en Miami (Estados Unidos), Quito (Ecuador) y Valera (Venezuela).'
  },
  {
    q: '¿En que ciudades opera SOS Infante en 2026?',
    a: 'En tres sedes: Miami, Estados Unidos (alianzas y recaudacion internacional); Quito, Ecuador (operacion de programas y campanas); y Valera, estado Trujillo, Venezuela (nueva sede de asistencia alimentaria, medica y formacion de adultos protectores).'
  },
  {
    q: '¿Como puedo donar a SOS Infante?',
    a: 'Puedes donar en linea con tarjeta desde cualquier pais, hacer una transferencia bancaria en Estados Unidos o Ecuador, o donar en especie (alimentos, medicinas, material escolar) en cualquiera de las tres sedes. Toda donacion recibe recibo y reporte de uso.'
  },
  {
    q: '¿SOS Infante es deducible de impuestos?',
    a: 'Las donaciones procesadas por la sede de Miami se realizan a traves de una entidad sin fines de lucro registrada en Estados Unidos y reciben recibo deducible. En Ecuador se emite comprobante de donacion segun normativa local. Escribe a accion@sosinfante.org para el detalle de tu caso.'
  },
  {
    q: '¿Que hago si sospecho de un caso de violencia contra un nino o nina?',
    a: 'Si hay riesgo inmediato, llama a emergencias: 911 en Estados Unidos, ECU 911 en Ecuador, 911 en Venezuela. Luego escribe a accion@sosinfante.org o al WhatsApp de la sede mas cercana: acompanamos la ruta de denuncia y damos contencion psicologica inicial. Nunca confrontes sola o solo al agresor.'
  },
  {
    q: '¿Como puedo ser voluntario o voluntaria?',
    a: 'Postula en la pagina Involucrate. Buscamos perfiles de psicologia, medicina, trabajo social, diseno, datos, traduccion y logistica. Todo voluntariado con contacto directo con ninez requiere verificacion de antecedentes y formacion previa en salvaguarda.'
  },
  {
    q: '¿Que es un adulto protector?',
    a: 'Un adulto protector es cualquier persona adulta que sabe reconocer senales de violencia contra la ninez, sabe como reaccionar sin revictimizar y conoce la ruta de denuncia. SOS Infante forma adultos protectores en 6 sesiones con seguimiento a 90 dias.'
  },
  {
    q: '¿Que significa Shungo?',
    a: 'Shungo proviene del kichwa y puede significar corazon; tambien se usa para nombrar la ternura, el carino y el amor. Da nombre al programa de asistencia medica, alimentaria y mental de SOS Infante.'
  }
];

// FAQ ampliada
const faqsVoluntariado = [
  {
    q: '¿Cuanto tiempo requiere el voluntariado en SOS Infante?',
    a: 'Depende del area. El voluntariado general aporta el tiempo libre que tenga disponible en actividades puntuales. El staff editorial dedica 1 dia por semana (8 horas), social media medio dia (4 horas) y media 16 horas o mas en linea. Los proyectos Adulto Protector y Shungo Corazon piden 2 dias por semana (16 horas); Artis Terapia 2 dias mas un sabado al mes; Todo Posi 2 dias por semana.'
  },
  {
    q: '¿Que formacion academica necesito para ser voluntario?',
    a: 'Adulto Protector requiere estudios o experiencia intermedia a alta en terapia, procesos legales o docencia. Shungo Corazon requiere perfiles profesionales en alimentacion, salud mental y educacion. Artis Terapia exige experiencia profesional en artes escenicas. Todo Posi no requiere formacion previa: actitud y buena energia.'
  },
  {
    q: '¿Debo presentar documentacion para ser voluntario?',
    a: 'Si. Tras la aplicacion y la entrevista se piden documentos basicos de identidad y la firma de un compromiso de voluntariado por el periodo acordado. Todo contacto directo con ninez suma verificacion de antecedentes y formacion en salvaguarda.'
  },
  {
    q: '¿El voluntariado tiene algun costo?',
    a: 'No obligamos a dar donativos ni pagos mensuales por participar. Existe un valor unico de USD 50 que cubre carnet de identificacion, camiseta y material impreso de uso interno para el nuevo voluntariado.'
  },
];
faqs.push(...faqsVoluntariado);

const blog = [
  {
    slug: 'reapertura-2026',
    titulo: 'SOS Infante reabre: Miami, Quito y Valera',
    fecha: '2026-09-06',
    autor: 'Equipo SOS Infante',
    resumen:
      'Volvemos con tres sedes, cuatro programas activos y un compromiso de transparencia: cada dolar donado se reporta por proyecto y por ciudad.',
    cuerpo: [
      'SOS Infante reabre operaciones en 2026 con una estructura de tres sedes. Miami concentra alianzas y recaudacion internacional, Quito mantiene la operacion de programas y campanas, y Valera (estado Trujillo, Venezuela) abre como nueva base andina.',
      'La decision responde a un dato duro: la violencia contra la ninez no se detiene en las fronteras, y las familias que atendemos se mueven entre Venezuela, Ecuador y Estados Unidos. Un programa que solo existe en una ciudad pierde a la familia en el camino.',
      'En esta etapa priorizamos cuatro programas: Adulto Protector, Shungo Corazon, Todo Posi y Embarazo infantil: cero tolerancia. Cada uno publica su meta anual y su avance en la pagina de transparencia.'
    ]
  },
  {
    slug: 'valera-nueva-sede',
    titulo: 'Por que abrimos en Valera, Venezuela',
    fecha: '2026-09-06',
    autor: 'Equipo SOS Infante',
    resumen:
      'Trujillo concentra ninez en riesgo por migracion, desnutricion y violencia intrafamiliar, con muy poca oferta de atencion psicologica gratuita.',
    cuerpo: [
      'Valera es cruce de rutas migratorias andinas. Muchas ninas y ninos quedan al cuidado de abuelas, tias o vecinos mientras madres y padres migran, una situacion que multiplica el riesgo de violencia y abandono.',
      'La sede arranca con brigadas medicas comunitarias, kits alimentarios y la escuela de adultos protectores, en alianza con parroquias, escuelas y colectivos locales.',
      'El primer ano tiene una meta publica: 1.000 adultos formados y 500 ninas y ninos con atencion medica y psicologica.'
    ]
  },
  {
    slug: 'como-reconocer-senales-violencia-infantil',
    titulo: 'Como reconocer senales de violencia contra la ninez',
    fecha: '2026-09-06',
    autor: 'Equipo SOS Infante',
    resumen:
      'Guia corta y accionable: senales fisicas, conductuales y del entorno, y que hacer en las primeras 24 horas.',
    cuerpo: [
      'Senales fisicas: lesiones sin explicacion coherente, dolor al sentarse o caminar, infecciones recurrentes, perdida de peso subita.',
      'Senales conductuales: retroceso en habitos ya adquiridos, miedo a una persona concreta, conducta sexual no propia de la edad, aislamiento, caida brusca del rendimiento escolar, autolesiones.',
      'Senales del entorno: un adulto que impide que la nina o nino quede a solas con otras personas, secretos entre adulto e infante, regalos o dinero sin explicacion.',
      'Que hacer: escucha sin interrogar, no prometas guardar el secreto, registra por escrito lo que la nina o nino dijo con sus palabras, no confrontes al agresor, activa la ruta de denuncia y busca contencion psicologica. Si hay riesgo inmediato llama a emergencias.'
    ]
  }
];


const identidad = {
  vision: 'Sonamos con ver familias completamente recuperadas de traumas de violencia intrafamiliar. Una a una.',
  lema: 'Una vida, una esperanza. Uno a la vez.',
  promesa: 'Transmitimos en actos sencillos la pureza y la belleza del amor. Trabajamos para ser el soporte emocional, profesional y economico de la vida de infantes en Ecuador, Venezuela y la comunidad latina de Estados Unidos.',
  creencia:
    'Creemos en la construccion del futuro en base a decisiones diarias y al aprendizaje del pasado.',
  valores: [
    { nombre: 'Amor', frase: 'El amor, en nuestra piel', texto: 'Cada intervencion parte del vinculo, no del tramite.' },
    { nombre: 'Fe', frase: 'La fe, en movimiento', texto: 'Sostenemos procesos largos aun cuando el resultado tarda.' },
    { nombre: 'Oportunidades', frase: 'Somos de oportunidad y nuevos inicios', texto: 'Ninguna historia esta cerrada: siempre hay un reinicio posible.' },
    { nombre: 'Servicio', frase: 'El servicio, en practica', texto: 'Presencia en territorio antes que discurso.' },
    { nombre: 'Generosidad', frase: 'Nuestros recursos, sin medida', texto: 'Lo que entra se convierte en atencion directa y se reporta.' }
  ]
};


const voluntariado = {
  intro:
    'SOS Infante tiene varios tipos de involucramiento y areas especificas donde poner tu talento sin descuidar el resto de tu vida. Este es el esquema base de areas y horas.',
  esquema: [
    { area: 'Voluntario general', dedicacion: 'Tiempo libre disponible', nota: 'Actividades puntuales por convocatoria.' },
    { area: 'Staff · Editorial', dedicacion: '1 dia por semana (8 horas)', nota: 'Redaccion y curaduria del blog.' },
    { area: 'Staff · Social media', dedicacion: 'Medio dia por semana (4 horas)', nota: 'Contenido y comunidad.' },
    { area: 'Staff · Media', dedicacion: '16 horas o mas, en linea', nota: 'Video, foto y diseno; actividades variables.' },
    { area: 'Proyecto · Adulto Protector', dedicacion: '2 dias por semana (16 horas)', nota: 'Nivel de estudios o experiencia intermedia a alta.' },
    { area: 'Proyecto · Shungo Corazon', dedicacion: '2 dias por semana (16 horas)', nota: 'Perfiles de salud, nutricion y psicologia.' },
    { area: 'Campana · Artis Terapia', dedicacion: '2 dias por semana (16 horas) y 1 sabado al mes', nota: 'Experiencia profesional en artes escenicas.' },
    { area: 'Campana · Todo Posi', dedicacion: '2 dias por semana (16 horas)', nota: 'No requiere formacion previa: actitud y energia.' }
  ],
  requisitos: [
    'Aplicacion en linea y entrevista.',
    'Documentos basicos de identidad y firma del compromiso del voluntariado por el periodo acordado.',
    'Verificacion de antecedentes y formacion en salvaguarda para todo contacto directo con ninez.',
    'Respeto a ideologias religiosas, politicas y culturales de la comunidad participante.'
  ],
  aporte:
    'No obligamos a dar donativos ni pagos mensuales por participar. Existe un valor unico de USD 50 que cubre el carnet de identificacion, la camiseta y el material impreso de uso interno del nuevo voluntariado.'
};

const tienda = {
  intro:
    'Cada compra en la tienda sostiene los proyectos. El marketplace funciona con produccion bajo demanda y envio a Estados Unidos, Ecuador y Venezuela.',
  categorias: [
    { slug: 'ropa-y-moda', nombre: 'Ropa & Moda', items: 11 },
    { slug: 'casa', nombre: 'Casa', items: 11 },
    { slug: 'donar', nombre: 'Donar', items: 7 },
    { slug: 'servicios', nombre: 'Servicios', items: 2 }
  ],
  productos: [
    { nombre: 'Camiseta One Life One Hope', precio: 25, oferta: 19.99, categoria: 'Ropa & Moda' },
    { nombre: 'Camiseta Better Together', precio: 25, oferta: 19.99, categoria: 'Ropa & Moda' },
    { nombre: 'Gorra mano SOS', precio: 25, categoria: 'Ropa & Moda' },
    { nombre: 'Gorra Uno a la vez', precio: 25, oferta: 19.99, categoria: 'Ropa & Moda' },
    { nombre: 'Beanie hat', precio: 25, oferta: 19.99, categoria: 'Ropa & Moda' },
    { nombre: 'Manta gris', precio: 19.99, categoria: 'Casa' },
    { nombre: 'Velas (3 unidades)', precio: 4.99, categoria: 'Casa' },
    { nombre: 'Vela con aroma (Fresa salvaje)', precio: 6.99, oferta: 5.99, categoria: 'Casa' },
    { nombre: 'Taza One Life One Hope', precio: 14.99, oferta: 11.99, categoria: 'Casa' },
    { nombre: 'Estuche de iPhone', precio: 19.99, categoria: 'Casa' },
    { nombre: 'Apadrina un kit alimentario', precio: 35, categoria: 'Donar' },
    { nombre: 'Patrocina un taller Adulto Protector', precio: 150, categoria: 'Servicios' }
  ]
};

const legales = [
  {
    slug: 'privacidad',
    titulo: 'Politica de privacidad',
    resumen: 'Como SOS Infante recopila, usa y protege tu informacion personal en www.sosinfante.org y sus subdominios.',
    secciones: [
      ['Que recopilamos', 'Datos que entregas de forma voluntaria en formularios de donacion, voluntariado, contacto y suscripcion: nombre, correo, telefono, ciudad y perfil profesional. Datos tecnicos automaticos: direccion IP, tipo de dispositivo, navegador, paginas visitadas y origen del trafico.'],
      ['Para que lo usamos', 'Procesar donaciones y emitir recibos; gestionar postulaciones de voluntariado; responder consultas; enviar el boletin cuando lo autorizas; medir el desempeno del sitio de forma agregada.'],
      ['Cookies', 'Usamos cookies propias para preferencias basicas y cookies de analitica para entender el uso del sitio. Puedes bloquearlas desde tu navegador sin perder el acceso al contenido.'],
      ['Con quien lo compartimos', 'Solo con proveedores necesarios para operar: pasarela de pagos, correo transaccional, analitica y alojamiento. No vendemos ni cedemos datos personales con fines comerciales.'],
      ['Ninez', 'No solicitamos datos personales a menores de edad sin consentimiento de su representante. Las imagenes de ninas y ninos se publican solo con consentimiento informado y con proteccion del rostro por defecto.'],
      ['Tus derechos', 'Puedes pedir acceso, rectificacion, eliminacion o portabilidad de tus datos escribiendo a accion@sosinfante.org. Respondemos en un plazo maximo de 30 dias.']
    ]
  },
  {
    slug: 'terminos',
    titulo: 'Terminos de servicio',
    resumen: 'Condiciones de uso del sitio, la tienda y los programas de SOS Infante.',
    secciones: [
      ['Uso del sitio', 'El contenido de www.sosinfante.org es informativo y no sustituye atencion medica, psicologica o legal profesional. Ante riesgo inmediato para una nina, nino o adolescente, llama a emergencias.'],
      ['Donaciones', 'Las donaciones son voluntarias y no reembolsables salvo error de cobro comprobado. Cada donacion recibe comprobante y se asigna al proyecto o fondo indicado por la persona donante.'],
      ['Tienda', 'Los productos se venden para financiar los proyectos. Precios en dolares estadounidenses. Los tiempos de entrega dependen del proveedor de produccion y del destino.'],
      ['Propiedad intelectual', 'Marca, logotipo, campanas y materiales son propiedad de SOS Infante. Los kits educativos pueden reproducirse sin fines de lucro citando la fuente.'],
      ['Voluntariado', 'La participacion como voluntariado no genera relacion laboral. Se rige por el compromiso firmado y la politica de salvaguarda.']
    ]
  },
  {
    slug: 'devoluciones',
    titulo: 'Retornos y devoluciones',
    resumen: 'Politica de retornos y reembolsos del marketplace de SOS Infante.',
    secciones: [
      ['Plazo', 'Tienes 14 dias calendario desde la recepcion para solicitar un retorno de productos fisicos en estado original y sin uso.'],
      ['Como solicitarlo', 'Escribe a accion@sosinfante.org con numero de pedido, motivo y fotografias. Respondemos en 72 horas habiles con la guia de retorno.'],
      ['Reembolsos', 'Aprobada la devolucion, el reembolso se emite al medio de pago original en un plazo de 10 dias habiles. Los costos de envio no son reembolsables salvo error nuestro o producto defectuoso.'],
      ['Excepciones', 'No aplican retornos sobre donaciones, apadrinamientos, servicios ya prestados ni productos personalizados.'],
      ['Producto defectuoso', 'Si el producto llega danado o incorrecto, lo reponemos sin costo o reembolsamos el total, a tu eleccion.']
    ]
  }
];

module.exports = { site, sedes, proyectos, cifras, formasDeApoyo, faqs, blog, identidad, voluntariado, tienda, legales };
