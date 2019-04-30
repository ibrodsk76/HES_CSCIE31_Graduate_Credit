const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

function GetUserName() {
    return new Promise(function (resolve, reject) {
        readline.question(`What's your name?`, (name) => {
            resolve(name);
        });
    });
}

function GetUserAge(name) {
    return new Promise(function (resolve, reject) {
        readline.question("How old are you?", (age) => {
            resolve([name, age]);
        });
    });
}

GetUserName()
    .then((username) => {
        return GetUserAge(username);
    })
    .then((values) => {
        console.log("Hello " + values[0] + ", you are " + values[1] + "!");
            readline.close();
    });