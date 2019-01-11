const rollDice = () => Math.floor(Math.random() * 5 + 1);

document.getElementById("banner").addEventListener("click", () => {
  const dice = [...document.getElementsByClassName("dice")];

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
      console.log("high score: " + highScore);
      for (die of dice) {
        console.log("array of scores: " + [...dice.map(die => die.alt)]);
        // if multiple dice have high score, then return the id of each die
        //  and display all player names as a tie
        // if only one die has high score, then display that winner
      }
      // create div to display winner
      const winner = document.createElement("div");
      winner.className = "winner";
      winner.id = "winner";
      winner.innerHTML = `We have a winner!`;
      winner.style.visibility = "visible";
      document.body.appendChild(winner);
      // winner.style.marginLeft =
      //   "-" + document.getElementById("winner").offsetWidth / 2;

      // position winner element in center of page
      // find width of winner element after innerHTML is set and set margin-left to negative of half of that value
      console.log(document.getElementById("winner").offsetWidth);
      // returns 0 for some reason

      // console.log([...document.getElementsByTagName("body")][0].children);
      if (dice.filter(die => die.alt === highScore).length > 1) {
      }
    }
  }

  // find die with top score
  // if the top score has a tie
  // if there is a tie, find all ties with top score, display who tied.
  // if there is no tie, display the winner.

  // console.log(playerScores.indexOf(Math.max(...playerScores)));
});

document.getElementById("addPlayer").addEventListener("click", () => {
  console.log(document.getElementById("game").children[0]);

  const newDiceNum = document.getElementsByClassName("dice").length + 1;

  const newDiv = document.createElement("div");
  newDiv.className = `column center`;
  newDiv.id = `die${newDiceNum}Col`;

  const newPlayerName = document.createElement("div");
  newPlayerName.className = "playerName tc";
  newPlayerName.innerText = `Player${newDiceNum}`;
  console.log(document.getElementsByClassName("dice").length + 1);
  newPlayerName.id = `playerName ${newDiceNum}`;

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
    document.getElementById(`die${deletedPlayer}Col`).remove();
  } else {
    window.alert("INVALID SELECTION");
  }
});
