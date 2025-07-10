const readline = require("readline");

const message = readline.createInterface({
    output: process.stdout,
    input: process.stdin
});

message.question("Welcome to ALX, what is your name?\n", (input) => {
    process.stdout.write(`Your input is ${input}`);
    message.close("This important software is now closing");
});
