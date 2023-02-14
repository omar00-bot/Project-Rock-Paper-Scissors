function getComputerChoice(){
    let pick = Math.floor(((Math.random())*3));
    if(pick===3){
        getComputerChoice();
    }
    choices = ["rock","paper","scissor"];
    randomPick = choices[pick];
    return randomPick;
}
getComputerChoice();
console.log(randomPick);
