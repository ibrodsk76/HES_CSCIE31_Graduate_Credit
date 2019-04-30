const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

function GetUserName() {
    readline.question("What's your name?", (name) => {
        GetUserAge(name);
    })
}

function GetUserAge(username) {
    readline.question("How old are you?", (age) => {
        console.log("Hello " + username + ",  you are " + age + "!");
        readline.close();
    })
}

GetUserName();