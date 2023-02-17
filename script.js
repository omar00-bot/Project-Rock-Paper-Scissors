const startBtn =document.querySelector(`.start`);
const resetBtn =document.querySelector(`.reset-btn`);
startBtn.addEventListener(`click`, game);

function game(){
let playerScore = 0;
let computerScore = 0;
let movesLeft = 0
startBtn.remove();
const paragraphContainer = document.querySelector(`.result-paragraph`);
const newParagraph = document.createElement(`p`);
newParagraph.classList.add(`result-paragraph-text`);
newParagraph.textContent = `Choose your choice below!`
paragraphContainer.appendChild(newParagraph);
const resultParagraph = document.querySelector(`.result`);
resultParagraph.textContent = `Goodluck!`;
const gameoverParagraph = document.querySelector(`.result-paragraph-text`);
const rock = document.querySelector(`#rock`);
const paper = document.querySelector(`#paper`);
const scissor = document.querySelector(`#scissor`);
const playerOptions = [rock,paper,scissor];


playerOptions.forEach( (playerOptions) => {
  playerOptions.addEventListener(`click` , function(){

    function getComputerChoice() {
      const pick = Math.floor(Math.random() * 3);
      choices = ["rock", "paper", "scissor"];
      return choices[pick];
    }
    computerSelection = getComputerChoice();
    playerSelection = this.id;

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
    gameoverParagraph.textContent = `No winner in this round`
  } else if (
    (playerSelection.toLowerCase() === `rock` &&
      computerSelection.toLowerCase() === `paper`) ||
    (playerSelection.toLowerCase() === `paper` &&
      computerSelection.toLowerCase() === `scissor`) ||
    (playerSelection.toLowerCase() === `scissor` &&
      computerSelection.toLowerCase() === `rock`)
  ) {
    resultParagraph.textContent = `You Lose!, `;
    gameoverParagraph.textContent = computerSelection.toLowerCase() +` beats ` +playerSelection.toLowerCase() +`.`;
    computerScore++;
  } else {
    resultParagraph.textContent = `You Lose!, `;
    gameoverParagraph.textContent = computerSelection.toLowerCase() +` beats ` +playerSelection.toLowerCase() +`.`;
    playerScore++;
  }
}

function gameOver(){
  if(playerScore>computerScore){
    gameoverParagraph.textContent = `Game Over! You Win!`;
    reset();
  }
  else {
    gameoverParagraph.textContent = `Game Over! You Lose!`;
    reset();
  }
}
 function reset(){
  const resetContainer = document.querySelector(`.reset-container`);
  const createResetBtn = document.createElement(`button`);
  createResetBtn.classList.add(`reset-btn`)
  createResetBtn.textContent=`Reset`;
  resetContainer.appendChild(createResetBtn);
  resetBtn.addEventListener(`click`,() => {
    resetBtn.remove();

  })
 }
}