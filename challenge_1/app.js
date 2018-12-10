var nextPlayer = "X";
var nextPlayerName = "";
var playerOneVictories = 0;
var playerTwoVictories = 0;
var gameBoard = [null, null, null, null, null, null, null, null, null];
var playerOneName = prompt("Please enter Player One's name: ", "Player One");
var playerTwoName = prompt("Please enter Player Two's name: ", "Player Two");
document.getElementById("playerOne").textContent = playerOneName + " (X)";
document.getElementById("playerTwo").textContent = playerTwoName + " (O)";
document.getElementById("nextPlayer").textContent =
  "Next player: " + playerOneName;

let playerOneWin = function() {
  nextPlayerName = playerOneName;
  playerOneVictories++;
  document.getElementById("playerOneWins").textContent = playerOneVictories;
};

let playerTwoWin = function() {
  nextPlayerName = playerTwoName;
  playerTwoVictories++;
  document.getElementById("playerTwoWins").textContent = playerTwoVictories;
};

let clearBoard = winner => {
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].textContent = "";
    gameBoard[i] = null;
  }
  if (winner === "tie") {
    nextPlayer = "X";
    nextPlayerName = playerOneName;
  } else {
    nextPlayer = winner;
    nextPlayer === "X" ? playerOneWin() : playerTwoWin();
  }
};

let toggleBox = e => {
  if (!e.target.textContent) {
    gameBoard[Number(e.target.id)] = nextPlayer;
    e.target.textContent = nextPlayer;
    if (nextPlayer === "X") {
      nextPlayer = "O";
      nextPlayerName = playerTwoName;
    } else {
      nextPlayer = "X";
      nextPlayerName = playerOneName;
    }
    for (var i = 0; i < 3; i++) {
      // Check for horizontal row
      if (
        gameBoard[i * 3] !== null &&
        gameBoard[i * 3] === gameBoard[i * 3 + 1] &&
        gameBoard[i * 3] === gameBoard[i * 3 + 2]
      ) {
        nextPlayerName =
          gameBoard[i * 3] === "X" ? playerOneName : playerTwoName;
        alert(nextPlayerName + " wins!");
        clearBoard(gameBoard[i * 3]);
      }
      // Check for vertical row
      if (
        gameBoard[i] !== null &&
        gameBoard[i] === gameBoard[i + 3] &&
        gameBoard[i] === gameBoard[i + 6]
      ) {
        nextPlayerName = gameBoard[i] === "X" ? playerOneName : playerTwoName;
        alert(nextPlayerName + " wins!");
        clearBoard(gameBoard[i]);
      }
    }
    // Check for diagonal row
    if (
      gameBoard[0] !== null &&
      gameBoard[0] === gameBoard[4] &&
      gameBoard[0] === gameBoard[8]
    ) {
      nextPlayerName = gameBoard[0] === "X" ? playerOneName : playerTwoName;
      alert(nextPlayerName + " wins!");
      clearBoard(gameBoard[0]);
    }
    if (
      gameBoard[2] !== null &&
      gameBoard[2] === gameBoard[4] &&
      gameBoard[2] === gameBoard[6]
    ) {
      nextPlayerName = gameBoard[2] === "X" ? playerOneName : playerTwoName;
      alert(nextPlayerName + " wins!");
      clearBoard(gameBoard[2]);
    }
    if (!gameBoard.includes(null)) {
      alert("Tie!");
      clearBoard("tie");
    }
    document.getElementById("nextPlayer").textContent =
      "Next player: " + nextPlayerName;
  }
};

var boxes = document.getElementsByClassName("box");
console.log(boxes);
for (var i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener("click", toggleBox);
}
