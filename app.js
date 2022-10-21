//DOM queries
const btns = document.querySelectorAll("button");
const text = document.querySelector(".text");
const playerScore = document.querySelector(".playerScore");
const computerScore = document.querySelector(".computerScore");

//set an event listener for click of any button,call play round when button is clicked. Feed playRound button id
btns.forEach((btn) => {
  btn.addEventListener("click", playRound);
});

//function to play a round, called on button click
function playRound() {
  let winner;
  //playerMove move equals the id of the button pressed
  const playerMove = this.id;
  //get computerMove move using random Int
  const computerMove = plays[getRandomInt(3)];
  if (
    (playerMove == "rock" && computerMove == "scissors") ||
    (playerMove == "paper" && computerMove == "rock") ||
    (playerMove == "scissors" && computerMove == "paper")
  ) {
    winner = "p";
    text.textContent = `You Win! ${
      playerMove.slice(0, 1).toUpperCase() + playerMove.slice(1)
    } beats ${computerMove.slice(0, 1).toUpperCase() + computerMove.slice(1)}.`;
  } else if (playerMove == computerMove) {
    text.textContent = "This round is a draw.";
  } else {
    winner = "c";
    text.textContent = `You Lose! ${
      computerMove.slice(0, 1).toUpperCase() + computerMove.slice(1)
    } beats ${playerMove.slice(0, 1).toUpperCase() + playerMove.slice(1)}`;
  }
  switch (winner) {
    case "p":
      playerScore.textContent++;
      if (playerScore.textContent == "5") gameOver(winner);
      break;
    case "c":
      computerScore.textContent++;
      if (computerScore.textContent == "5") gameOver(winner);
      break;
  }
}

function gameOver(winner) {
  winner == "p" ? alert("You Win the Game!") : alert("You Lose the game :(");
  playerScore.textContent = "0";
  computerScore.textContent = "0";
}

//array to hold names of possible plays
const plays = ["rock", "paper", "scissors"];

//helper func to generate random integer between 0 and max (exclusive)
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
