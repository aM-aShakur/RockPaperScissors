/* eslint-disable no-param-reassign */
/* eslint-disable no-else-return */
/* eslint-disable no-shadow */
/* eslint-disable no-alert */
/* eslint-disable no-unused-vars */
/* eslint-disable prefer-const */
/* eslint-disable no-plusplus */
const options = ['rock', 'paper', 'scissors'];
let computerScore = 0;
let playerScore = 0;

function getComputerChoice() {
  const result = options[Math.floor(Math.random() * options.length)];
  return result;
}




function game() {  

  for (let i = 0; i < 5; i++) {

    let input = prompt('Choose rock, paper or scissor');
    const playerSelection = input.toLowerCase();
    const computerSelection = getComputerChoice();
    const computerWins = `Computer Wins! ${computerSelection} beats ${playerSelection}.`;
    const playerWins = `Player wins! ${playerSelection} beats ${computerSelection}.`;
    const tie = `It's a tie, ${playerSelection} is equal to ${computerSelection}.`;
    
    if (playerSelection !== 'rock' && playerSelection !== 'paper' && playerSelection !== 'scissor') {
      i -= 1;
      console.log('Nice try! Please enter a valid input.');
    }
    if (playerSelection === 'rock' && computerSelection === 'paper' || playerSelection === 'paper' && computerSelection === 'scissor' || playerSelection === 'scissor' && computerSelection=== 'rock') {
            computerScore+=1;
        console.log(computerWins);
    } 
    if (playerSelection === 'paper' && computerSelection === 'rock' || playerSelection === 'scissor' && computerSelection=== 'paper' || playerSelection === 'rock' && computerSelection === 'scissor') {
        playerScore+=1;
        console.log(playerWins);
    } else if (playerSelection === computerSelection) {
          console.log(tie);
          }
  }
  console.log(`Computer:${computerScore} vs Player:${playerScore}`);
}


game();
