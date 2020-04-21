

function getYearOfBirth(age){
     return 2020 - age;
  }

  function createGreeting(name, age) { 
    if (age < 0){
      throw new Error('Age can not be negative');}
    
      if (typeof age !== 'number') {
          throw new TypeError('Age must be a number');}
          
    const yob = getYearOfBirth(age);
    return `Hi, my name is ${name} and I\'m ${age} years old. I was born in ${yob}.`;
}
  


try {
    const greeting1 = createGreeting('Mr. Bojangles', 53);
  console.log(greeting1);
}catch(e) {
    console.error(e.message);
}
