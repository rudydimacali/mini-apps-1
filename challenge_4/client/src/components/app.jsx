import React, { Component } from "react";
import Board from "./board.jsx";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boardState: [
        [1, 2, 3, 4, 5, 6, 7],
        [11, 12, 13, 14, 15, 16, 17],
        [21, 22, 23, 24, 25, 26, 27],
        [31, 32, 33, 34, 35, 36, 37],
        [41, 42, 43, 44, 45, 46, 47],
        [51, 52, 53, 54, 55, 56, 57]
      ]
    };
  }
  render() {
    return (
      <div>
        <Board boardState={this.state.boardState} />
      </div>
    );
  }
}
