const rollDice = () => Math.floor(Math.random() * 5 + 1);

const displayWinner = (highScore, players) => {
  // get winners
  // console.log(players.map(player => player.children[1].alt));
  // console.log(highScore);
  const winningPlayers = players.filter(
    //alter logic to find the players img child by find indexOf 'img' in their children
    player => player.children[1].alt == highScore
  );
  // console.log(winningPlayers);
  // get winner names
  const winnerNames = winningPlayers.map(
    winningPlayer => winningPlayer.textContent
  );
  // console.log(winnerNames);
  // create div to display winner
  const winnerDisplay = document.createElement("div");
  winnerDisplay.className = "winner";
  winnerDisplay.id = "winner";
  let result = "wins";
  if (winnerNames.length > 1) {
    result = "tie";
  }

  winnerDisplay.innerHTML = `${winnerNames.join(" and ")} ${result}!`;
  document.body.appendChild(winnerDisplay);
};

document.getElementById("banner").addEventListener("click", () => {
  const dice = [...document.getElementsByClassName("dice")];
  const players = [...document.getElementsByClassName("player")];
  document.body.removeChild(document.getElementById("winner"));

  // console.log(dice);

  let i = -1;
  for (let die of dice) {
    const diceRoll = rollDice();
    die.alt = "" + diceRoll;
    // console.log(die);

    switch (diceRoll) {
      case 1:
        die.src = `../dice images/dice1.jpg`;
        break;
      case 2:
        die.src = `../dice images/dice2.jpg`;
        break;
      case 3:
        die.src = `../dice images/dice3.jpg`;
        break;
      case 4:
        die.src = `../dice images/dice4.jpg`;
        break;
      case 5:
        die.src = `../dice images/dice5.jpg`;
        break;
      case 6:
        die.src = `../dice images/dice6.jpg`;
        break;
      default:
        die.src = `../dice images/dice1.jpg`;
    }
    i++;
    // on last iteration
    if (i === dice.length - 1) {
      // find high score
      const highScore = Math.max(...dice.map(die => die.alt));
      // console.log(players);
      displayWinner(highScore, players);
    }
  }

  // find die with top score
  // if the top score has a tie
  // if there is a tie, find all ties with top score, display who tied.
  // if there is no tie, display the winner.

  // console.log(playerScores.indexOf(Math.max(...playerScores)));
});

document.getElementById("addPlayer").addEventListener("click", () => {
  // console.log(document.getElementById("game").children[0]);

  const newDiceNum = document.getElementsByClassName("dice").length + 1;

  const newDiv = document.createElement("div");
  newDiv.className = `column center`;
  newDiv.id = `player${newDiceNum}`;

  const newPlayerName = document.createElement("div");
  newPlayerName.className = "playerName tc";
  newPlayerName.innerText = `Player ${newDiceNum}`;
  console.log(document.getElementsByClassName("dice").length + 1);
  newPlayerName.id = `playerName${newDiceNum}`;

  const newDie = document.createElement("img");
  newDie.className = "dice";
  newDie.id = `die${newDiceNum}`;
  newDie.src = `../dice images/dice${rollDice()}.jpg`;

  document.getElementById("game").length;
  document
    .getElementById("game")
    .appendChild(newDiv)
    .appendChild(newPlayerName);
  document
    .getElementById("game")
    .appendChild(newDiv)
    .appendChild(newDie);
});

document.getElementById("deletePlayer").addEventListener("click", () => {
  const deletedPlayer = window.prompt(
    "Delete which player?",
    `${document.getElementsByClassName("dice").length}`
  );
  if (
    deletedPlayer >= 1 &&
    deletedPlayer <= document.getElementsByClassName("dice").length
  ) {
    document.getElementById(`player${deletedPlayer}`).remove();
  } else {
    window.alert("INVALID SELECTION");
  }
});
