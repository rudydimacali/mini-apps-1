import React, { Component } from "react";

class Board extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let boardDisplay = "";
    this.props.boardState.forEach(child => {
      boardDisplay += "<tr>";
      child.forEach(element => {
        boardDisplay += `<td>${element}</td>`;
      });
      boardDisplay += "</tr>";
    });
    return (
      <table
        class="wrapper"
        dangerouslySetInnerHTML={{ __html: boardDisplay }}
      />
    );
  }
}

export default Board;
