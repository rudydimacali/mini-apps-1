var nextPlayer = "X";
var gameBoard = [null, null, null, null, null, null, null, null, null];

let toggleBox = e => {
  if (!e.target.textContent) {
    gameBoard[Number(e.target.id)] = nextPlayer;
    document.getElementById(e.target.id).textContent = nextPlayer;
    if (nextPlayer === "X") {
      nextPlayer = "O";
    } else {
      nextPlayer = "X";
    }
  }
};

var boxes = document.getElementsByClassName("box");
console.log(boxes);
for (var i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener("click", toggleBox);
}
