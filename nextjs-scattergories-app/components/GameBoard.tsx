import React, { useState, useEffect } from 'react';
import QuestionCard from './QuestionCard';
import Timer from './Timer';
import ScoreBoard from './ScoreBoard';
import Player from './Player';
import AIPlayer from './AIPlayer';
import { generateRandomLetter, generateQuestions } from '../utils/questions';
import { calculateScore } from '../utils/score';

interface GameBoardProps {
  players: Player[];
}

const GameBoard: React.FC<GameBoardProps> = ({ players }) => {
  const [letter, setLetter] = useState<string>('');
  const [questions, setQuestions] = useState<string[]>([]);
  const [scores, setScores] = useState<number[]>([]);

  useEffect(() => {
    setLetter(generateRandomLetter());
    setQuestions(generateQuestions());
  }, []);

  const handleEndGame = () => {
    const newScores = players.map((player, index) => {
      return calculateScore(player.answers, questions, letter);
    });
    setScores(newScores);
  };

  return (
    <div>
      <h1>Scattergories</h1>
      <Timer duration={60} onEnd={handleEndGame} />
      <div>
        {questions.map((question, index) => (
          <QuestionCard key={index} question={question} letter={letter} />
        ))}
      </div>
      <div>
        {players.map((player, index) => (
          index === 0 ? <Player key={index} player={player} /> : <AIPlayer key={index} player={player} />
        ))}
      </div>
      <ScoreBoard scores={scores} />
    </div>
  );
};

export default GameBoard;