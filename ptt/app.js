let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const fire_div = document.getElementById("fire");
const water_div = document.getElementById("water");
const grass_div = document.getElementById("grass");

function getComputerChoice() {
    const choices = ['fire"', 'water', 'grass'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}
function upcase(str) {
    if (str == "fire") return "Fire";
    if (str == "water") return "Water";
    if (str == "grass") return "Grass";
}
function win (user, computer) {
    userScore ++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = `${upcase(user)} beats ${upcase(computer)}. You win!`;
}

function lose(){
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    userScore_span.innerHTML = userScore;
}

function draw() {
    result_div.innerHTML = "Draw!";
}

function game(userChoice) {
    // console.log("getComputerChoice function called");
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "firefire":
        case "waterwater":
        case "grassgrass":
            draw(userChoice, computerChoice);
            break;
        case "grassfire":
        case "firewater":
        case "watergrass":
            lose(userChoice, computerChoice);
            break;
        case "firegrass":
        case "grasswater":
        case "waterfire":
            win(userChoice, computerChoice);
            break;
    }
}

function main() {
    // console.log("Main function called");
    fire_div.addEventListener('click', function() {
        game("fire");
    })
    water_div.addEventListener('click', function() {
        game("water");
    })
    grass_div.addEventListener('click', function() {
        game("grass");
    })
}

main ();


