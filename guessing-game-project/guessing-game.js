const readline = require('readline')

const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout,
 })

let secretNumber = 2;

function checkGuess(num) {
    if (num > secretNumber) {
        console.log("Too high")
        return false;
    }
    if (num < secretNumber) {
        console.log("Too low")
        return false;
    } 
    if (num === secretNumber){
        console.log("Correct!")
        return true;
    }
   
}

function askGuess() {
    rl.question("Enter a guess: ", (answer)  => {
   
    Number(answer)
    if (!checkGuess(answer)) {
        askGuess();
    }
    else {
        console.log("You win!")
        rl.close()
    }

    });
 
}

askGuess()







