import React, { useState } from 'react';
import { FaHandRock, FaHandPaper, FaHandScissors } from 'react-icons/fa';

const choices = {
  rock: { name: 'Rock', icon: <FaHandRock className="text-4xl text-red-500" /> },
  paper: { name: 'Paper', icon: <FaHandPaper className="text-4xl text-blue-500" /> },
  scissors: { name: 'Scissors', icon: <FaHandScissors className="text-4xl text-green-500" /> }
};

const getWinner = (playerChoice, computerChoice) => {
  if (playerChoice === computerChoice) return 'Draw';
  if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'scissors' && computerChoice === 'paper') ||
    (playerChoice === 'paper' && computerChoice === 'rock')
  ) {
    return 'Player';
  } else {
    return 'Computer';
  }
};

const Game2 = () => {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState('');

  const handleClick = (choice) => {
    const computerChoice = Object.keys(choices)[Math.floor(Math.random() * 3)];
    setPlayerChoice(choice);
    setComputerChoice(computerChoice);
    setResult(getWinner(choice, computerChoice));
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-black text-white">
      <h1 className="text-4xl font-bold mb-6">Rock, Paper, Scissors</h1>

      <div className="flex space-x-8 mb-8">
        {Object.keys(choices).map((choice) => (
          <button
            key={choice}
            onClick={() => handleClick(choice)}
            className="bg-white p-4  rounded-lg  hover:bg-gray-400 border-green-800 border-2 shadow-md shadow-greenyellow "
          >
            {choices[choice].icon}
            <span className="block mt-2 text-center">{choices[choice].name}</span>
          </button>
        ))}
      </div>

      <div className="text-2xl mb-4">
        {playerChoice && (
          <div>
            You chose: {choices[playerChoice].icon} <span className="font-bold">{choices[playerChoice].name}</span>
          </div>
        )}
        {computerChoice && (
          <div>
            Computer chose: {choices[computerChoice].icon} <span className="font-bold">{choices[computerChoice].name}</span>
          </div>
        )}
      </div>

      {result && (
        <div className={`text-4xl font-bold mb-6 ${result === 'Draw' ? 'text-gray-600' : result === 'Player' ? 'text-green-500' : 'text-red-500'}`}>
          {result === 'Draw' ? 'It’s a Draw!' : `${result} Wins!`}
        </div>
      )}

      <button
        onClick={() => {
          setPlayerChoice(null);
          setComputerChoice(null);
          setResult('');
        }}
        className="bg-blue-500 hover:bg-green-700 shadow-md shadow-red-500 text-white font-bold py-2 px-4 rounded"
      >
        Play Again
      </button>
    </div>
  );
};

export default Game2;
