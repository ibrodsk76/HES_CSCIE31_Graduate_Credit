const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

function GetUserName() {
    readline.question("What's your name?", (name) => {
        return name;
    })
}

function GetUserAge() {
    readline.question("How old are you?", (age) => {
       return age;
    })
}

var username = GetUserName();
var age = GetUserAge();
console.log("Hello " + username + ", you are " + age + "!");
readline.close();