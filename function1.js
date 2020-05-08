'use strict';

// 6 Create function for yearOfBirth to calculate year based on age param
function getYearOfBirth(age) {
  return 2020 - age;
}

function createGreeting(name, age) {
  const yearOfBirth = getYearOfBirth(age);
  return `Hi my name is ${name} and I'm ${age} years old. I was born in ${yearOfBirth}` ;
}


const greeting1 = (createGreeting('Ghorb', 198)) ;
console.log(greeting1);
