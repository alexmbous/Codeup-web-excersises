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
function getDateOfLastCommit(username) {
    let dates = [];

    fetch('https://api.github.com/users/' + username + '/repos?per_page=100', {headers: {'Authorizations': 'token 3e24baca08782a0c80088d64bad390b3b7cc618d'}})
        .then(response => response.json())
        .then(repositories => {
            repositories.map(repo => {
                dates.push(repo.updated_at);
            });
            dates.sort();
            document.querySelector('span').innerText = new Date(dates[dates.length -1]);
        });
}
getDateOfLastCommit("alexmbous");


