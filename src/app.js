var options = ['rock', 'paper', 'scissors'];
var computerScore = 0;
var playerScore = 0;
function getComputerChoice() {
    var result = options[Math.floor(Math.random() * options.length)];
    return result;
}
function game() {
    function playRound(playerSelection, computerSelection) {
        var input = prompt('Choose rock, paper or scissors');
        playerSelection = input === null || input === void 0 ? void 0 : input.toLowerCase();
        computerSelection = getComputerChoice();
        var computerWins = "Computer Wins! ".concat(computerSelection, " beats ").concat(playerSelection, ".");
        var playerWins = "Player wins! ".concat(playerSelection, " beats ").concat(computerSelection, ".");
        var tie = "It's a tie, ".concat(playerSelection, " is equal to ").concat(computerSelection, ".");
        if (playerSelection !== 'rock' && playerSelection !== 'paper' && playerSelection !== 'scissors') {
            return ('Nice try! Please enter a valid input.');
        }
        else if (playerSelection === 'rock' && computerSelection === 'paper'
            || playerSelection === 'scissors' && computerSelection === 'rock'
            || playerSelection === 'paper' && computerSelection === 'scissors') {
            return computerWins;
        }
        else if (playerSelection === 'rock' && computerSelection === 'scissors'
            || playerSelection === 'paper' && computerSelection === 'rock'
            || playerSelection === 'scissors' && computerSelection === 'paper') {
            return playerWins;
        }
        else if (playerSelection === computerSelection) {
            return tie;
        }
    }
}
