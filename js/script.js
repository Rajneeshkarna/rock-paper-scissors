let arr = ['Rock', 'Paper', 'Scissors'];
let computerSelection = arr[Math.floor(Math.random()*3)];
let mySelection = prompt('What would you choose?');
if(computerSelection === 'Rock' && mySelection === 'Rock'){
    console.log("It's a tie.")
}
else if(computerSelection === 'Rock' && mySelection === 'Paper'){
    console.log("Congrats! you won.")
}
else if(computerSelection === 'Rock' && mySelection === 'Scissors'){
    console.log("Alas! you lost.")
}
else if(computerSelection === 'Paper' && mySelection === 'Paper'){
    console.log("It's a tie.")
}
else if(computerSelection === 'Paper' && mySelection === 'Scissors'){
    console.log("Congrats! you won.")
}
else if(computerSelection === 'Scissors' && mySelection === 'Scissors'){
    console.log("It's a tie.")
}
else if(computerSelection === 'Paper' && mySelection === 'Rock'){
    console.log("Alas, you lost.")
}
else if(computerSelection === 'Scissors' && mySelection === 'Rock'){
    console.log("Congrats! You won.")
}
else if(computerSelection === 'Scissors' && mySelection === 'Paper'){
    console.log("Alas! You lost.")
}

console.log(computerSelection);
console.log(mySelection);