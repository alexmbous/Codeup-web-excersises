// ================================= LOOPS BONUSES
// BONUSES 1:
// Write a function to toggle all characters in a string:
//     in a given string, toggle all characters to their opposite case.
// Special characters will not change.
//     Example input: "aBc12#"
// Example output: "AbC12#"
//
function isUpperCase(letter){
    return letter === letter.toUpperCase();
}
function isLowerCase() {
    return letter === letter.toLowerCase();
}

function swapCase(string){
    var output = "";
    for (var i = 0; i < string.length; i++) {
        if(isUpperCase(string[i])) {
            output += string[i].toLowerCase();
        } else {
            output += string[i].toUpperCase();
        }
    }
    return output;
}
console.log(swapCase("Hello, Everybody!! My Name Is Alex.!"));




// BONUS 2:
// Write a function that takes a given string appended with a number at the end.
//     The program will check the length of the string to verify the string is
// equal to the number appended. If the number appended equals the string length, output "Yes".
//     if the number appended does not equal the string length, output "No".
//     Example Input: "geek5"
// Example Output: "Yes"
// Example Input: "codingchallenge25"
// Example Output: "No"

// take the string and break it into two pieces
// one piece is the letters
// another piece is the number
// once we have the number, check if the number is the same as the length.
//

function lengthCheck(input) {
    for (var i = 0; i <= input.length; i++) {
        if (!isNaN(parseFloat(input[i]))) {
            number += input[i];
        }
    }
    if (input.length == number) {
        return "Yes";
    } else {
        return "No";
    }
}


console.log(lengthCheck("Jane5"));  // "yes"
console.log(lengthCheck("bob22"));  // "no"