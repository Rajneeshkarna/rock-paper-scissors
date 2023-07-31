function computerTurn() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random()*choices.length);
    return choices[randomIndex];
}

function userTurn() {
    let userInput = prompt('What would you choose: rock, paper, scissors?');
    return userInput.toLowerCase();
}

function playGame(computerSaid, userSaid){
    if(computerSaid === userSaid){
        return 'It is a tie.';
    }
    else if(
         (computerSaid === 'rock' && userSaid === 'paper')||
         (computerSaid === 'paper' && userSaid === 'scissors')||
         (computerSaid === 'scissors' && userSaid === 'rock') 
        )
    {
        return 'Congrats! you won.';
    }
    else{
        return 'Alas! You lost.';
    }
}

function game(){
    let playerWins = 0;
    let computerWins = 0;
    for(let i = 0; i < 5; i++) {
    let computerSaid = computerTurn();
    let userSaid = userTurn();
    let result = playGame(computerSaid, userSaid);
    console.log(result);
        if(result.includes('Congrats!')){
            playerWins++;
        }
        else if(result.includes('Alas!')){
            computerWins++;
        }
    }
     if (playerWins > computerWins) {
    console.log("You are the ultimate winner!");
  } else if (playerWins < computerWins) {
    console.log("The computer is the ultimate winner!");
  } else {
    console.log("It's a tie! No ultimate winner.");
  }
    
}
game();