const createPerson = (name, age) => {
  return { name, age };
};

const getName = object => {
  return object.name;
};

const getProperty = (property, object) => {
  return object[property];
};

const hasProperty = (property, object) => {
 return object.hasOwnProperty(property);
};

const isOver65 = person => {
  return person.age > 65;
};

const getAges = people => {
  return people.map(num => num.age);
};

const findByName = (name, people) => {
  return people.find(person => {
    return name === person.name;
  });
};

const findHondas = cars => {
  return cars.filter(make => make.manufacturer === 'Honda');
};

const averageAge = people => {
  const addAge = people.reduce((acc, curr) => {
    return acc + curr.age;
  }, 0);
  return addAge / people.length;
};

const createTalkingPerson = (name, age) => {
  return {
    name,
    age,
    introduce: otherName => {
      return 'Hi ' + otherName + ', my name is ' + name + ' and I am ' + age + '!';
      //return `Hi ${otherName}, my name is ${name} and I am ${age}!`;
    }
  };
};
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
