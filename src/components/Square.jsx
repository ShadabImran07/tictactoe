import React from 'react';

const Square = ({ value, onClick, isWinningSquares }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`square ${isWinningSquares ? 'winning' : ''} ${
        value === 'X' ? 'text-green' : 'text-orange'
      }`}
      style={{ fontWeight: isWinningSquares ? 'bold' : 'normal' }}
    >
      {value}
    </button>
  );
};

export default Square;
