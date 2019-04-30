const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

function GetUserName() {
    return new Promise(function (resolve, reject) {
        readline.question("What's your name?", (name) => {
            resolve(name);
        })
    });
}

function GetUserAge() {
    return new Promise(function (resolve, reject) {
        readline.question("How old are you?", (age) => {
            resolve(age);
        });
    });
}

(async () => {
    let username = await GetUserName();
    let age = await GetUserAge();
    console.log("Hello " + username + ", you are " + age + "!");
    readline.close();
})();