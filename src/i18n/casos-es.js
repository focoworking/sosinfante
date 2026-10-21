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
    slug: 'ecuador-una-denuncia-cada-90-minutos',
    categoria: 'cifras',
    pais: 'Ecuador',
    fecha: '2026-10-21',
    titulo: 'Ecuador: una denuncia cada 90 minutos',
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
    slug: 'ecuador-el-agresor-casi-siempre-vive-en-casa',
    categoria: 'familia',
    pais: 'Ecuador',
    fecha: '2026-10-21',
    titulo: 'El agresor casi siempre vive en casa',
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
    slug: 'ecuador-mas-de-6700-casos-en-escuelas',
    categoria: 'escuela',
    pais: 'Ecuador',
    fecha: '2026-10-21',
    titulo: 'Más de 6.700 casos en las escuelas de Ecuador',
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
    slug: 'el-protocolo-escolar-que-protege-a-la-institucion',
    categoria: 'escuela',
    pais: 'Ecuador y Venezuela',
    fecha: '2026-10-21',
    titulo: 'Cuando el protocolo protege a la institución y no al estudiante',
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
    slug: 'venezuela-zulia-cada-tres-dias',
    categoria: 'cifras',
    pais: 'Venezuela',
    fecha: '2026-10-21',
    titulo: 'Zulia: un caso cada tres días, y es un subregistro',
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
    slug: 'venezuela-7165-casos-y-un-vacio-de-datos',
    categoria: 'cifras',
    pais: 'Venezuela',
    fecha: '2026-10-21',
    titulo: 'Venezuela: 7.165 casos y un vacío de datos',
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
    slug: 'instituciones-de-fe-el-patron-que-se-repite',
    categoria: 'instituciones-fe',
    pais: 'Ecuador y Venezuela',
    fecha: '2026-10-21',
    titulo: 'Instituciones de fe: el patrón que se repite',
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
    slug: 'cuatro-preguntas-antes-de-dejar-a-tu-hijo',
    categoria: 'instituciones-fe',
    pais: 'Ecuador, Venezuela y Estados Unidos',
    fecha: '2026-10-21',
    titulo: 'Cuatro preguntas antes de dejar a tu hijo en cualquier institución',
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
    slug: 'el-4-15-por-ciento',
    categoria: 'justicia',
    pais: 'Ecuador',
    fecha: '2026-10-21',
    titulo: 'El 4,15 %: lo que pasa después de denunciar',
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
    slug: 'senales-de-alerta-por-edad',
    categoria: 'familia',
    pais: 'Guía práctica',
    fecha: '2026-10-21',
    titulo: 'Señales de alerta, ordenadas por edad',
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
  }
];

module.exports = { META, casos };
