const getNthElement = (index, array) => array[index % array.length];

const arrayToCSVString = array => array.join();

const csvStringToArray = string => string.split(',');

const addToArray = (element, array) => {
  array.push(element);
};

const addToArray2 = (element, array) => [...array, element];

const removeNthElement = (index, array) => array.splice(index, 1);

const numbersToStrings = numbers => numbers.map(String);

const uppercaseWordsInArray = strings =>
  strings.map(string => string.toUpperCase);

const reverseWordsInArray = strings =>
  strings.map(string =>
    string
      .split('')
      .reverse()
      .join('')
  );

const onlyEven = numbers => numbers.filter(n => !(n % 2));

const removeNthElement2 = (index, array) => [
  ...array.slice(0, index),
  ...array.slice(index + 1)
];

const elementsStartingWithAVowel = strings =>
  strings.filter(word => /^[aeiou]/i.test(word));

const removeSpaces = string => string.split(' ').join('');

const sumNumbers = numbers => numbers.reduce((acc, curr) => acc + curr, 0);

const sortByLastLetter = strings =>
  strings.sort((a, b) => a.at(-1).localeCompare(b.at(-1)));

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};
