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
  if (typeof str !== 'string') {
    return null;
  }
  
  if (str.trim() === '') {
    return '';
  }
  
  const words = str.split(' ');
  let longestWord = words[0];
  
  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  
  return longestWord;
}

console.assert(longest('þetta er próf') === 'þetta', 'longest: should return "þetta"');
console.assert(longest('abc def ghi') === 'abc', 'longest: should return "abc"');
console.assert(longest('halló heimur!') === 'heimur!', 'longest: should return "heimur!"');
console.assert(longest('') === '', 'longest: should return an empty string');
console.assert(longest(42) === null, 'longest: should return null for non-string input');


function shortest(str) {
  if (typeof str !== 'string') {
    return null;
  }
  if (str.trim() === '') {
    return '';
  }
  
  const words = str.split(' ');
  let shortestWord = words[0];
  
  for (const word of words) {
    if (word.length < shortestWord.length) {
      shortestWord = word;
    }
  }
  
  return shortestWord;
}
console.assert(shortest('þetta er próf') === 'er', 'shortest: should return "er"');
console.assert(shortest('abc def ghi') === 'abc', 'shortest: should return "abc"');
console.assert(shortest('halló! heimur.') === 'halló!', 'shortest: should return "halló!"');
console.assert(shortest('') === '', 'shortest: should return an empty string');
console.assert(shortest(42) === null, 'shortest: should return null for non-string input');



function reverse(str) {
  if (!isString(str)) {
    return null;
  }
  if (str === '') {
    return '';
  }

  return str.split('').reverse().join('');
}
console.assert(reverse('halló') === 'óllah', 'reverse: sný við einföldum string');
console.assert(reverse('') === '', 'reverse: should return empty string for empty input');
console.assert(reverse(false) === null, 'reverse: should return null for non-string input');


function palindrome(str) {
  if (!isString(str)) {
    return false;
  }
  if (str === '') {
    return false;
  }

  const loweredStr = str.toLowerCase();

  return loweredStr === reverse(loweredStr);
}
console.assert(palindrome('abba') === true, 'palindrome: "abba" er palindrome');
console.assert(palindrome('abc') === false, 'palindrome: "abc" er ekki palindrome');
console.assert(palindrome('A man, a plan, a canal, Panama') === false, 'palindrome: Should return false because spaces/punctuation are not removed');
console.assert(palindrome('') === false, 'palindrome: Tómur strengur er ekki samhverfur');


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
  alert('Velkomin/n í þennan leik!\nSláðu inn streng(orð / setningu) til að fá skemmtilegar staðreyndir!');
  const input = prompt('Sláðu inn streng:');

  if (input === null || input.trim() === '') return;

  const longestWord = longest(input);
  const shortestWord = shortest(input);
  const reversed = reverse(input);
  const vowelCount = vowels(input);
  const consonantCount = consonants(input);
  const isPalindrome = palindrome(input);

  console.log('Niðurstöður:', {
    input,
    longestWord,
    shortestWord,
    reversed,
    vowelCount,
    consonantCount,
    isPalindrome
  });

  alert(
    `Niðurstöður fyrir strenginn "${input}":
    Lengsta orð: ${longestWord}
    Stysta orð: ${shortestWord}
    Öfugur strengur: ${reversed}
    Fjöldi sérhljóða: ${vowelCount}
    Fjöldi samhljóða: ${consonantCount}
    Er palindrome: ${isPalindrome ? 'Já' : 'Nei'}`
  );

  if (confirm('Gera aftur?')) {
    start();
  }
}
start();
