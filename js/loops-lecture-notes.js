/***************WhileLoops*****************/

var x = 1;
while (x < 4) {
    console.log(x);
    ++x;
}

/*************Use-Case-WhileLoops*******************/

while(gamerunning) {
    drawCanvas();
}

/************WhileLoops********************/

var x = 10;

while (x < 5){
    console.log(x);
    x--;
}

/****************do-while-loop****************/
var x = 100;

do {
    console.log("this will run");
    x--;
} while(x <= 10);

/****************(Use Case)-do-while-loop****************/

var password;
do {
    password = prompt("please enter a valid password.");
} while(isInvalidPass(password));

/*****Same as one above but in a while-loop****/

var password = prompt("please enter a valid password.");
while (isInvalidPass(password)) {
    password = prompt("please enter a valid password.");
}

/*********************For-Loops*********************/
/**used to perform an action based on a number of iterations.*****/

for (var i = 0; i <= 10; ++1){
    console.log(i);
}

for (var i = 0; i <= 10; i *= 2){
    console.log(i);
}

for (var i = 16;i >= 0; i -= 4){
    console.log(i);
}
        /***nested***/
for (var i = 0;i <= 10; i += 1){
    for(var j = 0; j <= 10; j += 1){
    console.log("")
    }
    console.log(i);
}

/***************break out and continue loops***************************/
/***Needs to be finished***/
var password = "123";

while (true) {
    password = prompt ("please enter a valid password:");
    console.log('You will never see this line.');
}

var y = 0;
while (true) {
    y++;
    if (y === 100) {
        console.log("End of Loop!");
        break;
    }
    if (y % 5 === 0) {
        continue;
    }
    console.log(y);
}
