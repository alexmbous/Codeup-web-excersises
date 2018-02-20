/*
 * Complete the TODO items below
 */
const users = [
  {
    name: 'zach',
    email: 'zach@codeup.com',
    languages: ['javascript', 'bash']
  },
  {
    name: 'ryan',
    email: 'ryan@codeup.com',
    languages: ['clojure', 'javascript']
  },
  {
    name: 'luis',
    email: 'luis@codeup.com',
    languages: ['java', 'scala', 'php']
  },
  {
    name: 'fernando',
    email: 'fernando@codeup.com',
    languages: ['java', 'php', 'sql']
  },
  {
    name: 'justin',
    email: 'justin@codeup.com',
    languages: ['html', 'css', 'javascript', 'php']
  }
];

// TODO: fill in your name and email and add some programming languages you know
// to the languages array
const me = [
    {
  name: 'Alex',
  email: 'alexmbous@gmail.com',
  languages: ['html', 'css', 'javascript']
}
];
// TODO: replace the `var` keyword with `const`, then try to reassign a variable
// declared as `const`
const name = 'Alex';
const email = 'alexmbous@gmail.com';
const languages = ['html', 'css', 'javascript'];
// var name = "joe";


// TODO: rewrite the object literal using object property shorthand
// users.push({
//   name: name,
//   email: email,
//   languages: languages
// });

users.push({
    name,
    email,
    languages
});

// TODO: replace `var` with `let` in the following variable declarations

// TODO: rewrite the following using arrow functions
 let emails = users.forEach = (user) =>  emails.push(user.email);

let names = users.forEach = (user) => names.push(user.name);


// TODO: replace `var` with `let` in the following declaration
let developers = [];
users.forEach(function({name, email, languages}) {

  // TODO: rewrite the code below to use object destructuring assignment
  //       note that you can also use destructuring assignment in the function
  //       parameter definition

  const [name, email, languages] = user ;

  // TODO: rewrite the assignment below to use template strings
  developers.push(
      `${name}'s email is ${email}
       ${name}'s knows ${languages.join}`)
});

// TODO: Use `let` for the following variable
let list = '<ul>';

// TODO: rewrite the following loop to use a for..of loop

for (let developer of developers){


// developers.forEach(function (developer) {

  // TODO: rewrite the assignment below to use template strings
    list += `<li>${developer}</li>`;
}
list += `</ul>`;



















