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
    };
    this.clickPiece = this.clickPiece.bind(this);
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
