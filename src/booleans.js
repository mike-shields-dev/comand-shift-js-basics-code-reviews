const negate = (a) => {
  return !a;
};

const both = (a, b) => {
  return a && b;
};

function either(a, b) {
  return a || b;
};

function none(a, b) {
  return !(a || b);
};

function one(a, b) {
  return (a && !b) || (!a && b);
};

function truthiness(a) {
  return !!a;
};

function isEqual(a, b) {
  return (a === b);
};

function isGreaterThan(a, b) {
  return (a > b);
};

function isLessThanOrEqualTo(a, b) {
  return (a <= b);
};

function isOdd(a) {
  if (a % 2==0){
    return false;}
 else {
    return true;
 }
};

function isEven(a) {
  if (a % 2==0){
    return true;}
 else {
    return false;
 }
};

function isSquare(a) {
  if (Number.isInteger(Math.sqrt(a))) {
    return true;
} else {
    return false;
}
};

function startsWith(char, string) {
  if (string.startsWith(char)) {return true;}
  else {return false;}
};

function containsVowels(string) {
  string = string.toLowerCase();
  for (var i = 0; i < string.length; i++) {
    if (string[i] == 'a' || string[i] == 'e' || string[i] == 'i' || string[i] == 'o' || string[i] == 'u') {
      return true;
    }
  }
  return false;
};

function isLowerCase(string) {
  return string === string.toLowerCase();

};

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
