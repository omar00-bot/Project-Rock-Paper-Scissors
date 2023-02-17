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

    const computerParagraph = document.querySelector(`.paragraph1`);
    const playerParagraph = document.querySelector(`.paragraph2`);
    playerParagraph.textContent = `Player : ` + playerSelection;
    computerParagraph.textContent =  `Computer : ` +computerSelection;

    if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
      console.log(`Its a Draw!`);
      c = 3;
      return c;
    } else if (
      (playerSelection.toLowerCase() === `rock` &&
        computerSelection.toLowerCase() === `paper`) ||
      (playerSelection.toLowerCase() === `paper` &&
        computerSelection.toLowerCase() === `scissor`) ||
      (playerSelection.toLowerCase() === `scissor` &&
        computerSelection.toLowerCase() === `rock`)
    ) {
      console.log(
        `You Lose!, ` +
          computerSelection.toLowerCase() +
          ` beats ` +
          playerSelection.toLowerCase() +
          `.`
      );
      c = 1;
      return c;
    } else {
      console.log(
        `You Win!, ` +
          playerSelection.toLowerCase() +
          ` beats ` +
          computerSelection.toLowerCase() +
          `.`
      );
      c = 2;
      return c;
    }
  })
})
