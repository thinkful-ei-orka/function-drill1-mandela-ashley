'use strict';

// 7 Force an error for negative ages entered.
function getYearOfBirth(age) {
  return 2020 - age;}

function createGreeting(name, age) {
  if(age < 0) {
    throw new Error('Age can not be negative');
  }
  const yearOfBirth = getYearOfBirth(age);
  return `Hi my name is ${name} and I'm ${age} years old. I was born in ${yearOfBirth}` ;}

try {
  const greeting1 = (createGreeting('Ghorb', -198)) ;
  console.log(greeting1);}
catch(e) {console.error(e.message)}

