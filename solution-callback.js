const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

function GetUserName(callback) {
    readline.question("What's your name?", (name) => {
        callback(name);
    })
}

function GetUserAge(callback) {
    readline.question("How old are you?", (age) => {
        callback(age);
    })
}

GetUserName(function(username){
    GetUserAge(function(age) {
        console.log("Hello " + username + ", you are " + age + "!");
        readline.close();
    });
});