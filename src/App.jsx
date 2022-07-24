import React, { useState } from 'react';
import Board from './components/Board';
import { calculateWinner } from './helpers';

import './styles/root.scss';
const App = () => {
  const [board, setBoard] = useState(Array(9).fill(null));

  const [isXNext, setIsXNext] = useState(false);
  const winner = calculateWinner(board);
  const message = winner
    ? `Winner is ${winner}`
    : `Next player is ${isXNext ? 'X' : 'O'}`;

  const handleSquareClick = postition => {
    if (board[postition] || winner) {
      return;
    }
    setBoard(prev => {
      return prev.map((Square, pos) => {
        if (pos == postition) {
          return isXNext ? 'X' : 'O';
        }

        return Square;
      });
    });
    setIsXNext(prev => !prev);
  };
  return (
    <div className="app">
      <h1>TIC TAC TOE </h1>
      <p>{message}</p>
      <Board board={board} handleSquareClick={handleSquareClick} />
    </div>
  );
};
export default App;
