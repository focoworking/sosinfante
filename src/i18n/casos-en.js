// Real Cases — English index. Each batch is adapted for an English-speaking
// audience (US donors and diaspora families), not literally translated.
const META = {
  titulo: 'Real cases',
  descripcion:
    'Investigations, official figures and documented patterns of violence against children in Ecuador and Venezuela. Every number carries a verifiable source.',
  intro:
    'This section does not tell stories to move you: it documents mechanisms. What made it possible, what failed afterward, and what would have to change so it does not happen again. Every figure carries its source and its date.',
  aviso:
    'This section deals with violence against children. If a child is at risk right now, call emergency services before reading on: 911 in the United States and Venezuela, ECU 911 in Ecuador. In the US you can also reach the Childhelp National Child Abuse Hotline at 1-800-422-4453.',
  categorias: [
    { slug: 'cifras', nombre: 'The numbers' },
    { slug: 'familia', nombre: 'Violence at home' },
    { slug: 'escuela', nombre: 'Schools and authority' },
    { slug: 'instituciones-fe', nombre: 'Faith institutions' },
    { slug: 'justicia', nombre: 'Justice and impunity' }
  ]
};

const lote1 = require('./casos-en-lote1.js');
const lote2 = require('./casos-en-lote2.js');

module.exports = { META, casos: [].concat(lote1, lote2) };
