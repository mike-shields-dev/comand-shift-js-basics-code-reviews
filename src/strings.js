function sayHello (s) {
  return('Hello, ' + s + '!');
};

function uppercase (s) {
  return(s.toUpperCase());
};

function lowercase (s) {
  return(s.toLowerCase());
};

function countCharacters (s) {
  return(s.length);
};

function firstCharacter (s) {
  return(s.charAt(0));
};

function firstCharacters (s, n) {
  return(s.slice(0, n));
};

module.exports = {
  sayHello,
  uppercase,
  lowercase,
  countCharacters,
  firstCharacter,
  firstCharacters
};
