"use strict";
// this is used to protect variables from the Global scope *//

function countWords(sentence) {
    const words = sentence.split(' '); // transform a sentence into an array of words
    const wordCountObject = words.reduce((wordCounts, word) => {
        if (typeof wordCounts[word] === 'undefined') {
            // if the word is not yet present in our object, set it's value to 1
            wordCounts[word] = 1;
        } else {
            // otherwise increment the existing count
            wordCounts[word] += 1;
        }
        return wordCounts;
    }, {}); // start with an empty object
    return wordCountObject;
}








    // INSERT JAVASCRIPT CODE SAMPLE HERE
    // INSERT JAVASCRIPT CODE SAMPLE HERE
    // INSERT JAVASCRIPT CODE SAMPLE HERE
    // INSERT JAVASCRIPT CODE SAMPLE HERE
    // INSERT JAVASCRIPT CODE SAMPLE HERE
    // INSERT JAVASCRIPT CODE SAMPLE HERE
    // INSERT JAVASCRIPT CODE SAMPLE HERE
    // INSERT JAVASCRIPT CODE SAMPLE HERE
    // INSERT JAVASCRIPT CODE SAMPLE HERE
    // INSERT JAVASCRIPT CODE SAMPLE HERE
    // INSERT JAVASCRIPT CODE SAMPLE HERE
    // INSERT JAVASCRIPT CODE SAMPLE HERE
    // INSERT JAVASCRIPT CODE SAMPLE HERE
    // INSERT JAVASCRIPT CODE SAMPLE HERE
    // INSERT JAVASCRIPT CODE SAMPLE HERE
    // INSERT JAVASCRIPT CODE SAMPLE HERE



