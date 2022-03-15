import React from "react";
// import { calculateWinner } from "../../helpers";
import Cell from "./Cell";

const Board = (props) => {
  //Array(9).fill()=> [undefined]

  //   const cells = [null, null, null, "X", "X", "X", null, null, null];
  //   console.log(calculateWinner(cells));

  return (
    <div className="game-board">
      {props.cells.map((item, index) => (
        <Cell
          key={index}
          value={item}
          className={item === "X" ? "is-x" : item === "O" ? "is-o" : " "}
          onClick={() => props.onClick(index)}
        ></Cell>
      ))}
    </div>
  );
};

export default Board;
