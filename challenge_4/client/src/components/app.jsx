import React, { Component } from "react";
import Board from "./board.jsx";
import $ from "jquery";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boardState: [
        ["O", "O", "O", "O", "O", "O", "O"],
        ["O", "O", "O", "O", "O", "O", "O"],
        ["O", "O", "O", "O", "O", "O", "O"],
        ["O", "O", "O", "O", "O", "O", "O"],
        ["O", "O", "O", "O", "O", "O", "O"],
        ["O", "O", "O", "O", "O", "O", "O"]
      ],
      nextPlayer: "X"
      // X is RED, Y is YELLOW
    };
    this.clickPiece = this.clickPiece.bind(this);
    this.checkBoard = this.checkBoard.bind(this);
    this.resetBoard = this.resetBoard.bind(this);
  }
  resetBoard() {
    this.setState({
      boardState: [
        ["O", "O", "O", "O", "O", "O", "O"],
        ["O", "O", "O", "O", "O", "O", "O"],
        ["O", "O", "O", "O", "O", "O", "O"],
        ["O", "O", "O", "O", "O", "O", "O"],
        ["O", "O", "O", "O", "O", "O", "O"],
        ["O", "O", "O", "O", "O", "O", "O"]
      ],
      nextPlayer: "X"
    });
  }
  clickPiece(e) {
    let newBoard = this.state.boardState.slice();
    let nextPlayer = this.state.nextPlayer === "X" ? "Y" : "X";
    let column = e.target.getAttribute("column");
    let i = 5;
    if (newBoard[0][column] === "O") {
      while (newBoard[i][column] === "X" || newBoard[i][column] === "Y") {
        i--;
      }
      newBoard[i][column] = this.state.nextPlayer;
    }
    this.setState({
      boardState: newBoard,
      nextPlayer: nextPlayer
    });
    this.checkBoard(i, Number(column));
  }
  checkBoard(row, column) {
    let currentBoard = this.state.boardState.slice();
    // Check row
    let rowWin = false;
    let winner = "";
    for (var i = 0; i < 4; i++) {
      if (
        currentBoard[row][i] !== "O" &&
        currentBoard[row][i] === currentBoard[row][i + 1] &&
        currentBoard[row][i + 1] === currentBoard[row][i + 2] &&
        currentBoard[row][i + 2] === currentBoard[row][i + 3]
      ) {
        rowWin = true;
        winner = currentBoard[row][i] === "X" ? "Red" : "Yellow";
      }
    }
    if (rowWin) {
      alert(`${winner} wins!`);
      this.resetBoard();
      return;
    }

    // Check column
    let columnWin = false;
    for (var i = 0; i < 3; i++) {
      if (
        currentBoard[i][column] !== "O" &&
        currentBoard[i][column] === currentBoard[i + 1][column] &&
        currentBoard[i + 1][column] === currentBoard[i + 2][column] &&
        currentBoard[i + 2][column] === currentBoard[i + 3][column]
      ) {
        columnWin = true;
        winner = currentBoard[i][column] === "X" ? "Red" : "Yellow";
      }
    }
    if (columnWin) {
      alert(`${winner} wins!`);
      this.resetBoard();
      return;
    }

    // Check diagonals
    let diagonalWin = false;

    // LEFT DIAGONAL CHECK
    let leftDiagonalArray = [];
    let leftStartRow = row;
    let leftStartCol = column;
    while (leftStartRow < 5 && leftStartCol > 0) {
      leftStartRow++;
      leftStartCol--;
    }
    while (leftStartRow >= 0 && leftStartCol < 7) {
      leftDiagonalArray.push(currentBoard[leftStartRow][leftStartCol]);
      leftStartRow--;
      leftStartCol++;
    }
    if (leftDiagonalArray.length >= 4) {
      var i = 0;
      while (i <= leftDiagonalArray.length - 4) {
        if (
          leftDiagonalArray[i] !== "O" &&
          leftDiagonalArray[i] === leftDiagonalArray[i + 1] &&
          leftDiagonalArray[i + 1] === leftDiagonalArray[i + 2] &&
          leftDiagonalArray[i + 2] === leftDiagonalArray[i + 3]
        ) {
          diagonalWin = true;
          winner = leftDiagonalArray[i] === "X" ? "Red" : "Yellow";
        }
        i++;
      }
    }
    if (diagonalWin) {
      alert(`${winner} wins!`);
      this.resetBoard();
      return;
    }

    // RIGHT DIAGONAL CHECK
    let rightDiagonalArray = [];
    let rightStartRow = row;
    let rightStartCol = column;
    while (rightStartRow < 5 && rightStartCol < 6) {
      rightStartRow++;
      rightStartCol++;
    }
    while (rightStartRow >= 0 && rightStartCol >= 0) {
      rightDiagonalArray.push(currentBoard[rightStartRow][rightStartCol]);
      rightStartRow--;
      rightStartCol--;
    }
    if (rightDiagonalArray.length >= 4) {
      var i = 0;
      while (i <= rightDiagonalArray.length - 4) {
        if (
          rightDiagonalArray[i] !== "O" &&
          rightDiagonalArray[i] === rightDiagonalArray[i + 1] &&
          rightDiagonalArray[i + 1] === rightDiagonalArray[i + 2] &&
          rightDiagonalArray[i + 2] === rightDiagonalArray[i + 3]
        ) {
          diagonalWin = true;
          winner = rightDiagonalArray[i] === "X" ? "Red" : "Yellow";
        }
        i++;
      }
    }
    if (diagonalWin) {
      alert(`${winner} wins!`);
      this.resetBoard();
      return;
    }

    // Check for tie
    let rowsComplete = [];
    currentBoard.forEach(row => {
      rowsComplete.push(!row.includes("O"));
    });
    let boardComplete = !rowsComplete.includes(false) ? true : false;
    if (boardComplete) {
      alert("Tie!");
      this.resetBoard();
      return;
    }
  }
  render() {
    return (
      <div>
        <h1>Connect Four!</h1>
        <Board
          boardState={this.state.boardState}
          clickPiece={this.clickPiece}
          nextPlayer={this.state.nextPlayer}
          nextPlayerColor={this.state.nextPlayerColor}
        />
      </div>
    );
  }
}
