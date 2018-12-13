import React, { Component } from "react";

class Board extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let boardDisplay = "";
    console.log(this.props.boardColumns);
    for (var j = 5; j >= 0; j--) {
      boardDisplay += "<tr>";
      for (var i = 0; i < 7; i++) {
        boardDisplay += `<td column="${i}">${
          this.props.boardColumns[i][j]
        }</td>`;
      }
      boardDisplay += "</tr>";
    }

    return (
      <table
        class="wrapper"
        dangerouslySetInnerHTML={{ __html: boardDisplay }}
      />
    );
  }
}

export default Board;
