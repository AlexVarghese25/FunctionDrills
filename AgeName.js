'use strict';

function createGreeting(name, age){
  return `Hi, my name is ${name} and I'm ${age} years old`;
}

const greeting = createGreeting('Alex', 25);
console.log(greeting);