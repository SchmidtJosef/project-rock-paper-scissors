function getComputerChoice() {
    let choice = Math.floor(Math.random()*3);
    if (choice === 0) {
        return 'rock';
    } else if (choice === 1) {
        return 'paper';
    } else if (choice === 2) {
        return 'scissors';
    } else {
        return 'something went wrong';
    }
}

function getHumanChoice() {
    let choice = prompt('Type your choice!').toLowerCase();
    if (choice == 'rock'||choice=='paper'||choice=='scissors') {
        return choice;
    } else {
        alert('Wrong input!');
        getHumanChoice();
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound() {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    if (humanChoice === computerChoice) {
        console.log(`Tie! Both have choosen ${humanChoice}`)
    } else if(humanChoice==='rock'&&computerChoice==='paper'||humanChoice==='paper'&&computerChoice==='scissors'||humanChoice==='scissors'&&computerChoice==='rock') {
        computerScore++;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
    } else if(humanChoice==='rock'&&computerChoice==='scissors'||humanChoice==='paper'&&computerChoice==='rock'||humanChoice==='scissors'&&computerChoice==='paper') {
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}`)
    }
}
  
function playGame() {
    let n = 0;
    for(n=1;n<=5;n++) {
        playRound();
        n = humanScore+computerScore;
    }
    (humanScore>computerScore) ? console.log('You win the game!') : console.log('The computer win the game!')
}

playGame()