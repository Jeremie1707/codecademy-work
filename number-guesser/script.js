let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;


// Write your code below:

const generateTarget = () => Math.floor(Math.random() * 9);

const compareGuesses = (human, computer, target) =>
  (Math.abs(target - human) <= Math.abs(target - computer)) ? true : false;

const updateScore = winner => (winner === 'human') ? humanScore += 1 : computerScore += 1;

const advanceRound = () => currentRoundNumber += 1;
