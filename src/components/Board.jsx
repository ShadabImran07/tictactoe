import React, { useState } from 'react';
import Square from './Square';

const Board = () => {
  const [board, setBoard] = useState(Array(9).fill(null));

  const [isXNext, setIsXNext] = useState(false);

  const handleSquareClick = postition => {
    if (board[postition]) {
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

  const renderSquare = postition => {
    return (
      <Square
        value={board[postition]}
        onClick={() => handleSquareClick(postition)}
      />
    );
  };
  return (
    <div className="board">
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>

      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>

      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};
export default Board;
