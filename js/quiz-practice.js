/**
 * For the quiz:
 * =============
 * operators
 * boolean expressions
 * == vs ===
 * ternary
 * **loops**
 * function scope -- local vs global
 * arrays
 * objects
 * window.location
 * obtain references to elements
 */

// setInterval
// setTimeout

// functions
// how to turn a word problem into code
// * test your early, test your code often
//     * console.logs are great... but shouldn't be in the end product

// write a function that accepts a number, "counts" (console.log) up to that
// number
// example
// countTo(5)
// 1
// 2
// 3
// 4
// 5

// General Function Advice
// 1. Create a function
// 2. define an input to that function
// 3. figure out return values

// > accepts a number
function countTo(numberToCountTo) {
    // // make sure the pieces of the function definition are correct before
    // // proceeding with the login in the function
    // // debugging console.logs
    // // remove these when were done with the function
    // console.log('countTo was called!')
    // console.log('numberToCountTo: ' + numberToCountTo)

    // TODO: write some logic that does cool stuff
    // count up to a number -- console log over and over again until i'm "finished"
    // "finished" means we've counted to the max number

    // alert the user and exit early if a "invalid" input is passed in
    // for our problem, invalid means < 2
    if (numberToCountTo < 2) {
        // stop the function and show an error message
        alert('[ERROR]: the number you passed, ' + numberToCountTo + ' is less than two')
        return;
    }

    // start at one
    var i = 1;
    // until i've hit numberToCountTo, keep going -- loop
    // while loop -- keep repeating until a condition is met
    while (i <= numberToCountTo) {
        // inside the loop
        // console.log -- logs our current number
        console.log(i);
        // increment our number
        i += 1; // same as `currentNumber = currentNumber + 1`
        // the line above is *also* the same as `curentNumber++`
    }

    // rewriting a while as a for, under these conditions:
    // - some initial state
    // - repeat until a condition is met
    // - we do the same operation everytime inside of the loop
    //     - this usually modifies the variable defined in the initial state
    var i = 1; // initial condition
    while (i <= numberToCountTo) { // condition to keep repeating the loop
      i += 1; // the same operation inside of the loop
    }

    // the above while loop rewritten as a for looks like:
    for (var i = 1; i <= numberToCountTo; i += 1) {
        console.log(i);
    }document.ele

}

countTo(20)

// in general wrt for loops and arrays
// - its much easier to use a forEach loop