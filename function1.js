
function createGreeting(){ 
    let name = "Mr. Bojangles";
    return("Hello my name is " + name);
}

function getYearOfBirth(){
    let age = 53;
    const yob = 2020 - age;
    return("I was born in" + yob);
  }
  
const greeting1 = createGreeting();
console.log(greeting1);
