"use strict";

var input;

    do {
    input = prompt("Please input a number between 1 and 50");
    } while(input > 50 || input < 1 || isNaN(parseFloat(input)));

    +console.log("number to skip is " + input);


/***************-******************/

for(var i = 1; i <= 50; i++) {
    if(i % 2 == 0) {
        continue;
        }
        if(i == input) {
        console.log("Yikes! Skipping the number " + i);
        continue;
        }
        console.log("Here is an odd number " + i);

    }





