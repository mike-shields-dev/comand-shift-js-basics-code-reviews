const getNthElement = (index, array) => {
  if (index < array.length) {
    return array[index];
  }
  return array[index - array.length];
};

const arrayToCSVString = array => {
//  console.log(array.toString());
  return array.toString();
};

const csvStringToArray = string => {
  return string.split(',');
};

const addToArray = (element, array) => {
  array.push(element);
};

function bob(bsr) {
  return bsr;
}

const addToArray2 = (element, array) => {
  const newArray = array.map(bob);
  newArray.push(element);
  console.log(newArray);
  return newArray;
};


const removeNthElement = (index, array) => {
if (index > -1) {
  array.splice(index, 1);
}
return(array);
}

const numbersToStrings = numbers => {
  const arrayToString = numbers.toString();
  return arrayToString.split(',');
};

const uppercaseWordsInArray = strings => {
  return strings.map(words => words.toUpperCase());
};

const reverseWordsInArray = strings => {
  const reverse = strings.map(item => item.split('').reverse().join(''));
  //console.log(reverse);
  return reverse;
};

const onlyEven = numbers => {
  return evenNum = numbers.filter((num) => num % 2 === 0);
};

const removeNthElement2 = (index, array) => {
  const copy = array.map(bob);
 // console.log(copy);
  const words = copy.splice(index, 1);
//  console.log('words are', words, 'copy is', copy);
  return copy;
};

const elementsStartingWithAVowel = strings => {
  const withVowels = strings.filter(str => str.match(/^[aeiou]/i));
  return withVowels;
};

const removeSpaces = string => {
  return string.split(' ').join('');
};

const sumNumbers = numbers => {
  return numbers.reduce((acc, number) => {
    return acc + number;
  });
};

const sortByLastLetter = strings => {
  const reversed = strings.map(word => word.split('').reverse().join(''));
  console.log(reversed);
  const sorted = reversed.sort();
  console.log(sorted);

  return sorted.map(word => word.split('').reverse().join(''));
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
