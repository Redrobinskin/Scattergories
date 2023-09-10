```tsx
import React from 'react';

interface QuestionCardProps {
  question: string;
  letter: string;
  handleAnswer: (answer: string) => void;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ question, letter, handleAnswer }) => {
  const [answer, setAnswer] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    handleAnswer(answer);
    setAnswer('');
  };

  return (
    <div>
      <h2>{question} starting with {letter}</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={answer} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default QuestionCard;
```