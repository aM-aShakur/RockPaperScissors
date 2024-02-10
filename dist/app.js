var options = ['rock', 'paper', 'scissors'];
var computerScore = 0;
var playerScore = 0;
function getComputerChoice() {
    var result = options[Math.floor(Math.random() * options.length)];
    return result;
}
function game() {
    for (var i = 0; i < 5; i++) {
        var input = prompt('Choose rock, paper or scissor');
        var playerSelection = input === null || input === void 0 ? void 0 : input.toLowerCase();
        var computerSelection = getComputerChoice();
        var computerWins = "Computer Wins! ".concat(computerSelection, " beats ").concat(playerSelection, ".");
        var playerWins = "Player wins! ".concat(playerSelection, " beats ").concat(computerSelection, ".");
        var tie = "It's a tie, ".concat(playerSelection, " is equal to ").concat(computerSelection, ".");
        if (playerSelection !== 'rock' && playerSelection !== 'paper' && playerSelection !== 'scissor') {
            i -= 1;
            console.log('Nice try! Please enter a valid input.');
        }
        if (playerSelection === 'rock' && computerSelection === 'paper' || playerSelection === 'paper' && computerSelection === 'scissor' || playerSelection === 'scissor' && computerSelection === 'rock') {
            computerScore += 1;
            console.log(computerWins);
        }
        if (playerSelection === 'paper' && computerSelection === 'rock' || playerSelection === 'scissor' && computerSelection === 'paper' || playerSelection === 'rock' && computerSelection === 'scissor') {
            playerScore += 1;
            console.log(playerWins);
        }
        else if (playerSelection === computerSelection) {
            console.log(tie);
        }
    }
    console.log("Computer:".concat(computerScore, " vs Player:").concat(playerScore));
}
game();
