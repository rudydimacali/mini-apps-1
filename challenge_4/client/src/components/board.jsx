import React, { Component } from "react";

class Board extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let boardDisplay = this.props.boardState.map((row, index) => {
      return (
        <tr row={index}>
          {row.map((piece, index) => {
            return (
              <td column={index} onClick={this.props.clickPiece}>
                {piece}
              </td>
            );
          })}
        </tr>
      );
    });

    // for (var j = 5; j >= 0; j--) {
    //   boardDisplay += "<tr>";
    //   for (var i = 0; i < 7; i++) {
    //     boardDisplay += `<td column="${i}" onClick="${this.props.clickPiece}">${
    //       this.props.boardColumns[i][j]
    //     }</td>`;
    //   }
    //   boardDisplay += "</tr>";
    // }

    return <table class="wrapper">{boardDisplay}</table>;
  }
}

export default Board;
