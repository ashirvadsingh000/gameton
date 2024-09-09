import React, { useState } from 'react';
import { FaTimes, FaRegCircle } from 'react-icons/fa'; // Import icons for X and O

const Games = () => {
  const [board, setBoard] = useState(Array(9).fill(null)); // Game board
  const [isXNext, setIsXNext] = useState(true); // X starts first
  const winner = calculateWinner(board); // Check for a winner

  const handleClick = (index) => {
    if (board[index] || winner) return; // Prevent click if square is filled or game is won

    const newBoard = [...board];
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    setIsXNext(!isXNext); // Toggle turn
  };

  const renderIcon = (value) => {
    return value === 'X' ? <FaTimes className="text-red-500" /> : <FaRegCircle className="text-blue-500" />;
  };

  const restartGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
  };

  return (
    <div id='Games' className="h-screen flex flex-col items-center justify-center bg-black text-white">
      <h1 className="text-4xl font-bold mb-6">Tic-Tac-Toe</h1>
      <div className="grid grid-cols-3 gap-4">
        {board.map((value, index) => (
          <button
            key={index}
            className="w-24 h-24 bg-white border-2 border-green-500 shadow-md shadow-greenyellow flex items-center justify-center text-5xl "
            onClick={() => handleClick(index)}
          >
            {value && renderIcon(value)}
          </button>
        ))}
      </div>
      <div className="mt-6">
        {winner ? (
          <div className="text-3xl font-bold underline underline-offset-4 text-red-500">
            Winner: <span className="font-bold">{winner}</span>
          </div>
        ) : (
          <div className="text-2xl">
            Next Player: <span className="font-bold">{isXNext ? 'X' : 'O'}</span>
          </div>
        )}
      </div>
      <button
        onClick={restartGame}
        className="mt-6 bg-blue-500 hover:bg-green-700 shadow-md shadow-red-500 text-white font-bold py-2 px-4 rounded"
      >
        Restart Game
      </button>
    </div>
  );
};

// Utility function to check the winner
const calculateWinner = (squares) => {
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
      return squares[a];
    }
  }
  return null;
};

export default Games;
