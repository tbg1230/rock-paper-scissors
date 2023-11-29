let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".scoreBoard");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

function getComputerChoice() {
    const choices = ["r","p","s"];
    const ranNumber = Math.floor(Math.random()*3);
    return choices[ranNumber];
}

function convertToWord(letter){
    if (letter === "r") return "ROCK";
    if (letter === "p") return "PAPER";
    return "SCISSORS";
}

function win(user, computer) {
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = computerScore;
    result_div.innerHTML = convertToWord(user) + " beats " + convertToWord(computer) +". YOU WIN!!"
}

function lose(user, computer) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = computerScore;
    result_div.innerHTML = convertToWord(computer) + " beats " + convertToWord(user) +". YOU LOSE!!"
}


function tie(user, computer) {
    result_div.innerHTML = "You both chose " + convertToWord(user) +". IT'S A TIE";
}

function game(userChoice){
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
             break;

        case "rr":
        case "pp":
        case "ss":
            tie(userChoice, computerChoice);
             break;
    }
}

function main(){
    rock_div.addEventListener('click', function() {
        game("r");
    })

    paper_div.addEventListener('click', function() {
        game("p");
    })

    scissors_div.addEventListener('click', function() {
        game("s");
    })
}

main();
