const readline = require('readline')

const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout,
 })

  let secretNumber;

function checkGuess(num) {
    if (Number(num) > secretNumber) {
        console.log("Too high")
        return false;
    }
    if (Number(num) < secretNumber) {
        console.log("Too low")
        return false;
    }
    if (Number(num) === secretNumber){
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

//askGuess()


function randomInRange(min, max){
    // min = Number > 0
    // max = Number > 0
   const minCeiled = Math.ceil(min)
   const maxFloored = Math.floor(max)
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled)
}

function askRange(){
    rl.question('Enter a max number: ', (max) => {
        max = Number(max)
      if (max){
    rl.question('Enter a min number: ', (min) => {
    console.log("I am thinking of a number between " + min + " and " +  max + "...")
    min = Number(min)
    secretNumber = randomInRange(min, max)
    askGuess(secretNumber)

    //  console.log(randomInRange(min, max))
       })
     }
 })
}
askRange()
