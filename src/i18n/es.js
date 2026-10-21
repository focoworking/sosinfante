// Contenido central del sitio SOS Infante. Una sola fuente de verdad para
// paginas, menus, datos estructurados, sitemap y feeds para motores/LLM.

const site = {
  name: 'SOS Infante',
  legalName: 'SOS Infante — Fundación por la niñez sin violencia',
  domain: 'https://www.sosinfante.org',
  tagline: 'Rompemos ciclos de violencia contra la niñez',
  description:
    'SOS Infante es una organización sin fines de lucro que previene y atiende la violencia física, psicológica y sexual contra niñas, niños y adolescentes. Opera en Miami (EE.UU.), Quito (Ecuador) y Valera (Venezuela).',
  founded: '2018',
  email: 'accion@sosinfante.org',
  telefono: '+1 305 988 1925',
  whatsapp: '+13059881925',
  direccionUS: '3800 Inverrary Blvd, Fort Lauderdale, FL 33319, Estados Unidos',
  horario: 'Lunes a viernes, 08h00 a 17h00',
  color: '#1EB5C4',
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
    rol: 'Sede de alianzas, recaudación internacional y voluntariado corporativo',
    apertura: 'Reapertura 2026',
    region: 'FL',
    lat: 25.7617,
    lng: -80.1918,
    resumen:
      'Miami es el nodo diáspora: conecta a familias latinas, empresas y fundaciones de Florida con los programas de protección en Ecuador y Venezuela.',
    programas: ['Adulto Protector en escuelas bilingues', 'Alianzas corporativas', 'Fondo de emergencia regional'],
    contacto: 'accion@sosinfante.org',
    idioma: 'es / en'
  },
  {
    slug: 'quito',
    ciudad: 'Quito',
    pais: 'Ecuador',
    bandera: '🇪🇨',
    rol: 'Sede operativa historica: prevención, atención psicológica y campañas',
    apertura: 'Operación continua desde 2018 · relanzamiento 2026',
    region: 'Pichincha',
    lat: -0.1807,
    lng: -78.4678,
    resumen:
      'Desde Quito coordinamos talleres en unidades educativas, atención psicológica a sobrevivientes y las campañas públicas de prevención.',
    programas: ['Shungo Corazón', 'Todo Posi', 'Adulto Protector', 'Embarazo infantil: cero tolerancia'],
    contacto: 'accion@sosinfante.org',
    idioma: 'es'
  },
  {
    slug: 'valera',
    ciudad: 'Valera',
    pais: 'Venezuela',
    bandera: '🇻🇪',
    rol: 'Nueva sede: asistencia alimentaria, médica y escuela de adultos protectores',
    apertura: 'Apertura 2026',
    region: 'Trujillo',
    lat: 9.3167,
    lng: -70.6,
    resumen:
      'Valera (estado Trujillo) abre como base andina para atender niñez en riesgo por migración, desnutrición y violencia intrafamiliar.',
    programas: ['Shungo Corazón Venezuela', 'Brigadas médicas comunitarias', 'Red de adultos protectores'],
    contacto: 'accion@sosinfante.org',
    idioma: 'es'
  }
];

const proyectos = [
  {
    slug: 'adulto-protector',
    nombre: 'Adulto Protector',
    claim: '¿Imaginas un mundo con adultos protectores?',
    tipo: 'Campaña de prevención',
    sedes: ['miami', 'quito', 'valera'],
    resumen:
      'Formación de madres, padres, docentes y cuidadores para detectar, frenar y denunciar la violencia contra la niñez antes de que ocurra.',
    detalle:
      'El promedio de familias latinas que viven realidades de abandono, alcoholismo, violencia intrafamiliar, agresión verbal, física y psicológica es alto. Adulto Protector entrega un método de 6 sesiones: señales de alerta, lenguaje del cuidado, rutas de denuncia, manejo de crisis, disciplina sin violencia y sostenimiento comunitario.',
    metricas: ['6 sesiones por cohorte', '1 facilitador cada 25 adultos', 'Seguimiento a 90 días'],
    kpi: 'adultos formados'
  },
  {
    slug: 'shungo-corazon',
    nombre: 'Shungo Corazón',
    claim: 'Asistencia médica, alimentaria y mental a infantes',
    tipo: 'Programa de atención directa',
    sedes: ['quito', 'valera'],
    resumen:
      '«Shungo» significa corazón en kichwa, lengua originaria del Ecuador, y nombra también la ternura y el cariño. Atención integral a niñas y niños en situación de vulnerabilidad.',
    detalle:
      'Brigadas que combinan control médico y nutricional, entrega de alimentos, y terapia psicológica breve para infantes expuestos a violencia. Se ejecuta con unidades educativas y centros comunitarios aliados.',
    metricas: ['Atención médica + nutricional', 'Terapia psicológica breve (8 sesiones)', 'Kits alimentarios mensuales'],
    kpi: 'niñas y niños atendidos'
  },
  {
    slug: 'todo-posi',
    nombre: 'Todo Posi',
    claim: 'Campaña de salud mental y actitud protectora',
    tipo: 'Campaña de comunicación',
    sedes: ['miami', 'quito'],
    resumen:
      'Campaña positiva que convierte la conversación sobre violencia en una práctica cotidiana de cuidado, hecha con y para adolescentes.',
    detalle:
      'Contenido creado con adolescentes: piezas para redes, retos escolares y kit descargable para docentes. Objetivo: normalizar pedir ayuda y quitar la carga de vergüenza a quien denuncia.',
    metricas: ['Kit docente descargable', 'Retos escolares', 'Contenido co-creado con adolescentes'],
    kpi: 'adolescentes alcanzados'
  },
  {
    slug: 'artis-terapia',
    nombre: 'Artis Terapia',
    claim: 'El arte como herramienta de identificación y tratamiento',
    tipo: 'Campaña de arteterapia',
    sedes: ['quito', 'valera'],
    resumen:
      'Campaña que impulsa el arte para identificar, tratar y prevenir traumas psicologicos en infantes.',
    detalle:
      'Talleres de artes escénicas, plastica y musica facilitados por profesionales del arte junto a psicología. El arte abre la puerta a lo que la niña o el niño todavia no puede nombrar, y da un canal seguro para procesarlo. Requiere facilitadores con experiencia profesional en artes escénicas.',
    metricas: ['2 días por semana (16 horas) y 1 sabado al mes', 'Duplas arte + psicología', 'Cierre con muestra comunitaria'],
    kpi: 'infantes en proceso de arteterapia'
  },
  {
    slug: 'embarazo-infantil',
    nombre: 'Embarazo infantil: cero tolerancia',
    claim: 'Cada minuto importa',
    tipo: 'Incidencia y datos',
    sedes: ['quito', 'valera'],
    resumen:
      'Investigación, datos abiertos y acompañamiento legal frente al embarazo en niñas menores de 14 años, que en la ley es violencia sexual.',
    detalle:
      'Publicamos cifras verificables, acompañamos rutas de denuncia y formamos periodistas y docentes para nombrar el hecho por su nombre: un embarazo en una niña menor de 14 años es consecuencia de un delito.',
    metricas: ['Datos abiertos por provincia', 'Acompañamiento legal', 'Guia para prensa'],
    kpi: 'casos acompañados'
  }
];

const cifras = [
  {
    dato: '4 de cada 10',
    texto: 'mujeres ha manifestado ser víctima de algún tipo de atentado de naturaleza sexual a lo largo de su vida.',
    fuente: 'Encuesta nacional de violencia de género, Ecuador'
  },
  {
    dato: '1 de cada 4',
    texto: 'niños menores de 5 años (cerca de 176 millones) vive en un hogar donde su madre es víctima de violencia basada en género.',
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
    titulo: 'Donación mensual',
    monto: 'desde USD 10',
    texto: 'Sostiene la atención psicológica y los kits alimentarios de Shungo Corazón todo el año.',
    cta: 'Donar mensual',
    href: 'dona#mensual'
  },
  {
    titulo: 'Donación única',
    monto: 'el monto que decidas',
    texto: 'Cubre brigadas médicas y materiales de los talleres Adulto Protector.',
    cta: 'Donar una vez',
    href: 'dona#unica'
  },
  {
    titulo: 'Empresas y fundaciones',
    monto: 'alianzas desde USD 2.500',
    texto: 'Patrocinio de cohortes completas de Adulto Protector con reporte de impacto trimestral.',
    cta: 'Hablar con alianzas',
    href: 'contacto#alianzas'
  },
  {
    titulo: 'Voluntariado',
    monto: 'tu tiempo',
    texto: 'Psicología, medicina, diseño, datos, traducción y logística en las tres sedes.',
    cta: 'Postular',
    href: 'voluntariado'
  }
];

const faqs = [
  {
    q: '¿Que es SOS Infante?',
    a: 'SOS Infante es una organización sin fines de lucro que previene y atiende la violencia física, psicológica y sexual contra niñas, niños y adolescentes. Trabaja con familias, escuelas y comunidades en Miami (Estados Unidos), Quito (Ecuador) y Valera (Venezuela).'
  },
  {
    q: '¿En que ciudades opera SOS Infante en 2026?',
    a: 'En tres sedes: Miami, Estados Unidos (alianzas y recaudación internacional); Quito, Ecuador (operación de programas y campañas); y Valera, estado Trujillo, Venezuela (nueva sede de asistencia alimentaria, médica y formación de adultos protectores).'
  },
  {
    q: '¿Como puedo donar a SOS Infante?',
    a: 'Puedes donar en linea con tarjeta desde cualquier país, hacer una transferencia bancaria en Estados Unidos o Ecuador, o donar en especie (alimentos, medicinas, material escolar) en cualquiera de las tres sedes. Toda donación recibe recibo y reporte de uso.'
  },
  {
    q: '¿SOS Infante es deducible de impuestos?',
    a: 'Las donaciones procesadas por la sede de Miami se realizan a traves de una entidad sin fines de lucro registrada en Estados Unidos y reciben recibo deducible. En Ecuador se emite comprobante de donación según normativa local. Escribe a accion@sosinfante.org para el detalle de tu caso.'
  },
  {
    q: '¿Que hago si sospecho de un caso de violencia contra un niño o niña?',
    a: 'Si hay riesgo inmediato, llama a emergencias: 911 en Estados Unidos, ECU 911 en Ecuador, 911 en Venezuela. Luego escribe a accion@sosinfante.org o al WhatsApp de la sede mas cercana: acompañamos la ruta de denuncia y damos contención psicológica inicial. Nunca confrontes sola o solo al agresor.'
  },
  {
    q: '¿Como puedo ser voluntario o voluntaria?',
    a: 'Postula en la pagina Involucrate. Buscamos perfiles de psicología, medicina, trabajo social, diseño, datos, traducción y logística. Todo voluntariado con contacto directo con niñez requiere verificación de antecedentes y formación previa en salvaguarda.'
  },
  {
    q: '¿Que es un adulto protector?',
    a: 'Un adulto protector es cualquier persona adulta que sabe reconocer señales de violencia contra la niñez, sabe como reaccionar sin revictimizar y conoce la ruta de denuncia. SOS Infante forma adultos protectores en 6 sesiones con seguimiento a 90 días.'
  },
  {
    q: '¿Que significa Shungo?',
    a: 'Shungo significa corazón en kichwa, lengua originaria del Ecuador hablada por los pueblos andinos; también se usa para nombrar la ternura, el cariño y el amor. Da nombre al programa de asistencia médica, alimentaria y mental de SOS Infante.'
  }
];

// FAQ ampliada
const faqsVoluntariado = [
  {
    q: '¿Cuanto tiempo requiere el voluntariado en SOS Infante?',
    a: 'Depende del área. El voluntariado general aporta el tiempo libre que tenga disponible en actividades puntuales. El staff editorial dedica 1 día por semana (8 horas), social media medio día (4 horas) y media 16 horas o mas en linea. Los proyectos Adulto Protector y Shungo Corazón piden 2 días por semana (16 horas); Artis Terapia 2 días mas un sabado al mes; Todo Posi 2 días por semana.'
  },
  {
    q: '¿Que formación academica necesito para ser voluntario?',
    a: 'Adulto Protector requiere estudios o experiencia intermedia a alta en terapia, procesos legales o docencia. Shungo Corazón requiere perfiles profesionales en alimentación, salud mental y educación. Artis Terapia exige experiencia profesional en artes escénicas. Todo Posi no requiere formación previa: actitud y buena energía.'
  },
  {
    q: '¿Debo presentar documentación para ser voluntario?',
    a: 'Si. Tras la aplicación y la entrevista se piden documentos básicos de identidad y la firma de un compromiso de voluntariado por el período acordado. Todo contacto directo con niñez suma verificación de antecedentes y formación en salvaguarda.'
  },
  {
    q: '¿El voluntariado tiene algún costo?',
    a: 'No obligamos a dar donativos ni pagos mensuales por participar. Existe un valor único de USD 50 que cubre carnet de identificación, camiseta y material impreso de uso interno para el nuevo voluntariado.'
  },
];
faqs.push(...faqsVoluntariado);

const blog = [
  {
    id: 'reapertura',
    slug: 'reapertura-2026',
    titulo: 'SOS Infante reabre: Miami, Quito y Valera',
    fecha: '2026-09-06',
    autor: 'Equipo SOS Infante',
    resumen:
      'Volvemos con tres sedes, cinco programas activos y un compromiso de transparencia: cada dólar donado se reporta por proyecto y por ciudad.',
    cuerpo: [
      'SOS Infante reabre operaciones en 2026 con una estructura de tres sedes. Miami concentra alianzas y recaudación internacional, Quito mantiene la operación de programas y campañas, y Valera (estado Trujillo, Venezuela) abre como nueva base andina.',
      'La decisión responde a un dato duro: la violencia contra la niñez no se detiene en las fronteras, y las familias que atendemos se mueven entre Venezuela, Ecuador y Estados Unidos. Un programa que solo existe en una ciudad pierde a la familia en el camino.',
      'En esta etapa priorizamos cinco programas: Adulto Protector, Shungo Corazón, Todo Posi, Artis Terapia y Embarazo infantil: cero tolerancia. Cada uno publica su meta anual y su avance en la página de transparencia.'
    ]
  },
  {
    id: 'valera',
    slug: 'valera-nueva-sede',
    titulo: 'Por que abrimos en Valera, Venezuela',
    fecha: '2026-09-06',
    autor: 'Equipo SOS Infante',
    resumen:
      'Trujillo concentra niñez en riesgo por migración, desnutrición y violencia intrafamiliar, con muy poca oferta de atención psicológica gratuita.',
    cuerpo: [
      'Valera es cruce de rutas migratorias andinas. Muchas niñas y niños quedan al cuidado de abuelas, tias o vecinos mientras madres y padres migran, una situación que multiplica el riesgo de violencia y abandono.',
      'La sede arranca con brigadas médicas comunitarias, kits alimentarios y la escuela de adultos protectores, en alianza con parroquias, escuelas y colectivos locales.',
      'El primer año tiene una meta publica: 1.000 adultos formados y 500 niñas y niños con atención médica y psicológica.'
    ]
  },
  {
    id: 'senales',
    slug: 'como-reconocer-senales-violencia-infantil',
    titulo: 'Como reconocer señales de violencia contra la niñez',
    fecha: '2026-09-06',
    autor: 'Equipo SOS Infante',
    resumen:
      'Guia corta y accionable: señales fisicas, conductuales y del entorno, y que hacer en las primeras 24 horas.',
    cuerpo: [
      'Señales fisicas: lesiones sin explicación coherente, dolor al sentarse o caminar, infecciones recurrentes, perdida de peso subita.',
      'Señales conductuales: retroceso en habitos ya adquiridos, miedo a una persona concreta, conducta sexual no propia de la edad, aislamiento, caida brusca del rendimiento escolar, autolesiones.',
      'Señales del entorno: un adulto que impide que la niña o niño quede a solas con otras personas, secretos entre adulto e infante, regalos o dinero sin explicación.',
      'Que hacer: escucha sin interrogar, no prometas guardar el secreto, registra por escrito lo que la niña o niño dijo con sus palabras, no confrontes al agresor, activa la ruta de denuncia y busca contención psicológica. Si hay riesgo inmediato llama a emergencias.'
    ]
  }
];


const identidad = {
  vision: 'Sonamos con ver familias completamente recuperadas de traumas de violencia intrafamiliar. Una a una.',
  lema: 'Una vida, una esperanza. Uno a la vez.',
  promesa: 'Transmitimos en actos sencillos la pureza y la belleza del amor. Trabajamos para ser el soporte emocional, profesional y económico de la vida de infantes en Ecuador, Venezuela y la comunidad latina de Estados Unidos.',
  creencia:
    'Creemos en la construcción del futuro en base a decisiones diarias y al aprendizaje del pasado.',
  valores: [
    { nombre: 'Amor', frase: 'El amor, en nuestra piel', texto: 'Cada intervencion parte del vinculo, no del tramite.' },
    { nombre: 'Fe', frase: 'La fe, en movimiento', texto: 'Sostenemos procesos largos aun cuando el resultado tarda.' },
    { nombre: 'Oportunidades', frase: 'Somos de oportunidad y nuevos inicios', texto: 'Ninguna historia esta cerrada: siempre hay un reinicio posible.' },
    { nombre: 'Servicio', frase: 'El servicio, en práctica', texto: 'Presencia en territorio antes que discurso.' },
    { nombre: 'Generosidad', frase: 'Nuestros recursos, sin medida', texto: 'Lo que entra se convierte en atención directa y se reporta.' }
  ]
};


const voluntariado = {
  intro:
    'SOS Infante tiene varios tipos de involucramiento y áreas especificas donde poner tu talento sin descuidar el resto de tu vida. Este es el esquema base de áreas y horas.',
  esquema: [
    { area: 'Voluntario general', dedicacion: 'Tiempo libre disponible', nota: 'Actividades puntuales por convocatoria.' },
    { area: 'Staff · Editorial', dedicacion: '1 día por semana (8 horas)', nota: 'Redacción y curaduria del blog.' },
    { area: 'Staff · Social media', dedicacion: 'Medio día por semana (4 horas)', nota: 'Contenido y comunidad.' },
    { area: 'Staff · Media', dedicacion: '16 horas o mas, en linea', nota: 'Video, foto y diseño; actividades variables.' },
    { area: 'Proyecto · Adulto Protector', dedicacion: '2 días por semana (16 horas)', nota: 'Nivel de estudios o experiencia intermedia a alta.' },
    { area: 'Proyecto · Shungo Corazón', dedicacion: '2 días por semana (16 horas)', nota: 'Perfiles de salud, nutrición y psicología.' },
    { area: 'Campaña · Artis Terapia', dedicacion: '2 días por semana (16 horas) y 1 sabado al mes', nota: 'Experiencia profesional en artes escénicas.' },
    { area: 'Campaña · Todo Posi', dedicacion: '2 días por semana (16 horas)', nota: 'No requiere formación previa: actitud y energía.' }
  ],
  requisitos: [
    'Aplicación en linea y entrevista.',
    'Documentos básicos de identidad y firma del compromiso del voluntariado por el período acordado.',
    'Verificación de antecedentes y formación en salvaguarda para todo contacto directo con niñez.',
    'Respeto a ideologias religiosas, políticas y culturales de la comunidad participante.'
  ],
  aporte:
    'No obligamos a dar donativos ni pagos mensuales por participar. Existe un valor único de USD 50 que cubre el carnet de identificación, la camiseta y el material impreso de uso interno del nuevo voluntariado.'
};

const tienda = {
  intro:
    'Cada compra en la tienda sostiene los proyectos. El marketplace funciona con producción bajo demanda y envio a Estados Unidos, Ecuador y Venezuela.',
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

const LEGAL_ACTUALIZADO = '2026-09-06'; // fecha de la ultima revision del texto legal

const legales = [
  {
    slug: 'privacidad',
    titulo: 'Política de privacidad',
    resumen: 'Como SOS Infante recopila, usa y protege tu información personal en www.sosinfante.org y sus subdominios.',
    secciones: [
      ['Que recopilamos', 'Datos que entregas de forma voluntaria en formularios de donación, voluntariado, contacto y suscripción: nombre, correo, teléfono, ciudad y perfil profesional. Datos tecnicos automaticos: dirección IP, tipo de dispositivo, navegador, paginas visitadas y origen del tráfico.'],
      ['Para que lo usamos', 'Procesar donaciones y emitir recibos; gestionar postulaciones de voluntariado; responder consultas; enviar el boletin cuando lo autorizas; medir el desempeno del sitio de forma agregada.'],
      ['Cookies', 'Usamos cookies propias para preferencias basicas y cookies de analitica para entender el uso del sitio. Puedes bloquearlas desde tu navegador sin perder el acceso al contenido.'],
      ['Con quien lo compartimos', 'Solo con proveedores necesarios para operar: pasarela de pagos, correo transaccional, analitica y alojamiento. No vendemos ni cedemos datos personales con fines comerciales.'],
      ['Niñez', 'No solicitamos datos personales a menores de edad sin consentimiento de su representante. Las imagenes de niñas y niños se publican solo con consentimiento informado y con protección del rostro por defecto.'],
      ['Tus derechos', 'Puedes pedir acceso, rectificacion, eliminacion o portabilidad de tus datos escribiendo a accion@sosinfante.org. Respondemos en un plazo máximo de 30 días.']
    ]
  },
  {
    slug: 'terminos',
    titulo: 'Terminos de servicio',
    resumen: 'Condiciones de uso del sitio, la tienda y los programas de SOS Infante.',
    secciones: [
      ['Uso del sitio', 'El contenido de www.sosinfante.org es informativo y no sustituye atención médica, psicológica o legal profesional. Ante riesgo inmediato para una niña, niño o adolescente, llama a emergencias.'],
      ['Donaciones', 'Las donaciones son voluntarias y no reembolsables salvo error de cobro comprobado. Cada donación recibe comprobante y se asigna al proyecto o fondo indicado por la persona donante.'],
      ['Tienda', 'Los productos se venden para financiar los proyectos. Precios en dólares estadounidenses. Los tiempos de entrega dependen del proveedor de producción y del destino.'],
      ['Propiedad intelectual', 'Marca, logotipo, campañas y materiales son propiedad de SOS Infante. Los kits educativos pueden reproducirse sin fines de lucro citando la fuente.'],
      ['Voluntariado', 'La participación como voluntariado no genera relación laboral. Se rige por el compromiso firmado y la política de salvaguarda.']
    ]
  },
  {
    slug: 'devoluciones',
    titulo: 'Retornos y devoluciones',
    resumen: 'Política de retornos y reembolsos del marketplace de SOS Infante.',
    secciones: [
      ['Plazo', 'Tienes 14 días calendario desde la recepción para solicitar un retorno de productos fisicos en estado original y sin uso.'],
      ['Como solicitarlo', 'Escribe a accion@sosinfante.org con número de pedido, motivo y fotografias. Respondemos en 72 horas hábiles con la guia de retorno.'],
      ['Reembolsos', 'Aprobada la devolución, el reembolso se emite al medio de pago original en un plazo de 10 días hábiles. Los costos de envio no son reembolsables salvo error nuestro o producto defectuoso.'],
      ['Excepciones', 'No aplican retornos sobre donaciones, apadrinamientos, servicios ya prestados ni productos personalizados.'],
      ['Producto defectuoso', 'Si el producto llega dañado o incorrecto, lo reponemos sin costo o reembolsamos el total, a tu eleccion.']
    ]
  }
];


const embudoVoluntariado = [
  { paso: '01', titulo: 'Aplicas en linea', texto: 'Formulario de 2 minutos: quien eres, que sabes hacer y cuanto tiempo tienes. Sin CV obligatorio.' },
  { paso: '02', titulo: 'Entrevista', texto: 'Presencial o por videollamada segun donde estes en el mundo. Conversamos area, horario y expectativas.' },
  { paso: '03', titulo: 'Documentos y salvaguarda', texto: 'Documentos basicos de identidad, firma del compromiso y verificacion de antecedentes si hay contacto con ninez.' },
  { paso: '04', titulo: 'Induccion y arranque', texto: 'Formacion inicial en salvaguarda y metodo del proyecto. Entras a tu equipo con un mentor asignado.' }
];

const confianza = [
  { titulo: 'Metas públicas', texto: 'Publicamos la meta anual de cada proyecto y su avance real cada trimestre, también cuando vamos abajo.', href: 'transparencia' },
  { titulo: 'Salvaguarda infantil', texto: 'Verificación de antecedentes, política de dos adultos y canal de denuncias con respuesta en 72 horas.', href: 'transparencia#salvaguarda' },
  { titulo: '78% a atención directa', texto: 'De cada dólar, 78 centavos van a brigadas, terapia, alimentos y materiales.', href: 'transparencia' }
];

const impacto = [
  { n: '5', l: 'proyectos activos' },
  { n: '3', l: 'países: EE.UU., Ecuador, Venezuela' },
  { n: '3.000', l: 'adultos protectores, meta 2026' },
  { n: '1.200', l: 'niñas y niños atendidos, meta 2026' }
];


/* ===== Estructura institucional ===== */
const departamentos = [
  {
    slug: 'direccion',
    nombre: 'Dirección Ejecutiva',
    mision: 'Sostener la estrategia, el presupuesto y la relación con el directorio y los aliados.',
    entregables: ['Plan anual y presupuesto por sede', 'Reporte trimestral de impacto', 'Relación con directorio y auditoría'],
    roles: ['Dirección ejecutiva', 'Asistencia de dirección', 'Control de gestión']
  },
  {
    slug: 'programas',
    nombre: 'Programas y Territorio',
    mision: 'Ejecutar los proyectos en campo con calidad y medir resultados reales, no actividades.',
    entregables: ['Cohortes de Adulto Protector', 'Brigadas Shungo Corazón', 'Linea base y medicion por beneficiario'],
    roles: ['Coordinacion de programas', 'Facilitadores', 'Trabajo social', 'Medicina y nutricion']
  },
  {
    slug: 'salvaguarda',
    nombre: 'Salvaguarda y Psicología',
    mision: 'Proteger a cada niña, niño y adolescente que entra en contacto con la organización, y sostener la atención psicológica.',
    entregables: ['Política de salvaguarda y verificación de antecedentes', 'Canal de denuncias con respuesta en 72 horas', 'Terapia breve y derivaciones'],
    roles: ['Psicología clinica', 'Oficial de salvaguarda', 'Asesoria legal']
  },
  {
    slug: 'desarrollo',
    nombre: 'Desarrollo y Alianzas',
    mision: 'Conseguir y retener los ingresos: donantes mensuales, empresas, fundaciones y cooperación.',
    entregables: ['Programa de donantes mensuales', 'Portafolio de patrocinios corporativos', 'Postulaciones a fondos y grants'],
    roles: ['Fundraising', 'Alianzas corporativas', 'Redaccion de propuestas', 'Gestión de donantes']
  },
  {
    slug: 'comunicacion',
    nombre: 'Comunicación y Marca',
    mision: 'Convertir la operación en relato público y el relato en acción: donar, postular, difundir.',
    entregables: ['Calendario editorial y de campañas', 'Kit de prensa y vocerias', 'Contenido con consentimiento y rostros protegidos'],
    roles: ['Editorial', 'Social media', 'Diseño', 'Audiovisual', 'Traducción es/en']
  },
  {
    slug: 'marketplace',
    nombre: 'Marketplace y Operaciones',
    mision: 'Que el centro de acopio de Miami y la tienda financien la operación y abastezcan a Ecuador y Venezuela.',
    entregables: ['Acopio, clasificación y despacho', 'Tienda en linea y catalogo de impacto', 'Tramites aduaneros y trazabilidad de cada caja'],
    roles: ['Logística y bodega', 'Comercio electronico', 'Compras y proveedores', 'Voluntariado de clasificación']
  },
  {
    slug: 'datos',
    nombre: 'Datos, Tecnología e IA',
    mision: 'Que cada decision se tome con datos y que la tecnología le devuelva horas al equipo.',
    entregables: ['CRM único de donantes y voluntariado', 'Tablero de metas por proyecto y sede', 'Automatizaciones e IA operativa'],
    roles: ['Analitica de datos', 'Desarrollo web', 'Automatizacion / IA', 'Soporte CRM']
  }
];

const gobernanza = [
  ['Directorio', 'Aprueba estrategia, presupuesto y política de salvaguarda. Se reune trimestralmente.'],
  ['Dirección ejecutiva', 'Ejecuta el plan y responde ante el directorio con indicadores publicos.'],
  ['Comite de salvaguarda', 'Independiente de programas. Recibe y resuelve denuncias en 72 horas.'],
  ['Auditoría externa', 'Revision anual de estados financieros y publicacion del resumen en la web.'],
  ['Consejo consultivo', 'Voluntariado experto en niñez, salud mental, logística y tecnología.']
];

/* ===== Centro de acopio Miami ===== */
const acopio = {
  ciudad: 'Miami / Fort Lauderdale',
  direccion: '3800 Inverrary Blvd, Fort Lauderdale, FL 33319',
  horario: 'Lunes a viernes, 08h00 a 17h00',
  promesa: 'Lo que entra en Miami termina en manos de una familia en Ecuador o Venezuela, o se convierte en el dinero que paga ese envio.',
  aceptamos: [
    'Ropa y calzado infantil en buen estado, limpio y sin roturas',
    'Útiles escolares y mochilas',
    'Juguetes nuevos o en excelente estado, sin piezas faltantes',
    'Alimentos no perecibles sellados y con fecha vigente (mínimo 6 meses)',
    'Artículos de higiene y pañales sellados',
    'Equipamiento médico básico no invasivo, nuevo y en empaque original'
  ],
  noAceptamos: [
    'Medicamentos vencidos, abiertos o sin receta autorizada',
    'Ropa dañada, húmeda o con manchas',
    'Muebles voluminosos y electrodomésticos grandes',
    'Vehículos (no aplican a exención aduanera salvo uso especial)',
    'Alimentos preparados o perecibles'
  ],
  flujo: [
    ['01', 'Recepción', 'Registro de cada entrega con donante, tipo y peso. Recibo deducible en el acto.'],
    ['02', 'Clasificación', 'Voluntariado separa en tres destinos: envio humanitario, venta en tienda o reciclaje responsable.'],
    ['03', 'Consolidación', 'Palet por destino, inventario valorizado y documentación de donación.'],
    ['04', 'Despacho', 'Carga aérea o maritima desde Miami a Guayaquil/Quito y a Venezuela via aliados locales.'],
    ['05', 'Nacionalización', 'Tramite de exención de tributos ante SENAE via Ecuapass y retiro por la sede local.'],
    ['06', 'Entrega y trazabilidad', 'Entrega a familias con acta y foto sin rostro; el donante recibe el reporte de su caja.']
  ],
  nota:
    'En Ecuador, las donaciones del exterior a favor de instituciones privadas sin fines de lucro están exentas de tributos al comercio exterior (salvo tasas por servicios aduaneros) cuando la entidad esta registrada en el RUC y presenta la solicitud en Ecuapass; el marco exige convenio de cooperación con institución del sector publico. Fuente: SENAE.'
};

/* ===== Modelo de ingresos ===== */
const lineasIngreso = [
  { linea: 'Donantes mensuales', margen: '≈ 95 %', rol: 'Ingreso predecible que cubre nomina y programas base.', meta: 'USD 120.000 / año' },
  { linea: 'Catalogo de impacto (tienda)', margen: '≈ 85 %', rol: 'Compra con destino concreto: kit alimentario, kit escolar, sesión de terapia.', meta: 'USD 90.000 / año' },
  { linea: 'Reventa de donaciones en especie (Miami)', margen: '≈ 70 %', rol: 'Inventario donado, sin costo de mercaderia; financia el flete a Ecuador y Venezuela.', meta: 'USD 150.000 / año' },
  { linea: 'Merchandising bajo demanda', margen: '20–40 %', rol: 'Marca y pertenencia mas que caja; cero inventario, cero riesgo.', meta: 'USD 30.000 / año' },
  { linea: 'Alianzas corporativas y grants', margen: '≈ 90 %', rol: 'Patrocinio de cohortes completas y de la operación logística.', meta: 'USD 180.000 / año' },
  { linea: 'Servicios de formación a empresas y escuelas', margen: '≈ 60 %', rol: 'Talleres Adulto Protector pagados que subsidian los gratuitos.', meta: 'USD 60.000 / año' }
];

const catalogoImpacto = [
  { nombre: 'Kit alimentario familiar (1 mes)', precio: 35, entrega: 'Quito y Valera', detalle: 'Arroz, legumbres, aceite, atun, avena y leche en polvo para una familia de cuatro.' },
  { nombre: 'Kit escolar completo', precio: 25, entrega: 'Quito y Valera', detalle: 'Mochila, cuadernos, útiles y uniforme básico para un año lectivo.' },
  { nombre: 'Sesión de terapia psicológica', precio: 40, entrega: 'Quito y Valera', detalle: 'Una sesión de terapia breve con psicologa especializada en trauma infantil.' },
  { nombre: 'Beca de arteterapia (1 mes)', precio: 120, entrega: 'Quito y Valera', detalle: 'Cuatro talleres de Artis Terapia con dupla arte + psicología.' },
  { nombre: 'Brigada médica comunitaria', precio: 250, entrega: 'Valera', detalle: 'Jornada de control médico y nutricional para 40 niñas y niños.' },
  { nombre: 'Cohorte Adulto Protector', precio: 2500, entrega: 'Las tres sedes', detalle: '25 adultos formados en 6 sesiones con seguimiento a 90 días.' }
];

/* ===== Campanas recurrentes ===== */
const campanas = [
  { mes: 'Febrero', nombre: 'Amor sin violencia', gancho: 'San Valentin resignificado: el amor no lastima.', activo: 'Reto en redes + kit docente', meta: 'Captación de donantes mensuales' },
  { mes: 'Abril', nombre: 'Vuelta a clases (Sierra)', gancho: 'Cada mochila es un año escolar que no se abandona.', activo: 'Kit escolar en catalogo de impacto + acopio de útiles en Miami', meta: '1.000 kits escolares' },
  { mes: 'Junio', nombre: 'Mes de la niñez', gancho: 'Día de la niñez con actividades en las tres sedes.', activo: 'Jornada Todo Posi + brigadas', meta: 'Alcance masivo y voluntariado nuevo' },
  { mes: 'Agosto', nombre: 'Vuelta a clases (Costa y Venezuela)', gancho: 'Segunda ola escolar del año.', activo: 'Acopio corporativo con empresas de Florida', meta: '800 kits escolares' },
  { mes: 'Octubre', nombre: 'Formar 1.000 adultos protectores', gancho: 'Campaña de formación masiva con escuelas aliadas.', activo: 'Cohortes patrocinadas por empresas', meta: '1.000 adultos formados' },
  { mes: 'Diciembre', nombre: 'Giving Tuesday + Navidad Shungo', gancho: 'El cierre del año y el momento de mayor donación del calendario.', activo: 'Matching de empresas + peer to peer', meta: '30 % de la recaudación anual' }
];

module.exports = { site, sedes, proyectos, cifras, formasDeApoyo, faqs, blog, identidad, voluntariado, tienda, legales, LEGAL_ACTUALIZADO, embudoVoluntariado, confianza, impacto, departamentos, gobernanza, acopio, lineasIngreso, catalogoImpacto, campanas };
