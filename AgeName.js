'use strict';

function createGreeting(name, age){
  if(typeof name !== 'string'|| typeof age !== 'number'){
    throw new TypeError();
  }
  else{
    const yob = getYearOfBirth(age);
    return `Hi, my name is ${name} and I'm ${age} years old. ${yob}'`;
  }
  
}
function getYearOfBirth(age){
  if(age<0){
    throw new Error('Age can not be negative');
  }
  else{
    const yearOfBirth = 2018-age;
    return `I was born in ${yearOfBirth}.`;
  }
  
}

try{
  const greeting = createGreeting('Alex', 25);
  console.log(greeting);
}
catch(e){
  console.log(e.message);
}
