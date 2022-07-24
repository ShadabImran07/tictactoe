import React, { useState } from 'react';
import Board from './components/Board';
import Square from './components/Square';
import { calculateWinner } from './helpers';
import History from './components/History';
import StatusMessage from './components/StatusMessage';

import './styles/root.scss';

const New_Game = [{ board: Array(9).fill(null), isXNext: true }];
const App = () => {
  const [history, setHistory] = useState(New_Game);

  const [currentMove, setCurrentMove] = useState(0);
  const current = history[currentMove];

  const { winner, winningSquares } = calculateWinner(current.board);

  const handleSquareClick = postition => {
    if (current.board[postition] || winner) {
      return;
    }

    setHistory(prev => {
      const last = prev[prev.length - 1];

      const newBoard = last.board.map((Square, pos) => {
        if (pos === postition) {
          return last.isXNext ? 'X' : 'O';
        }
        return Square;
      });
      return prev.concat({ board: newBoard, isXNext: !last.isXNext });
    });

    setCurrentMove(prev => prev + 1);
  };
  const moveTo = move => {
    setCurrentMove(move);
  };
  const onNewGame = () => {
    setHistory(New_Game);
    setCurrentMove(0);
  };
  return (
    <div className="app">
      <h1>TIC TAC TOE </h1>
      <StatusMessage winner={winner} current={current} />
      <Board
        board={current.board}
        handleSquareClick={handleSquareClick}
        winningSquares={winningSquares}
      />
      <button type="button" onClick={onNewGame}>
        Start New Game
      </button>
      <History history={history} moveTo={moveTo} currentMove={currentMove} />
    </div>
  );
};
export default App;
