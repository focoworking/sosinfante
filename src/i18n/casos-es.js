// CASOS REALES — contenido documentado.
//
// Reglas de la sección, aplicadas a cada pieza:
//  1. Ninguna persona acusada se nombra si no hay sentencia pública. Se nombran
//     instituciones y se describe el patrón, nunca al presunto responsable.
//  2. Cada cifra lleva fuente, fecha y organismo. Si la fuente es antigua, se dice.
//  3. No se describe el hecho: se describe el mecanismo que lo permitió y la
//     ruta para interrumpirlo.
//  4. `social` es la versión para redes, escrita sin términos que disparen la
//     moderación automática. El texto de la web mantiene el lenguaje clínico,
//     que es el que entienden los buscadores.

const META = {
  titulo: 'Casos reales',
  descripcion:
    'Investigaciones, cifras oficiales y patrones documentados sobre la violencia contra la niñez en Ecuador y Venezuela. Cada dato con fuente verificable.',
  intro:
    'Esta sección no cuenta historias para conmover: documenta mecanismos. Qué permitió que ocurriera, qué falló después y qué habría que cambiar para que no se repita. Toda cifra lleva su fuente y su fecha.',
  aviso:
    'Esta sección trata sobre violencia contra la niñez. Si en este momento una niña, niño o adolescente está en riesgo, llama a emergencias antes de seguir leyendo: 911 en Estados Unidos y Venezuela, ECU 911 en Ecuador.',
  categorias: [
    { slug: 'cifras', nombre: 'Las cifras' },
    { slug: 'familia', nombre: 'Violencia en el hogar' },
    { slug: 'escuela', nombre: 'Escuelas y autoridad' },
    { slug: 'instituciones-fe', nombre: 'Instituciones de fe' },
    { slug: 'justicia', nombre: 'Justicia e impunidad' }
  ]
};

const casos = [
  {
    id: 'ecuador-denuncia-cada-90-minutos',
    accion: { texto: 'Esa cifra baja cuando hay un adulto formado cerca. Cada cohorte de Adulto Protector son 25 personas que dejan de dudar.', cta: 'Formar una cohorte', destino: 'dona' },
    slug: 'ecuador-una-denuncia-cada-90-minutos',
    categoria: 'cifras',
    pais: 'Ecuador',
    fecha: '2026-10-21',
    titulo: 'Una denuncia cada 90 minutos',
    resumen:
      'La Fiscalía registró 86.962 denuncias por delitos contra la integridad sexual de menores de edad entre 2015 y 2025. El dato que importa no es el total: es el ritmo.',
    cuerpo: [
      'Entre 2015 y 2025, la Fiscalía General del Estado de Ecuador registró 86.962 denuncias por abuso sexual, violación y acoso sexual contra personas menores de edad, según la recopilación publicada por Plan International. Repartido en el tiempo, equivale a una denuncia cada noventa minutos.',
      'Esa cifra tiene una trampa que conviene nombrar: cuenta denuncias, no hechos. En delitos contra la niñez, la distancia entre lo que ocurre y lo que se denuncia es enorme, porque el agresor suele vivir en la misma casa, pagar las cuentas o tener autoridad sobre la familia. Cada número de esta serie representa a alguien que logró atravesar esa barrera. Los que no la atraviesan no aparecen en ninguna tabla.',
      'El segundo dato que hay que leer junto al primero es el de la Defensoría del Pueblo: de los 52.051 casos reportados por la Fiscalía entre enero de 2018 y junio de 2023, apenas 2.161 habían llegado a sentencia. Un 4,15 %. Dicho de otro modo, de cada cien familias que denuncian, noventa y cinco siguen esperando.',
      'Lo que esa brecha produce no es solo impunidad: produce desincentivo. Una madre que ve que la denuncia de su vecina no llegó a ninguna parte en cinco años calcula, con razón, qué le costará a su hija pasar por el mismo camino.',
      'Por eso el trabajo de prevención no puede esperar a que el sistema judicial mejore. Formar adultos capaces de detectar y actuar es, en la práctica, el único mecanismo que opera antes de que el daño ocurra.'
    ],
    fuentes: [
      { nombre: 'Asamblea Nacional del Ecuador — Fiscalía registra 86.962 denuncias (2015-2025)', url: 'https://www.asambleanacional.gob.ec/es/noticia/108168-fiscalia-registra-86962-denuncias-por-delitos-contra-la' },
      { nombre: 'Defensoría del Pueblo del Ecuador — 52.051 casos, 4,15 % con sentencia', url: 'https://www.dpe.gob.ec/mas-de-52-mil-casos-de-violencia-sexual-en-contra-de-ninos-ninas-y-adolescentes-nna-entre-enero-de-2018-y-junio-de-2023-y-solo-un-415-han-recibido-sentencia/' },
      { nombre: 'Infobae — Cada 90 minutos se denuncia un delito contra niñas y adolescentes', url: 'https://www.infobae.com/america/america-latina/2026/05/21/cada-90-minutos-se-denuncia-un-delito-sexual-contra-ninas-y-adolescentes-en-ecuador/' }
    ],
    social: {
      titular: 'Una denuncia cada 90 minutos',
      copy:
        'En Ecuador se registraron 86.962 denuncias por delitos contra la integridad de menores de edad en diez años. Solo el 4,15 % llegó a sentencia. El dato completo y las fuentes, en el enlace.'
    }
  },

  {
    id: 'ecuador-agresor-de-casa',
    accion: { texto: 'Si el riesgo vive dentro de casa, la barrera tiene que vivir cerca. Puedes ser esa barrera en seis sesiones.', cta: 'Quiero formarme', destino: 'voluntariado' },
    slug: 'ecuador-el-agresor-casi-siempre-vive-en-casa',
    categoria: 'familia',
    pais: 'Ecuador',
    fecha: '2026-10-21',
    titulo: 'El peligro no toca el timbre',
    resumen:
      'La Fiscalía ecuatoriana estimó que entre el 85 % y el 90 % de los agresores pertenecen al núcleo familiar o al círculo de conocidos. Eso cambia por completo dónde hay que poner la prevención.',
    cuerpo: [
      'La imagen del desconocido que se lleva a un niño de la calle organiza el miedo de casi todas las familias, y es la que menos corresponde a los datos. La Fiscalía General del Estado de Ecuador ha señalado que entre el 85 % y el 90 % de los agresores forman parte del núcleo intrafamiliar o del círculo de personas conocidas por la víctima. La cifra es de 2017 y sigue siendo la estimación más específica disponible; notas posteriores de la Fiscalía repiten el patrón sin desagregarlo.',
      'Esa proporción explica tres cosas que, por separado, parecen inexplicables. Primero, por qué la denuncia tarda años: denunciar significa romper la casa, no señalar a un extraño. Segundo, por qué tantos casos se retiran: la familia depende económicamente de la persona denunciada. Tercero, por qué la violencia se repite: el agresor conserva el acceso.',
      'También reordena la prevención. Si el riesgo estuviera afuera, bastaría con vigilar la puerta. Como está adentro, la única barrera posible es un adulto del entorno —una abuela, una tía, una vecina, una profesora— que sepa reconocer la señal y sepa qué hacer con ella.',
      'Ese es el supuesto de Adulto Protector: no se trata de enseñar a los niños a defenderse, que es pedirle a la parte más débil que resuelva el problema. Se trata de que el adulto que ya está cerca deje de dudar.'
    ],
    fuentes: [
      { nombre: 'Fiscalía General del Estado — El abuso sexual infantil en la mira de la Fiscalía', url: 'https://www.fiscalia.gob.ec/el-abuso-sexual-infantil-en-la-mira-de-la-fiscalia/' },
      { nombre: 'Radio Pichincha — Casos de abuso sexual en Ecuador', url: 'https://www.radiopichincha.com/dia-ninos-victimas-abuso-sexual-ecuador/' }
    ],
    social: {
      titular: 'El peligro no toca el timbre',
      copy:
        'Entre el 85 % y el 90 % de los agresores de la niñez en Ecuador pertenecen a la familia o al círculo cercano, según la Fiscalía. Por eso la prevención empieza dentro de casa, no en la calle.'
    }
  },

  {
    id: 'ecuador-escuelas-seis-mil',
    accion: { texto: 'Un colegio con protocolo real cambia esta estadística. Llevamos la formación a tu unidad educativa.', cta: 'Solicitar el taller', destino: 'contacto' },
    slug: 'ecuador-mas-de-6700-casos-en-escuelas',
    categoria: 'escuela',
    pais: 'Ecuador',
    fecha: '2026-10-21',
    titulo: 'Seis mil expedientes',
    resumen:
      'Human Rights Watch documentó una década de violencia sexual en el sistema educativo ecuatoriano. El problema no fue solo lo que ocurrió: fue lo que las escuelas hicieron después.',
    cuerpo: [
      'En diciembre de 2020, Human Rights Watch publicó un informe de 75 páginas sobre violencia sexual en el sistema educativo de Ecuador. Lo construyó con 83 entrevistas a sobrevivientes, familias, abogados y fiscales, y con el análisis de 38 casos. Según datos oficiales recogidos allí, 4.221 estudiantes habían sufrido violencia sexual relacionada con la escuela entre 2014 y mayo de 2020.',
      'La serie siguió creciendo. En julio de 2024 la organización reportó 6.368 casos denunciados en la década previa, cometidos por docentes, autoridades escolares, personal administrativo, conserjes, conductores de transporte escolar y otros estudiantes. En su Informe Mundial 2025, la cifra registrada por las autoridades entre enero de 2014 y agosto de 2024 superaba los 6.700 casos. Una cobertura de la agencia AP contabilizó 6.516 casos con 7.303 víctimas, porque algunos episodios afectaron a más de una.',
      'Las cifras varían según la fecha de corte y según se cuenten casos o víctimas. Conviene citarlas con su fuente exacta, porque la discrepancia se usa a veces para descalificar el conjunto.',
      'El hallazgo central del informe no es el volumen, sino el comportamiento institucional: escuelas que no reportaron, autoridades que trasladaron al denunciado en lugar de apartarlo, y familias que descubrieron que denunciar en la institución equivalía a avisar al agresor. En 2024, HRW constató que esa falta de reporte continuaba pese a las medidas adoptadas.',
      'La lección operativa es incómoda para cualquier colegio: un protocolo que obliga a informar primero a la autoridad interna, y no a la fiscalía, protege a la institución y no al estudiante.'
    ],
    fuentes: [
      { nombre: 'Human Rights Watch — Ecuador: altos niveles de violencia sexual en las escuelas (2020)', url: 'https://www.hrw.org/news/2020/12/09/ecuador-high-levels-sexual-violence-schools' },
      { nombre: 'Human Rights Watch — Informe Mundial 2025, capítulo Ecuador', url: 'https://www.hrw.org/es/world-report/2025/country-chapters/ecuador' },
      { nombre: 'JURIST — La violencia sexual en escuelas de Ecuador persiste pese a las medidas (2024)', url: 'https://www.jurist.org/news/2024/07/hrw-sexual-violence-in-ecuador-schools-persists-despite-implemented-measures/' },
      { nombre: 'Swissinfo — Más de 6.000 casos en escuelas de Ecuador en 10 años', url: 'https://www.swissinfo.ch/spa/m%C3%A1s-de-6.000-casos-de-abuso-sexual-en-escuelas-de-ecuador-en-10-a%C3%B1os,-denuncia-hrw/84837348' }
    ],
    social: {
      titular: 'Una década de expedientes',
      copy:
        'Human Rights Watch documentó más de 6.700 casos de violencia contra estudiantes en escuelas de Ecuador entre 2014 y 2024. El patrón que más se repite: la institución trasladó al denunciado en vez de apartarlo.'
    }
  },

  {
    id: 'escuela-protocolo-que-protege',
    accion: { texto: 'Pide hoy el protocolo del colegio de tu hija o hijo. Si no te convence, escríbenos y lo revisamos contigo.', cta: 'Escribirnos', destino: 'contacto' },
    slug: 'el-protocolo-escolar-que-protege-a-la-institucion',
    categoria: 'escuela',
    pais: 'Ecuador y Venezuela',
    fecha: '2026-10-21',
    titulo: 'El protocolo que no protege',
    resumen:
      'Hay una diferencia práctica entre un protocolo escolar que funciona y uno que existe. La señal de alarma es a quién se avisa primero.',
    cuerpo: [
      'Casi todos los colegios tienen hoy un protocolo contra la violencia. La pregunta útil no es si existe, sino qué ordena hacer en la primera hora. Un protocolo que manda informar al rectorado y esperar su decisión convierte a la autoridad escolar en filtro. Si el denunciado es parte de esa autoridad, o amigo suyo, el filtro se cierra.',
      'El informe de Human Rights Watch sobre Ecuador documentó exactamente ese mecanismo: casos que no se reportaron a la justicia, denunciados trasladados a otras sedes, y familias presionadas para resolver el asunto puertas adentro. En 2024, la organización verificó que la falta de reporte seguía ocurriendo pese a las medidas anunciadas.',
      'Un protocolo que sí protege tiene cuatro rasgos verificables. El aviso a la fiscalía o a la autoridad de protección no depende de la aprobación del rectorado. El denunciado queda apartado del contacto con estudiantes mientras dura la investigación, sin que eso implique prejuzgar. Nadie interroga al estudiante dentro de la escuela: eso corresponde a personal especializado. Y existe un registro escrito con fecha, firmado, que no se puede alterar después.',
      'Para una familia hay una forma rápida de evaluarlo: pedir el protocolo por escrito y buscar en qué punto aparece la palabra fiscalía. Si aparece al final, o no aparece, ya sabe en qué orden están las prioridades.',
      'Para una escuela hay otra: revisar si el adulto que recibe la primera confidencia tiene formación para sostenerla. Un docente bienintencionado que interroga por su cuenta puede inutilizar la prueba y obligar al estudiante a repetir el relato cinco veces.'
    ],
    fuentes: [
      { nombre: 'Human Rights Watch — Ecuador: altos niveles de violencia sexual en las escuelas', url: 'https://www.hrw.org/news/2020/12/09/ecuador-high-levels-sexual-violence-schools' },
      { nombre: 'JURIST — La violencia sexual en escuelas de Ecuador persiste (2024)', url: 'https://www.jurist.org/news/2024/07/hrw-sexual-violence-in-ecuador-schools-persists-despite-implemented-measures/' }
    ],
    social: {
      titular: 'Pide el protocolo por escrito',
      copy:
        'Prueba rápida para evaluar el colegio de tu hija o hijo: pide el protocolo y busca dónde aparece la palabra «fiscalía». Si está al final, o no está, ya sabes a quién protege.'
    }
  },

  {
    id: 'venezuela-zulia-cada-tres-dias',
    accion: { texto: 'Donde no hay cifras oficiales, contar es resistir. Sostén el trabajo de registro y atención en Valera.', cta: 'Sostener la operación', destino: 'dona' },
    slug: 'venezuela-zulia-cada-tres-dias',
    categoria: 'cifras',
    pais: 'Venezuela',
    fecha: '2026-10-21',
    titulo: 'Uno cada tres días',
    resumen:
      'Sin estadísticas oficiales actualizadas, el recuento del estado Zulia en 2025 tuvo que hacerse rastreando publicaciones en redes. Aun así, el patrón del agresor quedó claro.',
    cuerpo: [
      'Durante 2025, un recuento documentado en el estado Zulia registró 118 niñas, niños y adolescentes víctimas de violencia sexual: aproximadamente uno cada tres días. El trabajo fue realizado por la Agencia PANA con colaboración de Cecodap, y tiene una particularidad que dice mucho sobre el estado del problema en Venezuela: la base de datos se construyó rastreando publicaciones en redes sociales, porque no existen estadísticas oficiales actualizadas.',
      'Un conteo hecho así es, por definición, un piso y no un techo. Solo capta lo que alguien hizo público. Lo que ocurre en casas sin conexión, en comunidades sin prensa local o en familias que deciden callar, no entra.',
      'El dato más útil del reporte es el perfil del agresor: el 55 % de los casos fue cometido por personas con vínculo de parentesco o cercanía directa con la víctima. El listado incluye padres, padrastros, abuelos, tíos y vecinos.',
      'Coincide con lo que arroja el diagnóstico nacional de la Red por los Derechos Humanos de Niños, Niñas y Adolescentes: 41,75 % de los casos vinculados al ámbito familiar, 52,58 % a personas del entorno comunitario o desconocidas, y 5,67 % a docentes o líderes religiosos. Son metodologías distintas y no deben sumarse, pero apuntan a lo mismo: el riesgo está en el círculo cotidiano.',
      'La consecuencia operativa es directa. En ausencia de registro oficial, la primera tarea de una organización de protección no es solo atender: es contar. Sin cifras propias y verificables, no hay política pública que reclamar.'
    ],
    fuentes: [
      { nombre: 'Cecodap — En 2025, cada tres días abusaron de un niño, niña o adolescente en el Zulia', url: 'https://cecodap.org/en-2025-cada-tres-dias-abusaron-sexualmente-a-un-nino-nina-o-adolescente-en-zulia/' },
      { nombre: 'El Estímulo — Abuso de menores en Zulia 2025', url: 'https://elestimulo.com/venezuela/2026-05-26/abuso-menores-zulia-2025-cecodap/' },
      { nombre: 'RedHNNA — Diagnóstico nacional sobre violencias sexuales contra niñas, niños y adolescentes', url: 'https://www.redhnna.org/wp-content/uploads/INFORME-VENEZUELA-violencias.pdf' }
    ],
    social: {
      titular: 'Cuando hay que contar a mano',
      copy:
        'En Zulia, 118 niñas, niños y adolescentes fueron víctimas en 2025: uno cada tres días. El recuento se hizo rastreando redes sociales, porque no hay cifras oficiales. El 55 % de los agresores era familiar o cercano.'
    }
  },

  {
    id: 'venezuela-ministerio-publico-7165',
    accion: { texto: 'Lo que falta no es conciencia: son horas de terapia disponibles. Cuarenta dólares pagan una sesión.', cta: 'Regalar una sesión', destino: 'tienda' },
    slug: 'venezuela-7165-casos-y-un-vacio-de-datos',
    categoria: 'cifras',
    pais: 'Venezuela',
    fecha: '2026-10-21',
    titulo: 'El dato que falta',
    resumen:
      'La última cifra nacional difundida cubre de enero de 2022 a mayo de 2023. Lo que vino después no está publicado, y esa ausencia también es un dato.',
    cuerpo: [
      'El Ministerio Público venezolano informó de 7.165 casos de violencia sexual contra niñas, niños y adolescentes registrados entre enero de 2022 y mayo de 2023. Es la referencia nacional más citada, y también la más vieja: no hay una actualización pública comparable para los años siguientes.',
      'Ese vacío tiene consecuencias concretas. Sin serie estadística no se puede saber si el problema crece o decrece, no se puede asignar presupuesto por territorio, y no se puede evaluar si una política funcionó. Las organizaciones civiles terminan haciendo el trabajo que corresponde al Estado, con recursos que son una fracción.',
      'Lo que sí hay son indicadores indirectos. Cecodap reportó un aumento del 73 % en las solicitudes de atención por abuso sexual, acoso y maltrato. En su servicio de atención psicológica, la violencia sexual representó el 8,76 % de las denuncias recibidas durante 2025, y es la forma de violencia asociada a mayor riesgo suicida entre quienes atiende. La organización también alertó sobre un alza del 31,5 % en la ideación suicida entre adolescentes.',
      'Un aumento en las solicitudes de ayuda no equivale a un aumento de casos: puede significar que más personas se atreven a pedirla. Pero cuando ese indicador sube al mismo tiempo que la ideación suicida adolescente, la lectura optimista se vuelve difícil de sostener.',
      'Para quien quiera ayudar desde fuera, esto define la prioridad: financiar atención psicológica sostenida, no campañas de sensibilización. La conciencia sobre el problema ya existe; lo que falta son horas de terapia disponibles.'
    ],
    fuentes: [
      { nombre: 'Cecodap — Ministerio Público registró 7.165 casos desde 2022', url: 'https://cecodap.org/ministerio-publico-ha-registrado-7-165-casos-de-abuso-sexual-infatil-desde-2022-en-venezuela/' },
      { nombre: 'Efecto Cocuyo — Aumentan 73 % las solicitudes en Cecodap', url: 'https://efectococuyo.com/la-humanidad/aumentan-73-las-solicitudes-en-cecodap-por-abuso-sexual-acoso-y-maltrato-en-venezuela/' },
      { nombre: 'El Universal — Cecodap alerta que aumentó 31,5 % la ideación suicida en adolescentes', url: 'https://www.eluniversal.com/sucesos/243183/cecodap-alerta-que-aumento-315-ideacion-suicida-en-adolescentes' }
    ],
    social: {
      titular: 'El dato que falta',
      copy:
        'La última cifra nacional de Venezuela sobre violencia contra la niñez cubre hasta mayo de 2023. Lo que pasó después no está publicado. Mientras tanto, las solicitudes de ayuda psicológica subieron 73 %.'
    }
  },

  {
    id: 'instituciones-fe-patron',
    accion: { texto: 'La secuencia se rompe en el primer paso. Lleva la política de salvaguarda a tu comunidad.', cta: 'Pedir la guía', destino: 'contacto' },
    slug: 'instituciones-de-fe-el-patron-que-se-repite',
    categoria: 'instituciones-fe',
    pais: 'Ecuador y Venezuela',
    fecha: '2026-10-21',
    titulo: 'El patrón que se repite',
    resumen:
      'Los casos documentados en la región comparten una secuencia reconocible. Entenderla sirve más que indignarse con cada episodio por separado.',
    cuerpo: [
      'En 2014, el Comité de los Derechos del Niño de Naciones Unidas habló de decenas de miles de casos de abuso sexual cometidos dentro de la Iglesia católica a nivel mundial. En América Latina, la Red Internacional de los Derechos del Niño (CRIN) documentó la situación en dieciocho países de habla hispana y Brasil, y anticipó una tercera oleada de denuncias en la región tras las de Norteamérica, Irlanda y Europa.',
      'Los casos con sentencia pública en Ecuador y Venezuela comparten una secuencia que vale la pena nombrar, porque se puede interrumpir en cada uno de sus pasos. Primero, una denuncia interna que no sale de la institución. Segundo, el traslado del denunciado a otra parroquia, diócesis o colegio, que los documentos suelen registrar como decisión pastoral. Tercero, un nuevo episodio en el destino. Cuarto, una denuncia penal que llega años tarde, cuando la prueba se ha degradado.',
      'Ejemplos con registro judicial: en Ecuador, un sacerdote de Quito fue condenado en 2020 a nueve años de prisión por abusar de dos hermanas, y dos años antes un sacerdote de Guayaquil recibió una condena de veinte años. En Venezuela, el primer caso eclesiástico que llegó a tribunales fue en 2013. En el estado Lara, un sacerdote acusado en 1996 fue condenado en 2006 a siete años, cumplió dos y después fue readmitido al ejercicio sacerdotal, según documentó The Washington Post.',
      'El Comité de los Derechos del Niño de la ONU recomendó a Ecuador establecer una comisión independiente para investigar estos casos. No hemos podido verificar que esa comisión se haya constituido.',
      'Para una familia que participa en una comunidad de fe, la pregunta práctica no es sobre la fe sino sobre el procedimiento: ¿esta institución tiene una política escrita de salvaguarda, verifica antecedentes de quienes trabajan con menores, aplica la regla de que ningún adulto quede a solas con un niño, y denuncia a la justicia civil antes que a su propia jerarquía? Donde esas cuatro respuestas son sí, la secuencia descrita arriba no puede completarse.'
    ],
    fuentes: [
      { nombre: 'CRIN — Justicia para sobrevivientes de abuso sexual infantil en la Iglesia católica de América Latina', url: 'https://home.crin.org/issues/sexual-violence/america-latina-abuso-sexual-infantil-iglesia-catolica' },
      { nombre: 'Infobae — Los abusos sexuales a menores en la Iglesia católica en América Latina', url: 'https://www.infobae.com/america/america-latina/2021/10/05/los-abusos-sexuales-a-menores-en-la-iglesia-catolica-en-america-latina/' },
      { nombre: 'Casos de abuso sexual de la Iglesia católica en Venezuela — recopilación documental', url: 'https://es.wikipedia.org/wiki/Casos_de_abuso_sexual_de_la_Iglesia_cat%C3%B3lica_en_Venezuela' }
    ],
    social: {
      titular: 'La secuencia que se repite',
      copy:
        'Denuncia interna · traslado del denunciado · nuevo episodio en el destino · denuncia penal años tarde. Cuatro pasos documentados en la región, y cuatro oportunidades de interrumpirlos. Las fuentes, en el enlace.'
    }
  },

  {
    id: 'cuatro-preguntas-institucion',
    accion: { texto: 'Haz las cuatro preguntas esta semana. Y si quieres que formemos al equipo de esa institución, dilo.', cta: 'Proponer una formación', destino: 'contacto' },
    slug: 'cuatro-preguntas-antes-de-dejar-a-tu-hijo',
    categoria: 'instituciones-fe',
    pais: 'Ecuador, Venezuela y Estados Unidos',
    fecha: '2026-10-21',
    titulo: 'Cuatro preguntas en recepción',
    resumen:
      'Sirven igual para un colegio, un club deportivo, un grupo juvenil o una parroquia. Se responden en cinco minutos y revelan casi todo.',
    cuerpo: [
      'No hace falta ser especialista para evaluar si un lugar es seguro. Hacen falta cuatro preguntas, hechas en recepción, sin tono de sospecha. La reacción ante ellas ya es parte de la respuesta.',
      'La primera: ¿verifican antecedentes penales de todas las personas adultas que tienen contacto con menores, incluidos voluntarios y personal de apoyo? La trampa habitual es verificar solo a docentes o personal de planta, y dejar fuera a quien conduce la furgoneta o acompaña los campamentos.',
      'La segunda: ¿existe una regla escrita que impida que un adulto quede a solas con un niño? La llamada regla de dos adultos es la medida más barata y más eficaz que existe. Donde no está escrita, no se aplica.',
      'La tercera: si alguien denuncia, ¿a quién se avisa primero y en qué plazo? La respuesta correcta nombra a una autoridad externa —fiscalía, protección de la niñez, línea de emergencia— y un plazo en horas. Si la respuesta empieza por un cargo interno, el filtro ya existe.',
      'La cuarta: ¿quién recibe las denuncias y de quién depende esa persona? Un canal cuyo responsable reporta al director del centro no es independiente. En una institución bien organizada, el comité de salvaguarda no depende de quien podría ser denunciado.',
      'Una institución seria responde estas preguntas con naturalidad y suele tener el documento a mano. Una institución que se ofende es, por sí misma, un resultado.'
    ],
    fuentes: [
      { nombre: 'Human Rights Watch — Ecuador: altos niveles de violencia sexual en las escuelas', url: 'https://www.hrw.org/news/2020/12/09/ecuador-high-levels-sexual-violence-schools' },
      { nombre: 'CRIN — Justicia para sobrevivientes en América Latina', url: 'https://home.crin.org/issues/sexual-violence/america-latina-abuso-sexual-infantil-iglesia-catolica' }
    ],
    social: {
      titular: 'Cuatro preguntas en recepción',
      copy:
        '¿Verifican antecedentes de todos los adultos? ¿Hay regla escrita de dos adultos? ¿A quién avisan primero y en cuántas horas? ¿De quién depende quien recibe las denuncias? Cómo se ofenden ya es una respuesta.'
    }
  },

  {
    id: 'impunidad-415',
    accion: { texto: 'Acompañar de verdad empieza después de la denuncia. Tu aporte mensual sostiene ese acompañamiento.', cta: 'Donar cada mes', destino: 'dona' },
    slug: 'el-4-15-por-ciento',
    categoria: 'justicia',
    pais: 'Ecuador',
    fecha: '2026-10-21',
    titulo: 'El 4,15 %',
    resumen:
      'De 52.051 casos reportados en cinco años y medio, 2.161 llegaron a sentencia. El resto describe el verdadero recorrido de una familia que decide denunciar.',
    cuerpo: [
      'La Defensoría del Pueblo de Ecuador publicó una cifra que debería ordenar cualquier conversación sobre el tema: entre enero de 2018 y junio de 2023 se reportaron 52.051 casos de violencia sexual contra niñas, niños y adolescentes, y solo 2.161 habían recibido sentencia. El 4,15 %.',
      'Conviene traducir ese porcentaje a experiencia concreta. Una familia que denuncia entra en un recorrido de peritajes, audiencias diferidas, cambios de fiscal y, con frecuencia, convivencia forzada con el denunciado mientras el proceso avanza. Si el agresor es el sostén económico, la denuncia también significa quedarse sin ingresos. Si es un familiar querido por otros miembros de la casa, significa perder a la familia extendida.',
      'Con ese costo sobre la mesa, el 95,85 % restante deja de parecer una estadística de ineficiencia judicial y se convierte en un incentivo: el sistema le está diciendo a la próxima familia que el camino casi nunca llega a ninguna parte.',
      'Nada de esto significa que no haya que denunciar. Significa que una organización que solo acompaña hasta la puerta de la fiscalía no está acompañando. El acompañamiento útil cubre lo que viene después: apoyo psicológico sostenido durante el proceso, asesoría legal que explique cada etapa, y ayuda material cuando la denuncia deja a la familia sin ingresos.',
      'También significa que la prevención no es un complemento del sistema judicial, sino el único punto del proceso donde todavía se puede evitar el daño.'
    ],
    fuentes: [
      { nombre: 'Defensoría del Pueblo del Ecuador — 52.051 casos, 4,15 % con sentencia', url: 'https://www.dpe.gob.ec/mas-de-52-mil-casos-de-violencia-sexual-en-contra-de-ninos-ninas-y-adolescentes-nna-entre-enero-de-2018-y-junio-de-2023-y-solo-un-415-han-recibido-sentencia/' },
      { nombre: 'Asamblea Nacional del Ecuador — Registro de denuncias de la Fiscalía', url: 'https://www.asambleanacional.gob.ec/es/noticia/108168-fiscalia-registra-86962-denuncias-por-delitos-contra-la' }
    ],
    social: {
      titular: '4,15 %',
      copy:
        'De 52.051 casos reportados en Ecuador entre 2018 y 2023, solo el 4,15 % llegó a sentencia. Denunciar cuesta ingresos, tiempo y familia. Acompañar de verdad empieza después de la denuncia, no antes.'
    }
  },

  {
    id: 'senales-por-edad',
    accion: { texto: 'Reconocer la señal es la mitad; saber qué hacer es la otra. Las dos se aprenden.', cta: 'Aprender el método', destino: 'voluntariado' },
    slug: 'senales-de-alerta-por-edad',
    categoria: 'familia',
    pais: 'Guía práctica',
    fecha: '2026-10-21',
    titulo: 'Señales, edad por edad',
    resumen:
      'Lo que en un niño de cuatro años es una señal, en uno de doce puede ser normal. Esta guía separa por etapas lo que conviene mirar.',
    cuerpo: [
      'Ninguna señal aislada prueba nada. Lo que debe activar la atención de un adulto es un cambio: algo que antes no pasaba y ahora sí, o algo que el niño ya había superado y reaparece.',
      'De 0 a 5 años. Retroceso en hábitos adquiridos —volver a mojar la cama, perder el habla ganada—, terror inexplicable ante una persona o un lugar concreto, dolor o lesiones sin explicación coherente, infecciones recurrentes, conductas sexuales que no corresponden a la etapa. A esta edad el niño no tiene lenguaje para nombrar lo que ocurre; el cuerpo y el juego hablan antes que las palabras.',
      'De 6 a 11 años. Caída brusca del rendimiento escolar, aislamiento de amistades, negativa persistente a quedarse con alguien específico, dibujos o juegos con contenido que no corresponde a la edad, mentiras nuevas, dolores de cabeza o estómago sin causa médica, dinero o regalos que no sabe explicar.',
      'De 12 a 17 años. Autolesiones, cambios drásticos en la forma de vestir o en el cuidado personal, consumo de alcohol o drogas, fugas, conductas sexuales de riesgo, ideación suicida, relaciones con adultos que le llevan muchos años. En Venezuela, Cecodap advirtió un alza del 31,5 % en la ideación suicida adolescente, y señala la violencia sexual como la forma de violencia asociada a mayor riesgo.',
      'En cualquier etapa, hay dos señales que vienen del entorno y no del niño: un adulto que insiste en quedarse a solas con él, y una relación de secretos entre ese adulto y el niño.',
      'Qué hacer cuando aparece el patrón: escuchar sin interrogar, no prometer guardar el secreto, anotar por escrito lo que el niño dijo con sus propias palabras y la fecha, no confrontar al presunto agresor y activar la ruta de denuncia. Si hay riesgo inmediato, emergencias primero.'
    ],
    fuentes: [
      { nombre: 'El Universal — Cecodap: aumento del 31,5 % en ideación suicida adolescente', url: 'https://www.eluniversal.com/sucesos/243183/cecodap-alerta-que-aumento-315-ideacion-suicida-en-adolescentes' },
      { nombre: 'Cecodap — Educar para proteger', url: 'https://cecodap.org/educarparaproteger-vamos-todos-contra-el-abuso-y-la-explotacion-sexual-infantil/' }
    ],
    social: {
      titular: 'No es una señal: es un cambio',
      copy:
        'Lo que debe alertarte no es un gesto aislado, sino algo que antes no pasaba y ahora sí. Guía por edades, de 0 a 17 años, y qué hacer en las primeras 24 horas.'
    }
  },

  {
    id: 'ecuador-1388-ninas-madres',
    accion: { texto: 'Cada caso debería tener un expediente y una niña acompañada. Nosotros ponemos el acompañamiento.', cta: 'Apoyar el programa', destino: 'dona' },
    slug: 'ecuador-1388-ninas-fueron-madres-en-2025',
    categoria: 'cifras',
    pais: 'Ecuador',
    fecha: '2026-10-21',
    titulo: 'Cuatro partos al día',
    resumen:
      'El dato lo publicó el INEC en agosto de 2026. Casi cuatro partos diarios de niñas que, por edad, no pueden consentir una relación sexual.',
    cuerpo: [
      'El Registro Estadístico de Nacidos Vivos del INEC contabilizó 1.388 nacimientos de madres de 10 a 14 años durante 2025 en Ecuador. Son casi cuatro partos diarios, y equivalen a una tasa de 1,8 por cada mil niñas de ese grupo de edad.',
      'Frente a 2024, cuando hubo 1.621, la cifra cae un 14,4 % y es la tasa más baja desde 2006. Es una mejora real y conviene decirlo. También conviene decir lo otro: 1.388 sigue siendo una cifra de emergencia.',
      'La razón es jurídica antes que estadística. En Ecuador, una niña menor de 14 años no puede consentir una relación sexual; cualquier acto de esa naturaleza es violación según el Código Orgánico Integral Penal. Un parto en ese grupo de edad es, por tanto, la evidencia física de un delito que ya ocurrió. No es un problema de educación sexual insuficiente: es un caso penal con una víctima identificable.',
      'Un estudio del Ministerio de Salud y el UNFPA estimó que el 80 % de los embarazos en menores de 14 años eran producto de violencia sexual. Es una cifra de 2012 y conviene citarla con su fecha, pero sigue siendo la referencia más citada en el país.',
      'Hay una diferencia técnica que se presta a confusión: los nacidos vivos del INEC no son lo mismo que los embarazos. No incluyen pérdidas, interrupciones ni partos no registrados. El número real de niñas embarazadas es mayor que el número de niñas que dieron a luz.',
      'Qué cambia esto para quien quiera ayudar: cada uno de esos 1.388 casos debería tener un expediente penal abierto y una niña recibiendo acompañamiento psicológico y legal. La distancia entre esos dos números —partos registrados y expedientes con sentencia— es el verdadero indicador del sistema.'
    ],
    fuentes: [
      { nombre: 'Radio Pichincha — 1.388 niñas fueron madres en Ecuador en 2025 (datos INEC)', url: 'https://www.radiopichincha.com/embarazo-infantil-ecuador-1388-ninas-2025/' },
      { nombre: 'Prensa Latina — Ecuador registró 1.388 nacimientos de madres menores de 15 años', url: 'https://www.prensa-latina.cu/2026/08/23/ecuador-registro-mil-388-nacimientos-de-madres-menores-de-15-anos/' },
      { nombre: 'El Diario — Partos de menores de edad en Ecuador', url: 'https://www.eldiario.ec/ecuador/mas-de-1300-ninas-fueron-madres-y-los-partos-de-menores-de-edad-marcan-una-dura-realidad-en-ecuador-23082026' }
    ],
    social: {
      titular: 'Cuatro cada día',
      copy:
        'En Ecuador, 1.388 niñas de 10 a 14 años dieron a luz en 2025, según el INEC. A esa edad la ley no admite consentimiento: cada caso es la evidencia de un delito. La cifra bajó 14 % frente a 2024, y sigue siendo una emergencia.'
    }
  },

  {
    id: 'ecuador-amazonia-tasa',
    accion: { texto: 'Llegar a la Amazonía cuesta más y por eso casi nadie va. Tu aporte paga ese trayecto.', cta: 'Financiar una brigada', destino: 'tienda' },
    slug: 'la-amazonia-donde-la-tasa-se-dispara',
    categoria: 'cifras',
    pais: 'Ecuador',
    fecha: '2026-10-21',
    titulo: 'El mapa del riesgo',
    resumen:
      'Morona Santiago casi triplica la media nacional. El mapa del embarazo infantil en Ecuador coincide con el mapa de la distancia a un hospital.',
    cuerpo: [
      'La tasa nacional de nacimientos en niñas de 10 a 14 años fue de 1,8 por cada mil en 2025. En Morona Santiago fue de 4,9. Le siguen Napo con 3,8, Zamora Chinchipe con 3,7 y Pastaza con 3,5. Las cuatro son provincias amazónicas.',
      'Cuando un indicador social se concentra así en el territorio, rara vez se explica por la cultura y casi siempre por el acceso. En esas provincias, la distancia al centro de salud más cercano se mide en horas de camino, muchas comunidades no tienen cobertura telefónica estable para llamar a emergencias, y la unidad educativa más próxima puede estar a una hora de trayecto.',
      'Cada una de esas distancias es una oportunidad perdida de detección. El sistema de protección de la niñez funciona cuando hay un adulto formado cerca: una profesora, una enfermera, una promotora comunitaria. Donde ese adulto no existe o atiende a diez comunidades, la señal no llega a tiempo.',
      'También hay un efecto estadístico que conviene nombrar: en poblaciones pequeñas, las tasas se mueven mucho con pocos casos. Eso no invalida el dato, pero obliga a mirar la serie de varios años antes de declarar una tendencia.',
      'La consecuencia para un programa de prevención es de diseño, no de discurso: formar adultos protectores en la Amazonía no puede replicar el modelo urbano de talleres presenciales semanales. Exige formación de agentes locales que ya viven allí, materiales que funcionen sin conexión y un canal de consulta que opere por radio o mensajería intermitente.'
    ],
    fuentes: [
      { nombre: 'Primicias — Embarazo adolescente en Ecuador y las provincias más afectadas', url: 'https://www.primicias.ec/sociedad/ecuador-salud-embarazo-adolescente-ninas-partos-diarios-provincias-violencia-sexual-117342/' },
      { nombre: 'Radio Pichincha — Embarazo infantil en Ecuador, datos por provincia', url: 'https://www.radiopichincha.com/embarazo-infantil-ecuador-1388-ninas-2025/' }
    ],
    social: {
      titular: 'El mapa lo dice todo',
      copy:
        'Tasa nacional: 1,8 por cada mil niñas de 10 a 14 años. Morona Santiago: 4,9. Napo: 3,8. El embarazo infantil en Ecuador se concentra donde el hospital y la escuela quedan a horas de camino.'
    }
  },

  {
    id: 'meta-2035',
    accion: { texto: 'Pedir la metodología es gratis y cambia políticas. Súmate al trabajo de incidencia.', cta: 'Quiero participar', destino: 'voluntariado' },
    slug: 'una-meta-para-2035-que-ya-se-cumplio',
    categoria: 'justicia',
    pais: 'Ecuador',
    fecha: '2026-10-21',
    titulo: 'Una meta que ya se cumplió',
    resumen:
      'La política intersectorial se propone llegar a una tasa de 1,81 en diez años. El registro de 2025 ya marcó 1,8. Vale la pena mirar esa aritmética de cerca.',
    cuerpo: [
      'Ecuador aprobó una Política Intersectorial para el Abordaje Integral del Embarazo en Adolescentes con horizonte 2026-2035, con financiamiento y protocolo de protección asociados. Entre sus metas figura reducir a 1,81 la tasa de embarazo en niñas de 10 a 14 años hacia 2035.',
      'El dato que conviene poner al lado: según el INEC, la tasa de nacidos vivos en ese grupo fue de 1,8 por cada mil niñas en 2025.',
      'Antes de concluir nada, hay que ser rigurosos con la comparación. La meta habla de tasa de embarazo y el registro del INEC mide nacidos vivos, que es un subconjunto: no incluye pérdidas, interrupciones ni partos sin registro. Son dos indicadores distintos y es posible que la meta esté definida sobre una base de cálculo diferente.',
      'Dicho eso, la coincidencia numérica merece una pregunta pública dirigida a quien diseñó la política: ¿cuál es exactamente el indicador de base, en qué año se fijó, y qué reducción real representa respecto de los datos de 2025? Si la respuesta no está publicada, la meta no es verificable, y una meta no verificable no compromete a nadie.',
      'Este es el tipo de control que una organización de la sociedad civil puede ejercer sin confrontación: leer el documento, comparar con la estadística oficial y pedir la metodología por escrito. No hace falta denunciar nada; basta con preguntar bien y publicar la respuesta.'
    ],
    fuentes: [
      { nombre: 'Vicepresidencia del Ecuador — Plan trimestral y política de prevención hasta 2035', url: 'https://www.vicepresidencia.gob.ec/el-gobierno-nacional-aprueba-plan-trimestral-para-prevenir-el-embarazo-adolescente-e-impulsa-su-protocolo-de-proteccion-y-financiamiento-hasta-2035/' },
      { nombre: 'El Telégrafo — Ecuador adopta política para reducir el embarazo adolescente hasta 2035', url: 'https://www.eltelegrafo.com.ec/noticias/salud/220/ecuador-politica-embarazo-adolescente-2035' },
      { nombre: 'Radio Pichincha — Tasa de 2025 según el INEC', url: 'https://www.radiopichincha.com/embarazo-infantil-ecuador-1388-ninas-2025/' }
    ],
    social: {
      titular: 'Una meta a diez años',
      copy:
        'La política pública de Ecuador se propone llegar en 2035 a una tasa de 1,81 en niñas de 10 a 14 años. El registro oficial de 2025 ya marcó 1,8. Puede que midan cosas distintas: por eso hay que pedir la metodología.'
    }
  },

  {
    id: 'dato-mal-citado',
    accion: { texto: 'Compartir una cifra bien citada protege la causa. Toma los datos de aquí y úsalos.', cta: 'Ver el kit de prensa', destino: 'prensa' },
    slug: 'cuando-un-dato-se-cita-mal',
    categoria: 'cifras',
    pais: 'Ecuador',
    fecha: '2026-10-21',
    titulo: 'El dato que te desarma',
    resumen:
      '«88 niñas dan a luz cada día» circuló como titular. El número es real, pero no dice lo que parece. Y esa diferencia la aprovechan quienes niegan el problema.',
    cuerpo: [
      'La cifra de 88 partos diarios se usó públicamente en Ecuador asociada a la palabra niñas. Una verificación periodística mostró que corresponde a todas las madres menores de 20 años: en 2024 hubo 32.201 nacimientos en ese grupo, que dividido entre los días del año da 88.',
      'El dato es correcto y el problema que describe es grave. El error está en la etiqueta. Cuando se llama niñas a las madres de 19 años, se mezcla una realidad penal —una menor de 14 que no puede consentir— con otra distinta, que exige otras políticas.',
      'Para una organización que trabaja con datos, esto no es un detalle de estilo. Cada vez que una cifra mal etiquetada se desmonta, quienes quieren restar importancia al problema obtienen un argumento gratis: si se exageró ahí, dicen, se exagera en todo. El costo lo paga la causa, no quien se equivocó.',
      'La regla interna que seguimos es simple y la hacemos pública para que se nos pueda exigir. Primero: nombrar siempre el grupo de edad exacto. Segundo: distinguir denuncias de casos, y casos de víctimas, porque un caso puede tener varias. Tercero: decir el periodo y el organismo. Cuarto: si el dato tiene más de tres años, advertirlo en la misma frase.',
      'La cifra que sí corresponde a niñas en sentido estricto está en el mismo registro: 1.388 nacimientos de madres de 10 a 14 años en 2025. No necesita inflarse para ser intolerable.'
    ],
    fuentes: [
      { nombre: 'Lupa — Verificación: ¿88 niñas dan a luz al día en Ecuador?', url: 'https://lupa.com.ec/verificaciones/embarazo-adolescente-ecuador/' },
      { nombre: 'Primicias — Partos diarios y provincias más afectadas', url: 'https://www.primicias.ec/sociedad/ecuador-salud-embarazo-adolescente-ninas-partos-diarios-provincias-violencia-sexual-117342/' }
    ],
    social: {
      titular: 'Un dato mal citado le hace un favor a quien niega el problema',
      copy:
        'El titular decía «88 niñas dan a luz cada día». El número real corresponde a madres menores de 20 años. La cifra que sí habla de niñas: 1.388 partos de menores de 15 años en 2025. No hace falta exagerar.'
    }
  },

  {
    id: 'grooming-ecuador',
    accion: { texto: 'Habla con tu hija o hijo esta noche, antes de que haga falta. Y pásale esta guía a otra familia.', cta: 'Conocer los programas', destino: 'proyectos' },
    slug: 'grooming-en-ecuador-de-22-a-124-denuncias',
    categoria: 'escuela',
    pais: 'Ecuador',
    fecha: '2026-10-21',
    titulo: 'De 22 a 124 denuncias',
    resumen:
      'Las denuncias por grooming se quintuplicaron en una década en Ecuador. Lo relevante no es el crecimiento, sino lo que revela sobre dónde ocurre hoy el primer contacto.',
    cuerpo: [
      'Según ChildFund, las denuncias por grooming —la captación de un menor en línea por parte de un adulto que finge ser otra persona o gana su confianza para fines sexuales— pasaron de 22 en 2014 a 124 en 2024 en Ecuador, con 1.584 denuncias acumuladas en ese periodo. La organización señala además que el 52 % de los casos de violencia sexual digital registrados por la Fiscalía están vinculados a esta modalidad.',
      'Un análisis realizado en Quito con datos de la Fiscalía entre 2020 y 2024 eleva esa proporción al 86,6 % de las denuncias de violencia sexual digital en el cantón. Son mediciones distintas —una nacional, otra local— y no deben compararse directamente, pero ambas apuntan al mismo desplazamiento: el primer contacto dejó de ocurrir en el parque.',
      'En encuestas de la misma organización a adolescentes ecuatorianos, el 62,4 % reconoce la sextorsión como un riesgo y el 59,3 % identifica el grooming. Los adolescentes saben que existe. Lo que suele faltar es la certeza de que, si cuentan lo que pasó, en casa no van a quitarles el teléfono y culparlos.',
      'Ese detalle decide todo. La reacción más común de una madre o un padre ante una señal digital es retirar el dispositivo. Para el adolescente, eso convierte la denuncia en un castigo, y la próxima vez callará. La respuesta útil es la contraria: conservar la conversación como prueba, hacer capturas con fecha, no borrar nada, no responder al adulto y acudir a la fiscalía.',
      'Para prevenir, tres acuerdos domésticos funcionan mejor que cualquier control: que nadie que se conoció en línea se convierta en un encuentro presencial sin un adulto informado; que las conversaciones privadas con adultos desconocidos se cuenten en casa sin consecuencias; y que el hogar tenga claro que la vergüenza es del adulto que capta, nunca del menor.'
    ],
    fuentes: [
      { nombre: 'Vistazo — Casos de grooming en Ecuador se quintuplicaron entre 2014 y 2024 (ChildFund)', url: 'https://vistazo.com/actualidad/nacional/2025-06-26-grooming-en-linea-ninos-adolescentes-ecuador-quintuplicaron-childfund-KE9574682' },
      { nombre: 'ChildFund Ecuador — Investigación sobre uso de internet y violencias digitales', url: 'https://www.childfund.ec/wp-content/uploads/2025/06/Investigacion-USI-OSEAC.pdf' },
      { nombre: 'Consejo de Protección de Derechos de Quito — Ciberdelitos contra la niñez', url: 'https://proteccionderechosquito.gob.ec/wp-content/uploads/2026/01/V14-CPD_Ciberdelitos_30122025.pdf' }
    ],
    social: {
      titular: 'No le quites el teléfono',
      copy:
        'Las denuncias por captación en línea de menores se quintuplicaron en Ecuador en una década. Si tu hija o hijo te cuenta algo: no borres nada, haz capturas con fecha, no respondas al adulto y acude a la fiscalía. Quitar el teléfono enseña a callar.'
    }
  },

  {
    id: 'venezuela-captacion-en-linea',
    accion: { texto: 'Tres medidas domésticas, cero presupuesto. Difúndelas donde haga falta.', cta: 'Ver más guías', destino: 'casos' },
    slug: 'venezuela-20913-publicaciones-de-captacion',
    categoria: 'cifras',
    pais: 'Venezuela',
    fecha: '2026-10-21',
    titulo: 'Veinte mil mensajes rastreados',
    resumen:
      'Una investigación periodística encontró en una sola red social miles de mensajes asociados a la captación de menores. El Estado no publica datos sobre esto.',
    cuerpo: [
      'Una investigación de El Espectador y El Clip documentó 20.913 publicaciones en Facebook con frases asociadas a la captación de niñas, niños y adolescentes en Venezuela. La cifra no proviene de un registro estatal: la obtuvieron los periodistas rastreando la propia plataforma.',
      'En paralelo, organizaciones como Fundación Habla, la Red por los Derechos Humanos de Niños, Niñas y Adolescentes y SoftwareLibre reportan recibir al menos dos casos mensuales cada una. Son organizaciones pequeñas, con equipos reducidos; lo que llega a ellas es la punta visible.',
      'El contexto que hace esto más grave es la conectividad desigual. Muchos adolescentes acceden a internet desde el teléfono de un adulto o desde un punto compartido, lo que significa que no hay un historial propio que un cuidador pueda revisar, ni una cuenta que se pueda recuperar si algo sale mal.',
      'La policía científica venezolana ha advertido sobre plataformas de juego con mensajería integrada, que es donde ocurre buena parte del primer contacto. Un adulto no necesita acceder a una red social para hablar con un niño: le basta un chat dentro de un videojuego.',
      'Sin estadística oficial, la prevención depende de lo que haga cada familia y cada escuela. Tres medidas concretas, que no requieren presupuesto: revisar juntos qué aplicaciones del teléfono permiten que un desconocido escriba; acordar que cualquier adulto que pida secreto es motivo para contarlo en casa; y guardar, no borrar, cualquier conversación incómoda.'
    ],
    fuentes: [
      { nombre: 'El Espectador — Del juego al grooming: niños y niñas en Venezuela acosados en la red', url: 'https://www.elespectador.com/investigacion/del-juego-al-grooming-ninos-y-ninas-en-venezuela-acosados-en-la-red/' },
      { nombre: 'El Clip — Niños y niñas en Venezuela acosados en la red', url: 'https://www.elclip.org/ninos-y-ninas-en-venezuela-acosados-en-la-red/' }
    ],
    social: {
      titular: 'Donde no hay cifras, cuenta la prensa',
      copy:
        'Una investigación periodística rastreó 20.913 publicaciones asociadas a la captación de menores en Venezuela. No hay estadística oficial sobre esto. Tres medidas domésticas que sí funcionan, en el enlace.'
    }
  },

  {
    id: 'oea-ninas-81',
    accion: { texto: 'Una campaña que habla a todos por igual no protege a nadie en particular. Ayúdanos a dirigirla bien.', cta: 'Apoyar la campaña', destino: 'dona' },
    slug: 'ninas-81-por-ciento-captacion-digital',
    categoria: 'cifras',
    pais: 'América Latina',
    fecha: '2026-10-21',
    titulo: 'Ocho de cada diez son niñas',
    resumen:
      'El informe regional de 2025 cuantifica una brecha que condiciona cualquier campaña de prevención: el riesgo en línea no se reparte por igual.',
    cuerpo: [
      'El informe de 2025 del Instituto Interamericano del Niño, la Niña y Adolescentes, de la OEA, sobre explotación sexual en el entorno digital recoge datos de once Estados, entre ellos Ecuador. Uno de sus hallazgos: las niñas resultaron más propensas que los niños a sufrir captación en línea, en una proporción de 81 % frente a 19 %.',
      'Esa asimetría tiene consecuencias prácticas que se suelen pasar por alto. Una campaña dirigida a «los niños» en abstracto reparte el mensaje por igual entre quienes corren ocho veces más riesgo y quienes corren uno. Y cuando el material de prevención está diseñado en masculino genérico, las adolescentes no se reconocen en él.',
      'La brecha tampoco significa que los niños varones estén a salvo. Significa algo distinto y más incómodo: que denuncian menos. El estigma sobre la victimización masculina sigue siendo fuerte, y en muchos entornos un adolescente que cuenta lo que le pasó teme que se cuestione su masculinidad antes que se persiga al agresor.',
      'Por eso un programa serio necesita dos mensajes distintos y no uno solo. A las adolescentes, herramientas concretas frente a la captación y la sextorsión. A los adolescentes varones, permiso explícito para hablar: que sepan que le pasa a muchos, que no los define y que contarlo no los pone en cuestión.'
    ],
    fuentes: [
      { nombre: 'OEA / IIN — Explotación sexual de niñas, niños y adolescentes en el entorno digital (2025)', url: 'https://scm.oas.org/pdfs/2025/ReportIINS.pdf' },
      { nombre: 'ChildFund Ecuador — Percepción de riesgos digitales en adolescentes', url: 'https://www.childfund.ec/wp-content/uploads/2025/06/Investigacion-USI-OSEAC.pdf' }
    ],
    social: {
      titular: '81 % frente a 19 %',
      copy:
        'En la captación en línea de menores, ocho de cada diez víctimas son niñas, según el informe regional de la OEA de 2025. Que los varones aparezcan menos no significa que estén a salvo: significa que denuncian menos.'
    }
  },

  {
    id: 'primeras-24-horas',
    accion: { texto: 'Guarda esta página. El día que haga falta, no habrá tiempo de buscarla.', cta: 'Ver la ruta completa', destino: 'faq' },
    slug: 'las-primeras-24-horas-despues-de-una-revelacion',
    categoria: 'familia',
    pais: 'Guía práctica',
    fecha: '2026-10-21',
    titulo: 'Las primeras 24 horas',
    resumen:
      'Lo que haga el primer adulto que escucha determina buena parte de lo que pase después, en el proceso judicial y en la recuperación.',
    cuerpo: [
      'Un niño que decide contar suele hacerlo una vez, en una frase corta, en un momento inesperado: en el auto, antes de dormir, mientras pasa otra cosa. Rara vez vuelve a intentarlo si la primera reacción le enseña que no debía hacerlo.',
      'Lo que ayuda en los primeros minutos. Escuchar sin interrumpir y sin completar sus frases. Creerle y decírselo en voz alta. Dejar claro que no tiene culpa. Mantener la calma visible: un adulto que se derrumba le enseña que lo que dijo es insoportable, y que la próxima vez más vale callar.',
      'Lo que daña, aunque la intención sea buena. Interrogar con preguntas cerradas o sugeridas, que contaminan el testimonio y pueden invalidarlo como prueba. Prometer guardar el secreto, una promesa que habrá que romper. Confrontar al presunto agresor, que avisa y permite destruir evidencia o presionar al niño. Hacerle repetir el relato ante varias personas: cada repetición desgasta y suele introducir contradicciones que luego se usan en su contra.',
      'Lo que hay que hacer en las primeras horas. Anotar por escrito, lo antes posible, exactamente lo que el niño dijo con sus propias palabras, con fecha y hora. No lavar ni desechar ropa si el hecho es reciente. Buscar atención médica si hay lesiones o riesgo, informando que se trata de un posible delito. Activar la ruta de denuncia: en Ecuador, Fiscalía o ECU 911; en Estados Unidos, 911 y la línea estatal correspondiente; en Venezuela, 911 y las organizaciones de protección de la zona.',
      'Y algo que casi nunca se dice: el adulto que escuchó también necesita apoyo. Sostener esa información en soledad es una de las razones por las que muchos casos se quedan a medio camino.'
    ],
    fuentes: [
      { nombre: 'Human Rights Watch — Obstáculos de las víctimas para acceder a la justicia en Ecuador', url: 'https://www.hrw.org/news/2020/12/09/ecuador-high-levels-sexual-violence-schools' },
      { nombre: 'Cecodap — Educar para proteger', url: 'https://cecodap.org/educarparaproteger-vamos-todos-contra-el-abuso-y-la-explotacion-sexual-infantil/' }
    ],
    social: {
      titular: 'Lo cuenta una vez',
      copy:
        'Un niño suele contar una sola vez, en una frase corta. No interrogues, no prometas guardar el secreto, no confrontes al adulto señalado. Anota sus palabras exactas con fecha y activa la ruta. Lo que hagas en 24 horas pesa años.'
    }
  },

  {
    id: 'sextorsion-adolescentes',
    accion: { texto: 'Dile esas tres frases hoy, sin que haya pasado nada. Es lo que hace que te lo cuenten mañana.', cta: 'Llevar el taller a tu escuela', destino: 'contacto' },
    slug: 'sextorsion-como-opera-y-que-hacer',
    categoria: 'escuela',
    pais: 'Ecuador y Venezuela',
    fecha: '2026-10-21',
    titulo: 'Tres frases que lo cambian todo',
    resumen:
      'El 62,4 % de los adolescentes ecuatorianos encuestados la reconoce como riesgo. Casi ninguno sabe que la respuesta correcta es la contraria a su primer impulso.',
    cuerpo: [
      'El esquema es casi siempre el mismo. Un contacto nuevo establece confianza en días o semanas, consigue una imagen íntima y, en el momento en que la tiene, cambia el tono: exige dinero, más imágenes o un encuentro, bajo la amenaza de enviar el material a la familia, al colegio o a los contactos de la víctima.',
      'En encuestas de ChildFund a adolescentes ecuatorianos, el 62,4 % reconoce la sextorsión como un riesgo y el 59,3 % identifica el grooming. Saben que existe. Lo que no saben es qué hacer en la hora siguiente, y ese vacío es el que explota el agresor: la amenaza funciona porque la víctima cree que está sola y que tiene minutos para decidir.',
      'El primer impulso suele ser pagar o ceder. Es exactamente lo contrario de lo que funciona: ceder confirma que la amenaza da resultado y la escalada continúa, casi siempre con exigencias mayores.',
      'La respuesta correcta tiene cuatro pasos. Dejar de responder, sin bloquear todavía, para no perder el historial. Capturar todo: perfil, conversación, nombres de usuario, fecha y hora. Contárselo a un adulto de confianza ese mismo día; el silencio es el único recurso real del extorsionador. Y denunciar ante la fiscalía o la unidad de delitos informáticos, llevando las capturas.',
      'Lo que un adulto debe decir, palabra por palabra, si un adolescente le cuenta: «no es tu culpa, no estás en problemas, y esto se arregla». Esas tres frases hacen más por la investigación que cualquier software de control parental, porque son las que consiguen que el caso llegue a conocerse el mismo día y no seis meses después.'
    ],
    fuentes: [
      { nombre: 'ChildFund Ecuador — Investigación sobre uso de internet y violencias digitales', url: 'https://www.childfund.ec/wp-content/uploads/2025/06/Investigacion-USI-OSEAC.pdf' },
      { nombre: 'Asamblea Nacional del Ecuador — Alerta sobre delitos cometidos a través de redes sociales', url: 'https://www.asambleanacional.gob.ec/es/noticia/117824-organizacion-our-rescue-alerta-sobre-el-incremento-de' },
      { nombre: 'OEA / IIN — Explotación sexual en el entorno digital (2025)', url: 'https://scm.oas.org/pdfs/2025/ReportIINS.pdf' }
    ],
    social: {
      titular: 'Tres frases que lo cambian todo',
      copy:
        '«No es tu culpa, no estás en problemas, y esto se arregla». Si un adolescente te cuenta que lo están extorsionando con una imagen: no respondas al agresor, captura todo, no cedas y denuncia. Ceder solo aumenta la exigencia.'
    }
  },

  {
    id: 'lenguaje-que-encubre',
    accion: { texto: 'Si escribes, publicas o enseñas, estas reglas te sirven. Están abiertas para que las uses.', cta: 'Kit para prensa y docentes', destino: 'prensa' },
    slug: 'el-lenguaje-que-encubre',
    categoria: 'justicia',
    pais: 'Ecuador y Venezuela',
    fecha: '2026-10-21',
    titulo: 'Las palabras que encubren',
    resumen:
      'Algunas palabras de uso corriente en prensa y en conversación convierten un delito en un suceso sin responsable. Cambiarlas no es corrección política: es precisión.',
    cuerpo: [
      '«Embarazo adolescente» aplicado a una niña de doce años. En Ecuador, una menor de 14 años no puede consentir; el hecho es violación. La expresión reparte la responsabilidad sobre la víctima y hace desaparecer al agresor de la frase.',
      '«Relación» o «romance» entre un adulto y un menor. No existe relación donde no puede haber consentimiento. El término sugiere reciprocidad y es el mismo que usa el agresor para describir lo ocurrido.',
      '«Abuso» a secas, cuando los hechos descritos constituyen violación. El Código Orgánico Integral Penal distingue las figuras; usar la más leve para todo suaviza lo que ocurrió y, en el relato público, rebaja la expectativa de pena.',
      '«Se dejó llevar», «provocó», «ya parecía mayor». Cualquier fórmula que describa la apariencia o la conducta del menor traslada la causa a la víctima. La edad no se negocia con la apariencia.',
      '«Se resolvió en familia». No existe resolución familiar de un delito de acción penal pública. Esa expresión suele describir un acuerdo económico o una presión sobre la madre, y deja al agresor con acceso al niño.',
      'Una recomendación práctica para medios y para cualquiera que publique sobre esto: nombrar el hecho por su figura legal, mantener al agresor como sujeto de la oración —«un adulto agredió», no «la niña fue agredida»—, no publicar datos que permitan identificar a la víctima, y cerrar siempre con la ruta de denuncia y un teléfono.'
    ],
    fuentes: [
      { nombre: 'Human Rights Watch — Informe Mundial 2025, capítulo Ecuador', url: 'https://www.hrw.org/es/world-report/2025/country-chapters/ecuador' },
      { nombre: 'Defensoría del Pueblo del Ecuador — Casos de violencia sexual contra NNA y sentencias', url: 'https://www.dpe.gob.ec/mas-de-52-mil-casos-de-violencia-sexual-en-contra-de-ninos-ninas-y-adolescentes-nna-entre-enero-de-2018-y-junio-de-2023-y-solo-un-415-han-recibido-sentencia/' }
    ],
    social: {
      titular: 'Cinco expresiones que conviene jubilar',
      copy:
        '«Embarazo adolescente» en una niña de doce. «Relación» entre un adulto y un menor. «Se resolvió en familia». Cada una borra al responsable de la frase. Cómo nombrarlo con precisión, en el enlace.'
    }
  }

];

const lote3 = require('./casos-es-lote3.js');
const lote4 = require('./casos-es-lote4.js');

module.exports = { META, casos: casos.concat(lote3, lote4) };
