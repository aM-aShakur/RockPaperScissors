
const options: string[] = ['rock', 'paper', 'scissors'];
let computerScore: number = 0;
let playerScore: number = 0;

function getComputerChoice(): string {
  const result = options[Math.floor(Math.random() * options.length)];
  return result;
}


function game() {

  function playRound(playerSelection :string | undefined , computerSelection : string) {

    let input: string | null = prompt('Choose rock, paper or scissors');
    playerSelection = input?.toLowerCase();
    computerSelection = getComputerChoice();
    
    const computerWins = `Computer Wins! ${computerSelection} beats ${playerSelection}.`;
    const playerWins = `Player wins! ${playerSelection} beats ${computerSelection}.`;
    const tie = `It's a tie, ${playerSelection} is equal to ${computerSelection}.`;
    
    if (playerSelection !== 'rock' && playerSelection !== 'paper' && playerSelection !== 'scissors') {
      return ('Nice try! Please enter a valid input.');
    }
    else if ( playerSelection === 'rock' && computerSelection === 'paper' 
              || playerSelection === 'scissors' && computerSelection === 'rock' 
              || playerSelection === 'paper' && computerSelection === 'scissors') {
      return computerWins;
    }    else if (playerSelection === 'rock' && computerSelection === 'scissors' 
                  || playerSelection === 'paper' && computerSelection === 'rock'
                  || playerSelection === 'scissors' && computerSelection === 'paper')
     {
      return playerWins
}
        else if (playerSelection === computerSelection) {
          return tie;
          }
    }


  }
