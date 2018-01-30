

function showMultiplicationTable(num) {
    for (var multiplyBy = 1; multiplyBy <= 10; multiplyBy++) {
        console.log((num) + " x " + (multiplyBy) + " = " + (num * multiplyBy));
    }
}
 showMultiplicationTable(7);

/***************-******************/

var num;
for (var i = 1; i <= 10; i++) {
    num = (Math.floor(Math.random() * 180) + 20);
    if (num % 2 === 0) {
        console.log(num + " is even.");
    } else {
        console.log(num + " is odd.");
    }
}


/***************-******************/

for (var i = 1; i <= 9; i++){
     i = i.toString();
     console.log(i.repeat(i));
     }

/***************-******************/

for(var i = 100; i >= 5; i -= 5) {
    console.log(i);
}