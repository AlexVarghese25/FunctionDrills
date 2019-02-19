'use strict';

function createGreeting(name, age){
  const yob = getYearOfBirth(age);
  return `Hi, my name is ${name} and I'm ${age} years old. ${yob}'`;
}
function getYearOfBirth(age){
  if(age<0){
    throw new Error('Age can not be negative');
  }
  const yearOfBirth = 2016-age;
  return `I was born in ${yearOfBirth}.`;
}

try{
  const greeting = createGreeting('Alex', 25);
  console.log(greeting);
}
catch(e){
  return e;
}
