// Conteúdo em português. Não é tradução do espanhol: foi escrito para quem lê
// do Brasil e para a comunidade brasileira na Flórida. Muda o que precisa
// mudar — os dados citados, os canais de denúncia, o vocabulário do ECA e a
// ordem dos argumentos.

const site = {
  name: 'SOS Infante',
  legalName: 'SOS Infante — infância sem violência',
  domain: 'https://www.sosinfante.org',
  tagline: 'Rompemos ciclos de violência contra crianças e adolescentes',
  description:
    'O SOS Infante é uma organização sem fins lucrativos que previne e enfrenta a violência física, psicológica e sexual contra crianças e adolescentes. Mantém um centro de coleta no sul da Flórida e atende diretamente em Quito, no Equador, e em Valera, na Venezuela.',
  founded: '2018',
  email: 'accion@sosinfante.org',
  telefono: '+1 305 988 1925',
  whatsapp: '13059881925',
  direccionUS: '3800 Inverrary Blvd, Fort Lauderdale, FL 33319, Estados Unidos',
  horario: 'De segunda a sexta, das 8h às 17h',
  color: '#1EB5C4',
  social: [
    'https://www.facebook.com/sosinfante/',
    'https://www.instagram.com/sosinfante/',
    'https://www.youtube.com/@sosinfante',
    'https://www.linkedin.com/company/sosinfante/'
  ]
};

const identidad = {
  vision: 'Sonhamos em ver famílias inteiramente recuperadas do trauma da violência doméstica. Uma de cada vez.',
  lema: 'Uma vida, uma esperança. Uma de cada vez.',
  promesa:
    'Transformamos gestos simples em proteção. Nosso trabalho é ser o apoio emocional, profissional e financeiro com que uma criança pode contar — no Equador, na Venezuela e na comunidade latina dos Estados Unidos.',
  creencia: 'O futuro se constrói com decisões diárias e com o que o passado já ensinou.',
  valores: [
    { nombre: 'Amor', frase: 'O amor, na nossa pele', texto: 'Cada atendimento começa pelo vínculo, não pelo formulário.' },
    { nombre: 'Fé', frase: 'A fé, em movimento', texto: 'Sustentamos processos longos, inclusive os que demoram anos para dar resultado.' },
    { nombre: 'Oportunidade', frase: 'Somos feitos de recomeços', texto: 'Nenhuma história está encerrada. Sempre há um caminho de volta.' },
    { nombre: 'Serviço', frase: 'O serviço, na prática', texto: 'Presença no território antes de qualquer discurso.' },
    { nombre: 'Generosidade', frase: 'Nossos recursos, sem medida', texto: 'O que entra vira atendimento direto, e a gente presta contas de onde foi.' }
  ]
};

const sedes = [
  {
    slug: 'miami',
    ciudad: 'Miami',
    pais: 'Estados Unidos',
    bandera: '🇺🇸',
    rol: 'Parcerias, captação e o centro de coleta que abastece toda a operação',
    apertura: 'Reabertura em 2026',
    region: 'FL',
    lat: 25.7617,
    lng: -80.1918,
    resumen:
      'O sul da Flórida é onde a diáspora latina, as empresas e as fundações encontram o trabalho de campo. O que é arrecadado no condado de Broward chega às famílias no Equador e na Venezuela em poucas semanas.',
    programas: ['Oficinas Adulto Protetor em escolas bilíngues', 'Parcerias com empresas', 'Fundo de emergência regional'],
    contacto: 'accion@sosinfante.org',
    idioma: 'Inglês / espanhol / português'
  },
  {
    slug: 'quito',
    ciudad: 'Quito',
    pais: 'Equador',
    bandera: '🇪🇨',
    rol: 'Base operacional desde 2018: prevenção, atendimento psicológico e campanhas',
    apertura: 'Em operação desde 2018 · relançamento em 2026',
    region: 'Pichincha',
    lat: -0.1807,
    lng: -78.4678,
    resumen:
      'De Quito saem as oficinas nas escolas, o atendimento psicológico a sobreviventes e as campanhas públicas que colocam a proteção da infância no debate nacional.',
    programas: ['Shungo Coração', 'Todo Posi', 'Adulto Protetor', 'Gravidez infantil: tolerância zero'],
    contacto: 'accion@sosinfante.org',
    idioma: 'Espanhol'
  },
  {
    slug: 'valera',
    ciudad: 'Valera',
    pais: 'Venezuela',
    bandera: '🇻🇪',
    rol: 'Nova unidade: assistência alimentar e médica, além da escola de adultos protetores',
    apertura: 'Abertura em 2026',
    region: 'Trujillo',
    lat: 9.3167,
    lng: -70.6,
    resumen:
      'Valera, no estado de Trujillo, abre como base andina para atender crianças em risco por causa da migração, da desnutrição e da violência dentro de casa.',
    programas: ['Shungo Coração Venezuela', 'Brigadas médicas comunitárias', 'Rede de adultos protetores'],
    contacto: 'accion@sosinfante.org',
    idioma: 'Espanhol'
  }
];

const proyectos = [
  {
    slug: 'adulto-protector',
    nombre: 'Adulto Protetor',
    claim: 'E se toda criança tivesse por perto um adulto que soubesse o que fazer?',
    tipo: 'Programa de prevenção',
    sedes: ['miami', 'quito', 'valera'],
    resumen:
      'Formação de seis encontros para mães, pais, professores e cuidadores reconhecerem sinais de violência, agirem sem revitimizar a criança e seguirem a rota de denúncia até o fim.',
    detalle:
      'A maioria dos adultos percebe que algo está errado e trava, porque ninguém nunca ensinou o passo seguinte. A formação cobre sinais de alerta, linguagem do cuidado, rota de denúncia, manejo de crise, disciplina sem violência e como a comunidade sustenta a proteção depois que a oficina acaba. A rota brasileira é explícita: Conselho Tutelar, Disque 100 e, em caso de risco imediato, 190.',
    metricas: ['6 encontros por turma', '1 facilitador a cada 25 adultos', 'Acompanhamento por 90 dias'],
    kpi: 'adultos formados'
  },
  {
    slug: 'shungo-corazon',
    nombre: 'Shungo Coração',
    claim: 'Atendimento médico, alimentar e de saúde mental para crianças',
    tipo: 'Programa de atendimento direto',
    sedes: ['quito', 'valera'],
    resumen:
      '«Shungo» significa coração em kichwa, língua originária do Equador — e também quer dizer ternura e carinho. O programa oferece atendimento integral a crianças em situação de vulnerabilidade.',
    detalle:
      'Brigadas itinerantes reúnem avaliação médica e nutricional, cestas mensais de alimentos e atendimento psicológico breve para crianças expostas à violência. Funciona junto a escolas e centros comunitários parceiros, que é como chegamos a quem nunca chegaria sozinho a um posto de saúde.',
    metricas: ['Avaliação médica e nutricional', 'Atendimento psicológico breve, 8 sessões', 'Cestas mensais de alimentos'],
    kpi: 'crianças atendidas'
  },
  {
    slug: 'todo-posi',
    nombre: 'Todo Posi',
    claim: 'Uma campanha de saúde mental feita com adolescentes, não sobre eles',
    tipo: 'Campanha de comunicação',
    sedes: ['miami', 'quito'],
    resumen:
      'Campanha que transforma a conversa sobre violência em prática diária de cuidado, construída com os próprios adolescentes.',
    detalle:
      'São os adolescentes que escrevem o conteúdo: posts, desafios escolares e um kit para professores. O objetivo é direto — tornar normal pedir ajuda e tirar a vergonha de quem fala.',
    metricas: ['Kit do professor para baixar', 'Desafios nas escolas', 'Conteúdo criado com adolescentes'],
    kpi: 'adolescentes alcançados'
  },
  {
    slug: 'artis-terapia',
    nombre: 'Arteterapia',
    claim: 'A arte como porta de entrada, quando a palavra ainda não chegou',
    tipo: 'Programa de arteterapia',
    sedes: ['quito', 'valera'],
    resumen:
      'Oficinas que usam artes cênicas, artes visuais e música para identificar, tratar e prevenir traumas psicológicos na infância.',
    detalle:
      'Cada grupo é conduzido por uma dupla: um artista profissional e uma psicóloga. A arte abre caminho para o que a criança ainda não consegue nomear e oferece um canal seguro para elaborar. O ciclo termina com uma mostra comunitária, que muda o modo como o bairro enxerga essas crianças.',
    metricas: ['Dois encontros por semana e um sábado por mês', 'Duplas de arte e psicologia', 'Mostra comunitária de encerramento'],
    kpi: 'crianças em arteterapia'
  },
  {
    slug: 'embarazo-infantil',
    nombre: 'Gravidez infantil: tolerância zero',
    claim: 'Uma menina de dez anos grávida é um crime, não uma estatística',
    tipo: 'Pesquisa e incidência',
    sedes: ['quito', 'valera'],
    resumen:
      'Dados abertos, apoio jurídico e formação de imprensa sobre gravidez em meninas menores de 14 anos, que a lei trata pelo que é: consequência de violência sexual.',
    detalle:
      'Publicamos números verificáveis, acompanhamos famílias na rota de denúncia e formamos jornalistas e professores para nomear o fato corretamente. A palavra importa: chamar de «gravidez na adolescência» esconde um estupro de vulnerável.',
    metricas: ['Dados abertos por território', 'Apoio jurídico às famílias', 'Guia para redações'],
    kpi: 'casos acompanhados'
  }
];

const cifras = [
  {
    dato: '59.887',
    texto: 'notificações de violência sexual contra crianças e adolescentes foram registradas no Brasil em um único ano.',
    fuente: 'Sinan, Ministério da Saúde, 2025'
  },
  {
    dato: '125%',
    texto: 'foi o aumento dos registros de violência contra crianças e adolescentes no Brasil entre 2020 e 2025.',
    fuente: 'Sinan, Ministério da Saúde'
  },
  {
    dato: '76%',
    texto: 'dos casos denunciados acontecem dentro da casa da vítima, do suspeito ou de familiares. A violência quase nunca vem de um estranho.',
    fuente: 'Disque 100, Ministério dos Direitos Humanos e da Cidadania'
  }
];

const formasDeApoyo = [
  {
    titulo: 'Doação mensal',
    monto: 'a partir de US$ 10 por mês',
    texto: 'Mantém o atendimento psicológico e as cestas de alimentos o ano inteiro, e não só quando há campanha.',
    cta: 'Doar todo mês',
    href: 'dona#mensual'
  },
  {
    titulo: 'Doação única',
    monto: 'o valor que você escolher',
    texto: 'Financia brigadas médicas e o material das oficinas Adulto Protetor.',
    cta: 'Doar uma vez',
    href: 'dona#unica'
  },
  {
    titulo: 'Empresas e fundações',
    monto: 'parcerias a partir de US$ 2.500',
    texto: 'Patrocine uma turma inteira do Adulto Protetor e receba relatório de impacto a cada trimestre.',
    cta: 'Falar com parcerias',
    href: 'contacto#alianzas'
  },
  {
    titulo: 'Voluntariado',
    monto: 'o seu tempo',
    texto: 'Psicologia, medicina, serviço social, design, dados, tradução e logística, nas três cidades ou a distância.',
    cta: 'Quero me inscrever',
    href: 'voluntariado'
  }
];

const confianza = [
  { titulo: 'Metas públicas', texto: 'Publicamos a meta anual de cada programa e o avanço real a cada trimestre, inclusive quando ficamos abaixo.', href: 'transparencia' },
  { titulo: 'Proteção da criança', texto: 'Checagem de antecedentes, regra dos dois adultos e canal de denúncia com resposta em 72 horas.', href: 'transparencia#salvaguarda' },
  { titulo: '78% em atendimento direto', texto: 'De cada dólar, 78 centavos vão para brigadas, terapia, alimentos e materiais.', href: 'transparencia' }
];

const impacto = [
  { n: '5', l: 'programas ativos' },
  { n: '3', l: 'países: EUA, Equador e Venezuela' },
  { n: '3.000', l: 'adultos formados, meta de 2026' },
  { n: '1.200', l: 'crianças atendidas, meta de 2026' }
];

const embudoVoluntariado = [
  { paso: '01', titulo: 'Você se inscreve', texto: 'Formulário de dois minutos: quem você é, o que sabe fazer e quanto tempo tem. Sem currículo obrigatório.' },
  { paso: '02', titulo: 'Entrevista', texto: 'Presencial ou por videochamada, conforme onde você estiver. Conversamos sobre área, horário e expectativas.' },
  { paso: '03', titulo: 'Documentos e proteção', texto: 'Documento de identidade, termo de compromisso assinado e checagem de antecedentes para quem terá contato direto com crianças.' },
  { paso: '04', titulo: 'Formação e início', texto: 'Formação inicial em proteção da criança e no método do programa. Você entra na equipe com um mentor.' }
];

const voluntariado = {
  intro:
    'O SOS Infante tem várias portas de entrada e áreas específicas onde o seu talento cabe sem atropelar o resto da sua vida. Este é o esquema base de áreas e horas.',
  esquema: [
    { area: 'Voluntariado geral', dedicacion: 'O tempo que você tiver', nota: 'Atividades pontuais, por convocação.' },
    { area: 'Equipe · Editorial', dedicacion: '1 dia por semana (8 horas)', nota: 'Textos e curadoria do blog.' },
    { area: 'Equipe · Redes sociais', dedicacion: 'Meio dia por semana (4 horas)', nota: 'Conteúdo e comunidade.' },
    { area: 'Equipe · Audiovisual', dedicacion: '16 horas ou mais, a distância', nota: 'Vídeo, fotografia e design.' },
    { area: 'Programa · Adulto Protetor', dedicacion: '2 dias por semana (16 horas)', nota: 'Formação ou experiência intermediária a avançada em docência, terapia ou área jurídica.' },
    { area: 'Programa · Shungo Coração', dedicacion: '2 dias por semana (16 horas)', nota: 'Profissionais de nutrição, saúde e saúde mental.' },
    { area: 'Campanha · Arteterapia', dedicacion: '2 dias por semana e um sábado por mês', nota: 'Experiência profissional em artes cênicas.' },
    { area: 'Campanha · Todo Posi', dedicacion: '2 dias por semana (16 horas)', nota: 'Não exige formação prévia: atitude e energia bastam.' }
  ],
  requisitos: [
    'Inscrição on-line e entrevista.',
    'Documento de identidade e termo de compromisso assinado pelo período combinado.',
    'Checagem de antecedentes e formação em proteção da criança para qualquer função com contato direto.',
    'Respeito às convicções religiosas, políticas e culturais das comunidades atendidas.'
  ],
  aporte:
    'Não exigimos doações nem mensalidades para participar. Há uma contribuição única de US$ 50 que cobre crachá, camiseta e material impresso de uso interno.'
};

const acopio = {
  ciudad: 'Miami / Fort Lauderdale',
  direccion: '3800 Inverrary Blvd, Fort Lauderdale, FL 33319',
  horario: 'De segunda a sexta, das 8h às 17h',
  promesa:
    'O que entra pela nossa porta na Flórida termina nas mãos de uma família no Equador ou na Venezuela — ou vira o dinheiro que paga esse envio.',
  aceptamos: [
    'Roupas e calçados infantis em bom estado, limpos e sem rasgos',
    'Material escolar e mochilas',
    'Brinquedos novos ou quase novos, sem peças faltando',
    'Alimentos não perecíveis lacrados, com pelo menos seis meses de validade',
    'Produtos de higiene e fraldas lacrados',
    'Equipamento médico básico não invasivo, novo e na embalagem original'
  ],
  noAceptamos: [
    'Medicamentos vencidos, abertos ou de uso controlado',
    'Roupas danificadas, úmidas ou manchadas',
    'Móveis grandes e eletrodomésticos',
    'Veículos (não entram na isenção alfandegária, salvo ambulâncias e similares)',
    'Alimentos preparados ou perecíveis'
  ],
  flujo: [
    ['01', 'Recebimento', 'Cada entrega é registrada por doador, tipo e peso. O recibo sai na hora.'],
    ['02', 'Triagem', 'O voluntariado separa tudo em três destinos: envio humanitário, venda na loja ou reciclagem responsável.'],
    ['03', 'Consolidação', 'Paletes por destino, inventário valorado e documentação da doação.'],
    ['04', 'Envio', 'Carga aérea ou marítima saindo de Miami para o Equador e, por meio de parceiros locais, para a Venezuela.'],
    ['05', 'Desembaraço', 'Isenção de tributos no país de destino e retirada pela equipe local.'],
    ['06', 'Entrega e rastreio', 'As famílias assinam o recebimento e você recebe o relatório da sua caixa, com fotos que preservam a identidade das crianças.']
  ],
  nota:
    'No Equador, doações vindas do exterior para organizações sem fins lucrativos registradas são isentas de tributos de comércio exterior quando a entidade apresenta o pedido no sistema aduaneiro e mantém convênio de cooperação com uma instituição pública.'
};

const catalogoImpacto = [
  { nombre: 'Cesta de alimentos (1 mês)', precio: 35, entrega: 'Quito e Valera', detalle: 'Arroz, feijão, óleo, atum, aveia e leite em pó para uma família de quatro pessoas.' },
  { nombre: 'Kit escolar completo', precio: 25, entrega: 'Quito e Valera', detalle: 'Mochila, cadernos, material e uniforme básico para um ano letivo.' },
  { nombre: 'Sessão de psicoterapia', precio: 40, entrega: 'Quito e Valera', detalle: 'Uma sessão com psicóloga especializada em trauma infantil.' },
  { nombre: 'Bolsa de arteterapia (1 mês)', precio: 120, entrega: 'Quito e Valera', detalle: 'Quatro oficinas conduzidas por uma dupla de arte e psicologia.' },
  { nombre: 'Brigada médica comunitária', precio: 250, entrega: 'Valera', detalle: 'Um dia de avaliação médica e nutricional para 40 crianças.' },
  { nombre: 'Turma do Adulto Protetor', precio: 2500, entrega: 'Nas três cidades', detalle: '25 adultos formados em seis encontros, com acompanhamento por 90 dias.' }
];

const tienda = {
  intro:
    'Cada compra sustenta os programas. A loja trabalha sob demanda e envia para Estados Unidos, Equador e Venezuela.',
  categorias: [
    { slug: 'ropa-y-moda', nombre: 'Roupas', items: 11 },
    { slug: 'casa', nombre: 'Casa', items: 11 },
    { slug: 'donar', nombre: 'Doar', items: 7 },
    { slug: 'servicios', nombre: 'Serviços', items: 2 }
  ],
  productos: [
    { nombre: 'Camiseta One Life One Hope', precio: 25, oferta: 19.99, categoria: 'Roupas' },
    { nombre: 'Camiseta Better Together', precio: 25, oferta: 19.99, categoria: 'Roupas' },
    { nombre: 'Boné mão SOS', precio: 25, categoria: 'Roupas' },
    { nombre: 'Boné Uma de cada vez', precio: 25, oferta: 19.99, categoria: 'Roupas' },
    { nombre: 'Gorro de tricô', precio: 25, oferta: 19.99, categoria: 'Roupas' },
    { nombre: 'Manta cinza', precio: 19.99, categoria: 'Casa' },
    { nombre: 'Velas (3 unidades)', precio: 4.99, categoria: 'Casa' },
    { nombre: 'Vela aromática (Morango Silvestre)', precio: 6.99, oferta: 5.99, categoria: 'Casa' },
    { nombre: 'Caneca One Life One Hope', precio: 14.99, oferta: 11.99, categoria: 'Casa' },
    { nombre: 'Capa de iPhone', precio: 19.99, categoria: 'Casa' },
    { nombre: 'Apadrinhe uma cesta de alimentos', precio: 35, categoria: 'Doar' },
    { nombre: 'Patrocine uma oficina Adulto Protetor', precio: 150, categoria: 'Serviços' }
  ]
};

const campanas = [
  { mes: 'Fevereiro', nombre: 'Amor sem violência', gancho: 'O Dia dos Namorados ressignificado: amor não machuca.', activo: 'Desafio nas redes e kit do professor', meta: 'Captar doadores mensais' },
  { mes: 'Abril', nombre: 'Volta às aulas (Andes)', gancho: 'Cada mochila é um ano letivo que não é abandonado.', activo: 'Kit escolar e coleta na Flórida', meta: '1.000 kits escolares' },
  { mes: 'Junho', nombre: 'Mês da infância', gancho: 'Atividades pelo Dia das Crianças nas três cidades.', activo: 'Jornada Todo Posi e brigadas', meta: 'Alcance e novos voluntários' },
  { mes: 'Agosto', nombre: 'Volta às aulas (litoral e Venezuela)', gancho: 'A segunda onda escolar do ano.', activo: 'Coletas corporativas no sul da Flórida', meta: '800 kits escolares' },
  { mes: 'Outubro', nombre: 'Formar 1.000 adultos protetores', gancho: 'Um mês de formação em rede com escolas parceiras.', activo: 'Turmas patrocinadas por empresas', meta: '1.000 adultos formados' },
  { mes: 'Dezembro', nombre: 'Giving Tuesday e Natal Shungo', gancho: 'O fim do ano, quando a doação atinge o pico.', activo: 'Matching de empresas e campanha entre pares', meta: '30% da arrecadação anual' }
];

const departamentos = [
  { slug: 'direccion', nombre: 'Direção Executiva', mision: 'Sustentar a estratégia, o orçamento e a relação com o conselho e os parceiros.', entregables: ['Plano anual e orçamento por cidade', 'Relatório trimestral de impacto', 'Relação com conselho e auditoria'], roles: ['Direção executiva', 'Assistência de direção', 'Controladoria'] },
  { slug: 'programas', nombre: 'Programas e Território', mision: 'Executar os programas em campo e medir resultados, não atividades.', entregables: ['Turmas do Adulto Protetor', 'Brigadas Shungo Coração', 'Linha de base e medição por criança'], roles: ['Coordenação de programas', 'Facilitadores', 'Serviço social', 'Medicina e nutrição'] },
  { slug: 'salvaguarda', nombre: 'Proteção e Psicologia', mision: 'Proteger cada criança que tem contato com a organização e sustentar o atendimento psicológico.', entregables: ['Política de proteção e checagem de antecedentes', 'Canal de denúncia com resposta em 72 horas', 'Terapia breve e encaminhamentos'], roles: ['Psicologia clínica', 'Responsável pela proteção', 'Assessoria jurídica'] },
  { slug: 'desarrollo', nombre: 'Desenvolvimento e Parcerias', mision: 'Captar e reter a receita: doadores mensais, empresas, fundações e editais.', entregables: ['Programa de doação mensal', 'Carteira de patrocínios', 'Inscrição em editais'], roles: ['Captação', 'Parcerias com empresas', 'Redação de projetos', 'Relacionamento com doadores'] },
  { slug: 'comunicacion', nombre: 'Comunicação e Marca', mision: 'Transformar a operação em narrativa pública e a narrativa em ação.', entregables: ['Calendário editorial e de campanhas', 'Kit de imprensa e porta-vozes', 'Conteúdo com consentimento e identidade preservada'], roles: ['Editorial', 'Redes sociais', 'Design', 'Audiovisual', 'Tradução'] },
  { slug: 'marketplace', nombre: 'Marketplace e Operações', mision: 'Fazer o centro de coleta de Miami e a loja financiarem a operação e abastecerem Equador e Venezuela.', entregables: ['Recebimento, triagem e expedição', 'Loja on-line e catálogo de impacto', 'Documentação aduaneira e rastreio por caixa'], roles: ['Logística e estoque', 'Comércio eletrônico', 'Compras', 'Voluntariado de triagem'] },
  { slug: 'datos', nombre: 'Dados, Tecnologia e IA', mision: 'Decidir com dados e devolver horas à equipe.', entregables: ['CRM único de doadores e voluntariado', 'Painel de metas por programa e cidade', 'Automações e IA operacional'], roles: ['Análise de dados', 'Desenvolvimento web', 'Automação', 'Suporte ao CRM'] }
];

const gobernanza = [
  ['Conselho diretor', 'Aprova estratégia, orçamento e política de proteção. Reúne-se a cada trimestre.'],
  ['Direção executiva', 'Executa o plano e responde com indicadores públicos.'],
  ['Comitê de proteção', 'Independente dos programas. Recebe e resolve denúncias em 72 horas.'],
  ['Auditoria externa', 'Revisão anual das demonstrações financeiras, com resumo publicado.'],
  ['Conselho consultivo', 'Especialistas voluntários em infância, saúde mental, logística e tecnologia.']
];

const lineasIngreso = [
  { linea: 'Doadores mensais', margen: '≈ 95%', rol: 'Receita previsível que cobre equipe e programas básicos.', meta: 'US$ 120.000 / ano' },
  { linea: 'Catálogo de impacto', margen: '≈ 85%', rol: 'Compra com destino definido: cesta, kit escolar, sessão de terapia.', meta: 'US$ 90.000 / ano' },
  { linea: 'Revenda de doações (Miami)', margen: '≈ 70%', rol: 'Estoque doado, sem custo de mercadoria; paga o frete.', meta: 'US$ 150.000 / ano' },
  { linea: 'Produtos sob demanda', margen: '20–40%', rol: 'Pertencimento mais do que caixa; sem estoque, sem risco.', meta: 'US$ 30.000 / ano' },
  { linea: 'Parcerias e editais', margen: '≈ 90%', rol: 'Turmas patrocinadas e financiamento da operação logística.', meta: 'US$ 180.000 / ano' },
  { linea: 'Formação paga para empresas e escolas', margen: '≈ 60%', rol: 'Subsidia as oficinas gratuitas na rede pública.', meta: 'US$ 60.000 / ano' }
];

const faqs = [
  {
    q: 'O que é o SOS Infante?',
    a: 'O SOS Infante é uma organização sem fins lucrativos que previne e enfrenta a violência física, psicológica e sexual contra crianças e adolescentes. Trabalha com famílias, escolas e comunidades em Miami (Estados Unidos), Quito (Equador) e Valera (Venezuela).'
  },
  {
    q: 'Em quais cidades o SOS Infante atua em 2026?',
    a: 'Em três: Miami, na Flórida, responsável por parcerias, captação e o centro de coleta; Quito, no Equador, onde funcionam os programas e as campanhas; e Valera, no estado de Trujillo, Venezuela, nova unidade de assistência alimentar e médica e de formação de adultos protetores.'
  },
  {
    q: 'Como faço para doar?',
    a: 'Você pode doar on-line com cartão de qualquer país, fazer transferência nos Estados Unidos ou no Equador, ou doar materiais — alimentos, remédios, material escolar — em qualquer uma das três unidades. Toda doação recebe recibo e relatório de uso.'
  },
  {
    q: 'A doação é dedutível do imposto?',
    a: 'As doações processadas pela unidade da Flórida vão para uma entidade sem fins lucrativos registrada nos Estados Unidos e recebem recibo dedutível na declaração norte-americana. Para doadores no Brasil não há dedução automática: escreva para accion@sosinfante.org e enviamos a documentação da sua contribuição.'
  },
  {
    q: 'O que fazer diante de uma suspeita de violência contra uma criança?',
    a: 'No Brasil: em risco imediato, ligue 190. Para denunciar, ligue 100 (Disque Direitos Humanos), que funciona 24 horas e aceita denúncia anônima, ou procure o Conselho Tutelar do município. Nos Estados Unidos, 911 e a linha da Flórida 1-800-962-2873; no Equador, ECU 911. Depois escreva para accion@sosinfante.org: acompanhamos a família no processo. Nunca confronte o suspeito sozinho.'
  },
  {
    q: 'Como faço para ser voluntário?',
    a: 'Inscreva-se na página de voluntariado. Procuramos perfis de psicologia, medicina, serviço social, design, dados, tradução e logística. Toda função com contato direto com crianças exige checagem de antecedentes e formação prévia em proteção.'
  },
  {
    q: 'O que é um adulto protetor?',
    a: 'É qualquer pessoa adulta capaz de reconhecer sinais de violência contra uma criança, reagir sem revitimizá-la e seguir a rota de denúncia até o fim. O ECA chama isso de dever de proteção, e a lei brasileira o atribui à família, à sociedade e ao Estado. O SOS Infante forma adultos protetores em seis encontros, com acompanhamento por 90 dias.'
  },
  {
    q: 'O que significa «Shungo»?',
    a: 'Shungo significa coração em kichwa, língua originária do Equador falada pelos povos andinos. Também carrega o sentido de ternura e carinho, e dá nome ao programa de atendimento médico, alimentar e de saúde mental.'
  },
  {
    q: 'Quanto tempo o voluntariado exige?',
    a: 'Depende da área. O voluntariado geral contribui com o tempo disponível, em atividades pontuais. A equipe editorial dedica um dia por semana (8 horas), redes sociais meio dia (4 horas) e audiovisual 16 horas ou mais a distância. Adulto Protetor e Shungo Coração pedem dois dias por semana; Arteterapia, dois dias e um sábado por mês.'
  },
  {
    q: 'Preciso de formação específica para ser voluntário?',
    a: 'Adulto Protetor pede formação ou experiência intermediária a avançada em docência, terapia ou área jurídica. Shungo Coração pede profissionais de nutrição, saúde e saúde mental. Arteterapia exige experiência profissional em artes cênicas. Todo Posi não exige formação prévia: atitude e energia bastam.'
  },
  {
    q: 'Preciso apresentar documentos?',
    a: 'Sim. Depois da inscrição e da entrevista, pedimos documento de identidade e a assinatura de um termo de compromisso pelo período combinado. Contato direto com crianças exige ainda checagem de antecedentes e formação em proteção.'
  },
  {
    q: 'O voluntariado tem algum custo?',
    a: 'Não exigimos doações nem mensalidades. Existe uma contribuição única de US$ 50 que cobre crachá, camiseta e material impresso de uso interno.'
  }
];

const blog = [
  {
    id: 'reapertura',
    slug: 'reabertura-2026',
    titulo: 'O SOS Infante reabre: Miami, Quito e Valera',
    fecha: '2026-09-06',
    autor: 'Equipe SOS Infante',
    resumen:
      'Voltamos com três unidades, cinco programas ativos e um compromisso: cada dólar é prestado por programa e por cidade.',
    cuerpo: [
      'O SOS Infante reabre em 2026 com uma estrutura de três unidades. Miami concentra parcerias, captação e o centro de coleta; Quito mantém a operação dos programas e campanhas; e Valera, no estado de Trujillo, Venezuela, abre como nova base andina.',
      'A razão é simples: a violência contra crianças não respeita fronteiras, e as famílias que atendemos também não. Elas se movem entre Venezuela, Equador e Estados Unidos. Um programa que existe em uma cidade só perde a família no caminho.',
      'Cinco programas lideram esta etapa: Adulto Protetor, Shungo Coração, Todo Posi, Arteterapia e Gravidez infantil: tolerância zero. Cada um publica a meta anual e o avanço na página de transparência.'
    ]
  },
  {
    id: 'valera',
    slug: 'por-que-valera',
    titulo: 'Por que abrimos em Valera, na Venezuela',
    fecha: '2026-09-06',
    autor: 'Equipe SOS Infante',
    resumen:
      'Trujillo concentra crianças em risco por migração, desnutrição e violência doméstica, com pouquíssima oferta de atendimento psicológico gratuito.',
    cuerpo: [
      'Valera fica no cruzamento das rotas migratórias andinas. Muitas crianças ficam aos cuidados de avós, tias ou vizinhos enquanto mães e pais migram — situação que multiplica o risco de violência e abandono.',
      'A unidade começa com brigadas médicas comunitárias, cestas de alimentos e a escola de adultos protetores, em parceria com paróquias, escolas e coletivos locais.',
      'O primeiro ano tem meta pública: 1.000 adultos formados e 500 crianças com atendimento médico e psicológico.'
    ]
  },
  {
    id: 'senales',
    slug: 'sinais-de-violencia-infantil',
    titulo: 'Como reconhecer sinais de violência contra crianças',
    fecha: '2026-09-06',
    autor: 'Equipe SOS Infante',
    resumen:
      'Guia curto e prático: sinais físicos, comportamentais e do entorno, e o que fazer nas primeiras 24 horas.',
    cuerpo: [
      'Sinais físicos: lesões sem explicação coerente, dor ao sentar ou caminhar, infecções recorrentes, perda de peso repentina.',
      'Sinais comportamentais: regressão de hábitos já adquiridos, medo de uma pessoa específica, comportamento sexual incompatível com a idade, isolamento, queda brusca no rendimento escolar, automutilação.',
      'Sinais do entorno: um adulto que impede a criança de ficar sozinha com outras pessoas, segredos entre adulto e criança, presentes ou dinheiro sem explicação.',
      'O que fazer: escute sem interrogar, não prometa guardar segredo, registre por escrito o que a criança disse com as próprias palavras, não confronte o suspeito e acione a rota de denúncia. Em risco imediato, ligue 190. Para denunciar, 100 ou o Conselho Tutelar do seu município.'
    ]
  }
];

const LEGAL_ACTUALIZADO = '2026-09-06';

const legales = [
  {
    slug: 'privacidad',
    titulo: 'Política de privacidade',
    resumen: 'Como o SOS Infante coleta, usa e protege seus dados pessoais em www.sosinfante.org e nos subdomínios.',
    secciones: [
      ['O que coletamos', 'Dados fornecidos voluntariamente nos formulários de doação, voluntariado, contato e newsletter: nome, e-mail, telefone, cidade e perfil profissional. Dados técnicos automáticos: endereço IP, tipo de dispositivo, navegador, páginas visitadas e origem do acesso.'],
      ['Para que usamos', 'Processar doações e emitir recibos; gerir inscrições de voluntariado; responder a mensagens; enviar o boletim quando você autoriza; e medir o desempenho do site de forma agregada.'],
      ['Cookies', 'Usamos cookies próprios para preferências básicas e cookies de análise para entender o uso do site. Você pode bloqueá-los no navegador sem perder acesso ao conteúdo.'],
      ['Com quem compartilhamos', 'Apenas com os fornecedores necessários à operação: processadora de pagamentos, e-mail transacional, análise e hospedagem. Não vendemos nem cedemos dados pessoais.'],
      ['Crianças e adolescentes', 'Não coletamos dados pessoais de menores de idade sem consentimento de quem é responsável. Imagens de crianças são publicadas apenas com consentimento informado e com a identidade preservada.'],
      ['Seus direitos', 'Conforme a LGPD, você pode solicitar acesso, correção, eliminação, portabilidade e informação sobre o compartilhamento dos seus dados, além de revogar o consentimento, escrevendo para accion@sosinfante.org. Respondemos em até 30 dias.']
    ]
  },
  {
    slug: 'terminos',
    titulo: 'Termos de uso',
    resumen: 'Condições de uso do site, da loja e dos programas do SOS Infante.',
    secciones: [
      ['Uso do site', 'O conteúdo de www.sosinfante.org é informativo e não substitui atendimento médico, psicológico ou jurídico profissional. Diante de risco imediato a uma criança, acione os serviços de emergência.'],
      ['Doações', 'As doações são voluntárias e não reembolsáveis, salvo erro comprovado de cobrança. Cada doação recebe comprovante e é destinada ao programa ou fundo indicado por quem doa.'],
      ['Loja', 'Os produtos são vendidos para financiar os programas. Preços em dólares norte-americanos. Os prazos de entrega dependem do fornecedor de produção e do destino.'],
      ['Propriedade intelectual', 'Marca, logotipo, campanhas e materiais pertencem ao SOS Infante. Os kits educativos podem ser reproduzidos sem fins lucrativos, com citação da fonte.'],
      ['Voluntariado', 'A participação como voluntário não gera vínculo empregatício. Rege-se pelo termo de compromisso assinado e pela política de proteção da criança.']
    ]
  },
  {
    slug: 'devoluciones',
    titulo: 'Trocas e devoluções',
    resumen: 'Política de trocas e reembolsos da loja do SOS Infante.',
    secciones: [
      ['Prazo', 'Você tem 14 dias corridos a partir do recebimento para solicitar a devolução de produtos físicos em estado original e sem uso.'],
      ['Como solicitar', 'Escreva para accion@sosinfante.org com número do pedido, motivo e fotografias. Respondemos em 72 horas úteis com as instruções de envio.'],
      ['Reembolsos', 'Aprovada a devolução, o reembolso é feito no meio de pagamento original em até 10 dias úteis. O frete não é reembolsável, salvo erro nosso ou produto com defeito.'],
      ['Exceções', 'Não se aplicam devoluções a doações, apadrinhamentos, serviços já prestados ou produtos personalizados.'],
      ['Produto com defeito', 'Se o produto chegar danificado ou trocado, repomos sem custo ou devolvemos o valor integral, como você preferir.']
    ]
  }
];

module.exports = {
  site, sedes, proyectos, cifras, formasDeApoyo, faqs, blog, identidad, voluntariado,
  tienda, legales, LEGAL_ACTUALIZADO, embudoVoluntariado, confianza, impacto,
  departamentos, gobernanza, acopio, lineasIngreso, catalogoImpacto, campanas
};
