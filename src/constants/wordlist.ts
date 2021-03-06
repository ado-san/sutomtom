import { CONFIG } from './config'

export const WORDS = [
  'coucou',
  'putain',
  'bongos',
  'titine',
  'vodkas',
  'cornet',
  'pinpon',
  'tetris',
  'cymbal',
  'djembe',
  'guitar',
  'maraca',
  'spoons',
  'tamtam',
  'dreams',
  'pastis',
  'aviron',
  'pimpom',
  'tymbal',
  'gowest',
  'violin',
  'bugles',
  'oompah',
  'benoit',
  'gitans',
  'gypsie',
  'basile',
  'tomtom',
  'celine',
  'vielle',
  'chloet',
  'erwann',
  'ballad',
  'majors',
  'jerome',
  'minors',
  'pierre',
  'anthem',
  'romain',
  'ballet',
  'malika',
  'chorus',
  'adrien',
  'louxor',
  'atonal',
  'oliver',
  'bridge',
  'mihail',
  'cantor',
  'sergio',
  'hammer',
  'piotre',
  'tampon',
  'entree',
  'perrin',
  'leader',
  'thomas',
  'accent',
  'tempos',
  'amants',
  'aubade',
  'bowing',
  'grunge',
  'burden',
  'choral',
  'doodle',
  'encore',
  'tekila',
  'copain',
  'fugato',
  'hocket',
  'lament',
  'bambin',
  'legato',
  'maggot',
  'string',
  'faggot',
  'manual',
  'medley',
  'pixuli',
  'melody',
  'octave',
  'phrase',
  'piston',
  'presto',
  'repeat',
  'chatte',
  'rhythm',
  'septet',
  'whisky',
  'sonata',
  'tuning',
  'unison',
  'vivace',
  'tenors',
  'vivace',
  'france',
  'volume',
  'griego',
  'ricard',
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
