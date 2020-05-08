// Function Drills 2
'use strict';

// Jedi name
function jediName(firstName, lastName) {
    return lastName.slice(0,3) + firstName.slice(0,2);}

const myJediName = (jediName('Mandela','Jones'));
console.log(myJediName);

// To infinity...

function beyond(num) {
    if (typeof num !== 'number') {
        throw new TypeError('Valid number required');}

    if (num === 0) {
        console.log('Staying home');}
        
    if (Number.isFinite(num) === true && num < 0 || num < 0) {
        console.log('To negative infinity...');}

    if (Number.isFinite(num) === true && num > 0) {
        console.log('To infinity...');}

    if (Number.isFinite(num) !== true) {
        console.log('And beyond...');}
}

try{
beyond('zero');}
catch (e) {console.error(e.message);}

//