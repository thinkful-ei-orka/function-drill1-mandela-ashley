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
beyond(0);}
catch (e) {console.error(e.message);}

// Cracking the code

// function decode(word) {
//     const decoded = [];

//     word.forEach(tha, => 
//         console.log(tha);
//         // if (letter[index-1] === '' || letter[index-1] === undefined) {
//         //     if (letter[index] === a){}

//         //     if (letter[index] === b){}

//         //     if (letter[index] === c){}

//         //     if (letter[index] === d){}

//         //     else{decoded.push(' ')}
  
//         ); 
    
//     return decoded.join('');}


// const encodedMessage = 'craft block argon meter bells brown croon droop'
// const decodedMessage = decode(encodedMessage);
// console.log(decodedMessage)


// How many days in a month


// Rock, Paper, Scissors game with input of 1-3 as rock paper scissors

const randomNo = Math.floor(Math.random() *3) +1;

function roPaSci (oneToThree) {
    const such = randomNo ;
    const winner = 'winner here'
    const loser = 'loser here'
    console.log(oneToThree, such);
    switch (oneToThree) {
        case 1:
            if (such === 3){
                console.log(winner);};
            if (such === 2){
                console.log(loser);};
            break;
        case 2:
            if(such === 1){
                console.log(winner);};
            if(such === 3){
                console.log(loser);};
            break;
        case 3: 
            if(such === 2) {
                console.log(winner);};
            if (such === 1){
                console.log(loser);};
            break;

    default:
        throw new Error('Enter 1 for Rock, 2 for Paper, 3 for Scissors');
}};

roPaSci(1);