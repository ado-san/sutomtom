import { CONFIG } from './config'

export const WORDS = [
 'bongos',
  'cither',
  'cornet',
  'crotal',
  'cymbal',
  'djembe',
  'fiddle',
  'guitar',
  'maraca',
  'spoons',
  'tabour',
  'tamtam',
  'tomtom',
  'tymbal',
  'balim',
  'bilan',
  'vielle',
  'violin',
  'bugles',
  'oompah',
  'benoit',
  'gitans',
  'basile',
  'celine',
  'chloet',
  'erwann',
  'jeaned',
  'jerome',
  'jofrey',
  'ludove',
  'pierre',
  'romain',
  'malika',
  'adrien',
  'clodio',
  'oliver',
  'mihail',
  'xitofu',
  'tybocẖ',
  'sergio',
  'piotre',
  'siruce',
  'perrin',
  'thomas',
  'accent',
  'adagio',
  'agogic',
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
  '̱burden',
  'cantor',
  'choral',
  'chorus',
  'copula',
  'damper',
  'doodle',
  'dulcet',
  'encore',
  'entree',
  'fugato',
  'giusto',
  'hammeṟ',
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
  'treble',
  'tuning',
  'unison',
  'vivace',
  'majors',
  'minors',
  'tenors',
  'vivace',
  'volume',
  'pastis',
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
