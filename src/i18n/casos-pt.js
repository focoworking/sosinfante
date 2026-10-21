// Casos Reais — índice em português. Cada lote é adaptado para o leitor
// brasileiro, com referências locais. Não é tradução literal.
const META = {
  titulo: 'Casos reais',
  descripcion:
    'Investigações, números oficiais e padrões documentados sobre a violência contra crianças e adolescentes no Equador e na Venezuela. Cada dado com fonte verificável.',
  intro:
    'Esta seção não conta histórias para comover: documenta mecanismos. O que permitiu que acontecesse, o que falhou depois e o que precisaria mudar para não se repetir. Todo número traz sua fonte e sua data.',
  aviso:
    'Esta seção trata de violência contra crianças e adolescentes. Se agora mesmo houver uma criança em risco, ligue para a emergência antes de seguir lendo: 190 no Brasil, 911 nos Estados Unidos e na Venezuela, ECU 911 no Equador. Denúncias também pelo Disque 100, gratuito e anônimo.',
  categorias: [
    { slug: 'cifras', nombre: 'Os números' },
    { slug: 'familia', nombre: 'Violência em casa' },
    { slug: 'escuela', nombre: 'Escolas e autoridade' },
    { slug: 'instituciones-fe', nombre: 'Instituições de fé' },
    { slug: 'justicia', nombre: 'Justiça e impunidade' }
  ]
};

const lote1 = require('./casos-pt-lote1.js');
const lote2 = require('./casos-pt-lote2.js');

module.exports = { META, casos: [].concat(lote1, lote2) };
