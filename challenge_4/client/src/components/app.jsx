import React, { Component } from "react";
import Board from "./board.jsx";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boardColumn1: ["O", "O", "O", "O", "O", "O"],
      boardColumn2: ["O", "O", "O", "O", "O", "O"],
      boardColumn3: ["O", "O", "O", "O", "O", "O"],
      boardColumn4: ["O", "O", "O", "O", "O", "O"],
      boardColumn5: ["O", "O", "O", "O", "O", "O"],
      boardColumn6: ["O", "O", "O", "O", "O", "O"],
      boardColumn7: ["O", "O", "O", "O", "O", "O"]
    };
  }
  // clickPiece(column) {
  //   for (var i = 6; i >= 0; i--) {
  //     if (this.state.boardState[i].value === 'O')
  //   }
  // }
  render() {
    return (
      <div>
        <h1>Connect Four!</h1>
        <Board
          boardColumns={[
            this.state.boardColumn1,
            this.state.boardColumn2,
            this.state.boardColumn3,
            this.state.boardColumn4,
            this.state.boardColumn5,
            this.state.boardColumn6,
            this.state.boardColumn7
          ]}
        />
      </div>
    );
  }
}
