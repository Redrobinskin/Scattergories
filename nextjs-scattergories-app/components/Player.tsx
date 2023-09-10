import React, { useState } from 'react';

interface PlayerProps {
  name: string;
  isAI: boolean;
}

const Player: React.FC<PlayerProps> = ({ name, isAI }) => {
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);

  const addAnswer = (answer: string) => {
    setAnswers([...answers, answer]);
  };

  const calculateScore = () => {
    setScore(answers.length * 10);
  };

  return (
    <div>
      <h2>{name} {isAI && "(AI)"}</h2>
      <p>Score: {score}</p>
      <ul>
        {answers.map((answer, index) => (
          <li key={index}>{answer}</li>
        ))}
      </ul>
    </div>
  );
};

export default Player;