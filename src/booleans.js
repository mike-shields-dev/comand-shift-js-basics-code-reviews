function negate(a) {
  return !a;
}

function both(a, b) {
  return a && b;
}

function either(a, b) {
  return a || b;
}

function none(a, b) {
  return !a && !b;
}

function one(a, b) {
  return a !== b;
  // return !(a === b);
}

function truthiness(a) {
  console.log(a, Boolean (a));
  return Boolean(a);
}

function isEqual(a, b) {
  return a === b;
}

function isGreaterThan(a, b) {
  return a > b;
}

function isLessThanOrEqualTo(a, b) {
  return a <= b;
}

function isOdd(a) {
  return a % 2 === 1;
}

function isEven(a) {
  return a % 2 === 0;
}

function isSquare(a) {
  return Number.isInteger(Math.sqrt(a));
}

function startsWith(char, string) {
  return string.startsWith(char);
}

function containsVowels(string) {
  const vowelRegex = /[aeiou]/gi;

  const match = string.match(vowelRegex);
  console.log(match,(match !== null));
  return match !== null;
}

function isLowerCase(string) {

  const ucaseRegex = /[A-Z]/;
  const match = string.match(ucaseRegex);
  console.log(match);
  return match === null;
}

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase
};
