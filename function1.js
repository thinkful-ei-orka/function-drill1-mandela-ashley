'use strict';

// 8 Force an error for arguments of incorrect types
function getYearOfBirth(age) {
  return 2020 - age;}

function createGreeting(name, age) {
  if(name === undefined || age === undefined) {
    throw new Error('Arguments not valid. name must be a string. age must be positive number');}

  if (typeof name !== 'string' || typeof age !== 'number') {
    throw new TypeError(`Name must be 'string'. Age must be positive 'number'`)
  }

  if(age < 0) {
    throw new Error('Age can not be negative');}


  const yearOfBirth = getYearOfBirth(age);
  return `Hi my name is ${name} and I'm ${age} years old. I was born in ${yearOfBirth}` ;}

try {
  const greeting1 = (createGreeting('Gharu',198)) ;
  console.log(greeting1);}
catch(e) {console.error(e.message)}

