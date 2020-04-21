function createGreeting(name, age){ 
    let age = 53;
    let name = "Mr. Bojangles"
    const yearOfBirth = 2020 - age;
    return("Hello my name is " + name + ", I was born in " + yearOfBirth);
}
const greeting1 = createGreeting();
console.log(greeting1);
