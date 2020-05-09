'use strict';


// Functions as Arguments
function repeat (fn,n) {
    for (let i = 0; i < n; i++) {
        fn; }}

const hello = function () {return console.log('hello world');}

// function goodbye () {console.log('goodbye world');}
const goodby = 'goodbye world'

// hello();
repeat(hello(), 5);