// Function Drills 2
'use strict';

function jediName(firstName, lastName) {
    return lastName.slice(0,3) + firstName.slice(0,2);
}

const myJediName = (jediName('Mandela','Jones'));
console.log(myJediName);