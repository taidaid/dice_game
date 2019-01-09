const rollDice = () => Math.floor(Math.random() * 5 + 1);

document.getElementById("banner").addEventListener("click", () => {
  let i = 1;

  for (die of document.getElementsByClassName("dice")) {
    switch (rollDice()) {
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
  }
});

document.getElementById("addPlayer").addEventListener("click", () => {
  console.log(document.getElementById("game").children[0]);

  const newDiceNum = document.getElementsByClassName("dice").length + 1;

  const newDiv = document.createElement("div");
  const newPlayerName = document.createElement("div");
  const newDie = document.createElement("img");
  newDiv.className = `column center`;
  newDiv.id = `die${newDiceNum}Col`;

  newPlayerName.className = "playerName tc";
  newPlayerName.innerText = `Player${newDiceNum}`;
  console.log(document.getElementsByClassName("dice").length + 1);
  newPlayerName.id = `playerName ${newDiceNum}`;

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
