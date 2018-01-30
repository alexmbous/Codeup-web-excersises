"use strict";

for (var i = 2; i <= 65536; i *= 2) {
    console.log(i);
}

            /*** or ***/

var x = 2;
while (x <= 65536) {
    console.log(x);
    x *= 2;
}

/***************-******************/

var allCones = Math.floor(Math.random() * 50) + 50;

do {
    var conesSold = (Math.floor(Math.random() * 5) + 1);
    if (allCones < conesSold){
        console.log("Cannot sell you " + conesSold + " cones. I only have " + allCones);
        allCones -= allCones;
        console.log(allCones);
        console.log("Yay! i sold them all!");
    } else{
        console.log (conesSold + " cones sold.");
        allCones -= conesSold;
    }
} while(allCones > 0);

/***************-******************/


