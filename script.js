function game() {
  let computerScore = 0,
    playerScore = 0;
  for (let i = 0; i < 5; i++) {
    c = playRound();
    if (c === 1) {
      computerScore++;
    } else if (c === 2) {
      playerScore++;
    }
  }
  if (playerScore > computerScore) {
    return "You win!";
  } else if (playerScore < computerScore) {
    return "You lose!";
  } else {
    return "Its a Draw";
  }
}

function playRound() {
  let playerSelection = window.prompt(`Input rock , paper , or scissor`);

  function getComputerChoice() {
    const pick = Math.floor(Math.random() * 3);
    if (pick === 3) {
      getComputerChoice();
    }
    choices = ["rock", "paper", "scissor"];
    return choices[pick];
  }
  computerSelection = getComputerChoice();
  console.log("player:" + playerSelection);
  console.log("computer:" + computerSelection);

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
  } else if (
    (playerSelection.toLowerCase() === `paper` &&
      computerSelection.toLowerCase() === `rock`) ||
    (playerSelection.toLowerCase() === `scissor` &&
      computerSelection.toLowerCase() === `paper`) ||
    (playerSelection.toLowerCase() === `rock` &&
      computerSelection.toLowerCase() === `scissor`)
  ) {
    console.log(
      `You Win!, ` +
        playerSelection.toLowerCase() +
        ` beats ` +
        computerSelection.toLowerCase() +
        `.`
    );
    c = 2;
    return c;
  } else {
    console.log(`Wrong input`);
  }
}
console.log(game());
