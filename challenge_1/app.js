var nextPlayer = "X";
var gameBoard = [null, null, null, null, null, null, null, null, null];

let clearBoard = () => {
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].textContent = "";
    gameBoard[i] = null;
  }
  nextPlayer = "X";
};

let toggleBox = e => {
  if (!e.target.textContent) {
    gameBoard[Number(e.target.id)] = nextPlayer;
    e.target.textContent = nextPlayer;
    if (nextPlayer === "X") {
      nextPlayer = "O";
    } else {
      nextPlayer = "X";
    }
    for (var i = 0; i < 3; i++) {
      // Check for horizontal row
      if (
        gameBoard[i * 3] !== null &&
        gameBoard[i * 3] === gameBoard[i * 3 + 1] &&
        gameBoard[i * 3] === gameBoard[i * 3 + 2]
      ) {
        alert(gameBoard[i * 3] + " wins!");
        clearBoard();
      }
      // Check for vertical row
      if (
        gameBoard[i] !== null &&
        gameBoard[i] === gameBoard[i + 3] &&
        gameBoard[i] === gameBoard[i + 6]
      ) {
        alert(gameBoard[i] + " wins!");
        clearBoard();
      }
    }
    // Check for diagonal row
    if (
      gameBoard[0] !== null &&
      gameBoard[0] === gameBoard[4] &&
      gameBoard[0] === gameBoard[8]
    ) {
      alert(gameBoard[0] + " wins!");
      clearBoard();
    }
    if (
      gameBoard[2] !== null &&
      gameBoard[2] === gameBoard[4] &&
      gameBoard[2] === gameBoard[6]
    ) {
      alert(gameBoard[2] + " wins!");
      clearBoard();
    }
  }
};

var boxes = document.getElementsByClassName("box");
console.log(boxes);
for (var i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener("click", toggleBox);
}
