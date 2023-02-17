let playerScore = 0;
let computerScore = 0;
let movesLeft = 0
const computerParagraph = document.querySelector(`.paragraph1`);
const playerParagraph = document.querySelector(`.paragraph2`);
const resultParagraph = document.querySelector(`.paragraph3`);
const gameoverParagraph = document.querySelector(`.paragraph4`);
const rock = document.querySelector(`.btn1`);
const paper = document.querySelector(`.btn2`);
const scissor = document.querySelector(`.btn3`);
const playerOptions = [rock,paper,scissor];

playerOptions.forEach( (playerOptions) => {
  playerOptions.addEventListener(`click` , function(){
    
    function getComputerChoice() {
      const pick = Math.floor(Math.random() * 3);
      choices = ["rock", "paper", "scissor"];
      return choices[pick];
    }
    computerSelection = getComputerChoice();
    playerSelection = this.innerText;

    playerParagraph.textContent = `Player : ` + playerSelection;
    computerParagraph.textContent =  `Computer : ` +computerSelection;

    playRound(playerSelection , computerSelection);
    movesLeft++;

    if(movesLeft===10){
      gameOver(playerScore,computerScore);
    }
  })
})

function playRound(playerSelection , computerSelection){
  if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
    resultParagraph.textContent = `Its a Draw!`
  } else if (
    (playerSelection.toLowerCase() === `rock` &&
      computerSelection.toLowerCase() === `paper`) ||
    (playerSelection.toLowerCase() === `paper` &&
      computerSelection.toLowerCase() === `scissor`) ||
    (playerSelection.toLowerCase() === `scissor` &&
      computerSelection.toLowerCase() === `rock`)
  ) {
    resultParagraph.textContent = `You Lose!, ` + computerSelection.toLowerCase() +` beats ` +playerSelection.toLowerCase() +`.`;
    computerScore++;
  } else {
    resultParagraph.textContent = `You Lose!, ` + computerSelection.toLowerCase() +` beats ` +playerSelection.toLowerCase() +`.`;
    playerScore++;
  }
}

function gameOver(){
  if(playerScore>computerScore){
    gameoverParagraph.textContent = `Game Over! You Win!`;
  }
  else {
    gameoverParagraph.textContent = `Game Over! You Lose!`;
  }
}
