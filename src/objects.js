const createPerson = (name, age) => ({ name, age });

const getName = ({ name }) => name;

const getProperty = (property, object) => object[property];

const hasProperty = (property, object) => !!object[property];

const isOver65 = person => person.age > 65;

const getAges = people => people.map(({ age }) => age);

const findByName = (name, people) =>
  people.find(person => person.name === name);

const findHondas = cars =>
  cars.filter(({ manufacturer }) => manufacturer === 'Honda');

const averageAge = people =>
  people.reduce((totalAges, { age }) => totalAges + age, 0) / people.length;

const createTalkingPerson = (name, age) => ({
  name,
  age,
  introduce(introduceTo) {
    return `Hi ${introduceTo}, my name is ${this.name} and I am ${this.age}!`;
  }
});

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson
};
