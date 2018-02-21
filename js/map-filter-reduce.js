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

const userObject = users.reduce((accum, user) => {
    accum[user.id] = user;
    return accum;
}, {});
console.log(userObject);


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



const fruits = ["cantaloupe", "orange", "date", "elderberry", "ugli fruit", "pineapple"];
const customers = [
    {
        name: "Fred",
        age: 58,
        occupation: "Police Officer",
        noOfPurchases: 4
    },
    {
        name: "Samantha",
        age: 54,
        occupation: "Teacher",
        noOfPurchases: 18
    },
    {
        name: "Charles",
        age: 38,
        occupation: "Librarian",
        noOfPurchases: 9
    }
];
// PROBLEM 1 - create an array of the first letters of each fruit

const firstLetterArray = fruits.map(fruit => fruit[0]);
console.log(firstLetterArray);


// PROBLEM 2 - create array of user objects based on the customers array
// of objects (each user object should just have name and age properties)


const customersObjects = customers.map(customer => "Name: " + customer.name + ", Age:" + customer.age);

console.log(customersObjects);


// PROBLEM 3 - create an array of civil servant customers (teachers and police officers)
// containing the same properties as the objects on the customers objects

const civilServants = customers.filter(civServ => {
    return civServ.occupation == "Teacher" || civServ.occupation == "Police Officer";
});
console.log(civilServants);


// PROBLEM 4 - determine the average age of customers

//            PROBLEM 1 HINT - use .map()
//            PROBLEM 2 HINT - use .map()
//            PROBLEM 3 HINT - use .filter()
//            PROBLEM 4 HINT - use .reduce()
