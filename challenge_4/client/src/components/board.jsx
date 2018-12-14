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
            if (piece === "O") {
              return (
                <td column={index} onClick={this.props.clickPiece}>
                  {piece}
                </td>
              );
            } else if (piece === "X") {
              return (
                <td class="red" column={index} onClick={this.props.clickPiece}>
                  {piece}
                </td>
              );
            } else if (piece === "Y") {
              return (
                <td
                  class="yellow"
                  column={index}
                  onClick={this.props.clickPiece}
                >
                  {piece}
                </td>
              );
            }
          })}
        </tr>
      );
    });
    return <table class="wrapper">{boardDisplay}</table>;
  }
}

export default Board;
