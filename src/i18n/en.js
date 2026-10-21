// Contenido en inglés. No es una traducción del español: está escrito para
// quien lee desde Estados Unidos —donantes de Florida, empresas, voluntariado
// bilingüe— y por eso cambian los datos citados, los incentivos fiscales y
// el orden de los argumentos.

const site = {
  name: 'SOS Infante',
  legalName: 'SOS Infante — childhood without violence',
  domain: 'https://www.sosinfante.org',
  tagline: 'Breaking cycles of violence against children',
  description:
    'SOS Infante is a nonprofit working to prevent and respond to physical, psychological and sexual violence against children. It runs a donation center in South Florida and delivers care on the ground in Quito, Ecuador and Valera, Venezuela.',
  founded: '2018',
  email: 'accion@sosinfante.org',
  telefono: '+1 305 988 1925',
  whatsapp: '13059881925',
  direccionUS: '3800 Inverrary Blvd, Fort Lauderdale, FL 33319, United States',
  horario: 'Monday to Friday, 8:00 am to 5:00 pm',
  color: '#1EB5C4',
  social: [
    'https://www.facebook.com/sosinfante/',
    'https://www.instagram.com/sosinfante/',
    'https://www.youtube.com/@sosinfante',
    'https://www.linkedin.com/company/sosinfante/'
  ]
};

const identidad = {
  vision: 'We want to see families fully recovered from the trauma of domestic violence. One at a time.',
  lema: 'One life, one hope. One at a time.',
  promesa:
    'We turn small, everyday acts into protection. Our job is to be the emotional, professional and financial backing a child can count on — in Ecuador, in Venezuela, and in the Latino community of South Florida.',
  creencia: 'The future is built on daily decisions and on what the past has already taught us.',
  valores: [
    { nombre: 'Love', frase: 'Love, worn on our skin', texto: 'Every intervention starts with a relationship, not a form.' },
    { nombre: 'Faith', frase: 'Faith, in motion', texto: 'We stay with long processes, including the ones that take years to show results.' },
    { nombre: 'Opportunity', frase: 'We are made of fresh starts', texto: 'No child’s story is finished. There is always a way back.' },
    { nombre: 'Service', frase: 'Service, in practice', texto: 'Presence on the ground comes before any statement.' },
    { nombre: 'Generosity', frase: 'Our resources, without measure', texto: 'What comes in becomes direct care, and we report where it went.' }
  ]
};

const sedes = [
  {
    slug: 'miami',
    ciudad: 'Miami',
    pais: 'United States',
    bandera: '🇺🇸',
    rol: 'Partnerships, fundraising and the donation center that supplies the whole operation',
    apertura: 'Reopening 2026',
    region: 'FL',
    lat: 25.7617,
    lng: -80.1918,
    resumen:
      'South Florida is where the diaspora, local companies and family foundations meet the work on the ground. Goods collected in Broward County reach families in Ecuador and Venezuela within weeks.',
    programas: ['Protective Adult workshops in bilingual schools', 'Corporate partnerships and matching gifts', 'Regional emergency fund'],
    contacto: 'accion@sosinfante.org',
    idioma: 'English / Spanish'
  },
  {
    slug: 'quito',
    ciudad: 'Quito',
    pais: 'Ecuador',
    bandera: '🇪🇨',
    rol: 'Our operating base since 2018: prevention, counseling and public campaigns',
    apertura: 'Running since 2018 · relaunched in 2026',
    region: 'Pichincha',
    lat: -0.1807,
    lng: -78.4678,
    resumen:
      'From Quito we run school workshops, counseling for survivors and the public campaigns that put child protection on the national conversation.',
    programas: ['Shungo Heart', 'Todo Posi', 'Protective Adult', 'Child pregnancy: zero tolerance'],
    contacto: 'accion@sosinfante.org',
    idioma: 'Spanish'
  },
  {
    slug: 'valera',
    ciudad: 'Valera',
    pais: 'Venezuela',
    bandera: '🇻🇪',
    rol: 'New site: food and medical assistance, plus a school for protective adults',
    apertura: 'Opening 2026',
    region: 'Trujillo',
    lat: 9.3167,
    lng: -70.6,
    resumen:
      'Valera, in Trujillo state, opens as our Andean base, serving children left vulnerable by migration, malnutrition and violence at home.',
    programas: ['Shungo Heart Venezuela', 'Community medical brigades', 'Protective adult network'],
    contacto: 'accion@sosinfante.org',
    idioma: 'Spanish'
  }
];

const proyectos = [
  {
    slug: 'adulto-protector',
    nombre: 'Protective Adult',
    claim: 'What if every child had an adult who knew what to do?',
    tipo: 'Prevention program',
    sedes: ['miami', 'quito', 'valera'],
    resumen:
      'A six-session course that teaches parents, teachers and caregivers to spot the warning signs of abuse, respond without re-traumatizing the child, and follow the reporting process to the end.',
    detalle:
      'Most adults sense when something is wrong and freeze, because nobody ever taught them the next step. The course covers warning signs, the language of care, reporting pathways, crisis response, discipline without violence, and how a community keeps protection going after the workshop ends. In Florida it is delivered in English and Spanish, and it maps the local mandatory-reporting duties that apply to teachers, coaches and medical staff.',
    metricas: ['6 sessions per cohort', '1 facilitator per 25 adults', '90-day follow-up'],
    kpi: 'adults trained'
  },
  {
    slug: 'shungo-corazon',
    nombre: 'Shungo Heart',
    claim: 'Medical, nutritional and mental health care for children',
    tipo: 'Direct care program',
    sedes: ['quito', 'valera'],
    resumen:
      '«Shungo» means heart in Kichwa, the Andean language — it also stands for tenderness and love. The program delivers integrated care to children living in vulnerable conditions.',
    detalle:
      'Mobile brigades combine a medical and nutritional check-up, monthly food kits, and short-term counseling for children exposed to violence. It runs with partner schools and community centers, which is how we reach children who would never make it to a clinic on their own.',
    metricas: ['Medical and nutritional screening', 'Short-term counseling, 8 sessions', 'Monthly food kits'],
    kpi: 'children served'
  },
  {
    slug: 'todo-posi',
    nombre: 'Todo Posi',
    claim: 'A mental health campaign made with teenagers, not about them',
    tipo: 'Communications campaign',
    sedes: ['miami', 'quito'],
    resumen:
      'A campaign that turns the conversation about violence into an everyday practice of care, built together with the teenagers it speaks to.',
    detalle:
      'Teenagers write the content: social posts, school challenges and a downloadable teacher kit. The goal is plain — make asking for help normal, and take the shame off the person who speaks up.',
    metricas: ['Downloadable teacher kit', 'School challenges', 'Content co-created with teenagers'],
    kpi: 'teenagers reached'
  },
  {
    slug: 'artis-terapia',
    nombre: 'Art Therapy',
    claim: 'Art as a way in, when words are not there yet',
    tipo: 'Art therapy program',
    sedes: ['quito', 'valera'],
    resumen:
      'Workshops that use performing arts, visual art and music to identify, treat and prevent psychological trauma in children.',
    detalle:
      'Each group is led by a pair: a professional artist and a psychologist. Art opens a door to what a child cannot yet name, and gives them a safe channel to work through it. The program closes with a community showing, which changes how the neighborhood sees these children.',
    metricas: ['Two sessions a week plus one Saturday a month', 'Artist and psychologist pairs', 'Closing community showing'],
    kpi: 'children in art therapy'
  },
  {
    slug: 'embarazo-infantil',
    nombre: 'Child pregnancy: zero tolerance',
    claim: 'A pregnant ten-year-old is a crime scene, not a statistic',
    tipo: 'Research and advocacy',
    sedes: ['quito', 'valera'],
    resumen:
      'Open data, legal support and newsroom training on pregnancy in girls under 14, which the law treats as what it is: the consequence of sexual violence.',
    detalle:
      'We publish verifiable figures by province, walk families through the reporting process, and train journalists and teachers to name the fact correctly. Language matters here: calling it «teen pregnancy» hides a crime.',
    metricas: ['Open data by province', 'Legal support for families', 'Reporting guide for newsrooms'],
    kpi: 'cases supported'
  }
];

const cifras = [
  {
    dato: '532,228',
    texto: 'children were confirmed victims of abuse or neglect in the United States in a single year — a rate of 7.2 per 1,000 children.',
    fuente: 'Child Maltreatment report, U.S. Department of Health & Human Services'
  },
  {
    dato: '1,773',
    texto: 'children died from abuse or neglect in that same year in the United States.',
    fuente: 'Child Maltreatment report, U.S. Department of Health & Human Services'
  },
  {
    dato: '1 in 4',
    texto: 'children under five — some 176 million worldwide — lives in a home where their mother is a victim of intimate partner violence.',
    fuente: 'UNICEF, 2020'
  }
];

const formasDeApoyo = [
  {
    titulo: 'Monthly giving',
    monto: 'from $10 a month',
    texto: 'Keeps counseling and food kits running all year, instead of only when a campaign is live.',
    cta: 'Give monthly',
    href: 'dona#mensual'
  },
  {
    titulo: 'One-time gift',
    monto: 'any amount',
    texto: 'Funds medical brigades and the materials for Protective Adult workshops.',
    cta: 'Give once',
    href: 'dona#unica'
  },
  {
    titulo: 'Companies and foundations',
    monto: 'partnerships from $2,500',
    texto: 'Sponsor a full Protective Adult cohort and receive a quarterly impact report with names, numbers and dates.',
    cta: 'Talk to our partnerships team',
    href: 'contacto#alianzas'
  },
  {
    titulo: 'Volunteer',
    monto: 'your time',
    texto: 'Psychology, medicine, social work, design, data, translation and logistics, in all three cities or remotely.',
    cta: 'Apply',
    href: 'voluntariado'
  }
];

const confianza = [
  { titulo: 'Public goals', texto: 'We publish the annual target for every program and the real progress each quarter, including the quarters we fall short.', href: 'transparencia' },
  { titulo: 'Child safeguarding', texto: 'Background checks, a two-adult rule, and a reporting channel that answers within 72 hours.', href: 'transparencia#salvaguarda' },
  { titulo: '78% to direct care', texto: 'Of every dollar, 78 cents go to brigades, counseling, food and materials.', href: 'transparencia' }
];

const impacto = [
  { n: '5', l: 'active programs' },
  { n: '3', l: 'countries: U.S., Ecuador, Venezuela' },
  { n: '3.000', l: 'adults trained, 2026 goal' },
  { n: '1.200', l: 'children served, 2026 goal' }
];

const embudoVoluntariado = [
  { paso: '01', titulo: 'Apply online', texto: 'A two-minute form: who you are, what you do well, how much time you have. No résumé required.' },
  { paso: '02', titulo: 'Interview', texto: 'In person or by video call, depending on where in the world you are. We talk through the role, the schedule and what to expect.' },
  { paso: '03', titulo: 'Documents and safeguarding', texto: 'Basic ID, a signed volunteer agreement, and a background check for anyone who will work directly with children.' },
  { paso: '04', titulo: 'Onboarding', texto: 'Safeguarding training and an introduction to the program method. You join your team with a mentor assigned.' }
];

const voluntariado = {
  intro:
    'SOS Infante has several ways in, and specific areas where your skills fit without taking over the rest of your life. This is the baseline of areas and hours.',
  esquema: [
    { area: 'General volunteer', dedicacion: 'Whatever time you have', nota: 'One-off activities, by call.' },
    { area: 'Staff · Editorial', dedicacion: '1 day a week (8 hours)', nota: 'Writing and editing for the blog.' },
    { area: 'Staff · Social media', dedicacion: 'Half a day a week (4 hours)', nota: 'Content and community.' },
    { area: 'Staff · Media', dedicacion: '16+ hours, remote', nota: 'Video, photography and design.' },
    { area: 'Program · Protective Adult', dedicacion: '2 days a week (16 hours)', nota: 'Mid to senior experience in teaching, therapy or legal work.' },
    { area: 'Program · Shungo Heart', dedicacion: '2 days a week (16 hours)', nota: 'Health, nutrition and psychology professionals.' },
    { area: 'Campaign · Art Therapy', dedicacion: '2 days a week plus one Saturday a month', nota: 'Professional experience in the performing arts.' },
    { area: 'Campaign · Todo Posi', dedicacion: '2 days a week (16 hours)', nota: 'No previous training needed: attitude and energy.' }
  ],
  requisitos: [
    'Online application and interview.',
    'Basic ID and a signed volunteer agreement for the period you commit to.',
    'Background check and safeguarding training for any role with direct contact with children.',
    'Respect for the religious, political and cultural beliefs of the communities we serve.'
  ],
  aporte:
    'We do not require donations or monthly fees to volunteer. There is a one-time $50 contribution that covers your ID badge, T-shirt and printed materials.'
};

const acopio = {
  ciudad: 'Miami / Fort Lauderdale',
  direccion: '3800 Inverrary Blvd, Fort Lauderdale, FL 33319',
  horario: 'Monday to Friday, 8:00 am to 5:00 pm',
  promesa:
    'What comes through our door in Florida either ends up in a family’s hands in Ecuador or Venezuela, or becomes the money that pays for the shipment.',
  aceptamos: [
    'Children’s clothing and shoes in good condition, clean and without tears',
    'School supplies and backpacks',
    'New or nearly new toys, with no missing pieces',
    'Sealed non-perishable food with at least six months of shelf life',
    'Sealed hygiene products and diapers',
    'Basic non-invasive medical equipment, new and in its original packaging'
  ],
  noAceptamos: [
    'Expired, opened or prescription-only medication',
    'Damaged, damp or stained clothing',
    'Bulky furniture and large appliances',
    'Vehicles (they do not qualify for the customs exemption, except ambulances and similar)',
    'Prepared or perishable food'
  ],
  flujo: [
    ['01', 'Intake', 'Every drop-off is logged by donor, type and weight. You get your tax receipt on the spot.'],
    ['02', 'Sorting', 'Volunteers split everything three ways: shipment, resale, or responsible recycling.'],
    ['03', 'Consolidation', 'Pallets by destination, valued inventory and donation paperwork.'],
    ['04', 'Shipping', 'Air or ocean freight out of Miami to Ecuador, and to Venezuela through local partners.'],
    ['05', 'Customs', 'Duty exemption filed in the destination country and pickup by the local team.'],
    ['06', 'Delivery and tracking', 'Families sign for the goods; you get the report on your own box, with photographs that protect the children’s identity.']
  ],
  nota:
    'In Ecuador, goods donated from abroad to registered nonprofits are exempt from customs duties when the receiving organization files through the national customs system and holds a cooperation agreement with a public institution.'
};

const catalogoImpacto = [
  { nombre: 'Family food kit (1 month)', precio: 35, entrega: 'Quito and Valera', detalle: 'Rice, beans, oil, tuna, oats and powdered milk for a family of four.' },
  { nombre: 'Complete school kit', precio: 25, entrega: 'Quito and Valera', detalle: 'Backpack, notebooks, supplies and basic uniform for a full school year.' },
  { nombre: 'Counseling session', precio: 40, entrega: 'Quito and Valera', detalle: 'One session with a psychologist trained in childhood trauma.' },
  { nombre: 'Art therapy scholarship (1 month)', precio: 120, entrega: 'Quito and Valera', detalle: 'Four workshops led by an artist and psychologist pair.' },
  { nombre: 'Community medical brigade', precio: 250, entrega: 'Valera', detalle: 'A full day of medical and nutritional screening for 40 children.' },
  { nombre: 'Protective Adult cohort', precio: 2500, entrega: 'All three cities', detalle: '25 adults trained over six sessions, with 90-day follow-up.' }
];

const tienda = {
  intro:
    'Every purchase funds the programs. The shop runs on print-on-demand and ships to the United States, Ecuador and Venezuela.',
  categorias: [
    { slug: 'ropa-y-moda', nombre: 'Apparel', items: 11 },
    { slug: 'casa', nombre: 'Home', items: 11 },
    { slug: 'donar', nombre: 'Give', items: 7 },
    { slug: 'servicios', nombre: 'Services', items: 2 }
  ],
  productos: [
    { nombre: 'One Life One Hope tee', precio: 25, oferta: 19.99, categoria: 'Apparel' },
    { nombre: 'Better Together tee', precio: 25, oferta: 19.99, categoria: 'Apparel' },
    { nombre: 'SOS hand cap', precio: 25, categoria: 'Apparel' },
    { nombre: 'One at a Time cap', precio: 25, oferta: 19.99, categoria: 'Apparel' },
    { nombre: 'Beanie hat', precio: 25, oferta: 19.99, categoria: 'Apparel' },
    { nombre: 'Grey blanket', precio: 19.99, categoria: 'Home' },
    { nombre: 'Candles (set of 3)', precio: 4.99, categoria: 'Home' },
    { nombre: 'Scented candle (Wild Strawberry)', precio: 6.99, oferta: 5.99, categoria: 'Home' },
    { nombre: 'One Life One Hope mug', precio: 14.99, oferta: 11.99, categoria: 'Home' },
    { nombre: 'iPhone case', precio: 19.99, categoria: 'Home' },
    { nombre: 'Sponsor a food kit', precio: 35, categoria: 'Give' },
    { nombre: 'Sponsor a Protective Adult workshop', precio: 150, categoria: 'Services' }
  ]
};

const campanas = [
  { mes: 'February', nombre: 'Love without violence', gancho: 'Valentine’s Day, reclaimed: love does not hurt.', activo: 'Social challenge and teacher kit', meta: 'Recruit monthly donors' },
  { mes: 'April', nombre: 'Back to school (Andes)', gancho: 'A backpack is a school year a child does not drop out of.', activo: 'School kits and supply drive in Florida', meta: '1,000 school kits' },
  { mes: 'June', nombre: 'Children’s month', gancho: 'Children’s Day events across all three cities.', activo: 'Todo Posi day and medical brigades', meta: 'Reach and new volunteers' },
  { mes: 'August', nombre: 'Back to school (coast and Venezuela)', gancho: 'The second school wave of the year.', activo: 'Corporate supply drives in South Florida', meta: '800 school kits' },
  { mes: 'October', nombre: 'Train 1,000 protective adults', gancho: 'A month-long push with partner schools.', activo: 'Company-sponsored cohorts', meta: '1,000 adults trained' },
  { mes: 'December', nombre: 'Giving Tuesday and Shungo Christmas', gancho: 'The end of the year, when giving peaks.', activo: 'Corporate matching and peer-to-peer', meta: '30% of annual revenue' }
];

const departamentos = [
  { slug: 'direccion', nombre: 'Executive Office', mision: 'Hold the strategy, the budget and the relationship with the board and partners.', entregables: ['Annual plan and budget by city', 'Quarterly impact report', 'Board and audit relations'], roles: ['Executive director', 'Executive assistant', 'Management control'] },
  { slug: 'programas', nombre: 'Programs and Field Work', mision: 'Deliver the programs on the ground and measure results, not activities.', entregables: ['Protective Adult cohorts', 'Shungo Heart brigades', 'Baseline and per-child measurement'], roles: ['Program coordination', 'Facilitators', 'Social work', 'Medicine and nutrition'] },
  { slug: 'salvaguarda', nombre: 'Safeguarding and Psychology', mision: 'Protect every child who comes into contact with the organization, and sustain the counseling work.', entregables: ['Safeguarding policy and background checks', 'Reporting channel answered within 72 hours', 'Short-term therapy and referrals'], roles: ['Clinical psychology', 'Safeguarding officer', 'Legal counsel'] },
  { slug: 'desarrollo', nombre: 'Development and Partnerships', mision: 'Raise and retain the revenue: monthly donors, companies, foundations and grants.', entregables: ['Monthly giving program', 'Corporate sponsorship portfolio', 'Grant applications'], roles: ['Fundraising', 'Corporate partnerships', 'Grant writing', 'Donor care'] },
  { slug: 'comunicacion', nombre: 'Communications and Brand', mision: 'Turn the work into a public story, and the story into action.', entregables: ['Editorial and campaign calendar', 'Press kit and spokespeople', 'Content with consent and protected identities'], roles: ['Editorial', 'Social media', 'Design', 'Video', 'Spanish/English translation'] },
  { slug: 'marketplace', nombre: 'Marketplace and Operations', mision: 'Make the Miami donation center and the shop fund the operation and supply Ecuador and Venezuela.', entregables: ['Intake, sorting and dispatch', 'Online shop and impact catalog', 'Customs paperwork and box-level tracking'], roles: ['Logistics and warehouse', 'E-commerce', 'Procurement', 'Sorting volunteers'] },
  { slug: 'datos', nombre: 'Data, Technology and AI', mision: 'Make every decision with data, and give the team its hours back.', entregables: ['Single CRM for donors and volunteers', 'Goal dashboard by program and city', 'Automation and operational AI'], roles: ['Data analytics', 'Web development', 'Automation', 'CRM support'] }
];

const gobernanza = [
  ['Board of directors', 'Approves strategy, budget and the safeguarding policy. Meets quarterly.'],
  ['Executive director', 'Runs the plan and reports against public indicators.'],
  ['Safeguarding committee', 'Independent from programs. Receives and resolves reports within 72 hours.'],
  ['External audit', 'Annual review of the financial statements, with a public summary.'],
  ['Advisory council', 'Volunteer experts in child protection, mental health, logistics and technology.']
];

const lineasIngreso = [
  { linea: 'Monthly donors', margen: '≈ 95%', rol: 'Predictable income that covers payroll and core programs.', meta: '$120,000 / year' },
  { linea: 'Impact catalog', margen: '≈ 85%', rol: 'A purchase with a destination: food kit, school kit, counseling session.', meta: '$90,000 / year' },
  { linea: 'Resale of donated goods (Miami)', margen: '≈ 70%', rol: 'Donated inventory at no cost; pays the freight to Ecuador and Venezuela.', meta: '$150,000 / year' },
  { linea: 'Print-on-demand merchandise', margen: '20–40%', rol: 'Belonging more than revenue; no inventory, no risk.', meta: '$30,000 / year' },
  { linea: 'Corporate partnerships and grants', margen: '≈ 90%', rol: 'Sponsored cohorts and funding for the logistics operation.', meta: '$180,000 / year' },
  { linea: 'Paid training for companies and schools', margen: '≈ 60%', rol: 'Subsidizes the free workshops in public schools.', meta: '$60,000 / year' }
];

const faqs = [
  {
    q: 'What is SOS Infante?',
    a: 'SOS Infante is a nonprofit that prevents and responds to physical, psychological and sexual violence against children and teenagers. It works with families, schools and communities in Miami (United States), Quito (Ecuador) and Valera (Venezuela).'
  },
  {
    q: 'Where does SOS Infante work in 2026?',
    a: 'In three cities: Miami, Florida, which handles partnerships, fundraising and the donation center; Quito, Ecuador, where the programs and public campaigns run; and Valera, in Trujillo state, Venezuela, a new site for food and medical assistance and protective-adult training.'
  },
  {
    q: 'Is my donation tax-deductible?',
    a: 'Gifts processed through the Florida entity are made to a U.S.-registered nonprofit and receive a deductible receipt. Write to accion@sosinfante.org for the documentation your accountant needs, including the EIN and the acknowledgment letter for gifts over $250.'
  },
  {
    q: 'How do I donate goods in South Florida?',
    a: 'Drop them off at 3800 Inverrary Blvd, Fort Lauderdale, FL 33319, Monday to Friday between 8:00 am and 5:00 pm. For ten boxes or more we pick up anywhere in Broward and Miami-Dade — schedule it on WhatsApp. Companies and schools can request a labeled collection bin and a closing report.'
  },
  {
    q: 'What should I do if I suspect a child is being abused?',
    a: 'If the child is in immediate danger, call 911. In Florida, report to the Child Abuse Hotline at 1-800-962-2873, which is open 24 hours; teachers, coaches and medical staff are mandatory reporters under state law. Then write to accion@sosinfante.org and we will support the family through the process. Never confront the suspected abuser on your own.'
  },
  {
    q: 'How can I volunteer?',
    a: 'Apply on the Volunteer page. We look for psychology, medicine, social work, design, data, translation and logistics profiles. Any role with direct contact with children requires a background check and safeguarding training first.'
  },
  {
    q: 'What is a protective adult?',
    a: 'A protective adult is any grown-up who can recognize the signs of violence against a child, respond without re-traumatizing them, and follow the reporting process through. SOS Infante trains protective adults over six sessions with a 90-day follow-up.'
  },
  {
    q: 'What does «Shungo» mean?',
    a: 'Shungo means heart in Kichwa, an Andean language spoken in Ecuador. It also carries the sense of tenderness and love, and it gives its name to our medical, nutritional and mental health program.'
  },
  {
    q: 'How much time does volunteering take?',
    a: 'It depends on the area. General volunteers give whatever time they have, for one-off activities. Editorial staff give one day a week (8 hours), social media half a day (4 hours), and media roles 16 hours or more remotely. Protective Adult and Shungo Heart ask for two days a week; Art Therapy two days plus one Saturday a month.'
  },
  {
    q: 'Do I need specific qualifications to volunteer?',
    a: 'Protective Adult requires mid to senior experience in teaching, therapy or legal work. Shungo Heart requires professionals in nutrition, health and mental health. Art Therapy requires professional experience in the performing arts. Todo Posi requires none: attitude and energy are enough.'
  },
  {
    q: 'What paperwork does volunteering involve?',
    a: 'After the application and interview, we ask for basic identification and a signed volunteer agreement for the period you commit to. Any direct contact with children also requires a background check and safeguarding training.'
  },
  {
    q: 'Does volunteering cost anything?',
    a: 'We do not require donations or monthly fees. There is a one-time $50 contribution that covers your ID badge, T-shirt and printed materials.'
  }
];

const blog = [
  {
    id: 'reapertura',
    slug: 'reopening-2026',
    titulo: 'SOS Infante reopens: Miami, Quito and Valera',
    fecha: '2026-09-06',
    autor: 'SOS Infante team',
    resumen:
      'We are back with three cities, five active programs and one commitment: every dollar is reported by program and by city.',
    cuerpo: [
      'SOS Infante reopens in 2026 with a three-city structure. Miami handles partnerships, fundraising and the donation center; Quito keeps running the programs and campaigns; and Valera, in Trujillo state, Venezuela, opens as a new Andean base.',
      'The reason is plain: violence against children does not stop at borders, and neither do the families we serve. They move between Venezuela, Ecuador and the United States. A program that exists in only one city loses the family along the way.',
      'Five programs lead this stage: Protective Adult, Shungo Heart, Todo Posi, Art Therapy, and Child pregnancy: zero tolerance. Each publishes its annual goal and its progress on the accountability page.'
    ]
  },
  {
    id: 'valera',
    slug: 'why-valera',
    titulo: 'Why we are opening in Valera, Venezuela',
    fecha: '2026-09-06',
    autor: 'SOS Infante team',
    resumen:
      'Trujillo state concentrates children made vulnerable by migration, malnutrition and domestic violence, with almost no free mental health care available.',
    cuerpo: [
      'Valera sits at the crossing of Andean migration routes. Many children stay behind with grandmothers, aunts or neighbors while their parents migrate — a situation that multiplies the risk of violence and neglect.',
      'The site opens with community medical brigades, food kits and the protective-adult school, in partnership with parishes, schools and local collectives.',
      'The first year carries a public goal: 1,000 adults trained and 500 children receiving medical and psychological care.'
    ]
  },
  {
    id: 'senales',
    slug: 'warning-signs-of-child-abuse',
    titulo: 'How to recognize the warning signs of child abuse',
    fecha: '2026-09-06',
    autor: 'SOS Infante team',
    resumen:
      'A short, practical guide: physical signs, behavioral signs, signs in the environment, and what to do in the first 24 hours.',
    cuerpo: [
      'Physical signs: injuries with no coherent explanation, pain when sitting or walking, recurring infections, sudden weight loss.',
      'Behavioral signs: losing skills the child already had, fear of one specific person, sexual behavior beyond their age, withdrawal, a sharp drop in school performance, self-harm.',
      'Signs in the environment: an adult who keeps the child from being alone with anyone else, secrets between an adult and a child, gifts or money with no explanation.',
      'What to do: listen without interrogating, never promise to keep the secret, write down what the child said in their own words, do not confront the suspected abuser, start the reporting process and find counseling support. If the child is in immediate danger, call 911; in Florida, the Child Abuse Hotline is 1-800-962-2873.'
    ]
  }
];

const LEGAL_ACTUALIZADO = '2026-09-06';

const legales = [
  {
    slug: 'privacidad',
    titulo: 'Privacy policy',
    resumen: 'How SOS Infante collects, uses and protects your personal information on www.sosinfante.org and its subdomains.',
    secciones: [
      ['What we collect', 'Information you give us voluntarily through donation, volunteer, contact and newsletter forms: name, email, phone, city and professional background. Technical data collected automatically: IP address, device type, browser, pages visited and traffic source.'],
      ['How we use it', 'To process donations and issue receipts; to manage volunteer applications; to answer your questions; to send the newsletter when you opt in; and to measure how the site performs, in aggregate.'],
      ['Cookies', 'We use first-party cookies for basic preferences and analytics cookies to understand how the site is used. You can block them in your browser without losing access to any content.'],
      ['Who we share it with', 'Only the providers we need to operate: payment processor, transactional email, analytics and hosting. We do not sell or trade personal data.'],
      ['Children', 'We do not knowingly collect personal information from minors without the consent of a parent or guardian. Images of children are published only with informed consent, and with their identity protected by default.'],
      ['Your rights', 'You can request access, correction, deletion or portability of your data by writing to accion@sosinfante.org. We respond within 30 days.']
    ]
  },
  {
    slug: 'terminos',
    titulo: 'Terms of service',
    resumen: 'Conditions for using the site, the shop and the programs of SOS Infante.',
    secciones: [
      ['Using the site', 'The content of www.sosinfante.org is informational and does not replace professional medical, psychological or legal care. If a child is in immediate danger, call emergency services.'],
      ['Donations', 'Donations are voluntary and non-refundable, except for a documented processing error. Every gift receives a receipt and is assigned to the program or fund the donor selects.'],
      ['Shop', 'Products are sold to fund the programs. Prices are in U.S. dollars. Delivery times depend on the production partner and the destination.'],
      ['Intellectual property', 'The brand, logo, campaigns and materials belong to SOS Infante. Educational kits may be reproduced for non-commercial purposes with attribution.'],
      ['Volunteering', 'Volunteering does not create an employment relationship. It is governed by the signed agreement and the safeguarding policy.']
    ]
  },
  {
    slug: 'devoluciones',
    titulo: 'Returns and refunds',
    resumen: 'Return and refund policy for the SOS Infante shop.',
    secciones: [
      ['Window', 'You have 14 calendar days from delivery to request a return of physical products in original, unused condition.'],
      ['How to request one', 'Write to accion@sosinfante.org with your order number, the reason and photographs. We answer within 72 business hours with the return label.'],
      ['Refunds', 'Once approved, the refund is issued to the original payment method within 10 business days. Shipping costs are not refundable unless the error is ours or the product arrived defective.'],
      ['Exceptions', 'Donations, sponsorships, services already delivered and personalized products are not returnable.'],
      ['Defective products', 'If an item arrives damaged or incorrect, we replace it at no cost or refund it in full — your choice.']
    ]
  }
];

module.exports = {
  site, sedes, proyectos, cifras, formasDeApoyo, faqs, blog, identidad, voluntariado,
  tienda, legales, LEGAL_ACTUALIZADO, embudoVoluntariado, confianza, impacto,
  departamentos, gobernanza, acopio, lineasIngreso, catalogoImpacto, campanas
};
