import { CONFIG } from './config'

export const WORDS = [
  'putain',
  'bongos',
  'cornet',
  'crotal',
  'cymbal',
  'djembe',
  'fiddle',
  'guitar',
  'maraca',
  'spoons',
  'tamtam',
  'tomtom',
  'tymbal',
  'vielle',
  'violin',
  'bugles',
  'oompah',
  'benoit',
  'gitans',
  'gypsie',
  'basile',
  'celine',
  'chloet',
  'erwann',
  'jerome',
  'pierre',
  'romain',
  'malika',
  'adrien',
  'clodio',
  'oliver',
  'mihail',
  'sergio',
  'piotre',
  'perrin',
  'thomas',
  'accent',
  'adagio',
  'anthem',
  'arioso',
  'tempos',
  'atonal',
  'aubade',
  'ballad',
  'ballet',
  'bowing',
  'grunge',
  'bridge',
  'burden',
  'cantor',
  'choral',
  'chorus',
  'copula',
  'doodle',
  'dulcet',
  'encore',
  'entree',
  'fugato',
  'hammer',
  'hocket',
  'lament',
  'leader',
  'legato',
  'maggot',
  'faggot',
  'manual',
  'medley',
  'melody',
  'octave',
  'phrase',
  'piston',
  'presto',
  'repeat',
  'rhythm',
  'septet',
  'sextet',
  'sonata',
  'string',
  'tampon',
  'tuning',
  'unison',
  'vivace',
  'majors',
  'minors',
  'tenors',
  'vivace',
  'volume',
  'pastis',
  'tetris',
  'louxor',
  'bambin',
  'aviron',
  'copain',
  'sangria',
  'amants',
  'dreams',
  'gowest',
  'pixuli',
  'griego',
  'tekila',
  'titine',
  'chatte',
  'vodkas',
  'whisky',
]

if (CONFIG.normalization) {
  WORDS.forEach((val, i) => (WORDS[i] = val.normalize(CONFIG.normalization)))
}

function shuffle(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
}

if (CONFIG.shuffle) {
  shuffle(WORDS)
}
