'use strict';

function createGreeting(name, age){
  
  return `Hi, my name is ${name} and I'm ${age} years old.`;
}
function getYearOfBirth(age){
  const yearOfBirth = 2016-age;
  return `I was born in ${yearOfBirth}.`;
}

const greeting = createGreeting('Alex', 25);
console.log(greeting);