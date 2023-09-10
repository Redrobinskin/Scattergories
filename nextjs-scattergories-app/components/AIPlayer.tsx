import React, { useEffect, useState } from 'react';
import { Question } from '../utils/questions';
import { generateRandomLetter } from '../utils/letters';
import { calculateScore } from '../utils/score';

interface AIPlayerProps {
  questions: Question[];
  onScoreChange: (score: number) => void;
}

const AIPlayer: React.FC<AIPlayerProps> = ({ questions, onScoreChange }) => {
  const [answers, setAnswers] = useState<string[]>([]);
  const [letter, setLetter] = useState<string>('');

  useEffect(() => {
    setLetter(generateRandomLetter());
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      const aiAnswers = questions.map(() => generateAIAnswer());
      setAnswers(aiAnswers);
      const score = calculateScore(aiAnswers);
      onScoreChange(score);
    }, 60000);
    return () => clearTimeout(timer);
  }, [questions, letter]);

  const generateAIAnswer = (): string => {
    // AI logic to generate an answer starting with the given letter
    // This is a placeholder and should be replaced with actual AI logic
    return `${letter}AI Answer`;
  };

  return (
    <div>
      <h2>AI Player</h2>
      <p>Letter: {letter}</p>
      <ul>
        {answers.map((answer, index) => (
          <li key={index}>{answer}</li>
        ))}
      </ul>
    </div>
  );
};

export default AIPlayer;