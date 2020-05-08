'use strict';

// 5 Create variable yearOfBirth to calculate year based on age
function createGreeting(name, age) {
  const yearOfBirth = 2020 - age
  return `Hi my name is ${name} and I'm ${age} years old. I was born in ${yearOfBirth}` ;
}


const greeting1 = (createGreeting('Ghorb', 198)) ;
console.log(greeting1);
