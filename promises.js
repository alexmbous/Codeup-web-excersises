"use strict";

function wait(number){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            if (Math.random() > 0.1) {
                resolve("");
            } else {
                reject("");
            }
        },number);
    });
}

wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));








