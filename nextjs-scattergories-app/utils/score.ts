```typescript
type Answer = {
  question: string;
  answer: string;
};

export const calculateScore = (answers: Answer[], letter: string): number => {
  let score = 0;

  answers.forEach((answer) => {
    if (answer.answer.startsWith(letter)) {
      score += 10;
    }
  });

  return score;
};
```