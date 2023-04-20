import { useState } from "react";
import React from "react";

function Square({ value, onSquareClick, style }) {
  return (
    <button className="square" onClick={onSquareClick} style={style}>
      {value}
    </button>
  );
}

function Board({ squares, onPlay, xIsNext }) {
  //React에서는 이벤트를 나타내는 prop에는 on[Event] 이름을 사용하고 이벤트를 처리하는 함수 정의에는 handle[Event]를 사용하는 것이 관례입니다.
  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) return;
    const nextSquares = squares.slice(); //handleClick 함수는 JavaScript의 slice() 배열 메서드를 사용하여 squares 배열의 사본(nextSquares)을 생성
    nextSquares[i] = xIsNext ? "X" : "O";
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status;
  console.log(squares);

  if (winner) {
    status = "Winner : " + winner[0];
  } else if (!squares.includes(null)) {
    status = "무승부";
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return (
    <div>
      <div className="status">{status}</div>
      {[1, 2, 3].map((row, rowIdx) => (
        <div key={row + rowIdx * 3} className="board-row">
          {[1, 2, 3].map((x, idx) => (
            <Square
              key={idx + rowIdx * 3}
              value={squares[idx + rowIdx * 3]}
              style={
                winner && winner[1].includes(idx + rowIdx * 3)
                  ? { backgroundColor: "yellow" }
                  : null
              }
              onSquareClick={() => handleClick(idx + rowIdx * 3)}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const currentSquares = history[currentMove];
  const xIsNext = currentMove % 2 === 0;
  const [isAscending, setIsAscending] = useState(true);

  const handlePlay = nextSquares => {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  };

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }
  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = "Go to move #" + move;
    } else {
      description = "Go to gmae start";
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <div className="status">
          당신은 현재 이동 #{currentMove}에 있습니다.
        </div>
        <button onClick={() => setIsAscending(prev => !prev)}>
          {isAscending ? "오름차순" : "내림차순"}
        </button>
        <ol>{isAscending ? moves : moves.reverse()}</ol>
      </div>
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return [squares[a], [a, b, c]];
    }
  }
  return null;
}
