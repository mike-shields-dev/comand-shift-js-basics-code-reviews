const getNthElement = (index, array) => {
  index %= array.length;
  return array[index];
};

const arrayToCSVString = array => {
  return array.join();
};

const csvStringToArray = string => {
  return string.split(',');
};

const addToArray = (element, array) => {
  array.push(element);
};

const addToArray2 = (element, array) => {
  const newArray = [...array, element];
  return newArray;
};

const removeNthElement = (index, array) => {
  array.splice(index, 1);
  return array;
};

const numbersToStrings = numbers => {
  return numbers.map(String);
};

const uppercaseWordsInArray = strings => {
  return strings
    .join()
    .toUpperCase()
    .split(',');
};

const reverseWordsInArray = strings => {
  return strings
    .toString()
    .split('')
    .reverse()
    .join('')
    .split(',')
    .reverse();
};

const onlyEven = numbers => {
  return numbers.filter(even);
  function even(n) {
    return !(n % 2);
  }
};

const removeNthElement2 = (index, array) => {
  let firstArray = array.slice(0, index);
  let secondArray = array.slice((index + 1), array[-1]);
  return firstArray.concat(secondArray);
};

const elementsStartingWithAVowel = strings => {
  // your code here
};

const removeSpaces = string => {
  // your code here
};

const sumNumbers = numbers => {
  // your code here
};

const sortByLastLetter = strings => {
  // your code here
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
