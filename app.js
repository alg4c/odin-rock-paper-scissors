function game() {
  let score = {
    player: 0,
    computer: 0,
  };
  for (let i = 0; i < 5; i++) {
    let result = playRound();
    if (result == "p") {
      score.player++;
    } else if (result == "c") {
      score.computer++;
    }
    console.log(
      `Player Score: ${score.player} Computer Score ${score.computer}.`
    );
  }
  console.log(
    //declare winner. solution assumes someone will win. (not all draws)
    `Game over. ${score.player > score.computer ? "Player" : "Computer"} wins!`
  );
}

function playRound(player = getPlayerPlay(), computer = getComputerPlay()) {
  let winner;

  console.log(`Player: ${player}, Computer: ${computer}`);
  if (
    (player == "rock" && computer == "scissors") ||
    (player == "paper" && computer == "rock") ||
    (player == "scissors" && computer == "paper")
  ) {
    winner = "p";
    console.log(
      `You Win! ${player.slice(0, 1).toUpperCase() + player.slice(1)} beats ${
        computer.slice(0, 1).toUpperCase() + computer.slice(1)
      }.`
    );
  } else if (player == computer) {
    console.log("This round is a draw.");
  } else {
    winner = "c";
    console.log(
      `You Lose! ${
        computer.slice(0, 1).toUpperCase() + computer.slice(1)
      } beats ${player.slice(0, 1).toUpperCase() + player.slice(1)}.`
    );
  }
  return winner;
}

const playOptions = {
  1: "rock",
  2: "paper",
  3: "scissors",
};

function getComputerPlay() {
  return playOptions[getRandomInt()];
}

function getPlayerPlay(
  player = prompt(
    "Please enter your selection: rock, paper, or scissors"
  ).toLowerCase()
) {
  //validate player move selection
  while (!Object.values(playOptions).includes(player)) {
    player = prompt(
      "Invalid selection. Please enter your selection: rock, paper, or scissors"
    ).toLowerCase();
  }
  return player.toLowerCase();
}

function getRandomInt(min = 1, max = 3) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
