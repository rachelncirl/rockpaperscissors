/**
 * event parameter is going to contain the rock/paper/scissors choice
 * @param {} event 
 */
function play(event) {

    // Get the image elements from the page
    var rockDiv = document.getElementById("rockImage");
    var paperDiv = document.getElementById("paperImage");
    var scissorsDiv = document.getElementById("scissorsImage");

    var rockPlayer = document.getElementById("playerRock");
    var paperPlayer = document.getElementById("playerPaper");
    var scissorsPlayer = document.getElementById("playerScissors");

    // Hide any existing displayed rock/paper/scissors images
    rockDiv.style.display = "none";
    paperDiv.style.display = "none";
    scissorsDiv.style.display = "none";

    rockPlayer.style.display = "none";
    paperPlayer.style.display = "none";
    scissorsPlayer.style.display = "none";

    // Calculate the choice by the computer
    let randomNumber = Math.floor(Math.random() * 3) + 1;

    var computerChoice;
    if (randomNumber == 1) {
        computerChoice = "Rock";
    } else if (randomNumber == 2) {
        computerChoice = "Paper";
    } else if (randomNumber == 3) {
        computerChoice = "Scissors";
    } else {
        alert("Game gone horribly wrong!!!");
    }

    console.log("Compter choice: " + computerChoice);

    // Show Computer Choide
    if (computerChoice == "Rock") {
        rockDiv.style.display = "block";
    } else if (computerChoice == "Paper") {
        paperDiv.style.display = "block";
    } else {
        scissorsDiv.style.display = "block";
    }

    console.log("Player Choice: " + event);

    // Show player choice
    if (event == "Rock") {
        rockPlayer.style.display = "block";
    } else if (event == "Paper") {
        paperPlayer.style.display = "block";
    } else {
        scissorsPlayer.style.display = "block";
    }

    // Calculate the result of the game
    var labelDiv = document.getElementById("result");
    labelDiv.style.display = "block";

    if (computerChoice == event) {
        document.getElementById("resultLabel").textContent = "Draw";
    } else {
        if (computerChoice == "Rock") {
            if (event == "Paper") {
                document.getElementById("resultLabel").textContent = "You Win";
            } else {
                document.getElementById("resultLabel").textContent = "You Lose";
            }
        } else if (computerChoice == "Paper") {
            if (event == "Scissors") {
                document.getElementById("resultLabel").textContent = "You Win";
            } else {
                document.getElementById("resultLabel").textContent = "You Lose";
            }
        } else {
            if (event == "Rock") {
                document.getElementById("resultLabel").textContent = "You Win";
            } else {
                document.getElementById("resultLabel").textContent = "You Lose";
            }
        }
    }
}