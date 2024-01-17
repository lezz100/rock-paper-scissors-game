const getUserInput = userInput =>{
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput ==='paper' || userInput ==='scissors'){
        return userInput;
    }else{
        console.log( 'Please enter either rock,paper or scissors only');
}
}
//console.log(getUserChoice('rollsRoyce'));
const getComputerChoice = () =>{
    const randomNumber = Math.floor(Math.random()*3);
    switch (randomNumber){
        case 0:
        return 'rock' ;
        case 1:
        return 'paper'
        case 2:
        return 'scissors'
    }
    };
    /*console.log(getComputerChoice());
    console.log(getComputerChoice());
    console.log(getComputerChoice());
    console.log(getComputerChoice());
    console.log(getComputerChoice());*/
   const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return 'This game is a tie';
    } else if (userChoice === 'rock') {
        return computerChoice === 'paper' ? 'Sorry, computer won!' : 'Congrats, you won!';
    } else if (userChoice === 'paper') {
        return computerChoice === 'scissors' ? 'Sorry, computer won!' : 'Congrats, you won!';
    } else if (userChoice === 'scissors') {
        return computerChoice === 'rock' ? 'Sorry, computer won!' : 'Congrats, you won!';
    }
};
const userChoice = getUserInput('rock');
const computerChoice = getComputerChoice();
console.log('User Choice:', userChoice);
console.log('Computer Choice:', computerChoice);
console.log(determineWinner(userChoice, computerChoice));