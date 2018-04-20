//
//
// // Make a function named sayHello(name) that returns "Hi " + name.

function sayHello(name) {
    var username = prompt ("Whats your name?");
    return console.log ("Hi " + username);
}
sayHello()

// //     Write a function named capitalize(string) that takes a string of any capitalization and uppercases the first character and lowercases the rest of the characters of a string.
function capitalize(string) {
    var firstLetter = string.substring(0,1).toUpperCase();
    var otherLetters = string.substring(1).toLowerCase();
return firstLetter + otherLetters;
}


//     Write a function named upperCase(string)
function upperCase(string) {
    return upperCase = string.toUpperCase();
}
//
//
//
// // Make a function named identity(input) that returns the input exactly as provided.
//
function identity(input) {
    return input;
}
console.log ("this is for identity");


// //     Make a function named isOdd(number)
function isOdd(number) {
    return number % 2 === 1;
}
console.log = isOdd();


// Make a function named isEven(number)
function isEven(number) {
    return number % 2 === 0;
}
console.log = isEven();

// Make a function named isPositive(number)

function isPositive(number){
    return number >= 0;
}
console.log = isPositive();

// Make a function named isNegative(number)

function isNegative(number){
    return number <= 0;
}
console.log = isNegative();


// Make a function named isBoolean(input)
function isBoolean(input){
    return typeof(input) == typeof(true);
}
console.log = isBoolean(true);


// Make a function named isTrue(boolean)

function isTrue(boolean){
    return boolean === true;
}
console.log = isTrue();

// Make a function named isFalse(boolean)
function isFalse(boolean){
    return boolean === false;
}
console.log = isFalse();

// Make a function named isTruthy(input)

function isTruthy(input){
    return input == true;
}
console.log = isTruthy();

// Make a function named isFalsy(input)

function isFalsy(input){
    return input == false;
}
console.log = isFalsy();

// Make a function named isVowel(letter)
function isVowel(letter){
    return letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u" || letter ===  "y";
}
console.log = isVowel();

// Make a function named hasVowels(string) that uses isVowel to check if a string has any vowels

function hasVowel(string) {
//     return string.hasVowel() === true;
// }
// console.log = hasVowel()
//

for(var i = 0; i < string.length; i++){
    if(isVowel(string[i]))
        return true;
}
return false;
}
console.log = ("hasVowels:" + hasVowel("Alex"));

// Make a function named isConsonant(letter)
function isConsonant(letter){
        for(var i = 0; i < string.length; i++){
            if(isVowel(string[i]))
                return true;
        }
        return false;
    }
    console.log = ("hasVowels:" + hasVowel("Alex"));


// Make a function named hasConsonants(string)

// Make a function named isCapital(letter)
function isCapital() {
    
}

// Make a function named hasCapitalLetters(string) that returns if a string has any capitals.
//     Make a function named isLowerCase(letter)
// Make a function named hasLowerCase(string) that returns if a string has any lower cased
// Make a function named isSpace(letter) that returns if a character is a space character
// Make a function named hasSpaces(string) that returns if a string has any space characters
// Make a function named isZero(number)
function isZero(number) {
    if (number == 0) {
        return true;
    }else{
        return false;
    }
}
// Make a function named increment(number) that returns a number plus one
function increment(number){
    return number + 1;
}
// Make a function named decrement(number) that returns a number minus one
function decrement(number){
    return number - 1;
}
// Make a function named isFive(input)
function isFive(input) {
    if (input == 5)
        return true;
    else {
        return false;
    }
}
// Make a function named addFive(input) that adds five to some input.
function addFive(input){
    return input + 5;
}
//     Make a function named isMultipleOfFive(input)
function isMultipleOfFive(input){
    if(input % 5 == 0) {
        return true;
    } else {
        return false;
    }
}
// Make a function named isThree(input)
function isThree(input){
    if (input == 3){
        return true;
    } else {
        return false;
    }
}
// Make a function named isMultipleOfThree(input)
// Make a function named isMultipleOfThreeAndFive(input)
// Write a function named lowerCase(string)
// Write a function named capitalizeEachWord(string) uses capitalize to return a string where each new word (separated by a space) is capitalized.
//     Write a function named add(a, b) that returns the sum of a and b
// Write a function named subtract(a, b) that returns a minus b
// Write a function named multiply(a, b) that returns the product of a times b
// Write a function named divide(a, b) that returns a divided by b
// Write a function named remainder(a, b) that returns the remainder after dividing a by b
// Make a function named isBlank(input) that determines if a given input is spaces, newline characters, or tabs.
//     Make a function named isNumeric(input) returns true/false if the input is a number or numeric string
// Make a function named trim(string) that removes empty spaces before and after the input.


// Write a function that returns a passed string with letters in alphabetical order;


function alphabet_order(str)
{
    return str.split('').sort().join('');
}




// Wite a function that accepts a string as a parameter and counts the number of vowels within the string. Remember , that y can be both a vowel and consonant; do NOT count y as a vowel.



function countVowel(str1)
{
    var vowel_list = 'aeiouAEIOU';
    var vcount = 0;

    for(var x = 0; x < str1.length ; x++)
    {
        if (vowel_list.indexOf(str1[x]) !== -1)
        {
            vcount += 1;
        }

    }
    return vcount;
}
// console.log(countVowel("The quick brown fox"));


//Write a function to extract unique characters from a string, in order of their apperance within the string. Do not worry about capital vs lowercase letters.


function removeSpecialStuff(str) {
    return str.replace(/[^a-zA-Z ]/g, "");
}
console.log(removeSpecialStuff("h34958h*(0934t)*"));



// Write a program to convert temperatures from fahrenheit to celsius and then Celsius to Kelvin.
// just multiply the temperature by 1.8 and then add 32 to the product. If you want to convert temperature from Fahrenheit to Celsius, subtract 32 from the number and then divide the difference by 1.8.
//You can convert between Celsius and Kelvin like this: Kelvin = Celsius + 273.15. Often, the value of 273 is used instead of 273.15. Check with your teacher on this point. All examples to follow will use 273.

function convertTemp(f){
    var c = ((f - 32) * 5/9);
    var k = c + 273.15;
    return k;
}
console.log(convertTemp("78"));


// Write a function that converts between camelCase, Snake_case, and kebab-case. You must be able to handle all three case types. All input you are given will be valid.


function snakeToCamel(s){
    return s.replace(/(\_\w)/g, function(m){return m[1].toUpperCase();});
}

function camelToSnake(s){
    return s.replace(/(\A-Z\w)/g, function(m){return m[1].toLowerCase().join("_");});
}
