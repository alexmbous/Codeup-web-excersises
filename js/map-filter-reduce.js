const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
    },
];

//~~~~~~~~~~~~~~~~~~~~~~~~~.Filter 3 languages or more.~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

const usersWith3Languages = users.filter(user => user.languages.length >= 3);

console.log(usersWith3Languages);

//~~~~~~~~.Map to create an array of strings with users email address~~~~~~~~~~~~~~~//

let usersEmailsArray = users.map(user => user.email);
console.log(usersEmailsArray);


//~~.Reduce into an object keys are ids and values are objects ~~~~~~~~~~~~~~~//

let usersObjectKeys = users.reduce((array, value) => {

    return  user = user.id = value;
});
console.log(usersObjectKeys);



//
// //~~~~~~~~~~~~~~~~~~~~~~~~~map & filter~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
//
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//
// const evens = numbers.filter(n => n % 2 === 0);
// console.log(evens); // [2, 4, 6, 8, 10]
//
// const incremented = numbers.map(n => n + 1);
// console.log(incremented); // [2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
//
// //~~~~~~~~~~~~~~~~~~~~~~~~Reduce~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
//
// const numbers = [1, 2, 3, 4, 5];
//
// const sum = numbers.reduce((accumulation, currentNumber) => {
//     return accumulation + currentNumber;
// }, 0);
//
//
//
// const salesPeople = [
//     {name: 'Jim Halpert', sales: 100},
//     {name: 'Dwight Schrute', sales: 50},
//     {name: 'Andy Bernard', sales: 150},
// ];
//
// const totalSales = salesPeople.reduce((total, person) => {
//     return total + person.sales;
// }, 0);
////~~~~~~~~~~~~~~~~~~~~~~~~Reduce + functions~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
//
//
// function countWords(sentence) {
//     const words = sentence.split(' '); // transform a sentence into an array of words
//     const wordCountObject = words.reduce((wordCounts, word) => {
//         if (typeof wordCounts[word] === 'undefined') {
//             // if the word is not yet present in our object, set it's value to 1
//             wordCounts[word] = 1;
//         } else {
//             // otherwise increment the existing count
//             wordCounts[word] += 1;
//         }
//         return wordCounts;
//     }, {}); // start with an empty object
//     return wordCountObject;
// }
//
// countWords('Mary had a little lamb little lamb little lamb');
// // {Mary: 1, had: 1, a: 1, little: 3, lamb: 3}
