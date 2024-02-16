
const options: string[] = ['rock', 'paper', 'scissors'];
let computerScore: number = 0;
let playerScore: number = 0;

function getComputerChoice(): string {
  const result = options[Math.floor(Math.random() * options.length)];
  return result;
}


const result: any = document.getElementById('scoreText');

function playRound(playerSelection: string, computerSelection: string) {
  // Get the computer's choice
  computerSelection = getComputerChoice();
  
  if (
    (playerSelection === 'rock' && computerSelection === 'paper') ||
    (playerSelection === 'scissors' && computerSelection === 'rock') ||
    (playerSelection === 'paper' && computerSelection === 'scissors')
  ) {
    // Computer wins
    result.textContent = "Computer wins! " + computerSelection + " beats " + playerSelection + ".";
    computerScore++;
  } else if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    // Player wins
    result.textContent = "Player wins! " + playerSelection + " beats " + computerSelection + ".";
    playerScore++;
  } else {
    // It's a tie
    result.textContent = "It's a tie.";
  }

  // Update the displayed scores
  const playerScoreNumber: any = document.getElementById('playerScoreNumber');
  playerScoreNumber.textContent = playerScore.toString();

  const computerScoreNumber: any = document.getElementById('computerScoreNumber');
  computerScoreNumber.textContent = computerScore.toString();
}