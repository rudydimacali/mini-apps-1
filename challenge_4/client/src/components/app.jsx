import React, { Component } from "react";
import Board from "./board.jsx";

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
      ]
    };
    this.clickPiece = this.clickPiece.bind(this);
  }
  clickPiece(e) {
    let newBoard = this.state.boardState.slice();
    let column = e.target.getAttribute("column");
    let i = 5;
    debugger;
    if (newBoard[0][column] !== "X") {
      while (newBoard[i][column] === "X") {
        i--;
      }
      newBoard[i][column] = "X";
    }
    console.log(newBoard);
    this.setState({ boardState: newBoard });
  }
  render() {
    return (
      <div>
        <h1>Connect Four!</h1>
        <Board
          boardState={this.state.boardState}
          clickPiece={this.clickPiece}
        />
      </div>
    );
  }
}
