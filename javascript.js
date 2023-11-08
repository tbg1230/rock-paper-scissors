//create a variable for computer imput
//computer imput should be random
let randomChoice = Math.floor(Math.random()*3);

function getComputerChoice(randomChoice) {
    if (randomChoice == 0) {
        return randomChoice = "Rock"
    } else if (randomChoice == 1) {
        return randomChoice = "Paper"
    } else {
        return randomChoice = "Scissors"
    }
}

console.log(getComputerChoice(randomChoice));
//create a variable for user writen imput
//user imput should accept upper, lower, and mixed cases
// create function where if same state 'tie'
// if player chooses rock and comp picks scissors 'you win'
// if player chooses rock and com picks paper 'you lose'
// if player chooses paper and comp picks rock 'you win'
// if player chooses paper and com picks scissors 'you lose'
// if player chooses scissors and comp picks paper 'you win'
// if player chooses scissors and com picks rock 'you lose'
//loop for 5 times
