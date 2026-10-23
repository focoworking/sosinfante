// Textos de las páginas en los tres idiomas. Lo que no vive en el contenido
// editorial (src/i18n/{es,en,pt}.js) pero tampoco es interfaz pura: títulos de
// sección, preguntas que encabezan los bloques de respuesta y frases de apoyo.
const es = {
  home: {
    title: 'SOS Infante · Niñez sin violencia en Miami, Quito y Valera',
    eyebrow: 'Volvimos · Miami 🇺🇸 · Quito 🇪🇨 · Valera 🇻🇪',
    h1: '¿Imaginas un mundo con adultos protectores?',
    sedesTitulo: 'Tres sedes, una sola ruta de protección',
    acopioTitulo: 'Miami acopia · Ecuador y Venezuela reciben',
    acopioTexto:
      'El centro de acopio de Miami es el corazón logístico de la reapertura: recibe donaciones en especie, las clasifica con voluntariado y las despacha a Quito y Valera. Lo que no se puede enviar se vende y financia el flete del resto.',
    acopioCta: 'Cómo donar en especie',
    catalogoCta: 'Catálogo de impacto',
    campanasTitulo: 'Campañas del año',
    voluntariadoTitulo: 'Súmate como voluntario',
    voluntariadoTexto:
      'Cuatro pasos, sin CV obligatorio. Áreas: psicología, medicina, trabajo social, editorial, social media, diseño, datos, traducción y logística.'
  },
  fundacion: {
    title: 'La fundación: misión, visión y gobierno · SOS Infante',
    description:
      'Misión, visión, valores, estructura de gobierno y modelo de sostenibilidad de SOS Infante, con operación en Miami, Quito y Valera.',
    eyebrow: 'La fundación',
    verDepartamentos: 'Ver departamentos',
    mision: 'Misión',
    misionTexto:
      'Prevenir y atender la violencia física, psicológica y sexual contra niñas, niños y adolescentes, formando adultos protectores y sosteniendo emocional, profesional y económicamente a la niñez en Ecuador, Venezuela y la comunidad latina de Estados Unidos.',
    vision: 'Visión',
    valores: 'Valores',
    gobierno: 'Gobierno',
    gobiernoCaption: 'Órganos y responsabilidades',
    organo: 'Órgano',
    responsabilidad: 'Responsabilidad',
    sostenibilidad: 'Cómo nos sostenemos',
    sostenibilidadTexto:
      'Seis líneas de ingreso, ninguna por encima del 35 % del total. Una fundación que depende de una sola fuente no es una fundación: es un proyecto con fecha de caducidad.',
    ingresosCaption: 'Modelo de ingresos 2026',
    linea: 'Línea',
    margen: 'Margen',
    rol: 'Rol',
    metaAnual: 'Meta anual',
    ingresosNota:
      'Metas de referencia del primer año de reapertura; se actualizan con el avance real en la página de transparencia.',
    comoTrabajamos: 'Cómo trabajamos',
    pasos: [
      ['Detectar.', 'Formamos adultos protectores en escuelas y comunidades.'],
      ['Atender.', 'Brigadas médicas, nutricionales y psicológicas.'],
      ['Acompañar.', 'Rutas de denuncia, apoyo legal y seguimiento a 90 días.'],
      ['Reportar.', 'Metas públicas por proyecto y por sede cada trimestre.']
    ]
  },
  departamentos: {
    title: 'Departamentos y equipos · SOS Infante',
    description:
      'Siete departamentos: Dirección, Programas, Salvaguarda, Desarrollo, Comunicación, Marketplace y Operaciones, y Datos, Tecnología e IA. Qué hace cada uno y qué perfiles busca.',
    eyebrow: 'Estructura',
    h1: 'Siete departamentos',
    lead: 'Cada área declara qué entrega y qué perfiles necesita. Si tu oficio aparece aquí, tenemos dónde ponerte.',
    entrega: 'Entrega:',
    perfiles: 'Perfiles:'
  },
  proyectos: {
    title: 'Proyectos · SOS Infante',
    eyebrow: 'Proyectos 2026',
    h1: 'Cinco programas activos',
    lead: 'Prevención, atención directa, comunicación e incidencia. Cada proyecto declara su meta y su avance.',
    enQueConsiste: '¿En qué consiste?',
    formato: 'Formato',
    indicador: 'Indicador principal:',
    dondeOpera: 'Dónde opera'
  },
  sedes: {
    title: 'Sedes: Miami, Quito y Valera · SOS Infante',
    description:
      'SOS Infante opera en Miami (Estados Unidos), Quito (Ecuador) y Valera, estado Trujillo (Venezuela). Qué hace cada sede y cómo contactarla.',
    eyebrow: 'Dónde estamos',
    h1: 'Miami · Quito · Valera',
    lead: 'La violencia contra la niñez no se detiene en las fronteras; las familias que atendemos tampoco.',
    queHace: (c) => `¿Qué hace SOS Infante en ${c}?`,
    programasEn: (c) => `Programas en ${c}`,
    contactoEn: (c) => `Contacto ${c}`,
    idiomas: 'Idiomas de atención:'
  },
  acopio: {
    title: 'Centro de acopio Miami · SOS Infante',
    description:
      'Centro de acopio de SOS Infante en Miami, FL: qué donamos, qué no recibimos, cómo se clasifica y cómo llega la ayuda a Ecuador y Venezuela con trazabilidad.',
    eyebrow: 'Miami 🇺🇸 → Ecuador 🇪🇨 · Venezuela 🇻🇪',
    h1: 'Centro de acopio',
    comoEntregar: 'Cómo entregar',
    queEs: '¿Qué es el centro de acopio de Miami?',
    queEsTexto:
      'Es la bodega donde SOS Infante recibe donaciones en especie en Miami, las clasifica con voluntariado y las envía a las sedes de Quito y Valera. Lo que no se puede enviar se vende en la tienda solidaria y ese dinero paga el flete del resto.',
    queRecibimos: 'Qué recibimos',
    siRecibimos: 'Sí recibimos',
    noRecibimos: 'No recibimos',
    deTuCaja: 'De tu caja a sus manos',
    comoEntregarTitulo: 'Cómo entregar tu donación',
    entregas: [
      ['En persona:', (d, h) => `${d}. ${h}.`],
      ['Recolección a domicilio:', () => 'desde 10 cajas en el condado de Broward y Miami-Dade, agendando por correo.'],
      ['Colecta de empresa o escuela:', () => 'entregamos contenedor rotulado, material de campaña y reporte final de lo recaudado.'],
      ['Envío desde otra ciudad:', () => 'escríbenos y coordinamos la guía.']
    ],
    agendar: 'Agendar una entrega',
    colecta: 'Colecta corporativa',
    trazabilidad: 'Trazabilidad',
    trazabilidadTexto:
      'Cada entrega se registra con donante, tipo y peso. Cuando el envío llega a Quito o Valera, quien donó recibe el reporte de su caja: qué contenía, a cuántas familias llegó y el acta de entrega con fotografías sin rostros de menores.'
  },
  tienda: {
    title: 'Tienda solidaria · SOS Infante',
    description:
      'Compra ropa, artículos de casa y apadrinamientos. Cada compra financia los proyectos de SOS Infante en Miami, Quito y Valera.',
    eyebrow: 'Tienda',
    h1: 'Compra algo que llega a manos concretas',
    lead: 'Dos formas: el catálogo de impacto, donde compras exactamente lo que se entrega en Ecuador y Venezuela, y la tienda de marca, que sostiene la operación.',
    catalogo: 'Catálogo de impacto',
    catalogoTexto: 'Eliges qué se entrega y dónde. Recibes el acta de entrega con fotografías sin rostros de menores.',
    regalar: 'Regalar',
    categorias: 'Categorías',
    productos: 'Productos',
    pedir: 'Pedir',
    envios: 'Envíos y devoluciones',
    enviosTexto:
      'Producción bajo demanda con envío a Estados Unidos, Ecuador y Venezuela. Tienes 14 días para solicitar un retorno de productos físicos sin uso.',
    enviosNota:
      'Conecta esta página a tu pasarela antes de publicar; hoy los botones envían al formulario de contacto.',
    unidades: 'productos'
  },
  voluntariado: {
    title: 'Voluntariado 2026 · SOS Infante Miami, Quito y Valera',
    description:
      'Postula al voluntariado de SOS Infante: cuatro pasos, áreas y horas definidas, formación en salvaguarda. Presencial en Quito, Valera y Miami, o remoto.',
    eyebrow: 'Voluntariado 2026',
    h1: 'Gracias por tomar acción. Desde ya haces la diferencia.',
    lead: 'Somos una organización sin fines de lucro creada para trabajar por oportunidades de vida para la niñez. Elige tu área, define tus horas y entra al equipo.',
    verAreas: 'Ver áreas y horas',
    comoEs: 'Cómo es el proceso',
    entrevistaNota: 'La entrevista es presencial o por videollamada según en qué parte del mundo estés.',
    areas: 'Áreas y horas',
    areasCaption: 'Esquema base de dedicación por área',
    area: 'Área',
    dedicacion: 'Dedicación',
    perfil: 'Perfil',
    requisitos: 'Requisitos y aporte',
    postula: 'Postula',
    preguntas: 'Preguntas del voluntariado',
    form: {
      nombre: 'Nombre y apellido',
      correo: 'Correo',
      telefono: 'Teléfono',
      donde: 'Dónde estás',
      otraCiudad: 'Otra ciudad (remoto)',
      areaPostula: 'Área a la que postulas',
      horas: 'Horas disponibles al mes',
      experiencia: 'Cuéntanos qué sabes hacer',
      enviar: 'Enviar postulación',
      nota: 'Conecta este formulario a tu CRM antes de publicar. Respuesta comprometida: 72 horas hábiles.'
    }
  },
  campanas: {
    title: 'Campañas 2026 · SOS Infante',
    description:
      'Calendario de campañas de SOS Infante: Amor sin violencia, Vuelta a clases, Mes de la niñez, Formar 1.000 adultos protectores, Giving Tuesday y Navidad Shungo.',
    eyebrow: 'Calendario 2026',
    h1: 'Seis campañas al año',
    lead:
      'Un ritmo fijo de convocatoria: cada campaña tiene meta, producto en tienda y activo de acopio. Así el equipo no improvisa y la comunidad sabe cuándo la necesitamos.',
    sumarme: 'Sumarme a una campaña',
    caption: 'Calendario de campañas',
    mes: 'Mes',
    campana: 'Campaña',
    gancho: 'Gancho',
    activo: 'Activo',
    comoFunciona: 'Cómo funciona cada campaña',
    fases: [
      ['Anuncio', 'Landing propia, correo a la base y activación de aliados con 3 semanas de anticipación.'],
      ['Activación', 'Acopio en Miami, reto en redes y recaudación entre pares: cada voluntario abre su propia meta.'],
      ['Cierre', 'Transmisión del envío o de la jornada, con contador público de lo alcanzado.'],
      ['Reporte', 'A los 30 días, informe de entrega a cada donante y conversión a donación mensual.']
    ]
  },
  dona: {
    title: 'Donar a SOS Infante · Miami, Quito y Valera',
    description:
      'Dona en línea, por transferencia o en especie. Donación mensual desde USD 10, donación única y alianzas corporativas desde USD 2.500.',
    eyebrow: 'Donar',
    h1: 'Tu donación se convierte en atención directa',
    lead: 'Elige el monto y la sede. Recibes recibo, y cada trimestre el reporte de uso por proyecto.',
    mensual: 'Donación mensual',
    montoMensual: 'Monto mensual (USD)',
    otro: 'Otro',
    destino: 'Destino',
    sede: 'Sede',
    dondeMasUrge: 'Donde más se necesite',
    proyecto: 'Proyecto',
    fondoGeneral: 'Fondo general',
    correo: 'Correo',
    continuar: 'Continuar al pago seguro',
    notaPasarela:
      'Conecta este formulario a la pasarela (Stripe, Donorbox o PayPal Giving). Sin pasarela conectada, el botón no procesa pagos.',
    unica: 'Donación única y transferencias',
    opciones: [
      ['Tarjeta:', 'mismo formulario, opción «una sola vez».'],
      ['Transferencia EE.UU. (Miami):', 'datos bancarios a solicitud por correo.'],
      ['Transferencia Ecuador (Quito):', 'escríbenos y te enviamos los datos.'],
      ['En especie:', 'alimentos, medicinas y material escolar en las tres sedes.']
    ],
    deducible: '¿Es deducible de impuestos?',
    porQueConfiar: 'Por qué puedes confiar'
  },
  involucrate: {
    title: 'Involúcrate: voluntariado y alianzas · SOS Infante',
    description:
      'Voluntariado en psicología, medicina, trabajo social, diseño, datos y logística en Miami, Quito y Valera. También alianzas corporativas y padrinazgo de cohortes.',
    eyebrow: 'Involúcrate',
    h1: 'Hay una forma de ayudar que encaja contigo',
    lead: 'Tiempo, oficio, red de contactos o dinero: todo entra en la misma ruta de protección.',
    otras: 'Otras formas',
    tarjetas: [
      ['Empresas', 'Patrocina una cohorte completa de Adulto Protector con reporte de impacto trimestral.', 'Hablar con alianzas'],
      ['Escuelas', 'Lleva los talleres a tu unidad educativa en Quito, Valera o Miami.', 'Solicitar taller'],
      ['Difunde', 'Usa el kit de campaña de Todo Posi en tus redes y en tu aula.', 'Ver campaña']
    ]
  },
  transparencia: {
    title: 'Transparencia y salvaguarda · SOS Infante',
    description:
      'Metas públicas 2026 por proyecto y sede, política de salvaguarda infantil, uso de fondos y canal de denuncias de SOS Infante.',
    eyebrow: 'Transparencia',
    h1: 'Metas públicas, reporte trimestral',
    lead: 'La confianza no se declara: se publica.',
    metas: 'Metas 2026',
    metasCaption: 'Compromiso público del primer año de reapertura',
    proyecto: 'Proyecto',
    indicador: 'Indicador',
    meta: 'Meta 2026',
    sedesCol: 'Sedes',
    metasNota: 'Actualizamos esta tabla cada trimestre con el avance real, incluso cuando va por debajo de la meta.',
    fondos: 'Uso de fondos',
    fondosLista: [
      ['78%', 'atención directa (brigadas, terapia, alimentos, materiales).'],
      ['14%', 'operación y equipo en territorio.'],
      ['8%', 'administración, auditoría y captación.']
    ],
    salvaguarda: 'Salvaguarda infantil',
    salvaguardaLista: [
      'Verificación de antecedentes para todo el personal y voluntariado con contacto con niñez.',
      'Política de dos adultos: ninguna persona adulta permanece a solas con una niña o niño.',
      'Consentimiento informado para uso de imagen; rostros de menores se protegen por defecto.',
      'Canal de denuncias con respuesta en 72 horas.'
    ]
  },
  faq: {
    title: 'Preguntas frecuentes · SOS Infante',
    description:
      'Qué es SOS Infante, dónde opera, cómo donar, deducibilidad, voluntariado, qué hacer ante una sospecha de violencia contra la niñez.',
    eyebrow: 'FAQ',
    h1: 'Preguntas frecuentes',
    lead: 'Respuestas cortas y verificables, pensadas también para buscadores y asistentes de IA.'
  },
  contacto: {
    title: 'Contacto · SOS Infante Miami, Quito y Valera',
    description: 'Escríbenos por sede, reporta un caso, propone una alianza o solicita un taller.',
    eyebrow: 'Contacto',
    h1: 'Hablemos',
    lead: 'Si hay riesgo inmediato para una niña, niño o adolescente, llama primero a emergencias.',
    emergencias: 'Emergencias',
    emergenciasTexto:
      '911 (Estados Unidos y Venezuela) · ECU 911 (Ecuador). Después escríbenos: acompañamos la ruta de denuncia y damos contención inicial.',
    porSede: 'Por sede',
    datos: 'Datos generales',
    correo: 'Correo:',
    telefono: 'Teléfono:',
    direccion: 'Dirección (EE.UU.):',
    horario: 'Horario:',
    alianzas: 'Alianzas, prensa y talleres',
    form: {
      nombre: 'Nombre',
      correo: 'Correo',
      motivo: 'Motivo',
      motivos: ['Alianza corporativa', 'Fundación / cooperación', 'Prensa', 'Taller en escuela', 'Reportar un caso', 'Otro'],
      mensaje: 'Mensaje',
      enviar: 'Enviar',
      nota: 'Conecta este formulario a tu CRM antes de publicar.'
    }
  },
  prensa: {
    title: 'Prensa y datos citables · SOS Infante',
    description:
      'Kit de prensa de SOS Infante: descripción oficial, vocerías, cifras verificables y guía para cubrir violencia contra la niñez sin revictimizar.',
    eyebrow: 'Prensa',
    h1: 'Kit de prensa',
    lead: 'Todo lo que necesitas para cubrirnos bien, en una página.',
    descripcion: 'Descripción oficial',
    nombreLegal: 'Nombre legal:',
    fundada: 'Fundada en',
    contactoPrensa: 'Contacto de prensa:',
    cifrasTitulo: 'Cifras citables',
    comoCubrir: 'Cómo cubrir violencia contra la niñez',
    guia: [
      'Un embarazo en una niña menor de 14 años es consecuencia de un delito: nómbralo así, no como «embarazo adolescente».',
      'No publiques datos que permitan identificar a la víctima: nombre, escuela, barrio o rostro.',
      'Evita el detalle morboso del hecho; informa la ruta de denuncia y dónde pedir ayuda.',
      'Cita la fuente y el año de cada cifra.',
      'Incluye siempre un teléfono de emergencia.'
    ],
    recursos: 'Recursos',
    logotipo: 'Logotipo (SVG)',
    resumen: 'Resumen institucional en texto plano',
    metasEnlace: 'Metas públicas y uso de fondos',
    feed: 'Feed RSS de novedades'
  },
  aliados: {
    title: 'Aliados: empresas, escuelas y fundaciones · SOS Infante',
    description:
      'Formas de aliarse con SOS Infante: patrocinio de cohortes, colectas corporativas en Miami, talleres pagados y matching de donaciones del equipo.',
    eyebrow: 'Aliados',
    h1: 'Alianzas que se pueden medir',
    lead: 'Cada alianza entrega un reporte con nombre, número y fecha. Nada de logos sin resultado.',
    hablar: 'Hablar con alianzas',
    tarjetas: [
      ['Desde USD 2.500', 'Patrocina una cohorte', '25 adultos formados en Adulto Protector con 6 sesiones y seguimiento a 90 días. Reporte con evidencia y mención en el informe trimestral.'],
      ['Sin costo directo', 'Colecta corporativa en Miami', 'Entregamos contenedor rotulado, material de campaña y charla para el equipo. Al cierre, reporte de kilos, destino y familias alcanzadas.'],
      ['Desde USD 1.200', 'Taller para tu equipo', 'Formación para colaboradores con hijas e hijos: señales de alerta, disciplina sin violencia y rutas de denuncia. Financia talleres gratuitos en escuelas públicas.'],
      ['Matching', 'Duplica lo que dona tu equipo', 'Tu empresa iguala las donaciones del personal durante una campaña. Es la forma más barata de multiplicar recaudación y compromiso interno.'],
      ['Escuelas', 'Programa escolar', 'Talleres para familias y docentes, más el reto Todo Posi con estudiantes. Incluye kit descargable y acompañamiento.'],
      ['Fundaciones', 'Proyectos cofinanciados', 'Presentamos línea base, marco lógico, presupuesto por resultado y auditoría externa anual.']
    ]
  },
  blog: {
    title: 'Blog · SOS Infante',
    description:
      'Notas sobre la reapertura, la nueva sede en Valera y guías prácticas para reconocer y frenar la violencia contra la niñez.',
    eyebrow: 'Blog',
    h1: 'Lo que aprendemos, publicado'
  },
  legal: { eyebrow: 'Legal · actualizado', dudas: 'Dudas sobre estas políticas:' },
  error404: {
    title: 'Página no encontrada · SOS Infante',
    description: 'La página que buscas no existe.',
    h1: 'Esa página no existe',
    lead: 'Puede que la hayamos movido en la reapertura.',
    inicio: 'Ir al inicio',
    proyectos: 'Ver proyectos'
  }
};

const en = {
  home: {
    title: 'SOS Infante · Childhood without violence in Miami, Quito and Valera',
    eyebrow: 'We are back · Miami 🇺🇸 · Quito 🇪🇨 · Valera 🇻🇪',
    h1: 'What if every child had an adult who knew what to do?',
    sedesTitulo: 'Three cities, one protection pathway',
    acopioTitulo: 'Miami collects · Ecuador and Venezuela receive',
    acopioTexto:
      'The Miami donation center is the logistical heart of the reopening: it takes in donated goods, volunteers sort them, and they ship to Quito and Valera. Whatever cannot be shipped is sold, and that pays the freight for everything else.',
    acopioCta: 'How to donate goods',
    catalogoCta: 'Impact catalog',
    campanasTitulo: 'This year’s campaigns',
    voluntariadoTitulo: 'Join as a volunteer',
    voluntariadoTexto:
      'Four steps, no résumé required. Areas: psychology, medicine, social work, editorial, social media, design, data, translation and logistics.'
  },
  fundacion: {
    title: 'About us: mission, vision and governance · SOS Infante',
    description:
      'Mission, vision, values, governance and funding model of SOS Infante, working in Miami, Quito and Valera.',
    eyebrow: 'About us',
    verDepartamentos: 'See our teams',
    mision: 'Mission',
    misionTexto:
      'To prevent and respond to physical, psychological and sexual violence against children, by training protective adults and backing children emotionally, professionally and financially in Ecuador, Venezuela and the Latino community of the United States.',
    vision: 'Vision',
    valores: 'Values',
    gobierno: 'Governance',
    gobiernoCaption: 'Bodies and responsibilities',
    organo: 'Body',
    responsabilidad: 'Responsibility',
    sostenibilidad: 'How we fund the work',
    sostenibilidadTexto:
      'Six revenue lines, none above 35% of the total. An organization that depends on a single source is not an organization: it is a project with an expiration date.',
    ingresosCaption: 'Revenue model 2026',
    linea: 'Line',
    margen: 'Margin',
    rol: 'Role',
    metaAnual: 'Annual goal',
    ingresosNota:
      'Reference goals for the first year of the reopening; actual progress is published on the accountability page.',
    comoTrabajamos: 'How we work',
    pasos: [
      ['Detect.', 'We train protective adults in schools and communities.'],
      ['Treat.', 'Medical, nutritional and psychological brigades.'],
      ['Accompany.', 'Reporting pathways, legal support and 90-day follow-up.'],
      ['Report.', 'Public goals by program and city, every quarter.']
    ]
  },
  departamentos: {
    title: 'Teams · SOS Infante',
    description:
      'Seven teams: Executive, Programs, Safeguarding, Development, Communications, Marketplace and Operations, and Data, Technology and AI. What each one delivers and who it is looking for.',
    eyebrow: 'Structure',
    h1: 'Seven teams',
    lead: 'Each team states what it delivers and the profiles it needs. If your trade is on this list, we have a place for you.',
    entrega: 'Delivers:',
    perfiles: 'Profiles:'
  },
  proyectos: {
    title: 'Programs · SOS Infante',
    eyebrow: 'Programs 2026',
    h1: 'Five active programs',
    lead: 'Prevention, direct care, communications and advocacy. Every program states its goal and its progress.',
    enQueConsiste: 'What it involves',
    formato: 'Format',
    indicador: 'Main indicator:',
    dondeOpera: 'Where it runs'
  },
  sedes: {
    title: 'Where we work: Miami, Quito and Valera · SOS Infante',
    description:
      'SOS Infante works in Miami (United States), Quito (Ecuador) and Valera, Trujillo state (Venezuela). What each site does and how to reach it.',
    eyebrow: 'Where we work',
    h1: 'Miami · Quito · Valera',
    lead: 'Violence against children does not stop at borders, and neither do the families we serve.',
    queHace: (c) => `What does SOS Infante do in ${c}?`,
    programasEn: (c) => `Programs in ${c}`,
    contactoEn: (c) => `Contact ${c}`,
    idiomas: 'Languages:'
  },
  acopio: {
    title: 'Miami donation center · SOS Infante',
    description:
      'The SOS Infante donation center in Miami, FL: what we take, what we cannot take, how goods are sorted, and how they reach Ecuador and Venezuela with full tracking.',
    eyebrow: 'Miami 🇺🇸 → Ecuador 🇪🇨 · Venezuela 🇻🇪',
    h1: 'Donation center',
    comoEntregar: 'How to drop off',
    queEs: 'What is the Miami donation center?',
    queEsTexto:
      'It is the warehouse in Miami where SOS Infante receives donated goods, sorts them with volunteers and ships them to Quito and Valera. Whatever cannot be shipped is sold in the shop, and that money pays the freight for the rest.',
    queRecibimos: 'What we take',
    siRecibimos: 'Yes, please',
    noRecibimos: 'Please don’t',
    deTuCaja: 'From your box to their hands',
    comoEntregarTitulo: 'How to get your donation to us',
    entregas: [
      ['In person:', (d, h) => `${d}. ${h}.`],
      ['Home pickup:', () => 'ten boxes or more, anywhere in Broward and Miami-Dade. Schedule by email.'],
      ['Company or school drive:', () => 'we provide a labeled bin, campaign materials and a closing report.'],
      ['Shipping from another city:', () => 'write to us and we will arrange the label.']
    ],
    agendar: 'Schedule a drop-off',
    colecta: 'Corporate drive',
    trazabilidad: 'Tracking',
    trazabilidadTexto:
      'Every drop-off is logged by donor, type and weight. When the shipment reaches Quito or Valera, you get the report on your own box: what it held, how many families it reached, and the signed delivery record with photographs that protect the children’s identity.'
  },
  tienda: {
    title: 'Shop · SOS Infante',
    description:
      'Apparel, home goods and sponsorships. Every purchase funds SOS Infante programs in Miami, Quito and Valera.',
    eyebrow: 'Shop',
    h1: 'Buy something that lands in real hands',
    lead: 'Two ways in: the impact catalog, where you buy exactly what gets delivered in Ecuador and Venezuela, and the branded shop, which keeps the operation running.',
    catalogo: 'Impact catalog',
    catalogoTexto: 'You choose what gets delivered and where. You receive the signed delivery record, with children’s identities protected.',
    regalar: 'Give this',
    categorias: 'Categories',
    productos: 'Products',
    pedir: 'Order',
    envios: 'Shipping and returns',
    enviosTexto:
      'Print-on-demand production with shipping to the United States, Ecuador and Venezuela. You have 14 days to request a return on unused physical products.',
    enviosNota: 'Connect this page to your checkout before going live; today the buttons lead to the contact form.',
    unidades: 'products'
  },
  voluntariado: {
    title: 'Volunteer 2026 · SOS Infante Miami, Quito and Valera',
    description:
      'Apply to volunteer with SOS Infante: four steps, defined areas and hours, safeguarding training. On site in Quito, Valera and Miami, or remote.',
    eyebrow: 'Volunteer 2026',
    h1: 'Thank you for taking action. You are already making a difference.',
    lead: 'We are a nonprofit built to create life opportunities for children. Pick your area, set your hours, join the team.',
    verAreas: 'See areas and hours',
    comoEs: 'How the process works',
    entrevistaNota: 'The interview is in person or by video call, depending on where in the world you are.',
    areas: 'Areas and hours',
    areasCaption: 'Baseline commitment by area',
    area: 'Area',
    dedicacion: 'Commitment',
    perfil: 'Profile',
    requisitos: 'Requirements and contribution',
    postula: 'Apply',
    preguntas: 'Volunteering questions',
    form: {
      nombre: 'Full name',
      correo: 'Email',
      telefono: 'Phone',
      donde: 'Where you are',
      otraCiudad: 'Another city (remote)',
      areaPostula: 'Area you are applying for',
      horas: 'Hours available per month',
      experiencia: 'Tell us what you do well',
      enviar: 'Send application',
      nota: 'Connect this form to your CRM before going live. Committed response time: 72 business hours.'
    }
  },
  campanas: {
    title: 'Campaigns 2026 · SOS Infante',
    description:
      'The SOS Infante campaign calendar: Love without violence, Back to school, Children’s month, Train 1,000 protective adults, Giving Tuesday and Shungo Christmas.',
    eyebrow: 'Calendar 2026',
    h1: 'Six campaigns a year',
    lead:
      'A fixed rhythm: each campaign has a goal, a product in the shop and a collection drive. The team stops improvising and the community knows when we need them.',
    sumarme: 'Join a campaign',
    caption: 'Campaign calendar',
    mes: 'Month',
    campana: 'Campaign',
    gancho: 'Hook',
    activo: 'Asset',
    comoFunciona: 'How each campaign runs',
    fases: [
      ['Announcement', 'Its own landing page, an email to the list, and partners activated three weeks out.'],
      ['Activation', 'Collection in Miami, a social challenge, and peer-to-peer fundraising: every volunteer opens their own goal.'],
      ['Close', 'A live broadcast of the shipment or the field day, with a public counter.'],
      ['Report', 'Thirty days later, a delivery report to every donor and the ask to become a monthly giver.']
    ]
  },
  dona: {
    title: 'Give to SOS Infante · Miami, Quito and Valera',
    description:
      'Give online, by transfer or in goods. Monthly giving from $10, one-time gifts and corporate partnerships from $2,500.',
    eyebrow: 'Give',
    h1: 'Your gift turns into direct care',
    lead: 'Pick the amount and the city. You get a receipt, and a quarterly report on how it was used.',
    mensual: 'Monthly giving',
    montoMensual: 'Monthly amount (USD)',
    otro: 'Other',
    destino: 'Destination',
    sede: 'City',
    dondeMasUrge: 'Where it is needed most',
    proyecto: 'Program',
    fondoGeneral: 'General fund',
    correo: 'Email',
    continuar: 'Continue to secure payment',
    notaPasarela:
      'Connect this form to your processor (Stripe, Donorbox or PayPal Giving). Until then, the button does not process payments.',
    unica: 'One-time gifts and transfers',
    opciones: [
      ['Card:', 'the same form, «one time» option.'],
      ['U.S. bank transfer (Miami):', 'account details on request by email.'],
      ['Ecuador bank transfer (Quito):', 'write to us and we will send the details.'],
      ['In goods:', 'food, medicine and school supplies at any of the three sites.']
    ],
    deducible: 'Is my gift tax-deductible?',
    porQueConfiar: 'Why your gift is in good hands'
  },
  involucrate: {
    title: 'Get involved: volunteering and partnerships · SOS Infante',
    description:
      'Volunteer in psychology, medicine, social work, design, data and logistics in Miami, Quito and Valera. Corporate partnerships and cohort sponsorship too.',
    eyebrow: 'Get involved',
    h1: 'There is a way to help that fits you',
    lead: 'Time, craft, contacts or money: it all feeds the same protection pathway.',
    otras: 'Other ways',
    tarjetas: [
      ['Companies', 'Sponsor a full Protective Adult cohort with a quarterly impact report.', 'Talk to partnerships'],
      ['Schools', 'Bring the workshops to your school in Quito, Valera or Miami.', 'Request a workshop'],
      ['Spread the word', 'Use the Todo Posi campaign kit in your feed and in your classroom.', 'See the campaign']
    ]
  },
  transparencia: {
    title: 'Accountability and safeguarding · SOS Infante',
    description:
      'Public 2026 goals by program and city, child safeguarding policy, use of funds and the reporting channel of SOS Infante.',
    eyebrow: 'Accountability',
    h1: 'Public goals, quarterly reporting',
    lead: 'Trust is not claimed. It is published.',
    metas: '2026 goals',
    metasCaption: 'Public commitment for the first year of the reopening',
    proyecto: 'Program',
    indicador: 'Indicator',
    meta: '2026 goal',
    sedesCol: 'Cities',
    metasNota: 'We update this table every quarter with real progress, including the quarters we fall short.',
    fondos: 'Use of funds',
    fondosLista: [
      ['78%', 'direct care (brigades, therapy, food, materials).'],
      ['14%', 'field operations and staff.'],
      ['8%', 'administration, audit and fundraising.']
    ],
    salvaguarda: 'Child safeguarding',
    salvaguardaLista: [
      'Background checks for all staff and volunteers in contact with children.',
      'Two-adult rule: no adult is ever alone with a child.',
      'Informed consent for any image; children’s identities are protected by default.',
      'Reporting channel answered within 72 hours.'
    ]
  },
  faq: {
    title: 'Frequently asked questions · SOS Infante',
    description:
      'What SOS Infante is, where it works, how to give, tax deductibility, volunteering, and what to do if you suspect a child is being abused.',
    eyebrow: 'FAQ',
    h1: 'Frequently asked questions',
    lead: 'Short, verifiable answers, written for people and for the engines that quote them.'
  },
  contacto: {
    title: 'Contact · SOS Infante Miami, Quito and Valera',
    description: 'Reach the team in each city, report a case, propose a partnership or request a workshop.',
    eyebrow: 'Contact',
    h1: 'Let’s talk',
    lead: 'If a child is in immediate danger, call emergency services first.',
    emergencias: 'Emergencies',
    emergenciasTexto:
      '911 (United States and Venezuela) · ECU 911 (Ecuador). In Florida, the Child Abuse Hotline is 1-800-962-2873. Then write to us: we support families through the reporting process.',
    porSede: 'By city',
    datos: 'General details',
    correo: 'Email:',
    telefono: 'Phone:',
    direccion: 'Address (U.S.):',
    horario: 'Hours:',
    alianzas: 'Partnerships, press and workshops',
    form: {
      nombre: 'Name',
      correo: 'Email',
      motivo: 'Reason',
      motivos: ['Corporate partnership', 'Foundation / grant', 'Press', 'School workshop', 'Report a case', 'Other'],
      mensaje: 'Message',
      enviar: 'Send',
      nota: 'Connect this form to your CRM before going live.'
    }
  },
  prensa: {
    title: 'Press kit · SOS Infante',
    description:
      'SOS Infante press kit: official description, spokespeople, verifiable figures and a guide to covering violence against children without re-traumatizing.',
    eyebrow: 'Press',
    h1: 'Press kit',
    lead: 'Everything you need to cover us well, on one page.',
    descripcion: 'Official description',
    nombreLegal: 'Legal name:',
    fundada: 'Founded in',
    contactoPrensa: 'Press contact:',
    cifrasTitulo: 'Figures you can quote',
    comoCubrir: 'Covering violence against children',
    guia: [
      'A pregnancy in a girl under 14 is the consequence of a crime. Name it that way, not «teen pregnancy».',
      'Never publish details that could identify the child: name, school, neighborhood or face.',
      'Skip the graphic detail; publish the reporting pathway and where to get help.',
      'Cite the source and the year of every figure.',
      'Always include an emergency number.'
    ],
    recursos: 'Assets',
    logotipo: 'Logo (SVG)',
    resumen: 'Plain-text organizational summary',
    metasEnlace: 'Public goals and use of funds',
    feed: 'RSS feed'
  },
  aliados: {
    title: 'Partners: companies, schools and foundations · SOS Infante',
    description:
      'Ways to partner with SOS Infante: cohort sponsorship, corporate collection drives in Miami, paid workshops and employee gift matching.',
    eyebrow: 'Partners',
    h1: 'Partnerships you can measure',
    lead: 'Every partnership comes with a report that carries names, numbers and dates. No logos without results.',
    hablar: 'Talk to partnerships',
    tarjetas: [
      ['From $2,500', 'Sponsor a cohort', '25 adults trained in Protective Adult over six sessions with 90-day follow-up. Evidence-backed report and a mention in the quarterly review.'],
      ['No direct cost', 'Corporate drive in Miami', 'We provide a labeled bin, campaign materials and a talk for your team. At the close, a report of weight, destination and families reached.'],
      ['From $1,200', 'Workshop for your team', 'Training for employees who are parents: warning signs, discipline without violence and reporting pathways. It funds free workshops in public schools.'],
      ['Matching', 'Match what your team gives', 'Your company matches staff donations during a campaign. The cheapest way to multiply both revenue and internal engagement.'],
      ['Schools', 'School program', 'Workshops for families and teachers, plus the Todo Posi challenge with students. Includes a downloadable kit and support.'],
      ['Foundations', 'Co-funded projects', 'We bring the baseline, logframe, results-based budget and an annual external audit.']
    ]
  },
  blog: {
    title: 'Stories · SOS Infante',
    description:
      'Notes on the reopening, the new site in Valera, and practical guides to recognizing and stopping violence against children.',
    eyebrow: 'Stories',
    h1: 'What we learn, published'
  },
  legal: { eyebrow: 'Legal · updated', dudas: 'Questions about these policies:' },
  error404: {
    title: 'Page not found · SOS Infante',
    description: 'The page you are looking for does not exist.',
    h1: 'That page does not exist',
    lead: 'We may have moved it during the reopening.',
    inicio: 'Go to the homepage',
    proyectos: 'See our programs'
  }
};

const pt = {
  home: {
    title: 'SOS Infante · Infância sem violência em Miami, Quito e Valera',
    eyebrow: 'Voltamos · Miami 🇺🇸 · Quito 🇪🇨 · Valera 🇻🇪',
    h1: 'E se toda criança tivesse por perto um adulto protetor?',
    sedesTitulo: 'Três unidades, uma só rota de proteção',
    acopioTitulo: 'Miami arrecada · Equador e Venezuela recebem',
    acopioTexto:
      'O centro de coleta de Miami é o coração logístico da reabertura: recebe doações, o voluntariado faz a triagem e tudo segue para Quito e Valera. O que não pode ser enviado é vendido, e essa venda paga o frete do resto.',
    acopioCta: 'Como doar materiais',
    catalogoCta: 'Catálogo de impacto',
    campanasTitulo: 'Campanhas do ano',
    voluntariadoTitulo: 'Entre como voluntário',
    voluntariadoTexto:
      'Quatro passos, sem currículo obrigatório. Áreas: psicologia, medicina, serviço social, editorial, redes sociais, design, dados, tradução e logística.'
  },
  fundacion: {
    title: 'O instituto: missão, visão e governança · SOS Infante',
    description:
      'Missão, visão, valores, governança e modelo de sustentabilidade do SOS Infante, com atuação em Miami, Quito e Valera.',
    eyebrow: 'O instituto',
    verDepartamentos: 'Ver as equipes',
    mision: 'Missão',
    misionTexto:
      'Prevenir e enfrentar a violência física, psicológica e sexual contra crianças e adolescentes, formando adultos protetores e sustentando emocional, profissional e economicamente a infância no Equador, na Venezuela e na comunidade latina dos Estados Unidos.',
    vision: 'Visão',
    valores: 'Valores',
    gobierno: 'Governança',
    gobiernoCaption: 'Instâncias e responsabilidades',
    organo: 'Instância',
    responsabilidad: 'Responsabilidade',
    sostenibilidad: 'Como nos sustentamos',
    sostenibilidadTexto:
      'Seis linhas de receita, nenhuma acima de 35% do total. Uma organização que depende de uma única fonte não é uma organização: é um projeto com prazo de validade.',
    ingresosCaption: 'Modelo de receita 2026',
    linea: 'Linha',
    margen: 'Margem',
    rol: 'Papel',
    metaAnual: 'Meta anual',
    ingresosNota:
      'Metas de referência do primeiro ano de reabertura; o avanço real é publicado na página de transparência.',
    comoTrabajamos: 'Como trabalhamos',
    pasos: [
      ['Detectar.', 'Formamos adultos protetores em escolas e comunidades.'],
      ['Atender.', 'Brigadas médicas, nutricionais e psicológicas.'],
      ['Acompanhar.', 'Rotas de denúncia, apoio jurídico e acompanhamento por 90 dias.'],
      ['Prestar contas.', 'Metas públicas por programa e por cidade, a cada trimestre.']
    ]
  },
  departamentos: {
    title: 'Equipes · SOS Infante',
    description:
      'Sete equipes: Direção, Programas, Proteção, Desenvolvimento, Comunicação, Marketplace e Operações, e Dados, Tecnologia e IA. O que cada uma entrega e quem procura.',
    eyebrow: 'Estrutura',
    h1: 'Sete equipes',
    lead: 'Cada área declara o que entrega e quais perfis precisa. Se o seu ofício está nesta lista, temos onde encaixar você.',
    entrega: 'Entrega:',
    perfiles: 'Perfis:'
  },
  proyectos: {
    title: 'Programas · SOS Infante',
    eyebrow: 'Programas 2026',
    h1: 'Cinco programas ativos',
    lead: 'Prevenção, atendimento direto, comunicação e incidência. Cada programa declara sua meta e seu avanço.',
    enQueConsiste: 'Em que consiste',
    formato: 'Formato',
    indicador: 'Indicador principal:',
    dondeOpera: 'Onde funciona'
  },
  sedes: {
    title: 'Unidades: Miami, Quito e Valera · SOS Infante',
    description:
      'O SOS Infante atua em Miami (Estados Unidos), Quito (Equador) e Valera, estado de Trujillo (Venezuela). O que cada unidade faz e como falar com ela.',
    eyebrow: 'Onde atuamos',
    h1: 'Miami · Quito · Valera',
    lead: 'A violência contra crianças não para nas fronteiras; as famílias que atendemos também não.',
    queHace: (c) => `O que o SOS Infante faz em ${c}?`,
    programasEn: (c) => `Programas em ${c}`,
    contactoEn: (c) => `Contato ${c}`,
    idiomas: 'Idiomas de atendimento:'
  },
  acopio: {
    title: 'Centro de coleta em Miami · SOS Infante',
    description:
      'Centro de coleta do SOS Infante em Miami, FL: o que recebemos, o que não aceitamos, como é feita a triagem e como a ajuda chega ao Equador e à Venezuela com rastreio.',
    eyebrow: 'Miami 🇺🇸 → Equador 🇪🇨 · Venezuela 🇻🇪',
    h1: 'Centro de coleta',
    comoEntregar: 'Como entregar',
    queEs: 'O que é o centro de coleta de Miami?',
    queEsTexto:
      'É o galpão em Miami onde o SOS Infante recebe doações, faz a triagem com voluntariado e envia tudo para Quito e Valera. O que não pode ser enviado é vendido na loja, e esse dinheiro paga o frete do restante.',
    queRecibimos: 'O que recebemos',
    siRecibimos: 'Recebemos',
    noRecibimos: 'Não recebemos',
    deTuCaja: 'Da sua caixa às mãos delas',
    comoEntregarTitulo: 'Como fazer sua doação chegar',
    entregas: [
      ['Presencialmente:', (d, h) => `${d}. ${h}.`],
      ['Retirada em domicílio:', () => 'a partir de 10 caixas nos condados de Broward e Miami-Dade, agendando por e-mail.'],
      ['Coleta de empresa ou escola:', () => 'levamos a caixa coletora identificada, o material de campanha e o relatório final.'],
      ['Envio de outra cidade:', () => 'escreva para a gente e combinamos a etiqueta de envio.']
    ],
    agendar: 'Agendar uma entrega',
    colecta: 'Coleta corporativa',
    trazabilidad: 'Rastreio',
    trazabilidadTexto:
      'Cada entrega é registrada por doador, tipo e peso. Quando a carga chega a Quito ou Valera, quem doou recebe o relatório da sua caixa: o que havia nela, quantas famílias alcançou e o comprovante de entrega com fotos que preservam a identidade das crianças.'
  },
  tienda: {
    title: 'Loja solidária · SOS Infante',
    description:
      'Roupas, itens de casa e apadrinhamentos. Cada compra financia os programas do SOS Infante em Miami, Quito e Valera.',
    eyebrow: 'Loja',
    h1: 'Compre algo que chega a mãos concretas',
    lead: 'Dois caminhos: o catálogo de impacto, em que você compra exatamente o que será entregue no Equador e na Venezuela, e a loja da marca, que sustenta a operação.',
    catalogo: 'Catálogo de impacto',
    catalogoTexto: 'Você escolhe o que será entregue e onde. Recebe o comprovante de entrega, com a identidade das crianças preservada.',
    regalar: 'Presentear',
    categorias: 'Categorias',
    productos: 'Produtos',
    pedir: 'Pedir',
    envios: 'Envios e devoluções',
    enviosTexto:
      'Produção sob demanda com envio para Estados Unidos, Equador e Venezuela. Você tem 14 dias para solicitar a devolução de produtos físicos sem uso.',
    enviosNota: 'Conecte esta página ao seu meio de pagamento antes de publicar; por enquanto os botões levam ao formulário de contato.',
    unidades: 'produtos'
  },
  voluntariado: {
    title: 'Voluntariado 2026 · SOS Infante Miami, Quito e Valera',
    description:
      'Inscreva-se no voluntariado do SOS Infante: quatro passos, áreas e horas definidas, formação em proteção da criança. Presencial em Quito, Valera e Miami, ou a distância.',
    eyebrow: 'Voluntariado 2026',
    h1: 'Obrigado por agir. Você já está fazendo diferença.',
    lead: 'Somos uma organização sem fins lucrativos criada para abrir oportunidades de vida para a infância. Escolha sua área, defina suas horas e entre na equipe.',
    verAreas: 'Ver áreas e horas',
    comoEs: 'Como funciona o processo',
    entrevistaNota: 'A entrevista é presencial ou por videochamada, conforme onde você estiver.',
    areas: 'Áreas e horas',
    areasCaption: 'Esquema base de dedicação por área',
    area: 'Área',
    dedicacion: 'Dedicação',
    perfil: 'Perfil',
    requisitos: 'Requisitos e contribuição',
    postula: 'Inscreva-se',
    preguntas: 'Dúvidas sobre o voluntariado',
    form: {
      nombre: 'Nome completo',
      correo: 'E-mail',
      telefono: 'Telefone',
      donde: 'Onde você está',
      otraCiudad: 'Outra cidade (a distância)',
      areaPostula: 'Área pretendida',
      horas: 'Horas disponíveis por mês',
      experiencia: 'Conte o que você sabe fazer',
      enviar: 'Enviar inscrição',
      nota: 'Conecte este formulário ao seu CRM antes de publicar. Resposta comprometida: 72 horas úteis.'
    }
  },
  campanas: {
    title: 'Campanhas 2026 · SOS Infante',
    description:
      'Calendário de campanhas do SOS Infante: Amor sem violência, Volta às aulas, Mês da infância, Formar 1.000 adultos protetores, Giving Tuesday e Natal Shungo.',
    eyebrow: 'Calendário 2026',
    h1: 'Seis campanhas por ano',
    lead:
      'Um ritmo fixo: cada campanha tem meta, produto na loja e ação de coleta. A equipe deixa de improvisar e a comunidade sabe quando é hora de ajudar.',
    sumarme: 'Entrar em uma campanha',
    caption: 'Calendário de campanhas',
    mes: 'Mês',
    campana: 'Campanha',
    gancho: 'Gancho',
    activo: 'Ação',
    comoFunciona: 'Como cada campanha funciona',
    fases: [
      ['Anúncio', 'Página própria, e-mail para a base e parceiros acionados com três semanas de antecedência.'],
      ['Ativação', 'Coleta em Miami, desafio nas redes e arrecadação entre pares: cada voluntário abre a própria meta.'],
      ['Encerramento', 'Transmissão do envio ou da jornada, com contador público do que foi alcançado.'],
      ['Prestação de contas', 'Trinta dias depois, relatório de entrega a cada doador e convite para doar todo mês.']
    ]
  },
  dona: {
    title: 'Doar ao SOS Infante · Miami, Quito e Valera',
    description:
      'Doe on-line, por transferência ou em materiais. Doação mensal a partir de US$ 10, doação única e parcerias a partir de US$ 2.500.',
    eyebrow: 'Doar',
    h1: 'Sua doação vira atendimento direto',
    lead: 'Escolha o valor e a unidade. Você recebe recibo e, a cada trimestre, o relatório de uso por programa.',
    mensual: 'Doação mensal',
    montoMensual: 'Valor mensal (US$)',
    otro: 'Outro',
    destino: 'Destino',
    sede: 'Unidade',
    dondeMasUrge: 'Onde for mais necessário',
    proyecto: 'Programa',
    fondoGeneral: 'Fundo geral',
    correo: 'E-mail',
    continuar: 'Ir para o pagamento seguro',
    notaPasarela:
      'Conecte este formulário ao meio de pagamento (Stripe, Donorbox ou PayPal Giving). Sem isso, o botão não processa pagamentos.',
    unica: 'Doação única e transferências',
    opciones: [
      ['Cartão:', 'o mesmo formulário, opção «uma única vez».'],
      ['Transferência nos EUA (Miami):', 'dados bancários sob solicitação por e-mail.'],
      ['Transferência no Equador (Quito):', 'escreva para a gente e enviamos os dados.'],
      ['Em materiais:', 'alimentos, remédios e material escolar nas três unidades.']
    ],
    deducible: 'A doação é dedutível do imposto?',
    porQueConfiar: 'Por que confiar'
  },
  involucrate: {
    title: 'Participe: voluntariado e parcerias · SOS Infante',
    description:
      'Voluntariado em psicologia, medicina, serviço social, design, dados e logística em Miami, Quito e Valera. Também parcerias com empresas e patrocínio de turmas.',
    eyebrow: 'Participe',
    h1: 'Existe um jeito de ajudar que combina com você',
    lead: 'Tempo, ofício, rede de contatos ou dinheiro: tudo entra na mesma rota de proteção.',
    otras: 'Outras formas',
    tarjetas: [
      ['Empresas', 'Patrocine uma turma inteira do Adulto Protetor, com relatório de impacto trimestral.', 'Falar com parcerias'],
      ['Escolas', 'Leve as oficinas para a sua escola em Quito, Valera ou Miami.', 'Solicitar oficina'],
      ['Divulgue', 'Use o kit da campanha Todo Posi nas suas redes e na sala de aula.', 'Ver a campanha']
    ]
  },
  transparencia: {
    title: 'Transparência e proteção · SOS Infante',
    description:
      'Metas públicas de 2026 por programa e unidade, política de proteção da criança, uso dos recursos e canal de denúncia do SOS Infante.',
    eyebrow: 'Transparência',
    h1: 'Metas públicas, prestação de contas trimestral',
    lead: 'Confiança não se declara: se publica.',
    metas: 'Metas de 2026',
    metasCaption: 'Compromisso público do primeiro ano de reabertura',
    proyecto: 'Programa',
    indicador: 'Indicador',
    meta: 'Meta 2026',
    sedesCol: 'Unidades',
    metasNota: 'Atualizamos esta tabela a cada trimestre com o avanço real, inclusive quando ficamos abaixo da meta.',
    fondos: 'Uso dos recursos',
    fondosLista: [
      ['78%', 'atendimento direto (brigadas, terapia, alimentos, materiais).'],
      ['14%', 'operação e equipe em campo.'],
      ['8%', 'administração, auditoria e captação.']
    ],
    salvaguarda: 'Proteção da criança',
    salvaguardaLista: [
      'Checagem de antecedentes para toda a equipe e voluntariado com contato com crianças.',
      'Regra dos dois adultos: ninguém fica sozinho com uma criança.',
      'Consentimento informado para uso de imagem; a identidade das crianças é preservada por padrão.',
      'Canal de denúncia com resposta em 72 horas.'
    ]
  },
  faq: {
    title: 'Perguntas frequentes · SOS Infante',
    description:
      'O que é o SOS Infante, onde atua, como doar, dedutibilidade, voluntariado e o que fazer diante de uma suspeita de violência.',
    eyebrow: 'Perguntas',
    h1: 'Perguntas frequentes',
    lead: 'Respostas curtas e verificáveis, escritas para pessoas e para os buscadores que as citam.'
  },
  contacto: {
    title: 'Contato · SOS Infante Miami, Quito e Valera',
    description: 'Fale com a equipe de cada unidade, relate um caso, proponha uma parceria ou solicite uma oficina.',
    eyebrow: 'Contato',
    h1: 'Vamos conversar',
    lead: 'Se houver risco imediato a uma criança ou adolescente, acione primeiro a emergência.',
    emergencias: 'Emergências',
    emergenciasTexto:
      'No Brasil: 190 em caso de risco imediato e 100 (Disque Direitos Humanos) para denúncia anônima, 24 horas. Nos Estados Unidos e na Venezuela, 911; no Equador, ECU 911. Depois escreva para a gente: acompanhamos a família na rota de denúncia.',
    porSede: 'Por unidade',
    datos: 'Dados gerais',
    correo: 'E-mail:',
    telefono: 'Telefone:',
    direccion: 'Endereço (EUA):',
    horario: 'Horário:',
    alianzas: 'Parcerias, imprensa e oficinas',
    form: {
      nombre: 'Nome',
      correo: 'E-mail',
      motivo: 'Motivo',
      motivos: ['Parceria com empresa', 'Fundação / edital', 'Imprensa', 'Oficina em escola', 'Relatar um caso', 'Outro'],
      mensaje: 'Mensagem',
      enviar: 'Enviar',
      nota: 'Conecte este formulário ao seu CRM antes de publicar.'
    }
  },
  prensa: {
    title: 'Imprensa e dados citáveis · SOS Infante',
    description:
      'Kit de imprensa do SOS Infante: descrição oficial, porta-vozes, números verificáveis e guia para cobrir violência contra crianças sem revitimizar.',
    eyebrow: 'Imprensa',
    h1: 'Kit de imprensa',
    lead: 'Tudo o que você precisa para nos cobrir bem, em uma página.',
    descripcion: 'Descrição oficial',
    nombreLegal: 'Razão social:',
    fundada: 'Fundada em',
    contactoPrensa: 'Contato de imprensa:',
    cifrasTitulo: 'Números que você pode citar',
    comoCubrir: 'Como cobrir violência contra crianças',
    guia: [
      'Gravidez em menina de até 13 anos é estupro de vulnerável. Nomeie assim, e não como «gravidez na adolescência».',
      'Não publique dados que permitam identificar a vítima: nome, escola, bairro ou rosto.',
      'Evite o detalhe mórbido; informe a rota de denúncia e onde pedir ajuda.',
      'Cite a fonte e o ano de cada número.',
      'Inclua sempre um telefone de emergência: 190 e Disque 100.'
    ],
    recursos: 'Materiais',
    logotipo: 'Logotipo (SVG)',
    resumen: 'Resumo institucional em texto simples',
    metasEnlace: 'Metas públicas e uso dos recursos',
    feed: 'Feed RSS'
  },
  aliados: {
    title: 'Parceiros: empresas, escolas e fundações · SOS Infante',
    description:
      'Formas de se aliar ao SOS Infante: patrocínio de turmas, coletas corporativas em Miami, oficinas pagas e matching das doações da equipe.',
    eyebrow: 'Parceiros',
    h1: 'Parcerias que se podem medir',
    lead: 'Cada parceria entrega um relatório com nome, número e data. Nada de logotipo sem resultado.',
    hablar: 'Falar com parcerias',
    tarjetas: [
      ['A partir de US$ 2.500', 'Patrocine uma turma', '25 adultos formados no Adulto Protetor em seis encontros, com acompanhamento por 90 dias. Relatório com evidências e menção no informe trimestral.'],
      ['Sem custo direto', 'Coleta corporativa em Miami', 'Levamos caixa coletora identificada, material de campanha e uma palestra para a equipe. No fim, relatório de peso, destino e famílias alcançadas.'],
      ['A partir de US$ 1.200', 'Oficina para a sua equipe', 'Formação para colaboradores com filhos: sinais de alerta, disciplina sem violência e rotas de denúncia. Financia oficinas gratuitas na rede pública.'],
      ['Matching', 'Dobre o que a sua equipe doa', 'A empresa iguala as doações do time durante uma campanha. É a forma mais barata de multiplicar arrecadação e engajamento interno.'],
      ['Escolas', 'Programa escolar', 'Oficinas para famílias e docentes, mais o desafio Todo Posi com estudantes. Inclui kit para baixar e acompanhamento.'],
      ['Fundações', 'Projetos cofinanciados', 'Apresentamos linha de base, marco lógico, orçamento por resultado e auditoria externa anual.']
    ]
  },
  blog: {
    title: 'Histórias · SOS Infante',
    description:
      'Textos sobre a reabertura, a nova unidade em Valera e guias práticos para reconhecer e interromper a violência contra crianças.',
    eyebrow: 'Histórias',
    h1: 'O que aprendemos, publicado'
  },
  legal: { eyebrow: 'Legal · atualizado em', dudas: 'Dúvidas sobre estas políticas:' },
  error404: {
    title: 'Página não encontrada · SOS Infante',
    description: 'A página que você procura não existe.',
    h1: 'Essa página não existe',
    lead: 'Talvez a tenhamos movido durante a reabertura.',
    inicio: 'Ir para o início',
    proyectos: 'Ver os programas'
  }
};

module.exports = { es, en, pt };
