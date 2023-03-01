const getNthElement = (index, array) => {
  const length = array.length;
  const adjustedIndex = index % length;
  return array[adjustedIndex];
};

const arrayToCSVString = array => {
  return array.join(',');
};

const csvStringToArray = string => {
  return string.split(',');
};

const addToArray = (element, array) => {
  array.push(element);
};

const addToArray2 = (element, array) => {
  return [...array, element];
};

const removeNthElement = (index, array) => {
  array.splice(index, 1);
};

const numbersToStrings = numbers => {
  return numbers.map(num => num.toString());
};

const uppercaseWordsInArray = strings => {
  return strings.map(strings => strings.toUpperCase());
};

const reverseWordsInArray = strings => {
  return strings.map(strings => strings.split('').reverse().join(''));
};

const onlyEven = numbers => {
  return numbers.filter(number => number % 2 === 0);
};

const removeNthElement2 = (index, array) => {
  return array.filter((_, i) => i !== index);
};

const elementsStartingWithAVowel = strings => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  return strings.filter(strings => vowels.includes(strings[0].toLowerCase()));
};

const removeSpaces = string => {
  return string.replace(/\s+/g, '');
};

const sumNumbers = numbers => {
  return numbers.reduce((sum, num) => sum + num, 0);
};

const sortByLastLetter = strings => {
  return strings.sort((a, b) => {
    const lastA = a.charAt(a.length - 1);
    const lastB = b.charAt(b.length - 1);
    if (lastA < lastB) {
      return -1;
    }
    if (lastA > lastB) {
      return 1;
    }
    return 0;
  });
};

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
