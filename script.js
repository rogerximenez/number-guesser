let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => Math.floor(Math.random() * 10)


// Compares which value is closest to 0 t determine winner
const compareGuesses = (userGuess, computerGuess, targetGuess) => {
    checkValidInput(userGuess)
    let uGuess = getAbsoluteDistance(userGuess, targetGuess)
    let cGuess = getAbsoluteDistance(computerGuess, targetGuess)
    return cGuess >= uGuess ? true : false;
}

// Updates the score for the computer or human
const updateScore = winner => {
    if(winner === 'human') {
        humanScore += 1
    } else if (winner === 'computer') {
        computerScore += 1
    } else {
        console.log("Something went wrong")
    }
}

const advanceRound = () => currentRoundNumber ++

const getAbsoluteDistance = (x, y) => Math.abs(x - y)

const checkValidInput = (x) => {
    if(x > 9 || x < 0) {
        alert("The User's Value is out of the range!")
    }
}