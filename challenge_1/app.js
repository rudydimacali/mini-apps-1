var nextPlayer = "X";
var gameBoard = [];

let toggleBox = e => {
  if (!e.target.textContent) {
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
  console.log("test");
  boxes[i].addEventListener("click", toggleBox);
}
