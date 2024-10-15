/**
 * Verkefni 7 í Vefforritun 1, 2024.
 * Notar jsdoc til að skrifa lýsingu á föllum, inntaki og úttaki.
 * Kveikið á `Check JS` í Visual Studio Code til að sjá mögulegar villur.
 * Notar `console.assert` til að athuga hvort föll virki rétt.
 */

//------------------------------------------------------------------------------
// Fastar


/** Íslenskir sérhljóðar */
const CONSONANTS = 'bcdfghjklmnpqrstvwxz'.split('');

/** Íslenskir samhljóðar */
const VOWELS = 'aeiouyáéýúíóöæ'.split('');

//------------------------------------------------------------------------------
// Hjálparföll

/**
 * Athuga hvort óþekkt gildi sé strengur eða ekki.
 * @param {unknown} str Óþekkt gildi sem athuga á hvort sé strengur.
 * @returns {boolean}`true` ef `str` er strengur, annars `false`.
 */
// Skilgreinum anonymous fall og bindum við breytuna `isString`
const isString = (str) => typeof str === 'string';

// Prófum fallið
console.assert(isString('hi') === true, 'isString: skilar `true` fyrir streng');
console.assert(isString(42) === false, 'isString: skilar `false` fyrir tölu');
console.assert(isString(null) === false, 'isString: skilar `false` fyrir null');

/**
 * Öruggt fall sem skilar fylki af strengjum úr gefnum streng, skipt upp með
 * gefnum afmkarkara (separator).
 * @param {string} str Hugsanlegur strengur sem skal skipta.
 * @returns {string[]} Fylki af strengjum eða tóma fylkið ef afmarkari kom
 * ekki fram.
 */
function split(str, separator = ' ') {
  if (!isString(str)) {
    return [];
  }

  return str.split(separator);
}

//------------------------------------------------------------------------------
// Grunnföll sem skilgreina á

function longest(str) {
  const split = str.split(' ');
  let lengstaOrd = '';
  for (const ord of split) {
    if (ord.length > lengstaOrd.length) {
      lengstaOrd = ord;
    }
  }
  return lengstaOrd;
}
console.assert(longest('þetta er próf') === 'þetta', 'longest: should return "þetta"');

function shortest(str) {
  const split = str.split(' ');
  let styrstaOrd = split[0]; // Initialize with the first word
  for (const ord of split) {
    if (ord.length < styrstaOrd.length) {
      styrstaOrd = ord;
    }
  }
  return styrstaOrd;
}

console.assert(shortest('þetta er próf') === 'er', 'shortest: should return "er"');


function reverse(str) {
  if (isString(str)) {
    const split = str.split('');
    const reversed = split.reverse();
  
    return reversed.join('');
  }
  return null;
}
console.assert(reverse('halló') === 'óllah', 'reverse: sný við einföldum string');

console.assert(reverse(false) === null, 'reverse: ef ekki strengur, skila null');

function palindrome(str) {
  if (!isString(str)) {
    return false;
  }

  const hreinnStrengur = str.toLowerCase().replace(/[\s.,!?]/g, ''); // Remove spaces and punctuation, lowercase
  return hreinnStrengur === reverse(hreinnStrengur);
}

console.assert(palindrome('abba') === true, 'palindrome: "abba" er palindrome');
console.assert(palindrome('abc') === false, 'palindrome: "abc" er ekki palindrome');

function vowels(str) {
  if (!isString(str)) {
    return 0;
  }

  return [...str.toLowerCase()].filter(char => VOWELS.includes(char)).length;
}

console.assert(vowels('halló') === 2, 'vowels: halló inniheldur 2 sérhljóða');
console.assert(vowels('abc') === 1, 'vowels: abc inniheldur 1 sérhljóða');

function consonants(str) {
  if (!isString(str)) {
    return 0;
  }

  return [...str.toLowerCase()].filter(char => CONSONANTS.includes(char)).length;
}

console.assert(consonants('halló') === 3, 'consonants: halló inniheldur 3 samhljóða');
console.assert(consonants('abc') === 2, 'consonants: abc inniheldur 2 samhljóða');

//------------------------------------------------------------------------------
// Leiðbeint ferli

function start() {
  const profStrengur = 'Þetta er próf';

  console.log('Lengsta orð:', longest(profStrengur));
  console.log('Stysta orð:', shortest(profStrengur));
  console.log('Snúa við:', reverse(profStrengur));
  console.log('Er palindrome:', palindrome(profStrengur));
  console.log('Sérhljóðar:', vowels(profStrengur));
  console.log('Samhljóðar:', consonants(profStrengur));
}
