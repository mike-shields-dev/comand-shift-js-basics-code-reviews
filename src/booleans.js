const negate = a => !a;

const both = (a, b) => a && b;

const either = (a, b) => a || b;

const none = (a, b) => !a && !b;

const one = (a, b) => !!(!a - !b);

const truthiness = a => !!a;

const isEqual = (a, b) => a === b;

const isGreaterThan = (a, b) => a > b;

const isLessThanOrEqualTo = (a, b) => a <= b;

const isOdd = a => !!(a % 2);

const isEven = a => !(a % 2);

const isSquare = a => Number.isInteger(Math.sqrt(a));

const startsWith = (char, string) => string.startsWith(char);

const containsVowels = string => /[aeiou]/i.test(string);

const isLowerCase = string => string === string.toLowerCase();

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
