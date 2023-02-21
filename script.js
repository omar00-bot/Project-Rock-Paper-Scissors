const startBtn =document.querySelector(`.start`);
startBtn.addEventListener(`click`, game);

function game(){
let playerScore = 0;
let computerScore = 0;
startBtn.remove();

const playerScoreBoard = document.querySelector(`.player-score-counter`);
const computerScoreBoard = document.querySelector(`.computer-score-counter`);
const uiContainer = document.querySelector(`.ui-container`);
const choiceContainer = document.querySelector(`.choices`);
const paragraphContainer = document.querySelector(`.result-paragraph`);
const newParagraph = document.createElement(`p`);
newParagraph.classList.add(`result-paragraph-text`);
paragraphContainer.appendChild(newParagraph);
newParagraph.textContent = `Choose your choice below!`;

const resultParagraph = document.querySelector(`.result`);
resultParagraph.textContent = `Goodluck!`;

const gameoverParagraph = document.querySelector(`.result-paragraph-text`);


const rock = document.querySelector(`#rock`);
const paper = document.querySelector(`#paper`);
const scissor = document.querySelector(`#scissor`);
const playerOptions = [rock,paper,scissor];


playerOptions.forEach( (playerOptions) => {
  playerOptions.addEventListener(`click` , function(){
    const rockLocation = "/giphy-rock.gif";
    const paperLocation = "/paper.gif";
    const scissorLocation = "/scissor.gif";
    function getComputerChoice() {
      const pick = Math.floor(Math.random() * 3);
      choices = ["rock", "paper", "scissor"];
      let computerChoiceImg = choices[pick]+`Location`;
      document.querySelector(`.giphy-embed-computer`).src = eval(computerChoiceImg);
      return choices[pick];
    }
    computerSelection = getComputerChoice();
    playerSelection = this.id;
    let playerChoiceImg = playerSelection+`Location`;
    document.querySelector(`.giphy-embed-player`).src = eval(playerChoiceImg);

    playRound(playerSelection , computerSelection);
    playerScoreBoard.textContent = playerScore;
    computerScoreBoard.textContent = computerScore;
    
    if(playerScore==5 || computerScore==5){
    gameOver(playerScore,computerScore);
    computerScore=0;
    playerScore=0;
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
    resultParagraph.textContent = `You Lose!`;
    gameoverParagraph.textContent = computerSelection.toLowerCase() +` beats ` +playerSelection.toLowerCase() +`.`;
    computerScore++;
  } else {
    resultParagraph.textContent = `You Win!`;
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
  paragraphContainer.remove();
  choiceContainer.remove();
  const createResetBtn = document.createElement(`button`);
  createResetBtn.classList.add(`reset-btn`)
  createResetBtn.textContent=`Reset`;
  uiContainer.appendChild(createResetBtn);

  const resetBtn=document.querySelector(`.reset-btn`);
  resetBtn.addEventListener(`click`,() => {
    location.reload();
    })
 }
}