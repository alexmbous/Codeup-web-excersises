"use strict";

function wait(number){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
           resolve("Your promise resolve after "+ number + " milliseconds. ");
        },number);
    });
}

wait(1000).then((data) => console.log(data));
wait(3000).then((data) => console.log(data));

/*

~~~~~~~~~~~Git Hub API key code~~~~~~~~

c1cf4bb3294774d6d22696e69335131e111d6e1c

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

*/
const getDateOfLastCommit = (username) => {
    return fetch(`https://api.github.com/users/${username}/events`, {headers: {'Authorization': 'token c1cf4bb3294774d6d22696e69335131e111d6e1c'}})
        .then((response) => response.json())
        .then(data => {
            let lastCommit = data[0].created_at.substring(0, 10);
            console.log(`${username}'s last commit was on: ${lastCommit}`)
        })
        .catch(() => console.error('BAD REQUEST!'));

};
getDateOfLastCommit("alexmbous");


