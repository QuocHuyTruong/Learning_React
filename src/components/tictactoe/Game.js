import React, { useReducer, useState } from "react";
import { calculateWinner } from "../../helpers";
import Board from "./Board";
import "./GameStyles.css";

const initialState = {
  board: Array(9).fill(null),
  xIsNext: true,
};

const gameReducer = (state, action) => {
  switch (action.type) {
    case "CLICK": {
      console.log(state, action.payload);
      const { board, xIsNext } = state;
      const { index, winner } = action.payload;
      if (winner || board[index]) return state;
      const nextState = JSON.parse(JSON.stringify(state));
      nextState.board[index] = xIsNext ? "X" : "O";
      nextState.xIsNext = !xIsNext;
      return nextState;
    }
    case "RESET": {
      const nextState = JSON.parse(JSON.stringify(state));
      nextState.board = Array(9).fill(null);
      nextState.xIsNext = true;
      return nextState;
    }

    default:
      break;
  }
  return state;
};
const Game = () => {
  //   const [board, setBoard] = useState(Array(9).fill(null));
  //   const [xIsNext, setXIsNext] = useState(true);

  const [state, dispatch] = useReducer(gameReducer, initialState);
  //   const action = {type:'CLICK', payload:{}}
  //   const [state, setState] = useState({
  //     board: Array(9).fill(null),
  //     xIsNext: true,
  //   });
  const winner = calculateWinner(state.board);
  const hanldClick = (index) => {
    // const boardCopy = [...state.board];
    // if (winner || boardCopy[index]) return;
    dispatch({
      type: "CLICK",
      payload: {
        index,
        winner,
      },
    });
    // boardCopy[index] = state.xIsNext ? "X" : "O";
    // setBoard(boardCopy);
    // setXIsNext(!xIsNext);
    // setState({
    //   ...state,
    //   board: boardCopy,
    //   xIsNext: !state.xIsNext,
    // });
  };
  const handleResetGame = () => {
    // setBoard(Array(9).fill(null));
    // setXIsNext(true);
    dispatch({
      type: "RESET",
    });
  };
  return (
    <div>
      <Board cells={state.board} onClick={hanldClick}></Board>
      {winner && (
        <div className="game-winner">{winner ? `Winner is ${winner}` : ""}</div>
      )}
      <button className="game-reset" onClick={handleResetGame}>
        Reset Game
      </button>
    </div>
  );
};

export default Game;
