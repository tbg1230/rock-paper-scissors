//create a variable for computer imput
//computer imput should be random
for (let i = 0; i < 5; i++) {

let randomChoice = Math.floor(Math.random()*3);

function getComputerChoice(randomChoice) {
    if (randomChoice == 0) {
        return randomChoice = "ROCK"
    } else if (randomChoice == 1) {
        return randomChoice = "PAPER"
    } else {
        return randomChoice = "SCISSOR"
    }
}

let computerChoice = getComputerChoice(randomChoice)


//create a variable for user writen imput
//user imput should accept upper, lower, and mixed cases

let userChoice = prompt("Choose Rock, Paper, or Scissor: ").toUpperCase();





if (userChoice === computerChoice) {
    console.log("Both Chose " + userChoice + ". It's a TIE")
} else if (userChoice === "ROCK" && computerChoice === "PAPER"){
    console.log("You Chose " + userChoice + " and Computer Chose " + computerChoice + ". YOU LOSE!")
} else if (userChoice === "ROCK" && computerChoice === "SCISSOR") {
    console.log("You Chose " + userChoice + " and Computer Chose " + computerChoice + ". YOU WIN!")
} else if (userChoice === "PAPER" && computerChoice === "SCISSOR"){
    console.log("You Chose " + userChoice + " and Computer Chose " + computerChoice + ". YOU LOSE!")
} else if (userChoice === "PAPER" && computerChoice === "ROCK") {
    console.log("You Chose " + userChoice + " and Computer Chose " + computerChoice + ". YOU WIN!")
} else if (userChoice === "SCISSOR" && computerChoice === "ROCK"){
    console.log("You Chose " + userChoice + " and Computer Chose " + computerChoice + ". YOU LOSE!")
} else if (userChoice === "SCISSOR" && computerChoice === "PAPER"){
    console.log("You Chose " + userChoice + " and Computer Chose " + computerChoice + ". YOU WIN!")
} else {
    userChoice = prompt("INVALID CHOICE! Please Choose Rock, Paper, or Scissor: ").toUpperCase();
}

}
// make sure that spelling is correct. Infinite loop needed until correct
// create function where if same state 'tie'
// if player chooses rock and comp picks scissors 'you win'
// if player chooses rock and com picks paper 'you lose'
// if player chooses paper and comp picks rock 'you win'
// if player chooses paper and com picks scissors 'you lose'
// if player chooses scissors and comp picks paper 'you win'
// if player chooses scissors and com picks rock 'you lose'

//loop for 5 times
