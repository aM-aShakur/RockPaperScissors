var options = ['rock', 'paper', 'scissors'];
var computerScore = 0;
var playerScore = 0;
function getComputerChoice() {
    var result = options[Math.floor(Math.random() * options.length)];
    return result;
}
var result = document.getElementById('scoreText');
function playRound(playerSelection, computerSelection) {
    // Get the computer's choice
    computerSelection = getComputerChoice();
    if ((playerSelection === 'rock' && computerSelection === 'paper') ||
        (playerSelection === 'scissors' && computerSelection === 'rock') ||
        (playerSelection === 'paper' && computerSelection === 'scissors')) {
        // Computer wins
        if (result) {
            result.textContent = "Computer wins! " + computerSelection + " beats " + playerSelection + ".";
        }
        computerScore++;
    }
    else if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')) {
        // Player wins
        if (result) {
            result.textContent = "Player wins! " + playerSelection + " beats " + computerSelection + ".";
        }
        playerScore++;
    }
    else {
        // It's a tie
        if (result) {
            result.textContent = "It's a tie.";
        }
    }
    // Update the displayed scores
    var playerScoreNumber = document.getElementById('playerScoreNumber');
    if (playerScoreNumber) {
        playerScoreNumber.textContent = computerScore.toString();
        var computerScoreNumber = document.getElementById('computerScoreNumber');
        if (computerScoreNumber) {
            computerScoreNumber.textContent = computerScore.toString();
        }
    }
}
