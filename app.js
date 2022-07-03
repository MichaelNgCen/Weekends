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
// function game(userChoice){
//     console.log("Game function called");
// }

function win () {
    userScore ++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
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
            draw();
            break;
        case "grassfire":
        case "firewater":
        case "watergrass":
            lose();
            break;
        case "firegrass":
        case "grasswater":
        case "waterfire":
            win();
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


